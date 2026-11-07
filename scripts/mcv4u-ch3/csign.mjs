// Calculus sign charts for the chapter 3 worked examples (lessons: chart(), worksheets: chartT()).
// The signs are COMPUTED from the derivative, never typed, and the chart checks itself:
//   - the derivative must be 0 (or listed in `undef` / `dne`) at every cut,
//   - it must keep one sign inside every interval (a missed critical number throws).
// spec = {
//   v: "x",                        variable name
//   cuts: [[-2, "-2"], [2, "2"]],  critical numbers (or asymptotes) with LaTeX labels
//   d: ["f'(x)", (x) => ...],      the derivative being charted (f′ or f″)
//   factors: [["x+2", fn], ...],   optional factor rows (LaTeX label, function)
//   kind: "inc" | "conc",          f′ chart (rises/falls, max/min) or f″ chart (concavity, inflection)
//   undef: [3],                    cuts where f itself is undefined (vertical asymptotes)
//   dne: [0],                      cuts where the derivative does not exist but f does (cusps, corners)
//   from: [0, "0"], to: [12, "12"] optional domain ends (no column is printed for them)
//   f: "f"                         the function's name in the last row
// }
const MINUS = "−";
const eps = 1e-7;
const nice = (v) => {
  if (Math.abs(v - Math.round(v)) < 1e-9) return String(Math.round(v));
  const r = Math.round(v * 100) / 100;
  return Math.abs(v - r) < 1e-9 ? String(r) : null;
};
const fmtTex = (v) => String(Math.round(v * 1000) / 1000);

function pickTest(lo, hi) {
  // unbounded side: the next whole number, or the next round number (70 after 60) for large cuts
  const out = (c, dir) => {
    if (Math.abs(c) < 10) return dir > 0 ? Math.ceil(c + eps) || 1 : Math.floor(c - eps) || -1;
    const step = 10 ** Math.floor(Math.log10(Math.abs(c)));
    return dir > 0 ? (Math.floor(c / step) + 1) * step : (Math.ceil(c / step) - 1) * step;
  };
  if (!Number.isFinite(lo)) return out(hi, -1);
  if (!Number.isFinite(hi)) return out(lo, 1);
  const mid = (lo + hi) / 2;
  const ints = [];
  for (let k = Math.ceil(lo + eps); k < hi - eps; k++) ints.push(k);
  if (ints.length) return ints.sort((a, b) => Math.abs(a - mid) - Math.abs(b - mid) || Math.abs(a) - Math.abs(b))[0];
  for (const step of [0.5, 0.1]) {
    const c = Math.round(mid / step) * step;
    if (c > lo + eps && c < hi - eps) return Math.round(c * 10) / 10;
  }
  return mid;
}

function model(spec) {
  const [dl, df] = spec.d;
  const cuts = [...spec.cuts].sort((a, b) => a[0] - b[0]);
  const undef = spec.undef ?? [], dne = spec.dne ?? [];
  const isU = (x) => undef.some((u) => Math.abs(u - x) < 1e-9), isD = (x) => dne.some((u) => Math.abs(u - x) < 1e-9);
  const lo0 = spec.from ? spec.from[0] : -Infinity, hi0 = spec.to ? spec.to[0] : Infinity;
  const bounds = [lo0, ...cuts.map((c) => c[0]), hi0];
  const tests = spec.tests ?? bounds.slice(0, -1).map((a, i) => pickTest(a, bounds[i + 1]));
  // self-checks
  for (const [c] of cuts) if (!isU(c) && !isD(c) && Math.abs(df(c)) > 1e-6) throw new Error(`chart ${dl}: value at cut ${c} is ${df(c)}, not 0`);
  bounds.slice(0, -1).forEach((a, i) => {
    const b = bounds[i + 1];
    const A = Number.isFinite(a) ? a : b - 60, B = Number.isFinite(b) ? b : a + 60;
    const s0 = Math.sign(df(tests[i]));
    if (!(tests[i] > a && tests[i] < b)) throw new Error(`chart ${dl}: test ${tests[i]} not inside (${a}, ${b})`);
    if (s0 === 0) throw new Error(`chart ${dl}: zero at test value ${tests[i]}`);
    for (let k = 1; k < 400; k++) {
      const x = A + ((B - A) * k) / 400;
      if (Math.abs(x - a) < 1e-4 || Math.abs(x - b) < 1e-4) continue;
      const y = df(x);
      if (Math.abs(y) > 1e-9 && Math.sign(y) !== s0) throw new Error(`chart ${dl}: sign changes inside (${a}, ${b}) near x = ${x}`);
    }
  });
  const signs = tests.map((t) => Math.sign(df(t)));
  const fsigns = (spec.factors ?? []).map(([, g]) => tests.map((t) => Math.sign(g(t))));
  const atCut = cuts.map(([c], i) => {
    const l = signs[i], r = signs[i + 1];
    if (isU(c)) return { val: "undef", what: "asym" };
    const val = isD(c) ? "dne" : "0";
    if (spec.kind === "conc") return { val, what: l !== r ? "ip" : "none" };
    return { val, what: l > 0 && r < 0 ? "max" : l < 0 && r > 0 ? "min" : "none" };
  });
  return { cuts, tests, signs, fsigns, atCut, dl, df, lo0, hi0 };
}

