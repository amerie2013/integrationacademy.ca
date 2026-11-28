"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { SiteHeader } from "../../../components/SiteHeader";

const TOTAL = 12;
const W = 380, H = 380, PAD = 10, MIN = -6, MAX = 6;
const sx = (x: number) => PAD + ((x - MIN) / (MAX - MIN)) * (W - 2 * PAD);
const sy = (y: number) => H - PAD - ((y - MIN) / (MAX - MIN)) * (H - 2 * PAD);
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];
const rint = (lo: number, hi: number) => Math.floor(Math.random() * (hi - lo + 1)) + lo;
const shuffle = <T,>(arr: T[]) => [...arr].sort(() => Math.random() - 0.5);

type Pt = [number, number];
const fmt = (n: number) => (n < 0 ? `−${-n}` : `${n}`);
const par = (n: number) => (n < 0 ? `(${fmt(n)})` : fmt(n));
const fp = ([x, y]: Pt) => `(${fmt(x)}, ${fmt(y)})`;
const same = (a: Pt, b: Pt) => a[0] === b[0] && a[1] === b[1];

// A round either asks the player to click a lattice point ("click") or pick one of several answers ("choice").
type Round = {
  kind: "click" | "choice";
  prompt: string;
  shown: { p: Pt; label: string }[];   // points drawn on the board for context
  answer: Pt;                          // for click rounds
  options?: string[];                  // for choice rounds
  correct?: string;
  explain: string;
};

const horiz = (x: number) => (x === 0 ? "stay on the y-axis" : `go ${Math.abs(x)} ${x > 0 ? "right" : "left"}`);
const vert = (y: number) => (y === 0 ? "stay on the x-axis" : `go ${Math.abs(y)} ${y > 0 ? "up" : "down"}`);
const moves = ([x, y]: Pt) => `x = ${fmt(x)}: ${horiz(x)}; y = ${fmt(y)}: ${vert(y)}.`;
const nonZero = (lo: number, hi: number) => { let v = 0; while (v === 0) v = rint(lo, hi); return v; };
const randPt = (lim = 5, avoidAxes = false): Pt => avoidAxes ? [nonZero(-lim, lim), nonZero(-lim, lim)] : [rint(-lim, lim), rint(-lim, lim)];

function quadrantOf([x, y]: Pt): string {
  if (x === 0 && y === 0) return "Origin";
  if (x === 0) return "On the y-axis";
  if (y === 0) return "On the x-axis";
  if (x > 0 && y > 0) return "Quadrant I";
  if (x < 0 && y > 0) return "Quadrant II";
  if (x < 0) return "Quadrant III";
  return "Quadrant IV";
}

function plotRound(): Round {
  const p = Math.random() < 0.2 ? (pick([[0, nonZero(-5, 5)], [nonZero(-5, 5), 0]]) as Pt) : randPt(5, true);
  return { kind: "click", prompt: `Plot the point ${fp(p)}.`, shown: [], answer: p,
    explain: `Start at the origin. ${moves(p)}` };
}

function readRound(): Round {
  let p = randPt(5, true);
  while (Math.abs(p[0]) === Math.abs(p[1])) p = randPt(5, true);   // keep the swapped distractor distinct
  const correct = fp(p);
  const distract = [fp([p[1], p[0]]), fp([-p[0], p[1]]), fp([p[0], -p[1]]), fp([-p[1], -p[0]])].filter((s) => s !== correct);
  const options = shuffle([correct, ...shuffle([...new Set(distract)]).slice(0, 3)]);
  return { kind: "choice", prompt: "What are the coordinates of point P?", shown: [{ p, label: "P" }], answer: p, options, correct,
    explain: `x comes first. From the origin: ${moves(p)} So P = ${correct}.` };
}

