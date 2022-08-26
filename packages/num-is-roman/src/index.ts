/**
 * Created by user on 2018/5/15/015.
 */

export function isRoman(str: string)
{
	return /^([LCDMIVX\u2160-\u217f]+)(?![a-z\d])/ui.exec(str);
}

export default isRoman
