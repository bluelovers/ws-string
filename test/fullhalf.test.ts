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

	it(`table`, function (done)
	{
		for (let key in index.tableFullHalf[0])
		{
			console.log([index.tableFullHalf[0][key], index.tableFullHalf[1][key]]);
			expect(index.tableFullHalf[0][key]).to.not.equal(index.tableFullHalf[1][key]);
		}

		expect(index.tableFullHalf[0].space).to.not.equal(index.tableFullHalf[1].space);

		done();
	});

	describe(`FullHalf`, () =>
	{

	});
});
