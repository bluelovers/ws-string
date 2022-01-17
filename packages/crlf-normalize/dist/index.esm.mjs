var EnumLineBreak;

(function (EnumLineBreak) {
  EnumLineBreak["CR"] = "\r";
  EnumLineBreak["CRLF"] = "\r\n";
  EnumLineBreak["LF"] = "\n";
})(EnumLineBreak || (EnumLineBreak = {}));

const CR = "\r";
const CRLF = "\r\n";
const LF = "\n";
const R_CRLF = /\r\n|\r(?!\n)|\n/g;
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

export { CR, CRLF, EnumLineBreak, LF, R_CRLF, chkcrlf, crlf, crlf_unicode_normalize, crlf as default, detectLineBreak, isCR, isCRLF, isLF, lineSplit };
//# sourceMappingURL=index.esm.mjs.map
