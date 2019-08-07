/**
 * @todo add move zero width
 */

import { ENUM_ZERO_WIDTH } from './const';
import { strict } from 'assert';

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
	return new RegExp('[' + re.map(r => (typeof r === 'string' ? r : r.source).replace(/^\[|\]$/g, '')).join('') + ']', 'ug')
}

export const reZeroWidth = /[\u200b-\u200f\ufeff\u2060]/ug;

export const reZeroWidthAll = _regexpMerge([
	reVariationSelectorsAll,
	reZeroWidth,
]);

export const reZeroWidthWithSpace = _regexpMerge([
	reZeroWidthAll,
	'\\s',
]);

export const reZeroWidthTrim = new RegExp(`^${reZeroWidthWithSpace.source}+|${reZeroWidthWithSpace.source}+$`, 'gu');

export const reBomStrict = /^\ufeff/u;
export const reBomUnsafe = /\ufeff/ug;

