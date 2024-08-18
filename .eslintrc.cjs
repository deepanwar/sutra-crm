module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "airbnb-base",
    "prettier",
  ],
  ignorePatterns: ["dist", "node_modules/", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "prettier"],
  overrides: [
    {
      env: {
        browser: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-console": "off",
    "linebreak-style": "off",
    "no-underscore-dangle": ["error", { allow: ["_id"] }],
    "consistent-return": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "arrow-body-style": "off",
    radix: "off",
  },
};
