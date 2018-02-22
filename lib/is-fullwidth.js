"use strict";
/**
 * Created by user on 2017/12/8/008.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const _isFullwidthCodePoint = require("is-fullwidth-code-point");
function isFullwidthCodePoint(x) {
    if (Number.isNaN(x)) {
        return false;
    }
    if (0
        || (
        // https://en.wikipedia.org/wiki/Box-drawing_character
        0x2500 <= x && x <= 0x257f)
        || (
        // https://en.wikipedia.org/wiki/Block_Elements
        0x2580 <= x && x <= 0x259f)
        || _isFullwidthCodePoint(x)) {
        return true;
    }
}
exports.isFullwidthCodePoint = isFullwidthCodePoint;
function isFullWidth(s) {
    // @ts-ignore
    return isFullwidthCodePoint((typeof s != 'number') ? s.codePointAt() : s);
}
exports.isFullWidth = isFullWidth;
// @ts-ignore
exports.default = exports;
