'use strict'

import runes, { substring } from '../runes';

test('✂️  Runes should handle emoji in middle', () =>
{
	let string = 'abc😤def';
	let result = runes(string);
	expect(result).toEqual(['a', 'b', 'c', '😤', 'd', 'e', 'f'])

	expect(result).toMatchSnapshot();
	expect(result.length).toMatchSnapshot();
})

test('✂️  Runes should handle leading emoji', () =>
{
	let string = '🍕abd';
	let result = runes(string);
	expect(result).toEqual(['🍕', 'a', 'b', 'd'])

	expect(result).toMatchSnapshot();
	expect(result.length).toMatchSnapshot();
})

test('✂️  Runes should handle emoji on end', () =>
{
	let string = '123🍥';
	let result = runes(string);
	expect(result).toEqual(['1', '2', '3', '🍥'])

	expect(result).toMatchSnapshot();
	expect(result.length).toMatchSnapshot();
})

test('✂️  Runes should handle emoji', () =>
{
	let string = '🍕⚽⛵✨⏳☕⏰🇯🇲😍👍💅😋👭👯✊👸🏽❤️';
	let result = runes(string);
	expect(result).toEqual([
		'🍕', '⚽', '⛵', '✨', '⏳', '☕', '⏰', '🇯🇲',
		'😍', '👍', '💅', '😋', '👭', '👯', '✊', '👸🏽', '❤️',
	])

	expect(result).toMatchSnapshot();
	expect(result.length).toMatchSnapshot();
})

test('✂️  Runes should handle checkmark', () =>
{
	let string = '123🍕✓';
	let result = runes(string);
	expect(result).toEqual(['1', '2', '3', '🍕', '✓'])

	expect(result).toMatchSnapshot();
	expect(result.length).toMatchSnapshot();
})

test('✂️  Runes should handle ZERO WIDTH JOINER', () =>
{
	let string = '👨‍👩‍👧';
	let result = runes(string);
	expect(result).toEqual(['👨‍👩‍👧'])

	expect(result).toMatchSnapshot();
	expect(result.length).toMatchSnapshot();
})

test('✂️  Runes should handle ZERO WIDTH JOINER 2', () =>
{
	let string = '👨‍👨‍👧‍👧';
	let result = runes(string);
	expect(result).toEqual(['👨‍👨‍👧‍👧'])

	expect(result).toMatchSnapshot();
	expect(result.length).toMatchSnapshot();
})

test('✂️  Runes should reverse', () =>
{
	const reversed = runes('123🍕✓').reverse().join('')
	const contReversed = runes(reversed).reverse().join('')
	expect(reversed).toBe('✓🍕321')
	expect(contReversed).toBe('123🍕✓')

	expect(reversed).toMatchSnapshot();
	expect(contReversed).toMatchSnapshot();
})

test('✂️  Runes should handle single char', () =>
{
	let string = 'a';
	let result = runes(string);
	expect(result).toEqual(['a'])

	expect(result).toMatchSnapshot();
	expect(result.length).toMatchSnapshot();
})

test('✂️  Runes should handle regular string', () =>
{
	let string = 'Hello';
	let result = runes(string);
	expect(result).toEqual(['H', 'e', 'l', 'l', 'o'])

	expect(result).toMatchSnapshot();
	expect(result.length).toMatchSnapshot();
})

test('✂️  Runes should handle chinese', () =>
{
	const string = '𨭎", "𠬠", and "𩷶"'
	const result = runes(string)
	expect(result.length).toBe(16)
	expect(result[0]).toBe('𨭎')
	expect(result[1]).toBe('"')
	expect(result[5]).toBe('𠬠')
	expect(result[6]).toBe('"')
	expect(result[14]).toBe('𩷶')
	expect(result[15]).toBe('"')

	expect(result).toMatchSnapshot();
	expect(result.length).toMatchSnapshot();
})

test('✂️  Runes should handle chinese 2', () =>
{
	const string = '𠬠𡬶𫗭𣛙𢎐'
	const result = runes(string)

	expect(result).toEqual(['𠬠', '𡬶', '𫗭', '𣛙', '𢎐'])

	expect(result).toMatchSnapshot();
	expect(result.length).toMatchSnapshot();
})

