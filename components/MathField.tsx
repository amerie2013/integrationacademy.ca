"use client";

import { createElement, useEffect, useRef, useState } from "react";
import { asciiToExpr } from "../lib/mathInput";

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
      setTouch(window.matchMedia?.("(hover: none) and (pointer: coarse)").matches ?? false);
    } catch {}
  }, []);

  if (touch && props.format !== "latex") return <PlainExprInput {...props} />;
  return <MathLiveField {...props} />;
}

/** Plain text input using the device's native keyboard; forgiving of implicit
 *  multiplication via asciiToExpr. Used on phones/tablets. */
function PlainExprInput({ value, onChange, placeholder, style, ariaLabel }: Props) {
  const [text, setText] = useState(value ?? "");
  // The last expr we emitted, so an external value change (load a saved graph,
  // apply a shared figure) resyncs the box but our own edits don't fight it.
  const lastEmit = useRef(value ?? "");
  useEffect(() => {
    if (value !== lastEmit.current) {
      setText(value ?? "");
      lastEmit.current = value ?? "";
    }
  }, [value]);

  return (
    <input
      type="text"
      value={text}
      onChange={(e) => {
        const raw = e.target.value;
        setText(raw);
        const expr = asciiToExpr(raw);
        lastEmit.current = expr;
        onChange(expr);
      }}
      placeholder={placeholder}
      aria-label={ariaLabel}
      inputMode="text"
      autoCapitalize="off"
      autoCorrect="off"
      spellCheck={false}
      style={{ display: "block", ...style }}
    />
  );
}

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
