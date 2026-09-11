# ✂️ Runes

> Unicode-aware JS string splitting with full Emoji support.

Split a string into its constituent characters, without munging emoji and other non-BMP code points.

**this is typescript version fork form [`runes`](https://www.npmjs.com/package/runes)**

## Why?

The native `String#split` implementation does not pay attention to [surrogate pairs](http://en.wikipedia.org/wiki/UTF-16). When the code units of a surrogate pair are split apart, they are not intelligible on their own. Unless they are put back together in the correct order, individual code units will cause problems in code that handles strings.

## 安裝 (Installation)

```bash
# 使用 yarn / Using yarn
yarn add runes2

# 使用 yarn-tool / Using yarn-tool
yarn-tool add runes2
# yt 是 yarn-tool 的別名 / yt is an alias for yarn-tool
yt add runes2

# 使用 pnpm / Using pnpm
pnpm add runes2

# 使用 npm / Using npm
npm install runes2
```

## Example

```ts
const runes = require('runes2').default
const runes = require('runes2').runes
import runes from 'runes2';
import { runes } from 'runes2';
```

```js
// Standard String.split
'♥️'.split('') // => ['♥', '️']
'Emoji 🤖'.split('') // => ['E', 'm', 'o', 'j', 'i', ' ', '�', '�']
'👩‍👩‍👧‍👦'.split('') // => ['�', '�', '‍', '�', '�', '‍', '�', '�', '‍', '�', '�']

// ES6 string iterator
	[
...
'♥️'
] =>
['♥', '️']
	[
...
'Emoji 🤖'
] // => [ 'E', 'm', 'o', 'j', 'i', ' ', '🤖' ]
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
