/**
 * Created by user on 2018/1/13/013.
 */
/// <reference types="node" />
export interface IOptions {
    filter?: boolean;
    sort?: boolean;
}
export declare function getBlankLine(txt: string | Buffer, options?: IOptions): number[];
export type IGetMinMidMax = [
    /**
     * min
     */
    number,
    /**
     * mid
     */
    number,
    /**
     * max
     */
    number
];
export declare function getMinMidMax(txt: string | Buffer): IGetMinMidMax;
export default getMinMidMax;
