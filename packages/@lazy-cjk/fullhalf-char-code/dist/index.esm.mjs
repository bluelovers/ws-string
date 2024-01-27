var t;

function detectFullHalfCharCode(t) {
  return 0x0020 <= t && t < 0x007F ? 0 : 0x3000 === t || 0xFF00 < t && t < 0xFF5F ? 1 : -1;
}

function isFullHalfCharCode(t) {
  const l = detectFullHalfCharCode(t);
  return 1 === l || 0 !== l && null;
}

function toFullWidthCharCode(t) {
  return 0x0020 < t && t < 0x007F ? t - 0x0020 + 0xFF00 : 0x0020 === t ? 0x3000 : t;
}

function toHalfWidthCharCode(t) {
  return 0xFF00 < t && t < 0xFF5F ? t - 0xFF00 + 0x0020 : 0x3000 === t ? 0x0020 : t;
}

!function(t) {
  t[t.FULL_WIDTH = 1] = "FULL_WIDTH", t[t.HALF_WIDTH = 0] = "HALF_WIDTH", t[t.NO_EXIST = -1] = "NO_EXIST";
}(t || (t = {}));

export { t as EnumFullHalfTableType, detectFullHalfCharCode, isFullHalfCharCode, toFullWidthCharCode, toHalfWidthCharCode };
//# sourceMappingURL=index.esm.mjs.map
