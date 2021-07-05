"use strict";
/**
 * Created by user on 2018/5/15/015.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.str2num = exports.roman2num = exports.circle2num = void 0;
const tslib_1 = require("tslib");
const circle_1 = (0, tslib_1.__importDefault)(require("./lib/type/circle"));
exports.circle2num = circle_1.default;
const roman_1 = (0, tslib_1.__importStar)(require("./lib/type/roman"));
exports.roman2num = roman_1.default;
function str2num(s, options = {}) {
    if (options.all && options.roman !== false || options.roman) {
        let m = (0, roman_1.isRoman)(s);
        if (m) {
            let n = (0, roman_1.default)(m[1]);
            s = n.toString() + s.slice(m[1].length);
        }
    }
    if (options.all && options.circle !== false || options.circle) {
        s = (0, circle_1.default)(s);
    }
    return s;
}
exports.str2num = str2num;
exports.default = str2num;
//# sourceMappingURL=index.js.map