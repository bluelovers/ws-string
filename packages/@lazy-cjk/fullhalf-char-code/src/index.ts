
export const enum EnumFullHalfTableType
{
	FULL_WIDTH = 1,
	HALF_WIDTH = 0,
	NO_EXIST = -1,
}

/**
 * Determines whether the specified character code is full-width or half-width.
 */
export function detectFullHalfCharCode(charCode: number)
{
	if (0x0020 <= charCode && charCode < 0x007F)
	{
		return EnumFullHalfTableType.HALF_WIDTH;
	}

	if (0x3000 === charCode || 0xFF00 < charCode && charCode < 0xFF5F)
	{
		return EnumFullHalfTableType.FULL_WIDTH;
	}

	return EnumFullHalfTableType.NO_EXIST;
}

/**
 * Determines whether the specified character code is full-width or half-width.
 */
export function isFullHalfCharCode(charCode: number)
{
	const r = detectFullHalfCharCode(charCode);

	if (r === EnumFullHalfTableType.FULL_WIDTH)
	{
		return true;
	}
	else if (r === EnumFullHalfTableType.HALF_WIDTH)
	{
		return false;
	}
	else
	{
		// @todo add more...
	}

	return null;
}

/**
 * Converts a half-width character code to a full-width character code.
 * @param {number} charCode - The half-width character code to convert.
 * @returns {number} The full-width character code.
 */
export function toFullWidthCharCode(charCode: number)
{
	if (0x0020 < charCode && charCode < 0x007F)
	{
		return 0xFF00 + (charCode - 0x0020);
	}

	if (0x0020 === charCode)
	{
		return 0x3000;
	}

	return charCode;
}

/**
 * Converts a full-width character code to a half-width character code.
 * @param {number} charCode - The full-width character code to convert.
 * @returns {number} The half-width character code.
 */
export function toHalfWidthCharCode(charCode: number)
{
	if (0xFF00 < charCode && charCode < 0xFF5F)
	{
		return 0x0020 + (charCode - 0xFF00);
	}

	if (0x3000 === charCode)
	{
		return 0x0020;
	}

	return charCode;
}
