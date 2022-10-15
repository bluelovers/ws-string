"use strict";

var e;

!function(e) {
  e[e.HIGH_SURROGATE_START = 55296] = "HIGH_SURROGATE_START", e[e.HIGH_SURROGATE_END = 56319] = "HIGH_SURROGATE_END", 
  e[e.LOW_SURROGATE_START = 56320] = "LOW_SURROGATE_START", e[e.REGIONAL_INDICATOR_START = 127462] = "REGIONAL_INDICATOR_START", 
  e[e.REGIONAL_INDICATOR_END = 127487] = "REGIONAL_INDICATOR_END", e[e.FITZPATRICK_MODIFIER_START = 127995] = "FITZPATRICK_MODIFIER_START", 
  e[e.FITZPATRICK_MODIFIER_END = 127999] = "FITZPATRICK_MODIFIER_END", e[e.VARIATION_MODIFIER_START = 65024] = "VARIATION_MODIFIER_START", 
  e[e.VARIATION_MODIFIER_END = 65039] = "VARIATION_MODIFIER_END", e[e.DIACRITICAL_MARKS_START = 8400] = "DIACRITICAL_MARKS_START", 
  e[e.DIACRITICAL_MARKS_END = 8447] = "DIACRITICAL_MARKS_END", e[e.ZWJ = 8205] = "ZWJ";
}(e || (e = {}));

const n = Object.freeze([ 0x0308, 0x0937, 0x0937, 0x093F, 0x093F, 0x0BA8, 0x0BBF, 0x0BCD, 0x0E31, 0x0E33, 0x0E40, 0x0E49, 0x1100, 0x1161, 0x11A8 ]);

function _runes(e) {
  if ("string" != typeof e) throw new TypeError("string cannot be undefined or null");
  const n = [];
  let r = 0, t = 0;
  for (;r < e.length; ) t += nextUnits(r + t, e), isGraphem(e[r + t]) && t++, isVariationSelector(e[r + t]) && t++, 
  isDiacriticalMark(e[r + t]) && t++, isZeroWidthJoiner(e[r + t]) ? t++ : (n.push(e.substring(r, r + t)), 
  r += t, t = 0);
  return n;
}

function nextUnits(e, n) {
  const r = n[e];
  if (!function isFirstOfSurrogatePair(e) {
    return e && betweenInclusive(e[0].charCodeAt(0), 55296, 56319);
  }(r) || e === n.length - 1) return 1;
  const t = r + n[e + 1];
  let i = n.substring(e + 2, e + 5);
  return isRegionalIndicator(t) && isRegionalIndicator(i) || function isFitzpatrickModifier(e) {
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

function isGraphem(e) {
  return "string" == typeof e && -1 !== n.indexOf(e.charCodeAt(0));
}

function isZeroWidthJoiner(e) {
  return "string" == typeof e && 8205 === e.charCodeAt(0);
}

function codePointFromSurrogatePair(e) {
  return (e.charCodeAt(0) - 55296 << 10) + (e.charCodeAt(1) - 56320) + 0x10000;
}

function betweenInclusive(e, n, r) {
  return e >= n && e <= r;
}

function substring(e, n, r) {
  const t = _runes(e);
  if (void 0 === n) return e;
  if (n >= t.length) return "";
  const i = t.length - n;
  let o = n + (void 0 === r ? i : r);
  return o > n + i && (o = void 0), t.slice(n, o).join("");
}

Object.defineProperty(_runes, "runes", {
  value: _runes
}), Object.defineProperty(_runes, "default", {
  value: _runes
}), Object.defineProperty(_runes, "__esModule", {
  value: !0
}), Object.defineProperty(_runes, "substr", {
  value: substring
}), Object.defineProperty(_runes, "substring", {
  value: substring
}), Object.defineProperty(_runes, "EnumRunesCode", {
  value: e
}), Object.defineProperty(_runes, "GRAPHEMS", {
  value: n
}), module.exports = _runes;
//# sourceMappingURL=index.cjs.production.min.cjs.map
