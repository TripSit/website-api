'use strict';

module.exports = {
	root: true,
	extends: 'airbnb-base',
	parserOptions: { sourceType: 'script' },
	env: { node: true },
	rules: {
		strict: [2, 'global'],
		indent: [2, 'tab'],
		'no-tabs': 0,
		'arrow-parens': 0,
		'consistent-return': 0,
	},
	overrides: [
		{
			files: [
				'tests/**/*.spec.js',
				'jest.setup.js',
				'**/__mocks__/*.js',
				'tests/server.js',
			],
			plugins: ['jest'],
			extends: ['plugin:jest/all'],
			env: { 'jest/globals': true },
			rules: {
				'jest/no-hooks': 0,
				'jest/prefer-expect-assertions': 0,
				'jest/no-test-return-statement': 0,
				'jest/require-top-level-describe': 0,
				'jest/expect-expect': 0,
				'import/no-extraneous-dependencies': [2, { devDependencies: true }],
			},
		},
		{
			files: ['tests/**/*.spec.js'],
			globals: { app: true },
		},
	],
};
