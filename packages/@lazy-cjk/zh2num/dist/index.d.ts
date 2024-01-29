export interface IOptions {
	/**
	 * @see https://github.com/hakatashi/japanese.js/blob/master/src/numbers.es6
	 */
	digits?: string[];
	/**
	 * @see https://github.com/hakatashi/japanese.js/blob/master/src/numbers.es6
	 */
	unitNames?: string[];
	/**
	 * replace all
	 */
	unsafe?: boolean;
	/**
	 * RegExp Flags
	 */
	flags?: string;
	chars?: string;
	truncateOne?: number | boolean;
	strict?: boolean;
	one?: boolean;
	string?: boolean;
}
export declare const defaultOptions: IOptions;
/**
 * 將漢字轉換成數字
 * Parse Chinese/Japanese numeric strings to integer
 *
 * @param str
 * @param {IOptions} options
 * @returns {string|number}
 *
 * @example zh2num('千百十七') == 1117
 */
export declare function zh2num(str: number, options?: IOptions): number;
export declare function zh2num(str: unknown, options?: IOptions): string;
export declare function _chinese_parseInt(str: string, options: IOptions & {
	string: true;
}): string;
export declare function _chinese_parseInt(str: string, options?: IOptions & {
	string?: false;
}): number;
export declare function _chinese_parseInt(str: string, options?: IOptions): number;
/**
 * 將數字轉為漢字
 *
 * @param number
 * @param options
 * @returns {string}
 *
 * @example num2zh(1117) == '千百十七'
 */
export declare function num2zh(number: unknown, options?: {
	strict?: boolean;
}): string;
declare const _default: {
	zh2num: typeof zh2num;
	num2zh: typeof num2zh;
};

export {
	_default as default,
};

export {};
