/**
 * Created by user on 2017/12/24/024.
 *
 * this module only do the char is exists in jp, zht, zhs
 * so don't use this module when u wanna fully zht <=> zhs
 */
export * from '@lazy-cjk/jp-table-convert';
import { zh2jp } from '@lazy-cjk/jp-table-convert';
export default zh2jp;
