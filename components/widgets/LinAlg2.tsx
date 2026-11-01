"use client";

// Linear Algebra I, chapter 2 (systems of linear equations) explorers: systems as intersecting lines, a lab for
// elementary row operations, a step-by-step Gauss–Jordan tutor that reads off the solution, rank and the number of
// solutions for a system with parameters, solution sets of homogeneous and non-homogeneous systems, and
// polynomial interpolation as a linear system. All row reduction is exact (fractions).

import { useMemo, useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard, btn, gcd } from "./kit";
import { Plane, r2, type View } from "./Systems";

/* ---------------------------------------------------------------- exact fractions */

type Q = { n: number; d: number };
const q = (n: number, d = 1): Q => { if (d < 0) { n = -n; d = -d; } const g = gcd(n, d) || 1; return { n: n / g, d: d / g }; };
const add = (a: Q, b: Q) => q(a.n * b.d + b.n * a.d, a.d * b.d);
const sub = (a: Q, b: Q) => q(a.n * b.d - b.n * a.d, a.d * b.d);
const mul = (a: Q, b: Q) => q(a.n * b.n, a.d * b.d);
const div = (a: Q, b: Q) => q(a.n * b.d, a.d * b.n);
const isZ = (a: Q) => a.n === 0;
const isOne = (a: Q) => a.n === 1 && a.d === 1;
const neg = (a: Q) => q(-a.n, a.d);
const tex = (a: Q) => (a.d === 1 ? String(a.n) : `${a.n < 0 ? "-" : ""}\\tfrac{${Math.abs(a.n)}}{${a.d}}`);
const val = (a: Q) => a.n / a.d;
/** parse "3", "-2", "1/3", "-3/2", "0.5" */
function parseQ(s: string): Q | null {
  const t = s.replace(/−/g, "-").replace(/\s+/g, "");
  let m = t.match(/^(-?\d+)\/(\d+)$/);
  if (m && +m[2] !== 0) return q(+m[1], +m[2]);
  m = t.match(/^-?\d+$/);
  if (m) return q(+t);
  m = t.match(/^(-?)(\d*)\.(\d+)$/);
  if (m) { const d = 10 ** m[3].length; return q((m[1] ? -1 : 1) * (+(m[2] || 0) * d + +m[3]), d); }
  return null;
}
type M = Q[][];
const toM = (a: number[][]): M => a.map((r) => r.map((x) => q(x)));
const clone = (m: M): M => m.map((r) => r.slice());

/** LaTeX for an augmented (or plain) matrix; pivots in amber bold, one row optionally highlighted */
function matTex(m: M, aug: boolean, pivots: [number, number][] = [], hiRow = -1) {
  const cols = m[0].length;
  const spec = aug ? `${"c".repeat(cols - 1)}|c` : "c".repeat(cols);
  const isPiv = (i: number, j: number) => pivots.some(([a, b]) => a === i && b === j);
  const body = m.map((r, i) => r.map((x, j) => { const t = tex(x); return isPiv(i, j) ? `\\color{#b45309}{\\mathbf{${t}}}` : i === hiRow ? `\\color{#1d4ed8}{${t}}` : t; }).join(" & ")).join(" \\\\ ");
  return `\\left[\\begin{array}{${spec}}${body}\\end{array}\\right]`;
}
/** the equations of an augmented matrix, as aligned LaTeX */
function eqTex(m: M, names: string[]) {
  return `\\begin{aligned}${m.map((r) => {
    let s = "", first = true;
    r.slice(0, -1).forEach((x, j) => {
      if (isZ(x)) return;
      const v = val(x), mag = tex(q(Math.abs(x.n), x.d));
      s += `${first ? (v < 0 ? "-" : "") : v < 0 ? "-" : "+"}${mag === "1" ? "" : mag}${names[j]}`;
      first = false;
    });
    return `${s || "0"} &= ${tex(r[r.length - 1])}`;
  }).join(" \\\\ ")}\\end{aligned}`;
}
const leadCol = (r: Q[], upto: number) => { for (let j = 0; j < upto; j++) if (!isZ(r[j])) return j; return -1; };
/** echelon tests on the coefficient part (first `cols` columns) */
function shape(m: M, cols: number) {
  let ref = true, rref = true, last = -1, seenZero = false;
  const piv: [number, number][] = [];
  m.forEach((r, i) => {
    const l = leadCol(r, cols);
    if (l < 0) { seenZero = true; return; }
    if (seenZero || l <= last) ref = false;
    last = l; piv.push([i, l]);
    if (!isOne(r[l])) rref = false;
    m.forEach((r2_, k) => { if (k !== i && !isZ(r2_[l])) rref = false; });
  });
  return { ref, rref: ref && rref, piv };
}

