import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,

  // 🔹 FRONTEND
  {
    files: ["src/**/*.js"],
    languageOptions: {
      globals: globals.browser
    }
  },

  // 🔹 TESTES (Jest + DOM)
  {
    files: ["tests/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.browser,
        global: "readonly"
      }
    }
  }
];