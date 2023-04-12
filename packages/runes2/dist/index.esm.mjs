var i;

!function(i) {
  i[i.HIGH_SURROGATE_START = 55296] = "HIGH_SURROGATE_START", i[i.HIGH_SURROGATE_END = 56319] = "HIGH_SURROGATE_END", 
  i[i.LOW_SURROGATE_START = 56320] = "LOW_SURROGATE_START", i[i.REGIONAL_INDICATOR_START = 127462] = "REGIONAL_INDICATOR_START", 
  i[i.REGIONAL_INDICATOR_END = 127487] = "REGIONAL_INDICATOR_END", i[i.FITZPATRICK_MODIFIER_START = 127995] = "FITZPATRICK_MODIFIER_START", 
  i[i.FITZPATRICK_MODIFIER_END = 127999] = "FITZPATRICK_MODIFIER_END", i[i.VARIATION_MODIFIER_START = 65024] = "VARIATION_MODIFIER_START", 
  i[i.VARIATION_MODIFIER_END = 65039] = "VARIATION_MODIFIER_END", i[i.DIACRITICAL_MARKS_START = 8400] = "DIACRITICAL_MARKS_START", 
  i[i.DIACRITICAL_MARKS_END = 8447] = "DIACRITICAL_MARKS_END", i[i.SUBDIVISION_INDICATOR_START = 127988] = "SUBDIVISION_INDICATOR_START", 
  i[i.TAGS_START = 917504] = "TAGS_START", i[i.TAGS_END = 917631] = "TAGS_END", i[i.ZWJ = 8205] = "ZWJ";
}(i || (i = {}));

const e = Object.freeze([ 0x0308, 0x0937, 0x093F, 0x0BA8, 0x0BBF, 0x0BCD, 0x0E31, 0x0E33, 0x0E40, 0x0E49, 0x1100, 0x1161, 0x11A8 ]);

var n;

function runes(i) {
  if ("string" != typeof i) throw new TypeError("string cannot be undefined or null");
  const e = [];
  let n = 0, t = 0;
  for (;n < i.length; ) t += nextUnits(n + t, i), isGrapheme(i[n + t]) && t++, isVariationSelector(i[n + t]) && t++, 
  isDiacriticalMark(i[n + t]) && t++, isZeroWidthJoiner(i[n + t]) ? t++ : (e.push(i.substring(n, n + t)), 
  n += t, t = 0);
  return e;
}

function nextUnits(i, e) {
  const n = e[i];
  if (!isFirstOfSurrogatePair(n) || i === e.length - 1) return 1;
  const t = n + e[i + 1];
  let r = e.substring(i + 2, i + 5);
  return isRegionalIndicator(t) && isRegionalIndicator(r) ? 4 : isSubdivisionFlag(t) && isSupplementarySpecialpurposePlane(r) ? e.slice(i).indexOf(String.fromCodePoint(917631)) + 2 : isFitzpatrickModifier(r) ? 4 : 2;
}

function isFirstOfSurrogatePair(i) {
  return i && betweenInclusive(i[0].charCodeAt(0), 55296, 56319);
}

function isRegionalIndicator(i) {
  return betweenInclusive(codePointFromSurrogatePair(i), 127462, 127487);
}

function isSubdivisionFlag(i) {
  return betweenInclusive(codePointFromSurrogatePair(i), 127988, 127988);
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

function isSupplementarySpecialpurposePlane(i) {
  const e = i.codePointAt(0);
  return "string" == typeof i && "number" == typeof e && betweenInclusive(e, 917504, 917631);
}

function isGrapheme(i) {
  return "string" == typeof i && e.includes(i.charCodeAt(0));
}

function isZeroWidthJoiner(i) {
  return "string" == typeof i && 8205 === i.charCodeAt(0);
}

function codePointFromSurrogatePair(i) {
  return (i.charCodeAt(0) - 55296 << 10) + (i.charCodeAt(1) - 56320) + 0x10000;
}

function betweenInclusive(i, e, n) {
  return i >= e && i <= n;
}

function substring(i, e, n) {
  const t = runes(i);
  if (void 0 === e) return i;
  if (e >= t.length) return "";
  const r = t.length - e;
  let o = e + (void 0 === n ? r : n);
  return o > e + r && (o = void 0), t.slice(e, o).join("");
}

!function(i) {
  i[i.unit_1 = 1] = "unit_1", i[i.unit_2 = 2] = "unit_2", i[i.unit_4 = 4] = "unit_4";
}(n || (n = {}));

export { n as EnumCodeUnits, i as EnumRunesCode, e as GRAPHEMES, betweenInclusive, codePointFromSurrogatePair, runes as default, isDiacriticalMark, isFirstOfSurrogatePair, isFitzpatrickModifier, isGrapheme, isRegionalIndicator, isSubdivisionFlag, isSupplementarySpecialpurposePlane, isVariationSelector, isZeroWidthJoiner, nextUnits, runes, substring as substr, substring };
//# sourceMappingURL=index.esm.mjs.map
