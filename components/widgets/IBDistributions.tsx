"use client";

// IB AA SL chapter 14 (probability distributions) explorers: a discrete random variable with its expected value as a
// balance point, the binomial distribution B(n, p) with highlighted events, normal-curve probabilities between bounds,
// and the inverse normal (finding a bound from a probability) with standardisation.

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { Plane, r2, type View } from "./Systems";

const n2 = (v: number, d = 2) => r2(v, d);
const comb = (n: number, k: number) => { let c = 1; for (let i = 1; i <= k; i++) c = (c * (n - k + i)) / i; return c; };
const binom = (n: number, p: number, k: number) => comb(n, k) * p ** k * (1 - p) ** (n - k);
function Phi(z: number) {
  const t = 1 / (1 + (0.3275911 * Math.abs(z)) / Math.SQRT2);
  const y = 1 - ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-(z * z) / 2);
  return z >= 0 ? 0.5 * (1 + y) : 0.5 * (1 - y);
}
const invPhi = (p: number) => { let a = -8, b = 8; for (let i = 0; i < 80; i++) { const m = (a + b) / 2; if (Phi(m) < p) a = m; else b = m; } return (a + b) / 2; };
const pdf = (mu: number, sd: number) => (x: number) => Math.exp(-(((x - mu) / sd) ** 2) / 2) / (sd * Math.sqrt(2 * Math.PI));

function bars(xs: number[], ps: number[], X: (x: number) => number, Y: (y: number) => number, hi: (x: number) => boolean) {
  const w = Math.max(4, (X(1) - X(0)) * 0.7);
  return xs.map((x, i) => <rect key={x} x={X(x) - w / 2} y={Y(ps[i])} width={w} height={Math.max(0, Y(0) - Y(ps[i]))} fill={hi(x) ? C.green : C.violet} opacity={0.8} />);
}
function curve(f: (x: number) => number, a: number, b: number, X: (x: number) => number, Y: (y: number) => number) {
  let d = ""; for (let i = 0; i <= 300; i++) { const x = a + ((b - a) * i) / 300; d += `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(f(x)).toFixed(1)} `; } return d;
}
function region(f: (x: number) => number, a: number, b: number, X: (x: number) => number, Y: (y: number) => number) {
  const pts: string[] = []; for (let i = 0; i <= 200; i++) { const x = a + ((b - a) * i) / 200; pts.push(`${X(x).toFixed(1)},${Y(f(x)).toFixed(1)}`); }
  return [`${X(a).toFixed(1)},${Y(0).toFixed(1)}`, ...pts, `${X(b).toFixed(1)},${Y(0).toFixed(1)}`].join(" ");
}

/* ---------------------------------------------------------------- 14.1 discrete random variable */

const DISTS: { label: string; xs: number[]; ps: number[] }[] = [
  { label: "fair die", xs: [1, 2, 3, 4, 5, 6], ps: [1, 1, 1, 1, 1, 1].map((v) => v / 6) },
  { label: "heads in 3 tosses", xs: [0, 1, 2, 3], ps: [1, 3, 3, 1].map((v) => v / 8) },
  { label: "game prize ($)", xs: [0, 2, 5, 10], ps: [0.5, 0.3, 0.15, 0.05] },
];

