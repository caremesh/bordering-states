const stateMap = require('./stateMap');
exports.get = function(stateAbbreviation) {
  if (Object.keys(stateMap).indexOf(stateAbbreviation) === -1) {
    throw new Error(`Unknown state abbreviation: ${stateAbbreviation}`);
  }

  return stateMap[stateAbbreviation];
};
