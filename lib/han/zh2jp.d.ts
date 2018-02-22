/**
 * Created by user on 2017/12/24/024.
 *
 * this module only do the char is exists in jp, zht, zhs
 * so don't use this module when u wanna fully zht <=> zhs
 */
export * from 'cjk-conv/lib/jp/core';
import { zh2jp } from 'cjk-conv/lib/jp/core';
export default zh2jp;
