"use client";

// IB AA SL chapter 15 (the mathematical exploration) explorers: scoring a sample exploration against the five criteria,
// narrowing a broad interest to a researchable question, checking how well a graph communicates, and fitting and
// comparing models to data as in a worked mini-exploration.

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { Plane, r2, type View } from "./Systems";

const n2 = (v: number, d = 2) => r2(v, d);

/* ---------------------------------------------------------------- 15.1 the five criteria */

const CRIT: { key: string; name: string; max: number; levels: string[] }[] = [
  { key: "A", name: "Presentation", max: 4, levels: ["not organised", "some structure", "mostly coherent", "coherent and well organised", "coherent, well organised and concise"] },
  { key: "B", name: "Mathematical communication", max: 4, levels: ["no relevant notation", "some relevant notation", "mostly correct notation and terms", "consistently correct notation, terms and multiple representations", "fully appropriate notation, terms and forms throughout"] },
  { key: "C", name: "Personal engagement", max: 3, levels: ["none evident", "some, superficial", "significant", "abundant, with independent thinking"] },
  { key: "D", name: "Reflection", max: 3, levels: ["none", "limited, superficial", "meaningful", "substantial and critical"] },
  { key: "E", name: "Use of mathematics", max: 6, levels: ["none relevant", "some relevant", "some relevant, with limited understanding", "relevant, commensurate with SL, some understanding", "relevant and mostly correct, good understanding", "relevant, correct, thorough understanding", "relevant, correct, thorough understanding and sophisticated"] },
];
const SAMPLES: { label: string; marks: number[] }[] = [
  { label: "weak draft", marks: [2, 1, 1, 1, 2] },
  { label: "solid", marks: [3, 3, 2, 2, 4] },
  { label: "excellent", marks: [4, 4, 3, 3, 6] },
];

