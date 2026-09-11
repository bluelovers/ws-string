# chinese-parseint2

> Parse Chinese numeric strings to integer; also usable for client-side script.

## 安裝 (Installation)

```bash
# 使用 yarn / Using yarn
yarn add chinese-parseint2

# 使用 yarn-tool / Using yarn-tool
yarn-tool add chinese-parseint2
# yt 是 yarn-tool 的別名 / yt is an alias for yarn-tool
yt add chinese-parseint2

# 使用 pnpm / Using pnpm
pnpm add chinese-parseint2

# 使用 npm / Using npm
npm install chinese-parseint2
```

## In browsers (front-end JavaScript)
Download `chinese-parseint.js`.
### Usage
```html
<script src="chinese-parseint.js"></script>
<!-- `chinese_parseInt` would be defined. -->
<script>
    console.log(chinese_parseInt('六八九萬')); ///< display 6890000 in console.
</script>
```

## In Node.js
### Usage
```javascript
var chinese_parseInt = require('chinese-parseint');
chinese_parseInt('一千零一十'); ///< returns 1010
chinese_parseInt('二十四万二'); ///< returns 242000
```

## Notes
* This does NOT check if the string is semantically right in Chinese. For example, `chinese_parseInt('千三萬')` returns 10030000 instead of `NaN` even if '千三萬' is not a right term in Chinese.
* See `chinese_parseInt.characters` for corresponding numbers of each accepted Chinese character.
* To convert character encodings (such as from Big5 to UTF-8), consider [`iconv-lite`](https://www.npmjs.com/package/iconv-lite) package.
