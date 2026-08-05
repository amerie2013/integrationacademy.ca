// Shared helpers for Geometry (FL B.E.S.T.) authored lessons.
import { html, graph, gframe, mg, anim } from "../seed-mpm2d.mjs";

export { html, graph, gframe, mg, anim };

export const L = (code, title, blocks) => ({ code, title, blocks });
export const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;

/** Build one HTML lecture block with overview, toolkit, 5 examples, 5 practice, Q&A.
 *  Optional `figure` after the toolkit; optional `fig` on each example/practice. */
export function lessonHtml({ title, emoji, overview, toolkit, figure, examples, practice, qa }) {
  const figWrap = (f) => (f ? `<div style="text-align:center;margin:14px 0;">${f}</div>` : "");

  const ex = examples.map((e, i) => `<div class="example-box" ${EX}><h3>Example ${i + 1}: ${e.h}</h3>
    <p>${e.p}</p>
    ${figWrap(e.fig)}
    <div class="solution">${e.steps.map((s) => `<div class="step">${s}</div>`).join("")}${e.check ? `<em>${e.check}</em>` : ""}</div>
  </div>`).join("\n\n  ");

  const pr = practice.map((q, i) => `<div class="practice-box" ${PR}><h3>Question ${i + 1}</h3><p>${q.q}</p>${figWrap(q.fig)}<details><summary>View answer</summary><div class="solution"><div class="step"><em>${q.a}</em></div></div></details></div>`).join("\n  ");

  const qas = qa.map((item, i) => `<div class="qa-box" ${QA}><h3>Q${i + 1}: ${item.q}</h3><p><em>${item.a}</em></p></div>`).join("\n  ");

  const tools = toolkit.map((t) => `<li>${t}</li>`).join("\n    ");

  return html(String.raw`<div class="lecture-box">
  <h1>${emoji} ${title}</h1>
  <p><strong>Overview.</strong> ${overview}</p>

  <h2>📌 The toolkit</h2>
  <ul>
    ${tools}
  </ul>
  ${figWrap(figure)}

  <h2>🔵 Examples</h2>
  ${ex}

  <h2>🟡 Practice Questions</h2>
  ${pr}

  <h2>❓ Q&amp;A Summary</h2>
  ${qas}
</div>`);
}
