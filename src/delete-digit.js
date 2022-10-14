const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let n_string = String(n);
  let size = n_string.length;
  if (size === 1) return n;
  if (size === 2) {
    return Math.max(Number(n_string[0]), Number(n_string[1]))
  }
  if (Number(n_string[0]) < Number(n_string[1])) {
    return Number(n_string.slice(1));
  }
  for (let i = 0; i < size; ++i) {
    if (Number(n_string[i]) < Number(n_string[i + 1])) {
      return Number(n_string.slice(0, i) + n_string.slice(i + 1));
    }
  }
}

module.exports = {
  deleteDigit
};
