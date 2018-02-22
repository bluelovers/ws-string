export declare namespace FullHalfCore {
    const FULL_WIDTH = 1;
    const HALF_WIDTH = 0;
    const NO_EXIST = -1;
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
    interface IOptions {
        type?: number;
        skip?: IOptionsType;
        only?: IOptionsType;
        mode?: {
            only?: boolean;
            [index: string]: boolean;
        };
        returnType?: number;
    }
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
    function hasFullHalf(charCode: number): 1 | 0 | -1;
    function isFullHalf(charCode: number): boolean;
    function toFullWidth(charCode: number): number;
    function toHalfWidth(charCode: number): number;
    function _optionsType(data: IOptionsType): IOptionsType;
    function process<T, U = string>(str: any, charProcess: any, options: IOptions): any;
    function factory<T = string>(charProcessor: any, type: number, overwriteOptions?: IOptions): IFactoryFn;
    interface IFactoryFn {
        (str: string, options?: IOptions): string;
        (str: number, options?: IOptions): string;
        (str: any, options?: IOptions): any;
    }
}
export declare const toFullNumber: self.FullHalfCore.IFactoryFn;
export declare const toHalfNumber: self.FullHalfCore.IFactoryFn;
export declare const toFullEnglish: self.FullHalfCore.IFactoryFn;
export declare const toHalfEnglish: self.FullHalfCore.IFactoryFn;
export declare const toFullWidth: self.FullHalfCore.IFactoryFn;
export declare const toHalfWidth: self.FullHalfCore.IFactoryFn;
import * as self from './fullhalf';
export default self;
