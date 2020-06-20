"use strict";
/**
 * Created by user on 2018/5/15/015.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roman2num = exports.normalizeRoman = exports.deromanize = exports.isRoman = void 0;
const deromanize_1 = __importDefault(require("deromanize"));
exports.deromanize = deromanize_1.default;
const num_is_roman_1 = __importDefault(require("num-is-roman"));
exports.isRoman = num_is_roman_1.default;
function normalizeRoman(input, bool) {
    let ro = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII',];
    for (let i = 0; i < 12; i++) {
        let r = new RegExp(String.fromCharCode(0x2160 + i) + '|' + String.fromCharCode(0x2160 + 16 + i), 'g');
        input = input.replace(r, bool ? String.fromCharCode(0x2160 + i) : ro[i]);
    }
    return input;
}
exports.normalizeRoman = normalizeRoman;
function roman2num(s) {
    return deromanize_1.default(normalizeRoman(s)).toString();
}
exports.roman2num = roman2num;
exports.default = roman2num;
//# sourceMappingURL=roman.js.map