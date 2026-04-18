// OK: isComposing ガードあり
function GoodKeyDown() {
  return (
    <input
      onKeyDown={(e) => {
        if (e.isComposing) return;
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

function submitForm() {}
