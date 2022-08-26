const r = 0xd800, e = 0xdbff, i = 0xdc00, t = 0x1f1e6, n = 0x1f1ff, s = 0x1f3fb, o = 0x1f3ff, u = 0xfe00, a = 0xfe0f, c = 0x20d0, f = 0x20ff, d = 0x200d, l = Object.freeze([ 0x0308, 0x0937, 0x0937, 0x093F, 0x093F, 0x0BA8, 0x0BBF, 0x0BCD, 0x0E31, 0x0E33, 0x0E40, 0x0E49, 0x1100, 0x1161, 0x11A8 ]);

function _runes(r) {
  if ("string" != typeof r) throw new TypeError("string cannot be undefined or null");
  const e = [];
  let i = 0, t = 0;
  for (;i < r.length; ) t += nextUnits(i + t, r), isGraphem(r[i + t]) && t++, isVariationSelector(r[i + t]) && t++, 
  isDiacriticalMark(r[i + t]) && t++, isZeroWidthJoiner(r[i + t]) ? t++ : (e.push(r.substring(i, i + t)), 
  i += t, t = 0);
  return e;
}

function nextUnits(r, e) {
  const i = e[r];
  if (!isFirstOfSurrogatePair(i) || r === e.length - 1) return 1;
  const t = i + e[r + 1];
  let n = e.substring(r + 2, r + 5);
  return isRegionalIndicator(t) && isRegionalIndicator(n) || isFitzpatrickModifier(n) ? 4 : 2;
}

function isFirstOfSurrogatePair(r) {
  return r && betweenInclusive(r[0].charCodeAt(0), 55296, 56319);
}

function isRegionalIndicator(r) {
  return betweenInclusive(codePointFromSurrogatePair(r), 127462, 127487);
}

function isFitzpatrickModifier(r) {
  return betweenInclusive(codePointFromSurrogatePair(r), 127995, 127999);
}

function isVariationSelector(r) {
  return "string" == typeof r && betweenInclusive(r.charCodeAt(0), 65024, 65039);
}

function isDiacriticalMark(r) {
  return "string" == typeof r && betweenInclusive(r.charCodeAt(0), 8400, 8447);
}

function isGraphem(r) {
  return "string" == typeof r && -1 !== l.indexOf(r.charCodeAt(0));
}

function isZeroWidthJoiner(r) {
  return "string" == typeof r && 8205 === r.charCodeAt(0);
}

function codePointFromSurrogatePair(r) {
  return (r.charCodeAt(0) - 55296 << 10) + (r.charCodeAt(1) - 56320) + 0x10000;
}

function betweenInclusive(r, e, i) {
  return r >= e && r <= i;
}

function _substring(r, e, i) {
  const t = _runes(r);
  if (void 0 === e) return r;
  if (e >= t.length) return "";
  const n = t.length - e;
  let s = e + (void 0 === i ? n : i);
  return s > e + n && (s = void 0), t.slice(e, s).join("");
}

_runes.substr = _substring, _runes.substring = _substring, _runes.default = _runes, 
_runes.runes = _runes, Object.defineProperty(_runes, "__esModule", {
  value: !0
});

export { f as DIACRITICAL_MARKS_END, c as DIACRITICAL_MARKS_START, o as FITZPATRICK_MODIFIER_END, s as FITZPATRICK_MODIFIER_START, l as GRAPHEMS, e as HIGH_SURROGATE_END, r as HIGH_SURROGATE_START, i as LOW_SURROGATE_START, n as REGIONAL_INDICATOR_END, t as REGIONAL_INDICATOR_START, a as VARIATION_MODIFIER_END, u as VARIATION_MODIFIER_START, d as ZWJ, betweenInclusive, codePointFromSurrogatePair, _runes as default, isDiacriticalMark, isFirstOfSurrogatePair, isFitzpatrickModifier, isGraphem, isRegionalIndicator, isVariationSelector, isZeroWidthJoiner, nextUnits, _runes as runes, _substring as substr, _substring as substring };
//# sourceMappingURL=index.esm.mjs.map
