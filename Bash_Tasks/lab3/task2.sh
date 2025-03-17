#!/usr/bin/bash

echo -n "Enter a String: "

read str

if [[ "$str" =~ ^[A-Z]+$ ]]; then
  echo "This String is Upper Case"
elif [[ "$str" =~ ^[a-z]+$ ]]; then
 echo "This String is Lower Case"
elif [[ "$str" =~ ^[0-9]+$ ]]; then 
  echo "This is numbers"
elif [[ -z "$str" ]]; then
   echo "There is nothing enterd"
else
  echo "This String conatin upper case and lower case"
fi