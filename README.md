# NexPyRS

A fully working monorepo with Next.js, FastAPI, Rust (Actix), Python gRPC, PostgreSQL, and basic CI.

## Quickstart

### Quickstart (Dynamic Setup)

This project uses a dynamic installer that allows you to customize ports, database credentials, and project names.

**Prerequisites**:
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [uv](https://github.com/astral-sh/uv) (The script can attempt to install it, but pre-installing is recommended)

**Installation**:
0.  **Check Requirements**:
    ```bash
    uv run manage.py check
    ```

1.  **Install Dependencies**:
    ```bash
    uv run manage.py install
    ```

2.  **Configure & Start**:
    ```bash
    # Interactive setup (will prompt for ports/names)
    uv run manage.py setup

    # Start the stack
    uv run manage.py start
    ```

### One-Click Launchers (Default Settings)
If you prefer defaults, you can use the legacy scripts:
**Windows**: `.\start.bat`
**Linux/Mac**: `./start.sh`

### Full Reinstall (Uninstall & Fresh Install)
If you want to wipe the Docker containers/volumes and rebuild everything from scratch (using **uv** for Python builds):

**Windows**: `.\reinstall.ps1`
**Linux/Mac**: `./reinstall.sh`

### Local Development (Python with uv)
To set up your local Python environment for intellisense/testing using `uv`:

**Windows**: `.\local_dev_setup_uv.ps1`

### Desktop Development (Tauri)
This project uses **Rust** and **Tauri**. We have provided a script to verify you have the best tools (`rustup`) installed and to set up the dependencies.

**Windows**:
```powershell
.\setup_desktop.ps1
```

**Linux / Mac**:
```bash
./setup_desktop.sh
```

After running the setup, you can launch the app:
```bash
cd frontend
npm run tauri dev
```

### Manual Setup

1.  **Environment Setup**:
    ```bash
    cp .env.example .env
    ```

2.  **Start Services**:
    ```bash
    docker-compose up --build -d
    ```

3.  **Access Endpoints**:
    *   **Frontend**: [http://localhost](http://localhost)
    *   **FastAPI Health**: [http://localhost/api/health](http://localhost/api/health)
    *   **GraphQL Playground**: [http://localhost/graphql](http://localhost/graphql)
    *   **Rust Health**: [http://localhost/rust/health](http://localhost/rust/health)
    *   **pgAdmin**: [http://localhost:8081](http://localhost:8081)
    *   **Traefik Dashboard**: [http://localhost:8090](http://localhost:8090)

## Development Notes

### Traffic Management (Traefik)
We now use **Traefik** as the reverse proxy instead of Nginx.
- Traefik listens on port `80` and routes traffic based on URL paths (`/api`, `/rust`, `/`) to the appropriate containers via Docker labels.
- The Traefik Dashboard is available at port `8090`.

### Python Services
We use `uv` for package management in the Docker builds for faster install times.
- `api/`
- `grpcsvc/`

### gRPC Support
The `grpcsvc` runs on port 50051. 
Envoy proxies gRPC-Web traffic from `http://localhost:8080` (mapped internally) which Nginx can route or you can hit directly if exposed.
In this setup, Envoy is at `envoy:8080`.

### Troubleshooting
- **Database Connection**: If `api` fails to connect, give `db` a few seconds to initialize. Docker Compose `depends_on` starts containers but doesn't wait for DB readiness.
- **Ports**: Ensure ports 80, 3000, 8000, 8001, 8081, 50051 are free.

## CI/CD
A GitHub Actions workflow is included in `.github/workflows/ci.yml`. It builds images and runs smoke tests.
