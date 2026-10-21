"use client";

// IB AA SL chapter 6 (univariate statistics) explorers: sampling methods on a population of 100, histogram /
// cumulative frequency / box plot views of grouped data, how one value moves the mean, median and mode, and how
// adding or multiplying by a constant changes the mean, standard deviation and IQR.

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { r2 } from "./Systems";

const n2 = (v: number, d = 2) => r2(v, d);
/** deterministic pseudo-random numbers so each "new sample" is reproducible */
const rng = (seed: number) => () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);
const mean = (xs: number[]) => xs.reduce((a, b) => a + b, 0) / xs.length;
const sd = (xs: number[]) => { const m = mean(xs); return Math.sqrt(xs.reduce((a, x) => a + (x - m) ** 2, 0) / xs.length); };
/** median and quartiles of sorted data (IB method: halves exclude the median when n is odd) */
function quart(xs: number[]) {
  const s = [...xs].sort((a, b) => a - b), med = (a: number[]) => (a.length % 2 ? a[(a.length - 1) / 2] : (a[a.length / 2 - 1] + a[a.length / 2]) / 2);
  const h = Math.floor(s.length / 2);
  return { min: s[0], q1: med(s.slice(0, h)), q2: med(s), q3: med(s.slice(s.length - h)), max: s[s.length - 1] };
}

/* ---------------------------------------------------------------- 6.1 sampling */

// population: 100 students, 60 in Year 11 (blue) and 40 in Year 12 (red); value = hours of sleep
const POP = (() => { const r = rng(7); return Array.from({ length: 100 }, (_, i) => ({ g: i < 60 ? 0 : 1, v: Math.round((i < 60 ? 8.2 : 7.1) * 10 + (r() - 0.5) * 30) / 10 })); })();

