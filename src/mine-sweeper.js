const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let hight = matrix.length
  let width = hight > 0 ? matrix[0].length : 0;
  let res = new Array(hight);
  for (let j = 0; j < hight; j++) {
    res[j] = new Array(width);
    for (let i = 0; i < width; i++) {
      res[j][i] = 0;
      if (j-1 >= 0 && i-1 >= 0) res[j][i] += +matrix[j-1][i-1];
      if (j-1 >= 0) res[j][i] += +matrix[j-1][i];
      if (j-1 >= 0 && i+1 < width) res[j][i] += +matrix[j-1][i+1];
      if (i-1 >= 0) res[j][i] += +matrix[j][i-1];
      if (i+1 < width) res[j][i] += +matrix[j][i+1];
      if (j+1 < hight && i-1 >= 0) res[j][i] += +matrix[j+1][i-1] 
      if (j+1 < hight) res[j][i] += +matrix[j+1][i] 
      if (j+1 < hight && i+1 < width) res[j][i] += +matrix[j+1][i+1]
    }
  }
  return res;
}

module.exports = {
  minesweeper
};
