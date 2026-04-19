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

function submitForm(): void {}
