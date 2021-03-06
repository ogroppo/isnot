const expect = require("chai").expect;
const { isEmpty } = require("../src/generic");

describe("generic", function () {
  describe("isEmpty", function () {
    it("checks correctly", function () {
      expect(isEmpty("")).to.equal(true);
      expect(isEmpty([])).to.equal(true);
      expect(isEmpty({})).to.equal(true);
      expect(isEmpty([1, 2, 3])).to.equal(false);
      expect(isEmpty({ a: 1 })).to.equal(false);
      expect(isEmpty([{}])).to.equal(false);
      expect(isEmpty(0)).to.equal(false);
      expect(isEmpty(null)).to.equal(true);
      expect(isEmpty(undefined)).to.equal(true);
      expect(isEmpty(() => {})).to.equal(false);
    });
  });
});
