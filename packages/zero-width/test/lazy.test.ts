/**
 * Created by User on 2019/8/9.
 */

// @ts-ignore
/// <reference types="mocha" />
// @ts-ignore
/// <reference types="benchmark" />
// @ts-ignore
/// <reference types="chai" />
// @ts-ignore
/// <reference types="node" />

// @ts-ignore
import { chai, relative, expect, path, assert, util, mochaAsync, SymbolLogOutput } from './_local-dev';
import removeZeroWidth from '../lib/index';

// @ts-ignore
describe(relative(__filename), () =>
{
	// @ts-ignore
	let currentTest: Mocha.Test;

	// @ts-ignore
	beforeEach(function ()
	{
		// @ts-ignore
		currentTest = this.currentTest;

		delete currentTest[SymbolLogOutput];

		//console.log('it:before', currentTest.title);
		//console.log('it:before', currentTest.fullTitle());
	});

	// @ts-ignore
	afterEach(function ()
	{
		let out = currentTest[SymbolLogOutput];
		let t = typeof out;

		if (t === 'string')
		{
			console.log(`----------`);
			console.log(out);
			console.log(`----------`);
		}
		else if (t === 'function')
		{
			out(currentTest)
		}
		else if (out != null)
		{
			console.dir(out);
		}

	});

	// @ts-ignore
	describe(`allow VariationSelectors by default`, () =>
	{
		// @ts-ignore
		it(`[對熊]埃爾斯特西之森林Part6[要注意⚠️]`, function ()
		{
			//console.log('it:inner', currentTest.title);
			//console.log('it:inner', currentTest.fullTitle());

			let expected = `[對熊]埃爾斯特西之森林Part6[要注意⚠️]`;
			let actual = removeZeroWidth(expected);
			let actual2 = removeZeroWidth(expected, true);

			currentTest[SymbolLogOutput] = actual;

			//expect(actual).to.be.ok;
			expect(actual).to.be.deep.equal(expected);
			expect(actual2).to.be.not.deep.equal(expected);
			//assert.isOk(actual.value, util.inspect(actual));

		});

	});

});
