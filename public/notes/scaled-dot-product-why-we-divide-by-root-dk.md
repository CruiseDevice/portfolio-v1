# Scaled Dot-Product Attention: Why we divide by √d_k

The sum after softmax is always 1 — that never changes. The problem is the shape of the distribution.

When dot products are small, softmax spreads weight across tokens fairly evenly. When dot products get large, softmax shoves almost all the weight onto one token and near-zero onto the rest. The output still sums to 1, but now it looks like `[0, 0, 0.999, 0, 0]`.

**Concrete example:** scores `[1, 2, 3]` → softmax gives `[0.09, 0.24, 0.67]`. Scale those up to `[10, 20, 30]` → softmax gives `[~0, ~0, ~1]`. Same relative ordering, but now it's a near-binary spike.

### Why this kills gradients

The gradient of softmax is `softmax(x) * (1 - softmax(x))`. When a value is near 0 or near 1, that product is near zero. So backprop sends ~0 gradient back, and the model learns nothing. Training stalls.

### Why dot products grow with embedding dimension

A dot product is a sum over all dimensions. More dimensions means more terms being added up, so the raw magnitude grows. Specifically, if the components of **q** and **k** are independent with mean 0 and variance 1, the dot product has variance d_k — so its standard deviation grows as √d_k.

### The fix

Divide by √d_k before softmax:

```
Attention(Q, K, V) = softmax(QKᵀ / √d_k) · V
```

This cancels the magnitude inflation from higher dimensions, keeping scores in a range where softmax stays spread out and gradients stay non-zero.
