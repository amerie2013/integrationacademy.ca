"use client";

// A regular (scientific) on-screen calculator — the four-function + roots/powers
// tool students use for most EQAO Grade 9 items. Evaluates via the project's
// dependency-free, eval-free expression compiler. Exponents are shown as
// superscripts (4³, not 4^3).
import { useState } from "react";
import { safeCompile } from "../lib/mathExpr";

const KEYS: { label: string; ins?: string; act?: "eq" | "clear" | "back"; accent?: boolean }[] = [
  { label: "C", act: "clear" }, { label: "(", ins: "(" }, { label: ")", ins: ")" }, { label: "⌫", act: "back" },
  { label: "√", ins: "√(" }, { label: "x²", ins: "^2" }, { label: "xʸ", ins: "^" }, { label: "π", ins: "π" },
  { label: "7", ins: "7" }, { label: "8", ins: "8" }, { label: "9", ins: "9" }, { label: "÷", ins: "÷", accent: true },
  { label: "4", ins: "4" }, { label: "5", ins: "5" }, { label: "6", ins: "6" }, { label: "×", ins: "×", accent: true },
  { label: "1", ins: "1" }, { label: "2", ins: "2" }, { label: "3", ins: "3" }, { label: "−", ins: "−", accent: true },
  { label: "0", ins: "0" }, { label: ".", ins: "." }, { label: "+", ins: "+", accent: true }, { label: "=", act: "eq", accent: true },
];

function evaluate(expr: string): string {
  const src = expr.replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-").replace(/√/g, "sqrt").replace(/π/g, "pi");
  if (!src.trim()) return "";
  const v = safeCompile(src)({});
  if (!Number.isFinite(v)) return "Error";
  return String(Math.round(v * 1e10) / 1e10);
}

// Render the expression with exponents as superscripts: "4^3" -> 4³, "2^2+5" -> 2²+5.
function Pretty({ expr }: { expr: string }) {
  if (!expr) return <span>&nbsp;</span>;
  const out: any[] = [];
  let i = 0, key = 0;
  while (i < expr.length) {
    if (expr[i] === "^") {
      i++;
      let s = "";
      while (i < expr.length && /[0-9.]/.test(expr[i])) { s += expr[i]; i++; }
      out.push(<sup key={key++}>{s || "▯"}</sup>);
    } else {
      let s = "";
      while (i < expr.length && expr[i] !== "^") { s += expr[i]; i++; }
      out.push(<span key={key++}>{s}</span>);
    }
  }
  return <>{out}</>;
}

export function CalculatorPad() {
  const [expr, setExpr] = useState("");
  const [result, setResult] = useState("");

  function press(k: (typeof KEYS)[number]) {
    if (k.act === "clear") { setExpr(""); setResult(""); return; }
    if (k.act === "back") { setExpr((e) => e.slice(0, -1)); return; }
    if (k.act === "eq") { setResult(evaluate(expr)); return; }
    setExpr((e) => e + (k.ins ?? ""));
  }

  return (
    <div style={{ maxWidth: 300 }}>
      <div style={{ border: "1px solid #cbd5e1", borderRadius: 10, padding: "10px 12px", background: "#0f172a", color: "#fff", marginBottom: 10, minHeight: 56 }}>
        <div style={{ fontSize: 15, color: "#cbd5e1", minHeight: 18, wordBreak: "break-all" }}><Pretty expr={expr} /></div>
        <div style={{ fontSize: 24, fontWeight: 700, textAlign: "right" }}>{result || "0"}</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 }}>
        {KEYS.map((k) => (
          <button
            key={k.label}
            onClick={() => press(k)}
            style={{
              padding: "12px 0",
              fontSize: 16,
              fontWeight: 700,
              borderRadius: 9,
              cursor: "pointer",
              fontFamily: "inherit",
              border: "1px solid " + (k.accent ? "#1b7a44" : "#e2e8f0"),
              background: k.accent ? "#e7f6ec" : k.act ? "#f1f5f9" : "#fff",
              color: k.accent ? "#1b7a44" : "#0f172a",
            }}
          >
            {k.label}
          </button>
        ))}
      </div>
    </div>
  );
}
