"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { SiteHeader } from "../../../components/SiteHeader";
import { parseRule, short } from "../../../lib/linearRule";
import {
  LEVELS, TIERS, attempt, goalTarget, midChoices, moverPos, readRule, rng,
  type GoalResult, type Mission, type Plan, type Tier,
} from "../../../lib/rateRace";

const STORE_KEY = "ia_raterace_progress"; // { "level-id:tier": best stars }
const DRONE = "#34d27f";
const SPU = 0.45; // real seconds per simulated second
const AHEAD = 2; // the bonus question asks where the drone will be this many seconds later

type Run = { plan: Plan; results: GoalResult[]; won: boolean };
type Phase = "think" | "build" | "countdown" | "flying" | "question" | "won" | "lost";
type Mid = { tq: number; answer: number; options: number[]; chosen: number | null; deadline: number; left: number };

/* ---------------- sound (optional, off by default) ---------------- */
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

// Impure helpers live outside the component; they are only called from event handlers and effects.
const randomSeed = () => Math.floor(Math.random() * 1e9);
const randomIndex = (n: number) => Math.floor(Math.random() * n);
const clock = () => performance.now();
const wallClock = () => Date.now();

// Next animation frame, with a timer fallback for when the browser stops drawing
// (hidden or background windows pause requestAnimationFrame). Returns a cancel function.
function nextFrame(cb: (now: number) => void): () => void {
  let done = false;
  const run = () => { if (done) return; done = true; cancelAnimationFrame(raf); clearTimeout(to); cb(clock()); };
  const raf = requestAnimationFrame(run);
  const to = setTimeout(run, 50);
  return () => { done = true; cancelAnimationFrame(raf); clearTimeout(to); };
}

function loadStars(): Record<string, number> {
  try { return JSON.parse(localStorage.getItem(STORE_KEY) || "{}"); } catch { return {}; }
}
function saveStars(s: Record<string, number>) {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(s)); } catch {}
}

