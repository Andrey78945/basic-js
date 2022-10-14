const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof(sampleActivity) !== typeof("")) {
    return false;
  }
  let arg = Number(sampleActivity);
  if (isNaN(arg) || arg < 0 || arg > 15 || arg === 0) {
    return false;
  }
  let years = Math.ceil(-Math.log(arg / MODERN_ACTIVITY) / .693 * HALF_LIFE_PERIOD); 
  return years;
}

module.exports = {
  dateSample
};
