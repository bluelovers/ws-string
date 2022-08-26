/**
 * Created by user on 2018/5/15/015.
 */
import { circle2num } from './lib/type/circle';
import { roman2num } from './lib/type/roman';
export { circle2num, roman2num };
export interface IOptions {
    circle?: boolean;
    roman?: boolean;
    all?: boolean;
}
export declare function str2num(s: string, options?: IOptions): string;
export default str2num;
