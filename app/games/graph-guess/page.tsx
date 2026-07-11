"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { SiteHeader } from "../../../components/SiteHeader";

type Opt = { label: string; fn: (x: number) => number };
type Round = { options: Opt[]; correct: string; fn: (x: number) => number };
const TOTAL = 10;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];
const rint = (lo: number, hi: number) => Math.floor(Math.random() * (hi - lo + 1)) + lo;
const coef = (m: number, v: string) => (m === 1 ? v : m === -1 ? "−" + v : `${m < 0 ? "−" : ""}${Math.abs(m)}${v}`);
const konst = (c: number) => (c === 0 ? "" : c > 0 ? ` + ${c}` : ` − ${-c}`);

function makeOption(): Opt {
  const fam = rint(0, 5);
  if (fam === 0) { const m = pick([-3, -2, -1, 1, 2, 3]); const b = rint(-3, 3); return { label: `y = ${coef(m, "x")}${konst(b)}`, fn: (x) => m * x + b }; }
  if (fam === 1) { const a = pick([-1, 1]); const c = rint(-3, 3); return { label: `y = ${coef(a, "x²")}${konst(c)}`, fn: (x) => a * x * x + c }; }
  if (fam === 2) { const a = pick([-2, -1, 1, 2]); const c = rint(-2, 2); return { label: `y = ${coef(a, "|x|")}${konst(c)}`, fn: (x) => a * Math.abs(x) + c }; }
  if (fam === 3) { const a = pick([-1, 1]); return { label: `y = ${coef(a, "x³")}∕4`, fn: (x) => (a * x * x * x) / 4 }; }
  if (fam === 4) { const a = pick([1, 2]); return { label: `y = ${a === 1 ? "" : a}√x`, fn: (x) => (x >= 0 ? a * Math.sqrt(x) : NaN) }; }
  const a = pick([1, 2, 3]); return { label: `y = ${a === 1 ? "" : a + "·"}sin(x)`, fn: (x) => a * Math.sin(x) };
}

function buildRound(): Round {
  const options: Opt[] = [];
  let guard = 0;
  while (options.length < 4 && guard++ < 60) {
    const o = makeOption();
    if (!options.some((p) => p.label === o.label)) options.push(o);
  }
  const target = pick(options);
  return { options: shuffle(options), correct: target.label, fn: target.fn };
}

