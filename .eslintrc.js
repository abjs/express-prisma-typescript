module.exports = {
	root: true,
	extends: ['plugin:prettier/recommended'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'eslint-plugin-prettier'],
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'@typescript-eslint/no-shadow': ['error'],
				'no-shadow': 'off',
				'no-undef': 'off',
				'no-console': 'off',
				'spaced-comment': 'off',
				'import/prefer-default-export': 'off',
				'node/no-unsupported-features/es-syntax': 'off',
				'prettier/prettier': [
					'error',
					{
						singleQuote: true,
						bracketSpacing: true,
						arrowParens: 'always',
						useTabs: true,
						endOfLine: 'auto',
						tabWidth: 4,
						semi: true,
						trailingComma: 'es5',
						printWidth: 120,
					},
				],
			},
		},
	],
};
