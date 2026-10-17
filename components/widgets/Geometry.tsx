"use client";

// MPM2D chapter 2 (analytic geometry) explorers: midpoint and missing endpoint, length of a segment,
// the circle x² + y² = r², medians / right bisectors / altitudes of a triangle, proving properties of
// triangles and quadrilaterals, and the shortest distance from a point to a line.

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard, gcd } from "./kit";
import { Plane, fr, r2, stdSeg, stdTex, type View } from "./Systems";

type P = [number, number];
const V12: View = { xmin: -12, xmax: 12, ymin: -12, ymax: 12 };
const V10: View = { xmin: -10, xmax: 10, ymin: -10, ymax: 10 };

/** √n for a whole number n, simplified: a√b */
export function surd(n: number): string {
  if (n === 0) return "0";
  let a = 1, b = n;
  for (let k = Math.floor(Math.sqrt(n)); k > 1; k--) if (b % (k * k) === 0) { a *= k; b /= k * k; }
  return b === 1 ? String(a) : `${a === 1 ? "" : a}\\sqrt{${b}}`;
}
/** coordinate (may be a half) as LaTeX */
const cx = (v: number) => (Number.isInteger(v) ? String(v) : fr(Math.round(v * 2), 2));
const pt = (p: P) => `(${cx(p[0])},${cx(p[1])})`;
const neg = (v: number) => (v < 0 ? `(${cx(v)})` : cx(v));

function PointSliders({ name, p, set, color, min = -8, max = 8 }: { name: string; p: P; set: (p: P) => void; color: string; min?: number; max?: number }) {
  return (
    <Row gap={10}>
      <Slider label={`${name}: x`} value={p[0]} min={min} max={max} onChange={(v) => set([v, p[1]])} color={color} />
      <Slider label={`${name}: y`} value={p[1]} min={min} max={max} onChange={(v) => set([p[0], v])} color={color} />
    </Row>
  );
}
function Dot({ X, Y, p, color, label }: { X: (x: number) => number; Y: (y: number) => number; p: P; color: string; label?: string }) {
  return (
    <g>
      <circle cx={X(p[0])} cy={Y(p[1])} r={6} fill={color} stroke="#fff" strokeWidth={2} />
      {label && <text x={X(p[0]) + 8} y={Y(p[1]) - 8} fontSize={13} fontWeight={700} fill={color} stroke="#fff" strokeWidth={3} paintOrder="stroke">{label}</text>}
    </g>
  );
}

/* ---------------------------------------------------------------- 2.1 midpoint */

