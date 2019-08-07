/**
 * @todo add move zero width
 */
/**
 * VARIATION SELECTOR-1 ~ VARIATION SELECTOR-16
 */
export declare const reVariationSelectors: RegExp;
/**
 * VARIATION SELECTOR-17 ~ VARIATION SELECTOR-256
 */
export declare const reVariationSelectorsSupplement: RegExp;
/**
 * VARIATION SELECTOR-1 ~ VARIATION SELECTOR-256
 */
export declare const reVariationSelectorsAll: RegExp;
/**
 * simple merge, not real regexp merge
 * @private
 */
export declare function _regexpMerge(re: (string | RegExp)[]): RegExp;
export declare const reZeroWidth: RegExp;
export declare const reZeroWidthAll: RegExp;
export declare const reZeroWidthWithSpace: RegExp;
export declare const reZeroWidthTrim: RegExp;
export declare const reBomStrict: RegExp;
export declare const reBomUnsafe: RegExp;
