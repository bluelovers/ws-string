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
    return new RegExp('[' + re.map(r => (typeof r === 'string' ? r : r.source).replace(/^\[|\]$/g, '')).join('') + ']', 'ug');
}
exports._regexpMerge = _regexpMerge;
exports.reZeroWidth = /[\u200b-\u200f\ufeff\u2060]/ug;
exports.reZeroWidthAll = _regexpMerge([
    exports.reVariationSelectorsAll,
    exports.reZeroWidth,
]);
exports.reZeroWidthWithSpace = _regexpMerge([
    exports.reZeroWidthAll,
    '\\s',
]);
exports.reZeroWidthTrim = new RegExp(`^${exports.reZeroWidthWithSpace.source}+|${exports.reZeroWidthWithSpace.source}+$`, 'gu');
exports.reBomStrict = /^\ufeff/u;
exports.reBomUnsafe = /\ufeff/ug;
//# sourceMappingURL=re.js.map