/**
 * Created by user on 2017/12/24/024.
 *
 * @see https://www.jcinfo.net/tw/tools/kanji
 * @see http://dict.variants.moe.edu.tw/variants/rbt/japan_chinese_character_tiles.rbt?pageId=2981908
 * @see https://en.wikipedia.org/wiki/List_of_j%C5%8Dy%C5%8D_kanji
 * @see https://hanzi.unihan.com.cn/CJKCompare
 * @see http://www5b.biglobe.ne.jp/%7Eharigaya/variants.html
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
	['蝕', '蝕', '蚀'],
	//['戻', '戾', null],
].forEach(function ([jp, zht, zhs])
{
	addNew(TABLE, jp, zht, zhs);
});

TABLE = TABLE.concat(teachKanjiComparison);

export default TABLE;
//export default exports;
