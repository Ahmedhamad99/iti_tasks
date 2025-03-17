#!/usr/bin/bash

echo -n "How many number you wiil enter? "

read number

for ((i=0; i<number; i++)); 
do
   echo -n "Enter number $((i+1)): "
   read arr[i]
done


echo "Our Array of numbers : ${arr[@]}"

