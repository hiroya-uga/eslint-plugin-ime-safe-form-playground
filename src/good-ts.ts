// OK: isComposing ガードあり
const input = document.getElementById('a') as HTMLInputElement;

input.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.isComposing) return;
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
