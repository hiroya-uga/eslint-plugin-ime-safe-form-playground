# eslint-plugin-ime-safe-form playground

[eslint-plugin-ime-safe-form](https://github.com/hiroya-uga/eslint-plugin-ime-safe-form) の動作確認用リポジトリです。

## セットアップ

```sh
npm install
```

## 使い方

```sh
# src/ 以下をすべて lint
npm run lint

# NG パターンのみ（警告が出ることを確認）
npm run lint:bad

# OK パターンのみ（警告が出ないことを確認）
npm run lint:good
```

## ファイル構成

```
src/
  bad-native.js      # NG: ネイティブ JS（検出されるパターン）
  good-native.js     # OK: ネイティブ JS（問題なしのパターン）
  bad-react.jsx      # NG: React / JSX（検出されるパターン）
  good-react.jsx     # OK: React / JSX（問題なしのパターン）
  bad-ts.ts          # NG: TypeScript（検出されるパターン）
  good-ts.ts         # OK: TypeScript（問題なしのパターン）
  bad-react-ts.tsx   # NG: React / TSX（検出されるパターン）
  good-react-ts.tsx  # OK: React / TSX（問題なしのパターン）
```

## ESLint の設定例

### Flat config（ESLint 9）

```js
// eslint.config.js
import imeSafeForm from 'eslint-plugin-ime-safe-form';
import tsParser from '@typescript-eslint/parser';

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
  // TypeScript を使う場合
  {
    files: ['**/*.ts'],
    languageOptions: { parser: tsParser },
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
```

### Legacy config（ESLint 8）

```js
// .eslintrc.cjs
module.exports = {
  plugins: ['ime-safe-form'],
  extends: ['plugin:ime-safe-form/recommended:legacy'],
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: { jsx: true },
  },
};
```

Legacy config を使う場合は `ESLINT_USE_FLAT_CONFIG=false` を指定してください。

```sh
ESLINT_USE_FLAT_CONFIG=false npx eslint -c .eslintrc.cjs src/
```

## 既知の制限

JSX でハンドラを**参照渡し**した場合は検出されません。

```jsx
// 検出されない
const handleKeyDown = (e) => {
  if (e.key === 'Enter') submitForm();
};
<input onKeyDown={handleKeyDown} />;

// 検出される
<input onKeyDown={(e) => { if (e.key === 'Enter') submitForm(); }} />;
```

静的解析の限界によるもので、プラグイン本体の仕様です。
