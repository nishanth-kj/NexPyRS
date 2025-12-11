# Development Guide

This guide covers how to develop individual components of the NexPyRS stack locally.

## Development Workflows

### 1. Frontend Development (Next.js)

To work on the UI without spinning up the entire Docker stack:

```bash
# Start the local dev server with HMR (Hot Module Replacement)
.\nexpyrs.bat dev
# or
npm run dev
```

*   **URL**: [http://localhost:3000](http://localhost:3000)
*   **API Proxy**: requests to `/api` typically fail unless the backend is running. You can run `.\nexpyrs.bat start` in the background or mock responses.

### 2. Backend Development (FastAPI)

To iterate on the Python API:

1.  **Sync Environment**:
    ```bash
    uv sync
    ```
2.  **Activate Virtualenv**:
    ```bash
    .venv\Scripts\activate
    ```
3.  **Run with Reload**:
    ```bash
    uv run uvicorn api.app.main:app --reload --port 8000
    ```

### 3. Rust Service

To work on the Rust microservice:

```bash
cd rustsvc
cargo run
```

### 4. Database Management

When running the full stack (`.\nexpyrs.bat start`), you can access the database via **pgAdmin**:

*   **URL**: [http://localhost:8081](http://localhost:8081)
*   **Login**: (Default) `admin@admin.com` / `admin`
*   **Register Server**:
    *   Host: `db`
    *   Username: `postgres`
    *   Password: `password`

## Debugging

*   **Logs**: `docker-compose logs -f [service_name]`
*   **Shell Access**: `docker-compose exec [service_name] /bin/bash`
