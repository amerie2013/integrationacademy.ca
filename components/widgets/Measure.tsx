"use client";

// Chapter 5 (geometry and measurement) explorers: Archimedes' polygons for π, triangle angles,
// circle angles, the metric/imperial unit ladder, the Pythagorean theorem, scaling a shape,
// optimizing a rectangle, volumes of solids and nets for surface area.

import { useState, type ReactNode } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";

const r2 = (v: number, d = 2) => { const k = 10 ** d; const r = Math.round(v * k) / k; return r < 0 ? `−${-r}` : String(r); };
const tex = (v: number, d = 2) => { const k = 10 ** d; const r = Math.round(v * k) / k; return String(r).replace(/^(-?\d+)(\d{3})(?=\.|$)/, "$1\\,$2"); };
const rad = (dg: number) => (dg * Math.PI) / 180;

/** SVG canvas with world coordinates (y up). */
function Canvas({ view, children, label, w = 520, h = 340, stretch = false }: { view: { xmin: number; xmax: number; ymin: number; ymax: number }; children: (X: (x: number) => number, Y: (y: number) => number, s: number) => ReactNode; label: string; w?: number; h?: number; stretch?: boolean }) {
  const { xmin, xmax, ymin, ymax } = view;
  const s = Math.min(w / (xmax - xmin), h / (ymax - ymin));
  // graphs (stretch) fill the box with separate x and y scales; drawings keep true shapes
  const sx = stretch ? (w - 20) / (xmax - xmin) : s, sy = stretch ? (h - 20) / (ymax - ymin) : s;
  const ox = (w - (xmax - xmin) * sx) / 2, oy = (h - (ymax - ymin) * sy) / 2;
  const X = (x: number) => ox + (x - xmin) * sx, Y = (y: number) => h - oy - (y - ymin) * sy;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", maxWidth: w + 40, display: "block", margin: "8px auto" }} role="img" aria-label={label}>
      <rect x={0} y={0} width={w} height={h} fill="#fff" />
      {children(X, Y, s)}
    </svg>
  );
}
const pts = (X: (x: number) => number, Y: (y: number) => number, p: [number, number][]) => p.map(([x, y]) => `${X(x).toFixed(1)},${Y(y).toFixed(1)}`).join(" ");
const Lbl = ({ x, y, children, color = C.ink, size = 14, anchor = "middle" }: { x: number; y: number; children: ReactNode; color?: string; size?: number; anchor?: "start" | "middle" | "end" }) => (
  <text x={x} y={y} fontSize={size} fontWeight={700} fill={color} textAnchor={anchor} stroke="#fff" strokeWidth={3} paintOrder="stroke">{children}</text>
);
/** angle arc at Q from direction a1 sweeping d (radians, ccw positive in world) */
function arcPath(X: (x: number) => number, Y: (y: number) => number, s: number, q: [number, number], r: number, a1: number, d: number) {
  const e1 = [q[0] + r * Math.cos(a1), q[1] + r * Math.sin(a1)], e2 = [q[0] + r * Math.cos(a1 + d), q[1] + r * Math.sin(a1 + d)];
  return `M${X(e1[0])},${Y(e1[1])} A${r * s},${r * s} 0 ${Math.abs(d) > Math.PI ? 1 : 0} ${d > 0 ? 0 : 1} ${X(e2[0])},${Y(e2[1])}`;
}
const cell = { padding: "4px 10px", border: `1px solid ${C.line}`, textAlign: "center" as const, fontVariantNumeric: "tabular-nums" as const };
const th = { ...cell, background: C.panel, fontWeight: 700 };

/* ---------------------------------------------------------------- 5.1 Archimedes and π */

