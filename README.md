# 🏥 MED AI - Medical Pathology Q&A System

A full-stack AI-powered medical question-answering system that uses advanced natural language processing to provide accurate answers based on pathology documents. The system combines a powerful FastAPI backend with a modern React frontend to deliver an intuitive chat interface for medical professionals and researchers.

![MED AI Banner](https://img.shields.io/badge/MED%20AI-Pathology%20Assistant-blue?style=for-the-badge)
![Python](https://img.shields.io/badge/Python-3.9+-green?style=flat-square)
![React](https://img.shields.io/badge/React-18.3-blue?style=flat-square)
![FastAPI](https://img.shields.io/badge/FastAPI-Latest-teal?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Development](#development)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

MED AI is an intelligent medical assistant that leverages state-of-the-art AI technologies to answer questions about pathology. It uses:

- **Vector Database (FAISS)** for efficient semantic search across medical documents
- **HuggingFace Embeddings** for converting text into meaningful vector representations
- **Meta's Llama-3-70B** language model via Together.ai for generating accurate, context-aware responses
- **FastAPI** for a high-performance backend API
- **React + TypeScript** for a modern, responsive frontend

## ✨ Features

### 🤖 AI-Powered Responses
- Natural language understanding of medical queries
- Context-aware answers based on pathology documents
- Source citation for transparency and verification

### 💬 Interactive Chat Interface
- Real-time question-answering
- Clean, modern UI with dark mode support
- Mobile-responsive design
- Typing indicators and smooth animations

### 🔍 Advanced Search
- Semantic similarity search using FAISS
- Retrieves top 3 most relevant document chunks
- Efficient vector-based retrieval

### 📚 Source Display
- Shows source material used for answers
- Displays metadata and context
- Helps verify information accuracy

### 🚀 Performance
- Fast response times with optimized embeddings
- Asynchronous API endpoints
- Hot-reload development mode

## 🏗️ Architecture

```
┌─────────────────┐         ┌──────────────────┐         ┌─────────────────┐
│                 │         │                  │         │                 │
│  React Frontend │◄───────►│  FastAPI Backend │◄───────►│  Together.ai    │
│  (Port 8080)    │  HTTP   │  (Port 8000)     │   API   │  Llama-3-70B    │
│                 │         │                  │         │                 │
└─────────────────┘         └──────────────────┘         └─────────────────┘
                                     │
                                     │
                                     ▼
                            ┌─────────────────┐
                            │                 │
                            │  FAISS Vector   │
                            │    Database     │
                            │                 │
                            └─────────────────┘
```

### Data Flow

1. **User Input**: User types a medical question in the frontend
2. **API Request**: Frontend sends POST request to `/ask` endpoint
3. **Vector Search**: Backend performs similarity search in FAISS database
4. **Context Retrieval**: Top 3 relevant document chunks are retrieved
5. **LLM Processing**: Context + question sent to Llama-3-70B model
6. **Response Generation**: AI generates answer based on context
7. **Display**: Answer and sources displayed in the chat interface

## 🛠️ Tech Stack

### Backend (`my proj/`)
- **Framework**: FastAPI
- **Language**: Python 3.9+
- **AI/ML Libraries**:
  - LangChain (orchestration)
  - FAISS (vector database)
  - HuggingFace Transformers (embeddings)
  - Sentence Transformers
- **LLM**: Meta Llama-3-70B via Together.ai
- **Server**: Uvicorn (ASGI)
- **Environment**: python-dotenv

### Frontend (`med-ask-insight/`)
- **Framework**: React 18.3
- **Language**: TypeScript
- **Build Tool**: Vite 5.4
- **UI Library**: shadcn/ui + Radix UI
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Hooks

## 📁 Project Structure

```
main.api.py/
│
├── my proj/                      # Backend Application
│   ├── app.py                    # Main FastAPI application
│   ├── create_database.py        # Script to create FAISS database
│   ├── check_import.py           # Dependency verification
│   ├── document.txt              # Source medical document
│   ├── my_faiss_index/           # FAISS vector database
│   ├── requirements.txt          # Python dependencies
│   ├── .env                      # Environment variables
│   └── venv/                     # Python virtual environment
│
├── med-ask-insight/              # Frontend Application
│   ├── src/
│   │   ├── components/           # React components
│   │   │   ├── ChatInterface.tsx # Main chat UI
│   │   │   ├── Header.tsx        # App header
│   │   │   ├── SourceDisplay.tsx # Source citations
│   │   │   └── ui/               # shadcn/ui components
│   │   ├── lib/
│   │   │   ├── api.ts            # API service layer
│   │   │   ├── config.ts         # Configuration
│   │   │   └── utils.ts          # Utility functions
│   │   ├── pages/
│   │   │   └── Index.tsx         # Main page
│   │   ├── App.tsx               # App component
│   │   ├── main.tsx              # Entry point
│   │   └── index.css             # Global styles
│   ├── public/                   # Static assets
│   ├── package.json              # Node dependencies
│   ├── vite.config.ts            # Vite configuration
│   ├── tailwind.config.ts        # Tailwind configuration
│   └── tsconfig.json             # TypeScript configuration
│
└── README.md                     # This file
```

## 📦 Installation

### Prerequisites

- **Python**: 3.9 or higher
- **Node.js**: 16.x or higher
- **npm**: 8.x or higher
- **Git**: For cloning the repository

### Step 1: Clone the Repository

```bash
git clone <your-repository-url>
cd main.api.py
```

### Step 2: Backend Setup

```bash
# Navigate to backend directory
cd "my proj"

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows (Git Bash):
source venv/Scripts/activate
# On Windows (CMD):
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### Step 3: Frontend Setup

```bash
# Navigate to frontend directory
cd ../med-ask-insight

# Install dependencies
npm install
```

## ⚙️ Configuration

### Backend Configuration

Create a `.env` file in the `my proj/` directory:

```env
# Together.ai API Key (required)
TOGETHER_API_KEY=your_together_ai_api_key_here
```

**Getting a Together.ai API Key:**
1. Visit [Together.ai](https://api.together.xyz/)
2. Sign up for an account
3. Navigate to API Keys section
4. Create a new API key
5. Copy and paste it into your `.env` file

### Frontend Configuration

The frontend is pre-configured to work with the local backend. If you need to change the backend URL, modify `med-ask-insight/vite.config.ts`:

```typescript
proxy: mode === 'development' ? {
  '/api': {
    target: 'http://localhost:8000',  // Change this if needed
    changeOrigin: true,
    secure: false,
    rewrite: (path) => path.replace(/^\/api/, ''),
  }
} : undefined,
```

### FAISS Database Setup

If you need to create or update the FAISS database:

```bash
cd "my proj"
source venv/Scripts/activate
python create_database.py
```

This will:
- Read the `document.txt` file
- Split it into chunks
- Generate embeddings
- Create the FAISS index in `my_faiss_index/`

## 🚀 Usage

### Running the Application

You need to run both the backend and frontend simultaneously.

#### Terminal 1: Start Backend

```bash
cd "my proj"
source venv/Scripts/activate
uvicorn app:app --reload --host 127.0.0.1 --port 8000
```

Expected output:
```
Loading models and database... This may take a moment.
✅ Models and database loaded successfully.
INFO:     Uvicorn running on http://127.0.0.1:8000
INFO:     Application startup complete.
```

#### Terminal 2: Start Frontend

```bash
cd med-ask-insight
npm run dev
```

Expected output:
```
VITE v5.4.10  ready in 429 ms

➜  Local:   http://localhost:8080/
➜  Network: http://10.x.x.x:8080/
```

### Accessing the Application

1. Open your browser and navigate to: **http://localhost:8080**
2. You'll see the MED AI chat interface
3. Type a medical question in the input field
4. Click the send button or press Enter
5. Wait for the AI to process your question
6. View the answer and source citations

### Example Questions

Try asking:
- "What is pathology?"
- "What are the main types of pathology?"
- "Explain the difference between anatomical and clinical pathology"
- "What is histopathology?"
- "What are common pathology techniques?"

## 📖 API Documentation

### Base URL
```
http://localhost:8000
```

### Endpoints

#### POST `/ask`
Ask a question about the pathology document.

**Request Body:**
```json
{
  "question": "What is pathology?"
}
```

**Response:**
```json
{
  "answer": "Pathology is the study of disease...",
  "sources": [
    {
      "content": "Relevant text from document...",
      "metadata": {
        "source": "document.txt",
        "page": 1
      }
    }
  ]
}
```

#### GET `/docs`
Interactive API documentation (Swagger UI)

Visit: http://localhost:8000/docs

#### GET `/redoc`
Alternative API documentation (ReDoc)

Visit: http://localhost:8000/redoc

### CORS Configuration

The backend is configured to accept requests from:
- `http://localhost:8080` (frontend dev server)
- `http://127.0.0.1:8080`
- `http://localhost:5173` (alternative Vite port)
- All origins (`*`) in development mode

## 🔧 Development

### Backend Development

The backend uses `--reload` flag for hot-reloading. Any changes to `app.py` will automatically restart the server.

**Adding new endpoints:**
```python
@app.post("/new-endpoint")
async def new_endpoint(data: YourModel):
    # Your logic here
    return {"result": "success"}
```

**Modifying the AI prompt:**
Edit the prompt in `app.py` around line 55:
```python
prompt = f"""Your custom prompt here...

<context>
{context}
</context>

Question: {question}"""
```

### Frontend Development

The frontend uses Vite's hot module replacement (HMR) for instant updates.

**Adding new components:**
```bash
cd med-ask-insight/src/components
# Create your component file
```

**Modifying the API service:**
Edit `src/lib/api.ts` to add new API methods:
```typescript
static async newMethod(data: RequestType): Promise<ResponseType> {
  return this.makeRequest<ResponseType>('/endpoint', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
}
```

### Building for Production

#### Backend
```bash
cd "my proj"
# No build step needed - Python runs directly
# For deployment, use a production ASGI server
```

#### Frontend
```bash
cd med-ask-insight
npm run build
```

This creates an optimized production build in `dist/` directory.

## 🌐 Deployment

### Backend Deployment Options

1. **Render.com** (Recommended)
   - Create a new Web Service
   - Connect your repository
   - Set build command: `pip install -r requirements.txt`
   - Set start command: `uvicorn app:app --host 0.0.0.0 --port $PORT`
   - Add environment variable: `TOGETHER_API_KEY`

2. **Railway.app**
   - Similar setup to Render
   - Automatic deployments from Git

3. **AWS EC2**
   - Install Python and dependencies
   - Use systemd or supervisor to manage the process
   - Configure nginx as reverse proxy

### Frontend Deployment Options

1. **Vercel** (Recommended)
   - Connect your repository
   - Set root directory to `med-ask-insight`
   - Add environment variable: `VITE_BACKEND_URL=your-backend-url`
   - Auto-deploys on push

2. **Netlify**
   - Similar to Vercel
   - Configure build settings

3. **Static Hosting**
   - Build: `npm run build`
   - Upload `dist/` folder to any static host

### Environment Variables for Production

**Backend:**
```env
TOGETHER_API_KEY=your_production_api_key
```

**Frontend:**
```env
VITE_BACKEND_URL=https://your-backend-url.com
```

## 🐛 Troubleshooting

### Backend Issues

**Problem: "FAISS database not found"**
```bash
# Solution: Create the database
cd "my proj"
python create_database.py
```

**Problem: "TOGETHER_API_KEY not found"**
```bash
# Solution: Create .env file with your API key
echo "TOGETHER_API_KEY=your_key_here" > .env
```

**Problem: "Module not found" errors**
```bash
# Solution: Reinstall dependencies
pip install -r requirements.txt
```

### Frontend Issues

**Problem: "Connection refused" or proxy errors**
- Ensure backend is running on port 8000
- Check `vite.config.ts` proxy settings
- Verify CORS is enabled in backend

**Problem: "Module not found" in frontend**
```bash
# Solution: Reinstall node modules
rm -rf node_modules package-lock.json
npm install
```

**Problem: Frontend shows mock responses**
- This means the backend is not reachable
- Check backend is running: `http://localhost:8000/docs`
- Verify proxy configuration in `vite.config.ts`

### Common Issues

**Port already in use:**
```bash
# Find and kill process on port 8000 (backend)
# Windows:
netstat -ano | findstr :8000
taskkill /PID <PID> /F

# macOS/Linux:
lsof -ti:8000 | xargs kill -9
```

**Slow response times:**
- First request loads the AI model (takes 10-30 seconds)
- Subsequent requests are much faster
- Consider using a GPU-enabled deployment for production

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Style

- **Backend**: Follow PEP 8 guidelines
- **Frontend**: Use ESLint configuration provided
- Write meaningful commit messages
- Add comments for complex logic

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Together.ai** for providing access to Llama-3-70B
- **HuggingFace** for embeddings and transformers
- **Meta AI** for the Llama model
- **shadcn/ui** for beautiful UI components
- **FastAPI** team for the excellent framework

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Troubleshooting](#troubleshooting) section
2. Review the [API Documentation](#api-documentation)
3. Open an issue on GitHub
4. Contact the maintainers

## 🔮 Future Enhancements

- [ ] Multi-document support
- [ ] User authentication
- [ ] Conversation history
- [ ] Export chat transcripts
- [ ] Support for images and diagrams
- [ ] Fine-tuned medical model
- [ ] Real-time collaboration
- [ ] Mobile app version

---

**Built with ❤️ for the medical community**

*Last Updated: December 2025*
