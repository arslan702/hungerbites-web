#!/bin/bash

#sudo apt-get update -y
#cd /var/www/html/production
#sudo npm install -g pm2
#curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
#sudo apt-get install -y nodejs
sudo apt-get update -y
cd /var/www/html/production
sudo npm install -g pm2
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
rm -f package-lock.json
#sudo npm install


