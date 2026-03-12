# PITS - Personalized Intelligent Tutoring System

An AI-powered tutoring system that creates customized learning experiences based on your uploaded materials. The system processes your documents, generates a structured course with slides and narration, and provides an interactive chatbot that answers questions about the material.

## Overview

PITS (Personalized Intelligent Tutoring System) leverages AI to transform any study material into an interactive learning experience. Upload your documents, and PITS will create a personalized course with AI-generated slides, quizzes, and a tutoring chatbot that understands the context of your learning material.

## Key Features

- **Personalized Learning** - Adapts to your knowledge level and learning goals
- **Document Processing** - Upload and process your own study materials in various formats (PDFs, Word documents, text files)
- **Interactive Quizzes** - Assess your knowledge with AI-generated quizzes
- **Structured Course Material** - Automatically generates slides with key bullet points
- **AI Tutor** - Chat with a personalized tutor that understands the context of your learning material
- **Session Management** - Resume your learning sessions whenever you want

## How It Works

1. **Onboarding** - Tell PITS your name, what you want to study, and your learning goals
2. **Upload Materials** - Provide your study documents (PDFs, Word documents, text files)
3. **Assessment** - Take a quiz to assess your current knowledge level or select it manually
4. **Learning** - Navigate through AI-generated slides with an interactive chatbot to answer your questions
5. **Progress Tracking** - Your learning sessions are saved so you can continue where you left off

## Technical Architecture

PITS leverages several key technologies:

- **LlamaIndex** - For document ingestion, knowledge extraction, and querying
- **OpenAI GPT-4** - Powers the conversational tutoring interface
- **Streamlit** - Provides the web-based user interface
- **Vector and Tree Indexes** - Enable efficient knowledge retrieval from your documents

## Installation

### Prerequisites

- Python 3.9+
- OpenAI API key

### Setup

```bash
# Clone the repository
git clone https://github.com/CruiseDevice/pits.git
cd pits

# Install dependencies
pip install -r requirements.txt

# Create necessary folders
mkdir -p cache index_storage ingestion_storage session_data

# Run the application
streamlit run app.py
```

## Technologies Used

- Python 3.9+
- LlamaIndex
- OpenAI GPT-4
- Streamlit
- Vector/Tree Indexes for knowledge retrieval

## Links

- [GitHub Repository](https://github.com/CruiseDevice/pits)
