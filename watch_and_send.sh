#!/bin/bash

# Check if inotifywait is installed
if ! command -v inotifywait &> /dev/null; then
  echo "inotifywait not found. Please install inotify-tools."
  exit 1
fi

echo "Watching for file changes in $(pwd)..."

while true; do
  # Watch for changes to any file (modify, create, delete)
  inotifywait -r -e modify,create,delete . 
  echo "Change detected. Running send_to_obsidian.sh..."
  ./send_to_obsidian.sh
done
