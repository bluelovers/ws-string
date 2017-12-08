/**
 * Created by user on 2017/12/8/008.
 */

import { isFullWidth, isFullwidthCodePoint } from './lib/is-fullwidth';
import { stringWidth } from './lib/width';
import FullHalf, { FullHalfCore, toFullNumber, toHalfNumber, toFullEnglish, toHalfEnglish, toFullWidth, toHalfWidth } from './lib/fullhalf';

export const tableFullHalf = FullHalfCore.table;

export { isFullWidth, isFullwidthCodePoint };
export { stringWidth };
export { toFullNumber, toHalfNumber, toFullEnglish, toHalfEnglish, toFullWidth, toHalfWidth }

// @ts-ignore
export default exports;
