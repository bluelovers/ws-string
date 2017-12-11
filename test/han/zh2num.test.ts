/**
 * Created by user on 2017/12/11/011.
 */

import localDev, { relative, expect, path, assert } from '../_local-dev';

import { zh2num, IOptions } from '../../lib/han/zh2num';

// @ts-ignore
describe(relative(__filename), () =>
{
	let currentTest;

	let tests = [
		[
			[
				'千百十七話百十七話百十七話\n百十七話百十七話百十七話',
				{
					digits: [
						'common',

					],

					truncateOne: false,
				}
			],
			'千百十7話百十七話百十七話\n百十七話百十七話百十七話',
		],
		[
			[
				'千百十七話百十七話百十七話\n百十七話百十七話百十七話',
				{
					digits: [
						'common',

					],

					strict: true,

					truncateOne: false,
				}
			],
			Number.NaN,
		],
		[
			[
				'千百十七',
				{
					digits: [
						'common',

					],

					strict: true,

					truncateOne: false,
				}
			],
			Number.NaN,
		],
		[
			[
				'千百十七話百十七話百十七話\n百十七話百十七話百十七話',
				{
					digits: [
						'common',
					],

					truncateOne: 1,
				}
			],
			'千百17話百十七話百十七話\n百十七話百十七話百十七話',
		],
		[
			[
				'千百十七話百十七話百十七話\n百十七話百十七話百十七話',
				{
					digits: [
						'common',
					],

					truncateOne: 2,
				}
			],
			'千117話百十七話百十七話\n百十七話百十七話百十七話',
		],
		[
			[
				'千百十七話百十七話百十七話\n百十七話百十七話百十七話',
			],
			'1117話百十七話百十七話\n百十七話百十七話百十七話',
		],
		[
			[
				'千百十七',
				{
					digits: [
						'common',
					],
					truncateOne: 2,
					strict: true,
				}
			],
			Number.NaN,
		],
		[
			[
				'千百十七',
				{
					strict: true,
				}
			],
			1117,
		],
	];

	beforeEach(function ()
	{
		currentTest = this.currentTest;

		//console.log('it:before', currentTest.title);
		//console.log('it:before', currentTest.fullTitle());
	});

	describe(`zh2num`, () =>
	{
		const fn = zh2num;

		tests.forEach(function (test, index)
		{
			it(`[${index}] ${test[2] || ''}`, function ()
			{
				//console.log('it:inner', currentTest.title);
				//console.log('it:inner', currentTest.fullTitle());

				let v = fn.apply(null, test[0]);

				console.log(typeof v, [v]);

				expect(v).to.be.deep.equal(test[1]);
			});
		});
	});
});
