// NG: インライン arrow — isComposing ガードなし
function BadKeyDown() {
  return (
    <input
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          submitForm();
        }
      }}
    />
  );
}

// NG: onKeyUp も対象
function BadKeyUp() {
  return (
    <input
      onKeyUp={(e) => {
        if (e.key === 'Enter') {
          submitForm();
        }
      }}
    />
  );
}

// NG: onKeyPress は常に NG (deprecated)
function BadKeyPress() {
  return (
    <input
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          submitForm();
        }
      }}
    />
  );
}

// 注意: 参照渡しのハンドラは静的解析の限界により検出されない
// eslint-plugin-ime-safe-form の既知の制限
function UndetectedRef() {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      submitForm(); // ← ルールでは検出されない
    }
  };

  return <input onKeyDown={handleKeyDown} />;
}

function submitForm() {}
