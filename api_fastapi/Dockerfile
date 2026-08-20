FROM python:3.12-slim

WORKDIR /app

# Install uv
COPY --from=ghcr.io/astral-sh/uv:latest /uv /bin/uv

# Copy pyproject.toml
COPY pyproject.toml .

# Install dependencies using uv
ENV UV_SYSTEM_PYTHON=1
RUN uv pip install --system fastapi uvicorn[standard] sqlalchemy psycopg2-binary

# Copy the FastAPI application code
COPY api_fastapi/ ./api_fastapi/

WORKDIR /app/api_fastapi

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
