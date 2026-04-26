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

// NG: e.which を使っても isComposing ガードなしは NG
input.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.which === 13) {
    submitForm();
  }
});

// NG: switch に e.code を使う
input.addEventListener('keydown', (e: KeyboardEvent) => {
  switch (e.code) {
    case 'Enter':
      submitForm();
      break;
  }
});

// NG: カスタムガード関数が guardFunctions に未登録
function checkIme(e: KeyboardEvent): boolean {
  return e.isComposing || e.keyCode === 229;
}
input.addEventListener('keydown', (e: KeyboardEvent) => {
  if (checkIme(e)) return;
  if (e.key === 'Enter') {
    submitForm();
  }
});

// NG: Enter 以外のキー (Escape) でも isComposing ガードが必要 (1.3.0+)
input.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    closeDialog();
  }
});

// NG: ArrowDown も対象 (1.3.0+)
input.addEventListener('keyup', (e: KeyboardEvent) => {
  if (e.key === 'ArrowDown') {
    focusNext();
  }
});

function submitForm(): void {}
function closeDialog(): void {}
function focusNext(): void {}
