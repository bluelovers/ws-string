# node-str-width2

> Coverts characters width

`npm i str-util`

fork from `ascii-fullwidth-halfwidth-convert` `string-width`

## Usage

```javascript
import * as StrUtil from 'str-util';
```

### FullHalf

```
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
