const e = /^([ \t]*)((?:[\S\r\n].*|)$)/, n = /^([ \t\xa0]*)((?:[\S\r\n].*|)$)/;

function detectIndentLine(t, d) {
  const c = (null != d && d.includeNoBreakSpace ? n : e).exec(t);
  return {
    input: t,
    indent: c[1],
    body: c[2],
    bool: c[1].length > 0
  };
}

export { detectIndentLine as default, detectIndentLine };
//# sourceMappingURL=index.esm.mjs.map
