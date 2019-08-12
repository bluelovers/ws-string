/// <reference path="regenerate.d.ts" />
import regenerate from 'regenerate';
import { NodeBase, Pattern } from 'regexpp2/src/ast';
export { regenerate };
export interface IRegenerateObject extends regenerate.IRegenerateObject {
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
export declare function regexpClassToObject(re: RegExp, flags?: string): IRegenerateObject;
export declare function hackRegenerate(obj: regenerate.IRegenerateObject, flags: string, hasUnicodeFlag: boolean): IRegenerateObject;
export declare function isPattern(ast: NodeBase): ast is Pattern;
export default regexpClassToObject;
