"use strict";
/**
 * Created by user on 2019/8/12.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports._regexpMerge = void 0;
/**
 * simple merge, not real regexp merge
 * @private
 */
function _regexpMerge(re) {
    return new RegExp('[' + re.map(r => (typeof r === 'string' ? r : r.source).replace(/^\[/, '').replace(/\]$/, ''))
        .join('') + ']', 'ug');
}
exports._regexpMerge = _regexpMerge;
//# sourceMappingURL=util.js.map