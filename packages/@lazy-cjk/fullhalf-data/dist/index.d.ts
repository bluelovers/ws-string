export declare const tableFullHalfDefaultInclude: readonly [
	"number",
	"A-Z",
	"a-z",
	"space",
	"not_default"
];
export declare const tableFullHalf: {
	default: {
		from: number;
		to: number;
		values: number[];
	};
	number: {
		from: number;
		to: number;
	};
	"A-Z": {
		from: number;
		to: number;
	};
	"a-z": {
		from: number;
		to: number;
	};
	space: {
		values: number[];
	};
	slash: {
		values: number[];
	};
	bracket: {
		values: number[];
	};
	not_default: {
		from: number;
		to: number;
		values: number[];
		not: ({
			from: number;
			to: number;
			values?: undefined;
		} | {
			values: number[];
			from?: undefined;
			to?: undefined;
		})[];
	};
}[];
export interface ITableFullHalfObject {
	from?: number;
	to?: number;
	values?: number[];
	not?: ITableFullHalfObject[];
}
export interface ITableFullHalf {
	default?: ITableFullHalfObject;
	number?: ITableFullHalfObject;
	space?: ITableFullHalfObject;
	"A-Z"?: ITableFullHalfObject;
	"a-z"?: ITableFullHalfObject;
	not_default?: ITableFullHalfObject;
	[index: string]: ITableFullHalfObject;
}
export type ITableFullHalfDefaultIncludeKey = typeof tableFullHalfDefaultInclude[number];

export {
	tableFullHalf as default,
};

export {};
