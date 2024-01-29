"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHalfWidth = exports.toFullWidth = exports.toHalfEnglish = exports.toFullEnglish = exports.toHalfNumber = exports.toFullNumber = void 0;
/**
 * Created by user on 2017/12/8/008.
 */
const fullhalf_1 = require("@lazy-cjk/fullhalf");
Object.defineProperty(exports, "toFullEnglish", { enumerable: true, get: function () { return fullhalf_1.toFullEnglish; } });
Object.defineProperty(exports, "toFullNumber", { enumerable: true, get: function () { return fullhalf_1.toFullNumber; } });
Object.defineProperty(exports, "toFullWidth", { enumerable: true, get: function () { return fullhalf_1.toFullWidth; } });
Object.defineProperty(exports, "toHalfEnglish", { enumerable: true, get: function () { return fullhalf_1.toHalfEnglish; } });
Object.defineProperty(exports, "toHalfNumber", { enumerable: true, get: function () { return fullhalf_1.toHalfNumber; } });
Object.defineProperty(exports, "toHalfWidth", { enumerable: true, get: function () { return fullhalf_1.toHalfWidth; } });
exports.default = {
    toFullNumber: fullhalf_1.toFullNumber,
    toHalfNumber: fullhalf_1.toHalfNumber,
    toFullEnglish: fullhalf_1.toFullEnglish,
    toHalfEnglish: fullhalf_1.toHalfEnglish,
    toFullWidth: fullhalf_1.toFullWidth,
    toHalfWidth: fullhalf_1.toHalfWidth,
};
//# sourceMappingURL=fullhalf.js.map