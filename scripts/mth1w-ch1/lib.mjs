// Shared helpers for the MTH1W chapter 1 rebuild (lesson markup, figures, bank builders,
// worksheet packing). Each topic module imports from here; nothing touches the database.
import { html, gframe } from "../seed-mpm2d.mjs";
export { html, gframe };

// ───────── styles (same look as the existing Grade 9 / MCR3U lessons) ─────────
export const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const MI = `style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const TH = `style="border:1px solid #c7d2fe;padding:7px 12px;text-align:center;background:#eef2ff;color:#3730a3;"`;
const TD = `style="border:1px solid #e2e8f0;padding:6px 12px;text-align:center;"`;
const TDL = `style="border:1px solid #e2e8f0;padding:6px 12px;text-align:left;font-weight:700;"`;

// ───────── lesson building blocks ─────────
export const ex = (title, q, steps, conclusion, extra = "") =>
  `<div class="example-box" ${EX}><h3>${title}</h3><p>${q}</p><div class="solution">${steps
    .map((s, i) => `<div class="step"><strong>Step ${i + 1}:</strong> ${s}</div>`)
    .join("")}<em>Conclusion: ${conclusion} ✓</em></div>${extra}</div>`;
export const pr = (n, label, q, ans) =>
  `<div class="practice-box" ${PR}><h3>Question ${n} (${label})</h3><p>${q}</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>${ans}</em></div></div></details></div>`;
export const qa = (q, a) => `<div class="qa-box" ${QA}><h3>${q}</h3><p><em>${a}</em></p></div>`;
export const watchOut = (items) => `<div class="mistake-box" ${MI}><h3>⚠️ Watch out</h3><ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul></div>`;
export const table = (head, rows) =>
  `<div style="overflow-x:auto;margin:10px 0;"><table style="border-collapse:collapse;width:100%;font-size:14px;"><thead><tr>${head.map((h) => `<th ${TH}>${h}</th>`).join("")}</tr></thead><tbody>${rows
    .map((r) => `<tr>${r.map((c, i) => `<td ${i === 0 ? TDL : TD}>${c}</td>`).join("")}</tr>`)
    .join("")}</tbody></table></div>`;

// ───────── figures ─────────
const figWrap = (svg, caption) => `<div style="text-align:center;margin:12px 0;">${svg}<div style="font-size:13px;color:#64748b;margin-top:2px;">${caption}</div></div>`;
const COLORS = { blue: "#1e40af", red: "#be123c", green: "#15803d", amber: "#b45309", gray: "#475569" };

/** Number line from min to max with optional arrows (moves) and dots. arrows: [{from,to,label,color,lane}] */
export function numberLine({ min, max, arrows = [], dots = [], caption, unit = 34, id = "nl" }) {
  const W = (max - min) * unit + 40, lanes = Math.max(1, ...arrows.map((a) => (a.lane ?? 0) + 1));
  const axisY = 30 + lanes * 34, H = axisY + 40;
  const X = (v) => 20 + (v - min) * unit;
  let s = `<defs>${Object.entries(COLORS).map(([k, c]) => `<marker id="${id}-${k}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${c}"/></marker>`).join("")}</defs>`;
  s += `<line x1="${X(min) - 8}" y1="${axisY}" x2="${X(max) + 8}" y2="${axisY}" stroke="#334155" stroke-width="2"/>`;
  for (let v = min; v <= max; v++) {
    s += `<line x1="${X(v)}" y1="${axisY - 6}" x2="${X(v)}" y2="${axisY + 6}" stroke="#334155" stroke-width="${v === 0 ? 2.5 : 1.5}"/>`;
    s += `<text x="${X(v)}" y="${axisY + 22}" font-size="12" text-anchor="middle" fill="#0f172a" font-weight="${v === 0 ? 800 : 500}">${v < 0 ? "−" + -v : v}</text>`;
  }
  for (const a of arrows) {
    const y = axisY - 20 - (a.lane ?? 0) * 34, col = a.color ?? "blue";
    s += `<path d="M${X(a.from)},${axisY - 4} L${X(a.from)},${y} L${X(a.to)},${y} L${X(a.to)},${axisY - 4}" fill="none" stroke="${COLORS[col]}" stroke-width="2.2" marker-end="url(#${id}-${col})"/>`;
    if (a.label) s += `<text x="${(X(a.from) + X(a.to)) / 2}" y="${y - 6}" font-size="12.5" font-weight="700" text-anchor="middle" fill="${COLORS[col]}">${a.label}</text>`;
  }
  for (const d of dots) s += `<circle cx="${X(d.at)}" cy="${axisY}" r="5.5" fill="${COLORS[d.color ?? "red"]}" stroke="#fff" stroke-width="1.5"/>` + (d.label ? `<text x="${X(d.at)}" y="${axisY - 12}" font-size="12" font-weight="700" text-anchor="middle" fill="${COLORS[d.color ?? "red"]}">${d.label}</text>` : "");
  return figWrap(`<svg viewBox="0 0 ${W} ${H}" width="${W}" style="max-width:100%;height:auto;" role="img" aria-label="${caption}">${s}</svg>`, caption);
}

/** Zero-pair chips: p positive and n negative chips; matching pairs are boxed. */
export function chips({ pos, neg, caption }) {
  const pairs = Math.min(pos, neg), r = 11, gap = 30;
  const colsPair = pairs, extraPos = pos - pairs, extraNeg = neg - pairs;
  const cols = colsPair + Math.max(extraPos, extraNeg);
  const W = cols * gap + 30, H = 88;
  let s = "";
  const chip = (cx, cy, plus) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${plus ? "#fde68a" : "#fecdd3"}" stroke="${plus ? "#b45309" : "#be123c"}" stroke-width="1.6"/><text x="${cx}" y="${cy + 5}" font-size="15" font-weight="800" text-anchor="middle" fill="${plus ? "#b45309" : "#be123c"}">${plus ? "+" : "−"}</text>`;
  for (let i = 0; i < colsPair; i++) {
    const cx = 25 + i * gap;
    s += `<rect x="${cx - 15}" y="10" width="30" height="64" rx="8" fill="none" stroke="#94a3b8" stroke-dasharray="4 3"/>` + chip(cx, 28, true) + chip(cx, 58, false);
  }
  for (let i = 0; i < extraPos; i++) s += chip(25 + (colsPair + i) * gap, 28, true);
  for (let i = 0; i < extraNeg; i++) s += chip(25 + (colsPair + i) * gap, 58, false);
  return figWrap(`<svg viewBox="0 0 ${W} ${H}" width="${W}" style="max-width:100%;height:auto;" role="img" aria-label="${caption}">${s}</svg>`, caption);
}

