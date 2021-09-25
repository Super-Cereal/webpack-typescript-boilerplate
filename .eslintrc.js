module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    requireConfigFile: false,
  },
  rules: {
    'import/no-named-as-default': 0,
    'no-shadow': 0,
    'no-param-reassign': 0,
    semi: ['error', 'always'],
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: ['airbnb', 'airbnb-typescript', 'prettier'],
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      plugins: ['@typescript-eslint'],
    },
  ],

  settings: {
    'import/resolver': {
      node: {
        extentions: ['.tsx', 'ts', '.jsx', '.js'],
      },
      webpack: {
        config: './config/webpack.common.js',
      },
    },
  },
};
