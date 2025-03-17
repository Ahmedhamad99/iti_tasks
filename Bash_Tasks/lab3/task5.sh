#!/usr/bin/bash

for user in $(cut -d: -f /etc/passwd); do
  mail -s "Our masssaege to our employee" "$user" < masssaege
done

echo "Email sent to all"