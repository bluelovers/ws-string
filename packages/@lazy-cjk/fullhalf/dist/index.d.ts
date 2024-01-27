export declare const enum EnumFullHalfTableType {
	FULL_WIDTH = 1,
	HALF_WIDTH = 0,
	NO_EXIST = -1
}
declare const tableFullHalfDefaultInclude: readonly [
	"number",
	"A-Z",
	"a-z",
	"space",
	"not_default"
];
export interface ITableFullHalfObject {
	from?: number;
	to?: number;
	values?: number[];
	not?: ITableFullHalfObject[];
}
export type ITableFullHalfDefaultIncludeKey = typeof tableFullHalfDefaultInclude[number];
export declare const toFullNumber: IFactoryFn;
export declare const toHalfNumber: IFactoryFn;
export declare const toFullEnglish: IFactoryFn;
export declare const toHalfEnglish: IFactoryFn;
export declare const toFullWidth: IFactoryFn;
export declare const toHalfWidth: IFactoryFn;
export declare function _optionsType(data: IOptionsType): IOptionsType;
export declare function _chkType(charCode: number, data: ITableFullHalfObject): boolean;
export declare function chkType(charCode: number, key: ITableFullHalfDefaultIncludeKey, type: EnumFullHalfTableType): boolean;
export declare function process<T, U = string>(str: unknown, charProcess: ICharProcessor, options: IOptions): string | number[];
export declare function factory<T = string>(charProcessor: ICharProcessor, type: number | EnumFullHalfTableType, overwriteOptions?: IOptions): IFactoryFn;
export declare function _filterTable(data: ITableFullHalfObject): number[];
export interface IOptionsType extends Partial<Record<ITableFullHalfDefaultIncludeKey, boolean>> {
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
export interface IOptions extends IOptionsBase {
	/**
	 * 回傳直接回傳陣列而不組合成字串
	 */
	returnType?: ILazyTrue | ILazyFalse;
}
export type ILazyTrue = true | 1;
export type ILazyFalse = 0 | false | void | undefined | null;
export interface IFactoryFn {
	(str: string | string[], options?: IOptionsFalse): string;
	(str: (string | number)[], options: IOptionsTrue): number[];
	(str: unknown, options: IOptionsTrue): number[];
	(str: (string | number)[]): string;
	(str: (string | number)[], options?: IOptionsFalse): string;
	(str: unknown, options: IOptionsFalse): string;
	(str: unknown, options: IOptions): string | number[];
}
export type ICharProcessor = (charCode: number) => number;
declare const _default: {
	toFullNumber: IFactoryFn;
	toHalfNumber: IFactoryFn;
	toFullEnglish: IFactoryFn;
	toHalfEnglish: IFactoryFn;
	toFullWidth: IFactoryFn;
	toHalfWidth: IFactoryFn;
};

export {
	_default as default,
};

export {};
