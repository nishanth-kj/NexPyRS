import uvicorn
import typer
import os
import sys
import subprocess

app = typer.Typer()

@app.command()
def fastapi(
    port: int = 8000,
    host: str = "0.0.0.0",
    reload: bool = True
):
    """
    Start the FastAPI Backend.
    """
    # Ensure api/fastapi_app is in the path or handled correctly
    # We are generating the app string assuming we are in 'api' folder
    # and valid module path is 'fastapi_app.main:app' (folder is named fastapi_app)
    
    print(f"Starting FastAPI on {host}:{port} (Reload: {reload})...")
    uvicorn.run(
        "fastapi_app.main:app",
        host=host, 
        port=port, 
        reload=reload,
        log_level="info"
    )

@app.command()
def django(
    port: int = 8001,
    host: str = "0.0.0.0"
):
    """
    Start the Django Backend.
    """
    print(f"Starting Django on {host}:{port}...")
    
    # Run from inside the django directory using the current venv python
    django_dir = os.path.join(os.getcwd(), "django_app")
    cmd = [sys.executable, "manage.py", "runserver", f"{host}:{port}"]
    
    subprocess.run(cmd, cwd=django_dir)

if __name__ == "__main__":
    app()
