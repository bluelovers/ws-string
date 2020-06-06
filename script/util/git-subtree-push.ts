/**
 * Created by user on 2020/5/13.
 */
import { crossSpawnGitAsync } from '@git-lazy/spawn'
import console from 'debug-color2/logger'
import __root_ws from '../../__root_ws';
import { unlinkSync, pathExistsSync } from 'fs-extra';
import { name } from './add-to-postpublish-task';
import createCacheName from './create-cache-name';
import { subtreePush, IOptions } from '@git-lazy/subtree';

export async function gitSubtreePush(module_name: 'runes2' | string)
{
	let _ok: boolean = true;

	let options: IOptions = {
		name: module_name,
		prefix: `packages/${module_name}`,
		cwd: __root_ws,
	} as any;

	switch (module_name)
	{
		case 'runes2':
			options.remote = `https://github.com/bluelovers/runes.git`;
			options.branch = 'develop';
			break;
		default:
			_ok = false;
			break;
	}

	if (_ok)
	{
		await subtreePush(options);
	}

	let file = createCacheName('subtree', module_name);
	if (pathExistsSync(file))
	{

		(_ok ? console : console.red).debug(`[subtree:script]`, `del`, module_name);
		unlinkSync(file);
	}
}
