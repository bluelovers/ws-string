export declare function normalize(txt: string | Buffer): string;
export interface IOptions {
	filter?: boolean;
	sort?: boolean;
}
export declare function getBlankLine(txt: string | Buffer, options?: IOptions): number[];
export type IGetMinMidMax = [
	/**
	 * min
	 */
	min: number,
	/**
	 * mid
	 */
	mid: number,
	/**
	 * max
	 */
	max: number
];
export declare function getMinMidMax(txt: string | Buffer): IGetMinMidMax;

export {
	getMinMidMax as default,
};

export {};
