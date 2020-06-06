/**
 * Created by user on 2020/5/11.
 */

import { add } from "../util/add-to-postpublish-task"
import console from 'debug-color2/logger'

let argv = process.argv.slice(2);

console.dir(argv)

if (argv.length)
{
	argv.forEach(module_name => add(module_name));
}
