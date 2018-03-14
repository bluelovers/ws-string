/**
 * Created by user on 2018/1/26/026.
 */

export const CR = "\r";
export const CRLF = "\r\n";
export const LF = "\n";

export const R_CRLF = /\r\n|\r(?!\n)|\n/g;

export function crlf(text: string, newline: string = LF): string
{
	return text.replace(R_CRLF, newline);
}

export function chkcrlf(text: string)
{
	return {
		lf: /\n/.test(text.replace(/\r\n/g, '')),
		crlf: /\r\n/.test(text),
		cr: /\r(?!\n)/.test(text),
	};
}

export function lineSplit(text: string)
{
	return text.split(R_CRLF);
}

export default crlf;
