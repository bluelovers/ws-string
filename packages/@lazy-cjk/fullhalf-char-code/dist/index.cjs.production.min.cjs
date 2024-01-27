"use strict";

var e;

function detectFullHalfCharCode(e) {
  return 0x0020 <= e && e < 0x007F ? 0 : 0x3000 === e || 0xFF00 < e && e < 0xFF5F ? 1 : -1;
}

Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.EnumFullHalfTableType = void 0, (e = exports.EnumFullHalfTableType || (exports.EnumFullHalfTableType = {}))[e.FULL_WIDTH = 1] = "FULL_WIDTH", 
e[e.HALF_WIDTH = 0] = "HALF_WIDTH", e[e.NO_EXIST = -1] = "NO_EXIST", exports.detectFullHalfCharCode = detectFullHalfCharCode, 
exports.isFullHalfCharCode = function isFullHalfCharCode(e) {
  const l = detectFullHalfCharCode(e);
  return 1 === l || 0 !== l && null;
}, exports.toFullWidthCharCode = function toFullWidthCharCode(e) {
  return 0x0020 < e && e < 0x007F ? e - 0x0020 + 0xFF00 : 0x0020 === e ? 0x3000 : e;
}, exports.toHalfWidthCharCode = function toHalfWidthCharCode(e) {
  return 0xFF00 < e && e < 0xFF5F ? e - 0xFF00 + 0x0020 : 0x3000 === e ? 0x0020 : e;
};
//# sourceMappingURL=index.cjs.production.min.cjs.map
