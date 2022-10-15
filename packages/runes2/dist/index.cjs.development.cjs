'use strict';

const HIGH_SURROGATE_START = 0xd800;
const HIGH_SURROGATE_END = 0xdbff;
const LOW_SURROGATE_START = 0xdc00;
const REGIONAL_INDICATOR_START = 0x1f1e6;
const REGIONAL_INDICATOR_END = 0x1f1ff;
const FITZPATRICK_MODIFIER_START = 0x1f3fb;
const FITZPATRICK_MODIFIER_END = 0x1f3ff;
const VARIATION_MODIFIER_START = 0xfe00;
const VARIATION_MODIFIER_END = 0xfe0f;
const DIACRITICAL_MARKS_START = 0x20d0;
const DIACRITICAL_MARKS_END = 0x20ff;
const ZWJ = 0x200d;
const GRAPHEMS = /*#__PURE__*/Object.freeze([0x0308, 0x0937, 0x0937, 0x093F, 0x093F, 0x0BA8, 0x0BBF, 0x0BCD, 0x0E31, 0x0E33, 0x0E40, 0x0E49, 0x1100, 0x1161, 0x11A8]);
function _runes(string) {
  if (typeof string !== 'string') {
    throw new TypeError('string cannot be undefined or null');
  }
  const result = [];
  let i = 0;
  let increment = 0;
  while (i < string.length) {
    increment += nextUnits(i + increment, string);
    if (isGraphem(string[i + increment])) {
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
  if (isFitzpatrickModifier(nextPair)) {
    return 4;
  }
  return 2;
}
function isFirstOfSurrogatePair(string) {
  return string && betweenInclusive(string[0].charCodeAt(0), HIGH_SURROGATE_START, HIGH_SURROGATE_END);
}
function isRegionalIndicator(string) {
  return betweenInclusive(codePointFromSurrogatePair(string), REGIONAL_INDICATOR_START, REGIONAL_INDICATOR_END);
}
function isFitzpatrickModifier(string) {
  return betweenInclusive(codePointFromSurrogatePair(string), FITZPATRICK_MODIFIER_START, FITZPATRICK_MODIFIER_END);
}
function isVariationSelector(string) {
  return typeof string === 'string' && betweenInclusive(string.charCodeAt(0), VARIATION_MODIFIER_START, VARIATION_MODIFIER_END);
}
function isDiacriticalMark(string) {
  return typeof string === 'string' && betweenInclusive(string.charCodeAt(0), DIACRITICAL_MARKS_START, DIACRITICAL_MARKS_END);
}
function isGraphem(string) {
  return typeof string === 'string' && GRAPHEMS.indexOf(string.charCodeAt(0)) !== -1;
}
function isZeroWidthJoiner(string) {
  return typeof string === 'string' && string.charCodeAt(0) === ZWJ;
}
function codePointFromSurrogatePair(pair) {
  const highOffset = pair.charCodeAt(0) - HIGH_SURROGATE_START;
  const lowOffset = pair.charCodeAt(1) - LOW_SURROGATE_START;
  return (highOffset << 10) + lowOffset + 0x10000;
}
function betweenInclusive(value, lower, upper) {
  return value >= lower && value <= upper;
}
function _substring(string, start, width) {
  const chars = _runes(string);
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
  Object.defineProperty(_runes, 'runes', {
    value: _runes
  });
  Object.defineProperty(_runes, 'default', {
    value: _runes
  });
  Object.defineProperty(_runes, "__esModule", {
    value: true
  });
  Object.defineProperty(_runes, 'substr', {
    value: _substring
  });
  Object.defineProperty(_runes, 'substring', {
    value: _substring
  });
}

// @ts-ignore
module.exports = _runes;
//# sourceMappingURL=index.cjs.development.cjs.map
