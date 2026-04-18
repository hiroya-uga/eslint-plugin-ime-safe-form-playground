import type { KeyboardEvent, FormEvent } from 'react';

// OK: isComposing ガードあり
function GoodKeyDown() {
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
