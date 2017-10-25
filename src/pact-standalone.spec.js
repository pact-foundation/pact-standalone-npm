/* global describe:true, before:true, after:true, it:true, global:true, process:true */
var fs = require('fs');
var path = require('path');
var expect = require('chai').expect;
var basePath = path.resolve(__dirname, '..');

describe("Pact Standalone", function () {
	var pact;
	afterEach(function () {
		delete require.cache[require.resolve('./pact-standalone')];
	});

	it("should return an object with cwd, file and fullPath properties that is platform specific", function () {
		pact = require('./pact-standalone');
		expect(pact).to.be.an('object');
		expect(pact.cwd).to.be.ok;
		expect(pact.brokerPath).to.contain("pact-broker");
		expect(pact.brokerFullPath).to.contain("pact-broker");
		expect(pact.mockServicePath).to.contain("pact-mock-service");
		expect(pact.mockServiceFullPath).to.contain("pact-mock-service");
		expect(pact.stubPath).to.contain("pact-stub-service");
		expect(pact.stubFullPath).to.contain("pact-stub-service");
		expect(pact.verifierPath).to.contain("pact-provider-verifier");
		expect(pact.verifierFullPath).to.contain("pact-provider-verifier");
	});

	it("should return the base directory of the project with 'cwd' (where the package.json file is)", function () {
		expect(fs.existsSync(path.resolve(pact.cwd, 'package.json'))).to.be.true;
	});

	describe("Check if OS specific files are there", function () {

		describe("OSX", function () {
			beforeEach(function () {
				Object.defineProperty(process, 'platform', {
					value: 'darwin'
				});
				Object.defineProperty(process, 'arch', {
					value: null
				});
				pact = require('./pact-standalone');
			});

			it("broker relative path", function () {
				expect(fs.existsSync(path.resolve(basePath, pact.brokerPath))).to.be.true;
			});

			it("broker full path", function () {
				expect(fs.existsSync(pact.brokerFullPath)).to.be.true;
			});

			it("mock service relative path", function () {
				expect(fs.existsSync(path.resolve(basePath, pact.mockServicePath))).to.be.true;
			});

			it("mock service full path", function () {
				expect(fs.existsSync(pact.mockServiceFullPath)).to.be.true;
			});

			it("stub relative path", function () {
				expect(fs.existsSync(path.resolve(basePath, pact.stubPath))).to.be.true;
			});

			it("stub full path", function () {
				expect(fs.existsSync(pact.stubFullPath)).to.be.true;
			});

			it("provider verifier relative path", function () {
				expect(fs.existsSync(path.resolve(basePath, pact.verifierPath))).to.be.true;
			});

			it("provider verifier full path", function () {
				expect(fs.existsSync(pact.verifierFullPath)).to.be.true;
			});
		});

		describe("Linux ia32", function () {
			beforeEach(function () {
				Object.defineProperty(process, 'platform', {
					value: 'linux'
				});
				Object.defineProperty(process, 'arch', {
					value: 'ia32'
				});
				pact = require('./pact-standalone');
			});

			it("broker relative path", function () {
				expect(fs.existsSync(path.resolve(basePath, pact.brokerPath))).to.be.true;
			});

			it("broker full path", function () {
				expect(fs.existsSync(pact.brokerFullPath)).to.be.true;
			});

			it("mock service relative path", function () {
				expect(fs.existsSync(path.resolve(basePath, pact.mockServicePath))).to.be.true;
			});

			it("mock service full path", function () {
				expect(fs.existsSync(pact.mockServiceFullPath)).to.be.true;
			});

			it("stub relative path", function () {
				expect(fs.existsSync(path.resolve(basePath, pact.stubPath))).to.be.true;
			});

			it("stub full path", function () {
				expect(fs.existsSync(pact.stubFullPath)).to.be.true;
			});

			it("provider verifier relative path", function () {
				expect(fs.existsSync(path.resolve(basePath, pact.verifierPath))).to.be.true;
			});

			it("provider verifier full path", function () {
				expect(fs.existsSync(pact.verifierFullPath)).to.be.true;
			});
		});

		describe("Linux X64", function () {
			beforeEach(function () {
				Object.defineProperty(process, 'platform', {
					value: 'linux'
				});
				Object.defineProperty(process, 'arch', {
					value: 'x64'
				});
				pact = require('./pact-standalone');
			});

			it("broker relative path", function () {
				expect(fs.existsSync(path.resolve(basePath, pact.brokerPath))).to.be.true;
			});

			it("broker full path", function () {
				expect(fs.existsSync(pact.brokerFullPath)).to.be.true;
			});

			it("mock service relative path", function () {
				expect(fs.existsSync(path.resolve(basePath, pact.mockServicePath))).to.be.true;
			});

			it("mock service full path", function () {
				expect(fs.existsSync(pact.mockServiceFullPath)).to.be.true;
			});

			it("stub relative path", function () {
				expect(fs.existsSync(path.resolve(basePath, pact.stubPath))).to.be.true;
			});

			it("stub full path", function () {
				expect(fs.existsSync(pact.stubFullPath)).to.be.true;
			});

			it("provider verifier relative path", function () {
				expect(fs.existsSync(path.resolve(basePath, pact.verifierPath))).to.be.true;
			});

			it("provider verifier full path", function () {
				expect(fs.existsSync(pact.verifierFullPath)).to.be.true;
			});
		});

		describe("Windows", function () {
			beforeEach(function () {
				Object.defineProperty(process, 'platform', {
					value: 'win32'
				});
				Object.defineProperty(process, 'arch', {
					value: null
				});
				pact = require('./pact-standalone');
			});

			it("should add '.bat' to the end of the binary names", function () {
				expect(pact.brokerPath).to.contain("pact-broker.bat");
				expect(pact.brokerFullPath).to.contain("pact-broker.bat");
				expect(pact.mockServicePath).to.contain("pact-mock-service.bat");
				expect(pact.mockServiceFullPath).to.contain("pact-mock-service.bat");
				expect(pact.stubPath).to.contain("pact-stub-service.bat");
				expect(pact.stubFullPath).to.contain("pact-stub-service.bat");
				expect(pact.verifierPath).to.contain("pact-provider-verifier.bat");
				expect(pact.verifierFullPath).to.contain("pact-provider-verifier.bat");
			});

			it("broker relative path", function () {
				expect(fs.existsSync(path.resolve(basePath, pact.brokerPath))).to.be.true;
			});

			it("broker full path", function () {
				expect(fs.existsSync(pact.brokerFullPath)).to.be.true;
			});

			it("mock service relative path", function () {
				expect(fs.existsSync(path.resolve(basePath, pact.mockServicePath))).to.be.true;
			});

			it("mock service full path", function () {
				expect(fs.existsSync(pact.mockServiceFullPath)).to.be.true;
			});

			it("stub relative path", function () {
				expect(fs.existsSync(path.resolve(basePath, pact.stubPath))).to.be.true;
			});

			it("stub full path", function () {
				expect(fs.existsSync(pact.stubFullPath)).to.be.true;
			});

			it("provider verifier relative path", function () {
				expect(fs.existsSync(path.resolve(basePath, pact.verifierPath))).to.be.true;
			});

			it("provider verifier full path", function () {
				expect(fs.existsSync(pact.verifierFullPath)).to.be.true;
			});
		});
	});
});
