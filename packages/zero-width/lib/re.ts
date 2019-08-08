/**
 * @todo add move zero width
 */

import { ENUM_SPACE, ENUM_ZERO_WIDTH } from './const';

/**
 * VARIATION SELECTOR-1 ~ VARIATION SELECTOR-16
 */
export const reVariationSelectors = /[\uFE00-\uFE0F]/ug;

/**
 * VARIATION SELECTOR-17 ~ VARIATION SELECTOR-256
 */
export const reVariationSelectorsSupplement = /[\u{E0100}-\u{E01EF}]/ug;

/**
 * VARIATION SELECTOR-1 ~ VARIATION SELECTOR-256
 */
export const reVariationSelectorsAll = /[\uFE00-\uFE0F\u{E0100}-\u{E01EF}]/ug;

/**
 * simple merge, not real regexp merge
 * @private
 */
export function _regexpMerge(re: (string | RegExp)[])
{
	return new RegExp('[' + re.map(r => (typeof r === 'string' ? r : r.source).replace(/^\[/, '').replace(/\]$/, '')).join('') + ']', 'ug')
}

export const reZeroWidth = /[\u200b-\u200f\ufeff\u2060]/ug;
export const reZeroWidth2 = /[\u2028-\u202F\u205F-\u206F]/ug;

export const reZeroWidthAllSafe = _regexpMerge([
	reZeroWidth,
	reZeroWidth2,
]);

export const reZeroWidthAll = _regexpMerge([
	reVariationSelectorsAll,
	reZeroWidth,
	reZeroWidth2,
]);

export const reNBSP = /\u00a0/ug;

export const reNewLine = /[\r\n]/ug;

export const reRegExpSpaceWithoutNewLine = /[\u0020\u00a0\t\v\u0008\u000c]/ug;

export const reRegExpSpaceWithoutNewLinePlus = _regexpMerge([
	reRegExpSpaceWithoutNewLine,
	reNBSP,
]);

export const reRegExpSpace = _regexpMerge([
	reRegExpSpaceWithoutNewLine,
	reNewLine,
	/\s/,
]);

export const reRegExpSpacePlus = _regexpMerge([
	reRegExpSpace,
	reNBSP,
]);

export const reZeroWidthWithSpaceWithoutNewLine = _regexpMerge([
	reZeroWidthAll,
	reRegExpSpaceWithoutNewLinePlus,
]);

export const reZeroWidthWithSpace = _regexpMerge([
	reZeroWidthWithSpaceWithoutNewLine,
	reNewLine,
	/\s/,
]);

export const reZeroWidthTrimWithoutNewLine = new RegExp(`^${reZeroWidthWithSpaceWithoutNewLine.source}+|${reZeroWidthWithSpaceWithoutNewLine.source}+$`, 'gu');

export const reZeroWidthTrim = new RegExp(`^${reZeroWidthWithSpace.source}+|${reZeroWidthWithSpace.source}+$`, 'gu');

export const reBomStrict = /^\ufeff/u;
export const reBomUnsafe = /\ufeff/ug;
