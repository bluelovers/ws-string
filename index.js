"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./lib/type/circle");
exports.circle2num = circle_1.default;
const roman_1 = require("./lib/type/roman");
exports.roman2num = roman_1.default;
function str2num(s, options = {}) {
    if (options.all && options.roman !== false || options.roman) {
        let m = roman_1.isRoman(s);
        if (m) {
            let n = roman_1.default(m[1]);
            s = n.toString() + s.slice(m[1].length);
        }
    }
    if (options.all && options.circle !== false || options.circle) {
        s = circle_1.default(s);
    }
    return s;
}
exports.str2num = str2num;
exports.default = str2num;
