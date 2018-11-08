/**
 * Created by user on 2018/11/8/008.
 */

/// <reference types="mocha" />
/// <reference types="benchmark" />
/// <reference types="chai" />
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

		// @ts-ignore
		it(`𠬠典`, function (done)
		{
			//console.log('it:inner', currentTest.title);
			//console.log('it:inner', currentTest.fullTitle());

			let input = '𠬠典';

			let actual = UString.split(input, '');
			let expected = ['𠬠', '典'];

			//expect(actual).to.be.ok;
			expect(actual).to.be.deep.equal(expected);
			expect(actual.length).to.be.deep.equal(2);
			expect(UString.size(input)).to.be.deep.equal(2);

			expect(UString.slice(input, 1)).to.be.deep.equal(expected[1]);

			//assert.isOk(actual.value, util.inspect(actual));

			done();
		});
	});
});
