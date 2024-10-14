#!/bin/bash

# Function to display usage
usage() {
  echo "Usage: $0 -p <path> [-s <size>]"
  exit 1
}

# Parse command line arguments
while getopts ":p:s:" opt; do
  case $opt in
    p) path="$OPTARG" ;;
    s) size="$OPTARG" ;;
    *) usage ;;
  esac
done

# Check if path is provided
if [ -z "$path" ]; then
  usage
fi

# Set default size if not provided
size=${size:-1600}

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
  echo "cwebp could not be found, please install it first."
  exit 1
fi

# Find all jpg and png files in the directory
find "$path" -type f \( -iname "*.jpg" -o -iname "*.png" \) | while read -r file; do
  # Get image dimensions
  dimensions=$(sips -g pixelWidth -g pixelHeight "$file" | awk '/pixelWidth|pixelHeight/ {print $2}')
  width=$(echo "$dimensions" | sed -n '1p')
  height=$(echo "$dimensions" | sed -n '2p')

  # Calculate new dimensions while maintaining aspect ratio
  if [ "$width" -gt "$size" ] || [ "$height" -gt "$size" ]; then
    if [ "$width" -lt "$height" ]; then
      newWidth=$size
      newHeight=$(echo "scale=0; ($size / $width) * $height" | bc)
    else
      newHeight=$size
      newWidth=$(echo "scale=0; ($size / $height) * $width" | bc)
    fi

    # Convert and resize image using cwebp
    outputFile="${file%.*}.webp"
    cwebp "$file" -resize "$newWidth" "$newHeight" -o "$outputFile"
  else
    # Convert without resizing
    outputFile="${file%.*}.webp"
    cwebp "$file" -o "$outputFile"
  fi
done
