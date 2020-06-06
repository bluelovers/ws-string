"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCacheName = void 0;
const path_1 = require("path");
const __root_ws_1 = __importDefault(require("../../__root_ws"));
function createCacheName(prefixPath, name) {
    name = name
        .replace(/[^\-_\w\d]/g, '__');
    return path_1.join(__root_ws_1.default, 'temp', prefixPath, `${name}`);
}
exports.createCacheName = createCacheName;
exports.default = createCacheName;
//# sourceMappingURL=create-cache-name.js.map