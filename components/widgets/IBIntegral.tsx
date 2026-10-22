"use client";

// IB AA SL chapter 10 (integration) explorers: the family of antiderivatives F(x) + C through a chosen point, area under
// 1/x and e^x as ln and exponential, lower/upper/trapezium sums approaching the definite integral, signed area and
// total area, area between two curves, and velocity–time graphs giving displacement and distance.

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { Plane, r2, type View } from "./Systems";
import { dot } from "./Quadratics";

type Fn = (x: number) => number;
const n2 = (v: number, d = 2) => r2(v, d);
const sg = (v: number) => (v < 0 ? `-${n2(-v)}` : `+${n2(v)}`);
function pathOf(f: Fn, v: View, X: (x: number) => number, Y: (y: number) => number, a = v.xmin, b = v.xmax) {
  const band = (v.ymax - v.ymin) * 3;
  let d = "", pen = false;
  for (let i = 0; i <= 500; i++) {
    const x = a + ((b - a) * i) / 500, y = f(x);
    if (!Number.isFinite(y) || y > v.ymax + band || y < v.ymin - band) { pen = false; continue; }
    d += `${pen ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)} `; pen = true;
  }
  return d;
}
/** polygon between f and g (g = 0 for the x-axis) on [a, b] */
function band(f: Fn, g: Fn, a: number, b: number, X: (x: number) => number, Y: (y: number) => number) {
  const N = 200, top: string[] = [], bot: string[] = [];
  for (let i = 0; i <= N; i++) { const x = a + ((b - a) * i) / N; top.push(`${X(x).toFixed(1)},${Y(f(x)).toFixed(1)}`); bot.push(`${X(x).toFixed(1)},${Y(g(x)).toFixed(1)}`); }
  return [...top, ...bot.reverse()].join(" ");
}
const simpson = (f: Fn, a: number, b: number, n = 400) => { const h = (b - a) / n; let s = f(a) + f(b); for (let i = 1; i < n; i++) s += f(a + i * h) * (i % 2 ? 4 : 2); return (s * h) / 3; };
const zero = () => 0;

/* ---------------------------------------------------------------- 10.1 antiderivatives */

const ANTI: { label: string; f: string; F: string; Ff: Fn; fp: Fn }[] = [
  { label: "2x", f: "2x", F: "x^2", Ff: (x) => x * x, fp: (x) => 2 * x },
  { label: "3x² − 4", f: "3x^2-4", F: "x^3-4x", Ff: (x) => x ** 3 - 4 * x, fp: (x) => 3 * x * x - 4 },
  { label: "−x + 1", f: "-x+1", F: "-\\tfrac12x^2+x", Ff: (x) => -x * x / 2 + x, fp: (x) => -x + 1 },
];

