let e = /*#__PURE__*/ function(e) {
  return e.CR = "\r", e.CRLF = "\r\n", e.LF = "\n", e;
}({}), n = /*#__PURE__*/ function(e) {
  return e[e.CR = 13] = "CR", e[e.LF = 10] = "LF", e;
}({});

const r = e.CR, t = e.CRLF, c = e.LF, i = /\r\n|\r(?!\n)|\n/g, l = /*#__PURE__*/ new RegExp(`(${i.source})`, i.flags);

function crlf(n, r = e.LF) {
  return n.replace(i, r);
}

function chkcrlf(e, n) {
  var r;
  const t = null !== (r = null == n ? void 0 : n.disable) && void 0 !== r ? r : {};
  return {
    lf: !t.lf && /\n/.test(e.replace(/\r\n/g, "")),
    crlf: !t.crlf && /\r\n/.test(e),
    cr: !t.cr && /\r(?!\n)/.test(e)
  };
}

function detectLineBreak(e, n) {
  return _detectLineBreakCore(chkcrlf(e, n));
}

function _detectLineBreakCore(n) {
  return n.crlf ? e.CRLF : n.lf || !n.cr ? e.LF : e.CR;
}

function isCRLF(n) {
  return n === e.CRLF;
}

function isLF(n) {
  return n === e.LF;
}

function isCR(n) {
  return n === e.CR;
}

function charCodeIsLF(e) {
  return e === n.LF;
}

function charCodeIsCR(e) {
  return e === n.CR;
}

function lineSplit(e) {
  return e.split(i);
}

function crlf_unicode_normalize(n, r = e.LF) {
  const t = r + r;
  return n.replace(/\u000C/g, r + r + r).replace(/\u2028/g, r).replace(/\u2029/g, t);
}

function isEqualWithIgnoreLineSeparators(e, n) {
  const r = chkcrlf(e), t = chkcrlf(n);
  let c = !1;
  return r.cr === t.cr && r.crlf === t.crlf && r.lf === t.lf && (c = crlf(e) === crlf(n)), 
  {
    bool: c,
    _lb_a: r,
    _lb_b: t
  };
}

function toLineBreakName(n) {
  switch (n) {
   case e.LF:
    return "LF";

   case e.CR:
    return "CR";

   case e.CRLF:
    return "CRLF";
  }
  throw new TypeError("Invalid line break");
}

function nameToLineBreak(n) {
  switch (null == n ? void 0 : n.toUpperCase()) {
   case "LF":
    return e.LF;

   case "CR":
    return e.CR;

   case "CRLF":
    return e.CRLF;
  }
  throw new TypeError(`Invalid line break name: ${n}`);
}

function detectCurrentIndexLineBreakFromBufferLike(n, r) {
  const t = n[r], c = r + 1;
  return charCodeIsLF(t) ? {
    newline: e.LF,
    cur: t,
    index: r,
    next: c,
    length: 1
  } : charCodeIsCR(t) ? charCodeIsLF(n[c]) ? {
    newline: e.CRLF,
    cur: t,
    index: r,
    next: c + 1,
    length: 2
  } : {
    newline: e.CR,
    cur: t,
    index: r,
    next: c,
    length: 1
  } : {
    newline: void 0,
    cur: t,
    index: r,
    next: c,
    length: 0
  };
}

function detectCurrentIndexLineBreak(n, r) {
  const t = n[r], c = r + 1;
  return isLF(t) ? {
    newline: e.LF,
    cur: t,
    index: r,
    next: c,
    length: 1
  } : isCR(t) ? isLF(n[c]) ? {
    newline: e.CRLF,
    cur: t,
    index: r,
    next: c + 1,
    length: 2
  } : {
    newline: e.CR,
    cur: t,
    index: r,
    next: c,
    length: 1
  } : {
    newline: void 0,
    cur: t,
    index: r,
    next: c,
    length: 0
  };
}

export { r as CR, t as CRLF, e as EnumLineBreak, n as EnumLineBreakCharCode, c as LF, i as R_CRLF, l as R_CRLF_MATCH, _detectLineBreakCore, charCodeIsCR, charCodeIsLF, chkcrlf, crlf, crlf_unicode_normalize, crlf as default, detectCurrentIndexLineBreak, detectCurrentIndexLineBreakFromBufferLike, detectLineBreak, isCR, isCRLF, isEqualWithIgnoreLineSeparators, isLF, lineSplit, nameToLineBreak, toLineBreakName };
//# sourceMappingURL=index.esm.mjs.map
