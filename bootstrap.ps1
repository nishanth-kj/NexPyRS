# NexPyRS Master Installer & Runner
$ErrorActionPreference = "Stop"

Write-Host "=== NexPyRS All-in-One Installer ===" -ForegroundColor Cyan

# --- 1. Locate or Install UV ---
$userProfile = $env:USERPROFILE
$uvPaths = @(
    "$userProfile\.cargo\bin\uv.exe",
    "$env:LOCALAPPDATA\uv\uv.exe",
    "$userProfile\.local\bin\uv.exe"
)

$uvExe = ""
foreach ($path in $uvPaths) {
    if (Test-Path $path) {
        $uvExe = $path
        break
    }
}

if (-not $uvExe) {
    Write-Host "[1/4] 'uv' not found. Installing..." -ForegroundColor Yellow
    try {
        powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
    } catch {
        Write-Error "Failed to install uv."
        exit 1
    }
    # Re-check paths
    foreach ($path in $uvPaths) {
        if (Test-Path $path) {
            $uvExe = $path
            break
        }
    }
    if (-not $uvExe) {
        Write-Error "Installed uv but cannot locate it. Restart terminal."
        exit 1
    }
}
Write-Host "[1/4] Using uv: $uvExe" -ForegroundColor Green

# --- 2. Install Project Dependencies ---
Write-Host "`n[2/4] Installing Project Dependencies (Python & Node)..." -ForegroundColor Cyan
try {
    # Sync Python environment first so manage.py has deps
    & $uvExe sync
    
    # Run the full install command via manage.py
    & $uvExe run manage.py install
} catch {
    Write-Error "Dependency installation failed."
    exit 1
}

# --- 3. Setup Configuration ---
Write-Host "`n[3/4] Configuring Environment..." -ForegroundColor Cyan
if (-not (Test-Path ".env")) {
    & $uvExe run manage.py setup
} else {
    Write-Host "Found existing .env, skipping setup." -ForegroundColor Gray
}

# --- 4. Start Application ---
Write-Host "`n[4/4] Starting Application..." -ForegroundColor Cyan
& $uvExe run manage.py start

Write-Host "`n[Success] NexPyRS is running!" -ForegroundColor Green
