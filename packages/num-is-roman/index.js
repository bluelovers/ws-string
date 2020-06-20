"use strict";
/**
 * Created by user on 2018/5/15/015.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRoman = void 0;
function isRoman(str) {
    return /^([LCDMIVX\u2160-\u217f]+)(?![a-z\d])/ui.exec(str);
}
exports.isRoman = isRoman;
exports.default = isRoman;
//# sourceMappingURL=index.js.map