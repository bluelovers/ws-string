import { crlf, LF, CRLF, CR, chkcrlf, detectLineBreak, lineSplit } from '../src/index';

const text = 'foo\r\nbar\nbaz\r';

test(`LF`, () =>
{
	let actual = crlf(text, LF);

	expect(actual).not.toMatch(/\r/)
	expect(actual).toMatchSnapshot();
});

test(`CRLF`, () =>
{
	let actual = crlf(text, CRLF);

	expect(actual.replace(/\r\n/g, '')).toStrictEqual(actual.replace(/\s/g, ''))
	expect(actual).toMatchSnapshot();
});


test(`CR`, () =>
{
	let actual = crlf(text, CR);

	expect(actual).not.toMatch(/\n/)
	expect(actual).toMatchSnapshot();
});

test(`chkcrlf`, () =>
{
	let actual = chkcrlf(text);

	expect(actual).toMatchSnapshot();
});

test(`detectLineBreak`, () =>
{
	let actual = detectLineBreak(text);

	expect(actual).toMatchSnapshot();
});

test(lineSplit.name, () =>
{
	let actual = lineSplit(text);

	expect(actual).toMatchSnapshot();
});
