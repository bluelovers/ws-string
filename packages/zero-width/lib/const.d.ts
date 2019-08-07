/**
 * Created by user on 2019/8/7.
 */
export declare const enum ENUM_ZERO_WIDTH {
    NON_JOINER = "\u200C",
    JOINER = "\u200D",
    SPACE = "\u200B",
    NO_BREAK_SPACE = "\uFEFF",
    BOM = "\uFEFF",
    LEFT_TO_RIGHT_MARK = "\u200E",
    RIGHT_TO_LEFT_MARK = "\u200F",
    WORD_JOINER = "\u2060",
    /**
     * no need remove
     * @see https://zh.wikipedia.org/wiki/%E7%B5%84%E5%90%88%E9%99%84%E5%8A%A0%E7%AC%A6%E8%99%9F
     * @see https://unicode-table.com/cn/034F/
     */
    COMBINING_GRAPHEME_JOINER = "\u034F"
}
/**
 * @see https://unicode-table.com/en/blocks/variation-selectors/
 */
export declare const enum ENUM_VARIATION_SELECTORS {
    /**
     * 	VARIATION SELECTOR-1
     */
    'FE00' = "\uFE00",
    /**
     * 	VARIATION SELECTOR-2
     */
    'FE01' = "\uFE01",
    /**
     * 	VARIATION SELECTOR-3
     */
    'FE02' = "\uFE02",
    /**
     * 	VARIATION SELECTOR-4
     */
    'FE03' = "\uFE03",
    /**
     * 	VARIATION SELECTOR-5
     */
    'FE04' = "\uFE04",
    /**
     * 	VARIATION SELECTOR-6
     */
    'FE05' = "\uFE05",
    /**
     * 	VARIATION SELECTOR-7
     */
    'FE06' = "\uFE06",
    /**
     * 	VARIATION SELECTOR-8
     */
    'FE07' = "\uFE07",
    /**
     * 	VARIATION SELECTOR-9
     */
    'FE08' = "\uFE08",
    /**
     * 	VARIATION SELECTOR-10
     */
    'FE09' = "\uFE09",
    /**
     * 	VARIATION SELECTOR-11
     */
    'FE0A' = "\uFE0A",
    /**
     * 	VARIATION SELECTOR-12
     */
    'FE0B' = "\uFE0B",
    /**
     * 	VARIATION SELECTOR-13
     */
    'FE0C' = "\uFE0C",
    /**
     * 	VARIATION SELECTOR-14
     */
    'FE0D' = "\uFE0D",
    /**
     * 	VARIATION SELECTOR-15
     */
    'FE0E' = "\uFE0E",
    /**
     * 	VARIATION SELECTOR-16
     */
    'FE0F' = "\uFE0F"
}
/**
 * too many give up
 * @see https://unicode-table.com/cn/blocks/variation-selectors-supplement/
 * @deprecated
 */
export declare const enum ENUM_VARIATION_SELECTORS_SUPPLEMENT {
}
export declare const enum ENUM_SPACE {
}
