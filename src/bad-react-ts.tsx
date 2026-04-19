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

function submitForm(): void {}
