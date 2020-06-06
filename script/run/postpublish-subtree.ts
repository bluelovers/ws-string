/**
 * Created by user on 2020/5/11.
 */

import FastGlob from '@bluelovers/fast-glob/bluebird';
import { join } from "path";
import __root_ws from '../../__root_ws';
import { readFile } from 'fs-extra';
import console from 'debug-color2/logger'
import { gitSubtreePush } from '../util/git-subtree-push';

FastGlob
	.async([
		'**/*',
	], {
		cwd: join(__root_ws, 'temp', 'subtree'),
		absolute: true,
	})
	.map(file => readFile(file, 'utf8'))
	.mapSeries(async (module_name) =>
	{
		return gitSubtreePush(module_name)
	})
;
