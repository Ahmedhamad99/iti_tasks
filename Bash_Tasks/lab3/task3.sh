#!/usr/bin/bash

for file in ~/.* ~/*;do
 chmod +x "$file"
done

echo "All files and dir now executable!"