/**
 * Created by user on 2018/3/16/016.
 */

import runes from 'runes2';
import classPrototype from "es6-class-prototype";

export const STRING_PROTOTYPE = Object.getOwnPropertyNames(String.prototype);

export class UString extends String
{
	protected _arr: string[] = null;

	constructor(str, ...argv)
	{
		super(str);

		let d = Object.getOwnPropertyDescriptor(this, '_arr');
		Object.defineProperty(this, '_arr', Object.assign(d, {
			configurable: true,
			enumerable: false,
		}));
	}

	[Symbol.iterator]()
	{
		return UString.toArray(this)[Symbol.iterator]();
	}

	static isString(str): boolean
	{
		return (typeof str == 'string' || str instanceof String);
	}

	static toArray(str)
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

	split(separator?, limit?: number): string[]
	{
		let ret: string[];
		let str = String(this);

		if (separator === '')
		{
			ret = UString.toArray(this);

			if (typeof limit != 'undefined')
			{
				ret = ret.slice(0, limit);
			}
		}
		else
		{
			ret = String.prototype.split.call(str, separator, limit)
		}

		return ret;
	}

	substr(start: number, length?: number): string
	{
		return UString.toArray(this).slice(start).slice(0, length).join('');
	}

	substring(start: number, indexEnd?: number)
	{
		if (Number.isNaN(start) || start < 0)
		{
			start = 0;
		}

		if (typeof indexEnd == 'number')
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

	indexOf(search: string, start: number = 0): number
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

			if (i != -1)
			{
				if (a.slice(i, i + s.length).join('') == search)
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
		while (i != -1 && j < a.length);

		return -1;
	}

	includes(search: string, start: number = 0)
	{
		return UString.toArray(this).slice(start).join('').indexOf(search) !== -1
	}

	slice(start: number, indexEnd?: number)
	{
		return UString.toArray(this).slice(start, indexEnd).join('');
	}

	charAt(index: number): string
	{
		return this.substr(index, 1);
	}

	startsWith(search: string, pos?: number): boolean
	{
		return this.substr(!pos || pos < 0 ? 0 : +pos, search.length)
			.indexOf(search) == 0
			;
	}

	endsWith(search: string, length?: number): boolean
	{
		let a = UString.toArray(this);
		let s = UString.toArray(search);

		if (length === undefined || length > a.length)
		{
			length = a.length;
		}

		return this.substring(length - s.length, length) === search;
	}

	padEnd(targetLength: number, padString: string)
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

				pad = new UString(padString);
			}
			return String(this) + pad.slice(0, targetLength);
		}
	}

	padStart(targetLength: number, padString: string)
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

				pad = new UString(padString);
			}

			return pad.slice(0, targetLength) + String(this);
		}
	}

	static create(str, ...argv)
	{
		return new this(str, ...argv);
	}

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

		[key: string]: boolean,
	}
	{
		let prototype = classPrototype(this);

		return Object.keys(prototype).reduce(function (a, b)
		{
			if (STRING_PROTOTYPE.includes(b))
			{
				a[b] = true;
			}

			return a;
		}, {})
	}

	static indexOf(str, search: string, start: number = 0)
	{
		return this.create(str).indexOf(search, start);
	}

	static includes(str, search: string, start: number = 0)
	{
		return this.create(str).includes(search, start);
	}

	static split(str, separator?: any, limit?: number)
	{
		return this.create(str).split(separator, limit);
	}

	static substr(str, start: number, length?: number)
	{
		return this.create(str).substr(start, length);
	}

	static substring(str, start: number, indexEnd?: number)
	{
		return this.create(str).substring(start, indexEnd);
	}

	static slice(str, start: number, indexEnd?: number)
	{
		return this.create(str).slice(start, indexEnd);
	}

	static charAt(str, index: number)
	{
		return this.create(str).charAt(index);
	}

	static padEnd(str, targetLength: number, padString: string)
	{
		return this.create(str).padEnd(targetLength, padString);
	}

	static padStart(str, targetLength: number, padString: string)
	{
		return this.create(str).padStart(targetLength, padString);
	}

	static startsWith(str, search: string, pos?: number)
	{
		return this.create(str).startsWith(search, pos);
	}

	static endsWith(str, search: string, length?: number)
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

	static size(str)
	{
		return this.create(str).size();
	}
}

export default UString;

