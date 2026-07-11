"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { SiteHeader } from "../../../components/SiteHeader";

const TOTAL = 10;
type Pos = "TL" | "TR" | "BL" | "BR";
const POSS: Pos[] = ["TL", "TR", "BL", "BR"];
// Transversal goes up-to-the-right, so the acute angle sits in the TR & BL quadrants
// at BOTH crossings (parallel lines ⇒ identical angle pattern).
const isAcute = (p: Pos) => p === "TR" || p === "BL";

type Slot = { c: 0 | 1; pos: Pos };
type Round = { theta: number; known: Slot; unknown: Slot; knownVal: number; answer: number };

const rint = (lo: number, hi: number) => Math.floor(Math.random() * (hi - lo + 1)) + lo;
const pick = <T,>(a: T[]) => a[Math.floor(Math.random() * a.length)];

function buildRound(): Round {
  const theta = pick([40, 50, 55, 60, 65, 70, 75, 80]);   // acute base angle
  const val = (s: Slot) => (isAcute(s.pos) ? theta : 180 - theta);
  let known: Slot, unknown: Slot;
  do {
    known = { c: pick([0, 1]) as 0 | 1, pos: pick(POSS) };
    unknown = { c: pick([0, 1]) as 0 | 1, pos: pick(POSS) };
  } while (known.c === unknown.c && known.pos === unknown.pos);
  return { theta, known, unknown, knownVal: val(known), answer: val(unknown) };
}

// crossings: 0 = top line, 1 = bottom line
const CROSS = [{ x: 220, y: 92 }, { x: 140, y: 208 }];
const labelXY = (c: 0 | 1, pos: Pos) => {
  const { x, y } = CROSS[c];
  const dx = pos === "TL" || pos === "BL" ? -26 : 26;
  const dy = pos === "TL" || pos === "TR" ? -12 : 24;
  return { x: x + dx, y: y + dy };
};

function Figure({ r }: { r: Round }) {
  const W = 360, H = 300;
  const k = labelXY(r.known.c, r.known.pos);
  const u = labelXY(r.unknown.c, r.unknown.pos);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", display: "block", background: "#04130a", borderRadius: 12 }}>
      {/* parallel lines */}
      <line x1={20} y1={92} x2={340} y2={92} stroke="#34d27f" strokeWidth={3} />
      <line x1={20} y1={208} x2={340} y2={208} stroke="#34d27f" strokeWidth={3} />
      {/* parallel arrows */}
      <path d="M 300 88 l 10 4 l -10 4" fill="none" stroke="#9fe7bd" strokeWidth={1.6} />
      <path d="M 300 204 l 10 4 l -10 4" fill="none" stroke="#9fe7bd" strokeWidth={1.6} />
      {/* transversal (up-right) */}
      <line x1={113} y1={250} x2={247} y2={50} stroke="#bfe9cf" strokeWidth={3} />
      {/* vertex dots */}
      <circle cx={CROSS[0].x} cy={CROSS[0].y} r={3} fill="#9fe7bd" />
      <circle cx={CROSS[1].x} cy={CROSS[1].y} r={3} fill="#9fe7bd" />
      {/* known + unknown angle labels */}
      <text x={k.x} y={k.y} fill="#7ef0ad" fontSize={18} fontWeight={800} textAnchor="middle" fontFamily="JetBrains Mono, monospace">{r.knownVal}°</text>
      <text x={u.x} y={u.y} fill="#fbbf24" fontSize={20} fontWeight={800} textAnchor="middle" fontFamily="JetBrains Mono, monospace">?</text>
    </svg>
  );
}

