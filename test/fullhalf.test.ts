/**
 * Created by user on 2017/12/3/003.
 */

import { relative, expect } from './_local-dev';

import * as index from '..';

// @ts-ignore
describe(relative(__filename), () =>
{
	let table;

	//console.log(index.tableFullHalf[1]);

	before(function ()
	{
		table = [] as number[];

		for (let key in index.tableFullHalf[0])
		{
			let data = [];

			for (let i in index.tableFullHalf)
			{
				let data = index.tableFullHalf[i][key];

				if (data.from && data.to)
				{
					for (let i = data.from; i<=data.to; i++)
					{
						table.push(i);
					}
				}
				else if (data.values)
				{
					table = table.concat(data.values);
				}

				table.push("\n".charCodeAt(0));
			}
		}

		table = String.fromCharCode(...table)
			.replace(/^\n|\n$/g, '')
		;

		console.log(table);
	});

	it(`table`, function ()
	{
		for (let key in index.tableFullHalf[0])
		{
			console.log(key, [index.tableFullHalf[0][key], index.tableFullHalf[1][key]]);
			expect(index.tableFullHalf[0][key]).to.not.deep.equal(index.tableFullHalf[1][key]);
		}
	});

	describe(`FullHalf`, () =>
	{
		const str = 'THE ｑｕｉｃｋ， ＢＲＯＷＮ\u3000fox.　1 ２ 3'
			+ '／＊－＋＝－０］［’；／．+-*/=-09][\'";/.'
		;

		it(`toFullWidth`, function ()
		{
			expect(index.toFullWidth(str)).to.equal('ＴＨＥ　ｑｕｉｃｋ，　ＢＲＯＷＮ　ｆｏｘ．　１　２　３／＊－＋＝－０］［’；／．＋－＊／＝－０９］［＇＂；／．');
		});

		it(`toHalfWidth`, function ()
		{
			expect(index.toHalfWidth(str)).to.equal('THE quick, BROWN fox. 1 2 3/*-+=-0][’;/.+-*/=-09][\'";/.');
		});

		it(`toFullEnglish`, function ()
		{
			expect(index.toFullEnglish(str)).to.equal('ＴＨＥ ｑｕｉｃｋ， ＢＲＯＷＮ　ｆｏｘ.　1 ２ 3／＊－＋＝－０］［’；／．+-*/=-09][\'";/.');
		});

		it(`toHalfEnglish`, function ()
		{
			expect(index.toHalfEnglish(str)).to.equal('THE quick， BROWN　fox.　1 ２ 3／＊－＋＝－０］［’；／．+-*/=-09][\'";/.');
		});

		it(`toFullNumber`, function ()
		{
			expect(index.toFullNumber(str)).to.equal('THE ｑｕｉｃｋ， ＢＲＯＷＮ　fox.　１ ２ ３／＊－＋＝－０］［’；／．+-*/=-０９][\'";/.');
		});

		it(`toHalfNumber`, function ()
		{
			expect(index.toHalfNumber(str)).to.equal('THE ｑｕｉｃｋ， ＢＲＯＷＮ　fox.　1 2 3／＊－＋＝－0］［’；／．+-*/=-09][\'";/.');
		});
	});
});
