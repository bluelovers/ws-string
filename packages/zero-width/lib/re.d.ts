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
export declare const reZeroWidth2: RegExp;
export declare const reZeroWidthAllSafe: RegExp;
export declare const reZeroWidthAll: RegExp;
export declare const reNBSP: RegExp;
export declare const reNewLine: RegExp;
export declare const reRegExpSpaceWithoutNewLine: RegExp;
export declare const reRegExpSpaceWithoutNewLinePlus: RegExp;
export declare const reRegExpSpace: RegExp;
export declare const reRegExpSpacePlus: RegExp;
export declare const reZeroWidthWithSpaceWithoutNewLine: RegExp;
export declare const reZeroWidthWithSpace: RegExp;
export declare const reZeroWidthTrimWithoutNewLine: RegExp;
export declare const reZeroWidthTrim: RegExp;
export declare const reBomStrict: RegExp;
export declare const reBomUnsafe: RegExp;
