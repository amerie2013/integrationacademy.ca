// Sign charts (factor tables) for polynomial inequalities, generated from the factors so the signs can never be mistyped.
//   lin(a, b, p)  the factor (ax + b)^p        k(c)  a constant factor
//   signTable(factors, op)  -> HTML for the lessons      signTex(factors, op) -> LaTeX tabular for the worksheets
// op is one of "<", ">", "<=", ">=" (the inequality against 0); the intervals that satisfy it are shaded.
import { table } from "./lib.mjs";

const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
const MINUS = "−";
const VULGAR = { "1/2": "½", "1/3": "⅓", "2/3": "⅔", "1/4": "¼", "3/4": "¾" };

/** the factor (ax + b)^p */
export function lin(a, b, p = 1) {
  let rn = -b, rd = a;
  if (rd < 0) { rn = -rn; rd = -rd; }
  const d = gcd(rn, rd) || 1; rn /= d; rd /= d;
  const ax = a === 1 ? "x" : a === -1 ? `${MINUS}x` : `${a < 0 ? MINUS : ""}${Math.abs(a)}x`;
  const bs = b > 0 ? ` + ${b}` : b < 0 ? ` ${MINUS} ${-b}` : "";
  const axT = a === 1 ? "x" : a === -1 ? "-x" : `${a}x`;
  const bT = b > 0 ? `+${b}` : b < 0 ? `${b}` : "";
  return { kind: "lin", a, b, p, root: rn / rd, rn, rd, html: ax + bs, tex: axT + bT, bare: b === 0 && Math.abs(a) === 1 };
}
/** a constant factor such as -1 */
export const k = (c) => ({ kind: "const", c, html: c < 0 ? `${MINUS}${Math.abs(c)}` : `${c}`, tex: `${c}` });

const rootHtml = (f) => (f.rd === 1 ? (f.rn < 0 ? `${MINUS}${-f.rn}` : `${f.rn}`) : `${f.rn < 0 ? MINUS : ""}${VULGAR[`${Math.abs(f.rn)}/${f.rd}`] ?? `${Math.abs(f.rn)}/${f.rd}`}`);
const rootTex = (f) => (f.rd === 1 ? `${f.rn}` : `${f.rn < 0 ? "-" : ""}\\tfrac{${Math.abs(f.rn)}}{${f.rd}}`);

function model(factors, op) {
  const lins = factors.filter((f) => f.kind === "lin");
  const roots = [];
  for (const f of lins) {
    const hit = roots.find((r) => Math.abs(r.v - f.root) < 1e-9);
    if (hit) hit.mult += f.p; else roots.push({ v: f.root, f, mult: f.p });
  }
  roots.sort((x, y) => x.v - y.v);
  const n = roots.length;
  const samples = Array.from({ length: n + 1 }, (_, i) => (i === 0 ? roots[0].v - 1 : i === n ? roots[n - 1].v + 1 : (roots[i - 1].v + roots[i].v) / 2));
  const sgn = (f, x) => (f.kind === "const" ? Math.sign(f.c) : Math.sign(f.a * x + f.b) ** f.p);
  const signs = factors.map((f) => samples.map((x) => sgn(f, x)));
  const prod = samples.map((_, j) => signs.reduce((acc, row) => acc * row[j], 1));
  const wantNeg = op.startsWith("<");
  const strict = !op.includes("=");
  const ok = prod.map((s) => (wantNeg ? s < 0 : s > 0));
  // roots (with an even total multiplicity) whose two neighbours both fail the inequality are still solutions for ≤ / ≥
  const isolated = strict ? [] : roots.filter((r, i) => ok[i] === false && ok[i + 1] === false && r.mult % 2 === 0);
  return { roots, n, signs, prod, ok, strict, isolated, wantNeg };
}

const opHtml = (op) => ({ "<": "&lt;", ">": "&gt;", "<=": "≤", ">=": "≥" }[op]);
const opTex = (op) => ({ "<": "<", ">": ">", "<=": "\\le", ">=": "\\ge" }[op]);
const sg = (s) => (s > 0 ? "+" : s < 0 ? MINUS : "0");

