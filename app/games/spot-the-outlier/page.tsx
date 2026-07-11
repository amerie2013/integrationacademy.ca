"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { SiteHeader } from "../../../components/SiteHeader";

const TOTAL = 10;
const W = 360, H = 300;
type Pt = { x: number; y: number; outlier: boolean };
type Round = { pts: Pt[] };

const rint = (lo: number, hi: number) => Math.floor(Math.random() * (hi - lo + 1)) + lo;
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

function buildRound(level: number): Round {
  const noise = level <= 5 ? 11 : 16;       // tighter trend early, looser later
  const x0 = 46, x1 = 326;
  let y0 = rint(60, 230), y1 = rint(60, 230);
  while (Math.abs(y1 - y0) < 80) y1 = rint(60, 230); // ensure a clear trend
  const lineY = (x: number) => y0 + ((y1 - y0) * (x - x0)) / (x1 - x0);
  const n = 8;
  const pts: Pt[] = [];
  for (let i = 0; i < n; i++) {
    const x = 50 + i * 38 + rint(-6, 6);
    pts.push({ x, y: clamp(lineY(x) + rint(-noise, noise), 40, 256), outlier: false });
  }
  const oi = rint(0, n - 1);
  const base = lineY(pts[oi].x);
  const dir = base < 150 ? 1 : -1;          // push away from the nearer edge
  pts[oi] = { ...pts[oi], y: clamp(base + dir * rint(60, 88), 38, 258), outlier: true };
  return { pts };
}

function Board({ pts, picked, revealed, onPick }: {
  pts: Pt[]; picked: number | null; revealed: boolean; onPick: (i: number) => void;
}) {
  function handle(e: React.MouseEvent<SVGSVGElement>) {
    if (revealed) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const vx = ((e.clientX - rect.left) / rect.width) * W;
    const vy = ((e.clientY - rect.top) / rect.height) * H;
    let bi = 0, bd = Infinity;
    pts.forEach((p, i) => { const d = (p.x - vx) ** 2 + (p.y - vy) ** 2; if (d < bd) { bd = d; bi = i; } });
    onPick(bi);
  }
  return (
    <svg viewBox={`0 0 ${W} ${H}`} onClick={handle}
      style={{ width: "100%", height: "auto", display: "block", background: "#04130a", borderRadius: 12, cursor: revealed ? "default" : "crosshair", touchAction: "manipulation" }}>
      {/* axes box */}
      <rect x={34} y={24} width={300} height={250} fill="none" stroke="rgba(159,231,189,.25)" strokeWidth={1.5} />
      {pts.map((p, i) => {
        const isPick = picked === i;
        const showOut = revealed && p.outlier;
        return (
          <g key={i}>
            {showOut && <circle cx={p.x} cy={p.y} r={12} fill="none" stroke="#34d27f" strokeWidth={3} />}
            <circle cx={p.x} cy={p.y} r={6.5} fill={isPick ? (p.outlier ? "#34d27f" : "#ef4444") : "#fbbf24"} stroke="#04130a" strokeWidth={1.5} />
          </g>
        );
      })}
    </svg>
  );
}

export default function SpotTheOutlier() {
  const [phase, setPhase] = useState<"idle" | "playing" | "over">("idle");
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [r, setR] = useState<Round | null>(null);
  const [picked, setPicked] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => { setBest(Number(localStorage.getItem("ia_outlier_best") || 0)); }, []);

  const start = useCallback(() => { setRound(1); setScore(0); setPicked(null); setRevealed(false); setR(buildRound(1)); setPhase("playing"); }, []);

  useEffect(() => {
    if (phase !== "over") return;
    setBest((b) => { const nb = Math.max(b, score); localStorage.setItem("ia_outlier_best", String(nb)); return nb; });
  }, [phase, score]);

  function onPick(i: number) {
    if (revealed || !r) return;
    setPicked(i); setRevealed(true);
    if (r.pts[i].outlier) setScore((s) => s + 1);
    setTimeout(() => {
      if (round >= TOTAL) { setPhase("over"); return; }
      const nr = round + 1; setRound(nr); setR(buildRound(nr)); setPicked(null); setRevealed(false);
    }, 1300);
  }

  const correct = revealed && picked !== null && r ? r.pts[picked].outlier : null;

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "36px 24px 60px" }}>
        <Link href="/games" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← All games</Link>

        <div style={{ marginTop: 16, borderRadius: 22, padding: 24, color: "#e7f6ec", background: "radial-gradient(700px 360px at 80% -30%,#0d3a23,#07150d)", border: "1px solid #14653b", boxShadow: "0 20px 50px rgba(13,92,48,.25)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 26, fontWeight: 700, margin: 0, color: "#f0fff6" }}>📊 Spot the Outlier</h1>
            <span style={{ fontSize: 13, color: "#8fd6ab", fontWeight: 700 }}>Best {best}/{TOTAL}</span>
          </div>

          {phase === "idle" && (
            <div style={{ textAlign: "center", padding: "26px 0 6px" }}>
              <p style={panelText}>A scatter plot follows a clear trend — except one point. <strong>Click the outlier</strong>: the point that doesn't fit the pattern. {TOTAL} rounds.</p>
              <button onClick={start} style={primaryBtn}>Start →</button>
            </div>
          )}

          {phase === "playing" && r && (
            <>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "14px 0" }}>
                <span style={{ fontSize: 13, color: "#8fd6ab", fontWeight: 700 }}>Round {round}/{TOTAL}</span>
                <span style={{ fontSize: 13, color: "#8fd6ab", fontWeight: 700 }}>Score {score}</span>
              </div>

              <Board pts={r.pts} picked={picked} revealed={revealed} onPick={onPick} />

              <div style={{ textAlign: "center", minHeight: 24, marginTop: 10, fontWeight: 800 }}>
                {!revealed && <span style={{ color: "#8fd6ab", fontWeight: 600, fontSize: 13 }}>Click the point that breaks the trend.</span>}
                {correct === true && <span style={{ color: "#34d27f" }}>✓ That's the outlier!</span>}
                {correct === false && <span style={{ color: "#fca5a5" }}>✗ The ringed point was the outlier.</span>}
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
          An <em>outlier</em> sits far from the trend the rest of the data follows. Outliers can distort an average and pull a line of best fit. More in <Link href="/courses" style={{ color: "#0d5c30", fontWeight: 600 }}>MTH1W → Data &amp; Scatter Plots</Link>.
        </p>
      </div>
    </main>
  );
}

const panelText: React.CSSProperties = { color: "#bfe9cf", fontSize: 16, lineHeight: 1.6, margin: "0 auto 20px", maxWidth: 450 };
const primaryBtn: React.CSSProperties = { background: "linear-gradient(135deg,#1f8a4c,#34d27f)", color: "#04130a", border: "none", borderRadius: 12, padding: "13px 30px", fontWeight: 800, fontSize: 16, cursor: "pointer" };
