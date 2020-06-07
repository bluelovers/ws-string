/**
 * Created by user on 2018/1/7/007.
 */
export interface ITrimOptions {
    trim?: string;
    multiline?: boolean;
    no_start?: boolean;
    no_end?: boolean;
}
export declare function trim(txt: any, character_mask?: string): any;
export declare function trim(txt: any, character_mask?: ITrimOptions): any;
export default trim;
