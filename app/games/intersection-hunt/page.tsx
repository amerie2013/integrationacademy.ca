"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { SiteHeader } from "../../../components/SiteHeader";

type Line = { m: number; b: number };
type Round = { A: Line; B: Line; sol: { x: number; y: number }; startA: Line; startB: Line };
const TOTAL = 8;

const W = 360, H = 360, MIN = -6, MAX = 6;
const M_MIN = -4, M_MAX = 4, B_MIN = -6, B_MAX = 6;
const sx = (x: number) => ((x - MIN) / (MAX - MIN)) * W;
const sy = (y: number) => H - ((y - MIN) / (MAX - MIN)) * H;
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];
const rint = (lo: number, hi: number) => Math.floor(Math.random() * (hi - lo + 1)) + lo;

function lineLabel({ m, b }: Line): string {
  if (m === 0) return `y = ${b}`;
  const mp = m === 1 ? "x" : m === -1 ? "−x" : `${m < 0 ? "−" : ""}${Math.abs(m)}x`;
  const bp = b === 0 ? "" : b > 0 ? ` + ${b}` : ` − ${-b}`;
  return `y = ${mp}${bp}`;
}
const same = (p: Line, q: Line) => p.m === q.m && p.b === q.b;

function buildRound(level: number): Round {
  const spread = level <= 4 ? 3 : 4;
  const slopes = level <= 4 ? [-2, -1, 1, 2] : [-3, -2, -1, 1, 2, 3];
  let guard = 0;
  while (guard++ < 300) {
    const x = rint(-spread, spread), y = rint(-spread, spread);
    const mA = pick(slopes); let mB = pick(slopes);
    if (mA === mB) continue;
    const A: Line = { m: mA, b: y - mA * x };
    const B: Line = { m: mB, b: y - mB * x };
    if (Math.abs(A.b) > B_MAX || Math.abs(B.b) > B_MAX) continue;
    return { A, B, sol: { x, y }, startA: { m: 0, b: 0 }, startB: { m: 0, b: 2 } };
  }
  return { A: { m: 1, b: 1 }, B: { m: -1, b: -1 }, sol: { x: -1, y: 0 }, startA: { m: 0, b: 0 }, startB: { m: 0, b: 2 } };
}

function Board({ a, c, locate, guess, sol, revealed, onPick }: {
  a: Line; c: Line; locate: boolean; guess: { x: number; y: number } | null;
  sol: { x: number; y: number }; revealed: boolean; onPick: (x: number, y: number) => void;
}) {
  function handle(e: React.MouseEvent<SVGSVGElement>) {
    if (!locate || revealed) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const vbX = ((e.clientX - rect.left) / rect.width) * W;
    const vbY = ((e.clientY - rect.top) / rect.height) * H;
    const mx = Math.round(MIN + (vbX / W) * (MAX - MIN));
    const my = Math.round(MIN + (1 - vbY / H) * (MAX - MIN));
    onPick(clamp(mx, MIN, MAX), clamp(my, MIN, MAX));
  }
  const grid = [];
  for (let g = MIN; g <= MAX; g++) {
    grid.push(<line key={"v" + g} x1={sx(g)} y1={0} x2={sx(g)} y2={H} stroke={g === 0 ? "rgba(159,231,189,.5)" : "rgba(159,231,189,.12)"} strokeWidth={g === 0 ? 1.5 : 1} />);
    grid.push(<line key={"h" + g} x1={0} y1={sy(g)} x2={W} y2={sy(g)} stroke={g === 0 ? "rgba(159,231,189,.5)" : "rgba(159,231,189,.12)"} strokeWidth={g === 0 ? 1.5 : 1} />);
  }
  const seg = (L: Line, color: string) => (
    <>
      <line x1={sx(MIN)} y1={sy(L.m * MIN + L.b)} x2={sx(MAX)} y2={sy(L.m * MAX + L.b)} stroke={color} strokeWidth={3} strokeLinecap="round" />
      <circle cx={sx(0)} cy={sy(L.b)} r={4.5} fill={color} />{/* y-intercept marker */}
    </>
  );
  const correct = revealed && guess && guess.x === sol.x && guess.y === sol.y;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} onClick={handle}
      style={{ width: "100%", height: "auto", display: "block", background: "#04130a", borderRadius: 12, cursor: locate && !revealed ? "crosshair" : "default", touchAction: "manipulation" }}>
      {grid}
      {seg(a, "#34d27f")}
      {seg(c, "#fbbf24")}
      {guess && <circle cx={sx(guess.x)} cy={sy(guess.y)} r={7} fill={correct ? "#34d27f" : "#ef4444"} stroke="#04130a" strokeWidth={2} />}
      {revealed && !correct && <circle cx={sx(sol.x)} cy={sy(sol.y)} r={9} fill="none" stroke="#34d27f" strokeWidth={3} />}
    </svg>
  );
}

