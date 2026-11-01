"use client";

// Linear Algebra I, chapter 6 (inverses and determinants) explorers: a 2 × 2 inverse with ad − bc, Gauss–Jordan on
// [A | I] one operation at a time, an elementary matrix acting on a matrix, the determinant as a signed area, and
// Cramer's rule for a 2 × 2 system. All arithmetic is exact (fractions).

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard, gcd } from "./kit";
import { Plane, type View } from "./Systems";

/* ---------------------------------------------------------------- exact fractions */

type Q = { n: number; d: number };
const q = (n: number, d = 1): Q => { if (d < 0) { n = -n; d = -d; } const g = gcd(n, d) || 1; return { n: n / g, d: d / g }; };
const add = (a: Q, b: Q) => q(a.n * b.d + b.n * a.d, a.d * b.d);
const sub = (a: Q, b: Q) => q(a.n * b.d - b.n * a.d, a.d * b.d);
const mul = (a: Q, b: Q) => q(a.n * b.n, a.d * b.d);
const div = (a: Q, b: Q) => q(a.n * b.d, a.d * b.n);
const isZ = (a: Q) => a.n === 0;
const tex = (a: Q) => (a.d === 1 ? String(a.n) : `${a.n < 0 ? "-" : ""}\\tfrac{${Math.abs(a.n)}}{${a.d}}`);
// fraction entries get taller rows so they do not crowd each other
const mt = (m: Q[][], bar = 0) => (m.some((r) => r.some((x) => x.d !== 1)) ? `{\\def\\arraystretch{1.35}${mt0(m, bar)}}` : mt0(m, bar));
const mt0 = (m: Q[][], bar = 0) => `\\left[\\begin{array}{${bar ? `${"c".repeat(bar)}|${"c".repeat(m[0].length - bar)}` : "c".repeat(m[0].length)}}${m.map((r) => r.map(tex).join(" & ")).join(" \\\\ ")}\\end{array}\\right]`;
const mn = (m: number[][]) => m.map((r) => r.map((x) => q(x)));
const mmul = (A: Q[][], B: Q[][]) => A.map((r) => B[0].map((_, j) => r.reduce((s, x, k) => add(s, mul(x, B[k][j])), q(0))));
const BOX = { display: "flex", gap: 18, justifyContent: "center", flexWrap: "wrap" as const, fontSize: 18, margin: "12px 0", overflowX: "auto" as const, overflowY: "hidden" as const, padding: "4px 0" };

type P2 = [number, number];
const arrow = (from: P2, to: P2, color: string, X: (v: number) => number, Y: (v: number) => number, w = 3, dash = false) =>
  <g><line x1={X(from[0])} y1={Y(from[1])} x2={X(to[0])} y2={Y(to[1])} stroke={color} strokeWidth={w} strokeDasharray={dash ? "6 4" : undefined} /><circle cx={X(to[0])} cy={Y(to[1])} r={5} fill={color} /></g>;

/* ---------------------------------------------------------------- 6.1 a 2 × 2 inverse */

const det2 = (m: number[][]) => m[0][0] * m[1][1] - m[0][1] * m[1][0];
/** the 2 × 2 minor of a 3 × 3 matrix with row i and column j deleted */
const minor = (m: number[][], i: number, j: number) => m.filter((_, r) => r !== i).map((row) => row.filter((_, c) => c !== j));
const bars = (m: number[][]) => `\\left|\\begin{array}{cc}${m.map((r) => r.join(" & ")).join(" \\\\ ")}\\end{array}\\right|`;
const paren = (x: number) => (x < 0 ? `(${x})` : String(x));

