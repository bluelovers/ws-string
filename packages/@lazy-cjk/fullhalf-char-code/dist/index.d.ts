export declare const enum EnumFullHalfTableType {
	FULL_WIDTH = 1,
	HALF_WIDTH = 0,
	NO_EXIST = -1
}
/**
 * Determines whether the specified character code is full-width or half-width.
 */
export declare function detectFullHalfCharCode(charCode: number): EnumFullHalfTableType;
/**
 * Determines whether the specified character code is full-width or half-width.
 */
export declare function isFullHalfCharCode(charCode: number): boolean;
/**
 * Converts a half-width character code to a full-width character code.
 * @param {number} charCode - The half-width character code to convert.
 * @returns {number} The full-width character code.
 */
export declare function toFullWidthCharCode(charCode: number): number;
/**
 * Converts a full-width character code to a half-width character code.
 * @param {number} charCode - The full-width character code to convert.
 * @returns {number} The half-width character code.
 */
export declare function toHalfWidthCharCode(charCode: number): number;

export {};