export function IBSampling({ init = [10, 0] }: { init?: [number, number] }) {
  const [n, setN] = useState(init[0]), [m, setM] = useState<"srs" | "sys" | "strat" | "conv">("srs"), [seed, setSeed] = useState(init[1] + 1);
  const r = rng(seed * 97 + n);
  let pick: number[] = [];
  if (m === "srs") { const idx = POP.map((_, i) => i); for (let i = 99; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; } pick = idx.slice(0, n); }
  if (m === "sys") { const k = Math.floor(100 / n), start = Math.floor(r() * k); pick = Array.from({ length: n }, (_, i) => start + i * k); }
  if (m === "strat") { const a = Math.round(n * 0.6), b = n - a, sh = (lo: number, hi: number, c: number) => { const idx = Array.from({ length: hi - lo }, (_, i) => lo + i); for (let i = idx.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; } return idx.slice(0, c); }; pick = [...sh(0, 60, a), ...sh(60, 100, b)]; }
  if (m === "conv") pick = Array.from({ length: n }, (_, i) => i); // the first students met: all in the first rows
  const set = new Set(pick), sm = mean(pick.map((i) => POP[i].v)), pm = mean(POP.map((p) => p.v));
  const y12 = pick.filter((i) => POP[i].g === 1).length;
  const note = { srs: "every group of n students is equally likely to be chosen", sys: `every ${Math.floor(100 / n)}th student from a random start`, strat: "the sample keeps the 60 : 40 split of the year groups", conv: "the easiest students to reach — here all from the first rows, so the sample is biased" }[m];
  return (
    <WidgetCard title="Sampling methods" subtitle="a population of 100 students (blue Year 11, red Year 12); the value is hours of sleep last night">
      <Row><Segmented label="method:" value={m} onChange={setM} options={[{ value: "srs", label: "simple random" }, { value: "sys", label: "systematic" }, { value: "strat", label: "stratified" }, { value: "conv", label: "convenience" }]} /></Row>
      <Row>
        <Slider label="sample size n" value={n} min={5} max={25} step={5} onChange={setN} color={C.violet} />
        <button onClick={() => setSeed(seed + 1)} style={{ padding: "6px 12px", borderRadius: 8, border: `1px solid ${C.line}`, background: "#fff", cursor: "pointer", fontWeight: 650 }}>new sample</button>
      </Row>
      <svg viewBox="0 0 400 210" style={{ width: "100%", maxWidth: 520, display: "block", margin: "8px auto" }} role="img" aria-label="Population of 100">
        {POP.map((p, i) => {
          const x = 20 + (i % 10) * 38, y = 18 + Math.floor(i / 10) * 19, on = set.has(i);
          return <g key={i}><circle cx={x} cy={y} r={on ? 8 : 6} fill={on ? (p.g ? C.red : C.blue) : (p.g ? C.redSoft : C.blueSoft)} stroke={on ? C.ink : "none"} strokeWidth={1.5} />{on && <text x={x} y={y + 3.5} fontSize={8} textAnchor="middle" fill="#fff" fontWeight={700}>{p.v}</text>}</g>;
        })}
      </svg>
      <Readout tone={m === "conv" ? "amber" : "blue"}>
        <MathText html={`Sample of ${n}: ${note}. Sample mean ${n2(sm)} h; population mean ${n2(pm)} h. Year 12 students in the sample: ${y12} of ${n} (population 40%).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 6.2 presenting grouped data */

const SETS: { label: string; unit: string; edges: number[]; f: number[] }[] = [
  { label: "test marks", unit: "mark", edges: [0, 20, 40, 60, 80, 100], f: [4, 10, 22, 30, 14] },
  { label: "journey times", unit: "min", edges: [0, 10, 20, 30, 40, 50, 60], f: [12, 26, 18, 9, 3, 2] },
  { label: "heights", unit: "cm", edges: [150, 155, 160, 165, 170, 175, 180], f: [3, 9, 17, 21, 12, 6] },
];

export function IBPresent({ init = [0, 50] }: { init?: [number, number] }) {
  const [k, setK] = useState(init[0]), [view, setView] = useState<"hist" | "cf" | "box">("hist"), [pc, setPc] = useState(init[1]);
  const D = SETS[k], N = D.f.reduce((a, b) => a + b, 0), cf = D.f.reduce<number[]>((a, x) => [...a, (a.at(-1) ?? 0) + x], []);
  const lo = D.edges[0], hi = D.edges.at(-1)!, W = 360, H = 180, X = (x: number) => 30 + ((x - lo) / (hi - lo)) * W;
  // reading the cumulative frequency polygon: value with cf = p% of N
  const inv = (p: number) => { const t = (p / 100) * N; let i = 0; while (i < cf.length - 1 && cf[i] < t) i++; const c0 = i ? cf[i - 1] : 0; return D.edges[i] + ((t - c0) / D.f[i]) * (D.edges[i + 1] - D.edges[i]); };
  const q1 = inv(25), q2 = inv(50), q3 = inv(75), iqr = q3 - q1;
  const fmax = Math.max(...D.f), Yh = (f: number) => H - (f / fmax) * (H - 20) + 10, Yc = (c: number) => H - (c / N) * (H - 20) + 10;
  return (
    <WidgetCard title="Presenting grouped data" subtitle="histogram (frequency), cumulative frequency curve (median, quartiles, percentiles) and box plot from the same table">
      <Row><Segmented label="data:" value={k} onChange={setK} options={SETS.map((s, i) => ({ value: i, label: s.label }))} /></Row>
      <Row><Segmented label="show:" value={view} onChange={setView} options={[{ value: "hist", label: "histogram" }, { value: "cf", label: "cumulative frequency" }, { value: "box", label: "box plot" }]} /></Row>
      {view === "cf" && <Row><Slider label="percentile" value={pc} min={5} max={95} step={5} onChange={setPc} color={C.green} /></Row>}
      <svg viewBox={`0 0 ${W + 50} ${H + 40}`} style={{ width: "100%", maxWidth: 560, display: "block", margin: "8px auto" }} role="img" aria-label="Grouped data chart">
        <line x1={30} y1={H + 10} x2={W + 30} y2={H + 10} stroke={C.ink} />
        {D.edges.map((e) => <text key={e} x={X(e)} y={H + 26} fontSize={11} textAnchor="middle" fill={C.muted}>{e}</text>)}
        {view === "hist" && D.f.map((f, i) => <g key={i}><rect x={X(D.edges[i])} y={Yh(f)} width={X(D.edges[i + 1]) - X(D.edges[i])} height={H + 10 - Yh(f)} fill={C.violetSoft} stroke={C.violet} /><text x={(X(D.edges[i]) + X(D.edges[i + 1])) / 2} y={Yh(f) - 4} fontSize={11} textAnchor="middle" fill={C.violet} fontWeight={700}>{f}</text></g>)}
        {view === "cf" && <>
          <polyline points={[`${X(lo)},${Yc(0)}`, ...cf.map((c, i) => `${X(D.edges[i + 1])},${Yc(c)}`)].join(" ")} fill="none" stroke={C.violet} strokeWidth={2.5} />
          {cf.map((c, i) => <circle key={i} cx={X(D.edges[i + 1])} cy={Yc(c)} r={3.5} fill={C.violet} />)}
          <line x1={30} y1={Yc((pc / 100) * N)} x2={X(inv(pc))} y2={Yc((pc / 100) * N)} stroke={C.green} strokeDasharray="5 4" strokeWidth={1.8} />
          <line x1={X(inv(pc))} y1={Yc((pc / 100) * N)} x2={X(inv(pc))} y2={H + 10} stroke={C.green} strokeDasharray="5 4" strokeWidth={1.8} />
          <text x={34} y={Yc((pc / 100) * N) - 4} fontSize={11} fill={C.green} fontWeight={700}>{n2((pc / 100) * N, 1)}</text>
          <text x={34} y={Yc(N) + 4} fontSize={11} fill={C.muted}>{N}</text>
        </>}
        {view === "box" && (() => { const y = H / 2 + 10, s = { min: lo + (D.edges[1] - lo) / 2, max: hi - (hi - D.edges.at(-2)!) / 2 }; return <g>
          <line x1={X(s.min)} y1={y} x2={X(q1)} y2={y} stroke={C.ink} strokeWidth={2} /><line x1={X(q3)} y1={y} x2={X(s.max)} y2={y} stroke={C.ink} strokeWidth={2} />
          <rect x={X(q1)} y={y - 22} width={X(q3) - X(q1)} height={44} fill={C.violetSoft} stroke={C.violet} strokeWidth={2} />
          <line x1={X(q2)} y1={y - 22} x2={X(q2)} y2={y + 22} stroke={C.red} strokeWidth={3} />
          {[s.min, s.max].map((v) => <line key={v} x1={X(v)} y1={y - 10} x2={X(v)} y2={y + 10} stroke={C.ink} strokeWidth={2} />)}
          <text x={X(q1)} y={y - 28} fontSize={11} textAnchor="middle" fill={C.violet}>Q1 {n2(q1, 1)}</text><text x={X(q2)} y={y + 38} fontSize={11} textAnchor="middle" fill={C.red}>median {n2(q2, 1)}</text><text x={X(q3)} y={y - 28} fontSize={11} textAnchor="middle" fill={C.violet}>Q3 {n2(q3, 1)}</text>
        </g>; })()}
      </svg>
      <Readout tone="blue">
        <MathText html={`n = ${N}. Cumulative frequencies: ${cf.join(", ")}. From the cumulative frequency curve: median ≈ ${n2(q2, 1)}, Q1 ≈ ${n2(q1, 1)}, Q3 ≈ ${n2(q3, 1)}, IQR ≈ ${n2(iqr, 1)} ${D.unit}.${view === "cf" ? ` The ${pc}th percentile is about ${n2(inv(pc), 1)} ${D.unit} (read across at ${n2((pc / 100) * N, 1)}).` : ""}${view === "box" ? " Whiskers are drawn to the middle of the first and last classes (the raw minimum and maximum are not known for grouped data)." : ""}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 6.3 mean, median and mode */

export function IBCentre({ init = [12] }: { init?: [number] }) {
  const base = [3, 4, 4, 5, 6, 6, 6, 7, 8];
  const [v, setV] = useState(init[0]);
  const xs = [...base, v].sort((a, b) => a - b), m = mean(xs), q = quart(xs);
  const counts = xs.reduce<Record<number, number>>((a, x) => ((a[x] = (a[x] ?? 0) + 1), a), {});
  const top = Math.max(...Object.values(counts)), modes = Object.keys(counts).filter((k) => counts[+k] === top).map(Number);
  const X = (x: number) => 20 + (x / 30) * 380;
  return (
    <WidgetCard title="Mean, median and mode" subtitle="ten values: nine fixed and one you move — the mean is pulled by an extreme value, the median and mode much less">
      <Row><Slider label="tenth value" value={v} min={0} max={30} onChange={setV} color={C.blue} /></Row>
      <svg viewBox="0 0 420 150" style={{ width: "100%", maxWidth: 560, display: "block", margin: "8px auto" }} role="img" aria-label="Dot plot">
        <line x1={20} y1={110} x2={400} y2={110} stroke={C.ink} />
        {[0, 5, 10, 15, 20, 25, 30].map((t) => <text key={t} x={X(t)} y={126} fontSize={11} textAnchor="middle" fill={C.muted}>{t}</text>)}
        {Object.entries(counts).flatMap(([k, c]) => Array.from({ length: c }, (_, j) => <circle key={k + "-" + j} cx={X(+k)} cy={100 - j * 14} r={6} fill={+k === v && j === c - 1 ? C.blue : C.violet} />))}
        <line x1={X(m)} y1={30} x2={X(m)} y2={110} stroke={C.red} strokeWidth={2.5} /><text x={X(m)} y={24} fontSize={11} textAnchor="middle" fill={C.red} fontWeight={700}>mean {n2(m)}</text>
        <line x1={X(q.q2)} y1={44} x2={X(q.q2)} y2={110} stroke={C.green} strokeWidth={2.5} strokeDasharray="5 4" /><text x={X(q.q2)} y={142} fontSize={11} textAnchor="middle" fill={C.green} fontWeight={700}>median {n2(q.q2)}</text>
      </svg>
      <Readout tone="blue">
        <MathText html={`Data: ${xs.join(", ")}. Mean \\(=\\frac{${xs.reduce((a, b) => a + b, 0)}}{10}=${n2(m)}\\); median = average of the 5th and 6th values = ${n2(q.q2)}; mode = ${modes.join(" and ")}. ${Math.abs(m - q.q2) > 1.5 ? "The extreme value drags the mean away from the median: the median is the better 'typical' value here." : "With no extreme value the mean and median are close."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 6.4 spread and transformations */

export function IBSpread({ init = [0, 1] }: { init?: [number, number] }) {
  const base = [12, 15, 15, 17, 18, 20, 21, 23, 26, 33];
  const [b, setB] = useState(init[0]), [a, setA] = useState(init[1]);
  const xs = base.map((x) => a * x + b), m = mean(xs), s = sd(xs), q = quart(xs), m0 = mean(base), s0 = sd(base), q0 = quart(base);
  const lo = Math.min(0, ...xs) - 2, hi = Math.max(60, ...xs) + 2, X = (x: number) => 20 + ((x - lo) / (hi - lo)) * 380;
  const out = xs.filter((x) => x < q.q1 - 1.5 * (q.q3 - q.q1) || x > q.q3 + 1.5 * (q.q3 - q.q1));
  return (
    <WidgetCard title="Spread: standard deviation and IQR" subtitle="new value = a × old + b: the mean and median become a×(old) + b; the SD, IQR and range are multiplied by |a| and ignore b">
      <Row>
        <Slider label="multiply by a" value={a} min={0.5} max={2} step={0.5} onChange={setA} color={C.violet} />
        <Slider label="then add b" value={b} min={-10} max={20} step={2} onChange={setB} color={C.green} />
      </Row>
      <svg viewBox="0 0 420 130" style={{ width: "100%", maxWidth: 560, display: "block", margin: "8px auto" }} role="img" aria-label="Data with mean ± SD">
        <rect x={X(m - s)} y={20} width={X(m + s) - X(m - s)} height={60} fill={C.amberSoft} />
        <line x1={20} y1={80} x2={400} y2={80} stroke={C.ink} />
        {Array.from({ length: Math.floor(hi / 10) - Math.ceil(lo / 10) + 1 }, (_, i) => (Math.ceil(lo / 10) + i) * 10).map((t) => <text key={t} x={X(t)} y={124} fontSize={10} textAnchor="middle" fill={C.muted}>{t}</text>)}
        {xs.map((x, i) => <circle key={i} cx={X(x)} cy={68 - (xs.slice(0, i).filter((y) => y === x).length * 13)} r={5.5} fill={out.includes(x) ? C.red : C.violet} />)}
        <line x1={X(m)} y1={14} x2={X(m)} y2={80} stroke={C.red} strokeWidth={2.5} />
        <rect x={X(q.q1)} y={92} width={X(q.q3) - X(q.q1)} height={20} fill={C.violetSoft} stroke={C.violet} />
        <line x1={X(q.q2)} y1={92} x2={X(q.q2)} y2={112} stroke={C.red} strokeWidth={2} />
        <line x1={X(q.min)} y1={102} x2={X(q.q1)} y2={102} stroke={C.ink} /><line x1={X(q.q3)} y1={102} x2={X(q.max)} y2={102} stroke={C.ink} />
      </svg>
      <Readout tone="blue">
        <MathText html={`Original: mean ${n2(m0)}, SD ${n2(s0)}, IQR ${n2(q0.q3 - q0.q1)}. New (×${a}, +${b}): mean ${n2(m)} \\(=${a}(${n2(m0)})${b < 0 ? b : "+" + b}\\), SD ${n2(s)} \\(=${a}(${n2(s0)})\\), variance ${n2(s * s)}, IQR ${n2(q.q3 - q.q1)}. The amber band is mean ± 1 SD.${out.length ? ` Outlier (beyond 1.5 × IQR from the quartiles): ${out.map((x) => n2(x)).join(", ")}.` : ""}`} />
      </Readout>
    </WidgetCard>
  );
}
