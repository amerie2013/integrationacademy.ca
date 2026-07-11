"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SiteHeader } from "../../../components/SiteHeader";

type Para = { a: number; h: number; k: number };
const TIME = 90;
const A_SET = [-2, -1, 1, 2];

const W = 360, H = 360, MIN = -6, MAX = 6;
const sx = (x: number) => ((x - MIN) / (MAX - MIN)) * W;
const sy = (y: number) => H - ((y - MIN) / (MAX - MIN)) * H;
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];
const rint = (lo: number, hi: number) => Math.floor(Math.random() * (hi - lo + 1)) + lo;

function vfLabel({ a, h, k }: Para): string {
  const aStr = a === 1 ? "" : a === -1 ? "−" : `${a}`;
  const sq = h === 0 ? "x²" : h > 0 ? `(x − ${h})²` : `(x + ${-h})²`;
  const kStr = k === 0 ? "" : k > 0 ? ` + ${k}` : ` − ${-k}`;
  return `y = ${aStr}${sq}${kStr}`;
}
const same = (p: Para, q: Para) => p.a === q.a && p.h === q.h && p.k === q.k;

function newTarget(): Para {
  let t: Para;
  do {
    t = { a: pick(A_SET), h: rint(-4, 4), k: rint(-4, 4) };
  } while (t.h === 0 && t.k === 0); // never the trivial y = x² at the origin (= start state)
  return t;
}

function paraPath(p: Para): string {
  let d = "", pen = false;
  for (let i = 0; i <= 480; i++) {
    const x = MIN + ((MAX - MIN) * i) / 480;
    const y = p.a * (x - p.h) * (x - p.h) + p.k;
    if (y < MIN - 40 || y > MAX + 40) { pen = false; continue; }
    d += `${pen ? "L" : "M"}${sx(x).toFixed(1)},${sy(y).toFixed(1)} `;
    pen = true;
  }
  return d;
}

function Board({ target, cur, matched }: { target: Para; cur: Para; matched: boolean }) {
  const grid = [];
  for (let g = MIN; g <= MAX; g++) {
    grid.push(<line key={"v" + g} x1={sx(g)} y1={0} x2={sx(g)} y2={H} stroke={g === 0 ? "rgba(159,231,189,.5)" : "rgba(159,231,189,.12)"} strokeWidth={g === 0 ? 1.5 : 1} />);
    grid.push(<line key={"h" + g} x1={0} y1={sy(g)} x2={W} y2={sy(g)} stroke={g === 0 ? "rgba(159,231,189,.5)" : "rgba(159,231,189,.12)"} strokeWidth={g === 0 ? 1.5 : 1} />);
  }
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", display: "block", background: "#04130a", borderRadius: 12 }}>
      {grid}
      {/* target (ghost) */}
      <path d={paraPath(target)} fill="none" stroke="#7ef0ad" strokeWidth={3} strokeDasharray="7 6" opacity={0.55} />
      <circle cx={sx(target.h)} cy={sy(target.k)} r={4} fill="#7ef0ad" opacity={0.7} />
      {/* student */}
      <path d={paraPath(cur)} fill="none" stroke={matched ? "#34d27f" : "#fbbf24"} strokeWidth={3.5} strokeLinecap="round" />
      <circle cx={sx(cur.h)} cy={sy(cur.k)} r={5} fill={matched ? "#34d27f" : "#fbbf24"} stroke="#04130a" strokeWidth={2} />
    </svg>
  );
}

function Stepper({ label, value, onDec, onInc, decOff, incOff, display }: {
  label: string; value: number; onDec: () => void; onInc: () => void; decOff: boolean; incOff: boolean; display?: string;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
      <span style={{ color: "#bfe9cf", fontSize: 13, fontWeight: 700 }}>{label}</span>
      <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <button onClick={onDec} disabled={decOff} style={stepBtn}>−</button>
        <span style={{ minWidth: 28, textAlign: "center", fontFamily: "JetBrains Mono, monospace", fontWeight: 800, color: "#f0fff6" }}>{display ?? value}</span>
        <button onClick={onInc} disabled={incOff} style={stepBtn}>+</button>
      </span>
    </div>
  );
}

