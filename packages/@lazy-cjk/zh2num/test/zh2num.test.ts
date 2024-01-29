/**
 * Created by user on 2017/12/11/011.
 */

import { inspect } from 'util';
import { IOptions, zh2num } from '../src';

let tests = [
	[
		[
			'千百十七話百十七話百十七話\n百十七話百十七話百十七話',
			{
				digits: [
					'common',

				],

				truncateOne: false,
			},
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
			},
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
			},
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
			},
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
			},
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
			},
		],
		Number.NaN,
	],
	[
		[
			'千百十七',
			{
				strict: true,
			},
		],
		1117,
	],
	[
		[
			'百二話',
			{
				one: false,
			},
		],
		'120話',
	],
	[
		[
			'百二話',
			{
				one: true,
			},
		],
		'102話',
	],
	[
		[
			'百二話',
			{},
		],
		'102話',
	],
];

describe(`zh2num`, () =>
{
	const fn = zh2num;

	tests.forEach(function (test, index)
	{
		it(`${test[0][0]} ${inspect(test[0][1])} => ${test[1]}`, () =>
		{
			//console.log('it:inner', currentTest.title);
			//console.log('it:inner', currentTest.fullTitle());

			// @ts-ignore
			let v = fn.apply(null, test[0]);

			expect(v).toEqual(test[1]);

			expect(typeof v).toMatchSnapshot();
			expect(v).toMatchSnapshot();

		});
	});
});

