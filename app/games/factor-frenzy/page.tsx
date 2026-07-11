"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { SiteHeader } from "../../../components/SiteHeader";

const TIME = 60;
type Round = { tri: string; options: string[]; correct: string };

const rint = (lo: number, hi: number) => Math.floor(Math.random() * (hi - lo + 1)) + lo;
function shuffle<T>(a: T[]): T[] { const x = [...a]; for (let i = x.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [x[i], x[j]] = [x[j], x[i]]; } return x; }
const fac = (n: number) => `(x ${n >= 0 ? `+ ${n}` : `− ${-n}`})`;
const nz = (n: number) => (n === 0 ? 1 : n); // never produce a zero factor

function triLabel(b: number, c: number): string {
  const bp = b === 0 ? "" : b === 1 ? " + x" : b === -1 ? " − x" : b > 0 ? ` + ${b}x` : ` − ${-b}x`;
  const cp = c === 0 ? "" : c > 0 ? ` + ${c}` : ` − ${-c}`;
  return `x²${bp}${cp}`;
}

function buildRound(): Round {
  if (Math.random() < 0.25) {
    // difference of squares: x² − n²
    const n = rint(2, 9);
    const correct = `${fac(-n)}${fac(n)}`;
    const opts = new Set<string>([correct, `${fac(-n)}${fac(-n)}`, `${fac(n)}${fac(n)}`, `${fac(-(n - 1))}${fac(n + 1)}`]);
    return { tri: triLabel(0, -n * n), options: shuffle([...opts].slice(0, 4)), correct };
  }
  // monic trinomial x² + bx + c = (x+p)(x+q)
  let p = nz(rint(-7, 7)), q = nz(rint(-7, 7));
  if (p + q === 0) q = nz(q + 1);
  const b = p + q, c = p * q;
  const correct = `${fac(p)}${fac(q)}`;
  const opts = new Set<string>([correct]);
  opts.add(`${fac(-p)}${fac(-q)}`);        // both signs flipped
  opts.add(`${fac(p)}${fac(-q)}`);         // one sign flipped
  opts.add(`${fac(nz(p + 1))}${fac(nz(q - 1))}`); // same middle term, wrong constant
  // top up if collisions reduced the set
  let guard = 0;
  while (opts.size < 4 && guard++ < 20) opts.add(`${fac(nz(p + rint(-2, 2)))}${fac(nz(q + rint(-2, 2)))}`);
  return { tri: triLabel(b, c), options: shuffle([...opts].slice(0, 4)), correct };
}

export default function FactorFrenzy() {
  const [phase, setPhase] = useState<"idle" | "playing" | "over">("idle");
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME);
  const [r, setR] = useState<Round | null>(null);
  const [picked, setPicked] = useState<string | null>(null);

  useEffect(() => { setBest(Number(localStorage.getItem("ia_factor_best") || 0)); }, []);

  const start = useCallback(() => { setScore(0); setTimeLeft(TIME); setPicked(null); setR(buildRound()); setPhase("playing"); }, []);

  useEffect(() => {
    if (phase !== "playing") return;
    if (timeLeft <= 0) { setPhase("over"); return; }
    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, timeLeft]);

  useEffect(() => {
    if (phase !== "over") return;
    setBest((b) => { const nb = Math.max(b, score); localStorage.setItem("ia_factor_best", String(nb)); return nb; });
  }, [phase, score]);

  function answer(opt: string) {
    if (picked || !r) return;
    setPicked(opt);
    if (opt === r.correct) setScore((s) => s + 1);
    setTimeout(() => { setR(buildRound()); setPicked(null); }, opt === r.correct ? 280 : 700);
  }

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 620, margin: "0 auto", padding: "36px 24px 60px" }}>
        <Link href="/games" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← All games</Link>

        <div style={{ marginTop: 16, borderRadius: 22, padding: 24, color: "#e7f6ec", background: "radial-gradient(700px 360px at 80% -30%,#0d3a23,#07150d)", border: "1px solid #14653b", boxShadow: "0 20px 50px rgba(13,92,48,.25)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 26, fontWeight: 700, margin: 0, color: "#f0fff6" }}>🧩 Factor Frenzy</h1>
            <span style={{ fontSize: 13, color: "#8fd6ab", fontWeight: 700 }}>Best {best}</span>
          </div>

          {phase === "idle" && (
            <div style={{ textAlign: "center", padding: "26px 0 6px" }}>
              <p style={panelText}>Pick the correct <strong>factored form</strong> of each trinomial. Watch the signs — and spot the differences of squares. How many can you factor in {TIME} seconds?</p>
              <button onClick={start} style={primaryBtn}>Start →</button>
            </div>
          )}

          {phase === "playing" && r && (
            <>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "14px 0" }}>
                <span style={{ fontSize: 13, color: timeLeft <= 10 ? "#fca5a5" : "#8fd6ab", fontWeight: 800 }}>⏱ {timeLeft}s</span>
                <span style={{ fontSize: 13, color: "#8fd6ab", fontWeight: 700 }}>Factored {score}</span>
              </div>

              <div style={{ textAlign: "center", padding: "18px 0 6px", fontFamily: "JetBrains Mono, monospace", fontWeight: 800, fontSize: 30, color: "#f0fff6" }}>{r.tri}</div>
              <div style={{ color: "#8fd6ab", fontSize: 12, textAlign: "center", marginBottom: 10 }}>Choose the factored form</div>

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
              <div style={{ fontSize: 48, fontWeight: 800, color: "#34d27f", fontFamily: "Fraunces, serif" }}>{score}</div>
              <p style={panelText}>trinomials factored in {TIME}s. {score >= best && score > 0 ? "🏆 New best!" : "Play again to beat your best."}</p>
              <button onClick={start} style={primaryBtn}>Play again</button>
            </div>
          )}
        </div>

        <p style={{ color: "#94a3b8", fontSize: 13.5, lineHeight: 1.6, marginTop: 18, textAlign: "center" }}>
          To factor <em>x² + bx + c</em>, find two numbers that <strong>multiply to c</strong> and <strong>add to b</strong>. A difference of squares <em>x² − n²</em> factors to <em>(x − n)(x + n)</em>. More in <Link href="/courses" style={{ color: "#0d5c30", fontWeight: 600 }}>MPM2D → Quadratics</Link>.
        </p>
      </div>
    </main>
  );
}

const panelText: React.CSSProperties = { color: "#bfe9cf", fontSize: 16, lineHeight: 1.6, margin: "0 auto 20px", maxWidth: 450 };
const primaryBtn: React.CSSProperties = { background: "linear-gradient(135deg,#1f8a4c,#34d27f)", color: "#04130a", border: "none", borderRadius: 12, padding: "13px 30px", fontWeight: 800, fontSize: 16, cursor: "pointer" };
const choiceBtn: React.CSSProperties = { background: "rgba(255,255,255,.08)", color: "#f0fff6", border: "1px solid rgba(159,231,189,.28)", borderRadius: 12, padding: "14px 8px", fontWeight: 800, fontSize: 17, fontFamily: "JetBrains Mono, monospace", cursor: "pointer" };
const okStyle: React.CSSProperties = { background: "rgba(52,210,127,.25)", border: "1px solid #34d27f" };
const noStyle: React.CSSProperties = { background: "rgba(239,68,68,.25)", border: "1px solid #ef4444" };
