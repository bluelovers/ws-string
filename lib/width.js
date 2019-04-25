"use strict";
/**
 * Created by user on 2017/12/8/008.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strip_ansi_1 = require("strip-ansi");
const is_fullwidth_1 = require("./is-fullwidth");
function stringWidth(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return 0;
    }
    str = strip_ansi_1.default(str);
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
exports.default = exports;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkdGguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3aWR0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7O0FBRUgsMkNBQW1DO0FBQ25DLGlEQUFzRDtBQUV0RCxTQUFnQixXQUFXLENBQUMsR0FBRztJQUU5QixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNoRCxPQUFPLENBQUMsQ0FBQztLQUNUO0lBRUQsR0FBRyxHQUFHLG9CQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFckIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBRWQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDcEMsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVoQyw0QkFBNEI7UUFDNUIsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUU7WUFDbkQsU0FBUztTQUNUO1FBRUQsOEJBQThCO1FBQzlCLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxFQUFFO1lBQ25DLFNBQVM7U0FDVDtRQUVELGFBQWE7UUFDYixJQUFJLElBQUksR0FBRyxNQUFNLEVBQUU7WUFDbEIsQ0FBQyxFQUFFLENBQUM7U0FDSjtRQUVELEtBQUssSUFBSSxtQ0FBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDNUM7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNkLENBQUM7QUFoQ0Qsa0NBZ0NDO0FBRUQsa0JBQWUsT0FBbUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB1c2VyIG9uIDIwMTcvMTIvOC8wMDguXG4gKi9cblxuaW1wb3J0IHN0cmlwQW5zaSBmcm9tICdzdHJpcC1hbnNpJztcbmltcG9ydCB7IGlzRnVsbHdpZHRoQ29kZVBvaW50IH0gZnJvbSAnLi9pcy1mdWxsd2lkdGgnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nV2lkdGgoc3RyKTogbnVtYmVyXG57XG5cdGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJyB8fCBzdHIubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRzdHIgPSBzdHJpcEFuc2koc3RyKTtcblxuXHRsZXQgd2lkdGggPSAwO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgY29kZSA9IHN0ci5jb2RlUG9pbnRBdChpKTtcblxuXHRcdC8vIElnbm9yZSBjb250cm9sIGNoYXJhY3RlcnNcblx0XHRpZiAoY29kZSA8PSAweDFGIHx8IChjb2RlID49IDB4N0YgJiYgY29kZSA8PSAweDlGKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gSWdub3JlIGNvbWJpbmluZyBjaGFyYWN0ZXJzXG5cdFx0aWYgKGNvZGUgPj0gMHgzMDAgJiYgY29kZSA8PSAweDM2Rikge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gU3Vycm9nYXRlc1xuXHRcdGlmIChjb2RlID4gMHhGRkZGKSB7XG5cdFx0XHRpKys7XG5cdFx0fVxuXG5cdFx0d2lkdGggKz0gaXNGdWxsd2lkdGhDb2RlUG9pbnQoY29kZSkgPyAyIDogMTtcblx0fVxuXG5cdHJldHVybiB3aWR0aDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXhwb3J0cyBhcyB0eXBlb2YgaW1wb3J0KCcuL3dpZHRoJyk7XG4iXX0=