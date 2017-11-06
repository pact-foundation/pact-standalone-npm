#!/bin/bash -e

set -e

export PACT_STANDALONE_VERSION=1.16.0
export STANDALONE_PACKAGE_NAME=pact-standalone

scripts/build_standalone_packages.sh
scripts/package_for_npm.sh