const HEAD = "border:1px solid #cbd5e1;padding:5px 9px;text-align:center;background:#eff6ff;white-space:nowrap;";
const CELL = "border:1px solid #cbd5e1;padding:5px 9px;text-align:center;white-space:nowrap;";
const CUT = "border:1px solid #cbd5e1;padding:5px 9px;text-align:center;white-space:nowrap;background:#f8fafc;";

/** HTML sign chart for the lessons */
export function chart(spec) {
  const m = model(spec), v = spec.v ?? "x", f = spec.f ?? "f";
  const lab = (i) => m.cuts[i][1];
  const n = m.cuts.length;
  const iv = (i) => {
    const L = i === 0 ? (spec.from ? spec.from[1] : null) : lab(i - 1), R = i === n ? (spec.to ? spec.to[1] : null) : lab(i);
    return L === null ? `\\(${v}\\lt ${R}\\)` : R === null ? `\\(${v}\\gt ${L}\\)` : `\\(${L}\\lt ${v}\\lt ${R}\\)`;
  };
  const cols = [];
  for (let i = 0; i <= n; i++) { cols.push({ t: "iv", i }); if (i < n) cols.push({ t: "cut", i }); }
  const sg = (s) => (s > 0 ? "+" : MINUS);
  const row = (label, cell) => `<tr><th style="${HEAD}text-align:left;">${label}</th>${cols.map((c) => `<td style="${c.t === "cut" ? CUT : CELL}">${cell(c)}</td>`).join("")}</tr>`;
  const head = `<tr><th style="${HEAD}">\\(${v}\\)</th>${cols.map((c) => `<th style="${c.t === "cut" ? HEAD + "background:#e0e7ff;" : HEAD}">${c.t === "iv" ? iv(c.i) : `\\(${lab(c.i)}\\)`}</th>`).join("")}</tr>`;
  const test = row("test value", (c) => (c.t === "iv" ? `\\(${v}=${fmtTex(m.tests[c.i])}\\)` : ""));
  const facs = (spec.factors ?? []).map(([l, g], k) => row(`\\(${l}\\)`, (c) => (c.t === "iv" ? sg(m.fsigns[k][c.i]) : Math.abs(g(m.cuts[c.i][0])) < 1e-9 ? "0" : "")));
  const main = row(`\\(${m.dl}\\)`, (c) => {
    if (c.t === "cut") return m.atCut[c.i].val === "0" ? "0" : m.atCut[c.i].val === "dne" ? "DNE" : "not defined";
    const val = nice(m.df(m.tests[c.i]));
    const s = m.signs[c.i];
    return `<strong style="color:${s > 0 ? "#15803d" : "#be123c"};">${sg(s)}</strong>${val !== null && !spec.factors ? `<div style="font-size:11.5px;color:#64748b;">${m.dl.replace(/\(.*\)$/, "").replace(/'/g, "′")}(${fmtTex(m.tests[c.i])}) = ${val.replace("-", MINUS)}</div>` : ""}`;
  });
  const beh = spec.kind === "conc"
    ? (c) => (c.t === "iv" ? (m.signs[c.i] > 0 ? `<span style="color:#15803d;font-weight:700;">∪ concave up</span>` : `<span style="color:#be123c;font-weight:700;">∩ concave down</span>`) : { ip: "<strong>inflection point</strong>", none: "no change", asym: "asymptote" }[m.atCut[c.i].what])
    : (c) => (c.t === "iv" ? (m.signs[c.i] > 0 ? `<span style="color:#15803d;font-weight:700;">↗ increasing</span>` : `<span style="color:#be123c;font-weight:700;">↘ decreasing</span>`) : { max: "<strong>local max</strong>", min: "<strong>local min</strong>", none: "neither", asym: "asymptote" }[m.atCut[c.i].what]);
  const last = row(`\\(${f}\\)`, beh);
  return `<div style="overflow-x:auto;margin:8px 0;"><table style="border-collapse:collapse;background:#fff;font-size:14px;">${head}${test}${facs.join("")}${main}${last}</table></div>`;
}

/** LaTeX sign chart for the worksheets (full width, below the solution) */
export function chartT(spec) {
  const m = model(spec), v = spec.v ?? "x", f = spec.f ?? "f";
  const lab = (i) => m.cuts[i][1];
  const n = m.cuts.length;
  const iv = (i) => {
    const L = i === 0 ? (spec.from ? spec.from[1] : null) : lab(i - 1), R = i === n ? (spec.to ? spec.to[1] : null) : lab(i);
    return L === null ? `$${v}<${R}$` : R === null ? `$${v}>${L}$` : `$${L}<${v}<${R}$`;
  };
  const cols = [];
  for (let i = 0; i <= n; i++) { cols.push({ t: "iv", i }); if (i < n) cols.push({ t: "cut", i }); }
  const sg = (s) => (s > 0 ? "$+$" : "$-$");
  const row = (label, cell) => `${label} & ${cols.map(cell).join(" & ")} \\\\ \\hline`;
  const head = row(`$${v}$`, (c) => (c.t === "iv" ? iv(c.i) : `$${lab(c.i)}$`));
  const test = row("test", (c) => (c.t === "iv" ? `$${fmtTex(m.tests[c.i])}$` : ""));
  const facs = (spec.factors ?? []).map(([l, g], k) => row(`$${l}$`, (c) => (c.t === "iv" ? sg(m.fsigns[k][c.i]) : Math.abs(g(m.cuts[c.i][0])) < 1e-9 ? "$0$" : "")));
  const main = row(`$${m.dl}$`, (c) => (c.t === "cut" ? ({ 0: "$0$", dne: "DNE", undef: "undef." }[m.atCut[c.i].val]) : `\\textbf{${sg(m.signs[c.i])}}`));
  const beh = spec.kind === "conc"
    ? (c) => (c.t === "iv" ? (m.signs[c.i] > 0 ? "\\textcolor{iagreen}{$\\cup$ up}" : "\\textcolor{tipred}{$\\cap$ down}") : { ip: "\\textbf{infl.}", none: "---", asym: "VA" }[m.atCut[c.i].what])
    : (c) => (c.t === "iv" ? (m.signs[c.i] > 0 ? "\\textcolor{iagreen}{$\\nearrow$ inc.}" : "\\textcolor{tipred}{$\\searrow$ dec.}") : { max: "\\textbf{max}", min: "\\textbf{min}", none: "---", asym: "VA" }[m.atCut[c.i].what]);
  const last = row(`$${f}$`, beh);
  return `\\par\\smallskip\\begin{center}\\small\\setlength{\\tabcolsep}{4pt}\\renewcommand{\\arraystretch}{1.35}\\begin{tabular}{|l|${"c|".repeat(cols.length)}}\\hline
${head}
${test}
${facs.join("\n")}
${main}
${last}
\\end{tabular}\\end{center}`;
}

/** two worksheet charts or tables side by side */
// (each table shrinks to its half when it is too wide; needs \usepackage{adjustbox})
const fit = (s) => s.split("\\begin{tabular}").join("\\begin{adjustbox}{max width=\\linewidth}\\begin{tabular}").split("\\end{tabular}").join("\\end{tabular}\\end{adjustbox}");
export const pairT = (a, b) => `\\par\\smallskip\\noindent\\begin{minipage}[t]{0.49\\linewidth}\\vspace{0pt}${fit(a)}\\end{minipage}\\hfill\\begin{minipage}[t]{0.49\\linewidth}\\vspace{0pt}${fit(b)}\\end{minipage}\\par`;

/** what the chart concludes, for self-checks: [{x, what}] at the cuts */
export const verdicts = (spec) => { const m = model(spec); return m.cuts.map(([c], i) => ({ x: c, what: m.atCut[i].what })); };