function Stepper({ label, value, onChange, lo, hi }: { label: string; value: number; onChange: (v: number) => void; lo: number; hi: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
      <span style={{ color: "#bfe9cf", fontSize: 13, fontWeight: 700 }}>{label}</span>
      <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <button onClick={() => onChange(clamp(value - 1, lo, hi))} disabled={value <= lo} style={stepBtn}>−</button>
        <span style={{ minWidth: 26, textAlign: "center", fontFamily: "JetBrains Mono, monospace", fontWeight: 800, color: "#f0fff6" }}>{value}</span>
        <button onClick={() => onChange(clamp(value + 1, lo, hi))} disabled={value >= hi} style={stepBtn}>+</button>
      </span>
    </div>
  );
}

function LinePanel({ color, target, cur, matched, setCur }: {
  color: string; target: Line; cur: Line; matched: boolean; setCur: (l: Line) => void;
}) {
  return (
    <div style={{ flex: 1, minWidth: 180, background: "rgba(255,255,255,.05)", border: `1px solid ${matched ? color : "rgba(159,231,189,.22)"}`, borderRadius: 14, padding: "12px 14px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <span style={{ color, fontFamily: "JetBrains Mono, monospace", fontWeight: 800, fontSize: 15 }}>{lineLabel(target)}</span>
        {matched && <span style={{ color, fontWeight: 800, fontSize: 15 }}>✓</span>}
      </div>
      <Stepper label="slope (m)" value={cur.m} onChange={(m) => setCur({ ...cur, m })} lo={M_MIN} hi={M_MAX} />
      <div style={{ height: 6 }} />
      <Stepper label="y-intercept (b)" value={cur.b} onChange={(b) => setCur({ ...cur, b })} lo={B_MIN} hi={B_MAX} />
    </div>
  );
}

export default function IntersectionHunt() {
  const [phase, setPhase] = useState<"idle" | "playing" | "over">("idle");
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [r, setR] = useState<Round | null>(null);
  const [curA, setCurA] = useState<Line>({ m: 0, b: 0 });
  const [curB, setCurB] = useState<Line>({ m: 0, b: 2 });
  const [stage, setStage] = useState<"build" | "locate">("build");
  const [guess, setGuess] = useState<{ x: number; y: number } | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => { setBest(Number(localStorage.getItem("ia_intersection_best") || 0)); }, []);

  const loadRound = useCallback((n: number) => {
    const nr = buildRound(n);
    setR(nr); setCurA(nr.startA); setCurB(nr.startB); setStage("build"); setGuess(null); setRevealed(false);
  }, []);

  const start = useCallback(() => { setRound(1); setScore(0); loadRound(1); setPhase("playing"); }, [loadRound]);

  useEffect(() => {
    if (phase !== "over") return;
    setBest((b) => { const nb = Math.max(b, score); localStorage.setItem("ia_intersection_best", String(nb)); return nb; });
  }, [phase, score]);

  const matchA = !!r && same(curA, r.A);
  const matchB = !!r && same(curB, r.B);

  // Once both lines are correctly built, unlock the "find the intersection" step.
  useEffect(() => {
    if (stage === "build" && matchA && matchB) setStage("locate");
  }, [stage, matchA, matchB]);

  function onPick(x: number, y: number) {
    if (stage !== "locate" || revealed || !r) return;
    setGuess({ x, y });
    setRevealed(true);
    if (x === r.sol.x && y === r.sol.y) setScore((s) => s + 1);
    setTimeout(() => {
      if (round >= TOTAL) { setPhase("over"); return; }
      const nr = round + 1; setRound(nr); loadRound(nr);
    }, 1500);
  }

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 660, margin: "0 auto", padding: "36px 24px 60px" }}>
        <Link href="/games" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← All games</Link>

        <div style={{ marginTop: 16, borderRadius: 22, padding: 24, color: "#e7f6ec", background: "radial-gradient(700px 360px at 80% -30%,#0d3a23,#07150d)", border: "1px solid #14653b", boxShadow: "0 20px 50px rgba(13,92,48,.25)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 26, fontWeight: 700, margin: 0, color: "#f0fff6" }}>🎯 Intersection Hunt</h1>
            <span style={{ fontSize: 13, color: "#8fd6ab", fontWeight: 700 }}>Best {best}/{TOTAL}</span>
          </div>

          {phase === "idle" && (
            <div style={{ textAlign: "center", padding: "26px 0 6px" }}>
              <p style={panelText}>You're given two equations. <strong>Build each line</strong> by setting its slope and y-intercept until it matches — then <strong>click where your two lines cross</strong> to solve the system. {TOTAL} rounds.</p>
              <button onClick={start} style={primaryBtn}>Start →</button>
            </div>
          )}

          {phase === "playing" && r && (
            <>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "14px 0" }}>
                <span style={{ fontSize: 13, color: "#8fd6ab", fontWeight: 700 }}>Round {round}/{TOTAL}</span>
                <span style={{ fontSize: 13, color: "#8fd6ab", fontWeight: 700 }}>Score {score}</span>
              </div>

              <Board a={curA} c={curB} locate={stage === "locate"} guess={guess} sol={r.sol} revealed={revealed} onPick={onPick} />

              <div style={{ color: stage === "locate" ? "#34d27f" : "#8fd6ab", fontSize: 13, textAlign: "center", minHeight: 20, margin: "10px 0 6px", fontWeight: 700 }}>
                {stage === "build" && "① Set each line's slope & y-intercept to match its equation."}
                {stage === "locate" && !revealed && "② Both lines built — now click their intersection!"}
                {revealed && guess && guess.x === r.sol.x && guess.y === r.sol.y && <span style={{ color: "#34d27f" }}>✓ Solved — ({r.sol.x}, {r.sol.y})</span>}
                {revealed && guess && !(guess.x === r.sol.x && guess.y === r.sol.y) && <span style={{ color: "#fca5a5" }}>✗ The solution was ({r.sol.x}, {r.sol.y})</span>}
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <LinePanel color="#34d27f" target={r.A} cur={curA} matched={matchA} setCur={setCurA} />
                <LinePanel color="#fbbf24" target={r.B} cur={curB} matched={matchB} setCur={setCurB} />
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
          The slope tilts the line; the y-intercept slides it up and down. Where your two correctly-built lines meet is the one point that satisfies <em>both</em> equations — the solution of the system. Learn it in <Link href="/courses" style={{ color: "#0d5c30", fontWeight: 600 }}>MPM2D → Linear Systems</Link>.
        </p>
      </div>
    </main>
  );
}

const panelText: React.CSSProperties = { color: "#bfe9cf", fontSize: 16, lineHeight: 1.6, margin: "0 auto 20px", maxWidth: 470 };
const primaryBtn: React.CSSProperties = { background: "linear-gradient(135deg,#1f8a4c,#34d27f)", color: "#04130a", border: "none", borderRadius: 12, padding: "13px 30px", fontWeight: 800, fontSize: 16, cursor: "pointer" };
const stepBtn: React.CSSProperties = { width: 30, height: 30, borderRadius: 8, border: "1px solid rgba(159,231,189,.35)", background: "rgba(255,255,255,.08)", color: "#f0fff6", fontWeight: 800, fontSize: 18, cursor: "pointer", lineHeight: 1 };
