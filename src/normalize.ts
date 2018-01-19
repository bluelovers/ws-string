/**
 * Created by user on 2018/1/19/019.
 */

export const LF = "\n";

export function normalize(txt)
{
	return txt
		.toString()
		.replace(/\r\n|\r(?!\n)|\n/g, LF)
		.replace(/\uFEFF/g, '')
		.replace(/[  \xA0]/g, ' ')
		.replace(/[ \t　\xA0\u3000]+\n/g, '\n')
		.replace(/^\n+|[\s　\xA0\u3000]+$/g, '')
	;
}

export default normalize;
//export default exports;
