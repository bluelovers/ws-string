export interface IOptions {
	includeNoBreakSpace?: boolean;
}
export declare function detectIndentLine(input: string, options?: IOptions): {
	input: string;
	indent: string;
	body: string;
	bool: boolean;
};

export {
	detectIndentLine as default,
};

export {};
