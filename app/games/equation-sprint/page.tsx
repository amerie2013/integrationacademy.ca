"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { SiteHeader } from "../../../components/SiteHeader";
import {
  ROUND_SECONDS, TIERS, UNLOCK_SOLVES, applyMove, applyToSide, evalSide, fmtEq, fmtQ, fmtSide, isZero, makeProblem,
  nextMove, num, parseMove, rng, solvedValue,
  type Equation, type Move, type Problem, type Side, type Tier,
} from "../../../lib/equationSprint";

const STORE_KEY = "ia_eqsprint_progress"; // { [tier]: { score, solved } }
type Best = Record<number, { score: number; solved: number }>;
type Step = { eq: Equation; label: string };
type Pending = { move: Move; half: Equation }; // Bronze: applied to the left side only

/* ---------- impure helpers (called only from handlers and effects) ---------- */
const randomSeed = () => Math.floor(Math.random() * 1e9);
const wallClock = () => Date.now();
let actx: AudioContext | null = null;
function tone(freq: number, dur = 0.12, type: OscillatorType = "sine", vol = 0.05, to?: number) {
  try {
    actx = actx || new AudioContext();
    const o = actx.createOscillator(), g = actx.createGain(), t = actx.currentTime;
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (to) o.frequency.exponentialRampToValueAtTime(to, t + dur);
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(actx.destination);
    o.start(t);
    o.stop(t + dur + 0.02);
  } catch {}
}
function loadBest(): Best {
  try { return JSON.parse(localStorage.getItem(STORE_KEY) || "{}"); } catch { return {}; }
}
function saveBest(b: Best) {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(b)); } catch {}
}
/** Hint strings from the engine use ASCII; show them the way students write them. */
const pretty = (m: string) => (m === "expand" ? "expand" : m.replace(/^\*/, "× ").replace(/^\//, "÷ ").replace(/^\+/, "+ ").replace(/^-/, "− ").replace(/-/g, "−"));

export default function EquationSprint() {
  const [tier, setTier] = useState<Tier>(0);
  const [phase, setPhase] = useState<"idle" | "playing" | "over">("idle");
  const [endAt, setEndAt] = useState(0);
  const [timeLeft, setTimeLeft] = useState(ROUND_SECONDS);
  const [problem, setProblem] = useState<Problem | null>(null);
  const [steps, setSteps] = useState<Step[]>([]);
  const [pending, setPending] = useState<Pending | null>(null);
  const [moveText, setMoveText] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [hint, setHint] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [solved, setSolved] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const [solvedFlash, setSolvedFlash] = useState<{ x: string; check: string; pts: number; par: boolean; moves: number } | null>(null);
  const [wobble, setWobble] = useState(0);
  const [best, setBest] = useState<Best>({});
  const [allOpen, setAllOpen] = useState(false);
  const [sound, setSound] = useState(false);
  const [unlockedNow, setUnlockedNow] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const T = TIERS[tier];
  const current: Equation | null = pending ? pending.half : steps.length ? steps[steps.length - 1].eq : null;

  useEffect(() => {
    const id = setTimeout(() => {
      setBest(loadBest());
      setAllOpen(new URLSearchParams(window.location.search).get("all") === "1");
    }, 0);
    return () => clearTimeout(id);
  }, []);

  const play = (f: number, d?: number, t?: OscillatorType, v?: number, to?: number) => { if (sound) tone(f, d, t, v, to); };

  const tierOpen = (t: number) => allOpen || t === 0 || (best[t - 1]?.solved ?? 0) >= UNLOCK_SOLVES;

  function newProblem(t: Tier = tier) {
    const p = makeProblem(t, rng(randomSeed()));
    setProblem(p);
    setSteps([{ eq: p.eq, label: "" }]);
    setPending(null);
    setMoveText("");
    setError(null);
    setHint(null);
    setStartedAt(wallClock());
    setTimeout(() => inputRef.current?.focus(), 0);
  }

  function start(t: Tier = tier) {
    setTier(t);
    setScore(0);
    setStreak(0);
    setSolved(0);
    setSolvedFlash(null);
    setUnlockedNow(false);
    setEndAt(wallClock() + ROUND_SECONDS * 1000);
    setTimeLeft(ROUND_SECONDS);
    setPhase("playing");
    newProblem(t);
    play(660, 0.1); setTimeout(() => play(990, 0.15), 120);
  }

  // round clock
  useEffect(() => {
    if (phase !== "playing") return;
    const id = setInterval(() => {
      const left = Math.max(0, Math.ceil((endAt - wallClock()) / 1000));
      setTimeLeft(left);
      if (left <= 0) finishRound();
    }, 200);
    return () => clearInterval(id);
  });

  function finishRound() {
    setPhase("over");
    play(440, 0.15); setTimeout(() => play(330, 0.3), 160);
    setBest((prev) => {
      const old = prev[tier] ?? { score: 0, solved: 0 };
      const nb = { ...prev, [tier]: { score: Math.max(old.score, score), solved: Math.max(old.solved, solved) } };
      saveBest(nb);
      if (tier < 2 && old.solved < UNLOCK_SOLVES && solved >= UNLOCK_SOLVES) setUnlockedNow(true);
      return nb;
    });
  }

  /* ---------------- moves ---------------- */
  function submitMove() {
    if (phase !== "playing" || !problem || solvedFlash) return;
    if (pending) { finishPending(); return; }
    const eq = steps[steps.length - 1].eq;
    const pm = parseMove(moveText, eq.mode);
    if (!pm.ok) { setError(pm.error || "Type a move first, like −3 or ÷5."); play(160, 0.15, "square", 0.03); return; }
    const r = applyMove(eq, pm.move);
    if (!r.ok) { setError(r.error); play(160, 0.15, "square", 0.03); return; }
    setError(null);
    setHint(null);
    if (T.twoTap && pm.move.op !== "expand") {
      // Bronze: do it to the left side first — the scale tips until the right side gets the same move
      setPending({ move: pm.move, half: { L: applyToSide(eq.L, pm.move), R: eq.R, mode: eq.mode } });
      play(300, 0.12, "triangle", 0.04);
      return;
    }
    commit(r.eq, pm.move.label);
  }

  function finishPending() {
    if (!pending) return;
    const eq = steps[steps.length - 1].eq;
    const r = applyMove(eq, pending.move);
    if (r.ok) commit(r.eq, pending.move.label);
    setPending(null);
  }

  function commit(eq: Equation, label: string) {
    const ns = [...steps, { eq, label }];
    setSteps(ns);
    setMoveText("");
    setWobble((w) => w + 1);
    play(520, 0.08, "sine", 0.04, 700);
    const v = solvedValue(eq);
    if (v !== null && problem) onSolved(problem, ns.length - 1);
  }

  function onSolved(p: Problem, moves: number) {
    const secs = (wallClock() - startedAt) / 1000;
    const parHit = moves <= p.par;
    const base = 100 + (parHit ? 50 : 0) + Math.max(0, Math.round(40 - secs * 3));
    const pts = Math.round(base * (1 + Math.min(streak, 5) * 0.1) * T.mult);
    const left = evalSide(p.eq.L, p.x), right = evalSide(p.eq.R, p.x);
    setScore((s) => s + pts);
    setStreak((s) => s + 1);
    setSolved((n) => n + 1);
    setSolvedFlash({
      x: fmtQ(p.x, p.eq.mode),
      check: `left side = ${fmtQ(left, p.eq.mode)}, right side = ${fmtQ(right, p.eq.mode)}`,
      pts, par: parHit, moves,
    });
    play(660, 0.1); setTimeout(() => play(880, 0.1), 100); setTimeout(() => play(1320, 0.2), 200);
    setTimeout(() => { setSolvedFlash(null); newProblem(); }, 1700);
  }

  function undo() {
    if (pending) { setPending(null); return; }
    if (steps.length > 1) setSteps((s) => s.slice(0, -1));
    setError(null);
  }

  function skip() {
    setStreak(0);
    play(200, 0.15, "square", 0.03);
    newProblem();
  }

  function showHint() {
    if (!current || T.hintCost === null) return;
    const m = nextMove(steps[steps.length - 1].eq);
    if (!m) return;
    if (T.hintCost) setScore((s) => s - (T.hintCost ?? 0));
    setHint(pretty(m));
  }

  function key(k: string) {
    setError(null);
    if (k === "expand") { setMoveText("expand"); inputRef.current?.focus(); return; }
    setMoveText((t) => t + k);
    inputRef.current?.focus();
  }

  const preview = useMemo(() => {
    if (!moveText.trim() || !current || pending) return null;
    const pm = parseMove(moveText, current.mode);
    return pm.ok ? pm.move.label : null;
  }, [moveText, current, pending]);

  /* ---------------- render ---------------- */
  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 16px 60px" }}>
        <Link href="/games" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← All games</Link>

        <div style={shell}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 30, fontWeight: 700, margin: 0, color: "#f0fff6" }}>Equation Sprint</h1>
            <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
              <Hud label="Time" value={`${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(2, "0")}`} warn={phase === "playing" && timeLeft <= 10} />
              <Hud label="Score" value={String(score)} />
              <Hud label="Streak" value={`×${streak}`} />
              <Hud label="Solved" value={String(solved)} />
              <button onClick={() => setSound((s) => !s)} style={{ ...ghostBtn, padding: "8px 12px" }} aria-pressed={sound}>Sound {sound ? "on" : "off"}</button>
            </div>
          </div>

          {/* tiers */}
          <div role="group" aria-label="Difficulty" style={{ display: "flex", gap: 8, margin: "14px 0 6px", flexWrap: "wrap" }}>
            {TIERS.map((tt, k) => {
              const open = tierOpen(k), on = k === tier;
              return (
                <button key={tt.name} disabled={!open || phase === "playing"} onClick={() => { setTier(k as Tier); setPhase("idle"); }}
                  title={open ? tt.desc : `Locked: solve ${UNLOCK_SOLVES} in one ${TIERS[k - 1].name} round`}
                  style={{ border: `1.5px solid ${on ? tt.color : open ? "rgba(255,255,255,.2)" : "rgba(255,255,255,.08)"}`, background: on ? `${tt.color}26` : "transparent", color: open ? tt.color : "rgba(255,255,255,.3)", borderRadius: 999, padding: "6px 14px", fontWeight: 800, fontSize: 13.5, cursor: open && phase !== "playing" ? "pointer" : "not-allowed" }}>
                  {tt.name}{open ? (best[k]?.score ? ` · best ${best[k].score}` : "") : " · locked"}
                </button>
              );
            })}
          </div>
          <div style={{ fontSize: 13, color: "#8fd6ab", marginBottom: 14 }}>{T.desc}{T.mult > 1 ? ` · points ×${T.mult}` : ""}</div>

          {phase === "playing" && (
            <div style={{ height: 6, background: "rgba(255,255,255,.1)", borderRadius: 99, overflow: "hidden", marginBottom: 16 }}>
              <div style={{ height: "100%", width: `${(timeLeft / ROUND_SECONDS) * 100}%`, background: timeLeft <= 10 ? "#ef4444" : "linear-gradient(90deg,#1f8a4c,#34d27f)", transition: "width .25s linear" }} />
            </div>
          )}

          {phase === "idle" && (
            <div style={{ textAlign: "center", padding: "26px 8px 18px" }}>
              <Scale eq={{ L: { br: null, x: { n: 1, d: 1 }, c: { n: 3, d: 1 } }, R: { br: null, x: { n: 0, d: 1 }, c: { n: 8, d: 1 } }, mode: "frac" }} x={{ n: 5, d: 1 }} wobble={0} />
              <ol className="es-steps">
                <li><b>1</b> Type a move: <code style={code}>−3</code>, <code style={code}>÷5</code>, <code style={code}>−2x</code> or <code style={code}>expand</code></li>
                <li><b>2</b> It happens to <em>both sides</em>, so the scale stays level</li>
                <li><b>3</b> Get <code style={code}>x = …</code> alone. Fewer moves, more points</li>
              </ol>
              <button onClick={() => start()} style={primaryBtn}>Start {T.name} sprint · {ROUND_SECONDS / 60} min</button>
              {tier < 2 && !tierOpen(tier + 1) && <div style={{ color: "#8fd6ab", fontSize: 13, marginTop: 10 }}>Solve {UNLOCK_SOLVES} in one round to unlock {TIERS[tier + 1].name}.</div>}
            </div>
          )}

          {phase === "over" && (
            <div className="es-pop" style={{ textAlign: "center", padding: "26px 8px 18px" }}>
              <div style={{ color: T.color, fontWeight: 800, letterSpacing: ".14em", fontSize: 13 }}>{T.name.toUpperCase()} · TIME!</div>
              <div style={{ fontFamily: "Fraunces, serif", fontSize: 64, fontWeight: 700, color: "#34d27f", lineHeight: 1.1 }}>{score}</div>
              <div style={{ color: "#bfe9cf", fontSize: 16 }}>{solved} solved{score > 0 && score >= (best[tier]?.score ?? 0) ? " · new best" : ""}</div>
              {unlockedNow && <div style={{ color: TIERS[tier + 1].color, fontWeight: 800, marginTop: 10 }}>{TIERS[tier + 1].name} unlocked!</div>}
              <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 16, flexWrap: "wrap" }}>
                {tier < 2 && tierOpen(tier + 1) && <button onClick={() => start((tier + 1) as Tier)} style={primaryBtn}>Go for {TIERS[tier + 1].name} →</button>}
                <button onClick={() => start()} style={tier < 2 && tierOpen(tier + 1) ? secondaryBtn : primaryBtn}>Play again</button>
              </div>
              {tier < 2 && !tierOpen(tier + 1) && <div style={{ color: "#8fd6ab", fontSize: 13, marginTop: 10 }}>Solve {UNLOCK_SOLVES} in one round to unlock {TIERS[tier + 1].name}.</div>}
            </div>
          )}

          {phase === "playing" && problem && current && (
            <div className="es-grid">
              {/* scale + current equation */}
              <div style={{ position: "relative" }}>
                <Scale eq={current} x={problem.x} wobble={wobble} />
                <div style={{ textAlign: "center", fontFamily: "JetBrains Mono, monospace", fontSize: "clamp(24px, 4.5vw, 36px)", fontWeight: 700, color: "#f0fff6", margin: "6px 0 2px" }}>
                  {pending ? (
                    <>
                      <span>{fmtSide(current.L, current.mode)}</span>
                      <span style={{ color: "#f87171" }}> ≠ </span>
                      <span style={{ opacity: 0.6 }}>{fmtSide(current.R, current.mode)}</span>
                    </>
                  ) : fmtEq(current)}
                </div>
                {pending && <div style={{ textAlign: "center", color: "#fca5a5", fontSize: 14.5, fontWeight: 600 }}>The scale tipped. Do <b>{pending.move.label}</b> to the right side too.</div>}

                {solvedFlash && (
                  <div className="es-overlay es-pop">
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 44, fontWeight: 800, color: "#34d27f" }}>x = {solvedFlash.x}</div>
                      <div style={{ color: "#d1fae5", fontSize: 14.5, margin: "4px 0" }}>Check: {solvedFlash.check} ✓</div>
                      <div style={{ color: "#fde68a", fontWeight: 800 }}>
                        +{solvedFlash.pts} · {solvedFlash.moves} {solvedFlash.moves === 1 ? "move" : "moves"}{solvedFlash.par ? " · fewest moves!" : ` (best: ${problem.par})`}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* moves panel */}
              <div>
                <div style={stepLabel}>Your move</div>
                {pending ? (
                  <button onClick={finishPending} autoFocus style={{ ...primaryBtn, width: "100%", marginTop: 8 }}>
                    Apply {pending.move.label} to the right side →
                  </button>
                ) : (
                  <>
                    <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                      <input ref={inputRef} value={moveText} onChange={(e) => { setMoveText(e.target.value); setError(null); }}
                        onKeyDown={(e) => { if (e.key === "Enter") submitMove(); if (e.key === "Escape") setMoveText(""); }}
                        placeholder="e.g. −3  ÷5  −2x  expand" aria-label="Move to apply to both sides"
                        spellCheck={false} autoComplete="off" disabled={!!solvedFlash} style={inputStyle} />
                      <button onClick={submitMove} disabled={!!solvedFlash} style={{ ...primaryBtn, padding: "10px 18px" }}>{T.twoTap ? "Left side" : "Both sides"}</button>
                    </div>
                    <div style={{ minHeight: 20, fontSize: 13, color: preview ? "#9fe7bd" : "#8fd6ab", marginTop: 4 }}>
                      {preview ? `${preview} ${T.twoTap ? "→ left side first, then right" : "to both sides"}` : ""}
                    </div>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {["+", "−", "×", "÷", "x", "/"].map((k) => <button key={k} onClick={() => key(k)} style={keyBtn} aria-label={`Type ${k}`}>{k}</button>)}
                      {(problem.kind.includes("(") || current.L.br || current.R.br) && <button onClick={() => key("expand")} style={{ ...keyBtn, width: "auto", padding: "0 12px" }}>expand</button>}
                    </div>
                  </>
                )}

                {error && <div role="alert" style={{ ...note, background: "rgba(239,68,68,.16)", borderColor: "#ef4444" }}>{error}</div>}
                {hint && <div style={{ ...note, background: "rgba(56,189,248,.1)", borderColor: "rgba(56,189,248,.35)", color: "#dbeafe" }}>Try: <b style={{ fontFamily: "JetBrains Mono, monospace" }}>{hint}</b></div>}

                <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
                  <button onClick={undo} disabled={steps.length <= 1 && !pending} style={secondaryBtn}>Undo</button>
                  {T.hintCost !== null && <button onClick={showHint} disabled={!!pending} style={secondaryBtn}>{T.hintCost ? `Hint (−${T.hintCost})` : "Hint"}</button>}
                  <button onClick={skip} style={secondaryBtn}>Skip</button>
                </div>

                {/* worked solution so far */}
                <div style={{ marginTop: 16, borderTop: "1px solid rgba(159,231,189,.2)", paddingTop: 10 }}>
                  <div style={stepLabel}>Your working</div>
                  <ol style={{ listStyle: "none", padding: 0, margin: "6px 0 0", fontFamily: "JetBrains Mono, monospace", fontSize: 15 }}>
                    {steps.map((s, i) => (
                      <li key={i} className={i === steps.length - 1 && i > 0 ? "es-in" : undefined} style={{ display: "flex", justifyContent: "space-between", gap: 12, padding: "3px 0", color: i === steps.length - 1 ? "#f0fff6" : "#9fbfae" }}>
                        <span>{fmtEq(s.eq)}</span>
                        {steps[i + 1] && <span style={{ color: "#fde68a", whiteSpace: "nowrap" }}>{steps[i + 1].label} both sides</span>}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          )}
        </div>

        <details style={{ maxWidth: 640, margin: "16px auto 0", color: "#475569", fontSize: 14, lineHeight: 1.6 }}>
          <summary style={{ cursor: "pointer", fontWeight: 700 }}>How to type moves</summary>
          <ul style={{ paddingLeft: 18 }}>
            <li><code>-3</code> or <code>+3</code>: subtract or add 3 on both sides</li>
            <li><code>-2x</code>, <code>+x</code>, <code>-x/3</code>: subtract or add x-terms</li>
            <li><code>/5</code> or <code>÷5</code>, <code>*4</code> or <code>×4</code>: divide or multiply both sides (fractions like <code>/3/4</code> and decimals like <code>/0.5</code> work)</li>
            <li><code>expand</code>: multiply out brackets</li>
          </ul>
        </details>
      </div>
      <style>{CSS}</style>
    </main>
  );
}

