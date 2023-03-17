#! /bin/bash

echo "Script Starting!!!"

echo "Sever updating."

apt-get update
apt-get upgrade -y

echo "Installing dependencies"

apt-get install apache2 -y 
apt-get install unzip -y

echo "Installing de aplication"

cd /tmp
wget https://github.com/ErikSVieira/Fan-Art_The_Last_of_Us/archive/refs/heads/master.zip
unzip master.zip
cd /tmp/Fan-Art_The_Last_of_Us-master
cp -R * /var/www/html/

echo "Script finish."