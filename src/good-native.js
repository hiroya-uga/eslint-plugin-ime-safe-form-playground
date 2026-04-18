// OK: isComposing + keyCode 229 ガードあり (Safari 対応)
document.getElementById('a').addEventListener('keydown', (e) => {
  if (e.isComposing || e.keyCode === 229) return;
  if (e.key === 'Enter') {
    submitForm();
  }
});

// OK: isComposing を && で使う (Safari 対応)
document.getElementById('b').addEventListener('keydown', (e) => {
  if (!e.isComposing && !(e.keyCode === 229) && e.key === 'Enter') {
    submitForm();
  }
});

// OK: isComposing を外側の if で使う (Safari 対応)
document.getElementById('c').addEventListener('keydown', (e) => {
  if (e.isComposing || e.keyCode === 229) return;
  if (e.code === 'Enter') {
    submitForm();
  }
});

// OK: form の submit イベントを使う (IME の影響を受けない)
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  submitForm();
});

function submitForm() {}
