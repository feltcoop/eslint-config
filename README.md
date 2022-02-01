# @feltcoop/eslint-config

> an ESLint config for the [@feltcoop](https://github.com/feltcoop) org

This ESLint config is designed to complement TypeScript and Prettier,
so all redundant rules are disabled.
Additionally, to distinguish linting problems from type errors while editing,
all of the rules are set to warn, not error,
and users are expected run `eslint --max-warnings 0` to treat them as errors when desired.

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
