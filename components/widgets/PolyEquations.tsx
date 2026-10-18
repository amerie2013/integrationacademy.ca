"use client";

// MHF4U chapter 2 (polynomial equations and inequalities) explorers: synthetic division and the remainder theorem,
// the factor theorem with rational-zero candidates, solving f(x) = k, families of polynomial functions,
// inequalities read from a graph, and sign charts for factored inequalities.

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { r2, type View } from "./Systems";
import { Curves, dot } from "./Quadratics";

const cell: React.CSSProperties = { padding: "4px 10px", textAlign: "center", borderBottom: `1px solid ${C.line}` };
const sup = (n: number) => (n === 1 ? "" : `^{${n}}`);
const coefTex = (a: number, first: boolean, s: string) => {
  if (a === 0) return "";
  const sign = a < 0 ? "-" : first ? "" : "+";
  const mag = Math.abs(a) === 1 && s ? "" : r2(Math.abs(a));
  return `${sign}${mag}${s}`;
};
/** polynomial from coefficients [a_n, …, a_0] as LaTeX */
function polyTex(cs: number[]) {
  const n = cs.length - 1;
  const t = cs.map((a, i) => ({ a, p: n - i })).filter((o) => o.a !== 0);
  if (!t.length) return "0";
  return t.map((o, i) => coefTex(o.a, i === 0, o.p === 0 ? "" : `x${sup(o.p)}`)).join("");
}
const ev = (cs: number[], x: number) => cs.reduce((s, a) => s * x + a, 0);
/** synthetic division of cs by (x − b): [quotient, remainder, products row] */
function synth(cs: number[], b: number): [number[], number, number[]] {
  const out: number[] = [], prod: number[] = [];
  cs.forEach((a, i) => { const p = i === 0 ? 0 : out[i - 1] * b; prod.push(p); out.push(a + p); });
  return [out.slice(0, -1), out[out.length - 1], prod];
}
const fac = (r: number) => (r === 0 ? "x" : `(x${r > 0 ? "-" : "+"}${r2(Math.abs(r))})`);
const near = (a: number, b: number) => Math.abs(a - b) < 1e-9;
/** real roots of f on [lo, hi] by sign change + bisection (touching roots found from |f| minima near 0) */
function realRoots(f: (x: number) => number, lo = -8, hi = 8, n = 1600) {
  const out: number[] = [];
  let px = lo, py = f(lo);
  for (let i = 1; i <= n; i++) {
    const x = lo + ((hi - lo) * i) / n, y = f(x);
    if (py === 0) out.push(px);
    else if (py * y < 0) { let a = px, b = x; for (let k = 0; k < 60; k++) { const m = (a + b) / 2; if (f(a) * f(m) <= 0) b = m; else a = m; } out.push((a + b) / 2); }
    px = x; py = y;
  }
  // double roots: local minima of |f| that are ~0
  for (let i = 1; i < n; i++) {
    const x0 = lo + ((hi - lo) * (i - 1)) / n, x1 = lo + ((hi - lo) * i) / n, x2 = lo + ((hi - lo) * (i + 1)) / n;
    const a = Math.abs(f(x0)), b = Math.abs(f(x1)), c = Math.abs(f(x2));
    if (b <= a && b <= c && b < 1e-3 && !out.some((r) => Math.abs(r - x1) < 0.02)) out.push(Math.round(x1 * 1000) / 1000);
  }
  return [...out].sort((p, q) => p - q).filter((r, i, s) => i === 0 || Math.abs(r - s[i - 1]) > 1e-6).map((r) => (Math.abs(r - Math.round(r)) < 1e-6 ? Math.round(r) : r));
}
/** union of intervals as LaTeX: crit = sorted critical x-values, inside[i] for the i-th open interval, atCrit[j] whether crit j is included */
function intervalTex(crit: number[], inside: boolean[], atCrit: boolean[]) {
  const pts = [-Infinity, ...crit, Infinity];
  const parts: string[] = [];
  let start: number | null = null, startClosed = false;
  const fmt = (v: number) => (v === -Infinity ? "-\\infty" : v === Infinity ? "\\infty" : r2(v));
  for (let i = 0; i < inside.length; i++) {
    if (inside[i] && start === null) { start = pts[i]; startClosed = i > 0 && atCrit[i - 1]; }
    const endHere = inside[i] && !(i + 1 < inside.length && inside[i + 1] && atCrit[i]);
    if (inside[i] && endHere) {
      const end = pts[i + 1], endClosed = i < crit.length && atCrit[i];
      parts.push(`${startClosed ? "[" : "("}${fmt(start!)},\\,${fmt(end)}${endClosed ? "]" : ")"}`);
      start = null;
    }
  }
  // isolated included points (e.g. ≥ at a double zero)
  crit.forEach((c, j) => { if (atCrit[j] && !inside[j] && !inside[j + 1]) parts.push(`\\{${r2(c)}\\}`); });
  return parts.length ? parts.join("\\cup ") : "\\varnothing";
}
const band = (X: (x: number) => number, Y: (y: number) => number, view: View, a: number, b: number, color: string, key: string | number) => {
  const x0 = X(Math.max(a, view.xmin)), x1 = X(Math.min(b, view.xmax));
  return <rect key={key} x={x0} y={Y(view.ymax)} width={Math.max(0, x1 - x0)} height={Y(view.ymin) - Y(view.ymax)} fill={color} opacity={0.13} />;
};

