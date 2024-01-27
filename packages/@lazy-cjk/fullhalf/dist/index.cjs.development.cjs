'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fullhalfCharCode = require('@lazy-cjk/fullhalf-char-code');
var UString = require('uni-string');
var deepmerge = require('deepmerge');
var fullhalfData = require('@lazy-cjk/fullhalf-data');

let typeOnly = {
  only: {
    number: true
  }
};
const toFullNumber = /*#__PURE__*/factory(fullhalfCharCode.toFullWidthCharCode, 1 /* EnumFullHalfTableType.FULL_WIDTH */, typeOnly);
const toHalfNumber = /*#__PURE__*/factory(fullhalfCharCode.toHalfWidthCharCode, 0 /* EnumFullHalfTableType.HALF_WIDTH */, typeOnly);
typeOnly = {
  only: {
    eng: true
  }
};
const toFullEnglish = /*#__PURE__*/factory(fullhalfCharCode.toFullWidthCharCode, 1 /* EnumFullHalfTableType.FULL_WIDTH */, typeOnly);
const toHalfEnglish = /*#__PURE__*/factory(fullhalfCharCode.toHalfWidthCharCode, 0 /* EnumFullHalfTableType.HALF_WIDTH */, typeOnly);
typeOnly = {
  only: {
    default: true
  }
};
const toFullWidth = /*#__PURE__*/factory(fullhalfCharCode.toFullWidthCharCode, 1 /* EnumFullHalfTableType.FULL_WIDTH */, typeOnly);
const toHalfWidth = /*#__PURE__*/factory(fullhalfCharCode.toHalfWidthCharCode, 0 /* EnumFullHalfTableType.HALF_WIDTH */, typeOnly);
function _optionsType(data) {
  if (data) {
    if (typeof data.exists === 'boolean') {
      for (let key in fullhalfData.tableFullHalf[0]) {
        if (key.indexOf('default') == 0) {
          continue;
        }
        if (data[key] !== false) {
          data[key] = data.exists;
        }
      }
      delete data.exists;
    } else {
      if (typeof data.default === 'boolean') {
        for (let key of fullhalfData.tableFullHalfDefaultInclude) {
          if (data[key] !== false) {
            data[key] = data.default;
          }
        }
        delete data.default;
      }
      if (typeof data.not_default2 === 'boolean') {
        data.both = data.space = data.not_default2;
        delete data.not_default2;
      }
      if (typeof data.both === 'boolean') {
        data.number = data.eng = data.both;
        delete data.both;
      }
      if (typeof data.eng === 'boolean') {
        data['a-z'] = data['A-Z'] = data.eng;
        delete data.eng;
      }
    }
  }
  return data;
}
function _chkType(charCode, data) {
  var _data$values;
  if (data.from && data.to && data.from <= charCode && charCode <= data.to) {
    return true;
  } else if ((_data$values = data.values) !== null && _data$values !== void 0 && _data$values.includes(charCode)) {
    return true;
  }
}
function chkType(charCode, key, type) {
  let data = fullhalfData.tableFullHalf[type][key];
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
//@ts-ignore
function process(str, charProcess, options) {
  let ret = [];
  options.skip = _optionsType(options.skip);
  options.only = _optionsType(options.only);
  let _str = Array.isArray(str) ? str : new UString(str);
  for (let char of _str) {
    let _skip;
    // @ts-ignore
    let charCode = typeof char == 'number' ? char : char.codePointAt();
    if (options.only) {
      _skip = true;
      for (let key in options.only) {
        if (options.only[key] && chkType(charCode, key, options.type)) {
          _skip = false;
          break;
        }
      }
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
  return String.fromCodePoint.apply(String, ret);
}
function factory(charProcessor, type, overwriteOptions) {
  // @ts-ignore
  return (str, options) => {
    options = deepmerge.all([{}, options || {}, overwriteOptions || {}, {
      type: type
    }]);
    return process(str, charProcessor, options);
  };
}
function _filterTable(data) {
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
var index = {
  toFullNumber,
  toHalfNumber,
  toFullEnglish,
  toHalfEnglish,
  toFullWidth,
  toHalfWidth
};

exports._chkType = _chkType;
exports._filterTable = _filterTable;
exports._optionsType = _optionsType;
exports.chkType = chkType;
exports.default = index;
exports.factory = factory;
exports.process = process;
exports.toFullEnglish = toFullEnglish;
exports.toFullNumber = toFullNumber;
exports.toFullWidth = toFullWidth;
exports.toHalfEnglish = toHalfEnglish;
exports.toHalfNumber = toHalfNumber;
exports.toHalfWidth = toHalfWidth;
//# sourceMappingURL=index.cjs.development.cjs.map
