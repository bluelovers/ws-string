///<reference path="./regenerate.d.ts"/>

import {
	ParserEventEmitter,
	ParserEventEmitterEvent,
} from 'regexp-parser-event';
import { EnumTypeNode } from 'regexpp2/src/const';
import rewritePattern from 'regexpu-core';
import regenerate from 'regenerate';
import { NodeBase, Pattern } from 'regexpp2/src/ast';

export { regenerate }

export interface IRegenerateObject extends regenerate.IRegenerateObject
{

	readonly flags: string;

	toStringOrigin(...options: Parameters<regenerate.IRegenerateObject["toString"]>): ReturnType<regenerate.IRegenerateObject["toString"]>;

}

/**
 * convert Specified type RegExp to hacked regenerate object
 *
 * @param {RegExp} re
 * @param {string} flags
 * @returns {regenerate.IRegenerateObject}
 */
export function regexpClassToObject(re: RegExp, flags?: string): IRegenerateObject
{
	if (flags == null)
	{
		flags = re.flags;
	}

	const hasUnicodeFlag = flags.includes('u');

	const sourceOrigin = re.source;

	let source = rewritePattern(sourceOrigin, flags, {
		unicodePropertyEscape: true,
		useUnicodeFlag: hasUnicodeFlag,
	});

	let ev = ParserEventEmitter.create(source, flags);

	let new_obj: ReturnType<typeof regenerate>;

	ev.on(ParserEventEmitterEvent.class, function (ast, eventName, ev, ...argv)
	{
		if (!isPattern(ast.parent) || ast.parent.elements.length != 1)
		{
			throw new TypeError(`this regexp should only has class, but got ${source}`);
		}

		if (new_obj == null)
		{
			new_obj = regenerate();
		}
		else
		{
			throw new TypeError(`only allow one class, but got ${source}`);
		}

		ast.elements.forEach(sub_ast => {

			switch (sub_ast.type)
			{
				case EnumTypeNode.CharacterClassRange:
					new_obj.addRange(sub_ast.min.value, sub_ast.max.value);
					break;
				case EnumTypeNode.Character:
					new_obj.add(sub_ast.value);
					break;
				default:

					throw new TypeError(`unknown ast ${JSON.stringify(sub_ast)}`);

					break;
			}

		});

	});

	ev.resume();

	if (new_obj == null)
	{
		if (ev.astSource.elements.length == 1)
		{
			let ast = ev.astSource.elements[0];

			if (ast.type === EnumTypeNode.Character)
			{
				new_obj = regenerate();

				new_obj.add(ast.value);
			}
		}

		if (new_obj == null)
		{
			throw new TypeError(`not support ${ev}`);
		}
	}

	return hackRegenerate(new_obj, flags, hasUnicodeFlag);
}

export function hackRegenerate(obj: regenerate.IRegenerateObject, flags: string, hasUnicodeFlag: boolean): IRegenerateObject
{
	Object.defineProperties(obj, {

		flags: {
			get()
			{
				return flags;
			}
		},

		toStringOrigin: {
			enumerable: false,
			value: regenerate.prototype.toString,
		},

		toString: {
			enumerable: false,

			value: ((old) => {

				return function (...options: Parameters<typeof obj.toString>)
				{
					if (options[0] == null)
					{
						options[0] = {
							hasUnicodeFlag,
						}
					}

					// @ts-ignore
					let source: string = old.apply(this, options);

					if (!/^\[.*\]$/.test(source))
					{
						return `[${source}]`
					}

					return source;
				}

			})(obj.toString),
		},

		toRegExp: {
			enumerable: false,

			value: ((old) => {

				return function (...options: Parameters<typeof obj.toRegExp>)
				{
					if (options[0] == null)
					{
						options[0] = flags;
					}

					// @ts-ignore
					return old.apply(this, options);
				}

			})(obj.toRegExp),
		},

		clone: {
			enumerable: false,

			value: ((old) => {

				return function (...options)
				{
					// @ts-ignore
					let new_obj = old.apply(this, options);

					return hackRegenerate(new_obj, flags, hasUnicodeFlag);
				}

			})(obj.clone),
		},

	});

	return obj as IRegenerateObject
}

export function isPattern(ast: NodeBase): ast is Pattern
{
	return (ast.type == EnumTypeNode.Pattern)
}

export default regexpClassToObject


