var i;

!function(i) {
  i[i.HIGH_SURROGATE_START = 55296] = "HIGH_SURROGATE_START", i[i.HIGH_SURROGATE_END = 56319] = "HIGH_SURROGATE_END", 
  i[i.LOW_SURROGATE_START = 56320] = "LOW_SURROGATE_START", i[i.REGIONAL_INDICATOR_START = 127462] = "REGIONAL_INDICATOR_START", 
  i[i.REGIONAL_INDICATOR_END = 127487] = "REGIONAL_INDICATOR_END", i[i.FITZPATRICK_MODIFIER_START = 127995] = "FITZPATRICK_MODIFIER_START", 
  i[i.FITZPATRICK_MODIFIER_END = 127999] = "FITZPATRICK_MODIFIER_END", i[i.VARIATION_MODIFIER_START = 65024] = "VARIATION_MODIFIER_START", 
  i[i.VARIATION_MODIFIER_END = 65039] = "VARIATION_MODIFIER_END", i[i.DIACRITICAL_MARKS_START = 8400] = "DIACRITICAL_MARKS_START", 
  i[i.DIACRITICAL_MARKS_END = 8447] = "DIACRITICAL_MARKS_END", i[i.ZWJ = 8205] = "ZWJ";
}(i || (i = {}));

const r = Object.freeze([ 0x0308, 0x0937, 0x0937, 0x093F, 0x093F, 0x0BA8, 0x0BBF, 0x0BCD, 0x0E31, 0x0E33, 0x0E40, 0x0E49, 0x1100, 0x1161, 0x11A8 ]);

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
  return "string" == typeof i && -1 !== r.indexOf(i.charCodeAt(0));
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

function substring(i, r, t) {
  const e = _runes(i);
  if (void 0 === r) return i;
  if (r >= e.length) return "";
  const n = e.length - r;
  let o = r + (void 0 === t ? n : t);
  return o > r + n && (o = void 0), e.slice(r, o).join("");
}

export { i as EnumRunesCode, r as GRAPHEMS, betweenInclusive, codePointFromSurrogatePair, _runes as default, isDiacriticalMark, isFirstOfSurrogatePair, isFitzpatrickModifier, isGraphem, isRegionalIndicator, isVariationSelector, isZeroWidthJoiner, nextUnits, _runes as runes, substring as substr, substring };
//# sourceMappingURL=index.esm.mjs.map
