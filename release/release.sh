#!/usr/bin/env bash

echo '第一个参数是：'
echo $1

dataline=$(cat package.json)

echo $dataline

cat grep -Po 'version[" :]+\K[^"]+' package.json


function handleFlow {

    #build and commit
    if [ "$mode" = "custom" ]
       then
        npm version $V --no-git-tag-version
        git tag "V-$V"
        git commit -am "[release] Upgrade to V-$V"
       else
        npm version prerelease --no-git-tag-version
        echo 2222222
        echo "$V"
        echo "%s"
#        git tag "$V"
#        git commit -am "[release] Upgrade to %s"

    fi


#    # publish
#    npm info
#    npm publish --tag beta
#    echo Releasing pubish successful ...
}



set -e

echo "commit and releasing pubish - are you sure? (y/n)"
read -p -n $REPLY

if [[ $REPLY =~ ^[Yy]$ ]]
  then
    echo "Do you want to enter version to releasing publish? (y/n)"
    read -p -n $REPLY2
     if [[ $REPLY2 =~ ^[Yy]$ ]]
     then
        echo "Enter release version: "
        read VERSION

        mode='custom'
        V=$VERSION

        handleFlow
     else

       mode='prerelease'
       V="%s"

       handleFlow
     fi

else
    echo Releasing pubish failed ...
fi

npm dist-tag ls



