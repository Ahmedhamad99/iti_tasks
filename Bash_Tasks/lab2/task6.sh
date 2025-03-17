#!/usr/bin/bash

options=""

dir="."


while [ "$#" -gt 0 ]; do
    case "$1" in
        -l) options="$options -l" ;;
        -a) options="$options -a" ;;
        -d) options="$options -d" ;;
        -i) options="$options -i" ;;
        -R) options="$options -R" ;;
        *) dir="$1" ;;
    esac
    shift
done
 
ls $options "$dir"
