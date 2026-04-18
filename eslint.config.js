import imeSafeForm from 'eslint-plugin-ime-safe-form';

export default [
  imeSafeForm.configs.recommended,
  {
    files: ['**/*.jsx'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
  },
];
