import { runes } from 'runes2';
import { classPrototype } from "es6-class-prototype";

export interface IObjectWithSymbolSplit
{
	[Symbol.split](separator?: RegExp | string, limit?: number): string[]
}

export type IStringSplitInput = RegExp | string | IObjectWithSymbolSplit;

export const STRING_PROTOTYPE = Object.getOwnPropertyNames(String.prototype);

export class UString extends String
{
	protected _arr: string[] = null;

	constructor(str: unknown, ...argv: unknown[])
	{
		super(str);

		let d = Object.getOwnPropertyDescriptor(this, '_arr');
		Object.defineProperty(this, '_arr', Object.assign(d, {
			configurable: true,
			enumerable: false,
		}));
	}

	override [Symbol.iterator]()
	{
		return UString.toArray(this)[Symbol.iterator]();
	}

	static isString(str: unknown): str is string | String
	{
		return (typeof str === 'string' || str instanceof String);
	}

	static toArray(str: unknown)
	{
		if (str instanceof UString)
		{
			return str.toArray();
		}

		return runes(String(str));
	}

	toArray(): string[]
	{
		if (!this._arr)
		{
			this._arr = runes(String(this));
		}

		return this._arr;
	}

	override split(separator?: IStringSplitInput, limit?: number): string[]
	{
		let ret: string[];
		let str = String(this);

		if (separator === '')
		{
			ret = UString.toArray(this);

			if (typeof limit !== 'undefined')
			{
				ret = ret.slice(0, limit);
			}
		}
		else
		{
			ret = String.prototype.split.call(str, separator as any, limit)
		}

		return ret;
	}

	override substr(start: number, length?: number): string
	{
		return UString.toArray(this).slice(start).slice(0, length).join('');
	}

	override substring(start: number, indexEnd?: number)
	{
		if (Number.isNaN(start) || start < 0)
		{
			start = 0;
		}

		if (typeof indexEnd === 'number')
		{
			if (Number.isNaN(indexEnd) || indexEnd < 0)
			{
				indexEnd = 0;
			}

			if (start > indexEnd)
			{
				[start, indexEnd] = [indexEnd, start];
			}
		}

		return this.slice(start, indexEnd);
	}

	override indexOf(search: string, start: number = 0): number
	{
		let a = UString.toArray(this);

		start = Math.max(0, Math.min(a.length, start));
		search = String(search);

		if (search === '')
		{
			return start;
		}

		a = a.slice(start);

		let s = UString.toArray(search);

		let i = 0;
		let j = 0;

		let se = s[s.length - 1];

		do
		{
			i = a.indexOf(s[0], j);

			if (i !== -1)
			{
				if (a.slice(i, i + s.length).join('') === search)
				{
					return start + i;
				}

				j = i;

				if (s.length > 1)
				{
					i = a.indexOf(se, i + 1);
					j = i - s.length;
				}
			}

			j++;
		}
		while (i !== -1 && j < a.length);

		return -1;
	}

	override includes(search: string, start: number = 0)
	{
		return UString.toArray(this).slice(start).join('').indexOf(search) !== -1
	}

	override slice(start: number, indexEnd?: number)
	{
		return UString.toArray(this).slice(start, indexEnd).join('');
	}

	override charAt(index: number): string
	{
		return this.substr(index, 1);
	}

	override startsWith(search: string, pos?: number): boolean
	{
		return this.substr(!pos || pos < 0 ? 0 : +pos, search.length)
			.indexOf(search) === 0
			;
	}

	override endsWith(search: string, length?: number): boolean
	{
		let a = UString.toArray(this);
		let s = UString.toArray(search);

		if (typeof length === 'undefined' || length > a.length)
		{
			length = a.length;
		}

		return this.substring(length - s.length, length) === search;
	}

