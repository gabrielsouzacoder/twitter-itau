#!/bin/sh
set -e

echo "$URL"
for f in /usr/share/nginx/html/base-angular/*.js* ; do sed -i "s|{{URL}}|$URL|g;" "$f" ; envsubst '${URL}' < "$f" > "${f%.js}.bak" ; mv "${f%.js}.bak" "$f" ; done

exec "$@"


