"use strict";

function isRoman(e) {
  return /^([LCDMIVX\u2160-\u217f]+)(?![a-z\d])/iu.exec(e);
}

Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = isRoman, exports.isRoman = isRoman;
//# sourceMappingURL=index.cjs.production.min.cjs.map
