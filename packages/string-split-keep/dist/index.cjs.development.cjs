'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function stringSplitWithLimit(str, separator, limit) {
  if (!limit || separator === undefined) return str.split(separator, limit);
  if (!separator.length) return limit > 0 ? _splitStart_noSep(str, limit) : _splitEnd_noSep(str, -limit);
  return limit > 0 ? _splitStart(str, separator, limit, 0, []) : _splitEnd(str, separator, -limit, str.length, []);
}
function _splitStart_noSep(str, lim) {
  const ret = [];
  lim = Math.min(lim, str.length) - 1;
  for (let i = 0; i < lim; ++i) ret.push(str[i]);
  ret.push(str.slice(lim));
  return ret;
}
function _splitEnd_noSep(str, lim) {
  const ret = [];
  lim = Math.min(lim, str.length);
  const firstSlice = str.length - lim + 1;
  ret.push(str.slice(0, firstSlice));
  for (let i = firstSlice; i < str.length; ++i) ret.push(str[i]);
  return ret;
}
function _splitStart(str, sep, lim, cur, acc) {
  const index = str.indexOf(sep, cur);
  if (index === -1 || acc.length + 1 === lim) {
    acc.push(str.slice(cur));
    return acc;
  }
  acc.push(str.slice(cur, index));
  return _splitStart(str, sep, lim, index + sep.length, acc);
}
function _splitEnd(str, sep, lim, cur, acc) {
  const index = str.lastIndexOf(sep, cur);
  if (cur === -1 || index === -1 || acc.length + 1 === lim) {
    acc.unshift(str.slice(0, cur + 1));
    return acc;
  }
  acc.unshift(str.slice(index + sep.length, cur + 1));
  return _splitEnd(str, sep, lim, index - 1, acc);
}

exports._splitEnd = _splitEnd;
exports._splitEnd_noSep = _splitEnd_noSep;
exports._splitStart = _splitStart;
exports._splitStart_noSep = _splitStart_noSep;
exports.default = stringSplitWithLimit;
exports.stringSplitWithLimit = stringSplitWithLimit;
//# sourceMappingURL=index.cjs.development.cjs.map
