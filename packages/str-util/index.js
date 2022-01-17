"use strict";
/**
 * Created by user on 2017/12/8/008.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripAnsi = exports.toHalfWidth = exports.toFullWidth = exports.toHalfEnglish = exports.toFullEnglish = exports.toHalfNumber = exports.toFullNumber = exports.tableFullHalf = exports.charCodeAt = exports.num2zh = exports.zh2num = exports.jp2zht = exports.jp2zhs = exports.zh2jp = exports.trim = exports.normalize = exports.stringWidth = exports.isFullwidthCodePoint = exports.isFullWidth = void 0;
const tslib_1 = require("tslib");
var is_fullwidth_1 = require("./lib/is-fullwidth");
Object.defineProperty(exports, "isFullWidth", { enumerable: true, get: function () { return is_fullwidth_1.isFullWidth; } });
Object.defineProperty(exports, "isFullwidthCodePoint", { enumerable: true, get: function () { return is_fullwidth_1.isFullwidthCodePoint; } });
var width_1 = require("./lib/width");
Object.defineProperty(exports, "stringWidth", { enumerable: true, get: function () { return width_1.stringWidth; } });
const fullhalf_1 = require("./lib/fullhalf");
Object.defineProperty(exports, "toFullNumber", { enumerable: true, get: function () { return fullhalf_1.toFullNumber; } });
Object.defineProperty(exports, "toHalfNumber", { enumerable: true, get: function () { return fullhalf_1.toHalfNumber; } });
Object.defineProperty(exports, "toFullEnglish", { enumerable: true, get: function () { return fullhalf_1.toFullEnglish; } });
Object.defineProperty(exports, "toHalfEnglish", { enumerable: true, get: function () { return fullhalf_1.toHalfEnglish; } });
Object.defineProperty(exports, "toFullWidth", { enumerable: true, get: function () { return fullhalf_1.toFullWidth; } });
Object.defineProperty(exports, "toHalfWidth", { enumerable: true, get: function () { return fullhalf_1.toHalfWidth; } });
const strip_ansi_1 = tslib_1.__importDefault(require("strip-ansi"));
exports.stripAnsi = strip_ansi_1.default;
const normalize_1 = tslib_1.__importDefault(require("./lib/normalize"));
exports.normalize = normalize_1.default;
var trim_1 = require("./lib/trim");
Object.defineProperty(exports, "trim", { enumerable: true, get: function () { return trim_1.trim; } });
var zh2jp_1 = require("./lib/han/zh2jp");
Object.defineProperty(exports, "zh2jp", { enumerable: true, get: function () { return zh2jp_1.zh2jp; } });
Object.defineProperty(exports, "jp2zhs", { enumerable: true, get: function () { return zh2jp_1.jp2zhs; } });
Object.defineProperty(exports, "jp2zht", { enumerable: true, get: function () { return zh2jp_1.jp2zht; } });
var zh2num_1 = require("./lib/han/zh2num");
Object.defineProperty(exports, "zh2num", { enumerable: true, get: function () { return zh2num_1.zh2num; } });
Object.defineProperty(exports, "num2zh", { enumerable: true, get: function () { return zh2num_1.num2zh; } });
var util_1 = require("./lib/util");
Object.defineProperty(exports, "charCodeAt", { enumerable: true, get: function () { return util_1.charCodeAt; } });
exports.tableFullHalf = fullhalf_1.FullHalfCore.table;
exports.default = exports;
//# sourceMappingURL=index.js.map