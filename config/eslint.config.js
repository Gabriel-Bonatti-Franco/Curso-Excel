import js from "@eslint/js";

export default [

  // Base recomendada
  js.configs.recommended,

  // 🔹 FRONTEND (browser)
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        HTMLElement: "readonly",
        customElements: "readonly",
        fetch: "readonly"
      }
    }
  },

  // 🔹 TESTES (Jest)
  {
    files: ["tests/**/*.js"],
    languageOptions: {
      globals: {
        describe: "readonly",
        test: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly"
      }
    }
  }
];