/* ------------------------------------------------------------------ */
/* Balance scale                                                       */
/* ------------------------------------------------------------------ */

type Chip = { label: string; kind: "x" | "c" | "bag"; neg: boolean };
function chipsOf(s: Side, mode: Equation["mode"]): Chip[] {
  const out: Chip[] = [];
  if (s.br) out.push({ label: fmtSide({ br: s.br, x: { n: 0, d: 1 }, c: { n: 0, d: 1 } }, mode), kind: "bag", neg: s.br.k.n < 0 });
  if (!isZero(s.x)) {
    const v = num(s.x);
    if (s.x.d === 1 && Math.abs(v) <= 4) for (let i = 0; i < Math.abs(v); i++) out.push({ label: v < 0 ? "−x" : "x", kind: "x", neg: v < 0 });
    else out.push({ label: fmtSide({ br: null, x: s.x, c: { n: 0, d: 1 } }, mode), kind: "x", neg: v < 0 });
  }
  if (!isZero(s.c)) {
    const v = num(s.c);
    if (s.c.d === 1 && Math.abs(v) <= 5) for (let i = 0; i < Math.abs(v); i++) out.push({ label: v < 0 ? "−1" : "1", kind: "c", neg: v < 0 });
    else out.push({ label: fmtQ(s.c, mode), kind: "c", neg: v < 0 });
  }
  return out;
}

