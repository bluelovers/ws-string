"use strict";
/**
 * Created by user on 2017/12/10/010.
 *
 * https://github.com/peertransfer/cjk-protector/blob/master/dist/cjk-protector.js
 * http://www.cnblogs.com/yitian/archive/2008/11/14/1333569.html
 * https://gist.github.com/kiinlam/11275992
 * https://github.com/Lizhooh/only-space/blob/master/index.js
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arabic = exports.zh = exports.zhs = exports.allRegex = exports.hangulRegex = exports.hiraganaRegex = exports.katakanaRegex = exports.hanRegex = void 0;
exports.hanRegex = /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DB5\u4E00-\u9FCC\uF900-\uFA6D\uFA70-\uFAD9]|[\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD87E[\uDC00-\uDE1D]/;
exports.katakanaRegex = /[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82C\uDC00/;
exports.hiraganaRegex = /[\u3041-\u3096\u309D-\u309F]|\uD82C\uDC01|\uD83C\uDE00/;
exports.hangulRegex = /[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/;
exports.allRegex = [exports.hanRegex, exports.katakanaRegex, exports.hiraganaRegex, exports.hangulRegex];
exports.zhs = /[\u4E00-\u9FA5]+/;
exports.zh = /[\u4E00-\u9FFF]+/;
exports.Arabic = /[\u0600-\u06FF\u0750-\u077F]/;
//console.log(mergeRegExp([zhs]).exec('這種情況中日韩符号区。收容康熙字典部首、中日韩辅助部首、注音符号、日本假名、韩文音符，中日韩的符号、标点、带圈或带括符文数字、月份，以及日本的假名组合、单位、年号、月份、日期、时间等。A社會幫忙嗎...'));
exports.default = exports;
//# sourceMappingURL=var.js.map