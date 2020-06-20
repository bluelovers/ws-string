"use strict";
/**
 * Created by user on 2018/5/15/015.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.circle2num = void 0;
/**
 * @see http://xahlee.info/comp/unicode_circled_numbers.html
 *
 * @param str
 * @returns {string}
 *
 * @todo add more
 */
function circle2num(str) {
    str = str
        .replace(new RegExp(String.fromCharCode(9450), 'g'), '0');
    for (let n = 1; n <= 20; n++) {
        str = str
            .replace(new RegExp(String.fromCharCode(9312 + n - 1), 'g'), n);
    }
    for (let n = 21; n <= 35; n++) {
        str = str
            .replace(new RegExp(String.fromCharCode(12881 + n - 21), 'g'), n);
    }
    for (let n = 36; n <= 50; n++) {
        str = str
            .replace(new RegExp(String.fromCharCode(12977 + n - 36), 'g'), n);
    }
    //-------------
    for (let n = 1; n <= 10; n++) {
        str = str
            .replace(new RegExp(String.fromCharCode(0x24ea + n - 1), 'g'), n + 10);
    }
    //-------------
    str = str
        .replace(new RegExp(String.fromCharCode(0x24ff), 'g'), '0');
    for (let n = 1; n <= 10; n++) {
        str = str
            .replace(new RegExp(String.fromCharCode(0x2776 + n - 1), 'g'), n);
    }
    //-------------
    for (let n = 1; n <= 10; n++) {
        str = str
            .replace(new RegExp(String.fromCharCode(0x278a + n - 1), 'g'), n);
    }
    for (let n = 11; n <= 20; n++) {
        str = str
            .replace(new RegExp(String.fromCharCode(0x24eb + n - 1), 'g'), n);
    }
    //-------------
    for (let n = 1; n <= 10; n++) {
        str = str
            .replace(new RegExp(String.fromCharCode(0x24f5 + n - 1), 'g'), n);
    }
    return str;
}
exports.circle2num = circle2num;
exports.default = circle2num;
//# sourceMappingURL=circle.js.map