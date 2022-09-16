export declare function stringSplitWithLimit(str: string, separator?: string, limit?: number): string[];
export declare function _splitStart_noSep(str: string, lim: number): string[];
export declare function _splitEnd_noSep(str: string, lim: number): string[];
export declare function _splitStart(str: string, sep: string, lim: number, cur: number, acc: string[]): string[];
export declare function _splitEnd(str: string, sep: string, lim: number, cur: number, acc: string[]): string[];

export {
	stringSplitWithLimit as default,
};

export {};
