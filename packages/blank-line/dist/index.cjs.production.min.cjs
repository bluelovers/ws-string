"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var e = require("execall2");

const n = "\n";

function normalize(e) {
  return String(e).replace(/\r\n|\r(?!\n)|\n/g, n).replace(/\uFEFF/g, "").replace(/[  \xA0]/g, " ").replace(/[ \t　\xA0\u3000]+\n/g, "\n").replace(/^\n+|[\s　\xA0\u3000]+$/g, "");
}

function getBlankLine(n, t = {}) {
  let r = e.execall(/\n+/g, normalize(n));
  if (r.length) {
    let e = r.reduce((function(e, n) {
      return e.push(n.match.length), e;
    }), []);
    return t.filter && (e = e.filter((function(e, n, t) {
      return t.indexOf(e) == n;
    }))), t.sort && e.sort((function(e, n) {
      return e - n;
    })), e;
  }
  return null;
}

function getMinMidMax(e) {
  let n = getBlankLine(e, {
    filter: !0,
    sort: !0
  });
  if (null == n || !n.length) return [ null, null, null ];
  let t = n[0] || null;
  return [ t, n[1] || t, n[n.length - 1] || t ];
}

exports.default = getMinMidMax, exports.getBlankLine = getBlankLine, exports.getMinMidMax = getMinMidMax, 
exports.normalize = normalize;
//# sourceMappingURL=index.cjs.production.min.cjs.map