test('✂️  Runes should handle math script', () =>
{
	let string = '𝒞𝒯𝒮𝒟';
	let result = runes(string);
	expect(result).toEqual(['𝒞', '𝒯', '𝒮', '𝒟'])

	expect(result).toMatchSnapshot();
	expect(result.length).toMatchSnapshot();
})

test('✂️  Runes should handle fraktur', () =>
{
	let string = '𝔅𝔎';
	let result = runes(string);
	expect(result).toEqual(['𝔅', '𝔎'])

	expect(result).toMatchSnapshot();
	expect(result.length).toMatchSnapshot();
})

test('✂️  Runes should handle acrophonic', () =>
{
	const string = '𐅧, 𐅨, and 𐅩'
	const result = runes(string)
	expect(result.length).toBe(11)
	expect(result[0]).toBe('𐅧')
	expect(result[1]).toBe(',')
	expect(result[3]).toBe('𐅨')
	expect(result[4]).toBe(',')
	expect(result[10]).toBe('𐅩')

	expect(result).toMatchSnapshot();
	expect(result.length).toMatchSnapshot();
})

test('✂️  Runes should handle arabic', () =>
{
	let string = 'ځڂڃڄڅچڇڈ';
	let result = runes(string);
	expect(result).toEqual(['ځ', 'ڂ', 'ڃ', 'ڄ', 'څ', 'چ', 'ڇ', 'ڈ'])

	expect(result).toMatchSnapshot();
	expect(result.length).toMatchSnapshot();
})

test('✂️  Runes should handle skin tone indicators', () =>
{
	let string = '🎅🏻🎅🏼🎅🏽🎅🏾🎅🏿';
	let result = runes(string);
	expect(result).toEqual(['🎅🏻', '🎅🏼', '🎅🏽', '🎅🏾', '🎅🏿'])

	expect(result).toMatchSnapshot();
	expect(result.length).toMatchSnapshot();
})

test('✂️  Runes should handle country flags/regional indicator characters', () =>
{
	let string = '🇦🇸';
	let result = runes(string);
	expect(result).toEqual(['🇦🇸'])

	expect(result).toMatchSnapshot();
	expect(result.length).toMatchSnapshot();
})

test('✂️  Runes should handle 3️⃣', () =>
{
	let string = '3️⃣';
	let result = runes(string);
	expect(result).toEqual(['3️⃣'])

	expect(result).toMatchSnapshot();
	expect(result.length).toMatchSnapshot();
})

test('✂️  Runes should handle 🏳️‍🌈', () =>
{
	let string = '🏳️‍🌈';
	let result = runes(string);
	expect(result).toEqual(['🏳️‍🌈'])

	expect(result).toMatchSnapshot();
	expect(result.length).toMatchSnapshot();
})

test('✂️  Runes should handle extended grapheme clusters', () =>
{
	let string = 'g̈';
	let result = runes(string);
	expect(result).toEqual(['g̈'])
	string = ' ำ';
	result = runes(string);
	expect(result).toEqual([' ำ'])
	string = 'நகரத்தில்';
	result = runes(string);
	expect(result).toEqual(['ந', 'க', 'ர', 'த்', 'தி', 'ல்'])
	string = 'ม้าลายหกตั';
	result = runes(string);
	expect(result).toEqual(['ม้', 'า', 'ล', 'า', 'ย', 'ห', 'ก', 'ตั'])

	expect(result).toMatchSnapshot();
	expect(result.length).toMatchSnapshot();
})

test('✂️  Runes should handle empty string', () =>
{
	expect(runes('')).toEqual([])
})

test('✂️  Runes should throw for null and undefined', () =>
{
	// @ts-ignore
	expect(() => runes()).toThrow()
})

test('✂️  substring', () =>
{
	expect(substring('abc')).toEqual('abc')
	expect(substring('abc', 1)).toEqual('bc')
	expect(substring('abc', 0, 0)).toEqual('')
	expect(substring('abc', 6, 100)).toEqual('')
	expect(substring('👨‍👨‍👧‍👧')).toEqual('👨‍👨‍👧‍👧')
	expect(substring('a👨‍👨‍👧‍👧', 1)).toEqual('👨‍👨‍👧‍👧')
	expect(substring('abc👨‍👨‍👧‍👧abc', 3)).toEqual('👨‍👨‍👧‍👧abc')
	expect(substring('👨‍👨‍👧‍👧abc', 1)).toEqual('abc')
	expect(substring('👨‍👨‍👧‍👧abcd', 2)).toEqual('bcd')
})
