#!/usr/bin/bash

if [ -f "$1" ]; then 
  echo "$1 is a file"
elif [ -d "$1" ]; then
  echo "$1 is directory"
else 
  echo "$1 does not exist"
fi  

if [ -r "$1" ]; then echo "Readable";fi
if [ -w "$1" ]; then echo "Writable";fi
if [ -x "$1" ]; then echo "Executable";fi

