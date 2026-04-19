import type { KeyboardEvent, FormEvent } from 'react';

// OK: isComposing + keyCode 229 ガードあり (Safari 対応)
function GoodKeyDown() {
  return (
    <input
      onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
        if (e.isComposing || e.keyCode === 229) return;
        if (e.key === 'Enter') {
          submitForm();
        }
      }}
    />
  );
}

// OK: form の onSubmit
function GoodFormSubmit() {
  return (
    <form onSubmit={(e: FormEvent<HTMLFormElement>) => { e.preventDefault(); submitForm(); }}>
      <input type="text" />
      <button type="submit">送信</button>
    </form>
  );
}

// OK: guardFunctions に登録したカスタムガード関数 isImeSafe を使う
function isImeSafe(e: KeyboardEvent<HTMLInputElement>): boolean {
  return e.isComposing || e.keyCode === 229;
}
function GoodCustomGuard() {
  return (
    <input
      onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
        if (isImeSafe(e)) return;
        if (e.key === 'Enter') {
          submitForm();
        }
      }}
    />
  );
}

// OK: e.which でも isComposing + keyCode 229 ガードがあれば OK
function GoodWhichWithGuard() {
  return (
    <input
      onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
        if (e.isComposing || e.keyCode === 229) return;
        if (e.which === 13) {
          submitForm();
        }
      }}
    />
  );
}

function submitForm(): void {}
