"use strict";
/**
 * Created by user on 2020/5/11.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const add_to_postpublish_task_1 = require("../util/add-to-postpublish-task");
const logger_1 = (0, tslib_1.__importDefault)(require("debug-color2/logger"));
let argv = process.argv.slice(2);
logger_1.default.dir(argv);
if (argv.length) {
    argv.forEach(module_name => (0, add_to_postpublish_task_1.add)(module_name));
}
//# sourceMappingURL=postpublish-add.js.map