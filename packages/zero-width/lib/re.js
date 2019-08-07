"use strict";
/**
 * @todo add move zero width
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * VARIATION SELECTOR-1 ~ VARIATION SELECTOR-16
 */
exports.reVariationSelectors = /[\uFE00-\uFE0F]/ug;
/**
 * VARIATION SELECTOR-17 ~ VARIATION SELECTOR-256
 */
exports.reVariationSelectorsSupplement = /[\u{E0100}-\u{E01EF}]/ug;
/**
 * VARIATION SELECTOR-1 ~ VARIATION SELECTOR-256
 */
exports.reVariationSelectorsAll = /[\uFE00-\uFE0F\u{E0100}-\u{E01EF}]/ug;
/**
 * simple merge, not real regexp merge
 * @private
 */
function _regexpMerge(re) {
    return new RegExp('[' + re.map(r => (typeof r === 'string' ? r : r.source).replace(/^\[/, '').replace(/\]$/, '')).join('') + ']', 'ug');
}
exports._regexpMerge = _regexpMerge;
exports.reZeroWidth = /[\u200b-\u200f\ufeff\u2060]/ug;
exports.reZeroWidth2 = /[\u2028-\u202F\u205F-\u206F]/ug;
exports.reZeroWidthAll = _regexpMerge([
    exports.reVariationSelectorsAll,
    exports.reZeroWidth,
    exports.reZeroWidth2,
]);
exports.reNBSP = /\u00a0/ug;
exports.reNewLine = /[\r\n]/ug;
exports.reRegExpSpaceWithoutNewLine = /[\u0020\u00a0\t\v\u0008\u000c]/ug;
exports.reRegExpSpaceWithoutNewLinePlus = _regexpMerge([
    exports.reRegExpSpaceWithoutNewLine,
    exports.reNBSP,
]);
exports.reRegExpSpace = _regexpMerge([
    exports.reRegExpSpaceWithoutNewLine,
    exports.reNewLine,
    /\s/,
]);
exports.reRegExpSpacePlus = _regexpMerge([
    exports.reRegExpSpace,
    exports.reNBSP,
]);
exports.reZeroWidthWithSpaceWithoutNewLine = _regexpMerge([
    exports.reZeroWidthAll,
    exports.reRegExpSpaceWithoutNewLinePlus,
]);
exports.reZeroWidthWithSpace = _regexpMerge([
    exports.reZeroWidthWithSpaceWithoutNewLine,
    exports.reNewLine,
    /\s/,
]);
exports.reZeroWidthTrimWithoutNewLine = new RegExp(`^${exports.reZeroWidthWithSpaceWithoutNewLine.source}+|${exports.reZeroWidthWithSpaceWithoutNewLine.source}+$`, 'gu');
exports.reZeroWidthTrim = new RegExp(`^${exports.reZeroWidthWithSpace.source}+|${exports.reZeroWidthWithSpace.source}+$`, 'gu');
exports.reBomStrict = /^\ufeff/u;
exports.reBomUnsafe = /\ufeff/ug;
//# sourceMappingURL=re.js.map