module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    extends: [
      'airbnb-base',
      'prettier'
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaVersion: 11,
      sourceType: 'module',
    },
    plugins: [
        'prettier',
  
    ],
    rules: {
        'prettier/prettier': 'error',
    },
  };