export default function AngleHunt() {
  const [phase, setPhase] = useState<"idle" | "playing" | "over">("idle");
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [r, setR] = useState<Round | null>(null);
  const [val, setVal] = useState("");
  const [judged, setJudged] = useState<null | boolean>(null);

  useEffect(() => { setBest(Number(localStorage.getItem("ia_anglehunt_best") || 0)); }, []);

  const start = useCallback(() => { setRound(1); setScore(0); setVal(""); setJudged(null); setR(buildRound()); setPhase("playing"); }, []);

  useEffect(() => {
    if (phase !== "over") return;
    setBest((b) => { const nb = Math.max(b, score); localStorage.setItem("ia_anglehunt_best", String(nb)); return nb; });
  }, [phase, score]);

  function submit() {
    if (judged !== null || !r || val.trim() === "") return;
    const ok = Number(val) === r.answer;
    setJudged(ok);
    if (ok) setScore((s) => s + 1);
    setTimeout(() => {
      if (round >= TOTAL) { setPhase("over"); return; }
      const nr = round + 1; setRound(nr); setR(buildRound()); setVal(""); setJudged(null);
    }, 1300);
  }

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "36px 24px 60px" }}>
        <Link href="/games" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← All games</Link>

        <div style={{ marginTop: 16, borderRadius: 22, padding: 24, color: "#e7f6ec", background: "radial-gradient(700px 360px at 80% -30%,#0d3a23,#07150d)", border: "1px solid #14653b", boxShadow: "0 20px 50px rgba(13,92,48,.25)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 26, fontWeight: 700, margin: 0, color: "#f0fff6" }}>∠ Angle Hunt</h1>
            <span style={{ fontSize: 13, color: "#8fd6ab", fontWeight: 700 }}>Best {best}/{TOTAL}</span>
          </div>

          {phase === "idle" && (
            <div style={{ textAlign: "center", padding: "26px 0 6px" }}>
              <p style={panelText}>Two parallel lines are cut by a transversal. Given one angle, find the one marked <strong>?</strong> using corresponding, alternate, and co-interior angle rules. {TOTAL} rounds.</p>
              <button onClick={start} style={primaryBtn}>Start →</button>
            </div>
          )}

          {phase === "playing" && r && (
            <>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "14px 0" }}>
                <span style={{ fontSize: 13, color: "#8fd6ab", fontWeight: 700 }}>Round {round}/{TOTAL}</span>
                <span style={{ fontSize: 13, color: "#8fd6ab", fontWeight: 700 }}>Score {score}</span>
              </div>

              <Figure r={r} />

              <div style={{ textAlign: "center", color: "#bfe9cf", fontSize: 14, margin: "12px 0 8px" }}>
                The lines are parallel. Find the angle marked <span style={{ color: "#fbbf24", fontWeight: 800 }}>?</span> (in degrees).
              </div>

              <div style={{ display: "flex", gap: 10, justifyContent: "center", alignItems: "center" }}>
                <input value={val} onChange={(e) => setVal(e.target.value.replace(/[^\d]/g, ""))}
                  onKeyDown={(e) => { if (e.key === "Enter") submit(); }}
                  inputMode="numeric" placeholder="?°" disabled={judged !== null} autoFocus
                  style={{ width: 110, textAlign: "center", fontSize: 22, fontWeight: 800, fontFamily: "JetBrains Mono, monospace", padding: "10px 12px", borderRadius: 10, border: `2px solid ${judged === null ? "rgba(159,231,189,.35)" : judged ? "#34d27f" : "#ef4444"}`, background: "rgba(255,255,255,.08)", color: "#f0fff6", outline: "none" }} />
                <button onClick={submit} disabled={judged !== null || val.trim() === ""} style={{ ...primaryBtn, padding: "12px 22px", opacity: judged !== null || val.trim() === "" ? 0.55 : 1 }}>Check</button>
              </div>

              <div style={{ textAlign: "center", minHeight: 24, marginTop: 10, fontWeight: 800 }}>
                {judged === true && <span style={{ color: "#34d27f" }}>✓ Correct!</span>}
                {judged === false && <span style={{ color: "#fca5a5" }}>✗ It was {r.answer}°</span>}
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
          With parallel lines: corresponding, alternate, and vertically-opposite angles are <strong>equal</strong>; co-interior (same-side) angles <strong>add to 180°</strong>. Practice in <Link href="/courses" style={{ color: "#0d5c30", fontWeight: 600 }}>MTH1W → Geometry</Link>.
        </p>
      </div>
    </main>
  );
}

const panelText: React.CSSProperties = { color: "#bfe9cf", fontSize: 16, lineHeight: 1.6, margin: "0 auto 20px", maxWidth: 450 };
const primaryBtn: React.CSSProperties = { background: "linear-gradient(135deg,#1f8a4c,#34d27f)", color: "#04130a", border: "none", borderRadius: 12, padding: "13px 30px", fontWeight: 800, fontSize: 16, cursor: "pointer" };
