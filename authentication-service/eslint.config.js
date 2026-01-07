const {
    defineConfig,
} = require("eslint/config");

const globals = require("globals");
const js = require("@eslint/js");
const jsdoc = require("eslint-plugin-jsdoc"); // Import the JSDoc plugin

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    languageOptions: {
        globals: {
            ...globals.node,
        },

        ecmaVersion: "latest",
        parserOptions: {},
    },

    extends: [
        compat.extends("eslint:recommended"),
        "plugin:jsdoc/recommended" // Extend JSDoc recommended rules
    ],

    plugins: ["jsdoc"], // Add the JSDoc plugin

    files: ["**/src/**/*.js"],

    rules: {
        "no-unused-vars": "warn",
        "no-undef": "warn",
        "jsdoc/check-alignment": "warn", // Ensure JSDoc comments are aligned
        "jsdoc/check-param-names": "warn", // Check parameter names in JSDoc
        "jsdoc/check-tag-names": "warn", // Check tag names in JSDoc
        "jsdoc/check-types": "warn", // Check types in JSDoc
        "jsdoc/require-param": "warn", // Require @param in JSDoc
        "jsdoc/require-returns": "warn" // Require @returns in JSDoc
    },
}]);
