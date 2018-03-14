"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = crlf;
