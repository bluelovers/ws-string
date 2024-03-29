"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitSubtreePush = void 0;
const tslib_1 = require("tslib");
const logger_1 = tslib_1.__importDefault(require("debug-color2/logger"));
const __root_ws_1 = tslib_1.__importDefault(require("../../__root_ws"));
const fs_extra_1 = require("fs-extra");
const create_cache_name_1 = tslib_1.__importDefault(require("./create-cache-name"));
const subtree_1 = require("@git-lazy/subtree");
async function gitSubtreePush(module_name) {
    let _ok = true;
    let options = {
        name: module_name,
        prefix: `packages/${module_name}`,
        cwd: __root_ws_1.default,
    };
    switch (module_name) {
        case 'runes2':
            options.remote = `https://github.com/bluelovers/runes.git`;
            options.branch = 'develop';
            break;
        default:
            _ok = false;
            break;
    }
    if (_ok) {
        await (0, subtree_1.subtreePush)(options);
    }
    let file = (0, create_cache_name_1.default)('subtree', module_name);
    if ((0, fs_extra_1.pathExistsSync)(file)) {
        (_ok ? logger_1.default : logger_1.default.red).debug(`[subtree:script]`, `del`, module_name);
        (0, fs_extra_1.unlinkSync)(file);
    }
}
exports.gitSubtreePush = gitSubtreePush;
//# sourceMappingURL=git-subtree-push.js.map