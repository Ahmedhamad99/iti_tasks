#!/usr/bin/bash


echo -n "Enter your logname: "

read logname

home_dir=$(eval echo ~$logname)


echo "Listing home directory contents:"
ls -l "$home_dir"

echo "Copying files to /tmp/.."

ls -r "$home_dir"/* /tmp/


echo "Current processes:"


ps -u "$logname"