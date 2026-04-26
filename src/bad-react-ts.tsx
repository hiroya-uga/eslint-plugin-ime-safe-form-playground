import type { KeyboardEvent } from 'react';

// NG: isComposing ガードなし
function BadKeyDown() {
  return (
    <input
      onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
          submitForm();
        }
      }}
    />
  );
}

// NG: onKeyPress (deprecated)
function BadKeyPress() {
  return (
    <input
      onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
          submitForm();
        }
      }}
    />
  );
}

// NG: isComposing ガードはあるが keyCode === 229 がない (Safari 未対応)
function BadKeyDownNoSafari() {
  return (
    <input
      onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
        if (e.isComposing) return;
        if (e.key === 'Enter') {
          submitForm();
        }
      }}
    />
  );
}

// NG: e.which を使っても isComposing ガードなしは NG
function BadWhich() {
  return (
    <input
      onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
        if (e.which === 13) {
          submitForm();
        }
      }}
    />
  );
}

// NG: カスタムガード関数が guardFunctions に未登録
function checkIme(e: KeyboardEvent<HTMLInputElement>): boolean {
  return e.isComposing || e.keyCode === 229;
}
function BadUnregisteredGuard() {
  return (
    <input
      onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
        if (checkIme(e)) return;
        if (e.key === 'Enter') {
          submitForm();
        }
      }}
    />
  );
}

// NG: PascalCase コンポーネントは IME 入力可能とみなされる (allowComponents に未登録) (1.2.0+)
function BadCustomComponent() {
  return (
    <CustomInput
      onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
          submitForm();
        }
      }}
    />
  );
}

// NG: contentEditable 要素は IME 入力可能とみなされる (1.2.0+)
function BadContentEditable() {
  return (
    <div
      contentEditable
      onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
          submitForm();
        }
      }}
    />
  );
}

// NG: Enter 以外のキー (Escape) でも isComposing ガードが必要 (1.3.0+)
function BadEscapeKey() {
  return (
    <input
      onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Escape') {
          closeDialog();
        }
      }}
    />
  );
}

function submitForm(): void {}
function closeDialog(): void {}
