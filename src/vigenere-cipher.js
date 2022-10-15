const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type) {
    this.direction = true;
    if (type === false) {
      this.direction = false;
    }
  }

  process(message, key, method) {
    if (!arguments || arguments[0] === undefined || arguments.length < 2 || arguments[1] === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let size = message.length
    let src = new Array(size); 
    message = message.toUpperCase(); 
    key = key.toUpperCase(); 
    for (let i = 0, j = 0; i < size; i++) {
      let code = message.charCodeAt(i); 
      if (code > 64 && code < 91) { 
        if (method === 'encrypt') {
          code = (code + key.charCodeAt(j) - 130) % 26 + 65; 
        } else {
          let temp = code - key.charCodeAt(j);
        temp = temp < 0 ? 26 + temp : temp;
        code = temp % 26 + 65;  
        }        
        j++;
        if (j > key.length - 1) {
            j = 0;
        }
      }      
      src[i] = code;
    }
    if (!this.direction) return String.fromCharCode(...src.reverse());
    return String.fromCharCode(...src);
  }

  encrypt(message, key) {
    return this.process(message, key, 'encrypt');
  }

  decrypt(encriptedMessage, key) {
    return this.process(encriptedMessage, key, 'decrypt');
  }
}

module.exports = {
  VigenereCipheringMachine
};
