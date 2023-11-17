#!/bin/bash
cd /var/www/html/production
npm install sharp
export PATH="$PATH:/usr/lib/node_modules/pm2/bin"

pm2 describe "kt-frontend-client"
if [ $? -eq 0 ]
then
    pm2 restart "kt-frontend-client"
else
    pm2 start npm --name "kt-frontend-client" -- start
fi
pm2 startup systemd
pm2 save

 




