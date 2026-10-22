"use client";

// IB AA SL chapter 13 (more calculus) explorers: chain, product and quotient rules with a moving tangent, the gradient
// curves of sin x and cos x, tangents/normals and stationary points of trigonometric and exponential curves, areas
// under sine and cosine, integration by substitution as a change of variable, and accumulating change from a rate.

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { Plane, r2, type View } from "./Systems";
import { dot } from "./Quadratics";

type Fn = (x: number) => number;
const n2 = (v: number, d = 2) => r2(v, d);
const PI = Math.PI;
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
function band(f: Fn, g: Fn, a: number, b: number, X: (x: number) => number, Y: (y: number) => number) {
  const N = 200, top: string[] = [], bot: string[] = [];
  for (let i = 0; i <= N; i++) { const x = a + ((b - a) * i) / N; top.push(`${X(x).toFixed(1)},${Y(f(x)).toFixed(1)}`); bot.push(`${X(x).toFixed(1)},${Y(g(x)).toFixed(1)}`); }
  return [...top, ...bot.reverse()].join(" ");
}
const simpson = (f: Fn, a: number, b: number, n = 400) => { const h = (b - a) / n; let s = f(a) + f(b); for (let i = 1; i < n; i++) s += f(a + i * h) * (i % 2 ? 4 : 2); return (s * h) / 3; };
const zero = () => 0;
const line = (m: number, x0: number, y0: number): Fn => (x) => y0 + m * (x - x0);

/* ---------------------------------------------------------------- 13.1 chain, product and quotient rules */

const RULES: { label: string; rule: string; f: string; d: string; F: Fn; D: Fn; view: View; how: string }[] = [
  { label: "(3x − 1)⁴", rule: "chain", f: "(3x-1)^4", d: "12(3x-1)^3", F: (x) => (3 * x - 1) ** 4, D: (x) => 12 * (3 * x - 1) ** 3, view: { xmin: -0.5, xmax: 1.2, ymin: -2, ymax: 8 }, how: "outer \\(u^4\\to4u^3\\), times inner derivative 3" },
  { label: "√(x² + 5)", rule: "chain", f: "\\sqrt{x^2+5}", d: "\\frac{x}{\\sqrt{x^2+5}}", F: (x) => Math.sqrt(x * x + 5), D: (x) => x / Math.sqrt(x * x + 5), view: { xmin: -4, xmax: 4, ymin: -1, ymax: 6 }, how: "outer \\(\\sqrt u\\to\\frac{1}{2\\sqrt u}\\), times inner derivative \\(2x\\)" },
  { label: "x²eˣ", rule: "product", f: "x^2e^x", d: "2xe^x+x^2e^x", F: (x) => x * x * Math.exp(x), D: (x) => (2 * x + x * x) * Math.exp(x), view: { xmin: -4, xmax: 1, ymin: -1.5, ymax: 4 }, how: "\\(u'v+uv'\\) with \\(u=x^2\\), \\(v=e^x\\)" },
  { label: "x ln x", rule: "product", f: "x\\ln x", d: "\\ln x+1", F: (x) => x * Math.log(x), D: (x) => Math.log(x) + 1, view: { xmin: 0, xmax: 3, ymin: -1, ymax: 3 }, how: "\\(u'v+uv'\\) with \\(u=x\\), \\(v=\\ln x\\)" },
  { label: "x/(x² + 1)", rule: "quotient", f: "\\frac{x}{x^2+1}", d: "\\frac{1-x^2}{(x^2+1)^2}", F: (x) => x / (x * x + 1), D: (x) => (1 - x * x) / (x * x + 1) ** 2, view: { xmin: -4, xmax: 4, ymin: -1, ymax: 1 }, how: "\\(\\frac{u'v-uv'}{v^2}\\) with \\(u=x\\), \\(v=x^2+1\\)" },
];

