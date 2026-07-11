"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteHeader } from "../../../components/SiteHeader";

type Fn = { key: string; label: string; f: (x: number) => number; df: (x: number) => number; dfLabel: string };

const FNS: Fn[] = [
  { key: "sq", label: "f(x) = x²", f: (x) => x * x, df: (x) => 2 * x, dfLabel: "2x" },
  { key: "cubic", label: "f(x) = x³ − 3x", f: (x) => x ** 3 - 3 * x, df: (x) => 3 * x * x - 3, dfLabel: "3x² − 3" },
  { key: "sin", label: "f(x) = sin x", f: (x) => Math.sin(x), df: (x) => Math.cos(x), dfLabel: "cos x" },
];

const W = 560, H = 420, X0 = -3.2, X1 = 3.2, Y0 = -6.5, Y1 = 6.5;
const sx = (x: number) => ((x - X0) / (X1 - X0)) * W;
const sy = (y: number) => H - ((y - Y0) / (Y1 - Y0)) * H;

function curvePath(f: (x: number) => number): string {
  let d = "", pen = false;
  for (let i = 0; i <= 600; i++) {
    const x = X0 + ((X1 - X0) * i) / 600;
    const y = f(x);
    if (!isFinite(y) || y < Y0 - 40 || y > Y1 + 40) { pen = false; continue; }
    d += `${pen ? "L" : "M"}${sx(x).toFixed(1)},${sy(y).toFixed(1)} `;
    pen = true;
  }
  return d;
}

