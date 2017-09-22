var path = require('path');
var isWindows = process.platform === 'win32';

var cwd = path.resolve(__dirname, 'bin');
var mockService = ('pact-mock-service' + (isWindows ? '.bat' : ''));
var verifier = ('pact-provider-verifier' + (isWindows ? '.bat' : ''));

module.exports = {
  cwd: cwd,
  mockServicePath: mockService,
  mockServiceFullPath: path.resolve(cwd, mockService).trim(),
  verifierPath: verifier,
  verifierFullPath: path.resolve(cwd, verifier).trim()
};