export function IBRules({ init = [0, 0.5] }: { init?: [number, number] }) {
  const [k, setK] = useState(init[0]), [a, setA] = useState(init[1]);
  const R = RULES[k], v = R.view, lo = k === 3 ? 0.1 : v.xmin + 0.1, x0 = Math.min(Math.max(a, lo), v.xmax - 0.1);
  const m = R.D(x0), y0 = R.F(x0);
  return (
    <WidgetCard title="Chain, product and quotient rules" subtitle="the rule gives a formula for the gradient; check it against the tangent line at any point">
      <Row><Segmented label="f(x) =" value={k} onChange={setK} options={RULES.map((r, i) => ({ value: i, label: r.label }))} /></Row>
      <Row><Slider label="x" value={x0} min={lo} max={v.xmax - 0.1} step={0.05} onChange={setA} color={C.red} /></Row>
      <Plane view={v} label="Tangent" step={v.xmax - v.xmin > 4 ? 1 : 0.5} stepY={v.ymax - v.ymin > 4 ? 1 : 0.5}>
        {(X, Y) => <>
          <path d={pathOf(R.F, v, X, Y, k === 3 ? 0.02 : v.xmin)} fill="none" stroke={C.violet} strokeWidth={3} />
          <path d={pathOf(line(m, x0, y0), v, X, Y)} fill="none" stroke={C.amber} strokeWidth={2.2} strokeDasharray="7 4" />
          {dot(X, Y, x0, y0, C.red, `(${n2(x0)}, ${n2(y0)})`, "p")}
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`${R.rule} rule: ${R.how}. \\(f'(x)=${R.d}\\), so \\(f'(${n2(x0)})=${n2(m, 3)}\\) — the slope of the amber tangent.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 13.2 derivatives of sin and cos */

export function IBTrigDeriv({ init = [0, 1] }: { init?: [number, number] }) {
  const [k, setK] = useState(init[0]), [a, setA] = useState(init[1]);
  const isSin = k === 0, f: Fn = isSin ? Math.sin : Math.cos, fp: Fn = isSin ? Math.cos : (x) => -Math.sin(x);
  const v: View = { xmin: 0, xmax: 2 * PI, ymin: -1.6, ymax: 1.6 }, m = fp(a);
  return (
    <WidgetCard title="The gradient of sine and cosine" subtitle="plot the slope of the tangent at every x and the gradient curve appears">
      <Row><Segmented label="f(x) =" value={k} onChange={setK} options={[{ value: 0, label: "sin x" }, { value: 1, label: "cos x" }]} /></Row>
      <Row><Slider label="x" value={a} min={0} max={6.28} step={0.02} onChange={setA} color={C.red} /></Row>
      <Plane view={v} label="Gradient curve" step={PI / 2} stepY={0.5}>
        {(X, Y) => <>
          <path d={pathOf(fp, v, X, Y, 0, a)} fill="none" stroke={C.green} strokeWidth={3} />
          <path d={pathOf(fp, v, X, Y)} fill="none" stroke={C.green} strokeWidth={1.2} strokeDasharray="3 4" />
          <path d={pathOf(f, v, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
          <path d={pathOf(line(m, a, f(a)), v, X, Y, a - 0.9, a + 0.9)} fill="none" stroke={C.amber} strokeWidth={2.4} />
          {dot(X, Y, a, f(a), C.red, "", "p")}
          {dot(X, Y, a, m, C.green, `slope ${n2(m)}`, "q")}
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`At \\(x=${n2(a)}\\) the tangent to \\(y=${isSin ? "\\sin x" : "\\cos x"}\\) has slope \\(${n2(m, 3)}\\). The green trace is \\(y=${isSin ? "\\cos x" : "-\\sin x"}\\): ${isSin ? "\\(\\frac{d}{dx}\\sin x=\\cos x\\)" : "\\(\\frac{d}{dx}\\cos x=-\\sin x\\)"} (x in radians).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 13.3 tangents, normals and stationary points */

const CURVES: { label: string; tex: string; f: Fn; fp: Fn; view: View; stat: number[] }[] = [
  { label: "x + 2cos x", tex: "x+2\\cos x", f: (x) => x + 2 * Math.cos(x), fp: (x) => 1 - 2 * Math.sin(x), view: { xmin: 0, xmax: 2 * PI, ymin: -2, ymax: 8 }, stat: [PI / 6, (5 * PI) / 6] },
  { label: "eˣ sin x", tex: "e^x\\sin x", f: (x) => Math.exp(x) * Math.sin(x), fp: (x) => Math.exp(x) * (Math.sin(x) + Math.cos(x)), view: { xmin: 0, xmax: 4, ymin: -16, ymax: 10 }, stat: [(3 * PI) / 4] },
  { label: "x e^(−x)", tex: "xe^{-x}", f: (x) => x * Math.exp(-x), fp: (x) => (1 - x) * Math.exp(-x), view: { xmin: -0.5, xmax: 6, ymin: -0.6, ymax: 0.8 }, stat: [1] },
];

export function IBTangentNormal({ init = [0, 1] }: { init?: [number, number] }) {
  const [k, setK] = useState(init[0]), [a, setA] = useState(init[1]);
  const Cv = CURVES[k], v = Cv.view, x0 = Math.min(Math.max(a, v.xmin), v.xmax), y0 = Cv.f(x0), m = Cv.fp(x0);
  const flat = Math.abs(m) < 1e-6;
  return (
    <WidgetCard title="Tangent, normal and stationary points" subtitle="tangent slope f′(a); normal slope −1/f′(a); stationary points where f′(x) = 0">
      <Row><Segmented label="f(x) =" value={k} onChange={setK} options={CURVES.map((c, i) => ({ value: i, label: c.label }))} /></Row>
      <Row><Slider label="a" value={x0} min={v.xmin} max={v.xmax} step={0.05} onChange={setA} color={C.red} /></Row>
      <Plane view={v} label="Tangent and normal" step={k === 0 ? PI / 2 : 1} stepY={k === 1 ? 4 : k === 2 ? 0.2 : 1}>
        {(X, Y) => <>
          <path d={pathOf(Cv.f, v, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
          <path d={pathOf(line(m, x0, y0), v, X, Y)} fill="none" stroke={C.amber} strokeWidth={2.2} />
          {!flat && <path d={pathOf(line(-1 / m, x0, y0), v, X, Y)} fill="none" stroke={C.green} strokeWidth={2.2} strokeDasharray="7 4" />}
          {Cv.stat.map((s, i) => <g key={i}>{dot(X, Y, s, Cv.f(s), C.blue, `(${n2(s)}, ${n2(Cv.f(s))})`, `s${i}`)}</g>)}
          {dot(X, Y, x0, y0, C.red, "", "p")}
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`\\(f(x)=${Cv.tex}\\). At \\(x=${n2(x0)}\\): \\(f'=${n2(m, 3)}\\), tangent (amber) \\(y-${n2(y0, 3)}=${n2(m, 3)}(x-${n2(x0)})\\); normal (green) slope \\(${flat ? "not defined (vertical)" : n2(-1 / m, 3)}\\). Blue: stationary points, where \\(f'(x)=0\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 13.4 areas under sine and cosine */

export function IBTrigArea({ init = [0, 2, 2] }: { init?: [number, number, number] }) {
  const [k, setK] = useState(init[0]), [A, setAmp] = useState(init[1]), [b, setB] = useState(init[2]);
  const isSin = k === 0, f: Fn = (x) => A * (isSin ? Math.sin(x) : Math.cos(x)), F: Fn = (x) => A * (isSin ? -Math.cos(x) : Math.sin(x));
  const v: View = { xmin: 0, xmax: 2 * PI, ymin: -3.5, ymax: 3.5 }, signed = F(b) - F(0), num = simpson(f, 0, b);
  return (
    <WidgetCard title="Areas under sine and cosine" subtitle="∫ sin x dx = −cos x + C and ∫ cos x dx = sin x + C; regions below the axis count as negative">
      <Row><Segmented label="f(x) =" value={k} onChange={setK} options={[{ value: 0, label: "a sin x" }, { value: 1, label: "a cos x" }]} /></Row>
      <Row>
        <Slider label="a" value={A} min={0.5} max={3} step={0.5} onChange={setAmp} color={C.violet} />
        <Slider label="upper limit b" value={b} min={0.1} max={6.28} step={0.02} onChange={setB} color={C.blue} />
      </Row>
      <Plane view={v} label="Area" step={PI / 2} stepY={1}>
        {(X, Y) => <>
          <polygon points={band((x) => Math.max(0, f(x)), zero, 0, b, X, Y)} fill="#bbf7d0" stroke="none" />
          <polygon points={band((x) => Math.min(0, f(x)), zero, 0, b, X, Y)} fill="#fecaca" stroke="none" />
          <path d={pathOf(f, v, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`\\(\\int_0^{${n2(b)}}${n2(A)}${isSin ? "\\sin x" : "\\cos x"}\\,dx=\\left[${isSin ? `-${n2(A)}\\cos x` : `${n2(A)}\\sin x`}\\right]_0^{${n2(b)}}=${n2(signed, 4)}\\) (numerical check \\(${n2(num, 4)}\\)): green area minus red area.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 13.5 substitution */

const SUBS: { label: string; f: string; u: string; du: string; g: Fn; u0: Fn; G: Fn; Ft: string; view: View }[] = [
  { label: "2x(x² + 1)³", f: "2x(x^2+1)^3", u: "x^2+1", du: "2x\\,dx", g: (x) => 2 * x * (x * x + 1) ** 3, u0: (x) => x * x + 1, G: (u) => u ** 4 / 4, Ft: "\\tfrac14u^4", view: { xmin: 0, xmax: 1.4, ymin: -1, ymax: 30 } },
  { label: "cos x · e^(sin x)", f: "\\cos x\\,e^{\\sin x}", u: "\\sin x", du: "\\cos x\\,dx", g: (x) => Math.cos(x) * Math.exp(Math.sin(x)), u0: Math.sin, G: Math.exp, Ft: "e^u", view: { xmin: 0, xmax: PI, ymin: -1.2, ymax: 3 } },
  { label: "x / (x² + 4)", f: "\\frac{x}{x^2+4}", u: "x^2+4", du: "2x\\,dx", g: (x) => x / (x * x + 4), u0: (x) => x * x + 4, G: (u) => 0.5 * Math.log(u), Ft: "\\tfrac12\\ln u", view: { xmin: 0, xmax: 6, ymin: -0.1, ymax: 0.3 } },
];

export function IBSubstitution({ init = [0, 1] }: { init?: [number, number] }) {
  const [k, setK] = useState(init[0]), [b, setB] = useState(init[1]);
  const Sb = SUBS[k], v = Sb.view, bb = Math.min(b, v.xmax), ua = Sb.u0(0), ub = Sb.u0(bb);
  const exact = Sb.G(ub) - Sb.G(ua), num = simpson(Sb.g, 0, bb);
  return (
    <WidgetCard title="Integration by substitution" subtitle="spot an inner function u whose derivative is also present; change the limits to u-values">
      <Row><Segmented label="integrand:" value={k} onChange={setK} options={SUBS.map((s, i) => ({ value: i, label: s.label }))} /></Row>
      <Row><Slider label="upper limit b" value={bb} min={0.1} max={v.xmax} step={0.05} onChange={setB} color={C.blue} /></Row>
      <Plane view={v} label="Integrand" step={k === 2 ? 1 : 0.5} stepY={k === 0 ? 5 : k === 1 ? 0.5 : 0.05}>
        {(X, Y) => <>
          <polygon points={band((x) => Math.max(0, Sb.g(x)), zero, 0, bb, X, Y)} fill="#bbf7d0" stroke="none" />
          <polygon points={band((x) => Math.min(0, Sb.g(x)), zero, 0, bb, X, Y)} fill="#fecaca" stroke="none" />
          <path d={pathOf(Sb.g, v, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`Let \\(u=${Sb.u}\\), \\(du=${Sb.du}\\). Limits: \\(x=0\\Rightarrow u=${n2(ua, 3)}\\), \\(x=${n2(bb)}\\Rightarrow u=${n2(ub, 3)}\\). \\(\\int_0^{${n2(bb)}}${Sb.f}\\,dx=\\left[${Sb.Ft}\\right]_{${n2(ua, 3)}}^{${n2(ub, 3)}}=${n2(exact, 4)}\\) (numerical check \\(${n2(num, 4)}\\)).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 13.6 accumulating change */

const RATES: { label: string; tex: string; r: Fn; R: Fn; view: View; unit: string }[] = [
  { label: "v = 3 sin t", tex: "3\\sin t", r: (t) => 3 * Math.sin(t), R: (t) => -3 * Math.cos(t), view: { xmin: 0, xmax: 2 * PI, ymin: -3.5, ymax: 3.5 }, unit: "m" },
  { label: "v = 2 cos 2t + 1", tex: "2\\cos2t+1", r: (t) => 2 * Math.cos(2 * t) + 1, R: (t) => Math.sin(2 * t) + t, view: { xmin: 0, xmax: 2 * PI, ymin: -1.5, ymax: 3.5 }, unit: "m" },
  { label: "flow = 40 − 30e^(−0.4t)", tex: "40-30e^{-0.4t}", r: (t) => 40 - 30 * Math.exp(-0.4 * t), R: (t) => 40 * t + 75 * Math.exp(-0.4 * t), view: { xmin: 0, xmax: 6, ymin: -2, ymax: 45 }, unit: "L" },
];

export function IBAccumulate({ init = [0, 4] }: { init?: [number, number] }) {
  const [k, setK] = useState(init[0]), [T, setT] = useState(init[1]);
  const Rt = RATES[k], v = Rt.view, TT = Math.min(T, v.xmax);
  const net = Rt.R(TT) - Rt.R(0), total = simpson((t) => Math.abs(Rt.r(t)), 0, TT, 800);
  return (
    <WidgetCard title="Accumulating change" subtitle="integrating a rate gives the net change; integrating its absolute value gives the total amount moved">
      <Row><Segmented label="rate:" value={k} onChange={setK} options={RATES.map((r, i) => ({ value: i, label: r.label }))} /></Row>
      <Row><Slider label="end time T" value={TT} min={0.1} max={v.xmax} step={0.05} onChange={setT} color={C.blue} /></Row>
      <Plane view={v} label="Rate–time" step={k === 2 ? 1 : PI / 2} stepY={k === 2 ? 5 : 1}>
        {(X, Y) => <>
          <polygon points={band((t) => Math.max(0, Rt.r(t)), zero, 0, TT, X, Y)} fill="#bbf7d0" stroke="none" />
          <polygon points={band((t) => Math.min(0, Rt.r(t)), zero, 0, TT, X, Y)} fill="#fecaca" stroke="none" />
          <path d={pathOf(Rt.r, v, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`Rate \\(${Rt.tex}\\). Net change on \\([0,${n2(TT)}]\\): \\(\\int_0^{${n2(TT)}}(${Rt.tex})\\,dt=${n2(net, 4)}\\) ${Rt.unit}. Total (with \\(|\\,\\cdot\\,|\\)): \\(${n2(total, 4)}\\) ${Rt.unit}. They differ only when the rate changes sign.`} />
      </Readout>
    </WidgetCard>
  );
}
