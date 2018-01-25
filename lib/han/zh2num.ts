/**
 * Created by user on 2017/12/11/011.
 */

import * as chinese_parseInt from 'chinese-parseint';
import * as japanese from 'japanese';

export interface IOptions
{
	/**
	 * @see https://github.com/hakatashi/japanese.js/blob/master/src/numbers.es6
 	 */
	digits?: string[];
	/**
	 * @see https://github.com/hakatashi/japanese.js/blob/master/src/numbers.es6
	 */
	unitNames?: string[];

	/**
	 * replace all
	 */
	unsafe?: boolean;
	/**
	 * RegExp Flags
	 */
	flags?: string;

	chars?: string;

	truncateOne?: number | boolean;

	strict?: boolean;

	one?: boolean;

	string?: boolean;
}

export const defaultOptions = {
	one: true,
} as IOptions;

export const transcriptionConfigs = japanese.transcriptionConfigs;

export const predefineedTranscriptionConfigs = japanese.predefineedTranscriptionConfigs;

/**
 * 將漢字轉換成數字
 * Parse Chinese/Japanese numeric strings to integer
 *
 * @param str
 * @param {IOptions} options
 * @returns {string|number}
 *
 * @example zh2num('千百十七') == 1117
 */
export function zh2num(str, options?: IOptions): string
export function zh2num(str: number, options?: IOptions): number
export function zh2num(str, options: IOptions = {})
{
	options = Object.assign({}, defaultOptions, options);

	let sa: string[] = [];
	let do_def = true;

	let jtc = japanese.transcriptionConfigs;
	let jpc = japanese.predefineedTranscriptionConfigs;

	for (let id of [
		'digits',
		'unitNames',
	])
	{
		if (Array.isArray(options[id]) && options[id].length)
		{
			for (let d of options[id])
			{
				if (jpc[id][d])
				{
					sa = sa.concat(Object.values(jpc[id][d]));
				}
			}
		}
	}

	if (typeof options.truncateOne == 'number')
	{
		for (let i in jtc.default.truncateOne)
		{
			// @ts-ignore
			if (i < options.truncateOne)
			{
				sa.push(jtc.default.truncateOne[i])
			}
		}
	}
	else if ((typeof options.truncateOne == 'undefined' || options.truncateOne === true) && sa.length)
	{
		sa = sa.concat(Object.values(jtc.default.truncateOne));
	}

	if (options.chars)
	{
		sa = sa.concat(Array.isArray(options.chars) ? options.chars : options.chars.split(''));
	}

	if (sa.length)
	{
		do_def = false;
	}

	sa.filter(function (value)
	{
		if (value.length == 1 && (value in chinese_parseInt.characters))
		{
			return true;
		}

		return false;
	});

	if (do_def)
	{
		sa = Object.keys(chinese_parseInt.characters);
	}

	options.flags = (options.flags || 'u');

	if (options.unsafe)
	{
		options.flags = (options.flags || '') + 'g';
	}

	//console.log(options, sa);

	let rs = sa.join();

	let s = str.toString();

	if (!(new RegExp('([^' + rs + '])')).test(s))
	{
		return _chinese_parseInt(s, options) as number;
	}
	else if (options.strict)
	{
		return Number.NaN;
	}

	let r = new RegExp('([' + rs + ']+)', options.flags);

	return s.replace(r, function (...m)
	{
		return _chinese_parseInt(m[1], options);
	}).toString();
}

export function _chinese_parseInt(str: string, options: IOptions = {})
{
	if (options.one)
	{
		str = str.replace(/([佰百])([一二三四五六七八九壹貳參肆伍陸柒捌玖])(?![零○〇一二三四五六七八九壹貳參肆伍陸柒捌玖拾十什])/, '$1〇$2');
	}

	let ret = chinese_parseInt(str);

	if (options.string)
	{
		ret = ret.toString();
	}

	return ret;
}

/**
 * 將數字轉為漢字
 *
 * @param number
 * @param options
 * @returns {string}
 *
 * @example num2zh(1117) == '千百十七'
 */
export function num2zh(number, options: any = {}): string
{
	let d = parseInt(number);

	if (Number.isNaN(d) || (options && options.strict && (typeof number != 'number' || d !== number)))
	{
		throw new TypeError(`${number} is not valid allow number`);
	}

	return japanese.transcribeNumber(d, options);
}

// @ts-ignore
export default exports;
