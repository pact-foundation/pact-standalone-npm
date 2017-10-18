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
		expect(pact.mockServicePath).to.be.ok;
		expect(pact.mockServiceFullPath).to.be.ok;
		expect(pact.verifierPath).to.be.ok;
		expect(pact.verifierFullPath).to.be.ok;
		expect(pact.publisherPath).to.be.ok;
		expect(pact.publisherFullPath).to.be.ok;
	});
	
	it("should return the base directory of the project with 'cwd' (where the package.json file is)", function () {
		expect(fs.existsSync(path.resolve(pact.cwd, 'package.json'))).to.be.true;
	});
	
	describe("Check if OS specific files are there", function () {
		
		describe("OSX", function () {
			beforeEach(function () {
				process.platform = "darwin";
				process.arch = null;
				pact = require('./pact-standalone');
			});
			
			it("mock service relative path", function () {
				expect(fs.existsSync(path.resolve(basePath, pact.mockServicePath))).to.be.true;
			});
			
			it("mock service full path", function () {
				expect(fs.existsSync(pact.mockServiceFullPath)).to.be.true;
			});
			
			it("provider verifier relative path", function () {
				expect(fs.existsSync(path.resolve(basePath, pact.verifierPath))).to.be.true;
			});
			
			it("provider verifier full path", function () {
				expect(fs.existsSync(pact.verifierFullPath)).to.be.true;
			});
			
			it("publisher relative path", function () {
				expect(fs.existsSync(path.resolve(basePath, pact.publisherPath))).to.be.true;
			});
			
			it("publisher full path", function () {
				expect(fs.existsSync(pact.publisherFullPath)).to.be.true;
			});
		});
		
		describe("Linux ia32", function () {
			beforeEach(function () {
				process.platform = "linux";
				process.arch = "ia32";
				pact = require('./pact-standalone');
			});
			
			it("mock service relative path", function () {
				expect(fs.existsSync(path.resolve(basePath, pact.mockServicePath))).to.be.true;
			});
			
			it("mock service full path", function () {
				expect(fs.existsSync(pact.mockServiceFullPath)).to.be.true;
			});
			
			it("provider verifier relative path", function () {
				expect(fs.existsSync(path.resolve(basePath, pact.verifierPath))).to.be.true;
			});
			
			it("provider verifier full path", function () {
				expect(fs.existsSync(pact.verifierFullPath)).to.be.true;
			});

			it("publisher relative path", function () {
				expect(fs.existsSync(path.resolve(basePath, pact.publisherPath))).to.be.true;
			});

			it("publisher full path", function () {
				expect(fs.existsSync(pact.publisherFullPath)).to.be.true;
			});
		});
		
		describe("Linux X64", function () {
			beforeEach(function () {
				process.platform = "linux";
				process.arch = "x64";
				pact = require('./pact-standalone');
			});
			
			it("mock service relative path", function () {
				expect(fs.existsSync(path.resolve(basePath, pact.mockServicePath))).to.be.true;
			});
			
			it("mock service full path", function () {
				expect(fs.existsSync(pact.mockServiceFullPath)).to.be.true;
			});
			
			it("provider verifier relative path", function () {
				expect(fs.existsSync(path.resolve(basePath, pact.verifierPath))).to.be.true;
			});
			
			it("provider verifier full path", function () {
				expect(fs.existsSync(pact.verifierFullPath)).to.be.true;
			});

			it("publisher relative path", function () {
				expect(fs.existsSync(path.resolve(basePath, pact.publisherPath))).to.be.true;
			});

			it("publisher full path", function () {
				expect(fs.existsSync(pact.publisherFullPath)).to.be.true;
			});
		});
		
		describe("Windows", function () {
			beforeEach(function () {
				process.platform = "win32";
				process.arch = null;
				pact = require('./pact-standalone');
			});
			
			it("mock service relative path", function () {
				expect(fs.existsSync(path.resolve(basePath, pact.mockServicePath))).to.be.true;
			});
			
			it("mock service full path", function () {
				expect(fs.existsSync(pact.mockServiceFullPath)).to.be.true;
			});
			
			it("provider verifier relative path", function () {
				expect(fs.existsSync(path.resolve(basePath, pact.verifierPath))).to.be.true;
			});
			
			it("provider verifier full path", function () {
				expect(fs.existsSync(pact.verifierFullPath)).to.be.true;
			});

			it("publisher relative path", function () {
				expect(fs.existsSync(path.resolve(basePath, pact.publisherPath))).to.be.true;
			});

			it("publisher full path", function () {
				expect(fs.existsSync(pact.publisherFullPath)).to.be.true;
			});
		});
	});
});
