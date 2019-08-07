"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by user on 2019/8/7.
 */
const regexp_helper_core_1 = require("regexp-helper-core");
const re_1 = require("./re");
function reportZeroWidth(str) {
    return _report(str, re_1.reZeroWidthAll);
}
exports.reportZeroWidth = reportZeroWidth;
function reportZeroWidthWithSpace(str) {
    return _report(str, re_1.reZeroWidthWithSpace);
}
exports.reportZeroWidthWithSpace = reportZeroWidthWithSpace;
/**
 * @private
 */
function _report(str, re) {
    let stat = {};
    str.replace(re, (s) => {
        stat[s] = (stat[s] |= 0) + 1;
        return '';
    });
    stat = Object.entries(stat)
        .reduce((a, [k, n]) => {
        a[_toKey(k)] = n;
        return a;
    }, {});
    return stat;
}
exports._report = _report;
function _toKey(k) {
    let k2;
    switch (k) {
        case '\t':
            k2 = '\\t';
            break;
        case '\v':
            k2 = '\\v';
            break;
        case '\n':
            k2 = '\\n';
            break;
        case '\r':
            k2 = '\\r';
            break;
        default:
            k2 = regexp_helper_core_1.unicodeEscape(k, null, null, true);
            break;
    }
    if (k2 === k) {
        try {
            k2 = new RegExp(k, 'u').source;
        }
        catch (e) {
        }
    }
    return k2;
}
exports._toKey = _toKey;
console.dir(/\n/.source);
console.dir(reportZeroWidthWithSpace('\udb40\udd00\n\r\b\t\v\u00a0 '));
console.dir(`1\u20602`);
//# sourceMappingURL=stat.js.map