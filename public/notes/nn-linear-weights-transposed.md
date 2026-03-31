# Why nn.Linear Stores Weights Transposed (And Why It Bit Me)

While implementing a self-attention module from scratch, I hit something that looked like a bug but turned out to be a deliberate PyTorch design choice — and once I understood it, a lot of things clicked.

---

## The Setup

I had two implementations of the same self-attention mechanism:

- **v1** — hand-rolled, using raw `nn.Parameter` to store the weight matrices
- **v2** — cleaner version, using `nn.Linear` layers

Same logic, same math. But when I ran both with identical inputs, they gave different outputs. Not because the implementations were wrong — just because the weights were randomly initialized differently.

So I thought: if I copy the weights from v2 into v1, they should produce the same outputs. Simple.

Except it wasn't.

---

## The Catch

In v1, the weight matrices are declared like this:

```python
self.W_query = nn.Parameter(torch.rand(d_in, d_out))
```

Shape: `(d_in, d_out)`. Makes sense — each row is an input dimension, each column is an output dimension.

But when I checked `nn.Linear`'s weight in v2:

```python
sa_v2.W_q.weight.shape  # → (d_out, d_in)
```

It's flipped. PyTorch stores `nn.Linear` weights as `(d_out, d_in)` — the transpose of what you'd intuitively expect.

This is intentional. Internally, `nn.Linear` computes `x @ W.T + b`, so storing it transposed is a memory layout optimization. But it means if you ever try to move weights between a raw `nn.Parameter` and an `nn.Linear`, you'll get a shape mismatch — or worse, a silent wrong answer if the dimensions happen to be square.

---

## The Fix

```python
with torch.no_grad():
    sa_v1.W_query = nn.Parameter(sa_v2.W_q.weight.T)
    sa_v1.W_key   = nn.Parameter(sa_v2.W_k.weight.T)
    sa_v1.W_value = nn.Parameter(sa_v2.W_v.weight.T)
```

Transpose the weight from v2, wrap it in `nn.Parameter`, and assign it directly. Now both modules share the same values in the orientation each expects, and their outputs match exactly.

---

## What I Actually Took Away

**Always check `.weight.shape` before assuming.** The shape of `nn.Linear`'s weight is not what the constructor signature implies — `nn.Linear(d_in, d_out)` stores a `(d_out, d_in)` tensor, not `(d_in, d_out)`.

**`nn.Parameter` is just a wrapper.** It doesn't care how the tensor was created — `torch.rand(3, 2)` or `.weight.T` both work, as long as the shape lines up with how you use it in the forward pass.

**This matters beyond toy examples.** Loading pretrained weights into a custom architecture, porting models between frameworks, or debugging shape errors in attention layers — this transposition trips people up constantly. Now I know to check for it first.

---

*Part of my notes from working through [LLMs from Scratch](https://github.com/rasbt/LLMs-from-scratch) by Sebastian Raschka.*
