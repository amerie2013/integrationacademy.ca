// Exact row reduction for the LINALG1 chapter 2 bank, lessons and worksheets: every numeric answer is computed
// from the question's own matrix with fractions (no floating-point drift).
const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a || 1; };
export const Q = (n, d = 1) => { if (d < 0) { n = -n; d = -d; } const g = gcd(n, d); return { n: n / g, d: d / g }; };
const sub = (a, b) => Q(a.n * b.d - b.n * a.d, a.d * b.d);
const mul = (a, b) => Q(a.n * b.n, a.d * b.d);
const div = (a, b) => Q(a.n * b.d, a.d * b.n);
const z = (a) => a.n === 0;
export const v = (a) => a.n / a.d;
/** a fraction as LaTeX */
export const tq = (a) => (a.d === 1 ? String(a.n) : `${a.n < 0 ? "-" : ""}\\tfrac{${Math.abs(a.n)}}{${a.d}}`);

/** reduced row echelon form of a numeric matrix; `cols` = how many columns may hold pivots (n for [A|b]) */
export function rref(rows, cols = rows[0].length) {
  const m = rows.map((r) => r.map((x) => (typeof x === "object" ? x : Q(x))));
  const piv = [];
  let r = 0;
  for (let c = 0; c < cols && r < m.length; c++) {
    let p = -1;
    for (let i = r; i < m.length; i++) if (!z(m[i][c])) { p = i; break; }
    if (p < 0) continue;
    [m[p], m[r]] = [m[r], m[p]];
    const k = m[r][c];
    m[r] = m[r].map((x) => div(x, k));
    for (let i = 0; i < m.length; i++) if (i !== r && !z(m[i][c])) { const f = m[i][c]; m[i] = m[i].map((x, j) => sub(x, mul(f, m[r][j]))); }
    piv.push(c);
    r++;
  }
  return { m, piv, rank: piv.length };
}
export const rank = (rows, cols) => rref(rows, cols).rank;
/** numeric RREF (decimals) for display checks */
export const rrefNum = (rows, cols) => rref(rows, cols).m.map((r) => r.map(v));
/** solve [A|b]: { kind: "none" | "unique" | "many", x (unique), free (count), p and dirs (parametric) } */
export function solve(aug) {
  const n = aug[0].length - 1;
  const { m, piv } = rref(aug, n);
  if (m.some((r) => r.slice(0, n).every(z) && !z(r[n]))) return { kind: "none" };
  const free = [...Array(n).keys()].filter((j) => !piv.includes(j));
  const p = Array(n).fill(0), dirs = free.map(() => Array(n).fill(0));
  piv.forEach((c, i) => { p[c] = v(m[i][n]); free.forEach((f, k) => { dirs[k][c] = -v(m[i][f]); }); });
  free.forEach((f, k) => { dirs[k][f] = 1; });
  return free.length ? { kind: "many", free: free.length, p, dirs, freeCols: free } : { kind: "unique", x: p };
}
/** check that x solves [A|b] */
export const solves = (aug, x) => aug.every((r) => Math.abs(r.slice(0, -1).reduce((s, a, j) => s + a * x[j], 0) - r[r.length - 1]) < 1e-9);
/** tuple in LaTeX */
export const tp = (a) => `(${a.map((x) => (typeof x === "number" ? +x.toFixed(6) : x)).join(",")})`;
export const r = (x, d = 2) => Math.round(x * 10 ** d) / 10 ** d;
/** a matrix (rows of numbers) as LaTeX; bar before the last column for augmented matrices */
export const am = (rows, bar = true) => {
  const n = rows[0].length, spec = bar ? `${"c".repeat(n - 1)}|c` : "c".repeat(n);
  return `\\left[\\begin{array}{${spec}}${rows.map((row) => row.map((x) => (typeof x === "object" ? tq(x) : x)).join(" & ")).join(" \\\\ ")}\\end{array}\\right]`;
};
/** parse a scalar such as "2", "-3", "1/2", "-3/2" */
const pq = (s) => { const m = String(s).match(/^(-?\d+)(?:\/(\d+))?$/); if (!m) throw new Error(`bad scalar ${s}`); return Q(+m[1], m[2] ? +m[2] : 1); };
/** a fraction coefficient for an operation label: 1 → "", 2 → "2", 1/2 → "\tfrac12" */
const coef = (c) => (c.n === c.d ? "" : c.d === 1 ? String(c.n) : `\\tfrac{${c.n}}{${c.d}}`);
/** apply one row operation written "R2-2R1", "R3+1/2R1", "R1<->R3" or "R2*1/3" to m (in place); returns its LaTeX label */
function applyOp(m, op) {
  let t;
  if ((t = op.match(/^R(\d)<->R(\d)$/))) { const [i, j] = [t[1] - 1, t[2] - 1]; [m[i], m[j]] = [m[j], m[i]]; return `R_${t[1]}\\leftrightarrow R_${t[2]}`; }
  if ((t = op.match(/^R(\d)\*(-?\d+(?:\/\d+)?)$/))) { const i = t[1] - 1, c = pq(t[2]); m[i] = m[i].map((x) => mul(x, c)); return `R_${t[1]}\\to ${c.n < 0 ? "-" : ""}${coef(Q(Math.abs(c.n), c.d)) || "1"}R_${t[1]}`; }
  if ((t = op.match(/^R(\d)([+-])(\d+(?:\/\d+)?)?R(\d)$/))) {
    const i = t[1] - 1, j = t[4] - 1, c = pq(`${t[2] === "-" ? "-" : ""}${t[3] ?? "1"}`);
    m[i] = m[i].map((x, k) => sub(x, mul(Q(-c.n, c.d), m[j][k])));
    return `R_${t[1]}\\to R_${t[1]}${t[2]}${coef(pq(t[3] ?? "1"))}R_${t[4]}`;
  }
  throw new Error(`bad operation ${op}`);
}
/**
 * Full worked row reduction: one string per step, each "explanation \[ \xrightarrow{operations} full matrix \]".
 * plan = [[explanation, ["R2-2R1", "R3+R1"]], ...]; the first step shows the starting matrix.
 * Returns { steps, final } (final = the last matrix as numbers/fractions).
 */