export default function ParabolaArchitect() {
  const [phase, setPhase] = useState<"idle" | "playing" | "over">("idle");
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME);
  const [target, setTarget] = useState<Para>({ a: 1, h: 2, k: 1 });
  const [cur, setCur] = useState<Para>({ a: 1, h: 0, k: 0 });
  const [flash, setFlash] = useState(false);
  const lock = useRef(false);

  useEffect(() => { setBest(Number(localStorage.getItem("ia_parabola_best") || 0)); }, []);

  const start = useCallback(() => {
    setScore(0); setTimeLeft(TIME); setTarget(newTarget()); setCur({ a: 1, h: 0, k: 0 }); lock.current = false; setPhase("playing");
  }, []);

  // countdown
  useEffect(() => {
    if (phase !== "playing") return;
    if (timeLeft <= 0) { setPhase("over"); return; }
    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, timeLeft]);

  // save best
  useEffect(() => {
    if (phase !== "over") return;
    setBest((b) => { const nb = Math.max(b, score); localStorage.setItem("ia_parabola_best", String(nb)); return nb; });
  }, [phase, score]);

  const matched = same(cur, target);

  // on a correct match: +1, flash, load the next target
  useEffect(() => {
    if (phase !== "playing" || !matched || lock.current) return;
    lock.current = true;
    setScore((s) => s + 1);
    setFlash(true);
    const t = setTimeout(() => {
      setTarget(newTarget()); setCur({ a: 1, h: 0, k: 0 }); setFlash(false); lock.current = false;
    }, 550);
    return () => clearTimeout(t);
  }, [matched, phase]);

  const aIdx = A_SET.indexOf(cur.a);

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 660, margin: "0 auto", padding: "36px 24px 60px" }}>
        <Link href="/games" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← All games</Link>

        <div style={{ marginTop: 16, borderRadius: 22, padding: 24, color: "#e7f6ec", background: "radial-gradient(700px 360px at 80% -30%,#0d3a23,#07150d)", border: "1px solid #14653b", boxShadow: "0 20px 50px rgba(13,92,48,.25)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 26, fontWeight: 700, margin: 0, color: "#f0fff6" }}>🅿️ Parabola Architect</h1>
            <span style={{ fontSize: 13, color: "#8fd6ab", fontWeight: 700 }}>Best {best}</span>
          </div>

          {phase === "idle" && (
            <div style={{ textAlign: "center", padding: "26px 0 6px" }}>
              <p style={panelText}>A dashed target parabola appears. Read its vertex and shape, then set <strong>a</strong>, <strong>h</strong>, <strong>k</strong> in vertex form <em>y = a(x − h)² + k</em> until your curve lands on it. Match as many as you can in {TIME} seconds!</p>
              <button onClick={start} style={primaryBtn}>Start →</button>
            </div>
          )}

          {phase === "playing" && (
            <>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "14px 0" }}>
                <span style={{ fontSize: 13, color: timeLeft <= 10 ? "#fca5a5" : "#8fd6ab", fontWeight: 800 }}>⏱ {timeLeft}s</span>
                <span style={{ fontSize: 13, color: "#8fd6ab", fontWeight: 700 }}>Matched {score}</span>
              </div>

              <div style={{ position: "relative" }}>
                <Board target={target} cur={cur} matched={matched} />
                {flash && <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Fraunces, serif", fontWeight: 800, fontSize: 44, color: "#34d27f", textShadow: "0 2px 12px rgba(0,0,0,.6)" }}>✓ +1</div>}
              </div>

              <div style={{ textAlign: "center", margin: "10px 0 4px", fontFamily: "JetBrains Mono, monospace", fontWeight: 800, fontSize: 16, color: matched ? "#34d27f" : "#fbbf24" }}>
                {vfLabel(cur)}
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <div style={ctrl}>
                  <Stepper label="a (stretch / direction)" value={cur.a} display={`${cur.a}`}
                    onDec={() => setCur((c) => ({ ...c, a: A_SET[clamp(aIdx - 1, 0, A_SET.length - 1)] }))}
                    onInc={() => setCur((c) => ({ ...c, a: A_SET[clamp(aIdx + 1, 0, A_SET.length - 1)] }))}
                    decOff={aIdx <= 0} incOff={aIdx >= A_SET.length - 1} />
                </div>
                <div style={ctrl}>
                  <Stepper label="h (left / right)" value={cur.h}
                    onDec={() => setCur((c) => ({ ...c, h: clamp(c.h - 1, -5, 5) }))}
                    onInc={() => setCur((c) => ({ ...c, h: clamp(c.h + 1, -5, 5) }))}
                    decOff={cur.h <= -5} incOff={cur.h >= 5} />
                </div>
                <div style={ctrl}>
                  <Stepper label="k (up / down)" value={cur.k}
                    onDec={() => setCur((c) => ({ ...c, k: clamp(c.k - 1, -5, 5) }))}
                    onInc={() => setCur((c) => ({ ...c, k: clamp(c.k + 1, -5, 5) }))}
                    decOff={cur.k <= -5} incOff={cur.k >= 5} />
                </div>
              </div>
            </>
          )}

          {phase === "over" && (
            <div style={{ textAlign: "center", padding: "26px 0 6px" }}>
              <div style={{ fontSize: 48, fontWeight: 800, color: "#34d27f", fontFamily: "Fraunces, serif" }}>{score}</div>
              <p style={panelText}>parabolas matched in {TIME}s. {score >= best && score > 0 ? "🏆 New best!" : "Play again to beat your best."}</p>
              <button onClick={start} style={primaryBtn}>Play again</button>
            </div>
          )}
        </div>

        <p style={{ color: "#94a3b8", fontSize: 13.5, lineHeight: 1.6, marginTop: 18, textAlign: "center" }}>
          In <em>y = a(x − h)² + k</em>: <strong>(h, k)</strong> is the vertex, <strong>a</strong> sets the width and direction (negative opens down). Master it in <Link href="/courses" style={{ color: "#0d5c30", fontWeight: 600 }}>MPM2D → Quadratics</Link>.
        </p>
      </div>
    </main>
  );
}

const panelText: React.CSSProperties = { color: "#bfe9cf", fontSize: 16, lineHeight: 1.6, margin: "0 auto 20px", maxWidth: 470 };
const primaryBtn: React.CSSProperties = { background: "linear-gradient(135deg,#1f8a4c,#34d27f)", color: "#04130a", border: "none", borderRadius: 12, padding: "13px 30px", fontWeight: 800, fontSize: 16, cursor: "pointer" };
const ctrl: React.CSSProperties = { flex: 1, minWidth: 180, background: "rgba(255,255,255,.05)", border: "1px solid rgba(159,231,189,.22)", borderRadius: 14, padding: "12px 14px" };
const stepBtn: React.CSSProperties = { width: 30, height: 30, borderRadius: 8, border: "1px solid rgba(159,231,189,.35)", background: "rgba(255,255,255,.08)", color: "#f0fff6", fontWeight: 800, fontSize: 18, cursor: "pointer", lineHeight: 1 };
