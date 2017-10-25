var path = require('path');
var system = process.platform + (process.platform === 'linux' ? '-' + process.arch : "");
var basePath = "platforms/" + system + '/bin/';
var isWindows = process.platform === 'win32';

function binName(name) {
	return name + (isWindows ? '.bat' : '')
}

var cwd = path.resolve(__dirname, '..');
var mock = binName('pact-mock-service');
var verify = binName('pact-provider-verifier');
var publish = binName('pact-publish');
var broker = binName('pact-broker');
var stub = binName('pact-stub-service');

module.exports = {
	cwd: cwd,
	brokerPath: path.join(basePath, broker),
	brokerFullPath: path.resolve(cwd, basePath, broker).trim(),
	mockServicePath: path.join(basePath, mock),
	mockServiceFullPath: path.resolve(cwd, basePath, mock).trim(),
	publisherPath: path.join(basePath, publish),
	publisherFullPath: path.resolve(cwd, basePath, publish).trim(),
	stubPath: path.join(basePath, stub),
	stubFullPath: path.resolve(cwd, basePath, stub).trim(),
	verifierPath: path.join(basePath, verify),
	verifierFullPath: path.resolve(cwd, basePath, verify).trim()
};