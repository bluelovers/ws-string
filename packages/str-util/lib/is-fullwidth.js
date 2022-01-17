"use strict";
/**
 * Created by user on 2017/12/8/008.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFullWidth = exports.isFullwidthCodePoint = void 0;
const tslib_1 = require("tslib");
const is_fullwidth_code_point_1 = tslib_1.__importDefault(require("is-fullwidth-code-point"));
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
        || (0, is_fullwidth_code_point_1.default)(x)) {
        return true;
    }
}
exports.isFullwidthCodePoint = isFullwidthCodePoint;
function isFullWidth(s) {
    // @ts-ignore
    return isFullwidthCodePoint((typeof s != 'number') ? s.codePointAt() : s);
}
exports.isFullWidth = isFullWidth;
exports.default = exports;
//# sourceMappingURL=is-fullwidth.js.map