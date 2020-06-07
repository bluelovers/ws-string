/**
 * Created by user on 2017/12/11/011.
 */
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
export declare const transcriptionConfigs: {
    readonly default: {
        readonly minusSign: "マイナス";
        readonly decimalPoint: "・";
        readonly digits: "common";
        readonly unitNames: "jinkoki3";
        readonly specialUnitNames: "none";
        readonly truncateOne: readonly ["十", "百", "千", "拾", "佰", "阡", "仟"];
        readonly smallUnitNames: "none";
    };
    readonly formal: {
        readonly digits: "formal";
        readonly unitNames: "formal";
        readonly specialUnitNames: "common";
        readonly smallUnitNames: "common";
    };
    readonly traditional: {
        readonly digits: "traditional";
        readonly specialUnitNames: "full";
        readonly smallUnitNames: "full";
    };
};
export declare const predefineedTranscriptionConfigs: {
    readonly digits: {
        readonly arabic: {
            readonly 0: "0";
            readonly 1: "1";
            readonly 2: "2";
            readonly 3: "3";
            readonly 4: "4";
            readonly 5: "5";
            readonly 6: "6";
            readonly 7: "7";
            readonly 8: "8";
            readonly 9: "9";
        };
        readonly common: {
            readonly 0: "〇";
            readonly 1: "一";
            readonly 2: "二";
            readonly 3: "三";
            readonly 4: "四";
            readonly 5: "五";
            readonly 6: "六";
            readonly 7: "七";
            readonly 8: "八";
            readonly 9: "九";
        };
        readonly formal: {
            readonly 0: "〇";
            readonly 1: "壱";
            readonly 2: "弐";
            readonly 3: "参";
            readonly 4: "四";
            readonly 5: "五";
            readonly 6: "六";
            readonly 7: "七";
            readonly 8: "八";
            readonly 9: "九";
        };
        readonly traditional: {
            readonly 0: "零";
            readonly 1: "壱";
            readonly 2: "弐";
            readonly 3: "参";
            readonly 4: "肆";
            readonly 5: "伍";
            readonly 6: "陸";
            readonly 7: "柒";
            readonly 8: "捌";
            readonly 9: "玖";
        };
        readonly traditionalOld: {
            readonly 0: "零";
            readonly 1: "壹";
            readonly 2: "貳";
            readonly 3: "參";
            readonly 4: "肆";
            readonly 5: "伍";
            readonly 6: "陸";
            readonly 7: "柒";
            readonly 8: "捌";
            readonly 9: "玖";
        };
        readonly simplified: {
            readonly 0: "零";
            readonly 1: "壹";
            readonly 2: "贰";
            readonly 3: "叁";
            readonly 4: "肆";
            readonly 5: "伍";
            readonly 6: "陆";
            readonly 7: "柒";
            readonly 8: "捌";
            readonly 9: "玖";
        };
        readonly chineseMilitary: {
            readonly 0: "洞";
            readonly 1: "幺";
            readonly 2: "两";
            readonly 3: "三";
            readonly 4: "刀";
            readonly 5: "五";
            readonly 6: "六";
            readonly 7: "拐";
            readonly 8: "八";
            readonly 9: "勾";
        };
        readonly vietnam: {
            readonly 0: "〇";
            readonly 1: "𠬠";
            readonly 2: "𠄩";
            readonly 3: "𠀧";
            readonly 4: "𦊚";
            readonly 5: "𠄼";
            readonly 6: "𦒹";
            readonly 7: "𦉱";
            readonly 8: "𠔭";
            readonly 9: "𠃩";
        };
    };
    readonly unitNames: {
        readonly jinkoki1: {
            readonly 1: "十";
            readonly 2: "百";
            readonly 3: "千";
            readonly 4: "万";
            readonly 5: "億";
            readonly 6: "兆";
            readonly 7: "京";
            readonly 8: "垓";
            readonly 9: "𥝱";
            readonly 10: "穣";
            readonly 11: "溝";
            readonly 12: "澗";
            readonly 13: "正";
            readonly 14: "載";
            readonly 15: "極";
            readonly 23: "恒河沙";
            readonly 31: "阿僧祇";
            readonly 39: "那由他";
            readonly 47: "不可思議";
            readonly 55: "無量大数";
            readonly lit: 63;
        };
        readonly jinkoki2: {
            readonly 1: "十";
            readonly 2: "百";
            readonly 3: "千";
            readonly 4: "万";
            readonly 8: "億";
            readonly 12: "兆";
            readonly 16: "京";
            readonly 20: "垓";
            readonly 24: "𥝱";
            readonly 28: "穣";
            readonly 32: "溝";
            readonly 36: "澗";
            readonly 40: "正";
            readonly 44: "載";
            readonly 48: "極";
            readonly 56: "恒河沙";
            readonly 64: "阿僧祇";
            readonly 72: "那由他";
            readonly 80: "不可思議";
            readonly 88: "無量大数";
            readonly lit: 96;
        };
        readonly jinkoki3: {
            readonly 1: "十";
            readonly 2: "百";
            readonly 3: "千";
            readonly 4: "万";
            readonly 8: "億";
            readonly 12: "兆";
            readonly 16: "京";
            readonly 20: "垓";
            readonly 24: "𥝱";
            readonly 28: "穣";
            readonly 32: "溝";
            readonly 36: "澗";
            readonly 40: "正";
            readonly 44: "載";
            readonly 48: "極";
            readonly 52: "恒河沙";
            readonly 56: "阿僧祇";
            readonly 60: "那由他";
            readonly 64: "不可思議";
            readonly 68: "無量大数";
            readonly lit: 72;
        };
        readonly josu: {
            readonly 1: "十";
            readonly 2: "百";
            readonly 3: "千";
            readonly 4: "万";
            readonly 8: "億";
            readonly 16: "兆";
            readonly 32: "京";
            readonly 64: "垓";
            readonly 128: "𥝱";
            readonly 256: "穣";
            readonly 512: "溝";
            readonly 1024: "澗";
            readonly 2048: "正";
            readonly 4096: "載";
            readonly 8192: "極";
            readonly 16384: "恒河沙";
            readonly 32768: "阿僧祇";
            readonly 65536: "那由他";
            readonly 131072: "不可思議";
            readonly 262144: "無量大数";
            readonly lit: 524288;
        };
        readonly formal: {
            readonly 1: "拾";
            readonly 2: "百";
            readonly 3: "千";
            readonly 4: "万";
            readonly 8: "億";
            readonly 12: "兆";
            readonly 16: "京";
            readonly 20: "垓";
            readonly 24: "𥝱";
            readonly 28: "穣";
            readonly 32: "溝";
            readonly 36: "澗";
            readonly 40: "正";
            readonly 44: "載";
            readonly 48: "極";
            readonly 52: "恒河沙";
            readonly 56: "阿僧祇";
            readonly 60: "那由他";
            readonly 64: "不可思議";
            readonly 68: "無量大数";
            readonly lit: 72;
        };
    };
    readonly specialUnitNames: {
        readonly none: {};
        readonly common: {
            readonly 20: "廿";
            readonly 30: "卅";
        };
        readonly full: {
            readonly 20: "廿";
            readonly 30: "卅";
            readonly 40: "卌";
            readonly 200: "皕";
        };
    };
    readonly smallUnitNames: {
        readonly none: {};
        readonly common: {
            readonly 1: "分";
            readonly 2: "厘";
            readonly 3: "毛";
            readonly 4: "糸";
        };
        readonly wari: {
            readonly 1: "割";
            readonly 2: "分";
            readonly 3: "厘";
            readonly 4: "毛";
            readonly 5: "糸";
        };
        readonly full: {
            readonly 1: "分";
            readonly 2: "厘";
            readonly 3: "毛";
            readonly 4: "糸";
            readonly 5: "忽";
            readonly 6: "微";
            readonly 7: "繊";
            readonly 8: "沙";
            readonly 9: "塵";
            readonly 10: "埃";
            readonly 11: "渺";
            readonly 12: "漠";
            readonly 13: "模糊";
            readonly 14: "逡巡";
            readonly 15: "須臾";
            readonly 16: "瞬息";
            readonly 17: "弾指";
            readonly 18: "刹那";
            readonly 19: "六徳";
            readonly 20: "虚空";
            readonly 21: "清浄";
        };
        readonly wariFull: {
            readonly 1: "割";
            readonly 2: "分";
            readonly 3: "厘";
            readonly 4: "毛";
            readonly 5: "糸";
            readonly 6: "忽";
            readonly 7: "微";
            readonly 8: "繊";
            readonly 9: "沙";
            readonly 10: "塵";
            readonly 11: "埃";
            readonly 12: "渺";
            readonly 13: "漠";
            readonly 14: "模糊";
            readonly 15: "逡巡";
            readonly 16: "須臾";
            readonly 17: "瞬息";
            readonly 18: "弾指";
            readonly 19: "刹那";
            readonly 20: "六徳";
            readonly 21: "虚空";
            readonly 22: "清浄";
        };
    };
};
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
export declare function zh2num(str: any, options?: IOptions): string;
export declare function zh2num(str: number, options?: IOptions): number;
export declare function _chinese_parseInt(str: string, options?: IOptions): any;
/**
 * 將數字轉為漢字
 *
 * @param number
 * @param options
 * @returns {string}
 *
 * @example num2zh(1117) == '千百十七'
 */
export declare function num2zh(number: any, options?: any): string;
declare const _default: typeof import("./zh2num");
export default _default;
