# crlf-normalize

> Detect and Normalize the newline characters

## 安裝 (Installation)

```bash
# 使用 yarn / Using yarn
yarn add crlf-normalize

# 使用 yarn-tool / Using yarn-tool
yarn-tool add crlf-normalize
# yt 是 yarn-tool 的別名 / yt is an alias for yarn-tool
yt add crlf-normalize

# 使用 pnpm / Using pnpm
pnpm add crlf-normalize

# 使用 npm / Using npm
npm install crlf-normalize
```

## demo

```ts
import { crlf, chkcrlf, LF, CRLF, CR } from 'crlf-normalize';

let text = 'foo\r\nbar\nbaz\r';

console.log([
	crlf(text, LF),
	crlf(text, CRLF),
	crlf(text, CR),
]);

console.log(chkcrlf(text));

/*
[ 'foo\nbar\nbaz\n', 'foo\r\nbar\r\nbaz\r\n', 'foo\rbar\rbaz\r' ]
{ lf: true, crlf: true, cr: true }
*/
```

### crlf_unicode_normalize(text: string, newline: string = LF)

```ts
function crlf_unicode_normalize(text: string, newline: string = LF): string
{
	const ln3 = newline + newline + newline;
	const ln2 = newline + newline;

	return text
		.replace(/\u000C/g, ln3)
		.replace(/\u2028/g, newline)
		.replace(/\u2029/g, ln2)
	;
}
```
