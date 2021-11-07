#!/bin/bash

dhclient &
echo "Please wait! Loading configurations!"
sleep 5

set -e

GET_PORT_CONFIG=$(cat /usr/local/etc/iguana-hpc-usp/config.yaml | grep '"PublicInterface":' | awk '{print $2}' | sed 's/"//g' | sed 's/,//g' | tr -d '[:space:]')
PORT=8000

if [[ ! -z $GET_PORT_CONFIG ]]; then
    PORT=$GET_PORT_CONFIG
fi

INTERFACES=$(ip l | grep -E '[a-z].*: ' | egrep -v lo | egrep -v docker | cut -d ':' -f2 | cut -d ' ' -f2)
set $INTERFACES

IP_PRINT="\n"

for i in $@
do
        IP=$(ip a | grep -E "$i$" | cut -d ' ' -f6 | sed 's/\/24//g' | tr -d '[:space:]')
        IP_PRINT="$IP_PRINT http://$IP:$PORT\n"
done

whiptail --title "Welcome Iguana Cluster System" --msgbox \
"\n#############################################################
                 AUTOMATIC SYSTEM DETECTION
#############################################################
\nWe show below a list of detected IPs.
Use the IP and port to access Iguana's web interface:
$IP_PRINT
\n\nPut the IP for the bridge network in your browser." 20 65 4

/bin/login