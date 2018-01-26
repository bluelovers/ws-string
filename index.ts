/**
 * Created by user on 2018/1/26/026.
 */

export const CR = "\r";
export const CRLF = "\r\n";
export const LF = "\n";

export function crlf(text: string, newline = LF): string
{
	return text.replace(/\r\n|\r(?!\n)|\n/g, newline);
}

export function chkcrlf(text: string)
{
	return {
		lf: /\n/.test(text.replace(/\r\n/g, '')),
		crlf: /\r\n/.test(text),
		cr: /\r(?!\n)/.test(text),
	};
}

export default crlf;
