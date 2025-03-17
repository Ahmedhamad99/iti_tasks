#!/usr/bin/bash

if [ "$#" -eq 2 ]; then

    cp "$1" "$2"
    echo "file copied  $1 to $2"
elif [ "$#" -ge 2 ]; then
  dir="${@: -1}"
  
  cp "${@:1:$#-1}" "$dir"
  
  # shellcheck disable=SC2145
  echo "Files copy ${@:1:$#-1} to $dir"
else 
  echo "cpoied file file to file2 not working"

fi