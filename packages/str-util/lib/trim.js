"use strict";
/**
 * Created by user on 2018/1/7/007.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.trim = void 0;
function trim(txt, character_mask) {
    let ret = txt.toString();
    if (typeof character_mask == 'number' || typeof character_mask == 'string') {
        character_mask = {
            trim: character_mask.toString(),
        };
    }
    if (character_mask) {
        let flags = '';
        if (character_mask.multiline) {
            flags += 'm';
        }
        let rs = [];
        let r;
        if (typeof character_mask.trim == 'string') {
            r = character_mask.trim.replace(/(\W)/g, '\\$1');
            if (character_mask.multiline) {
                r += ' \\t\\uFEFF\\xA0';
            }
            else {
                r += '\\s\\uFEFF\\xA0';
            }
        }
        else {
            if (character_mask.multiline) {
                r = ' \\t\\uFEFF\\xA0';
            }
            else {
                r = '\\s\\uFEFF\\xA0';
            }
        }
        if (!character_mask.no_start) {
            rs.push(`^[${r}]+`);
        }
        if (!character_mask.no_end) {
            rs.push(`[${r}]+$`);
        }
        rs = rs.map(r => new RegExp(r, flags));
        //console.log(rs);
        for (let r of rs) {
            ret = ret.replace(r, '');
        }
    }
    else {
        ret = ret
            .replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    }
    return ret;
}
exports.trim = trim;
exports.default = trim;
//console.log(trim('.  123  ?', '.?'));
//# sourceMappingURL=trim.js.map