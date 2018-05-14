/**
 * Created by user on 2018/3/16/016.
 */

import UString from './src/core';

export = UString as typeof UString & {
	default: typeof UString,
	UString: typeof UString,
};

// @ts-ignore
UString.default = UString.UString = UString;
