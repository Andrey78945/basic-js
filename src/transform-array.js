const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  const commands = [`--discard-next`, `--discard-prev`, `--double-next`, `--double-prev`];
  let result = new Array;
  let size = arr.length;
  for (let i = 0; i < size; i++) {
    if (arr[i] === commands[0]) {
      if (i < size - 1) {
      i++; }
      if (commands.includes(arr[i + 1])) {
        i++;
      }
      continue;
    } else
    if (arr[i] === commands[1]) {
      if (result.length > 0) {
        result.pop();
      continue;
      } else {
        continue;
      }       
    } else
    if (arr[i] === commands[2]) {
      if (i < size - 1) {
        result.push(arr[i + 1]);
      }      
      continue;
    } else
    if (arr[i] === commands[3]) {
      if (result.length > 0) {
      result.push(arr[i - 1]);
      continue;}
      else {
        continue;
      }
    } else {
      result.push(arr[i]);
    }    
  }
  return result;
}

module.exports = {
  transform
};
