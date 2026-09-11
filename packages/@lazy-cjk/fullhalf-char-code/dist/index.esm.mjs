let t = /*#__PURE__*/ function(t) {
  return t[t.FULL_WIDTH = 1] = "FULL_WIDTH", t[t.HALF_WIDTH = 0] = "HALF_WIDTH", t[t.NO_EXIST = -1] = "NO_EXIST", 
  t;
}({});

function detectFullHalfCharCode(l) {
  return 0x0020 <= l && l < 0x007F ? t.HALF_WIDTH : 0x3000 === l || 0xFF00 < l && l < 0xFF5F ? t.FULL_WIDTH : t.NO_EXIST;
}

function isFullHalfCharCode(l) {
  const e = detectFullHalfCharCode(l);
  return e === t.FULL_WIDTH || e !== t.HALF_WIDTH && null;
}

function toFullWidthCharCode(t) {
  return 0x0020 < t && t < 0x007F ? t - 0x0020 + 0xFF00 : 0x0020 === t ? 0x3000 : t;
}

function toHalfWidthCharCode(t) {
  return 0xFF00 < t && t < 0xFF5F ? t - 0xFF00 + 0x0020 : 0x3000 === t ? 0x0020 : t;
}

export { t as EnumFullHalfTableType, detectFullHalfCharCode, isFullHalfCharCode, toFullWidthCharCode, toHalfWidthCharCode };
//# sourceMappingURL=index.esm.mjs.map
