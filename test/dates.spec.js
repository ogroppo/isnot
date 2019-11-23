var expect = require('chai').expect;
const {isDate, isNotdate} = require('../lib/dates');

describe('dates', () => {
  describe('isDate', () => {
    it('valid', () => {
			expect(isDate(new Date)).to.equal(true);
			expect(isDate(new Date())).to.equal(true);
		})
    it('invalid', () => {
			expect(isDate([])).to.equal(false);
			expect(isDate({})).to.equal(false);
			expect(isDate(new Date().toString())).to.equal(false);
			expect(isDate(new Date().toISOString())).to.equal(false);
		})
  });
});
