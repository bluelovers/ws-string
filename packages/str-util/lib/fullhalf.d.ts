/**
 * Created by user on 2017/12/8/008.
 */
export declare namespace FullHalfCore {
    const enum EnumFullHalfTableType {
        FULL_WIDTH = 1,
        HALF_WIDTH = 0,
        NO_EXIST = -1
    }
    const FULL_WIDTH = EnumFullHalfTableType.FULL_WIDTH;
    const HALF_WIDTH = EnumFullHalfTableType.HALF_WIDTH;
    const NO_EXIST = EnumFullHalfTableType.NO_EXIST;
    interface IOptionsType {
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
    interface IOptionsBase {
        type?: number;
        skip?: IOptionsType;
        only?: IOptionsType;
        mode?: {
            only?: boolean;
            [index: string]: boolean;
        };
    }
    type IOptionsTrue = IOptionsBase & {
        /**
         * 回傳直接回傳陣列而不組合成字串
         */
        returnType: ILazyTrue;
    };
    type IOptionsFalse = IOptionsBase & {
        /**
         * 回傳直接回傳陣列而不組合成字串
         */
        returnType?: ILazyFalse;
    };
    type IOptions = IOptionsBase & {
        /**
         * 回傳直接回傳陣列而不組合成字串
         */
        returnType?: ILazyTrue | ILazyFalse;
    };
    interface ITableObject {
        from?: number;
        to?: number;
        values?: number[];
        not?: ITableObject[];
    }
    interface ITable {
        default?: ITableObject;
        number?: ITableObject;
        space?: ITableObject;
        'A-Z'?: ITableObject;
        'a-z'?: ITableObject;
        not_default?: ITableObject;
        [index: string]: ITableObject;
    }
    let tableDefaultInclude: string[];
    let table: ITable[];
    function filterTable(data: any): any[];
    function _chkType(charCode: number, data: ITableObject): boolean;
    function chkType(charCode: number, key: string, type: number): boolean;
    function hasFullHalf(charCode: number): EnumFullHalfTableType;
    function isFullHalf(charCode: number): boolean;
    function toFullWidth(charCode: number): number;
    function toHalfWidth(charCode: number): number;
    function _optionsType(data: IOptionsType): IOptionsType;
    function process<T, U = string>(str: any, charProcess: any, options: IOptions): string | number[];
    function factory<T = string>(charProcessor: any, type: number | EnumFullHalfTableType, overwriteOptions?: IOptions): IFactoryFn;
    type ILazyTrue = true | 1;
    type ILazyFalse = 0 | false | void | undefined | null;
    interface IFactoryFn {
        (str: string | string[], options?: IOptionsFalse): string;
        (str: (string | number)[], options: IOptionsTrue): number[];
        (str: any, options: IOptionsTrue): number[];
        (str: (string | number)[]): string;
        (str: (string | number)[], options?: IOptionsFalse): string;
        (str: any, options: IOptionsFalse): string;
        (str: any, options: IOptions): string | number[];
    }
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
