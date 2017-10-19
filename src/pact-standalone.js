var path = require('path');
var system = process.platform + (process.platform === 'linux' ? '-' + process.arch : "");
var basePath = "platforms/" + system + '/bin/';
var isWindows = process.platform === 'win32';

var cwd = path.resolve(__dirname, '..');
var broker = ('pact-broker' + (isWindows ? '.bat' : ''));
var mockService = ('pact-mock-service' + (isWindows ? '.bat' : ''));
var verifier = ('pact-provider-verifier' + (isWindows ? '.bat' : ''));
var publisher = ('pact-publish' + (isWindows ? '.bat' : ''));
var stub = ('pact-stub-service' + (isWindows ? '.bat' : ''));

module.exports = {
	cwd: cwd,
	brokerPath: path.join(basePath, broker),
	brokerFullPath: path.resolve(cwd, basePath, broker).trim(),
	mockServicePath: path.join(basePath, mockService),
	mockServiceFullPath: path.resolve(cwd, basePath, mockService).trim(),
	publisherPath: path.join(basePath, publisher),
	publisherFullPath: path.resolve(cwd, basePath, publisher).trim(),
	stubPath: path.join(basePath, stub),
	stubFullPath: path.resolve(cwd, basePath, stub).trim(),
	verifierPath: path.join(basePath, verifier),
	verifierFullPath: path.resolve(cwd, basePath, verifier).trim()
};