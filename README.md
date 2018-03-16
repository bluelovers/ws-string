# uni-string

> Unicode-aware String object

`npm install uni-string`

## api

* see [API](src/core.d.ts)

## demo

```ts
import UString from 'uni-string';
const UString = require('uni-string')
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
