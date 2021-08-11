module.exports = {
  env: {
    browser: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: 'babel-eslint',
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-extra-semi': 'error',
    'no-unused-vars': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'no-alert': 'off',
    'no-underscore-dangle': 'off',
  },
};
