const i = 0xd800, r = 0xdbff, t = 0xdc00, e = 0x1f1e6, n = 0x1f1ff, o = 0x1f3fb, s = 0x1f3ff, u = 0xfe00, a = 0xfe0f, c = 0x20d0, f = 0x20ff, d = 0x200d, l = Object.freeze([ 0x0308, 0x0937, 0x0937, 0x093F, 0x093F, 0x0BA8, 0x0BBF, 0x0BCD, 0x0E31, 0x0E33, 0x0E40, 0x0E49, 0x1100, 0x1161, 0x11A8 ]);

function _runes(i) {
  if ("string" != typeof i) throw new TypeError("string cannot be undefined or null");
  const r = [];
  let t = 0, e = 0;
  for (;t < i.length; ) e += nextUnits(t + e, i), isGraphem(i[t + e]) && e++, isVariationSelector(i[t + e]) && e++, 
  isDiacriticalMark(i[t + e]) && e++, isZeroWidthJoiner(i[t + e]) ? e++ : (r.push(i.substring(t, t + e)), 
  t += e, e = 0);
  return r;
}

function nextUnits(i, r) {
  const t = r[i];
  if (!isFirstOfSurrogatePair(t) || i === r.length - 1) return 1;
  const e = t + r[i + 1];
  let n = r.substring(i + 2, i + 5);
  return isRegionalIndicator(e) && isRegionalIndicator(n) || isFitzpatrickModifier(n) ? 4 : 2;
}

function isFirstOfSurrogatePair(i) {
  return i && betweenInclusive(i[0].charCodeAt(0), 55296, 56319);
}

function isRegionalIndicator(i) {
  return betweenInclusive(codePointFromSurrogatePair(i), 127462, 127487);
}

function isFitzpatrickModifier(i) {
  return betweenInclusive(codePointFromSurrogatePair(i), 127995, 127999);
}

function isVariationSelector(i) {
  return "string" == typeof i && betweenInclusive(i.charCodeAt(0), 65024, 65039);
}

function isDiacriticalMark(i) {
  return "string" == typeof i && betweenInclusive(i.charCodeAt(0), 8400, 8447);
}

function isGraphem(i) {
  return "string" == typeof i && -1 !== l.indexOf(i.charCodeAt(0));
}

function isZeroWidthJoiner(i) {
  return "string" == typeof i && 8205 === i.charCodeAt(0);
}

function codePointFromSurrogatePair(i) {
  return (i.charCodeAt(0) - 55296 << 10) + (i.charCodeAt(1) - 56320) + 0x10000;
}

function betweenInclusive(i, r, t) {
  return i >= r && i <= t;
}

function _substring(i, r, t) {
  const e = _runes(i);
  if (void 0 === r) return i;
  if (r >= e.length) return "";
  const n = e.length - r;
  let o = r + (void 0 === t ? n : t);
  return o > r + n && (o = void 0), e.slice(r, o).join("");
}

export { f as DIACRITICAL_MARKS_END, c as DIACRITICAL_MARKS_START, s as FITZPATRICK_MODIFIER_END, o as FITZPATRICK_MODIFIER_START, l as GRAPHEMS, r as HIGH_SURROGATE_END, i as HIGH_SURROGATE_START, t as LOW_SURROGATE_START, n as REGIONAL_INDICATOR_END, e as REGIONAL_INDICATOR_START, a as VARIATION_MODIFIER_END, u as VARIATION_MODIFIER_START, d as ZWJ, betweenInclusive, codePointFromSurrogatePair, _runes as default, isDiacriticalMark, isFirstOfSurrogatePair, isFitzpatrickModifier, isGraphem, isRegionalIndicator, isVariationSelector, isZeroWidthJoiner, nextUnits, _runes as runes, _substring as substr, _substring as substring };
//# sourceMappingURL=index.esm.mjs.map
