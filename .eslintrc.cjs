module.exports = {
  env: {
    node: true,
    browser: true,
    es2022: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', '@html-eslint', 'prettier'],
  overrides: [
    {
      files: ['*.html'],
      parser: '@html-eslint/parser',
      extends: ['plugin:@html-eslint/recommended'],
    },
  ],
  rules: {
    'prettier/prettier': 'error',
    '@html-eslint/indent': ['error', 2],
    '@html-eslint/require-closing-tags': ['error', { selfClosing: 'always' }],
    '@html-eslint/no-extra-spacing-attrs': ['error', { enforceBeforeSelfClose: true }],
  },
};