const SW = 560, SH = 250, PX = 280, PY = 64, ARM = 200;

function Pan({ chips, cx, cy }: { chips: Chip[]; cx: number; cy: number }) {
  // lay chips out in rows inside the tray, bottom row first
  const widths = chips.map((c) => Math.max(c.kind === "c" && c.label.length <= 2 ? 24 : 30, c.label.length * 9 + 14));
  const rows: { i: number; w: number }[][] = [[]];
  let rowW = 0;
  widths.forEach((w, i) => {
    if (rowW + w > 176 && rows[rows.length - 1].length) { rows.push([]); rowW = 0; }
    rows[rows.length - 1].push({ i, w });
    rowW += w + 4;
  });
  return (
    <g style={{ transform: `translate(${cx}px, ${cy}px)`, transition: "transform .6s cubic-bezier(.3,1.4,.5,1)" }}>
      <line x1={-80} y1={-58} x2={0} y2={-112} stroke="rgba(240,255,246,.35)" />
      <line x1={80} y1={-58} x2={0} y2={-112} stroke="rgba(240,255,246,.35)" />
      {rows.map((row, ri) => {
        const total = row.reduce((a, r) => a + r.w + 4, -4);
        let x = -total / 2;
        return row.map(({ i, w }) => {
          const c = chips[i];
          const y = -36 - ri * 28;
          const el = (
            <g key={i} className="es-chip">
              <rect x={x} y={y} width={w} height={24} rx={c.kind === "c" ? 12 : 5}
                fill={c.neg ? "#7f1d1d" : c.kind === "x" ? "#166534" : c.kind === "bag" ? "#1e3a5f" : "#78350f"}
                stroke={c.neg ? "#f87171" : c.kind === "x" ? "#34d27f" : c.kind === "bag" ? "#60a5fa" : "#fbbf24"} strokeWidth={1.5} />
              <text x={x + w / 2} y={y + 16.5} textAnchor="middle" fill="#f0fff6" fontSize={13} fontWeight={700} fontFamily="JetBrains Mono, monospace">{c.label}</text>
            </g>
          );
          x += w + 4;
          return el;
        });
      })}
      <path d="M -92 -10 Q 0 22 92 -10 Z" fill="#1c3b2a" stroke="#34d27f" strokeWidth={2} />
    </g>
  );
}

