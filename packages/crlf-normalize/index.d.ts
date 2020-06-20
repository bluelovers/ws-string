/**
 * Created by user on 2018/1/26/026.
 */
export declare const CR = "\r";
export declare const CRLF = "\r\n";
export declare const LF = "\n";
export declare const R_CRLF: RegExp;
export declare function crlf(text: string, newline?: string): string;
export declare function chkcrlf(text: string): {
    lf: boolean;
    crlf: boolean;
    cr: boolean;
};
export declare function lineSplit(text: string): string[];
export declare function crlf_unicode_normalize(text: string, newline?: string): string;
export default crlf;
