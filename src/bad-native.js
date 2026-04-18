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

function submitForm() {}
