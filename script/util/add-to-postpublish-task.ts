/**
 * Created by user on 2020/5/11.
 */
import __root_ws from '../../__root_ws';
import { join } from 'path';
import { outputFileSync, ensureFileSync, unlinkSync } from 'fs-extra';
import console from 'debug-color2';
import createCacheName from './create-cache-name';

export function name(name: string)
{
	return createCacheName('subtree', `${name}`)
}

export function add(module_name: string)
{
	let file = name(module_name);
	console.debug(`[subtree:script]`, `add`, module_name);
	outputFileSync(file, module_name);
}

export function del(module_name: string)
{
	let file = name(module_name);
	console.debug(`[subtree:script]`, `del`, module_name);
	unlinkSync(file);
}

export default add
