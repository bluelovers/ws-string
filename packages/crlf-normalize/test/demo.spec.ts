import { crlf, LF, CRLF, CR, chkcrlf } from '../index';

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