/** Fraction bar: n of d equal pieces shaded. Optional second shading (overlap) for area models. */
export function fracBar({ n, d, caption, color = "#bfdbfe", stroke = "#1e40af", w = 240 }) {
  const cell = w / d;
  let s = "";
  for (let i = 0; i < d; i++) s += `<rect x="${10 + i * cell}" y="10" width="${cell}" height="30" fill="${i < n ? color : "#fff"}" stroke="${stroke}" stroke-width="1.5"/>`;
  return figWrap(`<svg viewBox="0 0 ${w + 20} 50" width="${w + 20}" style="max-width:100%;height:auto;" role="img" aria-label="${caption}">${s}</svg>`, caption);
}

/** Area model for (a/b) × (c/d): a b-by-d grid, rows of c shaded one way, columns of a another; overlap = product. */
export function areaModel({ a, b, c, d, caption }) {
  const cw = 34, ch = 26, W = b * cw + 30, H = d * ch + 20;
  let s = "";
  for (let i = 0; i < b; i++) for (let j = 0; j < d; j++) {
    const inA = i < a, inC = j < c;
    const fill = inA && inC ? "#86efac" : inA ? "#bfdbfe" : inC ? "#fde68a" : "#fff";
    s += `<rect x="${10 + i * cw}" y="${10 + j * ch}" width="${cw}" height="${ch}" fill="${fill}" stroke="#475569" stroke-width="1.2"/>`;
  }
  return figWrap(`<svg viewBox="0 0 ${W} ${H}" width="${W}" style="max-width:100%;height:auto;" role="img" aria-label="${caption}">${s}</svg>`, caption);
}

