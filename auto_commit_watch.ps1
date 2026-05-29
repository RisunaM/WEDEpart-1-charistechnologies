$ErrorActionPreference = 'Stop'
$repoPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $repoPath

# Ensure Git identity is available locally for automated commits.
if (-not (git config --local --get user.name)) {
    git config user.name "GitHub Copilot"
}
if (-not (git config --local --get user.email)) {
    git config user.email "copilot@example.com"
}

while ($true) {
    Start-Sleep -Seconds 30

    try {
        $status = git status --porcelain
        if ([string]::IsNullOrWhiteSpace($status)) {
            continue
        }

        git add -A
        $staged = git diff --cached --name-only
        if ([string]::IsNullOrWhiteSpace($staged)) {
            continue
        }

        $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
        git commit -m "Auto commit $timestamp"
        git push origin main
    }
    catch {
        Write-Host "Auto commit error: $($_.Exception.Message)"
    }
}
