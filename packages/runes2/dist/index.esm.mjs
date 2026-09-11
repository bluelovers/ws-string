let i = /*#__PURE__*/ function(i) {
  return i[i.HIGH_SURROGATE_START = 55296] = "HIGH_SURROGATE_START", i[i.HIGH_SURROGATE_END = 56319] = "HIGH_SURROGATE_END", 
  i[i.LOW_SURROGATE_START = 56320] = "LOW_SURROGATE_START", i[i.REGIONAL_INDICATOR_START = 127462] = "REGIONAL_INDICATOR_START", 
  i[i.REGIONAL_INDICATOR_END = 127487] = "REGIONAL_INDICATOR_END", i[i.FITZPATRICK_MODIFIER_START = 127995] = "FITZPATRICK_MODIFIER_START", 
  i[i.FITZPATRICK_MODIFIER_END = 127999] = "FITZPATRICK_MODIFIER_END", i[i.VARIATION_MODIFIER_START = 65024] = "VARIATION_MODIFIER_START", 
  i[i.VARIATION_MODIFIER_END = 65039] = "VARIATION_MODIFIER_END", i[i.DIACRITICAL_MARKS_START = 8400] = "DIACRITICAL_MARKS_START", 
  i[i.DIACRITICAL_MARKS_END = 8447] = "DIACRITICAL_MARKS_END", i[i.SUBDIVISION_INDICATOR_START = 127988] = "SUBDIVISION_INDICATOR_START", 
  i[i.TAGS_START = 917504] = "TAGS_START", i[i.TAGS_END = 917631] = "TAGS_END", i[i.ZWJ = 8205] = "ZWJ", 
  i;
}({});

const e = /*#__PURE__*/ Object.freeze([ 0x0308, 0x0937, 0x093F, 0x0BA8, 0x0BBF, 0x0BCD, 0x0E31, 0x0E33, 0x0E40, 0x0E49, 0x1100, 0x1161, 0x11A8 ]);

let n = /*#__PURE__*/ function(i) {
  return i[i.unit_1 = 1] = "unit_1", i[i.unit_2 = 2] = "unit_2", i[i.unit_4 = 4] = "unit_4", 
  i;
}({});

function runes(i) {
  if ("string" != typeof i) throw new TypeError("string cannot be undefined or null");
  const e = [];
  let n = 0, t = 0;
  for (;n < i.length; ) t += nextUnits(n + t, i), isGrapheme(i[n + t]) && t++, isVariationSelector(i[n + t]) && t++, 
  isDiacriticalMark(i[n + t]) && t++, isZeroWidthJoiner(i[n + t]) ? t++ : (e.push(i.substring(n, n + t)), 
  n += t, t = 0);
  return e;
}

function nextUnits(e, t) {
  const r = t[e];
  if (!isFirstOfSurrogatePair(r) || e === t.length - 1) return n.unit_1;
  const I = r + t[e + 1];
  let o = t.substring(e + 2, e + 5);
  return isRegionalIndicator(I) && isRegionalIndicator(o) ? n.unit_4 : isSubdivisionFlag(I) && isSupplementarySpecialpurposePlane(o) ? t.slice(e).indexOf(String.fromCodePoint(i.TAGS_END)) + 2 : isFitzpatrickModifier(o) ? n.unit_4 : n.unit_2;
}

function isFirstOfSurrogatePair(e) {
  return e && betweenInclusive(e[0].charCodeAt(0), i.HIGH_SURROGATE_START, i.HIGH_SURROGATE_END);
}

function isRegionalIndicator(e) {
  return betweenInclusive(codePointFromSurrogatePair(e), i.REGIONAL_INDICATOR_START, i.REGIONAL_INDICATOR_END);
}

function isSubdivisionFlag(e) {
  return betweenInclusive(codePointFromSurrogatePair(e), i.SUBDIVISION_INDICATOR_START, i.SUBDIVISION_INDICATOR_START);
}

function isFitzpatrickModifier(e) {
  return betweenInclusive(codePointFromSurrogatePair(e), i.FITZPATRICK_MODIFIER_START, i.FITZPATRICK_MODIFIER_END);
}

function isVariationSelector(e) {
  return "string" == typeof e && betweenInclusive(e.charCodeAt(0), i.VARIATION_MODIFIER_START, i.VARIATION_MODIFIER_END);
}

function isDiacriticalMark(e) {
  return "string" == typeof e && betweenInclusive(e.charCodeAt(0), i.DIACRITICAL_MARKS_START, i.DIACRITICAL_MARKS_END);
}

function isSupplementarySpecialpurposePlane(e) {
  const n = e.codePointAt(0);
  return "string" == typeof e && "number" == typeof n && betweenInclusive(n, i.TAGS_START, i.TAGS_END);
}

function isGrapheme(i) {
  return "string" == typeof i && e.includes(i.charCodeAt(0));
}

function isZeroWidthJoiner(e) {
  return "string" == typeof e && e.charCodeAt(0) === i.ZWJ;
}

function codePointFromSurrogatePair(e) {
  return (e.charCodeAt(0) - i.HIGH_SURROGATE_START << 10) + (e.charCodeAt(1) - i.LOW_SURROGATE_START) + 0x10000;
}

function betweenInclusive(i, e, n) {
  return i >= e && i <= n;
}

function substring(i, e, n) {
  const t = runes(i);
  if (void 0 === e) return i;
  if (e >= t.length) return "";
  const r = t.length - e;
  let I = e + (void 0 === n ? r : n);
  return I > e + r && (I = void 0), t.slice(e, I).join("");
}

export { n as EnumCodeUnits, i as EnumRunesCode, e as GRAPHEMES, betweenInclusive, codePointFromSurrogatePair, runes as default, isDiacriticalMark, isFirstOfSurrogatePair, isFitzpatrickModifier, isGrapheme, isRegionalIndicator, isSubdivisionFlag, isSupplementarySpecialpurposePlane, isVariationSelector, isZeroWidthJoiner, nextUnits, runes, substring as substr, substring };
//# sourceMappingURL=index.esm.mjs.map
