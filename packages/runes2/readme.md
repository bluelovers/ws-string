# ✂️ Runes

> Unicode-aware JS string splitting with full Emoji support.

Split a string into its constituent characters, without munging emoji and other non-BMP code points.

**this is typescript version fork form [`runes`](https://www.npmjs.com/package/runes)**

## Why?

The native `String#split` implementation does not pay attention to [surrogate pairs](http://en.wikipedia.org/wiki/UTF-16). When the code units of a surrogate pair are split apart, they are not intelligible on their own. Unless they are put back together in the correct order, individual code units will cause problems in code that handles strings.

## Installation

```js
$ npm install runes2
```

## Example

```ts
const runes = require('runes2')
const runes = require('runes2').runes
import runes from 'runes2';
import * as runes from 'runes2';
```

```js
// Standard String.split
'♥️'.split('') // => ['♥', '️']
'Emoji 🤖'.split('') // => ['E', 'm', 'o', 'j', 'i', ' ', '�', '�']
'👩‍👩‍👧‍👦'.split('') // => ['�', '�', '‍', '�', '�', '‍', '�', '�', '‍', '�', '�']

// ES6 string iterator
[...'♥️'] => [ '♥', '️' ]
[...'Emoji 🤖'] // => [ 'E', 'm', 'o', 'j', 'i', ' ', '🤖' ]
[...'👩‍👩‍👧‍👦'] // => [ '👩', '', '👩', '', '👧', '', '👦' ]

// Runes
runes('♥️') // => ['♥️']
runes('Emoji 🤖') // => ['E', 'm', 'o', 'j', 'i', ' ', '🤖']
runes('👩‍👩‍👧‍👦') // => ['👩‍👩‍👧‍👦']

```

## Substring example

```js
// String.substring
'👨‍👨‍👧‍👧a'.substring(1) // => '�‍👨‍👧‍👧a'

// Runes
runes.substr('👨‍👨‍👧‍👧a', 1) // => 'a'
```
