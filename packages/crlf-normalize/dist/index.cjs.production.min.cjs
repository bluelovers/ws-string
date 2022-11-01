"use strict";

var e, r;

Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.EnumLineBreak = void 0, (e = exports.EnumLineBreak || (exports.EnumLineBreak = {})).CR = "\r", 
e.CRLF = "\r\n", e.LF = "\n", exports.EnumLineBreakCharCode = void 0, (r = exports.EnumLineBreakCharCode || (exports.EnumLineBreakCharCode = {}))[r.CR = 13] = "CR", 
r[r.LF = 10] = "LF";

const n = /\r\n|\r(?!\n)|\n/g, t = new RegExp(`(${n.source})`, n.flags);

function crlf(e, r = "\n") {
  return e.replace(n, r);
}

function chkcrlf(e, r) {
  var n;
  const t = null !== (n = null == r ? void 0 : r.disable) && void 0 !== n ? n : {};
  return {
    lf: !t.lf && /\n/.test(e.replace(/\r\n/g, "")),
    crlf: !t.crlf && /\r\n/.test(e),
    cr: !t.cr && /\r(?!\n)/.test(e)
  };
}

function _detectLineBreakCore(e) {
  return e.crlf ? "\r\n" : e.lf || !e.cr ? "\n" : "\r";
}

exports.CR = "\r", exports.CRLF = "\r\n", exports.LF = "\n", exports.R_CRLF = n, 
exports.R_CRLF_MATCH = t, exports._detectLineBreakCore = _detectLineBreakCore, exports.chkcrlf = chkcrlf, 
exports.crlf = crlf, exports.crlf_unicode_normalize = function crlf_unicode_normalize(e, r = "\n") {
  const n = r + r;
  return e.replace(/\u000C/g, r + r + r).replace(/\u2028/g, r).replace(/\u2029/g, n);
}, exports.default = crlf, exports.detectCurrentIndexLineBreak = function detectCurrentIndexLineBreak(e, r) {
  const n = e[r], t = r + 1;
  return "\n" === n ? {
    newline: "\n",
    cur: n,
    index: r,
    next: t,
    length: 1
  } : "\r" === n ? "\n" === e[t] ? {
    newline: "\r\n",
    cur: n,
    index: r,
    next: t + 1,
    length: 2
  } : {
    newline: "\r",
    cur: n,
    index: r,
    next: t,
    length: 1
  } : {
    newline: void 0,
    cur: n,
    index: r,
    next: t,
    length: 0
  };
}, exports.detectCurrentIndexLineBreakFromBufferLike = function detectCurrentIndexLineBreakFromBufferLike(e, r) {
  const n = e[r], t = r + 1;
  return 10 === n ? {
    newline: "\n",
    cur: n,
    index: r,
    next: t,
    length: 1
  } : 13 === n ? 10 === e[t] ? {
    newline: "\r\n",
    cur: n,
    index: r,
    next: t + 1,
    length: 2
  } : {
    newline: "\r",
    cur: n,
    index: r,
    next: t,
    length: 1
  } : {
    newline: void 0,
    cur: n,
    index: r,
    next: t,
    length: 0
  };
}, exports.detectLineBreak = function detectLineBreak(e, r) {
  return _detectLineBreakCore(chkcrlf(e, r));
}, exports.isCR = function isCR(e) {
  return "\r" === e;
}, exports.isCRLF = function isCRLF(e) {
  return "\r\n" === e;
}, exports.isEqualWithIgnoreLineSeparators = function isEqualWithIgnoreLineSeparators(e, r) {
  const n = chkcrlf(e), t = chkcrlf(r);
  let i = !1;
  return n.cr === t.cr && n.crlf === t.crlf && n.lf === t.lf && (i = crlf(e) === crlf(r)), 
  {
    bool: i,
    _lb_a: n,
    _lb_b: t
  };
}, exports.isLF = function isLF(e) {
  return "\n" === e;
}, exports.lineSplit = function lineSplit(e) {
  return e.split(n);
}, exports.nameToLineBreak = function nameToLineBreak(e) {
  switch (null == e ? void 0 : e.toUpperCase()) {
   case "LF":
    return "\n";

   case "CR":
    return "\r";

   case "CRLF":
    return "\r\n";
  }
  throw new TypeError(`Invalid line break name: ${e}`);
}, exports.toLineBreakName = function toLineBreakName(e) {
  switch (e) {
   case "\n":
    return "LF";

   case "\r":
    return "CR";

   case "\r\n":
    return "CRLF";
  }
  throw new TypeError("Invalid line break");
};
//# sourceMappingURL=index.cjs.production.min.cjs.map
