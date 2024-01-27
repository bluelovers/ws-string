export declare const tableDefaultInclude: readonly [
	"number",
	"A-Z",
	"a-z",
	"space",
	"not_default"
];
export declare const table: {
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
	"A-Z"?: ITableObject;
	"a-z"?: ITableObject;
	not_default?: ITableObject;
	[index: string]: ITableObject;
}
export type ITableDefaultIncludeKey = typeof tableDefaultInclude[number];

export {
	table as default,
};

export {};
