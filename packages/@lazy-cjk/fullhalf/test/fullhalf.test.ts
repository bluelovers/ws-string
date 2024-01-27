/**
 * Created by user on 2017/12/3/003.
 */

import {
	_filterTable,
	toHalfWidth,
	toHalfNumber,
	toHalfEnglish,
	toFullNumber,
	toFullWidth,
	toFullEnglish,
	IOptions,
} from '../src/index';
import { tableFullHalf } from '@lazy-cjk/fullhalf-data';

let table;

//console.log(index.tableFullHalf[1]);

// @ts-ignore
beforeAll(() =>
{
	table = [];

	for (let key in tableFullHalf[0])
	{
		let data = [];

		if (key == 'default')
		{
			continue;
		}

		//table.push(`>>> ${key}`);

		//table.push(`\n`);

		for (let i in tableFullHalf)
		{
			let data = tableFullHalf[i][key];

			let _a = _filterTable(data);
			table.push(String.fromCharCode(..._a));
		}
	}

	table = table
		.join('\n')
		.replace(/^\n|\n$/g, '')
	;

	console.log(table);

	//console.log(0x007F - 0x0020);
});

// @ts-ignore
it(`table`, () =>
{
	for (let key in tableFullHalf[0])
	{
		console.log(key, [tableFullHalf[0][key], tableFullHalf[1][key]]);
		expect(tableFullHalf[0][key]).not.toEqual(tableFullHalf[1][key]);
	}
});

// @ts-ignore
describe(`FullHalf`, () =>
{
	const str = 'THE ｑｕｉｃｋ， ＢＲＯＷＮ\u3000fox.　1 ２ 3'
		+ '／＊－＋＝－０］［’；／．+-*/=-09][\'";/.'
	;

	// @ts-ignore
	it(`toFullWidth`, () =>
	{
		expect(toFullWidth(str)).toBe('ＴＨＥ　ｑｕｉｃｋ，　ＢＲＯＷＮ　ｆｏｘ．　１　２　３／＊－＋＝－０］［’；／．＋－＊／＝－０９］［＇＂；／．');
	});

	// @ts-ignore
	it(`toHalfWidth`, () =>
	{
		expect(toHalfWidth(str)).toBe('THE quick, BROWN fox. 1 2 3/*-+=-0][’;/.+-*/=-09][\'";/.');
	});

	// @ts-ignore
	it(`toFullEnglish`, () =>
	{
		expect(toFullEnglish(str)).toBe('ＴＨＥ ｑｕｉｃｋ， ＢＲＯＷＮ　ｆｏｘ.　1 ２ 3／＊－＋＝－０］［’；／．+-*/=-09][\'";/.');
	});

	// @ts-ignore
	it(`toHalfEnglish`, () =>
	{
		expect(toHalfEnglish(str)).toBe('THE quick， BROWN　fox.　1 ２ 3／＊－＋＝－０］［’；／．+-*/=-09][\'";/.');
	});

	// @ts-ignore
	it(`toFullNumber`, () =>
	{
		expect(toFullNumber(str)).toBe('THE ｑｕｉｃｋ， ＢＲＯＷＮ　fox.　１ ２ ３／＊－＋＝－０］［’；／．+-*/=-０９][\'";/.');
	});

	// @ts-ignore
	it(`toHalfNumber`, () =>
	{
		expect(toHalfNumber(str)).toBe('THE ｑｕｉｃｋ， ＢＲＯＷＮ　fox.　1 2 3／＊－＋＝－0］［’；／．+-*/=-09][\'";/.');
	});
});

// @ts-ignore
describe(`FullHalf.options`, () =>
{
	const str = 'THE ｑｕｉｃｋ， ＢＲＯＷＮ\u3000fox.　1 ２ 3'
		+ '／＊－＋＝－０］［’；／．+-*/=-09][\'";/.'
	;

	const options = {
		only: {
			not_default2: false,
			not_default: true,
		},
	};

	// @ts-ignore
	it(`toFullWidth`, () =>
	{
		expect(toFullWidth(str, options)).toBe('THE ｑｕｉｃｋ， ＢＲＯＷＮ　fox．　1 ２ 3／＊－＋＝－０］［’；／．＋－＊／＝－09］［＇＂；／．');
	});

	// @ts-ignore
	it(`toHalfWidth`, () =>
	{
		expect(toHalfWidth(str, options)).toBe('THE ｑｕｉｃｋ, ＢＲＯＷＮ　fox.　1 ２ 3/*-+=-０][’;/.+-*/=-09][\'";/.');
	});
});

// @ts-ignore
describe(`FullHalf.options`, () =>
{
	const str = 'THE ｑｕｉｃｋ， ＢＲＯＷＮ\u3000fox.　1 ２ 3'
		+ '／＊－＋＝－０］［’；／．+-*/=-09][\'";/.'
	;

	const options = {
		skip: {
			not_default: true,
		},
	} satisfies IOptions;

	// @ts-ignore
	it(`toFullWidth`, () =>
	{
		expect(toFullWidth(str, options)).toBe('ＴＨＥ　ｑｕｉｃｋ，　ＢＲＯＷＮ　ｆｏｘ.　１　２　３／＊－＋＝－０］［’；／．+-*/=-０９][\'";/.');
	});

	// @ts-ignore
	it(`toHalfWidth`, () =>
	{
		expect(toHalfWidth(str, options)).toBe('THE quick， BROWN fox. 1 2 3／＊－＋＝－0］［’；／．+-*/=-09][\'";/.');
	});
});

