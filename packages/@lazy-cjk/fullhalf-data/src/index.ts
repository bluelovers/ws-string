import { tableFullHalfDefaultInclude } from './defaults';
import { tableFullHalf } from './table';

export interface ITableFullHalfObject
{
	from?: number;
	to?: number;

	values?: number[];

	not?: ITableFullHalfObject[],
}

export interface ITableFullHalf
{
	default?: ITableFullHalfObject;

	number?: ITableFullHalfObject;
	space?: ITableFullHalfObject;

	'A-Z'?: ITableFullHalfObject;
	'a-z'?: ITableFullHalfObject;

	not_default?: ITableFullHalfObject;

	[index: string]: ITableFullHalfObject;
}

export type ITableFullHalfDefaultIncludeKey = typeof tableFullHalfDefaultInclude[number]

export { tableFullHalf, tableFullHalfDefaultInclude }

export default tableFullHalf
