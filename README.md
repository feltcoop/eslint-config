# @feltcoop/eslint-config

> an [ESLint](https://eslint.org/) config for the [@feltcoop](https://github.com/feltcoop) org

```bash
npm i -D @feltcoop/eslint-config
```

This ESLint config is designed to complement TypeScript and Prettier,
so all redundant rules are disabled.

Additionally, to distinguish linting problems from type errors while editing,
all of the rules are set to warn, not error,
and users are expected run `eslint --max-warnings 0` to treat them as errors when desired.
There may be a better way to do this,
but it works well to get yellow squigglies in text editors for linting problems
while reserving red squigglies for type errors.

## setup

Install ESLint dev dependencies with
[TypeScript](https://github.com/typescript-eslint/typescript-eslint/)
and [Svelte](https://github.com/sveltejs/eslint-plugin-svelte3) plugins:

```bash
npm i -D eslint \
	@typescript-eslint/eslint-plugin @typescript-eslint/parser \
	eslint-plugin-svelte3 \
	@feltcoop/eslint-config
```

Then add the following to your project's `package.json` or an
[ESLint config file](https://eslint.org/docs/user-guide/configuring/configuration-files):

```json
{
	"eslintConfig": {
		"root": true,
		"extends": "@feltcoop",
		"parserOptions": {
			"project": ["./tsconfig.json"],
			"extraFileExtensions": [".svelte"]
		}
	}
}
```

### vscode setup

To make [the VSCode ESLint plugin](https://github.com/microsoft/vscode-eslint) work with Svelte,
add the following to VSCode's `settings.json`:

```json
{
	"eslint.validate": ["javascript", "svelte"]
}
```

## develop

See [index.cjs](index.cjs) and the [ESLint docs](https://eslint.org/).

## publish

First update the [changelog](changelog.md) with a helpful summary of changes, then:

```bash
npm version patch|minor|major|etc
npm publish
git push
git push --tags
```

See the official docs for [`npm version`](https://docs.npmjs.com/cli/v8/commands/npm-version)
and [`npm publish`](https://docs.npmjs.com/cli/v8/commands/npm-publish).

## credits 🐢<sub>🐢</sub><sub><sub>🐢</sub></sub>

[ESLint](https://github.com/eslint/eslint) ∙
[@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint) ∙
[eslint-plugin-svelte3](https://github.com/sveltejs/eslint-plugin-svelte3) ∙
[Prettier](https://github.com/prettier/prettier)
& [more](package.json)

## license [🐦](https://wikipedia.org/wiki/Free_and_open-source_software)

public domain ⚘ [The Unlicense](license)
