import { ITSAndTypeAndStringLiteral, ITSTypeAndStringLiteral } from 'ts-type/lib/helper/string';
export declare const enum EnumLineBreak {
    CR = "\r",
    CRLF = "\r\n",
    LF = "\n"
}
declare const CR: EnumLineBreak.CR;
declare const CRLF: EnumLineBreak.CRLF;
declare const LF: EnumLineBreak.LF;
declare const R_CRLF: RegExp;
export { CR, CRLF, LF, R_CRLF };
export type ILineBreak = ITSTypeAndStringLiteral<EnumLineBreak>;
export type ILineBreakInput = ITSAndTypeAndStringLiteral<EnumLineBreak>;
export interface IOptions {
    disable?: {
        lf?: boolean;
        crlf?: boolean;
        cr?: boolean;
    };
}
export declare function crlf(text: string, newline?: ILineBreakInput): string;
export declare function chkcrlf(text: string, options?: IOptions): {
    readonly lf: boolean;
    readonly crlf: boolean;
    readonly cr: boolean;
};
export declare function detectLineBreak(text: string, options?: IOptions): EnumLineBreak;
export declare function isCRLF(newline: string): newline is EnumLineBreak.CRLF;
export declare function isLF(newline: string): newline is EnumLineBreak.LF;
export declare function isCR(newline: string): newline is EnumLineBreak.CR;
export declare function lineSplit(text: string): string[];
export declare function crlf_unicode_normalize(text: string, newline?: ILineBreakInput): string;
export default crlf;
