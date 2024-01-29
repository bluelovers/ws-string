"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var e = require("@lazy-cjk/japanese"), n = require("chinese-parseint2");

const t = {
  one: !0
};

function zh2num(r, s = {}) {
  var i;
  s = Object.assign({}, t, s);
  let a = [], u = !0, c = e.transcriptionConfigs, o = e.predefineedTranscriptionConfigs;
  for (let e of [ "digits", "unitNames" ]) if (Array.isArray(s[e]) && s[e].length) for (let n of s[e]) o[e][n] && (a = a.concat(Object.values(o[e][n])));
  if ("number" == typeof s.truncateOne) for (let e in c.default.truncateOne) e < s.truncateOne && a.push(c.default.truncateOne[e]); else void 0 !== s.truncateOne && !0 !== s.truncateOne || !a.length || (a = a.concat(Object.values(c.default.truncateOne)));
  s.chars && (a = a.concat(Array.isArray(s.chars) ? s.chars : s.chars.split(""))), 
  a.length && (u = !1), a.filter((function(e) {
    return 1 === e.length && e in n.characters;
  })), u && (a = Object.keys(n.characters)), (i = s).flags || (i.flags = "u"), s.unsafe && (s.flags += "g");
  let f = a.join(""), p = r.toString();
  if (!new RegExp("([^" + f + "])").test(p)) return _chinese_parseInt(p, s);
  if (s.strict) return Number.NaN;
  let l = new RegExp("([" + f + "]+)", s.flags);
  return p.replace(l, (function(...e) {
    return _chinese_parseInt(e[1], s);
  })).toString();
}

const r = /([佰百])([一二三四五六七八九壹貳參肆伍陸柒捌玖])(?![零○〇一二三四五六七八九壹貳參肆伍陸柒捌玖拾十什])/;

function _chinese_parseInt(e, t = {}) {
  t.one && (e = e.replace(r, "$1〇$2"));
  let s = n.chinese_parseInt(e);
  return t.string && (s = s.toString()), s;
}

function num2zh(n, t = {}) {
  let r = parseInt(n);
  if (Number.isNaN(r) || null != t && t.strict && ("number" != typeof n || r !== n)) throw new TypeError(`${n} is not valid allow number`);
  return e.transcribeNumber(r, t);
}

var s = {
  zh2num,
  num2zh
};

Object.defineProperty(exports, "predefineedTranscriptionConfigs", {
  enumerable: !0,
  get: function() {
    return e.predefineedTranscriptionConfigs;
  }
}), Object.defineProperty(exports, "transcriptionConfigs", {
  enumerable: !0,
  get: function() {
    return e.transcriptionConfigs;
  }
}), exports._chinese_parseInt = _chinese_parseInt, exports.default = s, exports.defaultOptions = t, 
exports.num2zh = num2zh, exports.zh2num = zh2num;
//# sourceMappingURL=index.cjs.production.min.cjs.map
