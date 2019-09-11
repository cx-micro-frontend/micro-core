#!/usr/bin/env bash

echo 123123123

echo $1
echo $2

# 模块名称
MODULE_NAME=$1
# 仓库拷贝地址
CLONE_DRESS=$2
# 本地复制路径
CLONE_ADDRESS=$3

# clone 开始时间
SHOW_TIME=`date +%s`


# git clone
echo
echo "cloning target:" ${MODULE_NAME}""
git clone $CLONE_DRESS $CLONE_ADDRESS
# 结束时间
END_TIME=`date +%s`

# 时间结果存入数组
TIME=`expr $END_TIME - $SHOW_TIME`
echo "clone done in "${TIME}"s"




