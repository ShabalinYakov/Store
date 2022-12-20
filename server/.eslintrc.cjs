module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: ['standard', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    semi: [2, 'always'],
    indent: [0, 4],
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never' }
    ],
    'multiline-ternary': ['off'],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true
      }
    ]
  }
};
