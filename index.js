var path = require('path');
var system = process.platform + (process.platform === 'linux' ? '-' + process.arch : "");
var systemPath = path.resolve(__dirname, 'platforms', system);
var isWindows = process.platform === 'win32';

var cwd = path.resolve(systemPath, 'bin');
var mockService = ('pact-mock-service' + (isWindows ? '.bat' : ''));
var verifier = ('pact-provider-verifier' + (isWindows ? '.bat' : ''));

module.exports = {
	cwd: cwd,
	mockServicePath: mockService,
	mockServiceFullPath: path.resolve(cwd, mockService).trim(),
	verifierPath: verifier,
	verifierFullPath: path.resolve(cwd, verifier).trim()
};