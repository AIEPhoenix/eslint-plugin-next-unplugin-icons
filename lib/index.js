/**
 * @fileoverview A custom ESLint plugin for Next.js projects that integrates with unplugin-icons to catch potential issues related to its usage.
 * @author brian
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");

module.exports.configs = {
  recommended: {
    plugins: ["next-unplugin-icons"],
    rules: {
      "next-unplugin-icons/require-jsx-extension-in-icons-import": "error",
    },
  },
};
