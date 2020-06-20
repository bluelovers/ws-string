"use strict";
/**
 * Created by user on 2018/5/15/015.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.str2num = exports.roman2num = exports.circle2num = void 0;
const circle_1 = __importDefault(require("./lib/type/circle"));
exports.circle2num = circle_1.default;
const roman_1 = __importStar(require("./lib/type/roman"));
exports.roman2num = roman_1.default;
function str2num(s, options = {}) {
    if (options.all && options.roman !== false || options.roman) {
        let m = roman_1.isRoman(s);
        if (m) {
            let n = roman_1.default(m[1]);
            s = n.toString() + s.slice(m[1].length);
        }
    }
    if (options.all && options.circle !== false || options.circle) {
        s = circle_1.default(s);
    }
    return s;
}
exports.str2num = str2num;
exports.default = str2num;
//# sourceMappingURL=index.js.map