export default function RateRace() {
  const [levelIdx, setLevelIdx] = useState(0);
  const [tier, setTier] = useState<Tier>(0);
  const [seed, setSeed] = useState(1);
  const mission: Mission = useMemo(() => LEVELS[levelIdx].make(rng(seed), tier), [levelIdx, tier, seed]);
  const T = TIERS[tier];

  const [phase, setPhase] = useState<Phase>("think");
  const [thinkVal, setThinkVal] = useState("");
  const [thinkTries, setThinkTries] = useState(0);
  const [inputs, setInputs] = useState<string[]>([""]);
  const [fill, setFill] = useState({ m: "", b: "" });
  const [batteries, setBatteries] = useState(TIERS[0].batteries);
  const [hintPaid, setHintPaid] = useState(false);
  const [allOpen, setAllOpen] = useState(false);
  const [run, setRun] = useState<Run | null>(null);
  const [tNow, setTNow] = useState<number | null>(null);
  const [count, setCount] = useState(0);
  const [mid, setMid] = useState<Mid | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [gain, setGain] = useState<{ text: string; key: number } | null>(null);
  const [streak, setStreak] = useState(0);
  const [stars, setStars] = useState<Record<string, number>>({});
  const [missionStars, setMissionStars] = useState(0);
  const [sound, setSound] = useState(false);
  const [runId, setRunId] = useState(0);

  const loopRef = useRef<(() => void) | null>(null);
  const simT = useRef(0);
  const crossed = useRef<Set<number>>(new Set());
  const midDone = useRef(false);
  const soundRef = useRef(false);
  useEffect(() => { soundRef.current = sound; }, [sound]);

  // New random numbers on first load (seed 1 keeps the server render stable).
  useEffect(() => {
    const id = setTimeout(() => {
      setStars(loadStars());
      setSeed(randomSeed());
      // ?all=1 opens every level and tier (for teachers previewing the game)
      setAllOpen(new URLSearchParams(window.location.search).get("all") === "1");
    }, 0);
    return () => clearTimeout(id);
  }, []);

  const play = useCallback((f: number, d?: number, t?: OscillatorType, v?: number, to?: number) => {
    if (soundRef.current) tone(f, d, t, v, to);
  }, []);

  const stopLoop = useCallback(() => {
    loopRef.current?.();
    loopRef.current = null;
  }, []);
  useEffect(() => () => stopLoop(), [stopLoop]);

  // Points are multiplied by the tier: Silver ×1.5, Gold ×2.
  function award(pts: number, text: string) {
    const p = Math.round(pts * T.mult);
    setScore((s) => s + p);
    setGain({ text: `+${p} ${text}`, key: randomSeed() });
  }

  /* ---------------- unlocking ---------------- */
  const cleared = (i: number, t: number) => (stars[`${LEVELS[i].id}:${t}`] ?? 0) > 0;
  const levelOpen = (i: number) => allOpen || i === 0 || cleared(i - 1, 0);
  const tierOpen = (i: number, t: number) => levelOpen(i) && (allOpen || t === 0 || cleared(i, t - 1));
  /** The tier to start a level on: the first open one not yet cleared, else the highest. */
  const startTier = (i: number): Tier => {
    for (const t of [0, 1, 2] as Tier[]) if (tierOpen(i, t) && !cleared(i, t)) return t;
    return ([2, 1, 0] as Tier[]).find((t) => tierOpen(i, t)) ?? 0;
  };

  function newMission(i: number, t: Tier = tier) {
    stopLoop();
    setLevelIdx(i);
    setTier(t);
    setSeed(randomSeed());
    setPhase(TIERS[t].think ? "think" : "build");
    setHintPaid(false);
    setThinkVal("");
    setThinkTries(0);
    setInputs([""]);
    setFill({ m: "", b: "" });
    setBatteries(TIERS[t].batteries);
    setRun(null);
    setTNow(null);
    setMid(null);
    setError(null);
    setShowHint(false);
    setMissionStars(0);
    midDone.current = false;
  }

  /* ---------------- think step ---------------- */
  function checkThink() {
    const raw = thinkVal.replace(/[−–]/g, "-").replace(/\s+/g, "");
    const fm = /^(-?\d+(?:\.\d+)?)\/(\d+(?:\.\d+)?)$/.exec(raw);
    const v = fm ? Number(fm[1]) / Number(fm[2]) : Number(raw);
    if (thinkVal.trim() === "" || isNaN(v)) return;
    if (Math.abs(v - mission.think.answer) < 0.01) {
      play(660, 0.12, "sine", 0.05, 990);
      if (thinkTries === 0) award(100, "worked it out");
      setPhase("build");
    } else {
      play(160, 0.18, "square", 0.03);
      setThinkTries((n) => n + 1);
    }
  }

  /* ---------------- flight ---------------- */
  const ruleInputs = mission.fillIn ? [`d = ${fill.m || "0"}t + ${fill.b || "0"}`] : inputs;
  const parsed = useMemo(() => inputs.map((s) => parseRule(s)), [inputs]);

  function launch() {
    if (phase !== "build") return;
    if (mission.fillIn && (fill.m.trim() === "" || fill.b.trim() === "")) { setError("Fill in both boxes."); return; }
    const a = attempt(mission, ruleInputs);
    if ("error" in a) { setError(a.error); return; }
    setError(null);
    setShowHint(false);
    setBatteries((b) => b - 1);
    setRun(a);
    setRunId((n) => n + 1);
    crossed.current = new Set();
    simT.current = 0;
    setTNow(0);

    // countdown 3-2-1
    setPhase("countdown");
    let c = 3;
    setCount(c);
    play(440, 0.1);
    const iv = setInterval(() => {
      c -= 1;
      if (c > 0) { setCount(c); play(440, 0.1); return; }
      clearInterval(iv);
      play(880, 0.25, "sawtooth", 0.03, 1320);
      setPhase("flying");
      fly(a);
    }, 500);
  }

  function fly(r: Run) {
    // one mid-flight question per mission (from level 2 on), at a whole-second time with no checkpoint
    let midAt: number | null = null;
    if (!midDone.current && levelIdx >= 1) {
      const times = Array.from({ length: Math.floor(mission.tMax) - 1 }, (_, i) => i + 1)
        .filter((t) => t + AHEAD <= mission.tMax && !mission.goals.some((g) => Math.abs(g.t - t) < 0.5));
      if (times.length) midAt = times[randomIndex(times.length)];
    }
    let last = clock();
    const step = (now: number) => {
      const dt = Math.min(0.5, (now - last) / 1000); // real elapsed time, so slow frame rates don't slow the clock
      last = now;
      simT.current = Math.min(mission.tMax, simT.current + dt / SPU);
      mission.goals.forEach((g, i) => {
        if (!crossed.current.has(i) && simT.current >= g.t - 1e-9) {
          crossed.current.add(i);
          if (r.results[i].ok) play(990, 0.1, "triangle", 0.05, 1480);
          else play(150, 0.22, "square", 0.03);
        }
      });
      if (midAt !== null && !midDone.current && simT.current >= midAt) {
        midDone.current = true;
        simT.current = midAt;
        setTNow(midAt);
        const q = midChoices(r.plan, midAt + AHEAD, rng(randomSeed())); // ask about a moment not drawn yet
        setMid({ ...q, chosen: null, deadline: wallClock() + 10000, left: 100 });
        setPhase("question");
        loopRef.current = null;
        return;
      }
      setTNow(simT.current);
      if (simT.current >= mission.tMax) { loopRef.current = null; land(r); return; }
      loopRef.current = nextFrame(step);
    };
    loopRef.current = nextFrame(step);
  }

  function answerMid(v: number | null) {
    if (!mid || mid.chosen !== null) return;
    const right = v !== null && Math.abs(v - mid.answer) < 0.01;
    setMid({ ...mid, chosen: v ?? Number.NaN });
    if (right) { play(880, 0.15, "triangle", 0.05, 1320); award(50, "sharp prediction"); }
    else play(150, 0.2, "square", 0.03);
    setTimeout(() => {
      setMid(null);
      setPhase("flying");
      if (run) fly(run);
    }, 1100);
  }

  // mid-question countdown
  useEffect(() => {
    if (phase !== "question" || !mid || mid.chosen !== null) return;
    const id = setInterval(() => {
      const left = (mid.deadline - wallClock()) / 100;
      if (left <= 0) answerMid(null);
      else setMid((m) => (m ? { ...m, left } : m));
    }, 200);
    return () => clearInterval(id);
  });

  function land(r: Run) {
    if (r.won) {
      const used = T.batteries - batteriesAfterLaunch();
      const st = Math.max(1, 4 - used);
      play(660, 0.1); setTimeout(() => play(880, 0.1), 110); setTimeout(() => play(1320, 0.25), 220);
      award([300, 200, 100][used - 1] ?? 100, "delivered");
      setMissionStars(st);
      setStreak((s) => s + 1);
      setStars((prev) => {
        const id = `${LEVELS[levelIdx].id}:${tier}`;
        if ((prev[id] ?? 0) >= st) return prev;
        const nx = { ...prev, [id]: st };
        saveStars(nx);
        return nx;
      });
      setPhase("won");
      return;
    }
    if (batteriesAfterLaunch() <= 0) {
      play(200, 0.4, "sawtooth", 0.03, 80);
      setStreak(0);
      setPhase("lost");
      return;
    }
    setPhase("build");
  }
  // batteries state is updated before the flight ends; read it through a ref
  const batRef = useRef(batteries);
  useEffect(() => { batRef.current = batteries; }, [batteries]);
  const batteriesAfterLaunch = () => batRef.current;

  /* ---------------- render helpers ---------------- */
  const flying = phase === "countdown" || phase === "flying" || phase === "question";
  const misses = run && !flying && phase !== "won"
    ? run.results.map((r, i) => ({ r, g: mission.goals[i] })).filter((x) => !x.r.ok)
    : [];
  const totalStars = Object.values(stars).reduce((a, b) => a + b, 0);
  const nextTier = (tier < 2 ? tier + 1 : null) as Tier | null;

  function toggleHint() {
    if (!showHint && T.hintCost && !hintPaid) {
      setScore((s) => s - (T.hintCost ?? 0));
      setHintPaid(true);
    }
    setShowHint((h) => !h);
  }

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "28px 16px 60px" }}>
        <Link href="/games" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← All games</Link>

        <div style={shell}>
          {/* HUD */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 30, fontWeight: 700, margin: 0, color: "#f0fff6" }}>Rate Race</h1>
            <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
              <Hud label="Score" value={String(score)} pop={gain?.key} />
              <Hud label="Streak" value={`×${streak}`} />
              <Hud label="Stars" value={`${totalStars}/${LEVELS.length * 9}`} />
              <button onClick={() => { setSound((s) => !s); if (!sound) tone(660, 0.08); }} style={{ ...ghostBtn, padding: "8px 12px" }} aria-pressed={sound}>
                Sound {sound ? "on" : "off"}
              </button>
            </div>
          </div>
          {gain && <div key={gain.key} className="rr-gain">{gain.text}</div>}

          {/* level picker */}
          <div role="tablist" aria-label="Missions" style={{ display: "flex", gap: 6, flexWrap: "wrap", margin: "16px 0 18px" }}>
            {LEVELS.map((l, i) => {
              const on = i === levelIdx;
              const open = levelOpen(i);
              return (
                <button key={l.id} role="tab" aria-selected={on} disabled={flying || !open} onClick={() => newMission(i, startTier(i))}
                  title={open ? l.title : `Locked: pass level ${i} on Bronze first`}
                  style={{ ...levelBtn, opacity: open ? 1 : 0.35, cursor: open ? "pointer" : "not-allowed", background: on ? "#34d27f" : "rgba(255,255,255,.06)", color: on ? "#04130a" : "#e7f6ec", borderColor: on || cleared(i, 0) ? "#34d27f" : "rgba(159,231,189,.25)" }}>
                  <span style={{ fontWeight: 800 }}>{open ? i + 1 : "—"}</span>
                  <span style={{ display: "flex", gap: 3, marginTop: 3 }}>
                    {TIERS.map((tt, k) => (
                      <span key={k} style={{ width: 7, height: 7, borderRadius: 999, background: cleared(i, k) ? tt.color : "transparent", border: `1px solid ${cleared(i, k) ? tt.color : on ? "rgba(4,19,10,.4)" : "rgba(255,255,255,.3)"}` }} />
                    ))}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="rr-grid">
            {/* board */}
            <div style={{ position: "relative" }}>
              <Board mission={mission} run={run} tNow={tNow} runId={runId} flying={flying} />

              {phase === "countdown" && <div className="rr-overlay"><div key={count} className="rr-count">{count}</div></div>}

              {phase === "question" && mid && (
                <div className="rr-overlay" style={{ background: "rgba(2,10,6,.72)" }}>
                  <div style={{ textAlign: "center", padding: 16, maxWidth: 360 }}>
                    <div style={{ color: "#fbbf24", fontWeight: 800, fontSize: 13, letterSpacing: ".08em" }}>BONUS · PREDICT</div>
                    <div style={{ color: "#f0fff6", fontSize: 20, fontWeight: 700, margin: "6px 0 14px" }}>
                      Where will your drone be at t = {mid.tq} s?
                    </div>
                    <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
                      {mid.options.map((o) => {
                        const picked = mid.chosen !== null;
                        const isAns = Math.abs(o - mid.answer) < 0.01;
                        const bg = !picked ? "rgba(255,255,255,.1)" : isAns ? "rgba(52,210,127,.35)" : o === mid.chosen ? "rgba(239,68,68,.35)" : "rgba(255,255,255,.05)";
                        return (
                          <button key={o} onClick={() => answerMid(o)} disabled={picked}
                            style={{ ...choiceBtn, background: bg }}>{short(o)} m</button>
                        );
                      })}
                    </div>
                    <div style={{ height: 4, background: "rgba(255,255,255,.12)", borderRadius: 4, marginTop: 14, overflow: "hidden" }}>
                      <div style={{ height: "100%", background: "#fbbf24", width: `${mid.chosen !== null ? 0 : Math.max(0, mid.left)}%`, transition: "width .2s linear" }} />
                    </div>
                  </div>
                </div>
              )}

              {phase === "won" && (
                <div className="rr-overlay rr-pop" style={{ background: "rgba(2,10,6,.6)" }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ color: T.color, fontWeight: 800, letterSpacing: ".14em", fontSize: 13 }}>{T.name.toUpperCase()} · MISSION COMPLETE</div>
                    <div className="rr-stars">{[0, 1, 2].map((i) => <span key={i} style={{ animationDelay: `${i * 0.18}s`, color: i < missionStars ? "#fbbf24" : "rgba(255,255,255,.2)" }}>★</span>)}</div>
                    <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 8, flexWrap: "wrap" }}>
                      {nextTier !== null && tierOpen(levelIdx, nextTier) && (
                        <button onClick={() => newMission(levelIdx, nextTier)} style={{ ...primaryBtn, background: `linear-gradient(135deg, ${TIERS[nextTier].color}, #f0fff6)` }}>Go for {TIERS[nextTier].name} →</button>
                      )}
                      {levelIdx < LEVELS.length - 1 && levelOpen(levelIdx + 1) && <button onClick={() => newMission(levelIdx + 1, startTier(levelIdx + 1))} style={nextTier !== null ? secondaryBtn : primaryBtn}>Next level →</button>}
                      <button onClick={() => newMission(levelIdx)} style={secondaryBtn}>Again, new numbers</button>
                    </div>
                  </div>
                </div>
              )}

              {phase === "lost" && (
                <div className="rr-overlay rr-pop" style={{ background: "rgba(20,4,4,.7)" }}>
                  <div style={{ textAlign: "center", padding: 16 }}>
                    <div style={{ color: "#fca5a5", fontWeight: 800, letterSpacing: ".14em", fontSize: 13 }}>OUT OF BATTERY</div>
                    <div style={{ color: "#f0fff6", fontSize: 15, margin: "10px 0 4px" }}>A plan that works:</div>
                    {mission.solution.map((s) => <div key={s} style={{ fontFamily: "JetBrains Mono, monospace", color: "#f0fff6", fontSize: 15 }}>{s}</div>)}
                    <button onClick={() => newMission(levelIdx)} style={{ ...primaryBtn, marginTop: 14 }}>Try new numbers</button>
                  </div>
                </div>
              )}
            </div>

            {/* mission panel */}
            <div>
              <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                <h2 style={{ fontFamily: "Fraunces, serif", fontSize: 22, margin: 0, color: "#f0fff6" }}>{levelIdx + 1}. {mission.title}</h2>
                <span style={chip}>{mission.skill}</span>
                {mission.hard && <span style={{ ...chip, background: "rgba(248,113,113,.15)", color: "#fca5a5", borderColor: "rgba(248,113,113,.4)" }}>Hard</span>}
              </div>
              <div role="group" aria-label="Difficulty" style={{ display: "flex", gap: 6, margin: "10px 0 4px", flexWrap: "wrap" }}>
                {TIERS.map((tt, k) => {
                  const open = tierOpen(levelIdx, k);
                  const on = k === tier;
                  const st = stars[`${LEVELS[levelIdx].id}:${k}`] ?? 0;
                  return (
                    <button key={tt.name} disabled={flying || !open} onClick={() => newMission(levelIdx, k as Tier)}
                      title={open ? tt.numbers : `Locked: clear ${TIERS[k - 1]?.name} first`}
                      style={{ border: `1.5px solid ${on ? tt.color : open ? "rgba(255,255,255,.2)" : "rgba(255,255,255,.08)"}`, background: on ? `${tt.color}26` : "transparent", color: open ? tt.color : "rgba(255,255,255,.3)", borderRadius: 999, padding: "5px 12px", fontWeight: 800, fontSize: 13, cursor: open ? "pointer" : "not-allowed" }}>
                      {tt.name} {open ? <span style={{ letterSpacing: 1 }}>{"★".repeat(st)}{"☆".repeat(3 - st)}</span> : "· locked"}
                    </button>
                  );
                })}
              </div>
              <div style={{ fontSize: 12.5, color: "#8fd6ab" }}>{T.numbers}{T.mult > 1 ? ` · points ×${T.mult}` : ""}</div>
              <p style={{ color: "#f0fff6", fontSize: 18, fontWeight: 600, lineHeight: 1.4, margin: "10px 0 12px" }}>{mission.story}</p>

              {mission.others.map((o) => (
                <div key={o.name} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14.5, color: "#f0fff6", marginBottom: 8 }}>
                  <span aria-hidden style={{ width: 12, height: 12, borderRadius: 3, background: o.color }} />
                  {o.name}: <code style={code}>{o.label}</code>
                </div>
              ))}
              {mission.log && (
                <table style={{ borderCollapse: "collapse", margin: "2px 0 12px", fontFamily: "JetBrains Mono, monospace", fontSize: 15 }}>
                  <tbody>
                    <tr><th style={th}>t (s)</th>{mission.log.map(([t]) => <td key={t} style={td}>{t}</td>)}</tr>
                    <tr><th style={th}>d (m)</th>{mission.log.map(([t, d]) => <td key={t} style={td}>{d}</td>)}</tr>
                  </tbody>
                </table>
              )}

              {/* step 1: think (Bronze and Silver only) */}
              {T.think && <div style={{ ...card, borderColor: phase === "think" ? "#fbbf24" : "rgba(159,231,189,.2)" }}>
                <div style={stepLabel}><span style={stepNum}>1</span> Think</div>
                {phase === "think" ? (
                  <>
                    <div style={{ color: "#f0fff6", fontSize: 15.5, margin: "6px 0 8px" }}>{mission.think.q}</div>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <input value={thinkVal} onChange={(e) => setThinkVal(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") checkThink(); }}
                        inputMode="decimal" aria-label="Your answer" style={{ ...inputStyle, maxWidth: 120 }} autoFocus />
                      <span style={{ color: "#bfe9cf" }}>{mission.think.unit}</span>
                      <button onClick={checkThink} style={{ ...primaryBtn, padding: "10px 18px" }}>Check</button>
                    </div>
                    {thinkTries > 0 && <div style={{ color: "#fca5a5", fontSize: 13.5, marginTop: 8 }}>Not yet. {mission.think.hint}</div>}
                    {thinkTries >= 2 && (
                      <button onClick={() => { setThinkVal(String(mission.think.answer)); setPhase("build"); }} style={{ ...linkBtn, marginTop: 6 }}>
                        Show me ({short(mission.think.answer)} {mission.think.unit}) and continue
                      </button>
                    )}
                  </>
                ) : (
                  <div style={{ color: "#9fe7bd", fontSize: 14.5, marginTop: 4 }}>✓ {mission.think.q.replace(/\?.*$/, "")}: <b>{short(mission.think.answer)} {mission.think.unit}</b></div>
                )}
              </div>}

              {/* step 2: build + fly */}
              <div style={{ ...card, opacity: phase === "think" ? 0.45 : 1, borderColor: phase === "build" ? "#34d27f" : "rgba(159,231,189,.2)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={stepLabel}><span style={stepNum}>{T.think ? 2 : 1}</span> Program &amp; fly</div>
                  <Batteries left={batteries} total={T.batteries} />
                </div>

                {mission.fillIn ? (
                  <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "JetBrains Mono, monospace", fontSize: 20, color: "#f0fff6", margin: "10px 0 4px", flexWrap: "wrap" }}>
                    d =
                    <input value={fill.m} onChange={(e) => { setFill({ ...fill, m: e.target.value }); setError(null); }} onKeyDown={(e) => { if (e.key === "Enter") launch(); }}
                      disabled={phase !== "build"} aria-label="Speed (number in front of t)" placeholder="?" style={{ ...boxStyle, borderColor: "#34d27f" }} />
                    t +
                    <input value={fill.b} onChange={(e) => { setFill({ ...fill, b: e.target.value }); setError(null); }} onKeyDown={(e) => { if (e.key === "Enter") launch(); }}
                      disabled={phase !== "build"} aria-label="Start (number added)" placeholder="?" style={{ ...boxStyle, borderColor: "#fbbf24" }} />
                  </div>
                ) : (
                  <>
                    {inputs.map((val, i) => {
                      const p = parsed[i];
                      return (
                        <div key={i} style={{ marginTop: 10 }}>
                          <div style={{ display: "flex", gap: 8 }}>
                            <input value={val} disabled={phase !== "build"}
                              onChange={(e) => { setError(null); setInputs((a) => a.map((s, j) => (j === i ? e.target.value : s))); }}
                              onKeyDown={(e) => { if (e.key === "Enter") launch(); }}
                              placeholder={mission.maxRules > 1 ? `Stage ${i + 1}: d = mt + b {start <= t <= end}` : "d = mt + b"}
                              aria-label={`Flight rule ${i + 1}`} spellCheck={false} autoComplete="off" style={inputStyle} />
                            {inputs.length > 1 && <button onClick={() => setInputs((a) => a.filter((_, j) => j !== i))} disabled={phase !== "build"} aria-label={`Remove rule ${i + 1}`} style={iconBtn}>×</button>}
                          </div>
                          {val.trim() && <div style={{ fontSize: 12.5, margin: "4px 0 0 2px", color: p.ok ? "#9fe7bd" : "#fca5a5" }}>{p.ok ? readRule(p.rule) : p.error}</div>}
                        </div>
                      );
                    })}
                    {inputs.length < mission.maxRules && phase === "build" && (
                      <button onClick={() => setInputs((a) => [...a, ""])} style={{ ...ghostBtn, marginTop: 8 }}>+ Add a stage</button>
                    )}
                  </>
                )}

                <div style={{ display: "flex", gap: 10, marginTop: 12, flexWrap: "wrap" }}>
                  <button onClick={launch} disabled={phase !== "build"} style={{ ...primaryBtn, opacity: phase === "build" ? 1 : 0.5 }}>Fly ▸</button>
                  {T.hintCost !== null && (
                    <button onClick={toggleHint} disabled={phase === "think"} style={secondaryBtn}>
                      {showHint ? "Hide hint" : T.hintCost && !hintPaid ? `Hint (−${T.hintCost})` : "Hint"}
                    </button>
                  )}
                </div>

                {error && <div role="alert" style={{ ...note, background: "rgba(239,68,68,.16)", borderColor: "#ef4444" }}>{error}</div>}

                {misses.length > 0 && phase === "build" && (
                  <div role="status" style={{ ...note, background: "rgba(239,68,68,.1)", borderColor: "rgba(239,68,68,.5)" }}>
                    {misses.map(({ r, g }, i) => (
                      <div key={i}>✗ {g.text}: you were at <b>{short(r.got)} m</b> ({short(Math.abs(r.gap))} m too {r.gap > 0 ? "high" : "low"})</div>
                    ))}
                    <div style={{ color: "#fde68a", marginTop: 4 }}>{batteries} {batteries === 1 ? "battery" : "batteries"} left.</div>
                  </div>
                )}
                {showHint && <div style={{ ...note, background: "rgba(56,189,248,.1)", borderColor: "rgba(56,189,248,.35)", color: "#dbeafe" }}>{mission.hint}</div>}
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0" }}>
                {mission.goals.map((g, i) => {
                  const res = run?.results[i];
                  const shown = res && tNow !== null && tNow >= g.t - 1e-9;
                  return (
                    <li key={i} style={{ fontSize: 14, color: "#e7f6ec", marginBottom: 4, display: "flex", gap: 8 }}>
                      <span aria-hidden style={{ color: !shown ? "#fbbf24" : res.ok ? "#34d27f" : "#fca5a5", fontWeight: 800, width: 14 }}>{!shown ? "◎" : res.ok ? "✓" : "✗"}</span>
                      {g.text}
                    </li>
                  );
                })}
              </ul>

              {!mission.fillIn && (
                <details style={{ marginTop: 14, color: "#bfe9cf", fontSize: 13.5, lineHeight: 1.6 }}>
                  <summary style={{ cursor: "pointer", fontWeight: 700, color: "#8fd6ab" }}>How to write rules</summary>
                  <ul style={{ margin: "8px 0 0", paddingLeft: 18 }}>
                    <li><code style={code}>d = 4t + 6</code> 4 m/s, starts at 6 m</li>
                    <li><code style={code}>d = -6t + 48</code> coming back down</li>
                    <li><code style={code}>d - 24 = -8(t - 7)</code> point-slope form</li>
                    <li><code style={code}>d = 24 {"{4 <= t <= 7}"}</code> only during that time</li>
                  </ul>
                </details>
              )}
            </div>
          </div>
        </div>
      </div>
      <style>{CSS}</style>
    </main>
  );
}

