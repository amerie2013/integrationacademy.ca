"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SiteHeader } from "../../../components/SiteHeader";
import { NumPad, Stat, panelText, primaryBtn } from "../../../components/FoundationsGame";
import { supabase } from "../../../lib/supabase";
import { CART_LEVELS, CHANGE_LEVELS, DIVIDE_LEVELS, SIGN_LEVELS, factQ, isCorrect, rint, type Level, type Q } from "../../../lib/foundations";

// A 3-minute placement check: 3 questions each on adding, subtracting,
// multiplying, dividing and integers. No feedback while answering (it's a
// check, not a game) — the results page says where to start in each game.

type Skill = { id: string; label: string; game: string; gameTitle: string; levels: { name: string }[]; make: () => Q[] };

const fromLevels = (lv: Level[], idx: number[]) => () => idx.map((i) => lv[i].gen());

const SKILLS: Skill[] = [
  { id: "add", label: "Adding", game: "cart-rush", gameTitle: "Cart Rush", levels: CART_LEVELS, make: fromLevels(CART_LEVELS, [1, 2, 3]) },
  { id: "subtract", label: "Subtracting", game: "change-up", gameTitle: "Change Up", levels: CHANGE_LEVELS, make: fromLevels(CHANGE_LEVELS, [1, 2, 3]) },
  {
    id: "multiply", label: "Multiplying", game: "fact-heat", gameTitle: "Fact Heat",
    levels: [{ name: "Easy tables" }, { name: "Add 3 and 4" }, { name: "Add 6 and 7" }, { name: "Add 8 and 9" }, { name: "All 12 tables" }],
    make: () => [factQ(rint(3, 5), rint(6, 9)), factQ(rint(6, 9), rint(6, 9)), factQ(rint(7, 12), rint(7, 12))],
  },
  { id: "divide", label: "Dividing", game: "split-the-bill", gameTitle: "Split the Bill", levels: DIVIDE_LEVELS, make: fromLevels(DIVIDE_LEVELS, [0, 1, 2]) },
  { id: "integers", label: "Integers", game: "sign-flip", gameTitle: "Sign Flip", levels: SIGN_LEVELS, make: fromLevels(SIGN_LEVELS, [0, 2, 3]) },
];

type Item = { skill: Skill; q: Q };

