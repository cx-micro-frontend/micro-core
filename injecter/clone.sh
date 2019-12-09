#!/usr/bin/env bash

# 模块名称
MODULE_NAME=$1
# 分支名称
BRANCH_NAME=$2
# 仓库拷贝地址
CLONE_DRESS=$3
# 本地复制路径
CLONE_ADDRESS=$4

# clone 开始时间
SHOW_TIME=`date +%s`


# git clone
echo
echo "cloning target:" ${MODULE_NAME}""
git clone -b $BRANCH_NAME $CLONE_DRESS $CLONE_ADDRESS
# 结束时间
END_TIME=`date +%s`

# 时间结果存入数组
TIME=`expr $END_TIME - $SHOW_TIME`
echo "clone done in "${TIME}"s"




