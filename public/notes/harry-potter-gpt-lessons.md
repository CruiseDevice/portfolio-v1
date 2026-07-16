# What I Learned Training a GPT From Scratch on Harry Potter

I spent a day taking a from-scratch decoder-only Transformer — the kind you build following Karpathy's "Let's build GPT" — from a character-level Shakespeare toy up to a ~12M-parameter model trained on all seven Harry Potter books. The architecture barely changed the whole time. Almost every real improvement came from somewhere else entirely.

Here's what actually moved the needle, roughly in order of how much it mattered.

## 1. The tokenizer is a preprocessing concern — but pick the right one

The Transformer is completely agnostic to how text becomes token IDs. I went character-level → BPE subword, and the `GPTLanguageModel` code didn't change by a single line.

The non-obvious part: a plain BPE tokenizer *shatters words on decode*. `faithful` tokenizes to `['fa','ith','ful']`, and a naive decoder prints it back as `fa ith ful`. The fix is **byte-level BPE** (what GPT-2 uses): bake the leading space into each token as a `Ġ` marker, so `decode()` reassembles words automatically. One line of pre-tokenizer config, night-and-day output readability.

## 2. You can't compare losses across tokenizers

A character-level model reports loss per *character*; a BPE model reports loss per *subword* (roughly three characters each). Identical underlying quality, wildly different numbers. The only fair metric is **bits-per-character (BPC)**:

```python
tokens_per_char = len(encode(text)) / len(text)
bpc = loss * tokens_per_char / math.log(2)
```

Measured in BPC, the char-level model (~2.1) and the BPE model could finally be compared honestly.

## 3. Small data overfits the moment you look away

On ~345k Shakespeare tokens, a 10M-parameter model memorized the training set within a few thousand steps — train loss → 0.12, validation loss climbing *past* its random-init value. The fixes were mundane but essential: weight decay, a touch more dropout, a lower learning rate, and — most importantly — **saving the checkpoint with the best validation loss** instead of the last one. Early stopping isn't optional on small datasets.

## 4. Your validation set can lie to you

This was the day's biggest lesson. Switching to Harry Potter, I used the dataset's provided train/validation/test splits and got a beautiful **1.53 BPC** on validation. Then I scored the held-out test set: **2.03 BPC**. A 0.5 gap, out of nowhere.

The reason: the dataset was split **contiguously by book**. Training was books 1–5, validation was book 6 (*Half-Blood Prince* — a natural continuation, so it looked easy), and test was book 7 (*Deathly Hallows* — the trio on the run, Horcruxes, a flood of vocabulary the model had never seen). My validation set was measuring a different, *easier* distribution than my test set.

The fix: pool every line from all seven books, **shuffle**, and re-split. After that, validation and test agreed within 0.004 BPC — and the honest number was ~1.56, not 1.53.

> If your data has any natural ordering — time, book, user — a contiguous split will leak structure and lie to you. Shuffle first, always.

## 5. Bigger isn't better past the data ceiling

Emboldened, I scaled the model from 12M → 30M parameters (bigger embeddings, more layers, doubled the context window to 512, vocab 2000 → 4000). I expected a nice drop in BPC.

It didn't come. The 30M model hit the **exact same 1.56 BPC** — and overfit harder and sooner (best checkpoint at step 2750 instead of 5000, train loss collapsing to 0.59 while validation climbed). The bottleneck was never the model. It was the ~2 million training tokens.

With fixed data, there's an optimal model size, and I'd already found it at 12M. This is the Chinchilla scaling intuition — but felt in your own loss curve instead of read off a paper.

## The takeaway

For a fixed dataset, the order of leverage was:

1. **Splits** — the lying validation set was a 0.5-BPC illusion
2. **Tokenization** — byte-level BPE; the right unit of text
3. **Evaluation metric** — BPC, so comparisons are honest
4. **Regularization + early stopping** — don't ship a memorized model
5. **Model size** — last, and past a point, useless

The architecture never changed. The final model — ~12M parameters, ~1.56 BPC, validation within noise of test — is nothing special on its own. But the path to it is where all the actual machine learning happened.
