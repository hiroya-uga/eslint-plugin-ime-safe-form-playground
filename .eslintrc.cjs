// ESLint 8 (legacy config) の設定例
// 使用方法: ESLINT_USE_FLAT_CONFIG=false npx eslint src/
module.exports = {
  plugins: ['ime-safe-form'],
  extends: ['plugin:ime-safe-form/recommended:legacy'],
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: { jsx: true },
  },
};
