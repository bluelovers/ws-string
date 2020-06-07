"use strict";
/**
 * Created by user on 2017/12/8/008.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringWidth = void 0;
const strip_ansi_1 = __importDefault(require("strip-ansi"));
const is_fullwidth_1 = require("./is-fullwidth");
function stringWidth(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return 0;
    }
    str = strip_ansi_1.default(str);
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
exports.default = exports;
//# sourceMappingURL=width.js.map