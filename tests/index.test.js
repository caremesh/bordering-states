const borderingStates = require('../index');
const expect = require('chai').expect;
describe('getBorderingStates', function() {
  it('should return an error when the abbreviation is not known', function() {
    expect(borderingStates.get).to.throw();
  });

  it('should return an array of states when a valid abbreviation is known', function() {
    const data = borderingStates.get('AL');
    expect(data).to.eql(['FL', 'GA', 'MS', 'TN']);
  });
});
