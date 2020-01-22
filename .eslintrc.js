module.exports = {
	env: {
		browser: true,
		es6: true
	},
	extends: ['standard'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint', 'eslint-plugin-prettier'],
	rules: {
		semi: ['error', 'always', { omitLastInOneLineBlock: true }],
		indent: ['error', 'tab'],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'space-before-function-paren': ['error', { anonymous: 'ignore', named: 'ignore', asyncArrow: 'always' }]
	},
	ignorePatterns: ['**/config.[jt]s']
};
