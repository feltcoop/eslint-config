module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'svelte3'],
	settings: {
		'svelte3/typescript': true,
	},
	rules: {
		// eslint possible problems
		'array-callback-return': [1, {checkForEach: true}],
		'for-direction': 1,
		'no-async-promise-executor': 1,
		'no-await-in-loop': 1,
		'no-compare-neg-zero': 1,
		'no-constant-condition': 1,
		'no-constructor-return': 1,
		'no-control-regex': 1,
		'no-debugger': 1,
		'no-dupe-else-if': 1,
		'no-duplicate-case': 1,
		'no-empty-character-class': 1,
		'no-empty-pattern': 1,
		'no-ex-assign': 1,
		'no-inner-declarations': 1,
		'no-invalid-regexp': 1,
		'no-irregular-whitespace': 1,
		'no-misleading-character-class': 1,
		'no-promise-executor-return': 1,
		'no-prototype-builtins': 1,
		'no-self-compare': 1,
		'no-sparse-arrays': 1,
		'no-unmodified-loop-condition': 1,
		'no-unreachable-loop': 1,
		'no-unsafe-finally': 1,
		'no-unsafe-optional-chaining': 1,
		'no-useless-backreference': 1,
		'require-atomic-updates': 1, // TODO maybe delete?
		'use-isnan': 1,
		// eslint suggestions
		'consistent-this': 1,
		'default-case-last': 1,
		eqeqeq: [1, 'always', {null: 'ignore'}],
		'grouped-accessor-pairs': [1, 'getBeforeSet'],
		'no-alert': 1, // <3 these but often they're for testing; make explicit w/ eslint-ignore-line
		'no-case-declarations': 1,
		'no-else-return': 1,
		'no-empty': [1, {allowEmptyCatch: true}],
		'no-eval': 1,
		'no-extend-native': 1,
		'no-extra-boolean-cast': 1,
		'no-global-assign': 1,
		'no-lone-blocks': 1,
		'no-lonely-if': 1,
		// no-mixed-operators	disallow mixed binary operators
		// no-multi-assign	disallow use of chained assignment expressions
		// no-multi-str	disallow multiline strings
		// no-negated-condition	disallow negated conditions
		// no-nested-ternary	disallow nested ternary expressions
		// no-new	disallow `new` operators outside of assignments or comparisons
		// no-new-func	disallow `new` operators with the `Function` object
		// no-new-object	disallow `Object` constructors
		// no-new-wrappers	disallow `new` operators with the `String`, `Number`, and `Boolean` objects
		// no-nonoctal-decimal-escape	disallow `\8` and `\9` escape sequences in string literals
		// no-octal	disallow octal literals
		// no-octal-escape	disallow octal escape sequences in string literals
		// no-param-reassign	disallow reassigning `function` parameters
		// no-plusplus	disallow the unary operators `++` and `--`
		// no-proto	disallow the use of the `__proto__` property
		// no-regex-spaces	disallow multiple spaces in regular expressions
		// no-restricted-exports	disallow specified names in exports
		// no-restricted-globals	disallow specified global variables
		// no-restricted-properties	disallow certain properties on certain objects
		// no-restricted-syntax	disallow specified syntax
		// no-return-assign	disallow assignment operators in `return` statements
		// no-script-url	disallow `javascript:` urls
		// no-sequences	disallow comma operators
		// no-shadow-restricted-names	disallow identifiers from shadowing restricted names
		// no-ternary	disallow ternary operators
		// no-undefined	disallow the use of `undefined` as an identifier
		// no-underscore-dangle	disallow dangling underscores in identifiers
		// no-unneeded-ternary	disallow ternary operators when simpler alternatives exist
		// no-unused-labels	disallow unused labels
		// no-useless-call	disallow unnecessary calls to `.call()` and `.apply()`
		// no-useless-catch	disallow unnecessary `catch` clauses
		// no-useless-computed-key	disallow unnecessary computed property keys in objects and classes
		// no-useless-concat	disallow unnecessary concatenation of literals or template literals
		// no-useless-escape	disallow unnecessary escape characters
		// no-useless-rename	disallow renaming import, export, and destructured assignments to the same name
		// no-useless-return	disallow redundant return statements
		'no-var': 1, //	require `let` or `const` instead of `var`
		// no-void	disallow `void` operators
		// no-warning-comments	disallow specified warning terms in comments
		// no-with	disallow `with` statements
		// object-shorthand	require or disallow method and property shorthand syntax for object literals
		// one-var	enforce variables to be declared either together or separately in functions
		// one-var-declaration-per-line	require or disallow newlines around variable declarations
		// operator-assignment	require or disallow assignment operator shorthand where possible
		// prefer-arrow-callback	require using arrow functions for callbacks
		'prefer-const': 1, //	require `const` declarations for variables that are never reassigned after declared
		// prefer-destructuring	require destructuring from arrays and/or objects
		// prefer-exponentiation-operator	disallow the use of `Math.pow` in favor of the `**` operator
		// prefer-named-capture-group	enforce using named capture group in regular expression
		// prefer-numeric-literals	disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
		// prefer-object-has-own	disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
		// prefer-object-spread	disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
		// prefer-promise-reject-errors	require using Error objects as Promise rejection reasons
		// prefer-regex-literals	disallow use of the `RegExp` constructor in favor of regular expression literals
		'prefer-rest-params': 1, //	require rest parameters instead of `arguments`
		'prefer-spread': 1, //	require spread operators instead of `.apply()`
		// prefer-template	require template literals instead of string concatenation
		// quote-props	require quotes around object literal property names
		// radix	enforce the consistent use of the radix argument when using `parseInt()`
		// require-unicode-regexp	enforce the use of `u` flag on RegExp
		// require-yield	require generator functions to contain `yield`
		// sort-imports	enforce sorted import declarations within modules
		// sort-keys	require object keys to be sorted
		// sort-vars	require variables within the same declaration block to be sorted
		// spaced-comment	enforce consistent spacing after the `//` or `/*` in a comment
		// strict	require or disallow strict mode directives
		// symbol-description	require symbol descriptions
		// vars-on-top	require `var` declarations be placed at the top of their containing scope
		// yoda	require or disallow "Yoda" conditions
	},
	overrides: [
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3',
		},
		{
			// TODO this seems to not be working for Svelte files
			files: ['*.ts'], // , '*.svelte'
			rules: {
				'@typescript-eslint/adjacent-overload-signatures': 1,
				'@typescript-eslint/array-type': [1, {default: 'array-simple', readonly: 'array-simple'}],
				'@typescript-eslint/await-thenable': 1,
				'@typescript-eslint/consistent-type-assertions': 1,
				'@typescript-eslint/consistent-type-exports': [
					1,
					{fixMixedExportsWithInlineTypeSpecifier: true},
				],
				'@typescript-eslint/dot-notation': 1,
				'@typescript-eslint/explicit-module-boundary-types': [
					1,
					{allowArgumentsExplicitlyTypedAsAny: true},
				],
				'@typescript-eslint/method-signature-style': 1,
				'@typescript-eslint/no-array-constructor': 1,
				'@typescript-eslint/no-base-to-string': 1,
				'@typescript-eslint/no-duplicate-imports': 1,
				'@typescript-eslint/no-empty-function': 1,
				'@typescript-eslint/no-empty-interface': 1,
				'@typescript-eslint/no-extra-non-null-assertion': 1,
				'@typescript-eslint/no-floating-promises': [1, {ignoreIIFE: true}],
				'@typescript-eslint/no-for-in-array': 1,
				'@typescript-eslint/no-implied-eval': 1,
				'@typescript-eslint/no-inferrable-types': 1,
				'@typescript-eslint/no-invalid-this': [1, {capIsConstructor: false}],
				'@typescript-eslint/no-invalid-void-type': [1, {allowAsThisParameter: true}],
				'@typescript-eslint/no-loss-of-precision': 1,
				'@typescript-eslint/no-meaningless-void-operator': 1,
				'@typescript-eslint/no-misused-new': 1,
				'@typescript-eslint/no-misused-promises': [1, {checksVoidReturn: false}],
				'@typescript-eslint/no-namespace': 1,
				'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 1,
				'@typescript-eslint/no-non-null-asserted-optional-chain': 1,
				'@typescript-eslint/no-require-imports': 1,
				'@typescript-eslint/no-this-alias': 1,
				'@typescript-eslint/no-throw-literal': 1,
				'@typescript-eslint/no-unnecessary-boolean-literal-compare': 1,
				'@typescript-eslint/no-unnecessary-type-assertion': 1,
				'@typescript-eslint/no-unnecessary-type-constraint': 1,
				'@typescript-eslint/no-unused-expressions': [
					1,
					{allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true},
				],
				'@typescript-eslint/no-useless-constructor': 1,
				'@typescript-eslint/non-nullable-type-assertion-style': 1,
				'@typescript-eslint/prefer-as-const': 1,
				'@typescript-eslint/prefer-for-of': 1,
				'@typescript-eslint/prefer-includes': 1,
				'@typescript-eslint/prefer-namespace-keyword': 1,
				'@typescript-eslint/prefer-optional-chain': 1,
				'@typescript-eslint/prefer-reduce-type-parameter': 1,
				'@typescript-eslint/prefer-regexp-exec': 1,
				'@typescript-eslint/prefer-string-starts-ends-with': 1,
				'@typescript-eslint/prefer-ts-expect-error': 1,
				'@typescript-eslint/require-array-sort-compare': [1, {ignoreStringArrays: true}],
				'@typescript-eslint/return-await': 1,
				'@typescript-eslint/switch-exhaustiveness-check': 1,
				'@typescript-eslint/triple-slash-reference': [
					1,
					{path: 'never', types: 'never', lib: 'never'},
				],
			},
		},
	],
};
