"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crlf_unicode_normalize = exports.lineSplit = exports.isCR = exports.isLF = exports.isCRLF = exports.detectLineBreak = exports.chkcrlf = exports.crlf = exports.R_CRLF = exports.LF = exports.CRLF = exports.CR = exports.EnumLineBreak = void 0;
var EnumLineBreak;
(function (EnumLineBreak) {
    EnumLineBreak["CR"] = "\r";
    EnumLineBreak["CRLF"] = "\r\n";
    EnumLineBreak["LF"] = "\n";
})(EnumLineBreak = exports.EnumLineBreak || (exports.EnumLineBreak = {}));
const CR = "\r" /* CR */;
exports.CR = CR;
const CRLF = "\r\n" /* CRLF */;
exports.CRLF = CRLF;
const LF = "\n" /* LF */;
exports.LF = LF;
const R_CRLF = /\r\n|\r(?!\n)|\n/g;
exports.R_CRLF = R_CRLF;
function crlf(text, newline = "\n" /* LF */) {
    return text.replace(R_CRLF, newline);
}
exports.crlf = crlf;
function chkcrlf(text, options) {
    var _a;
    const disable = (_a = options === null || options === void 0 ? void 0 : options.disable) !== null && _a !== void 0 ? _a : {};
    return {
        lf: !disable.lf && /\n/.test(text.replace(/\r\n/g, '')),
        crlf: !disable.crlf && /\r\n/.test(text),
        cr: !disable.cr && /\r(?!\n)/.test(text),
    };
}
exports.chkcrlf = chkcrlf;
function detectLineBreak(text, options) {
    const _lb = chkcrlf(text, options);
    return _lb.crlf ? "\r\n" /* CRLF */ : (_lb.lf || !_lb.cr) ? "\n" /* LF */ : "\r" /* CR */;
}
exports.detectLineBreak = detectLineBreak;
function isCRLF(newline) {
    return newline === "\r\n" /* CRLF */;
}
exports.isCRLF = isCRLF;
function isLF(newline) {
    return newline === "\n" /* LF */;
}
exports.isLF = isLF;
function isCR(newline) {
    return newline === "\r" /* CR */;
}
exports.isCR = isCR;
function lineSplit(text) {
    return text.split(R_CRLF);
}
exports.lineSplit = lineSplit;
function crlf_unicode_normalize(text, newline = "\n" /* LF */) {
    const ln3 = newline + newline + newline;
    const ln2 = newline + newline;
    return text
        .replace(/\u000C/g, ln3)
        .replace(/\u2028/g, newline)
        .replace(/\u2029/g, ln2);
}
exports.crlf_unicode_normalize = crlf_unicode_normalize;
exports.default = crlf;
//# sourceMappingURL=index.js.map