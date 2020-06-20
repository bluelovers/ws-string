"use strict";
/**
 * Created by user on 2018/1/26/026.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.crlf_unicode_normalize = exports.lineSplit = exports.chkcrlf = exports.crlf = exports.R_CRLF = exports.LF = exports.CRLF = exports.CR = void 0;
exports.CR = "\r";
exports.CRLF = "\r\n";
exports.LF = "\n";
exports.R_CRLF = /\r\n|\r(?!\n)|\n/g;
function crlf(text, newline = exports.LF) {
    return text.replace(exports.R_CRLF, newline);
}
exports.crlf = crlf;
function chkcrlf(text) {
    return {
        lf: /\n/.test(text.replace(/\r\n/g, '')),
        crlf: /\r\n/.test(text),
        cr: /\r(?!\n)/.test(text),
    };
}
exports.chkcrlf = chkcrlf;
function lineSplit(text) {
    return text.split(exports.R_CRLF);
}
exports.lineSplit = lineSplit;
function crlf_unicode_normalize(text, newline = exports.LF) {
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