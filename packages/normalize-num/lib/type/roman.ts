/**
 * Created by user on 2018/5/15/015.
 */

import deromanize from 'deromanize';
import { isRoman } from 'num-is-roman';

export { isRoman }
export { deromanize }

export function normalizeRoman(input: string, bool?: boolean)
{
	let ro = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII',];

	for (let i = 0; i < 12; i++)
	{
		let r = new RegExp(String.fromCharCode(0x2160 + i) + '|' + String.fromCharCode(0x2160 + 16 + i), 'g');
		input = input.replace(r, bool ? String.fromCharCode(0x2160 + i) : ro[i]);
	}

	return input;
}

export function roman2num(s: string): string
{
	return deromanize(normalizeRoman(s)).toString();
}

export default roman2num
