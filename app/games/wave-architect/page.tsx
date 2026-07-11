"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SiteHeader } from "../../../components/SiteHeader";

type Wave = { a: number; b: number; c: number }; // y = a·sin(b·x) + c
const TIME = 90;
const W = 360, H = 360, MIN = -6, MAX = 6;
const sx = (x: number) => ((x - MIN) / (MAX - MIN)) * W;
const sy = (y: number) => H - ((y - MIN) / (MAX - MIN)) * H;
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
const rint = (lo: number, hi: number) => Math.floor(Math.random() * (hi - lo + 1)) + lo;

function waveLabel({ a, b, c }: Wave): string {
  const aStr = a === 1 ? "" : `${a}`;
  const bStr = b === 1 ? "x" : `${b}x`;
  const cStr = c === 0 ? "" : c > 0 ? ` + ${c}` : ` − ${-c}`;
  return `y = ${aStr}sin(${bStr})${cStr}`;
}
const same = (p: Wave, q: Wave) => p.a === q.a && p.b === q.b && p.c === q.c;

function newTarget(): Wave {
  let t: Wave;
  do { t = { a: rint(1, 3), b: rint(1, 2), c: rint(-3, 3) }; } while (t.a === 1 && t.b === 1 && t.c === 0);
  return t;
}

function wavePath(p: Wave): string {
  let d = "", pen = false;
  for (let i = 0; i <= 600; i++) {
    const x = MIN + ((MAX - MIN) * i) / 600;
    const y = p.a * Math.sin(p.b * x) + p.c;
    if (y < MIN - 40 || y > MAX + 40) { pen = false; continue; }
    d += `${pen ? "L" : "M"}${sx(x).toFixed(1)},${sy(y).toFixed(1)} `;
    pen = true;
  }
  return d;
}

function Board({ target, cur, matched }: { target: Wave; cur: Wave; matched: boolean }) {
  const grid = [];
  for (let g = MIN; g <= MAX; g++) {
    grid.push(<line key={"v" + g} x1={sx(g)} y1={0} x2={sx(g)} y2={H} stroke={g === 0 ? "rgba(159,231,189,.5)" : "rgba(159,231,189,.12)"} strokeWidth={g === 0 ? 1.5 : 1} />);
    grid.push(<line key={"h" + g} x1={0} y1={sy(g)} x2={W} y2={sy(g)} stroke={g === 0 ? "rgba(159,231,189,.5)" : "rgba(159,231,189,.12)"} strokeWidth={g === 0 ? 1.5 : 1} />);
  }
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", display: "block", background: "#04130a", borderRadius: 12 }}>
      {grid}
      {/* midline of student wave */}
      <line x1={0} y1={sy(cur.c)} x2={W} y2={sy(cur.c)} stroke="#fbbf24" strokeWidth={1} strokeDasharray="3 5" opacity={0.5} />
      <path d={wavePath(target)} fill="none" stroke="#7ef0ad" strokeWidth={3} strokeDasharray="7 6" opacity={0.55} />
      <path d={wavePath(cur)} fill="none" stroke={matched ? "#34d27f" : "#fbbf24"} strokeWidth={3.5} strokeLinecap="round" />
    </svg>
  );
}

function Stepper({ label, value, onDec, onInc, decOff, incOff }: {
  label: string; value: number; onDec: () => void; onInc: () => void; decOff: boolean; incOff: boolean;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
      <span style={{ color: "#bfe9cf", fontSize: 13, fontWeight: 700 }}>{label}</span>
      <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <button onClick={onDec} disabled={decOff} style={stepBtn}>−</button>
        <span style={{ minWidth: 26, textAlign: "center", fontFamily: "JetBrains Mono, monospace", fontWeight: 800, color: "#f0fff6" }}>{value}</span>
        <button onClick={onInc} disabled={incOff} style={stepBtn}>+</button>
      </span>
    </div>
  );
}

