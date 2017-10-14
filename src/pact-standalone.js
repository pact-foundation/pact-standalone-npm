var path = require('path');
var system = process.platform + (process.platform === 'linux' ? '-' + process.arch : "");
var basePath = "platforms/" + system + '/bin/';
var isWindows = process.platform === 'win32';

var cwd = path.resolve(__dirname, '..');
var mockService = ('pact-mock-service' + (isWindows ? '.bat' : ''));
var verifier = ('pact-provider-verifier' + (isWindows ? '.bat' : ''));

module.exports = {
	cwd: cwd,
	mockServicePath: path.join(basePath, mockService),
	mockServiceFullPath: path.resolve(cwd, basePath, mockService).trim(),
	verifierPath: path.join(basePath, verifier),
	verifierFullPath: path.resolve(cwd, basePath, verifier).trim()
};