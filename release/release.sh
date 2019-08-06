#!/usr/bin/env bash




echo '第一个参数是：'
echo $1

#
# AUTOVER=$(jq .version $1)
# echo 2222222
# echo $AUTOVER

    #build and commit
    git tag "V-$1"
    git commit -am "[release] Upgrade to V-$1"

    # publish
    npm info
    npm publish --tag beta
    echo Releasing pubish successful ...
    npm dist-tag ls



# AUTOVER=$(jq .version $1)
#echo $AUTOVER

#cat grep -Po 'version[" :]+\K[^"]+' package.json
