/**
 * Created by user on 2018/3/16/016.
 */

import _runes, { substring } from './runes';

const _runes2 = _runes as typeof _runes & {
  substr: typeof substring,
};

_runes2.substr = substring;

const runes = _runes2 as typeof _runes2 & {
  default: typeof _runes2,
  runes: typeof _runes2,
};

Object.defineProperty(runes, "__esModule", { value: true });

runes.default = runes.runes = runes;

export = runes;
