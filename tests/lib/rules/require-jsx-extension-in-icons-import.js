/**
 * @fileoverview Enforces the explicit use of the .jsx extension in icon import paths to ensure proper module resolution and consistency across Next.js projects.
 * @author brian
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/require-jsx-extension-in-icons-import"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("require-jsx-extension-in-icons-import", rule, {
  valid: ["import IconArrowRight from '~icons/dashicons/arrow-right.jsx'"],

  invalid: [
    {
      code: "import IconArrowRight from '~icons/dashicons/arrow-right'",
      errors: [{ messageId: "missingJsxExtension", type: "Literal" }],
      output: "import IconArrowRight from '~icons/dashicons/arrow-right.jsx'",
    },
  ],
});
