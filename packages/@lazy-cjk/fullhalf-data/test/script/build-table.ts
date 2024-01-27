
import { outputFile, outputFileSync } from 'fs-extra';
import { join } from 'path';
import { __ROOT } from '../__root';
import { _table } from '../../src/_table';
import { tableDefaultInclude } from '../../src/defaults';
import { EnumFullHalfTableType, toHalfWidthCharCode, toFullWidthCharCode } from '@lazy-cjk/fullhalf-char-code';
import { ITable, ITableObject } from '../../src';

export const table: ITable[] = [];

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
			r[1].from = toFullWidthCharCode(r[0].from);
			r[1].to = toFullWidthCharCode(r[0].to);
		}

		if (r[0].values)
		{
			r[1].values = (r[0].values as number[]).reduce(function (a, code)
			{
				a.push(toFullWidthCharCode(code));

				return a;
			}, []);
		}

		return r;
	}
}

const lines: string[] = [];

lines.push(`import { ITable } from '../types';`);
lines.push(`export const table = ${JSON.stringify(table, null, '\t')} satisfies ITable[];`);
lines.push('');

outputFileSync(join(__ROOT, 'src', 'table.ts'), lines.join('\n\n'))
