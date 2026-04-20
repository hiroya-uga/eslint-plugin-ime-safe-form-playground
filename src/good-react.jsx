// OK: isComposing + keyCode 229 ガードあり (Safari 対応)
function GoodKeyDown() {
  return (
    <input
      onKeyDown={(e) => {
        if (e.isComposing || e.keyCode === 229) return;
        if (e.key === 'Enter') {
          submitForm();
        }
      }}
    />
  );
}

// OK: form の onSubmit を使う (IME の影響を受けない)
function GoodFormSubmit() {
  return (
    <form onSubmit={(e) => { e.preventDefault(); submitForm(); }}>
      <input type="text" />
      <button type="submit">送信</button>
    </form>
  );
}

// OK: guardFunctions に登録したカスタムガード関数 isImeSafe を使う
function isImeSafe(e) {
  return e.isComposing || e.keyCode === 229;
}
function GoodCustomGuard() {
  return (
    <input
      onKeyDown={(e) => {
        if (isImeSafe(e)) return;
        if (e.key === 'Enter') {
          submitForm();
        }
      }}
    />
  );
}

// OK: e.which でもガードがあれば OK
function GoodWhichWithGuard() {
  return (
    <input
      onKeyDown={(e) => {
        if (e.isComposing || e.keyCode === 229) return;
        if (e.which === 13) {
          submitForm();
        }
      }}
    />
  );
}

// OK: textarea でも同様
function GoodTextarea() {
  return (
    <textarea
      onKeyDown={(e) => {
        if (e.isComposing || e.keyCode === 229) return;
        if (e.key === 'Enter' && e.ctrlKey) {
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
      onKeyDown={(e) => {
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
      onKeyDown={(e) => {
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
      onKeyDown={(e) => {
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
          submitForm();
        }
      }}
    />
  );
}

function submitForm() {}
