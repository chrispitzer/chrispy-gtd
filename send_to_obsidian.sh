#!/bin/bash

# build the project
npm run build

# copy the built files to the obsidian plugins directory
cp main.js /mnt/c/Users/chris/Documents/Obsidian/.obsidian/plugins/chrispy-gtd/main.js
cp manifest.json /mnt/c/Users/chris/Documents/Obsidian/.obsidian/plugins/chrispy-gtd/manifest.json

