"use client";

// MCV4U chapter 4 (derivatives of sinusoidal functions) explorers: building the derivative of sin x from tangent
// slopes, the four-step cycle of derivatives of sin and cos, the chain rule for A·sin(kx + c) + d, and simple
// harmonic motion (position, velocity and acceleration of a mass on a spring).

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { Plane, r2, type View } from "./Systems";
import { dot } from "./Quadratics";

type Fn = (x: number) => number;
const rnd = (x: number) => Math.round(x * 100) / 100;
const num = (f: Fn, x: number, h = 1e-4) => (f(x + h) - f(x - h)) / (2 * h);
function pathOf(f: Fn, v: View, X: (x: number) => number, Y: (y: number) => number, a = v.xmin, b = v.xmax) {
  let d = "", pen = false;
  for (let i = 0; i <= 400; i++) {
    const x = a + ((b - a) * i) / 400, y = f(x);
    if (!Number.isFinite(y)) { pen = false; continue; }
    d += `${pen ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)} `; pen = true;
  }
  return d;
}
const PI = Math.PI;
/** a nice label for x in radians: multiples of π/6 shown as fractions of π */
function rad(x: number) {
  const k = Math.round((x / PI) * 12);
  if (Math.abs(k * (PI / 12) - x) > 1e-6) return r2(x);
  if (k === 0) return "0";
  const g = (a: number, b: number): number => (b ? g(b, a % b) : a);
  const d = g(Math.abs(k), 12), n = k / d, m = 12 / d;
  const top = n === 1 ? "π" : n === -1 ? "−π" : `${n}π`;
  return m === 1 ? top : `${top}/${m}`;
}

/* ---------------------------------------------------------------- 4.1 slopes of sin x */

