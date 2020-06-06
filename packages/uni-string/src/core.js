"use strict";
/**
 * Created by user on 2018/3/16/016.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.UString = exports.STRING_PROTOTYPE = void 0;
var runes2_1 = require("runes2");
var es6_class_prototype_1 = require("es6-class-prototype");
exports.STRING_PROTOTYPE = Object.getOwnPropertyNames(String.prototype);
var UString = /** @class */ (function (_super) {
    __extends(UString, _super);
    function UString(str) {
        var argv = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            argv[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this, str) || this;
        _this._arr = null;
        var d = Object.getOwnPropertyDescriptor(_this, '_arr');
        Object.defineProperty(_this, '_arr', Object.assign(d, {
            configurable: true,
            enumerable: false,
        }));
        return _this;
    }
    UString.prototype[Symbol.iterator] = function () {
        return UString.toArray(this)[Symbol.iterator]();
    };
    UString.isString = function (str) {
        return (typeof str == 'string' || str instanceof String);
    };
    UString.toArray = function (str) {
        if (str instanceof UString) {
            return str.toArray();
        }
        return runes2_1["default"](String(str));
    };
    UString.prototype.toArray = function () {
        if (!this._arr) {
            this._arr = runes2_1["default"](String(this));
        }
        return this._arr;
    };
    UString.prototype.split = function (separator, limit) {
        var ret;
        var str = String(this);
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
    };
    UString.prototype.substr = function (start, length) {
        return UString.toArray(this).slice(start).slice(0, length).join('');
    };
    UString.prototype.substring = function (start, indexEnd) {
        var _a;
        if (Number.isNaN(start) || start < 0) {
            start = 0;
        }
        if (typeof indexEnd == 'number') {
            if (Number.isNaN(indexEnd) || indexEnd < 0) {
                indexEnd = 0;
            }
            if (start > indexEnd) {
                _a = [indexEnd, start], start = _a[0], indexEnd = _a[1];
            }
        }
        return this.slice(start, indexEnd);
    };
    UString.prototype.indexOf = function (search, start) {
        if (start === void 0) { start = 0; }
        var a = UString.toArray(this);
        start = Math.max(0, Math.min(a.length, start));
        search = String(search);
        if (search === '') {
            return start;
        }
        a = a.slice(start);
        var s = UString.toArray(search);
        var i = 0;
        var j = 0;
        var se = s[s.length - 1];
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
    };
    UString.prototype.includes = function (search, start) {
        if (start === void 0) { start = 0; }
        return UString.toArray(this).slice(start).join('').indexOf(search) !== -1;
    };
    UString.prototype.slice = function (start, indexEnd) {
        return UString.toArray(this).slice(start, indexEnd).join('');
    };
    UString.prototype.charAt = function (index) {
        return this.substr(index, 1);
    };
    UString.prototype.startsWith = function (search, pos) {
        return this.substr(!pos || pos < 0 ? 0 : +pos, search.length)
            .indexOf(search) == 0;
    };
    UString.prototype.endsWith = function (search, length) {
        var a = UString.toArray(this);
        var s = UString.toArray(search);
        if (length === undefined || length > a.length) {
            length = a.length;
        }
        return this.substring(length - s.length, length) === search;
    };
    UString.prototype.padEnd = function (targetLength, padString) {
        targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
        padString = String((typeof padString !== 'undefined' ? padString : ' '));
        var str = this.split('');
        var pad = this.split.call(padString, '');
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
    };
    UString.prototype.padStart = function (targetLength, padString) {
        targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;
        padString = String((typeof padString !== 'undefined' ? padString : ' '));
        var str = this.split('');
        var pad = this.split.call(padString, '');
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
    };
    /**
     * 𠮷 134071 20bb7
     */
    UString.prototype.codePointAt = function (pos) {
        return this.toArray()[pos].codePointAt(0);
    };
    UString.create = function (str) {
        var argv = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            argv[_i - 1] = arguments[_i];
        }
        return new (this.bind.apply(this, __spreadArrays([void 0, str], argv)))();
    };
    Object.defineProperty(UString, "support", {
        /**
         * 顯示 目前支援 unicode 的 method
         */
        get: function () {
            var prototype = es6_class_prototype_1["default"](this);
            return Object.keys(prototype).reduce(function (a, b) {
                if (exports.STRING_PROTOTYPE.includes(b)) {
                    a[b] = true;
                }
                return a;
            }, {});
        },
        enumerable: false,
        configurable: true
    });
    UString.indexOf = function (str, search, start) {
        if (start === void 0) { start = 0; }
        return this.create(str).indexOf(search, start);
    };
    UString.includes = function (str, search, start) {
        if (start === void 0) { start = 0; }
        return this.create(str).includes(search, start);
    };
    /**
     * splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
     */
    UString.split = function (str, separator, limit) {
        return this.create(str).split(separator, limit);
    };
    UString.substr = function (str, start, length) {
        return this.create(str).substr(start, length);
    };
    UString.substring = function (str, start, indexEnd) {
        return this.create(str).substring(start, indexEnd);
    };
    UString.slice = function (str, start, indexEnd) {
        return this.create(str).slice(start, indexEnd);
    };
    UString.charAt = function (str, index) {
        return this.create(str).charAt(index);
    };
    UString.padEnd = function (str, targetLength, padString) {
        return this.create(str).padEnd(targetLength, padString);
    };
    UString.padStart = function (str, targetLength, padString) {
        return this.create(str).padStart(targetLength, padString);
    };
    UString.startsWith = function (str, search, pos) {
        return this.create(str).startsWith(search, pos);
    };
    UString.endsWith = function (str, search, length) {
        return this.create(str).endsWith(search, length);
    };
    Object.defineProperty(UString.prototype, "charLength", {
        get: function () {
            return UString.toArray(this).length;
        },
        enumerable: false,
        configurable: true
    });
    UString.prototype.size = function () {
        return UString.toArray(this).length;
    };
    UString.size = function (str) {
        return this.create(str).size();
    };
    /**
     * 𠮷 134071 20bb7
     */
    UString.codePointAt = function (str, pos) {
        return this.create(str).codePointAt(pos);
    };
    UString.UString = UString;
    /**
     * @private
     */
    UString["default"] = UString;
    return UString;
}(String));
exports.UString = UString;
exports["default"] = UString;
// @ts-ignore
Object.defineProperty(UString, "__esModule", { value: true });
// @ts-ignore
UString["default"] = UString.UString = UString;
// @ts-ignore
exports = Object.freeze(exports);
