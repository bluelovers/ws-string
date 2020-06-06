/**
 * Created by user on 2018/11/8/008.
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

// @ts-ignore
import { ITest } from 'mocha';

import UString = require('../');

// @ts-ignore
describe(relative(__filename), () =>
{
	let currentTest: ITest;

	// @ts-ignore
	beforeEach(function ()
	{
		currentTest = this.currentTest as ITest;

		//console.log('it:before', currentTest.title);
		//console.log('it:before', currentTest.fullTitle());
	});

	// @ts-ignore
	describe(`suite`, () =>
	{
		// @ts-ignore
		it(`UString = UString.UString = UString.default`, function (done)
		{
			//console.log('it:inner', currentTest.title);
			//console.log('it:inner', currentTest.fullTitle());

			let actual;
			let expected;

			//expect(actual).to.be.ok;
			expect(UString).to.be.deep.equal(UString.UString);
			expect(UString).to.be.deep.equal(UString.default);
			//assert.isOk(actual.value, util.inspect(actual));

			done();
		});

		[
			[`𠬠典`, ['𠬠', '典']],
			[`𡬶寻尋`, ['𡬶', '寻', '尋']],
		].forEach(function ([input, expected])
		{
			// @ts-ignore
			it(input, function ()
			{
				//console.log('it:inner', currentTest.title);
				//console.log('it:inner', currentTest.fullTitle());

				let actual = UString.split(input, '');

				//expect(actual).to.be.ok;
				expect(actual).to.be.deep.equal(expected);
				expect(actual.length).to.be.deep.equal(expected.length);
				expect(UString.size(input)).to.be.deep.equal(expected.length);

				expect(UString.slice(input, 1, 2)).to.be.deep.equal(expected[1]);

				//assert.isOk(actual.value, util.inspect(actual));
			});
		})


	});
});
