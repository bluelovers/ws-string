import { toFullWidthCharCode as e, toHalfWidthCharCode as t } from "@lazy-cjk/fullhalf-char-code";

import o from "uni-string";

import { all as r } from "deepmerge";

import { tableFullHalf as n, tableFullHalfDefaultInclude as f } from "@lazy-cjk/fullhalf-data";

let l = {
  only: {
    number: !0
  }
};

const i = factory(e, 1, l), y = factory(t, 0, l);

l = {
  only: {
    eng: !0
  }
};

const a = factory(e, 1, l), p = factory(t, 0, l);

l = {
  only: {
    default: !0
  }
};

const c = factory(e, 1, l), u = factory(t, 0, l);

function _optionsType(e) {
  if (e) if ("boolean" == typeof e.exists) {
    for (let t in n[0]) 0 != t.indexOf("default") && !1 !== e[t] && (e[t] = e.exists);
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
  let r = n[o][t];
  if (Array.isArray(r.not) && r.not.length) for (let t of r.not) if (_chkType(e, t)) return !1;
  if (_chkType(e, r)) return !0;
}

function process(e, t, r) {
  let n = [];
  r.skip = _optionsType(r.skip), r.only = _optionsType(r.only);
  let f = Array.isArray(e) ? e : new o(e);
  for (let e of f) {
    let o, f = "number" == typeof e ? e : e.codePointAt();
    if (r.only) {
      o = !0;
      for (let e in r.only) if (r.only[e] && chkType(f, e, r.type)) {
        o = !1;
        break;
      }
    }
    if (!o && r.skip) for (let e in r.skip) if (r.skip[e] && chkType(f, e, r.type)) {
      o = !0;
      break;
    }
    n.push(o ? f : t(f));
  }
  return r.returnType ? n : String.fromCodePoint.apply(String, n);
}

function factory(e, t, o) {
  return (n, f) => (f = r([ {}, f || {}, o || {}, {
    type: t
  } ]), process(n, e, f));
}

function _filterTable(e) {
  let t = [];
  if (e.from && e.to) for (let o = e.from; o <= e.to; o++) t.push(o);
  return e.values && (t = t.concat(e.values)), Array.isArray(e.not) && e.not.length && (t = t.filter((function(t) {
    for (let o of e.not) if (_chkType(t, o)) return !1;
    return !0;
  }))), t;
}

export { _chkType, _filterTable, _optionsType, chkType, factory, process, a as toFullEnglish, i as toFullNumber, c as toFullWidth, p as toHalfEnglish, y as toHalfNumber, u as toHalfWidth };
//# sourceMappingURL=index.esm.mjs.map
