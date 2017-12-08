/**
 * Created by user on 2017/12/3/003.
 */

// @ts-ignore
import * as chai from 'chai';
// @ts-ignore
import * as path from 'path';

// @ts-ignore
const rootDir = path.join(__dirname, '..');

export function relative(filename): string
{
	return path.relative(rootDir, filename);
}

export const expect = chai.expect;