function quadrantRound(): Round {
  const p: Pt = Math.random() < 0.25 ? (pick([[0, nonZero(-6, 6)], [nonZero(-6, 6), 0]]) as Pt) : [nonZero(-9, 9), nonZero(-9, 9)];
  const correct = quadrantOf(p);
  return { kind: "choice", prompt: `Where does ${fp(p)} lie?`, shown: [],
    answer: p, options: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV", "On an axis"], correct: correct.startsWith("On") ? "On an axis" : correct,
    explain: `Signs (${p[0] > 0 ? "+" : p[0] < 0 ? "−" : "0"}, ${p[1] > 0 ? "+" : p[1] < 0 ? "−" : "0"}) → ${correct}. I is (+,+), II is (−,+), III is (−,−), IV is (+,−).` };
}

function reflectRound(): Round {
  const a = randPt(5, true);
  const t = pick(["x-axis", "y-axis", "origin"] as const);
  const ans: Pt = t === "x-axis" ? [a[0], -a[1]] : t === "y-axis" ? [-a[0], a[1]] : [-a[0], -a[1]];
  const rule = t === "x-axis" ? "(x, y) → (x, −y)" : t === "y-axis" ? "(x, y) → (−x, y)" : "(x, y) → (−x, −y)";
  return { kind: "click", prompt: t === "origin" ? `Plot A′, the image of A after a 180° rotation about the origin.` : `Reflect A in the ${t}. Plot A′.`,
    shown: [{ p: a, label: "A" }], answer: ans, explain: `${rule}, so ${fp(a)} → ${fp(ans)}.` };
}

function translateRound(): Round {
  let a: Pt, dx: number, dy: number, ans: Pt;
  do { a = randPt(4); dx = nonZero(-5, 5); dy = nonZero(-5, 5); ans = [a[0] + dx, a[1] + dy]; }
  while (Math.abs(ans[0]) > 6 || Math.abs(ans[1]) > 6);
  const rule = `(x, y) → (x ${dx > 0 ? "+" : "−"} ${Math.abs(dx)}, y ${dy > 0 ? "+" : "−"} ${Math.abs(dy)})`;
  return { kind: "click", prompt: `Translate A by ${rule}. Plot A′.`, shown: [{ p: a, label: "A" }], answer: ans,
    explain: `Move ${Math.abs(dx)} ${dx > 0 ? "right" : "left"} and ${Math.abs(dy)} ${dy > 0 ? "up" : "down"}: ${fp(a)} → ${fp(ans)}.` };
}

function midpointRound(): Round {
  let a: Pt, b: Pt;
  do { a = randPt(6); b = randPt(6); } while ((a[0] + b[0]) % 2 || (a[1] + b[1]) % 2 || same(a, b));
  const m: Pt = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  return { kind: "click", prompt: "Plot the midpoint M of segment AB.", shown: [{ p: a, label: "A" }, { p: b, label: "B" }], answer: m,
    explain: `M = ((${fmt(a[0])} + ${par(b[0])})/2, (${fmt(a[1])} + ${par(b[1])})/2) = ${fp(m)}.` };
}

function vertexRound(): Round {
  // three corners of an axis-aligned rectangle; find the fourth
  let x1: number, x2: number, y1: number, y2: number;
  do { x1 = rint(-5, 5); x2 = rint(-5, 5); y1 = rint(-5, 5); y2 = rint(-5, 5); } while (Math.abs(x1 - x2) < 2 || Math.abs(y1 - y2) < 2);
  const corners: Pt[] = shuffle([[x1, y1], [x2, y1], [x2, y2], [x1, y2]] as Pt[]);
  const [miss, ...given] = corners;
  return { kind: "click", prompt: "A, B and C are three corners of a rectangle with sides parallel to the axes. Plot the fourth corner D.",
    shown: given.map((p, i) => ({ p, label: "ABC"[i] })), answer: miss,
    explain: `D shares its x-coordinate with one corner and its y-coordinate with another: D = ${fp(miss)}.` };
}

// Difficulty ladder: early rounds plot/read, then quadrants, then transformations and geometry.
const LADDER: (() => Round)[][] = [
  [plotRound], [readRound], [plotRound], [quadrantRound], [readRound, plotRound], [quadrantRound],
  [reflectRound], [translateRound], [reflectRound, translateRound], [midpointRound], [vertexRound], [midpointRound, vertexRound, reflectRound],
];
const buildRound = (i: number) => pick(LADDER[Math.min(i, LADDER.length - 1)])();

