export interface IcharCodeAtFn {
	(char: unknown, charCode: unknown, str: unknown): unknown;
}
export declare function split(str: unknown): string[];
export declare function charCodeAt(str: unknown, cb?: IcharCodeAtFn): number[];

export {
	charCodeAt as default,
};

export {};
