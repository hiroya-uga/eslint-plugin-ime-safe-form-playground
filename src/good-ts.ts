// OK: isComposing + keyCode 229 ガードあり (Safari 対応)
const input = document.getElementById('a') as HTMLInputElement;

input.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.isComposing || e.keyCode === 229) return;
  if (e.key === 'Enter') {
    submitForm();
  }
});

// OK: form の submit イベント
const form = document.getElementById('form') as HTMLFormElement;
form.addEventListener('submit', (e: SubmitEvent) => {
  e.preventDefault();
  submitForm();
});

// OK: guardFunctions に登録したカスタムガード関数 isImeSafe を使う
function isImeSafe(e: KeyboardEvent): boolean {
  return e.isComposing || e.keyCode === 229;
}
input.addEventListener('keydown', (e: KeyboardEvent) => {
  if (isImeSafe(e)) return;
  if (e.key === 'Enter') {
    submitForm();
  }
});

// OK: e.which でも isComposing + keyCode 229 ガードがあれば OK
input.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.isComposing || e.keyCode === 229) return;
  if (e.which === 13) {
    submitForm();
  }
});

// OK: modifier key (ctrlKey) のみでガード — IME 変換中は modifier key は押せないため安全
input.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.key === 'Enter' && e.ctrlKey) {
    submitForm();
  }
});

// OK: modifier key (metaKey) のみでガード
input.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.key === 'Enter' && e.metaKey) {
    submitForm();
  }
});

// OK: ctrlKey または metaKey の組み合わせ (Ctrl+Enter / Cmd+Enter)
input.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
    submitForm();
  }
});

// OK: Enter 以外のキー (Escape) は isComposing ガードのみで OK (keyCode 229 不要) (1.3.0+)
input.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.isComposing) return;
  if (e.key === 'Escape') {
    closeDialog();
  }
});

// OK: ArrowDown も isComposing + keyCode 229 ガードがあれば OK (1.3.0+)
input.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.isComposing || e.keyCode === 229) return;
  if (e.key === 'ArrowDown') {
    focusNext();
  }
});

function submitForm(): void {}
function closeDialog(): void {}
function focusNext(): void {}
