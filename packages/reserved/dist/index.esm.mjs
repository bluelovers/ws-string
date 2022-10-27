const e = Object.freeze([ "abstract", "arguments", "boolean", "break", "byte", "case", "catch", "char", "class", "const", "continue", "debugger", "default", "delete", "do", "double", "else", "enum", "eval", "export", "extends", "false", "final", "finally", "float", "for", "function", "goto", "if", "implements", "import", "in", "instanceof", "int", "interface", "let", "long", "native", "new", "null", "package", "private", "protected", "public", "return", "short", "static", "super", "switch", "synchronized", "this", "throw", "throws", "transient", "true", "try", "typeof", "var", "void", "volatile", "while", "with", "yield" ]), t = Object.freeze([ "Array", "Date", "eval", "function", "hasOwnProperty", "Infinity", "isFinite", "isNaN", "isPrototypeOf", "length", "Math", "name", "NaN", "Number", "Object", "prototype", "String", "toString", "undefined", "valueOf" ]), n = Object.freeze([ ...e, ...t ]), i = Object.freeze(n.map((e => e.toLowerCase())));

function containReservedOrBuiltins(e) {
  return -1 !== n.indexOf(e);
}

function isReservedOrBuiltins(e) {
  return n.includes(e);
}

function isReservedOrBuiltinsLC(e) {
  return i.includes(e);
}

export { t as builtins, containReservedOrBuiltins, n as default, isReservedOrBuiltins, isReservedOrBuiltinsLC, n as mixinReservedBuiltins, i as mixinReservedBuiltinsLC, e as reserved };
//# sourceMappingURL=index.esm.mjs.map
