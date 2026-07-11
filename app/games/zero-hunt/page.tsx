"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { SiteHeader } from "../../../components/SiteHeader";

const TOTAL = 10;
const W = 360, H = 360, MIN = -6, MAX = 6;
const sx = (x: number) => ((x - MIN) / (MAX - MIN)) * W;
const sy = (y: number) => H - ((y - MIN) / (MAX - MIN)) * H;
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];
const rint = (lo: number, hi: number) => Math.floor(Math.random() * (hi - lo + 1)) + lo;

type Round = { zeros: number[]; fy: (x: number) => number };

function buildRound(): Round {
  const a = pick([-1, 1]);
  const roll = Math.random();
  if (roll < 0.6) {
    // two distinct integer zeros
    let r1 = rint(-5, 4), r2 = rint(-4, 5);
    if (r1 === r2) r2 = r1 + 1;
    [r1, r2] = [Math.min(r1, r2), Math.max(r1, r2)];
    return { zeros: [r1, r2], fy: (x) => a * (x - r1) * (x - r2) };
  }
  if (roll < 0.78) {
    // double root (touches the axis once)
    const r = rint(-4, 4);
    return { zeros: [r], fy: (x) => a * (x - r) * (x - r) };
  }
  // no real zeros (vertex sits off the axis on the non-crossing side)
  const h = rint(-3, 3), k = a > 0 ? rint(1, 4) : -rint(1, 4);
  return { zeros: [], fy: (x) => a * (x - h) * (x - h) + k };
}

function path(fy: (x: number) => number): string {
  let d = "", pen = false;
  for (let i = 0; i <= 480; i++) {
    const x = MIN + ((MAX - MIN) * i) / 480;
    const y = fy(x);
    if (y < MIN - 40 || y > MAX + 40) { pen = false; continue; }
    d += `${pen ? "L" : "M"}${sx(x).toFixed(1)},${sy(y).toFixed(1)} `;
    pen = true;
  }
  return d;
}

function Board({ r, found, wrong, revealed, onPick }: {
  r: Round; found: number[]; wrong: number | null; revealed: boolean; onPick: (x: number) => void;
}) {
  function handle(e: React.MouseEvent<SVGSVGElement>) {
    if (revealed) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const vbX = ((e.clientX - rect.left) / rect.width) * W;
    onPick(clamp(Math.round(MIN + (vbX / W) * (MAX - MIN)), MIN, MAX));
  }
  const grid = [];
  for (let g = MIN; g <= MAX; g++) {
    grid.push(<line key={"v" + g} x1={sx(g)} y1={0} x2={sx(g)} y2={H} stroke={g === 0 ? "rgba(159,231,189,.5)" : "rgba(159,231,189,.12)"} strokeWidth={g === 0 ? 1.5 : 1} />);
    grid.push(<line key={"h" + g} x1={0} y1={sy(g)} x2={W} y2={sy(g)} stroke={g === 0 ? "rgba(159,231,189,.55)" : "rgba(159,231,189,.12)"} strokeWidth={g === 0 ? 1.5 : 1} />);
  }
  return (
    <svg viewBox={`0 0 ${W} ${H}`} onClick={handle}
      style={{ width: "100%", height: "auto", display: "block", background: "#04130a", borderRadius: 12, cursor: revealed ? "default" : "crosshair", touchAction: "manipulation" }}>
      {grid}
      <path d={path(r.fy)} fill="none" stroke="#fbbf24" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" />
      {found.map((z) => <circle key={"f" + z} cx={sx(z)} cy={sy(0)} r={7} fill="#34d27f" stroke="#04130a" strokeWidth={2} />)}
      {wrong !== null && (
        <g stroke="#ef4444" strokeWidth={3} strokeLinecap="round">
          <line x1={sx(wrong) - 6} y1={sy(0) - 6} x2={sx(wrong) + 6} y2={sy(0) + 6} />
          <line x1={sx(wrong) - 6} y1={sy(0) + 6} x2={sx(wrong) + 6} y2={sy(0) - 6} />
        </g>
      )}
      {revealed && r.zeros.map((z) => <circle key={"r" + z} cx={sx(z)} cy={sy(0)} r={10} fill="none" stroke="#34d27f" strokeWidth={3} />)}
    </svg>
  );
}

