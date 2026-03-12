# PDF to Podcast

Convert PDF documents to podcast audio using AI. Transform any PDF into listenable content with natural-sounding narration.

## Overview

PDF to Podcast is a full-stack application that leverages AI to convert written documents into audio podcasts. Simply upload a PDF, and the system will process it and generate a podcast-style audio file that you can listen to on the go.

## Key Features

- **PDF Parsing** — Extract text content from PDF documents
- **AI Content Processing** — Transform and optimize content for audio format
- **Text-to-Speech** — Generate natural-sounding audio narration
- **Podcast Format** — Output in standard podcast audio formats

## Project Structure

```
pdf_to_podcast/
├── backend/           # FastAPI backend
│   ├── app/
│   │   ├── routers/   # API endpoints
│   │   ├── services/  # Business logic
│   │   └── utils/     # Helper functions
│   ├── tests/         # Test files
│   └── requirements.txt
├── frontend/          # Next.js frontend
└── docker-compose.yml
```

## Quick Start

### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Using Docker

```bash
docker-compose up
```

## API Documentation

Once the backend is running, visit http://localhost:8000/docs for interactive API documentation.

## Technologies Used

### Backend
- **FastAPI** — Modern Python web framework
- **Python** — Core backend language

### Frontend
- **Next.js** — React framework for production
- **TypeScript** — Type-safe development

### Infrastructure
- **Docker** — Containerization

## Links

- [GitHub Repository](https://github.com/CruiseDevice/pdf-to-podcast)
