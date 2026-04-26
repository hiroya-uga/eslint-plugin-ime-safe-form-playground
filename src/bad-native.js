// NG: isComposing ガードなし (e.key)
document.getElementById('a').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    submitForm();
  }
});

// NG: isComposing ガードなし (e.code)
document.getElementById('b').addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    submitForm();
  }
});

// NG: isComposing ガードなし (e.keyCode)
document.getElementById('c').addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    submitForm();
  }
});

// NG: isComposing ガードなし (switch)
document.getElementById('d').addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'Enter':
      submitForm();
      break;
  }
});

// NG: keyup も対象
document.getElementById('e').addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    submitForm();
  }
});

// NG: keypress は isComposing 不問で常に NG (deprecated)
document.getElementById('f').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    submitForm();
  }
});

// NG: onkeydown 代入
document.getElementById('g').onkeydown = (e) => {
  if (e.key === 'Enter') {
    submitForm();
  }
};

// NG: onkeyup 代入
document.getElementById('h').onkeyup = (e) => {
  if (e.key === 'Enter') {
    submitForm();
  }
};

// NG: onkeypress 代入
document.getElementById('i').onkeypress = (e) => {
  if (e.key === 'Enter') {
    submitForm();
  }
};

// NG: isComposing ガードはあるが keyCode === 229 がない (Safari 未対応)
document.getElementById('j').addEventListener('keydown', (e) => {
  if (e.isComposing) return;
  if (e.key === 'Enter') {
    submitForm();
  }
});

// NG: keyup でも同様に keyCode === 229 が必要
document.getElementById('k').addEventListener('keyup', (e) => {
  if (e.isComposing) return;
  if (e.key === 'Enter') {
    submitForm();
  }
});

// NG: isComposing ガードなし (e.which)
document.getElementById('l').addEventListener('keydown', (e) => {
  if (e.which === 13) {
    submitForm();
  }
});

// NG: switch に e.code を使う
document.getElementById('m').addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'Enter':
      submitForm();
      break;
  }
});

// NG: switch に e.keyCode を使う
document.getElementById('n').addEventListener('keydown', (e) => {
  switch (e.keyCode) {
    case 13:
      submitForm();
      break;
  }
});

// NG: カスタムガード関数を使っているが guardFunctions に未登録
function checkKey(e) {
  return e.isComposing || e.keyCode === 229;
}
document.getElementById('o').addEventListener('keydown', (e) => {
  if (checkKey(e)) return;
  if (e.key === 'Enter') {
    submitForm();
  }
});

// NG: isComposing ガードはあるが keyCode === 229 がない (e.which で代替しても不可)
document.getElementById('p').addEventListener('keydown', (e) => {
  if (e.isComposing || e.which === 229) return;
  if (e.key === 'Enter') {
    submitForm();
  }
});

// NG: Enter 以外のキー (Escape) でも isComposing ガードが必要 (1.3.0+)
document.getElementById('q').addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeDialog();
  }
});

// NG: ArrowDown でも同様 (1.3.0+)
document.getElementById('r').addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown') {
    focusNext();
  }
});

// NG: Tab キーも対象 (1.3.0+)
document.getElementById('s').addEventListener('keyup', (e) => {
  if (e.code === 'Tab') {
    focusNext();
  }
});

function submitForm() {}
function closeDialog() {}
function focusNext() {}
