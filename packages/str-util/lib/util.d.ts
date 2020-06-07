/**
 * Created by user on 2017/12/9/009.
 */
export interface IcharCodeAtFn {
    (char: any, charCode: any, str: any): any;
}
export declare function split(str: any): string[];
export declare function charCodeAt(str: any, cb?: IcharCodeAtFn): number[];
declare const _default: typeof import("./util");
export default _default;
