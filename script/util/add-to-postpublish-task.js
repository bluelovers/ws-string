"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.add = exports.name = void 0;
const fs_extra_1 = require("fs-extra");
const debug_color2_1 = __importDefault(require("debug-color2"));
const create_cache_name_1 = __importDefault(require("./create-cache-name"));
function name(name) {
    return create_cache_name_1.default('subtree', `${name}`);
}
exports.name = name;
function add(module_name) {
    let file = name(module_name);
    debug_color2_1.default.debug(`[subtree:script]`, `add`, module_name);
    fs_extra_1.outputFileSync(file, module_name);
}
exports.add = add;
function del(module_name) {
    let file = name(module_name);
    debug_color2_1.default.debug(`[subtree:script]`, `del`, module_name);
    fs_extra_1.unlinkSync(file);
}
exports.del = del;
exports.default = add;
//# sourceMappingURL=add-to-postpublish-task.js.map