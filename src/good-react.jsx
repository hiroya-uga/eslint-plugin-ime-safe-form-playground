

/** OK: isComposing + keyCode 229 ガードあり (Safari 対応) */
function GoodKeyDown() {
  return (
    <input
      onKeyDown={(e) => {
        if (e.nativeEvent.isComposing || e.keyCode === 229) return;
        if (e.key === 'Enter') {
          submitForm();
        }
      }}
    />
  );
}

/** OK: form の onSubmit を使う (IME の影響を受けない) */
function GoodFormSubmit() {
  return (
    <form onSubmit={(e) => { e.preventDefault(); submitForm(); }}>
      <input type="text" />
      <button type="submit">送信</button>
    </form>
  );
}

/** guardFunctions に登録したカスタムガード関数 isImeSafe。 */
/**
 * guardFunctions に登録したカスタムガード関数 isImeSafe。
 * @param {import('react').KeyboardEvent<HTMLInputElement>} e キーボードイベント。
 * @returns {boolean} IME 変換中または Safari 互換ガードが必要な場合は true。
 */
function isImeSafe(e) {
  return e.nativeEvent.isComposing || e.keyCode === 229;
}
function GoodCustomGuard() {
  return (
    <input
      onKeyDown={(e) => {
        if (isImeSafe(e)) return;
        if (e.key === 'Enter') {
          submitForm();
        }
      }}
    />
  );
}

/** OK: e.which でもガードがあれば OK */
function GoodWhichWithGuard() {
  return (
    <input
      onKeyDown={(e) => {
        if (e.nativeEvent.isComposing || e.keyCode === 229) return;
        if (e.which === 13) {
          submitForm();
        }
      }}
    />
  );
}

/** OK: textarea でも同様 */
function GoodTextarea() {
  return (
    <textarea
      onKeyDown={(e) => {
        if (e.nativeEvent.isComposing || e.keyCode === 229) return;
        if (e.key === 'Enter' && e.ctrlKey) {
          submitForm();
        }
      }}
    />
  );
}

/** OK: modifier key (ctrlKey) のみでガード。 */
function GoodModifierCtrl() {
  return (
    <input
      onKeyDown={(e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
          submitForm();
        }
      }}
    />
  );
}

/** OK: modifier key (metaKey) のみでガード */
function GoodModifierMeta() {
  return (
    <input
      onKeyDown={(e) => {
        if (e.key === 'Enter' && e.metaKey) {
          submitForm();
        }
      }}
    />
  );
}

/** OK: ctrlKey または metaKey の組み合わせ (Ctrl+Enter / Cmd+Enter) */
function GoodModifierCtrlOrMeta() {
  return (
    <input
      onKeyDown={(e) => {
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
          submitForm();
        }
      }}
    />
  );
}

/** OK: ctrlKey と metaKey の両方を要求するガード。 (1.3.1+) */
function GoodModifierCtrlAndMeta() {
  return (
    <input
      onKeyDown={(e) => {
        if (e.key === 'Enter' && (e.ctrlKey && e.metaKey)) {
          submitForm();
        }
      }}
    />
  );
}

/** OK: allowComponents に登録済みのコンポーネントはチェック対象外 (1.2.0+) */
function GoodAllowedComponent() {
  return (
    <SafeInput
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          submitForm();
        }
      }}
    />
  );
}

/** OK: div のような通常 HTML 要素は IME 入力不可とみなされる (1.2.0+) */
function GoodDivKeyDown() {
  return (
    <div
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          submitForm();
        }
      }}
    />
  );
}

/** OK: contentEditable={false} は IME 入力可能要素として扱わない。 (1.3.1+) */
function GoodContentEditableFalse() {
  return (
    <div
      contentEditable={false}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          submitForm();
        }
      }}
    />
  );
}

/** OK: select は IME 入力可能要素として扱わない。 (1.3.1+) */
function GoodSelectKeyDown() {
  return (
    <select
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          submitForm();
        }
      }}
    >
      <option value="a">A</option>
    </select>
  );
}

/** OK: contentEditable 要素も isComposing + keyCode 229 ガードがあれば OK (1.2.0+) */
function GoodContentEditable() {
  return (
    <div
      contentEditable
      onKeyDown={(e) => {
        if (e.nativeEvent.isComposing || e.keyCode === 229) return;
        if (e.key === 'Enter') {
          submitForm();
        }
      }}
    />
  );
}

/** OK: Enter 以外のキー (Escape) は isComposing ガードのみで OK (1.3.0+) */
function GoodEscapeKey() {
  return (
    <input
      onKeyDown={(e) => {
        if (e.nativeEvent.isComposing) return;
        if (e.key === 'Escape') {
          closeDialog();
        }
      }}
    />
  );
}

/** OK: isComposing ガードと modifier key ガードの組み合わせ。 (1.3.1+) */
function GoodIsComposingWithModifier() {
  return (
    <input
      onKeyDown={(e) => {
        if (e.nativeEvent.isComposing) return;
        if (e.key === 'Enter' && e.ctrlKey) {
          submitForm();
        }
      }}
    />
  );
}

/** OK: すべての key check が modifier key 条件下なら outer if でも OK (1.3.1+) */
function GoodNestedModifierGuards() {
  return (
    <input
      onKeyDown={(e) => {
        if (e.ctrlKey) {
          if (e.key === 'Enter') {
            submitForm();
          }
        } else if (e.altKey) {
          if (e.key === 'Tab') {
            focusNext();
          }
        }
      }}
    />
  );
}

/** OK: ドット記法コンポーネントも jsxComponents.allowComponents に登録済みなら OK (1.4.0+) */
function GoodDotNotationComponent() {
  return (
    <UI.SafeInput
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          submitForm();
        }
      }}
    />
  );
}

/**
 * allowComponents のサンプル用に使う最小の input ラッパー。
 * @param {import('react').ComponentPropsWithoutRef<'input'>} props
 */
function SafeInput(props) {
  return <input {...props} />;
}

const UI = {
  /** @param {import('react').ComponentPropsWithoutRef<'input'>} props */
  SafeInput: (props) => <input {...props} />,
};

function submitForm() {}
function closeDialog() {}
function focusNext() {}
