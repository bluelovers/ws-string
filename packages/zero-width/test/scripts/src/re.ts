/**
 * @todo add move zero width
 */
import { _regexpMerge } from '../../../lib/util';
import regexpClassToObject from 'regexp-class-to-regenerate';
import { ENUM_ZERO_WIDTH } from '../../../lib/const';

export function _regexpMerge2(...argv: Parameters<typeof _regexpMerge>)
{
	return regexpClassToObject(_regexpMerge(...argv))
}

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

export const reZeroWidth = /[\u200b-\u200f\ufeff\u2060]/ug;
export const reZeroWidth2 = /[\u2028-\u202F\u205F-\u206F]/ug;

export const reZeroWidthAllSafe = _regexpMerge2([
	reZeroWidth,
	reZeroWidth2,
])
	// @ts-ignore
	.remove(ENUM_ZERO_WIDTH.JOINER)
	.remove(ENUM_ZERO_WIDTH.NON_JOINER)
	.toRegExp()
;

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


export const reControlCodes = _regexpMerge([
	/\u0000-\u001F/,
	/\u007F/,
	/\u0080-\u009F/,
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

/**
 * for trim use
 */
export const _reZeroWidthTrimWithoutNewLine = _regexpMerge([
	reZeroWidthWithSpaceWithoutNewLine,
	reControlCodes,
]);

/**
 * for trim use
 */
export const _reZeroWidthTrim = _regexpMerge([
	reZeroWidthWithSpace,
	reControlCodes,
]);

export const reZeroWidthTrimWithoutNewLine = new RegExp(`^${_reZeroWidthTrimWithoutNewLine.source}+|${_reZeroWidthTrimWithoutNewLine.source}+$`, 'gu');

export const reZeroWidthTrim = new RegExp(`^${_reZeroWidthTrim.source}+|${_reZeroWidthTrim.source}+$`, 'gu');

export const reBomStrict = /^\ufeff/u;
export const reBomUnsafe = /\ufeff/ug;
