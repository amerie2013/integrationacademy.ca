"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { SiteHeader } from "../../../components/SiteHeader";

const TOTAL = 10;
type Round = { text: string; answer: number; unit: string };

const rint = (lo: number, hi: number) => Math.floor(Math.random() * (hi - lo + 1)) + lo;
const pick = <T,>(a: T[]) => a[Math.floor(Math.random() * a.length)];

function buildRound(): Round {
  if (Math.random() < 0.5) {
    // exponential growth (doubling / tripling)
    const P0 = pick([10, 20, 25, 50, 100]);
    const f = pick([2, 3]);
    const n = rint(1, f === 3 ? 3 : 4);          // keep the result reasonable
    const p = pick([2, 3, 5]);
    const t = n * p;
    const verb = f === 2 ? "doubles" : "triples";
    const noun = pick([
      `A colony of ${P0} bacteria`, `A population of ${P0} cells`, `A culture of ${P0} microbes`,
    ]);
    return { text: `${noun} ${verb} every ${p} hours. How many are there after ${t} hours?`, answer: P0 * f ** n, unit: "" };
  }
  // exponential decay (half-life)
  const n = rint(1, 3);
  const R = pick([5, 10, 15, 20, 25, 30]);
  const P0 = R * 2 ** n;
  const p = pick([2, 3, 5, 10]);
  const t = n * p;
  return { text: `A ${P0} mg sample has a half-life of ${p} years. How much remains after ${t} years?`, answer: R, unit: "mg" };
}

export default function GrowthSpurt() {
  const [phase, setPhase] = useState<"idle" | "playing" | "over">("idle");
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [r, setR] = useState<Round | null>(null);
  const [val, setVal] = useState("");
  const [judged, setJudged] = useState<null | boolean>(null);

  useEffect(() => { setBest(Number(localStorage.getItem("ia_growth_best") || 0)); }, []);

  const start = useCallback(() => { setRound(1); setScore(0); setVal(""); setJudged(null); setR(buildRound()); setPhase("playing"); }, []);

  useEffect(() => {
    if (phase !== "over") return;
    setBest((b) => { const nb = Math.max(b, score); localStorage.setItem("ia_growth_best", String(nb)); return nb; });
  }, [phase, score]);

  function submit() {
    if (judged !== null || !r || val.trim() === "") return;
    const ok = Number(val) === r.answer;
    setJudged(ok);
    if (ok) setScore((s) => s + 1);
    setTimeout(() => {
      if (round >= TOTAL) { setPhase("over"); return; }
      const nr = round + 1; setRound(nr); setR(buildRound()); setVal(""); setJudged(null);
    }, 1400);
  }

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "36px 24px 60px" }}>
        <Link href="/games" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← All games</Link>

        <div style={{ marginTop: 16, borderRadius: 22, padding: 24, color: "#e7f6ec", background: "radial-gradient(700px 360px at 80% -30%,#0d3a23,#07150d)", border: "1px solid #14653b", boxShadow: "0 20px 50px rgba(13,92,48,.25)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 26, fontWeight: 700, margin: 0, color: "#f0fff6" }}>🚀 Growth Spurt</h1>
            <span style={{ fontSize: 13, color: "#8fd6ab", fontWeight: 700 }}>Best {best}/{TOTAL}</span>
          </div>

          {phase === "idle" && (
            <div style={{ textAlign: "center", padding: "26px 0 6px" }}>
              <p style={panelText}>Exponential growth and decay, in the real world. Work out the amount after a doubling, tripling, or half-life. {TOTAL} rounds — every answer is a whole number.</p>
              <button onClick={start} style={primaryBtn}>Start →</button>
            </div>
          )}

          {phase === "playing" && r && (
            <>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "14px 0" }}>
                <span style={{ fontSize: 13, color: "#8fd6ab", fontWeight: 700 }}>Round {round}/{TOTAL}</span>
                <span style={{ fontSize: 13, color: "#8fd6ab", fontWeight: 700 }}>Score {score}</span>
              </div>

              <div style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(159,231,189,.22)", borderRadius: 14, padding: "20px 18px", textAlign: "center", color: "#f0fff6", fontSize: 18, lineHeight: 1.55, minHeight: 90, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {r.text}
              </div>

              <div style={{ display: "flex", gap: 10, justifyContent: "center", alignItems: "center", marginTop: 16 }}>
                <input value={val} onChange={(e) => setVal(e.target.value.replace(/[^\d.]/g, ""))}
                  onKeyDown={(e) => { if (e.key === "Enter") submit(); }}
                  inputMode="decimal" placeholder="?" disabled={judged !== null} autoFocus
                  style={{ width: 130, textAlign: "center", fontSize: 22, fontWeight: 800, fontFamily: "JetBrains Mono, monospace", padding: "10px 12px", borderRadius: 10, border: `2px solid ${judged === null ? "rgba(159,231,189,.35)" : judged ? "#34d27f" : "#ef4444"}`, background: "rgba(255,255,255,.08)", color: "#f0fff6", outline: "none" }} />
                <button onClick={submit} disabled={judged !== null || val.trim() === ""} style={{ ...primaryBtn, padding: "12px 22px", opacity: judged !== null || val.trim() === "" ? 0.55 : 1 }}>Check</button>
              </div>

              <div style={{ textAlign: "center", minHeight: 24, marginTop: 10, fontWeight: 800 }}>
                {judged === true && <span style={{ color: "#34d27f" }}>✓ Correct!</span>}
                {judged === false && <span style={{ color: "#fca5a5" }}>✗ It was {r.answer}{r.unit ? " " + r.unit : ""}</span>}
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
          Repeated growth/decay is exponential: amount = start × (factor)<sup>(time ÷ period)</sup>. Doubling uses a factor of 2; a half-life uses ½. Learn it in <Link href="/courses" style={{ color: "#0d5c30", fontWeight: 600 }}>MCR3U → Exponential Functions</Link>.
        </p>
      </div>
    </main>
  );
}

const panelText: React.CSSProperties = { color: "#bfe9cf", fontSize: 16, lineHeight: 1.6, margin: "0 auto 20px", maxWidth: 450 };
const primaryBtn: React.CSSProperties = { background: "linear-gradient(135deg,#1f8a4c,#34d27f)", color: "#04130a", border: "none", borderRadius: 12, padding: "13px 30px", fontWeight: 800, fontSize: 16, cursor: "pointer" };
