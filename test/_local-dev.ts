/**
 * Created by user on 2017/12/3/003.
 */

// @ts-ignore
import * as chai from 'chai';
// @ts-ignore
import * as path from 'path';

export { path };

// @ts-ignore
export const rootDir = path.join(__dirname, '..');

export function relative(filename): string
{
	return path.relative(rootDir, filename);
}

export const expect = chai.expect;
export const assert = chai.assert;

// @ts-ignore
export default exports;
