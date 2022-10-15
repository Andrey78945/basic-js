const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (arr.every(el => !(Array.isArray(el)))) {
      return 1;
    }   
    let res = new Array;
    arr.forEach(element => {
      if (Array.isArray(element)) { 
        res.push(1 + this.calculateDepth(element)); 
      }
    });  
    return res.sort((a, b) => b - a)[0];
  }
}

module.exports = {
  DepthCalculator
};
