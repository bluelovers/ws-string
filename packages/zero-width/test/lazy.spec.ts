import removeZeroWidth from '../lib';
import { toHex } from 'regexp-helper-core';
import { ENUM_ZERO_WIDTH } from '../lib/const';
import { inspect } from 'util';

describe(`allow VariationSelectors by default`, () =>
{

	[
		`[對熊]埃爾斯特西之森林Part6[要注意⚠️]`,
	].forEach(input =>
	{

		test(inspect(input), () =>
		{

			let expected = input;
			let actual = removeZeroWidth(expected);
			let actual2 = removeZeroWidth(expected, true);

			expect(actual).toStrictEqual(expected);
			expect(actual2).not.toStrictEqual(expected);
			//expect(actual).toBeInstanceOf(Date);
			expect(actual).toMatchSnapshot();
			expect(actual.length).toMatchSnapshot();
			expect(actual2).toMatchSnapshot();
			expect(actual2.length).toMatchSnapshot();

		});

	});

})

describe(`keep source`, () =>
{

	[
		'👩‍👩‍👧‍👦',
	].forEach(input =>
	{

		test(inspect(input), () =>
		{

			let expected = input;
			let actual = removeZeroWidth(expected);
			let actual2 = removeZeroWidth(expected, true);

			expect(actual).toStrictEqual(expected);
			expect(actual2).not.toStrictEqual(expected);
			//expect(actual).toBeInstanceOf(Date);
			expect(actual).toMatchSnapshot();
			expect(actual.length).toMatchSnapshot();
			expect(actual2).toMatchSnapshot();
			expect(actual2.length).toMatchSnapshot();
		});

	});

})

describe(`demo`, () =>
{

	[
		'\udb40\udd00\n\r\b\t\v\u00a0 　\u0009',
		`1\u20602`,
		toHex('\f'.codePointAt(0)),
		'\u0002',

		ENUM_ZERO_WIDTH.SPACE,
		ENUM_ZERO_WIDTH.NO_BREAK_SPACE,
		ENUM_ZERO_WIDTH.RIGHT_TO_LEFT_MARK,
		ENUM_ZERO_WIDTH.LEFT_TO_RIGHT_MARK,

	].forEach(input =>
	{

		test(inspect(input), () =>
		{

			let expected = input;
			let actual = removeZeroWidth(expected);
			let actual2 = removeZeroWidth(expected, true);

			expect(input.length).toMatchSnapshot();

			expect(actual).toMatchSnapshot();
			expect(actual.length).toMatchSnapshot();
			expect(actual2).toMatchSnapshot();
			expect(actual2.length).toMatchSnapshot();
		});

	});

})
