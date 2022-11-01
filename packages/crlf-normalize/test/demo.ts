/**
 * Created by user on 2018/1/26/026.
 */

import {
	crlf,
	chkcrlf,
	LF,
	CRLF,
	CR,
	detectCurrentIndexLineBreak,
	detectCurrentIndexLineBreakFromBufferLike,
} from '../src';

let text = 'foo\r\nbar\nbaz\r';

console.log([
	crlf(text, LF),
	crlf(text, CRLF),
	crlf(text, CR),
]);

console.log(chkcrlf(text));

/*
[ 'foo\nbar\nbaz\n', 'foo\r\nbar\r\nbaz\r\n', 'foo\rbar\rbaz\r' ]
{ lf: true, crlf: true, cr: true }
*/

console.log(LF.charCodeAt(0), CR.charCodeAt(0))

console.dir(detectCurrentIndexLineBreak(text, 3))

console.dir(detectCurrentIndexLineBreakFromBufferLike(Buffer.from(text), 3))
