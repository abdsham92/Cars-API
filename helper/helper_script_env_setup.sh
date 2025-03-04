#! /bin/bash

# https://www.mongodb.com/docs/mongodb-shell/install/

sudo apt-get install gnupg
wget -qO- https://www.mongodb.org/static/pgp/server-8.0.asc | sudo tee /etc/apt/trusted.gpg.d/server-8.0.asc
sudo touch /etc/apt/sources.list.d/mongodb-org-8.0.list
sudo echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list
sudo apt-get update
sudo apt-get install -y mongodb-mongosh
mongosh --version
