function stringSplitWithLimit(t, n, i) {
  return i && void 0 !== n ? n.length ? i > 0 ? _splitStart(t, n, i, 0, []) : _splitEnd(t, n, -i, t.length, []) : i > 0 ? _splitStart_noSep(t, i) : _splitEnd_noSep(t, -i) : t.split(n, i);
}

function _splitStart_noSep(t, n) {
  const i = [];
  n = Math.min(n, t.length) - 1;
  for (let s = 0; s < n; ++s) i.push(t[s]);
  return i.push(t.slice(n)), i;
}

function _splitEnd_noSep(t, n) {
  const i = [];
  n = Math.min(n, t.length);
  const s = t.length - n + 1;
  i.push(t.slice(0, s));
  for (let n = s; n < t.length; ++n) i.push(t[n]);
  return i;
}

function _splitStart(t, n, i, s, l) {
  const e = t.indexOf(n, s);
  return -1 == e || l.length + 1 == i ? (l.push(t.slice(s)), l) : (l.push(t.slice(s, e)), 
  _splitStart(t, n, i, e + n.length, l));
}

function _splitEnd(t, n, i, s, l) {
  const e = t.lastIndexOf(n, s);
  return -1 == s || -1 == e || l.length + 1 == i ? (l.unshift(t.slice(0, s + 1)), 
  l) : (l.unshift(t.slice(e + n.length, s + 1)), _splitEnd(t, n, i, e - 1, l));
}

export { _splitEnd, _splitEnd_noSep, _splitStart, _splitStart_noSep, stringSplitWithLimit as default, stringSplitWithLimit };
//# sourceMappingURL=index.esm.mjs.map
