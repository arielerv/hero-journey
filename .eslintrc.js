module.exports = {
  extends: ['airbnb', 'prettier', 'plugin:prettier/recommended', 'eslint-config-prettier'],
  plugins: ['prettier', 'no-storage'],
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-restricted-syntax': [
      'error',
      'FunctionExpression',
      'WithStatement',
      "BinaryExpression[operator='in']",
    ],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-storage/no-browser-storage': 0,
    'react/destructuring-assignment': 0,
    'no-underscore-dangle': ['warn', { allow: ['__REDUX_DEVTOOLS_EXTENSION__'] }],
    'no-console': ['warn', { allow: ['clear', 'info', 'error'] }],
    'react/prop-types': [1, { ignore: ['children'] }],
    'no-unused-vars': 'warn',
    'react/self-closing-comp': 'warn',
    'prettier/prettier': 'warn',
    'react/no-array-index-key': 'off',
  },
  globals: {
    localStorage: true,
    fetch: true,
    window: true,
    navigator: true,
    document: true,
  },
};
