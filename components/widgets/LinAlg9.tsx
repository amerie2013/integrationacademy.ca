"use client";

// Linear Algebra I, chapter 9 (orthogonality and least squares) explorers: a line and its orthogonal complement,
// orthogonal matrices (rotations and reflections), projection onto a line with the distance, projection matrices,
// Gram–Schmidt in the plane, QR of a 2 × 2 matrix, and least-squares line fitting.

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { Plane, type View } from "./Systems";

type P2 = [number, number];
type Fn = (v: number) => number;
const f3 = (x: number) => String(+x.toFixed(3)).replace(/^-0$/, "0");
const mt = (m: (string | number)[][]) => `\\left[\\begin{array}{${"c".repeat(m[0].length)}}${m.map((r) => r.map((x) => (typeof x === "number" ? f3(x) : x)).join(" & ")).join(" \\\\ ")}\\end{array}\\right]`;
const cv = (v: number[]) => mt(v.map((x) => [x]));
const BOX = { display: "flex", gap: 18, justifyContent: "center", flexWrap: "wrap" as const, fontSize: 17, margin: "10px 0", overflowX: "auto" as const, overflowY: "hidden" as const, padding: "4px 0" };
const dot = (a: P2, b: P2) => a[0] * b[0] + a[1] * b[1];
const arrow = (from: P2, to: P2, color: string, X: Fn, Y: Fn, w = 3, dash = false) =>
  <g><line x1={X(from[0])} y1={Y(from[1])} x2={X(to[0])} y2={Y(to[1])} stroke={color} strokeWidth={w} strokeDasharray={dash ? "6 4" : undefined} /><circle cx={X(to[0])} cy={Y(to[1])} r={4.5} fill={color} /></g>;
const fullLine = (d: P2, color: string, X: Fn, Y: Fn, w = 2, dash = true) => { const n = Math.hypot(...d) || 1; return <line x1={X((-30 * d[0]) / n)} y1={Y((-30 * d[1]) / n)} x2={X((30 * d[0]) / n)} y2={Y((30 * d[1]) / n)} stroke={color} strokeWidth={w} strokeDasharray={dash ? "7 5" : undefined} />; };
const seg = (a: P2, b: P2, color: string, X: Fn, Y: Fn, w = 1.6) => <line x1={X(a[0])} y1={Y(a[1])} x2={X(b[0])} y2={Y(b[1])} stroke={color} strokeWidth={w} strokeDasharray="5 4" />;
const dir = (t: number): P2 => [Math.cos((t * Math.PI) / 180), Math.sin((t * Math.PI) / 180)];
const V5: View = { xmin: -5, xmax: 5, ymin: -5, ymax: 5 };

/* ---------------------------------------------------------------- 9.1 a line and its complement */

