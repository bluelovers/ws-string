"use strict";
/**
 * Created by user on 2017/12/8/008.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const _isFullwidthCodePoint = require("is-fullwidth-code-point");
function isFullwidthCodePoint(x) {
    if (Number.isNaN(x)) {
        return false;
    }
    if (0
        || (
        // https://en.wikipedia.org/wiki/Box-drawing_character
        0x2500 <= x && x <= 0x257f)
        || (
        // https://en.wikipedia.org/wiki/Block_Elements
        0x2580 <= x && x <= 0x259f)
        || _isFullwidthCodePoint(x)) {
        return true;
    }
}
exports.isFullwidthCodePoint = isFullwidthCodePoint;
function isFullWidth(s) {
    // @ts-ignore
    return isFullwidthCodePoint((typeof s != 'number') ? s.codePointAt() : s);
}
exports.isFullWidth = isFullWidth;
// @ts-ignore
exports.default = exports;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtZnVsbHdpZHRoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXMtZnVsbHdpZHRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7QUFFSCxpRUFBaUU7QUFFakUsU0FBZ0Isb0JBQW9CLENBQUMsQ0FBUztJQUU3QyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ25CO1FBQ0MsT0FBTyxLQUFLLENBQUM7S0FDYjtJQUVELElBQUksQ0FBQztXQUNEO1FBQ0Ysc0RBQXNEO1FBQ3RELE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FDMUI7V0FDRTtRQUNGLCtDQUErQztRQUMvQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQzFCO1dBQ0UscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEVBRTVCO1FBQ0MsT0FBTyxJQUFJLENBQUM7S0FDWjtBQUNGLENBQUM7QUFyQkQsb0RBcUJDO0FBRUQsU0FBZ0IsV0FBVyxDQUFzQixDQUFJO0lBRXBELGFBQWE7SUFDYixPQUFPLG9CQUFvQixDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0UsQ0FBQztBQUpELGtDQUlDO0FBRUQsYUFBYTtBQUNiLGtCQUFlLE9BQU8sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB1c2VyIG9uIDIwMTcvMTIvOC8wMDguXG4gKi9cblxuaW1wb3J0ICogYXMgX2lzRnVsbHdpZHRoQ29kZVBvaW50IGZyb20gJ2lzLWZ1bGx3aWR0aC1jb2RlLXBvaW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVsbHdpZHRoQ29kZVBvaW50KHg6IG51bWJlcik6IGJvb2xlYW5cbntcblx0aWYgKE51bWJlci5pc05hTih4KSlcblx0e1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGlmICgwXG5cdFx0fHwgKFxuXHRcdFx0Ly8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQm94LWRyYXdpbmdfY2hhcmFjdGVyXG5cdFx0XHQweDI1MDAgPD0geCAmJiB4IDw9IDB4MjU3ZlxuXHRcdClcblx0XHR8fCAoXG5cdFx0XHQvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CbG9ja19FbGVtZW50c1xuXHRcdFx0MHgyNTgwIDw9IHggJiYgeCA8PSAweDI1OWZcblx0XHQpXG5cdFx0fHwgX2lzRnVsbHdpZHRoQ29kZVBvaW50KHgpXG5cdClcblx0e1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bGxXaWR0aDxUID0gbnVtYmVyIHwgc3RyaW5nPihzOiBUKVxue1xuXHQvLyBAdHMtaWdub3JlXG5cdHJldHVybiBpc0Z1bGx3aWR0aENvZGVQb2ludCgodHlwZW9mIHMgIT0gJ251bWJlcicpID8gcy5jb2RlUG9pbnRBdCgpIDogcyk7XG59XG5cbi8vIEB0cy1pZ25vcmVcbmV4cG9ydCBkZWZhdWx0IGV4cG9ydHM7XG4iXX0=