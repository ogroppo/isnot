var expect = require("chai").expect;
const {
    isString,
    isNotString,
		isEmptyString,
		isNotEmptyString,
    isName,
    isNotName,
    isEmail,
    isNotEmail,
    isVariableName,
    isNotVariableName,
    isURL,
    isNotURL,
    isISOString,
    isNotISOString
} = require("../lib/strings");

describe("Test Strings utilities", function() {
    describe("isString", function() {
      it("checks correctly", function() {
        expect(isString('string')).to.equal(true);
        expect(isString('')).to.equal(true);
        expect(isString(' ')).to.equal(true);
        expect(isString('-33')).to.equal(true);
        expect(isString('2e12')).to.equal(true);
        expect(isString('\t\t')).to.equal(true);
        expect(isString('\n\r')).to.equal(true);
        expect(isString(Infinity)).to.equal(false);
        expect(isString(-Infinity)).to.equal(false);
        expect(isString(null)).to.equal(false);
        expect(isString(undefined)).to.equal(false);
        expect(isString({})).to.equal(false);
        expect(isString([])).to.equal(false);
        expect(isString(0)).to.equal(false);
        expect(isString(000)).to.equal(false);
      });
    });
    describe("isNotString", function() {
      it("checks correctly", function() {
        expect(isNotString('string')).to.equal(false);
        expect(isNotString(['string'])).to.equal(true);
      });
    });
    describe("isEmptyString", function() {
      it("checks correctly", function() {
        expect(isEmptyString('string')).to.equal(false);
        expect(isEmptyString('')).to.equal(true);
        expect(isEmptyString(' ')).to.equal(false);
        expect(isEmptyString('\n')).to.equal(false);
        expect(isEmptyString(' - ')).to.equal(false);
        expect(isEmptyString('\t\t')).to.equal(false);
        expect(isEmptyString('\n\r')).to.equal(false);
        expect(isEmptyString(null)).to.equal(false);
        expect(isEmptyString(undefined)).to.equal(false);
        expect(isEmptyString({})).to.equal(false);
        expect(isEmptyString([])).to.equal(false);
        expect(isEmptyString(0)).to.equal(false);
        expect(isEmptyString(000)).to.equal(false);
      });
    });
    describe("isNotEmptyString", function() {
      it("checks correctly", function() {
        expect(isNotEmptyString('string')).to.equal(true);
        expect(isNotEmptyString('')).to.equal(false);
      });
    });
    describe("isName", function() {
      it("checks correctly", function() {
        expect(isName('')).to.equal(false);
        expect(isName(' ')).to.equal(false);
        expect(isName('\n')).to.equal(false);
        expect(isName('\r')).to.equal(false);
        expect(isName('\n\r')).to.equal(false);
        expect(isName('\t')).to.equal(false);
        expect(isName('a\t')).to.equal(true);
        expect(isName([])).to.equal(false);
        expect(isName({})).to.equal(false);
        expect(isName(11)).to.equal(false);
      });
    });
    describe("isNotName", function() {
      it("checks correctly", function() {
        expect(isNotName('')).to.equal(true);
        expect(isNotName(' ')).to.equal(true);
        expect(isNotName('a')).to.equal(false);
        expect(isNotName([])).to.equal(true);
        expect(isNotName({})).to.equal(true);
        expect(isNotName({}.toString())).to.equal(false);
        expect(isNotName(11)).to.equal(true);
      });
    });
    describe("isEmail", function() {
      it("checks correctly", function() {
        expect(isEmail('a@a.a')).to.equal(true);
        expect(isEmail('1@1.com')).to.equal(true);
        expect(isEmail('1@1-1.com')).to.equal(true);
        expect(isEmail('string')).to.equal(false);
        expect(isEmail('@')).to.equal(false);
        expect(isEmail(' @.')).to.equal(false);
        expect(isEmail('@ma.com')).to.equal(false);
        expect(isEmail('d@\t\t.t')).to.equal(false);
        expect(isEmail('\n\r@gmail.com')).to.equal(false);
        expect(isEmail(null)).to.equal(false);
        expect(isEmail(undefined)).to.equal(false);
        expect(isEmail({})).to.equal(false);
        expect(isEmail([])).to.equal(false);
        expect(isEmail(0)).to.equal(false);
        expect(isEmail(000)).to.equal(false);
      });
    });
    describe("isNotEmail", function() {
      it("checks correctly", function() {
        expect(isNotEmail('a@a.a')).to.equal(false);
      });
    });
    describe("isVariableName", function() {
      it("checks correctly", function() {
        expect(isVariableName('a@a.a')).to.equal(false);
        expect(isVariableName(undefined)).to.equal(false);
        expect(isVariableName(null)).to.equal(false);
        expect(isVariableName(' ')).to.equal(false);
        expect(isVariableName(' ')).to.equal(false);
        expect(isVariableName(' a')).to.equal(false);
        expect(isVariableName('0var')).to.equal(false);
        expect(isVariableName('myVar')).to.equal(true);
        expect(isVariableName('var')).to.equal(true);
        expect(isVariableName('const')).to.equal(true);
        expect(isVariableName('let')).to.equal(true);
        expect(isVariableName('let_let')).to.equal(true);
        expect(isVariableName('let let')).to.equal(false);
      });
    });
    describe("isNotVariableName", function() {
      it("checks correctly", function() {
        expect(isNotVariableName('a@a.a')).to.equal(true);
      });
    });

    describe("isURL", function() {
      it("checks correctly", function() {
        expect(isURL('a@a.a')).to.equal(false);
        expect(isURL('')).to.equal(false);
        expect(isURL(' ')).to.equal(false);
        expect(isURL(undefined)).to.equal(false);
        expect(isURL(null)).to.equal(false);
        expect(isURL('localhost')).to.equal(true);
        expect(isURL('http://localhost')).to.equal(true);
        expect(isURL('https://localhost')).to.equal(true);
        expect(isURL('//localhost')).to.equal(false);
        expect(isURL('bim.bam')).to.equal(true);
      });
    });
    describe("isNotURL", function() {
      it("checks correctly", function() {
        expect(isNotURL('a@a.a')).to.equal(true);
      });
    });
    describe("isISOString", function() {
      it("checks correctly", function() {
        expect(isISOString(new Date().toISOString())).to.equal(true);
        expect(isISOString('2017-06-01T18:43:26.000Z')).to.equal(true);
        expect(isISOString('2017-06-01T18:43:26.000-02:00')).to.equal(true);
      });
    });
    describe("isNotISOString", function() {
      it("checks correctly", function() {
        expect(isNotISOString(undefined)).to.equal(true);
        expect(isNotISOString('a@a.a')).to.equal(true);
        expect(isNotISOString(new Date().toString())).to.equal(true);
      });
    });
});
