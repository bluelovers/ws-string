
import { EnumFullHalfTableType, toFullWidthCharCode, toHalfWidthCharCode } from '@lazy-cjk/fullhalf-char-code';
import UString from 'uni-string';
import { all } from 'deepmerge';
import { tableFullHalf, ITableFullHalfDefaultIncludeKey, tableFullHalfDefaultInclude, ITableFullHalfObject } from '@lazy-cjk/fullhalf-data';

let typeOnly: IOptions = {
	only: {
		number: true,
	},
};

export const toFullNumber = factory<string>(toFullWidthCharCode, EnumFullHalfTableType.FULL_WIDTH, typeOnly);
export const toHalfNumber = factory<string>(toHalfWidthCharCode, EnumFullHalfTableType.HALF_WIDTH, typeOnly);

typeOnly = {
	only: {
		eng: true,
	},
};

export const toFullEnglish = factory<string>(toFullWidthCharCode, EnumFullHalfTableType.FULL_WIDTH, typeOnly);
export const toHalfEnglish = factory<string>(toHalfWidthCharCode, EnumFullHalfTableType.HALF_WIDTH, typeOnly);

typeOnly = {
	only: {
		default: true,
	},
};

export const toFullWidth = factory<string>(toFullWidthCharCode, EnumFullHalfTableType.FULL_WIDTH, typeOnly);
export const toHalfWidth = factory<string>(toHalfWidthCharCode, EnumFullHalfTableType.HALF_WIDTH, typeOnly);

export function _optionsType(data: IOptionsType)
{
	if (data)
	{
		if (typeof data.exists === 'boolean')
		{
			for (let key in tableFullHalf[0])
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
			if (typeof data.default === 'boolean')
			{
				for (let key of tableFullHalfDefaultInclude)
				{
					if (data[key] !== false)
					{
						data[key] = data.default;
					}
				}

				delete data.default;
			}

			if (typeof data.not_default2 === 'boolean')
			{
				data.both = data.space = data.not_default2;
				delete data.not_default2;
			}

			if (typeof data.both === 'boolean')
			{
				data.number = data.eng = data.both;
				delete data.both;
			}

			if (typeof data.eng === 'boolean')
			{
				data['a-z'] = data['A-Z'] = data.eng;
				delete data.eng;
			}
		}
	}

	return data;
}

export function _chkType(charCode: number, data: ITableFullHalfObject)
{
	if (data.from && data.to && data.from <= charCode && charCode <= data.to)
	{
		return true;
	}
	else if (data.values?.includes(charCode))
	{
		return true;
	}
}

export function chkType(charCode: number, key: ITableFullHalfDefaultIncludeKey, type: EnumFullHalfTableType)
{
	let data: ITableFullHalfObject = tableFullHalf[type][key];

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

//@ts-ignore
export function process<T, U = string>(str: unknown, charProcess: ICharProcessor, options: IOptions)
{
	let ret: number[] = [];

	options.skip = _optionsType(options.skip);
	options.only = _optionsType(options.only);

	//console.log(options);

	let _str = Array.isArray(str) ? str : new UString(str);

	for (let char of _str)
	{
		let _skip: boolean;

		// @ts-ignore
		//let charCode = typeof char == 'number' ? char : char.charCodeAt();
		let charCode = typeof char == 'number' ? char : char.codePointAt();

		if (options.only)
		{
			_skip = true;

			for (let key in options.only)
			{
				//console.log(char, charCode, [key], chkType(charCode, key, options.type));

				if (options.only[key] && chkType(charCode, key as ITableFullHalfDefaultIncludeKey, options.type))
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
				if (options.skip[key] && chkType(charCode, key as ITableFullHalfDefaultIncludeKey, options.type))
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

	//return String.fromCharCode.apply(String, ret);
	return String.fromCodePoint.apply(String, ret);
}

export function factory<T = string>(charProcessor: ICharProcessor,
	type: number | EnumFullHalfTableType,
	overwriteOptions?: IOptions
): IFactoryFn
{
	//const deepmerge = require('deepmerge');

	// @ts-ignore
	return (str, options?: IOptions) =>
	{
		options = all([
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

export function _filterTable(data: ITableFullHalfObject)
{
	let _a: number[] = [];

	if (data.from && data.to)
	{
		for (let i = data.from; i <= data.to; i++)
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

export interface IOptionsType extends Partial<Record<ITableFullHalfDefaultIncludeKey, boolean>>
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

export interface IOptionsBase
{
	type?: number;

	skip?: IOptionsType;
	only?: IOptionsType;

	mode?: {
		only?: boolean,

		[index: string]: boolean;
	};
}

export type IOptionsTrue = IOptionsBase & {

	/**
	 * 回傳直接回傳陣列而不組合成字串
	 */
	returnType: ILazyTrue;

}

export type IOptionsFalse = IOptionsBase & {

	/**
	 * 回傳直接回傳陣列而不組合成字串
	 */
	returnType?: ILazyFalse;

}

export interface IOptions extends IOptionsBase
{

	/**
	 * 回傳直接回傳陣列而不組合成字串
	 */
	returnType?: ILazyTrue | ILazyFalse;

}

type ILazyTrue = true | 1;
type ILazyFalse = 0 | false | void | undefined | null;

export interface IFactoryFn
{
	(str: string | string[], options?: IOptionsFalse): string

	(str: (string | number)[], options: IOptionsTrue): number[]

	(str: unknown, options: IOptionsTrue): number[]

	(str: (string | number)[]): string

	(str: (string | number)[], options?: IOptionsFalse): string

	(str: unknown, options: IOptionsFalse): string

	(str: unknown, options: IOptions): string | number[]
}

export type ICharProcessor = (charCode: number) => number

export default {
	toFullNumber,
	toHalfNumber,

	toFullEnglish,
	toHalfEnglish,

	toFullWidth,
	toHalfWidth,
}
