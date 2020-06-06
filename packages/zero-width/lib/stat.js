"use strict";
exports.__esModule = true;
exports._toKey = exports._report = exports.reportZeroWidthWithSpace = exports.reportZeroWidth = void 0;
var regexp_helper_core_1 = require("regexp-helper-core");
var re_1 = require("./re");
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
    var stat = {};
    str.replace(re, function (s) {
        stat[s] = (stat[s] |= 0) + 1;
        return '';
    });
    stat = Object.entries(stat)
        .reduce(function (a, _a) {
        var k = _a[0], n = _a[1];
        a[_toKey(k)] = n;
        return a;
    }, {});
    return stat;
}
exports._report = _report;
function _toKey(k) {
    var k2;
    switch (k) {
        case "\t" /* TAB */:
            k2 = '\\t';
            break;
        case "\v" /* VERTICAL_TABULATION */:
            k2 = '\\v';
            break;
        case "\n" /* NEW_LINE */:
            k2 = '\\n';
            break;
        case "\r" /* CARRIAGE_RETURN */:
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
exports["default"] = reportZeroWidthWithSpace;
