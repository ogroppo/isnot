var expect = require("chai").expect;
const {isArray, isEmptyArray, isNotEmptyArray} = require("../lib/arrays");

describe("Test Arrays utilities", function() {
    describe("isArray", function() {
			it("checks correctly", function() {
				expect(isArray([])).to.equal(true);
				expect(isArray([1,2,3])).to.equal(true);
				expect(isArray(['1','2','3'])).to.equal(true);
				expect(isArray({})).to.equal(false);
				expect(isArray([{}])).to.equal(true);
				expect(isArray(null)).to.equal(false);
				expect(isArray(undefined)).to.equal(false);
				expect(isArray(()=>{})).to.equal(false);
			});
    });
    describe("isEmptyArray", function() {
			it("checks correctly", function() {
				expect(isEmptyArray([])).to.equal(true);
				expect(isEmptyArray([1,2,3])).to.equal(false);
				expect(isEmptyArray(['1','2','3'])).to.equal(false);
				expect(isEmptyArray({})).to.equal(false);
				expect(isEmptyArray([{}])).to.equal(false);
				expect(isEmptyArray(null)).to.equal(false);
				expect(isEmptyArray(undefined)).to.equal(false);
				expect(isEmptyArray(()=>{})).to.equal(false);
			});
    });
    describe("isNotEmptyArray", function() {
			it("checks correctly", function() {
				expect(isNotEmptyArray([])).to.equal(false);
				expect(isNotEmptyArray([1,2,3])).to.equal(true);
				expect(isNotEmptyArray(['1','2','3'])).to.equal(true);
				expect(isNotEmptyArray({})).to.equal(false);
				expect(isNotEmptyArray([{}])).to.equal(true);
				expect(isNotEmptyArray(null)).to.equal(false);
				expect(isNotEmptyArray(undefined)).to.equal(false);
				expect(isNotEmptyArray(()=>{})).to.equal(false);
			});
    });
});
