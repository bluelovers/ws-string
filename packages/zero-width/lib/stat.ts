import { unicodeEscape, toHex } from 'regexp-helper-core';
import { reVariationSelectorsAll, reZeroWidthAll, reZeroWidthWithSpace } from './re';
import removeZeroWidth from './index';
import { ENUM_SPACE } from './const';

export function reportZeroWidth(str: string)
{
	return _report(str, reZeroWidthAll);
}

export function reportZeroWidthWithSpace(str: string)
{
	return _report(str, reZeroWidthWithSpace);
}

/**
 * @private
 */
export function _report(str: string, re: RegExp)
{
	let stat = {} as Record<string, number>;

	str.replace(re, (s) => {

		stat[s] = (stat[s] |= 0) + 1;

		return '';
	});

	stat = Object.entries(stat)
		.reduce((a, [k, n]) => {
			a[_toKey(k)] = n;
			return a;
		}, {})
	;

	return stat;
}

export function _toKey(k: string)
{
	let k2: string;

	switch (k)
	{
		case ENUM_SPACE.TAB:
			k2 = '\\t';
			break;
		case  ENUM_SPACE.VERTICAL_TABULATION:
			k2 = '\\v';
			break;
		case ENUM_SPACE.NEW_LINE:
			k2 = '\\n';
			break;
		case ENUM_SPACE.CARRIAGE_RETURN:
			k2 = '\\r';
			break;
		default:
			k2 = unicodeEscape(k, null, null, true);
			break;
	}

	if (k2 === k)
	{
		try
		{
			k2 = new RegExp(k, 'u').source
		}
		catch (e)
		{

		}
	}

	return k2
}

export default reportZeroWidthWithSpace
