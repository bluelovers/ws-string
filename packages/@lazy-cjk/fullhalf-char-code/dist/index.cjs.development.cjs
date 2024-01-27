'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

exports.EnumFullHalfTableType = void 0;
(function (EnumFullHalfTableType) {
  EnumFullHalfTableType[EnumFullHalfTableType["FULL_WIDTH"] = 1] = "FULL_WIDTH";
  EnumFullHalfTableType[EnumFullHalfTableType["HALF_WIDTH"] = 0] = "HALF_WIDTH";
  EnumFullHalfTableType[EnumFullHalfTableType["NO_EXIST"] = -1] = "NO_EXIST";
})(exports.EnumFullHalfTableType || (exports.EnumFullHalfTableType = {}));
function detectFullHalfCharCode(charCode) {
  if (0x0020 <= charCode && charCode < 0x007F) {
    return 0 /* EnumFullHalfTableType.HALF_WIDTH */;
  }

  if (0x3000 === charCode || 0xFF00 < charCode && charCode < 0xFF5F) {
    return 1 /* EnumFullHalfTableType.FULL_WIDTH */;
  }

  return -1 /* EnumFullHalfTableType.NO_EXIST */;
}

function isFullHalfCharCode(charCode) {
  const r = detectFullHalfCharCode(charCode);
  if (r === 1 /* EnumFullHalfTableType.FULL_WIDTH */) {
    return true;
  } else if (r === 0 /* EnumFullHalfTableType.HALF_WIDTH */) {
    return false;
  } else ;
  return null;
}
/**
 * Converts a half-width character code to a full-width character code.
 * @param {number} charCode - The half-width character code to convert.
 * @returns {number} The full-width character code.
 */
function toFullWidthCharCode(charCode) {
  if (0x0020 < charCode && charCode < 0x007F) {
    return 0xFF00 + (charCode - 0x0020);
  }
  if (0x0020 === charCode) {
    return 0x3000;
  }
  return charCode;
}
/**
 * Converts a full-width character code to a half-width character code.
 * @param {number} charCode - The full-width character code to convert.
 * @returns {number} The half-width character code.
 */
function toHalfWidthCharCode(charCode) {
  if (0xFF00 < charCode && charCode < 0xFF5F) {
    return 0x0020 + (charCode - 0xFF00);
  }
  if (0x3000 === charCode) {
    return 0x0020;
  }
  return charCode;
}

exports.detectFullHalfCharCode = detectFullHalfCharCode;
exports.isFullHalfCharCode = isFullHalfCharCode;
exports.toFullWidthCharCode = toFullWidthCharCode;
exports.toHalfWidthCharCode = toHalfWidthCharCode;
//# sourceMappingURL=index.cjs.development.cjs.map
