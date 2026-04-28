/** OK: isComposing + keyCode 229 ガードあり (Safari 対応) */
document.getElementById('a').addEventListener('keydown', (e) => {
  if (e.isComposing || e.keyCode === 229) return;
  if (e.key === 'Enter') {
    submitForm();
  }
});

/** OK: isComposing を && で使う (Safari 対応) */
document.getElementById('b').addEventListener('keydown', (e) => {
  if (!e.isComposing && !(e.keyCode === 229) && e.key === 'Enter') {
    submitForm();
  }
});

/** OK: isComposing を外側の if で使う (Safari 対応) */
document.getElementById('c').addEventListener('keydown', (e) => {
  if (e.isComposing || e.keyCode === 229) return;
  if (e.code === 'Enter') {
    submitForm();
  }
});

/** OK: form の submit イベントを使う (IME の影響を受けない) */
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  submitForm();
});

/** OK: e.which === 13 でも isComposing + keyCode 229 ガードがあれば OK */
document.getElementById('e').addEventListener('keydown', (e) => {
  if (e.isComposing || e.keyCode === 229) return;
  if (e.which === 13) {
    submitForm();
  }
});

/** guardFunctions に登録したカスタムガード関数 isImeSafe。 */
function isImeSafe(e) {
  return e.isComposing || e.keyCode === 229;
}
document.getElementById('f').addEventListener('keydown', (e) => {
  if (isImeSafe(e)) return;
  if (e.key === 'Enter') {
    submitForm();
  }
});

/** OK: switch に e.keyCode を使う場合も isComposing + keyCode 229 ガードがあれば OK */
document.getElementById('g').addEventListener('keydown', (e) => {
  if (e.isComposing || e.keyCode === 229) return;
  switch (e.keyCode) {
    case 13:
      submitForm();
      break;
  }
});

/** OK: textarea でも同様 */
document.getElementById('textarea').addEventListener('keydown', (e) => {
  if (e.isComposing || e.keyCode === 229) return;
  if (e.key === 'Enter' && e.ctrlKey) {
    submitForm();
  }
});

/** OK: modifier key (ctrlKey) のみでガード。 */
document.getElementById('h').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.ctrlKey) {
    submitForm();
  }
});

/** OK: modifier key (metaKey) のみでガード */
document.getElementById('i').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.metaKey) {
    submitForm();
  }
});

/** OK: modifier key (shiftKey) のみでガード */
document.getElementById('j').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.shiftKey) {
    submitForm();
  }
});

/** OK: modifier key (altKey) のみでガード */
document.getElementById('k').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.altKey) {
    submitForm();
  }
});

/** OK: ctrlKey または metaKey の組み合わせ (Ctrl+Enter / Cmd+Enter) */
document.getElementById('l').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
    submitForm();
  }
});

/** OK: ctrlKey と metaKey の両方を要求するガード。 (1.3.1+) */
document.getElementById('l2').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && (e.ctrlKey && e.metaKey)) {
    submitForm();
  }
});

/** OK: Enter 以外のキー (Escape) は isComposing ガードのみで OK (1.3.0+) */
document.getElementById('m').addEventListener('keydown', (e) => {
  if (e.isComposing) return;
  if (e.key === 'Escape') {
    closeDialog();
  }
});

/** OK: isComposing ガードと modifier key ガードの組み合わせ。 (1.3.1+) */
document.getElementById('m2').addEventListener('keydown', (e) => {
  if (e.isComposing) return;
  if (e.key === 'Enter' && e.ctrlKey) {
    submitForm();
  }
});

/** OK: すべての key check が modifier key 条件下なら outer if でも OK (1.3.1+) */
document.getElementById('m3').addEventListener('keydown', (e) => {
  if (e.ctrlKey) {
    if (e.key === 'Enter') {
      submitForm();
    }
  } else if (e.altKey) {
    if (e.key === 'Tab') {
      focusNext();
    }
  }
});

/** OK: ArrowDown も isComposing ガードがあれば OK (1.3.0+) */
document.getElementById('n').addEventListener('keydown', (e) => {
  if (e.isComposing || e.keyCode === 229) return;
  if (e.key === 'ArrowDown') {
    focusNext();
  }
});

function submitForm() {}
function closeDialog() {}
function focusNext() {}