function Board({ r, guess, revealed, onPick }: { r: Round; guess: Pt | null; revealed: boolean; onPick: (p: Pt) => void }) {
  const [hover, setHover] = useState<Pt | null>(null);
  const toPt = (e: React.MouseEvent<SVGSVGElement>): Pt => {
    const rect = e.currentTarget.getBoundingClientRect();
    const vx = ((e.clientX - rect.left) / rect.width) * W, vy = ((e.clientY - rect.top) / rect.height) * H;
    const x = MIN + ((vx - PAD) / (W - 2 * PAD)) * (MAX - MIN), y = MIN + ((H - PAD - vy) / (H - 2 * PAD)) * (MAX - MIN);
    return [clamp(Math.round(x), MIN, MAX), clamp(Math.round(y), MIN, MAX)];
  };
  const clickable = r.kind === "click" && !revealed;
  const grid = [];
  for (let g = MIN; g <= MAX; g++) {
    grid.push(<line key={"v" + g} x1={sx(g)} y1={sy(MIN)} x2={sx(g)} y2={sy(MAX)} stroke={g === 0 ? "rgba(159,231,189,.6)" : "rgba(159,231,189,.13)"} strokeWidth={g === 0 ? 1.6 : 1} />);
    grid.push(<line key={"h" + g} x1={sx(MIN)} y1={sy(g)} x2={sx(MAX)} y2={sy(g)} stroke={g === 0 ? "rgba(159,231,189,.6)" : "rgba(159,231,189,.13)"} strokeWidth={g === 0 ? 1.6 : 1} />);
    if (g !== 0 && g % 2 === 0) {
      grid.push(<text key={"tx" + g} x={sx(g)} y={sy(0) + 13} fill="#6fbf90" fontSize={10} textAnchor="middle">{fmt(g)}</text>);
      grid.push(<text key={"ty" + g} x={sx(0) - 5} y={sy(g) + 3.5} fill="#6fbf90" fontSize={10} textAnchor="end">{fmt(g)}</text>);
    }
  }
  const dot = (p: Pt, fill: string, key: string, rad = 6.5) => <circle key={key} cx={sx(p[0])} cy={sy(p[1])} r={rad} fill={fill} stroke="#04130a" strokeWidth={2} />;
  const ok = guess && same(guess, r.answer);
  return (
    <svg viewBox={`0 0 ${W} ${H}`}
      onClick={(e) => clickable && onPick(toPt(e))}
      onMouseMove={(e) => clickable && setHover(toPt(e))}
      onMouseLeave={() => setHover(null)}
      style={{ width: "100%", height: "auto", display: "block", background: "#04130a", borderRadius: 12, cursor: clickable ? "crosshair" : "default", touchAction: "manipulation" }}>
      {grid}
      <text x={sx(MAX) - 4} y={sy(0) - 6} fill="#9fe7bd" fontSize={12} fontStyle="italic" textAnchor="end">x</text>
      <text x={sx(0) + 7} y={sy(MAX) + 12} fill="#9fe7bd" fontSize={12} fontStyle="italic">y</text>
      {r.shown.length === 2 && <line x1={sx(r.shown[0].p[0])} y1={sy(r.shown[0].p[1])} x2={sx(r.shown[1].p[0])} y2={sy(r.shown[1].p[1])} stroke="#fbbf24" strokeWidth={2} strokeDasharray="5 4" />}
      {r.shown.map(({ p, label }, i) => (
        <g key={"s" + i}>
          {dot(p, "#fbbf24", "sd" + i)}
          <text x={sx(p[0]) + 9} y={sy(p[1]) - 8} fill="#fde68a" fontSize={14} fontWeight={700}>{label}</text>
        </g>
      ))}
      {clickable && hover && (
        <g>
          <circle cx={sx(hover[0])} cy={sy(hover[1])} r={6} fill="none" stroke="#9fe7bd" strokeWidth={1.5} />
          <text x={sx(hover[0]) + 9} y={sy(hover[1]) + 16} fill="#9fe7bd" fontSize={11}>{fp(hover)}</text>
        </g>
      )}
      {revealed && r.kind === "click" && guess && !ok && (
        <g stroke="#ef4444" strokeWidth={3} strokeLinecap="round">
          <line x1={sx(guess[0]) - 6} y1={sy(guess[1]) - 6} x2={sx(guess[0]) + 6} y2={sy(guess[1]) + 6} />
          <line x1={sx(guess[0]) - 6} y1={sy(guess[1]) + 6} x2={sx(guess[0]) + 6} y2={sy(guess[1]) - 6} />
        </g>
      )}
      {revealed && r.kind === "click" && (
        <g>
          <line x1={sx(0)} y1={sy(0)} x2={sx(r.answer[0])} y2={sy(0)} stroke="#34d27f" strokeWidth={2} strokeDasharray="4 3" />
          <line x1={sx(r.answer[0])} y1={sy(0)} x2={sx(r.answer[0])} y2={sy(r.answer[1])} stroke="#34d27f" strokeWidth={2} strokeDasharray="4 3" />
          {dot(r.answer, "#34d27f", "ans", 7.5)}
          <text x={sx(r.answer[0]) + 10} y={sy(r.answer[1]) + 16} fill="#86efac" fontSize={13} fontWeight={700}>{fp(r.answer)}</text>
        </g>
      )}
    </svg>
  );
}

