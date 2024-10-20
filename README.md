# eslint-plugin-next-unplugin-icons

A custom ESLint plugin for Next.js projects that integrates with unplugin-icons to catch potential issues related to its usage.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-next-unplugin-icons`:

```sh
npm install eslint-plugin-next-unplugin-icons --save-dev
```

## Usage

1. **Enable the recommended configuration:**

   To automatically enable the recommended rules, add `plugin:next-unplugin-icons/recommended` to the `extends` section of your `.eslintrc` configuration file:

   ```json
   {
     "extends": [
       "plugin:next-unplugin-icons/recommended"
     ]
   }
   ```

   This enables all the recommended lint rules for ensuring best practices with `next-unplugin-icons`.

2. **Using the plugin manually:**

   Add `next-unplugin-icons` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

   ```json
   {
     "plugins": [
       "next-unplugin-icons"
     ]
   }
   ```

   Then, manually enable the specific rules you need in the `rules` section. For example:

   ```json
   {
     "rules": {
       "next-unplugin-icons/require-jsx-extension-in-icons-import": "error"
     }
   }
   ```

## Configurations

<!-- begin auto-generated configs list -->

|    | Name          |
| :- | :------------ |
| ✅  | `recommended` |

<!-- end auto-generated configs list -->



## Rules

<!-- begin auto-generated rules list -->

💼 Configurations enabled in.\
✅ Set in the `recommended` configuration.\
🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).

| Name                                                                                         | Description                                                                                                                                      | 💼 | 🔧 |
| :------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- | :- | :- |
| [require-jsx-extension-in-icons-import](docs/rules/require-jsx-extension-in-icons-import.md) | Enforces the explicit use of the .jsx extension in icon import paths to ensure proper module resolution and consistency across Next.js projects. | ✅  | 🔧 |

<!-- end auto-generated rules list -->


