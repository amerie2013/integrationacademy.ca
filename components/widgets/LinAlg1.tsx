"use client";

// Linear Algebra I, chapter 1 (the geometry of Rⁿ) explorers: linear combinations and span in R², lines and planes
// in R³ from a point and direction vectors, length and the triangle inequality, the dot product and angles, the
// cross product, the normal form of a plane, and projections onto a vector and onto a plane.

import { useState, type ReactNode } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard, btn, gcd } from "./kit";
import { Plane, r2, type View } from "./Systems";

type XY = [number, number];
type V3 = [number, number, number];
const RAD = Math.PI / 180;
const dot = (a: number[], b: number[]) => a.reduce((s, x, i) => s + x * b[i], 0);
const norm = (a: number[]) => Math.sqrt(dot(a, a));
const add = (a: V3, b: V3): V3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const sc = (k: number, a: V3): V3 => [k * a[0], k * a[1], k * a[2]];
const cross = (a: V3, b: V3): V3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const f = (v: number) => r2(v);
const col = (a: number[]) => `\\begin{bmatrix}${a.map(f).join("\\\\")}\\end{bmatrix}`;
const tup = (a: number[]) => `(${a.map(f).join(",\\ ")})`;

/* ---------------------------------------------------------------- shared drawing helpers */

/** an arrow between two screen points */
function Arrow({ a, b, color, w = 3, dash, label }: { a: XY; b: XY; color: string; w?: number; dash?: boolean; label?: string }) {
  const L = Math.hypot(b[0] - a[0], b[1] - a[1]);
  if (L < 1) return null;
  const ux = (b[0] - a[0]) / L, uy = (b[1] - a[1]) / L, h = Math.min(12, L * 0.45), bx = b[0] - ux * h, by = b[1] - uy * h;
  return (
    <g>
      <line x1={a[0]} y1={a[1]} x2={bx} y2={by} stroke={color} strokeWidth={w} strokeDasharray={dash ? "6 4" : undefined} />
      <polygon points={`${b[0]},${b[1]} ${bx - uy * h * 0.42},${by + ux * h * 0.42} ${bx + uy * h * 0.42},${by - ux * h * 0.42}`} fill={color} />
      {label && <text x={(a[0] + b[0]) / 2 - uy * 14} y={(a[1] + b[1]) / 2 + ux * 14 + 5} fontSize={14} fontWeight={800} fontStyle="italic" textAnchor="middle" fill={color} stroke="#fff" strokeWidth={3} paintOrder="stroke">{label}</text>}
    </g>
  );
}

/** three-space view: x toward the viewer, y right, z up; turn and tilt with sliders */
function Space({ az, el, children, label, s = 32, len = 5 }: { az: number; el: number; children: (P: (p: V3) => XY) => ReactNode; label: string; s?: number; len?: number }) {
  const W = 520, H = 400, cx = 260, cy = 215;
  const P = ([x, y, z]: V3): XY => {
    const sx = -x * Math.sin(az * RAD) + y * Math.cos(az * RAD);
    const depth = x * Math.cos(az * RAD) + y * Math.sin(az * RAD);
    return [cx + s * sx, cy - s * (z * Math.cos(el * RAD) - depth * Math.sin(el * RAD))];
  };
  const ax: [V3, string][] = [[[len, 0, 0], "x₁"], [[0, len, 0], "x₂"], [[0, 0, len], "x₃"]];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", maxWidth: 560, display: "block", margin: "8px auto", background: "#fff", border: `1px solid ${C.line}`, borderRadius: 8 }} role="img" aria-label={label}>
      {ax.map(([p, t]) => { const a = P(p), b = P(sc(-0.7, p)), o = P([0, 0, 0]); return <g key={t}>
        <line x1={o[0]} y1={o[1]} x2={b[0]} y2={b[1]} stroke={C.faint} strokeDasharray="4 4" />
        <line x1={o[0]} y1={o[1]} x2={a[0]} y2={a[1]} stroke={C.muted} strokeWidth={1.5} />
        <text x={a[0] + 6} y={a[1] + 4} fontSize={14} fontWeight={700} fill={C.muted}>{t}</text></g>; })}
      {children(P)}
    </svg>
  );
}
const ViewSliders = ({ az, el, setAz, setEl }: { az: number; el: number; setAz: (v: number) => void; setEl: (v: number) => void }) => (
  <Row gap={10}><Slider label="turn view (°)" value={az} min={0} max={90} step={1} onChange={setAz} color={C.faint} /><Slider label="tilt view (°)" value={el} min={5} max={60} step={1} onChange={setEl} color={C.faint} /></Row>
);
const Arrow3 = ({ P, a, b, color, w, dash, label }: { P: (p: V3) => XY; a: V3; b: V3; color: string; w?: number; dash?: boolean; label?: string }) => <Arrow a={P(a)} b={P(b)} color={color} w={w} dash={dash} label={label} />;
const Seg3 = ({ P, a, b, color, w = 1.4, dash = true }: { P: (p: V3) => XY; a: V3; b: V3; color: string; w?: number; dash?: boolean }) => { const p = P(a), q = P(b); return <line x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} stroke={color} strokeWidth={w} strokeDasharray={dash ? "4 4" : undefined} />; };
const Poly3 = ({ P, pts, color, op = 0.25 }: { P: (p: V3) => XY; pts: V3[]; color: string; op?: number }) => <polygon points={pts.map((p) => P(p).join(",")).join(" ")} fill={color} fillOpacity={op} stroke={color} strokeWidth={1.3} />;
const Dot3 = ({ P, p, color, label }: { P: (p: V3) => XY; p: V3; color: string; label?: string }) => { const [x, y] = P(p); return <g><circle cx={x} cy={y} r={5} fill={color} />{label && <text x={x + 8} y={y - 6} fontSize={13} fontWeight={700} fill={color} stroke="#fff" strokeWidth={3} paintOrder="stroke">{label}</text>}</g>; };
/** dashed box from the origin to p, so the eye can read its coordinates */
const Box3 = ({ P, p }: { P: (p: V3) => XY; p: V3 }) => {
  const [a, b, c] = p;
  const lines: [V3, V3][] = [[[a, 0, 0], [a, b, 0]], [[0, b, 0], [a, b, 0]], [[a, b, 0], [a, b, c]]];
  return <>{lines.map(([u, v], i) => <Seg3 key={i} P={P} a={u} b={v} color={C.faint} />)}</>;
};

