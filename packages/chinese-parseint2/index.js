"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chinese_parseInt = exports.characters = void 0;
const data_1 = require("./lib/data");
var data_2 = require("./lib/data");
Object.defineProperty(exports, "characters", { enumerable: true, get: function () { return data_2.characters; } });
function chinese_parseInt(str, radix) {
    let charVal;
    let result = parseInt(str, radix);
    if (!isNaN(result))
        return result;
    if (typeof str !== "string")
        return NaN;
    str = str.replace(/[\s　]+/g, "");
    const negative = /^[負负-]/.test(str);
    if (negative)
        str = str.substr(1);
    result = 0;
    let partialSum = 0; ///< 不到一萬的部分
    let digit = -1; ///< 個位數，預設為 -1 以區分有無"零"的出現
    for (let i = 0; i < str.length; ++i) {
        charVal = data_1.characters[str.charAt(i)]; ///< 暫存字元代表的數值
        if (charVal === undefined)
            return NaN; // 有任何不認得的字，直接 NaN
        if (charVal < 10) {
            digit = (digit == -1)
                ? charVal
                : digit * 10 + charVal // ex. 零五、二五六萬
            ;
        }
        else if (charVal < 1e+4) {
            if (digit == -1)
                digit = 1;
            if (i > 1 && digit == 0 && data_1.characters[str.charAt(i - 2)] != 100) {
                digit = 1;
            } // 處理"一千零十一"；搜尋"千零十"的確是出現過的。
            partialSum += digit * charVal;
            digit = -1;
        }
        else {
            if (digit != -1)
                partialSum += digit;
            if (i && data_1.characters[str.charAt(i - 1)] >= 1e+4) // 為了"四萬萬五千萬"
             {
                result *= data_1.characters[str.charAt(i)];
            }
            else {
                result += partialSum * charVal;
            }
            partialSum = 0;
            digit = -1;
        }
    }
    if (digit > 0) {
        if (str.length > 1) { // 為了處理"二十四萬二"、"二百五"等
            charVal = data_1.characters[str.charAt(str.length - 2)];
            if (charVal < 100) {
                partialSum += digit;
            }
            else {
                charVal /= charVal.toString().charAt(0); // 把「皕」轉成100
                partialSum += digit * (charVal / 10);
            }
        }
        else {
            partialSum += digit;
        }
    }
    result += partialSum;
    if (negative)
        result *= -1;
    return result;
}
exports.chinese_parseInt = chinese_parseInt;
exports.default = chinese_parseInt;
//# sourceMappingURL=index.js.map