module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2022: true,
    jquery: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'no-unused-vars': ['off', { caughtErrorsIgnorePattern: '^ignore' }]
  }
};
