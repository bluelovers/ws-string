import cpi from '../src';

const units = [
	['哈哈', NaN],
	['零五', 5],
	['六　八　九', 689],
	['洞么兩三刀伍陸拐杯勾', 123456789],
	['一千零十', 1010],
	['一千零一十', 1010],
	['二百五', 250],
	['千三', 1300],
	['二十四萬二', 242000],
	['四萬萬五千萬', 450000000],
] as [string, number][];

describe(`demo`, () => {
	units.forEach(function (cur)
	{
		test(cur[0], () => {

			let actual = cpi(cur[0]);
			let expected = cur[1];

			expect(actual).toStrictEqual(expected)

		});
	});
})
