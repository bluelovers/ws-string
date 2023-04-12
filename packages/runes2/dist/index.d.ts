export declare const enum EnumRunesCode {
	HIGH_SURROGATE_START = 55296,
	HIGH_SURROGATE_END = 56319,
	LOW_SURROGATE_START = 56320,
	REGIONAL_INDICATOR_START = 127462,
	REGIONAL_INDICATOR_END = 127487,
	FITZPATRICK_MODIFIER_START = 127995,
	FITZPATRICK_MODIFIER_END = 127999,
	VARIATION_MODIFIER_START = 65024,
	VARIATION_MODIFIER_END = 65039,
	DIACRITICAL_MARKS_START = 8400,
	DIACRITICAL_MARKS_END = 8447,
	SUBDIVISION_INDICATOR_START = 127988,
	TAGS_START = 917504,
	TAGS_END = 917631,
	ZWJ = 8205
}
export declare const GRAPHEMES: readonly number[];
export declare const enum EnumCodeUnits {
	unit_1 = 1,
	unit_2 = 2,
	unit_4 = 4
}
export declare function runes(string: string): string[];
export declare function nextUnits(i: number, string: string): number;
export declare function isFirstOfSurrogatePair(string: string): boolean;
export declare function isRegionalIndicator(string: string): boolean;
export declare function isSubdivisionFlag(string: string): boolean;
export declare function isFitzpatrickModifier(string: string): boolean;
export declare function isVariationSelector(string: string): boolean;
export declare function isDiacriticalMark(string: string): boolean;
export declare function isSupplementarySpecialpurposePlane(string: string): boolean;
export declare function isGrapheme(string: string): boolean;
export declare function isZeroWidthJoiner(string: string): boolean;
export declare function codePointFromSurrogatePair(pair: string): number;
export declare function betweenInclusive(value: number, lower: number, upper: number): boolean;
export declare function substring(string: string, start?: number, width?: number): string;

export {
	runes as default,
	substring as substr,
};

export {};
