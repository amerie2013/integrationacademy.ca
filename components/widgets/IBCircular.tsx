"use client";

// IB AA SL chapter 12 (trigonometric functions) explorers: radian measure with arc length and sector area, the unit
// circle with signs in each quadrant, numerical checks of identities, solving trigonometric equations on an interval,
// the graphs of sin, cos and tan, and transformed sinusoids y = a sin(b(x − c)) + d.

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { Plane, r2, type View } from "./Systems";
import { dot } from "./Quadratics";

type Fn = (x: number) => number;
const n2 = (v: number, d = 2) => r2(v, d);
const PI = Math.PI;
const rad = (d: number) => (d * PI) / 180;
function pathOf(f: Fn, v: View, X: (x: number) => number, Y: (y: number) => number, a = v.xmin, b = v.xmax) {
  const band = (v.ymax - v.ymin) * 3;
  let d = "", pen = false, prev = NaN;
  for (let i = 0; i <= 800; i++) {
    const x = a + ((b - a) * i) / 800, y = f(x);
    if (!Number.isFinite(y) || y > v.ymax + band || y < v.ymin - band || (Number.isFinite(prev) && Math.abs(y - prev) > band)) { pen = false; prev = y; continue; }
    d += `${pen ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)} `; pen = true; prev = y;
  }
  return d;
}
/** a nice π label for x */
const piLabel = (x: number) => {
  const k = Math.round((x / PI) * 12);
  if (Math.abs(x - (k * PI) / 12) > 1e-6) return n2(x, 3).toString();
  const g = (a: number, b: number): number => (b ? g(b, a % b) : a);
  const d = g(Math.abs(k), 12) || 12, num = k / d, den = 12 / d;
  if (num === 0) return "0";
  return `${num === 1 ? "" : num === -1 ? "-" : num}π${den === 1 ? "" : `/${den}`}`;
};
const Box = ({ children, h = 300 }: { children: React.ReactNode; h?: number }) => (
  <svg viewBox={`0 0 520 ${h}`} style={{ width: "100%", maxWidth: 560, display: "block", margin: "0 auto", background: "#fff" }}>{children}</svg>
);

/* ---------------------------------------------------------------- 12.1 radians, arcs and sectors */