export function SineSlopeLab({ init = { x: 0.5, trace: true } }: { init?: { x: number; trace: boolean } }) {
  const [x0, setX0] = useState(init.x), [trace, setTrace] = useState(init.trace);
  const f: Fn = Math.sin;
  const v: View = { xmin: -0.3, xmax: 2 * PI + 0.3, ymin: -1.6, ymax: 1.6 };
  const s = num(f, x0);
  const marks = Array.from({ length: 25 }, (_, i) => (i * 2 * PI) / 24).filter((x) => x <= x0 + 1e-9);
  return (
    <WidgetCard title="The slope of y = sin x" subtitle="Slide the tangent along the sine curve and record its slope as a point: the slopes trace a new curve">
      <Slider label="x (radians)" value={rnd(x0)} min={0} max={rnd(2 * PI)} step={PI / 24} onChange={setX0} color={C.red} />
      <Segmented options={[{ value: "on", label: "show slope points" }, { value: "off", label: "hide them" }]} value={trace ? "on" : "off"} onChange={(k) => setTrace(k === "on")} />
      <Plane view={v} label="y = sin x (violet), its tangent (green) and the slopes recorded so far (blue)" step={0.5} stepY={0.5}>
        {(X, Y) => <>
          <path d={pathOf(f, v, X, Y, 0, 2 * PI)} fill="none" stroke={C.violet} strokeWidth={3} />
          {trace && <path d={pathOf(Math.cos, v, X, Y, 0, x0)} fill="none" stroke={C.blue} strokeWidth={2} strokeDasharray="5 4" />}
          {trace && marks.map((m, i) => <circle key={i} cx={X(m)} cy={Y(Math.cos(m))} r={3.2} fill={C.blue} />)}
          <line x1={X(x0 - 0.9)} y1={Y(f(x0) - 0.9 * s)} x2={X(x0 + 0.9)} y2={Y(f(x0) + 0.9 * s)} stroke={C.green} strokeWidth={2.4} />
          {dot(X, Y, x0, f(x0), C.red, undefined, "p")}
          {trace && dot(X, Y, x0, s, C.blue, `slope ${r2(s)}`, "q")}
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText block html={`At \\(x=${rad(x0)}\\): \\(\\sin x=${r2(f(x0))}\\), slope of the tangent \\(=${r2(s)}\\), and \\(\\cos x=${r2(Math.cos(x0))}\\).`} />
        <MathText block html={`The slope is greatest (1) at \\(x=0\\) and \\(2\\pi\\), zero at the peak and trough \\(\\left(\\frac\\pi2,\\frac{3\\pi}2\\right)\\), and \\(-1\\) at \\(x=\\pi\\). The recorded slopes lie on \\(y=\\cos x\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 4.2 the derivative cycle */

const CYCLE = [
  { tex: "\\sin x", f: Math.sin, color: C.violet },
  { tex: "\\cos x", f: Math.cos, color: C.blue },
  { tex: "-\\sin x", f: (x: number) => -Math.sin(x), color: C.amber },
  { tex: "-\\cos x", f: (x: number) => -Math.cos(x), color: C.green },
];

export function DerivativeCycle({ init = { start: 0, n: 1, x: 1 } }: { init?: { start: number; n: number; x: number } }) {
  const [start, setStart] = useState(init.start), [n, setN] = useState(init.n), [x0, setX0] = useState(init.x);
  const F = CYCLE[start % 4], D = CYCLE[(start + n) % 4];
  const v: View = { xmin: -2 * PI, xmax: 2 * PI, ymin: -1.6, ymax: 1.6 };
  return (
    <WidgetCard title="The derivative cycle of sine and cosine" subtitle="sin → cos → −sin → −cos → sin: every fourth derivative returns to the start">
      <Segmented options={[{ value: 0, label: "f(x) = sin x" }, { value: 1, label: "f(x) = cos x" }]} value={start} onChange={setStart} />
      <Row gap={10}>
        <Slider label="number of derivatives n" value={n} min={0} max={8} step={1} onChange={setN} color={C.violet} />
        <Slider label="x" value={rnd(x0)} min={rnd(-2 * PI)} max={rnd(2 * PI)} step={PI / 12} onChange={setX0} color={C.red} />
      </Row>
      <Plane view={v} label="f (grey) and its n-th derivative (coloured)" step={1} stepY={0.5}>
        {(X, Y) => <>
          <path d={pathOf(F.f, v, X, Y)} fill="none" stroke={C.faint} strokeWidth={2} />
          <path d={pathOf(D.f, v, X, Y)} fill="none" stroke={D.color} strokeWidth={3} />
          <line x1={X(x0 - 0.8)} y1={Y(F.f(x0) - 0.8 * num(F.f, x0))} x2={X(x0 + 0.8)} y2={Y(F.f(x0) + 0.8 * num(F.f, x0))} stroke={C.green} strokeWidth={2} />
          {dot(X, Y, x0, F.f(x0), C.red, undefined, "p")}
          {dot(X, Y, x0, D.f(x0), D.color, `${r2(D.f(x0))}`, "q")}
        </>}
      </Plane>
      <Readout tone="green">
        <MathText block html={`\\(\\dfrac{d^{${n}}}{dx^{${n}}}\\,${F.tex}=${D.tex}\\) (since ${n} leaves remainder ${n % 4} after dividing by 4).`} />
        <MathText block html={`At \\(x=${rad(x0)}\\): the grey curve has tangent slope \\(${r2(num(F.f, x0))}\\), which equals \\(${CYCLE[(start + 1) % 4].tex}\\) there.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 4.3 the chain rule for sinusoids */

export function SinusoidRuleLab({ init = { A: 2, k: 1, c: 0, d: 0, x: 0.5, fn: "sin" } }: { init?: { A: number; k: number; c: number; d: number; x: number; fn: "sin" | "cos" } }) {
  const [A, setA] = useState(init.A), [k, setK] = useState(init.k), [c, setC] = useState(init.c), [d, setD] = useState(init.d), [x0, setX0] = useState(init.x), [fn, setFn] = useState<"sin" | "cos">(init.fn);
  const s = fn === "sin";
  const f: Fn = (x) => A * (s ? Math.sin(k * x + c) : Math.cos(k * x + c)) + d;
  const fp: Fn = (x) => A * k * (s ? Math.cos(k * x + c) : -Math.sin(k * x + c));
  const v: View = { xmin: -PI, xmax: 2 * PI, ymin: -9, ymax: 9 };
  const inner = `${r2(k)}x${c > 0 ? `+${r2(c)}` : c < 0 ? `-${r2(-c)}` : ""}`;
  return (
    <WidgetCard title="Derivatives of A·sin(kx + c) + d" subtitle="Chain rule: the amplitude and the inner slope k multiply; the vertical shift d disappears">
      <Segmented options={[{ value: "sin", label: "sine" }, { value: "cos", label: "cosine" }]} value={fn} onChange={setFn} />
      <Row gap={8}>
        <Slider label="A" value={A} min={-3} max={3} step={0.5} onChange={setA} color={C.violet} />
        <Slider label="k" value={k} min={0.5} max={3} step={0.5} onChange={setK} color={C.blue} />
        <Slider label="c" value={rnd(c)} min={-3} max={3} step={0.25} onChange={setC} color={C.amber} />
        <Slider label="d" value={d} min={-3} max={3} step={0.5} onChange={setD} color={C.muted} />
      </Row>
      <Slider label="x" value={rnd(x0)} min={rnd(-PI)} max={rnd(2 * PI)} step={0.05} onChange={setX0} color={C.red} />
      <div style={{ textAlign: "center", fontSize: 18, margin: "6px 0" }}><MathText html={`\\(f(x)=${r2(A)}\\${fn}(${inner})${d ? (d > 0 ? `+${r2(d)}` : `-${r2(-d)}`) : ""}\\qquad f'(x)=${r2(s ? A * k : -A * k)}\\${s ? "cos" : "sin"}(${inner})\\)`} /></div>
      <Plane view={v} label="f (violet) and f′ (dashed blue)" step={1} stepY={1}>
        {(X, Y) => <>
          <path d={pathOf(f, v, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
          <path d={pathOf(fp, v, X, Y)} fill="none" stroke={C.blue} strokeWidth={2} strokeDasharray="6 4" />
          <line x1={X(x0 - 0.7)} y1={Y(f(x0) - 0.7 * fp(x0))} x2={X(x0 + 0.7)} y2={Y(f(x0) + 0.7 * fp(x0))} stroke={C.green} strokeWidth={2.4} />
          {dot(X, Y, x0, f(x0), C.red, `slope ${r2(fp(x0))}`, "p")}
        </>}
      </Plane>
      <Readout tone="green">
        <MathText block html={`Largest slope \\(|Ak|=${r2(Math.abs(A * k))}\\): stretching the graph vertically by \\(A\\) or compressing it horizontally by \\(k\\) makes it steeper. Changing \\(c\\) or \\(d\\) only moves it.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 4.4 simple harmonic motion */

export function SpringLab({ init = { A: 10, w: 2, t: 0.5 } }: { init?: { A: number; w: number; t: number } }) {
  const [A, setA] = useState(init.A), [w, setW] = useState(init.w), [t0, setT0] = useState(init.t);
  const s: Fn = (t) => A * Math.cos(w * t), v: Fn = (t) => -A * w * Math.sin(w * t), a: Fn = (t) => -A * w * w * Math.cos(w * t);
  const T = (2 * PI) / w;
  const view: View = { xmin: 0, xmax: 2 * T, ymin: -Math.max(A * w * w, A) * 1.1, ymax: Math.max(A * w * w, A) * 1.1 };
  const y = s(t0);
  return (
    <WidgetCard title="A mass on a spring" subtitle="s(t) = A cos(ωt): velocity −Aω sin(ωt), acceleration −Aω² cos(ωt) = −ω² s">
      <Row gap={10}>
        <Slider label="amplitude A (cm)" value={A} min={2} max={15} step={1} onChange={setA} color={C.violet} />
        <Slider label="ω (rad/s)" value={w} min={0.5} max={3} step={0.25} onChange={setW} color={C.blue} />
        <Slider label="time t (s)" value={rnd(t0)} min={0} max={rnd(2 * T)} step={0.02} onChange={setT0} color={C.red} />
      </Row>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "flex-start" }}>
        <svg viewBox="0 0 90 220" style={{ width: 90, background: C.panel, borderRadius: 8 }}>
          <rect x={10} y={4} width={70} height={6} fill={C.muted} />
          {(() => { const top = 10, bob = 110 - (y / 15) * 80; const n = 14; let d = `M45,${top}`; for (let i = 1; i <= n; i++) d += ` L${i % 2 ? 30 : 60},${top + ((bob - 14 - top) * i) / (n + 1)}`; d += ` L45,${bob - 14}`; return <><path d={d} fill="none" stroke={C.faint} strokeWidth={2} /><rect x={27} y={bob - 14} width={36} height={28} rx={4} fill={C.violet} /><line x1={5} y1={110} x2={85} y2={110} stroke={C.green} strokeDasharray="4 3" /></>; })()}
        </svg>
        <div style={{ flex: 1, minWidth: 260 }}>
          <Plane view={view} label="s (violet), v (blue), a (amber)" step={rnd(T / 4) || 1} stepY={Math.max(1, Math.round(view.ymax / 4))}>
            {(X, Y) => <>
              <path d={pathOf(s, view, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
              <path d={pathOf(v, view, X, Y)} fill="none" stroke={C.blue} strokeWidth={2} />
              <path d={pathOf(a, view, X, Y)} fill="none" stroke={C.amber} strokeWidth={2} />
              {dot(X, Y, t0, s(t0), C.red, undefined, "s")}
              <line x1={X(t0)} y1={Y(view.ymin)} x2={X(t0)} y2={Y(view.ymax)} stroke={C.red} strokeDasharray="4 4" />
            </>}
          </Plane>
        </div>
      </div>
      <Readout tone="blue">
        <MathText block html={`At \\(t=${r2(t0)}\\) s: \\(s=${r2(s(t0))}\\) cm, \\(v=${r2(v(t0))}\\) cm/s, \\(a=${r2(a(t0))}\\) cm/s². Period \\(\\frac{2\\pi}{\\omega}=${r2(T)}\\) s.`} />
        <MathText block html={`The speed is greatest (\\(A\\omega=${r2(A * w)}\\)) as the mass passes the rest position, and zero at the turning points, where the acceleration is largest and points back toward the centre.`} />
      </Readout>
    </WidgetCard>
  );
}