/* ------------------------------------------------------------------ */
/* Board: city street (left) + distance–time graph sharing the d-scale */
/* ------------------------------------------------------------------ */

const W = 660, H = 440;
const ROAD_X = 24, ROAD_W = 46;
const GX0 = 200, GX1 = 640, GY0 = 26, GY1 = 396;

function Board({ mission, run, tNow, runId, flying }: { mission: Mission; run: Run | null; tNow: number | null; runId: number; flying: boolean }) {
  const { tMax, dMax } = mission;
  const sx = (t: number) => GX0 + (t / tMax) * (GX1 - GX0);
  const sy = (d: number) => GY1 - (d / dMax) * (GY1 - GY0);
  const clampY = (y: number) => Math.max(GY0 - 14, Math.min(GY1 + 8, y));
  const dStep = dMax <= 30 ? 5 : dMax <= 60 ? 10 : 20;
  const tStep = tMax <= 12 ? 1 : 2;
  const t = tNow ?? 0;

  const pathOf = (f: (t: number) => number, t1: number) => {
    let s = "";
    const n = Math.max(2, Math.ceil((t1 / tMax) * 300));
    for (let i = 0; i <= n; i++) {
      const tt = (t1 * i) / n;
      s += `${i ? "L" : "M"}${sx(tt).toFixed(1)},${clampY(sy(f(tt))).toFixed(1)} `;
    }
    return s;
  };

  const startD = mission.goals[0].kind === "at" && mission.goals[0].t === 0 ? mission.goals[0].d : 0;
  const droneD = run && tNow !== null ? run.plan.pos(t) : startD;
  const dy = clampY(sy(droneD));

  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="City street with the drone, and its distance–time graph"
      style={{ width: "100%", height: "auto", display: "block", borderRadius: 16, border: "1px solid #14653b" }}>
      <defs>
        <linearGradient id="rr-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#020b06" />
          <stop offset="1" stopColor="#08261a" />
        </linearGradient>
        <filter id="rr-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="4" /></filter>
      </defs>
      <rect width={W} height={H} fill="url(#rr-sky)" />
      {/* distant skyline */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
        const bw = 30 + ((i * 37) % 26), bh = 60 + ((i * 53) % 90), bx = GX0 + i * 38;
        return <rect key={i} x={bx} y={GY1 - bh} width={bw} height={bh} fill="rgba(52,210,127,.035)" />;
      })}

      {/* street */}
      <rect x={ROAD_X} y={GY0 - 14} width={ROAD_W} height={GY1 - GY0 + 22} rx={10} fill="#0e2016" stroke="rgba(159,231,189,.22)" />
      <line x1={ROAD_X + ROAD_W / 2} y1={GY0 - 8} x2={ROAD_X + ROAD_W / 2} y2={GY1 + 4} stroke="rgba(253,230,138,.35)" strokeDasharray="10 9" strokeWidth={2} />
      {mission.landmarks.map((l, i) => {
        const y = sy(l.d);
        return (
          <g key={l.name}>
            <rect x={ROAD_X + ROAD_W + 6} y={y - 16} width={30} height={22} rx={3} fill="#173a27" stroke="#2f6b49" />
            {[0, 1, 2].map((k) => <rect key={k} x={ROAD_X + ROAD_W + 10 + k * 8} y={y - 12} width={5} height={5} fill={(i + k) % 2 ? "#fde68a" : "rgba(253,230,138,.35)"} />)}
            <line x1={ROAD_X + ROAD_W} y1={y} x2={ROAD_X + ROAD_W + 6} y2={y} stroke="#fbbf24" strokeWidth={2} />
            <text x={ROAD_X + ROAD_W + 42} y={y + 2} fill="#fde68a" fontSize={12.5} fontWeight={600}>{l.name}</text>
          </g>
        );
      })}

      {/* graph grid */}
      {Array.from({ length: Math.floor(dMax / dStep) + 1 }, (_, i) => i * dStep).map((d) => (
        <g key={"d" + d}>
          <line x1={GX0} y1={sy(d)} x2={GX1} y2={sy(d)} stroke={d === 0 ? "rgba(159,231,189,.55)" : "rgba(159,231,189,.1)"} strokeWidth={d === 0 ? 2 : 1} />
          <text x={GX0 - 8} y={sy(d) + 4} fill="#8fd6ab" fontSize={12} textAnchor="end">{d}</text>
        </g>
      ))}
      {Array.from({ length: Math.floor(tMax / tStep) + 1 }, (_, i) => i * tStep).map((tt) => (
        <g key={"t" + tt}>
          <line x1={sx(tt)} y1={GY0} x2={sx(tt)} y2={GY1} stroke={tt === 0 ? "rgba(159,231,189,.55)" : "rgba(159,231,189,.1)"} strokeWidth={tt === 0 ? 2 : 1} />
          <text x={sx(tt)} y={GY1 + 17} fill="#8fd6ab" fontSize={12} textAnchor="middle">{tt}</text>
        </g>
      ))}
      <text x={GX1} y={GY1 + 34} fill="#8fd6ab" fontSize={12.5} textAnchor="end">time t (s)</text>
      <text x={GX0 - 8} y={GY0 - 10} fill="#8fd6ab" fontSize={12.5} textAnchor="end">d (m)</text>

      <clipPath id="rr-clip"><rect x={GX0} y={GY0 - 16} width={GX1 - GX0 + 2} height={GY1 - GY0 + 26} /></clipPath>
      <g clipPath="url(#rr-clip)">
        {mission.others.map((o) => (
          <path key={o.name} d={pathOf((tt) => moverPos(o, tt), tMax)} fill="none" stroke={o.color} strokeWidth={2.5} strokeDasharray="8 6" opacity={0.9} />
        ))}
        {run && tNow !== null && tNow > 0 && (
          <g opacity={flying ? 1 : 0.85}>
            <path d={pathOf(run.plan.pos, tNow)} fill="none" stroke={DRONE} strokeWidth={10} opacity={0.25} filter="url(#rr-glow)" />
            <path d={pathOf(run.plan.pos, tNow)} fill="none" stroke={DRONE} strokeWidth={3.5} strokeLinejoin="round" />
          </g>
        )}
        {/* checkpoints appear only as the clock reaches them */}
        {run && tNow !== null && mission.goals.map((g, i) => {
          if (tNow < g.t - 1e-9) return null;
          const res = run.results[i];
          const d = goalTarget(mission, g);
          const col = res.ok ? "#34d27f" : "#f87171";
          return (
            <g key={`${runId}-${i}`}>
              <circle className="rr-burst" cx={sx(g.t)} cy={sy(d)} r={10} fill="none" stroke={col} strokeWidth={3} style={{ transformOrigin: `${sx(g.t)}px ${sy(d)}px` }} />
              <circle cx={sx(g.t)} cy={sy(d)} r={9} fill="none" stroke={col} strokeWidth={2.5} />
              <circle cx={sx(g.t)} cy={sy(d)} r={3} fill={col} />
              {!res.ok && <line x1={sx(g.t)} y1={sy(d)} x2={sx(g.t)} y2={clampY(sy(res.got))} stroke="#f87171" strokeWidth={2} strokeDasharray="3 3" />}
              <text x={sx(g.t) + 12} y={sy(d) - 10} fill={col} fontSize={12.5} fontWeight={700}>{res.ok ? "✓" : `${short(Math.abs(res.gap))} m ${res.gap > 0 ? "high" : "low"}`}</text>
            </g>
          );
        })}
      </g>

      {/* time cursor + link from street to graph */}
      {run && tNow !== null && (
        <>
          <line x1={sx(t)} y1={GY0} x2={sx(t)} y2={GY1} stroke="rgba(240,255,246,.3)" />
          <line x1={ROAD_X + ROAD_W / 2} y1={dy} x2={sx(t)} y2={dy} stroke="rgba(52,210,127,.5)" strokeDasharray="2 5" />
          <circle cx={sx(t)} cy={dy} r={6} fill={DRONE} />
          <circle cx={sx(t)} cy={dy} r={12} fill={DRONE} opacity={0.25} filter="url(#rr-glow)" />
        </>
      )}

      {/* other movers (right lane) */}
      {mission.others.map((o) => {
        const y = clampY(sy(moverPos(o, t)));
        return (
          <g key={o.name} transform={`translate(${ROAD_X + ROAD_W / 2 + 4}, ${y})`}>
            <rect x={0} y={-9} width={16} height={18} rx={4} fill={o.color} />
            <rect x={3} y={-6} width={10} height={5} rx={1} fill="rgba(0,0,0,.35)" />
          </g>
        );
      })}

      {/* the drone (left lane) */}
      <g transform={`translate(${ROAD_X + ROAD_W / 2 - 11}, ${dy})`}>
        {flying && <circle r={16} fill={DRONE} opacity={0.18} filter="url(#rr-glow)" />}
        <line x1={-9} y1={-7} x2={9} y2={7} stroke="#d1fae5" strokeWidth={2} />
        <line x1={-9} y1={7} x2={9} y2={-7} stroke="#d1fae5" strokeWidth={2} />
        {[[-9, -7], [9, 7], [-9, 7], [9, -7]].map(([x, y], i) => (
          <g key={i} transform={`translate(${x}, ${y})`}>
            <ellipse rx={5} ry={1.6} fill="#d1fae5" opacity={0.85}>
              {flying && <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="0.18s" repeatCount="indefinite" />}
            </ellipse>
          </g>
        ))}
        <circle r={4.5} fill={DRONE} />
        <rect x={-3.5} y={7} width={7} height={6} rx={1} fill="#c8a165" stroke="#8b6b3d" strokeWidth={0.8} />
      </g>

      {!run && (
        <text x={(GX0 + GX1) / 2} y={(GY0 + GY1) / 2} fill="rgba(240,255,246,.35)" fontSize={15} textAnchor="middle">
          Your flight will be drawn here
        </text>
      )}
    </svg>
  );
}

