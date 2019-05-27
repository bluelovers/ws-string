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

import { chai, relative, expect, path, assert, util, mochaAsync } from './_local-dev';
import { unsafeChinese } from 'cjk-conv/lib/zh/data/unsafe';
import { FullHalfCore } from '../lib/fullhalf';
import { toFullWidth, toHalfWidth, toFullEnglish, toFullNumber, toHalfEnglish, toHalfNumber } from '../lib/fullhalf';
import UString from 'uni-string';

// @ts-ignore
describe(relative(__filename), () =>
{
	// @ts-ignore
	let currentTest: Mocha.Test;

	// @ts-ignore
	beforeEach(function ()
	{
		currentTest = this.currentTest;

		//console.log('it:before', currentTest.title);
		//console.log('it:before', currentTest.fullTitle());
	});

	// @ts-ignore
	describe(`unsafe chinese, every thing should not change`, () =>
	{
		const unsafeChineseString = unsafeChinese.join('');

		unsafeChinese
			.forEach((input) =>
			{

				// @ts-ignore
				it(` ${input} `, function ()
				{
					let sc = new UString(input);

					let actual = input.codePointAt(0);
					let expected = String.fromCodePoint(actual);

					expect(sc.size()).eq(1);

					expect(input).to.deep.equal(expected)

				});

			})
		;

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
			it(name, function ()
			{
				//console.log('it:inner', currentTest.title);
				//console.log('it:inner', currentTest.fullTitle());

				let actual = fn(unsafeChineseString);
				let expected = unsafeChineseString;

				expect(actual).to.be.deep.equal(expected);

				expect(UString.toArray(actual)).to.be.deep.equal(unsafeChinese);

			});
		});
	});
});