function Scale({ eq, x, wobble }: { eq: Equation; x: { n: number; d: number }; wobble: number }) {
  const diff = num(evalSide(eq.L, x)) - num(evalSide(eq.R, x));
  const angle = Math.abs(diff) < 1e-9 ? 0 : (diff > 0 ? -1 : 1) * Math.min(14, 6 + Math.abs(diff) * 0.4);
  const rad = (angle * Math.PI) / 180;
  const lx = PX - ARM * Math.cos(rad), ly = PY - ARM * Math.sin(rad);
  const rx = PX + ARM * Math.cos(rad), ry = PY + ARM * Math.sin(rad);
  const balanced = angle === 0;
  return (
    <svg viewBox={`0 0 ${SW} ${SH}`} role="img" aria-label={balanced ? "The balance is level" : "The balance is tipped"} style={{ width: "100%", height: "auto", display: "block" }}>
      <defs>
        <filter id="es-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="5" /></filter>
      </defs>
      {/* stand */}
      <path d={`M ${PX} ${PY} L ${PX - 34} ${SH - 12} L ${PX + 34} ${SH - 12} Z`} fill="#0e2016" stroke="rgba(159,231,189,.3)" />
      <rect x={PX - 70} y={SH - 14} width={140} height={8} rx={4} fill="#14653b" />
      {/* beam */}
      <g key={wobble} className={wobble ? "es-wobble" : undefined} style={{ transformOrigin: `${PX}px ${PY}px` }}>
        <g style={{ transform: `rotate(${angle}deg)`, transformOrigin: `${PX}px ${PY}px`, transition: "transform .6s cubic-bezier(.3,1.4,.5,1)" }}>
          <rect x={PX - ARM - 6} y={PY - 5} width={2 * ARM + 12} height={10} rx={5} fill={balanced ? "#34d27f" : "#f87171"} />
          {balanced && <rect x={PX - ARM - 6} y={PY - 5} width={2 * ARM + 12} height={10} rx={5} fill="#34d27f" opacity={0.5} filter="url(#es-glow)" />}
        </g>
      </g>
      <circle cx={PX} cy={PY} r={9} fill="#d1fae5" />
      <Pan chips={chipsOf(eq.L, eq.mode)} cx={lx} cy={ly + 112} />
      <Pan chips={chipsOf(eq.R, eq.mode)} cx={rx} cy={ry + 112} />
    </svg>
  );
}

