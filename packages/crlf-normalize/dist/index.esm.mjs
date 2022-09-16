var r;

!function(r) {
  r.CR = "\r", r.CRLF = "\r\n", r.LF = "\n";
}(r || (r = {}));

const n = "\r", e = "\r\n", t = "\n", c = /(\r\n|\r(?!\n)|\n)/g;

function crlf(r, n = "\n") {
  return r.replace(c, n);
}

function chkcrlf(r, n) {
  var e;
  const t = null !== (e = null == n ? void 0 : n.disable) && void 0 !== e ? e : {};
  return {
    lf: !t.lf && /\n/.test(r.replace(/\r\n/g, "")),
    crlf: !t.crlf && /\r\n/.test(r),
    cr: !t.cr && /\r(?!\n)/.test(r)
  };
}

function detectLineBreak(r, n) {
  return _detectLineBreakCore(chkcrlf(r, n));
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

function crlf_unicode_normalize(r, n = "\n") {
  const e = n + n;
  return r.replace(/\u000C/g, n + n + n).replace(/\u2028/g, n).replace(/\u2029/g, e);
}

function isEqualWithIgnoreLineSeparators(r, n) {
  const e = chkcrlf(r), t = chkcrlf(n);
  let c = !1;
  return e.cr === t.cr && e.crlf === t.crlf && e.lf === t.lf && (c = crlf(r) === crlf(n)), 
  {
    bool: c,
    _lb_a: e,
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

export { n as CR, e as CRLF, r as EnumLineBreak, t as LF, c as R_CRLF, _detectLineBreakCore, chkcrlf, crlf, crlf_unicode_normalize, crlf as default, detectLineBreak, isCR, isCRLF, isEqualWithIgnoreLineSeparators, isLF, lineSplit, nameToLineBreak, toLineBreakName };
//# sourceMappingURL=index.esm.mjs.map
