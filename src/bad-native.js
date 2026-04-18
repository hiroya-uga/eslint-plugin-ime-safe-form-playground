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

function submitForm() {}
