
export const StripTable = [

	/[\u2000-\u200F]/g,
	/[\u2028-\u202F]/g,
	/[\u205F-\u206F]/g,

	// ZERO WIDTH NO-BREAK SPACE
	/\uFEFF/g,

];

export function normalize(input: string, options: IOptions = {}): string
{
	if (!options.allow_nbsp)
	{
		input = input.replace(/\xA0/g, ' ');
	}

	if (!options.allow_bom)
	{
		input = input.replace(/\uFEFF/g, '');
	}

	StripTable.forEach(function (r)
	{
		input = input.replace(r, '');
	});

	return input;
}

export type IOptions = {
	allow_nbsp?: boolean,
	allow_bom?: boolean,
}

export default normalize;
