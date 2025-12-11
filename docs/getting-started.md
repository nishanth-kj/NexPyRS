# Getting Started

## Prerequisites

Before running NexPyRS, ensure you have the following installed. You can run `uv run manage.py check` to verify these automatically.

*   **Docker Desktop**: Required for container orchestration.
*   **uv**: A fast Python package installer and resolver.

## Quick Installation

We provide a **Master Script** (`manage.py`) to handle everything.

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/NexPyRS.git
    cd NexPyRS
    ```

2.  **Install Dependencies**:
    This will install the necessary local tools and sync the project environment.
    ```bash
    # CMD / PowerShell
    .\nexpyrs.bat install
    
    # or direct
    uv run manage.py install
    ```

3.  **Setup Configuration**:
    Run the interactive setup to define your ports, passwords, and project name.
    ```bash
    .\nexpyrs.bat setup
    ```

4.  **Start the Application**:
    This builds the Docker containers and starts the stack.
    ```bash
    .\nexpyrs.bat start
    ```

The application will be available at:
*   **Frontend**: [http://localhost](http://localhost)
*   **Dashboard**: [http://localhost:8090](http://localhost:8090)

## Desktop Development (Tauri)

To develop the desktop application:

1.  Ensure you have Rust installed.
2.  Run the dev server:
    ```bash
    .\nexpyrs.bat dev
    ```
3.  In a new terminal, run Tauri:
    ```bash
    npm run tauri dev
    ```
