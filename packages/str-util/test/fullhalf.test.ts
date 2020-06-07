/**
 * Created by user on 2017/12/3/003.
 */

import { relative, expect } from './_local-dev';

import * as index from '..';
import { FullHalfCore } from '../lib/fullhalf';

// @ts-ignore
describe(relative(__filename), () =>
{
	let table;

	//console.log(index.tableFullHalf[1]);

	// @ts-ignore
	before(function ()
	{
		table = [];

		for (let key in index.tableFullHalf[0])
		{
			let data = [];

			if (key == 'default')
			{
				continue;
			}

			//table.push(`>>> ${key}`);

			//table.push(`\n`);

			for (let i in index.tableFullHalf)
			{
				let data = index.tableFullHalf[i][key];

				let _a = FullHalfCore.filterTable(data);
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
	it(`table`, function ()
	{
		for (let key in index.tableFullHalf[0])
		{
			console.log(key, [index.tableFullHalf[0][key], index.tableFullHalf[1][key]]);
			expect(index.tableFullHalf[0][key]).to.not.deep.equal(index.tableFullHalf[1][key]);
		}
	});

	// @ts-ignore
	describe(`FullHalf`, () =>
	{
		const str = 'THE ｑｕｉｃｋ， ＢＲＯＷＮ\u3000fox.　1 ２ 3'
			+ '／＊－＋＝－０］［’；／．+-*/=-09][\'";/.'
		;

		// @ts-ignore
		it(`toFullWidth`, function ()
		{
			expect(index.toFullWidth(str)).to.equal('ＴＨＥ　ｑｕｉｃｋ，　ＢＲＯＷＮ　ｆｏｘ．　１　２　３／＊－＋＝－０］［’；／．＋－＊／＝－０９］［＇＂；／．');
		});

		// @ts-ignore
		it(`toHalfWidth`, function ()
		{
			expect(index.toHalfWidth(str)).to.equal('THE quick, BROWN fox. 1 2 3/*-+=-0][’;/.+-*/=-09][\'";/.');
		});

		// @ts-ignore
		it(`toFullEnglish`, function ()
		{
			expect(index.toFullEnglish(str)).to.equal('ＴＨＥ ｑｕｉｃｋ， ＢＲＯＷＮ　ｆｏｘ.　1 ２ 3／＊－＋＝－０］［’；／．+-*/=-09][\'";/.');
		});

		// @ts-ignore
		it(`toHalfEnglish`, function ()
		{
			expect(index.toHalfEnglish(str)).to.equal('THE quick， BROWN　fox.　1 ２ 3／＊－＋＝－０］［’；／．+-*/=-09][\'";/.');
		});

		// @ts-ignore
		it(`toFullNumber`, function ()
		{
			expect(index.toFullNumber(str)).to.equal('THE ｑｕｉｃｋ， ＢＲＯＷＮ　fox.　１ ２ ３／＊－＋＝－０］［’；／．+-*/=-０９][\'";/.');
		});

		// @ts-ignore
		it(`toHalfNumber`, function ()
		{
			expect(index.toHalfNumber(str)).to.equal('THE ｑｕｉｃｋ， ＢＲＯＷＮ　fox.　1 2 3／＊－＋＝－0］［’；／．+-*/=-09][\'";/.');
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
		it(`toFullWidth`, function ()
		{
			expect(index.toFullWidth(str, options)).to.equal('THE ｑｕｉｃｋ， ＢＲＯＷＮ　fox．　1 ２ 3／＊－＋＝－０］［’；／．＋－＊／＝－09］［＇＂；／．');
		});

		// @ts-ignore
		it(`toHalfWidth`, function ()
		{
			expect(index.toHalfWidth(str, options)).to.equal('THE ｑｕｉｃｋ, ＢＲＯＷＮ　fox.　1 ２ 3/*-+=-０][’;/.+-*/=-09][\'";/.');
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
		};

		// @ts-ignore
		it(`toFullWidth`, function ()
		{
			expect(index.toFullWidth(str, options)).to.equal('ＴＨＥ　ｑｕｉｃｋ，　ＢＲＯＷＮ　ｆｏｘ.　１　２　３／＊－＋＝－０］［’；／．+-*/=-０９][\'";/.');
		});

		// @ts-ignore
		it(`toHalfWidth`, function ()
		{
			expect(index.toHalfWidth(str, options)).to.equal('THE quick， BROWN fox. 1 2 3／＊－＋＝－0］［’；／．+-*/=-09][\'";/.');
		});
	});
});
