var packageName = '@pact-foundation/pact-standalone-' + process.platform + (process.platform === 'linux' ? '-' + process.arch : "");
module.exports = require(packageName);