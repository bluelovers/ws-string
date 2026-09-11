"use strict";

function trim(t, e) {
  let r = t.toString();
  if ("number" != typeof e && "string" != typeof e || (e = {
    trim: e.toString()
  }), e) {
    let t = "";
    e.multiline && (t += "m");
    let i, u = [];
    "string" == typeof e.trim ? (i = e.trim.replace(/(\W)/g, "\\$1"), i += e.multiline ? " \\t\\uFEFF\\xA0" : "\\s\\uFEFF\\xA0") : i = e.multiline ? " \\t\\uFEFF\\xA0" : "\\s\\uFEFF\\xA0", 
    e.no_start || u.push(`^[${i}]+`), e.no_end || u.push(`[${i}]+$`), u = u.map(e => new RegExp(e, t));
    for (let t of u) r = r.replace(t, "");
  } else r = r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  return r;
}

Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = trim, exports.trim = trim;
//# sourceMappingURL=index.cjs.production.min.cjs.map
