"use client";

import { useState } from "react";
import { checkAnswer, rightValueWrongForm, type AnswerSpec } from "../../lib/answerCheck";
import { C, MathText, WidgetCard, btn } from "./kit";

export type PracticeQuestion = {
  label: string; // e.g. "Different signs"
  prompt: string; // HTML with \( \) math
  answer: AnswerSpec;
  placeholder?: string; // e.g. "a fraction like -3/4"
  hint: string;
  solution: string[]; // worked steps (HTML)
  final: string; // final answer line (HTML)
  figure?: string; // optional inline SVG/HTML shown under the prompt
};

type State = { value: string; tries: number; correct: boolean; showSol: boolean; formNote: boolean };

export function PracticeSet({ title = "Practice — check your understanding", questions }: { title?: string; questions: PracticeQuestion[] }) {
  const [st, setSt] = useState<State[]>(() => questions.map(() => ({ value: "", tries: 0, correct: false, showSol: false, formNote: false })));
  const set = (i: number, p: Partial<State>) => setSt((s) => s.map((x, j) => (j === i ? { ...x, ...p } : x)));
  const done = st.filter((s) => s.correct).length;

  return (
    <WidgetCard title={title} subtitle={`${done} of ${questions.length} correct`} tag="Practice">
      <p style={{ margin: "0 0 14px", color: C.muted, fontSize: 14.5 }}>
        Work each question on paper first, then type your answer and press <strong>Check</strong>. A hint appears after a wrong try; the full solution is always one click away.
      </p>
      <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
        {questions.map((q, i) => {
          const s = st[i];
          const check = (raw: string | number) => {
            const ok = checkAnswer(q.answer, raw);
            const formNote = !ok && rightValueWrongForm(q.answer, String(raw));
            set(i, { tries: s.tries + (formNote ? 0 : 1), correct: ok, value: String(raw), formNote });
          };
          const wrong = s.tries > 0 && !s.correct && !s.formNote;
          return (
            <li key={i} className="practice-box" style={{ background: s.correct ? "#f0fdf4" : "#fffbeb", border: `1px solid ${s.correct ? "#bbf7d0" : "#fde68a"}`, borderLeft: `5px solid ${s.correct ? C.green : "#e69138"}`, borderRadius: 10, padding: "12px 16px" }}>
              <div style={{ fontWeight: 800, color: C.ink, marginBottom: 4 }}>
                Question {i + 1} <span style={{ fontWeight: 600, color: C.muted }}>({q.label})</span>
              </div>
              <MathText html={q.prompt} block style={{ fontSize: 16, lineHeight: 1.6, color: C.ink }} />
              {q.figure && <MathText html={q.figure} block style={{ textAlign: "center", margin: "8px 0" }} />}

              {q.answer.kind === "choice" ? (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 10 }}>
                  {q.answer.options.map((o, k) => {
                    const picked = s.value === String(k) && s.tries > 0;
                    return (
                      <button key={k} type="button" onClick={() => check(k)}
                        style={{ ...btn(false), borderColor: picked ? (s.correct ? C.green : C.red) : "#cbd5e1", background: picked ? (s.correct ? C.greenSoft : C.redSoft) : "#fff" }}>
                        <MathText html={o} />
                      </button>
                    );
                  })}
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); if (s.value.trim()) check(s.value); }} style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10, alignItems: "center" }}>
                  <input value={s.value} onChange={(e) => set(i, { value: e.target.value, correct: false, formNote: false })} placeholder={q.placeholder ?? (q.answer.kind === "expr" ? "e.g. 3x^2 - 2x + 5" : "Your answer")} aria-label={`Answer to question ${i + 1}`}
                    style={{ border: "1px solid #cbd5e1", borderRadius: 9, padding: "8px 12px", fontSize: 16, minWidth: 180, flex: "0 1 260px", fontFamily: "inherit" }} />
                  <button type="submit" style={btn(true)}>Check</button>
                </form>
              )}

              <div aria-live="polite" style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 8 }}>
                {s.correct && <span style={{ color: C.green, fontWeight: 800 }}>Correct.{s.tries > 1 ? ` (on try ${s.tries})` : ""}</span>}
                {s.formNote && !s.correct && <span style={{ color: C.amber, fontWeight: 700 }}>{q.answer.kind === "ratio" ? "Equivalent ratio — now write it in simplest form." : q.answer.kind === "expr" ? "Equivalent — now simplify fully: expand any brackets and collect like terms." : q.answer.kind === "number" && q.answer.form === "sci" ? "Right value — now write it in scientific notation, like 4.5 x 10^6." : "Right value — now write it as a fraction (like 3/4), not a decimal."}</span>}
                {wrong && <span style={{ color: C.red, fontWeight: 700 }}>Not yet — try again.</span>}
                {wrong && (
                  <div style={{ background: C.amberSoft, borderRadius: 8, padding: "8px 12px", fontSize: 14.5 }}>
                    <strong>Hint: </strong><MathText html={q.hint} />
                  </div>
                )}
              </div>

              <button type="button" onClick={() => set(i, { showSol: !s.showSol })} style={{ ...btn(false), marginTop: 10, fontSize: 13, padding: "6px 12px" }}>
                {s.showSol ? "Hide solution" : "Show full solution"}
              </button>
              {s.showSol && (
                <div className="solution" style={{ marginTop: 10, background: "#fff", border: `1px solid ${C.line}`, borderRadius: 8, padding: "10px 14px" }}>
                  {q.solution.map((step, k) => (
                    <div key={k} className="step" style={{ margin: "4px 0", lineHeight: 1.6 }}><strong>Step {k + 1}:</strong> <MathText html={step} /></div>
                  ))}
                  <div style={{ marginTop: 6, fontWeight: 700, color: C.green }}><MathText html={`Answer: ${q.final}`} /></div>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </WidgetCard>
  );
}
