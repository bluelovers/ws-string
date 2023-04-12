"use strict";

var e;

!function(e) {
  e[e.HIGH_SURROGATE_START = 55296] = "HIGH_SURROGATE_START", e[e.HIGH_SURROGATE_END = 56319] = "HIGH_SURROGATE_END", 
  e[e.LOW_SURROGATE_START = 56320] = "LOW_SURROGATE_START", e[e.REGIONAL_INDICATOR_START = 127462] = "REGIONAL_INDICATOR_START", 
  e[e.REGIONAL_INDICATOR_END = 127487] = "REGIONAL_INDICATOR_END", e[e.FITZPATRICK_MODIFIER_START = 127995] = "FITZPATRICK_MODIFIER_START", 
  e[e.FITZPATRICK_MODIFIER_END = 127999] = "FITZPATRICK_MODIFIER_END", e[e.VARIATION_MODIFIER_START = 65024] = "VARIATION_MODIFIER_START", 
  e[e.VARIATION_MODIFIER_END = 65039] = "VARIATION_MODIFIER_END", e[e.DIACRITICAL_MARKS_START = 8400] = "DIACRITICAL_MARKS_START", 
  e[e.DIACRITICAL_MARKS_END = 8447] = "DIACRITICAL_MARKS_END", e[e.SUBDIVISION_INDICATOR_START = 127988] = "SUBDIVISION_INDICATOR_START", 
  e[e.TAGS_START = 917504] = "TAGS_START", e[e.TAGS_END = 917631] = "TAGS_END", e[e.ZWJ = 8205] = "ZWJ";
}(e || (e = {}));

const n = Object.freeze([ 0x0308, 0x0937, 0x093F, 0x0BA8, 0x0BBF, 0x0BCD, 0x0E31, 0x0E33, 0x0E40, 0x0E49, 0x1100, 0x1161, 0x11A8 ]);

var t;

function runes(e) {
  if ("string" != typeof e) throw new TypeError("string cannot be undefined or null");
  const n = [];
  let t = 0, r = 0;
  for (;t < e.length; ) r += nextUnits(t + r, e), isGrapheme(e[t + r]) && r++, isVariationSelector(e[t + r]) && r++, 
  isDiacriticalMark(e[t + r]) && r++, isZeroWidthJoiner(e[t + r]) ? r++ : (n.push(e.substring(t, t + r)), 
  t += r, r = 0);
  return n;
}

function nextUnits(e, n) {
  const t = n[e];
  if (!function isFirstOfSurrogatePair(e) {
    return e && betweenInclusive(e[0].charCodeAt(0), 55296, 56319);
  }(t) || e === n.length - 1) return 1;
  const r = t + n[e + 1];
  let i = n.substring(e + 2, e + 5);
  return isRegionalIndicator(r) && isRegionalIndicator(i) ? 4 : function isSubdivisionFlag(e) {
    return betweenInclusive(codePointFromSurrogatePair(e), 127988, 127988);
  }(r) && function isSupplementarySpecialpurposePlane(e) {
    const n = e.codePointAt(0);
    return "string" == typeof e && "number" == typeof n && betweenInclusive(n, 917504, 917631);
  }(i) ? n.slice(e).indexOf(String.fromCodePoint(917631)) + 2 : function isFitzpatrickModifier(e) {
    return betweenInclusive(codePointFromSurrogatePair(e), 127995, 127999);
  }(i) ? 4 : 2;
}

function isRegionalIndicator(e) {
  return betweenInclusive(codePointFromSurrogatePair(e), 127462, 127487);
}

function isVariationSelector(e) {
  return "string" == typeof e && betweenInclusive(e.charCodeAt(0), 65024, 65039);
}

function isDiacriticalMark(e) {
  return "string" == typeof e && betweenInclusive(e.charCodeAt(0), 8400, 8447);
}

function isGrapheme(e) {
  return "string" == typeof e && n.includes(e.charCodeAt(0));
}

function isZeroWidthJoiner(e) {
  return "string" == typeof e && 8205 === e.charCodeAt(0);
}

function codePointFromSurrogatePair(e) {
  return (e.charCodeAt(0) - 55296 << 10) + (e.charCodeAt(1) - 56320) + 0x10000;
}

function betweenInclusive(e, n, t) {
  return e >= n && e <= t;
}

function substring(e, n, t) {
  const r = runes(e);
  if (void 0 === n) return e;
  if (n >= r.length) return "";
  const i = r.length - n;
  let o = n + (void 0 === t ? i : t);
  return o > n + i && (o = void 0), r.slice(n, o).join("");
}

!function(e) {
  e[e.unit_1 = 1] = "unit_1", e[e.unit_2 = 2] = "unit_2", e[e.unit_4 = 4] = "unit_4";
}(t || (t = {})), Object.defineProperty(runes, "runes", {
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