/* ---------------------------------------------------------------- 2.1 synthetic division and the remainder theorem */

export function SyntheticDivide({ init = { cs: [1, -2, -5, 6], b: 2 } }: { init?: { cs: number[]; b: number } }) {
  const [cs, setCs] = useState<number[]>(init.cs);
  const [b, setB] = useState(init.b);
  const [q, R, prod] = synth(cs, b);
  const f = (x: number) => ev(cs, x);
  const ys = Array.from({ length: 121 }, (_, i) => f(-5 + i / 12));
  const hi = Math.min(60, Math.max(10, ...ys.map(Math.abs).filter(Number.isFinite)));
  const set = (i: number, v: number) => setCs((c) => c.map((x, j) => (j === i ? (i === 0 && v === 0 ? 1 : v) : x)));
  return (
    <WidgetCard title="Synthetic division and the remainder theorem" subtitle="dividing f(x) by (x − b) leaves remainder f(b)">
      <Row gap={8}>
        {["a (x³)", "b (x²)", "c (x)", "d (constant)"].map((nm, i) => <Slider key={nm} label={nm} value={cs[i]} min={-8} max={8} onChange={(v) => set(i, v)} color={i === 0 ? C.red : C.blue} />)}
        <Slider label="divide by x − b:  b" value={b} min={-4} max={4} onChange={setB} color={C.green} />
      </Row>
      <div style={{ textAlign: "center", fontSize: 18, margin: "6px 0" }}><MathText html={`\\(\\dfrac{${polyTex(cs)}}{${fac(b)}}\\)`} /></div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", margin: "0 auto", fontSize: 15 }}>
          <tbody>
            <tr><td style={{ ...cell, color: C.green, fontWeight: 700, borderRight: `2px solid ${C.ink}` }}>{b}</td>{cs.map((a, i) => <td key={i} style={cell}>{a}</td>)}</tr>
            <tr><td style={{ ...cell, borderRight: `2px solid ${C.ink}` }} />{prod.map((p, i) => <td key={i} style={{ ...cell, color: C.muted }}>{i === 0 ? "" : r2(p)}</td>)}</tr>
            <tr style={{ borderTop: `2px solid ${C.ink}` }}><td style={{ ...cell, borderRight: `2px solid ${C.ink}` }} />{[...q, R].map((v, i) => <td key={i} style={{ ...cell, fontWeight: 700, color: i === q.length ? C.red : C.violet }}>{r2(v)}</td>)}</tr>
          </tbody>
        </table>
      </div>
      <Curves view={{ xmin: -5, xmax: 5, ymin: -hi, ymax: hi }} label="Remainder theorem" step={1} stepY={hi > 30 ? 10 : 4} fs={[{ f, color: C.violet }]}>
        {(X, Y) => <>{dot(X, Y, b, R, C.red, `(${b}, ${r2(R)})`, "r")}</>}
      </Curves>
      <Readout tone={R === 0 ? "green" : "blue"}>
        <MathText block html={`Bring down, multiply by ${b}, add. Quotient \\(q(x)=${polyTex(q)}\\), remainder \\(R=${r2(R)}\\).`} />
        <MathText block html={`So \\(${polyTex(cs)}=${fac(b)}(${polyTex(q)})${R === 0 ? "" : R > 0 ? `+${r2(R)}` : `-${r2(-R)}`}\\), and the graph passes through \\((${b},\\,${r2(R)})\\): \\(f(${b})=${r2(R)}\\).`} />
        {R === 0 && <MathText block html={`Remainder 0: \\(${fac(b)}\\) is a factor and \\(x=${b}\\) is a zero.`} />}
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 2.2 factor theorem and rational-zero candidates */

function divisors(n: number) { n = Math.abs(Math.round(n)); const d: number[] = []; for (let i = 1; i <= n; i++) if (n % i === 0) d.push(i); return d; }
function candidates(cs: number[]) {
  const lead = cs[0], cst = cs[cs.length - 1];
  if (cst === 0) return [0];
  const out = new Set<number>();
  for (const p of divisors(cst)) for (const qq of divisors(lead)) { out.add(p / qq); out.add(-p / qq); }
  return [...out].sort((a, b) => a - b);
}
const fracTex = (v: number, lead: number) => {
  for (let d = 1; d <= Math.abs(lead); d++) { const n = v * d; if (near(n, Math.round(n))) return d === 1 ? `${Math.round(n)}` : `${Math.round(n) < 0 ? "-" : ""}\\tfrac{${Math.abs(Math.round(n))}}{${d}}`; }
  return r2(v);
};

export function FactorFinder({ init = [1, -1, -10, -8] }: { init?: number[] }) {
  const [cs, setCs] = useState<number[]>(init);
  const f = (x: number) => ev(cs, x);
  const cand = candidates(cs);
  // deflate by every rational zero found
  let rem = [...cs]; const found: number[] = [];
  for (let guard = 0; guard < 4 && rem.length > 1; guard++) {
    const r = candidates(rem).find((c) => near(ev(rem, c), 0));
    if (r === undefined) break;
    found.push(r); rem = synth(rem, r)[0];
  }
  const lead = cs[0];
  // a zero n/d becomes the integer factor (dx − n); divide the leftover factor by every d used
  const parts = found.map((r) => { for (let d = 1; d <= Math.abs(lead); d++) if (near(r * d, Math.round(r * d))) return [Math.round(r * d), d]; return [r, 1]; });
  const scale = parts.reduce((s, [, d]) => s * d, 1);
  const left = rem.every((c) => near(c / scale, Math.round(c / scale))) ? rem.map((c) => c / scale) : null;
  const linTex = ([n, d]: number[]) => (d === 1 ? fac(n) : `(${d}x${n > 0 ? "-" : "+"}${Math.abs(n)})`);
  const factTex = found.length
    ? left
      ? `${left.length === 1 ? (left[0] === 1 ? "" : left[0] === -1 ? "-" : r2(left[0])) : `(${polyTex(left)})`}${parts.map(linTex).join("")}`
      : `${rem.length === 1 ? r2(rem[0]) : `(${polyTex(rem)})`}${found.map((r) => `(x${r > 0 ? "-" : "+"}${fracTex(Math.abs(r), lead)})`).join("")}`
    : polyTex(cs);
  const ys = Array.from({ length: 121 }, (_, i) => f(-5 + i / 12));
  const hi = Math.min(60, Math.max(10, ...ys.map(Math.abs).filter(Number.isFinite)));
  const set = (i: number, v: number) => setCs((c) => c.map((x, j) => (j === i ? (i === 0 && v === 0 ? 1 : v) : x)));
  return (
    <WidgetCard title="The factor theorem" subtitle="x − b is a factor exactly when f(b) = 0; test the candidates ±(factors of the constant) ÷ (factors of the leading coefficient)">
      <Row gap={8}>
        {["a (x³)", "b (x²)", "c (x)", "d (constant)"].map((nm, i) => <Slider key={nm} label={nm} value={cs[i]} min={i === 0 ? -4 : -12} max={i === 0 ? 4 : 12} onChange={(v) => set(i, v)} color={i === 0 ? C.red : C.blue} />)}
      </Row>
      <div style={{ textAlign: "center", fontSize: 18, margin: "6px 0" }}><MathText html={`\\(f(x)=${polyTex(cs)}\\)`} /></div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center", margin: "6px 0" }}>
        {cand.map((c) => { const v = f(c), z = near(v, 0); return (
          <span key={c} style={{ padding: "3px 8px", borderRadius: 8, fontSize: 14, border: `1px solid ${z ? C.green : C.line}`, background: z ? "#dcfce7" : "transparent", color: z ? "#166534" : C.ink }}>
            <MathText html={`\\(f(${fracTex(c, lead)})=${r2(v)}\\)`} />
          </span>); })}
      </div>
      <Curves view={{ xmin: -5, xmax: 5, ymin: -hi, ymax: hi }} label="Factor theorem" step={1} stepY={hi > 30 ? 10 : 4} fs={[{ f, color: C.violet }]}>
        {(X, Y) => <>{found.map((r, i) => dot(X, Y, r, 0, C.green, fracTex(r, lead).replace(/\\tfrac\{(\d+)\}\{(\d+)\}/, "$1/$2"), i))}</>}
      </Curves>
      <Readout tone={found.length ? "green" : "amber"}>
        <MathText block html={`${cand.length} candidate${cand.length === 1 ? "" : "s"} to test. ${found.length ? `Zeros found: ${found.map((r) => `\\(${fracTex(r, lead)}\\)`).join(", ")}.` : "No rational zero: this cubic does not factor over the integers (its real zeros are irrational)."}`} />
        {found.length > 0 && <MathText block html={`\\(f(x)=${factTex}\\)${rem.length === 3 ? " — the quadratic factor has no rational zeros" : ""}`} />}
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 2.3 solving polynomial equations f(x) = k */

export function RootSolver({ init = { cs: [1, 0, -7, 0], k: 6 } }: { init?: { cs: number[]; k: number } }) {
  const [cs, setCs] = useState<number[]>(init.cs);
  const [k, setK] = useState(init.k);
  const f = (x: number) => ev(cs, x);
  const sols = realRoots((x) => f(x) - k, -6, 6);
  const ys = Array.from({ length: 121 }, (_, i) => f(-5 + i / 12));
  const hi = Math.min(60, Math.max(10, Math.abs(k) + 4, ...ys.map(Math.abs).filter(Number.isFinite)));
  const deg = cs.length - 1;
  const set = (i: number, v: number) => setCs((c) => c.map((x, j) => (j === i ? (i === 0 && v === 0 ? 1 : v) : x)));
  const g = [...cs]; g[g.length - 1] -= k;
  return (
    <WidgetCard title="Solving polynomial equations" subtitle="the solutions of f(x) = k are the x-coordinates where y = f(x) meets the line y = k">
      <Segmented options={[{ value: 3, label: "cubic" }, { value: 4, label: "quartic" }]} value={deg} onChange={(d) => setCs(d === 3 ? [1, 0, -7, 0] : [1, 0, -10, 0, 9])} />
      <Row gap={8}>
        {cs.map((a, i) => <Slider key={i} label={`x^${deg - i} coefficient`.replace("x^0 coefficient", "constant").replace("x^1 coefficient", "x coefficient")} value={a} min={-12} max={12} onChange={(v) => set(i, v)} color={i === 0 ? C.red : C.blue} />)}
        <Slider label="k" value={k} min={-20} max={20} onChange={setK} color={C.green} />
      </Row>
      <div style={{ textAlign: "center", fontSize: 18, margin: "6px 0" }}><MathText html={`\\(${polyTex(cs)}=${r2(k)}\\quad\\Longleftrightarrow\\quad ${polyTex(g)}=0\\)`} /></div>
      <Curves view={{ xmin: -5, xmax: 5, ymin: -hi, ymax: hi }} label="Polynomial equation" step={1} stepY={hi > 30 ? 10 : 4} fs={[{ f, color: C.violet }, { f: () => k, color: C.green, width: 2, dash: "6 4" }]}>
        {(X, Y) => <>{sols.map((s, i) => dot(X, Y, s, k, C.red, r2(s), i))}</>}
      </Curves>
      <Readout tone="green">
        <MathText block html={`${sols.length} real solution${sols.length === 1 ? "" : "s"}${sols.length ? ": " + sols.map((s) => `\\(x${Number.isInteger(s) ? "=" : "\\approx"}${r2(s)}\\)`).join(", ") : ""}. A degree-${deg} equation has at most ${deg}.`} />
        <MathText block html={`Algebraically: move everything to one side, then factor (factor theorem, grouping, or a quadratic pattern). Integer solutions show where the factor theorem will work.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 2.4 families of polynomial functions */

export function PolyFamily({ init = { zeros: [-2, 1, 3], k: 1 } }: { init?: { zeros: number[]; k: number } }) {
  const [zs, setZs] = useState<number[]>(init.zeros);
  const [k, setK] = useState(init.k);
  const [mode, setMode] = useState<"k" | "pt">("k");
  const [px, setPx] = useState(0), [py, setPy] = useState(12);
  const base = (x: number) => zs.reduce((p, r) => p * (x - r), 1);
  const kFit = base(px) === 0 ? NaN : py / base(px);
  const K = mode === "k" ? k : kFit;
  const fam = [-2, -1, -0.5, 0.5, 1, 2].map((m) => ({ f: (x: number) => m * base(x), color: "#cbd5e1", width: 1.5 }));
  const tex = (kk: number) => `${Number.isFinite(kk) ? (near(kk, 1) ? "" : near(kk, -1) ? "-" : r2(kk)) : "k"}${zs.map(fac).join("")}`;
  return (
    <WidgetCard title="Families of polynomial functions" subtitle="y = k(x − r₁)(x − r₂)(x − r₃): same zeros, different k">
      <Row gap={8}>
        {zs.map((r, i) => <Slider key={i} label={`zero ${i + 1}`} value={r} min={-5} max={5} onChange={(v) => setZs((z) => z.map((x, j) => (j === i ? v : x)))} color={C.blue} />)}
      </Row>
      <Segmented options={[{ value: "k", label: "choose k" }, { value: "pt", label: "pass through a point" }]} value={mode} onChange={setMode} />
      <Row gap={8}>
        {mode === "k" ? <Slider label="k" value={k} min={-3} max={3} step={0.25} onChange={(v) => setK(v === 0 ? 0.25 : v)} color={C.red} /> : <>
          <Slider label="point x" value={px} min={-5} max={5} step={0.5} onChange={setPx} color={C.green} />
          <Slider label="point y" value={py} min={-30} max={30} onChange={setPy} color={C.green} />
        </>}
      </Row>
      <div style={{ textAlign: "center", fontSize: 18, margin: "6px 0" }}><MathText html={`\\(y=${tex(K)}\\)`} /></div>
      <Curves view={{ xmin: -6, xmax: 6, ymin: -30, ymax: 30 }} label="Family of cubics" step={1} stepY={5} fs={[...fam, ...(Number.isFinite(K) ? [{ f: (x: number) => K * base(x), color: C.violet }] : [])]}>
        {(X, Y) => <>{zs.map((r, i) => dot(X, Y, r, 0, C.blue, undefined, i))}{mode === "pt" && dot(X, Y, px, py, C.green, `(${px}, ${py})`, "p")}{Number.isFinite(K) && dot(X, Y, 0, K * base(0), C.red, `y-int ${r2(K * base(0))}`, "y")}</>}
      </Curves>
      <Readout tone="green">
        {mode === "k"
          ? <MathText block html={`Every gray curve has the same three zeros. \\(k\\) stretches the graph vertically and, when negative, reflects it. The y-intercept is \\(k\\cdot${r2(base(0))}=${r2(K * base(0))}\\).`} />
          : Number.isFinite(K)
            ? <MathText block html={`Substitute \\((${px},\\,${py})\\): \\(${py}=k\\cdot${r2(base(px))}\\), so \\(k=${r2(K)}\\). One point picks one member of the family.`} />
            : <MathText block html={`The point is on the x-axis at a zero: every member passes through it, so it cannot pick out k.`} />}
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 2.5 inequalities from a graph */

const OPS = [">", "≥", "<", "≤"] as const;
type Op = (typeof OPS)[number];
const opTex = (o: Op) => ({ ">": ">", "≥": "\\ge", "<": "<", "≤": "\\le" })[o];
const holds = (v: number, o: Op) => (o === ">" ? v > 1e-9 : o === "≥" ? v > -1e-9 : o === "<" ? v < -1e-9 : v < 1e-9);

export function InequalityGraph({ init = { cs: [1, -1, -6, 0], m: 0, b: 0, op: ">" as Op } }: { init?: { cs: number[]; m: number; b: number; op: Op } }) {
  const [cs, setCs] = useState<number[]>(init.cs);
  const [m, setM] = useState(init.m), [bb, setB] = useState(init.b);
  const [op, setOp] = useState<Op>(init.op);
  const f = (x: number) => ev(cs, x), g = (x: number) => m * x + bb, h = (x: number) => f(x) - g(x);
  const view: View = { xmin: -5, xmax: 5, ymin: -20, ymax: 20 };
  const crit = realRoots(h, -12, 12);
  const pts = [-Infinity, ...crit, Infinity];
  const inside = pts.slice(0, -1).map((a, i) => { const bnd = pts[i + 1]; const t = a === -Infinity ? bnd - 1 : bnd === Infinity ? a + 1 : (a + bnd) / 2; return holds(h(t), op); });
  const atCrit = crit.map(() => op === "≥" || op === "≤");
  const set = (i: number, v: number) => setCs((c) => c.map((x, j) => (j === i ? (i === 0 && v === 0 ? 1 : v) : x)));
  const gTex = m === 0 ? r2(bb) : `${coefTex(m, true, "x")}${bb === 0 ? "" : bb > 0 ? `+${r2(bb)}` : `-${r2(-bb)}`}`;
  return (
    <WidgetCard title="Solving inequalities graphically" subtitle="f(x) > g(x) where the graph of f is above the graph of g">
      <Row gap={8}>
        {["a (x³)", "b (x²)", "c (x)", "d (constant)"].map((nm, i) => <Slider key={nm} label={nm} value={cs[i]} min={-8} max={8} onChange={(v) => set(i, v)} color={i === 0 ? C.red : C.blue} />)}
      </Row>
      <Row gap={8}>
        <Slider label="line slope m" value={m} min={-6} max={6} onChange={setM} color={C.green} />
        <Slider label="line intercept" value={bb} min={-12} max={12} onChange={setB} color={C.green} />
      </Row>
      <Segmented options={OPS.map((o) => ({ value: o, label: `f(x) ${o} g(x)` }))} value={op} onChange={setOp} />
      <div style={{ textAlign: "center", fontSize: 18, margin: "6px 0" }}><MathText html={`\\(${polyTex(cs)}\\ ${opTex(op)}\\ ${gTex}\\)`} /></div>
      <Curves view={view} label="Inequality" step={1} stepY={5} fs={[{ f, color: C.violet }, { f: g, color: C.green, width: 2.2 }]}>
        {(X, Y) => <>{inside.map((ins, i) => (ins ? band(X, Y, view, pts[i], pts[i + 1], C.green, "b" + i) : null))}{crit.map((c, i) => dot(X, Y, c, g(c), C.red, r2(c), i))}</>}
      </Curves>
      <Readout tone="green">
        <MathText block html={`The graphs meet at ${crit.length ? crit.map((c) => `\\(x${Number.isInteger(c) ? "=" : "\\approx"}${r2(c)}\\)`).join(", ") : "no real x"}. Shaded: where \\(f(x)${opTex(op)}g(x)\\).`} />
        <MathText block html={`Solution: \\(x\\in ${intervalTex(crit, inside, atCrit)}\\)`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 2.6 sign charts */

export function SignChart({ init = { a: 1, zeros: [[-2, 1], [1, 2], [3, 1]] as [number, number][], op: "<" as Op } }: { init?: { a: number; zeros: [number, number][]; op: Op } }) {
  const [a, setA] = useState(init.a);
  const [zs, setZs] = useState<[number, number][]>(init.zeros);
  const [op, setOp] = useState<Op>(init.op);
  const f = (x: number) => zs.reduce((p, [r, mm]) => p * (x - r) ** mm, a);
  const crit = [...new Set(zs.map(([r]) => r))].sort((p, q) => p - q);
  const pts = [-Infinity, ...crit, Infinity];
  const tests = pts.slice(0, -1).map((lo, i) => { const hi = pts[i + 1]; return lo === -Infinity ? hi - 1 : hi === Infinity ? lo + 1 : (lo + hi) / 2; });
  const inside = tests.map((t) => holds(f(t), op));
  const atCrit = crit.map(() => op === "≥" || op === "≤");
  const tex = `${a === 1 ? "" : a === -1 ? "-" : r2(a)}${zs.map(([r, mm]) => `${fac(r)}${mm > 1 ? `^{${mm}}` : ""}`).join("")}`;
  const sg = (v: number) => (v > 0 ? "+" : v < 0 ? "−" : "0");
  const ys = tests.map(f).concat(Array.from({ length: 60 }, (_, i) => f(-6 + i / 5)));
  const hi = Math.min(60, Math.max(8, ...ys.map(Math.abs).filter(Number.isFinite)));
  const view: View = { xmin: -6, xmax: 6, ymin: -hi, ymax: hi };
  const setZ = (i: number, j: 0 | 1, v: number) => setZs((z) => z.map((p, k) => (k === i ? (j === 0 ? [v, p[1]] : [p[0], v]) : p)) as [number, number][]);
  const head = ["", ...pts.slice(0, -1).map((lo, i) => `${lo === -Infinity ? "x<" + r2(pts[i + 1]) : pts[i + 1] === Infinity ? "x>" + r2(lo) : `${r2(lo)}<x<${r2(pts[i + 1])}`}`)];
  return (
    <WidgetCard title="Sign charts for polynomial inequalities" subtitle="the sign of each factor on each interval gives the sign of the product">
      <Row gap={8}>
        <Slider label="a" value={a} min={-2} max={2} step={0.5} onChange={(v) => setA(v === 0 ? 0.5 : v)} color={C.red} />
        {zs.map(([r, mm], i) => (
          <div key={i} style={{ display: "flex", gap: 6 }}>
            <Slider label={`zero ${i + 1}`} value={r} min={-5} max={5} onChange={(v) => setZ(i, 0, v)} color={C.blue} />
            <Slider label="order" value={mm} min={1} max={3} onChange={(v) => setZ(i, 1, v)} color={C.violet} />
          </div>
        ))}
      </Row>
      <Segmented options={OPS.map((o) => ({ value: o, label: `f(x) ${o} 0` }))} value={op} onChange={setOp} />
      <div style={{ textAlign: "center", fontSize: 18, margin: "6px 0" }}><MathText html={`\\(${tex}\\ ${opTex(op)}\\ 0\\)`} /></div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", margin: "0 auto", fontSize: 14 }}>
          <thead><tr>{head.map((h, i) => <th key={i} style={cell}><MathText html={i ? `\\(${h}\\)` : ""} /></th>)}</tr></thead>
          <tbody>
            {a !== 1 && <tr><th style={cell}><MathText html={`\\(${r2(a)}\\)`} /></th>{tests.map((_, i) => <td key={i} style={cell}>{sg(a)}</td>)}</tr>}
            {zs.map(([r, mm], k) => <tr key={k}><th style={cell}><MathText html={`\\(${fac(r)}${mm > 1 ? `^{${mm}}` : ""}\\)`} /></th>{tests.map((t, i) => <td key={i} style={cell}>{sg((t - r) ** mm)}</td>)}</tr>)}
            <tr><th style={{ ...cell, color: C.violet }}>f(x)</th>{tests.map((t, i) => <td key={i} style={{ ...cell, fontWeight: 700, color: inside[i] ? "#166534" : C.ink, background: inside[i] ? "#dcfce7" : "transparent" }}>{sg(f(t))}</td>)}</tr>
          </tbody>
        </table>
      </div>
      <Curves view={view} label="Sign chart graph" step={1} stepY={hi > 30 ? 10 : hi > 12 ? 4 : 2} fs={[{ f, color: C.violet }]}>
        {(X, Y) => <>{inside.map((ins, i) => (ins ? band(X, Y, view, pts[i], pts[i + 1], C.green, "b" + i) : null))}{crit.map((c, i) => dot(X, Y, c, 0, C.red, r2(c), i))}</>}
      </Curves>
      <Readout tone="green">
        <MathText block html={`Solution: \\(x\\in ${intervalTex(crit, inside, atCrit)}\\)${op === "≥" || op === "≤" ? " (the zeros are included)" : " (the zeros are excluded)"}.`} />
        <MathText block html={`The sign changes at odd-order zeros and stays the same at even-order zeros.`} />
      </Readout>
    </WidgetCard>
  );
}
