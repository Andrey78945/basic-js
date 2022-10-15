const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof str !== String) {
    str = String(str);
  }
  let res = str; 
  let additionSeparator = options.additionSeparator ?? '|';
  let separator = options.separator ?? '+';
  let addition = '';
  if (options.hasOwnProperty('addition')) {
    addition = String(options.addition); 
  } 
  str += addition; 
  if (options.additionRepeatTimes > 1) {
    for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
    str += additionSeparator + addition; 
  }
  }
  res = str;
  for (let i = 0; i < options.repeatTimes - 1; i++) { 
    res += separator + str; 
  }
  return res;
}

module.exports = {
  repeater
};
