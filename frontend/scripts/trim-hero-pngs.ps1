# Trim transparent padding from PNGs in public/hero so each cut-out
# portrait has a tight bounding box. Run when new hero images are added.
Add-Type -AssemblyName System.Drawing

$dir = Join-Path $PSScriptRoot "..\public\hero"
$dir = (Resolve-Path $dir).Path
Write-Host "Trimming PNGs in $dir"

Get-ChildItem -Path $dir -Filter "*.png" | ForEach-Object {
    $path = $_.FullName
    $img = [System.Drawing.Image]::FromFile($path)
    $bmp = New-Object System.Drawing.Bitmap $img
    $img.Dispose()

    $w = $bmp.Width
    $h = $bmp.Height
    $minX = $w; $minY = $h; $maxX = -1; $maxY = -1
    $threshold = 8

    for ($y = 0; $y -lt $h; $y++) {
        for ($x = 0; $x -lt $w; $x++) {
            $a = $bmp.GetPixel($x, $y).A
            if ($a -gt $threshold) {
                if ($x -lt $minX) { $minX = $x }
                if ($y -lt $minY) { $minY = $y }
                if ($x -gt $maxX) { $maxX = $x }
                if ($y -gt $maxY) { $maxY = $y }
            }
        }
    }

    if ($maxX -lt 0) {
        Write-Host "  $($_.Name): empty image, skipping"
        $bmp.Dispose()
        return
    }

    $cropW = $maxX - $minX + 1
    $cropH = $maxY - $minY + 1
    $rect = New-Object System.Drawing.Rectangle $minX, $minY, $cropW, $cropH
    $cropped = $bmp.Clone($rect, $bmp.PixelFormat)
    $bmp.Dispose()

    $cropped.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
    $cropped.Dispose()
    Write-Host "  $($_.Name): $w x $h -> $cropW x $cropH"
}

Write-Host "Done."
