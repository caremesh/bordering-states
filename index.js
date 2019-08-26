const stateMap = require('./stateMap');
module.exports = function(stateAbbreviation, opts) {
  const options = {
    inclusive: false,
    ...opts,
  };

  if (Object.keys(stateMap).indexOf(stateAbbreviation) === -1) {
    throw new Error(`Unknown state abbreviation: ${stateAbbreviation}`);
  }

  const result = stateMap[stateAbbreviation];
  if (options.inclusive) {
    result.unshift(stateAbbreviation);
  }

  return result;
};
