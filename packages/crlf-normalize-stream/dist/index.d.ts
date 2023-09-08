import { Transform } from 'stream';
import { ITSAndTypeAndStringLiteral } from 'ts-type/lib/helper/string';

export declare const enum EnumLineBreak {
	CR = "\r",
	CRLF = "\r\n",
	LF = "\n"
}
export type ILineBreakInput = ITSAndTypeAndStringLiteral<EnumLineBreak>;
export declare function transformLinebreak(newline?: ILineBreakInput): Transform;

export {
	transformLinebreak as default,
};

export {};
