'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const reserved = /*#__PURE__*/Object.freeze(['abstract', 'arguments', 'boolean', 'break', 'byte', 'case', 'catch', 'char', 'class', 'const', 'continue', 'debugger', 'default', 'delete', 'do', 'double', 'else', 'enum', 'eval', 'export', 'extends', 'false', 'final', 'finally', 'float', 'for', 'function', 'goto', 'if', 'implements', 'import', 'in', 'instanceof', 'int', 'interface', 'let', 'long', 'native', 'new', 'null', 'package', 'private', 'protected', 'public', 'return', 'short', 'static', 'super', 'switch', 'synchronized', 'this', 'throw', 'throws', 'transient', 'true', 'try', 'typeof', 'var', 'void', 'volatile', 'while', 'with', 'yield']);
/**
 * @see https://github.com/jonschlinkert/reserved
 */
const builtins = /*#__PURE__*/Object.freeze(['Array', 'Date', 'eval', 'function', 'hasOwnProperty', 'Infinity', 'isFinite', 'isNaN', 'isPrototypeOf', 'length', 'Math', 'name', 'NaN', 'Number', 'Object', 'prototype', 'String', 'toString', 'undefined', 'valueOf']);
const mixinReservedBuiltins = /*#__PURE__*/Object.freeze([...reserved, ...builtins]);
const mixinReservedBuiltinsLC = /*#__PURE__*/Object.freeze( /*#__PURE__*/mixinReservedBuiltins.map(s => s.toLowerCase()));
function containReservedOrBuiltins(input) {
  return mixinReservedBuiltins.indexOf(input) !== -1;
}
function isReservedOrBuiltins(input) {
  return mixinReservedBuiltins.includes(input);
}
function isReservedOrBuiltinsLC(input) {
  return mixinReservedBuiltinsLC.includes(input);
}

exports.builtins = builtins;
exports.containReservedOrBuiltins = containReservedOrBuiltins;
exports.default = mixinReservedBuiltins;
exports.isReservedOrBuiltins = isReservedOrBuiltins;
exports.isReservedOrBuiltinsLC = isReservedOrBuiltinsLC;
exports.mixinReservedBuiltins = mixinReservedBuiltins;
exports.mixinReservedBuiltinsLC = mixinReservedBuiltinsLC;
exports.reserved = reserved;
//# sourceMappingURL=index.cjs.development.cjs.map
