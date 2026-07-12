"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

/**
 * A Desmos-style on-screen math keyboard for touch devices. It is docked to the
 * bottom of the screen (full width, keys sized to fit), has tabbed pages
 * (numbers/basic, functions, letters), and inserts into whichever expression
 * field is focused. The phone's native keyboard is suppressed on those fields
 * (inputMode="none"), with a "⌨" key here as an escape hatch back to it.
 *
 * PlainExprInput (in MathField.tsx) registers a FieldApi with `kbStore` on focus
 * and clears it on blur; this component renders only while a field is active.
 */
export type FieldApi = {
  getEl: () => HTMLInputElement | null;
  insert: (text: string, caretBack?: number) => void;
  backspace: () => void;
  move: (dir: -1 | 1) => void;
  done: () => void;
  useNative: () => void;
};

let _active: FieldApi | null = null;
const _subs = new Set<() => void>();
export const kbStore = {
  set(f: FieldApi | null) {
    _active = f;
    _subs.forEach((s) => s());
  },
  get() {
    return _active;
  },
  subscribe(cb: () => void) {
    _subs.add(cb);
    return () => {
      _subs.delete(cb);
    };
  },
};

type Key = { t: string; ins?: string; back?: number; act?: "bs" | "left" | "right"; wide?: boolean };
const ins = (t: string, back = 0): Key => ({ t: t, ins: t, back });

// Page 1 — numbers & basic operators (5 columns).
const NUM: Key[] = [
  ins("x"), ins("y"), ins("="), ins("("), ins(")"),
  ins("7"), ins("8"), ins("9"), { t: "÷", ins: "/" }, ins("^"),
  ins("4"), ins("5"), ins("6"), { t: "×", ins: "*" }, { t: "√", ins: "sqrt()", back: 1 },
  ins("1"), ins("2"), ins("3"), { t: "−", ins: "-" }, ins("+"),
  ins("0"), ins("."), { t: "π", ins: "pi" }, ins("e"), ins(","),
];

// Page 2 — functions (3 columns).
const FN: Key[] = [
  { t: "sin", ins: "sin()", back: 1 }, { t: "cos", ins: "cos()", back: 1 }, { t: "tan", ins: "tan()", back: 1 },
  { t: "sin⁻¹", ins: "asin()", back: 1 }, { t: "cos⁻¹", ins: "acos()", back: 1 }, { t: "tan⁻¹", ins: "atan()", back: 1 },
  { t: "ln", ins: "ln()", back: 1 }, { t: "log", ins: "log()", back: 1 }, { t: "eˣ", ins: "exp()", back: 1 },
  { t: "√", ins: "sqrt()", back: 1 }, { t: "|x|", ins: "abs()", back: 1 }, { t: "( )", ins: "()", back: 1 },
  { t: "x²", ins: "^2" }, { t: "xⁿ", ins: "^" }, { t: "1/x", ins: "^-1" },
];

// Page 3 — letters for variable / parameter names (7 columns).
const ABC: Key[] = "abcdefghijklmnopqrstuvwxyz".split("").map((c) => ins(c));

