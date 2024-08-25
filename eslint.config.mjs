import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    rules: {
      "prefer-const": "warn",
      "no-unused-vars": "error",
      "no-const-assign": "error",
      "no-constant-binary-expression": "error",
      "no-dupe-else-if": "error",
      "no-duplicate-imports": "error",
      "no-unreachable": "error",
      "no-use-before-define": "error",
      "no-useless-assignment": "error",
      "no-redeclare": "error",
    },
    plugins: {
      pluginReact
    },
  },
  {
    languageOptions: { 
      globals: globals.browser 
    }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];