/** Gauss–Jordan with a record of every step: forward phase (REF), then backward phase (RREF) */
type Step = { op: string; why: string; m: M; piv: [number, number][]; row: number; phase: "forward" | "backward" };
function gaussSteps(start: M, cols: number) {
  const m = clone(start), steps: Step[] = [], piv: [number, number][] = [];
  let r = 0;
  for (let c = 0; c < cols && r < m.length; c++) {
    let p = -1;
    for (let i = r; i < m.length; i++) if (!isZ(m[i][c])) { p = i; break; }
    if (p < 0) continue;
    if (p !== r) {
      [m[p], m[r]] = [m[r], m[p]];
      steps.push({ op: `R_{${r + 1}}\\leftrightarrow R_{${p + 1}}`, why: `Column ${c + 1} needs a nonzero entry at the top of the unfinished rows, so swap rows ${r + 1} and ${p + 1}.`, m: clone(m), piv: [...piv, [r, c]], row: r, phase: "forward" });
    }
    piv.push([r, c]);
    for (let i = r + 1; i < m.length; i++) {
      if (isZ(m[i][c])) continue;
      const k = div(m[i][c], m[r][c]);
      m[i] = m[i].map((x, j) => sub(x, mul(k, m[r][j])));
      steps.push({ op: `R_{${i + 1}}\\to R_{${i + 1}}${val(k) < 0 ? "+" : "-"}${isOne(q(Math.abs(k.n), k.d)) ? "" : tex(q(Math.abs(k.n), k.d))}R_{${r + 1}}`, why: `Clear the entry below the pivot in column ${c + 1}: subtract ${tex(k) === "1" ? "" : `\\(${tex(k)}\\) times `}row ${r + 1} from row ${i + 1}.`, m: clone(m), piv: [...piv], row: i, phase: "forward" });
    }
    r++;
  }
  const refAt = steps.length;
  for (let t = piv.length - 1; t >= 0; t--) {
    const [pr, pc] = piv[t];
    if (!isOne(m[pr][pc])) {
      const k = m[pr][pc];
      m[pr] = m[pr].map((x) => div(x, k));
      steps.push({ op: `R_{${pr + 1}}\\to ${tex(div(q(1), k))}R_{${pr + 1}}`, why: `Make the pivot in row ${pr + 1} equal to 1 by dividing the row by \\(${tex(k)}\\).`, m: clone(m), piv: [...piv], row: pr, phase: "backward" });
    }
    for (let i = pr - 1; i >= 0; i--) {
      if (isZ(m[i][pc])) continue;
      const k = m[i][pc];
      m[i] = m[i].map((x, j) => sub(x, mul(k, m[pr][j])));
      steps.push({ op: `R_{${i + 1}}\\to R_{${i + 1}}${val(k) < 0 ? "+" : "-"}${isOne(q(Math.abs(k.n), k.d)) ? "" : tex(q(Math.abs(k.n), k.d))}R_{${pr + 1}}`, why: `Clear the entry above the pivot in column ${pc + 1}.`, m: clone(m), piv: [...piv], row: i, phase: "backward" });
    }
  }
  return { steps, refAt, final: m, piv };
}
const rankOf = (m: M, cols: number) => gaussSteps(m, cols).piv.length;

