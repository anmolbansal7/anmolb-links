#!/bin/bash

# Specify the paths to the folders containing the JSON files
english_folder="public/locales/en-IN"
vietnam_folder="public/locales/vi-VN"

# Sort the keys in the original and translated JSON files
for file in "$english_folder"/*.json
do
    jq -S . "$file" > "$file.tmp" && mv "$file.tmp" "$file"
done

for file in "$vietnam_folder"/*.json
do
    jq -S . "$file" > "$file.tmp" && mv "$file.tmp" "$file"
done

# Loop through the JSON files in the original folder
for file in "$english_folder"/*.json
do
    filename=$(basename "$file")
    vietnam_file="$vietnam_folder/$filename"

    # Parse the original JSON file and extract keys
    english_keys=$(jq -r 'keys | .[]' "$file")

    # Parse the translated JSON file and extract keys
    vietnam_keys=$(jq -r 'keys | .[]' "$vietnam_file")

    # Compare the keys and find missing ones
    missing_keys=$(comm -23 <(echo "$english_keys" | sort) <(echo "$vietnam_keys" | sort))

    # Check if there are any missing keys
    if [[ -n $missing_keys ]]; then
        echo "Missing keys in file: $filename"
        echo "$missing_keys"
        echo ""
    fi
done
