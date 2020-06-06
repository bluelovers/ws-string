'use strict'

import runes, { substring } from '../runes';

test('✂️  Runes should handle emoji in middle', () => {
  expect(runes('abc😤def')).toEqual(['a', 'b', 'c', '😤', 'd', 'e', 'f'])
})

test('✂️  Runes should handle leading emoji', () => {
  expect(runes('🍕abd')).toEqual(['🍕', 'a', 'b', 'd'])
})

test('✂️  Runes should handle emoji on end', () => {
  expect(runes('123🍥')).toEqual(['1', '2', '3', '🍥'])
})

test('✂️  Runes should handle emoji', () => {
  expect(runes('🍕⚽⛵✨⏳☕⏰🇯🇲😍👍💅😋👭👯✊👸🏽❤️')).toEqual([
    '🍕', '⚽', '⛵', '✨', '⏳', '☕', '⏰', '🇯🇲',
    '😍', '👍', '💅', '😋', '👭', '👯', '✊', '👸🏽', '❤️'
  ])
})

test('✂️  Runes should handle checkmark', () => {
  expect(runes('123🍕✓')).toEqual(['1', '2', '3', '🍕', '✓'])
})

test('✂️  Runes should handle ZERO WIDTH JOINER', () => {
  expect(runes('👨‍👩‍👧')).toEqual(['👨‍👩‍👧'])
})

test('✂️  Runes should handle ZERO WIDTH JOINER 2', () => {
  expect(runes('👨‍👨‍👧‍👧')).toEqual(['👨‍👨‍👧‍👧'])
})

test('✂️  Runes should reverse', () => {
  const reversed = runes('123🍕✓').reverse().join('')
  const contReversed = runes(reversed).reverse().join('')
  expect(reversed).toBe('✓🍕321')
  expect(contReversed).toBe('123🍕✓')
})

test('✂️  Runes should handle single char', () => {
  expect(runes('a')).toEqual(['a'])
})

test('✂️  Runes should handle regular string', () => {
  expect(runes('Hello')).toEqual(['H', 'e', 'l', 'l', 'o'])
})

test('✂️  Runes should handle chinese', () => {
  const string = '𨭎", "𠬠", and "𩷶"'
  const result = runes(string)
  expect(result.length).toBe(16)
  expect(result[0]).toBe('𨭎')
  expect(result[1]).toBe('"')
  expect(result[5]).toBe('𠬠')
  expect(result[6]).toBe('"')
  expect(result[14]).toBe('𩷶')
  expect(result[15]).toBe('"')
})

test('✂️  Runes should handle chinese 2', () => {
  const string = '𠬠𡬶𫗭𣛙𢎐'
  const result = runes(string)

  expect(result).toEqual([ '𠬠', '𡬶', '𫗭', '𣛙', '𢎐' ])
})

test('✂️  Runes should handle math script', () => {
  expect(runes('𝒞𝒯𝒮𝒟')).toEqual(['𝒞', '𝒯', '𝒮', '𝒟'])
})

test('✂️  Runes should handle fraktur', () => {
  expect(runes('𝔅𝔎')).toEqual(['𝔅', '𝔎'])
})

test('✂️  Runes should handle acrophonic', () => {
  const string = '𐅧, 𐅨, and 𐅩'
  const result = runes(string)
  expect(result.length).toBe(11)
  expect(result[0]).toBe('𐅧')
  expect(result[1]).toBe(',')
  expect(result[3]).toBe('𐅨')
  expect(result[4]).toBe(',')
  expect(result[10]).toBe('𐅩')
})

test('✂️  Runes should handle arabic', () => {
  expect(runes('ځڂڃڄڅچڇڈ')).toEqual(['ځ', 'ڂ', 'ڃ', 'ڄ', 'څ', 'چ', 'ڇ', 'ڈ'])
})

test('✂️  Runes should handle skin tone indicators', () => {
  expect(runes('🎅🏻🎅🏼🎅🏽🎅🏾🎅🏿')).toEqual(['🎅🏻', '🎅🏼', '🎅🏽', '🎅🏾', '🎅🏿'])
})

test('✂️  Runes should handle country flags/regional indicator characters', () => {
  expect(runes('🇦🇸')).toEqual(['🇦🇸'])
})

test('✂️  Runes should handle 3️⃣', () => {
  expect(runes('3️⃣')).toEqual(['3️⃣'])
})

test('✂️  Runes should handle 🏳️‍🌈', () => {
  expect(runes('🏳️‍🌈')).toEqual(['🏳️‍🌈'])
})

test('✂️  Runes should handle extended grapheme clusters', () => {
  expect(runes('g̈')).toEqual(['g̈'])
  expect(runes(' ำ')).toEqual([' ำ'])
  expect(runes('நகரத்தில்')).toEqual(['ந', 'க', 'ர', 'த்', 'தி', 'ல்'])
  expect(runes('ม้าลายหกตั')).toEqual(['ม้', 'า', 'ล', 'า', 'ย', 'ห', 'ก', 'ตั'])
})

test('✂️  Runes should handle empty string', () => {
  expect(runes('')).toEqual([])
})

test('✂️  Runes should throw for null and undefined', () => {
  // @ts-ignore
  expect(() => runes()).toThrow()
})

test('✂️  substring', () => {
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
