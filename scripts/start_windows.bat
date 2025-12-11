@echo off
SETLOCAL EnableDelayedExpansion

TITLE NexPyRS - One-Click Installer & Runner

echo ========================================================
echo               NexPyRS One-Click Installer
echo ========================================================
echo.
echo [1/4] Checking System Requirements...

WHERE docker >nul 2>nul
IF %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Docker is NOT installed or not in your PATH.
    echo         Please install Docker Desktop and try again.
    pause
    EXIT /B 1
)

echo [OK] Docker is present.

echo.
echo [2/4] Configuring Environment...
IF NOT EXIST .env (
    echo      Creating .env file from defaults...
    copy .env.example .env >nul
) ELSE (
    echo      Using existing .env file.
)

echo.
echo [3/4] Building and Starting Services (Dynamically)...
echo      This might take a while on the first run as we download
echo      the latest images and build the containers.
echo.

:: Pull latest base images to ensure dynamic freshness
docker-compose pull --ignore-pull-failures

:: Build and Start
docker-compose up --build -d --remove-orphans

IF %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Failed to start the project.
    echo         Check the Docker logs for details.
    pause
    EXIT /B 1
)

echo.
echo [4/4] Launching Application...
echo.
echo [SUCCESS] NexPyRS is Running!
echo.
echo      - Frontend: http://localhost
echo      - Dashboard: http://localhost:8090
echo      - API Health: http://localhost/api/health
echo.
echo Opening default browser...

timeout /t 3 >nul
start http://localhost
start http://localhost:8090

echo.
echo Press any key to close this window...
pause >nul
