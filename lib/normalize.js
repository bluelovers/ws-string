"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripTable = [
    /[\u2000-\u200F]/g,
    /[\u2028-\u202F]/g,
    /[\u205F-\u206F]/g,
    // ZERO WIDTH NO-BREAK SPACE
    /\uFEFF/g,
];
function normalize(input, options = {}) {
    if (!options.allow_nbsp) {
        input = input.replace(/\xA0/g, ' ');
    }
    if (!options.allow_bom) {
        input = input.replace(/\uFEFF/g, '');
    }
    exports.StripTable.forEach(function (r) {
        input = input.replace(r, '');
    });
    return input;
}
exports.normalize = normalize;
exports.default = normalize;
