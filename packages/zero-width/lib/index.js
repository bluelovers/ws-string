"use strict";
exports.__esModule = true;
exports.nbspToSpace = exports.removeBom = exports.trimWithZeroWidth = exports.removeZeroWidth = exports.removeVariationSelectors = exports.existsZeroWidth = void 0;
var re_1 = require("./re");
function existsZeroWidth(str) {
    return re_1.reZeroWidthAll.test(str);
}
exports.existsZeroWidth = existsZeroWidth;
function removeVariationSelectors(str) {
    return str.replace(re_1.reVariationSelectorsAll, '');
}
exports.removeVariationSelectors = removeVariationSelectors;
function removeZeroWidth(str, unsafe) {
    if (unsafe) {
        return str.replace(re_1.reZeroWidthAll, '');
    }
    return str
        .replace(re_1.reZeroWidthAllSafe, '');
}
exports.removeZeroWidth = removeZeroWidth;
function trimWithZeroWidth(str) {
    return str
        .replace(re_1.reZeroWidthTrim, '');
}
exports.trimWithZeroWidth = trimWithZeroWidth;
function removeBom(str, unsafe) {
    if (unsafe) {
        return str.replace(re_1.reBomUnsafe, '');
    }
    return str.replace(re_1.reBomStrict, '');
}
exports.removeBom = removeBom;
function nbspToSpace(str) {
    return str.replace(re_1.reNBSP, " " /* SPACE */);
}
exports.nbspToSpace = nbspToSpace;
exports["default"] = removeZeroWidth;