export default function ZeroHunt() {
  const [phase, setPhase] = useState<"idle" | "playing" | "over">("idle");
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [r, setR] = useState<Round | null>(null);
  const [found, setFound] = useState<number[]>([]);
  const [wrong, setWrong] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => { setBest(Number(localStorage.getItem("ia_zerohunt_best") || 0)); }, []);

  const start = useCallback(() => { setRound(1); setScore(0); setFound([]); setWrong(null); setRevealed(false); setR(buildRound()); setPhase("playing"); }, []);

  useEffect(() => {
    if (phase !== "over") return;
    setBest((b) => { const nb = Math.max(b, score); localStorage.setItem("ia_zerohunt_best", String(nb)); return nb; });
  }, [phase, score]);

  function finish(win: boolean) {
    setRevealed(true);
    if (win) setScore((s) => s + 1);
    setTimeout(() => {
      if (round >= TOTAL) { setPhase("over"); return; }
      const nr = round + 1; setRound(nr); setR(buildRound()); setFound([]); setWrong(null); setRevealed(false);
    }, 1400);
  }

  function onPick(x: number) {
    if (revealed || !r) return;
    if (r.zeros.includes(x)) {
      if (found.includes(x)) return;               // already got this one
      const nf = [...found, x];
      setFound(nf);
      if (nf.length === r.zeros.length) finish(true); // all zeros found
    } else {
      setWrong(x); finish(false);                  // clicked a non-zero → round lost
    }
  }

  function noZeros() {
    if (revealed || !r) return;
    finish(r.zeros.length === 0);
  }

  const result = revealed && r ? (wrong === null && found.length === r.zeros.length) : null;

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 620, margin: "0 auto", padding: "36px 24px 60px" }}>
        <Link href="/games" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← All games</Link>

        <div style={{ marginTop: 16, borderRadius: 22, padding: 24, color: "#e7f6ec", background: "radial-gradient(700px 360px at 80% -30%,#0d3a23,#07150d)", border: "1px solid #14653b", boxShadow: "0 20px 50px rgba(13,92,48,.25)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 26, fontWeight: 700, margin: 0, color: "#f0fff6" }}>🟡 Zero Hunt</h1>
            <span style={{ fontSize: 13, color: "#8fd6ab", fontWeight: 700 }}>Best {best}/{TOTAL}</span>
          </div>

          {phase === "idle" && (
            <div style={{ textAlign: "center", padding: "26px 0 6px" }}>
              <p style={panelText}>A parabola is plotted — <strong>click every x-intercept</strong> (where it crosses the x-axis). Some touch once, and some never cross — press <strong>No real zeros</strong> for those. {TOTAL} rounds.</p>
              <button onClick={start} style={primaryBtn}>Start →</button>
            </div>
          )}

          {phase === "playing" && r && (
            <>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "14px 0" }}>
                <span style={{ fontSize: 13, color: "#8fd6ab", fontWeight: 700 }}>Round {round}/{TOTAL}</span>
                <span style={{ fontSize: 13, color: "#8fd6ab", fontWeight: 700 }}>Score {score}</span>
              </div>

              <Board r={r} found={found} wrong={wrong} revealed={revealed} onPick={onPick} />

              <div style={{ display: "flex", justifyContent: "center", marginTop: 12 }}>
                <button onClick={noZeros} disabled={revealed} style={{ background: "rgba(255,255,255,.08)", color: "#f0fff6", border: "1px solid rgba(159,231,189,.3)", borderRadius: 10, padding: "9px 18px", fontWeight: 800, fontSize: 14, cursor: revealed ? "default" : "pointer" }}>No real zeros</button>
              </div>

              <div style={{ textAlign: "center", minHeight: 24, marginTop: 10, fontWeight: 800 }}>
                {!revealed && <span style={{ color: "#8fd6ab", fontWeight: 600, fontSize: 13 }}>Click each crossing point on the x-axis.</span>}
                {revealed && result === true && <span style={{ color: "#34d27f" }}>✓ Nailed it</span>}
                {revealed && result === false && <span style={{ color: "#fca5a5" }}>✗ {r.zeros.length === 0 ? "It had no real zeros." : `Zeros: ${r.zeros.join(", ")}`}</span>}
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

        <p style={{ color: "#94a3b8", fontSize: 13.5, lineHeight: 1.6, marginTop: 18, textAlign: "center" }}>
          The x-intercepts of a parabola are its <em>zeros</em> — the solutions of the quadratic, and the roots of its factors. A parabola can have 2, 1, or 0 of them. Dig in at <Link href="/courses" style={{ color: "#0d5c30", fontWeight: 600 }}>MPM2D → Quadratics</Link>.
        </p>
      </div>
    </main>
  );
}

const panelText: React.CSSProperties = { color: "#bfe9cf", fontSize: 16, lineHeight: 1.6, margin: "0 auto 20px", maxWidth: 460 };
const primaryBtn: React.CSSProperties = { background: "linear-gradient(135deg,#1f8a4c,#34d27f)", color: "#04130a", border: "none", borderRadius: 12, padding: "13px 30px", fontWeight: 800, fontSize: 16, cursor: "pointer" };
