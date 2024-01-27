"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var e = require("@lazy-cjk/fullhalf-char-code"), t = require("uni-string"), o = require("deepmerge"), l = require("@lazy-cjk/fullhalf-data");

let r = {
  only: {
    number: !0
  }
};

const n = factory(e.toFullWidthCharCode, 1, r), f = factory(e.toHalfWidthCharCode, 0, r);

r = {
  only: {
    eng: !0
  }
};

const a = factory(e.toFullWidthCharCode, 1, r), i = factory(e.toHalfWidthCharCode, 0, r);

r = {
  only: {
    default: !0
  }
};

const u = factory(e.toFullWidthCharCode, 1, r), p = factory(e.toHalfWidthCharCode, 0, r);

function _optionsType(e) {
  if (e) if ("boolean" == typeof e.exists) {
    for (let t in l.tableFullHalf[0]) 0 != t.indexOf("default") && !1 !== e[t] && (e[t] = e.exists);
    delete e.exists;
  } else {
    if ("boolean" == typeof e.default) {
      for (let t of l.tableFullHalfDefaultInclude) !1 !== e[t] && (e[t] = e.default);
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
  let r = l.tableFullHalf[o][t];
  if (Array.isArray(r.not) && r.not.length) for (let t of r.not) if (_chkType(e, t)) return !1;
  if (_chkType(e, r)) return !0;
}

function process(e, o, l) {
  let r = [];
  l.skip = _optionsType(l.skip), l.only = _optionsType(l.only);
  let n = Array.isArray(e) ? e : new t(e);
  for (let e of n) {
    let t, n = "number" == typeof e ? e : e.codePointAt();
    if (l.only) {
      t = !0;
      for (let e in l.only) if (l.only[e] && chkType(n, e, l.type)) {
        t = !1;
        break;
      }
    }
    if (!t && l.skip) for (let e in l.skip) if (l.skip[e] && chkType(n, e, l.type)) {
      t = !0;
      break;
    }
    r.push(t ? n : o(n));
  }
  return l.returnType ? r : String.fromCodePoint.apply(String, r);
}

function factory(e, t, l) {
  return (r, n) => (n = o.all([ {}, n || {}, l || {}, {
    type: t
  } ]), process(r, e, n));
}

var s = {
  toFullNumber: n,
  toHalfNumber: f,
  toFullEnglish: a,
  toHalfEnglish: i,
  toFullWidth: u,
  toHalfWidth: p
};

exports._chkType = _chkType, exports._filterTable = function _filterTable(e) {
  let t = [];
  if (e.from && e.to) for (let o = e.from; o <= e.to; o++) t.push(o);
  return e.values && (t = t.concat(e.values)), Array.isArray(e.not) && e.not.length && (t = t.filter((function(t) {
    for (let o of e.not) if (_chkType(t, o)) return !1;
    return !0;
  }))), t;
}, exports._optionsType = _optionsType, exports.chkType = chkType, exports.default = s, 
exports.factory = factory, exports.process = process, exports.toFullEnglish = a, 
exports.toFullNumber = n, exports.toFullWidth = u, exports.toHalfEnglish = i, exports.toHalfNumber = f, 
exports.toHalfWidth = p;
//# sourceMappingURL=index.cjs.production.min.cjs.map
