"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CR = "\r";
exports.CRLF = "\r\n";
exports.LF = "\n";
function crlf(text, newline = exports.LF) {
    return text.replace(/\r\n|\r(?!\n)|\n/g, newline);
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
exports.default = crlf;
