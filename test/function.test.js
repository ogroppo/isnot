var expect = require("chai").expect;
const {isFunction, isNotFunction, isPromise, isNotPromise} = require("../lib/function");

describe("Test Function utilities", function() {
  describe("isFunction", function() {
		it("checks correctly", function() {
			expect(isFunction('')).to.equal(false);
			expect(isFunction(true)).to.equal(false);
			expect(isFunction({})).to.equal(false);
			expect(isFunction(null)).to.equal(false);
			expect(isFunction(1)).to.equal(false);
			expect(isFunction(new Function())).to.equal(true);
			expect(isFunction(()=>{})).to.equal(true);
			expect(isFunction(function(){})).to.equal(true);
		});
  });
  describe("isNotFunction", function() {
		it("checks correctly", function() {
			expect(isNotFunction([])).to.equal(true);
		});
  });
  describe("isPromise", function() {
		it("valid", function() {
			expect(isPromise(new Promise((res, rej)=>res(1)))).to.equal(true);
		});
		it("invalid", function() {
			expect(isPromise(new Object)).to.equal(false);
		});
  });
  describe("isNotPromise", function() {
		it("valid", function() {
			expect(isNotPromise(()=>{})).to.equal(true);
		});
		it("invalid", function() {
			expect(isNotPromise(new Promise(()=>{}))).to.equal(false);
		});
  });
});