/** read the solution of an augmented matrix in RREF: none, unique, or parametric */
const PARAMS = ["t", "s", "r", "u"];
function solutionTex(R: M, n: number, names: string[]) {
  const bad = R.some((r) => leadCol(r, n) < 0 && !isZ(r[n]));
  if (bad) return { kind: "none" as const, tex: "\\text{no solution: a row reads } 0 = \\text{nonzero}" };
  const piv = new Map<number, number>();
  R.forEach((r, i) => { const l = leadCol(r, n); if (l >= 0) piv.set(l, i); });
  const free = Array.from({ length: n }, (_, j) => j).filter((j) => !piv.has(j));
  const p: Q[] = Array.from({ length: n }, () => q(0));
  const dirs: Q[][] = free.map(() => Array.from({ length: n }, () => q(0)));
  piv.forEach((i, j) => { p[j] = R[i][n]; free.forEach((f, k) => { dirs[k][j] = neg(R[i][f]); }); });
  free.forEach((f, k) => { dirs[k][f] = q(1); });
  const colv = (v: Q[]) => `\\begin{bmatrix}${v.map(tex).join("\\\\")}\\end{bmatrix}`;
  const xv = `\\begin{bmatrix}${names.slice(0, n).join("\\\\")}\\end{bmatrix}`;
  if (!free.length) return { kind: "unique" as const, tex: `${xv}=${colv(p)}` };
  const lead = p.every(isZ) ? "" : colv(p);
  const terms = dirs.map((d, k) => `${PARAMS[k]}${colv(d)}`).join("+");
  return { kind: "many" as const, tex: `${xv}=${lead ? lead + "+" : ""}${terms},\\quad ${free.map((f, k) => `${names[f]}=${PARAMS[k]}`).join(",\\ ")}\\ \\text{free}`, free: free.length };
}
const X3 = ["x_1", "x_2", "x_3", "x_4"];

/* ---------------------------------------------------------------- 2.1 systems as lines */

type L3 = [number, number, number];
const LINE_SETS: Record<string, { l1: L3; l2: L3; l3: L3 }> = {
  one: { l1: [1, 1, 4], l2: [1, -2, -2], l3: [2, -1, 2] },
  none: { l1: [1, -2, 2], l2: [-2, 4, 4], l3: [1, 1, 5] },
  many: { l1: [2, -1, 3], l2: [-4, 2, -6], l3: [1, 1, 3] },
};
const V7: View = { xmin: -7, xmax: 7, ymin: -6, ymax: 6 };
function lineSeg(X: (x: number) => number, Y: (y: number) => number, [a, b, c]: L3) {
  if (b === 0) { const x = a ? c / a : 1e6; return { x1: X(x), y1: Y(V7.ymin), x2: X(x), y2: Y(V7.ymax) }; }
  const f = (x: number) => (c - a * x) / b;
  return { x1: X(V7.xmin - 1), y1: Y(f(V7.xmin - 1)), x2: X(V7.xmax + 1), y2: Y(f(V7.xmax + 1)) };
}
const eq2 = ([a, b, c]: L3) => { const t = (k: number, v: string, first: boolean) => (k === 0 ? "" : `${first ? (k < 0 ? "-" : "") : k < 0 ? "-" : "+"}${Math.abs(k) === 1 ? "" : r2(Math.abs(k))}${v}`); return `${t(a, "x_1", true)}${t(b, "x_2", a === 0) || ""}=${r2(c)}`; };

