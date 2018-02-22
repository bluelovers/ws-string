"use strict";
/**
 * Created by user on 2017/12/8/008.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const deepmerge = require("deepmerge");
const util = require("./util");
var FullHalfCore;
(function (FullHalfCore) {
    FullHalfCore.FULL_WIDTH = 1;
    FullHalfCore.HALF_WIDTH = 0;
    FullHalfCore.NO_EXIST = -1;
    /**
     * @see https://en.wikipedia.org/wiki/Code_page_437
     */
    let _table = {
        default: {
            from: 0x0020 + 1,
            to: 0x007F - 1,
            values: [0x0020],
        },
        number: [0x0030, 0x0039],
        'A-Z': [0x0041, 0x005A],
        'a-z': [0x0061, 0x007A],
        space: [0x0020],
        slash: {
            values: util.charCodeAt(`/\\`),
        },
        bracket: {
            values: util.charCodeAt(`()[]{}`),
        },
    };
    FullHalfCore.tableDefaultInclude = [
        'number',
        'A-Z',
        'a-z',
        'space',
        'not_default',
    ];
    FullHalfCore.table = [];
    {
        let _keys = FullHalfCore.tableDefaultInclude.slice(0, -1);
        FullHalfCore.table[0] = {};
        FullHalfCore.table[1] = {};
        for (let k in _table) {
            let v = _table[k];
            let r;
            r = fn(v);
            if (r) {
                FullHalfCore.table[FullHalfCore.HALF_WIDTH][k] = r[1];
                FullHalfCore.table[FullHalfCore.FULL_WIDTH][k] = r[0];
            }
        }
        let r = fn(_table.default);
        r[0].not = [];
        r[1].not = [];
        for (let k of _keys) {
            let v = _table[k];
            let r2;
            r2 = fn(v);
            if (r2) {
                r[0].not.push(r2[0]);
                r[1].not.push(r2[1]);
            }
        }
        FullHalfCore.table[FullHalfCore.HALF_WIDTH]['not_default'] = r[1];
        FullHalfCore.table[FullHalfCore.FULL_WIDTH]['not_default'] = r[0];
        //console.log(table);
        function fn(v) {
            let r = [];
            r[0] = {};
            r[1] = {};
            let _skip = true;
            if (Array.isArray(v)) {
                if (v.length == 2) {
                    r[0].from = v[0];
                    r[0].to = v[1];
                }
                else {
                    r[0].values = v;
                }
                _skip = false;
            }
            if (v.from && v.to) {
                r[0].from = v.from;
                r[0].to = v.to;
                _skip = false;
            }
            if (Array.isArray(v.values) && v.values.length) {
                r[0].values = v.values;
                _skip = false;
            }
            if (_skip) {
                return;
            }
            if (r[0].from && r[0].to) {
                r[1].from = toFullWidth(r[0].from);
                r[1].to = toFullWidth(r[0].to);
            }
            if (r[0].values) {
                r[1].values = r[0].values.reduce(function (a, code) {
                    a.push(toFullWidth(code));
                    return a;
                }, []);
            }
            return r;
        }
    }
    function filterTable(data) {
        let _a = [];
        if (data.from && data.to) {
            for (let i = data.from; i <= data.to; i++) {
                _a.push(i);
            }
        }
        if (data.values) {
            _a = _a.concat(data.values);
        }
        if (Array.isArray(data.not) && data.not.length) {
            _a = _a.filter(function (charCode) {
                for (let d of data.not) {
                    if (_chkType(charCode, d)) {
                        return false;
                    }
                }
                return true;
            });
        }
        return _a;
    }
    FullHalfCore.filterTable = filterTable;
    function _chkType(charCode, data) {
        if (data.from && data.to && data.from <= charCode && charCode <= data.to) {
            return true;
        }
        else if (data.values && data.values.includes(charCode)) {
            return true;
        }
    }
    FullHalfCore._chkType = _chkType;
    function chkType(charCode, key, type) {
        let data = FullHalfCore.table[type][key];
        //console.log(charCode, data);
        if (Array.isArray(data.not) && data.not.length) {
            for (let d of data.not) {
                if (_chkType(charCode, d)) {
                    return false;
                }
            }
        }
        if (_chkType(charCode, data)) {
            return true;
        }
    }
    FullHalfCore.chkType = chkType;
    function hasFullHalf(charCode) {
        if (0x0020 <= charCode && charCode < 0x007F) {
            return FullHalfCore.HALF_WIDTH;
        }
        if (0x3000 === charCode || 0xFF00 < charCode && charCode < 0xFF5F) {
            return FullHalfCore.FULL_WIDTH;
        }
        return FullHalfCore.NO_EXIST;
    }
    FullHalfCore.hasFullHalf = hasFullHalf;
    function isFullHalf(charCode) {
        let r = hasFullHalf(charCode);
        if (r === FullHalfCore.FULL_WIDTH) {
            return true;
        }
        else if (r === FullHalfCore.HALF_WIDTH) {
            return false;
        }
        else {
            // @todo add more...
        }
        return null;
    }
    FullHalfCore.isFullHalf = isFullHalf;
    function toFullWidth(charCode) {
        if (0x0020 < charCode && charCode < 0x007F) {
            return 0xFF00 + (charCode - 0x0020);
        }
        if (0x0020 === charCode) {
            return 0x3000;
        }
        return charCode;
    }
    FullHalfCore.toFullWidth = toFullWidth;
    function toHalfWidth(charCode) {
        if (0xFF00 < charCode && charCode < 0xFF5F) {
            return 0x0020 + (charCode - 0xFF00);
        }
        if (0x3000 === charCode) {
            return 0x0020;
        }
        return charCode;
    }
    FullHalfCore.toHalfWidth = toHalfWidth;
    function _optionsType(data) {
        if (data) {
            if (typeof data.exists == 'boolean') {
                for (let key in FullHalfCore.table[0]) {
                    if (key.indexOf('default') == 0) {
                        continue;
                    }
                    if (data[key] !== false) {
                        data[key] = data.exists;
                    }
                }
                delete data.exists;
            }
            else {
                if (typeof data.default == 'boolean') {
                    for (let key of FullHalfCore.tableDefaultInclude) {
                        if (data[key] !== false) {
                            data[key] = data.default;
                        }
                    }
                    delete data.default;
                }
                if (typeof data.not_default2 == 'boolean') {
                    data.both = data.space = data.not_default2;
                    delete data.not_default2;
                }
                if (typeof data.both == 'boolean') {
                    data.number = data.eng = data.both;
                    delete data.both;
                }
                if (typeof data.eng == 'boolean') {
                    data['a-z'] = data['A-Z'] = data.eng;
                    delete data.eng;
                }
            }
        }
        return data;
    }
    FullHalfCore._optionsType = _optionsType;
    function process(str, charProcess, options) {
        let ret = [];
        options.skip = _optionsType(options.skip);
        options.only = _optionsType(options.only);
        //console.log(options);
        let _str = Array.isArray(str) ? str : str.toString();
        for (let char of _str) {
            let _skip;
            // @ts-ignore
            let charCode = typeof char == 'number' ? char : char.charCodeAt();
            if (options.only) {
                _skip = true;
                for (let key in options.only) {
                    //console.log(char, charCode, [key], chkType(charCode, key, options.type));
                    if (options.only[key] && chkType(charCode, key, options.type)) {
                        _skip = false;
                        break;
                    }
                }
                //console.log(char, charCode, _skip);
            }
            if (!_skip && options.skip) {
                for (let key in options.skip) {
                    if (options.skip[key] && chkType(charCode, key, options.type)) {
                        _skip = true;
                        break;
                    }
                }
            }
            if (_skip) {
                ret.push(charCode);
                continue;
            }
            ret.push(charProcess(charCode));
        }
        if (options.returnType) {
            return ret;
        }
        return String.fromCharCode.apply(String, ret);
    }
    FullHalfCore.process = process;
    function factory(charProcessor, type, overwriteOptions) {
        //const deepmerge = require('deepmerge');
        return (str, options) => {
            options = deepmerge.all([
                {}, options || {}, overwriteOptions || {}, {
                    type: type,
                },
            ]);
            //console.log(options);
            return process(str, charProcessor, options);
        };
    }
    FullHalfCore.factory = factory;
})(FullHalfCore = exports.FullHalfCore || (exports.FullHalfCore = {}));
let typeOnly = {
    only: {
        number: true,
    },
};
exports.toFullNumber = FullHalfCore.factory(FullHalfCore.toFullWidth, FullHalfCore.FULL_WIDTH, typeOnly);
exports.toHalfNumber = FullHalfCore.factory(FullHalfCore.toHalfWidth, FullHalfCore.HALF_WIDTH, typeOnly);
typeOnly = {
    only: {
        eng: true,
    },
};
exports.toFullEnglish = FullHalfCore.factory(FullHalfCore.toFullWidth, FullHalfCore.FULL_WIDTH, typeOnly);
exports.toHalfEnglish = FullHalfCore.factory(FullHalfCore.toHalfWidth, FullHalfCore.HALF_WIDTH, typeOnly);
typeOnly = {
    only: {
        default: true,
    },
};
exports.toFullWidth = FullHalfCore.factory(FullHalfCore.toFullWidth, FullHalfCore.FULL_WIDTH, typeOnly);
exports.toHalfWidth = FullHalfCore.factory(FullHalfCore.toHalfWidth, FullHalfCore.HALF_WIDTH, typeOnly);
const self = require("./fullhalf");
exports.default = self;
//console.log(toFullEnglish('123abcABCＡＢＣ１２３／＊－＋＝－０］［’；／．+-*/=-09][\'";/.'));
//console.log(toHalfEnglish('123abcABCＡＢＣ１２３／＊－＋＝－０］［’；／．+-*/=-09][\'";/.'));
//console.log(toFullNumber('123abcABCＡＢＣ１２３／＊－＋＝－０］［’；／．+-*/=-09][\'";/.'));
//console.log(toHalfNumber('123abcABCＡＢＣ１２３／＊－＋＝－０］［’；／．+-*/=-09][\'";/.'));
