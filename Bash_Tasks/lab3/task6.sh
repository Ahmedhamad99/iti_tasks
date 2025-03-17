#!/usr/bin/bash

while true; do
  ls -lt /var/mail/$USER | head -n 5
  sleep 10
done

