'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var japanese = require('@lazy-cjk/japanese');
var chineseParseint2 = require('chinese-parseint2');

const defaultOptions = {
  one: true
};
function zh2num(str, options = {}) {
  var _options;
  options = Object.assign({}, defaultOptions, options);
  let sa = [];
  let do_def = true;
  let jtc = japanese.transcriptionConfigs;
  let jpc = japanese.predefineedTranscriptionConfigs;
  for (let id of ['digits', 'unitNames']) {
    if (Array.isArray(options[id]) && options[id].length) {
      for (let d of options[id]) {
        // @ts-ignore
        if (jpc[id][d]) {
          // @ts-ignore
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
  } else if ((typeof options.truncateOne === 'undefined' || options.truncateOne === true) && sa.length) {
    sa = sa.concat(Object.values(jtc.default.truncateOne));
  }
  if (options.chars) {
    sa = sa.concat(Array.isArray(options.chars) ? options.chars : options.chars.split(''));
  }
  if (sa.length) {
    do_def = false;
  }
  sa.filter(function (value) {
    if (value.length === 1 && value in chineseParseint2.characters) {
      return true;
    }
    return false;
  });
  if (do_def) {
    sa = Object.keys(chineseParseint2.characters);
  }
  (_options = options).flags || (_options.flags = 'u');
  if (options.unsafe) {
    options.flags += 'g';
  }
  let rs = sa.join('');
  let s = str.toString();
  if (!new RegExp('([^' + rs + '])').test(s)) {
    return _chinese_parseInt(s, options);
  } else if (options.strict) {
    return Number.NaN;
  }
  let r = new RegExp('([' + rs + ']+)', options.flags);
  // @ts-ignore
  return s.replace(r, function (...m) {
    return _chinese_parseInt(m[1], options);
  }).toString();
}
const reChineseParseIntOne = /([佰百])([一二三四五六七八九壹貳參肆伍陸柒捌玖])(?![零○〇一二三四五六七八九壹貳參肆伍陸柒捌玖拾十什])/;
function _chinese_parseInt(str, options = {}) {
  if (options.one) {
    str = str.replace(reChineseParseIntOne, '$1〇$2');
  }
  let ret = chineseParseint2.chinese_parseInt(str);
  if (options.string) {
    // @ts-ignore
    ret = ret.toString();
  }
  return ret;
}
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
  if (Number.isNaN(d) || options !== null && options !== void 0 && options.strict && (typeof number !== 'number' || d !== number)) {
    throw new TypeError(`${number} is not valid allow number`);
  }
  return japanese.transcribeNumber(d, options);
}
var index = {
  zh2num,
  num2zh
};

Object.defineProperty(exports, 'predefineedTranscriptionConfigs', {
	enumerable: true,
	get: function () { return japanese.predefineedTranscriptionConfigs; }
});
Object.defineProperty(exports, 'transcriptionConfigs', {
	enumerable: true,
	get: function () { return japanese.transcriptionConfigs; }
});
exports._chinese_parseInt = _chinese_parseInt;
exports.default = index;
exports.defaultOptions = defaultOptions;
exports.num2zh = num2zh;
exports.zh2num = zh2num;
//# sourceMappingURL=index.cjs.development.cjs.map
