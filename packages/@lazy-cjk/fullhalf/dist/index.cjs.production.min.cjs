"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var e = require("@lazy-cjk/fullhalf-char-code"), t = require("uni-string"), o = require("deepmerge"), r = require("@lazy-cjk/fullhalf-data");

let l = {
  only: {
    number: !0
  }
};

const n = factory(e.toFullWidthCharCode, 1, l), f = factory(e.toHalfWidthCharCode, 0, l);

l = {
  only: {
    eng: !0
  }
};

const a = factory(e.toFullWidthCharCode, 1, l), i = factory(e.toHalfWidthCharCode, 0, l);

l = {
  only: {
    default: !0
  }
};

const p = factory(e.toFullWidthCharCode, 1, l), u = factory(e.toHalfWidthCharCode, 0, l);

function _optionsType(e) {
  if (e) if ("boolean" == typeof e.exists) {
    for (let t in r.tableFullHalf[0]) 0 != t.indexOf("default") && !1 !== e[t] && (e[t] = e.exists);
    delete e.exists;
  } else {
    if ("boolean" == typeof e.default) {
      for (let t of r.tableFullHalfDefaultInclude) !1 !== e[t] && (e[t] = e.default);
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
  let l = r.tableFullHalf[o][t];
  if (Array.isArray(l.not) && l.not.length) for (let t of l.not) if (_chkType(e, t)) return !1;
  if (_chkType(e, l)) return !0;
}

function process(e, o, r) {
  let l = [];
  r.skip = _optionsType(r.skip), r.only = _optionsType(r.only);
  let n = Array.isArray(e) ? e : new t(e);
  for (let e of n) {
    let t, n = "number" == typeof e ? e : e.codePointAt();
    if (r.only) {
      t = !0;
      for (let e in r.only) if (r.only[e] && chkType(n, e, r.type)) {
        t = !1;
        break;
      }
    }
    if (!t && r.skip) for (let e in r.skip) if (r.skip[e] && chkType(n, e, r.type)) {
      t = !0;
      break;
    }
    l.push(t ? n : o(n));
  }
  return r.returnType ? l : String.fromCodePoint.apply(String, l);
}

function factory(e, t, r) {
  return (l, n) => (n = o.all([ {}, n || {}, r || {}, {
    type: t
  } ]), process(l, e, n));
}

exports._chkType = _chkType, exports._filterTable = function _filterTable(e) {
  let t = [];
  if (e.from && e.to) for (let o = e.from; o <= e.to; o++) t.push(o);
  return e.values && (t = t.concat(e.values)), Array.isArray(e.not) && e.not.length && (t = t.filter((function(t) {
    for (let o of e.not) if (_chkType(t, o)) return !1;
    return !0;
  }))), t;
}, exports._optionsType = _optionsType, exports.chkType = chkType, exports.factory = factory, 
exports.process = process, exports.toFullEnglish = a, exports.toFullNumber = n, 
exports.toFullWidth = p, exports.toHalfEnglish = i, exports.toHalfNumber = f, exports.toHalfWidth = u;
//# sourceMappingURL=index.cjs.production.min.cjs.map
