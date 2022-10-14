const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  domains.forEach((domain) => {
    let temp = domain.split('.');
    let path ='';
    for (let i = temp.length - 1; i >= 0; i--) {
      path += '.' + temp[i];
      if (!result.hasOwnProperty(path)) {
        result[path] = 0;
      }
      result[path] +=1
    }
  })
  return result;
}

module.exports = {
  getDNSStats
};
