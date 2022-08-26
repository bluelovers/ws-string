'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isRoman(str) {
  return /^([LCDMIVX\u2160-\u217f]+)(?![a-z\d])/ui.exec(str);
}

exports["default"] = isRoman;
exports.isRoman = isRoman;
//# sourceMappingURL=index.cjs.development.cjs.map
