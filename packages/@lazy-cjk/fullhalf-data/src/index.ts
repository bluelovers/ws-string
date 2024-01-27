import { tableDefaultInclude } from './defaults';
import { table } from './table';

export interface ITableObject
{
	from?: number;
	to?: number;

	values?: number[];

	not?: ITableObject[],
}

export interface ITable
{
	default?: ITableObject;

	number?: ITableObject;
	space?: ITableObject;

	'A-Z'?: ITableObject;
	'a-z'?: ITableObject;

	not_default?: ITableObject;

	[index: string]: ITableObject;
}

export type ITableDefaultIncludeKey = typeof tableDefaultInclude[number]

export { table, tableDefaultInclude }

export default table
