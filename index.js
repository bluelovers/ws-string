"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isRoman(str) {
    return /^([LCDMIVX\u2160-\u217f]+)(?![a-z\d])/ui.exec(str);
}
exports.isRoman = isRoman;
exports.default = isRoman;
