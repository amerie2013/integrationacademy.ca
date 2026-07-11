"use client";

import { createElement, useEffect, useRef } from "react";
import { asciiToExpr } from "../lib/mathInput";

/**
 * A WYSIWYG math input built on MathLive's <math-field> web component. Typing
 * (or tapping) "^" raises the cursor into a real superscript, "/" builds a
 * fraction, etc. We store/expose plain expression strings in our own parser
 * syntax (see lib/mathInput), so the rest of the calculator is unchanged.
 *
 * MathLive is imported lazily on the client only (it defines a custom element
 * and touches the DOM, so it must not run during SSR).
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

export function MathField({ value, onChange, placeholder, style, ariaLabel, format = "expr" }: Props) {
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
