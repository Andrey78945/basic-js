const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let res = new Array;
  let map = new Map; 
  names.forEach((name) =>{  
    if (!map.has(name)) {
      map.set(name, 0);
    }  
    let count = map.get(name) + 1;
    map.set(name, count);
    if (count === 1) {
      res.push(name);
    } else {
      res.push(name + `(${count - 1})`);
      map.set(name + `(${count - 1})`, 1)
    } 
  })
  return res;
  }

module.exports = {
  renameFiles
};
