import { transcribeNumber as e, transcriptionConfigs as n, predefineedTranscriptionConfigs as t } from "@lazy-cjk/japanese";

export { predefineedTranscriptionConfigs, transcriptionConfigs } from "@lazy-cjk/japanese";

import { characters as r, chinese_parseInt as a } from "chinese-parseint2";

const s = {
  one: !0
};

function zh2num(e, a = {}) {
  var i;
  a = Object.assign({}, s, a);
  let u = [], c = !0, o = n, l = t;
  for (let e of [ "digits", "unitNames" ]) if (Array.isArray(a[e]) && a[e].length) for (let n of a[e]) l[e][n] && (u = u.concat(Object.values(l[e][n])));
  if ("number" == typeof a.truncateOne) for (let e in o.default.truncateOne) e < a.truncateOne && u.push(o.default.truncateOne[e]); else void 0 !== a.truncateOne && !0 !== a.truncateOne || !u.length || (u = u.concat(Object.values(o.default.truncateOne)));
  a.chars && (u = u.concat(Array.isArray(a.chars) ? a.chars : a.chars.split(""))), 
  u.length && (c = !1), u.filter((function(e) {
    return 1 === e.length && e in r;
  })), c && (u = Object.keys(r)), (i = a).flags || (i.flags = "u"), a.unsafe && (a.flags += "g");
  let f = u.join(""), p = e.toString();
  if (!new RegExp("([^" + f + "])").test(p)) return _chinese_parseInt(p, a);
  if (a.strict) return Number.NaN;
  let h = new RegExp("([" + f + "]+)", a.flags);
  return p.replace(h, (function(...e) {
    return _chinese_parseInt(e[1], a);
  })).toString();
}

const i = /([佰百])([一二三四五六七八九壹貳參肆伍陸柒捌玖])(?![零○〇一二三四五六七八九壹貳參肆伍陸柒捌玖拾十什])/;

function _chinese_parseInt(e, n = {}) {
  n.one && (e = e.replace(i, "$1〇$2"));
  let t = a(e);
  return n.string && (t = t.toString()), t;
}

function num2zh(n, t = {}) {
  let r = parseInt(n);
  if (Number.isNaN(r) || null != t && t.strict && ("number" != typeof n || r !== n)) throw new TypeError(`${n} is not valid allow number`);
  return e(r, t);
}

var u = {
  zh2num,
  num2zh
};

export { _chinese_parseInt, u as default, s as defaultOptions, num2zh, zh2num };
//# sourceMappingURL=index.esm.mjs.map
