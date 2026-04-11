@echo off

if "%~1"=="" (
    echo Error: you must provide a commit message.
    echo Usage: script.bat "your commit message"
    exit /b 1
)

git add . || goto error
git commit -m "%*" || goto error
git push || goto error

echo Done.
exit /b 0

:error
echo Error: git command failed
exit /b 1