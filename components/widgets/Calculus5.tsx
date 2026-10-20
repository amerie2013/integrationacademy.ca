"use client";

// MCV4U chapter 5 (exponential and logarithmic functions) explorers: the slope of b^x at 0 and the special base e,
// the natural logarithm and its slope 1/x, derivatives of A·e^(kx) and b^x, and growth/decay models where the rate
// is proportional to the amount.

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { Plane, r2, type View } from "./Systems";
import { dot } from "./Quadratics";

type Fn = (x: number) => number;
const rnd = (x: number) => Math.round(x * 100) / 100;
const num = (f: Fn, x: number, h = 1e-5) => (f(x + h) - f(x - h)) / (2 * h);
function pathOf(f: Fn, v: View, X: (x: number) => number, Y: (y: number) => number, a = v.xmin, b = v.xmax) {
  const band = (v.ymax - v.ymin) * 3;
  let d = "", pen = false;
  for (let i = 0; i <= 400; i++) {
    const x = a + ((b - a) * i) / 400, y = f(x);
    if (!Number.isFinite(y) || y > v.ymax + band || y < v.ymin - band) { pen = false; continue; }
    d += `${pen ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)} `; pen = true;
  }
  return d;
}
const E = Math.E;

/* ---------------------------------------------------------------- 5.1 the slope of b^x and the number e */

