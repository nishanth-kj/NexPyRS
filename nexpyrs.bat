@echo off
setlocal

:: Define potential UV paths based on user install logs
set "UV_PATH_1=%USERPROFILE%\.local\bin\uv.exe"
set "UV_PATH_2=%USERPROFILE%\.cargo\bin\uv.exe"
set "UV_PATH_3=%LOCALAPPDATA%\uv\uv.exe"

set "UV_EXE="

:: 1. Check PATH first
where uv >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    set "UV_EXE=uv"
) else (
    :: 2. Check known paths
    if exist "%UV_PATH_1%" set "UV_EXE=%UV_PATH_1%"
    if exist "%UV_PATH_2%" set "UV_EXE=%UV_PATH_2%"
    if exist "%UV_PATH_3%" set "UV_EXE=%UV_PATH_3%"
)

if "%UV_EXE%"=="" (
    echo [ERROR] 'uv' tool not found in specific paths or PATH.
    echo Please run 'powershell -c "irm https://astral.sh/uv/install.ps1 | iex"' completely and restart terminal.
    exit /b 1
)

:: 3. Run the command passed to this script
:: Example usage: manage.bat check
"%UV_EXE%" run manage.py %*
