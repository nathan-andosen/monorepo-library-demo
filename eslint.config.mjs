import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [{
  ignores: [
    "**/dist",
    "**/node_modules",
    "**/.eslintrc.cjs", 
    "lib/**/*", 
    "generated/**/*", 
    "**/*.mjs",
    "**/*.js",
    "api/functions/lib/**"
  ]
}, {
  files: ['**/*.ts', '**/*.tsx']
}, ...fixupConfigRules(compat.extends(
  "eslint:recommended",
  "plugin:import/errors",
  "plugin:import/warnings",
  "plugin:import/typescript",
  "plugin:@typescript-eslint/recommended",
)), {
  plugins: {
    "@typescript-eslint": fixupPluginRules(typescriptEslint),
  },

  languageOptions: {
    globals: {
      ...globals.node,
    },

    parser: tsParser,
  },

  rules: {
    quotes: ["off", "double"],
    "import/no-unresolved": 0,
    "import/namespace": 0,

    indent: ["error", 2, {
      FunctionDeclaration: {
        parameters: 1,
      },

      FunctionExpression: {
        parameters: 1,
      },
    }],

    "operator-linebreak": ["error", "before"],
    "require-jsdoc": ["off"],
  },
}];