function split(t) {
  return t.toString().split("");
}

function charCodeAt(t, r) {
  let o = [];
  "function" != typeof r && (r = void 0);
  let i = Array.isArray(t) ? t : t.toString();
  for (let e of i) {
    let i, n = e.charCodeAt();
    if (r && (i = r(e, n, t), void 0 !== i)) {
      if (!i) continue;
      if (Array.isArray(i)) {
        o = o.concat(i);
        continue;
      }
    }
    o.push(n);
  }
  return o;
}

export { charCodeAt, charCodeAt as default, split };
//# sourceMappingURL=index.esm.mjs.map
