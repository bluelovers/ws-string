/**
 * Created by user on 2019/8/12.
 */

/**
 * simple merge, not real regexp merge
 * @private
 */
export function _regexpMerge(re: (string | RegExp)[])
{
	return new RegExp('[' + re.map(r => (typeof r === 'string' ? r : r.source).replace(/^\[/, '').replace(/\]$/, ''))
		.join('') + ']', 'ug')
}