export function IBRadian({ init = [60, 5] }: { init?: [number, number] }) {
  const [deg, setDeg] = useState(init[0]), [r, setR] = useState(init[1]);
  const th = rad(deg), s = r * th, A = 0.5 * r * r * th;
  const cx = 260, cy = 150, R = 120;
  const ex = cx + R * Math.cos(-th), ey = cy + R * Math.sin(-th), large = th > PI ? 1 : 0;
  return (
    <WidgetCard title="Radians, arcs and sectors" subtitle="θ (radians) = arc length ÷ radius; arc length s = rθ; sector area A = ½r²θ">
      <Row>
        <Slider label="angle (degrees)" value={deg} min={5} max={355} step={5} onChange={setDeg} color={C.amber} />
        <Slider label="radius r" value={r} min={1} max={12} step={0.5} onChange={setR} color={C.blue} />
      </Row>
      <Box>
        <circle cx={cx} cy={cy} r={R} fill="none" stroke="#cbd5e1" strokeWidth={1.6} />
        <path d={`M ${cx} ${cy} L ${cx + R} ${cy} A ${R} ${R} 0 ${large} 0 ${ex} ${ey} Z`} fill="#ede9fe" stroke={C.violet} strokeWidth={2} />
        <path d={`M ${cx + R} ${cy} A ${R} ${R} 0 ${large} 0 ${ex} ${ey}`} fill="none" stroke={C.red} strokeWidth={4} />
        <text x={cx + 30} y={cy - 8} fontSize={14} fontWeight={700} fill={C.amber}>θ</text>
        <text x={cx + R / 2} y={cy + 18} fontSize={13} fontWeight={700} fill={C.blue} textAnchor="middle">r = {r}</text>
      </Box>
      <Readout tone="blue">
        <MathText html={`\\(\\theta=${deg}^\\circ=${deg}\\times\\frac{\\pi}{180}=${piLabel(th).replace("π", "\\pi ")}\\approx${n2(th, 4)}\\) rad. Arc length (red) \\(s=r\\theta=${n2(s, 3)}\\); sector area \\(A=\\tfrac12r^2\\theta=${n2(A, 3)}\\). One radian is the angle whose arc equals the radius (≈ 57.3°).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 12.2 unit circle */

export function IBUnitCircle({ init = 150 }: { init?: number }) {
  const [deg, setDeg] = useState(init);
  const th = rad(deg), c = Math.cos(th), s = Math.sin(th);
  const q = deg % 360 === 0 || deg % 90 === 0 ? 0 : Math.floor((((deg % 360) + 360) % 360) / 90) + 1;
  const ref = q === 1 ? deg % 360 : q === 2 ? 180 - (deg % 360) : q === 3 ? (deg % 360) - 180 : q === 4 ? 360 - (deg % 360) : 0;
  const v: View = { xmin: -1.5, xmax: 1.5, ymin: -1.3, ymax: 1.3 };
  return (
    <WidgetCard title="The unit circle" subtitle="the point at angle θ on the unit circle is (cos θ, sin θ); tan θ = sin θ / cos θ">
      <Row><Slider label="θ (degrees)" value={deg} min={0} max={360} step={15} onChange={setDeg} color={C.amber} /></Row>
      <Plane view={v} label="Unit circle" step={0.5} stepY={0.5}>
        {(X, Y) => <>
          <path d={pathOf((x) => Math.sqrt(Math.max(0, 1 - x * x)), v, X, Y, -1, 1)} fill="none" stroke={C.violet} strokeWidth={2} />
          <path d={pathOf((x) => -Math.sqrt(Math.max(0, 1 - x * x)), v, X, Y, -1, 1)} fill="none" stroke={C.violet} strokeWidth={2} />
          <line x1={X(0)} y1={Y(0)} x2={X(c)} y2={Y(s)} stroke={C.amber} strokeWidth={2.4} />
          <line x1={X(c)} y1={Y(0)} x2={X(c)} y2={Y(s)} stroke={C.red} strokeWidth={2.4} strokeDasharray="5 4" />
          <line x1={X(0)} y1={Y(0)} x2={X(c)} y2={Y(0)} stroke={C.blue} strokeWidth={2.4} strokeDasharray="5 4" />
          {dot(X, Y, c, s, C.amber, `(${n2(c, 3)}, ${n2(s, 3)})`, "p")}
          <text x={X(0.7)} y={Y(0.7)} fontSize={13} fontWeight={700} fill="#16a34a">A</text>
          <text x={X(-0.8)} y={Y(0.7)} fontSize={13} fontWeight={700} fill="#16a34a">S</text>
          <text x={X(-0.8)} y={Y(-0.8)} fontSize={13} fontWeight={700} fill="#16a34a">T</text>
          <text x={X(0.7)} y={Y(-0.8)} fontSize={13} fontWeight={700} fill="#16a34a">C</text>
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`\\(\\theta=${deg}^\\circ=${piLabel(th).replace("π", "\\pi ")}\\): \\(\\cos\\theta=${n2(c, 4)}\\), \\(\\sin\\theta=${n2(s, 4)}\\), \\(\\tan\\theta=${Math.abs(c) < 1e-9 ? "\\text{undefined}" : n2(s / c, 4)}\\). ${q ? `Quadrant ${q}; reference angle \\(${n2(ref, 0)}^\\circ\\). CAST: positive ratios are ${["", "all", "sin", "tan", "cos"][q]}.` : "On an axis."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 12.3 identities */

const IDS: { label: string; L: string; R: string; f: Fn; g: Fn }[] = [
  { label: "sin² + cos² = 1", L: "\\sin^2x+\\cos^2x", R: "1", f: (x) => Math.sin(x) ** 2 + Math.cos(x) ** 2, g: () => 1 },
  { label: "sin 2x = 2 sin x cos x", L: "\\sin2x", R: "2\\sin x\\cos x", f: (x) => Math.sin(2 * x), g: (x) => 2 * Math.sin(x) * Math.cos(x) },
  { label: "cos 2x = 1 − 2 sin² x", L: "\\cos2x", R: "1-2\\sin^2x", f: (x) => Math.cos(2 * x), g: (x) => 1 - 2 * Math.sin(x) ** 2 },
  { label: "tan x = sin x / cos x", L: "\\tan x", R: "\\frac{\\sin x}{\\cos x}", f: Math.tan, g: (x) => Math.sin(x) / Math.cos(x) },
];

export function IBIdentity({ init = [1, 40] }: { init?: [number, number] }) {
  const [k, setK] = useState(init[0]), [deg, setDeg] = useState(init[1]);
  const I = IDS[k], x = rad(deg), v: View = { xmin: 0, xmax: 2 * PI, ymin: -2.5, ymax: 2.5 };
  return (
    <WidgetCard title="Checking identities" subtitle="an identity is true for every value of x: the two sides draw the same graph">
      <Row><Segmented label="identity:" value={k} onChange={setK} options={IDS.map((t, i) => ({ value: i, label: t.label }))} /></Row>
      <Row><Slider label="x (degrees)" value={deg} min={0} max={360} step={5} onChange={setDeg} color={C.amber} /></Row>
      <Plane view={v} label="Both sides" step={PI / 2} stepY={1}>
        {(X, Y) => <>
          <path d={pathOf(I.f, v, X, Y)} fill="none" stroke={C.violet} strokeWidth={5} opacity={0.5} />
          <path d={pathOf(I.g, v, X, Y)} fill="none" stroke={C.amber} strokeWidth={2} strokeDasharray="7 5" />
          {Number.isFinite(I.f(x)) && Math.abs(I.f(x)) < 2.5 && dot(X, Y, x, I.f(x), C.red, undefined, "p")}
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`At \\(x=${deg}^\\circ\\): \\(${I.L}=${n2(I.f(x), 5)}\\) and \\(${I.R}=${n2(I.g(x), 5)}\\). The thick violet and dashed amber curves coincide for every x — that is what makes it an identity (not just an equation).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 12.4 equations */

const EQF: { label: string; f: Fn; inv: (k: number) => number; per: number; pair: (p: number) => number[]; tex: string }[] = [
  { label: "sin x = k", f: Math.sin, inv: Math.asin, per: 2 * PI, pair: (p) => [p, PI - p], tex: "\\sin x" },
  { label: "cos x = k", f: Math.cos, inv: Math.acos, per: 2 * PI, pair: (p) => [p, -p], tex: "\\cos x" },
  { label: "tan x = k", f: Math.tan, inv: Math.atan, per: PI, pair: (p) => [p], tex: "\\tan x" },
];

export function IBTrigEq({ init = [0, 0.5] }: { init?: [number, number] }) {
  const [k, setK] = useState(init[0]), [c, setC] = useState(init[1]);
  const E = EQF[k], v: View = { xmin: 0, xmax: 2 * PI, ymin: -2.5, ymax: 2.5 };
  const ok = k === 2 || Math.abs(c) <= 1;
  const sols: number[] = [];
  if (ok) {
    const p = E.inv(c);
    for (const base of E.pair(p)) for (let n = -3; n <= 3; n++) { const x = base + n * E.per; if (x >= -1e-9 && x <= 2 * PI + 1e-9 && !sols.some((s) => Math.abs(s - x) < 1e-7)) sols.push(x); }
    sols.sort((a, b) => a - b);
  }
  return (
    <WidgetCard title="Solving trigonometric equations" subtitle="solutions in 0 ≤ x ≤ 2π are where the curve meets the line y = k; use symmetry and the period to find them all">
      <Row><Segmented label="equation:" value={k} onChange={setK} options={EQF.map((e, i) => ({ value: i, label: e.label }))} /></Row>
      <Row><Slider label="k" value={c} min={k === 2 ? -2 : -1.2} max={k === 2 ? 2 : 1.2} step={0.05} onChange={setC} color={C.amber} /></Row>
      <Plane view={v} label="Equation" step={PI / 2} stepY={0.5}>
        {(X, Y) => <>
          <path d={pathOf(E.f, v, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
          <line x1={X(0)} y1={Y(c)} x2={X(2 * PI)} y2={Y(c)} stroke={C.amber} strokeWidth={2} strokeDasharray="7 5" />
          {sols.map((x, i) => <g key={i}>{dot(X, Y, x, c, C.red, piLabel(x), `s${i}`)}</g>)}
        </>}
      </Plane>
      <Readout tone={ok ? "blue" : "amber"}>
        <MathText html={ok ? `\\(${E.tex}=${n2(c, 2)}\\): principal value \\(${n2(E.inv(c), 4)}\\). Solutions in \\([0,2\\pi]\\): ${sols.map((x) => `\\(${n2(x, 4)}\\)`).join(", ") || "none"} (${sols.length}). ${k === 0 ? "Second solution: π − (principal value)." : k === 1 ? "Second solution: 2π − (principal value)." : "Add π repeatedly (period π)."}` : `No solutions: \\(${E.tex}\\) is always between −1 and 1.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 12.5 basic graphs */

export function IBTrigGraph({ init = 0 }: { init?: number }) {
  const [k, setK] = useState(init);
  const fs: Fn[] = [Math.sin, Math.cos, Math.tan], f = fs[k], v: View = { xmin: -2 * PI, xmax: 2 * PI, ymin: -3, ymax: 3 };
  const info = [
    "y = sin x: period 2π, amplitude 1, range [−1, 1]; zeros at x = nπ; maximum 1 at π/2 + 2nπ.",
    "y = cos x: period 2π, amplitude 1, range [−1, 1]; zeros at π/2 + nπ; it is sin x shifted π/2 left.",
    "y = tan x: period π, no amplitude, range all real numbers; vertical asymptotes at x = π/2 + nπ; zeros at nπ.",
  ][k];
  return (
    <WidgetCard title="Graphs of sin, cos and tan" subtitle="the unit circle unrolled: x is the angle in radians, y is the ratio">
      <Row><Segmented label="graph:" value={k} onChange={setK} options={[{ value: 0, label: "sin x" }, { value: 1, label: "cos x" }, { value: 2, label: "tan x" }]} /></Row>
      <Plane view={v} label="Trig graph" step={PI / 2} stepY={1}>
        {(X, Y) => <>
          {k === 2 && [-1.5, -0.5, 0.5, 1.5].map((m) => <line key={m} x1={X(m * PI)} y1={Y(v.ymin)} x2={X(m * PI)} y2={Y(v.ymax)} stroke={C.red} strokeWidth={1.6} strokeDasharray="6 5" />)}
          <path d={pathOf(f, v, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
        </>}
      </Plane>
      <Readout tone="blue"><MathText html={info} /></Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 12.6 transformed sinusoids */

export function IBSinusoid({ init = [2, 2, 0, 1, 0] }: { init?: [number, number, number, number, number] }) {
  const [a, setA] = useState(init[0]), [b, setB] = useState(init[1]), [c, setC] = useState(init[2]), [d, setD] = useState(init[3]), [k, setK] = useState(init[4]);
  const base = k === 0 ? Math.sin : Math.cos, f = (x: number) => a * base(b * (x - c)) + d, v: View = { xmin: -PI, xmax: 2 * PI, ymin: -6, ymax: 6 };
  const per = (2 * PI) / b;
  return (
    <WidgetCard title="Transforming sine and cosine" subtitle="y = a sin(b(x − c)) + d: amplitude |a|, period 2π/b, horizontal shift c, principal axis y = d">
      <Row><Segmented label="base:" value={k} onChange={setK} options={[{ value: 0, label: "sin" }, { value: 1, label: "cos" }]} /></Row>
      <Row>
        <Slider label="a" value={a} min={-4} max={4} step={0.5} onChange={(x) => setA(x === 0 ? 0.5 : x)} color={C.violet} />
        <Slider label="b" value={b} min={0.5} max={4} step={0.5} onChange={setB} color={C.blue} />
      </Row>
      <Row>
        <Slider label="c" value={c} min={-PI} max={PI} step={PI / 12} onChange={setC} color={C.green} />
        <Slider label="d" value={d} min={-3} max={3} step={0.5} onChange={setD} color={C.amber} />
      </Row>
      <Plane view={v} label="Sinusoid" step={PI / 2} stepY={1}>
        {(X, Y) => <>
          <path d={pathOf(base, v, X, Y)} fill="none" stroke="#cbd5e1" strokeWidth={2} />
          <line x1={X(v.xmin)} y1={Y(d)} x2={X(v.xmax)} y2={Y(d)} stroke={C.amber} strokeWidth={1.6} strokeDasharray="6 5" />
          <path d={pathOf(f, v, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`\\(y=${n2(a)}\\${k === 0 ? "sin" : "cos"}\\left(${n2(b)}\\left(x${c < 0 ? "+" : "-"}${piLabel(Math.abs(c)).replace("π", "\\pi ")}\\right)\\right)${d < 0 ? "-" : "+"}${n2(Math.abs(d))}\\). Amplitude \\(${n2(Math.abs(a))}\\), period \\(\\frac{2\\pi}{${n2(b)}}=${n2(per, 4)}\\), horizontal shift \\(${n2(c, 4)}\\), principal axis \\(y=${n2(d)}\\); maximum \\(${n2(d + Math.abs(a))}\\), minimum \\(${n2(d - Math.abs(a))}\\). Grey: the basic curve.`} />
      </Readout>
    </WidgetCard>
  );
}
