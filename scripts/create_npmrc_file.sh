set +x #Don't echo the NPM key

echo "@pact-foundation:registry=https://registry.npmjs.org/" > .npmrc
echo "//registry.npmjs.org/:_authToken=${NPM_KEY}" >> .npmrc
echo "//registry.npmjs.org/:username=pact-foundation" >> .npmrc
echo "//registry.npmjs.org/:email=pact-foundation@googlegroups.com" >> .npmrc
echo "//registry.npmjs.org/:always-auth=true" >> .npmrc

set -x
