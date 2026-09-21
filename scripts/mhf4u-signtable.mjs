// Sign-chart ("interval table") generator for polynomial inequalities, shared by the MHF4U
// lesson 2.4 (HTML/KaTeX) and worksheet 2.4 (LaTeX). Signs and the solution set are computed,
// not typed, so every table is correct by construction.
//
//   const c = signChart({ factors: [{ tex: "x-1", f: (x) => x - 1, root: 1 }, ...], ineq: ">" });
//   c.html(), c.tex(), c.ineq  (e.g. "x<-2\\text{ or }x>1"), c.interval (e.g. "(-\\infty,-2)\\cup(1,\\infty)")
//
// factor: { tex, f, root, rootTex?, mult? }   (f evaluated at the test points; root is its zero)
// ineq: ">" | "<" | ">=" | "<="      ans: optional nicer wording for the inequality form of the answer
const sgn = (v) => (Math.abs(v) < 1e-12 ? 0 : v > 0 ? 1 : -1);
const num = (n) => (Number.isInteger(n) ? String(n) : String(+n.toFixed(3)));
const sym = (s) => (s > 0 ? "+" : s < 0 ? "-" : "0");
const OK = { ">": (s) => s > 0, "<": (s) => s < 0, ">=": (s) => s >= 0, "<=": (s) => s <= 0 };
const TEXOP = { ">": ">", "<": "<", ">=": "\\ge", "<=": "\\le" };

