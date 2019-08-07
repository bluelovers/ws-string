/**
 * Created by user on 2019/8/7.
 */
import { _regexpMerge, reBomStrict, reBomUnsafe, reVariationSelectorsAll, reZeroWidthAll, reZeroWidthTrim } from './re';

export function existsZeroWidth(str: string)
{
	return reVariationSelectorsAll.test(str)
}

export function removeVariationSelectors(str: string)
{
	return str.replace(reVariationSelectorsAll, '')
}

export function removeZeroWidth(str: string)
{
	return str
		.replace(reZeroWidthAll, '')
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

export default removeZeroWidth
