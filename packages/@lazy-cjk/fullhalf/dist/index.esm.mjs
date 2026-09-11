import { EnumFullHalfTableType as e, toFullWidthCharCode as t, toHalfWidthCharCode as o } from "@lazy-cjk/fullhalf-char-code";

import r from "uni-string";

import { all as n } from "deepmerge";

import { tableFullHalf as l, tableFullHalfDefaultInclude as f } from "@lazy-cjk/fullhalf-data";

let i = {
  only: {
    number: !0
  }
};

const a = /*#__PURE__*/ factory(t, e.FULL_WIDTH, i), y = /*#__PURE__*/ factory(o, e.HALF_WIDTH, i);

i = {
  only: {
    eng: !0
  }
};

const p = /*#__PURE__*/ factory(t, e.FULL_WIDTH, i), u = /*#__PURE__*/ factory(o, e.HALF_WIDTH, i);

i = {
  only: {
    default: !0
  }
};

const c = /*#__PURE__*/ factory(t, e.FULL_WIDTH, i), s = /*#__PURE__*/ factory(o, e.HALF_WIDTH, i);

function _optionsType(e) {
  if (e) if ("boolean" == typeof e.exists) {
    for (let t in l[0]) 0 != t.indexOf("default") && !1 !== e[t] && (e[t] = e.exists);
    delete e.exists;
  } else {
    if ("boolean" == typeof e.default) {
      for (let t of f) !1 !== e[t] && (e[t] = e.default);
      delete e.default;
    }
    "boolean" == typeof e.not_default2 && (e.both = e.space = e.not_default2, delete e.not_default2), 
    "boolean" == typeof e.both && (e.number = e.eng = e.both, delete e.both), "boolean" == typeof e.eng && (e["a-z"] = e["A-Z"] = e.eng, 
    delete e.eng);
  }
  return e;
}

function _chkType(e, t) {
  var o;
  return !!(t.from && t.to && t.from <= e && e <= t.to) || !(null === (o = t.values) || void 0 === o || !o.includes(e)) || void 0;
}

function chkType(e, t, o) {
  let r = l[o][t];
  if (Array.isArray(r.not) && r.not.length) for (let t of r.not) if (_chkType(e, t)) return !1;
  if (_chkType(e, r)) return !0;
}

function process(e, t, o) {
  let n = [];
  o.skip = _optionsType(o.skip), o.only = _optionsType(o.only);
  let l = Array.isArray(e) ? e : new r(e);
  for (let e of l) {
    let r, l = "number" == typeof e ? e : e.codePointAt();
    if (o.only) {
      r = !0;
      for (let e in o.only) if (o.only[e] && chkType(l, e, o.type)) {
        r = !1;
        break;
      }
    }
    if (!r && o.skip) for (let e in o.skip) if (o.skip[e] && chkType(l, e, o.type)) {
      r = !0;
      break;
    }
    n.push(r ? l : t(l));
  }
  return o.returnType ? n : String.fromCodePoint.apply(String, n);
}

function factory(e, t, o) {
  return (r, l) => (l = n([ {}, l || {}, o || {}, {
    type: t
  } ]), process(r, e, l));
}

function _filterTable(e) {
  let t = [];
  if (e.from && e.to) for (let o = e.from; o <= e.to; o++) t.push(o);
  return e.values && (t = t.concat(e.values)), Array.isArray(e.not) && e.not.length && (t = t.filter(function(t) {
    for (let o of e.not) if (_chkType(t, o)) return !1;
    return !0;
  })), t;
}

var d = {
  toFullNumber: a,
  toHalfNumber: y,
  toFullEnglish: p,
  toHalfEnglish: u,
  toFullWidth: c,
  toHalfWidth: s
};

export { _chkType, _filterTable, _optionsType, chkType, d as default, factory, process, p as toFullEnglish, a as toFullNumber, c as toFullWidth, u as toHalfEnglish, y as toHalfNumber, s as toHalfWidth };
//# sourceMappingURL=index.esm.mjs.map
