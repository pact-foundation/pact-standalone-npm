var archMap = {
	'ia32': 'x86',
	'x64': 'x86_64'
};

var packageName = '@pact-foundation/pact-standalone-' + process.platform + (process.platform === 'linux' ? '-' + archMap[process.arch] : "");

module.exports = require(packageName);