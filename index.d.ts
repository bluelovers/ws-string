export declare const CR = "\r";
export declare const CRLF = "\r\n";
export declare const LF = "\n";
export declare function crlf(text: string, newline?: string): string;
export declare function chkcrlf(text: string): {
    lf: boolean;
    crlf: boolean;
    cr: boolean;
};
export default crlf;
