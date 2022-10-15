"use strict";

var r;

Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.EnumLineBreak = void 0, (r = exports.EnumLineBreak || (exports.EnumLineBreak = {})).CR = "\r", 
r.CRLF = "\r\n", r.LF = "\n";

const e = /\r\n|\r(?!\n)|\n/g, n = new RegExp(`(${e.source})`, e.flags);

function crlf(r, n = "\n") {
  return r.replace(e, n);
}

function chkcrlf(r, e) {
  var n;
  const t = null !== (n = null == e ? void 0 : e.disable) && void 0 !== n ? n : {};
  return {
    lf: !t.lf && /\n/.test(r.replace(/\r\n/g, "")),
    crlf: !t.crlf && /\r\n/.test(r),
    cr: !t.cr && /\r(?!\n)/.test(r)
  };
}

function _detectLineBreakCore(r) {
  return r.crlf ? "\r\n" : r.lf || !r.cr ? "\n" : "\r";
}

exports.CR = "\r", exports.CRLF = "\r\n", exports.LF = "\n", exports.R_CRLF = e, 
exports.R_CRLF_MATCH = n, exports._detectLineBreakCore = _detectLineBreakCore, exports.chkcrlf = chkcrlf, 
exports.crlf = crlf, exports.crlf_unicode_normalize = function crlf_unicode_normalize(r, e = "\n") {
  const n = e + e;
  return r.replace(/\u000C/g, e + e + e).replace(/\u2028/g, e).replace(/\u2029/g, n);
}, exports.default = crlf, exports.detectLineBreak = function detectLineBreak(r, e) {
  return _detectLineBreakCore(chkcrlf(r, e));
}, exports.isCR = function isCR(r) {
  return "\r" === r;
}, exports.isCRLF = function isCRLF(r) {
  return "\r\n" === r;
}, exports.isEqualWithIgnoreLineSeparators = function isEqualWithIgnoreLineSeparators(r, e) {
  const n = chkcrlf(r), t = chkcrlf(e);
  let c = !1;
  return n.cr === t.cr && n.crlf === t.crlf && n.lf === t.lf && (c = crlf(r) === crlf(e)), 
  {
    bool: c,
    _lb_a: n,
    _lb_b: t
  };
}, exports.isLF = function isLF(r) {
  return "\n" === r;
}, exports.lineSplit = function lineSplit(r) {
  return r.split(e);
}, exports.nameToLineBreak = function nameToLineBreak(r) {
  switch (null == r ? void 0 : r.toUpperCase()) {
   case "LF":
    return "\n";

   case "CR":
    return "\r";

   case "CRLF":
    return "\r\n";
  }
  throw new TypeError(`Invalid line break name: ${r}`);
}, exports.toLineBreakName = function toLineBreakName(r) {
  switch (r) {
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
