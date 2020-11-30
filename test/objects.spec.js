var expect = require("chai").expect;
const {
  isObject,
  isNotObject,
  isEmptyObject,
  isNotEmptyObject,
} = require("../src/objects");

describe("Test Object utilities", function () {
  describe("isObject", function () {
    it("valid", function () {
      expect(isObject({})).to.equal(true);
      expect(isObject({ a: "b" })).to.equal(true);
      expect(isObject(new Object())).to.equal(true);
      expect(isObject(new Object())).to.equal(true);
      expect(isObject(Object.assign({}, { ciao: "1" }))).to.equal(true);
    });
    it("invalid", function () {
      expect(isObject([])).to.equal(false);
      expect(isObject(["1", "2", "3"])).to.equal(false);
      expect(isObject(0)).to.equal(false);
      expect(isObject(null)).to.equal(false);
      expect(isObject(undefined)).to.equal(false);
      expect(isObject(Infinity)).to.equal(false);
      expect(isObject(Date)).to.equal(false);
      expect(isObject(new Date())).to.equal(false);
      expect(isObject(Symbol("lol"))).to.equal(false);
    });
  });
  describe("isNotObject", function () {
    it("valid", function () {
      expect(isNotObject([])).to.equal(true);
      expect(isNotObject(null)).to.equal(true);
    });
  });
  describe("isEmptyObject", function () {
    it("valid", function () {
      expect(isEmptyObject({})).to.equal(true);
      expect(isEmptyObject(Object({}))).to.equal(true);
      expect(isEmptyObject(Object())).to.equal(true);
      expect(isEmptyObject(new Object())).to.equal(true);
    });
    it("invalid", function () {
      expect(isEmptyObject([])).to.equal(false);
      expect(isEmptyObject(["1", "2", "3"])).to.equal(false);
      expect(isEmptyObject({ a: "b" })).to.equal(false);
      expect(isEmptyObject(0)).to.equal(false);
      expect(isEmptyObject(null)).to.equal(false);
      expect(isEmptyObject(undefined)).to.equal(false);
      expect(isEmptyObject(() => {})).to.equal(false);
    });
  });
  describe("isNotEmptyObject", function () {
    it("valid", function () {
      expect(isNotEmptyObject({ a: "b" })).to.equal(true);
    });
    it("invalid", function () {
      expect(isNotEmptyObject({})).to.equal(false);
      expect(isNotEmptyObject(Object())).to.equal(false);
      expect(isNotEmptyObject(["b"])).to.equal(false);
    });
  });
});
