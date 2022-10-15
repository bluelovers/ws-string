'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

exports.EnumLineBreak = void 0;
(function (EnumLineBreak) {
  EnumLineBreak["CR"] = "\r";
  EnumLineBreak["CRLF"] = "\r\n";
  EnumLineBreak["LF"] = "\n";
})(exports.EnumLineBreak || (exports.EnumLineBreak = {}));
const CR = "\r";
const CRLF = "\r\n";
const LF = "\n";
const R_CRLF = /\r\n|\r(?!\n)|\n/g;
const R_CRLF_MATCH = /*#__PURE__*/new RegExp(`(${R_CRLF.source})`, R_CRLF.flags);
function crlf(text, newline = "\n") {
  return text.replace(R_CRLF, newline);
}
function chkcrlf(text, options) {
  var _options$disable;
  const disable = (_options$disable = options === null || options === void 0 ? void 0 : options.disable) !== null && _options$disable !== void 0 ? _options$disable : {};
  return {
    lf: !disable.lf && /\n/.test(text.replace(/\r\n/g, '')),
    crlf: !disable.crlf && /\r\n/.test(text),
    cr: !disable.cr && /\r(?!\n)/.test(text)
  };
}
function detectLineBreak(text, options) {
  const _lb = chkcrlf(text, options);
  return _detectLineBreakCore(_lb);
}
function _detectLineBreakCore(_lb) {
  return _lb.crlf ? "\r\n" : _lb.lf || !_lb.cr ? "\n" : "\r";
}
function isCRLF(newline) {
  return newline === "\r\n";
}
function isLF(newline) {
  return newline === "\n";
}
function isCR(newline) {
  return newline === "\r";
}
function lineSplit(text) {
  return text.split(R_CRLF);
}
function crlf_unicode_normalize(text, newline = "\n") {
  const ln3 = newline + newline + newline;
  const ln2 = newline + newline;
  return text.replace(/\u000C/g, ln3).replace(/\u2028/g, newline).replace(/\u2029/g, ln2);
}
function isEqualWithIgnoreLineSeparators(a, b) {
  const _lb_a = chkcrlf(a);
  const _lb_b = chkcrlf(b);
  let bool = false;
  if (_lb_a.cr === _lb_b.cr && _lb_a.crlf === _lb_b.crlf && _lb_a.lf === _lb_b.lf) {
    bool = crlf(a) === crlf(b);
  }
  return {
    bool,
    _lb_a,
    _lb_b
  };
}
function toLineBreakName(newline) {
  switch (newline) {
    case "\n":
      return 'LF';
    case "\r":
      return 'CR';
    case "\r\n":
      return 'CRLF';
  }
  throw new TypeError(`Invalid line break`);
}
function nameToLineBreak(name) {
  switch (name === null || name === void 0 ? void 0 : name.toUpperCase()) {
    case 'LF':
      return "\n";
    case 'CR':
      return "\r";
    case 'CRLF':
      return "\r\n";
  }
  throw new TypeError(`Invalid line break name: ${name}`);
}

exports.CR = CR;
exports.CRLF = CRLF;
exports.LF = LF;
exports.R_CRLF = R_CRLF;
exports.R_CRLF_MATCH = R_CRLF_MATCH;
exports._detectLineBreakCore = _detectLineBreakCore;
exports.chkcrlf = chkcrlf;
exports.crlf = crlf;
exports.crlf_unicode_normalize = crlf_unicode_normalize;
exports["default"] = crlf;
exports.detectLineBreak = detectLineBreak;
exports.isCR = isCR;
exports.isCRLF = isCRLF;
exports.isEqualWithIgnoreLineSeparators = isEqualWithIgnoreLineSeparators;
exports.isLF = isLF;
exports.lineSplit = lineSplit;
exports.nameToLineBreak = nameToLineBreak;
exports.toLineBreakName = toLineBreakName;
//# sourceMappingURL=index.cjs.development.cjs.map
