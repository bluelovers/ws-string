"use strict";
/**
 * do not edit this file
 * source file at test/scripts/src
 */
exports.__esModule = true;
exports.reBomUnsafe = exports.reBomStrict = exports.reZeroWidthTrim = exports.reZeroWidthTrimWithoutNewLine = exports.reZeroWidthWithSpace = exports.reZeroWidthWithSpaceWithoutNewLine = exports.reRegExpSpacePlus = exports.reRegExpSpace = exports.reRegExpSpaceWithoutNewLinePlus = exports.reRegExpSpaceWithoutNewLine = exports.reNewLine = exports.reNBSP = exports.reZeroWidthAll = exports.reZeroWidthAllSafe = exports.reZeroWidth2 = exports.reZeroWidth = exports.reVariationSelectorsAll = exports.reVariationSelectorsSupplement = exports.reVariationSelectors = void 0;
exports.reVariationSelectors = /[\uFE00-\uFE0F]/gu;
exports.reVariationSelectorsSupplement = /[\u{E0100}-\u{E01EF}]/gu;
exports.reVariationSelectorsAll = /[\uFE00-\uFE0F\u{E0100}-\u{E01EF}]/gu;
exports.reZeroWidth = /[\u200B-\u200F\u2060\uFEFF]/gu;
exports.reZeroWidth2 = /[\u2028-\u202F\u205F-\u206F]/gu;
exports.reZeroWidthAllSafe = /[\u200B\u200E\u200F\u2028-\u202F\u205F-\u206F\uFEFF]/gu;
exports.reZeroWidthAll = /[\u200B-\u200F\u2028-\u202F\u205F-\u206F\uFE00-\uFE0F\uFEFF\u{E0100}-\u{E01EF}]/gu;
exports.reNBSP = /[\xA0]/gu;
exports.reNewLine = /[\n\r]/gu;
exports.reRegExpSpaceWithoutNewLine = /[\x08\t\x0B\f \xA0]/gu;
exports.reRegExpSpaceWithoutNewLinePlus = /[\x08\t\x0B\f \xA0]/gu;
exports.reRegExpSpace = /[\x08-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/gu;
exports.reRegExpSpacePlus = /[\x08-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/gu;
exports.reZeroWidthWithSpaceWithoutNewLine = /[\x08\t\x0B\f \xA0\u200B-\u200F\u2028-\u202F\u205F-\u206F\uFE00-\uFE0F\uFEFF\u{E0100}-\u{E01EF}]/gu;
exports.reZeroWidthWithSpace = /[\x08-\r \xA0\u1680\u2000-\u200F\u2028-\u202F\u205F-\u206F\u3000\uFE00-\uFE0F\uFEFF\u{E0100}-\u{E01EF}]/gu;
exports.reZeroWidthTrimWithoutNewLine = /^[\uFE00-\uFE0F\u{E0100}-\u{E01EF}\u200b-\u200f\ufeff\u2060\u2028-\u202F\u205F-\u206F\u0020\u00a0\t\v\u0008\u000c\u00a0]+|[\uFE00-\uFE0F\u{E0100}-\u{E01EF}\u200b-\u200f\ufeff\u2060\u2028-\u202F\u205F-\u206F\u0020\u00a0\t\v\u0008\u000c\u00a0]+$/gu;
exports.reZeroWidthTrim = /^[\uFE00-\uFE0F\u{E0100}-\u{E01EF}\u200b-\u200f\ufeff\u2060\u2028-\u202F\u205F-\u206F\u0020\u00a0\t\v\u0008\u000c\u00a0\r\n\s]+|[\uFE00-\uFE0F\u{E0100}-\u{E01EF}\u200b-\u200f\ufeff\u2060\u2028-\u202F\u205F-\u206F\u0020\u00a0\t\v\u0008\u000c\u00a0\r\n\s]+$/gu;
exports.reBomStrict = /^\ufeff/u;
exports.reBomUnsafe = /[\uFEFF]/gu;
