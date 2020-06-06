/**
 * Created by user on 2018/3/16/016.
 */
export declare const STRING_PROTOTYPE: string[];
export declare class UString extends String {
    protected _arr: string[];
    constructor(str: any, ...argv: any[]);
    [Symbol.iterator](): IterableIterator<string>;
    static isString(str: any): boolean;
    static toArray(str: any): string[];
    toArray(): string[];
    split(separator?: any, limit?: number): string[];
    substr(start: number, length?: number): string;
    substring(start: number, indexEnd?: number): string;
    indexOf(search: string, start?: number): number;
    includes(search: string, start?: number): boolean;
    slice(start: number, indexEnd?: number): string;
    charAt(index: number): string;
    startsWith(search: string, pos?: number): boolean;
    endsWith(search: string, length?: number): boolean;
    padEnd(targetLength: number, padString: string): string;
    padStart(targetLength: number, padString: string): string;
    /**
     * 𠮷 134071 20bb7
     */
    codePointAt(pos: number): number;
    static UString: typeof UString;
    /**
     * @private
     */
    static default: typeof UString;
    static create(str: any, ...argv: any[]): UString;
    /**
     * 顯示 目前支援 unicode 的 method
     */
    static get support(): {
        split?: boolean;
        substr?: boolean;
        substring?: boolean;
        indexOf?: boolean;
        includes?: boolean;
        slice?: boolean;
        charAt?: boolean;
        startsWith?: boolean;
        endsWith?: boolean;
        padEnd?: boolean;
        padStart?: boolean;
        codePointAt?: boolean;
        [key: string]: boolean;
    };
    static indexOf(str: any, search: string, start?: number): number;
    static includes(str: any, search: string, start?: number): boolean;
    /**
     * splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
     */
    static split(str: any, separator?: any, limit?: number): string[];
    static substr(str: any, start: number, length?: number): string;
    static substring(str: any, start: number, indexEnd?: number): string;
    static slice(str: any, start: number, indexEnd?: number): string;
    static charAt(str: any, index: number): string;
    static padEnd(str: any, targetLength: number, padString: string): string;
    static padStart(str: any, targetLength: number, padString: string): string;
    static startsWith(str: any, search: string, pos?: number): boolean;
    static endsWith(str: any, search: string, length?: number): boolean;
    get charLength(): number;
    size(): number;
    static size(str: any): number;
    /**
     * 𠮷 134071 20bb7
     */
    static codePointAt(str: any, pos: number): number;
}
export default UString;
