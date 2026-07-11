"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { SiteHeader } from "../../../components/SiteHeader";

const TOTAL = 10;
// [leg, leg, hypotenuse]
const TRIPLES: [number, number, number][] = [
  [3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15],
  [20, 21, 29], [7, 24, 25], [9, 40, 41], [12, 16, 20], [10, 24, 26],
];
type Round = { legA: number; legB: number; hyp: number; unknown: "legA" | "legB" | "hyp"; answer: number };

const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

function buildRound(level: number): Round {
  const pool = level <= 5 ? TRIPLES.slice(0, 6) : TRIPLES;
  const [p, q, c] = pick(pool);
  // randomly choose which leg is horizontal
  const [legA, legB] = Math.random() < 0.5 ? [p, q] : [q, p];
  // ~55% ask for the hypotenuse, else ask for a leg
  if (Math.random() < 0.55) return { legA, legB, hyp: c, unknown: "hyp", answer: c };
  const u = Math.random() < 0.5 ? "legA" : "legB";
  return { legA, legB, hyp: c, unknown: u, answer: u === "legA" ? legA : legB };
}

function Triangle({ r }: { r: Round }) {
  const W = 340, H = 260;
  const cx = 86, cy = 212;                       // right-angle corner
  const scale = 168 / Math.max(r.legA, r.legB);
  const sa = r.legA * scale, sb = r.legB * scale;
  const Ph = { x: cx + sa, y: cy };              // end of horizontal leg
  const Pv = { x: cx, y: cy - sb };              // end of vertical leg
  const lbl = (which: Round["unknown"], v: number) => (r.unknown === which ? "?" : String(v));
  const txt = (x: number, y: number, t: string, hot: boolean) => (
    <text x={x} y={y} fill={hot ? "#fbbf24" : "#e7f6ec"} fontSize={hot ? 20 : 16} fontWeight={800} textAnchor="middle" fontFamily="JetBrains Mono, monospace">{t}</text>
  );
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", display: "block", background: "#04130a", borderRadius: 12 }}>
      <polygon points={`${cx},${cy} ${Ph.x},${Ph.y} ${Pv.x},${Pv.y}`} fill="rgba(52,210,127,.12)" stroke="#34d27f" strokeWidth={3} strokeLinejoin="round" />
      {/* right-angle marker */}
      <path d={`M ${cx + 14} ${cy} L ${cx + 14} ${cy - 14} L ${cx} ${cy - 14}`} fill="none" stroke="#9fe7bd" strokeWidth={1.6} />
      {txt((cx + Ph.x) / 2, cy + 22, lbl("legA", r.legA), r.unknown === "legA")}
      {txt(cx - 18, (cy + Pv.y) / 2 + 5, lbl("legB", r.legB), r.unknown === "legB")}
      {txt((Ph.x + Pv.x) / 2 + 20, (Ph.y + Pv.y) / 2 - 6, lbl("hyp", r.hyp), r.unknown === "hyp")}
    </svg>
  );
}

