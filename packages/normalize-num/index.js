"use strict";
/**
 * Created by user on 2018/5/15/015.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.str2num = exports.roman2num = exports.circle2num = void 0;
const circle_1 = require("./lib/type/circle");
Object.defineProperty(exports, "circle2num", { enumerable: true, get: function () { return circle_1.circle2num; } });
const roman_1 = require("./lib/type/roman");
Object.defineProperty(exports, "roman2num", { enumerable: true, get: function () { return roman_1.roman2num; } });
function str2num(s, options = {}) {
    if (options.all && options.roman !== false || options.roman) {
        let m = (0, roman_1.isRoman)(s);
        if (m) {
            let n = (0, roman_1.roman2num)(m[1]);
            s = n.toString() + s.slice(m[1].length);
        }
    }
    if (options.all && options.circle !== false || options.circle) {
        s = (0, circle_1.circle2num)(s);
    }
    return s;
}
exports.str2num = str2num;
exports.default = str2num;
//# sourceMappingURL=index.js.map