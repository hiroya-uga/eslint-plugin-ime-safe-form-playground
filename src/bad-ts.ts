// NG: isComposing ガードなし
const input = document.getElementById('a') as HTMLInputElement;

input.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    submitForm();
  }
});

input.addEventListener('keyup', (e: KeyboardEvent) => {
  if (e.code === 'Enter') {
    submitForm();
  }
});

// NG: keypress (deprecated)
input.addEventListener('keypress', (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    submitForm();
  }
});

// NG: onkeydown 代入
input.onkeydown = (e: KeyboardEvent) => {
  if (e.keyCode === 13) {
    submitForm();
  }
};

// NG: isComposing ガードはあるが keyCode === 229 がない (Safari 未対応)
input.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.isComposing) return;
  if (e.key === 'Enter') {
    submitForm();
  }
});

function submitForm(): void {}
