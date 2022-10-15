const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = { 
  'links' : [],

  getLength() {
    return this.links.length;
  },

  addLink(value='( )') {
    this.links.push(String(value));
    return this;
  },

  removeLink(position) {
    if (position > 0 && position <= this.getLength()) {
      this.links.splice(position - 1, 1);
    } else {
      throw new Error('You can\'t remove incorrect link!')
    }   
    return this;
  },

  reverseChain() {
    this.links.reverse();
    return this;
  },

  finishChain() {
    let res = ''
    if (this.getLength() > 0) {
      res = `( ${this.links[0]} )`;
      for (let i = 1; i < this.getLength(); i++) {
        res += `~~( ${this.links[i]} )`;
      }
    }    
    return res;
  }
};

module.exports = {
  chainMaker
};
