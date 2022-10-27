export const reserved = Object.freeze([
	'abstract',
	'arguments',
	'boolean',
	'break',
	'byte',
	'case',
	'catch',
	'char',
	'class',
	'const',
	'continue',
	'debugger',
	'default',
	'delete',
	'do',
	'double',
	'else',
	'enum',
	'eval',
	'export',
	'extends',
	'false',
	'final',
	'finally',
	'float',
	'for',
	'function',
	'goto',
	'if',
	'implements',
	'import',
	'in',
	'instanceof',
	'int',
	'interface',
	'let',
	'long',
	'native',
	'new',
	'null',
	'package',
	'private',
	'protected',
	'public',
	'return',
	'short',
	'static',
	'super',
	'switch',
	'synchronized',
	'this',
	'throw',
	'throws',
	'transient',
	'true',
	'try',
	'typeof',
	'var',
	'void',
	'volatile',
	'while',
	'with',
	'yield'
] as const);

/**
 * @see https://github.com/jonschlinkert/reserved
 */
export const builtins = Object.freeze([
	'Array',
	'Date',
	'eval',
	'function',
	'hasOwnProperty',
	'Infinity',
	'isFinite',
	'isNaN',
	'isPrototypeOf',
	'length',
	'Math',
	'name',
	'NaN',
	'Number',
	'Object',
	'prototype',
	'String',
	'toString',
	'undefined',
	'valueOf'
] as const);

export const mixinReservedBuiltins = Object.freeze([
	...reserved,
	...builtins,
] as const);

export const mixinReservedBuiltinsLC = Object.freeze(mixinReservedBuiltins.map(s => s.toLowerCase())) as readonly Lowercase<IMixinReservedBuiltins>[];

export type IMixinReservedBuiltins = typeof mixinReservedBuiltins[number];

export function containReservedOrBuiltins(input: string)
{
	return mixinReservedBuiltins.indexOf(input as any) !== -1
}

export function isReservedOrBuiltins(input: string): input is IMixinReservedBuiltins
{
	return mixinReservedBuiltins.includes(input as any)
}

export function isReservedOrBuiltinsLC(input: string): input is IMixinReservedBuiltins
{
	return mixinReservedBuiltinsLC.includes(input as any)
}

export default mixinReservedBuiltins
