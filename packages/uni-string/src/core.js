"use strict";
/**
 * Created by user on 2018/3/16/016.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UString = exports.STRING_PROTOTYPE = void 0;
const tslib_1 = require("tslib");
const runes_1 = tslib_1.__importDefault(require("runes2/runes"));
const es6_class_prototype_1 = tslib_1.__importDefault(require("es6-class-prototype"));
exports.STRING_PROTOTYPE = Object.getOwnPropertyNames(String.prototype);
class UString extends String {
    constructor(str, ...argv) {
        super(str);
        this._arr = null;
        let d = Object.getOwnPropertyDescriptor(this, '_arr');
        Object.defineProperty(this, '_arr', Object.assign(d, {
            configurable: true,
            enumerable: false,
        }));
    }
    [Symbol.iterator]() {
        return UString.toArray(this)[Symbol.iterator]();
    }
    static isString(str) {
        return (typeof str == 'string' || str instanceof String);
    }
    static toArray(str) {
        if (str instanceof UString) {
            return str.toArray();
        }
        return (0, runes_1.default)(String(str));
    }
    toArray() {
        if (!this._arr) {
            this._arr = (0, runes_1.default)(String(this));
        }
        return this._arr;
    }
    split(separator, limit) {
        let ret;
        let str = String(this);
        if (separator === '') {
            ret = UString.toArray(this);
            if (typeof limit != 'undefined') {
                ret = ret.slice(0, limit);
            }
        }
        else {
            ret = String.prototype.split.call(str, separator, limit);
        }
        return ret;
    }
    substr(start, length) {
        return UString.toArray(this).slice(start).slice(0, length).join('');
    }
    substring(start, indexEnd) {
        if (Number.isNaN(start) || start < 0) {
            start = 0;
        }
        if (typeof indexEnd == 'number') {
            if (Number.isNaN(indexEnd) || indexEnd < 0) {
                indexEnd = 0;
            }
            if (start > indexEnd) {
                [start, indexEnd] = [indexEnd, start];
            }
        }
        return this.slice(start, indexEnd);
    }
    indexOf(search, start = 0) {
        let a = UString.toArray(this);
        start = Math.max(0, Math.min(a.length, start));
        search = String(search);
        if (search === '') {
            return start;
        }
        a = a.slice(start);
        let s = UString.toArray(search);
        let i = 0;
        let j = 0;
        let se = s[s.length - 1];
        do {
            i = a.indexOf(s[0], j);
            if (i != -1) {
                if (a.slice(i, i + s.length).join('') == search) {
                    return start + i;
                }
                j = i;
                if (s.length > 1) {
                    i = a.indexOf(se, i + 1);
                    j = i - s.length;
                }
            }
            j++;
        } while (i != -1 && j < a.length);
        return -1;
    }
    includes(search, start = 0) {
        return UString.toArray(this).slice(start).join('').indexOf(search) !== -1;
    }
    slice(start, indexEnd) {
        return UString.toArray(this).slice(start, indexEnd).join('');
    }
    charAt(index) {
        return this.substr(index, 1);
    }
    startsWith(search, pos) {
        return this.substr(!pos || pos < 0 ? 0 : +pos, search.length)
            .indexOf(search) == 0;
    }
    endsWith(search, length) {
        let a = UString.toArray(this);
        let s = UString.toArray(search);
        if (length === undefined || length > a.length) {
            length = a.length;
        }
        return this.substring(length - s.length, length) === search;
    }
    padEnd(targetLength, padString) {
        targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
        padString = String((typeof padString !== 'undefined' ? padString : ' '));
        let str = this.split('');
        let pad = this.split.call(padString, '');
        if (str.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength - str.length;
            if (targetLength > pad.length) {
                padString += padString.repeat(targetLength / pad.length); //append to original to ensure we are longer than needed
                // @ts-ignore
                pad = new UString(padString);
            }
            return String(this) + pad.slice(0, targetLength);
        }
    }
    padStart(targetLength, padString) {
        targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;
        padString = String((typeof padString !== 'undefined' ? padString : ' '));
        let str = this.split('');
        let pad = this.split.call(padString, '');
        if (str.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength - str.length;
            if (targetLength > pad.length) {
                padString += padString.repeat(targetLength / pad.length); //append to original to ensure we are longer than needed
                // @ts-ignore
                pad = new UString(padString);
            }
            return pad.slice(0, targetLength) + String(this);
        }
    }
    /**
     * 𠮷 134071 20bb7
     */
    codePointAt(pos) {
        return this.toArray()[pos].codePointAt(0);
    }
    static create(str, ...argv) {
        return new this(str, ...argv);
    }
    /**
     * 顯示 目前支援 unicode 的 method
     */
    static get support() {
        let prototype = (0, es6_class_prototype_1.default)(this);
        return Object.keys(prototype).reduce(function (a, b) {
            if (exports.STRING_PROTOTYPE.includes(b)) {
                a[b] = true;
            }
            return a;
        }, {});
    }
    static indexOf(str, search, start = 0) {
        return this.create(str).indexOf(search, start);
    }
    static includes(str, search, start = 0) {
        return this.create(str).includes(search, start);
    }
    /**
     * splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
     */
    static split(str, separator, limit) {
        return this.create(str).split(separator, limit);
    }
    static substr(str, start, length) {
        return this.create(str).substr(start, length);
    }
    static substring(str, start, indexEnd) {
        return this.create(str).substring(start, indexEnd);
    }
    static slice(str, start, indexEnd) {
        return this.create(str).slice(start, indexEnd);
    }
    static charAt(str, index) {
        return this.create(str).charAt(index);
    }
    static padEnd(str, targetLength, padString) {
        return this.create(str).padEnd(targetLength, padString);
    }
    static padStart(str, targetLength, padString) {
        return this.create(str).padStart(targetLength, padString);
    }
    static startsWith(str, search, pos) {
        return this.create(str).startsWith(search, pos);
    }
    static endsWith(str, search, length) {
        return this.create(str).endsWith(search, length);
    }
    get charLength() {
        return UString.toArray(this).length;
    }
    size() {
        return UString.toArray(this).length;
    }
    static size(str) {
        return this.create(str).size();
    }
    /**
     * 𠮷 134071 20bb7
     */
    static codePointAt(str, pos) {
        return this.create(str).codePointAt(pos);
    }
}
exports.UString = UString;
UString.UString = UString;
/**
 * @private
 */
UString.default = UString;
exports.default = UString;
// @ts-ignore
Object.defineProperty(UString, "__esModule", { value: true });
// @ts-ignore
UString.default = UString.UString = UString;
//# sourceMappingURL=core.js.map