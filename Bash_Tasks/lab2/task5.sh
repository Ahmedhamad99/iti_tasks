#!/usr/bin/bash

if [ -z "$1" ]; then 
 ls
else 
 ls "$1"
fi