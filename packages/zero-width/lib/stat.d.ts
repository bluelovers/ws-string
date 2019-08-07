export declare function reportZeroWidth(str: string): Record<string, number>;
export declare function reportZeroWidthWithSpace(str: string): Record<string, number>;
/**
 * @private
 */
export declare function _report(str: string, re: RegExp): Record<string, number>;
export declare function _toKey(k: string): string;
export default reportZeroWidthWithSpace;
