# Understanding Dropout in Attention Mechanisms

> Notes from reading **"Build a Large Language Model From Scratch"** by Sebastian Raschka
> Chapter 3: Coding Attention Mechanisms — Section 3.5.2: Masking Additional Attention Weights with Dropout

---

## What is Dropout?

Dropout is a **regularization technique** used during training where each element in a tensor is independently zeroed out with a probability `p` (the dropout rate). It prevents the model from over-relying on specific neurons, forcing it to learn more distributed, robust representations.

---

## How It Actually Works

When you apply a dropout rate of `p = 0.5` to a matrix, it does **not** guarantee that exactly 50% of elements will be zeroed out. Instead:

- Each element independently has a **50% chance of being dropped** (like a coin flip)
- The expected number of zeros is 50%, but the actual count will vary per run

### Example from the book

Applying `nn.Dropout(0.5)` to a 6×6 tensor of 1s:

```python
import torch

torch.manual_seed(123)
dropout = torch.nn.Dropout(0.5)
example = torch.ones(6, 6)
print(dropout(example))
```

```
tensor([[2., 2., 0., 2., 2., 0.],
        [0., 0., 0., 2., 0., 2.],
        [2., 2., 2., 2., 0., 2.],
        [0., 2., 2., 0., 0., 2.],
        [0., 2., 0., 2., 0., 2.],
        [0., 2., 2., 2., 2., 0.]])
```

The matrix has 36 elements. Despite a 50% rate, **21 elements survived** (not exactly 18). This is expected — dropout is probabilistic, not deterministic.

---

## The Scaling Factor: `1 / (1 - p)`

Notice that all surviving elements are `2.0`, not `1.0`. PyTorch automatically rescales surviving values by:

$$\text{scale} = \frac{1}{1 - p}$$

For `p = 0.5`:

$$\frac{1}{1 - 0.5} = \frac{1}{0.5} = 2$$

### Why this scaling?

Without scaling, the expected value of an element `x` after dropout would shrink:

$$\mathbb{E}[\text{output}] = p \cdot 0 + (1 - p) \cdot x = (1 - p) \cdot x$$

By multiplying surviving elements by `1 / (1 - p)`, the expected value is restored:

$$(1 - p) \cdot x \cdot \frac{1}{1-p} = x$$

This technique is called **inverted dropout** and is the standard implementation in PyTorch.

---

## Scaling Factor at Different Dropout Rates

| Dropout Rate `p` | `1 - p` | Scale Factor `1 / (1 - p)` |
|:---:|:---:|:---:|
| 0.1 | 0.9 | ~1.11 |
| 0.3 | 0.7 | ~1.43 |
| 0.5 | 0.5 | 2.0 |
| 0.7 | 0.3 | ~3.33 |
| 0.9 | 0.1 | 10.0 |

The higher the dropout rate, the more aggressively surviving elements are scaled up to compensate.

---

## Effect of Dropout Rate on Learning

| Rate | Effect |
|:---|:---|
| Too low (0.1–0.2) | Model can still overfit; neurons aren't challenged enough |
| Sweet spot (0.3–0.5) | Forces redundant representations; good regularization |
| Too high (0.8–0.9) | Signal too sparse; model struggles to learn meaningful patterns |
| Extremely high (0.99) | Effectively no learning at all |

> **Note:** In transformers specifically (like GPT), dropout rates of **0.1–0.2** are most common in practice. The 0.5 used in Raschka's example is chosen to make the effect clearly visible.

---

## Key Takeaway

Dropout is only active during **training**. At inference time it is turned off entirely — all neurons participate. This means:

- During training: noisy, regularized forward passes
- During inference: the full, deterministic model

The scaling factor ensures that even though training and inference behave differently, the **expected magnitude of activations remains consistent** across both phases.

---