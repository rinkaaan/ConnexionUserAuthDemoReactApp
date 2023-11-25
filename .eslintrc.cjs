module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'off',
      { allowConstantExport: true },
    ],
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'react/react-in-jsx-scope': 'off',
    'prefer-const': 'error',
    'react/prop-types': 'off',
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/no-unused-vars': 'off',
  },
}