export function IBDiscreteRV({ init = [0, 3] }: { init?: [number, number] }) {
  const [k, setK] = useState(init[0]), [c, setC] = useState(init[1]);
  const D = DISTS[k], E = D.xs.reduce((s, x, i) => s + x * D.ps[i], 0), cost = c;
  const v: View = { xmin: Math.min(...D.xs) - 1, xmax: Math.max(...D.xs) + 1, ymin: -0.03, ymax: Math.max(...D.ps) * 1.3 };
  return (
    <WidgetCard title="A discrete random variable" subtitle="probabilities add to 1; E(X) = Σ x·P(X = x) is the long-run mean, the balance point of the bars">
      <Row><Segmented label="X =" value={k} onChange={setK} options={DISTS.map((d, i) => ({ value: i, label: d.label }))} /></Row>
      {k === 2 && <Row><Slider label="cost to play ($)" value={c} min={0} max={6} step={0.5} onChange={setC} color={C.red} /></Row>}
      <Plane view={v} label="Distribution" step={1} stepY={0.1}>
        {(X, Y) => <>
          {bars(D.xs, D.ps, X, Y, () => false)}
          <line x1={X(E)} y1={Y(0)} x2={X(E)} y2={Y(v.ymax)} stroke={C.red} strokeWidth={2.4} strokeDasharray="7 4" />
          <polygon points={`${X(E)},${Y(0) - 2} ${X(E) - 9},${Y(0) + 14} ${X(E) + 9},${Y(0) + 14}`} fill={C.red} />
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`\\(\\sum P=${n2(D.ps.reduce((a, b) => a + b, 0), 3)}\\). \\(E(X)=${D.xs.map((x, i) => `${x}(${n2(D.ps[i], 3)})`).join("+")}=${n2(E, 3)}\\) (red balance point).${k === 2 ? ` With a cost of \\$${n2(cost)}, the expected gain is \\(${n2(E - cost, 3)}\\): the game is ${Math.abs(E - cost) < 1e-9 ? "fair" : E - cost > 0 ? "in the player's favour" : "in the organiser's favour"}.` : ""}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 14.2 binomial */

export function IBBinomial({ init = [10, 0.3, 0, 3] }: { init?: [number, number, number, number] }) {
  const [n, setN] = useState(init[0]), [p, setP] = useState(init[1]), [mode, setMode] = useState(init[2]), [k, setK] = useState(init[3]);
  const kk = Math.min(k, n), xs = Array.from({ length: n + 1 }, (_, i) => i), ps = xs.map((x) => binom(n, p, x));
  const hi = (x: number) => (mode === 0 ? x === kk : mode === 1 ? x <= kk : x >= kk);
  const prob = xs.filter(hi).reduce((s, x) => s + ps[x], 0);
  const v: View = { xmin: -1, xmax: n + 1, ymin: -0.02, ymax: Math.max(...ps) * 1.25 };
  const sym = mode === 0 ? "=" : mode === 1 ? "\\le" : "\\ge";
  return (
    <WidgetCard title="The binomial distribution B(n, p)" subtitle="n independent trials, each a success with probability p; X counts the successes">
      <Row>
        <Slider label="n" value={n} min={1} max={20} step={1} onChange={setN} color={C.violet} />
        <Slider label="p" value={p} min={0.05} max={0.95} step={0.05} onChange={setP} color={C.blue} />
      </Row>
      <Row>
        <Segmented label="event:" value={mode} onChange={setMode} options={[{ value: 0, label: "X = k" }, { value: 1, label: "X ≤ k" }, { value: 2, label: "X ≥ k" }]} />
        <Slider label="k" value={kk} min={0} max={n} step={1} onChange={setK} color={C.green} />
      </Row>
      <Plane view={v} label="Binomial" step={n > 12 ? 2 : 1} stepY={v.ymax > 0.4 ? 0.1 : 0.05}>
        {(X, Y) => <>{bars(xs, ps, X, Y, hi)}</>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`\\(X\\sim B(${n},${n2(p)})\\): \\(P(X=r)=\\binom{${n}}{r}(${n2(p)})^r(${n2(1 - p)})^{${n}-r}\\). \\(P(X${sym}${kk})=${n2(prob, 4)}\\) (green). Mean \\(np=${n2(n * p, 3)}\\), variance \\(np(1-p)=${n2(n * p * (1 - p), 3)}\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 14.3 normal probabilities */

export function IBNormal({ init = [50, 8, 42, 58] }: { init?: [number, number, number, number] }) {
  const [mu, setMu] = useState(init[0]), [sd, setSd] = useState(init[1]), [a, setA] = useState(init[2]), [b, setB] = useState(init[3]);
  const lo = Math.min(a, b), hi = Math.max(a, b), f = pdf(mu, sd);
  const L = 20, R = 80, v: View = { xmin: L, xmax: R, ymin: -0.004, ymax: 0.11 };
  const prob = Phi((hi - mu) / sd) - Phi((lo - mu) / sd);
  return (
    <WidgetCard title="Normal probabilities" subtitle="X ~ N(μ, σ²): probability is the area under the bell curve; about 68%, 95%, 99.7% lie within 1, 2, 3 σ of μ">
      <Row>
        <Slider label="μ" value={mu} min={35} max={65} step={1} onChange={setMu} color={C.violet} />
        <Slider label="σ" value={sd} min={3} max={12} step={0.5} onChange={setSd} color={C.blue} />
      </Row>
      <Row>
        <Slider label="a" value={a} min={L} max={R} step={1} onChange={setA} color={C.green} />
        <Slider label="b" value={b} min={L} max={R} step={1} onChange={setB} color={C.green} />
      </Row>
      <Plane view={v} label="Normal curve" step={5} stepY={0.02}>
        {(X, Y) => <>
          <polygon points={region(f, Math.max(L, lo), Math.min(R, hi), X, Y)} fill="#bbf7d0" />
          <path d={curve(f, L, R, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
          <line x1={X(mu)} y1={Y(0)} x2={X(mu)} y2={Y(f(mu))} stroke={C.red} strokeWidth={1.6} strokeDasharray="5 4" />
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`\\(X\\sim N(${mu},${n2(sd)}^2)\\). \\(P(${lo}<X<${hi})=${n2(prob, 4)}\\). Standardised: \\(z=\\frac{x-\\mu}{\\sigma}\\) gives \\(${n2((lo - mu) / sd, 3)}<Z<${n2((hi - mu) / sd, 3)}\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 14.4 inverse normal */

export function IBInverseNormal({ init = [100, 15, 0.9, 0] }: { init?: [number, number, number, number] }) {
  const [mu, setMu] = useState(init[0]), [sd, setSd] = useState(init[1]), [p, setP] = useState(init[2]), [side, setSide] = useState(init[3]);
  const z = invPhi(side === 0 ? p : 1 - p), x = mu + z * sd, f = pdf(mu, sd);
  const L = mu - 3.6 * sd, R = mu + 3.6 * sd, v: View = { xmin: L, xmax: R, ymin: -f(mu) * 0.04, ymax: f(mu) * 1.15 };
  return (
    <WidgetCard title="Inverse normal" subtitle="given a probability, find the boundary value: x = μ + zσ, where z comes from the standard normal">
      <Row>
        <Slider label="μ" value={mu} min={50} max={150} step={5} onChange={setMu} color={C.violet} />
        <Slider label="σ" value={sd} min={5} max={25} step={1} onChange={setSd} color={C.blue} />
      </Row>
      <Row>
        <Segmented label="area:" value={side} onChange={setSide} options={[{ value: 0, label: "P(X < x)" }, { value: 1, label: "P(X > x)" }]} />
        <Slider label="probability" value={p} min={0.01} max={0.99} step={0.01} onChange={setP} color={C.green} />
      </Row>
      <Plane view={v} label="Inverse normal" step={sd} stepY={f(mu) > 0.03 ? 0.01 : 0.005}>
        {(X, Y) => <>
          <polygon points={side === 0 ? region(f, L, Math.max(L, x), X, Y) : region(f, Math.min(R, x), R, X, Y)} fill="#bbf7d0" />
          <path d={curve(f, L, R, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
          <line x1={X(x)} y1={Y(0)} x2={X(x)} y2={Y(v.ymax)} stroke={C.red} strokeWidth={2} strokeDasharray="6 4" />
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`\\(P(X${side === 0 ? "<" : ">"}x)=${n2(p)}\\) for \\(X\\sim N(${mu},${sd}^2)\\): \\(z=${n2(z, 4)}\\), so \\(x=${mu}+(${n2(z, 4)})(${sd})=${n2(x, 2)}\\) (red line).`} />
      </Readout>
    </WidgetCard>
  );
}
