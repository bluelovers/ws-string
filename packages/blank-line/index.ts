/**
 * Created by user on 2018/1/13/013.
 */

import { execall } from 'execall2';
import { normalize } from './src/normalize';

export interface IOptions
{
	filter?: boolean,
	sort?: boolean,
}

export function getBlankLine(txt, options: IOptions = {}): number[]
{
	let _ms = execall(/\n+/g, normalize(txt));

	if (_ms.length)
	{
		let _ret: number[] = (_ms)
			.reduce(function (a, b)
			{
				a.push(b.match.length);

				return a;
			}, [])
		;

		if (options.filter)
		{
			_ret = _ret.filter(function (v, i, a)
			{
				return a.indexOf(v) == i;
			});
		}

		if (options.sort)
		{
			_ret.sort(function (a, b)
			{
				return a - b;
			});
		}

		return _ret;
	}

	return null;
}

export function getMinMidMax(txt): [number, number, number]
{
	let _ms = getBlankLine(txt, {
		filter: true,
		sort: true,
	});

	if (!_ms || !_ms.length)
	{
		return [null, null, null];
	}

	let min = _ms[0] || null;
	let max = _ms[_ms.length - 1] || min;

	let mid = _ms[1] || min;

	return [min, mid, max];
}

export default getMinMidMax;
//export default exports;
