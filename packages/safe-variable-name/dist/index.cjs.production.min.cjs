"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var e = require("camelcase"), a = require("reserved2");

function _safeVariableName(a) {
  return e(a.replace(/([^\w\-_ ])/gi, "-"), {
    pascalCase: !0,
    preserveConsecutiveUppercase: !0,
    locale: "en-US"
  }).replace(/((^[^a-zA-Z]+)|[^\w.-])|([^a-zA-Z0-9]+$)/g, "");
}

function safeVariableName(e) {
  let r = _safeVariableName(e);
  return a.isReservedOrBuiltinsLC(r.toLowerCase()) && (r = "_" + r), r;
}

exports._safeVariableName = _safeVariableName, exports.default = safeVariableName, 
exports.safeVariableName = safeVariableName;
//# sourceMappingURL=index.cjs.production.min.cjs.map
