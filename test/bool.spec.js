var expect = require("chai").expect;
const { isBool, isNotBool } = require("../src/bool");

describe("Test Bool utilities", function () {
  describe("isBool", function () {
    it("checks valid", function () {
      expect(isBool(true)).to.equal(true);
      expect(isBool(false)).to.equal(true);
      expect(isBool(new Boolean())).to.equal(true);
      expect(isBool(new Boolean(1))).to.equal(true);
      expect(isBool(new Boolean(""))).to.equal(true);
      expect(isBool(Boolean())).to.equal(true);
    });
    it("checks invalid", function () {
      expect(isBool("")).to.equal(false);
      expect(isBool({})).to.equal(false);
      expect(isBool(null)).to.equal(false);
      expect(isBool(1)).to.equal(false);
      expect(isBool(Boolean)).to.equal(false); //function
    });
  });
  describe("isNotBool", function () {
    it("checks valid", function () {
      expect(isNotBool("")).to.equal(true);
    });
    it("checks invalid", function () {
      expect(isNotBool(false)).to.equal(false);
    });
  });
});
