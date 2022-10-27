import e from "camelcase";

import { isReservedOrBuiltinsLC as a } from "reserved2";

function _safeVariableName(a) {
  return e(a.replace(/([^\w\-_ ])/gi, "-"), {
    pascalCase: !0,
    preserveConsecutiveUppercase: !0,
    locale: "en-US"
  }).replace(/((^[^a-zA-Z]+)|[^\w.-])|([^a-zA-Z0-9]+$)/g, "");
}

function safeVariableName(e) {
  let r = _safeVariableName(e);
  return a(r.toLowerCase()) && (r = "_" + r), r;
}

export { _safeVariableName, safeVariableName as default, safeVariableName };
//# sourceMappingURL=index.esm.mjs.map
