/**
 * Created by user on 2017/12/8/008.
 */

import deepmerge = require('deepmerge');
import util = require('./util');

export namespace FullHalfCore
{
	export const enum EnumFullHalfTableType
	{
		FULL_WIDTH = 1,
		HALF_WIDTH = 0,
		NO_EXIST = -1,
	}

	export const FULL_WIDTH = EnumFullHalfTableType.FULL_WIDTH;
	export const HALF_WIDTH = EnumFullHalfTableType.HALF_WIDTH;

	export const NO_EXIST = EnumFullHalfTableType.NO_EXIST;

	export interface IOptionsType
	{
		eng?: boolean,
		number?: boolean,

		/**
		 * eng & number
		 */
		both?: boolean;

		space?: boolean;
		exists?: boolean;

		default?: boolean;
		not_default?: boolean;
		not_default2?: boolean;

		slash?: boolean;
		bracket?: boolean;

		[index: string]: boolean;
	}

	export interface IOptions
	{
		type?: number;

		skip?: IOptionsType;
		only?: IOptionsType;

		mode?: {
			only?: boolean,

			[index: string]: boolean;
		};

		returnType?: number;
	}

	export interface ITableObject
	{
		from?: number;
		to?: number;

		values?: number[];

		not?: ITableObject[],
	}

	export interface ITable
	{
		default?: ITableObject;

		number?: ITableObject;
		space?: ITableObject;

		'A-Z'?: ITableObject;
		'a-z'?: ITableObject;

		not_default?: ITableObject;

		[index: string]: ITableObject;
	}

	/**
	 * @see https://en.wikipedia.org/wiki/Code_page_437
	 */
	let _table = {
		default: {
			from: 0x0020 + 1,
			to: 0x007F - 1,
			values: [0x0020],
		},

		number: [0x0030, 0x0039],

		'A-Z': [0x0041, 0x005A],
		'a-z': [0x0061, 0x007A],

		space: [0x0020],

		slash: {
			values: util.charCodeAt(`/\\`),
		},

		bracket: {
			values: util.charCodeAt(`()[]{}`),
		},
	};

	export let tableDefaultInclude = [
		'number',
		'A-Z',
		'a-z',
		'space',
		'not_default',
	];

	export let table: ITable[] = [];

	{
		let _keys = tableDefaultInclude.slice(0, -1);

		table[0] = {};
		table[1] = {};

		for (let k in _table)
		{
			let v = _table[k];

			let r;

			r = fn(v);

			if (r)
			{
				table[EnumFullHalfTableType.HALF_WIDTH][k] = r[1];
				table[EnumFullHalfTableType.FULL_WIDTH][k] = r[0];
			}
		}

		let r = fn(_table.default);

		r[0].not = [];
		r[1].not = [];

		for (let k of _keys)
		{
			let v = _table[k];

			let r2;

			r2 = fn(v);

			if (r2)
			{
				r[0].not.push(r2[0]);
				r[1].not.push(r2[1]);
			}
		}

		table[EnumFullHalfTableType.HALF_WIDTH]['not_default'] = r[1];
		table[EnumFullHalfTableType.FULL_WIDTH]['not_default'] = r[0];

		//console.log(table);

		function fn(v)
		{
			let r: ITableObject[] = [];

			r[0] = {};
			r[1] = {};

			let _skip = true;

			if (Array.isArray(v))
			{
				if (v.length == 2)
				{
					r[0].from = v[0];
					r[0].to = v[1];
				}
				else
				{
					r[0].values = v;
				}

				_skip = false;
			}

			if (v.from && v.to)
			{
				r[0].from = v.from;
				r[0].to = v.to;

				_skip = false;
			}

			if (Array.isArray(v.values) && v.values.length)
			{
				r[0].values = v.values;

				_skip = false;
			}

			if (_skip)
			{
				return;
			}

			if (r[0].from && r[0].to)
			{
				r[1].from = toFullWidth(r[0].from);
				r[1].to = toFullWidth(r[0].to);
			}

			if (r[0].values)
			{
				r[1].values = (r[0].values as number[]).reduce(function (a, code)
				{
					a.push(toFullWidth(code));

					return a;
				}, []);
			}

			return r;
		}
	}

	export function filterTable(data)
	{
		let _a = [];

		if (data.from && data.to)
		{
			for (let i = data.from; i<=data.to; i++)
			{
				_a.push(i);
			}
		}

		if (data.values)
		{
			_a = _a.concat(data.values)
		}

		if (Array.isArray(data.not) && data.not.length)
		{
			_a = _a.filter(function (charCode)
			{
				for (let d of data.not)
				{
					if (_chkType(charCode, d))
					{
						return false;
					}
				}

				return true;
			});
		}

		return _a;
	}

	export function _chkType(charCode: number, data: ITableObject)
	{
		if (data.from && data.to && data.from <= charCode && charCode <= data.to)
		{
			return true;
		}
		else if (data.values && data.values.includes(charCode))
		{
			return true;
		}
	}

	export function chkType(charCode: number, key: string, type: number)
	{
		let data = table[type][key];

		//console.log(charCode, data);

		if (Array.isArray(data.not) && data.not.length)
		{
			for (let d of data.not)
			{
				if (_chkType(charCode, d))
				{
					return false;
				}
			}
		}

		if (_chkType(charCode, data))
		{
			return true;
		}
	}

