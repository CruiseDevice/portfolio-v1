# Multi-Head Attention
*LLM From Scratch — Sebastian Raschka*

---

## Key Concepts

### d_in and d_out
- `d_in` — size of each token's input embedding vector. If each token is represented as `[0.2, -0.1, 0.7]`, then `d_in=3`.
- `d_out` — number of dimensions each attention head projects down to. Controls the size of the output context vector per head.

---

## 3.6.1 MultiHeadAttentionWrapper — Stacking Single Heads

The wrapper approach runs multiple independent `CausalAttention` heads sequentially and concatenates their outputs.

```python
class MultiHeadAttentionWrapper(nn.Module):
    def __init__(self, d_in, d_out, context_length, dropout, num_heads, qkv_bias=False):
        super().__init__()
        self.heads = nn.ModuleList(
            [CausalAttention(d_in, d_out, context_length, dropout, qkv_bias)
             for _ in range(num_heads)]
        )

    def forward(self, x):
        return torch.cat([head(x) for head in self.heads], dim=-1)
```

**Output size:** `d_out * num_heads`. With `d_out=2, num_heads=2` → 4-dimensional context vector.

```
         Input token x  (d_in = 3 dims)
               /                \
              /                  \
        Head 1                 Head 2
CausalAttention(d_in=3, d_out=2)   CausalAttention(d_in=3, d_out=2)
  own W_Q, W_K, W_V                  own W_Q, W_K, W_V
        |                                  |
  Output of Head 1               Output of Head 2
  2-dim vector [a, b]            2-dim vector [c, d]
              \                       /
               \                     /
            torch.cat(..., dim=-1)
            concatenate on last dim
                      |
        Final context vector: [a, b, c, d]  →  4-dim
                  d_out × num_heads = 2 × 2 = 4
```

**Limitation:** Heads run sequentially via list comprehension — not efficient.

---

## Batching Inputs

```python
batch = torch.stack((inputs, inputs), dim=0)
```

- `inputs` shape: `(6, 3)` — 6 tokens, 3 dims each
- `batch` shape: `(2, 6, 3)` — 2 samples, each being the same sequence
- Used purely for pedagogical purposes to simulate a real batch

---

## The Causal Mask

```python
self.register_buffer(
    "mask",
    torch.triu(torch.ones(context_length, context_length), diagonal=1)
)
```

- `torch.ones(6, 6)` creates all 1s
- `torch.triu(..., diagonal=1)` zeroes out the diagonal and below, keeping only the upper triangle

Result for 6 tokens:
```
[[0, 1, 1, 1, 1, 1],
 [0, 0, 1, 1, 1, 1],
 [0, 0, 0, 1, 1, 1],
 [0, 0, 0, 0, 1, 1],
 [0, 0, 0, 0, 0, 1],
 [0, 0, 0, 0, 0, 0]]
```

- `1` = block this position (future token)
- `0` = allow this position (current or past token)
- The mask is `6×6` because attention scores are `tokens × tokens`, not related to `d_in`

---

## 3.6.2 MultiHeadAttention — Efficient Weight Splits

Instead of separate weight matrices per head, one big shared matrix is used and split after projection.

### The Assert

```python
assert (d_out % num_heads == 0), "d_out must be divisible by num_heads"
```

Because `d_out` gets split evenly into `num_heads` chunks:
- `d_out=4, num_heads=2` → each head gets `4//2 = 2` dims ✓
- `d_out=5, num_heads=2` → can't split evenly ✗

```python
self.head_dim = d_out // num_heads
```

> **Key difference from wrapper:** In the wrapper `d_out` meant *per-head* output size. In `MultiHeadAttention`, `d_out` is the *total* output size, and each head gets `d_out // num_heads` dims internally.

---

## Shape Journey Through the Forward Pass

Starting shapes (with `d_in=3, d_out=4, num_heads=2, batch=2, tokens=6`):

### Step 1 — Linear projections
```
x             →  (2, 6, 3)
W_key         →  (3, 4)
keys          →  (2, 6, 4)   # batch, tokens, d_out
queries       →  (2, 6, 4)
values        →  (2, 6, 4)
```

### Step 2 — .view() to split by heads
```python
keys = keys.view(batch, num_tokens, self.num_heads, self.head_dim)
```
```
(2, 6, 4)  →  (2, 6, 2, 2)
               batch, tokens, num_heads, head_dim
```
No data is moved — just a different way of indexing the same memory. The flat `d_out=4` is reinterpreted as `num_heads=2` × `head_dim=2`.

