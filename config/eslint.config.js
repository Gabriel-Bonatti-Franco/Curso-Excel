import js from "@eslint/js";

export default [
  js.configs.recommended,

  {
    files: ["src/**/*.js"],
    languageOptions: {
      globals: globals.browser
    }
  },

  {
    files: ["tests/**/*.js"],
    languageOptions: {
      globals: globals.jest
    }
  }
];