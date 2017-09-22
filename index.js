var arch = "";
if (process.platform === 'linux') {
  arch = '-' + process.arch;
}
var packageName = '@pact-foundation/pact-standalone-' + process.platform + arch;

module.exports = require(packageName);