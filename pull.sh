#!/usr/bin/env bash


#$ ssh nick@xxx.xxx.xxx.xxx "pwd; cat hello.txt"

echo 开始打包...
#npm run build

echo 开始压缩...
tar -cvf dist.tar dist

echo 上传压缩包...
scp dist.tar root@192.168.1.20:../opt/www/<<EOF

echo 连接服务器...
ssh -p 22 root@192.168.1.20

echo 清空O2O文件夹...
rm -rf cd /opt/www/o2o/*

cd /opt/www/o2o
ls


tar -xvf dist.ta o2o/

#cp -r dist.tar o2o/dist.tar

 ls


EOF



#tar -cvf dist.tar dist
#
#ssh -p 22 root@192.168.1.20  'cd /opt/www/;rm -rf o2o/*;echo 123123;ls'
#
#rm -rf dist.tar




#scp package.json root@192.168.1.20:../opt/www/test1234


#ssh -p 22 root@192.168.1.20
#
#rm -rf ../opt/www/o2o/*
#
#scp package.json root@192.168.1.20:../opt/www/test1234
