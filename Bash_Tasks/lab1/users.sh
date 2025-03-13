#!/usr/bin/bash

awk -F: '{
    users[$4] = users[$4] "\n  " $1
}
END {
    for (group in users) {
        print "Group ID:", group
        print users[group] "\n"
    }
}' /etc/passwd
