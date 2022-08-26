"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._toKey = exports._report = exports.reportZeroWidthWithSpace = exports.reportZeroWidth = void 0;
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
        case "\t" /* ENUM_SPACE.TAB */:
            k2 = '\\t';
            break;
        case "\v" /* ENUM_SPACE.VERTICAL_TABULATION */:
            k2 = '\\v';
            break;
        case "\n" /* ENUM_SPACE.NEW_LINE */:
            k2 = '\\n';
            break;
        case "\r" /* ENUM_SPACE.CARRIAGE_RETURN */:
            k2 = '\\r';
            break;
        default:
            k2 = (0, regexp_helper_core_1.unicodeEscape)(k, null, null, true);
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
exports.default = reportZeroWidthWithSpace;
//# sourceMappingURL=stat.js.map