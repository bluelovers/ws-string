const e = [ /[\u2000-\u200F]/g, /[\u2028-\u202F]/g, /[\u205F-\u206F]/g, /\uFEFF/g ];

function normalize(u, a = {}) {
  return a.allow_nbsp || (u = u.replace(/\xA0/g, " ")), a.allow_bom || (u = u.replace(/\uFEFF/g, "")), 
  e.forEach((function(e) {
    u = u.replace(e, "");
  })), u;
}

export { e as StripTable, normalize as default, normalize };
//# sourceMappingURL=index.esm.mjs.map
