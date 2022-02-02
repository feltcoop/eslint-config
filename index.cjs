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
	overrides: [
		{
			files: ['*.ts'],
		},
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3',
		},
	],
	settings: {
		'svelte3/typescript': true,
	},
	rules: {
		//
		//
		// eslint possible problems
		//
		'array-callback-return': [1, {checkForEach: true}], //	enforce `return` statements in callbacks of array methods
		// for-direction	enforce "for" loop update clause moving the counter in the right direction.
		// no-async-promise-executor	disallow using an async function as a Promise executor
		// no-await-in-loop	disallow `await` inside of loops
		// no-class-assign	disallow reassigning class members
		// no-compare-neg-zero	disallow comparing against -0
		// no-cond-assign	disallow assignment operators in conditional expressions
		// no-constant-condition	disallow constant expressions in conditions
		// no-constructor-return	disallow returning value from constructor
		// no-control-regex	disallow control characters in regular expressions
		// no-debugger	disallow the use of `debugger`
		// no-dupe-else-if	disallow duplicate conditions in if-else-if chains
		// no-duplicate-case	disallow duplicate case labels
		// no-empty-character-class	disallow empty character classes in regular expressions
		// no-empty-pattern	disallow empty destructuring patterns
		// no-ex-assign	disallow reassigning exceptions in `catch` clauses
		// no-fallthrough	disallow fallthrough of `case` statements
		// no-inner-declarations	disallow variable or `function` declarations in nested blocks
		// no-invalid-regexp	disallow invalid regular expression strings in `RegExp` constructors
		// no-irregular-whitespace	disallow irregular whitespace
		// no-misleading-character-class	disallow characters which are made with multiple code points in character class syntax
		// no-promise-executor-return	disallow returning values from Promise executor functions
		// no-prototype-builtins	disallow calling some `Object.prototype` methods directly on objects
		// no-self-assign	disallow assignments where both sides are exactly the same
		// no-self-compare	disallow comparisons where both sides are exactly the same
		// no-sparse-arrays	disallow sparse arrays
		// no-template-curly-in-string	disallow template literal placeholder syntax in regular strings
		// no-unexpected-multiline	disallow confusing multiline expressions
		// no-unmodified-loop-condition	disallow unmodified loop conditions
		// no-unreachable-loop	disallow loops with a body that allows only one iteration
		// no-unsafe-finally	disallow control flow statements in `finally` blocks
		// no-unsafe-optional-chaining	disallow use of optional chaining in contexts where the `undefined` value is not allowed
		// no-unused-private-class-members	disallow unused private class members
		// no-useless-backreference	disallow useless backreferences in regular expressions
		// require-atomic-updates	disallow assignments that can lead to race conditions due to usage of `await` or `yield`
		// use-isnan	require calls to `isNaN()` when checking for `NaN`
		//
		//
		// eslint suggestions
		//
		// accessor-pairs	enforce getter and setter pairs in objects and classes
		// arrow-body-style	require braces around arrow function bodies
		// block-scoped-var	enforce the use of variables within the scope they are defined
		// camelcase	enforce camelcase naming convention
		// capitalized-comments	enforce or disallow capitalization of the first letter of a comment
		// class-methods-use-this	enforce that class methods utilize `this`
		// complexity	enforce a maximum cyclomatic complexity allowed in a program
		// consistent-return	require `return` statements to either always or never specify values
		// consistent-this	enforce consistent naming when capturing the current execution context
		// curly	enforce consistent brace style for all control statements
		// default-case	require `default` cases in `switch` statements
		// default-case-last	enforce default clauses in switch statements to be last
		// eqeqeq	require the use of `===` and `!==`
		// func-name-matching	require function names to match the name of the variable or property to which they are assigned
		// func-names	require or disallow named `function` expressions
		// func-style	enforce the consistent use of either `function` declarations or expressions
		// grouped-accessor-pairs	require grouped accessor pairs in object literals and classes
		// guard-for-in	require `for-in` loops to include an `if` statement
		// id-denylist	disallow specified identifiers
		// id-length	enforce minimum and maximum identifier lengths
		// id-match	require identifiers to match a specified regular expression
		// max-classes-per-file	enforce a maximum number of classes per file
		// max-depth	enforce a maximum depth that blocks can be nested
		// max-lines	enforce a maximum number of lines per file
		// max-lines-per-function	enforce a maximum number of lines of code in a function
		// max-nested-callbacks	enforce a maximum depth that callbacks can be nested
		// max-params	enforce a maximum number of parameters in function definitions
		// max-statements	enforce a maximum number of statements allowed in function blocks
		// multiline-comment-style	enforce a particular style for multiline comments
		// new-cap	require constructor names to begin with a capital letter
		// no-alert	disallow the use of `alert`, `confirm`, and `prompt`
		// no-bitwise	disallow bitwise operators
		// no-caller	disallow the use of `arguments.caller` or `arguments.callee`
		// no-case-declarations	disallow lexical declarations in case clauses
		// no-confusing-arrow	disallow arrow functions where they could be confused with comparisons
		// no-console	disallow the use of `console`
		// no-continue	disallow `continue` statements
		// no-delete-var	disallow deleting variables
		// no-div-regex	disallow division operators explicitly at the beginning of regular expressions
		// no-else-return	disallow `else` blocks after `return` statements in `if` statements
		// no-empty	disallow empty block statements
		// no-eq-null	disallow `null` comparisons without type-checking operators
		// no-eval	disallow the use of `eval()`
		// no-extend-native	disallow extending native types
		// no-extra-bind	disallow unnecessary calls to `.bind()`
		// no-extra-boolean-cast	disallow unnecessary boolean casts
		// no-extra-label	disallow unnecessary labels
		// no-floating-decimal	disallow leading or trailing decimal points in numeric literals
		// no-global-assign	disallow assignments to native objects or read-only global variables
		// no-implicit-coercion	disallow shorthand type conversions
		// no-implicit-globals	disallow declarations in the global scope
		// no-inline-comments	disallow inline comments after code
		// no-iterator	disallow the use of the `__iterator__` property
		// no-label-var	disallow labels that share a name with a variable
		// no-labels	disallow labeled statements
		// no-lone-blocks	disallow unnecessary nested blocks
		// no-lonely-if	disallow `if` statements as the only statement in `else` blocks
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
		// no-undef-init	disallow initializing variables to `undefined`
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
		//
		//
		// eslint layout & formatting: handled by Prettier (though some may be useful?)
		//
		//
		//
		// @typescript-eslint/eslint-plugin all rules
		//
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
		// TODO does `prefer-import` work for the SvelteKit `globals.d.ts`?
		'@typescript-eslint/triple-slash-reference': [
			1,
			{path: 'never', types: 'prefer-import', lib: 'never'},
		],
	},
};
