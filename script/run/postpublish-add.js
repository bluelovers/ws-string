"use strict";
/**
 * Created by user on 2020/5/11.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const add_to_postpublish_task_1 = require("../util/add-to-postpublish-task");
const logger_1 = __importDefault(require("debug-color2/logger"));
let argv = process.argv.slice(2);
logger_1.default.dir(argv);
if (argv.length) {
    argv.forEach(module_name => add_to_postpublish_task_1.add(module_name));
}
//# sourceMappingURL=postpublish-add.js.map