export default function WaveArchitect() {
  const [phase, setPhase] = useState<"idle" | "playing" | "over">("idle");
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME);
  const [target, setTarget] = useState<Wave>({ a: 2, b: 1, c: 1 });
  const [cur, setCur] = useState<Wave>({ a: 1, b: 1, c: 0 });
  const [flash, setFlash] = useState(false);
  const lock = useRef(false);

  useEffect(() => { setBest(Number(localStorage.getItem("ia_wave_best") || 0)); }, []);

  const start = useCallback(() => {
    setScore(0); setTimeLeft(TIME); setTarget(newTarget()); setCur({ a: 1, b: 1, c: 0 }); lock.current = false; setPhase("playing");
  }, []);

  useEffect(() => {
    if (phase !== "playing") return;
    if (timeLeft <= 0) { setPhase("over"); return; }
    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, timeLeft]);

  useEffect(() => {
    if (phase !== "over") return;
    setBest((b) => { const nb = Math.max(b, score); localStorage.setItem("ia_wave_best", String(nb)); return nb; });
  }, [phase, score]);

  const matched = same(cur, target);

  useEffect(() => {
    if (phase !== "playing" || !matched || lock.current) return;
    lock.current = true; setScore((s) => s + 1); setFlash(true);
    const t = setTimeout(() => { setTarget(newTarget()); setCur({ a: 1, b: 1, c: 0 }); setFlash(false); lock.current = false; }, 550);
    return () => clearTimeout(t);
  }, [matched, phase]);

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 660, margin: "0 auto", padding: "36px 24px 60px" }}>
        <Link href="/games" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← All games</Link>

        <div style={{ marginTop: 16, borderRadius: 22, padding: 24, color: "#e7f6ec", background: "radial-gradient(700px 360px at 80% -30%,#0d3a23,#07150d)", border: "1px solid #14653b", boxShadow: "0 20px 50px rgba(13,92,48,.25)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 26, fontWeight: 700, margin: 0, color: "#f0fff6" }}>🌊 Wave Architect</h1>
            <span style={{ fontSize: 13, color: "#8fd6ab", fontWeight: 700 }}>Best {best}</span>
          </div>

          {phase === "idle" && (
            <div style={{ textAlign: "center", padding: "26px 0 6px" }}>
              <p style={panelText}>A dashed target sine wave appears. Set the <strong>amplitude</strong>, <strong>frequency</strong>, and <strong>midline</strong> of <em>y = a·sin(bx) + c</em> until your wave matches it. As many as you can in {TIME}s!</p>
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

              <div style={{ textAlign: "center", margin: "10px 0 4px", fontFamily: "JetBrains Mono, monospace", fontWeight: 800, fontSize: 16, color: matched ? "#34d27f" : "#fbbf24" }}>{waveLabel(cur)}</div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <div style={ctrl}><Stepper label="a (amplitude)" value={cur.a}
                  onDec={() => setCur((c) => ({ ...c, a: clamp(c.a - 1, 1, 3) }))} onInc={() => setCur((c) => ({ ...c, a: clamp(c.a + 1, 1, 3) }))} decOff={cur.a <= 1} incOff={cur.a >= 3} /></div>
                <div style={ctrl}><Stepper label="b (cycles)" value={cur.b}
                  onDec={() => setCur((c) => ({ ...c, b: clamp(c.b - 1, 1, 2) }))} onInc={() => setCur((c) => ({ ...c, b: clamp(c.b + 1, 1, 2) }))} decOff={cur.b <= 1} incOff={cur.b >= 2} /></div>
                <div style={ctrl}><Stepper label="c (midline)" value={cur.c}
                  onDec={() => setCur((c) => ({ ...c, c: clamp(c.c - 1, -3, 3) }))} onInc={() => setCur((c) => ({ ...c, c: clamp(c.c + 1, -3, 3) }))} decOff={cur.c <= -3} incOff={cur.c >= 3} /></div>
              </div>
            </>
          )}

          {phase === "over" && (
            <div style={{ textAlign: "center", padding: "26px 0 6px" }}>
              <div style={{ fontSize: 48, fontWeight: 800, color: "#34d27f", fontFamily: "Fraunces, serif" }}>{score}</div>
              <p style={panelText}>waves matched in {TIME}s. {score >= best && score > 0 ? "🏆 New best!" : "Play again to beat your best."}</p>
              <button onClick={start} style={primaryBtn}>Play again</button>
            </div>
          )}
        </div>

        <p style={{ color: "#94a3b8", fontSize: 13.5, lineHeight: 1.6, marginTop: 18, textAlign: "center" }}>
          In <em>y = a·sin(bx) + c</em>: <strong>a</strong> is the amplitude (height), <strong>b</strong> sets how many cycles fit (period = 2π/b), and <strong>c</strong> is the midline. Master it in <Link href="/courses" style={{ color: "#0d5c30", fontWeight: 600 }}>MCR3U → Sinusoidal Functions</Link>.
        </p>
      </div>
    </main>
  );
}

const panelText: React.CSSProperties = { color: "#bfe9cf", fontSize: 16, lineHeight: 1.6, margin: "0 auto 20px", maxWidth: 470 };
const primaryBtn: React.CSSProperties = { background: "linear-gradient(135deg,#1f8a4c,#34d27f)", color: "#04130a", border: "none", borderRadius: 12, padding: "13px 30px", fontWeight: 800, fontSize: 16, cursor: "pointer" };
const ctrl: React.CSSProperties = { flex: 1, minWidth: 170, background: "rgba(255,255,255,.05)", border: "1px solid rgba(159,231,189,.22)", borderRadius: 14, padding: "12px 14px" };
const stepBtn: React.CSSProperties = { width: 30, height: 30, borderRadius: 8, border: "1px solid rgba(159,231,189,.35)", background: "rgba(255,255,255,.08)", color: "#f0fff6", fontWeight: 800, fontSize: 18, cursor: "pointer", lineHeight: 1 };
