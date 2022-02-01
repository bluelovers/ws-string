"use strict"

export function stringSplitWithLimit(str: string, separator?: string, limit?: number): string[]
{
	if (!limit || separator === undefined) return str.split(separator, limit)
	if (!separator.length) return limit > 0 ? _splitStart_noSep(str, limit) : _splitEnd_noSep(str, -limit)
	return limit > 0 ? _splitStart(str, separator, limit, 0, []) : _splitEnd(str, separator, -limit, str.length, [])
}

export default stringSplitWithLimit

export function _splitStart_noSep(str: string, lim: number)
{
	const ret: string[] = [];
	lim = Math.min(lim, str.length) - 1
	for (let i = 0; i < lim; ++i) ret.push(str[i])
	ret.push(str.slice(lim))
	return ret
}

export function _splitEnd_noSep(str: string, lim: number)
{
	const ret: string[] = [];
	lim = Math.min(lim, str.length)
	const firstSlice = str.length - lim + 1;
	ret.push(str.slice(0, firstSlice))
	for (let i = firstSlice; i < str.length; ++i) ret.push(str[i])
	return ret
}

export function _splitStart(str: string, sep: string, lim: number, cur: number, acc: string[]): string[]
{
	const index = str.indexOf(sep, cur);
	if (index == -1 || acc.length + 1 == lim)
	{
		acc.push(str.slice(cur))
		return acc
	}
	acc.push(str.slice(cur, index))
	return _splitStart(str, sep, lim, index + sep.length, acc)
}

export function _splitEnd(str: string, sep: string, lim: number, cur: number, acc: string[]): string[]
{
	const index = str.lastIndexOf(sep, cur);
	if (cur == -1 || index == -1 || acc.length + 1 == lim)
	{
		acc.unshift(str.slice(0, cur + 1))
		return acc
	}
	acc.unshift(str.slice(index + sep.length, cur + 1))
	return _splitEnd(str, sep, lim, index - 1, acc)
}
