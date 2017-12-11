# str-util

> convert full/half width, Chinese/Japanese number ... others util helper

`npm i str-util`

## Usage

```javascript
import * as StrUtil from 'str-util';
```

See more at [test](https://github.com/bluelovers/node-str-util/tree/master/test) / [doc](https://github.com/bluelovers/node-str-util/tree/master/doc)

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

## lib

* `ascii-fullwidth-halfwidth-convert`
* `string-width`
* `chinese-parseint`
* `japanese`
