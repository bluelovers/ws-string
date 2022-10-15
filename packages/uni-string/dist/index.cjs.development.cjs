'use strict';

var runes2 = require('runes2');
var es6ClassPrototype = require('es6-class-prototype');

const STRING_PROTOTYPE = /*#__PURE__*/Object.getOwnPropertyNames(String.prototype);
class UString extends String {
  _arr = null;
  constructor(str, ...argv) {
    super(str);
    let d = Object.getOwnPropertyDescriptor(this, '_arr');
    Object.defineProperty(this, '_arr', Object.assign(d, {
      configurable: true,
      enumerable: false
    }));
  }
  [Symbol.iterator]() {
    return UString.toArray(this)[Symbol.iterator]();
  }
  static isString(str) {
    return typeof str === 'string' || str instanceof String;
  }
  static toArray(str) {
    if (str instanceof UString) {
      return str.toArray();
    }
    return runes2.runes(String(str));
  }
  toArray() {
    if (!this._arr) {
      this._arr = runes2.runes(String(this));
    }
    return this._arr;
  }
  split(separator, limit) {
    let ret;
    let str = String(this);
    if (separator === '') {
      ret = UString.toArray(this);
      if (typeof limit !== 'undefined') {
        ret = ret.slice(0, limit);
      }
    } else {
      ret = String.prototype.split.call(str, separator, limit);
    }
    return ret;
  }
  substr(start, length) {
    return UString.toArray(this).slice(start).slice(0, length).join('');
  }
  substring(start, indexEnd) {
    if (Number.isNaN(start) || start < 0) {
      start = 0;
    }
    if (typeof indexEnd === 'number') {
      if (Number.isNaN(indexEnd) || indexEnd < 0) {
        indexEnd = 0;
      }
      if (start > indexEnd) {
        [start, indexEnd] = [indexEnd, start];
      }
    }
    return this.slice(start, indexEnd);
  }
  indexOf(search, start = 0) {
    let a = UString.toArray(this);
    start = Math.max(0, Math.min(a.length, start));
    search = String(search);
    if (search === '') {
      return start;
    }
    a = a.slice(start);
    let s = UString.toArray(search);
    let i = 0;
    let j = 0;
    let se = s[s.length - 1];
    do {
      i = a.indexOf(s[0], j);
      if (i !== -1) {
        if (a.slice(i, i + s.length).join('') === search) {
          return start + i;
        }
        j = i;
        if (s.length > 1) {
          i = a.indexOf(se, i + 1);
          j = i - s.length;
        }
      }
      j++;
    } while (i !== -1 && j < a.length);
    return -1;
  }
  includes(search, start = 0) {
    return UString.toArray(this).slice(start).join('').indexOf(search) !== -1;
  }
  slice(start, indexEnd) {
    return UString.toArray(this).slice(start, indexEnd).join('');
  }
  charAt(index) {
    return this.substr(index, 1);
  }
  startsWith(search, pos) {
    return this.substr(!pos || pos < 0 ? 0 : +pos, search.length).indexOf(search) === 0;
  }
  endsWith(search, length) {
    let a = UString.toArray(this);
    let s = UString.toArray(search);
    if (typeof length === 'undefined' || length > a.length) {
      length = a.length;
    }
    return this.substring(length - s.length, length) === search;
  }
  padEnd(targetLength, padString) {
    targetLength = targetLength >> 0;
    padString = String(typeof padString !== 'undefined' ? padString : ' ');
    let str = this.split('');
    let pad = this.split.call(padString, '');
    if (str.length > targetLength) {
      return String(this);
    } else {
      targetLength = targetLength - str.length;
      if (targetLength > pad.length) {
        padString += padString.repeat(targetLength / pad.length);
        pad = new UString(padString);
      }
      return String(this) + pad.slice(0, targetLength);
    }
  }
  padStart(targetLength, padString) {
    targetLength = targetLength >> 0;
    padString = String(typeof padString !== 'undefined' ? padString : ' ');
    let str = this.split('');
    let pad = this.split.call(padString, '');
    if (str.length > targetLength) {
      return String(this);
    } else {
      targetLength = targetLength - str.length;
      if (targetLength > pad.length) {
        padString += padString.repeat(targetLength / pad.length);
        pad = new UString(padString);
      }
      return pad.slice(0, targetLength) + String(this);
    }
  }
  codePointAt(pos) {
    return this.toArray()[pos].codePointAt(0);
  }
  static UString = UString;
  static default = UString;
  static create(str, ...argv) {
    return new this(str, ...argv);
  }
  static get support() {
    let prototype = es6ClassPrototype.classPrototype(this);
    return Object.keys(prototype).reduce(function (a, b) {
      if (STRING_PROTOTYPE.includes(b)) {
        a[b] = true;
      }
      return a;
    }, {});
  }
  static indexOf(str, search, start = 0) {
    return this.create(str).indexOf(search, start);
  }
  static includes(str, search, start = 0) {
    return this.create(str).includes(search, start);
  }
  static split(str, separator, limit) {
    return this.create(str).split(separator, limit);
  }
  static substr(str, start, length) {
    return this.create(str).substr(start, length);
  }
  static substring(str, start, indexEnd) {
    return this.create(str).substring(start, indexEnd);
  }
  static slice(str, start, indexEnd) {
    return this.create(str).slice(start, indexEnd);
  }
  static charAt(str, index) {
    return this.create(str).charAt(index);
  }
  static padEnd(str, targetLength, padString) {
    return this.create(str).padEnd(targetLength, padString);
  }
  static padStart(str, targetLength, padString) {
    return this.create(str).padStart(targetLength, padString);
  }
  static startsWith(str, search, pos) {
    return this.create(str).startsWith(search, pos);
  }
  static endsWith(str, search, length) {
    return this.create(str).endsWith(search, length);
  }
  get charLength() {
    return UString.toArray(this).length;
  }
  size() {
    return UString.toArray(this).length;
  }
  static size(str) {
    return this.create(str).size();
  }
  static codePointAt(str, pos) {
    return this.create(str).codePointAt(pos);
  }
}
{
  Object.defineProperty(UString, 'UString', {
    value: UString
  });
  Object.defineProperty(UString, 'default', {
    value: UString
  });
  Object.defineProperty(UString, "__esModule", {
    value: true
  });
}

// @ts-ignore
// @ts-ignore
module.exports = UString;
//# sourceMappingURL=index.cjs.development.cjs.map
