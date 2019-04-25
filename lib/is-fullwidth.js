"use strict";
/**
 * Created by user on 2017/12/8/008.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const is_fullwidth_code_point_1 = require("is-fullwidth-code-point");
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
        || is_fullwidth_code_point_1.default(x)) {
        return true;
    }
}
exports.isFullwidthCodePoint = isFullwidthCodePoint;
function isFullWidth(s) {
    // @ts-ignore
    return isFullwidthCodePoint((typeof s != 'number') ? s.codePointAt() : s);
}
exports.isFullWidth = isFullWidth;
exports.default = exports;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtZnVsbHdpZHRoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXMtZnVsbHdpZHRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7QUFFSCxxRUFBNEQ7QUFFNUQsU0FBZ0Isb0JBQW9CLENBQUMsQ0FBUztJQUU3QyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ25CO1FBQ0MsT0FBTyxLQUFLLENBQUM7S0FDYjtJQUVELElBQUksQ0FBQztXQUNEO1FBQ0Ysc0RBQXNEO1FBQ3RELE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FDMUI7V0FDRTtRQUNGLCtDQUErQztRQUMvQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQzFCO1dBQ0UsaUNBQXFCLENBQUMsQ0FBQyxDQUFDLEVBRTVCO1FBQ0MsT0FBTyxJQUFJLENBQUM7S0FDWjtBQUNGLENBQUM7QUFyQkQsb0RBcUJDO0FBRUQsU0FBZ0IsV0FBVyxDQUFzQixDQUFJO0lBRXBELGFBQWE7SUFDYixPQUFPLG9CQUFvQixDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0UsQ0FBQztBQUpELGtDQUlDO0FBRUQsa0JBQWUsT0FBMEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB1c2VyIG9uIDIwMTcvMTIvOC8wMDguXG4gKi9cblxuaW1wb3J0IF9pc0Z1bGx3aWR0aENvZGVQb2ludCBmcm9tICdpcy1mdWxsd2lkdGgtY29kZS1wb2ludCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bGx3aWR0aENvZGVQb2ludCh4OiBudW1iZXIpOiBib29sZWFuXG57XG5cdGlmIChOdW1iZXIuaXNOYU4oeCkpXG5cdHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRpZiAoMFxuXHRcdHx8IChcblx0XHRcdC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0JveC1kcmF3aW5nX2NoYXJhY3RlclxuXHRcdFx0MHgyNTAwIDw9IHggJiYgeCA8PSAweDI1N2Zcblx0XHQpXG5cdFx0fHwgKFxuXHRcdFx0Ly8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmxvY2tfRWxlbWVudHNcblx0XHRcdDB4MjU4MCA8PSB4ICYmIHggPD0gMHgyNTlmXG5cdFx0KVxuXHRcdHx8IF9pc0Z1bGx3aWR0aENvZGVQb2ludCh4KVxuXHQpXG5cdHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGdWxsV2lkdGg8VCA9IG51bWJlciB8IHN0cmluZz4oczogVClcbntcblx0Ly8gQHRzLWlnbm9yZVxuXHRyZXR1cm4gaXNGdWxsd2lkdGhDb2RlUG9pbnQoKHR5cGVvZiBzICE9ICdudW1iZXInKSA/IHMuY29kZVBvaW50QXQoKSA6IHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBleHBvcnRzIGFzIHR5cGVvZiBpbXBvcnQoJy4vaXMtZnVsbHdpZHRoJyk7XG4iXX0=