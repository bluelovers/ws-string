"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

let e = /*#__PURE__*/ function(e) {
  return e.CR = "\r", e.CRLF = "\r\n", e.LF = "\n", e;
}({}), r = /*#__PURE__*/ function(e) {
  return e[e.CR = 13] = "CR", e[e.LF = 10] = "LF", e;
}({});

const n = e.CR, t = e.CRLF, c = e.LF, i = /\r\n|\r(?!\n)|\n/g, o = /*#__PURE__*/ new RegExp(`(${i.source})`, i.flags);

function crlf(r, n = e.LF) {
  return r.replace(i, n);
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

function _detectLineBreakCore(r) {
  return r.crlf ? e.CRLF : r.lf || !r.cr ? e.LF : e.CR;
}

function isLF(r) {
  return r === e.LF;
}

function isCR(r) {
  return r === e.CR;
}

function charCodeIsLF(e) {
  return e === r.LF;
}

function charCodeIsCR(e) {
  return e === r.CR;
}

exports.CR = n, exports.CRLF = t, exports.EnumLineBreak = e, exports.EnumLineBreakCharCode = r, 
exports.LF = c, exports.R_CRLF = i, exports.R_CRLF_MATCH = o, exports._detectLineBreakCore = _detectLineBreakCore, 
exports.charCodeIsCR = charCodeIsCR, exports.charCodeIsLF = charCodeIsLF, exports.chkcrlf = chkcrlf, 
exports.crlf = crlf, exports.crlf_unicode_normalize = function crlf_unicode_normalize(r, n = e.LF) {
  const t = n + n;
  return r.replace(/\u000C/g, n + n + n).replace(/\u2028/g, n).replace(/\u2029/g, t);
}, exports.default = crlf, exports.detectCurrentIndexLineBreak = function detectCurrentIndexLineBreak(r, n) {
  const t = r[n], c = n + 1;
  return isLF(t) ? {
    newline: e.LF,
    cur: t,
    index: n,
    next: c,
    length: 1
  } : isCR(t) ? isLF(r[c]) ? {
    newline: e.CRLF,
    cur: t,
    index: n,
    next: c + 1,
    length: 2
  } : {
    newline: e.CR,
    cur: t,
    index: n,
    next: c,
    length: 1
  } : {
    newline: void 0,
    cur: t,
    index: n,
    next: c,
    length: 0
  };
}, exports.detectCurrentIndexLineBreakFromBufferLike = function detectCurrentIndexLineBreakFromBufferLike(r, n) {
  const t = r[n], c = n + 1;
  return charCodeIsLF(t) ? {
    newline: e.LF,
    cur: t,
    index: n,
    next: c,
    length: 1
  } : charCodeIsCR(t) ? charCodeIsLF(r[c]) ? {
    newline: e.CRLF,
    cur: t,
    index: n,
    next: c + 1,
    length: 2
  } : {
    newline: e.CR,
    cur: t,
    index: n,
    next: c,
    length: 1
  } : {
    newline: void 0,
    cur: t,
    index: n,
    next: c,
    length: 0
  };
}, exports.detectLineBreak = function detectLineBreak(e, r) {
  return _detectLineBreakCore(chkcrlf(e, r));
}, exports.isCR = isCR, exports.isCRLF = function isCRLF(r) {
  return r === e.CRLF;
}, exports.isEqualWithIgnoreLineSeparators = function isEqualWithIgnoreLineSeparators(e, r) {
  const n = chkcrlf(e), t = chkcrlf(r);
  let c = !1;
  return n.cr === t.cr && n.crlf === t.crlf && n.lf === t.lf && (c = crlf(e) === crlf(r)), 
  {
    bool: c,
    _lb_a: n,
    _lb_b: t
  };
}, exports.isLF = isLF, exports.lineSplit = function lineSplit(e) {
  return e.split(i);
}, exports.nameToLineBreak = function nameToLineBreak(r) {
  switch (null == r ? void 0 : r.toUpperCase()) {
   case "LF":
    return e.LF;

   case "CR":
    return e.CR;

   case "CRLF":
    return e.CRLF;
  }
  throw new TypeError(`Invalid line break name: ${r}`);
}, exports.toLineBreakName = function toLineBreakName(r) {
  switch (r) {
   case e.LF:
    return "LF";

   case e.CR:
    return "CR";

   case e.CRLF:
    return "CRLF";
  }
  throw new TypeError("Invalid line break");
};
//# sourceMappingURL=index.cjs.production.min.cjs.map
