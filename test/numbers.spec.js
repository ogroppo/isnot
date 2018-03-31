const expect = require("chai").expect;
const {isInt, isNotInt, isNumber, isNotNumber, isOdd, isEven, isPositive, isNotPositive} = require("../lib/numbers");

describe("Test Numbers utilities", function() {
  describe("isNumber", function() {
    it("checks correctly", function() {
      expect(isNumber('string')).to.equal(false);
      expect(isNumber('33')).to.equal(false);
      expect(isNumber('-33')).to.equal(false);
      expect(isNumber('2e12')).to.equal(false);
      expect(isNumber('\t\t')).to.equal(false);
      expect(isNumber('\n\r')).to.equal(false);
      expect(isNumber(Infinity)).to.equal(false);
      expect(isNumber(-Infinity)).to.equal(false);
      expect(isNumber(null)).to.equal(false);
      expect(isNumber(undefined)).to.equal(false);
      expect(isNumber({})).to.equal(false);
      expect(isNumber([])).to.equal(false);
      expect(isNumber(0)).to.equal(true);
      expect(isNumber(000)).to.equal(true);
      expect(isNumber(0912312)).to.equal(true);
      expect(isNumber(12.44)).to.equal(true);
      expect(isNumber(-1244)).to.equal(true);
      expect(isNumber(2e12)).to.equal(true);
    });
  });
  describe("isNotNumber", function() {
    it("checks correctly", function() {
      expect(isNotNumber('string')).to.equal(true);
      expect(isNotNumber(1)).to.equal(false);
    });
  });
  describe("isInt", function() {
    it("checks correctly", function() {
      expect(isInt('string')).to.equal(false);
      expect(isInt('33')).to.equal(false);
      expect(isInt('-33')).to.equal(false);
      expect(isInt('2e12')).to.equal(false);
      expect(isInt('\t\t')).to.equal(false);
      expect(isInt('\n\r')).to.equal(false);
      expect(isInt(Infinity)).to.equal(false);
      expect(isInt(-Infinity)).to.equal(false);
      expect(isInt(null)).to.equal(false);
      expect(isInt(undefined)).to.equal(false);
      expect(isInt({})).to.equal(false);
      expect(isInt([])).to.equal(false);
      expect(isInt(0)).to.equal(true);
      expect(isInt(000)).to.equal(true);
      expect(isInt(0912312)).to.equal(true);
      expect(isInt(12.44)).to.equal(false);
      expect(isInt(-1244)).to.equal(true);
      expect(isInt(2e12)).to.equal(true);
      expect(isInt(2.44e1)).to.equal(false);
    });
  });
  describe("isNotInt", function() {
    it("checks correctly", function() {
      expect(isNotInt('string')).to.equal(true);
      expect(isNotInt(1.1)).to.equal(true);
      expect(isNotInt(1)).to.equal(false);
    });
  });
  describe("isOdd", function() {
    it("checks correctly", function() {
      expect(isOdd('string')).to.equal(false);
      expect(isOdd(1)).to.equal(true);
      expect(isOdd(1.1)).to.equal(false);
      expect(isOdd(-1-2)).to.equal(true);
    });
  });
  describe("isEven", function() {
    it("checks correctly", function() {
      expect(isEven('string')).to.equal(false);
      expect(isEven(1)).to.equal(false);
      expect(isEven(0)).to.equal(true);
      expect(isEven(Infinity)).to.equal(false);
      expect(isEven(-0)).to.equal(true);
    });
  });
  describe("isPositive", function() {
    it("checks correctly", function() {
      expect(isPositive('string')).to.equal(false);
      expect(isPositive(1)).to.equal(true);
      expect(isPositive(0)).to.equal(false);
      expect(isPositive(Infinity)).to.equal(false);
      expect(isPositive(-0)).to.equal(false);
      expect(isPositive('0')).to.equal(false);
    });
  });
  describe("isNotPositive", function() {
    it("checks correctly", function() {
      expect(isNotPositive(0)).to.equal(true);
      expect(isNotPositive(1)).to.equal(false);
      expect(isNotPositive(0.99)).to.equal(true);
    });
  });
});
