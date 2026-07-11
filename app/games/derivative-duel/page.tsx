"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { SiteHeader } from "../../../components/SiteHeader";

type Round = { f: string; options: string[]; correct: string };
const TOTAL = 8;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

const SUP: Record<number, string> = { 2: "²", 3: "³", 4: "⁴" };
function termStr(c: number, p: number): string {
  const a = Math.abs(c);
  if (p === 0) return `${a}`;
  const cf = a === 1 ? "" : `${a}`;
  return `${cf}x${p === 1 ? "" : SUP[p] ?? "^" + p}`;
}
function poly(terms: { c: number; p: number }[]): string {
  const t = terms.filter((x) => x.c !== 0).sort((m, n) => n.p - m.p);
  if (!t.length) return "0";
  return t.map((term, i) => {
    if (i === 0) return (term.c < 0 ? "−" : "") + termStr(term.c, term.p);
    return ` ${term.c < 0 ? "−" : "+"} ${termStr(term.c, term.p)}`;
  }).join("");
}

// Special (non-polynomial) cards: [f, f', ...wrong]
const SPECIAL: [string, string, string, string, string][] = [
  ["sin x", "cos x", "−cos x", "−sin x", "sin x"],
  ["cos x", "−sin x", "sin x", "cos x", "−cos x"],
  ["eˣ", "eˣ", "x·eˣ⁻¹", "eˣ/x", "x·eˣ"],
  ["ln x", "1/x", "1/x²", "x", "ln x − 1"],
  ["2ˣ", "2ˣ ln 2", "x·2ˣ⁻¹", "2ˣ", "2ˣ/ln 2"],
];

function genRound(): Round {
  if (Math.random() < 0.34) {
    const [f, correct, w1, w2, w3] = pick(SPECIAL);
    return { f, correct, options: shuffle([correct, w1, w2, w3]) };
  }
  const deg = Math.random() < 0.5 ? 3 : 2;
  const a = deg === 3 ? pick([-3, -2, -1, 1, 2, 3]) : 0;
  const b = pick([-4, -3, -2, -1, 1, 2, 3, 4]);
  const c = pick([-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6]);
  const d = pick([-9, -7, -5, -3, 3, 5, 7, 9]);
  const f = poly([{ c: a, p: 3 }, { c: b, p: 2 }, { c, p: 1 }, { c: d, p: 0 }]);

  const correct = poly([{ c: 3 * a, p: 2 }, { c: 2 * b, p: 1 }, { c, p: 0 }]);
  const cand = [
    poly([{ c: 3 * a, p: 2 }, { c: 2 * b, p: 1 }, { c: d, p: 0 }]),       // kept original constant
    poly([{ c: 3 * a, p: 3 }, { c: 2 * b, p: 2 }, { c, p: 1 }]),           // forgot to reduce powers
    poly([{ c: a, p: 2 }, { c: b, p: 1 }, { c, p: 0 }]),                   // reduced power, forgot to ×power
    poly([{ c: 3 * a, p: 2 }, { c: 2 * b, p: 1 }, { c, p: 0 }, { c: d, p: 0 }]), // kept + constant
  ];
  const wrongs: string[] = [];
  for (const w of shuffle(cand)) if (w !== correct && !wrongs.includes(w) && wrongs.length < 3) wrongs.push(w);
  let guard = 0;
  while (wrongs.length < 3 && guard++ < 20) {
    const w = poly([{ c: 3 * a + pick([-1, 1, 2]), p: 2 }, { c: 2 * b, p: 1 }, { c, p: 0 }]);
    if (w !== correct && !wrongs.includes(w)) wrongs.push(w);
  }
  return { f, correct, options: shuffle([correct, ...wrongs]) };
}

