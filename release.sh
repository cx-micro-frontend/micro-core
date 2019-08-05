#!/usr/bin/env bash


set -e
echo "Enter release version: "
read VERSION

echo "Releasing $VERSION - are you sure? (y/n)"
read -p -n $REPLY


echo    # (optional) move to a new line

if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo 123123123
  echo $VERSION
fi