### Step 3 — .transpose(1, 2) to bring heads forward
```python
keys = keys.transpose(1, 2)
```
```
(2, 6, 2, 2)  →  (2, 2, 6, 2)
                   batch, num_heads, tokens, head_dim
```
Now each head has its own `(6, 2)` slice — 6 tokens, 2 dims each. Indexing: `keys[0, 0, :, :]` = batch 0, head 1.

### Step 4 — Attention scores
```python
attention_scores = queries @ keys.transpose(2, 3)
```
- `keys.transpose(2, 3)` flips last two dims: `(2, 2, 6, 2)` → `(2, 2, 2, 6)`
- Matrix multiply: `(2, 2, 6, 2) @ (2, 2, 2, 6)` → `(2, 2, 6, 6)`
- Each head has its own independent `6×6` score matrix
- Total of 4 matrices in output: `2 batches × 2 heads`

### Step 5 — Apply causal mask
```python
mask_bool = self.mask.bool()[:num_tokens, :num_tokens]
attention_scores.masked_fill_(mask_bool, -torch.inf)
```
- `.bool()` converts 0/1 floats to False/True
- `masked_fill_` writes `-inf` wherever `True` (future positions)
- `-inf` becomes exactly `0.0` after softmax, blocking future tokens

### Step 6 — Softmax to get attention weights
```python
attention_weights = torch.softmax(attention_scores / keys.shape[-1] ** 0.5, dim=-1)
```
- Dividing by `sqrt(head_dim)` stabilises gradients (scaled dot-product attention)
- Softmax converts scores to probabilities that sum to 1 per row
- Shape remains `(2, 2, 6, 6)`

### Step 7 — Weighted sum with values
```python
context_vectors = attention_weights @ values
```
- `(2, 2, 6, 6) @ (2, 2, 6, 2)` → `(2, 2, 6, 2)`
- Each token's output = weighted sum of all value vectors
- `token_i_output = sum(attention_weight[i,j] * value[j] for all j)`

### Step 8 — Transpose and reshape back
```python
context_vectors = context_vectors.transpose(1, 2)           # (2, 6, 2, 2)
context_vectors = context_vectors.contiguous().view(batch, num_tokens, self.d_out)  # (2, 6, 4)
```
Concatenates head 1's 2 dims and head 2's 2 dims for each token → final 4-dim context vector per token.

---

## Wrapper vs Efficient — What's the Difference?

| | MultiHeadAttentionWrapper | MultiHeadAttention |
|---|---|---|
| Weight matrices | Separate per head | One big shared matrix, split after |
| Head execution | Sequential (list comprehension) | Parallel (single matmul) |
| `d_out` meaning | Per-head output size | Total output size |
| Math | Identical | Identical |

---

## Exercise 3.3 — Initializing GPT-2 Size Attention Module

GPT-2 small specs:
- `context_length = 1024`
- `d_in = d_out = 768` (embedding size)
- `num_heads = 12`

```python
torch.manual_seed(123)

context_length = 1024
d_in, d_out = 768, 768

mha = MultiHeadAttention(
    d_in, d_out, context_length, dropout=0.0, num_heads=12
)
```

Sanity check:
```
d_out % num_heads == 0
768 % 12 == 0  ✓

head_dim = 768 // 12 = 64 dims per head
```

Each of the 12 heads works with a 64-dimensional slice of the 768-dimensional space. 64 dims per head is a common sweet spot across many transformer models balancing expressiveness and computational cost.

To test with a properly sized input:
```python
batch_size = 2
batch_gpt2 = torch.randn(batch_size, context_length, d_in)
output = mha(batch_gpt2)
print(output.shape)  # (2, 1024, 768)
```

> Note: your existing `batch` has `d_in=3` so it will fail with this module — you need a `d_in=768` input.

---

## Why Multi-Head Attention?

- More total dimensions = more expressive capacity
- But the real power is **diversity** — each head learns to attend to different aspects of the input simultaneously
- One head might learn syntax, another semantics, another coreference
- The context vector is not human-interpretable — it's a learned compressed representation optimised end-to-end for the task

---

## Output Context Vectors

Each token's final context vector is a **weighted mixture of other tokens' value vectors** — a rich summary of that token in the context of its neighbours. The numbers only have meaning relative to the weight matrices that come after them in the network.
