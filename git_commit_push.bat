@echo off

if "%~1"=="" (
    echo Error: please provide a commit message
    exit /b 1
)

echo.
echo Your commit will have the message %1 
echo.
choice /c YN /m "Do you want to continue?"

if %errorlevel%==2 (
    echo Cancelled by user
    echo Done.
    exit /b 1
)

git add .
echo.
echo Files added to staged changes
echo.

git status --short
git commit -m %1
git push

echo Commit complete
echo Done.
exit /b 0