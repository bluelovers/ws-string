//@noUnusedParameters:false
/// <reference types="jest" />
/// <reference types="node" />
/// <reference types="expect" />

import { inspect } from 'util';
import { detectIndentLine } from '../src/index';

beforeAll(async () =>
{

});

describe(`base`, () =>
{

	([
		['    at pkg\\index.ts:64:6'],
		['\n'],
		[''],
	] as [string, string?][]).forEach(input => {

		test(inspect(input[0]), () =>
		{

			let actual = detectIndentLine(input[1] ?? input[0]);

			expect(actual).toMatchSnapshot();

		});

	});

})

describe(`no-break space`, () =>
{

	([
		['\xa0    at pkg\\index.ts:64:6'],
		['\xa0\n'],
		['\xa0'],
	] as [string, string?][]).forEach(input =>
	{

		test(inspect(input[0]), () =>
		{

			let actual = detectIndentLine(input[1] ?? input[0], {
				includeNoBreakSpace: true,
			});

			expect(actual).toMatchSnapshot();

		});

	});

})
