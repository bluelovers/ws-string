'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const REGEX_MATCH_INDENT = /^([ \t]*)((?:[\S\r\n].*|)$)/;
const REGEX_MATCH_INDENT_NO_BREAK_SPACE = /^([ \t\xa0]*)((?:[\S\r\n].*|)$)/;
function detectIndentLine(input, options) {
  const m = (options !== null && options !== void 0 && options.includeNoBreakSpace ? REGEX_MATCH_INDENT_NO_BREAK_SPACE : REGEX_MATCH_INDENT).exec(input);
  return {
    input,
    indent: m[1],
    body: m[2],
    bool: m[1].length > 0
  };
}

exports.default = detectIndentLine;
exports.detectIndentLine = detectIndentLine;
//# sourceMappingURL=index.cjs.development.cjs.map
