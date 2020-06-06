"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitSubtreePush = void 0;
const logger_1 = __importDefault(require("debug-color2/logger"));
const __root_ws_1 = __importDefault(require("../../__root_ws"));
const fs_extra_1 = require("fs-extra");
const create_cache_name_1 = __importDefault(require("./create-cache-name"));
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
        await subtree_1.subtreePush(options);
    }
    let file = create_cache_name_1.default('subtree', module_name);
    if (fs_extra_1.pathExistsSync(file)) {
        (_ok ? logger_1.default : logger_1.default.red).debug(`[subtree:script]`, `del`, module_name);
        fs_extra_1.unlinkSync(file);
    }
}
exports.gitSubtreePush = gitSubtreePush;
//# sourceMappingURL=git-subtree-push.js.map