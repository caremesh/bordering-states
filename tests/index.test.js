const borderingStates = require('../index');
const expect = require('chai').expect;
describe('getBorderingStates', function() {
  it('should return an error when the abbreviation is not known', function() {
    expect(borderingStates).to.throw();
  });

  it('should return an array of states when a valid abbreviation is known', function() {
    const data = borderingStates('AL');
    expect(data).to.eql(['FL', 'GA', 'MS', 'TN']);
  });

  describe('setting options', function() {
    it('inclusive=true should include the original state', function() {
      const data = borderingStates('AL', {inclusive: true});
      expect(data).to.eql(['AL', 'FL', 'GA', 'MS', 'TN']);
    });
  });
});