export function steps(start, plan, { bar = true, intro = "Write the augmented matrix" } = {}) {
  let m = start.map((r) => r.map((x) => (typeof x === "object" ? x : Q(x))));
  const out = [`${intro}: \\[${am(m, bar)}\\]`];
  for (const [why, ops] of plan) {
    const labels = ops.map((op) => applyOp(m, op));
    out.push(`${why} Operation${labels.length > 1 ? "s" : ""}: \\(${labels.join(",\\quad ")}\\). \\[\\longrightarrow\\ ${am(m, bar)}\\]`);
  }
  return { steps: out, final: m };
}
/** a linear system in LaTeX (aligned) */
export const sys = (rows, names = ["x_1", "x_2", "x_3", "x_4", "x_5"]) => `\\begin{aligned}${rows.map((row) => {
  let s = "", first = true;
  row.slice(0, -1).forEach((a, j) => {
    if (a === 0) return;
    // a letter coefficient such as "k" or "a^2" is written as it is
    if (typeof a === "string") { s += `${first ? "" : "+"}${a}${names[j]}`; first = false; return; }
    const mag = Math.abs(a) === 1 ? "" : String(Math.abs(a));
    s += `${first ? (a < 0 ? "-" : "") : a < 0 ? "-" : "+"}${mag}${names[j]}`;
    first = false;
  });
  return `${s || "0"} &= ${row[row.length - 1]}`;
}).join(" \\\\ ")}\\end{aligned}`;

/** op text in steps() syntax for "R{i} + c R{j}" with fraction c */
const opTxt = (i, c, j) => `R${i + 1}${c.n < 0 ? "-" : "+"}${Math.abs(c.n) === c.d ? "" : c.d === 1 ? Math.abs(c.n) : `${Math.abs(c.n)}/${c.d}`}R${j + 1}`;
/**
 * A row-reduction plan for steps(): column by column, swap a usable pivot up (preferring ±1), scale it to 1 when
 * `jordan`, clear below (and above when `jordan`). `cols` = how many columns may hold pivots.
 */
export function autoPlan(rows, { cols = rows[0].length - 1, jordan = true } = {}) {
  const m = rows.map((r) => r.map((x) => (typeof x === "object" ? x : Q(x))));
  const plan = [];
  let r = 0;
  for (let c = 0; c < cols && r < m.length; c++) {
    const cand = [...Array(m.length).keys()].filter((i) => i >= r && !z(m[i][c]));
    if (!cand.length) continue;
    const p = cand.find((i) => Math.abs(m[i][c].n) === m[i][c].d) ?? cand[0];
    if (p !== r) { plan.push([`Column ${c + 1}: bring a nonzero entry into the pivot position.`, [`R${r + 1}<->R${p + 1}`]]); [m[p], m[r]] = [m[r], m[p]]; }
    if (jordan && !(m[r][c].n === 1 && m[r][c].d === 1)) {
      const k = div(Q(1), m[r][c]);
      plan.push([`Make the pivot of column ${c + 1} equal to 1.`, [`R${r + 1}*${k.n}${k.d === 1 ? "" : `/${k.d}`}`]]);
      m[r] = m[r].map((x) => mul(x, k));
    }
    const ops = [];
    for (let i = 0; i < m.length; i++) {
      if (i === r || z(m[i][c]) || (!jordan && i < r)) continue;
      const f = div(m[i][c], m[r][c]);
      ops.push(opTxt(i, Q(-f.n, f.d), r));
      m[i] = m[i].map((x, k) => sub(x, mul(f, m[r][k])));
    }
    if (ops.length) plan.push([`Column ${c + 1}: clear ${jordan ? "the other entries of" : "below the pivot in"} the pivot column.`, ops]);
    r++;
  }
  return plan;
}
/** the full reduction as one line of text for bank feedback: each operation followed by the whole matrix */
export function stepsLine(rows, { aug = true, jordan = true, cols } = {}) {
  const plan = autoPlan(rows, { cols: cols ?? (aug ? rows[0].length - 1 : rows[0].length), jordan });
  // display math becomes inline $...$ (bank feedback is one line of text)
  const inline = (s) => s.split("\\[\\longrightarrow\\ ").join("$\\to ").split("\\[").join("$").split("\\]").join("$").split("\\(").join("$").split("\\)").join("$").replace(/ Operations?: /, " ");
  return steps(rows, plan, { bar: aug, intro: "Start" }).steps.map(inline).join(" ");
}
