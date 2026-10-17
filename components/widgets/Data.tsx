"use client";

// Chapter 6 (data) explorers: sampling methods and bias, misleading graphs, one-variable statistics with a
// box plot, histogram bin widths, scatter plots with a line of best fit, and fitting a model to data.

import { useMemo, useState, type ReactNode } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard, btn } from "./kit";

const r2 = (v: number, d = 2) => { const k = 10 ** d; const r = Math.round(v * k) / k; return r < 0 ? `−${-r}` : String(r); };
/** deterministic pseudo-random numbers so every student sees the same population */
function rng(seed: number) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
const sorted = (xs: number[]) => [...xs].sort((a, b) => a - b);
const median = (s: number[]) => (s.length ? (s.length % 2 ? s[(s.length - 1) / 2] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2) : NaN);
/** quartiles by the median-of-halves method (the median itself is left out when n is odd) */
function quartiles(xs: number[]) {
  const s = sorted(xs), n = s.length, half = Math.floor(n / 2);
  return { min: s[0], q1: median(s.slice(0, half)), med: median(s), q3: median(s.slice(n % 2 ? half + 1 : half)), max: s[n - 1] };
}
const mean = (xs: number[]) => xs.reduce((a, b) => a + b, 0) / xs.length;
function modes(xs: number[]) {
  const c = new Map<number, number>(); xs.forEach((x) => c.set(x, (c.get(x) ?? 0) + 1));
  const top = Math.max(...c.values());
  return top === 1 ? [] : [...c.entries()].filter(([, k]) => k === top).map(([x]) => x).sort((a, b) => a - b);
}

/** SVG chart area with separate x/y scales */
function Chart({ x0, x1, y0, y1, w = 520, h = 300, label, children, xTicks = [], yTicks = [], xLabel, yLabel }: { x0: number; x1: number; y0: number; y1: number; w?: number; h?: number; label: string; children: (X: (x: number) => number, Y: (y: number) => number) => ReactNode; xTicks?: number[]; yTicks?: number[]; xLabel?: string; yLabel?: string }) {
  const PL = 44, PR = 12, PT = 10, PB = 34, W = w - PL - PR, H = h - PT - PB;
  const X = (x: number) => PL + ((x - x0) / (x1 - x0)) * W, Y = (y: number) => PT + H - ((y - y0) / (y1 - y0)) * H;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", maxWidth: w + 40, display: "block", margin: "8px auto" }} role="img" aria-label={label}>
      <rect x={0} y={0} width={w} height={h} fill="#fff" />
      {yTicks.map((t) => <g key={"y" + t}><line x1={PL} y1={Y(t)} x2={PL + W} y2={Y(t)} stroke="#eef2f7" /><text x={PL - 6} y={Y(t) + 4} fontSize={11} textAnchor="end" fill={C.muted}>{r2(t)}</text></g>)}
      {xTicks.map((t) => <g key={"x" + t}><line x1={X(t)} y1={PT} x2={X(t)} y2={PT + H} stroke="#eef2f7" /><text x={X(t)} y={PT + H + 15} fontSize={11} textAnchor="middle" fill={C.muted}>{r2(t)}</text></g>)}
      <line x1={PL} y1={PT + H} x2={PL + W} y2={PT + H} stroke={C.ink} /><line x1={PL} y1={PT} x2={PL} y2={PT + H} stroke={C.ink} />
      {xLabel && <text x={PL + W} y={h - 4} fontSize={12} fontWeight={700} textAnchor="end" fill={C.ink}>{xLabel}</text>}
      {yLabel && <text x={PL + 4} y={PT + 10} fontSize={12} fontWeight={700} fill={C.ink}>{yLabel}</text>}
      <defs><clipPath id={`clip-${label.replace(/\W/g, "")}`}><rect x={PL} y={PT} width={W} height={H} /></clipPath></defs>
      <g clipPath={`url(#clip-${label.replace(/\W/g, "")})`}>{children(X, Y)}</g>
    </svg>
  );
}
const ticks = (a: number, b: number, step: number) => { const t: number[] = []; for (let v = Math.ceil(a / step) * step; v <= b + 1e-9; v += step) t.push(+v.toFixed(6)); return t; };

