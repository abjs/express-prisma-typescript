module.exports = {
	singleQuote: true,
	bracketSpacing: true,
	arrowParens: 'always',
	useTabs: true,
	endOfLine: 'auto',
	tabWidth: 4,
	semi: true,
	trailingComma: 'es5',
	printWidth: 120,
	overrides: [
		{
			files: '*.json',
			options: {
				tabWidth: 2,
				printWidth: 80,
				useTabs: false,
			},
		},
	],
};
