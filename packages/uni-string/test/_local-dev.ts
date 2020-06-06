// @ts-ignore
import * as chai from 'chai';
// @ts-ignore
import { expect, assert } from 'chai';
export { chai, expect, assert }

// @ts-ignore
import * as path from 'path';
// @ts-ignore
import * as util from 'util';

export { path, util };

// @ts-ignore
export const rootDir: string = path.join(__dirname, '..');

export function relative(filename: string): string
{
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

import * as self from './_local-dev';
export default self;