	override padEnd(targetLength: number, padString: string)
	{
		targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
		padString = String((typeof padString !== 'undefined' ? padString : ' '));

		let str = this.split('');
		let pad = this.split.call(padString, '');

		if (str.length > targetLength)
		{
			return String(this);
		}
		else
		{
			targetLength = targetLength - str.length;
			if (targetLength > pad.length)
			{
				padString += padString.repeat(targetLength / pad.length); //append to original to ensure we are longer than needed

				// @ts-ignore
				pad = new UString(padString);
			}
			return String(this) + pad.slice(0, targetLength);
		}
	}

	override padStart(targetLength: number, padString: string)
	{
		targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;
		padString = String((typeof padString !== 'undefined' ? padString : ' '));

		let str = this.split('');
		let pad = this.split.call(padString, '');

		if (str.length > targetLength)
		{
			return String(this);
		}
		else
		{
			targetLength = targetLength - str.length;
			if (targetLength > pad.length)
			{
				padString += padString.repeat(targetLength / pad.length); //append to original to ensure we are longer than needed

				// @ts-ignore
				pad = new UString(padString);
			}

			return pad.slice(0, targetLength) + String(this);
		}
	}



	/**
	 * 𠮷 134071 20bb7
	 */
	override codePointAt(pos: number): number
	{
		return this.toArray()[pos].codePointAt(0)
	}

	static UString = UString;
	/**
	 * @private
	 */
	static default = UString;

	static create(str: unknown, ...argv: unknown[])
	{
		return new this(str, ...argv);
	}

	/**
	 * 顯示 目前支援 unicode 的 method
	 */
	static get support(): {

		split?: boolean,
		substr?: boolean,
		substring?: boolean,
		indexOf?: boolean,
		includes?: boolean,
		slice?: boolean,
		charAt?: boolean,
		startsWith?: boolean,
		endsWith?: boolean,
		padEnd?: boolean,
		padStart?: boolean,

		codePointAt?: boolean,

		[key: string]: boolean,
	}
	{
		let prototype = classPrototype(this);

		return Object.keys(prototype).reduce(function (a, b)
		{
			if (STRING_PROTOTYPE.includes(b))
			{
				// @ts-ignore
				a[b] = true;
			}

			return a;
		}, {} as Record<keyof String, true | undefined>)
	}

	static indexOf(str: unknown, search: string, start: number = 0)
	{
		return this.create(str).indexOf(search, start);
	}

	static includes(str: unknown, search: string, start: number = 0)
	{
		return this.create(str).includes(search, start);
	}

	/**
	 * splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
	 */
	static split(str: unknown, separator?: any, limit?: number)
	{
		return this.create(str).split(separator, limit);
	}

	static substr(str: unknown, start: number, length?: number)
	{
		return this.create(str).substr(start, length);
	}

	static substring(str: unknown, start: number, indexEnd?: number)
	{
		return this.create(str).substring(start, indexEnd);
	}

	static slice(str: unknown, start: number, indexEnd?: number)
	{
		return this.create(str).slice(start, indexEnd);
	}

	static charAt(str: unknown, index: number)
	{
		return this.create(str).charAt(index);
	}

	static padEnd(str: unknown, targetLength: number, padString: string)
	{
		return this.create(str).padEnd(targetLength, padString);
	}

	static padStart(str: unknown, targetLength: number, padString: string)
	{
		return this.create(str).padStart(targetLength, padString);
	}

	static startsWith(str: unknown, search: string, pos?: number)
	{
		return this.create(str).startsWith(search, pos);
	}

	static endsWith(str: unknown, search: string, length?: number)
	{
		return this.create(str).endsWith(search, length);
	}

	get charLength()
	{
		return UString.toArray(this).length;
	}

	size()
	{
		return UString.toArray(this).length;
	}

	static size(str: unknown)
	{
		return this.create(str).size();
	}

	/**
	 * 𠮷 134071 20bb7
	 */
	static codePointAt(str: unknown, pos: number): number
	{
		return this.create(str).codePointAt(pos)
	}

}

export default UString;

// @ts-ignore
if (process.env.TSDX_FORMAT !== 'esm')
{
	Object.defineProperty(UString, 'UString', { value: UString });
	Object.defineProperty(UString, 'default', { value: UString });
	Object.defineProperty(UString, "__esModule", { value: true });
}
