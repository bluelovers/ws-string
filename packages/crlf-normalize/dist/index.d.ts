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
declare const R_CRLF_MATCH: RegExp;
export { CR, CRLF, LF, R_CRLF, R_CRLF_MATCH };
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
export type IChkCrlf = ReturnType<typeof chkcrlf>;
export declare function detectLineBreak(text: string, options?: IOptions): EnumLineBreak;
export declare function _detectLineBreakCore(_lb: IChkCrlf): EnumLineBreak;
export declare function isCRLF(newline: string): newline is EnumLineBreak.CRLF;
export declare function isLF(newline: string): newline is EnumLineBreak.LF;
export declare function isCR(newline: string): newline is EnumLineBreak.CR;
export declare function lineSplit(text: string): string[];
export declare function crlf_unicode_normalize(text: string, newline?: ILineBreakInput): string;
export declare function isEqualWithIgnoreLineSeparators(a: string, b: string): {
    bool: boolean;
    _lb_a: {
        readonly lf: boolean;
        readonly crlf: boolean;
        readonly cr: boolean;
    };
    _lb_b: {
        readonly lf: boolean;
        readonly crlf: boolean;
        readonly cr: boolean;
    };
};
export type ILineBreakName = keyof typeof EnumLineBreak;
export declare function toLineBreakName(newline: ILineBreakInput): ILineBreakName;
export declare function nameToLineBreak(name: ILineBreakName | string): EnumLineBreak;
export default crlf;
