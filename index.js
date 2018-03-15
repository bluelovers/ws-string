"use strict";
/**
 * Created by user on 2018/3/16/016.
 */
const runes_1 = require("./runes");
const _runes2 = runes_1.default;
_runes2.substr = runes_1.substring;
const runes = _runes2;
Object.defineProperty(runes, "__esModule", { value: true });
runes.default = runes.runes = runes;
module.exports = runes;
