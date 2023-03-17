#! /bin/bash

echo "Delete directory!!!"

rmdir /publico
rmdir /adm
rmdir /ven
rmdir /sec

echo "Delete group!!!"

groupdel GRP_ADM
groupdel GRP_VEN
groupdel GRP_SEC

echo "Delete user!!!"

userdel carlos -f -r
userdel maria -f -r
userdel joao -f -r

userdel debora -f -r
userdel sebastiana -f -r
userdel roberto -f -r

userdel josefina -f -r
userdel amanda -f -r
userdel rogerio -f -r

echo "Finish of the script"