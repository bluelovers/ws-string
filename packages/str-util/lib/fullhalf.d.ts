/**
 * Created by user on 2017/12/8/008.
 */
export declare namespace FullHalfCore {
    export const enum EnumFullHalfTableType {
        FULL_WIDTH = 1,
        HALF_WIDTH = 0,
        NO_EXIST = -1
    }
    export const FULL_WIDTH = EnumFullHalfTableType.FULL_WIDTH;
    export const HALF_WIDTH = EnumFullHalfTableType.HALF_WIDTH;
    export const NO_EXIST = EnumFullHalfTableType.NO_EXIST;
    export interface IOptionsType {
        eng?: boolean;
        number?: boolean;
        /**
         * eng & number
         */
        both?: boolean;
        space?: boolean;
        exists?: boolean;
        default?: boolean;
        not_default?: boolean;
        not_default2?: boolean;
        slash?: boolean;
        bracket?: boolean;
        [index: string]: boolean;
    }
    export interface IOptionsBase {
        type?: number;
        skip?: IOptionsType;
        only?: IOptionsType;
        mode?: {
            only?: boolean;
            [index: string]: boolean;
        };
    }
    export type IOptionsTrue = IOptionsBase & {
        /**
         * 回傳直接回傳陣列而不組合成字串
         */
        returnType: ILazyTrue;
    };
    export type IOptionsFalse = IOptionsBase & {
        /**
         * 回傳直接回傳陣列而不組合成字串
         */
        returnType?: ILazyFalse;
    };
    export type IOptions = IOptionsBase & {
        /**
         * 回傳直接回傳陣列而不組合成字串
         */
        returnType?: ILazyTrue | ILazyFalse;
    };
    export interface ITableObject {
        from?: number;
        to?: number;
        values?: number[];
        not?: ITableObject[];
    }
    export interface ITable {
        default?: ITableObject;
        number?: ITableObject;
        space?: ITableObject;
        'A-Z'?: ITableObject;
        'a-z'?: ITableObject;
        not_default?: ITableObject;
        [index: string]: ITableObject;
    }
    export let tableDefaultInclude: string[];
    export let table: ITable[];
    export function filterTable(data: any): any[];
    export function _chkType(charCode: number, data: ITableObject): boolean;
    export function chkType(charCode: number, key: string, type: number): boolean;
    export function hasFullHalf(charCode: number): EnumFullHalfTableType;
    export function isFullHalf(charCode: number): boolean;
    export function toFullWidth(charCode: number): number;
    export function toHalfWidth(charCode: number): number;
    export function _optionsType(data: IOptionsType): IOptionsType;
    export function process<T, U = string>(str: any, charProcess: any, options: IOptions): string | number[];
    export function factory<T = string>(charProcessor: any, type: number | EnumFullHalfTableType, overwriteOptions?: IOptions): IFactoryFn;
    type ILazyTrue = true | 1;
    type ILazyFalse = 0 | false | void | undefined | null;
    export interface IFactoryFn {
        (str: string | string[], options?: IOptionsFalse): string;
        (str: (string | number)[], options: IOptionsTrue): number[];
        (str: any, options: IOptionsTrue): number[];
        (str: (string | number)[]): string;
        (str: (string | number)[], options?: IOptionsFalse): string;
        (str: any, options: IOptionsFalse): string;
        (str: any, options: IOptions): string | number[];
    }
    export {};
}
export import IFactoryFn = FullHalfCore.IFactoryFn;
export import EnumFullHalfTableType = FullHalfCore.EnumFullHalfTableType;
export import IOptions = FullHalfCore.IOptions;
export import IOptionsType = FullHalfCore.IOptionsType;
export import ITable = FullHalfCore.ITable;
export import ITableObject = FullHalfCore.ITableObject;
export declare const toFullNumber: IFactoryFn;
export declare const toHalfNumber: IFactoryFn;
export declare const toFullEnglish: IFactoryFn;
export declare const toHalfEnglish: IFactoryFn;
export declare const toFullWidth: IFactoryFn;
export declare const toHalfWidth: IFactoryFn;
declare const _default: typeof import("./fullhalf");
export default _default;
