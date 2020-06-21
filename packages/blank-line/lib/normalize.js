"use strict";
/**
 * Created by user on 2018/1/19/019.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalize = exports.LF = void 0;
exports.LF = "\n";
function normalize(txt) {
    return String(txt)
        .replace(/\r\n|\r(?!\n)|\n/g, exports.LF)
        .replace(/\uFEFF/g, '')
        .replace(/[  \xA0]/g, ' ')
        .replace(/[ \t　\xA0\u3000]+\n/g, '\n')
        .replace(/^\n+|[\s　\xA0\u3000]+$/g, '');
}
exports.normalize = normalize;
exports.default = normalize;
//export default exports;
//# sourceMappingURL=normalize.js.map