export function Inverse2Lab({ init = { a: 3, b: 1, c: 5, d: 2 } }: { init?: { a: number; b: number; c: number; d: number; size?: string } }) {
  const [size, setSize] = useState(init.size === "3" ? "3" : "2");
  const [a, setA] = useState(init.a), [b, setB] = useState(init.b), [c, setC] = useState(init.c), [d, setD] = useState(init.d);
  const [m3, setM3] = useState<number[][]>([[1, 2, 0], [0, 1, 1], [1, 0, 2]]);
  const set3 = (i: number, j: number) => (v: number) => setM3((m) => m.map((r, ri) => r.map((x, ci) => (ri === i && ci === j ? v : x))));
  if (size === "3") {
    // A⁻¹ = (1/det A) adj A, with every cofactor C_ij = (−1)^(i+j) det(minor) shown
    const cof = m3.map((r, i) => r.map((_, j) => ((i + j) % 2 ? -1 : 1) * det2(minor(m3, i, j))));
    const det = m3[0].reduce((s, x, j) => s + x * cof[0][j], 0);
    const A = mn(m3), adj = cof[0].map((_, i) => cof.map((r) => r[i]));
    const inv = det ? adj.map((r) => r.map((x) => q(x, det))) : null;
    return (
      <WidgetCard title="The inverse of a matrix" subtitle="3 × 3: A⁻¹ = (1/det A) adj A, which exists exactly when det A ≠ 0">
        <Segmented label="size" options={[{ value: "2", label: "2 × 2" }, { value: "3", label: "3 × 3" }]} value={size} onChange={setSize} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "2px 14px" }}>
          {m3.map((r, i) => r.map((x, j) => <Slider key={`${i}${j}`} label={`a${i + 1}${j + 1}`} value={x} min={-5} max={5} onChange={set3(i, j)} color={[C.blue, C.red, C.green][j]} />))}
        </div>
        <div style={BOX}><MathText html={`\\(A=${mt(A)}\\)`} />{inv && <MathText html={`\\(A^{-1}=${det === 1 ? "" : det === -1 ? "-" : `\\frac{1}{${det}}`}${mt(mn(adj))}${Math.abs(det) === 1 ? "" : `=${mt(inv)}`}\\)`} />}</div>
        {inv && <div style={BOX}><MathText html={`\\(AA^{-1}=${mt(mmul(A, inv))}=I\\)`} /></div>}
        <Readout tone={det ? "green" : "amber"}>
          <MathText block html={`\\(\\det A=${m3[0].map((x, j) => `${j ? (j === 1 ? "-" : "+") : ""}${paren(x)}${bars(minor(m3, 0, j))}`).join("")}=${det}\\).`} />
          <MathText block html={det ? `Nonzero. The cofactors \\(C_{ij}=(-1)^{i+j}\\det A_{ij}\\) form \\(C=${mt(mn(cof))}\\); its transpose is \\(\\operatorname{adj}A\\), and dividing by \\(\\det A=${det}\\) gives \\(A^{-1}\\).` : "Zero: the columns are dependent, \\(A\\vec x=\\vec 0\\) has nonzero solutions, and \\(A\\) has no inverse."} />
        </Readout>
      </WidgetCard>
    );
  }
  const det = a * d - b * c;
  const A = mn([[a, b], [c, d]]);
  const inv = det ? [[q(d, det), q(-b, det)], [q(-c, det), q(a, det)]] : null;
  return (
    <WidgetCard title="The inverse of a matrix" subtitle="2 × 2: A⁻¹ = (1/(ad − bc)) [d −b; −c a] exists exactly when ad − bc ≠ 0">
      <Segmented label="size" options={[{ value: "2", label: "2 × 2" }, { value: "3", label: "3 × 3" }]} value={size} onChange={setSize} />
      <Row gap={10}><Slider label="a" value={a} min={-5} max={5} onChange={setA} color={C.blue} /><Slider label="b" value={b} min={-5} max={5} onChange={setB} color={C.red} /><Slider label="c" value={c} min={-5} max={5} onChange={setC} color={C.blue} /><Slider label="d" value={d} min={-5} max={5} onChange={setD} color={C.red} /></Row>
      <div style={BOX}><MathText html={inv ? `\\(A=${mt(A)},\\quad A^{-1}=${mt(inv)},\\quad AA^{-1}=${mt(mmul(A, inv))}\\)` : `\\(A=${mt(A)}\\)`} /></div>
      <Readout tone={det ? "green" : "amber"}>
        <MathText block html={`\\(ad-bc=(${a})(${d})-(${b})(${c})=${det}\\).`} />
        <MathText block html={det ? "Nonzero: swap the diagonal, negate the off-diagonal entries, divide by \\(ad-bc\\). The product \\(AA^{-1}\\) is \\(I\\)." : "Zero: the columns are parallel (or one is zero), \\(A\\vec x=\\vec 0\\) has nonzero solutions, and \\(A\\) has no inverse."} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 6.2 Gauss–Jordan on [A | I] */

type Op = { label: string; apply: (m: Q[][]) => Q[][] };
function gaussJordanOps(A: Q[][]): { ops: Op[] } {
  const n = A.length, ops: Op[] = [];
  let m = A.map((r, i) => [...r, ...A.map((_, j) => q(i === j ? 1 : 0))]);
  const push = (label: string, f: (m: Q[][]) => Q[][]) => { ops.push({ label, apply: f }); m = f(m); };
  for (let c = 0; c < n; c++) {
    const p = m.findIndex((row, i) => i >= c && !isZ(row[c]));
    if (p < 0) break;
    if (p !== c) { const pc = p, cc = c; push(`R_{${c + 1}}\\leftrightarrow R_{${p + 1}}`, (x) => x.map((r, i) => (i === cc ? x[pc] : i === pc ? x[cc] : r))); }
    const k = m[c][c];
    if (!(k.n === 1 && k.d === 1)) { const inv = div(q(1), k), cc = c; push(`R_{${c + 1}}\\to ${tex(inv)}R_{${c + 1}}`, (x) => x.map((r, i) => (i === cc ? r.map((v) => mul(v, inv)) : r))); }
    for (let i = 0; i < n; i++) {
      if (i === c || isZ(m[i][c])) continue;
      const f = m[i][c], ii = i, cc = c;
      push(`R_{${i + 1}}\\to R_{${i + 1}}${f.n > 0 ? "-" : "+"}${f.n === f.d || -f.n === f.d ? "" : tex(q(Math.abs(f.n), f.d))}R_{${c + 1}}`, (x) => x.map((r, j) => (j === ii ? r.map((v, t) => sub(v, mul(f, x[cc][t]))) : r)));
    }
  }
  return { ops };
}
const ISETS: Record<string, { label: string; A: number[][] }> = {
  a: { label: "2 × 2", A: [[2, 5], [1, 3]] },
  b: { label: "3 × 3", A: [[1, 1, 0], [0, 1, 2], [1, 2, 3]] },
  c: { label: "needs a swap", A: [[0, 1, 1], [1, 0, 1], [1, 1, 0]] },
  s: { label: "singular", A: [[1, 2, 1], [2, 1, 0], [3, 3, 1]] },
};
export function InverseStepsLab({ init = { set: "a" } }: { init?: { set: string } }) {
  const [set, setSet] = useState(init.set in ISETS ? init.set : "a");
  const [k, setK] = useState(0);
  const A = mn(ISETS[set].A), n = A.length;
  const { ops } = gaussJordanOps(A);
  const kk = Math.min(k, ops.length);
  let m = A.map((r, i) => [...r, ...A.map((_, j) => q(i === j ? 1 : 0))]);
  for (let t = 0; t < kk; t++) m = ops[t].apply(m);
  const left = m.map((r) => r.slice(0, n)), done = kk === ops.length;
  const isI = left.every((r, i) => r.every((v, j) => v.n === (i === j ? 1 : 0) && v.d === 1));
  const zeroRow = left.some((r) => r.every(isZ));
  return (
    <WidgetCard title="Row reducing [A | I]" subtitle="The operations that turn the left block into I turn the right block into A⁻¹">
      <Segmented label="A" options={Object.entries(ISETS).map(([value, s]) => ({ value, label: s.label }))} value={set} onChange={(s) => { setSet(s); setK(0); }} />
      <Slider label="operations applied" value={kk} min={0} max={ops.length} onChange={setK} color={C.violet} />
      <div style={BOX}><MathText html={`\\(${mt(m, n)}\\)`} /></div>
      <Readout tone={done && isI ? "green" : done && zeroRow ? "amber" : "blue"}>
        <MathText block html={kk ? `Last operation: \\(${ops[kk - 1].label}\\) (applied to the whole row).` : "Start: \\([\\,A\\mid I\\,]\\). Move the slider to apply one operation at a time."} />
        <MathText block html={done ? (isI ? `The left block is \\(I\\): the right block is \\(A^{-1}=${mt(m.map((r) => r.slice(n)))}\\).` : "The left block has a zero row: \\(A\\) is singular and has no inverse.") : `${ops.length - kk} operation${ops.length - kk === 1 ? "" : "s"} to go.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 6.3 elementary matrices */

const EA: number[][] = [[1, 2, 1], [2, 5, 3], [0, 1, 4]];
export function ElementaryLab({ init = { kind: "add", i: 2, j: 1, c: -2 } }: { init?: { kind: string; i: number; j: number; c: number } }) {
  const [kind, setKind] = useState(init.kind);
  const [i, setI] = useState(init.i), [j, setJ] = useState(init.j), [c, setC] = useState(init.c);
  const I3 = (): Q[][] => [0, 1, 2].map((r) => [0, 1, 2].map((s) => q(r === s ? 1 : 0)));
  const E = I3(), Einv = I3(), r = i - 1, s = j - 1;
  let label = "", invLabel = "", ok = true;
  if (kind === "swap") { ok = r !== s; [E[r], E[s]] = [E[s], E[r]]; [Einv[r], Einv[s]] = [Einv[s], Einv[r]]; label = `R_${i}\\leftrightarrow R_${j}`; invLabel = label; }
  else if (kind === "scale") { ok = c !== 0; E[r][r] = q(c); Einv[r][r] = ok ? q(1, c) : q(0); label = `R_${i}\\to ${c}R_${i}`; invLabel = `R_${i}\\to ${tex(q(1, c || 1))}R_${i}`; }
  else { ok = r !== s; E[r][s] = q(c); Einv[r][s] = q(-c); label = `R_${i}\\to R_${i}${c < 0 ? "-" : "+"}${Math.abs(c)}R_${j}`; invLabel = `R_${i}\\to R_${i}${c < 0 ? "+" : "-"}${Math.abs(c)}R_${j}`; }
  const A = mn(EA);
  return (
    <WidgetCard title="Elementary matrices" subtitle="E is I after one row operation; EA performs that operation on A">
      <Segmented label="operation" options={[{ value: "add", label: "add c·Rⱼ to Rᵢ" }, { value: "scale", label: "scale Rᵢ by c" }, { value: "swap", label: "swap Rᵢ, Rⱼ" }]} value={kind} onChange={setKind} />
      <Row gap={10}><Slider label="i" value={i} min={1} max={3} onChange={setI} color={C.blue} />{kind !== "scale" ? <Slider label="j" value={j} min={1} max={3} onChange={setJ} color={C.red} /> : null}{kind !== "swap" ? <Slider label="c" value={c} min={-4} max={4} onChange={setC} color={C.green} /> : null}</Row>
      {ok ? <>
        <div style={BOX}><MathText html={`\\(E=${mt(E)},\\qquad EA=${mt(E)}${mt(A)}=${mt(mmul(E, A))}\\)`} /></div>
        <Readout tone="green">
          <MathText block html={`\\(E\\) performs \\(${label}\\): compare \\(EA\\) with \\(A\\) — only row ${i}${kind === "swap" ? ` and row ${j}` : ""} changed.`} />
          <MathText block html={`\\(E^{-1}=${mt(Einv)}\\) performs the reverse, \\(${invLabel}\\), and \\(E^{-1}E=${mt(mmul(Einv, E))}\\).`} />
        </Readout>
      </> : <Readout tone="amber"><MathText block html={kind === "scale" ? "Scaling by 0 is not a row operation (it would destroy the row)." : "Choose two different rows."} /></Readout>}
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 6.5 / 6.6 determinant as signed area */

const V5: View = { xmin: -5, xmax: 6, ymin: -5, ymax: 6 };
export function DetAreaLab({ init = { a: 3, b: 1, c: 1, d: 2 } }: { init?: { a: number; b: number; c: number; d: number } }) {
  const [a, setA] = useState(init.a), [b, setB] = useState(init.b), [c, setC] = useState(init.c), [d, setD] = useState(init.d);
  const a1: P2 = [a, c], a2: P2 = [b, d], det = a * d - b * c;
  const fill = det > 0 ? "rgba(37,99,235,0.18)" : det < 0 ? "rgba(220,38,38,0.18)" : "none";
  return (
    <WidgetCard title="The determinant as a signed area" subtitle="det[a₁ a₂] = ad − bc: the area of the parallelogram, positive when a₁ → a₂ turns counterclockwise">
      <Row gap={10}><Slider label="a₁: a" value={a} min={-4} max={4} onChange={setA} color={C.blue} /><Slider label="c" value={c} min={-4} max={4} onChange={setC} color={C.blue} /><Slider label="a₂: b" value={b} min={-4} max={4} onChange={setB} color={C.red} /><Slider label="d" value={d} min={-4} max={4} onChange={setD} color={C.red} /></Row>
      <Row gap={8}>
        <button onClick={() => { setB(b + a); setD(d + c); }} style={{ padding: "4px 10px" }}>shear: a₂ ← a₂ + a₁</button>
        <button onClick={() => { setA(b); setC(d); setB(a); setD(c); }} style={{ padding: "4px 10px" }}>swap columns</button>
        <button onClick={() => { setA(2 * a); setC(2 * c); }} style={{ padding: "4px 10px" }}>double a₁</button>
      </Row>
      <Plane view={V5} label="determinant as signed area" step={1}>
        {(X, Y) => <>
          <polygon points={[[0, 0], a1, [a + b, c + d], a2].map(([x, y]) => `${X(x)},${Y(y)}`).join(" ")} fill={fill} stroke="#64748b" strokeDasharray="5 4" />
          {arrow([0, 0], a1, C.blue, X, Y, 4)}{arrow([0, 0], a2, C.red, X, Y, 4)}
        </>}
      </Plane>
      <Readout tone={det ? (det > 0 ? "blue" : "red") : "amber"}>
        <MathText block html={`\\(\\det${mt(mn([[a, b], [c, d]]))}=(${a})(${d})-(${b})(${c})=${det}\\): area \\(${Math.abs(det)}\\)${det ? (det > 0 ? ", counterclockwise." : ", clockwise (negative sign).") : " — the columns are parallel and the matrix is singular."}`} />
        <MathText block html="A shear (adding one column to another) keeps the area; a swap flips the sign; doubling a column doubles the determinant." />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 6.7 Cramer's rule */

const V7: View = { xmin: -6, xmax: 6, ymin: -5, ymax: 5 };
export function CramerLab({ init = { a: 3, b: 2, c: 1, d: -4, e: 7, f: 0 } }: { init?: { a: number; b: number; c: number; d: number; e: number; f: number } }) {
  const [a, setA] = useState(init.a), [b, setB] = useState(init.b), [c, setC] = useState(init.c), [d, setD] = useState(init.d), [e, setE] = useState(init.e), [f, setF] = useState(init.f);
  const D = a * d - b * c, D1 = e * d - b * f, D2 = a * f - e * c;
  const line = (p: number, r: number, s: number, X: (v: number) => number, Y: (v: number) => number, color: string) => {
    // p x + r y = s
    const pts: P2[] = r !== 0 ? [[-8, (s + 8 * p) / r], [8, (s - 8 * p) / r]] : [[s / p, -8], [s / p, 8]];
    return p === 0 && r === 0 ? null : <line x1={X(pts[0][0])} y1={Y(pts[0][1])} x2={X(pts[1][0])} y2={Y(pts[1][1])} stroke={color} strokeWidth={2.5} />;
  };
  const x1 = D ? q(D1, D) : null, x2 = D ? q(D2, D) : null;
  return (
    <WidgetCard title="Cramer's rule" subtitle="xᵢ = det Aᵢ(b) / det A: replace column i of A by b">
      <Row gap={10}><Slider label="a" value={a} min={-5} max={5} onChange={setA} color={C.blue} /><Slider label="b" value={b} min={-5} max={5} onChange={setB} color={C.blue} /><Slider label="e (= b₁)" value={e} min={-8} max={8} onChange={setE} color={C.green} /></Row>
      <Row gap={10}><Slider label="c" value={c} min={-5} max={5} onChange={setC} color={C.red} /><Slider label="d" value={d} min={-5} max={5} onChange={setD} color={C.red} /><Slider label="f (= b₂)" value={f} min={-8} max={8} onChange={setF} color={C.green} /></Row>
      <div style={BOX}><MathText html={`\\(\\det${mt(mn([[a, b], [c, d]]))}=${D},\\quad \\det${mt(mn([[e, b], [f, d]]))}=${D1},\\quad \\det${mt(mn([[a, e], [c, f]]))}=${D2}\\)`} /></div>
      <Plane view={V7} label="the two lines of the system" step={1}>
        {(X, Y) => <>{line(a, b, e, X, Y, C.blue)}{line(c, d, f, X, Y, C.red)}{x1 && x2 ? <circle cx={X(x1.n / x1.d)} cy={Y(x2.n / x2.d)} r={7} fill={C.green} /> : null}</>}
      </Plane>
      <Readout tone={D ? "green" : "amber"}>
        <MathText block html={D && x1 && x2 ? `\\(x_1=\\dfrac{${D1}}{${D}}=${tex(x1)},\\qquad x_2=\\dfrac{${D2}}{${D}}=${tex(x2)}\\): the green point where the lines cross.` : "\\(\\det A=0\\): the lines are parallel (or the same), Cramer's rule does not apply, and the system has no solution or infinitely many."} />
      </Readout>
    </WidgetCard>
  );
}
