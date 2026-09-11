# string-split-keep

> Split strings without applying separator after limit; Negative limit starts from the end. No regex separators.

## 安裝 (Installation)

```bash
# 使用 yarn / Using yarn
yarn add string-split-keep2

# 使用 yarn-tool / Using yarn-tool
yarn-tool add string-split-keep2
# yt 是 yarn-tool 的別名 / yt is an alias for yarn-tool
yt add string-split-keep2

# 使用 pnpm / Using pnpm
pnpm add string-split-keep2

# 使用 npm / Using npm
npm install string-split-keep2
```

```js
	var ssplit = require("string-split-keep")  
	  
	ssplit("word1 word2 word3", " ", 2) //["word1", "word2 word3"]  
	ssplit("word1 word2 word3", " ", -2) //["word1 word2", "word3"]

```  
		