/** 2-D arrow on a Plane */
const Arr2 = ({ X, Y, a, b, color, w, dash, label }: { X: (x: number) => number; Y: (y: number) => number; a: XY; b: XY; color: string; w?: number; dash?: boolean; label?: string }) =>
  <Arrow a={[X(a[0]), Y(a[1])]} b={[X(b[0]), Y(b[1])]} color={color} w={w} dash={dash} label={label} />;

/* ---------------------------------------------------------------- 1.1 linear combinations */

const PAIRS: Record<string, [XY, XY]> = { general: [[2, 1], [-1, 2]], skew: [[3, 1], [1, 2]], parallel: [[2, 1], [-4, -2]] };
const V8: View = { xmin: -8, xmax: 8, ymin: -6, ymax: 6 };

export function LinearComboLab({ init = { pair: "general" } }: { init?: { pair: string } }) {
  const [pair, setPair] = useState(init.pair in PAIRS ? init.pair : "general");
  const [s, setS] = useState(1), [t, setT] = useState(1);
  const [target, setTarget] = useState<XY>([2.5, 2.5]);
  const [u, v] = PAIRS[pair];
  const su: XY = [s * u[0], s * u[1]], w: XY = [su[0] + t * v[0], su[1] + t * v[1]];
  const det = u[0] * v[1] - u[1] * v[0];
  const hit = Math.hypot(w[0] - target[0], w[1] - target[1]) < 0.12;
  const newTarget = () => {
    const a = Math.round(Math.random() * 4 - 2) + (Math.random() < 0.5 ? 0.5 : 0), b = Math.round(Math.random() * 4 - 2);
    const p: XY = [a * u[0] + b * v[0], a * u[1] + b * v[1]];
    if (Math.abs(p[0]) < 7.5 && Math.abs(p[1]) < 5.5 && (p[0] || p[1])) setTarget(p); else setTarget([u[0] + v[0], u[1] + v[1]]);
  };
  const ks = [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6];
  return (
    <WidgetCard title="Linear combinations and span" subtitle="Every point you can reach as s·u + t·v is in the span of u and v">
      <Segmented label="vectors" options={[{ value: "general", label: "u, v not parallel" }, { value: "skew", label: "another pair" }, { value: "parallel", label: "u, v parallel" }]} value={pair} onChange={(p) => { setPair(p); setS(1); setT(1); }} />
      <Row gap={10}><Slider label="s" value={s} min={-3} max={3} step={0.1} onChange={setS} color={C.blue} format={f} /><Slider label="t" value={t} min={-3} max={3} step={0.1} onChange={setT} color={C.red} format={f} /></Row>
      <Plane view={V8} label="the combination s u + t v" step={1}>
        {(X, Y) => <>
          {det !== 0 && ks.map((k) => <g key={k}>
            <line x1={X(k * v[0] - 9 * u[0])} y1={Y(k * v[1] - 9 * u[1])} x2={X(k * v[0] + 9 * u[0])} y2={Y(k * v[1] + 9 * u[1])} stroke={C.blueSoft} strokeWidth={1.4} />
            <line x1={X(k * u[0] - 9 * v[0])} y1={Y(k * u[1] - 9 * v[1])} x2={X(k * u[0] + 9 * v[0])} y2={Y(k * u[1] + 9 * v[1])} stroke={C.redSoft} strokeWidth={1.4} />
          </g>)}
          {det === 0 && <line x1={X(-20 * u[0])} y1={Y(-20 * u[1])} x2={X(20 * u[0])} y2={Y(20 * u[1])} stroke={C.violet} strokeWidth={6} strokeOpacity={0.18} />}
          {det !== 0 && <circle cx={X(target[0])} cy={Y(target[1])} r={9} fill="none" stroke={hit ? C.green : C.amber} strokeWidth={3} />}
          <Arr2 X={X} Y={Y} a={[0, 0]} b={u} color={C.blue} w={2} dash label="u" />
          <Arr2 X={X} Y={Y} a={[0, 0]} b={v} color={C.red} w={2} dash label="v" />
          <Arr2 X={X} Y={Y} a={[0, 0]} b={su} color={C.blue} label="su" />
          <Arr2 X={X} Y={Y} a={su} b={w} color={C.red} label="tv" />
          <Arr2 X={X} Y={Y} a={[0, 0]} b={w} color={C.green} w={3.4} />
        </>}
      </Plane>
      <Readout tone={hit ? "green" : "blue"}>
        <MathText block html={`\\(${f(s)}${col(u)}+(${f(t)})${col(v)}=${col(w)}\\)`} />
        {det !== 0
          ? <MathText block html={hit ? `You reached the target \\(${tup(target)}\\). Because \\(\\vec u\\) and \\(\\vec v\\) are not parallel, <strong>every</strong> point of \\(\\mathbb R^2\\) is some \\(s\\vec u+t\\vec v\\): the span is the whole plane.` : `Move \\(s\\) and \\(t\\) so the green arrow ends on the amber target \\(${tup(target)}\\). The skewed grid shows the whole-number combinations.`} />
          : <MathText block html={`Here \\(\\vec v=-2\\vec u\\). Every combination stays on one line (shaded): the span of two parallel vectors is a <strong>line</strong>, not the plane.`} />}
      </Readout>
      {det !== 0 && <button type="button" style={{ ...btn(false), marginTop: 10 }} onClick={newTarget}>New target</button>}
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.2 lines and planes */

export function LinePlaneLab({ init = { mode: "line" as "line" | "plane" } }: { init?: { mode: "line" | "plane" } }) {
  const [mode, setMode] = useState<"line" | "plane">(init.mode);
  const [d1, setD1] = useState(1), [d2, setD2] = useState(2), [d3, setD3] = useState(1);
  const [s, setS] = useState(0.5), [t, setT] = useState(1);
  const [par, setPar] = useState(false);
  const [az, setAz] = useState(35), [el, setEl] = useState(22);
  const p: V3 = [1, -2, 1];
  if (mode === "line") {
    const d: V3 = [d1, d2, d3], x = add(p, sc(t, d));
    return (
      <WidgetCard title="A line in R³: x = p + t d" subtitle="One point and one direction. Every real t gives one point of the line">
        <Segmented options={[{ value: "line", label: "line" }, { value: "plane", label: "plane" }]} value={mode} onChange={setMode} />
        <Row gap={10}><Slider label="d₁" value={d1} min={-3} max={3} step={0.5} onChange={setD1} color={C.violet} format={f} /><Slider label="d₂" value={d2} min={-3} max={3} step={0.5} onChange={setD2} color={C.violet} format={f} /><Slider label="d₃" value={d3} min={-3} max={3} step={0.5} onChange={setD3} color={C.violet} format={f} /></Row>
        <Slider label="parameter t" value={t} min={-2} max={2} step={0.1} onChange={setT} color={C.red} format={f} />
        <ViewSliders az={az} el={el} setAz={setAz} setEl={setEl} />
        <Space az={az} el={el} label="a line through p with direction d">
          {(P) => <>
            {norm(d) > 0 && <Seg3 P={P} a={add(p, sc(-3, d))} b={add(p, sc(3, d))} color={C.violet} w={2.6} dash={false} />}
            <Arrow3 P={P} a={[0, 0, 0]} b={p} color={C.blue} w={2} dash label="p" />
            <Arrow3 P={P} a={p} b={add(p, d)} color={C.green} w={3.6} label="d" />
            <Arrow3 P={P} a={[0, 0, 0]} b={x} color={C.red} w={2} />
            <Dot3 P={P} p={x} color={C.red} label={`t = ${f(t)}`} />
          </>}
        </Space>
        <Readout tone="blue">
          <MathText block html={`Vector equation \\(\\vec x=${col(p)}+t${col(d)}\\). Parametric: \\(x_1=1${d1 < 0 ? "" : "+"}${f(d1)}t,\\ x_2=-2${d2 < 0 ? "" : "+"}${f(d2)}t,\\ x_3=1${d3 < 0 ? "" : "+"}${f(d3)}t\\). At \\(t=${f(t)}\\) the point is \\(${tup(x)}\\).`} />
          {norm(d) === 0 && <MathText block html={`With \\(\\vec d=\\vec 0\\) every \\(t\\) gives the same point: a direction vector must be nonzero.`} />}
        </Readout>
      </WidgetCard>
    );
  }
  const u: V3 = [2, 0, 1], v: V3 = par ? [-4, 0, -2] : [0, 2, 1], x = add(p, add(sc(s, u), sc(t, v)));
  const K = 2;
  const corners: V3[] = [[-K, -K], [K, -K], [K, K], [-K, K]].map(([a, b]) => add(p, add(sc(a, u), sc(b, v))));
  return (
    <WidgetCard title="A plane in R³: x = p + s u + t v" subtitle="One point and two non-parallel directions. Each pair (s, t) gives one point of the plane">
      <Segmented options={[{ value: "line", label: "line" }, { value: "plane", label: "plane" }]} value={mode} onChange={setMode} />
      <Segmented label="directions" options={[{ value: 0, label: "u, v not parallel" }, { value: 1, label: "u, v parallel" }]} value={par ? 1 : 0} onChange={(k) => setPar(k === 1)} />
      <Row gap={10}><Slider label="s" value={s} min={-2} max={2} step={0.1} onChange={setS} color={C.blue} format={f} /><Slider label="t" value={t} min={-2} max={2} step={0.1} onChange={setT} color={C.red} format={f} /></Row>
      <ViewSliders az={az} el={el} setAz={setAz} setEl={setEl} />
      <Space az={az} el={el} label="a plane through p spanned by u and v" s={26}>
        {(P) => <>
          {!par && <Poly3 P={P} pts={corners} color={C.blue} op={0.18} />}
          {par && <Seg3 P={P} a={add(p, sc(-1.6, u))} b={add(p, sc(1.6, u))} color={C.violet} w={2.6} dash={false} />}
          <Arrow3 P={P} a={[0, 0, 0]} b={p} color={C.muted} w={1.6} dash label="p" />
          <Arrow3 P={P} a={p} b={add(p, u)} color={C.green} w={3.4} label="u" />
          <Arrow3 P={P} a={p} b={add(p, v)} color={C.amber} w={3.4} label="v" />
          <Seg3 P={P} a={p} b={add(p, sc(s, u))} color={C.green} />
          <Seg3 P={P} a={add(p, sc(s, u))} b={x} color={C.amber} />
          <Dot3 P={P} p={x} color={C.red} label={`(s, t) = (${f(s)}, ${f(t)})`} />
        </>}
      </Space>
      <Readout tone={par ? "amber" : "blue"}>
        <MathText block html={`\\(\\vec x=${col(p)}+s${col(u)}+t${col(v)}=${col(x)}\\)`} />
        <MathText block html={par ? `Now \\(\\vec v=-2\\vec u\\): every point is \\(\\vec p+(s-2t)\\vec u\\), so the "plane" collapses to a <strong>line</strong>. A plane needs two directions that are not parallel.` : `Each slider moves the red point along one direction; together they sweep out the whole plane.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.3 length and the triangle inequality */

export function NormLab({ init = { mode: "length" as "length" | "triangle" } }: { init?: { mode: "length" | "triangle" } }) {
  const [mode, setMode] = useState<"length" | "triangle">(init.mode);
  const [a, setA] = useState(3), [b, setB] = useState(4), [c, setC] = useState(2);
  const [az, setAz] = useState(35), [el, setEl] = useState(22);
  const [m1, setM1] = useState(4), [m2, setM2] = useState(3), [th, setTh] = useState(70);
  if (mode === "length") {
    const x: V3 = [a, b, c], n = norm(x);
    return (
      <WidgetCard title="Length of a vector" subtitle="‖x‖ = √(x₁² + x₂² + x₃²): Pythagoras used twice">
        <Segmented options={[{ value: "length", label: "length in R³" }, { value: "triangle", label: "triangle inequality" }]} value={mode} onChange={setMode} />
        <Row gap={10}><Slider label="x₁" value={a} min={-4} max={4} onChange={setA} color={C.blue} /><Slider label="x₂" value={b} min={-4} max={4} onChange={setB} color={C.blue} /><Slider label="x₃" value={c} min={-4} max={4} onChange={setC} color={C.blue} /></Row>
        <ViewSliders az={az} el={el} setAz={setAz} setEl={setEl} />
        <Space az={az} el={el} label="a vector, its shadow on the floor and the unit vector">
          {(P) => <>
            <Box3 P={P} p={x} />
            <Seg3 P={P} a={[0, 0, 0]} b={[a, b, 0]} color={C.amber} w={2.2} dash={false} />
            <Arrow3 P={P} a={[0, 0, 0]} b={x} color={C.blue} label="x" />
            {n > 0 && <Arrow3 P={P} a={[0, 0, 0]} b={sc(1 / n, x)} color={C.red} w={4} />}
          </>}
        </Space>
        <Readout tone="blue">
          <MathText block html={`Floor diagonal (amber): \\(\\sqrt{${f(a * a)}+${f(b * b)}}=${f(Math.hypot(a, b))}\\). Then \\(\\|\\vec x\\|=\\sqrt{${f(a * a)}+${f(b * b)}+${f(c * c)}}=\\sqrt{${f(n * n)}}\\approx${f(n)}\\).`} />
          {n > 0 ? <MathText block html={`Unit vector (red): \\(\\dfrac{\\vec x}{\\|\\vec x\\|}\\approx${tup([a / n, b / n, c / n])}\\), length 1, same direction.`} /> : <MathText block html={`The zero vector has length 0 and no direction, so it has no unit vector.`} />}
        </Readout>
      </WidgetCard>
    );
  }
  const u: XY = [m1, 0], v: XY = [m2 * Math.cos(th * RAD), m2 * Math.sin(th * RAD)], w: XY = [u[0] + v[0], u[1] + v[1]];
  const L = norm(w);
  return (
    <WidgetCard title="The triangle inequality" subtitle="‖u + v‖ ≤ ‖u‖ + ‖v‖: a side of a triangle is never longer than the other two together">
      <Segmented options={[{ value: "length", label: "length in R³" }, { value: "triangle", label: "triangle inequality" }]} value={mode} onChange={setMode} />
      <Row gap={10}><Slider label="‖u‖" value={m1} min={1} max={5} step={0.5} onChange={setM1} color={C.blue} format={f} /><Slider label="‖v‖" value={m2} min={1} max={5} step={0.5} onChange={setM2} color={C.red} format={f} /></Row>
      <Slider label="angle between u and v (°)" value={th} min={0} max={180} step={5} onChange={setTh} color={C.amber} />
      <Plane view={{ xmin: -6, xmax: 10, ymin: -2, ymax: 7 }} label="u, v and u + v" step={1}>
        {(X, Y) => <>
          <Arr2 X={X} Y={Y} a={[0, 0]} b={u} color={C.blue} label="u" />
          <Arr2 X={X} Y={Y} a={u} b={w} color={C.red} label="v" />
          <Arr2 X={X} Y={Y} a={[0, 0]} b={w} color={C.green} w={3.4} label="u+v" />
        </>}
      </Plane>
      <Readout tone={th === 0 ? "green" : "blue"}>
        <MathText block html={`\\(\\|\\vec u+\\vec v\\|\\approx${f(L)}\\) and \\(\\|\\vec u\\|+\\|\\vec v\\|=${f(m1 + m2)}\\).`} />
        <MathText block html={th === 0 ? `Equality! It happens only when \\(\\vec u\\) and \\(\\vec v\\) point the same way.` : `The green side is shorter than the blue and red sides together. Slide the angle to \\(0^\\circ\\) to make them equal.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.4 dot product and angles */

export function DotAngleLab({ init = { u: [4, 1] as XY, v: [1, 3] as XY } }: { init?: { u: XY; v: XY } }) {
  const [u1, setU1] = useState(init.u[0]), [u2, setU2] = useState(init.u[1]);
  const [v1, setV1] = useState(init.v[0]), [v2, setV2] = useState(init.v[1]);
  const u: XY = [u1, u2], v: XY = [v1, v2], d = dot(u, v), nu = norm(u), nv = norm(v);
  const ok = nu > 0 && nv > 0, cos = ok ? Math.max(-1, Math.min(1, d / (nu * nv))) : 0, th = Math.acos(cos) / RAD;
  const a0 = Math.atan2(u2, u1), a1 = Math.atan2(v2, v1);
  let da = a1 - a0; while (da > Math.PI) da -= 2 * Math.PI; while (da < -Math.PI) da += 2 * Math.PI;
  const tone = !ok ? "amber" : Math.abs(d) < 1e-9 ? "green" : d > 0 ? "blue" : "red";
  return (
    <WidgetCard title="The dot product and the angle" subtitle="u · v = u₁v₁ + u₂v₂ = ‖u‖‖v‖cos θ — its sign tells you the kind of angle">
      <Row gap={10}><Slider label="u₁" value={u1} min={-5} max={5} step={0.5} onChange={setU1} color={C.blue} format={f} /><Slider label="u₂" value={u2} min={-5} max={5} step={0.5} onChange={setU2} color={C.blue} format={f} /></Row>
      <Row gap={10}><Slider label="v₁" value={v1} min={-5} max={5} step={0.5} onChange={setV1} color={C.red} format={f} /><Slider label="v₂" value={v2} min={-5} max={5} step={0.5} onChange={setV2} color={C.red} format={f} /></Row>
      <Plane view={{ xmin: -6, xmax: 6, ymin: -5, ymax: 5 }} label="two vectors and the angle between them" step={1}>
        {(X, Y) => {
          const pts = Array.from({ length: 25 }, (_, i) => { const t = a0 + (da * i) / 24; return `${X(0.9 * Math.cos(t))},${Y(0.9 * Math.sin(t))}`; }).join(" ");
          return <>
            {ok && <polyline points={pts} fill="none" stroke={C.amber} strokeWidth={2.4} />}
            <Arr2 X={X} Y={Y} a={[0, 0]} b={u} color={C.blue} label="u" />
            <Arr2 X={X} Y={Y} a={[0, 0]} b={v} color={C.red} label="v" />
          </>;
        }}
      </Plane>
      <Readout tone={tone}>
        <MathText block html={`\\(\\vec u\\cdot\\vec v=(${f(u1)})(${f(v1)})+(${f(u2)})(${f(v2)})=${f(d)}\\)`} />
        {ok && <MathText block html={`\\(\\cos\\theta=\\dfrac{${f(d)}}{${f(nu)}\\times${f(nv)}}\\approx${f(cos)}\\), so \\(\\theta\\approx${r2(th, 1)}^\\circ\\): ${Math.abs(d) < 1e-9 ? "<strong>orthogonal</strong> (dot product 0)" : d > 0 ? "acute (positive dot product)" : "obtuse (negative dot product)"}.`} />}
        {ok && <MathText block html={`Cauchy–Schwarz: \\(|\\vec u\\cdot\\vec v|=${f(Math.abs(d))}\\le\\|\\vec u\\|\\|\\vec v\\|\\approx${f(nu * nv)}\\).`} />}
        {!ok && <MathText block html={`A zero vector has no direction, so there is no angle — but its dot product with anything is 0.`} />}
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.5 cross product */

export function CrossProductLab({ init = { u: [2, 0, 0] as V3, v: [1, 2, 0] as V3 } }: { init?: { u: V3; v: V3 } }) {
  const [u, setU] = useState<V3>(init.u), [v, setV] = useState<V3>(init.v);
  const [swap, setSwap] = useState(false);
  const [az, setAz] = useState(30), [el, setEl] = useState(25);
  const a = swap ? v : u, b = swap ? u : v, w = cross(a, b), area = norm(w);
  const setC = (which: "u" | "v", k: number) => (x: number) => (which === "u" ? setU : setV)((old) => old.map((y, i) => (i === k ? x : y)) as V3);
  return (
    <WidgetCard title="The cross product" subtitle="u × v is perpendicular to both, and its length is the area of the parallelogram they span">
      <Row gap={10}>{[0, 1, 2].map((k) => <Slider key={k} label={`u${"₁₂₃"[k]}`} value={u[k]} min={-3} max={3} step={0.5} onChange={setC("u", k)} color={C.blue} format={f} />)}</Row>
      <Row gap={10}>{[0, 1, 2].map((k) => <Slider key={k} label={`v${"₁₂₃"[k]}`} value={v[k]} min={-3} max={3} step={0.5} onChange={setC("v", k)} color={C.red} format={f} />)}</Row>
      <Segmented label="order" options={[{ value: 0, label: "u × v" }, { value: 1, label: "v × u" }]} value={swap ? 1 : 0} onChange={(k) => setSwap(k === 1)} />
      <ViewSliders az={az} el={el} setAz={setAz} setEl={setEl} />
      <Space az={az} el={el} label="u, v, the parallelogram and the cross product" s={38} len={4.5}>
        {(P) => <>
          <Poly3 P={P} pts={[[0, 0, 0], u, add(u, v), v]} color={C.amber} op={0.3} />
          <Arrow3 P={P} a={[0, 0, 0]} b={u} color={C.blue} label="u" />
          <Arrow3 P={P} a={[0, 0, 0]} b={v} color={C.red} label="v" />
          {area > 0 && <Arrow3 P={P} a={[0, 0, 0]} b={area > 4.5 ? sc(4.5 / area, w) : w} color={C.green} w={3.6} label={swap ? "v×u" : "u×v"} />}
        </>}
      </Space>
      <Readout tone={area === 0 ? "amber" : "green"}>
        <MathText block html={`\\(${swap ? "\\vec v\\times\\vec u" : "\\vec u\\times\\vec v"}=${col(w)}\\), \\(\\|\\cdot\\|\\approx${f(area)}\\) = area of the shaded parallelogram${area > 4.5 ? " (arrow drawn shorter to fit)" : ""}.`} />
        <MathText block html={`Check: \\(${col(w)}\\cdot\\vec u=${f(dot(w, u))}\\) and \\(${col(w)}\\cdot\\vec v=${f(dot(w, v))}\\) — perpendicular to both.`} />
        <MathText block html={area === 0 ? `The vectors are parallel (or one is zero): no parallelogram, so the cross product is \\(\\vec 0\\).` : swap ? `Swapping the order flips the arrow: \\(\\vec v\\times\\vec u=-(\\vec u\\times\\vec v)\\).` : `Right-hand rule: fingers along \\(\\vec u\\), curl toward \\(\\vec v\\), thumb gives \\(\\vec u\\times\\vec v\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.6 normal form of a plane */

export function PlaneNormalLab({ init = { n: [1, 2, 2] as V3, d: 6 } }: { init?: { n: V3; d: number } }) {
  const [n, setN] = useState<V3>(init.n), [d, setD] = useState(init.d);
  const [az, setAz] = useState(35), [el, setEl] = useState(22);
  const nn = dot(n, n), ok = nn > 0;
  const foot: V3 = ok ? sc(d / nn, n) : [0, 0, 0];
  // two directions in the plane: integer vectors perpendicular to n
  const cand: V3[] = [[n[1], -n[0], 0], [n[2], 0, -n[0]], [0, n[2], -n[1]]].filter((c) => norm(c) > 0) as V3[];
  const u = cand[0] ?? [1, 0, 0], v0 = cross(n, u), g = v0.reduce((a, x) => gcd(a, x), 0) || 1, v = sc(1 / g, v0);
  const e1 = sc(1 / norm(u), u), e2 = sc(1 / Math.max(norm(v), 1e-9), v), K = 2.6;
  const corners: V3[] = ok ? [[-K, -K], [K, -K], [K, K], [-K, K]].map(([s, t]) => add(foot, add(sc(s, e1), sc(t, e2)))) : [];
  const setC = (k: number) => (x: number) => setN((old) => old.map((y, i) => (i === k ? x : y)) as V3);
  const term = (c: number, x: string, first: boolean) => (c === 0 ? "" : `${c < 0 ? "-" : first ? "" : "+"}${Math.abs(c) === 1 ? "" : f(Math.abs(c))}${x}`);
  const eq = [term(n[0], "x_1", true), term(n[1], "x_2", !n[0]), term(n[2], "x_3", !n[0] && !n[1])].join("") || "0";
  const ints = ["x_1", "x_2", "x_3"].map((x, i) => (n[i] !== 0 ? `${x}\\text{-intercept } ${f(d / n[i])}` : `\\text{no } ${x}\\text{-intercept}`)).join(",\\ ");
  return (
    <WidgetCard title="A plane from its normal vector" subtitle="n · (x − p) = 0, or n₁x₁ + n₂x₂ + n₃x₃ = d: one point and one perpendicular direction">
      <Row gap={10}>{[0, 1, 2].map((k) => <Slider key={k} label={`n${"₁₂₃"[k]}`} value={n[k]} min={-3} max={3} onChange={setC(k)} color={C.green} />)}</Row>
      <Slider label="d" value={d} min={-8} max={8} onChange={setD} color={C.violet} />
      <ViewSliders az={az} el={el} setAz={setAz} setEl={setEl} />
      <Space az={az} el={el} label="a plane and its normal vector" s={30}>
        {(P) => ok ? <>
          <Poly3 P={P} pts={corners} color={C.violet} op={0.2} />
          <Arrow3 P={P} a={[0, 0, 0]} b={foot} color={C.faint} w={1.4} dash />
          <Arrow3 P={P} a={foot} b={add(foot, sc(3 / Math.sqrt(nn), n))} color={C.green} w={3.8} label="n" />
          <Dot3 P={P} p={foot} color={C.violet} />
        </> : null}
      </Space>
      <Readout tone={ok ? "blue" : "amber"}>
        {ok ? <>
          <MathText block html={`Scalar equation: \\(${eq}=${f(d)}\\) \\((${ints})\\).`} />
          <MathText block html={`Distance from the origin: \\(\\dfrac{|d|}{\\|\\vec n\\|}=\\dfrac{${f(Math.abs(d))}}{${f(Math.sqrt(nn))}}\\approx${f(Math.abs(d) / Math.sqrt(nn))}\\). Changing \\(d\\) slides the plane along \\(\\vec n\\); the tilt never changes.`} />
          <MathText block html={`Two directions in the plane (each has dot product 0 with \\(\\vec n\\)): \\(${tup(u)}\\) and \\(${tup(v)}\\).`} />
        </> : <MathText block html={`\\(\\vec n=\\vec 0\\) is not a normal vector: \\(0x_1+0x_2+0x_3=d\\) is not a plane.`} />}
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.7 projections */

export function ProjectionLab({ init = { mode: "vector" as "vector" | "plane" } }: { init?: { mode: "vector" | "plane" } }) {
  const [mode, setMode] = useState<"vector" | "plane">(init.mode);
  const [ux, setUx] = useState(2), [uy, setUy] = useState(4), [va, setVa] = useState(15);
  const [x, setX] = useState<V3>([2, 1, 3]);
  const [az, setAz] = useState(35), [el, setEl] = useState(22);
  if (mode === "vector") {
    const u: XY = [ux, uy], v: XY = [5 * Math.cos(va * RAD), 5 * Math.sin(va * RAD)];
    const k = dot(u, v) / dot(v, v), p: XY = [k * v[0], k * v[1]], perp: XY = [u[0] - p[0], u[1] - p[1]];
    return (
      <WidgetCard title="Projection onto a vector" subtitle="u = proj_v u + perp_v u: one part along v, one part perpendicular to v">
        <Segmented options={[{ value: "vector", label: "onto a vector (R²)" }, { value: "plane", label: "onto a plane (R³)" }]} value={mode} onChange={setMode} />
        <Row gap={10}><Slider label="u₁" value={ux} min={-5} max={5} step={0.5} onChange={setUx} color={C.blue} format={f} /><Slider label="u₂" value={uy} min={-5} max={5} step={0.5} onChange={setUy} color={C.blue} format={f} /></Row>
        <Slider label="direction of v (°)" value={va} min={0} max={180} step={5} onChange={setVa} color={C.red} />
        <Plane view={{ xmin: -6, xmax: 6, ymin: -4, ymax: 6 }} label="u, its projection onto v and the perpendicular part" step={1}>
          {(X, Y) => <>
            <line x1={X(-12 * Math.cos(va * RAD))} y1={Y(-12 * Math.sin(va * RAD))} x2={X(12 * Math.cos(va * RAD))} y2={Y(12 * Math.sin(va * RAD))} stroke={C.redSoft} strokeWidth={4} />
            <Arr2 X={X} Y={Y} a={[0, 0]} b={v} color={C.red} w={2} dash label="v" />
            <Arr2 X={X} Y={Y} a={[0, 0]} b={u} color={C.blue} label="u" />
            <Arr2 X={X} Y={Y} a={[0, 0]} b={p} color={C.green} w={4} label="proj" />
            <Arr2 X={X} Y={Y} a={p} b={u} color={C.amber} w={2.6} label="perp" />
          </>}
        </Plane>
        <Readout tone="green">
          <MathText block html={`\\(\\operatorname{proj}_{\\vec v}\\vec u=\\dfrac{\\vec u\\cdot\\vec v}{\\vec v\\cdot\\vec v}\\,\\vec v\\approx${tup(p)}\\), and \\(\\operatorname{perp}_{\\vec v}\\vec u=\\vec u-\\operatorname{proj}_{\\vec v}\\vec u\\approx${tup(perp)}\\).`} />
          <MathText block html={`Check: \\(\\operatorname{perp}\\cdot\\vec v\\approx${f(dot(perp, v))}\\). ${k < 0 ? "The projection points opposite to v because the angle is obtuse." : "The amber part is the shortest path from the tip of u to the line of v."}`} />
        </Readout>
      </WidgetCard>
    );
  }
  const n: V3 = [0, 0.6, 1], k = dot(x, n) / dot(n, n), pn = sc(k, n), pp = add(x, sc(-1, pn));
  const e1: V3 = [1, 0, 0], e2 = cross(n, e1), m = 3.6;
  const corners: V3[] = [[-m, -m], [m, -m], [m, m], [-m, m]].map(([s, t]) => add(sc(s, e1), sc(t / norm(e2), e2)));
  const setC = (j: number) => (val: number) => setX((old) => old.map((y, i) => (i === j ? val : y)) as V3);
  return (
    <WidgetCard title="Projection onto a plane" subtitle="Subtract the normal part: proj_P x = x − proj_n x">
      <Segmented options={[{ value: "vector", label: "onto a vector (R²)" }, { value: "plane", label: "onto a plane (R³)" }]} value={mode} onChange={setMode} />
      <Row gap={10}>{[0, 1, 2].map((j) => <Slider key={j} label={`x${"₁₂₃"[j]}`} value={x[j]} min={-3} max={4} step={0.5} onChange={setC(j)} color={C.blue} format={f} />)}</Row>
      <ViewSliders az={az} el={el} setAz={setAz} setEl={setEl} />
      <Space az={az} el={el} label="a vector, its projection onto a plane through O, and the normal part" s={30}>
        {(P) => <>
          <Poly3 P={P} pts={corners} color={C.violet} op={0.16} />
          <Arrow3 P={P} a={[0, 0, 0]} b={sc(1.6, n)} color={C.faint} w={2} label="n" />
          <Arrow3 P={P} a={[0, 0, 0]} b={x} color={C.blue} label="x" />
          <Arrow3 P={P} a={[0, 0, 0]} b={pp} color={C.green} w={3.6} />
          <Arrow3 P={P} a={pp} b={x} color={C.amber} w={2.6} />
        </>}
      </Space>
      <Readout tone="green">
        <MathText block html={`Plane \\(3x_2+5x_3=0\\), normal \\(\\vec n=(0,3,5)\\). \\(\\operatorname{proj}_{\\vec n}\\vec x\\approx${tup(pn)}\\) (amber), so \\(\\operatorname{proj}_{P}\\vec x=\\vec x-\\operatorname{proj}_{\\vec n}\\vec x\\approx${tup(pp)}\\) (green).`} />
        <MathText block html={`The distance from the tip of \\(\\vec x\\) to the plane is \\(\\|\\operatorname{proj}_{\\vec n}\\vec x\\|\\approx${f(norm(pn))}\\).`} />
      </Readout>
    </WidgetCard>
  );
}
