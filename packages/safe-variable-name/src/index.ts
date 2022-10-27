import camelCase from 'camelcase';
import { isReservedOrBuiltinsLC } from 'reserved2';

export function _safeVariableName(input: string)
{
	return camelCase(
		input.replace(/([^\w\-_ ])/ig, '-')
		, { pascalCase: true, preserveConsecutiveUppercase: true, locale: 'en-US' })
		.replace(/((^[^a-zA-Z]+)|[^\w.-])|([^a-zA-Z0-9]+$)/g, '');
}

export function safeVariableName(input: string)
{
	let name = _safeVariableName(input);

	if (isReservedOrBuiltinsLC(name.toLowerCase()))
	{
		name = '_' + name;
	}

	return name
}

export default safeVariableName