function Plot({ fn }: { fn: (x: number) => number }) {
  const W = 360, H = 260, xMin = -6, xMax = 6, yMin = -6, yMax = 6;
  const sx = (x: number) => ((x - xMin) / (xMax - xMin)) * W;
  const sy = (y: number) => H - ((y - yMin) / (yMax - yMin)) * H;
  let d = "", pen = false;
  for (let i = 0; i <= 480; i++) {
    const x = xMin + ((xMax - xMin) * i) / 480;
    const y = fn(x);
    if (!isFinite(y) || y < yMin - 30 || y > yMax + 30) { pen = false; continue; }
    d += `${pen ? "L" : "M"}${sx(x).toFixed(1)},${sy(y).toFixed(1)} `;
    pen = true;
  }
  const grid = [];
  for (let g = xMin; g <= xMax; g++) grid.push(<line key={"v" + g} x1={sx(g)} y1={0} x2={sx(g)} y2={H} stroke={g === 0 ? "rgba(159,231,189,.45)" : "rgba(159,231,189,.12)"} strokeWidth={g === 0 ? 1.5 : 1} />);
  for (let g = yMin; g <= yMax; g++) grid.push(<line key={"h" + g} x1={0} y1={sy(g)} x2={W} y2={sy(g)} stroke={g === 0 ? "rgba(159,231,189,.45)" : "rgba(159,231,189,.12)"} strokeWidth={g === 0 ? 1.5 : 1} />);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", display: "block", background: "#04130a", borderRadius: 12 }}>
      {grid}
      <path d={d} fill="none" stroke="#34d27f" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function GraphGuess() {
  const [phase, setPhase] = useState<"idle" | "playing" | "over">("idle");
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [r, setR] = useState<Round | null>(null);
  const [picked, setPicked] = useState<string | null>(null);

  useEffect(() => { setBest(Number(localStorage.getItem("ia_graphguess_best") || 0)); }, []);

  const start = useCallback(() => { setRound(1); setScore(0); setPicked(null); setR(buildRound()); setPhase("playing"); }, []);

  useEffect(() => {
    if (phase !== "over") return;
    setBest((b) => { const nb = Math.max(b, score); localStorage.setItem("ia_graphguess_best", String(nb)); return nb; });
  }, [phase, score]);

  function answer(label: string) {
    if (picked || !r) return;
    setPicked(label);
    const right = label === r.correct;
    if (right) setScore((s) => s + 1);
    setTimeout(() => {
      if (round >= TOTAL) { setPhase("over"); return; }
      setRound((n) => n + 1);
      setR(buildRound());
      setPicked(null);
    }, 1000);
  }

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "36px 24px 60px" }}>
        <Link href="/games" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← All games</Link>

        <div style={{ marginTop: 16, borderRadius: 22, padding: 24, color: "#e7f6ec", background: "radial-gradient(700px 360px at 80% -30%,#0d3a23,#07150d)", border: "1px solid #14653b", boxShadow: "0 20px 50px rgba(13,92,48,.25)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 26, fontWeight: 700, margin: 0, color: "#f0fff6" }}>📈 Graph Guess</h1>
            <span style={{ fontSize: 13, color: "#8fd6ab", fontWeight: 700 }}>Best {best}/{TOTAL}</span>
          </div>

          {phase === "idle" && (
            <div style={{ textAlign: "center", padding: "26px 0 6px" }}>
              <p style={panelText}>We plot a curve — you pick the equation that produced it. {TOTAL} rounds: lines, parabolas, absolute values, roots, cubics, and waves.</p>
              <button onClick={start} style={primaryBtn}>Start →</button>
            </div>
          )}

          {phase === "playing" && r && (
            <>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "14px 0" }}>
                <span style={{ fontSize: 13, color: "#8fd6ab", fontWeight: 700 }}>Round {round}/{TOTAL}</span>
                <span style={{ fontSize: 13, color: "#8fd6ab", fontWeight: 700 }}>Score {score}</span>
              </div>
              <Plot fn={r.fn} />
              <div style={{ color: "#8fd6ab", fontSize: 12, textAlign: "center", margin: "8px 0 4px" }}>Which equation made this curve?</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 8 }}>
                {r.options.map((o) => {
                  const isCorrect = picked && o.label === r.correct;
                  const isWrongPick = picked === o.label && o.label !== r.correct;
                  return (
                    <button key={o.label} onClick={() => answer(o.label)} disabled={!!picked}
                      style={{ ...choiceBtn, ...(isCorrect ? okStyle : {}), ...(isWrongPick ? noStyle : {}) }}>
                      {o.label}
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {phase === "over" && (
            <div style={{ textAlign: "center", padding: "26px 0 6px" }}>
              <div style={{ fontSize: 48, fontWeight: 800, color: "#34d27f", fontFamily: "Fraunces, serif" }}>{score}/{TOTAL}</div>
              <p style={panelText}>{score === TOTAL ? "Perfect run! 🏆" : score >= best && score > 0 ? "🏆 New best!" : "Nice — play again to beat it."}</p>
              <button onClick={start} style={primaryBtn}>Play again</button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

const panelText: React.CSSProperties = { color: "#bfe9cf", fontSize: 16, lineHeight: 1.6, margin: "0 auto 20px", maxWidth: 440 };
const primaryBtn: React.CSSProperties = { background: "linear-gradient(135deg,#1f8a4c,#34d27f)", color: "#04130a", border: "none", borderRadius: 12, padding: "13px 30px", fontWeight: 800, fontSize: 16, cursor: "pointer" };
const choiceBtn: React.CSSProperties = { background: "rgba(255,255,255,.08)", color: "#f0fff6", border: "1px solid rgba(159,231,189,.28)", borderRadius: 12, padding: "14px 10px", fontWeight: 800, fontSize: 17, fontFamily: "JetBrains Mono, monospace", cursor: "pointer" };
const okStyle: React.CSSProperties = { background: "rgba(52,210,127,.25)", border: "1px solid #34d27f" };
const noStyle: React.CSSProperties = { background: "rgba(239,68,68,.25)", border: "1px solid #ef4444" };
