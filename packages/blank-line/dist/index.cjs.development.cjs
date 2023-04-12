'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var execall2 = require('execall2');

const LF = "\n";
function normalize(txt) {
  return String(txt).replace(/\r\n|\r(?!\n)|\n/g, LF).replace(/\uFEFF/g, '').replace(/[  \xA0]/g, ' ').replace(/[ \t　\xA0\u3000]+\n/g, '\n').replace(/^\n+|[\s　\xA0\u3000]+$/g, '');
}

function getBlankLine(txt, options = {}) {
  let _ms = execall2.execall(/\n+/g, normalize(txt));
  if (_ms.length) {
    let _ret = _ms.reduce(function (a, b) {
      a.push(b.match.length);
      return a;
    }, []);
    if (options.filter) {
      _ret = _ret.filter(function (v, i, a) {
        return a.indexOf(v) == i;
      });
    }
    if (options.sort) {
      _ret.sort(function (a, b) {
        return a - b;
      });
    }
    return _ret;
  }
  return null;
}
function getMinMidMax(txt) {
  let _ms = getBlankLine(txt, {
    filter: true,
    sort: true
  });
  if (!(_ms !== null && _ms !== void 0 && _ms.length)) {
    return [null, null, null];
  }
  let min = _ms[0] || null;
  let max = _ms[_ms.length - 1] || min;
  let mid = _ms[1] || min;
  return [min, mid, max];
}

exports.default = getMinMidMax;
exports.getBlankLine = getBlankLine;
exports.getMinMidMax = getMinMidMax;
exports.normalize = normalize;
//# sourceMappingURL=index.cjs.development.cjs.map
