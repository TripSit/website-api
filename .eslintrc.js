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
			files: ['tests/**/*test.js'],
			plugins: ['jest'],
			extends: ['plugin:jest/all'],
			env: { 'jest/globals': true },
			rules: {
				'jest/prefer-expect-assertions': 0,
				'jest/no-test-return-statement': 0,
				'jest/require-top-level-describe': 0,
			},
		},
	],
};
