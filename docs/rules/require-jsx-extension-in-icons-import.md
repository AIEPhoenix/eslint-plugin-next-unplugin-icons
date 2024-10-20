# Enforces the explicit use of the .jsx extension in icon import paths to ensure proper module resolution and consistency across Next.js projects (`next-unplugin-icons/require-jsx-extension-in-icons-import`)

💼 This rule is enabled in the ✅ `recommended` config.

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

This rule was created to ensure that when using `unplugin-icons`, icon import paths always include the `.jsx` extension. This helps avoid module resolution issues and ensures consistency when importing icons in Next.js projects.

## Rule Details

This rule enforces that any icon imports from the `~icons/` path must end with the `.jsx` extension. If the import path does not use the `.jsx` extension, ESLint will report an error and provide an automatic fix suggestion.

Examples of **incorrect** code for this rule:

```js

import IconArrowRight from '~icons/dashicons/arrow-right';

```

Examples of **correct** code for this rule:

```js

import IconArrowRight from '~icons/dashicons/arrow-right.jsx';

```
