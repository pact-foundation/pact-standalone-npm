#!/bin/bash

set -ex

echo "--> Packaging distributions"

declare -A osarchs=(["osx"]="darwin" ["win32"]="win32" ["linux-x86"]="linux-ia32" ["linux-x86_64"]="linux-x64")
cd build
distDir="../dist"

echo "--> Clearing previous dist"
if [ -d "${distDir}" ]; then
  rm -rf ${distDir}
fi
rm -rf build/pact-standalone-*
mkdir -p ${distDir}

for os in "${!osarchs[@]}"
do
  echo "--> Building ${os}"
  outputFolder="${STANDALONE_PACKAGE_NAME}-${osarchs[$os]}"

  if [ "${os}" = "win32" ]; then
    unzip -q "pact-${PACT_STANDALONE_VERSION}-${os}.zip" -d "${outputFolder}"
  else
    mkdir -p "${outputFolder}"
    tar -C "${outputFolder}" --strip-components=1 -xzf "pact-${PACT_STANDALONE_VERSION}-${os}.tar.gz"
  fi

  echo "--> Copying package assets into ${outputFolder}"
  cp ../platforms/${osarchs[$os]}/* "${outputFolder}"
  cp ../src/pact-*.js "${outputFolder}"
  cp ../README.md "${outputFolder}"

  echo "--> Copying ${outputFolder} to dist"
  mv "${outputFolder}" "${distDir}/"
done
