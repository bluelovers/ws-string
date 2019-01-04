"use strict";
/**
 * Created by user on 2017/12/24/024.
 *
 * this module only do the char is exists in jp, zht, zhs
 * so don't use this module when u wanna fully zht <=> zhs
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("cjk-conv/lib/jp/core"));
const core_1 = require("cjk-conv/lib/jp/core");
exports.default = core_1.zh2jp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemgyanAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ6aDJqcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7Ozs7O0FBRUgsMENBQXFDO0FBQ3JDLCtDQUE2QztBQUM3QyxrQkFBZSxZQUFLLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgdXNlciBvbiAyMDE3LzEyLzI0LzAyNC5cbiAqXG4gKiB0aGlzIG1vZHVsZSBvbmx5IGRvIHRoZSBjaGFyIGlzIGV4aXN0cyBpbiBqcCwgemh0LCB6aHNcbiAqIHNvIGRvbid0IHVzZSB0aGlzIG1vZHVsZSB3aGVuIHUgd2FubmEgZnVsbHkgemh0IDw9PiB6aHNcbiAqL1xuXG5leHBvcnQgKiBmcm9tICdjamstY29udi9saWIvanAvY29yZSc7XG5pbXBvcnQgeyB6aDJqcCB9IGZyb20gJ2Nqay1jb252L2xpYi9qcC9jb3JlJztcbmV4cG9ydCBkZWZhdWx0IHpoMmpwO1xuIl19