/* ---------------------------------------------------------------- 6.1 sampling */

type Method = "random" | "convenience" | "voluntary" | "systematic" | "stratified";
export function SamplingLab() {
  // population: 600 students in grades 9–12 (150 each); "yes" to a later bell schedule depends on grade
  const pop = useMemo(() => { const r = rng(7); const rate = [0.35, 0.5, 0.65, 0.8]; return Array.from({ length: 600 }, (_, i) => { const g = Math.floor(i / 150); return { g, yes: r() < rate[g], keen: r() }; }); }, []);
  const truth = pop.filter((p) => p.yes).length / pop.length;
  const [method, setMethod] = useState<Method>("random");
  const [n, setN] = useState(40);
  const [seed, setSeed] = useState(1);
  const [runs, setRuns] = useState<number[]>([]);
  const draw = (s: number) => {
    const r = rng(s * 97 + 13);
    let idx: number[] = [];
    if (method === "random") { const all = pop.map((_, i) => i); for (let i = all.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [all[i], all[j]] = [all[j], all[i]]; } idx = all.slice(0, n); }
    if (method === "convenience") idx = Array.from({ length: n }, (_, i) => 450 + ((i + Math.floor(r() * 150)) % 150)); // only the grade 12 hallway
    if (method === "voluntary") { // those who feel strongly (and mostly "yes") reply
      const order = pop.map((p, i) => ({ i, w: p.keen + (p.yes ? 0.35 : 0) })).sort((a, b) => b.w - a.w); idx = order.slice(0, n).map((o) => o.i);
    }
    if (method === "systematic") { const k = Math.floor(600 / n), start = Math.floor(r() * k); idx = Array.from({ length: n }, (_, i) => start + i * k); }
    if (method === "stratified") { const per = Math.round(n / 4); idx = [0, 1, 2, 3].flatMap((g) => Array.from({ length: per }, () => g * 150 + Math.floor(r() * 150))); }
    return idx;
  };
  const idx = draw(seed);
  const est = idx.filter((i) => pop[i].yes).length / idx.length;
  const many = () => setRuns(Array.from({ length: 60 }, (_, k) => { const ix = draw(seed + 1000 + k); return ix.filter((i) => pop[i].yes).length / ix.length; }));
  const note: Record<Method, string> = {
    random: "Every student has the same chance: estimates scatter around the true value with no lean.",
    convenience: "Only Grade 12s (outside your classroom) are asked: they like the idea more, so the estimate is biased high.",
    voluntary: "People who care most answer an online poll; supporters are keener, so the estimate leans high.",
    systematic: "Every k-th student on the list: fine as long as the list has no pattern.",
    stratified: "Equal random samples from each grade, matching the population's make-up.",
  };
  const pick = new Set(idx);
  return (
    <WidgetCard title="Sampling lab" subtitle="600 students; the true share who want a later start is shown in green">
      <Segmented options={[{ value: "random", label: "simple random" }, { value: "systematic", label: "systematic" }, { value: "stratified", label: "stratified" }, { value: "convenience", label: "convenience" }, { value: "voluntary", label: "voluntary" }]} value={method} onChange={(m) => { setMethod(m); setRuns([]); }} />
      <Row style={{ marginTop: 8 }}>
        <Slider label="sample size" value={n} min={8} max={120} step={4} onChange={(v) => { setN(v); setRuns([]); }} />
        <button type="button" style={btn()} onClick={() => setSeed((s) => s + 1)}>New sample</button>
        <button type="button" style={btn(true)} onClick={many}>Take 60 samples</button>
      </Row>
      <svg viewBox="0 0 600 130" style={{ width: "100%", maxWidth: 640, display: "block", margin: "10px auto" }} role="img" aria-label="Population grid with the sample highlighted">
        {pop.map((p, i) => { const col = i % 50, row = Math.floor(i / 50); return <circle key={i} cx={6 + col * 12} cy={8 + row * 10} r={pick.has(i) ? 4.4 : 3} fill={p.yes ? (pick.has(i) ? C.green : "#bbf7d0") : pick.has(i) ? C.red : "#fecdd3"} stroke={pick.has(i) ? C.ink : "none"} strokeWidth={0.8} />; })}
        {[0, 1, 2, 3].map((g) => <text key={g} x={598} y={8 + (g * 3 + 1) * 10 + 4} fontSize={9} textAnchor="end" fill={C.muted}>Gr {9 + g}</text>)}
      </svg>
      {runs.length > 0 && (
        <Chart x0={0} x1={1} y0={0} y1={1} h={120} label="Estimates from 60 samples" xTicks={[0, 0.2, 0.4, 0.6, 0.8, 1]} xLabel="estimate">
          {(X, Y) => { const seen = new Map<number, number>(); return <>{runs.map((v, k) => { const b = Math.round(v * 50) / 50; const c = (seen.get(b) ?? 0) + 1; seen.set(b, c); return <circle key={k} cx={X(b)} cy={Y(0) - 5 - (c - 1) * 8} r={3.5} fill={C.blue} />; })}<line x1={X(truth)} y1={Y(0)} x2={X(truth)} y2={Y(1)} stroke={C.green} strokeWidth={2.5} /></>; }}
        </Chart>
      )}
      <Readout tone={Math.abs(est - truth) < 0.08 ? "green" : "amber"}>
        <MathText html={`Sample: \\(${idx.filter((i) => pop[i].yes).length}\\) of \\(${idx.length}\\) say yes \\(\\approx${r2(est * 100, 0)}\\%\\). Population: \\(${r2(truth * 100, 0)}\\%\\). ${note[method]}${runs.length ? ` Over 60 samples the estimates average \\(${r2(mean(runs) * 100, 0)}\\%\\).` : ""}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 6.1 misleading graphs */

export function MisleadingGraph() {
  const data = [{ k: "2021", v: 82 }, { k: "2022", v: 85 }, { k: "2023", v: 87 }, { k: "2024", v: 90 }];
  const [base, setBase] = useState(80);
  const lo = base, hi = 92;
  const apparent = (data[3].v - lo) / (data[0].v - lo), actual = data[3].v / data[0].v;
  return (
    <WidgetCard title="How a graph can mislead" subtitle="graduation rate (%) — move where the vertical axis starts">
      <Row><Slider label="axis starts at" value={base} min={0} max={81} onChange={setBase} format={(v) => `${v}%`} color={C.red} /></Row>
      <Chart x0={0} x1={4} y0={lo} y1={hi} label="Bar graph of graduation rates" yTicks={ticks(lo, hi, base > 60 ? 2 : 10)} yLabel="%">
        {(X, Y) => <>{data.map((d, i) => <g key={d.k}><rect x={X(i + 0.18)} y={Y(d.v)} width={X(i + 0.82) - X(i + 0.18)} height={Y(lo) - Y(d.v)} fill={C.blue} opacity={0.85} /><text x={X(i + 0.5)} y={Y(lo) - 6} fontSize={12} textAnchor="middle" fill="#fff" fontWeight={700}>{d.k}</text></g>)}</>}
      </Chart>
      <Readout tone={base > 40 ? "red" : "green"}>
        <MathText html={`The 2024 bar looks \\(${r2(apparent, 1)}\\) times as tall as the 2021 bar, but the real increase is from \\(82\\%\\) to \\(90\\%\\): only \\(${r2(actual, 2)}\\) times as much. ${base > 40 ? "Starting the axis far above zero exaggerates the change. Always check the scale." : "With the axis at (or near) zero, bar heights compare fairly."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 6.2 one-variable statistics */

const SETS: Record<string, { label: string; unit: string; data: number[] }> = {
  quiz: { label: "quiz marks /20", unit: "", data: [12, 15, 9, 17, 14, 15, 18, 11, 15, 13, 16, 10, 19, 14, 15] },
  sleep: { label: "hours of sleep", unit: " h", data: [7.5, 6, 8, 9, 6.5, 7, 7, 8.5, 5.5, 7, 8, 6.5] },
  commute: { label: "minutes to school", unit: " min", data: [5, 8, 10, 12, 12, 15, 15, 15, 18, 20, 22, 25, 30, 45] },
};
export function StatsExplorer() {
  const [set, setSet] = useState("quiz");
  const [extra, setExtra] = useState<number | null>(null);
  const base = SETS[set].data;
  const lo = Math.min(...base), hi = Math.max(...base);
  const data = extra === null ? base : [...base, extra];
  const q = quartiles(data), m = mean(data), md = modes(data), iqr = q.q3 - q.q1;
  const fenceLo = q.q1 - 1.5 * iqr, fenceHi = q.q3 + 1.5 * iqr;
  const outliers = data.filter((x) => x < fenceLo || x > fenceHi);
  const x0 = Math.min(lo, extra ?? lo) - 1, x1 = Math.max(hi, extra ?? hi) + 1;
  const tally = new Map<number, number>(); data.forEach((x) => tally.set(x, (tally.get(x) ?? 0) + 1));
  const ytop = Math.max(10, 5.6 + Math.max(...tally.values()) * 0.9 + 0.8);
  const inside = data.filter((x) => x >= fenceLo && x <= fenceHi), wLo = Math.min(...inside), wHi = Math.max(...inside);
  const u = SETS[set].unit;
  return (
    <WidgetCard title="Centre, spread and the box plot" subtitle="dot plot, five-number summary and box plot of the same data">
      <Row>
        <Segmented options={Object.entries(SETS).map(([k, s]) => ({ value: k, label: s.label }))} value={set} onChange={(k) => { setSet(k); setExtra(null); }} />
      </Row>
      <Row style={{ marginTop: 8 }}>
        <label style={{ fontSize: 14, color: C.muted, fontWeight: 650 }}><input type="checkbox" checked={extra !== null} onChange={(e) => setExtra(e.target.checked ? hi + (hi - lo) : null)} /> add one more value</label>
        {extra !== null && <Slider label="new value" value={extra} min={Math.floor(lo - (hi - lo))} max={Math.ceil(hi + 2 * (hi - lo))} step={set === "sleep" ? 0.5 : 1} onChange={setExtra} color={C.red} format={(v) => `${v}${u}`} />}
      </Row>
      <Chart x0={x0} x1={x1} y0={0} y1={ytop} h={250} label="Dot plot and box plot" xTicks={ticks(x0, x1, x1 - x0 > 30 ? 5 : x1 - x0 > 12 ? 2 : 1)}>
        {(X, Y) => { const counts = new Map<number, number>(); return (
          <>
            {sorted(data).map((x, i) => { const c = (counts.get(x) ?? 0) + 1; counts.set(x, c); const isNew = extra !== null && x === extra && c === data.filter((d) => d === extra).length; return <circle key={i} cx={X(x)} cy={Y(5.6 + (c - 1) * 0.9)} r={6} fill={isNew ? C.red : C.blue} opacity={0.85} />; })}
            <line x1={X(wLo)} y1={Y(2.2)} x2={X(q.q1)} y2={Y(2.2)} stroke={C.ink} strokeWidth={2} />
            <line x1={X(q.q3)} y1={Y(2.2)} x2={X(wHi)} y2={Y(2.2)} stroke={C.ink} strokeWidth={2} />
            {outliers.map((o, i) => <text key={"o" + i} x={X(o)} y={Y(2.2) + 5} fontSize={16} fontWeight={800} textAnchor="middle" fill={C.red}>×</text>)}
            <rect x={X(q.q1)} y={Y(3.4)} width={X(q.q3) - X(q.q1)} height={Y(1) - Y(3.4)} fill={C.amberSoft} stroke={C.amber} strokeWidth={2} />
            <line x1={X(q.med)} y1={Y(3.4)} x2={X(q.med)} y2={Y(1)} stroke={C.red} strokeWidth={3} />
            <line x1={X(m)} y1={Y(4.4)} x2={X(m)} y2={Y(0.2)} stroke={C.green} strokeWidth={2} strokeDasharray="5 3" />
            {[wLo, wHi].map((v, i) => <line key={i} x1={X(v)} y1={Y(3)} x2={X(v)} y2={Y(1.4)} stroke={C.ink} strokeWidth={2} />)}
            <text x={X(m) + 4} y={Y(4.3)} fontSize={11} fill={C.green} fontWeight={700}>mean</text>
          </>
        ); }}
      </Chart>
      <table style={{ borderCollapse: "collapse", margin: "4px auto 12px", fontSize: 14, fontVariantNumeric: "tabular-nums" }}>
        <tbody>
          <tr>{["n", "min", "Q1", "median", "Q3", "max", "range", "IQR", "mean", "mode"].map((t) => <th key={t} style={{ padding: "3px 8px", background: C.panel, border: `1px solid ${C.line}` }}>{t}</th>)}</tr>
          <tr>{[data.length, q.min, q.q1, q.med, q.q3, q.max, q.max - q.min, iqr, r2(m), md.length ? md.join(", ") : "none"].map((v, i) => <td key={i} style={{ padding: "3px 8px", border: `1px solid ${C.line}`, textAlign: "center" }}>{typeof v === "number" ? r2(v) : v}</td>)}</tr>
        </tbody>
      </table>
      <Readout tone={outliers.length ? "amber" : "green"}>
        <MathText html={`Half the data lie in the box, between \\(Q_1=${r2(q.q1)}\\) and \\(Q_3=${r2(q.q3)}\\) (IQR \\(=${r2(iqr)}\\)). ${outliers.length ? `Outlier${outliers.length > 1 ? "s" : ""} (more than \\(1.5\\times\\)IQR beyond the box, marked ×; the whisker stops at the last value that is not an outlier):\\(${outliers.map((o) => r2(o)).join(", ")}\\). The mean (\\(${r2(m)}\\)) is pulled toward the outlier much more than the median (\\(${r2(q.med)}\\)), so the median describes the centre better here.` : `No outliers: values from \\(${r2(fenceLo)}\\) to \\(${r2(fenceHi)}\\) are within \\(1.5\\times\\)IQR of the box. Add a very large or small value to see how the mean and median react.`}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 6.2 histograms */

export function HistogramBins() {
  const times = useMemo(() => { const r = rng(21); return Array.from({ length: 60 }, () => { const u = r() + r() + r(); return Math.round((14 + u * 4.2) * 10) / 10; }); }, []);
  const [w, setW] = useState(1);
  const lo = Math.floor(Math.min(...times)), hi = Math.ceil(Math.max(...times));
  const bins: { a: number; b: number; c: number }[] = [];
  for (let a = lo; a < hi; a += w) bins.push({ a, b: a + w, c: times.filter((t) => t >= a && t < a + w).length });
  const top = Math.max(...bins.map((b) => b.c));
  return (
    <WidgetCard title="Histogram bin width" subtitle="60 students' 100 m sprint times (s): same data, different bin widths">
      <Row><Slider label="bin width" value={w} min={0.25} max={4} step={0.25} onChange={setW} format={(v) => `${v} s`} color={C.violet} /></Row>
      <Chart x0={lo} x1={hi + 0.01} y0={0} y1={top + 1} label="Histogram" xTicks={ticks(lo, hi, 1)} yTicks={ticks(0, top + 1, top > 20 ? 5 : top > 8 ? 2 : 1)} xLabel="time (s)" yLabel="frequency">
        {(X, Y) => <>{bins.map((b) => <rect key={b.a} x={X(b.a)} y={Y(b.c)} width={X(b.b) - X(b.a)} height={Y(0) - Y(b.c)} fill={C.violetSoft} stroke={C.violet} strokeWidth={1.5} />)}</>}
      </Chart>
      <Readout tone="green">
        <MathText html={`${bins.length} bins of width \\(${w}\\) s. ${w < 0.6 ? "Very narrow bins: the shape is jagged and hard to read." : w > 2.5 ? "Very wide bins: the detail disappears into a few bars." : "A moderate width shows the shape clearly: a single peak, roughly symmetric (mound-shaped)."} Histogram bars touch because time is continuous; each bar includes its left edge and not its right edge.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 6.3 scatter plots */

const SCATTER: Record<string, { label: string; xl: string; yl: string; pts: [number, number][] }> = {
  study: { label: "study time vs mark", xl: "hours studied", yl: "mark (%)", pts: [[1, 52], [2, 58], [2, 63], [3, 61], [4, 70], [4, 66], [5, 74], [6, 73], [6, 80], [7, 82], [8, 84], [9, 90], [3, 55], [5, 69], [7, 77]] },
  car: { label: "car age vs value", xl: "age (years)", yl: "value (k$)", pts: [[1, 31], [2, 27], [3, 25], [3, 22], [4, 21], [5, 18], [6, 15], [7, 14], [8, 10], [9, 9], [10, 6], [5, 20], [2, 29], [7, 12]] },
  shoe: { label: "shoe size vs mark", xl: "shoe size", yl: "mark (%)", pts: [[6, 71], [7, 58], [7, 84], [8, 66], [8, 77], [9, 62], [9, 88], [10, 70], [10, 55], [11, 79], [6, 64], [11, 68], [12, 74], [8, 59]] },
};
function regression(pts: [number, number][]) {
  const n = pts.length, mx = mean(pts.map((p) => p[0])), my = mean(pts.map((p) => p[1]));
  const sxy = pts.reduce((s, [x, y]) => s + (x - mx) * (y - my), 0), sxx = pts.reduce((s, [x]) => s + (x - mx) ** 2, 0), syy = pts.reduce((s, [, y]) => s + (y - my) ** 2, 0);
  const m = sxy / sxx; return { m, b: my - m * mx, r: sxy / Math.sqrt(sxx * syy), n };
}
export function ScatterFit() {
  const [k, setK] = useState("study");
  const d = SCATTER[k];
  const best = regression(d.pts);
  const [m, setM] = useState(4);
  const [b, setB] = useState(50);
  const [show, setShow] = useState(false);
  const [xq, setXq] = useState(5);
  const xs = d.pts.map((p) => p[0]), ys = d.pts.map((p) => p[1]);
  const x0 = 0, x1 = Math.max(...xs) + 2, y0 = Math.max(0, Math.floor((Math.min(...ys) - 10) / 10) * 10), y1 = Math.ceil((Math.max(...ys) + 8) / 10) * 10;
  const sse = d.pts.reduce((s, [x, y]) => s + (y - (m * x + b)) ** 2, 0), bestSse = d.pts.reduce((s, [x, y]) => s + (y - (best.m * x + best.b)) ** 2, 0);
  const strength = Math.abs(best.r) > 0.8 ? "strong" : Math.abs(best.r) > 0.5 ? "moderate" : Math.abs(best.r) > 0.25 ? "weak" : "no";
  const dir = Math.abs(best.r) <= 0.25 ? "" : best.r > 0 ? "positive" : "negative";
  const reset = (key: string) => { setK(key); const g = regression(SCATTER[key].pts); setM(Math.round(g.m)); setB(Math.round(g.b + 6)); setShow(false); };
  return (
    <WidgetCard title="Scatter plot and line of best fit" subtitle="move your line to pass through the middle of the points">
      <Segmented options={Object.entries(SCATTER).map(([key, s]) => ({ value: key, label: s.label }))} value={k} onChange={reset} />
      <Row style={{ marginTop: 8 }}>
        <Slider label="slope m" value={m} min={-8} max={8} step={0.25} onChange={setM} color={C.violet} format={(v) => r2(v)} />
        <Slider label="intercept b" value={b} min={0} max={100} step={0.5} onChange={setB} color={C.green} format={(v) => r2(v)} />
      </Row>
      <Row><label style={{ fontSize: 14, color: C.muted, fontWeight: 650 }}><input type="checkbox" checked={show} onChange={(e) => setShow(e.target.checked)} /> show the best possible line and residuals</label>
        <Slider label="predict at x =" value={xq} min={0} max={x1 + 4} step={0.5} onChange={setXq} color={C.amber} format={(v) => r2(v)} /></Row>
      <Chart x0={x0} x1={x1 + 4} y0={y0} y1={y1} label="Scatter plot" xTicks={ticks(0, x1 + 4, 2)} yTicks={ticks(y0, y1, 10)} xLabel={d.xl} yLabel={d.yl}>
        {(X, Y) => (
          <>
            {show && d.pts.map(([x, y], i) => <line key={"r" + i} x1={X(x)} y1={Y(y)} x2={X(x)} y2={Y(best.m * x + best.b)} stroke={C.red} strokeDasharray="3 2" />)}
            {show && <line x1={X(x0)} y1={Y(best.m * x0 + best.b)} x2={X(x1 + 4)} y2={Y(best.m * (x1 + 4) + best.b)} stroke={C.red} strokeWidth={2} strokeDasharray="7 4" />}
            <line x1={X(x0)} y1={Y(m * x0 + b)} x2={X(x1 + 4)} y2={Y(m * (x1 + 4) + b)} stroke={C.violet} strokeWidth={3} />
            {d.pts.map(([x, y], i) => <circle key={i} cx={X(x)} cy={Y(y)} r={5} fill={C.blue} />)}
            <line x1={X(xq)} y1={Y(y0)} x2={X(xq)} y2={Y(m * xq + b)} stroke={C.amber} strokeDasharray="4 3" />
            <circle cx={X(xq)} cy={Y(m * xq + b)} r={6} fill={C.amber} />
            <rect x={X(x1)} y={Y(y1)} width={X(x1 + 4) - X(x1)} height={Y(y0) - Y(y1)} fill={C.amberSoft} opacity={0.35} />
          </>
        )}
      </Chart>
      <Readout tone="green">
        <MathText html={`Your line: \\(y=${r2(m)}x+${r2(b)}\\); sum of squared vertical distances \\(=${r2(sse, 0)}\\) (best possible \\(${r2(bestSse, 0)}\\)). The data show ${strength === "no" ? "<strong>no</strong> clear correlation" : `a <strong>${strength} ${dir}</strong> correlation`} (\\(r\\approx${r2(best.r)}\\)). Prediction at \\(x=${r2(xq)}\\): \\(y\\approx${r2(m * xq + b, 1)}\\) — ${xq > Math.max(...xs) || xq < Math.min(...xs) ? "<strong>extrapolation</strong> (outside the data, shaded area): less reliable." : "<strong>interpolation</strong> (inside the data range)."}${k === "shoe" ? " Even when two variables are correlated, one does not necessarily cause the other." : ""}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 6.4 modelling */

const MODEL_DATA: [number, number][] = [[0, 90], [2, 74], [4, 62], [6, 52], [8, 45], [10, 39], [14, 31], [18, 27], [24, 24]]; // coffee temperature (°C) vs minutes
export function ModelFit() {
  const [kind, setKind] = useState<"linear" | "quadratic" | "exponential">("linear");
  const [m, setM] = useState(-2.5);
  const [b, setB] = useState(80);
  const [k, setK] = useState(0.1);
  const [h, setH] = useState(24);
  const [t0, setT0] = useState(90);
  const [c, setC] = useState(0.85);
  const f = (t: number) => (kind === "linear" ? m * t + b : kind === "quadratic" ? k * (t - h) ** 2 + 22 : 21 + (t0 - 21) * c ** t);
  const err = Math.sqrt(mean(MODEL_DATA.map(([t, y]) => (y - f(t)) ** 2)));
  const pred = f(30);
  const formula = kind === "linear" ? `T=${r2(m)}t+${r2(b)}` : kind === "quadratic" ? `T=${r2(k, 3)}(t-${r2(h)})^2+22` : `T=21+${r2(t0 - 21)}(${r2(c)})^t`;
  return (
    <WidgetCard title="Choosing and testing a model" subtitle="temperature of a cup of coffee (°C) as it cools in a 21 °C room">
      <Segmented options={[{ value: "linear", label: "linear" }, { value: "quadratic", label: "quadratic" }, { value: "exponential", label: "exponential" }]} value={kind} onChange={setKind} />
      <Row style={{ marginTop: 8 }}>
        {kind === "linear" && <><Slider label="slope" value={m} min={-5} max={0} step={0.1} onChange={setM} color={C.violet} format={(v) => r2(v)} /><Slider label="intercept" value={b} min={40} max={110} step={1} onChange={setB} color={C.green} /></>}
        {kind === "quadratic" && <><Slider label="a" value={k} min={0.02} max={0.25} step={0.005} onChange={setK} color={C.violet} format={(v) => r2(v, 3)} /><Slider label="vertex at t =" value={h} min={14} max={36} step={1} onChange={setH} color={C.green} /></>}
        {kind === "exponential" && <><Slider label="start T(0)" value={t0} min={60} max={110} step={1} onChange={setT0} color={C.green} /><Slider label="ratio per min" value={c} min={0.7} max={0.98} step={0.01} onChange={setC} color={C.violet} format={(v) => r2(v)} /></>}
      </Row>
      <Chart x0={0} x1={32} y0={0} y1={100} label="Cooling data with a model" xTicks={ticks(0, 32, 4)} yTicks={ticks(0, 100, 20)} xLabel="time (min)" yLabel="T (°C)">
        {(X, Y) => (
          <>
            <line x1={X(0)} y1={Y(21)} x2={X(32)} y2={Y(21)} stroke={C.faint} strokeDasharray="5 4" />
            <polyline points={Array.from({ length: 81 }, (_, i) => { const t = (32 * i) / 80; return `${X(t)},${Y(f(t))}`; }).join(" ")} fill="none" stroke={C.violet} strokeWidth={3} />
            {MODEL_DATA.map(([t, y], i) => <circle key={i} cx={X(t)} cy={Y(y)} r={5} fill={C.blue} />)}
            <circle cx={X(30)} cy={Y(pred)} r={6} fill={C.amber} />
          </>
        )}
      </Chart>
      <Readout tone={err < 2 ? "green" : err < 6 ? "blue" : "amber"}>
        <MathText html={`Model: \\(${formula}\\). Typical error \\(\\approx${r2(err, 1)}\\) °C. Prediction at 30 min (orange): \\(${r2(pred, 1)}\\) °C. ${kind === "linear" ? "A line cannot bend: it soon predicts coffee colder than the room — an unreasonable result. Test, then refine." : kind === "quadratic" ? "A parabola can fit for a while, but after its vertex it predicts the coffee heating up again — not realistic." : "The exponential model levels off at room temperature (21 °C), which matches the physical situation: the best choice here."}`} />
      </Readout>
    </WidgetCard>
  );
}
