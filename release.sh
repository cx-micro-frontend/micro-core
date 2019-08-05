#!/usr/bin/env bash


set -e

npm version prerelease
npm info
echo "Releasing - are you sure? (y/n)"
read -p -n $REPLY


if [[ $REPLY =~ ^[Yy]$ ]]
  then
    echo Releasing pubish successful ...
else
    echo Releasing pubish failed ...
fi

npm dist-tag ls
