"use strict"

var ssplit = require("../index")
var assert = require("assert");

describe("limit undefined or 0", function() {
  it("should follow original string.split behaviour", function() {
    assert.deepEqual("word word word".split(" "), ssplit("word word word", " "))
    assert.deepEqual("word word word".split(" ", 0), ssplit("word word word", " ", 0))
  })
})

describe("separator undefined", function() {
  it("should follow original string.split behaviour", function() {
    assert.deepEqual("word word word".split(undefined), ssplit("word word word"))
    assert.deepEqual("word word word".split(undefined, 2), ssplit("word word word", undefined, 2))
  })
})

describe("separator empty", function() {
  it("should follow original string.split behaviour (except for keeping tail)", function() {
    assert.deepEqual("abcde".split("", 4), ["a", "b", "c", "d"])
    
    assert.deepEqual(["abcde"], ssplit("abcde", "", 1))
    assert.deepEqual(["a", "bcde"], ssplit("abcde", "", 2))
    assert.deepEqual(["a", "b", "c", "d", "e"], ssplit("abcde", "", 5))
    assert.deepEqual(["a", "b", "c", "d", "e"], ssplit("abcde", "", 17))
  })
  it("should follow the same logic for negative limits", function() {
    assert.deepEqual(["abcde"], ssplit("abcde", "", -1))
    assert.deepEqual(["abcd", "e"], ssplit("abcde", "", -2))
    assert.deepEqual(["a", "b", "c", "d", "e"], ssplit("abcde", "", -5))
    assert.deepEqual(["a", "b", "c", "d", "e"], ssplit("abcde", "", -17))
  })
})

describe("limit 1 or -1", function() {
  it("should return the whole string in an array", function() {
    assert.deepEqual(["   "], ssplit("   ", " ",  1))
    assert.deepEqual(["   "], ssplit("   ", " ",  -1))
    assert.deepEqual(["word word word"], ssplit("word word word", " ", 1))
    assert.deepEqual(["word word word"], ssplit("word word word", " ", -1))
  })
})

describe("limit > 1", function() {
  it("should split and keep tail after limit", function() {
    assert.deepEqual(["word", "word word"], ssplit("word word word", " ", 2))
  })
  it("should split completely if limit >= separator occurences", function() {
    assert.deepEqual(["word", "word", "word"], ssplit("word word word", " ", 3))
    assert.deepEqual(["word", "word", "word"], ssplit("word word word", " ", 17))
    
  })
  it("should split in the same fashion for input consisting of separators only", function() {
    assert.deepEqual(["", "  "], ssplit("   ", " ", 2))
    assert.deepEqual(["", "", " "], ssplit("   ", " ", 3))
    assert.deepEqual(["","","",""], ssplit("   ", " ", 4))
    assert.deepEqual(["","","",""], ssplit("   ", " ", 17))
  })
})

describe("limit < -1", function() {
  it("should split from the end and keep head after limit", function() {
    assert.deepEqual(["word word", "word"], ssplit("word word word", " ", -2))
  })
  it("should split completely if limit >= separator occurences", function() {
    assert.deepEqual(["word", "word", "word"], ssplit("word word word", " ", -3))
    assert.deepEqual(["word", "word", "word"], ssplit("word word word", " ", -17))
  })
  it("should split in the same fashion for input consisting of separators only", function() {
    assert.deepEqual(["  ", ""], ssplit("   ", " ", -2))
    assert.deepEqual([" ", "", ""], ssplit("   ", " ", -3))
    assert.deepEqual(["", "", "", ""], ssplit("   ", " ", -4))
    assert.deepEqual(["", "", "", ""], ssplit("   ", " ", -17))
  })
})


describe("longer separators", function() {
  it("should work just fine", function() {
    assert.deepEqual(["word", "more stuff", "12", ""], ssplit("wordSEPmore stuffSEP12SEP", "SEP", 9))
    assert.deepEqual(["word", "more stuff", "12", ""], ssplit("wordSEPmore stuffSEP12SEP", "SEP", -9))
    assert.deepEqual(["word", "more stuffSEP12"], ssplit("wordSEPmore stuffSEP12", "SEP", 2))
    assert.deepEqual(["wordSEPmore stuff", "12"], ssplit("wordSEPmore stuffSEP12", "SEP", -2))
  })
})



