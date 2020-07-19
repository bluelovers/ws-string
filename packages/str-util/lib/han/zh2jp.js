"use strict";
/**
 * Created by user on 2017/12/24/024.
 *
 * this module only do the char is exists in jp, zht, zhs
 * so don't use this module when u wanna fully zht <=> zhs
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("cjk-conv/lib/jp/core"), exports);
const core_1 = require("cjk-conv/lib/jp/core");
exports.default = core_1.zh2jp;
//# sourceMappingURL=zh2jp.js.map