import type { KeyboardEvent } from 'react';

// NG: isComposing ガードなし
function BadKeyDown() {
  return (
    <input
      onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
          submitForm();
        }
      }}
    />
  );
}

// NG: onKeyPress (deprecated)
function BadKeyPress() {
  return (
    <input
      onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
          submitForm();
        }
      }}
    />
  );
}

function submitForm(): void {}
