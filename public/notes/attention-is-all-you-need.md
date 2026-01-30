# Understanding Attention in Transformers

This note explores the groundbreaking paper "Attention Is All You Need" by Vaswani et al., which introduced the transformer architecture that has become the foundation of modern large language models.

## Key Insights

### The Core Innovation

The transformer architecture eliminates the need for recurrent or convolutional layers entirely, relying instead on **self-attention mechanisms** to draw global dependencies between input and output.

> "The Transformer, a model architecture eschewing recurrence and instead relying entirely on an attention mechanism to draw global dependencies between input and output."

### Self-Attention Mechanism

Self-attention allows the model to weigh the importance of different words in a sequence when processing a particular word. This is done through three key components:

1. **Query (Q)**: What the current token is looking for
2. **Key (K)**: What each token offers
3. **Value (V)**: The actual information content

The attention score is computed as:

$$ \text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V $$

### Multi-Head Attention

Instead of performing a single attention function, the transformer uses multiple "heads" that allow the model to attend to different representation subspaces simultaneously:

$$ \text{MultiHead}(Q, K, V) = \text{Concat}(\text{head}_1, ..., \text{head}_h)W^O $$

Where each head is:

$$ \text{head}_i = \text{Attention}(QW_i^Q, KW_i^K, VW_i^V) $$

## Positional Encoding

Since attention has no inherent sense of order, positional encodings are added to inject information about the relative or absolute position of tokens:

$$ PE_{(pos, 2i)} = \sin(pos / 10000^{2i/d_{\text{model}}}) $$

$$ PE_{(pos, 2i+1)} = \cos(pos / 10000^{2i/d_{\text{model}}}) $$

## Architecture Components

### Encoder-Decoder Structure

| Component | Purpose |
|-----------|---------|
| Encoder | Processes input sequence and creates representations |
| Decoder | Generates output sequence auto-regressively |
| Multi-Head Attention | Captures different aspects of relationships |
| Feed-Forward Networks | Transforms attention output |
| Layer Normalization | Stabilizes training |
| Residual Connections | Enables gradient flow |

### Key Design Choices

- Used **layer normalization** instead of batch normalization
- Applied residual connections around each sub-layer
- Scaled dot-product attention for computational efficiency
- Learned positional encodings (fixed sinusoidal also worked)

## Why It Matters

1. **Parallelization**: Unlike RNNs, transformers process entire sequences in parallel
2. **Long-range Dependencies**: Path length between positions is O(1) rather than O(n)
3. **Scalability**: Architecture scales well with model size and data
4. **Foundation**: Became the basis for BERT, GPT, T5, and virtually all modern LLMs

## Personal Observations

The elegance of this paper lies in its simplicity. By removing recurrence and using only attention, they solved several problems at once:

- Vanishing gradients (shorter paths)
- Parallel computation (no sequential dependencies)
- Long-range dependencies (direct connections between any positions)

## Questions to Explore

- How does the choice of number of attention heads affect performance?
- What are the trade-offs between different positional encoding schemes?
- How can attention be made more efficient for very long sequences?

## Related Notes

- [[llm-system-design]] - How modern LLMs build on transformers
- [[encoder-decoder]] - Comparison with traditional seq2seq models
