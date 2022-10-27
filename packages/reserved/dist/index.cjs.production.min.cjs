"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

const e = Object.freeze([ "abstract", "arguments", "boolean", "break", "byte", "case", "catch", "char", "class", "const", "continue", "debugger", "default", "delete", "do", "double", "else", "enum", "eval", "export", "extends", "false", "final", "finally", "float", "for", "function", "goto", "if", "implements", "import", "in", "instanceof", "int", "interface", "let", "long", "native", "new", "null", "package", "private", "protected", "public", "return", "short", "static", "super", "switch", "synchronized", "this", "throw", "throws", "transient", "true", "try", "typeof", "var", "void", "volatile", "while", "with", "yield" ]), t = Object.freeze([ "Array", "Date", "eval", "function", "hasOwnProperty", "Infinity", "isFinite", "isNaN", "isPrototypeOf", "length", "Math", "name", "NaN", "Number", "Object", "prototype", "String", "toString", "undefined", "valueOf" ]), i = Object.freeze([ ...e, ...t ]), r = Object.freeze(i.map((e => e.toLowerCase())));

exports.builtins = t, exports.containReservedOrBuiltins = function containReservedOrBuiltins(e) {
  return -1 !== i.indexOf(e);
}, exports.default = i, exports.isReservedOrBuiltins = function isReservedOrBuiltins(e) {
  return i.includes(e);
}, exports.isReservedOrBuiltinsLC = function isReservedOrBuiltinsLC(e) {
  return r.includes(e);
}, exports.mixinReservedBuiltins = i, exports.mixinReservedBuiltinsLC = r, exports.reserved = e;
//# sourceMappingURL=index.cjs.production.min.cjs.map
