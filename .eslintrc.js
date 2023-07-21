module.exports = {
  env: {
    browser: true,
    es6: true,
    es2021: true,
    'jest/globals': true,
    'cypress/globals': true,
    'commonjs': true,
    'node': true,
  },
  extends: ['plugin:react/recommended', 'plugin:cypress/recommended', 'prettier'],
  globals: {
    process: true,
    module: true,
    require: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'jest', 'cypress', 'prettier'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'never'],
    eqeqeq: 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'no-console': 0,
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
