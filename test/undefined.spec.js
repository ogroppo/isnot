var expect = require("chai").expect;
const {isUndefined} = require("../lib/undefined");

describe("Test Undefined utilities", function() {
    describe("isUndefined", function() {
		it("checks correctly", function() {
			expect(isUndefined('')).to.equal(false);
			expect(isUndefined(true)).to.equal(false);
			expect(isUndefined(false)).to.equal(false);
			expect(isUndefined(undefined)).to.equal(true);
			expect(isUndefined(inventedVar = undefined)).to.equal(true);
			expect(isUndefined(undefined = undefined)).to.equal(true);
			expect(isUndefined({}.inventedProp)).to.equal(true);
			expect(isUndefined(typeof inventedProp)).to.equal(false);
		});
    });
});