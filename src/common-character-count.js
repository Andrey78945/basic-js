const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const fillMap = function(s) {
    let result = new Map;
    s.split('').forEach((el) => {
      if (!result.has(el)) {
        result.set(el, 0);
      }
      result.set(el, result.get(el) + 1);
    })
    return result;
  }

  let map1 = fillMap(s1);
  let map2 = fillMap(s2);
  for (let key of map1.keys()) {
    if (map2.has(key)) {
      count += Math.min(map1.get(key), map2.get(key));
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
