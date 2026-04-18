import imeSafeForm from 'eslint-plugin-ime-safe-form';
import tsParser from '@typescript-eslint/parser';

export default [
  imeSafeForm.configs.recommended,
  // オプション: checkKeyCodeForSafari (デフォルト: true)
  // Safari では compositionend が keydown より先に発火するため e.isComposing が false になる。
  // true にすると `|| e.keyCode === 229` ガードも必須と判定される。
  // false にすると e.isComposing のみで OK と判定される。
  {
    rules: {
      'ime-safe-form/require-ime-safe-submit': ['warn', { checkKeyCodeForSafari: true }],
    },
  },
  {
    files: ['**/*.jsx'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
    },
  },
  {
    files: ['**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
  },
];
