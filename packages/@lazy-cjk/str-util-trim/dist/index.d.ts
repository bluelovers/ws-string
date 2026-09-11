/**
 * Created by user on 2018/1/7/007.
 */
export interface ITrimOptions {
	trim?: string;
	multiline?: boolean;
	no_start?: boolean;
	no_end?: boolean;
}
export declare function trim(txt: unknown, character_mask?: string): string;
export declare function trim(txt: unknown, character_mask?: ITrimOptions): string;

export {
	trim as default,
};

export {};
