"use strict";
/**
 * Created by user on 2017/12/11/011.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.num2zh = exports._chinese_parseInt = exports.zh2num = exports.predefineedTranscriptionConfigs = exports.transcriptionConfigs = exports.defaultOptions = void 0;
const chinese_parseint2_1 = require("chinese-parseint2");
const japanese_1 = require("@lazy-cjk/japanese");
Object.defineProperty(exports, "transcriptionConfigs", { enumerable: true, get: function () { return japanese_1.transcriptionConfigs; } });
Object.defineProperty(exports, "predefineedTranscriptionConfigs", { enumerable: true, get: function () { return japanese_1.predefineedTranscriptionConfigs; } });
exports.defaultOptions = {
    one: true,
};
function zh2num(str, options = {}) {
    options = Object.assign({}, exports.defaultOptions, options);
    let sa = [];
    let do_def = true;
    let jtc = japanese_1.transcriptionConfigs;
    let jpc = japanese_1.predefineedTranscriptionConfigs;
    for (let id of [
        'digits',
        'unitNames',
    ]) {
        if (Array.isArray(options[id]) && options[id].length) {
            for (let d of options[id]) {
                if (jpc[id][d]) {
                    sa = sa.concat(Object.values(jpc[id][d]));
                }
            }
        }
    }
    if (typeof options.truncateOne === 'number') {
        for (let i in jtc.default.truncateOne) {
            // @ts-ignore
            if (i < options.truncateOne) {
                sa.push(jtc.default.truncateOne[i]);
            }
        }
    }
    else if ((typeof options.truncateOne == 'undefined' || options.truncateOne === true) && sa.length) {
        sa = sa.concat(Object.values(jtc.default.truncateOne));
    }
    if (options.chars) {
        sa = sa.concat(Array.isArray(options.chars) ? options.chars : options.chars.split(''));
    }
    if (sa.length) {
        do_def = false;
    }
    sa.filter(function (value) {
        if (value.length === 1 && (value in chinese_parseint2_1.characters)) {
            return true;
        }
        return false;
    });
    if (do_def) {
        sa = Object.keys(chinese_parseint2_1.characters);
    }
    options.flags = (options.flags || 'u');
    if (options.unsafe) {
        options.flags = (options.flags || '') + 'g';
    }
    //console.log(options, sa);
    let rs = sa.join('');
    let s = str.toString();
    if (!(new RegExp('([^' + rs + '])')).test(s)) {
        return _chinese_parseInt(s, options);
    }
    else if (options.strict) {
        return Number.NaN;
    }
    let r = new RegExp('([' + rs + ']+)', options.flags);
    return s.replace(r, function (...m) {
        return _chinese_parseInt(m[1], options);
    }).toString();
}
exports.zh2num = zh2num;
function _chinese_parseInt(str, options = {}) {
    if (options.one) {
        str = str.replace(/([佰百])([一二三四五六七八九壹貳參肆伍陸柒捌玖])(?![零○〇一二三四五六七八九壹貳參肆伍陸柒捌玖拾十什])/, '$1〇$2');
    }
    let ret = (0, chinese_parseint2_1.chinese_parseInt)(str);
    if (options.string) {
        // @ts-ignore
        ret = ret.toString();
    }
    return ret;
}
exports._chinese_parseInt = _chinese_parseInt;
/**
 * 將數字轉為漢字
 *
 * @param number
 * @param options
 * @returns {string}
 *
 * @example num2zh(1117) == '千百十七'
 */
function num2zh(number, options = {}) {
    let d = parseInt(number);
    if (Number.isNaN(d) || (options && options.strict && (typeof number != 'number' || d !== number))) {
        throw new TypeError(`${number} is not valid allow number`);
    }
    return (0, japanese_1.transcribeNumber)(d, options);
}
exports.num2zh = num2zh;
exports.default = exports;
//# sourceMappingURL=zh2num.js.map