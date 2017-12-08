/**
 * Created by user on 2017/12/8/008.
 */

import * as _isFullwidthCodePoint from 'is-fullwidth-code-point';

export function isFullwidthCodePoint(x: number): boolean
{
	if (Number.isNaN(x))
	{
		return false;
	}

	if (
		// https://en.wikipedia.org/wiki/Box-drawing_character
	(0x2500 <= x && x <= 0x257f)
	// https://en.wikipedia.org/wiki/Block_Elements
	|| (0x2580 <= x && x <= 0x259f)
	|| _isFullwidthCodePoint(x)
	)
	{
		return true;
	}
}

export function isFullWidth<T = number | string>(s: T)
{
	// @ts-ignore
	return isFullwidthCodePoint((typeof s != 'number') ? s.codePointAt() : s);
}

// @ts-ignore
export default exports;
