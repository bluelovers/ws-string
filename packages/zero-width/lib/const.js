"use strict";
/**
 * Created by user on 2019/8/7.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ENUM_ZERO_WIDTH;
(function (ENUM_ZERO_WIDTH) {
    ENUM_ZERO_WIDTH["NON_JOINER"] = "\u200C";
    ENUM_ZERO_WIDTH["JOINER"] = "\u200D";
    ENUM_ZERO_WIDTH["SPACE"] = "\u200B";
    ENUM_ZERO_WIDTH["NO_BREAK_SPACE"] = "\uFEFF";
    ENUM_ZERO_WIDTH["BOM"] = "\uFEFF";
    ENUM_ZERO_WIDTH["LEFT_TO_RIGHT_MARK"] = "\u200E";
    ENUM_ZERO_WIDTH["RIGHT_TO_LEFT_MARK"] = "\u200F";
    ENUM_ZERO_WIDTH["WORD_JOINER"] = "\u2060";
    /**
     * no need remove
     * @see https://zh.wikipedia.org/wiki/%E7%B5%84%E5%90%88%E9%99%84%E5%8A%A0%E7%AC%A6%E8%99%9F
     * @see https://unicode-table.com/cn/034F/
     */
    ENUM_ZERO_WIDTH["COMBINING_GRAPHEME_JOINER"] = "\u034F";
})(ENUM_ZERO_WIDTH = exports.ENUM_ZERO_WIDTH || (exports.ENUM_ZERO_WIDTH = {}));
/**
 * @see https://unicode-table.com/en/blocks/variation-selectors/
 */
var ENUM_VARIATION_SELECTORS;
(function (ENUM_VARIATION_SELECTORS) {
    /**
     * 	VARIATION SELECTOR-1
     */
    ENUM_VARIATION_SELECTORS["FE00"] = "\uFE00";
    /**
     * 	VARIATION SELECTOR-2
     */
    ENUM_VARIATION_SELECTORS["FE01"] = "\uFE01";
    /**
     * 	VARIATION SELECTOR-3
     */
    ENUM_VARIATION_SELECTORS["FE02"] = "\uFE02";
    /**
     * 	VARIATION SELECTOR-4
     */
    ENUM_VARIATION_SELECTORS["FE03"] = "\uFE03";
    /**
     * 	VARIATION SELECTOR-5
     */
    ENUM_VARIATION_SELECTORS["FE04"] = "\uFE04";
    /**
     * 	VARIATION SELECTOR-6
     */
    ENUM_VARIATION_SELECTORS["FE05"] = "\uFE05";
    /**
     * 	VARIATION SELECTOR-7
     */
    ENUM_VARIATION_SELECTORS["FE06"] = "\uFE06";
    /**
     * 	VARIATION SELECTOR-8
     */
    ENUM_VARIATION_SELECTORS["FE07"] = "\uFE07";
    /**
     * 	VARIATION SELECTOR-9
     */
    ENUM_VARIATION_SELECTORS["FE08"] = "\uFE08";
    /**
     * 	VARIATION SELECTOR-10
     */
    ENUM_VARIATION_SELECTORS["FE09"] = "\uFE09";
    /**
     * 	VARIATION SELECTOR-11
     */
    ENUM_VARIATION_SELECTORS["FE0A"] = "\uFE0A";
    /**
     * 	VARIATION SELECTOR-12
     */
    ENUM_VARIATION_SELECTORS["FE0B"] = "\uFE0B";
    /**
     * 	VARIATION SELECTOR-13
     */
    ENUM_VARIATION_SELECTORS["FE0C"] = "\uFE0C";
    /**
     * 	VARIATION SELECTOR-14
     */
    ENUM_VARIATION_SELECTORS["FE0D"] = "\uFE0D";
    /**
     * 	VARIATION SELECTOR-15
     */
    ENUM_VARIATION_SELECTORS["FE0E"] = "\uFE0E";
    /**
     * 	VARIATION SELECTOR-16
     */
    ENUM_VARIATION_SELECTORS["FE0F"] = "\uFE0F";
})(ENUM_VARIATION_SELECTORS = exports.ENUM_VARIATION_SELECTORS || (exports.ENUM_VARIATION_SELECTORS = {}));
/**
 * too many give up
 * @see https://unicode-table.com/cn/blocks/variation-selectors-supplement/
 * @deprecated
 */
var ENUM_VARIATION_SELECTORS_SUPPLEMENT;
(function (ENUM_VARIATION_SELECTORS_SUPPLEMENT) {
})(ENUM_VARIATION_SELECTORS_SUPPLEMENT = exports.ENUM_VARIATION_SELECTORS_SUPPLEMENT || (exports.ENUM_VARIATION_SELECTORS_SUPPLEMENT = {}));
var ENUM_SPACE;
(function (ENUM_SPACE) {
    /**
     * 空格符 (space character)
     * @type {string}
     */
    ENUM_SPACE["SPACE"] = " ";
    ENUM_SPACE["NO_BREAK_SPACE"] = "\u00A0";
    /**
     * `　`
     */
    ENUM_SPACE["FULL_WIDTH_SPACE"] = "\u3000";
    /**
     * `\t`
     */
    ENUM_SPACE["TAB"] = "\t";
    /**
     * `\t`
     * 制表符 (tab character)
     */
    ENUM_SPACE["HORIZONTAL_TABULATION"] = "\t";
    /**
     * `\v`
     * 垂直换行符 (vertical tab character)
     */
    ENUM_SPACE["VERTICAL_TABULATION"] = "\v";
    /**
     * `\r`
     * 回车符 (carriage return character)
     */
    ENUM_SPACE["CARRIAGE_RETURN"] = "\r";
    /**
     * `\n`
     * 换行符 (new line character)
     */
    ENUM_SPACE["NEW_LINE"] = "\n";
    /**
     * `\b`
     */
    ENUM_SPACE["BACKSPACE"] = "\b";
    /**
     * `\f` => 000c
     * 换页符 (form feed character)
     *
     * @see https://unicode-table.com/cn/000C/
     */
    ENUM_SPACE["FORM_FEED"] = "\f";
})(ENUM_SPACE = exports.ENUM_SPACE || (exports.ENUM_SPACE = {}));
//# sourceMappingURL=const.js.map