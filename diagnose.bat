@echo off
setlocal
echo ==========================================
echo        NexPyRS Diagnostics Tool
echo ==========================================
echo.

echo [1/5] Checking Docker...
docker info >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [FAIL] Docker is NOT running or not accessible!
    echo        Please start Docker Desktop and ensure it is ready.
) else (
    echo [PASS] Docker is running.
)

echo.
echo [2/5] Checking UV & Python...
call nexpyrs.bat check >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [FAIL] 'uv' or Python environment issue.
) else (
    echo [PASS] 'uv' environment is healthy.
)

echo.
echo [3/5] Checking Frontend Dependencies...
if exist "node_modules" (
    echo [PASS] node_modules found.
) else (
    echo [FAIL] node_modules missing. Run 'nexpyrs.bat install'.
)

echo.
echo [4/5] Checking Backend Virtualenv...
if exist ".venv" (
    echo [PASS] .venv found.
) else (
    echo [FAIL] .venv missing. Run 'nexpyrs.bat install'.
)

echo.
echo [5/5] Attempting Dry-Run Build (Frontend)...
call npm run build >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [FAIL] Frontend build failed! Check errors.
) else (
    echo [PASS] Frontend code compiles successfully.
)

echo.
echo ==========================================
echo Diagnostics Complete.
