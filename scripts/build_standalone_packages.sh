#!/bin/bash -e

mkdir -p build
cd build

urls=(https://github.com/pact-foundation/pact-ruby-standalone/releases/download/v$PACT_STANDALONE_VERSION/pact-$PACT_STANDALONE_VERSION-linux-x86.tar.gz https://github.com/pact-foundation/pact-ruby-standalone/releases/download/v$PACT_STANDALONE_VERSION/pact-$PACT_STANDALONE_VERSION-linux-x86_64.tar.gz https://github.com/pact-foundation/pact-ruby-standalone/releases/download/v$PACT_STANDALONE_VERSION/pact-$PACT_STANDALONE_VERSION-osx.tar.gz https://github.com/pact-foundation/pact-ruby-standalone/releases/download/v$PACT_STANDALONE_VERSION/pact-$PACT_STANDALONE_VERSION-win32.zip)

echo "--> Downloading Ruby Engine"
if [ ! -f "pact-${PACT_STANDALONE_VERSION}-linux-x86.tar.gz" ]; then
  for url in "${urls[@]}"
  do
    echo "INFO: Downloading ${url}"
    wget "${url}"
  done
else
  echo "INFO: Pact standalone binaries already downloaded, run 'npm run clean' to download again"
fi