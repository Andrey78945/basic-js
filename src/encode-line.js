const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    for (let j = i; j < str.length; j++) {
      if ((j + 1) < str.length && str[j + 1] === str[i]) {
        count++;
      } else {
        if (count === 1) {
          result += str[i];
        } else {
          result += String(count) + str[i];
          i += count - 1;          
        }
        break;
      }      
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
