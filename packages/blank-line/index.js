"use strict";
/**
 * Created by user on 2018/1/13/013.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMinMidMax = exports.getBlankLine = void 0;
const execall2_1 = require("execall2");
const normalize_1 = require("./lib/normalize");
function getBlankLine(txt, options = {}) {
    let _ms = execall2_1.execall(/\n+/g, normalize_1.normalize(txt));
    if (_ms.length) {
        let _ret = (_ms)
            .reduce(function (a, b) {
            a.push(b.match.length);
            return a;
        }, []);
        if (options.filter) {
            _ret = _ret.filter(function (v, i, a) {
                return a.indexOf(v) == i;
            });
        }
        if (options.sort) {
            _ret.sort(function (a, b) {
                return a - b;
            });
        }
        return _ret;
    }
    return null;
}
exports.getBlankLine = getBlankLine;
function getMinMidMax(txt) {
    let _ms = getBlankLine(txt, {
        filter: true,
        sort: true,
    });
    if (!_ms || !_ms.length) {
        return [null, null, null];
    }
    let min = _ms[0] || null;
    let max = _ms[_ms.length - 1] || min;
    let mid = _ms[1] || min;
    return [min, mid, max];
}
exports.getMinMidMax = getMinMidMax;
exports.default = getMinMidMax;
//# sourceMappingURL=index.js.map