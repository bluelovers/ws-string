import { ITSAndTypeAndStringLiteral, ITSTypeAndStringLiteral } from 'ts-type/lib/helper/string';

export const enum EnumLineBreak
{
	CR = "\r",
	CRLF = "\r\n",
	LF = "\n",
}

const CR = EnumLineBreak.CR as const;
const CRLF = EnumLineBreak.CRLF as const;
const LF = EnumLineBreak.LF as const;

const R_CRLF = /\r\n|\r(?!\n)|\n/g;

export { CR, CRLF, LF, R_CRLF }

export type ILineBreak = ITSTypeAndStringLiteral<EnumLineBreak>;

export type ILineBreakInput = ITSAndTypeAndStringLiteral<EnumLineBreak>;

export interface IOptions
{
	disable?: {
		lf?: boolean,
		crlf?: boolean,
		cr?: boolean,
	}
}

export function crlf(text: string, newline: ILineBreakInput = EnumLineBreak.LF): string
{
	return text.replace(R_CRLF, newline);
}

export function chkcrlf(text: string, options?: IOptions)
{
	const disable = options?.disable ?? {};

	return {
		lf: !disable.lf && /\n/.test(text.replace(/\r\n/g, '')),
		crlf: !disable.crlf && /\r\n/.test(text),
		cr: !disable.cr && /\r(?!\n)/.test(text),
	} as const;
}

export function detectLineBreak(text: string, options?: IOptions)
{
	const _lb = chkcrlf(text, options);

	return _lb.crlf ? EnumLineBreak.CRLF : (_lb.lf || !_lb.cr) ? EnumLineBreak.LF : EnumLineBreak.CR
}

export function isCRLF(newline: string): newline is EnumLineBreak.CRLF
{
	return newline === EnumLineBreak.CRLF
}

export function isLF(newline: string): newline is EnumLineBreak.LF
{
	return newline === EnumLineBreak.LF
}

export function isCR(newline: string): newline is EnumLineBreak.CR
{
	return newline === EnumLineBreak.CR
}

export function lineSplit(text: string)
{
	return text.split(R_CRLF);
}

export function crlf_unicode_normalize(text: string, newline: ILineBreakInput = EnumLineBreak.LF): string
{
	const ln3 = newline + newline + newline;
	const ln2 = newline + newline;

	return text
		.replace(/\u000C/g, ln3)
		.replace(/\u2028/g, newline)
		.replace(/\u2029/g, ln2)
		;
}

export default crlf;
