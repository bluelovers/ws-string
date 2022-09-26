const REGEX_MATCH_INDENT = /^([ \t]*)((?:[\S\r\n].*|)$)/;
const REGEX_MATCH_INDENT_NO_BREAK_SPACE = /^([ \t\xa0]*)((?:[\S\r\n].*|)$)/;

export interface IOptions
{
	/**
	 * no-break space
	 * \xa0
	 */
	includeNoBreakSpace?: boolean,
}

export function detectIndentLine(input: string, options?: IOptions)
{
	const m = (options?.includeNoBreakSpace ? REGEX_MATCH_INDENT_NO_BREAK_SPACE : REGEX_MATCH_INDENT).exec(input);
	return {
		input,
		indent: m[1],
		body: m[2],
		bool: m[1].length > 0,
	}
}

export default detectIndentLine
