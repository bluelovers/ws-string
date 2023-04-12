'use strict';

var EnumRunesCode;
(function (EnumRunesCode) {
  EnumRunesCode[EnumRunesCode["HIGH_SURROGATE_START"] = 55296] = "HIGH_SURROGATE_START";
  EnumRunesCode[EnumRunesCode["HIGH_SURROGATE_END"] = 56319] = "HIGH_SURROGATE_END";
  EnumRunesCode[EnumRunesCode["LOW_SURROGATE_START"] = 56320] = "LOW_SURROGATE_START";
  EnumRunesCode[EnumRunesCode["REGIONAL_INDICATOR_START"] = 127462] = "REGIONAL_INDICATOR_START";
  EnumRunesCode[EnumRunesCode["REGIONAL_INDICATOR_END"] = 127487] = "REGIONAL_INDICATOR_END";
  EnumRunesCode[EnumRunesCode["FITZPATRICK_MODIFIER_START"] = 127995] = "FITZPATRICK_MODIFIER_START";
  EnumRunesCode[EnumRunesCode["FITZPATRICK_MODIFIER_END"] = 127999] = "FITZPATRICK_MODIFIER_END";
  EnumRunesCode[EnumRunesCode["VARIATION_MODIFIER_START"] = 65024] = "VARIATION_MODIFIER_START";
  EnumRunesCode[EnumRunesCode["VARIATION_MODIFIER_END"] = 65039] = "VARIATION_MODIFIER_END";
  EnumRunesCode[EnumRunesCode["DIACRITICAL_MARKS_START"] = 8400] = "DIACRITICAL_MARKS_START";
  EnumRunesCode[EnumRunesCode["DIACRITICAL_MARKS_END"] = 8447] = "DIACRITICAL_MARKS_END";
  EnumRunesCode[EnumRunesCode["SUBDIVISION_INDICATOR_START"] = 127988] = "SUBDIVISION_INDICATOR_START";
  EnumRunesCode[EnumRunesCode["TAGS_START"] = 917504] = "TAGS_START";
  EnumRunesCode[EnumRunesCode["TAGS_END"] = 917631] = "TAGS_END";
  EnumRunesCode[EnumRunesCode["ZWJ"] = 8205] = "ZWJ";
})(EnumRunesCode || (EnumRunesCode = {}));
const GRAPHEMES = /*#__PURE__*/Object.freeze([0x0308, 0x0937, 0x093F, 0x0BA8, 0x0BBF, 0x0BCD, 0x0E31, 0x0E33, 0x0E40, 0x0E49, 0x1100, 0x1161, 0x11A8]);
var EnumCodeUnits;
(function (EnumCodeUnits) {
  EnumCodeUnits[EnumCodeUnits["unit_1"] = 1] = "unit_1";
  EnumCodeUnits[EnumCodeUnits["unit_2"] = 2] = "unit_2";
  EnumCodeUnits[EnumCodeUnits["unit_4"] = 4] = "unit_4";
})(EnumCodeUnits || (EnumCodeUnits = {}));
function runes(string) {
  if (typeof string !== 'string') {
    throw new TypeError('string cannot be undefined or null');
  }
  const result = [];
  let i = 0;
  let increment = 0;
  while (i < string.length) {
    increment += nextUnits(i + increment, string);
    if (isGrapheme(string[i + increment])) {
      increment++;
    }
    if (isVariationSelector(string[i + increment])) {
      increment++;
    }
    if (isDiacriticalMark(string[i + increment])) {
      increment++;
    }
    if (isZeroWidthJoiner(string[i + increment])) {
      increment++;
      continue;
    }
    result.push(string.substring(i, i + increment));
    i += increment;
    increment = 0;
  }
  return result;
}
function nextUnits(i, string) {
  const current = string[i];
  if (!isFirstOfSurrogatePair(current) || i === string.length - 1) {
    return 1;
  }
  const currentPair = current + string[i + 1];
  let nextPair = string.substring(i + 2, i + 5);
  if (isRegionalIndicator(currentPair) && isRegionalIndicator(nextPair)) {
    return 4;
  }
  if (isSubdivisionFlag(currentPair) && isSupplementarySpecialpurposePlane(nextPair)) {
    return string.slice(i).indexOf(String.fromCodePoint(917631)) + 2;
  }
  if (isFitzpatrickModifier(nextPair)) {
    return 4;
  }
  return 2;
}
function isFirstOfSurrogatePair(string) {
  return string && betweenInclusive(string[0].charCodeAt(0), 55296, 56319);
}
function isRegionalIndicator(string) {
  return betweenInclusive(codePointFromSurrogatePair(string), 127462, 127487);
}
function isSubdivisionFlag(string) {
  return betweenInclusive(codePointFromSurrogatePair(string), 127988, 127988);
}
function isFitzpatrickModifier(string) {
  return betweenInclusive(codePointFromSurrogatePair(string), 127995, 127999);
}
function isVariationSelector(string) {
  return typeof string === 'string' && betweenInclusive(string.charCodeAt(0), 65024, 65039);
}
function isDiacriticalMark(string) {
  return typeof string === 'string' && betweenInclusive(string.charCodeAt(0), 8400, 8447);
}
function isSupplementarySpecialpurposePlane(string) {
  const codePoint = string.codePointAt(0);
  return typeof string === 'string' && typeof codePoint === 'number' && betweenInclusive(codePoint, 917504, 917631);
}
function isGrapheme(string) {
  return typeof string === 'string' && GRAPHEMES.includes(string.charCodeAt(0));
}
function isZeroWidthJoiner(string) {
  return typeof string === 'string' && string.charCodeAt(0) === 8205;
}
function codePointFromSurrogatePair(pair) {
  const highOffset = pair.charCodeAt(0) - 55296;
  const lowOffset = pair.charCodeAt(1) - 56320;
  return (highOffset << 10) + lowOffset + 0x10000;
}
function betweenInclusive(value, lower, upper) {
  return value >= lower && value <= upper;
}
function substring(string, start, width) {
  const chars = runes(string);
  if (start === undefined) {
    return string;
  }
  if (start >= chars.length) {
    return '';
  }
  const rest = chars.length - start;
  const stringWidth = width === undefined ? rest : width;
  let endIndex = start + stringWidth;
  if (endIndex > start + rest) {
    endIndex = undefined;
  }
  return chars.slice(start, endIndex).join('');
}
{
  Object.defineProperty(runes, 'runes', {
    value: runes
  });
  Object.defineProperty(runes, 'default', {
    value: runes
  });
  Object.defineProperty(runes, "__esModule", {
    value: true
  });
  Object.defineProperty(runes, 'substr', {
    value: substring
  });
  Object.defineProperty(runes, 'substring', {
    value: substring
  });
  Object.defineProperty(runes, 'EnumRunesCode', {
    value: EnumRunesCode
  });
  Object.defineProperty(runes, 'EnumCodeUnits', {
    value: EnumCodeUnits
  });
  Object.defineProperty(runes, 'GRAPHEMES', {
    value: GRAPHEMES
  });
}

// @ts-ignore
module.exports = runes;
//# sourceMappingURL=index.cjs.development.cjs.map
