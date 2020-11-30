var expect = require("chai").expect;
import { isBoolean, isNotBoolean } from "../src/bool";

describe("Test Bool utilities", function () {
  describe("isBoolean", function () {
    it("checks valid", function () {
      expect(isBoolean(true)).to.equal(true);
      expect(isBoolean(false)).to.equal(true);
      expect(isBoolean(new Boolean())).to.equal(true);
      expect(isBoolean(new Boolean(1))).to.equal(true);
      expect(isBoolean(new Boolean(""))).to.equal(true);
      expect(isBoolean(Boolean())).to.equal(true);
    });
    it("checks invalid", function () {
      expect(isBoolean("")).to.equal(false);
      expect(isBoolean({})).to.equal(false);
      expect(isBoolean(null)).to.equal(false);
      expect(isBoolean(1)).to.equal(false);
      expect(isBoolean(Boolean)).to.equal(false); //function
    });
  });
  describe("isNotBoolean", function () {
    it("checks valid", function () {
      expect(isNotBoolean("")).to.equal(true);
    });
    it("checks invalid", function () {
      expect(isNotBoolean(false)).to.equal(false);
    });
  });
});
