// @ts-ignore
import _chai = require('chai');
// @ts-ignore
// @ts-ignore
//import { expect, assert } from 'chai';

// @ts-ignore
import { IChaiInstalled } from 'chai-asserttype-extra'
//import ChaiPlugin = require('chai-asserttype-extra');
// @ts-ignore
import ChaiStatic = Chai.ChaiStatic;

// @ts-ignore
let chai: IChaiInstalled<ChaiStatic> | ChaiStatic;

if (requireResolve('chai-asserttype-extra'))
{
	// @ts-ignore
	const ChaiPlugin = require('chai-asserttype-extra').ChaiPlugin;

	// @ts-ignore
	chai = ChaiPlugin.install(_chai) as IChaiInstalled<ChaiStatic>;
}
else
{
	chai = _chai;
}

if (requireResolve('chai-string'))
{
	// @ts-ignore
	chai.use(require('chai-string'));
}

const { expect, assert } = chai;

export { chai, expect, assert }

// @ts-ignore
export const SymbolLogOutput = Symbol('output');

// @ts-ignore
import path = require('path');
// @ts-ignore
import util = require('util');

// @ts-ignore
(util.inspect.defaultOptions = util.inspect.defaultOptions || {}).colors = true;

export { path, util };

// @ts-ignore
export const rootDir: string = path.join(__dirname, '..');

export function relative(filename: string): string
{
	// @ts-ignore
	return path.relative(rootDir, filename);
}

export function mochaAsync(fn: Function)
{
	return async (done) =>
	{
		try
		{
			await fn();
			done();
		}
		catch (err)
		{
			done(err);
		}
	};
}

// @ts-ignore
export default exports as typeof import('./_local-dev');

export function requireResolve(name: string): string
{
	try
	{
		// @ts-ignore
		return require.resolve(name)
	}
	catch (e)
	{

	}
	return null;
}
