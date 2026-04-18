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

function submitForm(): void {}
