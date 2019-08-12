/**
 * Created by user on 2019/8/12.
 */
import regexpClassToObject from 'regexp-class-to-regenerate';

let obj = regexpClassToObject(/[\u200b-\u200f\ufeff\u2060]/ug)
	.remove(0x200d)
;

console.dir(obj.toRegExp());
// => /[\u200B\u200C\u200E\u200F\u2060\uFEFF]/gu