export function PerpLab({ init = { t: 45, x: 3, y: 1 } }: { init?: { t: number; x: number; y: number } }) {
  const [t, setT] = useState(init.t), [x, setX] = useState(init.x), [y, setY] = useState(init.y);
  const u = dir(t), n: P2 = [-u[1], u[0]], v: P2 = [x, y], c = dot(v, u), yh: P2 = [c * u[0], c * u[1]], z: P2 = [x - yh[0], y - yh[1]];
  return (
    <WidgetCard title="A line and its orthogonal complement" subtitle="W⊥ is the line of vectors perpendicular to W; every y splits as ŷ + z with ŷ ∈ W, z ∈ W⊥">
      <Slider label="angle of W" value={t} min={0} max={180} onChange={setT} format={(v) => `${v}°`} color={C.green} />
      <Row gap={10}><Slider label="y₁" value={x} min={-4} max={4} step={0.5} onChange={setX} color={C.blue} /><Slider label="y₂" value={y} min={-4} max={4} step={0.5} onChange={setY} color={C.blue} /></Row>
      <Plane view={V5} label="line and complement" step={1}>
        {(X, Y) => <>
          {fullLine(u, C.green, X, Y, 2.4, false)}{fullLine(n, "rgba(124,58,237,0.7)", X, Y, 2)}
          {seg(v, yh, "#94a3b8", X, Y)}{seg(v, z, "#94a3b8", X, Y)}
          {arrow([0, 0], yh, C.green, X, Y, 3)}{arrow([0, 0], z, C.violet, X, Y, 3)}{arrow([0, 0], v, C.blue, X, Y, 3.5)}
        </>}
      </Plane>
      <Readout tone="green">
        <MathText block html={`Green line: \\(W=\\operatorname{span}\\{(${f3(u[0])},${f3(u[1])})\\}\\). Violet dashed line: \\(W^\\perp\\).`} />
        <MathText block html={`\\(\\vec y=${cv([x, y])}=\\hat y+\\vec z=${cv(yh)}+${cv(z)}\\), and \\(\\hat y^T\\vec z=${f3(dot(yh, z))}\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 9.2 orthogonal matrices */

export function OrthoMatLab({ init = { kind: "rot", t: 53 } }: { init?: { kind: string; t: number } }) {
  const [kind, setKind] = useState(init.kind), [t, setT] = useState(init.t);
  const r = (t * Math.PI) / 180, c = Math.cos(r), s = Math.sin(r), c2 = Math.cos(2 * r), s2 = Math.sin(2 * r);
  const Q = kind === "rot" ? [[c, -s], [s, c]] : [[c2, s2], [s2, -c2]];
  const QtQ = [[Q[0][0] ** 2 + Q[1][0] ** 2, Q[0][0] * Q[0][1] + Q[1][0] * Q[1][1]], [Q[0][0] * Q[0][1] + Q[1][0] * Q[1][1], Q[0][1] ** 2 + Q[1][1] ** 2]];
  const x: P2 = [3, 1], qx: P2 = [Q[0][0] * x[0] + Q[0][1] * x[1], Q[1][0] * x[0] + Q[1][1] * x[1]], det = Q[0][0] * Q[1][1] - Q[0][1] * Q[1][0];
  return (
    <WidgetCard title="Orthogonal matrices" subtitle="QᵀQ = I: Q keeps lengths and angles; det Q = +1 (rotation) or −1 (reflection)">
      <Segmented label="Q" options={[{ value: "rot", label: "rotation" }, { value: "ref", label: "reflection" }]} value={kind} onChange={setKind} />
      <Slider label={kind === "rot" ? "angle" : "mirror line angle"} value={t} min={0} max={180} onChange={setT} format={(v) => `${v}°`} color={C.violet} />
      <Plane view={V5} label="orthogonal matrix" step={1}>
        {(X, Y) => <>
          {kind === "ref" && fullLine(dir(t), C.green, X, Y, 2.2)}
          <circle cx={X(0)} cy={Y(0)} r={X(Math.hypot(...x)) - X(0)} fill="none" stroke="#cbd5e1" strokeWidth={1.5} />
          {arrow([0, 0], x, C.blue, X, Y, 3.5)}{arrow([0, 0], qx, C.red, X, Y, 3.5)}
        </>}
      </Plane>
      <div style={BOX}><MathText html={`\\(Q\\approx${mt(Q)},\\quad Q^TQ\\approx${mt(QtQ)},\\quad \\det Q\\approx${f3(det)}\\)`} /></div>
      <Readout tone="green">
        <MathText block html={`\\(\\vec x=(3,1)\\), \\(Q\\vec x\\approx(${f3(qx[0])},${f3(qx[1])})\\). Both lie on the grey circle: \\(|Q\\vec x|=|\\vec x|=\\sqrt{10}\\approx${f3(Math.sqrt(10))}\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 9.3 projection onto a line */

export function ProjLineLab({ init = { t: 27, x: 1, y: 3 } }: { init?: { t: number; x: number; y: number } }) {
  const [t, setT] = useState(init.t), [x, setX] = useState(init.x), [y, setY] = useState(init.y), [s, setS] = useState(1);
  const u = dir(t), v: P2 = [x, y], c = dot(v, u), yh: P2 = [c * u[0], c * u[1]], d = Math.hypot(x - yh[0], y - yh[1]);
  const p: P2 = [s * u[0], s * u[1]], dp = Math.hypot(x - p[0], y - p[1]);
  return (
    <WidgetCard title="The closest point on a line" subtitle="ŷ = (uᵀy / uᵀu) u; the error y − ŷ is perpendicular to the line and no other point is closer">
      <Slider label="angle of W" value={t} min={0} max={180} onChange={setT} format={(v) => `${v}°`} color={C.green} />
      <Row gap={10}><Slider label="y₁" value={x} min={-4} max={4} step={0.5} onChange={setX} color={C.blue} /><Slider label="y₂" value={y} min={-4} max={4} step={0.5} onChange={setY} color={C.blue} /></Row>
      <Slider label="test point on W" value={s} min={-4} max={4} step={0.25} onChange={setS} color={C.amber} />
      <Plane view={V5} label="projection onto a line" step={1}>
        {(X, Y) => <>
          {fullLine(u, C.green, X, Y, 2.4, false)}
          {seg(v, p, C.amber, X, Y, 1.6)}{seg(v, yh, C.violet, X, Y, 2.4)}
          <circle cx={X(p[0])} cy={Y(p[1])} r={6} fill={C.amber} />
          {arrow([0, 0], yh, C.red, X, Y, 3)}{arrow([0, 0], v, C.blue, X, Y, 3.5)}
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText block html={`\\(\\hat y=\\dfrac{\\vec u^T\\vec y}{\\vec u^T\\vec u}\\vec u\\approx(${f3(yh[0])},${f3(yh[1])})\\) (red); distance to \\(W\\): \\(|\\vec y-\\hat y|\\approx${f3(d)}\\).`} />
        <MathText block html={`The orange test point is at distance \\(${f3(dp)}\\)${dp - d > 1e-6 ? " — larger, as the best-approximation theorem promises." : " — it is the projection itself."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 9.4 projection matrices */

export function ProjMatLab({ init = { t: 63, x: 4, y: 1 } }: { init?: { t: number; x: number; y: number } }) {
  const [t, setT] = useState(init.t), [x, setX] = useState(init.x), [y, setY] = useState(init.y);
  const u = dir(t), P = [[u[0] * u[0], u[0] * u[1]], [u[0] * u[1], u[1] * u[1]]];
  const P2m = [[P[0][0] * P[0][0] + P[0][1] * P[1][0], P[0][0] * P[0][1] + P[0][1] * P[1][1]], [P[1][0] * P[0][0] + P[1][1] * P[1][0], P[1][0] * P[0][1] + P[1][1] * P[1][1]]];
  const py: P2 = [P[0][0] * x + P[0][1] * y, P[1][0] * x + P[1][1] * y], qy: P2 = [x - py[0], y - py[1]];
  return (
    <WidgetCard title="Projection matrices" subtitle="P = aaᵀ/aᵀa projects onto the line; P² = P, Pᵀ = P; I − P projects onto the perpendicular line">
      <Slider label="angle of the line" value={t} min={0} max={180} onChange={setT} format={(v) => `${v}°`} color={C.green} />
      <Row gap={10}><Slider label="y₁" value={x} min={-4} max={4} step={0.5} onChange={setX} color={C.blue} /><Slider label="y₂" value={y} min={-4} max={4} step={0.5} onChange={setY} color={C.blue} /></Row>
      <Plane view={V5} label="projection matrix" step={1}>
        {(X, Y) => <>
          {fullLine(u, C.green, X, Y, 2.4, false)}{fullLine([-u[1], u[0]], "rgba(124,58,237,0.6)", X, Y, 2)}
          {arrow([0, 0], py, C.red, X, Y, 3)}{arrow([0, 0], qy, C.violet, X, Y, 3)}{arrow([0, 0], [x, y], C.blue, X, Y, 3.5)}
        </>}
      </Plane>
      <div style={BOX}><MathText html={`\\(P\\approx${mt(P)},\\quad P^2\\approx${mt(P2m)}\\)`} /></div>
      <Readout tone="green">
        <MathText block html={`\\(P\\vec y\\approx(${f3(py[0])},${f3(py[1])})\\) (red) and \\((I-P)\\vec y\\approx(${f3(qy[0])},${f3(qy[1])})\\) (violet): they add to \\(\\vec y\\) and are perpendicular. \\(P^2=P\\) and \\(P^T=P\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 9.5 Gram–Schmidt */

export function GSLab({ init = { a: 3, b: 1, c: 1, d: 2 } }: { init?: { a: number; b: number; c: number; d: number } }) {
  const [a, setA] = useState(init.a), [b, setB] = useState(init.b), [c, setC] = useState(init.c), [d, setD] = useState(init.d);
  const v1: P2 = [a, b], v2: P2 = [c, d], n1 = dot(v1, v1), k = n1 ? dot(v2, v1) / n1 : 0, p: P2 = [k * a, k * b], w2: P2 = [c - p[0], d - p[1]];
  const zero = Math.hypot(...w2) < 1e-9;
  return (
    <WidgetCard title="Gram–Schmidt in the plane" subtitle="w₁ = v₁, w₂ = v₂ − (v₂ᵀw₁ / w₁ᵀw₁) w₁ — the part of v₂ perpendicular to v₁">
      <Row gap={10}><Slider label="v₁: x" value={a} min={-4} max={4} onChange={setA} color={C.blue} /><Slider label="y" value={b} min={-4} max={4} onChange={setB} color={C.blue} /></Row>
      <Row gap={10}><Slider label="v₂: x" value={c} min={-4} max={4} onChange={setC} color={C.red} /><Slider label="y" value={d} min={-4} max={4} onChange={setD} color={C.red} /></Row>
      <Plane view={V5} label="Gram–Schmidt" step={1}>
        {(X, Y) => <>
          {seg(v2, p, "#94a3b8", X, Y)}{arrow([0, 0], p, "#94a3b8", X, Y, 2, true)}
          {arrow([0, 0], v1, C.blue, X, Y, 3.5)}{arrow([0, 0], v2, C.red, X, Y, 2.5)}{!zero && arrow([0, 0], w2, C.violet, X, Y, 3.5)}
        </>}
      </Plane>
      <Readout tone={zero ? "amber" : "green"}>
        <MathText block html={n1 ? `Coefficient \\(\\dfrac{\\vec v_2^T\\vec w_1}{\\vec w_1^T\\vec w_1}=\\dfrac{${dot(v2, v1)}}{${n1}}\\approx${f3(k)}\\); \\(\\vec w_2=${cv([c, d])}-${f3(k)}${cv([a, b])}\\approx${cv(w2)}\\) (violet).` : "Choose a nonzero v₁."} />
        <MathText block html={zero ? "\\(\\vec w_2=\\vec 0\\): \\(\\vec v_2\\) is parallel to \\(\\vec v_1\\) (dependent vectors)." : `Check: \\(\\vec w_1^T\\vec w_2\\approx${f3(dot(v1, w2))}\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 9.6 QR of a 2 × 2 matrix */

export function QRLab({ init = { a: 3, b: 1, c: 4, d: 2 } }: { init?: { a: number; b: number; c: number; d: number } }) {
  const [a, setA] = useState(init.a), [b, setB] = useState(init.b), [c, setC] = useState(init.c), [d, setD] = useState(init.d);
  const a1: P2 = [a, c], a2: P2 = [b, d], r11 = Math.hypot(...a1);
  const q1: P2 = r11 ? [a / r11, c / r11] : [1, 0], r12 = dot(q1, a2), w2: P2 = [b - r12 * q1[0], d - r12 * q1[1]], r22 = Math.hypot(...w2);
  const ok = r11 > 1e-9 && r22 > 1e-9, q2: P2 = ok ? [w2[0] / r22, w2[1] / r22] : [0, 0];
  const Q = [[q1[0], q2[0]], [q1[1], q2[1]]], R = [[r11, r12], [0, r22]];
  const QR = [[Q[0][0] * R[0][0], Q[0][0] * R[0][1] + Q[0][1] * R[1][1]], [Q[1][0] * R[0][0], Q[1][0] * R[0][1] + Q[1][1] * R[1][1]]];
  return (
    <WidgetCard title="QR factorisation" subtitle="Gram–Schmidt on the columns gives Q; R = QᵀA is upper triangular">
      <Row gap={10}><Slider label="a" value={a} min={-5} max={5} onChange={setA} color={C.blue} /><Slider label="b" value={b} min={-5} max={5} onChange={setB} color={C.red} /></Row>
      <Row gap={10}><Slider label="c" value={c} min={-5} max={5} onChange={setC} color={C.blue} /><Slider label="d" value={d} min={-5} max={5} onChange={setD} color={C.red} /></Row>
      <Plane view={{ xmin: -6, xmax: 6, ymin: -6, ymax: 6 }} label="columns and Q" step={1}>
        {(X, Y) => <>
          {arrow([0, 0], a1, C.blue, X, Y, 2.5)}{arrow([0, 0], a2, C.red, X, Y, 2.5)}
          {ok && arrow([0, 0], q1, C.green, X, Y, 4)}{ok && arrow([0, 0], q2, C.violet, X, Y, 4)}
        </>}
      </Plane>
      {ok && <div style={BOX}><MathText html={`\\(Q\\approx${mt(Q)}\\)`} /><MathText html={`\\(R\\approx${mt(R)}\\)`} /><MathText html={`\\(QR\\approx${mt(QR)}\\)`} /></div>}
      <Readout tone={ok ? "green" : "amber"}>
        <MathText block html={ok ? `\\(r_{11}=|\\vec a_1|\\approx${f3(r11)}\\), \\(r_{12}=\\vec q_1^T\\vec a_2\\approx${f3(r12)}\\), \\(r_{22}=|\\vec w_2|\\approx${f3(r22)}\\). Green and violet: the orthonormal columns of \\(Q\\).` : "The columns are dependent (or zero): no QR factorisation with invertible R."} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 9.7 least-squares line */

const DATA: Record<string, { label: string; pts: P2[] }> = {
  a: { label: "4 points", pts: [[0, 1], [1, 2], [2, 2], [3, 4]] },
  b: { label: "rising", pts: [[-2, -3], [-1, -1], [0, 0], [1, 2], [2, 2.5], [3, 5]] },
  c: { label: "falling", pts: [[-3, 4], [-1, 3], [0, 1.5], [2, 0], [3, -1]] },
};
export function LsqLab({ init = { set: "a" } }: { init?: { set: string } }) {
  const [set, setSet] = useState(init.set in DATA ? init.set : "a");
  const [b0, setB0] = useState(0), [b1, setB1] = useState(1), [show, setShow] = useState(false);
  const pts = DATA[set].pts, n = pts.length, sx = pts.reduce((s, p) => s + p[0], 0), sy = pts.reduce((s, p) => s + p[1], 0);
  const sxx = pts.reduce((s, p) => s + p[0] * p[0], 0), sxy = pts.reduce((s, p) => s + p[0] * p[1], 0), det = n * sxx - sx * sx;
  const bb1 = (n * sxy - sx * sy) / det, bb0 = (sy - bb1 * sx) / n;
  const sse = (c0: number, c1: number) => pts.reduce((s, [x, y]) => s + (y - c0 - c1 * x) ** 2, 0);
  const view: View = { xmin: -5, xmax: 5, ymin: -5, ymax: 6 };
  return (
    <WidgetCard title="Least-squares line" subtitle="the best line minimises the sum of squared vertical residuals; it solves XᵀXβ = Xᵀy">
      <Segmented label="data" options={Object.entries(DATA).map(([value, s]) => ({ value, label: s.label }))} value={set} onChange={(s) => { setSet(s); setShow(false); }} />
      <Row gap={10}><Slider label="your β₀" value={b0} min={-3} max={3} step={0.1} onChange={setB0} color={C.amber} /><Slider label="your β₁" value={b1} min={-2} max={2} step={0.05} onChange={setB1} color={C.amber} /></Row>
      <Row gap={8}><button onClick={() => setShow(!show)} style={{ padding: "4px 12px" }}>{show ? "hide" : "show"} the least-squares line</button></Row>
      <Plane view={view} label="least-squares line" step={1}>
        {(X, Y) => <>
          {pts.map(([x, y], i) => <line key={"r" + i} x1={X(x)} y1={Y(y)} x2={X(x)} y2={Y(b0 + b1 * x)} stroke={C.amber} strokeWidth={1.6} strokeDasharray="4 3" />)}
          <line x1={X(-6)} y1={Y(b0 - 6 * b1)} x2={X(6)} y2={Y(b0 + 6 * b1)} stroke={C.amber} strokeWidth={2.4} />
          {show && <line x1={X(-6)} y1={Y(bb0 - 6 * bb1)} x2={X(6)} y2={Y(bb0 + 6 * bb1)} stroke={C.violet} strokeWidth={2.6} />}
          {pts.map(([x, y], i) => <circle key={"p" + i} cx={X(x)} cy={Y(y)} r={5} fill={C.blue} />)}
        </>}
      </Plane>
      <div style={BOX}><MathText html={`\\(X^TX=${mt([[n, sx], [sx, sxx]])},\\quad X^T\\vec y=${cv([sy, sxy])}\\)`} /></div>
      <Readout tone={show ? "green" : "blue"}>
        <MathText block html={`Your line (orange): SSE \\(=${f3(sse(b0, b1))}\\).`} />
        <MathText block html={show ? `Least-squares line (violet): \\(y\\approx${f3(bb0)}+${f3(bb1)}x\\), SSE \\(=${f3(sse(bb0, bb1))}\\) — no line does better.` : "Adjust your line, then reveal the least-squares line to compare."} />
      </Readout>
    </WidgetCard>
  );
}
