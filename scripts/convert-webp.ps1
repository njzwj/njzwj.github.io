param(
  [Parameter(Mandatory=$true)]
  [string]$path,
  [Parameter(Mandatory=$false)]
  [int]$size = 1600
)

# Get all image files in the directory
$files = Get-ChildItem -Path $path -Include *.jpg,*.png -Recurse

foreach ($file in $files) {
  # Get image dimensions
  $image = [System.Drawing.Image]::FromFile($file.FullName)
  $width = $image.Width
  $height = $image.Height

  # Calculate new dimensions while maintaining aspect ratio
  if ($width -gt $size -or $height -gt $size) {
    if ($width -lt $height) {
      $newWidth = $size
      $newHeight = [Math]::Round(($size / $width) * $height)
    } else {
      $newHeight = $size
      $newWidth = [Math]::Round(($size / $height) * $width)
    }

    # Convert and resize image using cwebp
    $outputFile = [System.IO.Path]::ChangeExtension($file.FullName, ".webp")
    & cwebp $file.FullName -resize $newWidth $newHeight -o $outputFile
  } else {
    # Convert without resizing
    $outputFile = [System.IO.Path]::ChangeExtension($file.FullName, ".webp")
    & cwebp $file.FullName -o $outputFile
  }
}