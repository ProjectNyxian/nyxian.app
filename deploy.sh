#!/bin/sh

set -e

echo 'Make sure you ran "npm run build" beforehand.'

ssh "$1" /bin/sh <<'EOF'
set -e
rm -r "$HOME/nyxian.app"
EOF

scp -rC "$(dirname "$(realpath "$0")")/build" "$1:~/nyxian.app"

ssh "$1" /bin/sh <<'EOF'
set -e
mv --exchange -T "$HOME/nyxian.app" /var/www/nyxian.app
rm -rf "$HOME/nyxian.app"
EOF

echo "Deployed successfully!"