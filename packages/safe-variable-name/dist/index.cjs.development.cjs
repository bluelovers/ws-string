'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var camelCase = require('camelcase');
var reserved2 = require('reserved2');

function _safeVariableName(input) {
  return camelCase(input.replace(/([^\w\-_ ])/ig, '-'), {
    pascalCase: true,
    preserveConsecutiveUppercase: true,
    locale: 'en-US'
  }).replace(/((^[^a-zA-Z]+)|[^\w.-])|([^a-zA-Z0-9]+$)/g, '');
}
function safeVariableName(input) {
  let name = _safeVariableName(input);
  if (reserved2.isReservedOrBuiltinsLC(name.toLowerCase())) {
    name = '_' + name;
  }
  return name;
}

exports._safeVariableName = _safeVariableName;
exports.default = safeVariableName;
exports.safeVariableName = safeVariableName;
//# sourceMappingURL=index.cjs.development.cjs.map
