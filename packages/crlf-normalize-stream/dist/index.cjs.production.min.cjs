"use strict";

var r = require("stream"), e = require("crlf-normalize");

function transformLinebreak(n) {
  return new r.Transform({
    transform(r, a, t) {
      t(null, e.crlf(r.toString(), n));
    }
  });
}

Object.defineProperty(transformLinebreak, "__esModule", {
  value: !0
}), Object.defineProperty(transformLinebreak, "transformLinebreak", {
  value: transformLinebreak
}), Object.defineProperty(transformLinebreak, "default", {
  value: transformLinebreak
}), module.exports = transformLinebreak;
//# sourceMappingURL=index.cjs.production.min.cjs.map
