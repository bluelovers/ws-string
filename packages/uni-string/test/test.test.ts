/**
 * Created by user on 2018/11/8/008.
 */

import UString from '../src';
import { inspect } from 'util';

it(`UString = UString.UString = UString.default`, done =>
{

	expect(UString).toEqual(UString.UString);
	expect(UString).toEqual(UString.default);

	done();
});

describe(`simple`, () =>
{

	([
		[`𠬠典`, ['𠬠', '典']],
		[`𡬶寻尋`, ['𡬶', '寻', '尋']],
	] as [string, string[]][]).forEach(function ([input, expected])
	{

		it(inspect(input), () =>
		{
			//console.log('it:inner', currentTest.title);
			//console.log('it:inner', currentTest.fullTitle());

			let actual = UString.split(input, '');

			let size = UString.size(input);

			expect(actual).toEqual(expected);
			expect(actual.length).toEqual(expected.length);
			expect(size).toEqual(expected.length);

			let arr = UString.slice(input, 1, 2);

			expect(arr).toEqual(expected[1]);

			const _arr_input = input.split('');
			console.dir(_arr_input);
			expect(actual).toMatchSnapshot();

			expect(input.length).toMatchSnapshot();
			expect(size).toMatchSnapshot();

			expect(arr).toMatchSnapshot();

		});
	})

});

describe(`demo`, () =>
{

	test('mixin', () =>
	{

		let t = (new UString('♥️𠬠典')).padStart(10, '𠬠');

		t = t.concat('\n♥️𠬠典そこで彼らは\'"\'👩‍👩‍👧‍👦\'，オリーブ山と呼ばれる山からエルサレムに帰った。');

		expect(t).toMatchSnapshot();
		expect(t.split('')).toMatchSnapshot();

		let t2 = new UString(t);

		expect(t2).toMatchSnapshot();
		expect(t2.length).toMatchSnapshot();
		expect(t2.charLength).toMatchSnapshot();
		expect(t2.size()).toMatchSnapshot();

		expect(t2.indexOf('𠬠典', 2)).toMatchSnapshot();
		expect(t2.endsWith('𠬠典')).toMatchSnapshot();

		expect(t2.split('')).toMatchSnapshot();

	});

	test(inspect('👩‍👩‍👧‍👦'), () =>
	{

		let t3 = new UString('👩‍👩‍👧‍👦');

		expect(t3).toMatchSnapshot();
		expect(t3.length).toMatchSnapshot();
		expect(t3.charLength).toMatchSnapshot();
		expect(t3.size()).toMatchSnapshot();

		expect(t3.split('')).toMatchSnapshot();

	});

})

test('support', () => {

	let actual = UString.support;

	let keys = Object.keys(actual);

	console.dir(actual)

	expect(keys).toMatchSnapshot();

});
