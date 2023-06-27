function Get-Tree {
    param(
        [string]$Path = (Get-Location),
        [int]$IndentLevel = 0
    )

    $indent = '   ' * $IndentLevel

    Get-ChildItem -Directory $Path | ForEach-Object {
        Write-Output ("{0}{1}" -f $indent, $_.Name)
        Get-Tree -Path $_.FullName -IndentLevel ($IndentLevel + 1)
    }
}

Get-Tree
