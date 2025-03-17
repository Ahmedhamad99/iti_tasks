#!/usr/bin/bash

echo -n "Enter a Character: "

read char 

case "$char" in 
  [A-Z]) echo "Upper Case"
  ;;
  [a-z]) echo "Lower Case" 
  ;;
  [0-9]) echo "It is A number"
  ;;
  "") echo "There is nothing entered"
  ;;
  *) echo "That charcter is unknownig"
  ;;
esac