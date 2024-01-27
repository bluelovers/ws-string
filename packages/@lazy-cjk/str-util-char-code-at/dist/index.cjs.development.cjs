'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function split(str) {
  return str.toString().split('');
}
function charCodeAt(str, cb) {
  let ret = [];
  if (typeof cb !== 'function') {
    cb = void 0;
  }
  let _str = Array.isArray(str) ? str : str.toString();
  for (let char of _str) {
    let charCode = char.charCodeAt();
    let r;
    if (cb && (r = cb(char, charCode, str), typeof r != 'undefined')) {
      if (!r) {
        continue;
      } else if (Array.isArray(r)) {
        ret = ret.concat(r);
        continue;
      }
    }
    ret.push(charCode);
  }
  return ret;
}

exports.charCodeAt = charCodeAt;
exports.default = charCodeAt;
exports.split = split;
//# sourceMappingURL=index.cjs.development.cjs.map
