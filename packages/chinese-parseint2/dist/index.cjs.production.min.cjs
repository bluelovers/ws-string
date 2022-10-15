"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

const e = Object.freeze({
  "０": 0,
  零: 0,
  "○": 0,
  〇: 0,
  洞: 0,
  "１": 1,
  一: 1,
  壹: 1,
  ㄧ: 1,
  弌: 1,
  么: 1,
  "２": 2,
  二: 2,
  貳: 2,
  贰: 2,
  弍: 2,
  兩: 2,
  两: 2,
  "３": 3,
  三: 3,
  參: 3,
  叁: 3,
  弎: 3,
  参: 3,
  叄: 3,
  "４": 4,
  四: 4,
  肆: 4,
  䦉: 4,
  刀: 4,
  "５": 5,
  五: 5,
  伍: 5,
  "６": 6,
  六: 6,
  陸: 6,
  陆: 6,
  "７": 7,
  七: 7,
  柒: 7,
  拐: 7,
  "８": 8,
  八: 8,
  捌: 8,
  杯: 8,
  "９": 9,
  九: 9,
  玖: 9,
  勾: 9,
  十: 10,
  拾: 10,
  什: 10,
  呀: 10,
  百: 100,
  佰: 100,
  千: 1000,
  仟: 1000,
  念: 20,
  廿: 20,
  卅: 30,
  卌: 40,
  皕: 200,
  萬: 1e+4,
  万: 1e+4,
  億: 1e+8,
  亿: 1e+8,
  兆: 1e+12,
  京: 1e+16,
  經: 1e+16,
  经: 1e+16,
  垓: 1e+20,
  秭: 1e+24,
  杼: 1e+24,
  穰: 1e+28,
  壤: 1e+28,
  溝: 1e+32,
  沟: 1e+32,
  澗: 1e+36,
  涧: 1e+36,
  正: 1e+40,
  載: 1e+44,
  極: 1e+48
});

function _isNegative(e) {
  return /^[負负-]/.test(e);
}

function getSpecialCharVal(t) {
  return e[t];
}

function chinese_parseInt(e, t) {
  const r = parseInt(e, t);
  return isNaN(r) ? "string" != typeof e ? NaN : _chineseParseIntCore(e = e.replace(/[\s　]+/g, "")) : r;
}

function _chineseParseIntCore(e) {
  const t = _isNegative(e);
  let r;
  t && (e = e.slice(1));
  let a = 0, n = 0, s = -1;
  for (let t = 0; t < e.length; ++t) {
    if (r = getSpecialCharVal(e.charAt(t)), void 0 === r) return NaN;
    r < 10 ? s = -1 == s ? r : 10 * s + r : r < 1e+4 ? (-1 == s && (s = 1), t > 1 && 0 == s && 100 != getSpecialCharVal(e.charAt(t - 2)) && (s = 1), 
    n += s * r, s = -1) : (-1 != s && (n += s), t && getSpecialCharVal(e.charAt(t - 1)) >= 1e+4 ? a *= getSpecialCharVal(e.charAt(t)) : a += n * r, 
    n = 0, s = -1);
  }
  return s > 0 && (e.length > 1 ? (r = getSpecialCharVal(e.charAt(e.length - 2)), 
  r < 100 ? n += s : (r /= r.toString().charAt(0), n += s * (r / 10))) : n += s), 
  a += n, t && (a *= -1), a;
}

exports._chineseParseIntCore = _chineseParseIntCore, exports._isNegative = _isNegative, 
exports.characters = e, exports.chinese_parseInt = chinese_parseInt, exports.default = chinese_parseInt, 
exports.getSpecialCharVal = getSpecialCharVal, exports.isSpecialCharVal = function isSpecialCharVal(e) {
  return "number" == typeof getSpecialCharVal(e);
};
//# sourceMappingURL=index.cjs.production.min.cjs.map
