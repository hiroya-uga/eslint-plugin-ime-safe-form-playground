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

function submitForm(): void {}
