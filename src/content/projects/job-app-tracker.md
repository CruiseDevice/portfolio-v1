# Smart Job Application Tracker

An intelligent job application tracking system that automatically monitors your email for job-related communications and extracts application details using AI. Built with FastAPI backend and React frontend.

## Overview

Job hunting involves managing multiple applications across different companies. This project automates the tedious process of tracking job applications by monitoring your inbox and using AI to extract relevant details from job-related emails.

## Key Features

- **AI-Powered Email Analysis** - Automatically detects and extracts job application details from emails
- **Email Monitoring** - Real-time IMAP monitoring of your inbox for job-related emails
- **Real-time Updates** - WebSocket integration for live data synchronization
- **Application Management** - Track applications with status updates and filtering
- **Quick Actions** - Easy controls for monitoring and data management

## How It Works

1. **Email Monitoring** - The system connects to your email via IMAP and monitors for new messages
2. **AI Analysis** - When job-related emails are detected, OpenAI analyzes the content to extract:
   - Company name
   - Position title
   - Application status
   - Job posting URLs
   - Contact information
3. **Data Storage** - Extracted information is stored in SQLite database
4. **Real-time Updates** - WebSocket connections keep the frontend synchronized with new data
5. **Application Management** - Manage applications through the web interface with real-time updates

## Tech Stack

### Backend
- **FastAPI** - Modern Python web framework
- **SQLAlchemy** - Database ORM
- **OpenAI API** - Email content analysis and job detail extraction
- **WebSockets** - Real-time communication
- **IMAP** - Email monitoring
- **SQLite** - Database storage

### Frontend
- **React 19** - Modern UI framework
- **TypeScript** - Type-safe development
- **Redux Toolkit** - State management
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast build tool

## Architecture

```
job_application_tracker/
├── backend/
│   ├── api/routes/          # API endpoints
│   ├── agent/               # Email monitoring and processing
│   ├── config/              # Application configuration
│   ├── database/            # Database models and management
│   ├── services/            # WebSocket and other services
│   └── main.py              # Application entry point
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── services/        # API client services
│   │   ├── store/           # Redux store and slices
│   │   └── types/           # TypeScript type definitions
│   └── package.json
└── README.md
```

## API Endpoints

- `GET /api/applications/` - List all job applications
- `GET /api/statistics/` - Get application statistics
- `POST /api/monitor/start` - Start email monitoring
- `POST /api/monitor/stop` - Stop email monitoring
- `GET /api/monitor/status` - Get monitoring status
- `WebSocket /ws` - Real-time updates

## Technologies Used

- Python 3.11+
- Node.js 18+
- FastAPI
- React 19
- TypeScript
- OpenAI API
- SQLite

## Links

- [GitHub Repository](https://github.com/CruiseDevice/job_app_tracker)
