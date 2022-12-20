module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
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