export default function DerivativeDuel() {
  const [phase, setPhase] = useState<"idle" | "playing" | "over">("idle");
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [r, setR] = useState<Round | null>(null);
  const [picked, setPicked] = useState<string | null>(null);

  useEffect(() => { setBest(Number(localStorage.getItem("ia_derivduel_best") || 0)); }, []);
  const start = useCallback(() => { setRound(1); setScore(0); setPicked(null); setR(genRound()); setPhase("playing"); }, []);
  useEffect(() => {
    if (phase !== "over") return;
    setBest((b) => { const nb = Math.max(b, score); localStorage.setItem("ia_derivduel_best", String(nb)); return nb; });
  }, [phase, score]);

  function answer(opt: string) {
    if (picked || !r) return;
    setPicked(opt);
    if (opt === r.correct) setScore((s) => s + 1);
    setTimeout(() => {
      if (round >= TOTAL) { setPhase("over"); return; }
      setRound((n) => n + 1); setR(genRound()); setPicked(null);
    }, 1050);
  }

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "36px 24px 60px" }}>
        <Link href="/games" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← All games</Link>

        <div style={{ marginTop: 16, borderRadius: 22, padding: 24, color: "#e7f6ec", background: "radial-gradient(700px 360px at 80% -30%,#0d3a23,#07150d)", border: "1px solid #14653b", boxShadow: "0 20px 50px rgba(13,92,48,.25)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 26, fontWeight: 700, margin: 0, color: "#f0fff6" }}>∂ Derivative Duel</h1>
            <span style={{ fontSize: 13, color: "#8fd6ab", fontWeight: 700 }}>Best {best}/{TOTAL}</span>
          </div>

          {phase === "idle" && (
            <div style={{ textAlign: "center", padding: "26px 0 6px" }}>
              <p style={panelText}>We show a function — you pick its derivative. {TOTAL} rounds of power rule, polynomials, and a few classics (sin, cos, eˣ, ln). Watch out for the classic slip-ups!</p>
              <button onClick={start} style={primaryBtn}>Start →</button>
            </div>
          )}

          {phase === "playing" && r && (
            <>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "14px 0" }}>
                <span style={{ fontSize: 13, color: "#8fd6ab", fontWeight: 700 }}>Round {round}/{TOTAL}</span>
                <span style={{ fontSize: 13, color: "#8fd6ab", fontWeight: 700 }}>Score {score}</span>
              </div>
              <div style={{ textAlign: "center", margin: "10px 0 18px" }}>
                <div style={{ color: "#8fd6ab", fontSize: 13, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" }}>Find f ′(x) for</div>
                <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "clamp(24px,7vw,36px)", fontWeight: 700, color: "#f0fff6", marginTop: 8 }}>f(x) = {r.f}</div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {r.options.map((o) => {
                  const isCorrect = picked && o === r.correct;
                  const isWrongPick = picked === o && o !== r.correct;
                  return (
                    <button key={o} onClick={() => answer(o)} disabled={!!picked}
                      style={{ ...choiceBtn, ...(isCorrect ? okStyle : {}), ...(isWrongPick ? noStyle : {}) }}>
                      {o}
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {phase === "over" && (
            <div style={{ textAlign: "center", padding: "26px 0 6px" }}>
              <div style={{ fontSize: 48, fontWeight: 800, color: "#34d27f", fontFamily: "Fraunces, serif" }}>{score}/{TOTAL}</div>
              <p style={panelText}>{score === TOTAL ? "Flawless differentiation! 🏆" : score >= best && score > 0 ? "🏆 New best!" : "Run it back to beat your best."}</p>
              <button onClick={start} style={primaryBtn}>Play again</button>
            </div>
          )}
        </div>

        <p style={{ color: "#94a3b8", fontSize: 13, marginTop: 16, textAlign: "center" }}>
          Power rule: <span style={{ fontFamily: "JetBrains Mono, monospace" }}>d/dx[xⁿ] = n·xⁿ⁻¹</span> — and the derivative of a constant is 0.
        </p>
      </div>
    </main>
  );
}

const panelText: React.CSSProperties = { color: "#bfe9cf", fontSize: 16, lineHeight: 1.6, margin: "0 auto 20px", maxWidth: 440 };
const primaryBtn: React.CSSProperties = { background: "linear-gradient(135deg,#1f8a4c,#34d27f)", color: "#04130a", border: "none", borderRadius: 12, padding: "13px 30px", fontWeight: 800, fontSize: 16, cursor: "pointer" };
const choiceBtn: React.CSSProperties = { background: "rgba(255,255,255,.08)", color: "#f0fff6", border: "1px solid rgba(159,231,189,.28)", borderRadius: 12, padding: "15px 10px", fontWeight: 800, fontSize: 18, fontFamily: "JetBrains Mono, monospace", cursor: "pointer" };
const okStyle: React.CSSProperties = { background: "rgba(52,210,127,.25)", border: "1px solid #34d27f" };
const noStyle: React.CSSProperties = { background: "rgba(239,68,68,.25)", border: "1px solid #ef4444" };
