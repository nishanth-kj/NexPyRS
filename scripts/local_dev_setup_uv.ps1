# NexPyRS Local Development Setup with UV (Workspace)
# This script sets up the unified Workspace environment using uv.

Write-Host "Setting up NexPyRS Workspace with 'uv'..." -ForegroundColor Cyan

# 1. Install uv if not present
if (-not (Get-Command "uv" -ErrorAction SilentlyContinue)) {
    Write-Host "Installing 'uv'..." -ForegroundColor Yellow
    powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path","User") + ";" + [System.Environment]::GetEnvironmentVariable("Path","Machine")
}

# 2. Sync Workspace
Write-Host "Syncing Workspace dependencies..." -ForegroundColor Yellow
# 'uv sync' in the root will create .venv and install all members (api, grpcsvc)
uv sync

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n[Success] Workspace is ready!" -ForegroundColor Green
    Write-Host "Interpreter: $(Get-Location)\.venv\Scripts\python.exe" -ForegroundColor Gray
} else {
    Write-Error "`n[Error] uv sync failed."
}
