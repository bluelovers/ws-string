import UString from '../src';
import { unsafeChinese } from 'cjk-conv/lib/zh/data/unsafe';

const unsafeChineseString = unsafeChinese.join('');

describe(`unsafe chinese, every thing should not change`, () =>
{

	unsafeChinese
		.forEach((input) =>
		{

			// @ts-ignore
			it(` ${input} `, () =>
			{
				let sc = new UString(input);

				let actual = input.codePointAt(0);
				let expected = String.fromCodePoint(actual);

				expect(sc.size()).toBe(1);

				expect(input).toEqual(expected)

			});

		})
	;

})

it(`unsafeChineseString`, () =>
{

	let sc = new UString(unsafeChineseString).split('');

	expect(sc).toHaveLength(unsafeChinese.length);

	// @ts-ignore
	expect(sc.sort()).toEqual(unsafeChinese.sort())

})
