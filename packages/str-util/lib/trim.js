"use strict";
/**
 * Created by user on 2018/1/7/007.
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRyaW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHOztBQWFILFNBQWdCLElBQUksQ0FBQyxHQUFHLEVBQUUsY0FBc0M7SUFFL0QsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRXpCLElBQUksT0FBTyxjQUFjLElBQUksUUFBUSxJQUFJLE9BQU8sY0FBYyxJQUFJLFFBQVEsRUFDMUU7UUFDQyxjQUFjLEdBQUc7WUFDaEIsSUFBSSxFQUFFLGNBQWMsQ0FBQyxRQUFRLEVBQUU7U0FDL0IsQ0FBQztLQUNGO0lBRUQsSUFBSSxjQUFjLEVBQ2xCO1FBQ0MsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRWYsSUFBSSxjQUFjLENBQUMsU0FBUyxFQUM1QjtZQUNDLEtBQUssSUFBSSxHQUFHLENBQUM7U0FDYjtRQUVELElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxDQUFDO1FBRU4sSUFBSSxPQUFPLGNBQWMsQ0FBQyxJQUFJLElBQUksUUFBUSxFQUMxQztZQUNDLENBQUMsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFakQsSUFBSSxjQUFjLENBQUMsU0FBUyxFQUM1QjtnQkFDQyxDQUFDLElBQUksa0JBQWtCLENBQUM7YUFDeEI7aUJBRUQ7Z0JBQ0MsQ0FBQyxJQUFJLGlCQUFpQixDQUFDO2FBQ3ZCO1NBQ0Q7YUFFRDtZQUNDLElBQUksY0FBYyxDQUFDLFNBQVMsRUFDNUI7Z0JBQ0MsQ0FBQyxHQUFHLGtCQUFrQixDQUFDO2FBQ3ZCO2lCQUVEO2dCQUNDLENBQUMsR0FBRyxpQkFBaUIsQ0FBQzthQUN0QjtTQUNEO1FBRUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQzVCO1lBQ0MsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEI7UUFFRCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFDMUI7WUFDQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQjtRQUVELEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFdkMsa0JBQWtCO1FBRWxCLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRSxFQUNoQjtZQUNDLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUN6QjtLQUNEO1NBRUQ7UUFDQyxHQUFHLEdBQUcsR0FBRzthQUNQLE9BQU8sQ0FBQyxvQ0FBb0MsRUFBRSxFQUFFLENBQUMsQ0FDbEQ7S0FDRDtJQUVELE9BQU8sR0FBRyxDQUFDO0FBQ1osQ0FBQztBQTNFRCxvQkEyRUM7QUFFRCxrQkFBZSxJQUFJLENBQUE7QUFFbkIsdUNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHVzZXIgb24gMjAxOC8xLzcvMDA3LlxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRyaW1PcHRpb25zXG57XG5cdHRyaW0/OiBzdHJpbmcsXG5cdG11bHRpbGluZT86IGJvb2xlYW4sXG5cblx0bm9fc3RhcnQ/OiBib29sZWFuLFxuXHRub19lbmQ/OiBib29sZWFuLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJpbSh0eHQsIGNoYXJhY3Rlcl9tYXNrPzogc3RyaW5nKVxuZXhwb3J0IGZ1bmN0aW9uIHRyaW0odHh0LCBjaGFyYWN0ZXJfbWFzaz86IElUcmltT3B0aW9ucylcbmV4cG9ydCBmdW5jdGlvbiB0cmltKHR4dCwgY2hhcmFjdGVyX21hc2s/OiBzdHJpbmcgfCBJVHJpbU9wdGlvbnMpXG57XG5cdGxldCByZXQgPSB0eHQudG9TdHJpbmcoKTtcblxuXHRpZiAodHlwZW9mIGNoYXJhY3Rlcl9tYXNrID09ICdudW1iZXInIHx8IHR5cGVvZiBjaGFyYWN0ZXJfbWFzayA9PSAnc3RyaW5nJylcblx0e1xuXHRcdGNoYXJhY3Rlcl9tYXNrID0ge1xuXHRcdFx0dHJpbTogY2hhcmFjdGVyX21hc2sudG9TdHJpbmcoKSxcblx0XHR9O1xuXHR9XG5cblx0aWYgKGNoYXJhY3Rlcl9tYXNrKVxuXHR7XG5cdFx0bGV0IGZsYWdzID0gJyc7XG5cblx0XHRpZiAoY2hhcmFjdGVyX21hc2subXVsdGlsaW5lKVxuXHRcdHtcblx0XHRcdGZsYWdzICs9ICdtJztcblx0XHR9XG5cblx0XHRsZXQgcnMgPSBbXTtcblx0XHRsZXQgcjtcblxuXHRcdGlmICh0eXBlb2YgY2hhcmFjdGVyX21hc2sudHJpbSA9PSAnc3RyaW5nJylcblx0XHR7XG5cdFx0XHRyID0gY2hhcmFjdGVyX21hc2sudHJpbS5yZXBsYWNlKC8oXFxXKS9nLCAnXFxcXCQxJyk7XG5cblx0XHRcdGlmIChjaGFyYWN0ZXJfbWFzay5tdWx0aWxpbmUpXG5cdFx0XHR7XG5cdFx0XHRcdHIgKz0gJyBcXFxcdFxcXFx1RkVGRlxcXFx4QTAnO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0e1xuXHRcdFx0XHRyICs9ICdcXFxcc1xcXFx1RkVGRlxcXFx4QTAnO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0aWYgKGNoYXJhY3Rlcl9tYXNrLm11bHRpbGluZSlcblx0XHRcdHtcblx0XHRcdFx0ciA9ICcgXFxcXHRcXFxcdUZFRkZcXFxceEEwJztcblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdHtcblx0XHRcdFx0ciA9ICdcXFxcc1xcXFx1RkVGRlxcXFx4QTAnO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICghY2hhcmFjdGVyX21hc2subm9fc3RhcnQpXG5cdFx0e1xuXHRcdFx0cnMucHVzaChgXlske3J9XStgKTtcblx0XHR9XG5cblx0XHRpZiAoIWNoYXJhY3Rlcl9tYXNrLm5vX2VuZClcblx0XHR7XG5cdFx0XHRycy5wdXNoKGBbJHtyfV0rJGApO1xuXHRcdH1cblxuXHRcdHJzID0gcnMubWFwKHIgPT4gbmV3IFJlZ0V4cChyLCBmbGFncykpO1xuXG5cdFx0Ly9jb25zb2xlLmxvZyhycyk7XG5cblx0XHRmb3IgKGxldCByIG9mIHJzKVxuXHRcdHtcblx0XHRcdHJldCA9IHJldC5yZXBsYWNlKHIsICcnKTtcblx0XHR9XG5cdH1cblx0ZWxzZVxuXHR7XG5cdFx0cmV0ID0gcmV0XG5cdFx0XHQucmVwbGFjZSgvXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2csICcnKVxuXHRcdDtcblx0fVxuXG5cdHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRyaW1cblxuLy9jb25zb2xlLmxvZyh0cmltKCcuICAxMjMgID8nLCAnLj8nKSk7XG4iXX0=