"use strict";
/**
 * Created by user on 2017/12/8/008.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var is_fullwidth_1 = require("./lib/is-fullwidth");
exports.isFullWidth = is_fullwidth_1.isFullWidth;
exports.isFullwidthCodePoint = is_fullwidth_1.isFullwidthCodePoint;
var width_1 = require("./lib/width");
exports.stringWidth = width_1.stringWidth;
const fullhalf_1 = require("./lib/fullhalf");
exports.toFullNumber = fullhalf_1.toFullNumber;
exports.toHalfNumber = fullhalf_1.toHalfNumber;
exports.toFullEnglish = fullhalf_1.toFullEnglish;
exports.toHalfEnglish = fullhalf_1.toHalfEnglish;
exports.toFullWidth = fullhalf_1.toFullWidth;
exports.toHalfWidth = fullhalf_1.toHalfWidth;
const stripAnsi = require("strip-ansi");
exports.stripAnsi = stripAnsi;
var trim_1 = require("./lib/trim");
exports.trim = trim_1.trim;
var zh2jp_1 = require("./lib/han/zh2jp");
exports.zh2jp = zh2jp_1.zh2jp;
exports.jp2zhs = zh2jp_1.jp2zhs;
exports.jp2zht = zh2jp_1.jp2zht;
var zh2num_1 = require("./lib/han/zh2num");
exports.zh2num = zh2num_1.zh2num;
exports.num2zh = zh2num_1.num2zh;
var util_1 = require("./lib/util");
exports.charCodeAt = util_1.charCodeAt;
exports.tableFullHalf = fullhalf_1.FullHalfCore.table;
// @ts-ignore
exports.default = exports;
