/**
 * Created by user on 2019/5/27.
 */

// @ts-ignore
/// <reference types="mocha" />
// @ts-ignore
/// <reference types="benchmark" />
// @ts-ignore
/// <reference types="chai" />
// @ts-ignore
/// <reference types="node" />

import { unsafeChinese } from 'cjk-conv/lib/zh/data/unsafe';
import { FullHalfCore } from '../lib/fullhalf';
import { toFullWidth, toHalfWidth, toFullEnglish, toFullNumber, toHalfEnglish, toHalfNumber } from '../lib/fullhalf';
import UString from 'uni-string';

// @ts-ignore
describe(`unsafe chinese, every thing should not change`, () =>
{
	const unsafeChineseString = unsafeChinese.join('');

	Object.entries({
		toFullWidth,
		toHalfWidth,
		toFullEnglish,
		toFullNumber,
		toHalfEnglish,
		toHalfNumber,
	} as const).forEach(function ([name, fn])
	{
		// @ts-ignore
		it(name, () =>
		{
			//console.log('it:inner', currentTest.title);
			//console.log('it:inner', currentTest.fullTitle());

			let actual = fn(unsafeChineseString);
			let expected = unsafeChineseString;

			expect(actual).toEqual(expected);

			expect(UString.toArray(actual)).toEqual(unsafeChinese);

		});
	});
});
