"use strict";
/**
 * Created by user on 2017/12/8/008.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const stripAnsi = require("strip-ansi");
const is_fullwidth_1 = require("./is-fullwidth");
function stringWidth(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return 0;
    }
    str = stripAnsi(str);
    let width = 0;
    for (let i = 0; i < str.length; i++) {
        const code = str.codePointAt(i);
        // Ignore control characters
        if (code <= 0x1F || (code >= 0x7F && code <= 0x9F)) {
            continue;
        }
        // Ignore combining characters
        if (code >= 0x300 && code <= 0x36F) {
            continue;
        }
        // Surrogates
        if (code > 0xFFFF) {
            i++;
        }
        width += is_fullwidth_1.isFullwidthCodePoint(code) ? 2 : 1;
    }
    return width;
}
exports.stringWidth = stringWidth;
// @ts-ignore
exports.default = exports;