function Batteries({ left, total }: { left: number; total: number }) {
  return (
    <div aria-label={`${left} of ${total} batteries left`} style={{ display: "flex", gap: 4 }}>
      {Array.from({ length: total }, (_, i) => (
        <span key={i} style={{ width: 20, height: 11, borderRadius: 2, border: "1.5px solid", borderColor: i < left ? "#34d27f" : "rgba(255,255,255,.25)", background: i < left ? "#34d27f" : "transparent", position: "relative", display: "inline-block" }} />
      ))}
    </div>
  );
}

function Hud({ label, value, pop }: { label: string; value: string; pop?: number }) {
  return (
    <div style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(159,231,189,.22)", borderRadius: 10, padding: "5px 12px", minWidth: 72, textAlign: "center" }}>
      <div style={{ fontSize: 10.5, letterSpacing: ".1em", color: "#8fd6ab", fontWeight: 700 }}>{label.toUpperCase()}</div>
      <div key={pop} className={pop ? "rr-bump" : undefined} style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 18, fontWeight: 800, color: "#f0fff6" }}>{value}</div>
    </div>
  );
}

const CSS = `
.rr-grid{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(0,1fr);gap:24px;align-items:start}
@media (max-width:880px){.rr-grid{grid-template-columns:minmax(0,1fr)}}
.rr-overlay{position:absolute;inset:0;display:grid;place-items:center;border-radius:16px}
.rr-count{font-family:Fraunces,serif;font-size:110px;font-weight:700;color:#f0fff6;text-shadow:0 0 40px rgba(52,210,127,.8);animation:rrCount .5s ease-out both}
@keyframes rrCount{from{transform:scale(1.8);opacity:0}to{transform:scale(1);opacity:1}}
.rr-burst{animation:rrBurst .8s ease-out both}
@keyframes rrBurst{from{transform:scale(1);opacity:1}to{transform:scale(3.2);opacity:0}}
.rr-pop{animation:rrPop .35s ease-out both}
@keyframes rrPop{from{opacity:0;transform:scale(.96)}to{opacity:1;transform:none}}
.rr-stars{font-size:54px;letter-spacing:6px;margin:6px 0}
.rr-stars span{display:inline-block;animation:rrStar .45s cubic-bezier(.2,1.6,.4,1) both}
@keyframes rrStar{from{transform:scale(0) rotate(-40deg)}to{transform:none}}
.rr-bump{animation:rrBump .4s ease-out}
@keyframes rrBump{0%{transform:scale(1)}40%{transform:scale(1.3);color:#34d27f}100%{transform:scale(1)}}
.rr-gain{position:fixed;right:24px;top:90px;z-index:50;background:#34d27f;color:#04130a;font-weight:800;padding:8px 14px;border-radius:10px;animation:rrGain 1.6s ease-out both;pointer-events:none}
@keyframes rrGain{0%{opacity:0;transform:translateY(10px)}15%{opacity:1;transform:none}75%{opacity:1}100%{opacity:0;transform:translateY(-14px)}}
`;

