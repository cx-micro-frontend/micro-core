#!/usr/bin/env bash

#build and commit
git tag "V-$1"
git commit -am "[release] Upgrade to V-$1"

# publish
#npm info
npm publish --tag beta
echo Releasing pubish successful ...
npm dist-tag ls


#AUTOVER=$(jq .version $1)
#echo $AUTOVER
#cat grep -Po 'version[" :]+\K[^"]+' package.json
