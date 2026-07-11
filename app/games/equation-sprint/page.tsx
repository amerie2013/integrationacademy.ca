"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { SiteHeader } from "../../../components/SiteHeader";

type Q = { text: string; x: number; choices: number[] };
const ROUND = 60;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
const rint = (lo: number, hi: number) => Math.floor(Math.random() * (hi - lo + 1)) + lo;

function genQuestion(): Q {
  let a = rint(2, 9);
  if (Math.random() < 0.5) a = -a;
  const x = rint(-9, 9);
  const b = rint(-12, 12);
  const c = a * x + b;
  const aStr = `${a < 0 ? "−" : ""}${Math.abs(a)}x`;
  const bStr = b === 0 ? "" : b > 0 ? ` + ${b}` : ` − ${-b}`;
  const text = `${aStr}${bStr} = ${c}`;

  const pool = [x + 1, x - 1, x + 2, x - 2, -x, x + 3, x - 3];
  const distract: number[] = [];
  for (const d of shuffle(pool)) {
    if (d !== x && !distract.includes(d) && distract.length < 3) distract.push(d);
  }
  return { text, x, choices: shuffle([x, ...distract]) };
}

export default function EquationSprint() {
  const [phase, setPhase] = useState<"idle" | "playing" | "over">("idle");
  const [timeLeft, setTimeLeft] = useState(ROUND);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [best, setBest] = useState(0);
  const [q, setQ] = useState<Q | null>(null);
  const [flash, setFlash] = useState<"ok" | "no" | null>(null);

  useEffect(() => { setBest(Number(localStorage.getItem("ia_eqsprint_best") || 0)); }, []);

  const start = useCallback(() => {
    setScore(0); setStreak(0); setCorrect(0); setTimeLeft(ROUND); setQ(genQuestion()); setFlash(null); setPhase("playing");
  }, []);

  // countdown
  useEffect(() => {
    if (phase !== "playing") return;
    if (timeLeft <= 0) { setPhase("over"); return; }
    const id = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(id);
  }, [phase, timeLeft]);

  // persist best
  useEffect(() => {
    if (phase !== "over") return;
    setBest((b) => {
      const nb = Math.max(b, score);
      localStorage.setItem("ia_eqsprint_best", String(nb));
      return nb;
    });
  }, [phase, score]);

  function answer(choice: number) {
    if (phase !== "playing" || !q) return;
    if (choice === q.x) {
      setScore((s) => s + 10 + streak * 2);
      setStreak((s) => s + 1);
      setCorrect((c) => c + 1);
      setFlash("ok");
    } else {
      setStreak(0);
      setFlash("no");
    }
    setQ(genQuestion());
    setTimeout(() => setFlash(null), 220);
  }

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "36px 24px 60px" }}>
        <Link href="/games" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← All games</Link>

        <div style={{ position: "relative", overflow: "hidden", marginTop: 16, borderRadius: 22, padding: 28, color: "#e7f6ec", background: "radial-gradient(700px 360px at 80% -30%,#0d3a23,#07150d)", border: "1px solid #14653b", boxShadow: flash === "ok" ? "0 0 0 3px #34d27f" : flash === "no" ? "0 0 0 3px #ef4444" : "0 20px 50px rgba(13,92,48,.25)", transition: "box-shadow .15s ease" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 26, fontWeight: 700, margin: 0, color: "#f0fff6" }}>⚡ Equation Sprint</h1>
            <span style={{ fontSize: 13, color: "#8fd6ab", fontWeight: 700 }}>Best {best}</span>
          </div>

          {phase === "playing" && (
            <>
              <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
                <Stat label="Time" value={`${timeLeft}s`} warn={timeLeft <= 10} />
                <Stat label="Score" value={String(score)} />
                <Stat label="Streak" value={`${streak}×`} hot={streak >= 3} />
              </div>
              <div style={{ height: 6, background: "rgba(255,255,255,.12)", borderRadius: 99, marginTop: 14, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${(timeLeft / ROUND) * 100}%`, background: "linear-gradient(90deg,#1f8a4c,#34d27f)", transition: "width 1s linear" }} />
              </div>

              <div style={{ textAlign: "center", margin: "28px 0 8px" }}>
                <div style={{ color: "#8fd6ab", fontSize: 13, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" }}>Solve for x</div>
                <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "clamp(26px,8vw,40px)", fontWeight: 700, color: "#f0fff6", margin: "8px 0" }}>{q?.text}</div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 10 }}>
                {q?.choices.map((ch) => (
                  <button key={ch} onClick={() => answer(ch)} style={choiceBtn}>x = {ch}</button>
                ))}
              </div>
            </>
          )}

          {phase === "idle" && (
            <Panel>
              <p style={panelText}>Solve as many linear equations as you can in <strong>{ROUND} seconds</strong>. Each correct answer is worth 10 points — keep a streak going for bonus points!</p>
              <button onClick={start} style={primaryBtn}>Start sprint →</button>
            </Panel>
          )}

          {phase === "over" && (
            <Panel>
              <div style={{ fontSize: 48, fontWeight: 800, color: "#34d27f", fontFamily: "Fraunces, serif" }}>{score}</div>
              <p style={panelText}>{correct} solved{score >= best && score > 0 ? " · 🏆 new best!" : ""}</p>
              <button onClick={start} style={primaryBtn}>Play again</button>
            </Panel>
          )}
        </div>

        <p style={{ color: "#94a3b8", fontSize: 13, marginTop: 16, textAlign: "center" }}>
          Tip: rearrange to <span style={{ fontFamily: "JetBrains Mono, monospace" }}>x = (c − b) / a</span>.
        </p>
      </div>
    </main>
  );
}

function Stat({ label, value, warn, hot }: { label: string; value: string; warn?: boolean; hot?: boolean }) {
  return (
    <div style={{ flex: 1, background: "rgba(255,255,255,.06)", border: "1px solid rgba(159,231,189,.18)", borderRadius: 12, padding: "8px 12px", textAlign: "center" }}>
      <div style={{ fontSize: 20, fontWeight: 800, color: warn ? "#fca5a5" : hot ? "#34d27f" : "#f0fff6" }}>{value}</div>
      <div style={{ fontSize: 11, color: "#8fd6ab", fontWeight: 600 }}>{label}</div>
    </div>
  );
}
function Panel({ children }: { children: React.ReactNode }) {
  return <div style={{ textAlign: "center", padding: "26px 0 6px" }}>{children}</div>;
}

const panelText: React.CSSProperties = { color: "#bfe9cf", fontSize: 16, lineHeight: 1.6, margin: "0 auto 20px", maxWidth: 420 };
const primaryBtn: React.CSSProperties = { background: "linear-gradient(135deg,#1f8a4c,#34d27f)", color: "#04130a", border: "none", borderRadius: 12, padding: "13px 30px", fontWeight: 800, fontSize: 16, cursor: "pointer" };
const choiceBtn: React.CSSProperties = { background: "rgba(255,255,255,.08)", color: "#f0fff6", border: "1px solid rgba(159,231,189,.28)", borderRadius: 12, padding: "16px 0", fontWeight: 800, fontSize: 20, fontFamily: "JetBrains Mono, monospace", cursor: "pointer" };
