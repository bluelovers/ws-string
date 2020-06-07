/**
 * Created by user on 2017/12/9/009.
 */

export interface IcharCodeAtFn
{
	(char, charCode, str)
}

export function split(str): string[]
{
	return str.toString().split('');
}

export function charCodeAt(str, cb?: IcharCodeAtFn): number[]
{
	let ret = [];

	if (typeof cb !== 'function')
	{
		cb = void(0);
	}

	let _str = Array.isArray(str) ? str : str.toString();

	for (let char of _str)
	{
		let charCode = char.charCodeAt();
		let r;

		if (cb && (r = cb(char, charCode, str), typeof r != 'undefined'))
		{
			if (!r)
			{
				continue;
			}
			else if (Array.isArray(r))
			{
				ret = ret.concat(r);

				continue;
			}
		}

		ret.push(charCode);
	}

	return ret;
}

export default exports as typeof import('./util');
