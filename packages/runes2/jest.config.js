// @ts-check

const { join, dirname } = require('path');
const { tryRealpath } = require('jest-util');
const { tmpdir } = require('os');

/**
 * @param {string} name
 * @returns {string}
 * @private
 */
function _requireResolve(name)
{
	let result;

	try
	{
		// @ts-ignore
		const { requireResolveExtra, requireResolveCore } = require('@yarn-tool/require-resolve');

		const paths = [
			requireResolveExtra('@bluelovers/tsdx').result,
			requireResolveExtra('tsdx').result,
		].filter(Boolean);

		result = requireResolveCore(name, {
			includeGlobal: true,
			includeCurrentDirectory: true,
			paths,
		})
	}
	catch (e)
	{

	}

	result = result || require.resolve(name);

	console.info('[require.resolve]', name, '=>', result)

	return result
}

/**
 * @returns {string}
 * @see https://github.com/facebook/jest/blob/main/packages/jest-config/src/getCacheDirectory.ts
 */
function getCacheDirectory()
{
	const { getuid } = process;
	const tmpdirPath = process.env['JEST_CACHE_DIRECTORY'] || join(tryRealpath(tmpdir()), 'jest');
	if (getuid == null)
	{
		return tmpdirPath;
	}
	else
	{
		// On some platforms tmpdir() is `/tmp`, causing conflicts between different
		// users and permission issues. Adding an additional subdivision by UID can
		// help.
		return `${tmpdirPath}_${getuid.call(process).toString(36)}`;
	}
}

const testExt = [
	'ts',
	'tsx',
	'mts',
	'cts',
	//'js',
	//'jsx',
//	'mjs',
//	'cjs',
].join('|');

const cacheDirectory = getCacheDirectory();

/**
 * // @type { import('@jest/types').Config.InitialOptions }
 * @type { import('ts-jest').InitialOptionsTsJest }
 */
const jestConfig = {
	globals: {
		'ts-jest': {
			//tsconfig: 'tsconfig.spec.json',
		},
	},
	cacheDirectory,
	maxWorkers: 1,
	clearMocks: true,
	passWithNoTests: true,
	moduleFileExtensions: [
		'ts',
		'tsx',
		'mts',
		'cts',
		'js',
		'jsx',
		'mjs',
		'cjs',
		'json',
		'node',
	],
	testEnvironment: 'node',
	//testMatch: ['**/*.test.ts', '**/*.spec.ts'],
	testMatch: void 0,
	testRegex: [
		`\\.(tests?|spec)\\.(${testExt})$`,
		`__tests__\/\.*\\.(${testExt})$`,
	],
	testPathIgnorePatterns: [
		'/node_modules/',
		'/__fixtures__/',
		'/fixtures/',
		'/__tests__/helpers/',
		'/__tests__/utils/',
		'__mocks__',
		'/dist/',
	],
	//testRunner: 'jest-circus/runner',
	setupFilesAfterEnv: [
		//"jest-chain",
		//"jest-extended/all",
		//"jest-extended-extra",
		//"jest-num-close-with",
		/**
		 * https://medium.com/doctolib/how-to-run-the-same-jest-test-suite-across-several-platforms-jest-os-detection-plugin-included-f8113832482b
		 * https://github.com/doctolib/jest-os-detection
		 */
		//'jest-os-detection',
	],
	transform: {
		'.(ts|tsx|mts|cts)$': _requireResolve('ts-jest'),
	},
	verbose: true,
	/**
	 * if didn't set `coverageProvider` to `v8`
	 * with `collectCoverage` `true`, nodejs debug point maybe will fail
	 */
	coverageProvider: 'v8',
	collectCoverage: false,
	coveragePathIgnorePatterns: [
		'/node_modules/',
		'/__snapshots__/',
		'/__tests__/',
		'/__test__/',
		//'**/node_modules/',
		//'**/__snapshots__/',
		//'**/__tests__/',
		'/dist/',
		'/test/',
		'/fixture/',
	],
	/**
	 * https://github.com/facebook/jest/issues/9771#issuecomment-872764344
	 */
	//resolver: 'jest-node-exports-resolver',
}

/*
try
{
	if (!jestConfig.preset)
	{
		let result = require('@yarn-tool/ws-find-up-paths').findUpPathsWorkspaces('jest.config.js', {
			ignoreCurrentPackage: true,
			onlyFiles: true,
		}).result;
		if (result)
		{
			jestConfig.preset = result;
		}
	}
}
catch (e)
{

}
 */

try
{
	if (!jestConfig.preset)
	{
		let result = _requireResolve('@bluelovers/jest-config/package.json');
		if (result)
		{
			jestConfig.preset = dirname(result);
		}
	}
}
catch (e)
{

}

console.info(`jest.config`);
console.info(`- file: ${__filename}`);
console.info(`-  cwd: ${process.cwd()}`);
console.info(`- cacheDirectory: ${cacheDirectory}`);
console.info(`- preset: ${jestConfig.preset}`);

module.exports = jestConfig