export function ExpBaseLab({ init = { b: 2, x: 1 } }: { init?: { b: number; x: number } }) {
  const [b, setB] = useState(init.b), [x0, setX0] = useState(init.x);
  const f: Fn = (x) => Math.pow(b, x);
  const s0 = num(f, 0), s = num(f, x0);
  const v: View = { xmin: -3, xmax: 3, ymin: -1, ymax: 9 };
  return (
    <WidgetCard title="The slope of y = bˣ" subtitle="Every exponential has slope = (constant) × (height). The constant is the slope at x = 0; it equals 1 exactly when b = e">
      <Row gap={10}>
        <Slider label="base b" value={b} min={1.2} max={4} step={0.01} onChange={setB} color={C.violet} />
        <Slider label="x" value={rnd(x0)} min={-2} max={2} step={0.05} onChange={setX0} color={C.red} />
      </Row>
      <button onClick={() => setB(Math.round(E * 100) / 100)} style={{ margin: "4px 0", padding: "4px 10px", borderRadius: 6, border: `1px solid ${C.green}`, background: C.greenSoft, color: C.green, fontWeight: 700, cursor: "pointer" }}>set b = e ≈ 2.72</button>
      <Plane view={v} label={`y = ${r2(b)}ˣ (violet), y = eˣ (grey), tangents at 0 and at x (green)`} step={1} stepY={1}>
        {(X, Y) => <>
          <path d={pathOf(Math.exp, v, X, Y)} fill="none" stroke={C.faint} strokeWidth={2} strokeDasharray="5 4" />
          <path d={pathOf(f, v, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
          <line x1={X(-1.5)} y1={Y(1 - 1.5 * s0)} x2={X(1.5)} y2={Y(1 + 1.5 * s0)} stroke={C.green} strokeWidth={2} strokeDasharray="6 4" />
          <line x1={X(x0 - 1)} y1={Y(f(x0) - s)} x2={X(x0 + 1)} y2={Y(f(x0) + s)} stroke={C.green} strokeWidth={2.4} />
          {dot(X, Y, 0, 1, C.blue, `slope ${r2(s0)}`, "z")}
          {dot(X, Y, x0, f(x0), C.red, `slope ${r2(s)}`, "p")}
        </>}
      </Plane>
      <Readout tone={Math.abs(s0 - 1) < 0.01 ? "green" : "blue"}>
        <MathText block html={`Slope at 0: \\(${r2(s0)}\\) \\(=\\ln ${r2(b)}\\). At \\(x=${r2(x0)}\\): slope \\(${r2(s)}\\), height \\(${r2(f(x0))}\\), ratio slope ÷ height \\(=${r2(s / f(x0))}\\) — the same number at every point.`} />
        <MathText block html={Math.abs(s0 - 1) < 0.01 ? "With b = e the slope equals the height everywhere: \\((e^x)'=e^x\\)." : "Adjust b until the slope at 0 is exactly 1: that base is e ≈ 2.718."} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.2 the natural logarithm */

export function LnLab({ init = { x: 2, mirror: true } }: { init?: { x: number; mirror: boolean } }) {
  const [x0, setX0] = useState(init.x), [mirror, setMirror] = useState(init.mirror);
  const v: View = { xmin: -3, xmax: 7, ymin: -4, ymax: 6 };
  const y0 = Math.log(x0), s = 1 / x0;
  return (
    <WidgetCard title="The natural logarithm and its slope" subtitle="y = ln x is the reflection of y = eˣ in y = x, so its slope at x is 1/x">
      <Slider label="x" value={rnd(x0)} min={0.2} max={6.5} step={0.05} onChange={setX0} color={C.red} />
      <Segmented options={[{ value: "on", label: "show y = eˣ and its mirror tangent" }, { value: "off", label: "ln x only" }]} value={mirror ? "on" : "off"} onChange={(k) => setMirror(k === "on")} />
      <Plane view={v} label="y = ln x (violet), y = eˣ (grey), mirror line y = x (dashed)" step={1} stepY={1}>
        {(X, Y) => <>
          <line x1={X(-3)} y1={Y(-3)} x2={X(6)} y2={Y(6)} stroke={C.faint} strokeDasharray="4 4" />
          {mirror && <path d={pathOf(Math.exp, v, X, Y)} fill="none" stroke={C.faint} strokeWidth={2} />}
          <path d={pathOf(Math.log, v, X, Y, 0.02, 7)} fill="none" stroke={C.violet} strokeWidth={3} />
          <line x1={X(x0 - 2)} y1={Y(y0 - 2 * s)} x2={X(x0 + 2)} y2={Y(y0 + 2 * s)} stroke={C.green} strokeWidth={2.4} />
          {mirror && <line x1={X(y0 - 2 * s)} y1={Y(x0 - 2)} x2={X(y0 + 2 * s)} y2={Y(x0 + 2)} stroke={C.green} strokeWidth={1.6} strokeDasharray="5 4" />}
          {dot(X, Y, x0, y0, C.red, `(${r2(x0)}, ${r2(y0)})`, "p")}
          {mirror && dot(X, Y, y0, x0, C.blue, undefined, "q")}
        </>}
      </Plane>
      <Readout tone="green">
        <MathText block html={`At \\(x=${r2(x0)}\\): \\(\\ln x=${r2(y0)}\\), slope \\(=\\frac1x=${r2(s)}\\).`} />
        <MathText block html={mirror ? `The mirror point \\((${r2(y0)},${r2(x0)})\\) on \\(y=e^x\\) has slope \\(e^{${r2(y0)}}=${r2(x0)}\\). Reflecting swaps rise and run, so the slopes are reciprocals: \\(\\frac1{${r2(x0)}}\\).` : "As x grows the slope 1/x shrinks: ln x keeps rising, but ever more slowly."} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.3–5.4 derivatives of A e^(kx) and b^x */

export function ExpRuleLab({ init = { A: 1, k: 1, mode: "e", b: 2, x: 0.5 } }: { init?: { A: number; k: number; mode: "e" | "b"; b: number; x: number } }) {
  const [A, setA] = useState(init.A), [k, setK] = useState(init.k), [mode, setMode] = useState<"e" | "b">(init.mode), [b, setB] = useState(init.b), [x0, setX0] = useState(init.x);
  const isE = mode === "e";
  const f: Fn = isE ? (x) => A * Math.exp(k * x) : (x) => A * Math.pow(b, k * x);
  const c = isE ? k : k * Math.log(b);
  const fp: Fn = (x) => c * f(x);
  // f and f′ have opposite signs when the ratio c is negative, so show both halves of the plane then
  const top = Math.max(2, Math.min(40, Math.max(Math.abs(f(2)), Math.abs(f(-2)), Math.abs(fp(2)), Math.abs(fp(-2))) * 1.1));
  const both = c < 0;
  const v: View = { xmin: -2.5, xmax: 2.5, ymin: both || A < 0 ? -top : -top * 0.2, ymax: both || A > 0 ? top : top * 0.2 };
  return (
    <WidgetCard title="Derivatives of exponential functions" subtitle="(A e^(kx))′ = k·A e^(kx) and (A b^(kx))′ = k ln b · A b^(kx): the rate is proportional to the value">
      <Segmented options={[{ value: "e", label: "y = A e^(kx)" }, { value: "b", label: "y = A b^(kx)" }]} value={mode} onChange={setMode} />
      <Row gap={8}>
        <Slider label="A" value={A} min={-3} max={3} step={0.5} onChange={(v) => setA(v === 0 ? 0.5 : v)} color={C.violet} />
        <Slider label="k" value={k} min={-2} max={2} step={0.25} onChange={(v) => setK(v === 0 ? 0.25 : v)} color={C.blue} />
        {!isE && <Slider label="b" value={b} min={1.5} max={10} step={0.5} onChange={setB} color={C.amber} />}
        <Slider label="x" value={rnd(x0)} min={-2} max={2} step={0.05} onChange={setX0} color={C.red} />
      </Row>
      <Plane view={v} label="f (violet) and f′ (dashed blue)" step={0.5} stepY={Math.max(0.5, Math.round(top / 5))}>
        {(X, Y) => <>
          <path d={pathOf(f, v, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
          <path d={pathOf(fp, v, X, Y)} fill="none" stroke={C.blue} strokeWidth={2} strokeDasharray="6 4" />
          <line x1={X(x0 - 0.6)} y1={Y(f(x0) - 0.6 * fp(x0))} x2={X(x0 + 0.6)} y2={Y(f(x0) + 0.6 * fp(x0))} stroke={C.green} strokeWidth={2.4} />
          {dot(X, Y, x0, f(x0), C.red, `slope ${r2(fp(x0))}`, "p")}
        </>}
      </Plane>
      <Readout tone="green">
        <MathText block html={isE ? `\\(f(x)=${r2(A)}e^{${r2(k)}x}\\), \\(f'(x)=${r2(k)}\\cdot${r2(A)}e^{${r2(k)}x}\\): at every point the slope is \\(${r2(k)}\\) times the height.` : `\\(f(x)=${r2(A)}\\cdot${r2(b)}^{${r2(k)}x}\\), \\(f'(x)=${r2(k)}\\ln ${r2(b)}\\cdot f(x)\\approx${r2(c)}\\,f(x)\\).`} />
        <MathText block html={`At \\(x=${r2(x0)}\\): \\(f=${r2(f(x0))}\\), \\(f'=${r2(fp(x0))}\\), ratio \\(${r2(c)}\\). ${c > 0 ? "Positive ratio: growth." : "Negative ratio: decay."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.5 growth and decay models */

export function GrowthModelLab({ init = { P0: 500, k: 0.2, t: 3 } }: { init?: { P0: number; k: number; t: number } }) {
  const [P0, setP0] = useState(init.P0), [k, setK] = useState(init.k), [t0, setT0] = useState(init.t);
  const P: Fn = (t) => P0 * Math.exp(k * t);
  const tEnd = 12;
  const top = Math.max(P0 * 1.2, P(tEnd) * 1.1, P(0) * 1.1);
  const v: View = { xmin: 0, xmax: tEnd, ymin: 0, ymax: top };
  const half = Math.log(2) / Math.abs(k);
  return (
    <WidgetCard title="Exponential growth and decay" subtitle="P(t) = P₀e^(kt) satisfies P′ = kP: the rate of change is proportional to the amount">
      <Row gap={10}>
        <Slider label="P₀" value={P0} min={100} max={1000} step={50} onChange={setP0} color={C.violet} />
        <Slider label="k (per unit time)" value={k} min={-0.5} max={0.5} step={0.01} onChange={(val) => setK(Math.abs(val) < 0.01 ? 0.01 : val)} color={C.blue} />
        <Slider label="t" value={rnd(t0)} min={0} max={tEnd} step={0.1} onChange={setT0} color={C.red} />
      </Row>
      <Plane view={v} label="P(t) with its tangent at t" step={1} stepY={Math.max(50, Math.round(top / 6 / 50) * 50)}>
        {(X, Y) => <>
          <path d={pathOf(P, v, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
          <line x1={X(Math.max(0, t0 - 2))} y1={Y(P(t0) - (t0 - Math.max(0, t0 - 2)) * k * P(t0))} x2={X(Math.min(tEnd, t0 + 2))} y2={Y(P(t0) + (Math.min(tEnd, t0 + 2) - t0) * k * P(t0))} stroke={C.green} strokeWidth={2.4} />
          {dot(X, Y, t0, P(t0), C.red, `${r2(P(t0))}`, "p")}
          {half <= tEnd && dot(X, Y, half, P(half), C.amber, k > 0 ? "doubled" : "halved", "h")}
        </>}
      </Plane>
      <Readout tone={k > 0 ? "green" : "amber"}>
        <MathText block html={`At \\(t=${r2(t0)}\\): \\(P=${r2(P(t0))}\\), \\(P'=kP=${r2(k)}\\times${r2(P(t0))}=${r2(k * P(t0))}\\) per unit time.`} />
        <MathText block html={`${k > 0 ? "Doubling" : "Half-life"} time \\(=\\frac{\\ln 2}{|k|}=${r2(half)}\\): the amount ${k > 0 ? "doubles" : "halves"} every ${r2(half)} units, whatever it starts at.`} />
      </Readout>
    </WidgetCard>
  );
}
