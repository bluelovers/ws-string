# str-util

> convert full/half width, Chinese/Japanese number ... others util helper

`npm i str-util`

## Usage

```javascript
import * as StrUtil from 'str-util';
```

See more at [test](https://github.com/bluelovers/node-str-util/tree/master/test) / [docs](https://bluelovers.github.io/node-str-util/)

### FullHalf

```javascript
const str = 'THE ｑｕｉｃｋ， ＢＲＯＷＮ\u3000fox.';

StrUtil.toFullWidth(str);
//=> 'ＴＨＥ　ｑｕｉｃｋ，　ＢＲＯＷＮ　ｆｏｘ．'

StrUtil.toHalfWidth(str);
//=> 'THE quick, BROWN fox.'

console.log(StrUtil.toFullEnglish('123abcABCＡＢＣ１２３／＊－＋＝－０］［’；／．+-*/=-09][\'";/.'));
console.log(StrUtil.toHalfEnglish('123abcABCＡＢＣ１２３／＊－＋＝－０］［’；／．+-*/=-09][\'";/.'));
console.log(StrUtil.toFullNumber('123abcABCＡＢＣ１２３／＊－＋＝－０］［’；／．+-*/=-09][\'";/.'));
console.log(StrUtil.toHalfNumber('123abcABCＡＢＣ１２３／＊－＋＝－０］［’；／．+-*/=-09][\'";/.'));
```

default
```
０１２３４５６７８９
0123456789
ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ
ABCDEFGHIJKLMNOPQRSTUVWXYZ
ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ
abcdefghijklmnopqrstuvwxyz
　

！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝～
!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
```

### 漢字 Number

```javascript
zh2num('千百十七') == 1117
num2zh(1117) == '千百十七'
```

### 中日漢字

```javascript
import { zh2jp } from 'str-util';

let t = '魔物解説　ランク等話　蚀蝕蝕王で触王 冒険者ギルド解説 蚀|蝕战|戦马|馬亚|亞國預中日漢字對照表'

console.log(zh2jp(t));
```

```javascript
import * as ZH2JP from 'str-util/lib/han/zh2jp';

// 沒有漢字存在時會直接返回原參數
console.log(ZH2JP.zhs2jp(1));

// http://ncode.syosetu.com/n1745ct/
let t = '魔物解説　ランク等話　蚀蝕蝕王で触王 冒険者ギルド解説 蚀|蝕战|戦马|馬亚|亞國預中日漢字對照表'

console.log(ZH2JP.zh2jp(t));
console.log(ZH2JP.zht2jp(t));
console.log(ZH2JP.zhs2jp(t));

console.log(ZH2JP.zht2zhs(t));
console.log(ZH2JP.zhs2zht(t));
```

## lib

* `ascii-fullwidth-halfwidth-convert`
* `string-width`
* `chinese-parseint`
* `japanese`
