"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by user on 2019/8/7.
 */
const re_1 = require("./re");
function existsZeroWidth(str) {
    return re_1.reVariationSelectorsAll.test(str);
}
exports.existsZeroWidth = existsZeroWidth;
function removeVariationSelectors(str) {
    return str.replace(re_1.reVariationSelectorsAll, '');
}
exports.removeVariationSelectors = removeVariationSelectors;
function removeZeroWidth(str) {
    return str
        .replace(re_1.reZeroWidthAll, '');
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
exports.default = removeZeroWidth;
//# sourceMappingURL=index.js.map