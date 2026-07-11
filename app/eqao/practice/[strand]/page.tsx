"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "../../../../lib/supabase";
import { SiteHeader } from "../../../../components/SiteHeader";
import { Math as Tex } from "../../../../components/Math";
import { MathField } from "../../../../components/MathField";
import { EqaoFigure } from "../../../../components/EqaoFigure";
import { EqaoFormulaSheet } from "../../../../components/EqaoFormulaSheet";
import { CalculatorPad } from "../../../../components/CalculatorPad";
import { ITEM_TYPE_LABEL, strandMeta, toQuestion } from "../../../../lib/eqao";
import { Generated, generateSet } from "../../../../lib/eqaoGen";
import { GradeResult, gradeAttempt, shuffle } from "../../../../lib/quiz";

type Phase = "loading" | "empty" | "playing" | "results";
type Tool = null | "calc" | "graph" | "formula";
const SET_SIZE = 10;

export default function EqaoPracticePage() {
  const params = useParams();
  const router = useRouter();
  const strand = params.strand as string;
  const meta = strandMeta(strand);

  const [phase, setPhase] = useState<Phase>("loading");
  const [questions, setQuestions] = useState<Generated[]>([]);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [result, setResult] = useState<GradeResult | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [tool, setTool] = useState<Tool>(null);
  const startedAt = useRef(0);

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return router.push("/login");
      setUserId(session.user.id);
      if (!meta) return setPhase("empty");
      // Admin-authored questions for this strand (from /teacher/eqao) are mixed in.
      const { data: dbRows } = await supabase.from("eqao_questions").select("*").eq("strand", meta.id).limit(100);
      const admin = (dbRows ?? []).map((r: any) => ({
        id: "db_" + r.id, templateId: "db_" + r.id, strand: r.strand, difficulty: r.difficulty, kind: r.kind, prompt: r.prompt,
        figure: r.figure ?? null, choices: r.choices ?? undefined, answer: r.answer,
        tolerance: r.tolerance ?? null, points: r.points ?? 1, feedback: r.feedback ?? null,
      })) as Generated[];
      const gen = generateSet(meta.id, SET_SIZE);
      const merged = shuffle([...shuffle(admin).slice(0, 3), ...gen]).slice(0, SET_SIZE);
      const set = merged.length ? merged : gen;
      if (set.length === 0) return setPhase("empty");
      setQuestions(set);
      startedAt.current = Date.now();
      setPhase("playing");
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [strand]);

  const graded = useMemo(() => questions.map((q, i) => toQuestion(q, i)), [questions]);

  function setAns(id: string, v: any) {
    setAnswers((a) => ({ ...a, [id]: v }));
  }

  async function submit() {
    const g = gradeAttempt(graded, answers);
    setResult(g);
    setPhase("results");
    if (userId) {
      await supabase.from("eqao_attempts").insert({
        student_id: userId, mode: "practice", strand: meta?.id ?? strand, answers,
        score: g.score, max_score: g.maxScore, percent: g.percent,
        time_spent_seconds: Math.round((Date.now() - startedAt.current) / 1000),
        submitted_at: new Date().toISOString(),
      });
    }
  }

  function newSet() {
    setAnswers({});
    setResult(null);
    setQuestions(meta ? generateSet(meta.id, SET_SIZE) : []);
    startedAt.current = Date.now();
    setPhase("playing");
    window.scrollTo({ top: 0 });
  }

  const panelW = tool === "graph" ? 700 : tool === "calc" ? 360 : tool === "formula" ? 380 : 0;
  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ marginRight: panelW, transition: "margin-right .2s ease" }}>

      <div style={toolbar}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#475569" }}>
          <span style={{ fontWeight: 800, color: "#0f172a" }}>EQAO Practice</span>
          <span style={{ color: "#cbd5e1" }}>·</span>
          <span>{meta?.label ?? "Strand"}</span>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => setTool((t) => (t === "calc" ? null : "calc"))} style={toolBtn(tool === "calc")}>🧮 Calculator</button>
          <button onClick={() => setTool((t) => (t === "graph" ? null : "graph"))} style={toolBtn(tool === "graph")}>📈 Graphing</button>
          <button onClick={() => setTool((t) => (t === "formula" ? null : "formula"))} style={toolBtn(tool === "formula")}>📄 Formula sheet</button>
        </div>
      </div>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "24px", display: "flex", flexDirection: "column", gap: 16 }}>
        {phase === "loading" && <p style={{ color: "#64748b" }}>Loading…</p>}

        {phase === "empty" && (
          <Card>
            <h1 style={h1}>{meta?.label ?? "Practice"}</h1>
            <p style={{ color: "#64748b", fontSize: 16 }}>No practice questions are available for this strand yet.</p>
            <button onClick={() => router.push("/eqao")} style={secondaryBtn}>← Back to EQAO prep</button>
          </Card>
        )}

        {phase === "playing" && (
          <>
            {questions.map((q, i) => (
              <Card key={q.id}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontWeight: 800, color: "#1b7a44" }}>Question {i + 1} of {questions.length}</span>
                  <span style={{ color: "#94a3b8", fontWeight: 600, fontSize: 12 }}>
                    {ITEM_TYPE_LABEL[q.kind] ?? q.kind} · {q.difficulty}
                  </span>
                </div>
                <div style={{ fontSize: 17, marginBottom: 12 }}><PromptText prompt={q.prompt} /></div>
                <EqaoFigure figure={q.figure} />
                <Input q={q} value={answers[q.id]} onChange={(v) => setAns(q.id, v)} />
              </Card>
            ))}
            <button onClick={submit} style={primaryBtn}>Submit answers</button>
          </>
        )}

        {phase === "results" && result && (
          <>
            <Card>
              <h1 style={h1}>Practice results</h1>
              <div style={{ fontFamily: "Fraunces, serif", fontSize: 44, fontWeight: 700, color: "#1b7a44" }}>{result.percent}%</div>
              <div style={{ color: "#64748b", fontWeight: 600 }}>{result.score} / {result.maxScore} correct</div>
              <div style={{ display: "flex", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
                <button onClick={newSet} style={primaryBtn}>Try new questions →</button>
                <button onClick={() => router.push("/eqao")} style={secondaryBtn}>Choose another strand</button>
              </div>
              <p style={{ fontSize: 13, color: "#94a3b8", marginTop: 12 }}>Each new set randomizes the numbers and figures, so you can practise endlessly.</p>
            </Card>
            {questions.map((q, i) => {
              const r = result.perQuestion[q.id];
              return (
                <Card key={q.id}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <strong style={{ fontSize: 14 }}>Question {i + 1}</strong>
                    <span style={{ fontWeight: 700, fontSize: 13, color: r?.correct ? "#059669" : "#dc2626" }}>
                      {r?.correct ? "✓ Correct" : "✗ Incorrect"}
                    </span>
                  </div>
                  <div style={{ fontSize: 16, marginBottom: 10 }}><PromptText prompt={q.prompt} /></div>
                  <EqaoFigure figure={q.figure} />
                  {!r?.correct && <CorrectAnswer q={q} />}
                  {q.feedback && <p style={{ fontSize: 13, color: "#475569", marginTop: 8, fontStyle: "italic" }}><PromptText prompt={q.feedback} /></p>}
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

// ── answer inputs ────────────────────────────────────────────
function Input({ q, value, onChange }: { q: Generated; value: any; onChange: (v: any) => void }) {
  useEffect(() => {
    if (q.kind === "ordering" && value == null) onChange(shuffle((q.choices ?? []).map((_: any, i: number) => i)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (q.kind === "multiple_choice") {
    return (
      <div style={optWrap}>
        {(q.choices ?? []).map((c: any) => (
          <Opt key={c.id} selected={value === c.id} type="radio" onClick={() => onChange(c.id)}><PromptText prompt={c.text} /></Opt>
        ))}
      </div>
    );
  }
  if (q.kind === "multiple_select") {
    const sel: string[] = value ?? [];
    return (
      <div style={optWrap}>
        {(q.choices ?? []).map((c: any) => (
          <Opt key={c.id} selected={sel.includes(c.id)} type="checkbox" onClick={() => {
            const s = new Set(sel); s.has(c.id) ? s.delete(c.id) : s.add(c.id); onChange([...s]);
          }}><PromptText prompt={c.text} /></Opt>
        ))}
      </div>
    );
  }
  if (q.kind === "true_false") {
    return (
      <div style={optWrap}>
        {["true", "false"].map((v) => (
          <Opt key={v} selected={value === v} type="radio" onClick={() => onChange(v)}><span style={{ textTransform: "capitalize" }}>{v}</span></Opt>
        ))}
      </div>
    );
  }
  if (q.kind === "numeric") return <input type="number" value={value ?? ""} onChange={(e) => onChange(e.target.value)} style={textInput} placeholder="Type your answer" />;
  if (q.kind === "math_expr")
    return <MathField value={value ?? ""} onChange={onChange} format="expr" ariaLabel="your answer" placeholder="Type your answer" style={{ border: "1px solid #cbd5e1", borderRadius: 10, padding: "10px 12px", minHeight: 46, fontSize: 19 }} />;
  if (q.kind === "short_answer" || q.kind === "fill_blank") return <input value={value ?? ""} onChange={(e) => onChange(e.target.value)} style={textInput} placeholder="Type your answer" />;
  return null;
}

function CorrectAnswer({ q }: { q: Generated }) {
  let parts: string[] = [];
  let sep = ", ";
  if (q.kind === "multiple_choice") { const t = (q.choices ?? []).find((c: any) => c.id === q.answer)?.text; if (t) parts = [t]; }
  else if (q.kind === "multiple_select") parts = (q.choices ?? []).filter((c: any) => (q.answer ?? []).includes(c.id)).map((c: any) => c.text);
  else if (q.kind === "true_false" || q.kind === "numeric" || q.kind === "math_expr") parts = [String(q.answer)];
  else if (q.kind === "short_answer" || q.kind === "fill_blank") { parts = (Array.isArray(q.answer) ? q.answer : [q.answer]).filter(Boolean).map(String); sep = "  /  "; }
  if (!parts.length) return null;
  return (
    <p style={{ fontSize: 13, color: "#059669", marginTop: 6, fontWeight: 600 }}>
      Answer: {parts.map((t, i) => <span key={i}>{i > 0 ? sep : ""}<MathBit text={t} /></span>)}
    </p>
  );
}

function MathBit({ text }: { text: string }) {
  if (!text) return null;
  if (text.includes("$")) return <PromptText prompt={text} />;
  if (/[\\^_]/.test(text)) return <Tex expr={text} />;
  return <span>{text}</span>;
}

function PromptText({ prompt }: { prompt: string }) {
  if (!prompt) return null;
  const parts = prompt.split(/(\$[^$]+\$)/g);
  return <span>{parts.map((p, i) => (p.startsWith("$") && p.endsWith("$") && p.length > 1 ? <Tex key={i} expr={p.slice(1, -1)} /> : <span key={i}>{p}</span>))}</span>;
}

// ── styles ───────────────────────────────────────────────────
function Card({ children }: { children: React.ReactNode }) {
  return <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 22 }}>{children}</div>;
}
function Opt({ children, selected, onClick, type }: { children: React.ReactNode; selected: boolean; onClick: () => void; type: "radio" | "checkbox" }) {
  return (
    <button onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 12, textAlign: "left", background: selected ? "#e7f6ec" : "#fff", border: `1px solid ${selected ? "#1b7a44" : "#e2e8f0"}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", fontSize: 15, fontFamily: "inherit", width: "100%", color: "#0f172a" }}>
      <input type={type} checked={selected} readOnly style={{ pointerEvents: "none" }} /><span>{children}</span>
    </button>
  );
}
const toolbar: React.CSSProperties = { position: "sticky", top: 0, zIndex: 30, background: "#fff", borderBottom: "1px solid #e2e8f0", padding: "10px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 };
const toolBtn = (on: boolean): React.CSSProperties => ({ background: on ? "#0f172a" : "#fff", color: on ? "#fff" : "#334155", border: "1px solid #cbd5e1", borderRadius: 9, padding: "7px 12px", fontWeight: 700, fontSize: 13, cursor: "pointer", fontFamily: "inherit" });
const panel: React.CSSProperties = { position: "fixed", top: 0, right: 0, width: "min(420px, 92vw)", height: "100vh", background: "#fff", borderLeft: "1px solid #e2e8f0", boxShadow: "-12px 0 40px rgba(15,23,42,0.12)", padding: 18, zIndex: 60, overflow: "hidden" };
const h1: React.CSSProperties = { fontFamily: "Fraunces, serif", fontSize: 28, fontWeight: 700, margin: "0 0 8px" };
const primaryBtn: React.CSSProperties = { background: "#1b7a44", color: "#fff", border: "none", borderRadius: 10, padding: "12px 24px", fontWeight: 700, fontSize: 15, cursor: "pointer" };
const secondaryBtn: React.CSSProperties = { background: "#fff", color: "#0f172a", border: "1px solid #cbd5e1", borderRadius: 10, padding: "12px 24px", fontWeight: 700, fontSize: 15, cursor: "pointer" };
const optWrap: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 10 };
const textInput: React.CSSProperties = { width: "100%", padding: "12px 14px", borderRadius: 10, border: "1px solid #cbd5e1", fontSize: 15, fontFamily: "inherit", outline: "none", boxSizing: "border-box" };
