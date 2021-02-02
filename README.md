<img src="https://github.com/pact-foundation/pact-logo/blob/master/media/logo-black.png" width="200">

⚠️ This repository is now archived ⚠️
--------------------------------- 
The functionality implemented here has been provided by https://github.com/pact-foundation/pact-node instead

# Pact Standalone Provider NPM

[![Build Status](https://travis-ci.org/pact-foundation/pact-standalone-npm.svg?branch=master)](https://travis-ci.org/pact-foundation/pact-standalone-npm)

Installation wrapper for pact [pact-standalone] executable.

On install, this package selects and installs the correct [pact-mock-service] and [pact-provider-verifier] executable for your environment. The platform-specific binaries `pact-mock-service` and `pact-provider-verifier` can be found inside the node_modules/.bin directory.

## Usage

    $ npm i @pact-foundation/pact-standalone
    $ node_modules/.bin/pact-mock-service --port 1234
    $ node_modules/.bin/pact-provider-verifier <args>

[pact-mock-service]: https://github.com/pact-foundation/pact-mock_service
[pact-provider-verifier]: https://github.com/pact-foundation/pact-provider-verifier
[pact-standalone]: https://github.com/pact-foundation/pact-ruby-standalone

## Developing

_NOTE_: If you're on OSX, you'll need [Bash 4](http://clubmate.fi/upgrade-to-bash-4-in-mac-os-x/) 
installed for the scripts to work.
