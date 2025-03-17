#!/usr/bin/bash

echo -n "Enter numbers in one line separted-with-spaca: "
read -a arr 

sum=0

for num in "${arr[@]}";
do
  sum=$((sum+num))
done

average=$((sum/${#arr[@]}))

echo "Average: $average"