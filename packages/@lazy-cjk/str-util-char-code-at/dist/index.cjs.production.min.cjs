"use strict";

function charCodeAt(t, e) {
  let r = [];
  "function" != typeof e && (e = void 0);
  let o = Array.isArray(t) ? t : t.toString();
  for (let i of o) {
    let o, n = i.charCodeAt();
    if (e && (o = e(i, n, t), void 0 !== o)) {
      if (!o) continue;
      if (Array.isArray(o)) {
        r = r.concat(o);
        continue;
      }
    }
    r.push(n);
  }
  return r;
}

Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.charCodeAt = charCodeAt, exports.default = charCodeAt, exports.split = function split(t) {
  return t.toString().split("");
};
//# sourceMappingURL=index.cjs.production.min.cjs.map
