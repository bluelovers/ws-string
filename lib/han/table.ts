/**
 * Created by user on 2017/12/24/024.
 */

/**
 * 資料來源 https://www.jpmarumaru.com/tw/teachKanjiComparison.asp
 * @see https://www.jpmarumaru.com/tw/teachKanjiComparison.asp
 */
const teachKanjiComparison = require('./teachKanjiComparison.json') as string[][];

export let TABLE = [] as string[][];

export function addNew(table: string[][], jp, zht, zhs): string[][]
{
	jp = Array.isArray(jp) ? jp : [jp];
	zht = Array.isArray(zht) ? zht : [zht];
	zhs = Array.isArray(zhs) ? zhs : [zhs];

	table.push([
		jp,
		zht,
		zhs,
	]);

	return table;
}

[
	[
		'蝕', '蝕', '蚀'
	],
].forEach(function ([jp, zht, zhs])
{
	addNew(TABLE, jp, zht, zhs);
});

TABLE = TABLE.concat(teachKanjiComparison);

export default TABLE;
//export default exports;