	export function hasFullHalf(charCode: number)
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

	export function isFullHalf(charCode: number)
	{
		let r = hasFullHalf(charCode);

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

	export function toFullWidth(charCode: number)
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

	export function toHalfWidth(charCode: number)
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

	export function _optionsType(data: IOptionsType)
	{
		if (data)
		{
			if (typeof data.exists == 'boolean')
			{
				for (let key in table[0])
				{
					if (key.indexOf('default') == 0)
					{
						continue;
					}

					if (data[key] !== false)
					{
						data[key] = data.exists;
					}
				}

				delete data.exists;
			}
			else
			{
				if (typeof data.default == 'boolean')
				{
					for (let key of tableDefaultInclude)
					{
						if (data[key] !== false)
						{
							data[key] = data.default;
						}
					}

					delete data.default;
				}

				if (typeof data.not_default2 == 'boolean')
				{
					data.both = data.space = data.not_default2;
					delete data.not_default2;
				}

				if (typeof data.both == 'boolean')
				{
					data.number = data.eng = data.both;
					delete data.both;
				}

				if (typeof data.eng == 'boolean')
				{
					data['a-z'] = data['A-Z'] = data.eng;
					delete data.eng;
				}
			}
		}

		return data;
	}

	export function process<T, U = string>(str, charProcess, options: IOptions)
	{
		let ret: number[] = [];

		options.skip = _optionsType(options.skip);
		options.only = _optionsType(options.only);

		//console.log(options);

		let _str = Array.isArray(str) ? str : str.toString();

		for (let char of _str)
		{
			let _skip: boolean;

			// @ts-ignore
			let charCode = typeof char == 'number' ? char : char.charCodeAt();

			if (options.only)
			{
				_skip = true;

				for (let key in options.only)
				{
					//console.log(char, charCode, [key], chkType(charCode, key, options.type));

					if (options.only[key] && chkType(charCode, key, options.type))
					{
						_skip = false;
						break;
					}
				}

				//console.log(char, charCode, _skip);
			}

			if (!_skip && options.skip)
			{
				for (let key in options.skip)
				{
					if (options.skip[key] && chkType(charCode, key, options.type))
					{
						_skip = true;
						break;
					}
				}
			}

			if (_skip)
			{
				ret.push(charCode);
				continue;
			}

			ret.push(charProcess(charCode));
		}

		if (options.returnType)
		{
			return ret as number[];
		}

		return String.fromCharCode.apply(String, ret);
	}

	export function factory<T = string>(charProcessor, type: number | EnumFullHalfTableType, overwriteOptions?: IOptions): IFactoryFn
	{
		//const deepmerge = require('deepmerge');

		// @ts-ignore
		return (str, options?: IOptions) =>
		{
			options = deepmerge.all([
				{
					//skip: {},
				}, options || {}, overwriteOptions || {}, {
					type: type,
				},
			]);

			//console.log(options);

			return process<T>(str, charProcessor, options);
		};
	}

	export interface IFactoryFn
	{
		(str: string, options?: IOptions): string
		(str: number, options?: IOptions): string
		(str, options?: IOptions)
	}
}

let typeOnly: FullHalfCore.IOptions = {
	only: {
		number: true,
	},
};

export const toFullNumber = FullHalfCore.factory<string>(FullHalfCore.toFullWidth, FullHalfCore.EnumFullHalfTableType.FULL_WIDTH, typeOnly);
export const toHalfNumber = FullHalfCore.factory<string>(FullHalfCore.toHalfWidth, FullHalfCore.EnumFullHalfTableType.HALF_WIDTH, typeOnly);

typeOnly = {
	only: {
		eng: true,
	},
};

export const toFullEnglish = FullHalfCore.factory<string>(FullHalfCore.toFullWidth, FullHalfCore.EnumFullHalfTableType.FULL_WIDTH, typeOnly);
export const toHalfEnglish = FullHalfCore.factory<string>(FullHalfCore.toHalfWidth, FullHalfCore.EnumFullHalfTableType.HALF_WIDTH, typeOnly);

typeOnly = {
	only: {
		default: true,
	},
};

export const toFullWidth = FullHalfCore.factory<string>(FullHalfCore.toFullWidth, FullHalfCore.EnumFullHalfTableType.FULL_WIDTH, typeOnly);
export const toHalfWidth = FullHalfCore.factory<string>(FullHalfCore.toHalfWidth, FullHalfCore.EnumFullHalfTableType.HALF_WIDTH, typeOnly);

export default exports as typeof import('./fullhalf');

//console.log(toFullEnglish('123abcABCＡＢＣ１２３／＊－＋＝－０］［’；／．+-*/=-09][\'";/.'));
//console.log(toHalfEnglish('123abcABCＡＢＣ１２３／＊－＋＝－０］［’；／．+-*/=-09][\'";/.'));
//console.log(toFullNumber('123abcABCＡＢＣ１２３／＊－＋＝－０］［’；／．+-*/=-09][\'";/.'));
//console.log(toHalfNumber('123abcABCＡＢＣ１２３／＊－＋＝－０］［’；／．+-*/=-09][\'";/.'));
