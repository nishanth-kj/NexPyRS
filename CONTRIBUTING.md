# Contributing to NexPyRS

Thank you for your interest in contributing to NexPyRS! We welcome contributions from everyone.

## Getting Started

1.  **Fork** the repository on GitHub.
2.  **Clone** your fork locally.
3.  Run the **Installer** to set up your environment:
    ```bash
    # Windows
    .\install.ps1
    ```
4.  Create a **new branch** for your feature or bugfix.

## Development Workflow

*   **Frontend**: Located in `frontend/`. Run `npm run dev` locally (requires Backend running) or use Docker.
*   **API (FastAPI)**: Located in `api/`.
*   **Rust Service**: Located in `rustsvc/`.
*   **gRPC Service**: Located in `grpcsvc/`.

## Pull Request Process

1.  Ensure all services build correctly: `docker-compose build`.
2.  Run the smoke tests: see `.github/workflows/ci.yml` for commands.
3.  Submit a Pull Request with a clear description of your changes.

## Code Style

*   **Python**: Follow PEP 8.
*   **Rust**: Run `cargo fmt`.
*   **JavaScript/TypeScript**: Use standard Next.js conventions.

Happy Coding!
