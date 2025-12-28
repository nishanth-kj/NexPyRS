# NexPyRS Unified API Layer

This directory contains the backend services for the NexPyRS application, managed as a unified Python workspace using `uv`.

## 📂 Structure

- **`fastapi/`**: The main high-performance API service (FastAPI).
- **`django/`**: The structured application backend (Django).
- **`main.py`**: Unified entry point for running services.
- **`pyproject.toml`**: Workspace configuration defining dependencies and members.

## 🚀 Getting Started

### Prerequisites

Ensure you have [uv](https://github.com/astral-sh/uv) installed.

### Setup

Initialize the environment and install dependencies:

```bash
# From the api/ directory
uv sync
```

This will create a `.venv` directory with all necessary dependencies for both FastAPI and Django services.

## 🏃 Running Services

We provide a unified `main.py` script to launch services easily.

### Start FastAPI

Run the FastAPI server (default: http://localhost:8000):

```bash
uv run main.py fastapi
```

**Options:**
- `--port`: Set custom port (default: 8000)
- `--host`: Set host (default: 0.0.0.0)
- `--reload`: Enable auto-reload (default: True)

### Start Django

Run the Django development server (default: http://localhost:8001):

```bash
uv run main.py django
```

**Options:**
- `--port`: Set custom port (default: 8001)
- `--host`: Set host (default: 0.0.0.0)

## 🛠️ Development

- **FastAPI**: Located in `fastapi/`. Standard FastAPI structure.
- **Django**: Located in `django/`. Standard Django project structure.
- **Tests**: Run `uv run pytest fastapi/tests` (adjust path as needed).