export function signChart(spec) {
  const factors = spec.factors.map((f) => ({ mult: 1, rootTex: f.root === undefined ? "" : num(f.root), ...f }));
  // constant factors (no root) affect the sign only; `den: true` marks a denominator factor, whose zero makes the quotient undefined
  const zeros = [...new Map(factors.filter((f) => f.root !== undefined).map((f) => [f.root, f.rootTex])).entries()].sort((a, b) => a[0] - b[0]);
  const rational = factors.some((f) => f.den);
  const n = zeros.length;
  const test = [];
  for (let k = 0; k <= n; k++) {
    if (k === 0) test.push(Math.floor(zeros[0][0] - 1e-9));
    else if (k === n) test.push(Math.floor(zeros[n - 1][0]) + 1);
    else {
      const a = zeros[k - 1][0], b = zeros[k][0], m = Math.floor(a) + 1;
      test.push(m < b ? m : (a + b) / 2);
    }
  }
  // columns alternate: interval 0, zero 0, interval 1, zero 1, ... interval n
  const cols = [];
  for (let k = 0; k <= n; k++) {
    const head = k === 0 ? `x<${zeros[0][1]}` : k === n ? `x>${zeros[n - 1][1]}` : `${zeros[k - 1][1]}<x<${zeros[k][1]}`;
    cols.push({ kind: "int", k, head, x: test[k] });
    if (k < n) cols.push({ kind: "zero", k, head: `x=${zeros[k][1]}`, x: zeros[k][0] });
  }
  for (const c of cols) {
    c.signs = factors.map((f) => sgn(f.f(c.x)));
    c.und = factors.some((f, i) => f.den && c.signs[i] === 0);
    c.p = c.und ? 0 : c.signs.reduce((a, b) => a * b, 1);
    c.ok = !c.und && OK[spec.ineq](c.p);
  }
  // solution set: merge consecutive selected columns into runs
  const runs = [];
  cols.forEach((c, i) => {
    if (!c.ok) return;
    const last = runs[runs.length - 1];
    if (last && last.to === i - 1) last.to = i; else runs.push({ from: i, to: i });
  });
  const left = (r) => { const c = cols[r.from]; return c.kind === "zero" ? { v: zeros[c.k][1], closed: true } : c.k === 0 ? null : { v: zeros[c.k - 1][1], closed: false }; };
  const right = (r) => { const c = cols[r.to]; return c.kind === "zero" ? { v: zeros[c.k][1], closed: true } : c.k === n ? null : { v: zeros[c.k][1], closed: false }; };
  const ineqParts = [], intParts = [];
  for (const r of runs) {
    const L = left(r), R = right(r);
    if (L && R && L.v === R.v) { ineqParts.push(`x=${L.v}`); intParts.push(`\\{${L.v}\\}`); continue; }
    if (!L) ineqParts.push(`x${R.closed ? "\\le" : "<"}${R.v}`);
    else if (!R) ineqParts.push(`x${L.closed ? "\\ge" : ">"}${L.v}`);
    else ineqParts.push(`${L.v}${L.closed ? "\\le " : "<"}x${R.closed ? "\\le " : "<"}${R.v}`);
    intParts.push(`${L ? (L.closed ? "[" : "(") : "("}${L ? L.v : "-\\infty"},${R ? R.v : "\\infty"}${R ? (R.closed ? "]" : ")") : ")"}`);
  }
  const ineq = spec.ans ?? (ineqParts.length ? ineqParts.join("\\text{ or }") : "\\text{no solution}");
  const interval = intParts.length ? intParts.join("\\cup") : "\\varnothing";
  const pTex = spec.pTex ?? "P(x)";
  const cond = `${pTex}${TEXOP[spec.ineq]}0`;

  const html = () => {
    const th = "border:1px solid #c7d2fe;padding:5px 9px;text-align:center;background:#eef2ff;color:#3730a3;";
    const td = "border:1px solid #e2e8f0;padding:5px 9px;text-align:center;";
    const cell = (s, ok) => `<td style="${td}font-size:17px;${ok ? "background:#fff7cc;" : ""}${s > 0 ? "color:#15803d;font-weight:700;" : s < 0 ? "color:#b91c1c;font-weight:700;" : "color:#64748b;font-weight:700;"}">\\(${s > 0 ? "+" : s < 0 ? "-" : "0"}\\)</td>`;
    const rows = [];
    rows.push(`<tr><th style="${th}text-align:left;">Interval</th>${cols.map((c) => `<th style="${th}">\\(${c.head}\\)</th>`).join("")}</tr>`);
    rows.push(`<tr><td style="${td}text-align:left;font-style:italic;">Test point</td>${cols.map((c) => `<td style="${td}${c.ok ? "background:#fff7cc;" : ""}">${c.kind === "zero" ? "—" : `\\(x=${num(c.x)}\\)`}</td>`).join("")}</tr>`);
    const role = (f) => (rational ? `<span style="color:#64748b;font-size:12px;">${f.den ? "bottom" : "top"}</span> ` : "");
    factors.forEach((f, i) => rows.push(`<tr><td style="${td}text-align:left;">${role(f)}\\(${f.tex}\\)</td>${cols.map((c) => cell(c.signs[i], c.ok)).join("")}</tr>`));
    const pcell = (c) => (c.und ? `<td style="${td}color:#64748b;font-size:13px;font-style:italic;">und.</td>` : cell(c.p, c.ok));
    rows.push(`<tr><td style="${td}text-align:left;font-weight:700;">\\(${pTex}\\)</td>${cols.map(pcell).join("")}</tr>`);
    rows.push(`<tr><td style="${td}text-align:left;">\\(${cond}\\)?</td>${cols.map((c) => `<td style="${td}${c.ok ? "background:#fff7cc;color:#15803d;font-weight:800;" : "color:#94a3b8;"}">${c.ok ? "✓" : "✗"}</td>`).join("")}</tr>`);
    return `<div style="overflow-x:auto;margin:8px 0;"><table style="border-collapse:collapse;font-size:14px;min-width:60%;">${rows.join("")}</table></div>`;
  };

  const tex = () => {
    const s = (v) => `$${v > 0 ? "+" : v < 0 ? "-" : "0"}$`;
    const head = cols.map((c) => `$${c.head}$`).join(" & ");
    const tp = cols.map((c) => (c.kind === "zero" ? "--" : `$${num(c.x)}$`)).join(" & ");
    const rl = (f) => (rational ? `{\\scriptsize ${f.den ? "bottom" : "top"}} ` : "");
    const fr = factors.map((f, i) => `${rl(f)}$${f.tex}$ & ${cols.map((c) => s(c.signs[i])).join(" & ")} \\\\`).join("\n");
    const ck = cols.map((c) => (c.ok ? "$\\checkmark$" : "$\\times$")).join(" & ");
    return String.raw`\begin{center}\small\setlength{\tabcolsep}{4pt}\renewcommand{\arraystretch}{1.2}
\begin{tabular}{l|${"c".repeat(cols.length)}}
\hline
Interval & ${head} \\ \hline
Test point & ${tp} \\ \hline
${fr}
\hline
$${pTex}$ & ${cols.map((c) => (c.und ? "und." : s(c.p))).join(" & ")} \\ \hline
$${cond}$? & ${ck} \\ \hline
\end{tabular}\end{center}`;
  };

  const testList = cols.filter((c) => c.kind === "int").map((c) => num(c.x)).join(",\\ ");
  return { cols, zeros, runs, ineq, interval, html, tex, cond, testList };
}

// linear factor helper: (x - r)
export const lin = (r, tex) => ({ tex: tex ?? (r === 0 ? "x" : r > 0 ? `x-${r}` : `x+${-r}`), f: (x) => x - r, root: r });
// power of a linear factor: (x - r)^m
export const linPow = (r, m) => ({ tex: `(${r === 0 ? "x" : r > 0 ? `x-${r}` : `x+${-r}`})^${m}`, f: (x) => (x - r) ** m, root: r, mult: m });

// rational-inequality helpers
export const bottom = (f) => ({ ...f, den: true }); // mark a factor as part of the denominator
export const cst = (v) => ({ tex: String(v), f: () => v }); // constant factor (sign only)
export const linNeg = (r) => ({ tex: `${r}-x`, f: (x) => r - x, root: r }); // (r - x)
