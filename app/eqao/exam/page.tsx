"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabase";
import { SiteHeader } from "../../../components/SiteHeader";
import { EqaoFigure } from "../../../components/EqaoFigure";
import { EqaoFormulaSheet } from "../../../components/EqaoFormulaSheet";
import { CalculatorPad } from "../../../components/CalculatorPad";
import { EqaoAnswerInput, EqaoCorrectAnswer, EqaoPrompt } from "../../../components/EqaoQuestion";
import { ITEM_TYPE_LABEL, percentToLevel, strandMeta, toQuestion, STRANDS } from "../../../lib/eqao";
import { Generated, generateStage } from "../../../lib/eqaoGen";
import { GradeResult, gradeAttempt } from "../../../lib/quiz";

type Phase = "loading" | "intro" | "playing" | "between" | "results";
type Tool = null | "calc" | "graph" | "formula";

// Matches the real EQAO Grade 9 assessment: 2 sessions, ~60 min each, ~25
// scored questions per session (≈50 total; the real test adds 4 unscored
// field-test items for 54).
const STAGE1_N = 12;
const STAGE2_N = 13;
const SESSION_MINUTES = 60;
const SESSIONS = ["A", "B"] as const;

const LEVEL_LABEL: Record<number, string> = {
  1: "Below the provincial standard",
  2: "Approaching the provincial standard",
  3: "At the provincial standard",
  4: "Above the provincial standard",
};