export function IBAntideriv({ init = [0, 0, 1, 3] }: { init?: [number, number, number, number] }) {
  const [k, setK] = useState(init[0]), [c, setC] = useState(init[1]), [px, setPx] = useState(init[2]), [py, setPy] = useState(init[3]);
  const A = ANTI[k], v: View = { xmin: -4, xmax: 4, ymin: -8, ymax: 8 };
  const cPoint = py - A.Ff(px);
  return (
    <WidgetCard title="The family of antiderivatives" subtitle="every F(x) + C has the same derivative f(x); a known point (a boundary condition) picks out one curve">
      <Row><Segmented label="f(x) =" value={k} onChange={setK} options={ANTI.map((a, i) => ({ value: i, label: a.label }))} /></Row>
      <Row>
        <Slider label="C" value={c} min={-5} max={5} step={0.5} onChange={setC} color={C.violet} />
        <Slider label="point x" value={px} min={-3} max={3} step={0.5} onChange={setPx} color={C.red} />
        <Slider label="point y" value={py} min={-6} max={6} step={0.5} onChange={setPy} color={C.red} />
      </Row>
      <Plane view={v} label="Antiderivatives" step={1} stepY={2}>
        {(X, Y) => <>
          {[-4, -2, 2, 4].map((cc) => <path key={cc} d={pathOf((x) => A.Ff(x) + cc, v, X, Y)} fill="none" stroke="#cbd5e1" strokeWidth={1.6} />)}
          <path d={pathOf((x) => A.Ff(x) + cPoint, v, X, Y)} fill="none" stroke={C.green} strokeWidth={2.2} strokeDasharray="7 4" />
          <path d={pathOf((x) => A.Ff(x) + c, v, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
          {dot(X, Y, px, py, C.red, `(${n2(px)}, ${n2(py)})`, "p")}
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`\\(\\int(${A.f})\\,dx=${A.F}+C\\). Violet: \\(C=${n2(c)}\\). Green dashed: the one curve through \\((${n2(px)},${n2(py)})\\), where \\(C=${n2(py)}-F(${n2(px)})=${n2(cPoint, 3)}\\). All curves are vertical translations of each other — same gradient at every x.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 10.2 area under 1/x and e^x */

export function IBLogArea({ init = [0, 3] }: { init?: [number, number] }) {
  const [k, setK] = useState(init[0]), [b, setB] = useState(init[1]);
  const isRec = k === 0, f: Fn = isRec ? (x) => 1 / x : Math.exp, a = isRec ? 1 : 0;
  const exact = isRec ? Math.log(b) : Math.exp(b) - 1, v: View = isRec ? { xmin: 0, xmax: 8, ymin: -0.5, ymax: 3 } : { xmin: -2, xmax: 3, ymin: -1, ymax: 20 };
  return (
    <WidgetCard title="Areas that give ln and e" subtitle="∫₁ᵇ (1/x) dx = ln b and ∫₀ᵇ eˣ dx = eᵇ − 1">
      <Row><Segmented label="f(x) =" value={k} onChange={setK} options={[{ value: 0, label: "1/x" }, { value: 1, label: "eˣ" }]} /></Row>
      <Row><Slider label="b" value={b} min={isRec ? 1.25 : 0.25} max={isRec ? 8 : 3} step={0.25} onChange={setB} color={C.blue} /></Row>
      <Plane view={v} label="Area" step={1} stepY={isRec ? 0.5 : 2}>
        {(X, Y) => <>
          <polygon points={band(f, zero, a, b, X, Y)} fill="#ddd6fe" stroke="none" />
          <path d={pathOf(f, v, X, Y, isRec ? 0.1 : v.xmin, v.xmax)} fill="none" stroke={C.violet} strokeWidth={3} />
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={isRec ? `Shaded area \\(\\int_1^{${n2(b)}}\\tfrac1x\\,dx=\\ln ${n2(b)}\\approx${n2(exact, 4)}\\) (numerical: ${n2(simpson(f, 1, b), 4)}). The area from 1 to \\(e\\approx2.718\\) is exactly 1.` : `Shaded area \\(\\int_0^{${n2(b)}}e^x\\,dx=e^{${n2(b)}}-1\\approx${n2(exact, 4)}\\) (numerical: ${n2(simpson(f, 0, b), 4)}). Since \\(e^x\\) is its own derivative, it is also its own antiderivative.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 10.3 Riemann sums and trapezia */

const RFNS: { label: string; tex: string; f: Fn; a: number; b: number; ymax: number }[] = [
  { label: "x² + 1 on [0, 3]", tex: "x^2+1", f: (x) => x * x + 1, a: 0, b: 3, ymax: 11 },
  { label: "√x on [0, 4]", tex: "\\sqrt x", f: (x) => Math.sqrt(x), a: 0, b: 4, ymax: 2.5 },
  { label: "8 − x² on [0, 2]", tex: "8-x^2", f: (x) => 8 - x * x, a: 0, b: 2, ymax: 9 },
];

export function IBRiemann({ init = [0, 4, 0] }: { init?: [number, number, number] }) {
  const [k, setK] = useState(init[0]), [n, setN] = useState(init[1]), [m, setM] = useState(init[2]);
  const R = RFNS[k], h = (R.b - R.a) / n, v: View = { xmin: R.a - 0.5, xmax: R.b + 0.5, ymin: -0.5, ymax: R.ymax };
  const xs = Array.from({ length: n }, (_, i) => R.a + i * h);
  const lower = xs.reduce((s, x) => s + Math.min(R.f(x), R.f(x + h)) * h, 0), upper = xs.reduce((s, x) => s + Math.max(R.f(x), R.f(x + h)) * h, 0);
  const trap = xs.reduce((s, x) => s + ((R.f(x) + R.f(x + h)) / 2) * h, 0), exact = simpson(R.f, R.a, R.b);
  return (
    <WidgetCard title="Approximating area" subtitle="lower and upper rectangle sums trap the area; trapezia are closer; all approach the definite integral as n grows">
      <Row><Segmented label="f:" value={k} onChange={setK} options={RFNS.map((r, i) => ({ value: i, label: r.label }))} /></Row>
      <Row><Segmented label="method:" value={m} onChange={setM} options={[{ value: 0, label: "lower" }, { value: 1, label: "upper" }, { value: 2, label: "trapezia" }]} /></Row>
      <Row><Slider label="n strips" value={n} min={1} max={40} step={1} onChange={setN} color={C.blue} /></Row>
      <Plane view={v} label="Strips" step={1} stepY={R.ymax > 5 ? 2 : 0.5}>
        {(X, Y) => <>
          {xs.map((x, i) => {
            const y0 = R.f(x), y1 = R.f(x + h);
            if (m === 2) return <polygon key={i} points={`${X(x)},${Y(0)} ${X(x)},${Y(y0)} ${X(x + h)},${Y(y1)} ${X(x + h)},${Y(0)}`} fill="#fde68a" stroke={C.amber} strokeWidth={1} />;
            const hh = m === 0 ? Math.min(y0, y1) : Math.max(y0, y1);
            return <rect key={i} x={X(x)} y={Y(hh)} width={X(x + h) - X(x)} height={Y(0) - Y(hh)} fill={m === 0 ? "#bfdbfe" : "#fecaca"} stroke={m === 0 ? C.blue : C.red} strokeWidth={1} />;
          })}
          <path d={pathOf(R.f, v, X, Y, Math.max(v.xmin, k === 1 ? 0 : v.xmin), v.xmax)} fill="none" stroke={C.violet} strokeWidth={3} />
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`\\(\\int_{${R.a}}^{${R.b}}${R.tex}\\,dx\\approx${n2(exact, 4)}\\). With \\(n=${n}\\): lower \\(${n2(lower, 4)}\\), upper \\(${n2(upper, 4)}\\), trapezia \\(${n2(trap, 4)}\\). Lower ≤ area ≤ upper; the gap shrinks as \\(n\\) increases.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 10.4 signed area */

const SFNS: { label: string; tex: string; F: string; f: Fn; Fn: Fn; roots: number[] }[] = [
  { label: "x² − 4", tex: "x^2-4", F: "\\tfrac13x^3-4x", f: (x) => x * x - 4, Fn: (x) => x ** 3 / 3 - 4 * x, roots: [-2, 2] },
  { label: "x³ − 3x", tex: "x^3-3x", F: "\\tfrac14x^4-\\tfrac32x^2", f: (x) => x ** 3 - 3 * x, Fn: (x) => x ** 4 / 4 - 1.5 * x * x, roots: [-Math.sqrt(3), 0, Math.sqrt(3)] },
  { label: "3 − x", tex: "3-x", F: "3x-\\tfrac12x^2", f: (x) => 3 - x, Fn: (x) => 3 * x - x * x / 2, roots: [3] },
];

export function IBSignedArea({ init = [0, 0, 3] }: { init?: [number, number, number] }) {
  const [k, setK] = useState(init[0]), [a, setA] = useState(init[1]), [b, setB] = useState(init[2]);
  const F = SFNS[k], lo = Math.min(a, b), hi = Math.max(a, b), v: View = { xmin: -4, xmax: 5, ymin: -6, ymax: 8 };
  const net = F.Fn(b) - F.Fn(a);
  const cuts = [lo, ...F.roots.filter((r) => r > lo && r < hi), hi];
  let total = 0; for (let i = 0; i < cuts.length - 1; i++) total += Math.abs(F.Fn(cuts[i + 1]) - F.Fn(cuts[i]));
  return (
    <WidgetCard title="Definite integral and area" subtitle="∫ₐᵇ f(x)dx = F(b) − F(a) counts area below the axis as negative; total area adds the parts as positive">
      <Row><Segmented label="f(x) =" value={k} onChange={setK} options={SFNS.map((s, i) => ({ value: i, label: s.label }))} /></Row>
      <Row>
        <Slider label="a" value={a} min={-3} max={4} step={0.5} onChange={setA} color={C.blue} />
        <Slider label="b" value={b} min={-3} max={4} step={0.5} onChange={setB} color={C.green} />
      </Row>
      <Plane view={v} label="Signed area" step={1} stepY={2}>
        {(X, Y) => <>
          <polygon points={band((x) => Math.max(0, F.f(x)), zero, lo, hi, X, Y)} fill="#bbf7d0" stroke="none" />
          <polygon points={band((x) => Math.min(0, F.f(x)), zero, lo, hi, X, Y)} fill="#fecaca" stroke="none" />
          <path d={pathOf(F.f, v, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`\\(\\int_{${n2(a)}}^{${n2(b)}}(${F.tex})\\,dx=\\left[${F.F}\\right]_{${n2(a)}}^{${n2(b)}}=${n2(net, 4)}\\). Total area (green + red, both positive) \\(=${n2(total, 4)}\\). ${Math.abs(Math.abs(net) - total) > 1e-6 ? "They differ because part of the region is below the x-axis — split at the roots." : "They agree here (up to sign) because f does not change sign on the interval."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 10.5 area between curves */

const PAIRS: { label: string; f: Fn; g: Fn; ft: string; gt: string; view: View }[] = [
  { label: "x + 2 and x²", f: (x) => x + 2, g: (x) => x * x, ft: "x+2", gt: "x^2", view: { xmin: -3, xmax: 4, ymin: -2, ymax: 8 } },
  { label: "8 − x² and x² ", f: (x) => 8 - x * x, g: (x) => x * x, ft: "8-x^2", gt: "x^2", view: { xmin: -4, xmax: 4, ymin: -2, ymax: 10 } },
  { label: "√x and x/2", f: (x) => Math.sqrt(Math.max(0, x)), g: (x) => x / 2, ft: "\\sqrt x", gt: "\\tfrac x2", view: { xmin: -1, xmax: 6, ymin: -1, ymax: 3 } },
];
/** crossings of f − g on [lo, hi] by sign change + bisection */
function crossings(h: Fn, lo: number, hi: number) {
  const out: number[] = []; const N = 400;
  for (let i = 0; i < N; i++) {
    let a = lo + ((hi - lo) * i) / N, b = lo + ((hi - lo) * (i + 1)) / N;
    if (h(a) === 0) { out.push(a); continue; }
    if (h(a) * h(b) < 0) { for (let j = 0; j < 50; j++) { const m = (a + b) / 2; if (h(a) * h(m) <= 0) b = m; else a = m; } out.push((a + b) / 2); }
  }
  return out;
}

export function IBBetween({ init = [0] }: { init?: [number] }) {
  const [k, setK] = useState(init[0]);
  const Pp = PAIRS[k], h = (x: number) => Pp.f(x) - Pp.g(x);
  const xs = crossings(h, Pp.view.xmin, Pp.view.xmax);
  const a = xs[0] ?? 0, b = xs[xs.length - 1] ?? 0, area = Math.abs(simpson(h, a, b));
  return (
    <WidgetCard title="Area between two curves" subtitle="find where the curves meet, then integrate (upper − lower) between those x-values">
      <Row><Segmented label="curves:" value={k} onChange={setK} options={PAIRS.map((p, i) => ({ value: i, label: p.label }))} /></Row>
      <Plane view={Pp.view} label="Between curves" step={1} stepY={k === 2 ? 0.5 : 2}>
        {(X, Y) => <>
          <polygon points={band(Pp.f, Pp.g, a, b, X, Y)} fill="#ddd6fe" stroke="none" />
          <path d={pathOf(Pp.f, Pp.view, X, Y, k === 2 ? 0 : Pp.view.xmin)} fill="none" stroke={C.violet} strokeWidth={3} />
          <path d={pathOf(Pp.g, Pp.view, X, Y)} fill="none" stroke={C.amber} strokeWidth={3} />
          {xs.map((x, i) => <g key={i}>{dot(X, Y, x, Pp.f(x), C.red, `(${n2(x)}, ${n2(Pp.f(x))})`, `c${i}`)}</g>)}
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`Upper \\(y=${Pp.ft}\\) (violet), lower \\(y=${Pp.gt}\\) (amber), meeting at \\(x=${n2(a)}\\) and \\(x=${n2(b)}\\). Area \\(=\\int_{${n2(a)}}^{${n2(b)}}\\left[(${Pp.ft})-(${Pp.gt})\\right]dx\\approx${n2(area, 4)}\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 10.6 kinematics */

const VFNS: { label: string; tex: string; v: Fn; S: Fn; roots: number[]; vmax: number }[] = [
  { label: "v = 2t − 6", tex: "2t-6", v: (t) => 2 * t - 6, S: (t) => t * t - 6 * t, roots: [3], vmax: 8 },
  { label: "v = t² − 5t + 4", tex: "t^2-5t+4", v: (t) => t * t - 5 * t + 4, S: (t) => t ** 3 / 3 - 2.5 * t * t + 4 * t, roots: [1, 4], vmax: 12 },
  { label: "v = 10e^(−0.5t) − 2", tex: "10e^{-0.5t}-2", v: (t) => 10 * Math.exp(-0.5 * t) - 2, S: (t) => -20 * Math.exp(-0.5 * t) - 2 * t, roots: [2 * Math.log(5)], vmax: 9 },
];

export function IBVelocity({ init = [0, 6] }: { init?: [number, number] }) {
  const [k, setK] = useState(init[0]), [T, setT] = useState(init[1]);
  const V = VFNS[k], view: View = { xmin: -0.5, xmax: 8, ymin: -7, ymax: V.vmax };
  const disp = V.S(T) - V.S(0), cuts = [0, ...V.roots.filter((r) => r > 0 && r < T), T];
  let dist = 0; for (let i = 0; i < cuts.length - 1; i++) dist += Math.abs(V.S(cuts[i + 1]) - V.S(cuts[i]));
  return (
    <WidgetCard title="Velocity, displacement and distance" subtitle="displacement = ∫v dt (signed); distance = ∫|v| dt — split where v = 0, where the particle turns">
      <Row><Segmented label="velocity:" value={k} onChange={setK} options={VFNS.map((f, i) => ({ value: i, label: f.label }))} /></Row>
      <Row><Slider label="end time T" value={T} min={0.5} max={8} step={0.5} onChange={setT} color={C.blue} /></Row>
      <Plane view={view} label="Velocity–time" step={1} stepY={2}>
        {(X, Y) => <>
          <polygon points={band((t) => Math.max(0, V.v(t)), zero, 0, T, X, Y)} fill="#bbf7d0" stroke="none" />
          <polygon points={band((t) => Math.min(0, V.v(t)), zero, 0, T, X, Y)} fill="#fecaca" stroke="none" />
          <path d={pathOf(V.v, view, X, Y, 0, 8)} fill="none" stroke={C.violet} strokeWidth={3} />
          {V.roots.filter((r) => r > 0 && r < 8).map((r) => <g key={r}>{dot(X, Y, r, 0, C.red, `t = ${n2(r)}`, `r${r}`)}</g>)}
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`\\(v(t)=${V.tex}\\). Displacement on \\([0,${n2(T)}]\\): \\(\\int_0^{${n2(T)}}v\\,dt=${n2(disp, 4)}\\) (green minus red). Distance: \\(\\int_0^{${n2(T)}}|v|\\,dt=${n2(dist, 4)}\\) (green plus red). The particle changes direction where \\(v=0\\)${V.roots.length ? ` (t = ${V.roots.map((r) => n2(r)).join(", ")})` : ""}.`} />
      </Readout>
    </WidgetCard>
  );
}
