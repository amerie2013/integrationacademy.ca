"use client";

// MCV4U chapter 7 (Cartesian vectors) explorers: components in two-space, the dot product and the angle between
// vectors, projections and work, points and vectors in three-space (rotatable view), the cross product, and torque.

import { useState, type ReactNode } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { Plane, r2, type View } from "./Systems";

type XY = [number, number];
type V3 = [number, number, number];
type Map2 = (v: number) => number;
const RAD = Math.PI / 180;
const V: View = { xmin: -6.5, xmax: 6.5, ymin: -5, ymax: 5 }; // equal scale on the 520 × 400 plane
const mag2 = ([x, y]: XY) => Math.hypot(x, y);
const ang2 = ([x, y]: XY) => { const a = Math.atan2(y, x) / RAD; return a < 0 ? a + 360 : a; };
const dot3 = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const mag3 = (a: V3) => Math.sqrt(dot3(a, a));
const cross = (a: V3, b: V3): V3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const fmt = (v: number) => (Math.abs(v) < 0.005 ? "0" : String(r2(v)));
const vec = (a: number[]) => `[${a.map(fmt).join(", ")}]`;

function Arrow({ X, Y, from, to, color, label, width = 3, dash }: { X: Map2; Y: Map2; from: XY; to: XY; color: string; label?: string; width?: number; dash?: boolean }) {
  const x1 = X(from[0]), y1 = Y(from[1]), x2 = X(to[0]), y2 = Y(to[1]);
  const L = Math.hypot(x2 - x1, y2 - y1);
  if (L < 1) return null;
  const ux = (x2 - x1) / L, uy = (y2 - y1) / L, h = Math.min(13, L * 0.45), bx = x2 - ux * h, by = y2 - uy * h;
  return <g>
    <line x1={x1} y1={y1} x2={bx} y2={by} stroke={color} strokeWidth={width} strokeDasharray={dash ? "7 5" : undefined} />
    <polygon points={`${x2},${y2} ${bx - uy * h * 0.42},${by + ux * h * 0.42} ${bx + uy * h * 0.42},${by - ux * h * 0.42}`} fill={color} />
    {label && <text x={(x1 + x2) / 2 - uy * 15} y={(y1 + y2) / 2 + ux * 15 + 4} fontSize={14} fontWeight={700} textAnchor="middle" fill={color} stroke="#fff" strokeWidth={3} paintOrder="stroke">{label}</text>}
  </g>;
}

/* ---------------------------------------------------------------- 7.1 Cartesian vectors in two-space */

