# Repo Flattener

A Python package to convert repositories into flattened files for easier uploading to Large Language Models (LLMs).

## Overview

When working with LLMs, sharing entire codebases can be challenging. Repo Flattener solves this by converting a repository's structure into flattened files with path information, making it easy to share code context with AI assistants.

## Installation

```bash
pip install repo-flattener
```

## Key Features

- **Flattens repository structure** - Creates single files with path information
- **Manifest generation** - Shows the original repository structure
- **Interactive mode** - Selectively choose which files to process
- **Dry-run mode** - Preview what would be processed without making changes
- **Parallel processing** - Faster performance on large repositories
- **Intelligent caching** - Instant manifest generation on unchanged repos
- **Security features** - Path traversal protection, symlink handling, resource limits
- **Memory optimization** - Configurable file size limits
- **Configuration file support** - `.repo-flattener.yml` for default settings

## Usage Examples

### Command Line

```bash
# Basic usage
repo-flattener /path/to/repository

# Interactive mode - select files interactively
repo-flattener /path/to/repository --interactive

# Dry run - preview without processing
repo-flattener /path/to/repository --dry-run

# Parallel processing with 4 workers
repo-flattener /path/to/repository --workers 4

# Show detailed file type statistics
repo-flattener /path/to/repository --stats
```

### Python API

```python
from repo_flattener import export

# Simple usage
count, skipped, manifest = export('/path/to/repository', 'output')
print(f"Processed {count} files, skipped {skipped}")

# With options
count, skipped, manifest = export(
    '/path/to/repository',
    output_dir='flattened_files',
    ignore_dirs=['build', 'dist'],
    max_workers=4
)
```

## Output

The tool creates:
1. **Flattened files** - Named according to their original path
2. **Manifest file** - `file_manifest.txt` showing the original structure

## Technologies Used

- Python 3.8+
- Type-safe with full type hints
- Published on PyPI
- MIT License

## Links

- [GitHub Repository](https://github.com/CruiseDevice/repo_flattener)
- [PyPI Package](https://pypi.org/project/repo-flattener/)
