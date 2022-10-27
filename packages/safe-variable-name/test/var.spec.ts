//@noUnusedParameters:false
/// <reference types="jest" />
/// <reference types="node" />
/// <reference types="expect" />

import { basename, extname } from 'path';
import { safeVariableName } from '../src/index';

beforeAll(async () =>
{

});

describe('when a basic one-word string is passed', function ()
{
	it('should return the string as-is', function ()
	{
		var actual = safeVariableName('foo');
		var expected = 'foo';
		expect(actual).toMatchSnapshot();
	});
});

describe('when a two-word name separated by hyphens is passed', function ()
{
	it('should return a camel-case version of the name', function ()
	{
		var actual = safeVariableName('foo-bar');
		var expected = 'fooBar';
		expect(actual).toMatchSnapshot();
	});
});

describe('when a malformed name is passed', function ()
{
	it('should return a camel-case version of the name', function ()
	{
		var actual = safeVariableName('this is a test - _');
		var expected = 'thisIsATest';
		expect(actual).toMatchSnapshot();
	});

	it('should return a camel-case version of the name', function ()
	{
		var actual = safeVariableName('_this is a test - _');
		var expected = 'thisIsATest';
		expect(actual).toMatchSnapshot();
	});

	it('should return a camel-case version of the name', function ()
	{
		var actual = safeVariableName('_this&&&is a test - _');
		var expected = 'thisIsATest';
		expect(actual).toMatchSnapshot();
	});
});
