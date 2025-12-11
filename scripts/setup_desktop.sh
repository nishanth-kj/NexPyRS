#!/bin/bash
# NexPyRS Desktop Development Setup (Tauri & Rust)

echo "Checking Desktop Development Prerequisites..."

# 1. Check Node.js
if command -v node &> /dev/null; then
    echo " [OK] Node.js is installed ($(node -v))"
else
    echo " [MISSING] Node.js is not installed."
    echo " -> Please install from https://nodejs.org/"
    exit 1
fi

# 2. Check Rust
if command -v rustup &> /dev/null; then
    echo " [OK] Rust is installed via rustup ($(rustc --version))"
    echo "      Updating Rust to latest stable..."
    rustup update stable
else
    echo " [MISSING] Rust not found. Attempting to install via Rustup..."
    
    # Install Rust
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
    
    # Source env
    source "$HOME/.cargo/env"
    
    if command -v cargo &> /dev/null; then
        echo " [SUCCESS] Rust installed successfully!"
    else
        echo " [FAILED] Automatic installation failed."
        exit 1
    fi
fi

# 3. Install Dependencies
echo ""
echo "Installing Frontend & Tauri Dependencies..."
cd frontend
npm install
cd ..

echo ""
echo "Everything is set up properly!"
echo "To start the desktop app, run:"
echo "  cd frontend"
echo "  npm run tauri dev"
