"use strict";
/**
 * Created by user on 2017/12/24/024.
 *
 * this module only do the char is exists in jp, zht, zhs
 * so don't use this module when u wanna fully zht <=> zhs
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("cjk-conv/lib/jp/core"), exports);
const core_1 = require("cjk-conv/lib/jp/core");
exports.default = core_1.zh2jp;
//# sourceMappingURL=zh2jp.js.map