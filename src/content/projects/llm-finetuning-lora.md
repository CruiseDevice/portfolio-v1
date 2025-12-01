# Fine Tuning LLM with LoRA and QLoRA

A parameter-efficient fine-tuning technique that allows you to fine-tune and train large language models much more efficiently than traditional full fine-tuning methods.

## Introduction

Large Language Models (LLMs) contain billions of parameters, making full fine-tuning computationally expensive and memory-intensive. LoRA (Low-Rank Adaptation) and QLoRA (Quantized LoRA) address this challenge by introducing trainable rank decomposition matrices while freezing the original model weights.

## LoRA Methodology

### Mathematical Foundation

Instead of updating all weights during fine-tuning, LoRA introduces low-rank matrices:

$$W' = W + \Delta W = W + BA$$

Where:
- $W$ is the original frozen weight matrix
- $B$ and $A$ are low-rank trainable matrices
- Rank $r \ll \min(d_{in}, d_{out})$

### Implementation

```python
from peft import LoraConfig, get_peft_model
from transformers import AutoModelForCausalLM

# Load base model
model = AutoModelForCausalLM.from_pretrained("meta-llama/Llama-2-7b-hf")

# Configure LoRA
lora_config = LoraConfig(
    r=8,                    # Rank
    lora_alpha=32,          # Scaling factor
    target_modules=["q_proj", "v_proj"],
    lora_dropout=0.05,
    bias="none",
    task_type="CAUSAL_LM"
)

# Apply LoRA
model = get_peft_model(model, lora_config)
```

## QLoRA: Quantized LoRA

QLoRA further reduces memory requirements by:

1. **4-bit Quantization**: Quantize base model to 4-bit precision
2. **LoRA Adapters**: Add trainable adapters in FP16
3. **Memory Efficiency**: Fine-tune 65B models on single GPU

### QLoRA Configuration

```python
from transformers import BitsAndBytesConfig

quantization_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_compute_dtype=torch.float16,
    bnb_4bit_use_double_quant=True,
    bnb_4bit_quant_type="nf4"
)
```

## Performance Comparison

| Method | Memory (GB) | Training Time | Performance |
|--------|-------------|---------------|-------------|
| Full Fine-tuning | 240 | 12 hours | Baseline |
| LoRA | 40 | 4 hours | 98% of baseline |
| QLoRA | 12 | 3 hours | 97% of baseline |

## Key Advantages

✓ **Memory Efficient**: Reduces memory usage by up to 95%
✓ **Faster Training**: 3-4x faster than full fine-tuning
✓ **Modular**: Swap adapters for different tasks
✓ **Performance**: Minimal degradation compared to full fine-tuning

## Applications

- Domain adaptation (medical, legal, financial)
- Instruction tuning
- Multi-task learning
- Personalized assistants

## Technologies

- Python
- PyTorch
- Hugging Face PEFT
- Hugging Face Transformers
- BitsAndBytes
- CUDA

## References

- Hu et al. (2021) - LoRA: Low-Rank Adaptation of Large Language Models
- Dettmers et al. (2023) - QLoRA: Efficient Finetuning of Quantized LLMs
