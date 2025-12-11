#!/bin/bash

echo "========================================================"
echo "               NexPyRS One-Click Installer"
echo "========================================================"
echo ""
echo "[1/4] Checking System Requirements..."

if ! command -v docker &> /dev/null; then
    echo "[ERROR] Docker is NOT installed."
    echo "        Please install Docker and try again."
    exit 1
fi

echo "[OK] Docker is present."

echo ""
echo "[2/4] Configuring Environment..."
if [ ! -f .env ]; then
    echo "     Creating .env file from defaults..."
    cp .env.example .env
else
    echo "     Using existing .env file."
fi

echo ""
echo "[3/4] Building and Starting Services (Dynamically)..."
echo "     This might take a while on the first run..."
echo ""

# Pull latest base images
docker-compose pull --ignore-pull-failures

# Build and Start
docker-compose up --build -d --remove-orphans

if [ $? -ne 0 ]; then
    echo ""
    echo "[ERROR] Failed to start the project."
    exit 1
fi

echo ""
echo "[4/4] Launching Application..."
echo ""
echo "[SUCCESS] NexPyRS is Running!"
echo ""
echo "     - Frontend: http://localhost"
echo "     - Dashboard: http://localhost:8090"
echo "     - API Health: http://localhost/api/health"
echo ""
echo "Opening default browser..."

sleep 3

# Cross-platform open
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    xdg-open http://localhost
    xdg-open http://localhost:8090
elif [[ "$OSTYPE" == "darwin"* ]]; then
    open http://localhost
    open http://localhost:8090
fi
