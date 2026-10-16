// MTH1W chapter 1 — self-study lesson format (2026-10 upgrade).
// Every lesson is an ordered list of blocks:
//   intro card (goals, curriculum, prior-knowledge check, key words)
//   concept sections (html, with figures) interleaved with interactive explorer widgets
//   exactly 5 worked examples · a 5-question checked-practice widget · Q&A + summary
// Nothing here touches the database; publish.mjs does.
import { html, ex, qa, watchOut, table, numberLine, chips, fracBar, areaModel, tape } from "../lib.mjs";
export { html, ex, qa, watchOut, table, numberLine, chips, fracBar, areaModel, tape };

let n = 0;
const wid = () => `w${Date.now().toString(36)}${(n++).toString(36)}`;
export const widget = (name, props = {}) => ({ id: wid(), type: "widget", widget: name, props });

const GOALS = `style="background:#f0fdf4;border:1px solid #bbf7d0;border-left:5px solid #15803d;border-radius:8px;padding:10px 16px;margin:12px 0;"`;
const META = `style="font-size:13.5px;color:#475569;margin:6px 0 0;"`;
const KEY = `style="background:#eef2ff;border-left:5px solid #4338ca;border-radius:8px;padding:10px 16px;margin:12px 0;"`;

/** First card of every lesson. */
export function intro({ icon, title, overview, goals, curriculum, book, prior, words }) {
  return html(`<div class="lecture-box">
  <h1>${icon} ${title}</h1>
  <p><strong>Overview.</strong> ${overview}</p>
  <div ${GOALS}><strong>By the end of this lesson you will be able to:</strong><ul style="margin:6px 0 0;">${goals.map((g) => `<li>${g}</li>`).join("")}</ul>
  <p ${META}><strong>Ontario MTH1W:</strong> ${curriculum} &nbsp;·&nbsp; <strong>Textbook link:</strong> ${book}</p></div>
  <h2>🧭 Before you start</h2>
  <p>Answer these in your head first. If any feels shaky, open the answer and review it before going on.</p>
  ${prior.map(([q, a]) => `<details style="margin:6px 0;"><summary><strong>${q}</strong></summary><p style="margin:6px 0 0 18px;"><em>${a}</em></p></details>`).join("")}
  <h2>📖 Key words</h2>
  ${table(["Word", "Meaning", "Example"], words)}
</div>`);
}

/** A concept section (one html block). `body` is raw HTML. */
export const section = (heading, body) => html(`<div class="lecture-box"><h2>${heading}</h2>${body}</div>`);

/** Key idea call-out inside a section. */
export const keyIdea = (text) => `<div ${KEY}><strong>Key idea.</strong> ${text}</div>`;

/** The five worked examples. Each item: [title, question, steps[], conclusion, figure?]. */
export function examples(items) {
  if (items.length !== 5) throw new Error(`need exactly 5 examples, got ${items.length}`);
  return html(`<div class="lecture-box"><h2>🔵 Worked examples</h2>
  <p>Cover the solution, try the question, then read the steps. Each example adds one new idea.</p>
  ${items.map(([t, q, s, c, fig], i) => ex(`Example ${i + 1}: ${t}`, q, s, c, fig ?? "")).join("\n")}
</div>`);
}

/** The five checked practice questions. */
export function practice(questions) {
  if (questions.length !== 5) throw new Error(`need exactly 5 practice questions, got ${questions.length}`);
  return widget("practice", { questions });
}
// answer-spec shorthands
export const num = (value, tol) => ({ kind: "number", value, ...(tol !== undefined ? { tol } : {}) });
/** a number that must be typed as a fraction / mixed number (a rounded decimal is not accepted) */
export const frac = (n, d) => ({ kind: "number", value: n / d, form: "fraction" });
/** a number that must be typed in scientific notation (a x 10^n) */
export const sci = (a, e) => ({ kind: "number", value: a * 10 ** e, form: "sci", tol: Math.abs(a * 10 ** e) * 1e-9 });
export const pct = (value) => ({ kind: "number", value, percent: true, tol: 1e-6 });
export const txt = (...accept) => ({ kind: "text", accept });
export const choice = (options, correct) => ({ kind: "choice", options, correct });
/** a ratio answer; by default it must be typed in simplest form */
export const ratio = (a, b, lowest = true) => ({ kind: "ratio", value: [a, b], lowest });
export const q = (label, prompt, answer, hint, solution, final, extra = {}) => ({ label, prompt, answer, hint, solution, final, ...extra });

/** Q&A (5 items) + summary + what comes next. */
export function wrapUp({ qas, summary, next }) {
  if (qas.length !== 5) throw new Error(`need exactly 5 Q&A items, got ${qas.length}`);
  return html(`<div class="lecture-box"><h2>❓ Q&amp;A</h2>
  ${qas.map(([qq, a], i) => qa(`Q${i + 1}: ${qq}`, a)).join("\n")}
  <h2>✅ Summary</h2>
  <ul>${summary.map((s) => `<li>${s}</li>`).join("")}</ul>
  <p><strong>Next:</strong> ${next}</p>
</div>`);
}
