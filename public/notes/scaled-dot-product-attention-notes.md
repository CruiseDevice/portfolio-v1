# Scaled Dot-Product Attention

> From my study of *Build a Large Language Model (From Scratch)* by Sebastian Raschka.

---

## The Formula

$$\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$

---

## The Pipeline

| Step | Operation | Output |
|------|-----------|--------|
| 1 | $QK^T$ | Attention scores (raw logits) |
| 2 | $\div \sqrt{d_k}$ | Scaled attention scores |
| 3 | softmax | Attention weights (sum to 1) |
| 4 | $\times V$ | Final attention output |

---

## Why Scale by $\sqrt{d_k}$?

As $d_k$ grows, the dot products $QK^T$ tend to grow large in magnitude, pushing softmax into a saturated region with very small gradients. Dividing by $\sqrt{d_k}$ stabilizes this.

**Intuition:** If query and key vectors have unit-variance components, their dot product has variance $d_k$. Dividing by $\sqrt{d_k}$ brings the variance back to 1.

---

## In Code

```python
attention_weights = torch.softmax(
    attention_score / keys.shape[-1] ** 0.5, dim=-1
)
```

This single line does two things:
1. **Scales** the attention scores by $\sqrt{d_k}$ (`keys.shape[-1] ** 0.5`)
2. **Normalizes** via softmax along `dim=-1` so weights for each query token sum to 1 across all key tokens

---

## Causal (Masked) Attention

In decoder-style transformers, tokens should only attend to past tokens — not future ones. Two approaches achieve this:

### Approach 1 — Mask After Softmax

```
scores → softmax → weights → zero out upper triangle → renormalize (divide by row sum)
```

- Zero out weights above the diagonal (future positions)
- Weights no longer sum to 1, so renormalize by dividing each row by its sum
- No need to re-apply softmax — values are already positive, just need rescaling

### Approach 2 — Mask Before Softmax (Standard)

```
scores → fill upper triangle with -inf → softmax → weights
```

```python
scores.masked_fill(mask == 0, float('-inf'))
attention_weights = torch.softmax(scores / keys.shape[-1] ** 0.5, dim=-1)
```

- $e^{-\infty} = 0$, so masked positions naturally become 0 after softmax
- Remaining weights already sum to 1 — no renormalization needed
- **Preferred in practice** — cleaner and more numerically stable

---

## Key Takeaways

- The dot product $QK^T$ measures similarity between query and key vectors — high dot product = high relevance
- Scaling before softmax is critical for training stability
- The `-inf` masking trick is elegant: math and numerical practicality align perfectly
- This masking pattern appears throughout transformer codebases