export default function PythagorasPursuit() {
  const [phase, setPhase] = useState<"idle" | "playing" | "over">("idle");
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [r, setR] = useState<Round | null>(null);
  const [val, setVal] = useState("");
  const [judged, setJudged] = useState<null | boolean>(null);

  useEffect(() => { setBest(Number(localStorage.getItem("ia_pythag_best") || 0)); }, []);

  const start = useCallback(() => { setRound(1); setScore(0); setVal(""); setJudged(null); setR(buildRound(1)); setPhase("playing"); }, []);

  useEffect(() => {
    if (phase !== "over") return;
    setBest((b) => { const nb = Math.max(b, score); localStorage.setItem("ia_pythag_best", String(nb)); return nb; });
  }, [phase, score]);

  function submit() {
    if (judged !== null || !r || val.trim() === "") return;
    const ok = Number(val) === r.answer;
    setJudged(ok);
    if (ok) setScore((s) => s + 1);
    setTimeout(() => {
      if (round >= TOTAL) { setPhase("over"); return; }
      const nr = round + 1; setRound(nr); setR(buildRound(nr)); setVal(""); setJudged(null);
    }, 1300);
  }

  const asking = r ? (r.unknown === "hyp" ? "the hypotenuse" : "the missing leg") : "";

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "36px 24px 60px" }}>
        <Link href="/games" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← All games</Link>

        <div style={{ marginTop: 16, borderRadius: 22, padding: 24, color: "#e7f6ec", background: "radial-gradient(700px 360px at 80% -30%,#0d3a23,#07150d)", border: "1px solid #14653b", boxShadow: "0 20px 50px rgba(13,92,48,.25)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 26, fontWeight: 700, margin: 0, color: "#f0fff6" }}>📐 Pythagoras Pursuit</h1>
            <span style={{ fontSize: 13, color: "#8fd6ab", fontWeight: 700 }}>Best {best}/{TOTAL}</span>
          </div>

          {phase === "idle" && (
            <div style={{ textAlign: "center", padding: "26px 0 6px" }}>
              <p style={panelText}>A right triangle shows two sides — find the one marked <strong>?</strong> using <em>a² + b² = c²</em>. Every answer is a whole number. {TOTAL} rounds.</p>
              <button onClick={start} style={primaryBtn}>Start →</button>
            </div>
          )}

          {phase === "playing" && r && (
            <>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "14px 0" }}>
                <span style={{ fontSize: 13, color: "#8fd6ab", fontWeight: 700 }}>Round {round}/{TOTAL}</span>
                <span style={{ fontSize: 13, color: "#8fd6ab", fontWeight: 700 }}>Score {score}</span>
              </div>

              <Triangle r={r} />

              <div style={{ textAlign: "center", color: "#bfe9cf", fontSize: 14, margin: "12px 0 8px" }}>
                Find <strong>{asking}</strong> (the side marked <span style={{ color: "#fbbf24", fontWeight: 800 }}>?</span>).
              </div>

              <div style={{ display: "flex", gap: 10, justifyContent: "center", alignItems: "center" }}>
                <input
                  value={val} onChange={(e) => setVal(e.target.value.replace(/[^\d.]/g, ""))}
                  onKeyDown={(e) => { if (e.key === "Enter") submit(); }}
                  inputMode="decimal" placeholder="?" disabled={judged !== null} autoFocus
                  style={{ width: 110, textAlign: "center", fontSize: 22, fontWeight: 800, fontFamily: "JetBrains Mono, monospace", padding: "10px 12px", borderRadius: 10, border: `2px solid ${judged === null ? "rgba(159,231,189,.35)" : judged ? "#34d27f" : "#ef4444"}`, background: "rgba(255,255,255,.08)", color: "#f0fff6", outline: "none" }}
                />
                <button onClick={submit} disabled={judged !== null || val.trim() === ""} style={{ ...primaryBtn, padding: "12px 22px", opacity: judged !== null || val.trim() === "" ? 0.55 : 1 }}>Check</button>
              </div>

              <div style={{ textAlign: "center", minHeight: 24, marginTop: 10, fontWeight: 800 }}>
                {judged === true && <span style={{ color: "#34d27f" }}>✓ Correct!</span>}
                {judged === false && <span style={{ color: "#fca5a5" }}>✗ It was {r.answer}</span>}
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
          For a right triangle, the two legs and hypotenuse satisfy <em>a² + b² = c²</em>. To find a leg, rearrange: <em>a = √(c² − b²)</em>. Practice it in <Link href="/courses" style={{ color: "#0d5c30", fontWeight: 600 }}>MTH1W → Pythagorean Theorem</Link>.
        </p>
      </div>
    </main>
  );
}

const panelText: React.CSSProperties = { color: "#bfe9cf", fontSize: 16, lineHeight: 1.6, margin: "0 auto 20px", maxWidth: 450 };
const primaryBtn: React.CSSProperties = { background: "linear-gradient(135deg,#1f8a4c,#34d27f)", color: "#04130a", border: "none", borderRadius: 12, padding: "13px 30px", fontWeight: 800, fontSize: 16, cursor: "pointer" };
