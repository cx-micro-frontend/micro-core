#!/usr/bin/env bash

set -e

echo "commit and releasing pubish - are you sure? (y/n)"
read -p -n $REPLY

if [[ $REPLY =~ ^[Yy]$ ]]
  then

    # commit
    git tag "v-%s"
    git commit -am "[release] Upgrade to %s"

    # publish
    npm version prerelease
    npm info
    npm publish --tag beta
    echo Releasing pubish successful ...
else
    echo Releasing pubish failed ...
fi

npm dist-tag ls