/** HTML sign chart (factor table) */
export function signTable(factors, op) {
  const m = model(factors, op);
  const lab = (i) => rootHtml(m.roots[i].f);
  const head = ["", ...Array.from({ length: m.n + 1 }, (_, i) => (i === 0 ? `x &lt; ${lab(0)}` : i === m.n ? `x &gt; ${lab(m.n - 1)}` : `${lab(i - 1)} &lt; x &lt; ${lab(i)}`))];
  const name = (f) => (f.kind === "const" ? f.html : f.p > 1 ? `(${f.html})<sup>${f.p}</sup>` : f.bare ? f.html : `(${f.html})`);
  const rows = factors.map((f, i) => [name(f), ...m.signs[i].map(sg)]);
  rows.push(["<strong>product</strong>", ...m.prod.map((s, j) => (m.ok[j] ? `<strong style="background:#dcfce7;padding:2px 10px;border-radius:4px;">${sg(s)}</strong>` : sg(s)))]);
  const zeros = m.roots.map((_, i) => lab(i)).join(", ").replace(/, ([^,]*)$/, " and $1");
  const note = `Highlighted: where the product is ${opHtml(op)} 0. ${m.strict ? `The zeros ${zeros} are not included.` : `The zeros ${zeros} are included.`}${m.isolated.length ? ` The zero x = ${rootHtml(m.isolated[0].f)} is also a solution on its own.` : ""}`;
  return `${table(head, rows)}<p style="font-size:13px;color:#475569;margin:-4px 0 8px;">${note}</p>`;
}

/** LaTeX sign chart for the worksheets (needs xcolor; iagreen is defined in the preamble) */
export function signTex(factors, op) {
  const m = model(factors, op);
  const lab = (i) => rootTex(m.roots[i].f);
  const head = Array.from({ length: m.n + 1 }, (_, i) => `$${i === 0 ? `x<${lab(0)}` : i === m.n ? `x>${lab(m.n - 1)}` : `${lab(i - 1)}<x<${lab(i)}`}$`);
  const name = (f) => (f.kind === "const" ? `$${f.tex}$` : f.p > 1 ? `$(${f.tex})^{${f.p}}$` : f.bare ? `$${f.tex}$` : `$(${f.tex})$`);
  const cell = (s) => (s > 0 ? "$+$" : "$-$");
  const rows = factors.map((f, i) => `${name(f)} & ${m.signs[i].map(cell).join(" & ")} \\\\ \\hline`);
  rows.push(`\\textbf{product} & ${m.prod.map((s, j) => (m.ok[j] ? `\\colorbox{iagreen!22}{${cell(s)}}` : cell(s))).join(" & ")} \\\\ \\hline`);
  const zeros = m.roots.map((_, i) => `$${lab(i)}$`).join(", ");
  const note = `Shaded: where the product is $${opTex(op)}\\,0$. The zeros ${zeros} are ${m.strict ? "not " : ""}included.${m.isolated.length ? ` The zero $x=${rootTex(m.isolated[0].f)}$ is also a solution on its own.` : ""}`;
  return `\\par\\smallskip\\begin{center}\\small\\begin{tabular}{|l|${"c|".repeat(m.n + 1)}}\\hline & ${head.join(" & ")} \\\\ \\hline
${rows.join("\n")}
\\end{tabular}\\\\[2pt]{\\footnotesize ${note}}\\end{center}`;
}

/** the solution intervals the chart implies, for self-checking: [[lo, hi, loIncl, hiIncl], ...] */
export function solve(factors, op) {
  const m = model(factors, op);
  const out = [];
  m.ok.forEach((good, j) => {
    if (!good) return;
    const lo = j === 0 ? -Infinity : m.roots[j - 1].v, hi = j === m.n ? Infinity : m.roots[j].v;
    out.push([lo, hi, !m.strict && Number.isFinite(lo), !m.strict && Number.isFinite(hi)]);
  });
  for (const r of m.isolated) out.push([r.v, r.v, true, true]);
  return out;
}
