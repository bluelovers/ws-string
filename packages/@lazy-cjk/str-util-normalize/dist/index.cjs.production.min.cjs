"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

const e = [ /[\u2000-\u200F]/g, /[\u2028-\u202F]/g, /[\u205F-\u206F]/g, /\uFEFF/g ];

function normalize(r, o = {}) {
  return o.allow_nbsp || (r = r.replace(/\xA0/g, " ")), o.allow_bom || (r = r.replace(/\uFEFF/g, "")), 
  e.forEach((function(e) {
    r = r.replace(e, "");
  })), r;
}

exports.StripTable = e, exports.default = normalize, exports.normalize = normalize;
//# sourceMappingURL=index.cjs.production.min.cjs.map
