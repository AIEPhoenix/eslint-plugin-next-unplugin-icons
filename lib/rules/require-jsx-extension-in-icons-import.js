/**
 * @fileoverview Enforces the explicit use of the .jsx extension in icon import paths to ensure proper module resolution and consistency across Next.js projects.
 * @author brian
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem", // `problem`, `suggestion`, or `layout`
    docs: {
      description:
        "Enforces the explicit use of the .jsx extension in icon import paths to ensure proper module resolution and consistency across Next.js projects.",
      recommended: false,
      url: "https://github.com/unplugin/unplugin-icons", // URL to the documentation page for this rule
    },
    fixable: "code", // This rule is fixable by modifying the code
    schema: [], // Add a schema if the rule has options
    messages: {
      missingJsxExtension: "Imports from '~icons/**/*' must end with '.jsx'.",
    },
  },

  create(context) {
    return {
      ImportDeclaration(node) {
        const importPath = node.source.value;

        if (importPath.startsWith("~icons/") && !importPath.endsWith(".jsx")) {
          context.report({
            node: node.source,
            messageId: "missingJsxExtension",
            fix: function (fixer) {
              const fixedPath = importPath + ".jsx";
              return fixer.replaceText(node.source, `'${fixedPath}'`);
            },
          });
        }
      },
    };
  },
};
