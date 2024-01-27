import { charCodeAt } from '@lazy-cjk/str-util-char-code-at';

/**
 * @see https://en.wikipedia.org/wiki/Code_page_437
 */
export let _table = {
	default: {
		from: 0x0020 + 1,
		to: 0x007F - 1,
		values: [0x0020],
	},

	number: [0x0030, 0x0039],

	'A-Z': [0x0041, 0x005A],
	'a-z': [0x0061, 0x007A],

	space: [0x0020],

	slash: {
		values: charCodeAt(`/\\`),
	},

	bracket: {
		values: charCodeAt(`()[]{}`),
	},
} as const;
