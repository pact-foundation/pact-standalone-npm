/* global describe:true, before:true, after:true, it:true, global:true, process:true */

var expect = require('chai').expect;
var pact = require('./index');

describe("Wrapper", function () {
  it("should return an object with cwd, file and fullPath properties that is platform specific", function () {
    expect(pact).to.be.an('object');
    expect(pact.cwd).to.be.ok;
    expect(pact.mockServicePath).to.be.ok;
    expect(pact.mockServiceFullPath).to.be.ok;
    expect(pact.verifierPath).to.be.ok;
    expect(pact.verifierFullPath).to.be.ok;
  });
});