export default function EqaoExamPage() {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("loading");
  const [userId, setUserId] = useState<string | null>(null);

  const [sIdx, setSIdx] = useState(0);
  const [stage, setStage] = useState<1 | 2>(1);
  const [stageQs, setStageQs] = useState<Generated[]>([]);
  const [allQs, setAllQs] = useState<Generated[]>([]);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null);
  const [overall, setOverall] = useState<GradeResult | null>(null);
  const [level, setLevel] = useState(3);
  const [tool, setTool] = useState<Tool>(null);
  const startedAt = useRef(0);
  const timedOut = useRef(false);
  const usedTemplates = useRef<Set<string>>(new Set()); // every template used so far this exam

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return router.push("/login");
      setUserId(session.user.id);
      setPhase("intro");
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // session timer (spans both stages of a session)
  useEffect(() => {
    if (phase !== "playing" || secondsLeft == null) return;
    if (secondsLeft <= 0) { if (!timedOut.current) { timedOut.current = true; finishSession(); } return; }
    const t = setTimeout(() => setSecondsLeft((s) => (s == null ? s : s - 1)), 1000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, secondsLeft]);

  function startExam() {
    setAnswers({});
    setAllQs([]);
    setOverall(null);
    setSIdx(0);
    usedTemplates.current = new Set();
    beginSession();
  }

  function beginSession() {
    timedOut.current = false;
    setStage(1);
    const qs = generateStage("medium", STAGE1_N, usedTemplates.current);
    qs.forEach((q) => usedTemplates.current.add(q.templateId));
    setStageQs(qs);
    setAllQs((a) => [...a, ...qs]);
    setSecondsLeft(SESSION_MINUTES * 60);
    startedAt.current = startedAt.current || Date.now();
    setPhase("playing");
    window.scrollTo({ top: 0 });
  }

  function submitStage() {
    if (stage === 1) {
      // adaptive routing: Stage 2 difficulty depends on Stage 1 performance
      const g1 = gradeAttempt(stageQs.map((q, i) => toQuestion(q, i)), answers);
      const diff = g1.percent >= 60 ? "hard" : "easy";
      const qs = generateStage(diff, STAGE2_N, usedTemplates.current);
      qs.forEach((q) => usedTemplates.current.add(q.templateId));
      setStageQs(qs);
      setAllQs((a) => [...a, ...qs]);
      setStage(2);
      window.scrollTo({ top: 0 });
    } else {
      finishSession();
    }
  }

  function finishSession() {
    if (sIdx === 0) {
      setSecondsLeft(null);
      setPhase("between");
      window.scrollTo({ top: 0 });
    } else {
      finalize();
    }
  }

  function continueToB() {
    setSIdx(1);
    beginSession();
  }

  async function finalize() {
    const graded = allQs.map((q, i) => toQuestion(q, i));
    const g = gradeAttempt(graded, answers);
    const lvl = percentToLevel(g.percent);
    setOverall(g);
    setLevel(lvl);
    setSecondsLeft(null);
    setPhase("results");
    window.scrollTo({ top: 0 });
    if (userId) {
      await supabase.from("eqao_attempts").insert({
        student_id: userId, mode: "simulation", answers,
        score: g.score, max_score: g.maxScore, percent: g.percent, level: lvl,
        time_spent_seconds: Math.round((Date.now() - startedAt.current) / 1000),
        submitted_at: new Date().toISOString(),
      });
    }
  }

  function setAns(id: string, v: any) { setAnswers((a) => ({ ...a, [id]: v })); }

  // per-strand breakdown for the report
  function strandBreakdown(g: GradeResult) {
    return STRANDS.map((s) => {
      const qs = allQs.filter((q) => q.strand === s.id);
      const correct = qs.filter((q) => g.perQuestion[q.id]?.correct).length;
      return { ...s, total: qs.length, correct, pct: qs.length ? Math.round((correct / qs.length) * 100) : 0 };
    }).filter((s) => s.total > 0);
  }

  const panelW = tool === "graph" ? 700 : tool === "calc" ? 360 : tool === "formula" ? 380 : 0;
  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ marginRight: panelW, transition: "margin-right .2s ease" }}>

      {phase === "playing" && (
        <div style={toolbar}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#475569" }}>
            <span style={{ fontWeight: 800, color: "#0f172a" }}>Session {SESSIONS[sIdx]}</span>
            <span style={{ color: "#cbd5e1" }}>·</span>
            <span>Stage {stage}</span>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {secondsLeft != null && (
              <span style={{ background: secondsLeft < 120 ? "#fef2f2" : "#0f172a", color: secondsLeft < 120 ? "#dc2626" : "#fff", fontWeight: 800, padding: "6px 12px", borderRadius: 999, fontSize: 13 }}>
                ⏱ {fmt(secondsLeft)}
              </span>
            )}
            <button onClick={() => setTool((t) => (t === "calc" ? null : "calc"))} style={toolBtn(tool === "calc")}>🧮</button>
            <button onClick={() => setTool((t) => (t === "graph" ? null : "graph"))} style={toolBtn(tool === "graph")}>📈</button>
            <button onClick={() => setTool((t) => (t === "formula" ? null : "formula"))} style={toolBtn(tool === "formula")}>📄</button>
          </div>
        </div>
      )}

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "28px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
        {phase === "loading" && <p style={{ color: "#64748b" }}>Loading…</p>}

        {phase === "intro" && (
          <Card>
            <h1 style={h1}>EQAO Grade 9 — Simulated Assessment</h1>
            <p style={{ color: "#475569", fontSize: 16, lineHeight: 1.6 }}>
              A full mock of the real assessment: <strong>two sessions (A &amp; B)</strong>, each with{" "}
              <strong>two adaptive stages</strong>. Stage 2 adjusts to how you did in Stage 1 — just like the real
              computer-adaptive test. You get a calculator, a graphing tool, and a formula sheet throughout, and a{" "}
              <strong>Level 1–4</strong> result at the end.
            </p>
            <ul style={{ color: "#334155", fontSize: 15, lineHeight: 1.9, margin: "14px 0" }}>
              <li>⏱ {SESSION_MINUTES} minutes per session</li>
              <li>📝 ~{STAGE1_N + STAGE2_N} questions per session, across all five strands</li>
              <li>🎯 Level 3 is the provincial standard</li>
            </ul>
            <button onClick={startExam} style={primaryBtn}>Begin Session A →</button>
          </Card>
        )}

        {phase === "playing" && (
          <>
            {stageQs.map((q, i) => (
              <Card key={q.id}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontWeight: 800, color: "#1b7a44" }}>Question {i + 1} of {stageQs.length}</span>
                  <span style={{ color: "#94a3b8", fontWeight: 600, fontSize: 12 }}>{strandMeta(q.strand)?.short} · {ITEM_TYPE_LABEL[q.kind] ?? q.kind}</span>
                </div>
                <div style={{ fontSize: 17, marginBottom: 12 }}><EqaoPrompt prompt={q.prompt} /></div>
                <EqaoFigure figure={q.figure} />
                <EqaoAnswerInput q={q} value={answers[q.id]} onChange={(v) => setAns(q.id, v)} />
              </Card>
            ))}
            <button onClick={submitStage} style={primaryBtn}>
              {stage === 1 ? "Submit Stage 1 →" : sIdx === 0 ? "Finish Session A →" : "Finish & see my level →"}
            </button>
          </>
        )}

        {phase === "between" && (
          <Card>
            <h1 style={h1}>Session A complete ✓</h1>
            <p style={{ color: "#475569", fontSize: 16, lineHeight: 1.6 }}>
              Take a short break if you need it. Session B has the same format — two adaptive stages and a fresh {SESSION_MINUTES}-minute timer.
            </p>
            <button onClick={continueToB} style={primaryBtn}>Begin Session B →</button>
          </Card>
        )}

        {phase === "results" && overall && (
          <>
            <Card>
              <div style={{ fontSize: 13, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Your result</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 14, margin: "6px 0 4px" }}>
                <span style={{ fontFamily: "Fraunces, serif", fontSize: 52, fontWeight: 700, color: level >= 3 ? "#1b7a44" : "#b45309" }}>Level {level}</span>
                <span style={{ fontSize: 22, color: "#64748b", fontWeight: 600 }}>{overall.percent}%</span>
              </div>
              <div style={{ fontWeight: 600, color: level >= 3 ? "#059669" : "#b45309" }}>{LEVEL_LABEL[level]}</div>
              <div style={{ color: "#64748b", fontSize: 14, marginTop: 4 }}>{overall.score} / {overall.maxScore} correct across both sessions</div>

              <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                {strandBreakdown(overall).map((s) => (
                  <div key={s.id}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 3 }}>
                      <span style={{ color: "#334155", fontWeight: 600 }}>{s.label}</span>
                      <span style={{ color: "#64748b" }}>{s.correct}/{s.total}</span>
                    </div>
                    <div style={{ background: "#eef2f7", borderRadius: 999, height: 8, overflow: "hidden" }}>
                      <div style={{ width: `${s.pct}%`, height: "100%", background: s.pct >= 60 ? "#1b7a44" : "#f59e0b" }} />
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 12, marginTop: 22, flexWrap: "wrap" }}>
                <button onClick={startExam} style={primaryBtn}>Retake simulation</button>
                <button onClick={() => router.push("/eqao")} style={secondaryBtn}>Back to EQAO prep</button>
              </div>
            </Card>

            <h2 style={{ fontFamily: "Fraunces, serif", fontSize: 20, fontWeight: 700, margin: "10px 0 0" }}>Review</h2>
            {allQs.map((q, i) => {
              const r = overall.perQuestion[q.id];
              return (
                <Card key={q.id}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <strong style={{ fontSize: 14 }}>Q{i + 1} · {strandMeta(q.strand)?.short}</strong>
                    <span style={{ fontWeight: 700, fontSize: 13, color: r?.correct ? "#059669" : "#dc2626" }}>{r?.correct ? "✓" : "✗"}</span>
                  </div>
                  <div style={{ fontSize: 16, marginBottom: 10 }}><EqaoPrompt prompt={q.prompt} /></div>
                  <EqaoFigure figure={q.figure} />
                  {!r?.correct && <EqaoCorrectAnswer q={q} />}
                </Card>
              );
            })}
          </>
        )}
      </div>
      </div>

      {tool && (
        <div style={{ ...panel, width: panelW }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <strong style={{ fontSize: 15 }}>{tool === "calc" ? "Calculator" : tool === "graph" ? "Graphing calculator" : "Formula sheet"}</strong>
            <button onClick={() => setTool(null)} style={{ ...secondaryBtn, padding: "4px 10px" }}>✕</button>
          </div>
          {tool === "calc" && <CalculatorPad />}
          {tool === "graph" && <iframe title="Graphing calculator" src="/tools/graph?embed=1&panel=1" style={{ width: "100%", height: "calc(100% - 44px)", border: "1px solid #e2e8f0", borderRadius: 12 }} />}
          {tool === "formula" && <div style={{ overflowY: "auto", height: "calc(100% - 44px)" }}><EqaoFormulaSheet /></div>}
        </div>
      )}
    </main>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 22 }}>{children}</div>;
}
function fmt(s: number) { const m = Math.floor(s / 60); const r = s % 60; return `${m}:${r.toString().padStart(2, "0")}`; }
const toolbar: React.CSSProperties = { position: "sticky", top: 0, zIndex: 30, background: "#fff", borderBottom: "1px solid #e2e8f0", padding: "10px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 };
const toolBtn = (on: boolean): React.CSSProperties => ({ background: on ? "#0f172a" : "#fff", color: on ? "#fff" : "#334155", border: "1px solid #cbd5e1", borderRadius: 9, padding: "7px 11px", fontWeight: 700, fontSize: 14, cursor: "pointer", fontFamily: "inherit" });
const panel: React.CSSProperties = { position: "fixed", top: 0, right: 0, height: "100vh", background: "#fff", borderLeft: "1px solid #e2e8f0", boxShadow: "-12px 0 40px rgba(15,23,42,0.12)", padding: 18, zIndex: 60, overflow: "hidden" };
const h1: React.CSSProperties = { fontFamily: "Fraunces, serif", fontSize: 28, fontWeight: 700, margin: "0 0 8px" };
const primaryBtn: React.CSSProperties = { background: "#1b7a44", color: "#fff", border: "none", borderRadius: 10, padding: "12px 24px", fontWeight: 700, fontSize: 15, cursor: "pointer" };
const secondaryBtn: React.CSSProperties = { background: "#fff", color: "#0f172a", border: "1px solid #cbd5e1", borderRadius: 10, padding: "12px 24px", fontWeight: 700, fontSize: 15, cursor: "pointer" };
