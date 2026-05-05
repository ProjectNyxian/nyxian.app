#!/bin/sh

set -e

if [ -z "${1%@*}" ] || [ -z "${1#*@}" ]; then
    echo "Please specify a valid ssh connection! (user@host)" >&2
    exit 1
fi

cd "$(dirname "$0")"

if [ "$2" != "--skip-build" ] && [ "$2" != "-s" ]; then
    npm run build
    printf "\n"
fi

ssh "$1" /bin/sh <<'EOF'
rm -rf "$HOME/nyxian.app"
EOF

scp -rC ./build "$1:~/nyxian.app"

ssh "$1" /bin/sh <<'EOF'
set -e
mv --exchange -T "$HOME/nyxian.app" /var/www/nyxian.app
rm -rf "$HOME/nyxian.app"
EOF

printf "\n\033[32;1mDeployed successfully!\033[0m\n"