/** Tape diagram (groups of equal parts). segs: [{n,label,fill,stroke}] */
export function tape(segs, caption, unit = 32) {
  const total = segs.reduce((s, g) => s + g.n, 0);
  const W = total * unit + 20, H = 82;
  let x = 10, out = "";
  for (const g of segs) {
    const x0 = x;
    for (let i = 0; i < g.n; i++) { out += `<rect x="${x}" y="26" width="${unit}" height="34" fill="${g.fill}" stroke="${g.stroke}" stroke-width="1.5"/>`; x += unit; }
    out += `<text x="${x0 + (g.n * unit) / 2}" y="18" font-size="12" font-weight="700" text-anchor="middle" fill="${g.stroke}">${g.label}</text>`;
    out += `<text x="${x0 + (g.n * unit) / 2}" y="76" font-size="12" font-weight="700" text-anchor="middle" fill="#0f172a">${g.n} ${g.n === 1 ? "part" : "parts"}</text>`;
  }
  return figWrap(`<svg viewBox="0 0 ${W} ${H}" width="${W}" style="max-width:100%;height:auto;" role="img" aria-label="${caption}">${out}</svg>`, caption);
}

// ───────── numbers ─────────
export const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a || 1; };
export const lcm = (a, b) => (a / gcd(a, b)) * b;
export const MINUS = "−";
/** Signed integer for use inside \( \): negative numbers in brackets when `p` is true. */
export const sg = (n, p = false) => (n < 0 ? (p ? `(-${-n})` : `-${-n}`) : `${n}`);
/** LaTeX fraction (reduced) of integers n/d; whole numbers print plainly. */
export function frac(n, d = 1) { const g = gcd(n, d); n /= g; d /= g; if (d < 0) { n = -n; d = -d; } return d === 1 ? `${n}` : n < 0 ? `-\\dfrac{${-n}}{${d}}` : `\\dfrac{${n}}{${d}}`; }
export const fr = (n, d) => (d === 1 ? `${n}` : `\\dfrac{${n}}{${d}}`);