export function MidpointLab({ init = [-6, -2, 4, 6] }: { init?: [number, number, number, number] }) {
  const [mode, setMode] = useState<"mid" | "end">("mid");
  const [A, setA] = useState<P>([init[0], init[1]]);
  const [B, setB] = useState<P>([init[2], init[3]]);
  const [M2, setM2] = useState<P>([1, 2]);
  const M: P = mode === "mid" ? [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2] : M2;
  const E: P = mode === "mid" ? B : [2 * M2[0] - A[0], 2 * M2[1] - A[1]];
  const off = Math.abs(E[0]) > 12 || Math.abs(E[1]) > 12;
  return (
    <WidgetCard title="Midpoint of a segment" subtitle="average the x-coordinates, average the y-coordinates">
      <Segmented options={[{ value: "mid", label: "find the midpoint" }, { value: "end", label: "find a missing endpoint" }]} value={mode} onChange={setMode} />
      <PointSliders name="A" p={A} set={setA} color={C.blue} />
      {mode === "mid" ? <PointSliders name="B" p={B} set={setB} color={C.red} /> : <PointSliders name="M" p={M2} set={setM2} color={C.green} />}
      <Plane view={V12} label="Midpoint">
        {(X, Y) => (
          <>
            <line x1={X(A[0])} y1={Y(A[1])} x2={X(E[0])} y2={Y(E[1])} stroke={C.violet} strokeWidth={3} />
            <line x1={X(A[0])} y1={Y(A[1])} x2={X(M[0])} y2={Y(A[1])} stroke={C.blue} strokeDasharray="6 4" strokeWidth={2} />
            <line x1={X(M[0])} y1={Y(A[1])} x2={X(M[0])} y2={Y(M[1])} stroke={C.red} strokeDasharray="6 4" strokeWidth={2} />
            <Dot X={X} Y={Y} p={A} color={C.blue} label="A" />
            <Dot X={X} Y={Y} p={E} color={C.red} label="B" />
            <Dot X={X} Y={Y} p={M} color={C.green} label="M" />
          </>
        )}
      </Plane>
      <Readout tone="green">
        {mode === "mid" ? (
          <MathText html={`\\(M=\\left(\\dfrac{${A[0]}+${neg(B[0])}}{2},\\ \\dfrac{${A[1]}+${neg(B[1])}}{2}\\right)=${pt(M)}\\). The dashed steps show M is halfway across and halfway up: from A, go \\(${cx(M[0] - A[0])}\\) across and \\(${cx(M[1] - A[1])}\\) up, then the same again to reach B.`} />
        ) : (
          <MathText html={`M is the average, so \\(x_B=2x_M-x_A=2(${M2[0]})-${neg(A[0])}=${E[0]}\\) and \\(y_B=2y_M-y_A=2(${M2[1]})-${neg(A[1])}=${E[1]}\\). So \\(B=${pt(E)}\\): the step from A to M, repeated.${off ? " (B is off this grid.)" : ""}`} />
        )}
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 2.2 length */

export function DistanceLab({ init = [-5, -3, 3, 3] }: { init?: [number, number, number, number] }) {
  const [A, setA] = useState<P>([init[0], init[1]]);
  const [B, setB] = useState<P>([init[2], init[3]]);
  const run = B[0] - A[0], rise = B[1] - A[1], d2 = run * run + rise * rise;
  return (
    <WidgetCard title="Length of a segment" subtitle="the Pythagorean theorem on the grid: d² = (Δx)² + (Δy)²">
      <PointSliders name="A" p={A} set={setA} color={C.blue} />
      <PointSliders name="B" p={B} set={setB} color={C.red} />
      <Plane view={V10} label="Length of a segment">
        {(X, Y) => (
          <>
            <line x1={X(A[0])} y1={Y(A[1])} x2={X(B[0])} y2={Y(A[1])} stroke={C.blue} strokeWidth={2.5} strokeDasharray="7 4" />
            <line x1={X(B[0])} y1={Y(A[1])} x2={X(B[0])} y2={Y(B[1])} stroke={C.red} strokeWidth={2.5} strokeDasharray="7 4" />
            <line x1={X(A[0])} y1={Y(A[1])} x2={X(B[0])} y2={Y(B[1])} stroke={C.violet} strokeWidth={3.5} />
            {run !== 0 && <text x={(X(A[0]) + X(B[0])) / 2} y={Y(A[1]) + (rise >= 0 ? 16 : -8)} fontSize={13} fontWeight={700} textAnchor="middle" fill={C.blue}>Δx = {run}</text>}
            {rise !== 0 && <text x={X(B[0]) + 6} y={(Y(A[1]) + Y(B[1])) / 2} fontSize={13} fontWeight={700} fill={C.red}>Δy = {rise}</text>}
            <Dot X={X} Y={Y} p={A} color={C.blue} label="A" />
            <Dot X={X} Y={Y} p={B} color={C.red} label="B" />
          </>
        )}
      </Plane>
      <Readout tone="green">
        <MathText html={d2 === 0 ? "A and B are the same point: the length is 0." : `\\(AB=\\sqrt{(${B[0]}-${neg(A[0])})^2+(${B[1]}-${neg(A[1])})^2}=\\sqrt{${neg(run)}^2+${neg(rise)}^2}=\\sqrt{${d2}}${surd(d2) === `\\sqrt{${d2}}` ? "" : `=${surd(d2)}`}${Number.isInteger(Math.sqrt(d2)) ? "" : `\\approx${r2(Math.sqrt(d2))}`}\\). ${run === 0 || rise === 0 ? "The segment is " + (run === 0 ? "vertical" : "horizontal") + ", so its length is just the difference of the coordinates." : "The dashed legs are the run and rise; the segment is the hypotenuse."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 2.3 circle */

export function CircleLab({ init = 25 }: { init?: number }) {
  const [rr, setRr] = useState(init);
  const [Q, setQ] = useState<P>([3, 4]);
  const r = Math.sqrt(rr), s = Q[0] * Q[0] + Q[1] * Q[1];
  const where = s === rr ? "on" : s < rr ? "inside" : "outside";
  return (
    <WidgetCard title="The circle x² + y² = r²" subtitle="every point on it is exactly r from the origin">
      <Slider label="r²" value={rr} min={1} max={100} onChange={setRr} color={C.violet} />
      <PointSliders name="P" p={Q} set={setQ} color={C.red} min={-10} max={10} />
      <Plane view={V10} label="Circle at the origin">
        {(X, Y) => (
          <>
            <circle cx={X(0)} cy={Y(0)} r={X(r) - X(0)} fill={C.violetSoft} fillOpacity={0.5} stroke={C.violet} strokeWidth={3} />
            <line x1={X(0)} y1={Y(0)} x2={X(Q[0])} y2={Y(Q[1])} stroke={C.red} strokeDasharray="6 4" strokeWidth={2} />
            <line x1={X(0)} y1={Y(0)} x2={X(r)} y2={Y(0)} stroke={C.violet} strokeWidth={2} />
            <text x={(X(0) + X(r)) / 2} y={Y(0) - 6} fontSize={13} fontWeight={700} textAnchor="middle" fill={C.violet}>r</text>
            <Dot X={X} Y={Y} p={Q} color={C.red} label="P" />
          </>
        )}
      </Plane>
      <Readout tone={where === "on" ? "green" : where === "inside" ? "blue" : "amber"}>
        <MathText html={`Equation: \\(x^2+y^2=${rr}\\), radius \\(r=${surd(rr)}${Number.isInteger(r) ? "" : `\\approx${r2(r)}`}\\). For P: \\(${neg(Q[0])}^2+${neg(Q[1])}^2=${s}\\) ${where === "on" ? "=" : where === "inside" ? "&lt;" : "&gt;"} \\(${rr}\\), so P is <strong>${where}</strong> the circle — its distance from the origin is \\(${surd(s)}\\)${where === "on" ? ", exactly the radius" : ""}.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 2.4 medians, right bisectors, altitudes */

type L3 = [number, number, number];
/** integer standard form Ax + By = C through point p (halves allowed) with direction d */
function lineThrough(p: P, d: P): L3 {
  let A = d[1], B = -d[0], Cc = A * p[0] + B * p[1];
  if (![A, B, Cc].every(Number.isInteger)) { A *= 2; B *= 2; Cc *= 2; }
  const g = gcd(gcd(A, B), Cc) || 1; A /= g; B /= g; Cc /= g;
  if (A < 0 || (A === 0 && B < 0)) { A = -A; B = -B; Cc = -Cc; }
  return [A, B, Cc];
}
function meet(l: L3, m: L3): [string, string, P] {
  const det = l[0] * m[1] - m[0] * l[1];
  const nx = l[2] * m[1] - m[2] * l[1], ny = l[0] * m[2] - m[0] * l[2];
  return [fr(nx, det), fr(ny, det), [nx / det, ny / det]];
}
const TRIS: { label: string; v: [P, P, P] }[] = [
  { label: "acute", v: [[-6, -4], [6, -2], [0, 6]] },
  { label: "right", v: [[-4, -4], [6, -4], [-4, 4]] },
  { label: "obtuse", v: [[-8, -2], [4, -2], [-6, 4]] },
];
const KIND = { median: { name: "median", point: "centroid", color: C.blue }, bisector: { name: "right bisector", point: "circumcentre", color: C.green }, altitude: { name: "altitude", point: "orthocentre", color: C.red } } as const;
export function TriangleLines({ init = "median" }: { init?: keyof typeof KIND }) {
  const [t, setT] = useState(0);
  const [kind, setKind] = useState<keyof typeof KIND>(init);
  const [vi, setVi] = useState(0);
  const [all, setAll] = useState(false);
  const V = TRIS[t].v, names = ["A", "B", "C"];
  const lineFor = (i: number): { l: L3; foot: P } => {
    const p = V[i], q = V[(i + 1) % 3], r = V[(i + 2) % 3];
    const M: P = [(q[0] + r[0]) / 2, (q[1] + r[1]) / 2], side: P = [r[0] - q[0], r[1] - q[1]], perp: P = [-side[1], side[0]];
    if (kind === "median") return { l: lineThrough(p, [M[0] - p[0], M[1] - p[1]]), foot: M };
    if (kind === "bisector") return { l: lineThrough(M, perp), foot: M };
    const l = lineThrough(p, perp), sideL = lineThrough(q, side);
    return { l, foot: meet(l, sideL)[2] };
  };
  const k = KIND[kind], cur = lineFor(vi);
  const opp = `${names[(vi + 1) % 3]}${names[(vi + 2) % 3]}`;
  const centre = meet(lineFor(0).l, lineFor(1).l);
  return (
    <WidgetCard title="Medians, right bisectors and altitudes" subtitle="midpoints and perpendicular slopes give each line's equation">
      <Segmented options={TRIS.map((x, i) => ({ value: i, label: x.label }))} value={t} onChange={setT} />
      <Segmented options={(Object.keys(KIND) as (keyof typeof KIND)[]).map((x) => ({ value: x, label: KIND[x].name }))} value={kind} onChange={setKind} />
      <Row>
        <Segmented label="side / vertex" options={[0, 1, 2].map((i) => ({ value: i, label: kind === "bisector" ? `side ${names[(i + 1) % 3]}${names[(i + 2) % 3]}` : `from ${names[i]}` }))} value={vi} onChange={setVi} />
        <label style={{ fontSize: 14, color: C.muted, display: "flex", gap: 6, alignItems: "center" }}><input type="checkbox" checked={all} onChange={(e) => setAll(e.target.checked)} /> show all three</label>
      </Row>
      <Plane view={V10} label="Triangle lines">
        {(X, Y) => (
          <>
            <polygon points={V.map((p) => `${X(p[0])},${Y(p[1])}`).join(" ")} fill={C.blueSoft} fillOpacity={0.35} stroke={C.ink} strokeWidth={2} />
            {(all ? [0, 1, 2] : [vi]).map((i) => { const { l, foot } = lineFor(i); return (
              <g key={i}>
                <line {...stdSeg(X, Y, l[0], l[1], l[2], V10)} stroke={k.color} strokeWidth={i === vi ? 3 : 2} opacity={i === vi ? 1 : 0.6} />
                <circle cx={X(foot[0])} cy={Y(foot[1])} r={4} fill={k.color} />
              </g>
            ); })}
            {V.map((p, i) => <Dot key={i} X={X} Y={Y} p={p} color={C.ink} label={names[i]} />)}
            {all && <Dot X={X} Y={Y} p={centre[2]} color={C.amber} />}
          </>
        )}
      </Plane>
      <Readout tone="green">
        <MathText block html={kind === "median"
          ? `Median from ${names[vi]}: midpoint of ${opp} is \\(${pt(cur.foot)}\\); the line through ${names[vi]} and that midpoint is \\(${stdTex(...cur.l)}\\).`
          : kind === "bisector"
            ? `Right bisector of ${opp}: through its midpoint \\(${pt(cur.foot)}\\), perpendicular to ${opp} (negative reciprocal slope): \\(${stdTex(...cur.l)}\\).`
            : `Altitude from ${names[vi]}: perpendicular to ${opp} (negative reciprocal slope), through ${names[vi]}: \\(${stdTex(...cur.l)}\\). It meets ${opp} (extended if needed) at a right angle.`} />
        {all && <MathText block html={`All three ${k.name}s meet at one point, the <strong>${k.point}</strong>: \\((${centre[0]},\\ ${centre[1]})\\) — found by solving any two of the equations as a system.`} />}
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 2.5 verifying properties */

const SHAPES: { label: string; v: P[] }[] = [
  { label: "parallelogram", v: [[-6, -3], [3, -3], [6, 3], [-3, 3]] },
  { label: "rhombus", v: [[-4, -2], [0, -5], [4, -2], [0, 1]] },
  { label: "rectangle", v: [[-5, 0], [-1, -4], [5, 2], [1, 6]] },
  { label: "kite", v: [[-4, 0], [0, -6], [4, 0], [0, 2]] },
  { label: "trapezoid", v: [[-6, -3], [6, -3], [3, 3], [-2, 3]] },
  { label: "triangle", v: [[-5, -2], [3, -4], [1, 4]] },
];
const slopeTex = (d: P) => (d[0] === 0 ? "\\text{undefined}" : fr(d[1], d[0]));
export function ShapeProver({ init = 0 }: { init?: number }) {
  const [s, setS] = useState(init);
  const [nudge, setNudge] = useState<P>([0, 0]);
  const base = SHAPES[s].v, n = base.length;
  const V = base.map((p, i) => (i === n - 1 ? [p[0] + nudge[0], p[1] + nudge[1]] : p)) as P[];
  const names = "ABCD".slice(0, n).split("");
  const sides = V.map((p, i) => { const q = V[(i + 1) % n]; const d: P = [q[0] - p[0], q[1] - p[1]]; return { name: names[i] + names[(i + 1) % n], d, len2: d[0] ** 2 + d[1] ** 2 }; });
  const par = (a: P, b: P) => a[0] * b[1] - a[1] * b[0] === 0, perp = (a: P, b: P) => a[0] * b[0] + a[1] * b[1] === 0;
  let verdict = "";
  if (n === 3) {
    const L = sides.map((x) => x.len2), eq = new Set(L).size;
    const right = sides.some((x, i) => perp(x.d, sides[(i + 1) % 3].d));
    verdict = `${eq === 1 ? "equilateral" : eq === 2 ? "isosceles" : "scalene"}${right ? ", right-angled" : ""} triangle`;
  } else {
    const p1 = par(sides[0].d, sides[2].d), p2 = par(sides[1].d, sides[3].d);
    const allEq = new Set(sides.map((x) => x.len2)).size === 1, rt = perp(sides[0].d, sides[1].d);
    const kite = !allEq && ((sides[0].len2 === sides[1].len2 && sides[2].len2 === sides[3].len2) || (sides[1].len2 === sides[2].len2 && sides[3].len2 === sides[0].len2));
    verdict = p1 && p2 ? (allEq && rt ? "square" : allEq ? "rhombus" : rt ? "rectangle" : "parallelogram") : p1 || p2 ? "trapezoid" : kite ? "kite" : "quadrilateral with no special properties";
  }
  const diag = n === 4 ? [[V[0], V[2]], [V[1], V[3]]] as [P, P][] : [];
  const mids = diag.map(([a, b]) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2] as P);
  return (
    <WidgetCard title="Prove what the shape is" subtitle="slopes for parallel and perpendicular, lengths for equal sides, midpoints for bisecting">
      <Segmented options={SHAPES.map((x, i) => ({ value: i, label: x.label }))} value={s} onChange={(i) => { setS(i); setNudge([0, 0]); }} />
      <Row gap={10}>
        <Slider label={`move ${names[n - 1]} across`} value={nudge[0]} min={-3} max={3} onChange={(v) => setNudge([v, nudge[1]])} color={C.amber} />
        <Slider label={`move ${names[n - 1]} up`} value={nudge[1]} min={-3} max={3} onChange={(v) => setNudge([nudge[0], v])} color={C.amber} />
      </Row>
      <Plane view={V10} label="Shape on a grid">
        {(X, Y) => (
          <>
            <polygon points={V.map((p) => `${X(p[0])},${Y(p[1])}`).join(" ")} fill={C.greenSoft} fillOpacity={0.5} stroke={C.green} strokeWidth={3} />
            {diag.map(([a, b], i) => <line key={i} x1={X(a[0])} y1={Y(a[1])} x2={X(b[0])} y2={Y(b[1])} stroke={C.faint} strokeDasharray="6 4" strokeWidth={2} />)}
            {mids.map((m, i) => <circle key={i} cx={X(m[0])} cy={Y(m[1])} r={4} fill={i ? C.red : C.blue} />)}
            {V.map((p, i) => <Dot key={i} X={X} Y={Y} p={p} color={i === n - 1 ? C.amber : C.ink} label={names[i]} />)}
          </>
        )}
      </Plane>
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 15, margin: "6px 0" }}>
          <thead><tr>{["side", "slope", "length"].map((h) => <th key={h} style={{ textAlign: "left", borderBottom: `2px solid ${C.line}`, padding: "4px 8px" }}>{h}</th>)}</tr></thead>
          <tbody>{sides.map((x) => (
            <tr key={x.name}><td style={{ padding: "4px 8px" }}>{x.name}</td><td style={{ padding: "4px 8px" }}><MathText html={`\\(${slopeTex(x.d)}\\)`} /></td><td style={{ padding: "4px 8px" }}><MathText html={`\\(\\sqrt{${x.len2}}${surd(x.len2) === `\\sqrt{${x.len2}}` ? "" : `=${surd(x.len2)}`}\\)`} /></td></tr>
          ))}</tbody>
        </table>
      </div>
      <Readout tone="green">
        <MathText block html={`Verdict: <strong>${verdict}</strong>.`} />
        {n === 4 && <MathText block html={`Diagonal midpoints: AC \\(${pt(mids[0])}\\), BD \\(${pt(mids[1])}\\) — ${mids[0][0] === mids[1][0] && mids[0][1] === mids[1][1] ? "the same point, so the diagonals bisect each other (true for every parallelogram)." : "different points, so the diagonals do not bisect each other."}`} />}
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 2.6 distance from a point to a line */

export function PointLineDistance({ init = [1, 2, 4, 6, 7] }: { init?: [number, number, number, number, number] }) {
  const [a, setA] = useState(init[0]), [b, setB] = useState(init[1]), [c, setC] = useState(init[2]);
  const [Q, setQ] = useState<P>([init[3], init[4]]);
  const S = a * a + b * b, k = a * Q[0] + b * Q[1] - c;
  const F: P = [Q[0] - (a * k) / S, Q[1] - (b * k) / S];
  const Ftex = `(${fr(Q[0] * S - a * k, S)},\\ ${fr(Q[1] * S - b * k, S)})`;
  const sg = b < 0 || (b === 0 && a > 0) ? -1 : 1, pA = sg * b, pB = -sg * a, perpC = sg * (b * Q[0] - a * Q[1]);
  const dExact = k === 0 ? "0" : Number.isInteger(Math.sqrt(S)) ? fr(Math.abs(k), Math.sqrt(S)) : (k * k) % S === 0 ? surd((k * k) / S) : `\\dfrac{${Math.abs(k)}}{${surd(S)}}`;
  return (
    <WidgetCard title="Shortest distance from a point to a line" subtitle="drop a perpendicular, find where it meets the line, measure">
      <Row gap={10}>
        <Slider label="A" value={a} min={-5} max={5} onChange={setA} color={C.violet} />
        <Slider label="B" value={b} min={-5} max={5} onChange={setB} color={C.violet} />
        <Slider label="C" value={c} min={-15} max={15} onChange={setC} color={C.violet} />
      </Row>
      <PointSliders name="P" p={Q} set={setQ} color={C.red} min={-9} max={9} />
      {S === 0 ? <Readout tone="amber">A and B cannot both be 0.</Readout> : (
        <>
          <Plane view={V10} label="Distance from a point to a line">
            {(X, Y) => (
              <>
                <line {...stdSeg(X, Y, a, b, c, V10)} stroke={C.violet} strokeWidth={3} />
                {k !== 0 && <line {...stdSeg(X, Y, pA, pB, perpC, V10)} stroke={C.faint} strokeWidth={1.5} strokeDasharray="5 5" />}
                <line x1={X(Q[0])} y1={Y(Q[1])} x2={X(F[0])} y2={Y(F[1])} stroke={C.red} strokeWidth={3.5} />
                <Dot X={X} Y={Y} p={F} color={C.green} label="F" />
                <Dot X={X} Y={Y} p={Q} color={C.red} label="P" />
              </>
            )}
          </Plane>
          <Readout tone="green">
            {k === 0 ? <MathText html={`P lies on \\(${stdTex(a, b, c)}\\), so its distance to the line is 0.`} /> : (
              <ol style={{ margin: "0 0 0 18px", lineHeight: 1.8 }}>
                <li><MathText html={`The line \\(${stdTex(a, b, c)}\\) has slope ${b === 0 ? "undefined (vertical)" : `\\(${fr(-a, b)}\\)`}, so a perpendicular has slope ${a === 0 ? "undefined (vertical)" : `\\(${fr(b, a)}\\)`}.`} /></li>
                <li><MathText html={`The perpendicular through \\(P${pt(Q)}\\) is \\(${stdTex(pA, pB, perpC)}\\).`} /></li>
                <li><MathText html={`Solve the two equations as a system: they meet at \\(F${Ftex}\\).`} /></li>
                <li><MathText html={`The distance is the length \\(PF=${dExact}\\approx${r2(Math.abs(k) / Math.sqrt(S))}\\). Any other point on the line is farther from P.`} /></li>
              </ol>
            )}
          </Readout>
        </>
      )}
    </WidgetCard>
  );
}
