function trim(t, e) {
  let r = t.toString();
  if ("number" != typeof e && "string" != typeof e || (e = {
    trim: e.toString()
  }), e) {
    let t = "";
    e.multiline && (t += "m");
    let i, F = [];
    "string" == typeof e.trim ? (i = e.trim.replace(/(\W)/g, "\\$1"), i += e.multiline ? " \\t\\uFEFF\\xA0" : "\\s\\uFEFF\\xA0") : i = e.multiline ? " \\t\\uFEFF\\xA0" : "\\s\\uFEFF\\xA0", 
    e.no_start || F.push(`^[${i}]+`), e.no_end || F.push(`[${i}]+$`), F = F.map(e => new RegExp(e, t));
    for (let t of F) r = r.replace(t, "");
  } else r = r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  return r;
}

export { trim as default, trim };
//# sourceMappingURL=index.esm.mjs.map
