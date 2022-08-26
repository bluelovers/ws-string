var n;

!function(n) {
  n.CR = "\r", n.CRLF = "\r\n", n.LF = "\n";
}(n || (n = {}));

const r = "\r", c = "\r\n", e = "\n", t = /\r\n|\r(?!\n)|\n/g;

function crlf(n, r = "\n") {
  return n.replace(t, r);
}

function chkcrlf(n, r) {
  var c;
  const e = null !== (c = null == r ? void 0 : r.disable) && void 0 !== c ? c : {};
  return {
    lf: !e.lf && /\n/.test(n.replace(/\r\n/g, "")),
    crlf: !e.crlf && /\r\n/.test(n),
    cr: !e.cr && /\r(?!\n)/.test(n)
  };
}

function detectLineBreak(n, r) {
  const c = chkcrlf(n, r);
  return c.crlf ? "\r\n" : c.lf || !c.cr ? "\n" : "\r";
}

function isCRLF(n) {
  return "\r\n" === n;
}

function isLF(n) {
  return "\n" === n;
}

function isCR(n) {
  return "\r" === n;
}

function lineSplit(n) {
  return n.split(t);
}

function crlf_unicode_normalize(n, r = "\n") {
  const c = r + r;
  return n.replace(/\u000C/g, r + r + r).replace(/\u2028/g, r).replace(/\u2029/g, c);
}

export { r as CR, c as CRLF, n as EnumLineBreak, e as LF, t as R_CRLF, chkcrlf, crlf, crlf_unicode_normalize, crlf as default, detectLineBreak, isCR, isCRLF, isLF, lineSplit };
//# sourceMappingURL=index.esm.mjs.map
