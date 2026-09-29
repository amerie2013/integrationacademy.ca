// Shared layout for the French MHF4U lessons (mirrors the English lesson-card theme in
// mhf4u-lessons-u*.mjs, but every lesson is assembled from data instead of hand-written HTML,
// so the markup can't drift between topics).
import { html, gframe } from "./seed-mpm2d.mjs";

const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;

const step = (n, text) => `<div class="step"><strong>Étape ${n} :</strong> ${text}</div>`;
const example = (i, title, prompt, steps, concl, extra = "") =>
  `<div class="example-box" ${EX}><h3>Exemple ${i} : ${title}</h3><p>${prompt}</p><div class="solution">${steps.map((t, k) => step(k + 1, t)).join("")}<em>Conclusion : ${concl} ✓</em></div>${extra}</div>`;
const practice = (i, prompt, answer) =>
  `<div class="practice-box" ${PR}><h3>Question ${i}</h3><p>${prompt}</p><details><summary>Voir la réponse</summary><div class="solution"><div class="step"><em>${answer}</em></div></div></details></div>`;
const qaBox = (i, q, a) => `<div class="qa-box" ${QA}><h3>Q${i} : ${q}</h3><p><em>${a}</em></p></div>`;

/**
 * spec: {
 *   code, title, emoji, overview, points: [string],
 *   graphs: [string]  // pre-built gframe(...) embeds, or []
 *   examples: [{ title, prompt, steps:[string], concl, extra? }],
 *   practice: [{ prompt, answer }],
 *   qa: [{ q, a }],
 *   sliderGraph?: block from graph(...) (optional trailing animated-graph block)
 * }
 */
export function mkLesson(spec) {
  const points = spec.points.map((p) => `<li>${p}</li>`).join("");
  const graphs = (spec.graphs ?? []).join("\n  ");
  const examples = spec.examples.map((e, i) => example(i + 1, e.title, e.prompt, e.steps, e.concl, e.extra ?? "")).join("\n  ");
  const practices = spec.practice.map((p, i) => practice(i + 1, p.prompt, p.answer)).join("\n  ");
  const qas = spec.qa.map((q, i) => qaBox(i + 1, q.q, q.a)).join("\n  ");
  const blocks = [
    html(`<div class="lecture-box">
  <h1>${spec.emoji} ${spec.title}</h1>
  <p><strong>Aperçu.</strong> ${spec.overview}</p>
  <h2>📌 Points clés</h2>
  <ul>
  ${points}
  </ul>
  ${graphs}
  <h2>🔵 Exemples</h2>
  ${examples}
  <h2>🟡 Questions pratiques</h2>
  ${practices}
  <h2>❓ Résumé questions-réponses</h2>
  ${qas}
</div>`),
  ];
  if (spec.sliderGraph) blocks.push(spec.sliderGraph);
  return { code: spec.code, title: spec.title, blocks };
}

export { gframe };
