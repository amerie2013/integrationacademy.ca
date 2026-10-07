"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import { SiteHeader } from "./SiteHeader";
import { supabase } from "../lib/supabase";
import { isCorrect, type Q } from "../lib/foundations";

// Shared engine for the Foundations games (basic arithmetic fluency).
// One game = one skill. The engine handles: typed answers on a number pad,
// a calm (no-buzzer) wrong-answer reveal, adaptive levels, re-queuing missed
// questions, and saving the finished session so teachers can see it.

type Props = {
  id: string;
  title: string;
  glyph: string;
  intro: string;
  levels: { name: string; blurb: string }[];
  nextQuestion: (level: number) => Q; // level is 0-based
  onAnswer?: (q: Q, ok: boolean, ms: number) => void;
  autoSubmit?: boolean; // submit as soon as the typed length matches the answer
  seconds?: number;
  extra?: ReactNode;
  tip: string;
};

const WINDOW = 10; // answers per level check
const UP_AT = 8; // correct out of WINDOW to move up
const DOWN_AT = 4; // this many or fewer to move down

export function FoundationsGame(p: Props) {
  const ROUND = p.seconds ?? 60;
  const maxLevel = p.levels.length - 1;

  const [phase, setPhase] = useState<"idle" | "playing" | "reveal" | "over">("idle");
  const [timeLeft, setTimeLeft] = useState(ROUND);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [total, setTotal] = useState(0);
  const [level, setLevel] = useState(0);
  const [startLevel, setStartLevel] = useState(0);
  const [best, setBest] = useState(0);
  const [input, setInput] = useState("");
  const [q, setQ] = useState<Q | null>(null);
  const [flash, setFlash] = useState<"ok" | "no" | null>(null);
  const [toast, setToast] = useState("");
  const [saveState, setSaveState] = useState<"" | "saved" | "guest" | "error">("");
  const [review, setReview] = useState<{ q: string; a: string }[]>([]);

  const levelRef = useRef(0);
  const queue = useRef<Q[]>([]);
  const sinceRetry = useRef(0);
  const win = useRef({ n: 0, c: 0 });
  const qStart = useRef(0);
  const times = useRef<number[]>([]);
  const missedLog = useRef<{ q: string; a: string; key: string }[]>([]);
  const saved = useRef(false);
  const P = useRef(p);
  P.current = p;
  const streakRef = useRef(0);
  const latest = useRef({ phase, q, input });
  latest.current = { phase, q, input };
  const stats = useRef({ score: 0, correct: 0, total: 0 });
  stats.current = { score, correct, total };

  useEffect(() => {
    try {
      setBest(Number(localStorage.getItem(`ia_fnd_${p.id}_best`) || 0));
      const lv = Math.min(maxLevel, Math.max(0, Number(localStorage.getItem(`ia_fnd_${p.id}_level`) || 1) - 1));
      setStartLevel(lv);
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [p.id]);

  const draw = useCallback((prevKey?: string): Q => {
    if (queue.current.length && sinceRetry.current >= 3) {
      sinceRetry.current = 0;
      return queue.current.shift()!;
    }
    sinceRetry.current++;
    let next = P.current.nextQuestion(levelRef.current);
    for (let i = 0; i < 6 && next.key === prevKey; i++) next = P.current.nextQuestion(levelRef.current);
    return next;
  }, []);

  const advance = useCallback(() => {
    setInput("");
    const next = draw(latest.current.q?.key);
    setQ(next);
    qStart.current = Date.now();
    setPhase("playing");
  }, [draw]);

  function start(lv: number) {
    levelRef.current = lv;
    setLevel(lv);
    setStartLevel(lv);
    queue.current = []; sinceRetry.current = 0; win.current = { n: 0, c: 0 };
    times.current = []; missedLog.current = []; saved.current = false; streakRef.current = 0;
    setScore(0); setStreak(0); setCorrect(0); setTotal(0); setTimeLeft(ROUND);
    setFlash(null); setToast(""); setSaveState(""); setReview([]); setInput("");
    setQ(p.nextQuestion(lv));
    qStart.current = Date.now();
    setPhase("playing");
  }

  // countdown (paused while a wrong answer is on screen)
  useEffect(() => {
    if (phase !== "playing") return;
    if (timeLeft <= 0) { setPhase("over"); return; }
    const id = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(id);
  }, [phase, timeLeft]);

  // finish: persist best/level and save the session
  useEffect(() => {
    if (phase !== "over" || saved.current) return;
    saved.current = true;
    const s = stats.current;
    try {
      const nb = Math.max(Number(localStorage.getItem(`ia_fnd_${p.id}_best`) || 0), s.score);
      localStorage.setItem(`ia_fnd_${p.id}_best`, String(nb));
      setBest(nb);
      localStorage.setItem(`ia_fnd_${p.id}_level`, String(levelRef.current + 1));
    } catch {}
    const seen = new Set<string>();
    const missed = missedLog.current.filter((m) => (seen.has(m.key) ? false : (seen.add(m.key), true))).slice(0, 15);
    setReview(missed.slice(0, 6));
    const avg = times.current.length ? Math.round(times.current.reduce((a, b) => a + b, 0) / times.current.length) : null;
    (async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) { setSaveState("guest"); return; }
        if (s.total === 0) return;
        const { error } = await supabase.from("game_attempts").insert({
          student_id: session.user.id, game: p.id, level: levelRef.current + 1, score: s.score,
          correct: s.correct, total: s.total, avg_ms: avg, missed: missed.map((m) => ({ q: m.q, a: m.a })),
        });
        setSaveState(error ? "error" : "saved");
      } catch { setSaveState("error"); }
    })();
  }, [phase, p.id]);

  function submit(override?: string) {
    const { phase: ph, q: cq, input: inp } = latest.current;
    const value = override ?? inp;
    if (ph !== "playing" || !cq || !value) return;
    const ms = Math.min(Date.now() - qStart.current, 20000);
    const ok = isCorrect(value, cq);
    P.current.onAnswer?.(cq, ok, ms);
    times.current.push(ms);
    setTotal((t) => t + 1);

    const w = win.current; w.n++; if (ok) w.c++;
    if (w.n >= WINDOW) {
      let lv = levelRef.current;
      if (w.c >= UP_AT && lv < maxLevel) lv++;
      else if (w.c <= DOWN_AT && lv > 0) lv--;
      if (lv !== levelRef.current) {
        setToast(lv > levelRef.current ? `Level up — ${P.current.levels[lv].name}` : `Back to ${P.current.levels[lv].name} to build it up`);
        levelRef.current = lv; setLevel(lv);
        queue.current = [];
        setTimeout(() => setToast(""), 2200);
      }
      win.current = { n: 0, c: 0 };
    }

    if (ok) {
      const gain = 10 + Math.min(streakRef.current, 10) * 2;
      setScore((s) => s + gain);
      streakRef.current++;
      setStreak(streakRef.current);
      setCorrect((c) => c + 1);
      setFlash("ok");
      setTimeout(() => setFlash(null), 200);
      advance();
    } else {
      streakRef.current = 0;
      setStreak(0);
      setFlash("no");
      setTimeout(() => setFlash(null), 200);
      missedLog.current.push({ q: cq.prompt, a: cq.answer.replace(/R/i, " R "), key: cq.key });
      if (!queue.current.some((x) => x.key === cq.key)) queue.current.push(cq);
      setPhase("reveal");
    }
  }

  function press(k: string) {
    const { phase: ph, q: cq, input: inp } = latest.current;
    if (ph === "reveal") { if (k === "Enter") advance(); return; }
    if (ph !== "playing" || !cq) return;
    if (k === "Enter") return submit();
    if (k === "Backspace") return setInput(inp.slice(0, -1));
    if (inp.length >= 9) return;
    if (/^\d$/.test(k)) {
      const next = inp + k;
      setInput(next);
      if (P.current.autoSubmit && !cq.keys && next.length === cq.answer.length) submit(next);
    } else if (k === "-" && cq.keys?.neg && inp === "") setInput("-");
    else if (k === "." && cq.keys?.dec && !inp.includes(".")) setInput(inp + (inp === "" ? "0." : "."));
    else if ((k === "r" || k === "R") && cq.keys?.rem && /^\d+$/.test(inp)) setInput(inp + "R");
  }

  useEffect(() => {
    if (phase !== "playing" && phase !== "reveal") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (/^\d$/.test(e.key) || ["-", ".", "r", "R", "Enter", "Backspace"].includes(e.key)) {
        e.preventDefault();
        press(e.key === "−" ? "-" : e.key);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  // after a miss, move on by itself after a short, calm look at the answer
  useEffect(() => {
    if (phase !== "reveal") return;
    const id = setTimeout(() => advance(), 2600);
    return () => clearTimeout(id);
  }, [phase, advance]);

  const shown = input.replace(/-/g, "−").replace(/R/g, " R ");
  const accuracy = total ? Math.round((correct / total) * 100) : 0;

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "36px 24px 60px" }}>
        <Link href="/games?tab=foundations" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← All games</Link>

        <div style={{ position: "relative", overflow: "hidden", marginTop: 16, borderRadius: 22, padding: 28, color: "#e7f6ec", background: "radial-gradient(700px 360px at 80% -30%,#0d3a23,#07150d)", border: "1px solid #14653b", boxShadow: flash === "ok" ? "0 0 0 3px #34d27f" : flash === "no" ? "0 0 0 3px #f59e0b" : "0 20px 50px rgba(13,92,48,.25)", transition: "box-shadow .15s ease" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 26, fontWeight: 700, margin: 0, color: "#f0fff6" }}>{p.glyph} {p.title}</h1>
            <span style={{ fontSize: 13, color: "#8fd6ab", fontWeight: 700 }}>Best {best}</span>
          </div>

          {(phase === "playing" || phase === "reveal") && q && (
            <>
              <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
                <Stat label="Time" value={`${timeLeft}s`} warn={timeLeft <= 10} />
                <Stat label="Score" value={String(score)} />
                <Stat label="Streak" value={`${streak}×`} hot={streak >= 3} />
                <Stat label="Level" value={String(level + 1)} />
              </div>
              <div style={{ height: 6, background: "rgba(255,255,255,.12)", borderRadius: 99, marginTop: 14, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${(timeLeft / ROUND) * 100}%`, background: "linear-gradient(90deg,#1f8a4c,#34d27f)", transition: "width 1s linear" }} />
              </div>
              <div style={{ minHeight: 22, textAlign: "center", marginTop: 8, fontSize: 13, fontWeight: 700, color: "#9fe7bd" }}>{toast || p.levels[level].name}</div>

              <div style={{ textAlign: "center", margin: "10px 0 6px" }}>
                <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "clamp(30px,9vw,46px)", fontWeight: 700, color: "#f0fff6" }}>{q.prompt} = ?</div>
                {q.sub && <div style={{ color: "#8fd6ab", fontSize: 14, marginTop: 6 }}>{q.sub}</div>}
              </div>

              {phase === "reveal" ? (
                <div style={{ margin: "14px auto 6px", maxWidth: 420, textAlign: "center", background: "rgba(245,158,11,.1)", border: "1px solid rgba(245,158,11,.4)", borderRadius: 14, padding: "14px 16px" }}>
                  <div style={{ color: "#fcd34d", fontWeight: 800, fontSize: 13, letterSpacing: ".06em", textTransform: "uppercase" }}>Answer</div>
                  <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 30, fontWeight: 800, color: "#fff7e0", margin: "4px 0" }}>{q.answer.replace(/-/g, "−").replace(/R/i, " R ")}</div>
                  {q.explain && <div style={{ color: "#fde7b0", fontSize: 14, lineHeight: 1.5 }}>{q.explain}</div>}
                  <button onClick={advance} style={{ ...primaryBtn, marginTop: 12, padding: "10px 24px", fontSize: 15 }}>Got it →</button>
                </div>
              ) : (
                <>
                  <div style={{ margin: "12px auto 14px", maxWidth: 320, minHeight: 58, textAlign: "center", background: "rgba(255,255,255,.07)", border: "1px solid rgba(159,231,189,.3)", borderRadius: 14, padding: "10px 14px", fontFamily: "JetBrains Mono, monospace", fontSize: 32, fontWeight: 700, color: input ? "#f0fff6" : "rgba(240,255,246,.3)" }}>
                    {shown || "?"}
                  </div>
                  <NumPad extra={q.keys?.neg ? "-" : q.keys?.dec ? "." : q.keys?.rem ? "R" : null} onKey={press} />
                </>
              )}
            </>
          )}

          {phase === "idle" && (
            <div style={{ textAlign: "center", padding: "22px 0 6px" }}>
              <p style={panelText}>{p.intro}</p>
              <p style={{ ...panelText, fontSize: 14, color: "#8fd6ab", marginTop: -8 }}>{ROUND} seconds. No penalty for wrong answers — you just see the answer and it comes back later.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", margin: "0 auto 20px", maxWidth: 520 }}>
                {p.levels.map((l, i) => (
                  <button key={l.name} onClick={() => setStartLevel(i)} title={l.blurb} style={{ ...chip, ...(startLevel === i ? chipOn : {}) }}>
                    {i + 1}. {l.name}
                  </button>
                ))}
              </div>
              <div style={{ color: "#8fd6ab", fontSize: 13, marginBottom: 16 }}>{p.levels[startLevel]?.blurb}</div>
              <button onClick={() => start(startLevel)} style={primaryBtn}>Start →</button>
              <div style={{ marginTop: 14, fontSize: 13 }}>
                <Link href="/games/skill-check" style={{ color: "#9fe7bd" }}>Not sure where to start? Take the 3-minute Skill Check</Link>
              </div>
            </div>
          )}

          {phase === "over" && (
            <div style={{ textAlign: "center", padding: "22px 0 6px" }}>
              <div style={{ fontSize: 48, fontWeight: 800, color: "#34d27f", fontFamily: "Fraunces, serif" }}>{score}</div>
              <p style={panelText}>
                {correct} of {total} correct ({accuracy}%) · reached level {level + 1}: {p.levels[level].name}
                {score >= best && score > 0 ? " · 🏆 new best!" : ""}
              </p>
              {review.length > 0 && (
                <div style={{ margin: "0 auto 18px", maxWidth: 380, textAlign: "left", background: "rgba(255,255,255,.06)", border: "1px solid rgba(159,231,189,.2)", borderRadius: 14, padding: "12px 16px" }}>
                  <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: ".06em", textTransform: "uppercase", color: "#8fd6ab", marginBottom: 6 }}>Worth another look</div>
                  {review.map((r, i) => (
                    <div key={i} style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 15, color: "#e7f6ec", padding: "3px 0" }}>{r.q} = {r.a.replace(/-/g, "−")}</div>
                  ))}
                </div>
              )}
              <button onClick={() => start(level)} style={primaryBtn}>Play again</button>
              <div style={{ color: "#8fd6ab", fontSize: 12.5, marginTop: 12 }}>
                {saveState === "saved" && <>Saved to your progress. <Link href="/games/my-stats" style={{ color: "#9fe7bd" }}>See my stats</Link></>}
                {saveState === "guest" && <>Playing as a guest — <Link href="/login" style={{ color: "#9fe7bd" }}>sign in</Link> to save your progress.</>}
                {saveState === "error" && "Couldn't save this round, but your best score is kept on this device."}
              </div>
            </div>
          )}
        </div>

        {p.extra}

        <p style={{ color: "#94a3b8", fontSize: 13, marginTop: 16, textAlign: "center" }}>{p.tip}</p>
      </div>
    </main>
  );
}

export function NumPad({ extra, onKey }: { extra: string | null; onKey: (k: string) => void }) {
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return (
    <div style={{ maxWidth: 320, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
        {keys.map((k) => <button key={k} onClick={() => onKey(k)} style={padBtn}>{k}</button>)}
        {extra ? <button onClick={() => onKey(extra)} style={{ ...padBtn, color: "#9fe7bd" }}>{extra === "-" ? "−" : extra}</button> : <span />}
        <button onClick={() => onKey("0")} style={padBtn}>0</button>
        <button onClick={() => onKey("Backspace")} style={{ ...padBtn, fontSize: 18 }} aria-label="Delete">⌫</button>
      </div>
      <button onClick={() => onKey("Enter")} style={{ ...primaryBtn, width: "100%", marginTop: 10 }}>Check</button>
    </div>
  );
}

export function Stat({ label, value, warn, hot }: { label: string; value: string; warn?: boolean; hot?: boolean }) {
  return (
    <div style={{ flex: 1, background: "rgba(255,255,255,.06)", border: "1px solid rgba(159,231,189,.18)", borderRadius: 12, padding: "8px 8px", textAlign: "center" }}>
      <div style={{ fontSize: 19, fontWeight: 800, color: warn ? "#fca5a5" : hot ? "#34d27f" : "#f0fff6" }}>{value}</div>
      <div style={{ fontSize: 11, color: "#8fd6ab", fontWeight: 600 }}>{label}</div>
    </div>
  );
}

export const panelText: CSSProperties = { color: "#bfe9cf", fontSize: 16, lineHeight: 1.6, margin: "0 auto 20px", maxWidth: 440 };
export const primaryBtn: CSSProperties = { background: "linear-gradient(135deg,#1f8a4c,#34d27f)", color: "#04130a", border: "none", borderRadius: 12, padding: "13px 30px", fontWeight: 800, fontSize: 16, cursor: "pointer" };
const padBtn: CSSProperties = { background: "rgba(255,255,255,.08)", color: "#f0fff6", border: "1px solid rgba(159,231,189,.28)", borderRadius: 12, padding: "14px 0", fontWeight: 800, fontSize: 22, fontFamily: "JetBrains Mono, monospace", cursor: "pointer", touchAction: "manipulation" };
const chip: CSSProperties = { background: "rgba(255,255,255,.06)", color: "#cdeedb", border: "1px solid rgba(159,231,189,.25)", borderRadius: 999, padding: "7px 14px", fontSize: 13, fontWeight: 700, cursor: "pointer" };
const chipOn: CSSProperties = { background: "rgba(52,210,127,.2)", color: "#f0fff6", border: "1px solid #34d27f" };
