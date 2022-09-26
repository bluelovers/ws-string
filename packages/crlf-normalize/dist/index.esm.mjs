var r;

!function(r) {
  r.CR = "\r", r.CRLF = "\r\n", r.LF = "\n";
}(r || (r = {}));

const e = "\r", n = "\r\n", t = "\n", c = /\r\n|\r(?!\n)|\n/g, i = new RegExp(`(${c.source})`, c.flags);

function crlf(r, e = "\n") {
  return r.replace(c, e);
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

function detectLineBreak(r, e) {
  return _detectLineBreakCore(chkcrlf(r, e));
}

function _detectLineBreakCore(r) {
  return r.crlf ? "\r\n" : r.lf || !r.cr ? "\n" : "\r";
}

function isCRLF(r) {
  return "\r\n" === r;
}

function isLF(r) {
  return "\n" === r;
}

function isCR(r) {
  return "\r" === r;
}

function lineSplit(r) {
  return r.split(c);
}

function crlf_unicode_normalize(r, e = "\n") {
  const n = e + e;
  return r.replace(/\u000C/g, e + e + e).replace(/\u2028/g, e).replace(/\u2029/g, n);
}

function isEqualWithIgnoreLineSeparators(r, e) {
  const n = chkcrlf(r), t = chkcrlf(e);
  let c = !1;
  return n.cr === t.cr && n.crlf === t.crlf && n.lf === t.lf && (c = crlf(r) === crlf(e)), 
  {
    bool: c,
    _lb_a: n,
    _lb_b: t
  };
}

function toLineBreakName(r) {
  switch (r) {
   case "\n":
    return "LF";

   case "\r":
    return "CR";

   case "\r\n":
    return "CRLF";
  }
  throw new TypeError("Invalid line break");
}

function nameToLineBreak(r) {
  switch (null == r ? void 0 : r.toUpperCase()) {
   case "LF":
    return "\n";

   case "CR":
    return "\r";

   case "CRLF":
    return "\r\n";
  }
  throw new TypeError(`Invalid line break name: ${r}`);
}

export { e as CR, n as CRLF, r as EnumLineBreak, t as LF, c as R_CRLF, i as R_CRLF_MATCH, _detectLineBreakCore, chkcrlf, crlf, crlf_unicode_normalize, crlf as default, detectLineBreak, isCR, isCRLF, isEqualWithIgnoreLineSeparators, isLF, lineSplit, nameToLineBreak, toLineBreakName };
//# sourceMappingURL=index.esm.mjs.map
