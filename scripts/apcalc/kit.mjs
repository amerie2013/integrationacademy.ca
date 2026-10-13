// Lesson-building helpers for the AP Calculus AB exam-prep course. Every lesson
// is one html block wrapped in `.lecture-box.apx` (styled in app/globals.css),
// assembled from the same parts in the same order so the course reads as one
// book: lede → targets → concept sections → worked examples at three levels →
// common errors → a model written justification → practice → summary.
//
// Math is written as \( … \) inline and \[ … \] display; pass strings through
// String.raw so backslashes survive.
let _b = 0;
const html = (h) => ({ id: `b${Date.now().toString(36)}${(_b++).toString(36)}`, type: "html", html: h });

export const r = String.raw;

const LEVEL = { core: "Core", exam: "Exam level", stretch: "Stretch" };

/** chips: [text] or [text, "gold"] */
// "1.5–1.6" is a framework topic number; anything else ("prerequisite", "exam skills") is shown as it is
const topicChip = (official) => [/^\d/.test(official) ? `Framework topic ${official}` : official, "gold"];
const meta = (chips) => `<div class="apx-meta">${chips.map((c) => (Array.isArray(c) ? `<span class="apx-chip ${c[1]}">${c[0]}</span>` : `<span class="apx-chip">${c}</span>`)).join("")}</div>`;

export const lede = (t) => `<p class="apx-lede">${t}</p>`;
export const goals = (items) => `<div class="apx-goals"><span class="apx-cap">By the end of this lesson you can</span><ul>${items.map((x) => `<li>${x}</li>`).join("")}</ul></div>`;
let _sec = 0;
export const sec = (title) => `<h2><span class="apx-n">${String(++_sec).padStart(2, "0")}</span>${title}</h2>`;
export const p = (t) => `<p>${t}</p>`;
export const disp = (tex) => `<p style="text-align:center;">\\[ ${tex} \\]</p>`;
export const def = (title, body) => `<div class="apx-def"><span class="apx-cap">Definition · ${title}</span>${body}</div>`;
export const thm = (title, body) => `<div class="apx-thm"><span class="apx-cap">Theorem · ${title}</span>${body}</div>`;
export const exam = (body) => `<div class="apx-exam"><span class="apx-cap">On the exam</span>${body}</div>`;
export const mistake = (title, body) => `<div class="mistake-box"><span class="apx-cap">Common error · ${title}</span>${body}</div>`;
/** A model free-response justification, worded the way a reader awards the point. */
export const justify = (prompt, script, why) => `<div class="apx-justify"><span class="apx-cap">Write it so it scores</span><p><strong>Prompt.</strong> ${prompt}</p><p class="apx-script">${script}</p><p><strong>Why this earns the point.</strong> ${why}</p></div>`;

/** Worked example. steps: array of html strings; result: final line. */
export const ex = (level, title, prompt, steps, result) => `<div class="example-box"><span class="apx-lvl ${level}">${LEVEL[level]}</span><h3>${title}</h3><p>${prompt}</p><div class="solution">${steps.map((s, i) => `<div class="step"><strong>${i + 1}.</strong> ${s}</div>`).join("")}<span class="apx-result">${result}</span></div></div>`;

/** Practice question with a hidden worked answer. */
let _q = 0;
export const pq = (prompt, answer, tag = "") => `<div class="practice-box"><h3>Question ${++_q}${tag ? ` <span class="apx-lvl ${tag}">${LEVEL[tag]}</span>` : ""}</h3><p>${prompt}</p><details><summary>Show worked answer</summary><div class="solution"><div class="step">${answer}</div></div></details></div>`;

export const key = (cards) => `<div class="apx-key">${cards.map(([t, b]) => `<div><strong>${t}</strong>${b}</div>`).join("")}</div>`;
export const table = (head, rows) => `<div class="apx-scroll"><table class="apx-table"><tr>${head.map((h) => `<th>${h}</th>`).join("")}</tr>${rows.map((row) => `<tr>${row.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</table></div>`;

/**
 * Assemble a lesson.
 *   code/title  — our own numbering and wording
 *   official    — the matching topic number(s) in the published course framework
 *   calc        — "No calculator" | "Calculator" | "Both"
 */
export function lesson({ code, title, unit, official, calc = "No calculator", parts }) {
  _sec = 0; _q = 0;
  const body = typeof parts === "function" ? parts() : parts;
  const chips = [`Unit ${unit}`, `Lesson ${code}`, topicChip(official), calc];
  return {
    code, title,
    blocks: [html(`<div class="lecture-box apx"><h1>${title}</h1>${meta(chips)}${body.join("\n")}</div>`)],
  };
}

/** Placeholder for a lesson that is planned but not yet written. */
export const planned = (code, title, unit, official, overview, learn) => ({
  code, title,
  blocks: [html(`<div class="lecture-box apx"><h1>${title}</h1>${meta([`Unit ${unit}`, `Lesson ${code}`, topicChip(official)])}${lede(overview)}${goals(learn)}<div class="apx-soon">Full worked examples and practice for this lesson are being written.</div></div>`)],
});
