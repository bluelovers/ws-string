import {
	reBomStrict,
	reBomUnsafe,
	reNBSP,
	reVariationSelectorsAll,
	reZeroWidthAll, reZeroWidthAllSafe,
	reZeroWidthTrim,
} from './re';
import { ENUM_SPACE } from './const';

export function existsZeroWidth(str: string)
{
	return reZeroWidthAll.test(str)
}

export function removeVariationSelectors(str: string)
{
	return str.replace(reVariationSelectorsAll, '')
}

export function removeZeroWidth(str: string, unsafe?: boolean)
{
	if (unsafe)
	{
		return str.replace(reZeroWidthAll, '')
	}

	return str
		.replace(reZeroWidthAllSafe, '')
	;
}

export function trimWithZeroWidth(str: string)
{
	return str
		.replace(reZeroWidthTrim, '')
		;
}

export function removeBom(str: string, unsafe?: boolean)
{
	if (unsafe)
	{
		return str.replace(reBomUnsafe, '')
	}

	return str.replace(reBomStrict, '')
}

export function nbspToSpace(str: string)
{
	return str.replace(reNBSP, ENUM_SPACE.SPACE)
}

export default removeZeroWidth
