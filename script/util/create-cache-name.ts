import { join } from "path";
import __root_ws from '../../__root_ws';

export function createCacheName(prefixPath: string, name: string)
{
	name = name
		.replace(/[^\-_\w\d]/g, '__')
	;

	return join(__root_ws, 'temp', prefixPath, `${name}`)
}

export default createCacheName
