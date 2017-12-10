var expect = require("chai").expect;
const {isFunction, isNotFunction} = require("../lib/function");

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
});
