"use strict";
/**
 * Created by user on 2017/12/8/008.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const stripAnsi = require("strip-ansi");
const is_fullwidth_1 = require("./is-fullwidth");
function stringWidth(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return 0;
    }
    str = stripAnsi(str);
    let width = 0;
    for (let i = 0; i < str.length; i++) {
        const code = str.codePointAt(i);
        // Ignore control characters
        if (code <= 0x1F || (code >= 0x7F && code <= 0x9F)) {
            continue;
        }
        // Ignore combining characters
        if (code >= 0x300 && code <= 0x36F) {
            continue;
        }
        // Surrogates
        if (code > 0xFFFF) {
            i++;
        }
        width += is_fullwidth_1.isFullwidthCodePoint(code) ? 2 : 1;
    }
    return width;
}
exports.stringWidth = stringWidth;
// @ts-ignore
exports.default = exports;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkdGguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3aWR0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7O0FBRUgsd0NBQXdDO0FBQ3hDLGlEQUFzRDtBQUV0RCxTQUFnQixXQUFXLENBQUMsR0FBRztJQUU5QixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNoRCxPQUFPLENBQUMsQ0FBQztLQUNUO0lBRUQsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVyQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFFZCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNwQyxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWhDLDRCQUE0QjtRQUM1QixJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtZQUNuRCxTQUFTO1NBQ1Q7UUFFRCw4QkFBOEI7UUFDOUIsSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLEVBQUU7WUFDbkMsU0FBUztTQUNUO1FBRUQsYUFBYTtRQUNiLElBQUksSUFBSSxHQUFHLE1BQU0sRUFBRTtZQUNsQixDQUFDLEVBQUUsQ0FBQztTQUNKO1FBRUQsS0FBSyxJQUFJLG1DQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM1QztJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2QsQ0FBQztBQWhDRCxrQ0FnQ0M7QUFFRCxhQUFhO0FBQ2Isa0JBQWUsT0FBTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHVzZXIgb24gMjAxNy8xMi84LzAwOC5cbiAqL1xuXG5pbXBvcnQgKiBhcyBzdHJpcEFuc2kgZnJvbSAnc3RyaXAtYW5zaSc7XG5pbXBvcnQgeyBpc0Z1bGx3aWR0aENvZGVQb2ludCB9IGZyb20gJy4vaXMtZnVsbHdpZHRoJztcblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ1dpZHRoKHN0cik6IG51bWJlclxue1xuXHRpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycgfHwgc3RyLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0c3RyID0gc3RyaXBBbnNpKHN0cik7XG5cblx0bGV0IHdpZHRoID0gMDtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGNvZGUgPSBzdHIuY29kZVBvaW50QXQoaSk7XG5cblx0XHQvLyBJZ25vcmUgY29udHJvbCBjaGFyYWN0ZXJzXG5cdFx0aWYgKGNvZGUgPD0gMHgxRiB8fCAoY29kZSA+PSAweDdGICYmIGNvZGUgPD0gMHg5RikpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIElnbm9yZSBjb21iaW5pbmcgY2hhcmFjdGVyc1xuXHRcdGlmIChjb2RlID49IDB4MzAwICYmIGNvZGUgPD0gMHgzNkYpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIFN1cnJvZ2F0ZXNcblx0XHRpZiAoY29kZSA+IDB4RkZGRikge1xuXHRcdFx0aSsrO1xuXHRcdH1cblxuXHRcdHdpZHRoICs9IGlzRnVsbHdpZHRoQ29kZVBvaW50KGNvZGUpID8gMiA6IDE7XG5cdH1cblxuXHRyZXR1cm4gd2lkdGg7XG59XG5cbi8vIEB0cy1pZ25vcmVcbmV4cG9ydCBkZWZhdWx0IGV4cG9ydHM7XG4iXX0=