export function MathKeyboard() {
  const active = useSyncExternalStore(kbStore.subscribe, kbStore.get, () => null);
  const [tab, setTab] = useState<"num" | "fn" | "abc">("num");

  // Reflow: make room below the page and scroll the focused field into view so
  // it stays visible above the keyboard.
  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.paddingBottom;
    document.body.style.paddingBottom = "340px";
    const el = active.getEl();
    const t = window.setTimeout(() => {
      try {
        el?.scrollIntoView({ block: "center", behavior: "smooth" });
      } catch {}
    }, 80);
    return () => {
      document.body.style.paddingBottom = prev;
      window.clearTimeout(t);
    };
  }, [active]);

  if (!active) return null;
  if (typeof document === "undefined") return null;

  const cols = tab === "num" ? 5 : tab === "fn" ? 3 : 7;
  const keys = tab === "num" ? NUM : tab === "fn" ? FN : ABC;

  // onPointerDown + preventDefault keeps the input focused (no blur → keyboard
  // stays open) and fires the action immediately.
  const tap = (fn: () => void) => (e: React.PointerEvent) => {
    e.preventDefault();
    fn();
  };
  const doKey = (k: Key) => {
    if (k.act === "bs") active.backspace();
    else if (k.act === "left") active.move(-1);
    else if (k.act === "right") active.move(1);
    else if (k.ins != null) active.insert(k.ins, k.back ?? 0);
  };

  const panel = (
    <div style={S.panel} onPointerDown={(e) => e.preventDefault()}>
      {/* top bar: page tabs + native / done */}
      <div style={S.topbar}>
        <div style={{ display: "flex", gap: 6 }}>
          <button style={S.tab(tab === "num")} onPointerDown={tap(() => setTab("num"))}>123</button>
          <button style={S.tab(tab === "fn")} onPointerDown={tap(() => setTab("fn"))}>f(x)</button>
          <button style={S.tab(tab === "abc")} onPointerDown={tap(() => setTab("abc"))}>abc</button>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <button style={S.util} onPointerDown={tap(() => active.useNative())} title="Use my phone keyboard">⌨</button>
          <button style={S.done} onPointerDown={tap(() => active.done())}>Done</button>
        </div>
      </div>

      {/* key grid */}
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 5, marginTop: 6 }}>
        {keys.map((k, i) => (
          <button key={i} style={S.key(tab === "fn")} onPointerDown={tap(() => doKey(k))} onContextMenu={(e) => e.preventDefault()}>
            {k.t}
          </button>
        ))}
      </div>

      {/* action row: caret + backspace */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 2fr", gap: 5, marginTop: 6 }}>
        <button style={S.action} onPointerDown={tap(() => active.move(-1))}>◀</button>
        <button style={S.action} onPointerDown={tap(() => active.move(1))}>▶</button>
        <button style={{ ...S.action, background: "#fee2e2", color: "#b91c1c", borderColor: "#fecaca" }} onPointerDown={tap(() => active.backspace())}>⌫</button>
      </div>
    </div>
  );

  return createPortal(panel, document.body);
}

const S = {
  panel: {
    position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 1000,
    background: "#eef2f7", borderTop: "1px solid #cbd5e1", boxShadow: "0 -6px 20px rgba(15,23,42,0.12)",
    padding: "8px 8px calc(8px + env(safe-area-inset-bottom))", boxSizing: "border-box", maxWidth: "100vw",
    userSelect: "none", WebkitUserSelect: "none", touchAction: "manipulation",
  } as React.CSSProperties,
  topbar: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 6 } as React.CSSProperties,
  tab: (on: boolean): React.CSSProperties => ({
    border: "1px solid " + (on ? "#1b7a44" : "#cbd5e1"), background: on ? "#1b7a44" : "#fff",
    color: on ? "#fff" : "#334155", borderRadius: 8, padding: "7px 14px", fontSize: 14, fontWeight: 800, cursor: "pointer",
  }),
  util: { border: "1px solid #cbd5e1", background: "#fff", color: "#334155", borderRadius: 8, padding: "7px 12px", fontSize: 16, fontWeight: 700, cursor: "pointer" } as React.CSSProperties,
  done: { border: "none", background: "#2563eb", color: "#fff", borderRadius: 8, padding: "7px 16px", fontSize: 14, fontWeight: 800, cursor: "pointer" } as React.CSSProperties,
  key: (fn: boolean): React.CSSProperties => ({
    border: "1px solid #dfe6ef", background: fn ? "#f8fbff" : "#fff", color: "#1f2a37",
    borderRadius: 8, padding: "12px 0", fontSize: fn ? 15 : 18, fontWeight: 600, cursor: "pointer",
    boxShadow: "0 1px 2px rgba(15,23,42,0.06)", display: "grid", placeItems: "center", minHeight: 42,
  }),
  action: { border: "1px solid #dfe6ef", background: "#fff", color: "#1f2a37", borderRadius: 8, padding: "12px 0", fontSize: 18, fontWeight: 700, cursor: "pointer", minHeight: 42 } as React.CSSProperties,
};
