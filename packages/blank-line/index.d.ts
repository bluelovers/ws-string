/**
 * Created by user on 2018/1/13/013.
 */
export interface IOptions {
    filter?: boolean;
    sort?: boolean;
}
export declare function getBlankLine(txt: any, options?: IOptions): number[];
export declare function getMinMidMax(txt: any): [number, number, number];
export default getMinMidMax;
