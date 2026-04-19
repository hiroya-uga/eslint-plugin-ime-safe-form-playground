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

// OK: e.which === 13 でも isComposing + keyCode 229 ガードがあれば OK
document.getElementById('e').addEventListener('keydown', (e) => {
  if (e.isComposing || e.keyCode === 229) return;
  if (e.which === 13) {
    submitForm();
  }
});

// OK: guardFunctions に登録したカスタムガード関数を使う
// eslint.config.js で guardFunctions: ['isImeSafe'] を設定済み
function isImeSafe(e) {
  return e.isComposing || e.keyCode === 229;
}
document.getElementById('f').addEventListener('keydown', (e) => {
  if (isImeSafe(e)) return;
  if (e.key === 'Enter') {
    submitForm();
  }
});

// OK: switch に e.keyCode を使う場合も isComposing + keyCode 229 ガードがあれば OK
document.getElementById('g').addEventListener('keydown', (e) => {
  if (e.isComposing || e.keyCode === 229) return;
  switch (e.keyCode) {
    case 13:
      submitForm();
      break;
  }
});

// OK: textareaでも同様
document.getElementById('textarea').addEventListener('keydown', (e) => {
  if (e.isComposing || e.keyCode === 229) return;
  if (e.key === 'Enter' && e.ctrlKey) {
    submitForm();
  }
});

function submitForm() {}
