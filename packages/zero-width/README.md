# README.md

    remove zero-width and some other util about space

## install

```
yarn add zero-width
```

```ts
let os = [
	'\udb40\udd00\n\r\b\t\v\u00a0 　\u0009',
	ENUM_ZERO_WIDTH.SPACE,
	ENUM_ZERO_WIDTH.NO_BREAK_SPACE,
	ENUM_ZERO_WIDTH.RIGHT_TO_LEFT_MARK,
	ENUM_ZERO_WIDTH.LEFT_TO_RIGHT_MARK,
].join('');

let ns = removeZeroWidth(os);

console.dir({
	os,
	ns,
	os_len: os.length,
	ns_len: ns.length,
});
```

=>

```json5
{
  os: '󠄀\n\r\b\t\u000b  　\t',
  ns: '\n\r\b\t\u000b  　\t',
  os_len: 15,
  ns_len: 9
}
```
