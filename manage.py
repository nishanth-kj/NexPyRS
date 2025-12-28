import typer
import subprocess
import shutil
import sys
import os

app = typer.Typer()

def run_cmd(cmd: str, cwd: str = None):
    try:
        typer.secho(f">>> Running: {cmd}", fg=typer.colors.CYAN)
        subprocess.check_call(cmd, shell=True, cwd=cwd)
    except subprocess.CalledProcessError as e:
        typer.secho(f"Error running command: {cmd}", fg=typer.colors.RED)
        sys.exit(e.returncode)

@app.command()
def check():
    """
    Check system requirements (Docker, Node, Rust, UV) and provide install links.
    """
    typer.secho("\n=== System Requirements Check ===\n", fg=typer.colors.CYAN, bold=True)

    checks = {
        "Docker": {"cmd": "docker --version", "url": "https://www.docker.com/products/docker-desktop/"},
        "Node.js": {"cmd": "node --version", "url": "https://nodejs.org/"},
        "Rust": {"cmd": "cargo --version", "url": "https://rustup.rs/"},
        "uv": {"cmd": "uv --version", "url": "https://github.com/astral-sh/uv"},
    }

    all_good = True

    for name, info in checks.items():
        try:
            # Run command, suppress output, just check return code
            subprocess.check_call(info["cmd"], shell=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            typer.secho(f" [OK] {name} is installed.", fg=typer.colors.GREEN)
        except subprocess.CalledProcessError:
            typer.secho(f" [XX] {name} is MISSING!", fg=typer.colors.RED, bold=True)
            typer.echo(f"      -> Install from: {info['url']}")
            all_good = False
        except FileNotFoundError:
             # Should be caught by CalledProcessError for shell=True typically, but just in case
            typer.secho(f" [XX] {name} is MISSING!", fg=typer.colors.RED, bold=True)
            typer.echo(f"      -> Install from: {info['url']}")
            all_good = False

    if not all_good:
        typer.secho("\n[Action Required] Please install the missing tools above.", fg=typer.colors.YELLOW)
        # Note: We can't really "dynamically fetch" specific version download links reliably without complex scraping.
        # Directing to the official landing page is the standard "dynamic" way (user gets latest).
    else:
        typer.secho("\n[Success] All systems go! You are ready to build.", fg=typer.colors.GREEN)

@app.command()
def install():
    """
    Install all dependencies for Python (uv), Node.js (npm), and check Rust.
    """
    # 1. Run Checks first
    check()
    
    # 2. Python (managed by uv itself for this run, but we sync workspace)
    typer.secho("\n1. Syncing Python Workspace (uv)", fg=typer.colors.GREEN)
    run_cmd("uv sync", cwd="api")

    # 3. Node.js
    typer.secho("\n2. Installing Node.js dependencies", fg=typer.colors.GREEN)
    if shutil.which("npm"):
        run_cmd("npm install", cwd="web")
    else:
        typer.secho("npm not found! Frontend setup skipped.", fg=typer.colors.YELLOW)

@app.command()
def setup():
    """
    Interactive setup to customize the project (Ports, Names, Secrets).
    """
    typer.secho("\n=== NexPyRS Dynamic Setup ===\n", fg=typer.colors.CYAN, bold=True)

    # Helper to ask with default
    def p(text, default):
        return typer.prompt(text, default=default)

    config = {
        "PROJECT_NAME": p("Project Name", "NexPyRS"),
        "POSTGRES_USER": p("Database User", "postgres"),
        "POSTGRES_PASSWORD": p("Database Password", "password"),
        "POSTGRES_DB": p("Database Name", "nexpyrs"),
        "PGADMIN_EMAIL": p("PgAdmin Email", "admin@admin.com"),
        "PGADMIN_PASSWORD": p("PgAdmin Password", "admin"),
        "TRAEFIK_PORT": p("Web Port (HTTP)", "80"),
        "TRAEFIK_SECURE_PORT": p("Web Port (HTTPS)", "443"),
        "TRAEFIK_DASHBOARD_PORT": p("Traefik Dashboard Port", "8090"),
        "PGADMIN_PORT": p("PgAdmin Console Port", "8081"),
        "GRPC_PORT": p("gRPC Port", "50051"),
    }

    env_content = ""
    for key, val in config.items():
        env_content += f"{key}={val}\n"

    with open(".env", "w") as f:
        f.write(env_content)

    typer.secho("\n[Success] Configuration saved to .env", fg=typer.colors.GREEN)
    typer.echo("You can now run 'uv run manage.py start' to launch with these settings.")

@app.command()
def start(
    build: bool = typer.Option(False, "--build", help="Force rebuild of Docker containers"),
    detached: bool = typer.Option(True, "--detached", "-d", help="Run in detached mode")
):
    """
    Start the Full Stack Application (Docker).
    """
    if not os.path.exists(".env"):
        typer.secho("[Warning] No .env file found. Running setup first...", fg=typer.colors.YELLOW)
        setup()

    typer.secho("Starting NexPyRS Stack...", fg=typer.colors.MAGENTA)
    
    cmd = "docker-compose up"
    if detached:
        cmd += " -d"
    if build:
        cmd += " --build"
        
    run_cmd(cmd)
    
    # Read ports from .env if possible, else default
    web_port = "80"
    secure_port = "443"
    dash_port = "8090"
    try:
        with open(".env") as f:
            for line in f:
                if line.startswith("TRAEFIK_PORT="):
                    web_port = line.strip().split("=")[1]
                if line.startswith("TRAEFIK_SECURE_PORT="):
                    secure_port = line.strip().split("=")[1]
                if line.startswith("TRAEFIK_DASHBOARD_PORT="):
                    dash_port = line.strip().split("=")[1]
    except:
        pass

    typer.secho("\nServices are running!", fg=typer.colors.GREEN)
    typer.echo(f"Main Entry (HTTP):   http://localhost:{web_port}")
    typer.echo(f"Main Entry (HTTPS):  https://localhost:{secure_port}")
    typer.echo(f"Dashboard:           http://localhost:{dash_port}")

@app.command()
def test():
    """
    Run full stack tests (Frontend Lint/Build + Backend Unit Tests).
    """
    typer.secho("\n=== Running NexPyRS Test Suite ===\n", fg=typer.colors.CYAN, bold=True)
    
    # 1. Frontend Checks
    typer.secho("[1/3] Frontend: Linting...", fg=typer.colors.MAGENTA)
    try:
        run_cmd("npm run lint", cwd="web")
        typer.secho(" [PASS] Linting Clean.", fg=typer.colors.GREEN)
    except SystemExit:
        typer.secho(" [FAIL] Linting Issues Found.", fg=typer.colors.RED)

    typer.secho("\n[2/3] Frontend: Dry-Run Build...", fg=typer.colors.MAGENTA)
    try:
        run_cmd("npm run build", cwd="web")
        typer.secho(" [PASS] Build Successful.", fg=typer.colors.GREEN)
    except SystemExit:
        typer.secho(" [FAIL] Build Failed.", fg=typer.colors.RED)

    # 2. Backend Checks
    typer.secho("\n[3/3] Backend: Unit Tests (pytest)...", fg=typer.colors.MAGENTA)
    try:
        # We assume pytest is installed in the environment
        run_cmd("uv run pytest fastapi/tests", cwd="api")
        typer.secho(" [PASS] Backend Tests Passed.", fg=typer.colors.GREEN)
    except SystemExit:
        typer.secho(" [FAIL] Backend Tests Failed.", fg=typer.colors.RED)

@app.command()
def dev():
    """
    Start local development (Next.js dev server).
    """
    typer.secho("Starting Local Frontend Dev Server...", fg=typer.colors.MAGENTA)
    run_cmd("npm run dev")

if __name__ == "__main__":
    app()
