// OK: isComposing ガードあり
document.getElementById('a').addEventListener('keydown', (e) => {
  if (e.isComposing) return;
  if (e.key === 'Enter') {
    submitForm();
  }
});

// OK: isComposing を && で使う
document.getElementById('b').addEventListener('keydown', (e) => {
  if (!e.isComposing && e.key === 'Enter') {
    submitForm();
  }
});

// OK: isComposing を外側の if で使う
document.getElementById('c').addEventListener('keydown', (e) => {
  if (!e.isComposing) {
    if (e.key === 'Enter') {
      submitForm();
    }
  }
});

// OK: form の submit イベントを使う (IME の影響を受けない)
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  submitForm();
});

function submitForm() {}
