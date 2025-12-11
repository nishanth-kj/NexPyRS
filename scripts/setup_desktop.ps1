# NexPyRS Desktop Development Setup (Tauri & Rust)
# This script ensures you have the "Best" tools installed for local development.

Write-Host "Checking Desktop Development Prerequisites..." -ForegroundColor Cyan

# 1. Check Node.js (Required for Frontend/Tauri CLI)
if (Get-Command "node" -ErrorAction SilentlyContinue) {
    $nodeVer = node -v
    Write-Host " [OK] Node.js is installed ($nodeVer)" -ForegroundColor Green
} else {
    Write-Error " [MISSING] Node.js is not installed."
    Write-Host " -> Please install the LTS version from: https://nodejs.org/" -ForegroundColor Gray
    exit 1
}

# 2. Check Rust (Required for Tauri Backend & Rust Microservice)
if (Get-Command "rustup" -ErrorAction SilentlyContinue) {
    $rustVer = rustc --version
    Write-Host " [OK] Rust is installed via rustup ($rustVer)" -ForegroundColor Green
    Write-Host "      Updating Rust to latest stable..." -ForegroundColor Gray
    rustup update stable
} else {
    Write-Host " [MISSING] Rust not found. Attempting to install via Rustup..." -ForegroundColor Yellow
    
    # Download rustup-init.exe
    $rustupUrl = "https://win.rustup.rs/x86_64"
    $installerPath = "$env:TEMP\rustup-init.exe"
    
    Write-Host "      Downloading Rustup installer..."
    Invoke-WebRequest -Uri $rustupUrl -OutFile $installerPath
    
    Write-Host "      Installing Rust (this may take a minute)..."
    # Run silently with defaults
    Start-Process -FilePath $installerPath -ArgumentList "-y", "--default-toolchain", "stable" -Wait -NoNewWindow
    
    # Refresh PATH for the current session
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path","User") + ";" + [System.Environment]::GetEnvironmentVariable("Path","Machine")
    
    if (Get-Command "cargo" -ErrorAction SilentlyContinue) {
        Write-Host " [SUCCESS] Rust installed successfully!" -ForegroundColor Green
    } else {
        Write-Error " [FAILED] Automatic installation failed or PATH not updated."
        Write-Host " -> Please restart your terminal and try again, or install manually from https://rustup.rs" -ForegroundColor Red
        exit 1
    }
}

# 3. Install Project Dependencies
Write-Host "`nInstalling Frontend & Tauri Dependencies..." -ForegroundColor Cyan
Push-Location frontend
try {
    npm install
} finally {
    Pop-Location
}

# 4. Success
Write-Host "`nEverything is set up properly!" -ForegroundColor Green
Write-Host "To start the desktop app, run:"
Write-Host "  cd frontend"
Write-Host "  npm run tauri dev"
