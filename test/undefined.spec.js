var expect = require("chai").expect;
import { isUndefined, isNotUndefined } from "../src/undefined";

describe("Test Undefined utilities", function () {
  describe("isUndefined", function () {
    it("checks correctly", function () {
      expect(isUndefined("")).to.equal(false);
      expect(isUndefined(true)).to.equal(false);
      expect(isUndefined(false)).to.equal(false);
      expect(isUndefined(undefined)).to.equal(true);
      expect(isUndefined(undefined === undefined)).to.equal(false);
      expect(isUndefined({}.inventedProp)).to.equal(true);
      expect(isUndefined(typeof inventedProp)).to.equal(false);
    });
  });

  describe("isNotUndefined", function () {
    it("checks correctly", function () {
      expect(isNotUndefined(undefined)).to.equal(false);
      expect(isNotUndefined(true)).to.equal(true);
    });
  });
});
