"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deromanize = require("deromanize");
exports.deromanize = deromanize;
const num_is_roman_1 = require("num-is-roman");
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
    return deromanize(normalizeRoman(s)).toString();
}
exports.roman2num = roman2num;
exports.default = roman2num;