export function SystemLinesLab({ init = { set: "one" } }: { init?: { set: string } }) {
  const start = LINE_SETS[init.set] ?? LINE_SETS.one;
  const [set, setSet] = useState(init.set in LINE_SETS ? init.set : "one");
  const [l2, setL2] = useState<L3>(start.l2);
  const [three, setThree] = useState(false);
  const l1 = LINE_SETS[set].l1, l3 = LINE_SETS[set].l3;
  const rows = three ? [l1, l2, l3] : [l1, l2];
  const aug = toM(rows), A = toM(rows.map((r) => [r[0], r[1]]));
  const bad = l2[0] === 0 && l2[1] === 0;
  const rA = rankOf(A, 2), rAb = rankOf(aug, 3);
  const kind = bad ? "bad" : rA < rAb ? "none" : rA === 2 ? "one" : "many";
  const sol = kind === "one" ? solutionTex(gaussSteps(aug, 2).final, 2, X3) : null;
  const pt = kind === "one" ? (() => { const R = gaussSteps(aug, 2).final; return [val(R[0][2]), val(R[1][2])]; })() : null;
  const pick = (s: string) => { setSet(s); setL2(LINE_SETS[s].l2); };
  const colors = [C.blue, C.red, C.green];
  return (
    <WidgetCard title="A system as intersecting lines" subtitle="Each equation in two unknowns is a line; the solutions are the points on every line">
      <Row gap={10}>
        <Segmented label="start" options={[{ value: "one", label: "one solution" }, { value: "none", label: "no solution" }, { value: "many", label: "infinitely many" }]} value={set} onChange={pick} />
        <Segmented options={[{ value: 0, label: "2 equations" }, { value: 1, label: "3 equations" }]} value={three ? 1 : 0} onChange={(v) => setThree(v === 1)} />
      </Row>
      <Row gap={10}>
        <Slider label="a₂" value={l2[0]} min={-6} max={6} step={1} onChange={(v) => setL2([v, l2[1], l2[2]])} color={C.red} />
        <Slider label="b₂" value={l2[1]} min={-6} max={6} step={1} onChange={(v) => setL2([l2[0], v, l2[2]])} color={C.red} />
        <Slider label="c₂" value={l2[2]} min={-10} max={10} step={1} onChange={(v) => setL2([l2[0], l2[1], v])} color={C.red} />
      </Row>
      <Plane view={V7} label="the lines of the system" step={1}>
        {(X, Y) => <>
          {rows.map((l, i) => (l[0] || l[1]) ? <line key={i} {...lineSeg(X, Y, l)} stroke={colors[i]} strokeWidth={i === 1 && kind === "many" ? 7 : 3} strokeOpacity={i === 1 && kind === "many" ? 0.35 : 1} strokeDasharray={i === 2 ? "8 5" : undefined} /> : null)}
          {pt && <circle cx={X(pt[0])} cy={Y(pt[1])} r={7} fill={C.amber} stroke="#fff" strokeWidth={2} />}
        </>}
      </Plane>
      <Readout tone={kind === "one" ? "green" : kind === "many" ? "blue" : "red"}>
        <MathText block html={`\\(\\left\\{\\begin{aligned}${rows.map((r) => eq2(r).replace("=", "&=")).join("\\\\")}\\end{aligned}\\right.\\)`} />
        <MathText block html={bad ? "With \\(a_2=b_2=0\\) the second equation has no \\(x\\)'s at all — it is not a line."
          : kind === "one" ? `The lines meet in exactly <strong>one point</strong>: \\(${sol!.tex}\\). That point is the unique solution.`
          : kind === "none" ? `There is <strong>no point on every line</strong> (parallel lines, or three lines that do not share a point): the system is <strong>inconsistent</strong>.`
          : `The equations describe the <strong>same line</strong>, so every point of it is a solution: <strong>infinitely many</strong> solutions.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 2.2 elementary row operations */

const ROW_SETS: Record<string, number[][]> = {
  a: [[1, 2, -1, 3], [2, 5, 1, 10], [3, 7, 2, 15]],
  b: [[0, 1, 2, 3], [1, -1, 1, 2], [2, 0, 5, 9]],
  c: [[1, 2, -1, 1], [2, 4, 1, 8], [-1, -2, 4, 5]],
};
type Op = "swap" | "scale" | "add";

export function RowOpsLab({ init = { set: "a" } }: { init?: { set: string } }) {
  const [set, setSet] = useState(init.set in ROW_SETS ? init.set : "a");
  const [hist, setHist] = useState<{ m: M; op: string }[]>([{ m: toM(ROW_SETS[set]), op: "" }]);
  const [op, setOp] = useState<Op>("add");
  const [i, setI] = useState(2), [j, setJ] = useState(1);
  const [cs, setCs] = useState("-2");
  const [view, setView] = useState<"matrix" | "equations">("matrix");
  const m = hist[hist.length - 1].m;
  const cval = parseQ(cs);
  const err = op === "swap" ? (i === j ? "Choose two different rows." : "")
    : !cval ? "Type the scalar as an integer, a fraction like -3/2, or a decimal."
    : op === "scale" && isZ(cval) ? "Multiplying a row by 0 is not allowed: it destroys an equation and is not reversible."
    : op === "add" && i === j ? "Add a multiple of a different row." : "";
  const opTex = op === "swap" ? `R_{${i}}\\leftrightarrow R_{${j}}` : op === "scale" ? `R_{${i}}\\to ${cval ? tex(cval) : "c"}R_{${i}}` : `R_{${i}}\\to R_{${i}}${cval && val(cval) < 0 ? "-" : "+"}${cval ? (isOne(q(Math.abs(cval.n), cval.d)) ? "" : tex(q(Math.abs(cval.n), cval.d))) : "c"}R_{${j}}`;
  const apply = () => {
    if (err) return;
    const n = clone(m), a = i - 1, b = j - 1;
    if (op === "swap") [n[a], n[b]] = [n[b], n[a]];
    else if (op === "scale") n[a] = n[a].map((x) => mul(x, cval!));
    else n[a] = n[a].map((x, k) => add(x, mul(cval!, n[b][k])));
    setHist([...hist, { m: n, op: opTex }]);
  };
  const sh = shape(m, 3);
  const pick = (s: string) => { setSet(s); setHist([{ m: toM(ROW_SETS[s]), op: "" }]); };
  const rowBtns = (v: number, set_: (n: number) => void, label: string) => <Segmented label={label} options={[1, 2, 3].map((k) => ({ value: k, label: `R${k}` }))} value={v} onChange={set_} />;
  const sol = sh.rref ? solutionTex(m, 3, X3) : null;
  return (
    <WidgetCard title="Elementary row operations" subtitle="Swap, scale, or add a multiple of another row — the solution set never changes">
      <Row gap={10}>
        <Segmented label="system" options={[{ value: "a", label: "A" }, { value: "b", label: "B" }, { value: "c", label: "C" }]} value={set} onChange={pick} />
        <Segmented options={[{ value: "matrix", label: "matrix" }, { value: "equations", label: "equations" }]} value={view} onChange={setView} />
      </Row>
      <div style={{ textAlign: "center", fontSize: 19, margin: "12px 0", overflowX: "auto", overflowY: "hidden", padding: "4px 0" }}>
        <MathText html={`\\(${view === "matrix" ? matTex(m, true, sh.ref ? sh.piv : []) : eqTex(m, X3)}\\)`} />
      </div>
      <Row gap={10}>
        <Segmented label="operation" options={[{ value: "swap", label: "swap rows" }, { value: "scale", label: "scale a row" }, { value: "add", label: "add a multiple" }]} value={op} onChange={setOp} />
      </Row>
      <Row gap={10} style={{ marginTop: 8 }}>
        {rowBtns(i, setI, op === "swap" ? "rows" : "change")}
        {op !== "scale" && rowBtns(j, setJ, op === "swap" ? "and" : "using")}
        {op !== "swap" && <label style={{ fontSize: 14, fontWeight: 650, color: C.muted }}>scalar c <input value={cs} onChange={(e) => setCs(e.target.value)} style={{ width: 80, padding: "6px 8px", borderRadius: 8, border: "1px solid #cbd5e1", fontSize: 15 }} aria-label="scalar" /></label>}
        <button type="button" style={btn(true)} onClick={apply} disabled={!!err}>Apply <MathText html={`\\(${opTex}\\)`} /></button>
        <button type="button" style={btn(false)} onClick={() => hist.length > 1 && setHist(hist.slice(0, -1))}>Undo</button>
        <button type="button" style={btn(false)} onClick={() => pick(set)}>Reset</button>
      </Row>
      {err && <div style={{ color: C.red, fontSize: 14, marginTop: 6 }}>{err}</div>}
      <div style={{ marginTop: 10 }}>
        <Readout tone={sh.rref ? "green" : sh.ref ? "amber" : "blue"}>
          {hist.length > 1 && <MathText block html={`Operations so far: \\(${hist.slice(1).map((h) => h.op).join(",\\ ")}\\)`} />}
          <MathText block html={sh.rref ? `This is <strong>reduced row echelon form</strong>. Read the answer: \\(${sol!.tex}\\)`
            : sh.ref ? "This is <strong>row echelon form</strong> (pivots in amber step down to the right). Keep going to reduced form: make each pivot 1 and clear the entries above it."
            : "Goal: create zeros below the first pivot, then below the second, so the leading entries step down to the right."} />
        </Readout>
      </div>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 2.3–2.4 Gauss–Jordan tutor */

const GJ_SETS: Record<string, { m: number[][]; n: number; label: string }> = {
  unique: { m: [[1, 1, 2, 9], [2, 4, -3, 1], [3, 6, -5, 0]], n: 3, label: "one solution" },
  param: { m: [[1, 2, -1, 3, 4], [2, 4, 0, 2, 6], [-1, -2, 3, -7, -6]], n: 4, label: "free variables" },
  none: { m: [[0, 2, 4, 6], [1, -1, 3, 2], [2, 0, 10, 9]], n: 3, label: "no solution" },
  swap: { m: [[0, 3, -6, 6], [2, -4, 2, 0], [1, -1, 4, 5]], n: 3, label: "needs a swap" },
};

export function GaussJordanLab({ init = { set: "unique" } }: { init?: { set: string } }) {
  const [set, setSet] = useState(init.set in GJ_SETS ? init.set : "unique");
  const [k, setK] = useState(0);
  const G = GJ_SETS[set];
  const start = useMemo(() => toM(G.m), [G]);
  const run = useMemo(() => gaussSteps(start, G.n), [start, G.n]);
  const total = run.steps.length;
  const cur = k === 0 ? { m: start, piv: [] as [number, number][], row: -1, op: "", why: "The starting augmented matrix.", phase: "forward" as const } : run.steps[k - 1];
  const done = k === total;
  const sol = done ? solutionTex(run.final, G.n, X3) : null;
  const atRef = k === run.refAt;
  const pick = (s: string) => { setSet(s); setK(0); };
  return (
    <WidgetCard title="Gauss–Jordan elimination, one step at a time" subtitle="Forward phase to echelon form, backward phase to reduced form, then read the solution">
      <Segmented label="system" options={Object.entries(GJ_SETS).map(([v, s]) => ({ value: v, label: s.label }))} value={set} onChange={pick} />
      <div style={{ textAlign: "center", fontSize: 19, margin: "14px 0", overflowX: "auto", overflowY: "hidden", padding: "4px 0" }}>
        <MathText html={`\\(${matTex(cur.m, true, cur.piv, cur.row)}\\)`} />
      </div>
      <Row gap={10}>
        <button type="button" style={btn(false)} onClick={() => setK(0)}>Start over</button>
        <button type="button" style={btn(false)} onClick={() => setK(Math.max(0, k - 1))} disabled={k === 0}>Back</button>
        <button type="button" style={btn(true)} onClick={() => setK(Math.min(total, k + 1))} disabled={done}>Next step</button>
        <button type="button" style={btn(false)} onClick={() => setK(total)}>Jump to the end</button>
        <span style={{ color: C.muted, fontSize: 14 }}>step {k} of {total} · {k === 0 ? "start" : cur.phase === "forward" ? "forward phase" : "backward phase"}</span>
      </Row>
      <div style={{ marginTop: 10 }}>
        <Readout tone={done ? (sol!.kind === "none" ? "red" : "green") : atRef ? "amber" : "blue"}>
          {k > 0 && <MathText block html={`<strong>\\(${cur.op}\\)</strong> — ${cur.why}`} />}
          {k === 0 && <MathText block html={cur.why} />}
          {atRef && !done && <MathText block html="<strong>Row echelon form reached.</strong> Back substitution could finish from here; Gauss–Jordan continues upward instead." />}
          {done && <MathText block html={sol!.kind === "none" ? `<strong>Reduced row echelon form.</strong> The last nonzero row says \\(0=\\text{nonzero}\\), so the system is <strong>inconsistent</strong>.` : sol!.kind === "unique" ? `<strong>Reduced row echelon form.</strong> Every variable is a pivot variable, so the solution is unique: \\(${sol!.tex}\\)` : `<strong>Reduced row echelon form.</strong> Columns without a pivot give <strong>free variables</strong>; solving for the pivot variables gives \\(${sol!.tex}\\)`} />}
        </Readout>
      </div>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 2.5 rank and the number of solutions */

export function RankLab({ init = { set: "square" } }: { init?: { set: "square" | "wide" } }) {
  const [set, setSet] = useState<"square" | "wide">(init.set);
  const [k, setK] = useState(1), [h, setH] = useState(5);
  const rows = set === "square" ? [[1, 2, -1, 3], [2, 5, 1, 8], [1, 3, k, h]] : [[1, -1, 2, 1], [2, k, 4, h]];
  const n = 3, aug = toM(rows), A = toM(rows.map((r) => r.slice(0, 3)));
  const rA = rankOf(A, 3), rAb = rankOf(aug, 4);
  const R = gaussSteps(aug, 3).final;
  const sol = solutionTex(R, 3, X3);
  const verdict = rA < rAb ? "none" : rA === n ? "one" : "many";
  return (
    <WidgetCard title="Rank decides the number of solutions" subtitle="Compare rank A, rank [A | b] and the number of unknowns n">
      <Segmented label="system" options={[{ value: "square", label: "3 equations, 3 unknowns" }, { value: "wide", label: "2 equations, 3 unknowns" }]} value={set} onChange={(s) => { setSet(s); setK(s === "square" ? 1 : 1); setH(s === "square" ? 5 : 2); }} />
      <Row gap={10}><Slider label="k" value={k} min={-4} max={5} step={1} onChange={setK} color={C.violet} /><Slider label="h" value={h} min={-2} max={10} step={1} onChange={setH} color={C.amber} /></Row>
      <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap", fontSize: 18, margin: "12px 0", overflowX: "auto", overflowY: "hidden", padding: "4px 0" }}>
        <MathText html={`\\([A\\mid\\vec b]=${matTex(aug, true)}\\)`} />
        <MathText html={`\\(\\sim${matTex(R, true, shape(R, 3).piv)}\\)`} />
      </div>
      <Readout tone={verdict === "one" ? "green" : verdict === "many" ? "blue" : "red"}>
        <MathText block html={`\\(\\operatorname{rank}A=${rA},\\quad\\operatorname{rank}[A\\mid\\vec b]=${rAb},\\quad n=${n}\\)`} />
        <MathText block html={verdict === "none" ? "rank \\(A\\) &lt; rank \\([A\\mid\\vec b]\\): a row of the reduced matrix reads \\(0=\\text{nonzero}\\). <strong>No solution.</strong>"
          : verdict === "one" ? `rank \\(A\\) = rank \\([A\\mid\\vec b]\\) = \\(n\\): consistent with no free variables. <strong>Exactly one solution</strong>: \\(${sol.tex}\\)`
          : `rank \\(A\\) = rank \\([A\\mid\\vec b]\\) &lt; \\(n\\): consistent with \\(n-\\operatorname{rank}A=${n - rA}\\) free variable${n - rA > 1 ? "s" : ""}. <strong>Infinitely many solutions</strong>: \\(${sol.tex}\\)`} />
        <MathText block html={set === "square" ? "Try \\(k=2\\): the third row collapses. Then \\(h\\) decides between none and infinitely many." : "With 2 equations and 3 unknowns the rank is at most 2 &lt; 3, so a unique solution is impossible. Try \\(k=-2\\)."} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 2.6 homogeneous and non-homogeneous */

const V6: View = { xmin: -6, xmax: 6, ymin: -5, ymax: 5 };
export function SolutionSetLab({ init = { a: 1, b: -2 } }: { init?: { a: number; b: number } }) {
  const [a, setA] = useState(init.a), [b, setB] = useState(init.b);
  const [c, setC] = useState(4), [t, setT] = useState(1);
  const ok = a !== 0 || b !== 0;
  const v: [number, number] = [-b, a];
  const p: [number, number] = ok ? [(a * c) / (a * a + b * b), (b * c) / (a * a + b * b)] : [0, 0];
  const x: [number, number] = [p[0] + t * v[0], p[1] + t * v[1]];
  const seg = (k: number) => (X: (x: number) => number, Y: (y: number) => number) => lineSeg(X, Y, [a, b, k] as L3);
  return (
    <WidgetCard title="Particular + homogeneous" subtitle="Every solution of Ax = b is one particular solution plus a solution of Ax = 0">
      <Row gap={10}><Slider label="a" value={a} min={-4} max={4} onChange={setA} color={C.blue} /><Slider label="b" value={b} min={-4} max={4} onChange={setB} color={C.blue} /><Slider label="c" value={c} min={-8} max={8} onChange={setC} color={C.red} /></Row>
      <Slider label="parameter t" value={t} min={-3} max={3} step={0.1} onChange={setT} color={C.green} format={(v) => r2(v)} />
      <Plane view={V6} label="the solution sets of a x1 + b x2 = c and a x1 + b x2 = 0" step={1}>
        {(X, Y) => ok && <>
          <line {...seg(0)(X, Y)} stroke={C.violet} strokeWidth={3} strokeDasharray="8 5" />
          <line {...seg(c)(X, Y)} stroke={C.red} strokeWidth={3} />
          <line x1={X(0)} y1={Y(0)} x2={X(p[0])} y2={Y(p[1])} stroke={C.amber} strokeWidth={3} />
          <line x1={X(p[0])} y1={Y(p[1])} x2={X(x[0])} y2={Y(x[1])} stroke={C.green} strokeWidth={3} />
          <line x1={X(0)} y1={Y(0)} x2={X(t * v[0])} y2={Y(t * v[1])} stroke={C.green} strokeWidth={2} strokeDasharray="4 4" />
          <circle cx={X(p[0])} cy={Y(p[1])} r={6} fill={C.amber} />
          <circle cx={X(x[0])} cy={Y(x[1])} r={7} fill={C.green} stroke="#fff" strokeWidth={2} />
        </>}
      </Plane>
      <Readout tone={c === 0 ? "blue" : "green"}>
        {!ok ? <MathText block html="Choose \\(a\\) and \\(b\\) not both zero." /> : <>
          <MathText block html={`Homogeneous \\(${eq2([a, b, 0])}\\) (dashed violet): the line through the origin, all multiples of \\(\\vec v=(${r2(v[0])},\\ ${r2(v[1])})\\).`} />
          <MathText block html={c === 0 ? "With \\(c=0\\) the system is homogeneous: the solution set passes through \\(\\vec 0\\) and is closed under adding and scaling." : `Non-homogeneous \\(${eq2([a, b, c])}\\) (red) is the same line <strong>shifted</strong> by a particular solution \\(\\vec p=(${r2(p[0])},\\ ${r2(p[1])})\\) (amber): \\(\\vec x=\\vec p+t\\vec v=(${r2(x[0])},\\ ${r2(x[1])})\\). It does not pass through the origin, so it is not closed under addition.`} />
        </>}
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 2.7 polynomial interpolation */

const XS: Record<number, number[]> = { 3: [-1, 1, 2], 4: [-2, -1, 1, 2] };
export function InterpolationLab({ init = { k: 3 } }: { init?: { k: 3 | 4 } }) {
  const [k, setK] = useState<3 | 4>(init.k);
  const [ys, setYs] = useState<number[]>([4, 0, 1, -2]);
  const xs = XS[k], y = ys.slice(0, k);
  const aug = toM(xs.map((x, i) => [...Array.from({ length: k }, (_, j) => x ** j), y[i]]));
  const R = gaussSteps(aug, k).final;
  const coef = R.map((r) => r[k]);
  const p = (x: number) => coef.reduce((s, c, j) => s + val(c) * x ** j, 0);
  const view: View = { xmin: -4, xmax: 4, ymin: -8, ymax: 8 };
  const poly = coef.map((c, j) => ({ c, j })).filter(({ c }) => !isZ(c)).map(({ c, j }, i) => {
    const v = val(c), mag = tex(q(Math.abs(c.n), c.d)), sign = i === 0 ? (v < 0 ? "-" : "") : v < 0 ? "-" : "+";
    return `${sign}${j > 0 && mag === "1" ? "" : mag}${j === 0 ? "" : j === 1 ? "x" : `x^{${j}}`}`;
  }).join("") || "0";
  const names = ["a_0", "a_1", "a_2", "a_3"];
  return (
    <WidgetCard title="A curve through given points" subtitle="Requiring p(xᵢ) = yᵢ gives one linear equation per point in the unknown coefficients">
      <Segmented label="points" options={[{ value: 3, label: "3 points → quadratic" }, { value: 4, label: "4 points → cubic" }]} value={k} onChange={setK} />
      <Row gap={10}>{xs.map((x, i) => <Slider key={i} label={`y at x = ${x}`} value={ys[i]} min={-6} max={6} onChange={(v) => setYs(ys.map((w, j) => (j === i ? v : w)))} color={C.red} />)}</Row>
      <Plane view={view} label="the interpolating polynomial" step={1}>
        {(X, Y) => <>
          <polyline points={Array.from({ length: 161 }, (_, i) => { const x = view.xmin + (i * (view.xmax - view.xmin)) / 160; return `${X(x)},${Y(p(x))}`; }).join(" ")} fill="none" stroke={C.violet} strokeWidth={3} />
          {xs.map((x, i) => <circle key={i} cx={X(x)} cy={Y(y[i])} r={7} fill={C.red} stroke="#fff" strokeWidth={2} />)}
        </>}
      </Plane>
      <Readout tone="green">
        <MathText block html={`Unknowns \\(${names.slice(0, k).join(",")}\\) in \\(p(x)=${names.slice(0, k).map((n, j) => (j === 0 ? n : j === 1 ? `${n}x` : `${n}x^{${j}}`)).join("+")}\\). Augmented matrix (row \\(i\\) is \\(1,\\ x_i,\\ x_i^2${k === 4 ? ",\\ x_i^3" : ""}\\mid y_i\\)):`} />
        <div style={{ textAlign: "center", fontSize: 17, margin: "6px 0", overflowX: "auto", overflowY: "hidden", padding: "4px 0" }}><MathText html={`\\(${matTex(aug, true)}\\sim${matTex(R, true)}\\)`} /></div>
        <MathText block html={`So \\(p(x)=${poly}\\). Because the \\(x_i\\) are different, the coefficient matrix has full rank and there is always exactly one such polynomial.`} />
      </Readout>
    </WidgetCard>
  );
}