export function PiPolygon() {
  const [n, setN] = useState(6);
  const inner = n * Math.sin(Math.PI / n), outer = n * Math.tan(Math.PI / n); // perimeter ÷ diameter
  const ring = (R: number) => Array.from({ length: n }, (_, i) => [R * Math.cos((2 * Math.PI * i) / n + Math.PI / 2), R * Math.sin((2 * Math.PI * i) / n + Math.PI / 2)] as [number, number]);
  const Rout = 1 / Math.cos(Math.PI / n);
  return (
    <WidgetCard title="Squeezing π between two polygons" subtitle="Archimedes, about 250 BCE: a circle's perimeter lies between an inside and an outside polygon">
      <Row><Slider label="sides n" value={n} min={3} max={96} onChange={setN} color={C.violet} /></Row>
      <Row style={{ justifyContent: "center", gap: 6 }}>
        {[6, 12, 24, 48, 96].map((k) => <button key={k} type="button" onClick={() => setN(k)} style={{ border: `1px solid ${k === n ? C.violet : C.line}`, background: k === n ? C.violetSoft : "#fff", borderRadius: 8, padding: "4px 10px", fontWeight: 700, cursor: "pointer" }}>{k}</button>)}
      </Row>
      <Canvas view={{ xmin: -1.3, xmax: 1.3, ymin: -1.3, ymax: 1.3 }} label="Circle with inscribed and circumscribed polygons" h={300}>
        {(X, Y, s) => (
          <>
            <polygon points={pts(X, Y, ring(Rout))} fill={C.amberSoft} stroke={C.amber} strokeWidth={2} />
            <circle cx={X(0)} cy={Y(0)} r={s} fill="#fff" stroke={C.ink} strokeWidth={2.4} />
            <polygon points={pts(X, Y, ring(1))} fill={C.blueSoft} fillOpacity={0.7} stroke={C.blue} strokeWidth={2} />
            <line x1={X(-1)} y1={Y(0)} x2={X(1)} y2={Y(0)} stroke={C.red} strokeWidth={2} strokeDasharray="6 4" />
            <Lbl x={X(0)} y={Y(0) - 8} color={C.red}>diameter 1</Lbl>
          </>
        )}
      </Canvas>
      <Readout tone="green">
        <MathText html={`With a diameter of \\(1\\), the inside ${n}-gon has perimeter \\(${tex(inner, 5)}\\) and the outside ${n}-gon has perimeter \\(${tex(outer, 5)}\\). The circle's circumference is between them, so \\(${tex(inner, 5)} < \\pi < ${tex(outer, 5)}\\). ${n >= 96 ? "Archimedes stopped at 96 sides: \\(3\\tfrac{10}{71} < \\pi < 3\\tfrac{1}{7}\\)." : "More sides squeeze the two bounds closer to \\(\\pi \\approx 3.14159\\)."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.2 triangle angles */

export function TriangleAngles() {
  const [A, setA] = useState(50);
  const [B, setB] = useState(65);
  const Bc = Math.min(B, 175 - A);
  const Cg = 180 - A - Bc;
  // base AB = 6; C from the two base angles
  const base = 6, ta = Math.tan(rad(A)), tb = Math.tan(rad(Bc));
  const cx = (base * tb) / (ta + tb), cy = cx * ta;
  const P: [number, number][] = [[0, 0], [base, 0], [cx, cy]];
  const kind = Cg === 90 || A === 90 || Bc === 90 ? "right" : Math.max(A, Bc, Cg) > 90 ? "obtuse" : "acute";
  const sides = A === Bc && Bc === Cg ? "equilateral" : A === Bc || Bc === Cg || A === Cg ? "isosceles" : "scalene";
  const ext = 180 - Bc;
  const ymax = Math.max(cy, 2) + 0.8, xmin = Math.min(0, cx) - 0.8, xmax = Math.max(base + 3, cx) + 0.6;
  return (
    <WidgetCard title="Angles in a triangle" subtitle="the three interior angles always add to 180°; the exterior angle equals the two opposite interior angles">
      <Row>
        <Slider label="∠A" value={A} min={10} max={140} onChange={setA} color={C.blue} format={(v) => `${v}°`} />
        <Slider label="∠B" value={Bc} min={10} max={175 - A} onChange={setB} color={C.red} format={(v) => `${v}°`} />
      </Row>
      <Canvas view={{ xmin, xmax, ymin: -0.8, ymax }} label="Triangle with angle marks and exterior angle">
        {(X, Y, s) => (
          <>
            <polygon points={pts(X, Y, P)} fill={C.blueSoft} stroke={C.blue} strokeWidth={2.5} />
            <line x1={X(base)} y1={Y(0)} x2={X(base + 2.6)} y2={Y(0)} stroke={C.muted} strokeWidth={2} strokeDasharray="6 4" />
            <path d={arcPath(X, Y, s, P[0], 0.7, 0, rad(A))} fill="none" stroke={C.blue} strokeWidth={2.4} />
            <path d={arcPath(X, Y, s, P[1], 0.7, Math.PI - rad(Bc), rad(Bc))} fill="none" stroke={C.red} strokeWidth={2.4} />
            <path d={arcPath(X, Y, s, P[2], 0.6, Math.atan2(-cy, -cx), rad(Cg))} fill="none" stroke={C.green} strokeWidth={2.4} />
            <path d={arcPath(X, Y, s, P[1], 1.0, 0, rad(ext))} fill="none" stroke={C.amber} strokeWidth={2.4} strokeDasharray="4 3" />
            <Lbl x={X(-0.35)} y={Y(-0.4)}>A</Lbl><Lbl x={X(base - 0.1)} y={Y(-0.45)}>B</Lbl><Lbl x={X(cx)} y={Y(cy) - 10}>C</Lbl>
            <Lbl x={X(1.15 * Math.cos(rad(A / 2)))} y={Y(1.15 * Math.sin(rad(A / 2))) + 5} color={C.blue}>{A}°</Lbl>
            <Lbl x={X(base - 1.15 * Math.cos(rad(Bc / 2)))} y={Y(1.15 * Math.sin(rad(Bc / 2))) + 5} color={C.red}>{Bc}°</Lbl>
            <Lbl x={X(cx + 1.0 * Math.cos(Math.atan2(-cy, -cx) + rad(Cg / 2)))} y={Y(cy + 1.0 * Math.sin(Math.atan2(-cy, -cx) + rad(Cg / 2))) + 5} color={C.green}>{Cg}°</Lbl>
            <Lbl x={X(base + 1.5 * Math.cos(rad(ext / 2)))} y={Y(1.5 * Math.sin(rad(ext / 2))) + 5} color={C.amber}>{ext}°</Lbl>
          </>
        )}
      </Canvas>
      <Readout tone="green">
        <MathText html={`\\(\\angle A+\\angle B+\\angle C=${A}^\\circ+${Bc}^\\circ+${Cg}^\\circ=180^\\circ\\). The exterior angle at \\(B\\) (dashed) is \\(180^\\circ-${Bc}^\\circ=${ext}^\\circ\\), and it equals the two opposite interior angles: \\(${A}^\\circ+${Cg}^\\circ=${ext}^\\circ\\). This is ${kind === "acute" ? "an" : "a"} <strong>${kind}</strong>, <strong>${sides}</strong> triangle.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.2 circle angles */

export function CircleAngles() {
  const [arc, setArc] = useState(100);
  const [pos, setPos] = useState(50);
  const [tangent, setTangent] = useState(false);
  // A and B symmetric about the bottom; P on the major arc
  const a = rad(-90 - arc / 2), b = rad(-90 + arc / 2);
  const A: [number, number] = [Math.cos(a), Math.sin(a)], B: [number, number] = [Math.cos(b), Math.sin(b)];
  const major = 360 - arc, pa = b + rad((major * (0.08 + 0.84 * pos / 100)));
  const P: [number, number] = [Math.cos(pa), Math.sin(pa)];
  const insc = arc / 2;
  const angAt = (q: [number, number], u: [number, number], v: [number, number]) => { const a1 = Math.atan2(u[1] - q[1], u[0] - q[0]); let d = Math.atan2(v[1] - q[1], v[0] - q[0]) - a1; while (d <= -Math.PI) d += 2 * Math.PI; while (d > Math.PI) d -= 2 * Math.PI; return [a1, d]; };
  const [pa1, pd] = angAt(P, A, B), [oa1, od] = angAt([0, 0], A, B);
  return (
    <WidgetCard title="Angles in a circle" subtitle="an inscribed angle is half the central angle on the same arc">
      <Row>
        <Slider label="arc AB" value={arc} min={30} max={300} step={2} onChange={setArc} color={C.blue} format={(v) => `${v}°`} />
        <Slider label="move P" value={pos} min={0} max={100} onChange={setPos} color={C.red} format={(v) => `${v}%`} />
      </Row>
      <Row><label style={{ fontSize: 14, color: C.muted, fontWeight: 650 }}><input type="checkbox" checked={tangent} onChange={(e) => setTangent(e.target.checked)} /> show the tangent at A</label></Row>
      <Canvas view={{ xmin: -1.5, xmax: 1.5, ymin: -1.35, ymax: 1.25 }} label="Circle with central and inscribed angles" h={320}>
        {(X, Y, s) => (
          <>
            <circle cx={X(0)} cy={Y(0)} r={s} fill="#fff" stroke={C.ink} strokeWidth={2.2} />
            <path d={`M${X(A[0])},${Y(A[1])} A${s},${s} 0 ${arc > 180 ? 1 : 0} 0 ${X(B[0])},${Y(B[1])}`} fill="none" stroke={C.blue} strokeWidth={5} opacity={0.5} />
            <polyline points={pts(X, Y, [A, [0, 0], B])} fill="none" stroke={C.blue} strokeWidth={2.4} />
            <polyline points={pts(X, Y, [A, P, B])} fill="none" stroke={C.red} strokeWidth={2.4} />
            <path d={arcPath(X, Y, s, [0, 0], 0.22, oa1, od)} fill="none" stroke={C.blue} strokeWidth={2.4} />
            <path d={arcPath(X, Y, s, P, 0.2, pa1, pd)} fill="none" stroke={C.red} strokeWidth={2.4} />
            {tangent && <><line x1={X(A[0] - 1.2 * -A[1])} y1={Y(A[1] - 1.2 * A[0])} x2={X(A[0] + 1.2 * -A[1])} y2={Y(A[1] + 1.2 * A[0])} stroke={C.green} strokeWidth={2.4} />
              <polyline points={pts(X, Y, [[A[0] * 0.88, A[1] * 0.88], [A[0] * 0.88 - A[1] * 0.12, A[1] * 0.88 + A[0] * 0.12], [A[0] - A[1] * 0.12, A[1] + A[0] * 0.12]])} fill="none" stroke={C.green} strokeWidth={1.6} /></>}
            <circle cx={X(0)} cy={Y(0)} r={4} fill={C.ink} />
            {[["A", A], ["B", B], ["P", P]].map(([t, q]) => { const p = q as [number, number]; return <Lbl key={t as string} x={X(p[0] * 1.13)} y={Y(p[1] * 1.13) + 5}>{t as string}</Lbl>; })}
            <Lbl x={X(0.36 * Math.cos(oa1 + od / 2))} y={Y(0.36 * Math.sin(oa1 + od / 2)) + 5} color={C.blue} size={13}>{arc}°</Lbl>
            <Lbl x={X(P[0] + 0.36 * Math.cos(pa1 + pd / 2))} y={Y(P[1] + 0.36 * Math.sin(pa1 + pd / 2)) + 5} color={C.red} size={13}>{r2(insc, 1)}°</Lbl>
            <Lbl x={X(0)} y={Y(0) - 8} size={12} color={C.muted}>O</Lbl>
          </>
        )}
      </Canvas>
      <Readout tone="green">
        <MathText html={`Central angle \\(\\angle AOB=${arc}^\\circ\\); inscribed angle \\(\\angle APB=${r2(insc, 1)}^\\circ\\), half of it — wherever P sits on the other arc. ${arc === 180 ? "<strong>AB is a diameter, so the angle in a semicircle is \\(90^\\circ\\).</strong>" : "Set the arc to \\(180^\\circ\\) to see the angle in a semicircle."}${tangent ? " The tangent at A is perpendicular to the radius OA (\\(90^\\circ\\))." : ""}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.3 units */

const METRIC = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
const IMPERIAL: { label: string; from: string; to: string; f: number; note: string }[] = [
  { label: "in → cm", from: "in", to: "cm", f: 2.54, note: "1 in = 2.54 cm (exact)" },
  { label: "ft → m", from: "ft", to: "m", f: 0.3048, note: "1 ft = 12 in = 30.48 cm" },
  { label: "yd → m", from: "yd", to: "m", f: 0.9144, note: "1 yd = 3 ft = 0.9144 m" },
  { label: "mi → km", from: "mi", to: "km", f: 1.609344, note: "1 mi = 5280 ft ≈ 1.609 km" },
  { label: "lb → kg", from: "lb", to: "kg", f: 0.45359237, note: "1 lb ≈ 0.454 kg" },
  { label: "US gal → L", from: "gal", to: "L", f: 3.785411784, note: "1 US gal ≈ 3.785 L" },
];
export function UnitLadder() {
  const [mode, setMode] = useState<"metric" | "imperial">("metric");
  const [from, setFrom] = useState(3);
  const [to, setTo] = useState(5);
  const [dim, setDim] = useState<1 | 2 | 3>(1);
  const [val, setVal] = useState(2.5);
  const [imp, setImp] = useState(0);
  const [rev, setRev] = useState(false);
  const steps = to - from, factor = 10 ** (steps * dim), out = val * factor;
  const sup = dim === 1 ? "" : `^${dim}`;
  const I = IMPERIAL[imp];
  const iout = rev ? val / I.f : val * I.f;
  return (
    <WidgetCard title="Unit ladder" subtitle="each metric step is ×10 for length, ×100 for area, ×1000 for volume">
      <Segmented options={[{ value: "metric", label: "metric ladder" }, { value: "imperial", label: "imperial ↔ metric" }]} value={mode} onChange={setMode} />
      <div style={{ height: 10 }} />
      {mode === "metric" ? (
        <>
          <Row>
            <Segmented label="measuring" options={[{ value: 1, label: "length" }, { value: 2, label: "area" }, { value: 3, label: "volume" }]} value={dim} onChange={(v) => setDim(v as 1 | 2 | 3)} />
          </Row>
          <Row style={{ marginTop: 8 }}>
            <Slider label="value" value={val} min={0.5} max={20} step={0.5} onChange={setVal} format={(v) => String(v)} />
          </Row>
          <div style={{ display: "flex", gap: 6, justifyContent: "center", margin: "12px 0", flexWrap: "wrap" }}>
            {METRIC.map((u, i) => {
              const on = i === from ? C.blue : i === to ? C.green : (i - from) * (i - to) < 0 ? C.amber : C.line;
              return (
                <div key={u} style={{ textAlign: "center" }}>
                  <div style={{ width: 54, padding: "8px 0", borderRadius: 8, border: `2px solid ${on}`, background: i === from ? C.blueSoft : i === to ? C.greenSoft : "#fff", fontWeight: 800 }}>{u}<MathText html={dim > 1 ? `\\(^${dim}\\)` : ""} /></div>
                  <div style={{ display: "flex", gap: 2, marginTop: 4, justifyContent: "center" }}>
                    <button type="button" onClick={() => setFrom(i)} style={{ fontSize: 11, border: `1px solid ${C.line}`, borderRadius: 6, background: i === from ? C.blue : "#fff", color: i === from ? "#fff" : C.ink, cursor: "pointer" }}>from</button>
                    <button type="button" onClick={() => setTo(i)} style={{ fontSize: 11, border: `1px solid ${C.line}`, borderRadius: 6, background: i === to ? C.green : "#fff", color: i === to ? "#fff" : C.ink, cursor: "pointer" }}>to</button>
                  </div>
                </div>
              );
            })}
          </div>
          <Readout tone="green">
            <MathText html={steps === 0 ? `Same unit: \\(${tex(val)}\\ \\text{${METRIC[from]}}${sup}\\).` : `${Math.abs(steps)} step${Math.abs(steps) > 1 ? "s" : ""} ${steps > 0 ? "down to a smaller unit: multiply" : "up to a larger unit: divide"} by \\(10^{${Math.abs(steps) * dim}}=${tex(10 ** (Math.abs(steps) * dim), 0)}\\)${dim > 1 ? ` (each step is \\(10^${dim}=${10 ** dim}\\) because ${dim === 2 ? "area has two dimensions" : "volume has three dimensions"})` : ""}.<br/>\\(${tex(val)}\\ \\text{${METRIC[from]}}${sup}=${out >= 1e-6 && out < 1e12 ? tex(out, 8) : out.toExponential(3)}\\ \\text{${METRIC[to]}}${sup}\\)`} />
          </Readout>
        </>
      ) : (
        <>
          <Row>
            <Segmented options={IMPERIAL.map((u, i) => ({ value: i, label: u.label }))} value={imp} onChange={setImp} />
          </Row>
          <Row style={{ marginTop: 8 }}>
            <Slider label="value" value={val} min={0.5} max={20} step={0.5} onChange={setVal} format={(v) => String(v)} />
            <label style={{ fontSize: 14, color: C.muted, fontWeight: 650 }}><input type="checkbox" checked={rev} onChange={(e) => setRev(e.target.checked)} /> reverse ({I.to} → {I.from})</label>
          </Row>
          <Readout tone="green">
            <MathText html={`${I.note}.<br/>\\(${tex(val)}\\ \\text{${rev ? I.to : I.from}}\\times\\dfrac{${rev ? 1 : tex(I.f, 4)}\\ \\text{${rev ? I.from : I.to}}}{${rev ? tex(I.f, 4) : 1}\\ \\text{${rev ? I.to : I.from}}}\\approx${tex(iout, 3)}\\ \\text{${rev ? I.from : I.to}}\\)<br/>The unit you want goes on top of the conversion fraction, so the old unit cancels.`} />
          </Readout>
        </>
      )}
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.4 Pythagoras */

export function Pythagoras() {
  const [mode, setMode] = useState<"find" | "test">("find");
  const [a, setA] = useState(3);
  const [b, setB] = useState(4);
  const [c3, setC3] = useState(6);
  const c = Math.hypot(a, b);
  // test mode: a, b, c3 as three sides (c3 longest)
  const s2 = a * a + b * b, cc = c3 * c3;
  const valid = a + b > c3 && c3 >= Math.max(a, b);
  const verdict = !valid ? "not a triangle with c as the longest side" : s2 === cc ? "right" : s2 > cc ? "acute" : "obtuse";
  // drawing for find mode: triangle with squares on sides
  const P: [number, number][] = [[0, 0], [a, 0], [a, b]];
  const sq = (p: [number, number], q: [number, number]) => { const dx = q[0] - p[0], dy = q[1] - p[1]; return [p, q, [q[0] + dy, q[1] - dx], [p[0] + dy, p[1] - dx]] as [number, number][]; };
  const Sa = sq([0, 0], [a, 0]), Sb = sq([a, 0], [a, b]), Sc = sq([a, b], [0, 0]);
  const all = [...Sa, ...Sb, ...Sc];
  const view = { xmin: Math.min(...all.map((p) => p[0])) - 0.5, xmax: Math.max(...all.map((p) => p[0])) + 0.5, ymin: Math.min(...all.map((p) => p[1])) - 0.5, ymax: Math.max(...all.map((p) => p[1])) + 0.5 };
  // test mode drawing: triangle with sides a (base), b, c3 by the cosine rule (for the picture only)
  const cosC = (a * a + b * b - c3 * c3) / (2 * a * b);
  const ang = Math.acos(Math.max(-1, Math.min(1, cosC)));
  const T: [number, number][] = [[0, 0], [a, 0], [b * Math.cos(ang), b * Math.sin(ang)]];
  const tv = { xmin: Math.min(0, T[2][0]) - 1, xmax: Math.max(a, T[2][0]) + 1, ymin: -1, ymax: Math.max(T[2][1], 1) + 1 };
  return (
    <WidgetCard title="The Pythagorean theorem" subtitle="in a right triangle, the squares on the legs add up to the square on the hypotenuse">
      <Segmented options={[{ value: "find", label: "squares on the sides" }, { value: "test", label: "is it a right triangle?" }]} value={mode} onChange={setMode} />
      <Row style={{ marginTop: 10 }}>
        <Slider label="a" value={a} min={1} max={12} onChange={setA} color={C.blue} />
        <Slider label="b" value={b} min={1} max={12} onChange={setB} color={C.red} />
        {mode === "test" && <Slider label="c" value={c3} min={1} max={20} onChange={setC3} color={C.green} />}
      </Row>
      {mode === "find" ? (
        <>
          <Canvas view={view} label="Right triangle with a square on each side" h={360}>
            {(X, Y) => (
              <>
                <polygon points={pts(X, Y, Sa)} fill={C.blueSoft} stroke={C.blue} strokeWidth={2} />
                <polygon points={pts(X, Y, Sb)} fill={C.redSoft} stroke={C.red} strokeWidth={2} />
                <polygon points={pts(X, Y, Sc)} fill={C.greenSoft} stroke={C.green} strokeWidth={2} />
                <polygon points={pts(X, Y, P)} fill="#fff" stroke={C.ink} strokeWidth={2.5} />
                <Lbl x={X(a / 2)} y={Y(-a / 2) + 5} color={C.blue}>{a}² = {a * a}</Lbl>
                <Lbl x={X(a + b / 2)} y={Y(b / 2) + 5} color={C.red}>{b}² = {b * b}</Lbl>
                <Lbl x={X((Sc[0][0] + Sc[2][0]) / 2)} y={Y((Sc[0][1] + Sc[2][1]) / 2) + 5} color={C.green}>c² = {a * a + b * b}</Lbl>
              </>
            )}
          </Canvas>
          <Readout tone="green">
            <MathText html={`\\(a^2+b^2=c^2\\): \\(${a}^2+${b}^2=${a * a}+${b * b}=${a * a + b * b}\\), so \\(c=\\sqrt{${a * a + b * b}}${Number.isInteger(c) ? `=${c}` : `\\approx${tex(c, 2)}`}\\). ${Number.isInteger(c) ? "A whole-number hypotenuse: this is a <strong>Pythagorean triple</strong>." : "Try a = 3, b = 4 or a = 5, b = 12 for whole-number answers."}`} />
          </Readout>
        </>
      ) : (
        <>
          <Canvas view={tv} label="Triangle with sides a, b and c" h={280}>
            {(X, Y) => (
              <>
                {valid && <polygon points={pts(X, Y, T)} fill={verdict === "right" ? C.greenSoft : C.blueSoft} stroke={verdict === "right" ? C.green : C.blue} strokeWidth={2.5} />}
                {valid && <><Lbl x={X(a / 2)} y={Y(0) + 18} color={C.blue}>a = {a}</Lbl><Lbl x={X(T[2][0] / 2) - 10} y={Y(T[2][1] / 2)} color={C.red} anchor="end">b = {b}</Lbl><Lbl x={X((a + T[2][0]) / 2) + 10} y={Y(T[2][1] / 2)} color={C.green} anchor="start">c = {c3}</Lbl></>}
              </>
            )}
          </Canvas>
          <Readout tone={verdict === "right" ? "green" : valid ? "blue" : "amber"}>
            <MathText html={valid ? `\\(a^2+b^2=${a * a}+${b * b}=${s2}\\) and \\(c^2=${cc}\\). ${verdict === "right" ? "They are equal, so by the <strong>converse</strong> of the theorem the triangle is <strong>right-angled</strong>." : verdict === "acute" ? `\\(${s2}>${cc}\\): the angle opposite c is less than \\(90^\\circ\\) (acute).` : `\\(${s2}<${cc}\\): the angle opposite c is more than \\(90^\\circ\\) (obtuse).`}` : "These lengths do not make a triangle with c as its longest side: c must be at least as long as a and b, and a + b must be greater than c."} />
          </Readout>
        </>
      )}
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.5 / 5.6 scaling a shape */

export function ScaleShape({ initShape = "rectangle" }: { initShape?: "rectangle" | "triangle" | "circle" }) {
  const [shape, setShape] = useState(initShape);
  const [k, setK] = useState(2);
  const base = { rectangle: { P: 2 * (3 + 2), A: 6, d: "3 × 2 rectangle" }, triangle: { P: 3 + 4 + 5, A: 6, d: "3-4-5 right triangle" }, circle: { P: 2 * Math.PI * 1.5, A: Math.PI * 2.25, d: "circle, r = 1.5" } }[shape];
  const draw = (X: (x: number) => number, Y: (y: number) => number, s: number, f: number, col: string, soft: string, dx: number) => {
    if (shape === "rectangle") return <polygon points={pts(X, Y, [[dx, 0], [dx + 3 * f, 0], [dx + 3 * f, 2 * f], [dx, 2 * f]])} fill={soft} stroke={col} strokeWidth={2.4} />;
    if (shape === "triangle") return <polygon points={pts(X, Y, [[dx, 0], [dx + 4 * f, 0], [dx, 3 * f]])} fill={soft} stroke={col} strokeWidth={2.4} />;
    return <circle cx={X(dx + 1.5 * f)} cy={Y(1.5 * f)} r={1.5 * f * s} fill={soft} stroke={col} strokeWidth={2.4} />;
  };
  const w0 = shape === "triangle" ? 4 : 3;
  return (
    <WidgetCard title="Scale a shape by k" subtitle="lengths × k, perimeter × k, area × k²">
      <Row>
        <Segmented options={[{ value: "rectangle", label: "rectangle" }, { value: "triangle", label: "triangle" }, { value: "circle", label: "circle" }]} value={shape} onChange={setShape} />
        <Slider label="scale k" value={k} min={0.5} max={3} step={0.5} onChange={setK} color={C.violet} format={(v) => String(v)} />
      </Row>
      <Canvas view={{ xmin: -0.5, xmax: w0 + 1 + w0 * 3 + 0.5, ymin: -1.3, ymax: (shape === "rectangle" ? 2 : 3) * 3 + 0.3 }} label="Original and scaled shapes" h={300}>
        {(X, Y, s) => (
          <>
            {draw(X, Y, s, 1, C.blue, C.blueSoft, 0)}
            {draw(X, Y, s, k, C.violet, C.violetSoft, w0 + 1)}
            <Lbl x={X(w0 / 2)} y={Y(-0.8)} color={C.blue} size={13}>original</Lbl>
            <Lbl x={X(w0 + 1 + (w0 * k) / 2)} y={Y(-0.8)} color={C.violet} size={13}>× {k}</Lbl>
          </>
        )}
      </Canvas>
      <table style={{ borderCollapse: "collapse", margin: "4px auto 12px", fontSize: 14.5 }}>
        <thead><tr><th style={th}></th><th style={th}>original ({base.d})</th><th style={th}>scaled by {k}</th><th style={th}>new ÷ old</th></tr></thead>
        <tbody>
          <tr><td style={th}>perimeter</td><td style={cell}>{r2(base.P)}</td><td style={cell}>{r2(base.P * k)}</td><td style={{ ...cell, color: C.blue, fontWeight: 800 }}>{r2(k)} = k</td></tr>
          <tr><td style={th}>area</td><td style={cell}>{r2(base.A)}</td><td style={cell}>{r2(base.A * k * k)}</td><td style={{ ...cell, color: C.red, fontWeight: 800 }}>{r2(k * k)} = k²</td></tr>
        </tbody>
      </table>
      <Readout tone="green">
        <MathText html={`Every length is multiplied by \\(k=${k}\\), so the perimeter (a length) is multiplied by \\(${k}\\), but the area (length × length) is multiplied by \\(k^2=${r2(k * k)}\\). ${k < 1 ? "A scale factor below 1 shrinks the shape." : k === 1 ? "k = 1 leaves the shape unchanged." : ""}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.5 / 5.6 optimizing a rectangle */

export function RectOptimizer({ initMode = "perimeter" }: { initMode?: "perimeter" | "area" }) {
  const [mode, setMode] = useState(initMode);
  const [wall, setWall] = useState(false);
  const [P, setP] = useState(40);
  const [A, setA] = useState(36);
  const [w, setW] = useState(4);
  // fixed perimeter (fence): sides used = 2w + l (wall) or 2w + 2l
  const lenP = (x: number) => (wall ? P - 2 * x : P / 2 - x);
  const maxW = wall ? P / 2 : P / 2;
  const wP = Math.min(w, maxW - 0.5);
  const l = mode === "perimeter" ? lenP(wP) : A / w;
  const ww = mode === "perimeter" ? wP : w;
  const area = ww * l, per = wall ? 2 * ww + l : 2 * (ww + l);
  const best = mode === "perimeter" ? (wall ? P / 4 : P / 4) : wall ? Math.sqrt(A / 2) : Math.sqrt(A);
  const f = (x: number) => (mode === "perimeter" ? x * lenP(x) : wall ? 2 * x + A / x : 2 * (x + A / x));
  const xmax = mode === "perimeter" ? maxW : 12;
  const ys = Array.from({ length: 121 }, (_, i) => { const x = 0.25 + ((xmax - 0.25) * i) / 120; return [x, f(x)] as [number, number]; });
  const yTop = Math.max(...ys.map((p) => p[1]).filter((v) => Number.isFinite(v) && v < 400)) * 1.1;
  return (
    <WidgetCard title="Best rectangle" subtitle={mode === "perimeter" ? "fixed fence length: which rectangle encloses the most area?" : "fixed area: which rectangle needs the least fence?"}>
      <Row>
        <Segmented options={[{ value: "perimeter", label: "fixed perimeter → max area" }, { value: "area", label: "fixed area → min perimeter" }]} value={mode} onChange={(v) => { setMode(v); setW(4); }} />
        <label style={{ fontSize: 14, color: C.muted, fontWeight: 650 }}><input type="checkbox" checked={wall} onChange={(e) => setWall(e.target.checked)} /> one side against a wall (3 sides fenced)</label>
      </Row>
      <Row style={{ marginTop: 8 }}>
        {mode === "perimeter" ? <Slider label="fence" value={P} min={12} max={60} step={4} onChange={setP} color={C.amber} format={(v) => `${v} m`} />
          : <Slider label="area" value={A} min={16} max={100} step={4} onChange={setA} color={C.amber} format={(v) => `${v} m²`} />}
        <Slider label="width w" value={ww} min={0.5} max={mode === "perimeter" ? maxW - 0.5 : 12} step={0.5} onChange={setW} color={C.blue} format={(v) => `${v} m`} />
      </Row>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center", justifyContent: "center" }}>
        <div style={{ flex: "1 1 240px", maxWidth: 300 }}>
          <Canvas view={{ xmin: -1, xmax: Math.max(l, 6) + 1, ymin: -1.5, ymax: Math.max(ww, 6) + 1 }} label="The rectangle" w={280} h={240}>
            {(X, Y) => (
              <>
                {wall && <line x1={X(-0.6)} y1={Y(ww)} x2={X(l + 0.6)} y2={Y(ww)} stroke={C.muted} strokeWidth={6} />}
                <polygon points={pts(X, Y, [[0, 0], [l, 0], [l, ww], [0, ww]])} fill={C.greenSoft} stroke="none" />
                <polyline points={pts(X, Y, wall ? [[0, ww], [0, 0], [l, 0], [l, ww]] : [[0, 0], [l, 0], [l, ww], [0, ww], [0, 0]])} fill="none" stroke={C.amber} strokeWidth={3} />
                <Lbl x={X(l / 2)} y={Y(0) + 18} color={C.blue} size={13}>{r2(l)} m</Lbl>
                <Lbl x={X(0) - 6} y={Y(ww / 2) + 4} color={C.blue} size={13} anchor="end">{r2(ww)}</Lbl>
                {wall && <Lbl x={X(l / 2)} y={Y(ww) - 8} color={C.muted} size={12}>wall</Lbl>}
              </>
            )}
          </Canvas>
        </div>
        <div style={{ flex: "1 1 240px", maxWidth: 300 }}>
          <Canvas view={{ xmin: 0, xmax: xmax, ymin: 0, ymax: yTop }} label={mode === "perimeter" ? "Area against width" : "Perimeter against width"} w={280} h={240} stretch>
            {(X, Y) => (
              <>
                <line x1={X(0)} y1={Y(0)} x2={X(xmax)} y2={Y(0)} stroke={C.ink} /><line x1={X(0)} y1={Y(0)} x2={X(0)} y2={Y(yTop)} stroke={C.ink} />
                <polyline points={pts(X, Y, ys.filter((p) => p[1] <= yTop && p[1] >= 0))} fill="none" stroke={C.violet} strokeWidth={2.5} />
                <line x1={X(best)} y1={Y(0)} x2={X(best)} y2={Y(f(best))} stroke={C.green} strokeDasharray="4 3" />
                <circle cx={X(ww)} cy={Y(f(ww))} r={6} fill={C.red} />
                <Lbl x={X(xmax) - 4} y={Y(0) - 6} size={11} anchor="end" color={C.muted}>width</Lbl>
                <Lbl x={X(0) + 6} y={Y(yTop) + 14} size={11} anchor="start" color={C.muted}>{mode === "perimeter" ? "area" : "fence"}</Lbl>
              </>
            )}
          </Canvas>
        </div>
      </div>
      <Readout tone={Math.abs(ww - best) < 0.26 ? "green" : "blue"}>
        <MathText html={mode === "perimeter"
          ? `Fence used \\(=${wall ? `2(${r2(ww)})+${r2(l)}` : `2(${r2(ww)}+${r2(l)})`}=${r2(per)}\\) m; area \\(=${r2(ww)}\\times${r2(l)}=${r2(area)}\\ \\text{m}^2\\). The maximum area, \\(${r2(f(best))}\\ \\text{m}^2\\), is at \\(w=${r2(best)}\\) m: ${wall ? "with a wall, the side parallel to the wall is <strong>twice</strong> the width (half a square)." : "the best rectangle is a <strong>square</strong>."}`
          : `Area \\(=${r2(ww)}\\times${r2(l)}=${r2(area)}\\ \\text{m}^2\\); fence needed \\(=${r2(per)}\\) m. The least fence, \\(${r2(f(best))}\\) m, is at \\(w=${r2(best)}\\) m: ${wall ? "the side along the wall is twice the width." : "a <strong>square</strong> needs the least perimeter."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.7 volume, 5.8 surface area */

type Solid = "prism" | "cylinder" | "pyramid" | "cone" | "sphere";
const OBL = [0.45, 0.32];
const pr = (x: number, y: number, z: number): [number, number] => [x + z * OBL[0], y + z * OBL[1]];

function SolidDrawing({ solid, a, b, h, ghost }: { solid: Solid; a: number; b: number; h: number; ghost?: boolean }) {
  // a = length or radius, b = width (prism), h = height
  const big = Math.max(a * 2.2, h, b) + 2;
  return (
    <Canvas view={{ xmin: -big * 0.55, xmax: big * 0.85, ymin: -big * 0.35, ymax: big * 0.9 }} label={`Drawing of a ${solid}`} h={300}>
      {(X, Y, s) => {
        const P = (p: [number, number][]) => pts(X, Y, p);
        if (solid === "prism" || solid === "pyramid") {
          const l = a, w = solid === "pyramid" ? a : b, V = (x: number, y: number, z: number) => pr(x - l / 2, y, z - w / 2);
          const box = (
            <g opacity={solid === "pyramid" ? (ghost ? 0.35 : 0) : 1}>
              <polygon points={P([V(0, 0, 0), V(l, 0, 0), V(l, h, 0), V(0, h, 0)])} fill={C.blueSoft} stroke={C.blue} strokeWidth={2} />
              <polygon points={P([V(0, h, 0), V(l, h, 0), V(l, h, w), V(0, h, w)])} fill="#eff6ff" stroke={C.blue} strokeWidth={2} />
              <polygon points={P([V(l, 0, 0), V(l, 0, w), V(l, h, w), V(l, h, 0)])} fill="#bfdbfe" stroke={C.blue} strokeWidth={2} />
              <polyline points={P([V(0, 0, 0), V(0, 0, w), V(l, 0, w)])} fill="none" stroke={C.blue} strokeDasharray="5 4" /><line x1={X(V(0, 0, w)[0])} y1={Y(V(0, 0, w)[1])} x2={X(V(0, h, w)[0])} y2={Y(V(0, h, w)[1])} stroke={C.blue} strokeDasharray="5 4" />
            </g>
          );
          if (solid === "prism") return <>{box}<Lbl x={X(0)} y={Y(V(0, 0, 0)[1]) + 18} color={C.blue}>l = {a}</Lbl><Lbl x={X(V(l, 0, w / 2)[0]) + 8} y={Y(V(l, 0, w / 2)[1]) + 10} color={C.blue} anchor="start">w = {b}</Lbl><Lbl x={X(V(0, h / 2, 0)[0]) - 8} y={Y(h / 2)} color={C.blue} anchor="end">h = {h}</Lbl></>;
          const T = V(l / 2, h, w / 2);
          return <>{box}
            <polygon points={P([V(0, 0, 0), V(l, 0, 0), T])} fill={C.amberSoft} stroke={C.amber} strokeWidth={2} />
            <polygon points={P([V(l, 0, 0), V(l, 0, w), T])} fill="#fde68a" stroke={C.amber} strokeWidth={2} />
            <polyline points={P([V(0, 0, 0), V(0, 0, w), V(l, 0, w)])} fill="none" stroke={C.amber} strokeDasharray="5 4" />
            <line x1={X(V(0, 0, w)[0])} y1={Y(V(0, 0, w)[1])} x2={X(T[0])} y2={Y(T[1])} stroke={C.amber} strokeDasharray="5 4" />
            <line x1={X(V(l / 2, 0, w / 2)[0])} y1={Y(V(l / 2, 0, w / 2)[1])} x2={X(T[0])} y2={Y(T[1])} stroke={C.muted} strokeDasharray="4 3" />
            <Lbl x={X(0)} y={Y(V(0, 0, 0)[1]) + 18} color={C.amber}>base {a} × {a}</Lbl><Lbl x={X(T[0]) + 8} y={Y(h * 0.55)} color={C.muted} anchor="start">h = {h}</Lbl></>;
        }
        if (solid === "sphere") {
          return <><circle cx={X(0)} cy={Y(h / 2)} r={a * s} fill={C.greenSoft} stroke={C.green} strokeWidth={2.4} />
            <ellipse cx={X(0)} cy={Y(h / 2)} rx={a * s} ry={a * s * 0.28} fill="none" stroke={C.green} strokeDasharray="5 4" />
            <line x1={X(0)} y1={Y(h / 2)} x2={X(a)} y2={Y(h / 2)} stroke={C.red} strokeWidth={2} /><Lbl x={X(a / 2)} y={Y(h / 2) - 8} color={C.red}>r = {a}</Lbl></>;
        }
        const ry = a * 0.32;
        const cyl = (op: number) => (
          <g opacity={op}>
            <path d={`M${X(-a)},${Y(0)} A${a * s},${ry * s} 0 0 0 ${X(a)},${Y(0)} L${X(a)},${Y(h)} L${X(-a)},${Y(h)} Z`} fill={C.violetSoft} stroke="none" />
            <path d={`M${X(-a)},${Y(0)} A${a * s},${ry * s} 0 0 0 ${X(a)},${Y(0)}`} fill="none" stroke={C.violet} strokeWidth={2} />
            <path d={`M${X(-a)},${Y(0)} A${a * s},${ry * s} 0 0 1 ${X(a)},${Y(0)}`} fill="none" stroke={C.violet} strokeDasharray="5 4" />
            <line x1={X(-a)} y1={Y(0)} x2={X(-a)} y2={Y(h)} stroke={C.violet} strokeWidth={2} /><line x1={X(a)} y1={Y(0)} x2={X(a)} y2={Y(h)} stroke={C.violet} strokeWidth={2} />
            <ellipse cx={X(0)} cy={Y(h)} rx={a * s} ry={ry * s} fill="#f5f3ff" stroke={C.violet} strokeWidth={2} />
          </g>
        );
        if (solid === "cylinder") return <>{cyl(1)}<line x1={X(0)} y1={Y(h)} x2={X(a)} y2={Y(h)} stroke={C.red} strokeWidth={2} /><Lbl x={X(a / 2)} y={Y(h) - 8} color={C.red}>r = {a}</Lbl><Lbl x={X(a) + 8} y={Y(h / 2)} color={C.violet} anchor="start">h = {h}</Lbl></>;
        return <>{ghost && cyl(0.35)}
          <path d={`M${X(-a)},${Y(0)} A${a * s},${ry * s} 0 0 0 ${X(a)},${Y(0)} L${X(0)},${Y(h)} Z`} fill={C.amberSoft} stroke="none" />
          <path d={`M${X(-a)},${Y(0)} A${a * s},${ry * s} 0 0 0 ${X(a)},${Y(0)}`} fill="none" stroke={C.amber} strokeWidth={2} />
          <path d={`M${X(-a)},${Y(0)} A${a * s},${ry * s} 0 0 1 ${X(a)},${Y(0)}`} fill="none" stroke={C.amber} strokeDasharray="5 4" />
          <polyline points={P([[-a, 0], [0, h], [a, 0]])} fill="none" stroke={C.amber} strokeWidth={2} />
          <line x1={X(0)} y1={Y(0)} x2={X(0)} y2={Y(h)} stroke={C.muted} strokeDasharray="4 3" /><line x1={X(0)} y1={Y(0)} x2={X(a)} y2={Y(0)} stroke={C.red} strokeWidth={2} />
          <Lbl x={X(a / 2)} y={Y(0) + 18} color={C.red}>r = {a}</Lbl><Lbl x={X(0) + 8} y={Y(h * 0.55)} color={C.muted} anchor="start">h = {h}</Lbl></>;
      }}
    </Canvas>
  );
}

export function SolidVolume({ init = "prism" as Solid }: { init?: Solid }) {
  const [solid, setSolid] = useState<Solid>(init);
  const [a, setA] = useState(4);
  const [b, setB] = useState(3);
  const [h, setH] = useState(6);
  const [ghost, setGhost] = useState(true);
  const V = { prism: a * b * h, cylinder: Math.PI * a * a * h, pyramid: (a * a * h) / 3, cone: (Math.PI * a * a * h) / 3, sphere: (4 / 3) * Math.PI * a ** 3 }[solid];
  const work = {
    prism: `V=(\\text{area of base})\\times h=lwh=${a}\\times${b}\\times${h}=${tex(V)}`,
    cylinder: `V=\\pi r^2h=\\pi(${a})^2(${h})=${a * a * h}\\pi\\approx${tex(V, 1)}`,
    pyramid: `V=\\tfrac13(\\text{area of base})h=\\tfrac13(${a}^2)(${h})=${tex(V)}`,
    cone: `V=\\tfrac13\\pi r^2h=\\tfrac13\\pi(${a})^2(${h})=${tex((a * a * h) / 3)}\\pi\\approx${tex(V, 1)}`,
    sphere: `V=\\tfrac43\\pi r^3=\\tfrac43\\pi(${a})^3=${tex((4 * a ** 3) / 3)}\\pi\\approx${tex(V, 1)}`,
  }[solid];
  const note = {
    prism: "Any prism: the area of the base times the height. Stack layers of base-shaped slices.",
    cylinder: "A cylinder is a prism with a circular base: area of base πr² times the height.",
    pyramid: "A pyramid holds exactly one third of the prism with the same base and height (the faint box).",
    cone: "A cone holds exactly one third of the cylinder with the same base and height (the faint cylinder).",
    sphere: "A sphere holds two thirds of the cylinder that just fits around it (height 2r).",
  }[solid];
  return (
    <WidgetCard title="Volume of solids" subtitle="volume = how many unit cubes fill the solid">
      <Segmented options={(["prism", "cylinder", "pyramid", "cone", "sphere"] as Solid[]).map((x) => ({ value: x, label: x }))} value={solid} onChange={setSolid} />
      <Row style={{ marginTop: 8 }}>
        <Slider label={solid === "prism" ? "length l" : solid === "pyramid" ? "base side" : "radius r"} value={a} min={1} max={8} onChange={setA} color={C.red} />
        {solid === "prism" && <Slider label="width w" value={b} min={1} max={8} onChange={setB} color={C.blue} />}
        {solid !== "sphere" && <Slider label="height h" value={h} min={1} max={12} onChange={setH} color={C.violet} />}
      </Row>
      {(solid === "pyramid" || solid === "cone") && <Row><label style={{ fontSize: 14, color: C.muted, fontWeight: 650 }}><input type="checkbox" checked={ghost} onChange={(e) => setGhost(e.target.checked)} /> show the matching {solid === "cone" ? "cylinder" : "prism"}</label></Row>}
      <SolidDrawing solid={solid} a={a} b={b} h={solid === "sphere" ? 2 * a : h} ghost={ghost} />
      <Readout tone="green"><div style={{ fontSize: 17 }}><MathText html={`\\(${work}\\)`} /> cubic units</div><MathText html={note} /></Readout>
    </WidgetCard>
  );
}

type NetSolid = "prism" | "cylinder" | "pyramid" | "cone";
export function NetExplorer({ init = "prism" as NetSolid }: { init?: NetSolid }) {
  const [solid, setSolid] = useState<NetSolid>(init);
  const [a, setA] = useState(4);
  const [b, setB] = useState(3);
  const [h, setH] = useState(5);
  const slantPyr = Math.hypot(a / 2, h), slantCone = Math.hypot(a, h);
  const parts: { name: string; tex: string; v: number; col: string }[] =
    solid === "prism" ? [
      { name: "top + bottom", tex: `2(${a}\\times${b})`, v: 2 * a * b, col: C.blue },
      { name: "front + back", tex: `2(${a}\\times${h})`, v: 2 * a * h, col: C.violet },
      { name: "left + right", tex: `2(${b}\\times${h})`, v: 2 * b * h, col: C.green },
    ] : solid === "cylinder" ? [
      { name: "two circles", tex: `2\\pi(${a})^2`, v: 2 * Math.PI * a * a, col: C.blue },
      { name: "curved side (rectangle 2πr × h)", tex: `2\\pi(${a})(${h})`, v: 2 * Math.PI * a * h, col: C.violet },
    ] : solid === "pyramid" ? [
      { name: "square base", tex: `${a}^2`, v: a * a, col: C.blue },
      { name: `4 triangles (slant height s ≈ ${r2(slantPyr)})`, tex: `4\\cdot\\tfrac12(${a})(${tex(slantPyr)})`, v: 2 * a * slantPyr, col: C.amber },
    ] : [
      { name: "circular base", tex: `\\pi(${a})^2`, v: Math.PI * a * a, col: C.blue },
      { name: `curved surface (slant s ≈ ${r2(slantCone)})`, tex: `\\pi(${a})(${tex(slantCone)})`, v: Math.PI * a * slantCone, col: C.amber },
    ];
  const total = parts.reduce((s, p) => s + p.v, 0);
  return (
    <WidgetCard title="Nets and surface area" subtitle="unfold the solid: the surface area is the total area of the net">
      <Segmented options={(["prism", "cylinder", "pyramid", "cone"] as NetSolid[]).map((x) => ({ value: x, label: x === "pyramid" ? "square pyramid" : x }))} value={solid} onChange={setSolid} />
      <Row style={{ marginTop: 8 }}>
        <Slider label={solid === "prism" ? "length l" : solid === "pyramid" ? "base side b" : "radius r"} value={a} min={1} max={8} onChange={setA} color={C.red} />
        {solid === "prism" && <Slider label="width w" value={b} min={1} max={8} onChange={setB} color={C.blue} />}
        <Slider label="height h" value={h} min={1} max={10} onChange={setH} color={C.violet} />
      </Row>
      <Canvas view={solid === "prism" ? { xmin: -0.5, xmax: 2 * b + 2 * a + 0.5, ymin: -0.5, ymax: 2 * b + h + 0.5 }
        : solid === "cylinder" ? { xmin: -0.5, xmax: 2 * Math.PI * a + 0.5, ymin: -2 * a - 0.5, ymax: h + 2 * a + 0.5 }
          : solid === "pyramid" ? { xmin: -slantPyr - 0.5, xmax: a + slantPyr + 0.5, ymin: -slantPyr - 0.5, ymax: a + slantPyr + 0.5 }
            : { xmin: -slantCone - 0.5, xmax: slantCone + 0.5, ymin: -slantCone - 2 * a - 0.5, ymax: Math.max(0.5, -slantCone * Math.cos(Math.PI * a / slantCone)) + 1 }} label={`Net of a ${solid}`} h={320}>
        {(X, Y, s) => {
          const R = (x: number, y: number, w: number, hh: number, fill: string, col: string, t?: string) => <g key={`${x},${y}`}><polygon points={pts(X, Y, [[x, y], [x + w, y], [x + w, y + hh], [x, y + hh]])} fill={fill} stroke={col} strokeWidth={1.8} />{t && <Lbl x={X(x + w / 2)} y={Y(y + hh / 2) + 5} color={col} size={12}>{t}</Lbl>}</g>;
          if (solid === "prism") return <>{R(0, b, b, h, C.greenSoft, C.green, `${b}×${h}`)}{R(b, b, a, h, C.violetSoft, C.violet, `${a}×${h}`)}{R(a + b, b, b, h, C.greenSoft, C.green, `${b}×${h}`)}{R(a + 2 * b, b, a, h, C.violetSoft, C.violet, `${a}×${h}`)}{R(b, 0, a, b, C.blueSoft, C.blue, `${a}×${b}`)}{R(b, b + h, a, b, C.blueSoft, C.blue, `${a}×${b}`)}</>;
          if (solid === "cylinder") { const L = 2 * Math.PI * a; return <>{R(0, 0, L, h, C.violetSoft, C.violet, `2π(${a}) × ${h}`)}<circle cx={X(L / 2)} cy={Y(h + a)} r={a * s} fill={C.blueSoft} stroke={C.blue} strokeWidth={1.8} /><circle cx={X(L / 2)} cy={Y(-a)} r={a * s} fill={C.blueSoft} stroke={C.blue} strokeWidth={1.8} /></>; }
          if (solid === "pyramid") {
            const sq: [number, number][] = [[0, 0], [a, 0], [a, a], [0, a]];
            const tris: [number, number][][] = [[[0, 0], [a, 0], [a / 2, -slantPyr]], [[a, 0], [a, a], [a + slantPyr, a / 2]], [[a, a], [0, a], [a / 2, a + slantPyr]], [[0, a], [0, 0], [-slantPyr, a / 2]]];
            return <><polygon points={pts(X, Y, sq)} fill={C.blueSoft} stroke={C.blue} strokeWidth={1.8} />{tris.map((t, i) => <polygon key={i} points={pts(X, Y, t)} fill={C.amberSoft} stroke={C.amber} strokeWidth={1.8} />)}
              <line x1={X(a / 2)} y1={Y(0)} x2={X(a / 2)} y2={Y(-slantPyr)} stroke={C.red} strokeDasharray="4 3" /><Lbl x={X(a / 2) + 6} y={Y(-slantPyr / 2)} color={C.red} size={12} anchor="start">s</Lbl></>;
          }
          const ang = (2 * Math.PI * a) / slantCone; // sector angle
          const st = -Math.PI / 2 - ang / 2, en = -Math.PI / 2 + ang / 2;
          const p1 = [slantCone * Math.cos(st), slantCone * Math.sin(st)], p2 = [slantCone * Math.cos(en), slantCone * Math.sin(en)];
          return <><path d={`M${X(0)},${Y(0)} L${X(p1[0])},${Y(p1[1])} A${slantCone * s},${slantCone * s} 0 ${ang > Math.PI ? 1 : 0} 0 ${X(p2[0])},${Y(p2[1])} Z`} fill={C.amberSoft} stroke={C.amber} strokeWidth={1.8} />
            <circle cx={X(0)} cy={Y(-slantCone - a)} r={a * s} fill={C.blueSoft} stroke={C.blue} strokeWidth={1.8} />
            <line x1={X(0)} y1={Y(0)} x2={X(p1[0])} y2={Y(p1[1])} stroke={C.red} strokeDasharray="4 3" />
            <Lbl x={X(0)} y={Y(-slantCone * 0.5)} color={C.amber} size={12}>sector, radius s</Lbl></>;
        }}
      </Canvas>
      <table style={{ borderCollapse: "collapse", margin: "4px auto 12px", fontSize: 14.5 }}>
        <tbody>
          {parts.map((p) => <tr key={p.name}><td style={{ ...th, color: p.col, textAlign: "left" }}>{p.name}</td><td style={cell}><MathText html={`\\(${p.tex}\\)`} /></td><td style={cell}>{r2(p.v, 1)}</td></tr>)}
          <tr><td style={{ ...th, textAlign: "left" }}>surface area</td><td style={cell}></td><td style={{ ...cell, fontWeight: 800, color: C.green }}>{r2(total, 1)}</td></tr>
        </tbody>
      </table>
      <Readout tone="green">
        <MathText html={solid === "pyramid" ? `The slant height comes from the Pythagorean theorem: \\(s=\\sqrt{h^2+(\\tfrac b2)^2}=\\sqrt{${h}^2+${tex(a / 2)}^2}\\approx${tex(slantPyr)}\\). Each triangle has area \\(\\tfrac12bs\\).`
          : solid === "cone" ? `Slant height \\(s=\\sqrt{r^2+h^2}=\\sqrt{${a}^2+${h}^2}\\approx${tex(slantCone)}\\). The curved surface unrolls into a sector with area \\(\\pi rs\\).`
            : solid === "cylinder" ? "The curved side unrolls into a rectangle whose length is the circumference \\(2\\pi r\\)." : "Opposite faces of a rectangular prism are equal, so add the three different faces and double."} />
      </Readout>
    </WidgetCard>
  );
}
