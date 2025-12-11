@echo off
setlocal

:: Define potential UV paths based on user install logs
set "UV_PATH_1=%USERPROFILE%\.local\bin"
set "UV_PATH_2=%USERPROFILE%\.cargo\bin"
set "UV_PATH_3=%LOCALAPPDATA%\uv"

set "UV_DIR="

:: 1. Check known paths
if exist "%UV_PATH_1%\uv.exe" set "UV_DIR=%UV_PATH_1%"
if exist "%UV_PATH_2%\uv.exe" set "UV_DIR=%UV_PATH_2%"
if exist "%UV_PATH_3%\uv.exe" set "UV_DIR=%UV_PATH_3%"

:: 2. If found, add to PATH so subprocesses (manage.py) can find 'uv'
if not "%UV_DIR%"=="" (
    set "PATH=%UV_DIR%;%PATH%"
)

:: 3. Verify uv is now available
where uv >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] 'uv' tool not found.
    echo Please run 'powershell -c "irm https://astral.sh/uv/install.ps1 | iex"' and ensure it is in your PATH.
    exit /b 1
)

:: 4. Run the command passed to this script
:: Example usage: nexpyrs.bat check
uv run manage.py %*