// ───────── seeded random so published banks are reproducible ─────────
export function rng(seed = 1) {
  let s = seed >>> 0;
  const next = () => { s = (s + 0x6d2b79f5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const int = (lo, hi) => lo + Math.floor(next() * (hi - lo + 1));
  const pick = (a) => a[Math.floor(next() * a.length)];
  const shuffle = (a) => { const r = [...a]; for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(next() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; };
  return { next, int, pick, shuffle };
}

// ───────── bank builders (shape matches bank_questions) ─────────
const L = "abcdefghij";
export function bankKit(R) {
  const mcA = (difficulty, prompt, correct, distractors, feedback = "") => {
    const uniq = [...new Set(distractors.filter((d) => d !== correct))].slice(0, 3);
    if (uniq.length < 3) return null; // not enough distinct wrong answers: let the generator try other operands
    const o = R.shuffle([correct, ...uniq]);
    return { difficulty, kind: "multiple_choice", prompt, choices: o.map((t, i) => ({ id: L[i], text: t })), answer: L[o.indexOf(correct)], points: 1, feedback };
  };
  const ms = (difficulty, prompt, choices, correct, feedback = "") => ({ difficulty, kind: "multiple_select", prompt, choices: choices.map((t, i) => ({ id: L[i], text: t })), answer: correct.map((i) => L[i]), points: 1, feedback });
  const tf = (difficulty, prompt, correct, feedback = "") => ({ difficulty, kind: "true_false", prompt, answer: correct ? "true" : "false", points: 1, feedback });
  const num = (difficulty, prompt, value, tol = 0, feedback = "") => ({ difficulty, kind: "numeric", prompt, answer: value, tolerance: tol, points: 1, feedback });
  const fill = (difficulty, prompt, accepted, feedback = "") => ({ difficulty, kind: "fill_blank", prompt, answer: accepted, points: 1, feedback });
  return { mcA, ms, tf, num, fill };
}

/** Collect questions from template functions until each difficulty has `per` unique prompts.
 *  Each template contributes at most `max` (default 3); numeric/multiple-choice are capped per difficulty
 *  on the first pass so true/false, multiple-select and fill-in questions get a fair share. */
export function fillBank(templates, per = 20, caps = { numeric: 7, multiple_choice: 7 }) {
  const out = [], seen = new Set(), used = templates.map(() => 0);
  const have = (d) => out.filter((q) => q.difficulty === d).length;
  const haveKind = (d, k) => out.filter((q) => q.difficulty === d && q.kind === k).length;
  for (const strict of [true, false]) {
    for (let round = 0; round < 600; round++) {
      let progressed = false;
      templates.forEach((t, i) => {
        if (have(t.d) >= per || used[i] >= (t.max ?? 3)) return;
        const q = t.make();
        if (!q || seen.has(q.prompt)) return;
        if (strict && caps[q.kind] !== undefined && haveKind(t.d, q.kind) >= caps[q.kind]) return;
        seen.add(q.prompt); out.push(q); used[i]++; progressed = true;
      });
      if (["easy", "medium", "hard"].every((d) => have(d) >= per)) break;
      if (!progressed && round > 60) break;
    }
    if (["easy", "medium", "hard"].every((d) => have(d) >= per)) break;
    templates.forEach((t, i) => { used[i] = Math.min(used[i], 1); });
  }
  const order = { easy: 0, medium: 1, hard: 2 };
  return out.sort((a, b) => order[a.difficulty] - order[b.difficulty]);
}

// ───────── worksheet packing ─────────
/** Convert the lightweight <b>/<i> markup used in worksheet text to LaTeX text. */
export const tex = (s) => s.replace(/<b>(.*?)<\/b>/g, String.raw`\textbf{$1}`).replace(/<i>(.*?)<\/i>/g, String.raw`\textit{$1}`).replace(/<br>/g, String.raw`\\ `).replace(/&/g, String.raw`\&`);

/** One authored worksheet -> { content (on-site), texData (PDF generator shape) }. */
export function packWorksheet({ code, title, intro, bigideas, lesson, examples, questions, unit = "Unit 1: Number Sense" }) {
  const content = {
    grade: "MTH1W", title, intro, lesson,
    examples,
    questions: questions.map(([label, text, answer]) => [label.replace(/ --- /g, " — "), text, answer.replace(/ --- /g, " — ")]),
  };
  const texData = {
    code, title, unit,
    bigideas: tex(bigideas),
    concepts: lesson.map(([h, b]) => [h, tex(b)]),
    examples: examples.map(([t, q, s]) => [t.replace(/^Example \d+: /, ""), tex(q), tex(s)]),
    problems: questions.map(([label, q, , cm]) => [label, tex(q), cm ?? 3.2]),
    answers: questions.map(([, , a]) => tex(a)),
  };
  return { content, texData };
}

// ───────── fraction helpers for generated banks ─────────
export function fracKit() {
  const red = (n, d) => { const g = gcd(n, d); n /= g; d /= g; if (d < 0) { n = -n; d = -d; } return [n, d]; };
  const F = (n, d) => (d === 1 ? `${n}` : n < 0 ? `-\\frac{${-n}}{${d}}` : `\\frac{${n}}{${d}}`);
  const FR = (n, d) => { [n, d] = red(n, d); return F(n, d); };
  const mixed = (n, d) => { [n, d] = red(n, d); const neg = n < 0; n = Math.abs(n); const w = Math.floor(n / d), r = n % d; const s = r === 0 ? `${w}` : w === 0 ? `\\frac{${r}}{${d}}` : `${w}\\frac{${r}}{${d}}`; return neg ? `-${s}` : s; };
  const mixedPlain = (n, d) => { [n, d] = red(n, d); const neg = n < 0; n = Math.abs(n); const w = Math.floor(n / d), r = n % d; const t = r === 0 ? `${w}` : w === 0 ? `${r}/${d}` : `${w} ${r}/${d}`; return neg ? `-${t}` : t; };
  /** Every typed form a student might use for n/d. */
  const forms = (n, d) => { [n, d] = red(n, d); if (d === 1) return [String(n)]; const base = [`${n}/${d}`, `\\frac{${n}}{${d}}`]; if (Math.abs(n) > d) base.push(mixedPlain(n, d), mixed(n, d)); return [...new Set(base)]; };
  const mul = (a, b) => red(a[0] * b[0], a[1] * b[1]);
  const div = (a, b) => red(a[0] * b[1], a[1] * b[0]);
  const addf = (a, b) => red(a[0] * b[1] + b[0] * a[1], a[1] * b[1]);
  const subf = (a, b) => red(a[0] * b[1] - b[0] * a[1], a[1] * b[1]);
  return { red, F, FR, mixed, mixedPlain, forms, mul, div, addf, subf };
}
