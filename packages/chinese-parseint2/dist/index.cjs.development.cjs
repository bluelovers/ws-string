'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const characters = /*#__PURE__*/Object.freeze({
  "０": 0,
  "零": 0,
  "○": 0,
  "〇": 0,
  "洞": 0,
  "１": 1,
  "一": 1,
  "壹": 1,
  "ㄧ": 1,
  "弌": 1,
  "么": 1,
  "２": 2,
  "二": 2,
  "貳": 2,
  "贰": 2,
  "弍": 2,
  "兩": 2,
  "两": 2,
  "３": 3,
  "三": 3,
  "參": 3,
  "叁": 3,
  "弎": 3,
  "参": 3,
  "叄": 3,
  "４": 4,
  "四": 4,
  "肆": 4,
  "䦉": 4,
  "刀": 4,
  "５": 5,
  "五": 5,
  "伍": 5,
  "６": 6,
  "六": 6,
  "陸": 6,
  "陆": 6,
  "７": 7,
  "七": 7,
  "柒": 7,
  "拐": 7,
  "８": 8,
  "八": 8,
  "捌": 8,
  "杯": 8,
  "９": 9,
  "九": 9,
  "玖": 9,
  "勾": 9,
  "十": 10,
  "拾": 10,
  "什": 10,
  "呀": 10,
  "百": 100,
  "佰": 100,
  "千": 1000,
  "仟": 1000,
  "念": 20,
  "廿": 20,
  "卅": 30,
  "卌": 40,
  "皕": 200,
  "萬": 1e+4,
  "万": 1e+4,
  "億": 1e+8,
  "亿": 1e+8,
  "兆": 1e+12,
  "京": 1e+16,
  "經": 1e+16,
  "经": 1e+16,
  "垓": 1e+20,
  "秭": 1e+24,
  "杼": 1e+24,
  "穰": 1e+28,
  "壤": 1e+28,
  "溝": 1e+32,
  "沟": 1e+32,
  "澗": 1e+36,
  "涧": 1e+36,
  "正": 1e+40,
  "載": 1e+44,
  "極": 1e+48
});

function _isNegative(str) {
  return /^[負负-]/.test(str);
}
function isSpecialCharVal(char) {
  return typeof getSpecialCharVal(char) === 'number';
}
function getSpecialCharVal(char) {
  return characters[char];
}
function chinese_parseInt(str, radix) {
  const result = parseInt(str, radix);
  if (!isNaN(result)) return result;
  if (typeof str !== "string") return NaN;
  str = str.replace(/[\s　]+/g, "");
  return _chineseParseIntCore(str);
}
function _chineseParseIntCore(str) {
  const negative = _isNegative(str);
  if (negative) str = str.slice(1);
  let charVal;
  let result = 0;
  let partialSum = 0;
  let digit = -1;
  for (let i = 0; i < str.length; ++i) {
    charVal = getSpecialCharVal(str.charAt(i));
    if (charVal === undefined) return NaN;
    if (charVal < 10) {
      digit = digit == -1 ? charVal : digit * 10 + charVal;
    } else if (charVal < 1e+4) {
      if (digit == -1) digit = 1;
      if (i > 1 && digit == 0 && getSpecialCharVal(str.charAt(i - 2)) != 100) {
        digit = 1;
      }
      partialSum += digit * charVal;
      digit = -1;
    } else {
      if (digit != -1) partialSum += digit;
      if (i && getSpecialCharVal(str.charAt(i - 1)) >= 1e+4) {
        result *= getSpecialCharVal(str.charAt(i));
      } else {
        result += partialSum * charVal;
      }
      partialSum = 0;
      digit = -1;
    }
  }
  if (digit > 0) {
    if (str.length > 1) {
      charVal = getSpecialCharVal(str.charAt(str.length - 2));
      if (charVal < 100) {
        partialSum += digit;
      } else {
        charVal /= charVal.toString().charAt(0);
        partialSum += digit * (charVal / 10);
      }
    } else {
      partialSum += digit;
    }
  }
  result += partialSum;
  if (negative) result *= -1;
  return result;
}

exports._chineseParseIntCore = _chineseParseIntCore;
exports._isNegative = _isNegative;
exports.characters = characters;
exports.chinese_parseInt = chinese_parseInt;
exports.default = chinese_parseInt;
exports.getSpecialCharVal = getSpecialCharVal;
exports.isSpecialCharVal = isSpecialCharVal;
//# sourceMappingURL=index.cjs.development.cjs.map
