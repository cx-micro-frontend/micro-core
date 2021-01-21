#!/usr/bin/env bash

# 模块名称
MODULE_NAME=$1
# 分支名称
BRANCH_NAME=$2
# 仓库拷贝地址
CLONE_DRESS=$3
# 本地复制路径
CLONE_ADDRESS=$4

# red color
R=`tput setaf 1`
# green color
G=`tput setaf 2`
# yellow color
Y=`tput setaf 3`
# blue color
B=`tput setaf 4`
# Use Q to revert color
Q=`tput sgr0`
#echo "${R}red ${G}green ${B}blue ${Y}yellow ${Q}"


# clone 开始时间
#SHOW_TIME=`date +%s`

# git clone
echo
echo "${B}Cloning target:" ${MODULE_NAME}" ${Q}"
echo "${G}Cloning branch:" ${BRANCH_NAME}" ${Q}"
echo "${Y}Cloning from:" ${CLONE_DRESS}" ${Q}"
git clone -b $BRANCH_NAME $CLONE_DRESS $CLONE_ADDRESS --depth=1 --progress


# 结束时间
#END_TIME=`date +%s`

# 时间结果存入数组
#TIME=`expr $END_TIME - $SHOW_TIME`
#echo "clone done in ${R}"${TIME}"${Q}s"




