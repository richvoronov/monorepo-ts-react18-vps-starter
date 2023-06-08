// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  env: {
    node: true,
    browser: true,
    es2022: true,
  },
  extends: ["@gravity-ui/eslint-config", "plugin:unicorn/recommended"],
  plugins: ["unicorn"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/ban-ts-comment": "warn",
    "unicorn/filename-case": [
      "error", {
        "cases": {
          "camelCase": true,
          "pascalCase": true
        },
        "ignore": [
          "\\.d\\.ts$",
        ]
      }
    ],
    "@typescript-eslint/no-unused-vars": "warn",
    "unicorn/prevent-abbreviations": [
      "error",
      {
        "allowList": {
          "Dev": true,
          "dev": true,
          "env": true,
          "Props": true
        },
        "ignore": [
          "\\.e2e$",
        ]
      }
    ],
    "semi": "off",
    "@typescript-eslint/semi": ["error"],
  },
};
