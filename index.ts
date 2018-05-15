/**
 * Created by user on 2018/5/15/015.
 */

import * as StrUtil from 'str-util';
import circle2num from './lib/type/circle';
import roman2num, { isRoman } from './lib/type/roman';

export { circle2num, roman2num }

export interface IOptions
{
	circle?: boolean,
	roman?: boolean,
	all?: boolean,
}

export function str2num(s: string, options: IOptions = {}): string
{
	if (options.all && options.roman !== false || options.roman)
	{
		let m = isRoman(s);

		if (m)
		{
			let n = roman2num(m[1]);
			s = n.toString() + s.slice(m[1].length);
		}
	}

	if (options.all && options.circle !== false || options.circle)
	{
		s = circle2num(s);
	}

	return s;
}

export default str2num;
