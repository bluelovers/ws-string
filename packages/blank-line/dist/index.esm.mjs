import { execall as n } from "execall2";

const e = "\n";

function normalize(n) {
  return String(n).replace(/\r\n|\r(?!\n)|\n/g, e).replace(/\uFEFF/g, "").replace(/[  \xA0]/g, " ").replace(/[ \t　\xA0\u3000]+\n/g, "\n").replace(/^\n+|[\s　\xA0\u3000]+$/g, "");
}

function getBlankLine(e, t = {}) {
  let l = n(/\n+/g, normalize(e));
  if (l.length) {
    let n = l.reduce((function(n, e) {
      return n.push(e.match.length), n;
    }), []);
    return t.filter && (n = n.filter((function(n, e, t) {
      return t.indexOf(n) == e;
    }))), t.sort && n.sort((function(n, e) {
      return n - e;
    })), n;
  }
  return null;
}

function getMinMidMax(n) {
  let e = getBlankLine(n, {
    filter: !0,
    sort: !0
  });
  if (null == e || !e.length) return [ null, null, null ];
  let t = e[0] || null;
  return [ t, e[1] || t, e[e.length - 1] || t ];
}

export { getMinMidMax as default, getBlankLine, getMinMidMax, normalize };
//# sourceMappingURL=index.esm.mjs.map
