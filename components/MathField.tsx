"use client";

import { createElement, useEffect, useMemo, useRef, useState } from "react";
import { asciiToExpr } from "../lib/mathInput";
import { kbStore, type FieldApi } from "./MathKeyboard";

/**
 * A WYSIWYG math input built on MathLive's <math-field> web component. Typing
 * (or tapping) "^" raises the cursor into a real superscript, "/" builds a
 * fraction, etc. We store/expose plain expression strings in our own parser
 * syntax (see lib/mathInput), so the rest of the calculator is unchanged.
 *
 * On touch-first devices (phones/tablets) MathLive's *floating* virtual keyboard
 * is hard to use — it covers the field and its keys don't fit small screens — so
 * we fall back to a plain text box driven by the phone's own keyboard. Users type
 * ordinary notation (x^2, sin(x), (x+1)/2) and we run it through asciiToExpr so
 * implicit multiplication like "2x" still works.
 */
type Props = {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
  // "expr" (default) round-trips through our graph parser syntax; "latex"
  // round-trips through raw LaTeX (e.g. for KaTeX-rendered assignment answers).
  format?: "expr" | "latex";
};

export function MathField(props: Props) {
  // Detect a touch-first device (phone/tablet) after mount. We start false so
  // SSR and the first client render agree, then swap in the plain input if
  // needed. The plain input only replaces the graph-expression field; LaTeX
  // fields (assignment answers) keep MathLive.
  const [touch, setTouch] = useState(false);
  useEffect(() => {
    try {
      const coarse = window.matchMedia?.("(hover: none) and (pointer: coarse)").matches ?? false;
      // ?kbd=touch forces the on-screen keyboard on any device (QA / support).
      const forced = new URLSearchParams(window.location.search).get("kbd") === "touch";
      setTouch(forced || coarse);
    } catch {}
  }, []);

  if (touch && props.format !== "latex") return <PlainExprInput {...props} />;
  return <MathLiveField {...props} />;
}

/** Plain text input used on phones/tablets. It's driven by the docked
 *  Desmos-style MathKeyboard (native keyboard suppressed via inputMode="none"),
 *  and is forgiving of implicit multiplication via asciiToExpr. A "⌨" key on the
 *  keyboard flips `nativeKb` to fall back to the phone's own keyboard. */
function PlainExprInput({ value, onChange, placeholder, style, ariaLabel }: Props) {
  const [text, setText] = useState(value ?? "");
  const [nativeKb, setNativeKb] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  // The last expr we emitted, so an external value change (load a saved graph,
  // apply a shared figure) resyncs the box but our own edits don't fight it.
  const lastEmit = useRef(value ?? "");
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;
  // Caret position to restore after a programmatic insert (React would otherwise
  // drop the caret to the end on the controlled re-render).
  const caretRef = useRef<number | null>(null);

  useEffect(() => {
    if (value !== lastEmit.current) {
      setText(value ?? "");
      lastEmit.current = value ?? "";
    }
  }, [value]);

  useEffect(() => {
    if (caretRef.current != null && inputRef.current) {
      const p = caretRef.current;
      caretRef.current = null;
      try { inputRef.current.setSelectionRange(p, p); } catch {}
    }
  }, [text]);

  const emit = (nv: string) => {
    setText(nv);
    const expr = asciiToExpr(nv);
    lastEmit.current = expr;
    onChangeRef.current(expr);
  };

  // Stable API the docked keyboard calls to edit this field. Reads live values
  // off the DOM element (not the `text` closure) so it never goes stale.
  const api = useMemo<FieldApi>(() => ({
    getEl: () => inputRef.current,
    insert: (t, back = 0) => {
      const el = inputRef.current;
      if (!el) return;
      const cur = el.value;
      const s = el.selectionStart ?? cur.length;
      const e = el.selectionEnd ?? cur.length;
      caretRef.current = s + t.length - back;
      emit(cur.slice(0, s) + t + cur.slice(e));
    },
    backspace: () => {
      const el = inputRef.current;
      if (!el) return;
      const cur = el.value;
      let s = el.selectionStart ?? cur.length;
      const e = el.selectionEnd ?? cur.length;
      if (s === e) {
        if (s === 0) return;
        s -= 1;
      }
      caretRef.current = s;
      emit(cur.slice(0, s) + cur.slice(e));
    },
    move: (dir) => {
      const el = inputRef.current;
      if (!el) return;
      const p = Math.max(0, Math.min(el.value.length, (el.selectionStart ?? 0) + dir));
      try { el.setSelectionRange(p, p); } catch {}
    },
    done: () => inputRef.current?.blur(),
    useNative: () => {
      kbStore.set(null);
      setNativeKb(true);
      window.setTimeout(() => inputRef.current?.focus(), 0);
    },
  }), []);

  return (
    <input
      ref={inputRef}
      type="text"
      value={text}
      onChange={(e) => emit(e.target.value)}
      onFocus={() => { if (!nativeKb) kbStore.set(api); }}
      onBlur={() => { window.setTimeout(() => { if (kbStore.get() === api) kbStore.set(null); }, 0); }}
      placeholder={placeholder}
      aria-label={ariaLabel}
      inputMode={nativeKb ? "text" : "none"}
      autoCapitalize="off"
      autoCorrect="off"
      spellCheck={false}
      style={{ display: "block", ...style }}
    />
  );
}

