#!/usr/bin/bash

for file in ~./* ~/*;do
  if [ -f "$file" ]; then
     cp "$file" ~/backup/
  fi
done

echo "Our backup completed"
