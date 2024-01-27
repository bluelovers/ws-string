
export interface IcharCodeAtFn
{
	(char: unknown, charCode: unknown, str: unknown): unknown
}

export function split(str: unknown): string[]
{
	return str.toString().split('');
}

export function charCodeAt(str: unknown, cb?: IcharCodeAtFn): number[]
{
	let ret: any[] = [];

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

export default charCodeAt
