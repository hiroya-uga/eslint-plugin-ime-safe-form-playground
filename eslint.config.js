import imeSafeForm from 'eslint-plugin-ime-safe-form';
import tsParser from '@typescript-eslint/parser';

export default [
  imeSafeForm.configs.recommended,
  // オプション: checkKeyCodeForSafari (デフォルト: true)
  // Safari では compositionend が keydown より先に発火するため e.isComposing が false になる。
  // true にすると `|| e.keyCode === 229` ガードも必須と判定される。
  // false にすると e.isComposing のみで OK と判定される。
  // オプション: guardFunctions (1.1.0+)
  // isComposing チェックを切り出したカスタムヘルパー関数名を登録する。
  // 登録した関数が呼ばれていれば IME ガードとして認識される。
  // オプション: jsxComponents (1.4.0+) ※allowComponents は非推奨
  //   allowComponents: チェック対象外にするコンポーネント名 (ドット記法対応)
  //   disallowComponents: 常にチェック対象にするコンポーネント名
  //   default: 'check' (デフォルト) | 'ignore' — PascalCase コンポーネントのデフォルト挙動
  // オプション: customElements (1.4.0+)
  //   disallowElements: チェック対象にするカスタム要素名
  //   allowElements: チェック対象外にするカスタム要素名
  //   default: 'ignore' (デフォルト) | 'check' — カスタム要素のデフォルト挙動
  {
    rules: {
      'ime-safe-form/require-ime-safe-submit': ['warn', {
        checkKeyCodeForSafari: true,
        guardFunctions: ['isImeSafe'],
        jsxComponents: {
          allowComponents: ['SafeInput', 'UI.SafeInput'],
        },
        customElements: {
          disallowElements: ['my-input'],
        },
      }],
      'ime-safe-form/require-ime-safe-key-events': ['warn', {
        checkKeyCodeForSafari: true,
        guardFunctions: ['isImeSafe'],
        jsxComponents: {
          allowComponents: ['SafeInput', 'UI.SafeInput'],
        },
        customElements: {
          disallowElements: ['my-input'],
        },
      }],
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
