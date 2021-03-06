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
};