const shell: React.CSSProperties = { marginTop: 16, borderRadius: 22, padding: "22px clamp(14px, 3vw, 28px)", color: "#e7f6ec", background: "radial-gradient(900px 420px at 80% -30%,#0d3a23,#07150d)", border: "1px solid #14653b", boxShadow: "0 20px 50px rgba(13,92,48,.25)" };
const levelBtn: React.CSSProperties = { border: "1px solid", borderRadius: 12, padding: "5px 12px", fontSize: 14, cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", lineHeight: 1.2 };
const card: React.CSSProperties = { border: "1.5px solid", borderRadius: 14, padding: "12px 14px", marginBottom: 12, background: "rgba(255,255,255,.04)", transition: "opacity .2s, border-color .2s" };
const stepLabel: React.CSSProperties = { fontSize: 13, fontWeight: 800, letterSpacing: ".06em", color: "#9fe7bd", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 8 };
const stepNum: React.CSSProperties = { display: "inline-grid", placeItems: "center", width: 22, height: 22, borderRadius: 999, background: "#34d27f", color: "#04130a", fontSize: 12.5 };
const inputStyle: React.CSSProperties = { flex: 1, minWidth: 0, background: "rgba(255,255,255,.07)", color: "#f0fff6", border: "1px solid rgba(159,231,189,.3)", borderRadius: 10, padding: "10px 12px", fontFamily: "JetBrains Mono, monospace", fontSize: 16, outline: "none" };
const boxStyle: React.CSSProperties = { width: 64, textAlign: "center", background: "rgba(255,255,255,.08)", color: "#f0fff6", border: "2px solid", borderRadius: 10, padding: "8px 6px", fontFamily: "JetBrains Mono, monospace", fontSize: 20, outline: "none" };
const iconBtn: React.CSSProperties = { background: "none", border: "1px solid rgba(159,231,189,.25)", color: "#bfe9cf", borderRadius: 8, width: 36, fontSize: 18, cursor: "pointer", flex: "none" };
const ghostBtn: React.CSSProperties = { background: "none", border: "1px dashed rgba(159,231,189,.4)", color: "#9fe7bd", borderRadius: 10, padding: "8px 14px", fontWeight: 700, fontSize: 13.5, cursor: "pointer" };
const linkBtn: React.CSSProperties = { background: "none", border: "none", color: "#93c5fd", padding: 0, fontSize: 13.5, cursor: "pointer", textDecoration: "underline" };
const primaryBtn: React.CSSProperties = { background: "linear-gradient(135deg,#1f8a4c,#34d27f)", color: "#04130a", border: "none", borderRadius: 12, padding: "12px 28px", fontWeight: 800, fontSize: 16, cursor: "pointer" };
const secondaryBtn: React.CSSProperties = { background: "rgba(255,255,255,.08)", color: "#f0fff6", border: "1px solid rgba(159,231,189,.28)", borderRadius: 12, padding: "12px 18px", fontWeight: 700, fontSize: 14.5, cursor: "pointer" };
const choiceBtn: React.CSSProperties = { color: "#f0fff6", border: "1px solid rgba(159,231,189,.35)", borderRadius: 12, padding: "12px 18px", fontWeight: 800, fontSize: 18, fontFamily: "JetBrains Mono, monospace", cursor: "pointer", minWidth: 90 };
const note: React.CSSProperties = { marginTop: 12, padding: "10px 13px", borderRadius: 10, fontSize: 14, lineHeight: 1.55, border: "1px solid", color: "#f0fff6" };
const chip: React.CSSProperties = { fontSize: 12, fontWeight: 700, color: "#9fe7bd", background: "rgba(52,210,127,.12)", border: "1px solid rgba(52,210,127,.3)", borderRadius: 999, padding: "3px 10px" };
const code: React.CSSProperties = { fontFamily: "JetBrains Mono, monospace", background: "rgba(255,255,255,.08)", padding: "1px 5px", borderRadius: 5, color: "#f0fff6" };
const th: React.CSSProperties = { textAlign: "left", padding: "4px 12px 4px 0", color: "#8fd6ab", fontWeight: 700 };
const td: React.CSSProperties = { padding: "4px 14px", borderLeft: "1px solid rgba(159,231,189,.25)", color: "#f0fff6", textAlign: "center" };