export function IBCriteria({ init = [1] }: { init?: [number] }) {
  const [m, setM] = useState<number[]>(SAMPLES[init[0]].marks);
  const total = m.reduce((a, b) => a + b, 0);
  const v: View = { xmin: 0, xmax: 6, ymin: 0, ymax: 7 };
  const weakest = CRIT.map((c, i) => ({ k: c.key, gap: c.max - m[i] })).sort((a, b) => b.gap - a.gap)[0];
  return (
    <WidgetCard title="The five assessment criteria" subtitle="A (4) + B (4) + C (3) + D (3) + E (6) = 20 marks; move each slider to match a descriptor">
      <Row><Segmented label="sample:" value={-1} onChange={(i: number) => setM([...SAMPLES[i].marks])} options={SAMPLES.map((s, i) => ({ value: i, label: s.label }))} /></Row>
      <Row>{CRIT.map((c, i) => <Slider key={c.key} label={`${c.key}`} value={m[i]} min={0} max={c.max} step={1} onChange={(x) => setM(m.map((y, j) => (j === i ? x : y)))} color={[C.violet, C.blue, C.green, C.amber, C.red][i]} />)}</Row>
      <Plane view={v} label="Marks by criterion" step={1} stepY={1}>
        {(X, Y) => <>{CRIT.map((c, i) => <g key={c.key}>
          <rect x={X(i + 0.65)} y={Y(c.max)} width={X(1.7) - X(1)} height={Y(0) - Y(c.max)} fill="#e2e8f0" />
          <rect x={X(i + 0.65)} y={Y(m[i])} width={X(1.7) - X(1)} height={Y(0) - Y(m[i])} fill={[C.violet, C.blue, C.green, C.amber, C.red][i]} opacity={0.85} />
          <text x={X(i + 1)} y={Y(0) + 14} fontSize={12} textAnchor="middle" fill="#334155">{c.key}</text>
        </g>)}</>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`Total \\(${total}/20\\). ${CRIT.map((c, i) => `<b>${c.key}</b> ${c.name}: ${m[i]}/${c.max} — ${c.levels[m[i]]}`).join("; ")}. Biggest gain available: criterion ${weakest.k} (${weakest.gap} mark${weakest.gap === 1 ? "" : "s"}).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 15.2 narrowing a topic */

const INTERESTS: { label: string; steps: { q: string; maths: string }[] }[] = [
  { label: "sport", steps: [
    { q: "The mathematics of basketball", maths: "too broad — no single question or method" },
    { q: "Free throws and probability", maths: "better — probability, but still vague" },
    { q: "Does one player's free-throw success over a season fit a binomial model?", maths: "focused — binomial distribution, expected value, comparing observed and expected frequencies" },
  ] },
  { label: "music", steps: [
    { q: "Maths in music", maths: "too broad" },
    { q: "Sound waves and pitch", maths: "better — trigonometric functions" },
    { q: "Can the waveform of a recorded guitar note be modelled by a sum of sine functions, and how does the amplitude decay?", maths: "focused — sinusoidal models, exponential decay, technology fitting" },
  ] },
  { label: "finance", steps: [
    { q: "Money and maths", maths: "too broad" },
    { q: "Saving for university", maths: "better — sequences and series" },
    { q: "Which saving plan reaches 20 000 dollars first: a fixed monthly deposit or a deposit growing by 2% a year?", maths: "focused — geometric series, compound interest, technology for solving" },
  ] },
  { label: "biology", steps: [
    { q: "Maths in nature", maths: "too broad" },
    { q: "How bacteria grow", maths: "better — exponential functions" },
    { q: "Does yeast growth in my experiment follow an exponential or a logistic model over 48 hours?", maths: "focused — exponential and logistic models, logarithms, comparing fits" },
  ] },
];

export function IBTopicNarrow({ init = [0, 0] }: { init?: [number, number] }) {
  const [k, setK] = useState(init[0]), [s, setS] = useState(init[1]);
  const I = INTERESTS[k], st = I.steps[s];
  const v: View = { xmin: 0, xmax: 4, ymin: 0, ymax: 4 };
  return (
    <WidgetCard title="From an interest to a research question" subtitle="a good exploration question is specific enough to name the mathematics you will use">
      <Row>
        <Segmented label="interest:" value={k} onChange={(x: number) => { setK(x); setS(0); }} options={INTERESTS.map((x, i) => ({ value: i, label: x.label }))} />
        <Slider label="focus level" value={s} min={0} max={2} step={1} onChange={setS} color={C.green} />
      </Row>
      <Plane view={v} label="Narrowing funnel" step={1} stepY={1}>
        {(X, Y) => <>{[0, 1, 2].map((i) => {
          const w = 3.6 - i * 1.1, x0 = 2 - w / 2, y0 = 3.6 - i * 1.15;
          return <rect key={i} x={X(x0)} y={Y(y0)} width={X(x0 + w) - X(x0)} height={Y(y0 - 0.9) - Y(y0)} rx={6} fill={i === s ? C.green : "#e2e8f0"} opacity={i === s ? 0.85 : 1} />;
        })}</>}
      </Plane>
      <Readout tone={s === 2 ? "green" : "amber"}>
        <MathText html={`<b>${st.q}</b> — ${st.maths}.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 15.3 communicating with graphs */

const DATA = [[1, 3.1], [2, 4.4], [3, 6.2], [4, 7.1], [5, 8.9], [6, 9.8], [7, 11.6], [8, 12.4]];
const PARTS = ["title", "axis labels", "units", "line of best fit", "source note"];

export function IBGraphQuality({ init = [0, 0, 0, 0, 0] }: { init?: number[] }) {
  const [on, setOn] = useState<number[]>(init);
  const score = on.reduce((a, b) => a + b, 0);
  const n = DATA.length, sx = DATA.reduce((a, d) => a + d[0], 0), sy = DATA.reduce((a, d) => a + d[1], 0);
  const sxx = DATA.reduce((a, d) => a + d[0] * d[0], 0), sxy = DATA.reduce((a, d) => a + d[0] * d[1], 0);
  const m = (n * sxy - sx * sy) / (n * sxx - sx * sx), b = (sy - m * sx) / n;
  const v: View = { xmin: 0, xmax: 9, ymin: 0, ymax: 14 };
  return (
    <WidgetCard title="Does the graph communicate?" subtitle="criterion B rewards graphs a reader understands without the text: title, labelled axes with units, and a clear model">
      <Row>{PARTS.map((p, i) => <Segmented key={p} label={p} value={on[i]} onChange={(x: number) => setOn(on.map((y, j) => (j === i ? x : y)))} options={[{ value: 0, label: "off" }, { value: 1, label: "on" }]} />)}</Row>
      <Plane view={v} label="Sample graph" step={1} stepY={2}>
        {(X, Y) => <>
          {DATA.map(([x, y]) => <circle key={x} cx={X(x)} cy={Y(y)} r={5} fill={C.violet} />)}
          {on[3] === 1 && <line x1={X(0)} y1={Y(b)} x2={X(9)} y2={Y(b + 9 * m)} stroke={C.red} strokeWidth={2.2} />}
          {on[0] === 1 && <text x={X(4.5)} y={Y(13.4)} fontSize={14} fontWeight={700} textAnchor="middle" fill="#0f172a">Plant height against time</text>}
          {on[1] === 1 && <text x={X(8.8)} y={Y(0.6)} fontSize={12} fontWeight={700} textAnchor="end" fill="#0f172a">{on[2] ? "time (weeks)" : "time"}</text>}
          {on[1] === 1 && <text x={X(0.15)} y={Y(12.2)} fontSize={12} fontWeight={700} fill="#0f172a">{on[2] ? "height (cm)" : "height"}</text>}
          {on[4] === 1 && <text x={X(8.8)} y={Y(1.6)} fontSize={10.5} textAnchor="end" fill="#475569">data: own measurements, 8 plants averaged</text>}
        </>}
      </Plane>
      <Readout tone={score >= 4 ? "green" : score >= 2 ? "amber" : "red"}>
        <MathText html={`Elements present: ${score}/5. ${on[3] ? `Model: \\(h=${n2(m, 3)}t+${n2(b, 3)}\\). ` : ""}${score === 5 ? "A reader can interpret this graph on its own." : `Missing: ${PARTS.filter((_, i) => !on[i]).join(", ")}.`}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 15.4 fitting and comparing models */

const COFFEE = [[0, 90], [5, 72], [10, 59], [15, 49], [20, 42], [25, 36], [30, 32]];
function fit(kind: number) {
  const xs = COFFEE.map((d) => d[0]), ys = COFFEE.map((d) => d[1]), n = xs.length;
  const lin = (X: number[], Yv: number[]) => { const sx = X.reduce((a, b) => a + b, 0), sy = Yv.reduce((a, b) => a + b, 0), sxx = X.reduce((a, b) => a + b * b, 0), sxy = X.reduce((a, x, i) => a + x * Yv[i], 0); const m = (n * sxy - sx * sy) / (n * sxx - sx * sx); return [m, (sy - m * sx) / n]; };
  if (kind === 0) { const [m, b] = lin(xs, ys); return { f: (t: number) => m * t + b, tex: `T=${n2(m, 3)}t+${n2(b, 2)}` }; }
  if (kind === 1) {
    const S = (p: number) => xs.reduce((a, x) => a + x ** p, 0), T = (p: number) => xs.reduce((a, x, i) => a + x ** p * ys[i], 0);
    const M = [[S(4), S(3), S(2)], [S(3), S(2), S(1)], [S(2), S(1), n]], R = [T(2), T(1), T(0)];
    const det = (A: number[][]) => A[0][0] * (A[1][1] * A[2][2] - A[1][2] * A[2][1]) - A[0][1] * (A[1][0] * A[2][2] - A[1][2] * A[2][0]) + A[0][2] * (A[1][0] * A[2][1] - A[1][1] * A[2][0]);
    const D = det(M), col = (j: number) => det(M.map((row, i) => row.map((v, k) => (k === j ? R[i] : v))));
    const a = col(0) / D, b = col(1) / D, c = col(2) / D;
    return { f: (t: number) => a * t * t + b * t + c, tex: `T=${n2(a, 4)}t^2${b < 0 ? "-" : "+"}${n2(Math.abs(b), 3)}t+${n2(c, 2)}` };
  }
  const [m, b] = lin(xs, ys.map((y) => Math.log(y - 20)));
  return { f: (t: number) => 20 + Math.exp(b) * Math.exp(m * t), tex: `T=20+${n2(Math.exp(b), 2)}e^{${n2(m, 4)}t}` };
}

export function IBModelFit({ init = [2] }: { init?: [number] }) {
  const [k, setK] = useState(init[0]);
  const F = fit(k), sse = COFFEE.reduce((a, [t, T]) => a + (T - F.f(t)) ** 2, 0), at60 = F.f(60);
  const v: View = { xmin: -2, xmax: 62, ymin: 0, ymax: 100 };
  return (
    <WidgetCard title="Fitting and comparing models" subtitle="a coffee cools from 90 °C in a 20 °C room; compare models by their fit to the data and by whether they make sense beyond it">
      <Row><Segmented label="model:" value={k} onChange={setK} options={[{ value: 0, label: "linear" }, { value: 1, label: "quadratic" }, { value: 2, label: "exponential to 20 °C" }]} /></Row>
      <Plane view={v} label="Cooling coffee" step={10} stepY={10}>
        {(X, Y) => {
          let d = ""; for (let i = 0; i <= 200; i++) { const t = (62 * i) / 200, T = F.f(t); if (T < -50 || T > 150) continue; d += `${d ? "L" : "M"}${X(t).toFixed(1)},${Y(Math.max(-5, Math.min(105, T))).toFixed(1)} `; }
          return <>
            <line x1={X(-2)} y1={Y(20)} x2={X(62)} y2={Y(20)} stroke="#94a3b8" strokeDasharray="6 4" />
            <path d={d} fill="none" stroke={C.red} strokeWidth={2.4} />
            {COFFEE.map(([t, T]) => <circle key={t} cx={X(t)} cy={Y(T)} r={5} fill={C.violet} />)}
          </>;
        }}
      </Plane>
      <Readout tone="blue">
        <MathText html={`\\(${F.tex}\\). Sum of squared residuals: \\(${n2(sse, 1)}\\). Prediction at 60 min: \\(${n2(at60, 1)}\\) °C — ${at60 < 20 ? "below room temperature, which is impossible" : k === 1 && at60 > F.f(30) ? "rising again, which is impossible" : "close to room temperature, which is physically sensible"}.`} />
      </Readout>
    </WidgetCard>
  );
}