// A custom "trig" page for MathLive's on-screen keyboard (desktop). MathLive's
// default keyboard has sin/cos/tan but not the reciprocal, inverse or hyperbolic
// functions. Built-in LaTeX commands (\sec, \sinh, …) round-trip cleanly through
// ascii-math; the rest have no command and are inserted as \operatorname{…},
// which MathLive exports letter-spaced ("a s i n h") — the input normaliser
// (lib/mathInput) rejoins those so they resolve to our parser's function names.
const call = (name: string) => ({ latex: `\\${name}`, insert: `\\${name}\\left(#0\\right)` });
const op = (label: string, name: string) => ({ label, class: "small", insert: `\\operatorname{${name}}\\left(#0\\right)` });
const inv = (label: string, name: string) => ({ label: `${label}<sup>-1</sup>`, class: "small", insert: `\\operatorname{${name}}\\left(#0\\right)` });
// 4 rows × 6 columns, matching the height of MathLive's default pages so the
// keyboard doesn't resize when switching tabs. ln/log/exp/abs live on the "∞≠∈"
// page and √/π/x²/xⁿ on the "123" page, and ◀▶⌫ are in the always-present edit
// toolbar, so this page is just the 24 trig/hyperbolic functions.
const MATH_KB_LAYOUT = {
  label: "trig",
  tooltip: "trig & functions",
  rows: [
    [call("sin"), call("cos"), call("tan"), call("sec"), call("csc"), call("cot")],
    [inv("sin", "asin"), inv("cos", "acos"), inv("tan", "atan"), inv("sec", "asec"), inv("csc", "acsc"), inv("cot", "acot")],
    [call("sinh"), call("cosh"), call("tanh"), op("sech", "sech"), op("csch", "csch"), call("coth")],
    [inv("sinh", "asinh"), inv("cosh", "acosh"), inv("tanh", "atanh"), inv("sech", "asech"), inv("csch", "acsch"), inv("coth", "acoth")],
  ],
};

/** MathLive-backed WYSIWYG field (desktop, and LaTeX fields everywhere). */
function MathLiveField({ value, onChange, placeholder, style, ariaLabel, format = "expr" }: Props) {
  const ioFormat = format === "latex" ? "latex" : "ascii-math";
  const fromField = (raw: string) => (format === "latex" ? raw : asciiToExpr(raw));
  const ref = useRef<any>(null);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;
  // The last value we emitted/applied, to avoid clobbering the user's cursor
  // when our own onChange flows back in as a new `value` prop.
  const lastValue = useRef<string>("");

  useEffect(() => {
    let alive = true;
    let handler: (() => void) | null = null;
    import("mathlive").then((ml) => {
      if (!alive) return;
      const MFE: any = ml.MathfieldElement;
      if (MFE && !(window as any).__mathliveConfigured) {
        try {
          MFE.fontsDirectory = "/mathlive/fonts"; // bundled in public/, works offline
          MFE.soundsDirectory = null; // no keypress sounds
          // Add a "trig" page to the virtual keyboard alongside the defaults.
          const vk = (window as any).mathVirtualKeyboard;
          if (vk) vk.layouts = ["numeric", MATH_KB_LAYOUT, "symbols", "alphabetic", "greek"];
        } catch {}
        (window as any).__mathliveConfigured = true;
      }
      const el = ref.current;
      if (!el) return;
      // Show the on-screen math keyboard on focus for touch devices; desktop
      // users can type and use the toggle button.
      el.mathVirtualKeyboardPolicy = "auto";
      el.setValue(value ?? "", { format: ioFormat, suppressChangeNotifications: true });
      lastValue.current = value ?? "";
      handler = () => {
        const out = fromField(el.getValue(ioFormat));
        lastValue.current = out;
        onChangeRef.current(out);
      };
      el.addEventListener("input", handler);
    });
    return () => {
      alive = false;
      const el = ref.current;
      if (el && handler) el.removeEventListener("input", handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reflect external value changes (e.g. loading a saved graph or applying a
  // shared figure) without disturbing in-progress typing.
  useEffect(() => {
    const el = ref.current;
    if (el && typeof el.setValue === "function" && value !== lastValue.current) {
      el.setValue(value ?? "", { format: ioFormat, suppressChangeNotifications: true });
      lastValue.current = value ?? "";
    }
  }, [value]);

  return createElement("math-field", {
    ref,
    placeholder,
    "aria-label": ariaLabel,
    style: { display: "block", ...style },
  });
}

/** Open/close MathLive's on-screen math keyboard (loads MathLive if needed). */
export async function toggleMathKeyboard() {
  await import("mathlive");
  const vk = (window as any).mathVirtualKeyboard;
  if (vk) vk.visible = !vk.visible;
}
