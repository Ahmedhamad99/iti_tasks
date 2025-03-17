#!/usr/bin/bash

mysquar()
{
    echo $(($1 ** 2))
}

echo "Square of 5 is $(mysquar $1)"