function Hud({ label, value, warn }: { label: string; value: string; warn?: boolean }) {
  return (
    <div style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(159,231,189,.22)", borderRadius: 10, padding: "5px 12px", minWidth: 70, textAlign: "center" }}>
      <div style={{ fontSize: 10.5, letterSpacing: ".1em", color: "#8fd6ab", fontWeight: 700 }}>{label.toUpperCase()}</div>
      <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 18, fontWeight: 800, color: warn ? "#fca5a5" : "#f0fff6" }}>{value}</div>
    </div>
  );
}

const CSS = `
.es-grid{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,1fr);gap:24px;align-items:start}
@media (max-width:860px){.es-grid{grid-template-columns:minmax(0,1fr)}}
.es-steps{list-style:none;display:flex;flex-wrap:wrap;justify-content:center;gap:8px 18px;padding:0;margin:12px 0 18px;color:#cdeedb;font-size:15px}
.es-steps b{display:inline-grid;place-items:center;width:22px;height:22px;border-radius:999px;background:#34d27f;color:#04130a;font-size:13px;margin-right:6px}
.es-steps em{font-style:normal;color:#f0fff6;font-weight:700}
.es-overlay{position:absolute;inset:0;display:grid;place-items:center;background:rgba(2,10,6,.78);border-radius:14px}
.es-pop{animation:esPop .35s ease-out both}
@keyframes esPop{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:none}}
.es-wobble{animation:esWob .7s ease-out}
@keyframes esWob{0%{transform:rotate(0)}25%{transform:rotate(-3deg)}50%{transform:rotate(2deg)}75%{transform:rotate(-1deg)}100%{transform:rotate(0)}}
.es-in{animation:esIn .35s ease-out}
@keyframes esIn{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}
.es-chip{animation:esIn .3s ease-out both}
`;

