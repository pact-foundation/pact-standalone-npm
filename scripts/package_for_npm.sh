#!/bin/bash

set -ex

echo "--> Packaging distributions"

declare -A osarchs=(["osx"]="darwin" ["win32"]="win32" ["linux-x86"]="linux-ia32" ["linux-x86_64"]="linux-x64")
cd build
platformDir="../platforms"

echo "--> Clearing previous dist"
if [ -d "${platformDir}" ]; then
  rm -rf ${platformDir}
fi
rm -rf build/pact-standalone-*
mkdir -p ${platformDir}

for os in "${!osarchs[@]}"
do
  echo "--> Building ${os}"
  outputFolder="${osarchs[$os]}"

  if [ "${os}" = "win32" ]; then
    unzip -q "pact-${PACT_STANDALONE_VERSION}-${os}.zip" -d "${outputFolder}" && f=("$outputFolder"/*) && mv "$outputFolder"/*/* "$outputFolder" && rmdir "${f[@]}"
  else
    mkdir -p "${outputFolder}"
    tar -C "${outputFolder}" --strip-components=1 -xzf "pact-${PACT_STANDALONE_VERSION}-${os}.tar.gz"
  fi

  echo "--> Copying ${outputFolder} to dist"
  mv "${outputFolder}" "${platformDir}/"
done
