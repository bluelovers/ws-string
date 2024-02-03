export declare const StripTable: readonly RegExp[];
export declare function normalize(input: string, options?: IOptions): string;
export type IOptions = {
	allow_nbsp?: boolean;
	allow_bom?: boolean;
};

export {
	normalize as default,
};

export {};