const shell: React.CSSProperties = { marginTop: 16, borderRadius: 22, padding: "22px clamp(14px, 3vw, 28px)", color: "#e7f6ec", background: "radial-gradient(900px 420px at 80% -30%,#0d3a23,#07150d)", border: "1px solid #14653b", boxShadow: "0 20px 50px rgba(13,92,48,.25)" };
const stepLabel: React.CSSProperties = { fontSize: 13, fontWeight: 800, letterSpacing: ".06em", color: "#9fe7bd", textTransform: "uppercase" };
const inputStyle: React.CSSProperties = { flex: 1, minWidth: 0, background: "rgba(255,255,255,.07)", color: "#f0fff6", border: "1px solid rgba(159,231,189,.3)", borderRadius: 10, padding: "11px 12px", fontFamily: "JetBrains Mono, monospace", fontSize: 18, outline: "none" };
const keyBtn: React.CSSProperties = { width: 40, height: 36, background: "rgba(255,255,255,.08)", color: "#f0fff6", border: "1px solid rgba(159,231,189,.25)", borderRadius: 8, fontFamily: "JetBrains Mono, monospace", fontSize: 16, fontWeight: 700, cursor: "pointer" };
const ghostBtn: React.CSSProperties = { background: "none", border: "1px dashed rgba(159,231,189,.4)", color: "#9fe7bd", borderRadius: 10, padding: "8px 14px", fontWeight: 700, fontSize: 13.5, cursor: "pointer" };
const primaryBtn: React.CSSProperties = { background: "linear-gradient(135deg,#1f8a4c,#34d27f)", color: "#04130a", border: "none", borderRadius: 12, padding: "12px 26px", fontWeight: 800, fontSize: 16, cursor: "pointer" };
const secondaryBtn: React.CSSProperties = { background: "rgba(255,255,255,.08)", color: "#f0fff6", border: "1px solid rgba(159,231,189,.28)", borderRadius: 12, padding: "10px 16px", fontWeight: 700, fontSize: 14, cursor: "pointer" };
const note: React.CSSProperties = { marginTop: 10, padding: "9px 12px", borderRadius: 10, fontSize: 14, lineHeight: 1.5, border: "1px solid", color: "#f0fff6" };
const code: React.CSSProperties = { fontFamily: "JetBrains Mono, monospace", background: "rgba(255,255,255,.1)", padding: "1px 6px", borderRadius: 5, color: "#f0fff6" };