export default function CoordinateQuest() {
  const [phase, setPhase] = useState<"idle" | "playing" | "over">("idle");
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState(0);
  const [r, setR] = useState<Round | null>(null);
  const [guess, setGuess] = useState<Pt | null>(null);
  const [chosen, setChosen] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [win, setWin] = useState(false);

  useEffect(() => { setBest(Number(localStorage.getItem("ia_coordquest_best") || 0)); }, []);

  const start = useCallback(() => {
    setRound(1); setScore(0); setStreak(0); setGuess(null); setChosen(null); setRevealed(false); setR(buildRound(0)); setPhase("playing");
  }, []);

  useEffect(() => {
    if (phase !== "over") return;
    setBest((b) => { const nb = Math.max(b, score); localStorage.setItem("ia_coordquest_best", String(nb)); return nb; });
  }, [phase, score]);

  function finish(ok: boolean) {
    setRevealed(true); setWin(ok);
    if (ok) { setScore((s) => s + 1); setStreak((s) => s + 1); } else setStreak(0);
  }

  function next() {
    if (round >= TOTAL) { setPhase("over"); return; }
    setRound(round + 1); setR(buildRound(round)); setGuess(null); setChosen(null); setRevealed(false);
  }

  function onPick(p: Pt) { if (!r || revealed) return; setGuess(p); finish(same(p, r.answer)); }
  function onChoose(o: string) { if (!r || revealed) return; setChosen(o); finish(o === r.correct); }

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 620, margin: "0 auto", padding: "36px 24px 60px" }}>
        <Link href="/games" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← All games</Link>

        <div style={{ marginTop: 16, borderRadius: 22, padding: 24, color: "#e7f6ec", background: "radial-gradient(700px 360px at 80% -30%,#0d3a23,#07150d)", border: "1px solid #14653b", boxShadow: "0 20px 50px rgba(13,92,48,.25)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 26, fontWeight: 700, margin: 0, color: "#f0fff6" }}>⌖ Coordinate Quest</h1>
            <span style={{ fontSize: 13, color: "#8fd6ab", fontWeight: 700 }}>Best {best}/{TOTAL}</span>
          </div>

          {phase === "idle" && (
            <div style={{ textAlign: "center", padding: "26px 0 6px" }}>
              <p style={panelText}>{TOTAL} rounds on the coordinate plane that get harder as you go: <strong>plot points</strong>, <strong>read coordinates</strong>, name the <strong>quadrant</strong>, then <strong>reflect</strong>, <strong>translate</strong>, find <strong>midpoints</strong> and missing rectangle corners.</p>
              <button onClick={start} style={primaryBtn}>Start →</button>
            </div>
          )}

          {phase === "playing" && r && (
            <>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "14px 0 8px" }}>
                <span style={chip}>Round {round}/{TOTAL}</span>
                <span style={chip}>{streak >= 2 ? `Streak ${streak} · ` : ""}Score {score}</span>
              </div>
              <p style={{ fontSize: 17, fontWeight: 700, color: "#f0fff6", margin: "0 0 12px", minHeight: 48 }}>{r.prompt}</p>

              <Board r={r} guess={guess} revealed={revealed} onPick={onPick} />

              {r.kind === "choice" && r.options && (
                <div style={{ display: "grid", gridTemplateColumns: `repeat(${r.options.length > 4 ? 3 : 2}, 1fr)`, gap: 8, marginTop: 12 }}>
                  {r.options.map((o) => {
                    const isRight = revealed && o === r.correct, isWrong = revealed && o === chosen && o !== r.correct;
                    return (
                      <button key={o} onClick={() => onChoose(o)} disabled={revealed}
                        style={{ ...optBtn, cursor: revealed ? "default" : "pointer",
                          background: isRight ? "rgba(52,210,127,.25)" : isWrong ? "rgba(239,68,68,.22)" : optBtn.background,
                          borderColor: isRight ? "#34d27f" : isWrong ? "#ef4444" : "rgba(159,231,189,.3)" }}>{o}</button>
                    );
                  })}
                </div>
              )}

              <div style={{ textAlign: "center", minHeight: 24, marginTop: 12 }}>
                {!revealed && r.kind === "click" && <span style={{ color: "#8fd6ab", fontWeight: 600, fontSize: 13 }}>Click a grid point. Hover to see its coordinates.</span>}
                {revealed && (
                  <>
                    <div style={{ fontWeight: 800, color: win ? "#34d27f" : "#fca5a5", marginBottom: 4 }}>{win ? "✓ Correct" : "✗ Not quite"}</div>
                    <div style={{ color: "#bfe9cf", fontSize: 14, lineHeight: 1.55 }}>{r.explain}</div>
                    <button onClick={next} style={{ ...primaryBtn, padding: "10px 24px", fontSize: 15, marginTop: 12 }}>{round >= TOTAL ? "See score" : "Next →"}</button>
                  </>
                )}
              </div>
            </>
          )}

          {phase === "over" && (
            <div style={{ textAlign: "center", padding: "26px 0 6px" }}>
              <div style={{ fontSize: 48, fontWeight: 800, color: "#34d27f", fontFamily: "Fraunces, serif" }}>{score}/{TOTAL}</div>
              <p style={panelText}>{score === TOTAL ? "Perfect run." : score >= best && score > 0 ? "New best." : "Play again to beat it."}</p>
              <button onClick={start} style={primaryBtn}>Play again</button>
            </div>
          )}
        </div>

        <p style={{ color: "#94a3b8", fontSize: 13.5, lineHeight: 1.6, marginTop: 18, textAlign: "center" }}>
          An ordered pair (x, y) always gives the horizontal move first, then the vertical. Reflections and translations are just rules applied to those two numbers. Keep going in <Link href="/courses" style={{ color: "#0d5c30", fontWeight: 600 }}>MTH1W → Analytic geometry</Link>.
        </p>
      </div>
    </main>
  );
}

const panelText: React.CSSProperties = { color: "#bfe9cf", fontSize: 16, lineHeight: 1.6, margin: "0 auto 20px", maxWidth: 470 };
const chip: React.CSSProperties = { fontSize: 13, color: "#8fd6ab", fontWeight: 700 };
const primaryBtn: React.CSSProperties = { background: "linear-gradient(135deg,#1f8a4c,#34d27f)", color: "#04130a", border: "none", borderRadius: 12, padding: "13px 30px", fontWeight: 800, fontSize: 16, cursor: "pointer" };
const optBtn: React.CSSProperties = { background: "rgba(255,255,255,.06)", color: "#f0fff6", border: "1px solid rgba(159,231,189,.3)", borderRadius: 10, padding: "11px 10px", fontWeight: 700, fontSize: 15 };
