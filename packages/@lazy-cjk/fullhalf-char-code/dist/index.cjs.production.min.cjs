"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

let e = /*#__PURE__*/ function(e) {
  return e[e.FULL_WIDTH = 1] = "FULL_WIDTH", e[e.HALF_WIDTH = 0] = "HALF_WIDTH", e[e.NO_EXIST = -1] = "NO_EXIST", 
  e;
}({});

function detectFullHalfCharCode(t) {
  return 0x0020 <= t && t < 0x007F ? e.HALF_WIDTH : 0x3000 === t || 0xFF00 < t && t < 0xFF5F ? e.FULL_WIDTH : e.NO_EXIST;
}

exports.EnumFullHalfTableType = e, exports.detectFullHalfCharCode = detectFullHalfCharCode, 
exports.isFullHalfCharCode = function isFullHalfCharCode(t) {
  const l = detectFullHalfCharCode(t);
  return l === e.FULL_WIDTH || l !== e.HALF_WIDTH && null;
}, exports.toFullWidthCharCode = function toFullWidthCharCode(e) {
  return 0x0020 < e && e < 0x007F ? e - 0x0020 + 0xFF00 : 0x0020 === e ? 0x3000 : e;
}, exports.toHalfWidthCharCode = function toHalfWidthCharCode(e) {
  return 0xFF00 < e && e < 0xFF5F ? e - 0xFF00 + 0x0020 : 0x3000 === e ? 0x0020 : e;
};
//# sourceMappingURL=index.cjs.production.min.cjs.map
