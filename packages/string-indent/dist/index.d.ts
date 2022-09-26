export interface IOptions {
	/**
	 * no-break space
	 * \xa0
	 */
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
