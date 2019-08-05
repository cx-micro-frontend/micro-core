#!/usr/bin/env bash




function handleFlow {

    #build
    if [ "$mode" = "custom" ]
       then
        npm version $V --no-git-tag-version
       else
        npm version prerelease --no-git-tag-version
    fi

    # commit
    git tag "$V"
    git commit -am "[release] Upgrade to $V"

    # publish
    npm info
    npm publish --tag beta
    echo Releasing pubish successful ...
}



set -e

echo "commit and releasing pubish - are you sure? (y/n)"
read -p -n $REPLY

if [[ $REPLY =~ ^[Yy]$ ]]
  then
    echo "Do you want to enter version to releasing publish? (y/n)"
    read -p -n $REPLY
     if [[ $REPLY =~ ^[Yy]$ ]]
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



