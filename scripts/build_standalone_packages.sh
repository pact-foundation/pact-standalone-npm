#!/bin/bash -e

mkdir -p build
cd build

urlprefix="https://github.com/pact-foundation/pact-ruby-standalone/releases/download/v$PACT_STANDALONE_VERSION/"
packages=(pact-$PACT_STANDALONE_VERSION-linux-x86.tar.gz pact-$PACT_STANDALONE_VERSION-linux-x86_64.tar.gz pact-$PACT_STANDALONE_VERSION-osx.tar.gz pact-$PACT_STANDALONE_VERSION-win32.zip)

echo "--> Downloading Ruby OS specific Binaries"

for package in "${packages[@]}"
do
	if [ ! -f "${package}" ]; then
	    echo "INFO: Downloading ${package}"
	    wget "${urlprefix}${package}"
	else
	  echo "INFO: '${package}' already downloaded."
	fi
done