export default function SkillCheck() {
  const [phase, setPhase] = useState<"idle" | "playing" | "done">("idle");
  const [items, setItems] = useState<Item[]>([]);
  const [idx, setIdx] = useState(0);
  const [input, setInput] = useState("");
  const [scores, setScores] = useState<Record<string, number>>({});
  const [saveState, setSaveState] = useState<"" | "saved" | "guest" | "error">("");

  const latest = useRef({ phase, items, idx, input });
  latest.current = { phase, items, idx, input };
  const qStart = useRef(0);
  const times = useRef<number[]>([]);
  const missed = useRef<{ q: string; a: string }[]>([]);
  const scoreRef = useRef<Record<string, number>>({});

  function start() {
    times.current = []; missed.current = []; scoreRef.current = {};
    setScores({}); setSaveState(""); setInput(""); setIdx(0);
    setItems(SKILLS.flatMap((s) => s.make().map((q) => ({ skill: s, q }))));
    qStart.current = Date.now();
    setPhase("playing");
  }

  function finish() {
    const sc = scoreRef.current;
    setScores({ ...sc });
    SKILLS.forEach((s) => {
      const n = sc[s.id] ?? 0;
      const level = n >= 3 ? 3 : n === 2 ? 2 : 1;
      try { localStorage.setItem(`ia_fnd_${s.game}_level`, String(level)); } catch {}
    });
    setPhase("done");
    const correct = Object.values(sc).reduce((a, b) => a + b, 0);
    const avg = times.current.length ? Math.round(times.current.reduce((a, b) => a + b, 0) / times.current.length) : null;
    (async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) { setSaveState("guest"); return; }
        const { error } = await supabase.from("game_attempts").insert({
          student_id: session.user.id, game: "skill-check", level: 1, score: correct * 10, correct, total: SKILLS.length * 3,
          avg_ms: avg, missed: missed.current.slice(0, 15),
        });
        setSaveState(error ? "error" : "saved");
      } catch { setSaveState("error"); }
    })();
  }

  function press(k: string) {
    const { phase: ph, items: its, idx: i, input: inp } = latest.current;
    if (ph !== "playing") return;
    const cur = its[i];
    if (!cur) return;
    if (k === "Enter") {
      if (!inp) return;
      times.current.push(Math.min(Date.now() - qStart.current, 20000));
      if (isCorrect(inp, cur.q)) scoreRef.current[cur.skill.id] = (scoreRef.current[cur.skill.id] ?? 0) + 1;
      else missed.current.push({ q: cur.q.prompt, a: cur.q.answer.replace(/R/i, " R ") });
      if (i + 1 >= its.length) return finish();
      setIdx(i + 1); setInput(""); qStart.current = Date.now();
      return;
    }
    if (k === "Backspace") return setInput(inp.slice(0, -1));
    if (inp.length >= 9) return;
    if (/^\d$/.test(k)) setInput(inp + k);
    else if (k === "-" && cur.q.keys?.neg && inp === "") setInput("-");
    else if (k === "." && cur.q.keys?.dec && !inp.includes(".")) setInput(inp + (inp === "" ? "0." : "."));
    else if ((k === "r" || k === "R") && cur.q.keys?.rem && /^\d+$/.test(inp)) setInput(inp + "R");
  }

  useEffect(() => {
    if (phase !== "playing") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (/^\d$/.test(e.key) || ["-", ".", "r", "R", "Enter", "Backspace"].includes(e.key)) { e.preventDefault(); press(e.key); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const cur = items[idx];
  const shown = input.replace(/-/g, "−").replace(/R/g, " R ");
  const total = SKILLS.length * 3;

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "36px 24px 60px" }}>
        <Link href="/games?tab=foundations" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← All games</Link>

        <div style={{ marginTop: 16, borderRadius: 22, padding: 28, color: "#e7f6ec", background: "radial-gradient(700px 360px at 80% -30%,#0d3a23,#07150d)", border: "1px solid #14653b", boxShadow: "0 20px 50px rgba(13,92,48,.25)" }}>
          <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 26, fontWeight: 700, margin: 0, color: "#f0fff6" }}>Skill Check</h1>

          {phase === "idle" && (
            <div style={{ textAlign: "center", padding: "22px 0 6px" }}>
              <p style={panelText}>{total} quick questions — adding, subtracting, multiplying, dividing and integers. You won&apos;t see right or wrong as you go. At the end we tell you where to start in each game.</p>
              <p style={{ ...panelText, fontSize: 14, color: "#8fd6ab", marginTop: -8 }}>About 3 minutes. Take your time — this isn&apos;t graded.</p>
              <button onClick={start} style={primaryBtn}>Begin →</button>
            </div>
          )}

          {phase === "playing" && cur && (
            <>
              <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
                <Stat label="Question" value={`${idx + 1} / ${total}`} />
                <Stat label="Skill" value={cur.skill.label} />
              </div>
              <div style={{ height: 6, background: "rgba(255,255,255,.12)", borderRadius: 99, marginTop: 14, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${(idx / total) * 100}%`, background: "linear-gradient(90deg,#1f8a4c,#34d27f)", transition: "width .3s ease" }} />
              </div>
              <div style={{ textAlign: "center", margin: "22px 0 6px" }}>
                <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "clamp(30px,9vw,46px)", fontWeight: 700, color: "#f0fff6" }}>{cur.q.prompt} = ?</div>
                {cur.q.sub && <div style={{ color: "#8fd6ab", fontSize: 14, marginTop: 6 }}>{cur.q.sub}</div>}
              </div>
              <div style={{ margin: "12px auto 14px", maxWidth: 320, minHeight: 58, textAlign: "center", background: "rgba(255,255,255,.07)", border: "1px solid rgba(159,231,189,.3)", borderRadius: 14, padding: "10px 14px", fontFamily: "JetBrains Mono, monospace", fontSize: 32, fontWeight: 700, color: input ? "#f0fff6" : "rgba(240,255,246,.3)" }}>
                {shown || "?"}
              </div>
              <NumPad extra={cur.q.keys?.neg ? "-" : cur.q.keys?.dec ? "." : cur.q.keys?.rem ? "R" : null} onKey={press} />
            </>
          )}

          {phase === "done" && (
            <div style={{ padding: "18px 0 4px" }}>
              <p style={{ ...panelText, textAlign: "center" }}>Here&apos;s where to start. Each game is already set to the level shown.</p>
              <div style={{ display: "grid", gap: 10 }}>
                {SKILLS.map((s) => {
                  const n = scores[s.id] ?? 0;
                  const level = n >= 3 ? 3 : n === 2 ? 2 : 1;
                  return (
                    <Link key={s.id} href={`/games/${s.game}`} style={{ textDecoration: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, background: "rgba(255,255,255,.06)", border: "1px solid rgba(159,231,189,.22)", borderRadius: 14, padding: "12px 16px" }}>
                      <div>
                        <div style={{ fontWeight: 800, color: "#f0fff6" }}>{s.label} <span style={{ color: n === 3 ? "#34d27f" : n === 2 ? "#fcd34d" : "#fca5a5", fontWeight: 700, fontSize: 13 }}>· {n}/3</span></div>
                        <div style={{ fontSize: 13, color: "#8fd6ab" }}>{s.gameTitle} — start at level {level}: {s.levels[level - 1].name}</div>
                      </div>
                      <span style={{ color: "#9fe7bd", fontWeight: 800 }}>Play →</span>
                    </Link>
                  );
                })}
              </div>
              <div style={{ textAlign: "center", marginTop: 18 }}>
                <button onClick={start} style={{ ...primaryBtn, background: "transparent", color: "#9fe7bd", border: "1px solid rgba(159,231,189,.4)", padding: "10px 22px", fontSize: 14 }}>Retake</button>
              </div>
              <div style={{ color: "#8fd6ab", fontSize: 12.5, marginTop: 12, textAlign: "center" }}>
                {saveState === "saved" && "Saved to your progress."}
                {saveState === "guest" && <>Playing as a guest — <Link href="/login" style={{ color: "#9fe7bd" }}>sign in</Link> to save your progress.</>}
                {saveState === "error" && "Couldn't save the result, but your starting levels are set on this device."}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
