"use strict";

const e = Object.freeze([ 0x0308, 0x0937, 0x0937, 0x093F, 0x093F, 0x0BA8, 0x0BBF, 0x0BCD, 0x0E31, 0x0E33, 0x0E40, 0x0E49, 0x1100, 0x1161, 0x11A8 ]);

function _runes(e) {
  if ("string" != typeof e) throw new TypeError("string cannot be undefined or null");
  const r = [];
  let n = 0, t = 0;
  for (;n < e.length; ) t += nextUnits(n + t, e), isGraphem(e[n + t]) && t++, isVariationSelector(e[n + t]) && t++, 
  isDiacriticalMark(e[n + t]) && t++, isZeroWidthJoiner(e[n + t]) ? t++ : (r.push(e.substring(n, n + t)), 
  n += t, t = 0);
  return r;
}

function nextUnits(e, r) {
  const n = r[e];
  if (!function isFirstOfSurrogatePair(e) {
    return e && betweenInclusive(e[0].charCodeAt(0), 55296, 56319);
  }(n) || e === r.length - 1) return 1;
  const t = n + r[e + 1];
  let i = r.substring(e + 2, e + 5);
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

function isGraphem(r) {
  return "string" == typeof r && -1 !== e.indexOf(r.charCodeAt(0));
}

function isZeroWidthJoiner(e) {
  return "string" == typeof e && 8205 === e.charCodeAt(0);
}

function codePointFromSurrogatePair(e) {
  return (e.charCodeAt(0) - 55296 << 10) + (e.charCodeAt(1) - 56320) + 0x10000;
}

function betweenInclusive(e, r, n) {
  return e >= r && e <= n;
}

function _substring(e, r, n) {
  const t = _runes(e);
  if (void 0 === r) return e;
  if (r >= t.length) return "";
  const i = t.length - r;
  let o = r + (void 0 === n ? i : n);
  return o > r + i && (o = void 0), t.slice(r, o).join("");
}

Object.defineProperty(_runes, "runes", {
  value: _runes
}), Object.defineProperty(_runes, "default", {
  value: _runes
}), Object.defineProperty(_runes, "__esModule", {
  value: !0
}), Object.defineProperty(_runes, "substr", {
  value: _substring
}), Object.defineProperty(_runes, "substring", {
  value: _substring
}), module.exports = _runes;
//# sourceMappingURL=index.cjs.production.min.cjs.map
