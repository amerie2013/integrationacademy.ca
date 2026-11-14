// MCV4U-FR — French lesson chrome. Same markup and styles as the English helpers in
// ../mth1w-ch1/lib.mjs, ../mth1w-ch1/v2/lib.mjs and ../mcv4u-chN/lib.mjs (hard()), with every
// fixed label in Canadian French. Each scripts/mcv4u-fr-chN/lib.mjs does:
//   export * from "../mcv4u-chN/lib.mjs";
//   export { ex, pr, qa, watchOut, intro, section, keyIdea, examples, practice, hard, wrapUp } from "../mcv4u-fr/chrome.mjs";
// (explicit re-exports win over export *, so lessons get the French versions).
import { html, table } from "../mth1w-ch1/lib.mjs";
import { widget } from "../mth1w-ch1/v2/lib.mjs";

const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const MI = `style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const GOALS = `style="background:#f0fdf4;border:1px solid #bbf7d0;border-left:5px solid #15803d;border-radius:8px;padding:10px 16px;margin:12px 0;"`;
const META = `style="font-size:13.5px;color:#475569;margin:6px 0 0;"`;
const KEY = `style="background:#eef2ff;border-left:5px solid #4338ca;border-radius:8px;padding:10px 16px;margin:12px 0;"`;
const CH = `style="background-color:#fdf2f8;border-left:5px solid #be185d;padding:10px 14px;margin:12px 0;border-radius:6px;"`;

export const ex = (title, q, steps, conclusion, extra = "") =>
  `<div class="example-box" ${EX}><h3>${title}</h3><p>${q}</p><div class="solution">${steps
    .map((s, i) => `<div class="step"><strong>Étape ${i + 1} :</strong> ${s}</div>`)
    .join("")}<em>Conclusion : ${conclusion} ✓</em></div>${extra}</div>`;
export const pr = (n, label, q, ans) =>
  `<div class="practice-box" ${PR}><h3>Question ${n} (${label})</h3><p>${q}</p><details><summary>Voir la réponse</summary><div class="solution"><div class="step"><em>${ans}</em></div></div></details></div>`;
export const qa = (q, a) => `<div class="qa-box" ${QA}><h3>${q}</h3><p><em>${a}</em></p></div>`;
export const watchOut = (items) => `<div class="mistake-box" ${MI}><h3>⚠️ Attention</h3><ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul></div>`;

/** First card of every lesson. `curriculum` = the Ontario expectation codes + French wording. */
export function intro({ icon, title, overview, goals, curriculum, prior, words }) {
  return html(`<div class="lecture-box">
  <h1>${icon} ${title}</h1>
  <p><strong>Aperçu.</strong> ${overview}</p>
  <div ${GOALS}><strong>À la fin de cette leçon, tu seras capable de :</strong><ul style="margin:6px 0 0;">${goals.map((g) => `<li>${g}</li>`).join("")}</ul>
  <p ${META}><strong>MCV4U (Ontario) :</strong> ${curriculum}</p></div>
  <h2>🧭 Avant de commencer</h2>
  <p>Réponds d'abord mentalement. Si une question te semble difficile, ouvre la réponse et révise-la avant de continuer.</p>
  ${prior.map(([q, a]) => `<details style="margin:6px 0;"><summary><strong>${q}</strong></summary><p style="margin:6px 0 0 18px;"><em>${a}</em></p></details>`).join("")}
  <h2>📖 Vocabulaire</h2>
  ${table(["Terme", "Signification", "Exemple"], words)}
</div>`);
}

export const section = (heading, body) => html(`<div class="lecture-box"><h2>${heading}</h2>${body}</div>`);
export const keyIdea = (text) => `<div ${KEY}><strong>Idée clé.</strong> ${text}</div>`;

/** The five worked examples. Each item: [title, question, steps[], conclusion, figure?]. */
export function examples(items) {
  if (items.length !== 5) throw new Error(`need exactly 5 examples, got ${items.length}`);
  return html(`<div class="lecture-box"><h2>🔵 Exemples résolus</h2>
  <p>Cache la solution, essaie la question, puis lis les étapes. Chaque exemple ajoute une nouvelle idée.</p>
  ${items.map(([t, q, s, c, fig], i) => ex(`Exemple ${i + 1} : ${t}`, q, s, c, fig ?? "")).join("\n")}
</div>`);
}

/** The five checked practice questions. */
export function practice(questions) {
  if (questions.length !== 5) throw new Error(`need exactly 5 practice questions, got ${questions.length}`);
  return widget("practice", { questions }); // the widget shows its French default title in a French course
}

/** Hard level: exactly 2 worked challenges + 3 checked hard questions (same rule as the English MCV4U libs). */
export function hard(items, qs) {
  if (items.length !== 2) throw new Error(`hard(): need 2 worked hard problems, got ${items.length}`);
  if (qs.length !== 3) throw new Error(`hard(): need 3 hard practice questions, got ${qs.length}`);
  return [
    html(`<div class="lecture-box"><h2>🔴 Niveau difficile</h2>
  <p>Ces problèmes vont plus loin que les exemples : plusieurs étapes, un contexte nouveau ou un raisonnement à justifier. Essaie chacun avant d'ouvrir la solution.</p>
  ${items.map(([t, q, s, c, fig], i) => `<div class="challenge-box" ${CH}><h3>Défi ${i + 1} : ${t}</h3><p>${q}</p>${fig ?? ""}<details><summary><strong>Voir la solution</strong></summary><div class="solution">${s.map((x, k) => `<div class="step"><strong>Étape ${k + 1} :</strong> ${x}</div>`).join("")}<em>Conclusion : ${c} ✓</em></div></details></div>`).join("\n")}
</div>`),
    widget("practice", { questions: qs, title: "Pratique — niveau difficile" }),
  ];
}

/** Q&R (5 items) + résumé + suite. */
export function wrapUp({ qas, summary, next }) {
  if (qas.length !== 5) throw new Error(`need exactly 5 Q&A items, got ${qas.length}`);
  return html(`<div class="lecture-box"><h2>❓ Questions et réponses</h2>
  ${qas.map(([qq, a], i) => qa(`Q${i + 1} : ${qq}`, a)).join("\n")}
  <h2>✅ Résumé</h2>
  <ul>${summary.map((s) => `<li>${s}</li>`).join("")}</ul>
  <p><strong>Prochaine étape :</strong> ${next}</p>
</div>`);
}
