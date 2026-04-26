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

// OK: modifier key (ctrlKey) のみでガード — IME 変換中は modifier key は押せないため安全
function GoodModifierCtrl() {
  return (
    <input
      onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && e.ctrlKey) {
          submitForm();
        }
      }}
    />
  );
}

// OK: modifier key (metaKey) のみでガード
function GoodModifierMeta() {
  return (
    <input
      onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && e.metaKey) {
          submitForm();
        }
      }}
    />
  );
}

// OK: ctrlKey または metaKey の組み合わせ (Ctrl+Enter / Cmd+Enter)
function GoodModifierCtrlOrMeta() {
  return (
    <input
      onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
          submitForm();
        }
      }}
    />
  );
}

// OK: allowComponents に登録済みのコンポーネントはチェック対象外 (1.2.0+)
function GoodAllowedComponent() {
  return (
    <SafeInput
      onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
          submitForm();
        }
      }}
    />
  );
}

// OK: input/textarea/select 以外の通常 HTML 要素は IME 入力不可とみなされる (1.2.0+)
function GoodDivKeyDown() {
  return (
    <div
      onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
          submitForm();
        }
      }}
    />
  );
}

// OK: contentEditable 要素も isComposing + keyCode 229 ガードがあれば OK (1.2.0+)
function GoodContentEditable() {
  return (
    <div
      contentEditable
      onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => {
        if (e.isComposing || e.keyCode === 229) return;
        if (e.key === 'Enter') {
          submitForm();
        }
      }}
    />
  );
}

// OK: Enter 以外のキー (Escape) は isComposing ガードのみで OK (keyCode 229 不要) (1.3.0+)
function GoodEscapeKey() {
  return (
    <input
      onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
        if (e.isComposing) return;
        if (e.key === 'Escape') {
          closeDialog();
        }
      }}
    />
  );
}

function submitForm(): void {}
function closeDialog(): void {}