export default function TangentExplorer() {
  const [key, setKey] = useState("cubic");
  const [x0, setX0] = useState(1);
  const [showSecant, setShowSecant] = useState(false);
  const [h, setH] = useState(1.2);

  const fn = FNS.find((f) => f.key === key)!;
  const y0 = fn.f(x0);
  const m = (fn.f(x0 + 1e-4) - fn.f(x0 - 1e-4)) / 2e-4; // numeric f'(x0)
  const exact = fn.df(x0);

  // tangent line endpoints across the view
  const tan = (x: number) => y0 + m * (x - x0);
  // secant
  const xh = x0 + h, yh = fn.f(xh);
  const ms = (yh - y0) / h;
  const sec = (x: number) => y0 + ms * (x - x0);

  const grid = [];
  for (let g = Math.ceil(X0); g <= X1; g++) grid.push(<line key={"v" + g} x1={sx(g)} y1={0} x2={sx(g)} y2={H} stroke={g === 0 ? "#94a3b8" : "#eef2f7"} strokeWidth={g === 0 ? 1.5 : 1} />);
  for (let g = Math.ceil(Y0); g <= Y1; g++) grid.push(<line key={"h" + g} x1={0} y1={sy(g)} x2={W} y2={sy(g)} stroke={g === 0 ? "#94a3b8" : "#eef2f7"} strokeWidth={g === 0 ? 1.5 : 1} />);

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "40px 24px 60px" }}>
        <span style={{ display: "inline-block", fontSize: 12, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", color: "#0d5c30", background: "#e7f6ec", padding: "5px 12px", borderRadius: 999 }}>Learning tool</span>
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 34, fontWeight: 700, margin: "12px 0 6px" }}>Tangent Explorer</h1>
        <p style={{ color: "#475569", fontSize: 16, margin: "0 0 24px", maxWidth: 620 }}>
          Drag the point along the curve. The green <strong>tangent line</strong>'s slope <em>is</em> the
          derivative — turn on the secant to see why it's the limit as the gap shrinks to zero.
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
          {FNS.map((f) => (
            <button key={f.key} onClick={() => setKey(f.key)}
              style={{ padding: "8px 14px", borderRadius: 9, border: "1px solid", borderColor: key === f.key ? "#1b7a44" : "#cbd5e1", background: key === f.key ? "#1b7a44" : "#fff", color: key === f.key ? "#fff" : "#334155", fontWeight: 700, fontSize: 14, cursor: "pointer", fontFamily: "JetBrains Mono, monospace" }}>
              {f.label}
            </button>
          ))}
        </div>

        <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 16, padding: 16, boxShadow: "0 1px 3px rgba(15,23,42,0.06)" }}>
          <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", display: "block", borderRadius: 10 }}>
            {grid}
            {/* secant */}
            {showSecant && (
              <>
                <line x1={sx(X0)} y1={sy(sec(X0))} x2={sx(X1)} y2={sy(sec(X1))} stroke="#e69138" strokeWidth={2} strokeDasharray="6,4" />
                <circle cx={sx(xh)} cy={sy(yh)} r={5} fill="#e69138" />
              </>
            )}
            {/* tangent */}
            <line x1={sx(X0)} y1={sy(tan(X0))} x2={sx(X1)} y2={sy(tan(X1))} stroke="#1b7a44" strokeWidth={2.5} />
            {/* curve */}
            <path d={curvePath(fn.f)} fill="none" stroke="#0f172a" strokeWidth={2.5} strokeLinecap="round" />
            {/* point */}
            <circle cx={sx(x0)} cy={sy(y0)} r={6.5} fill="#1b7a44" stroke="#fff" strokeWidth={2} />
          </svg>

          <div style={{ marginTop: 16 }}>
            <label style={{ fontWeight: 700, fontSize: 14, display: "block", marginBottom: 6 }}>Point: x = {x0.toFixed(2)}</label>
            <input type="range" min={X0 + 0.1} max={X1 - 0.1} step={0.01} value={x0} onChange={(e) => setX0(parseFloat(e.target.value))} style={{ width: "100%", accentColor: "#1b7a44" }} />
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 14 }}>
            <Read label="Tangent slope  f ′(x)" value={m.toFixed(3)} big />
            <Read label={`exact ( ${fn.dfLabel} )`} value={exact.toFixed(3)} />
            {showSecant && <Read label="secant slope" value={ms.toFixed(3)} tone="orange" />}
          </div>

          <label style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 16, fontWeight: 600, color: "#334155", cursor: "pointer" }}>
            <input type="checkbox" checked={showSecant} onChange={(e) => setShowSecant(e.target.checked)} style={{ accentColor: "#e69138", width: 16, height: 16 }} />
            Show secant line (the limit idea)
          </label>
          {showSecant && (
            <div style={{ marginTop: 10 }}>
              <label style={{ fontWeight: 700, fontSize: 14, display: "block", marginBottom: 6, color: "#9a5b00" }}>Gap h = {h.toFixed(2)} — shrink it toward 0 and watch the secant become the tangent</label>
              <input type="range" min={0.05} max={3} step={0.01} value={h} onChange={(e) => setH(parseFloat(e.target.value))} style={{ width: "100%", accentColor: "#e69138" }} />
              <p style={{ fontSize: 13, color: "#64748b", margin: "8px 0 0", fontFamily: "JetBrains Mono, monospace" }}>
                secant slope = [f(x+h) − f(x)] / h = {ms.toFixed(3)} → f ′(x) = {exact.toFixed(3)} as h → 0
              </p>
            </div>
          )}
        </div>

        <p style={{ color: "#64748b", fontSize: 14, marginTop: 18 }}>
          Want the full picture? Read <Link href="/articles/slopes-to-derivatives" style={{ color: "#0d5c30", fontWeight: 700 }}>From Slopes to Derivatives</Link> or test yourself in <Link href="/games/derivative-duel" style={{ color: "#0d5c30", fontWeight: 700 }}>Derivative Duel</Link>.
        </p>
      </div>
    </main>
  );
}

function Read({ label, value, big, tone }: { label: string; value: string; big?: boolean; tone?: "orange" }) {
  const color = tone === "orange" ? "#9a5b00" : "#0d5c30";
  const bg = tone === "orange" ? "#fff7ed" : "#e7f6ec";
  return (
    <div style={{ background: bg, border: `1px solid ${tone === "orange" ? "#fed7aa" : "#bfe3cd"}`, borderRadius: 12, padding: "10px 16px", minWidth: 120 }}>
      <div style={{ fontSize: big ? 26 : 20, fontWeight: 800, color, fontFamily: "JetBrains Mono, monospace" }}>{value}</div>
      <div style={{ fontSize: 12, color: "#64748b", fontWeight: 600 }}>{label}</div>
    </div>
  );
}
