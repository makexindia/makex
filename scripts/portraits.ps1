# Optional Windows asset preparation. Originals remain untouched.
# Committed derivatives make this unnecessary for a clean-clone build.
Add-Type -AssemblyName System.Drawing
$siteRoot = Split-Path -Parent $PSScriptRoot
foreach ($portraitName in @('lakshay','abhishek','vishal')) {
  $original = [System.Drawing.Image]::FromFile((Join-Path $siteRoot ($portraitName + '.jpg')))
  $resized = New-Object System.Drawing.Bitmap 360,360
  $canvas = [System.Drawing.Graphics]::FromImage($resized)
  try {
    $canvas.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $canvas.DrawImage($original,0,0,360,360)
    $resized.Save((Join-Path $siteRoot ('assets/img/' + $portraitName + '.jpg')), [System.Drawing.Imaging.ImageFormat]::Jpeg)
  } finally { $canvas.Dispose(); $resized.Dispose(); $original.Dispose() }
}
