"use strict";
/**
 * Created by user on 2017/12/11/011.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.num2zh = exports.zh2num = void 0;
const zh2num_1 = require("@lazy-cjk/zh2num");
Object.defineProperty(exports, "zh2num", { enumerable: true, get: function () { return zh2num_1.zh2num; } });
Object.defineProperty(exports, "num2zh", { enumerable: true, get: function () { return zh2num_1.num2zh; } });
exports.default = {
    zh2num: zh2num_1.zh2num,
    num2zh: zh2num_1.num2zh,
};
//# sourceMappingURL=zh2num.js.map