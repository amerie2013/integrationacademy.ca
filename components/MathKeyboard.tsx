"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

/**
 * A Desmos-style on-screen math keyboard for touch devices. It is docked to the
 * bottom of the screen (full width, keys sized to fit), has tabbed pages
 * (numbers/basic, trig, functions, letters), and inserts into whichever
 * expression field is focused. The phone's native keyboard is suppressed on
 * those fields (inputMode="none"), with a "⌨" key here as an escape hatch.
 *
 * The trig page uses inv / hyp modifier toggles (like a scientific calculator)
 * so all 24 trig, inverse-trig, hyperbolic and inverse-hyperbolic functions are
 * reachable from six keys. Every function here exists in lib/mathExpr.
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

type Key = { t: React.ReactNode; ins: string; back?: number };
const ins = (t: string, s = t, back = 0): Key => ({ t, ins: s, back });
const fn = (label: React.ReactNode, name: string): Key => ({ t: label, ins: name + "()", back: 1 });

// Page 1 — numbers & basic operators (5 columns).
const NUM: Key[] = [
  ins("x"), ins("y"), ins("="), ins("("), ins(")"),
  ins("7"), ins("8"), ins("9"), ins("÷", "/"), ins("^"),
  ins("4"), ins("5"), ins("6"), ins("×", "*"), fn("√", "sqrt"),
  ins("1"), ins("2"), ins("3"), ins("−", "-"), ins("+"),
  ins("0"), ins("."), ins("π", "pi"), ins("e"), ins(","),
];

// Page 3 — functions / algebra (3 columns).
const FN: Key[] = [
  fn("√", "sqrt"), fn("∛", "cbrt"), ins("xⁿ", "^"),
  ins("x²", "^2"), ins("x³", "^3"), ins("x⁻¹", "^-1"),
  fn("ln", "ln"), fn("log", "log"), fn("eˣ", "exp"),
  fn("|x|", "abs"), ins("( )", "()", 1), ins("π", "pi"),
  fn("⌊x⌋", "floor"), fn("⌈x⌉", "ceil"), fn("round", "round"),
];

// Page 4 — letters for variable / parameter names (7 columns).
const ABC: Key[] = "abcdefghijklmnopqrstuvwxyz".split("").map((c) => ins(c));

// Page 2 — trig, built from these six with the inv / hyp modifiers applied.
const TRIG_BASE = ["sin", "cos", "tan", "sec", "csc", "cot"];

export function MathKeyboard() {
  const active = useSyncExternalStore(kbStore.subscribe, kbStore.get, () => null);
  const [tab, setTab] = useState<"num" | "trig" | "fn" | "abc">("num");
  const [inv, setInv] = useState(false);
  const [hyp, setHyp] = useState(false);

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

  // onPointerDown + preventDefault keeps the input focused (no blur → keyboard
  // stays open) and fires the action immediately.
  const tap = (fnc: () => void) => (e: React.PointerEvent) => {
    e.preventDefault();
    fnc();
  };
  const put = (k: Key) => active.insert(k.ins, k.back ?? 0);

  const trigKey = (base: string): Key => {
    const name = (inv ? "a" : "") + base + (hyp ? "h" : "");
    const label = (
      <>
        {hyp ? base + "h" : base}
        {inv ? <sup>-1</sup> : null}
      </>
    );
    return fn(label, name);
  };

  const grid = (keys: Key[], cols: number, small = false) => (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 5 }}>
      {keys.map((k, i) => (
        <button key={i} style={S.key(small)} onPointerDown={tap(() => put(k))} onContextMenu={(e) => e.preventDefault()}>
          {k.t}
        </button>
      ))}
    </div>
  );

  const panel = (
    <div style={S.panel} onPointerDown={(e) => e.preventDefault()}>
      {/* top bar: page tabs + native / done */}
      <div style={S.topbar}>
        <div style={{ display: "flex", gap: 6 }}>
          {(["num", "trig", "fn", "abc"] as const).map((id) => (
            <button key={id} style={S.tab(tab === id)} onPointerDown={tap(() => setTab(id))}>
              {id === "num" ? "123" : id === "trig" ? "trig" : id === "fn" ? "f(x)" : "abc"}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <button style={S.util} onPointerDown={tap(() => active.useNative())} title="Use my phone keyboard">⌨</button>
          <button style={S.done} onPointerDown={tap(() => active.done())}>Done</button>
        </div>
      </div>

      {/* body */}
      <div style={{ marginTop: 6 }}>
        {tab === "num" && grid(NUM, 5)}
        {tab === "fn" && grid(FN, 3, true)}
        {tab === "abc" && grid(ABC, 7)}
        {tab === "trig" && (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 5, marginBottom: 5 }}>
              <button style={S.mod(inv)} onPointerDown={tap(() => setInv((v) => !v))}>inv</button>
              <button style={S.mod(hyp)} onPointerDown={tap(() => setHyp((v) => !v))}>hyp</button>
              <button style={S.key(true)} onPointerDown={tap(() => active.insert("pi"))}>π</button>
            </div>
            {grid(TRIG_BASE.map(trigKey), 3, true)}
          </>
        )}
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
    color: on ? "#fff" : "#334155", borderRadius: 8, padding: "7px 12px", fontSize: 14, fontWeight: 800, cursor: "pointer",
  }),
  mod: (on: boolean): React.CSSProperties => ({
    border: "1px solid " + (on ? "#c2410c" : "#cbd5e1"), background: on ? "#f97316" : "#fff",
    color: on ? "#fff" : "#334155", borderRadius: 8, padding: "12px 0", fontSize: 15, fontWeight: 800, cursor: "pointer", minHeight: 42,
  }),
  util: { border: "1px solid #cbd5e1", background: "#fff", color: "#334155", borderRadius: 8, padding: "7px 12px", fontSize: 16, fontWeight: 700, cursor: "pointer" } as React.CSSProperties,
  done: { border: "none", background: "#2563eb", color: "#fff", borderRadius: 8, padding: "7px 16px", fontSize: 14, fontWeight: 800, cursor: "pointer" } as React.CSSProperties,
  key: (small: boolean): React.CSSProperties => ({
    border: "1px solid #dfe6ef", background: small ? "#f8fbff" : "#fff", color: "#1f2a37",
    borderRadius: 8, padding: "12px 0", fontSize: small ? 15 : 18, fontWeight: 600, cursor: "pointer",
    boxShadow: "0 1px 2px rgba(15,23,42,0.06)", display: "grid", placeItems: "center", minHeight: 42,
  }),
  action: { border: "1px solid #dfe6ef", background: "#fff", color: "#1f2a37", borderRadius: 8, padding: "12px 0", fontSize: 18, fontWeight: 700, cursor: "pointer", minHeight: 42 } as React.CSSProperties,
};
