/**
 * Created by user on 2018/3/16/016.
 */

import _UString from './src/core';

const UString = _UString as typeof _UString & {
	default: typeof _UString,
	UString: typeof _UString,
};

UString.default = UString.UString = UString;

export = UString;
