"use strict";

let e = /*#__PURE__*/ function(e) {
  return e[e.HIGH_SURROGATE_START = 55296] = "HIGH_SURROGATE_START", e[e.HIGH_SURROGATE_END = 56319] = "HIGH_SURROGATE_END", 
  e[e.LOW_SURROGATE_START = 56320] = "LOW_SURROGATE_START", e[e.REGIONAL_INDICATOR_START = 127462] = "REGIONAL_INDICATOR_START", 
  e[e.REGIONAL_INDICATOR_END = 127487] = "REGIONAL_INDICATOR_END", e[e.FITZPATRICK_MODIFIER_START = 127995] = "FITZPATRICK_MODIFIER_START", 
  e[e.FITZPATRICK_MODIFIER_END = 127999] = "FITZPATRICK_MODIFIER_END", e[e.VARIATION_MODIFIER_START = 65024] = "VARIATION_MODIFIER_START", 
  e[e.VARIATION_MODIFIER_END = 65039] = "VARIATION_MODIFIER_END", e[e.DIACRITICAL_MARKS_START = 8400] = "DIACRITICAL_MARKS_START", 
  e[e.DIACRITICAL_MARKS_END = 8447] = "DIACRITICAL_MARKS_END", e[e.SUBDIVISION_INDICATOR_START = 127988] = "SUBDIVISION_INDICATOR_START", 
  e[e.TAGS_START = 917504] = "TAGS_START", e[e.TAGS_END = 917631] = "TAGS_END", e[e.ZWJ = 8205] = "ZWJ", 
  e;
}({});

const n = /*#__PURE__*/ Object.freeze([ 0x0308, 0x0937, 0x093F, 0x0BA8, 0x0BBF, 0x0BCD, 0x0E31, 0x0E33, 0x0E40, 0x0E49, 0x1100, 0x1161, 0x11A8 ]);

let t = /*#__PURE__*/ function(e) {
  return e[e.unit_1 = 1] = "unit_1", e[e.unit_2 = 2] = "unit_2", e[e.unit_4 = 4] = "unit_4", 
  e;
}({});

function runes(e) {
  if ("string" != typeof e) throw new TypeError("string cannot be undefined or null");
  const n = [];
  let t = 0, r = 0;
  for (;t < e.length; ) r += nextUnits(t + r, e), isGrapheme(e[t + r]) && r++, isVariationSelector(e[t + r]) && r++, 
  isDiacriticalMark(e[t + r]) && r++, isZeroWidthJoiner(e[t + r]) ? r++ : (n.push(e.substring(t, t + r)), 
  t += r, r = 0);
  return n;
}

function nextUnits(n, r) {
  const i = r[n];
  if (!function isFirstOfSurrogatePair(n) {
    return n && betweenInclusive(n[0].charCodeAt(0), e.HIGH_SURROGATE_START, e.HIGH_SURROGATE_END);
  }(i) || n === r.length - 1) return t.unit_1;
  const I = i + r[n + 1];
  let A = r.substring(n + 2, n + 5);
  return isRegionalIndicator(I) && isRegionalIndicator(A) ? t.unit_4 : function isSubdivisionFlag(n) {
    return betweenInclusive(codePointFromSurrogatePair(n), e.SUBDIVISION_INDICATOR_START, e.SUBDIVISION_INDICATOR_START);
  }(I) && function isSupplementarySpecialpurposePlane(n) {
    const t = n.codePointAt(0);
    return "string" == typeof n && "number" == typeof t && betweenInclusive(t, e.TAGS_START, e.TAGS_END);
  }(A) ? r.slice(n).indexOf(String.fromCodePoint(e.TAGS_END)) + 2 : function isFitzpatrickModifier(n) {
    return betweenInclusive(codePointFromSurrogatePair(n), e.FITZPATRICK_MODIFIER_START, e.FITZPATRICK_MODIFIER_END);
  }(A) ? t.unit_4 : t.unit_2;
}

function isRegionalIndicator(n) {
  return betweenInclusive(codePointFromSurrogatePair(n), e.REGIONAL_INDICATOR_START, e.REGIONAL_INDICATOR_END);
}

function isVariationSelector(n) {
  return "string" == typeof n && betweenInclusive(n.charCodeAt(0), e.VARIATION_MODIFIER_START, e.VARIATION_MODIFIER_END);
}

function isDiacriticalMark(n) {
  return "string" == typeof n && betweenInclusive(n.charCodeAt(0), e.DIACRITICAL_MARKS_START, e.DIACRITICAL_MARKS_END);
}

function isGrapheme(e) {
  return "string" == typeof e && n.includes(e.charCodeAt(0));
}

function isZeroWidthJoiner(n) {
  return "string" == typeof n && n.charCodeAt(0) === e.ZWJ;
}

function codePointFromSurrogatePair(n) {
  return (n.charCodeAt(0) - e.HIGH_SURROGATE_START << 10) + (n.charCodeAt(1) - e.LOW_SURROGATE_START) + 0x10000;
}

function betweenInclusive(e, n, t) {
  return e >= n && e <= t;
}

function substring(e, n, t) {
  const r = runes(e);
  if (void 0 === n) return e;
  if (n >= r.length) return "";
  const i = r.length - n;
  let I = n + (void 0 === t ? i : t);
  return I > n + i && (I = void 0), r.slice(n, I).join("");
}

Object.defineProperty(runes, "runes", {
  value: runes
}), Object.defineProperty(runes, "default", {
  value: runes
}), Object.defineProperty(runes, "__esModule", {
  value: !0
}), Object.defineProperty(runes, "substr", {
  value: substring
}), Object.defineProperty(runes, "substring", {
  value: substring
}), Object.defineProperty(runes, "EnumRunesCode", {
  value: e
}), Object.defineProperty(runes, "EnumCodeUnits", {
  value: t
}), Object.defineProperty(runes, "GRAPHEMES", {
  value: n
}), module.exports = runes;
//# sourceMappingURL=index.cjs.production.min.cjs.map
