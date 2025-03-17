#!/usr/bin/bash

select option in "ls" "ls -a" "exit"; do
  
  case $REPLY in
    1) ls ;;
    2) ls -a ;;
    3) exit ;;
    *) echo "Invalid option";;
   esac

done 
