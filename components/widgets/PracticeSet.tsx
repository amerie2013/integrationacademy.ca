"use client";

import { useState } from "react";
import { checkAnswer, rightValueWrongForm, type AnswerSpec } from "../../lib/answerCheck";
import { C, MathText, WidgetCard, btn } from "./kit";
import { useT } from "../../lib/lang";

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

export function PracticeSet({ title, questions }: { title?: string; questions: PracticeQuestion[] }) {
  const t = useT();
  const [st, setSt] = useState<State[]>(() => questions.map(() => ({ value: "", tries: 0, correct: false, showSol: false, formNote: false })));
  const set = (i: number, p: Partial<State>) => setSt((s) => s.map((x, j) => (j === i ? { ...x, ...p } : x)));
  const done = st.filter((s) => s.correct).length;

  return (
    <WidgetCard title={title ?? t("Practice — check your understanding", "Pratique — vérifie ta compréhension")} subtitle={t(`${done} of ${questions.length} correct`, `${done} sur ${questions.length} correctes`)} tag={t("Practice", "Pratique")}>
      <p style={{ margin: "0 0 14px", color: C.muted, fontSize: 14.5 }}>
        {t("Work each question on paper first, then type your answer and press ", "Fais d'abord chaque question sur papier, puis tape ta réponse et appuie sur ")}<strong>{t("Check", "Vérifier")}</strong>{t(". A hint appears after a wrong try; the full solution is always one click away.", ". Un indice apparaît après une mauvaise réponse; la solution complète est toujours à un clic.")}
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
                  <input value={s.value} onChange={(e) => set(i, { value: e.target.value, correct: false, formNote: false })} placeholder={q.placeholder ?? (q.answer.kind === "expr" ? t("e.g. 3x^2 - 2x + 5", "p. ex. 3x^2 - 2x + 5") : q.answer.kind === "roots" ? t("all roots, e.g. x = 1 or x = 2", "toutes les racines, p. ex. x = 1 ou x = 2") : q.answer.kind === "vector" ? t("components, e.g. ", "composantes, p. ex. ") + `(${q.answer.value.map((_, k) => [2, -1, 3, 0, 5][k % 5]).join(", ")})` : t("Your answer", "Ta réponse"))} aria-label={t(`Answer to question ${i + 1}`, `Réponse à la question ${i + 1}`)}
                    style={{ border: "1px solid #cbd5e1", borderRadius: 9, padding: "8px 12px", fontSize: 16, minWidth: 180, flex: "0 1 260px", fontFamily: "inherit" }} />
                  <button type="submit" style={btn(true)}>{t("Check", "Vérifier")}</button>
                </form>
              )}

              <div aria-live="polite" style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 8 }}>
                {s.correct && <span style={{ color: C.green, fontWeight: 800 }}>Correct.{s.tries > 1 ? t(` (on try ${s.tries})`, ` (à l'essai ${s.tries})`) : ""}</span>}
                {s.formNote && !s.correct && <span style={{ color: C.amber, fontWeight: 700 }}>{q.answer.kind === "roots" ? t("Correct so far — but there is another root. Give all of them, separated by commas or \"or\".", "Correct jusqu'ici — mais il y a une autre racine. Donne-les toutes, séparées par des virgules ou par « ou ».") : q.answer.kind === "ratio" ? t("Equivalent ratio — now write it in simplest form.", "Rapport équivalent — écris-le maintenant sous sa forme la plus simple.") : q.answer.kind === "expr" && q.answer.factored ? t("Equivalent — now write it fully factored, as a product of brackets (take out any common factor first).", "Équivalent — écris-le maintenant complètement factorisé, comme un produit de parenthèses (mets d'abord le facteur commun en évidence).") : q.answer.kind === "expr" ? t("Equivalent — now simplify fully: expand any brackets and collect like terms.", "Équivalent — simplifie maintenant complètement : développe les parenthèses et regroupe les termes semblables.") : q.answer.kind === "number" && q.answer.form === "sci" ? t("Right value — now write it in scientific notation, like 4.5 x 10^6.", "Bonne valeur — écris-la maintenant en notation scientifique, comme 4.5 x 10^6.") : t("Right value — now write it as a fraction (like 3/4), not a decimal.", "Bonne valeur — écris-la maintenant sous forme de fraction (comme 3/4), pas en notation décimale.")}</span>}
                {wrong && <span style={{ color: C.red, fontWeight: 700 }}>{t("Not yet — try again.", "Pas encore — essaie de nouveau.")}</span>}
                {wrong && (
                  <div style={{ background: C.amberSoft, borderRadius: 8, padding: "8px 12px", fontSize: 14.5 }}>
                    <strong>{t("Hint: ", "Indice : ")}</strong><MathText html={q.hint} />
                  </div>
                )}
              </div>

              <button type="button" onClick={() => set(i, { showSol: !s.showSol })} style={{ ...btn(false), marginTop: 10, fontSize: 13, padding: "6px 12px" }}>
                {s.showSol ? t("Hide solution", "Masquer la solution") : t("Show full solution", "Voir la solution complète")}
              </button>
              {s.showSol && (
                <div className="solution" style={{ marginTop: 10, background: "#fff", border: `1px solid ${C.line}`, borderRadius: 8, padding: "10px 14px" }}>
                  {q.solution.map((step, k) => (
                    <div key={k} className="step" style={{ margin: "4px 0", lineHeight: 1.6 }}><strong>{t(`Step ${k + 1}:`, `Étape ${k + 1} :`)}</strong> <MathText html={step} /></div>
                  ))}
                  <div style={{ marginTop: 6, fontWeight: 700, color: C.green }}><MathText html={`${t("Answer:", "Réponse :")} ${q.final}`} /></div>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </WidgetCard>
  );
}
