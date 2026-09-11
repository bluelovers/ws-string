# uni-string

> Unicode-aware String object

## 安裝 (Installation)

```bash
# 使用 yarn / Using yarn
yarn add uni-string

# 使用 yarn-tool / Using yarn-tool
yarn-tool add uni-string
# yt 是 yarn-tool 的別名 / yt is an alias for yarn-tool
yt add uni-string

# 使用 pnpm / Using pnpm
pnpm add uni-string

# 使用 npm / Using npm
npm install uni-string
```

## api

* see [API](src/core.d.ts)
* [MDN String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## demo

```ts
import UString from 'packages/uni-string/src/index';

const UString = require('packages/uni-string/src/index')
```

```ts
console.log(UString.support);

let t = (new UString('♥️𠬠典')).padStart(10, '𠬠');

t = t.concat('\n♥️𠬠典そこで彼らは\'"，オリーブ山と呼ばれる山からエルサレムに帰った。');

console.dir(t);

let t2 = new UString(t);

console.log(t2);

//console.log(666, t2.substr(-9, 3));
console.log(666, t2.indexOf('𠬠典', 2));
console.log(666, t2.endsWith('𠬠典'));

let t3 = new UString('👩‍👩‍👧‍👦');
console.log(t3.size(), t3.split(''));
```

```ts
console.log('length', t2.length);
console.log('charLength', t2.charLength);
console.log('size()', t2.size());

//length 70
//charLength 49
//size() 49
```

## UString.support

```ts
{ 
  split: true,
  substr: true,
  substring: true,
  indexOf: true,
  includes: true,
  slice: true,
  charAt: true,
  startsWith: true,
  endsWith: true,
  padEnd: true,
  padStart: true }
```