export function CartesianLab({ init = { a: 3, b: 2, c: -1, d: 3 } }: { init?: { a: number; b: number; c: number; d: number } }) {
  const [a, setA] = useState(init.a), [b, setB] = useState(init.b), [c, setC] = useState(init.c), [d, setD] = useState(init.d);
  const [mode, setMode] = useState<"one" | "sum" | "diff">("one");
  const u: XY = [a, b], v: XY = [c, d], s: XY = mode === "diff" ? [a - c, b - d] : [a + c, b + d];
  return (
    <WidgetCard title="Vectors in Cartesian form" subtitle="A vector [a, b] = a·i + b·j: a units across and b units up. Add or subtract by components">
      <Row gap={10}><Slider label="u: a" value={a} min={-6} max={6} step={0.5} onChange={setA} color={C.violet} /><Slider label="u: b" value={b} min={-4.5} max={4.5} step={0.5} onChange={setB} color={C.violet} /></Row>
      {mode !== "one" && <Row gap={10}><Slider label="v: c" value={c} min={-6} max={6} step={0.5} onChange={setC} color={C.blue} /><Slider label="v: d" value={d} min={-4.5} max={4.5} step={0.5} onChange={setD} color={C.blue} /></Row>}
      <Segmented options={[{ value: "one", label: "one vector" }, { value: "sum", label: "u + v" }, { value: "diff", label: "u − v" }]} value={mode} onChange={setMode} />
      <Plane view={V} label="u (violet), v (blue), result (red)" step={1}>
        {(X, Y) => <>
          {mode === "one" && <><Arrow X={X} Y={Y} from={[0, 0]} to={[a, 0]} color={C.blue} width={2} dash /><Arrow X={X} Y={Y} from={[a, 0]} to={u} color={C.red} width={2} dash /></>}
          <Arrow X={X} Y={Y} from={[0, 0]} to={u} color={C.violet} label="u" />
          {mode !== "one" && <><Arrow X={X} Y={Y} from={u} to={s} color={C.blue} label={mode === "diff" ? "−v" : "v"} width={2.4} /><Arrow X={X} Y={Y} from={[0, 0]} to={s} color={C.red} width={3.4} label={mode === "diff" ? "u − v" : "u + v"} /></>}
        </>}
      </Plane>
      <Readout tone="blue">
        {mode === "one"
          ? <MathText block html={`\\(\\vec u=${vec(u)}=${fmt(a)}\\vec i+${fmt(b)}\\vec j\\). \\(|\\vec u|=\\sqrt{${fmt(a)}^2+${fmt(b)}^2}=${fmt(mag2(u))}\\), at \\(${fmt(ang2(u))}^\\circ\\) from the positive x-axis.${mag2(u) > 0 ? ` Unit vector: \\(${vec([a / mag2(u), b / mag2(u)])}\\).` : ""}`} />
          : <MathText block html={`\\(${vec(u)}${mode === "diff" ? "-" : "+"}${vec(v)}=${vec(s)}\\), magnitude \\(${fmt(mag2(s))}\\).`} />}
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 7.2 the dot product */

export function DotLab({ init = { m1: 4, a1: 20, m2: 3, a2: 80 } }: { init?: { m1: number; a1: number; m2: number; a2: number } }) {
  const [m1, setM1] = useState(init.m1), [a1, setA1] = useState(init.a1), [m2, setM2] = useState(init.m2), [a2, setA2] = useState(init.a2);
  const u: XY = [m1 * Math.cos(a1 * RAD), m1 * Math.sin(a1 * RAD)], v: XY = [m2 * Math.cos(a2 * RAD), m2 * Math.sin(a2 * RAD)];
  const d = u[0] * v[0] + u[1] * v[1];
  const th = Math.acos(Math.max(-1, Math.min(1, d / (m1 * m2)))) / RAD;
  const tone = Math.abs(d) < 0.05 ? "green" : d > 0 ? "blue" : "red";
  return (
    <WidgetCard title="The dot product" subtitle="u · v = |u||v| cos θ = u₁v₁ + u₂v₂ — a scalar that is positive, zero or negative as θ is acute, right or obtuse">
      <Row gap={10}><Slider label="|u|" value={m1} min={0.5} max={5} step={0.1} onChange={setM1} color={C.violet} /><Slider label="u angle (°)" value={a1} min={0} max={359} step={1} onChange={setA1} color={C.violet} /></Row>
      <Row gap={10}><Slider label="|v|" value={m2} min={0.5} max={5} step={0.1} onChange={setM2} color={C.blue} /><Slider label="v angle (°)" value={a2} min={0} max={359} step={1} onChange={setA2} color={C.blue} /></Row>
      <Plane view={V} label="u (violet) and v (blue)" step={1}>
        {(X, Y) => <>
          <Arrow X={X} Y={Y} from={[0, 0]} to={u} color={C.violet} label="u" />
          <Arrow X={X} Y={Y} from={[0, 0]} to={v} color={C.blue} label="v" />
        </>}
      </Plane>
      <Readout tone={tone}>
        <MathText block html={`\\(\\vec u=${vec(u)}\\), \\(\\vec v=${vec(v)}\\). Components: \\((${fmt(u[0])})(${fmt(v[0])})+(${fmt(u[1])})(${fmt(v[1])})=${fmt(d)}\\). Geometry: \\(${fmt(m1)}\\times${fmt(m2)}\\times\\cos${fmt(th)}^\\circ=${fmt(d)}\\).`} />
        <MathText block html={Math.abs(d) < 0.05 ? "θ = 90°: the vectors are perpendicular and the dot product is 0." : d > 0 ? "θ is acute, so the dot product is positive." : "θ is obtuse, so the dot product is negative."} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 7.3 projections and work */

export function ProjectionLab({ init = { mode: "proj" as "proj" | "work" } }: { init?: { mode: "proj" | "work" } }) {
  const [mode, setMode] = useState<"proj" | "work">(init.mode);
  const [m, setM] = useState(4.5), [th, setTh] = useState(40), [bm, setBm] = useState(5);
  const [F, setF] = useState(40), [ang, setAng] = useState(30), [dist, setDist] = useState(25);
  if (mode === "proj") {
    const a: XY = [m * Math.cos(th * RAD), m * Math.sin(th * RAD)], b: XY = [bm, 0];
    const sp = (a[0] * b[0] + a[1] * b[1]) / bm, P: XY = [sp, 0];
    return (
      <WidgetCard title="Projection of a onto b" subtitle="The scalar projection a · b / |b| is the signed length of a's shadow on b; the vector projection points along b">
        <Segmented options={[{ value: "proj", label: "projection" }, { value: "work", label: "work done by a force" }]} value={mode} onChange={setMode} />
        <Row gap={10}><Slider label="|a|" value={m} min={0.5} max={6} step={0.1} onChange={setM} color={C.violet} /><Slider label="angle between (°)" value={th} min={0} max={180} step={1} onChange={setTh} color={C.amber} /></Row>
        <Slider label="|b|" value={bm} min={1} max={6} step={0.1} onChange={setBm} color={C.blue} />
        <Plane view={V} label="a (violet), b (blue), projection of a onto b (red)" step={1}>
          {(X, Y) => <>
            <line x1={X(-6.5)} y1={Y(0)} x2={X(6.5)} y2={Y(0)} stroke={C.faint} strokeDasharray="4 4" />
            <line x1={X(a[0])} y1={Y(a[1])} x2={X(P[0])} y2={Y(0)} stroke={C.faint} strokeWidth={1.5} strokeDasharray="5 3" />
            <Arrow X={X} Y={Y} from={[0, 0]} to={b} color={C.blue} label="b" width={2.4} />
            <Arrow X={X} Y={Y} from={[0, 0]} to={a} color={C.violet} label="a" />
            <Arrow X={X} Y={Y} from={[0, 0.0]} to={P} color={C.red} width={4} />
          </>}
        </Plane>
        <Readout tone="blue">
          <MathText block html={`Scalar projection \\(\\frac{\\vec a\\cdot\\vec b}{|\\vec b|}=|\\vec a|\\cos\\theta=${fmt(m)}\\cos${th}^\\circ=${fmt(sp)}\\). Vector projection \\(${fmt(sp)}\\,\\frac{\\vec b}{|\\vec b|}=${vec(P)}\\). Changing \\(|\\vec b|\\) does not change the projection — only b's direction matters.`} />
        </Readout>
      </WidgetCard>
    );
  }
  const W = F * dist * Math.cos(ang * RAD);
  const k = 0.1, f: XY = [F * k * Math.cos(ang * RAD), F * k * Math.sin(ang * RAD)];
  return (
    <WidgetCard title="Work done by a force" subtitle="W = F · d = |F||d| cos θ: only the part of the force along the motion does work">
      <Segmented options={[{ value: "proj", label: "projection" }, { value: "work", label: "work done by a force" }]} value={mode} onChange={setMode} />
      <Row gap={10}><Slider label="|F| (N)" value={F} min={5} max={60} step={1} onChange={setF} color={C.violet} /><Slider label="handle angle (°)" value={ang} min={0} max={90} step={1} onChange={setAng} color={C.amber} /></Row>
      <Slider label="distance (m)" value={dist} min={1} max={50} step={1} onChange={setDist} color={C.blue} />
      <Plane view={V} label="pulling force (violet), its part along the motion (red); one grid unit = 10 N" step={1}>
        {(X, Y) => <>
          <rect x={X(-5.5)} y={Y(-1)} width={X(-3.5) - X(-5.5)} height={Y(-2.2) - Y(-1)} fill="#e0e7ff" stroke={C.violet} />
          <Arrow X={X} Y={Y} from={[-3.5, -1.2]} to={[-3.5 + f[0], -1.2 + f[1]]} color={C.violet} label="F" />
          <Arrow X={X} Y={Y} from={[-3.5, -1.2]} to={[-3.5 + f[0], -1.2]} color={C.red} width={2.4} />
          <Arrow X={X} Y={Y} from={[-5.5, -3]} to={[6, -3]} color={C.blue} width={2} label="displacement" />
        </>}
      </Plane>
      <Readout tone="green">
        <MathText block html={`\\(W=${F}\\times${dist}\\times\\cos${ang}^\\circ\\approx${fmt(W)}\\) J. A flatter handle (smaller angle) does more work with the same pull; at \\(90^\\circ\\) the pull does no work at all.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- three-space viewer helpers */

function Space({ az, el, children, label }: { az: number; el: number; children: (P: (p: V3) => XY) => ReactNode; label: string }) {
  const W = 520, H = 400, s = 34, cx = 260, cy = 230;
  const P = ([x, y, z]: V3): XY => {
    const sx = -x * Math.sin(az * RAD) + y * Math.cos(az * RAD);
    const depth = x * Math.cos(az * RAD) + y * Math.sin(az * RAD);
    const sy = z * Math.cos(el * RAD) - depth * Math.sin(el * RAD);
    return [cx + s * sx, cy - s * sy];
  };
  const ax: [V3, string][] = [[[5.5, 0, 0], "x"], [[0, 5.5, 0], "y"], [[0, 0, 5.5], "z"]];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", maxWidth: 560, display: "block", margin: "8px auto", background: "#fff", border: `1px solid ${C.line}`, borderRadius: 8 }} role="img" aria-label={label}>
      {ax.map(([p, t]) => { const a = P(p), b = P([-p[0] * 0.4, -p[1] * 0.4, -p[2] * 0.4]), o = P([0, 0, 0]); return <g key={t}>
        <line x1={o[0]} y1={o[1]} x2={b[0]} y2={b[1]} stroke={C.faint} strokeDasharray="4 4" />
        <line x1={o[0]} y1={o[1]} x2={a[0]} y2={a[1]} stroke={C.muted} strokeWidth={1.6} />
        <text x={a[0] + 6} y={a[1] + 4} fontSize={15} fontWeight={700} fill={C.muted}>{t}</text></g>; })}
      {children(P)}
    </svg>
  );
}
function Arrow3({ P, from = [0, 0, 0], to, color, label, width = 3, dash }: { P: (p: V3) => XY; from?: V3; to: V3; color: string; label?: string; width?: number; dash?: boolean }) {
  const a = P(from), b = P(to);
  return <Arrow X={(x) => x} Y={(y) => y} from={a} to={b} color={color} label={label} width={width} dash={dash} />;
}
const ViewSliders = ({ az, el, setAz, setEl }: { az: number; el: number; setAz: (v: number) => void; setEl: (v: number) => void }) => (
  <Row gap={10}><Slider label="turn view (°)" value={az} min={0} max={90} step={1} onChange={setAz} color={C.faint} /><Slider label="tilt view (°)" value={el} min={5} max={60} step={1} onChange={setEl} color={C.faint} /></Row>
);

/* ---------------------------------------------------------------- 7.4 points and vectors in three-space */

export function Space3Lab({ init = { x: 3, y: 4, z: 2 } }: { init?: { x: number; y: number; z: number } }) {
  const [x, setX] = useState(init.x), [y, setY] = useState(init.y), [z, setZ] = useState(init.z);
  const [az, setAz] = useState(30), [el, setEl] = useState(25);
  const v: V3 = [x, y, z], m = mag3(v);
  const edge = (p: V3, q: V3, P: (p: V3) => XY, k: string) => { const a = P(p), b = P(q); return <line key={k} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={C.faint} strokeDasharray="4 3" />; };
  return (
    <WidgetCard title="Points and vectors in three-space" subtitle="A point P(x, y, z) sits at a corner of a box; the position vector OP = [x, y, z] has length √(x² + y² + z²)">
      <Row gap={10}>
        <Slider label="x" value={x} min={-4} max={5} step={0.5} onChange={setX} color={C.red} />
        <Slider label="y" value={y} min={-4} max={5} step={0.5} onChange={setY} color={C.green} />
        <Slider label="z" value={z} min={-4} max={5} step={0.5} onChange={setZ} color={C.blue} />
      </Row>
      <ViewSliders az={az} el={el} setAz={setAz} setEl={setEl} />
      <Space az={az} el={el} label="position vector OP with its guide box">
        {(P) => <>
          {edge([x, 0, 0], [x, y, 0], P, "a")}{edge([0, y, 0], [x, y, 0], P, "b")}{edge([x, y, 0], [x, y, z], P, "c")}
          {edge([0, 0, z], [x, 0, z], P, "d")}{edge([0, 0, z], [0, y, z], P, "e")}{edge([x, 0, z], [x, y, z], P, "f")}{edge([0, y, z], [x, y, z], P, "g")}{edge([x, 0, 0], [x, 0, z], P, "h")}{edge([0, y, 0], [0, y, z], P, "i")}
          <Arrow3 P={P} to={v} color={C.violet} label="OP" />
          <circle cx={P(v)[0]} cy={P(v)[1]} r={5} fill={C.violet} />
        </>}
      </Space>
      <Readout tone="blue">
        <MathText block html={`\\(\\overrightarrow{OP}=${vec(v)}=${fmt(x)}\\vec i+${fmt(y)}\\vec j+${fmt(z)}\\vec k\\), \\(|\\overrightarrow{OP}|=\\sqrt{${fmt(x * x)}+${fmt(y * y)}+${fmt(z * z)}}=${fmt(m)}\\).`} />
        {m > 0 && <MathText block html={`Direction angles: \\(\\alpha=${fmt(Math.acos(x / m) / RAD)}^\\circ\\), \\(\\beta=${fmt(Math.acos(y / m) / RAD)}^\\circ\\), \\(\\gamma=${fmt(Math.acos(z / m) / RAD)}^\\circ\\) with the x-, y- and z-axes. Turn the view to see the box from other sides.`} />}
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 7.5 the cross product */

export function CrossLab({ init = { a: [3, 0, 0] as V3, b: [1, 3, 0] as V3 } }: { init?: { a: V3; b: V3 } }) {
  const [a, setA] = useState<V3>(init.a), [b, setB] = useState<V3>(init.b);
  const [rev, setRev] = useState(false);
  const [az, setAz] = useState(35), [el, setEl] = useState(22);
  const c = rev ? cross(b, a) : cross(a, b), area = mag3(c);
  const scale = area > 6 ? 6 / area : 1;
  const set = (which: "a" | "b", i: number) => (v: number) => (which === "a" ? setA : setB)((p) => { const q = [...p] as V3; q[i] = v; return q; });
  return (
    <WidgetCard title="The cross product" subtitle="a × b is perpendicular to both a and b (right-hand rule); its length is the area of the parallelogram they span">
      <Row gap={10}>{[0, 1, 2].map((i) => <Slider key={"a" + i} label={`a${"xyz"[i]}`} value={a[i]} min={-4} max={4} step={0.5} onChange={set("a", i)} color={C.violet} />)}</Row>
      <Row gap={10}>{[0, 1, 2].map((i) => <Slider key={"b" + i} label={`b${"xyz"[i]}`} value={b[i]} min={-4} max={4} step={0.5} onChange={set("b", i)} color={C.blue} />)}</Row>
      <Segmented options={[{ value: "ab", label: "a × b" }, { value: "ba", label: "b × a" }]} value={rev ? "ba" : "ab"} onChange={(k) => setRev(k === "ba")} />
      <ViewSliders az={az} el={el} setAz={setAz} setEl={setEl} />
      <Space az={az} el={el} label="a (violet), b (blue), the cross product (red) and the parallelogram">
        {(P) => { const o = P([0, 0, 0]), pa = P(a), pb = P(b), pab = P([a[0] + b[0], a[1] + b[1], a[2] + b[2]]); return <>
          <polygon points={`${o[0]},${o[1]} ${pa[0]},${pa[1]} ${pab[0]},${pab[1]} ${pb[0]},${pb[1]}`} fill="#ede9fe" fillOpacity={0.7} stroke={C.faint} />
          <Arrow3 P={P} to={a} color={C.violet} label="a" />
          <Arrow3 P={P} to={b} color={C.blue} label="b" />
          <Arrow3 P={P} to={[c[0] * scale, c[1] * scale, c[2] * scale]} color={C.red} label={rev ? "b × a" : "a × b"} width={3.4} />
        </>; }}
      </Space>
      <Readout tone={area < 0.01 ? "amber" : "green"}>
        <MathText block html={`\\(${rev ? "\\vec b\\times\\vec a" : "\\vec a\\times\\vec b"}=${vec(c)}\\), length \\(${fmt(area)}\\) = area of the parallelogram${scale < 1 ? " (arrow shortened to fit)" : ""}. Checks: \\(${vec(c)}\\cdot\\vec a=${fmt(dot3(c, a))}\\), \\(${vec(c)}\\cdot\\vec b=${fmt(dot3(c, b))}\\).`} />
        <MathText block html={area < 0.01 ? "a and b are collinear (or one is zero): the cross product is the zero vector." : rev ? "Swapping the order reverses the direction: b × a = −(a × b)." : "Curl the fingers of your right hand from a to b: your thumb points along a × b."} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 7.6 torque */

export function TorqueLab({ init = { r: 0.3, F: 50, th: 70 } }: { init?: { r: number; F: number; th: number } }) {
  const [r, setR] = useState(init.r), [F, setF] = useState(init.F), [th, setTh] = useState(init.th);
  const T = r * F * Math.sin(th * RAD);
  const L = r * 14, tip: XY = [-4 + L, 0], f: XY = [(F / 15) * Math.cos(th * RAD), (F / 15) * Math.sin(th * RAD)];
  return (
    <WidgetCard title="Torque on a wrench" subtitle="τ = r × F; its magnitude |r||F| sin θ is largest when the force is perpendicular to the handle">
      <Row gap={10}>
        <Slider label="handle length r (m)" value={r} min={0.1} max={0.6} step={0.01} onChange={setR} color={C.violet} />
        <Slider label="force |F| (N)" value={F} min={10} max={80} step={1} onChange={setF} color={C.red} />
      </Row>
      <Slider label="angle between handle and force (°)" value={th} min={0} max={180} step={1} onChange={setTh} color={C.amber} />
      <Plane view={V} label="wrench handle r (violet) and applied force F (red)" step={1}>
        {(X, Y) => <>
          <circle cx={X(-4)} cy={Y(0)} r={14} fill="#f1f5f9" stroke={C.ink} />
          <Arrow X={X} Y={Y} from={[-4, 0]} to={tip} color={C.violet} label="r" width={6} />
          <Arrow X={X} Y={Y} from={tip} to={[tip[0] + f[0], f[1]]} color={C.red} label="F" />
          <line x1={X(tip[0] + f[0])} y1={Y(f[1])} x2={X(tip[0] + f[0])} y2={Y(0)} stroke={C.faint} strokeDasharray="4 3" />
        </>}
      </Plane>
      <Readout tone="green">
        <MathText block html={`\\(|\\vec\\tau|=${fmt(r)}\\times${F}\\times\\sin${th}^\\circ\\approx${fmt(T)}\\) N·m. Only the part of the force perpendicular to the handle, \\(${F}\\sin${th}^\\circ\\approx${fmt(F * Math.sin(th * RAD))}\\) N, turns the bolt. The torque vector points along the bolt's axis (out of the page for a counterclockwise turn).`} />
      </Readout>
    </WidgetCard>
  );
}
