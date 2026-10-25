"use client";

// MDM4U chapter 5 (data collection and one-variable statistics) explorers: classifying variables and studies,
// sampling techniques on a school population, bias in repeated samples, mean/median/mode with an outlier, measures
// of spread, quartiles and box plots with outlier fences, choosing and misusing displays, and z-score comparisons.

import { useMemo, useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard, btn } from "./kit";

const svgBox: React.CSSProperties = { width: "100%", maxWidth: 560, display: "block", margin: "8px auto" };
const d1 = (v: number) => String(Math.round(v * 10) / 10);
const d2 = (v: number) => String(Math.round(v * 100) / 100);
const pct = (v: number) => `${Math.round(v * 1000) / 10}%`;
/** a small seeded generator so a population stays the same between renders */
const rng = (seed: number) => () => { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296; };
const sum = (xs: number[]) => xs.reduce((a, b) => a + b, 0);
const mean = (xs: number[]) => sum(xs) / xs.length;
const median = (xs: number[]) => { const s = [...xs].sort((a, b) => a - b), n = s.length; return n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2; };
const quartiles = (xs: number[]) => { const s = [...xs].sort((a, b) => a - b), n = s.length, h = Math.floor(n / 2); return [median(s.slice(0, h)), median(s), median(s.slice(n - h))]; };
const modes = (xs: number[]) => { const c = new Map<number, number>(); xs.forEach((x) => c.set(x, (c.get(x) ?? 0) + 1)); const mx = Math.max(...c.values()); return mx === 1 ? [] : [...c].filter(([, k]) => k === mx).map(([x]) => x).sort((a, b) => a - b); };
const sdP = (xs: number[]) => { const m = mean(xs); return Math.sqrt(sum(xs.map((x) => (x - m) ** 2)) / xs.length); };
const sdS = (xs: number[]) => { const m = mean(xs); return Math.sqrt(sum(xs.map((x) => (x - m) ** 2)) / (xs.length - 1)); };
const phi = (z: number) => { const t = 1 / (1 + 0.2316419 * Math.abs(z)), d = Math.exp((-z * z) / 2) / Math.sqrt(2 * Math.PI); const p = d * t * (0.31938153 + t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429)))); return z >= 0 ? 1 - p : p; };

/** a row of option buttons that wraps on narrow screens (many options) */
function Pills<T extends string>({ options, value, onChange, label }: { options: { value: T; label: string }[]; value: T; onChange: (v: T) => void; label?: string }) {
  return (
    <div role="group" aria-label={label} style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center", margin: "4px 0" }}>
      {label && <span style={{ fontSize: 14, fontWeight: 650, color: C.muted }}>{label}</span>}
      {options.map((o) => (
        <button key={o.value} type="button" onClick={() => onChange(o.value)} aria-pressed={o.value === value}
          style={{ border: "1px solid #cbd5e1", borderRadius: 999, padding: "6px 12px", fontSize: 13.5, fontWeight: 700, cursor: "pointer", background: o.value === value ? "#1e3a8a" : "#fff", color: o.value === value ? "#fff" : C.ink }}>
          {o.label}
        </button>
      ))}
    </div>
  );
}

/** a number line with stacked dots and optional vertical marks */
function DotPlot({ vals, lo, hi, step, marks = [], color = C.blue }: { vals: number[]; lo: number; hi: number; step: number; marks?: { x: number; label: string; color: string }[]; color?: string }) {
  const counts = new Map<number, number>(); vals.forEach((v) => counts.set(v, (counts.get(v) ?? 0) + 1));
  const top = Math.max(...counts.values()), W = 540, L = 20, w = W - 40, H = 70 + top * 15, base = H - 28, X = (v: number) => L + ((v - lo) / (hi - lo)) * w;
  const ticks: number[] = []; for (let v = lo; v <= hi + 1e-9; v += step) ticks.push(Math.round(v * 100) / 100);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={svgBox} role="img" aria-label="Dot plot">
      <line x1={L - 6} y1={base} x2={L + w + 6} y2={base} stroke={C.ink} strokeWidth={1.3} />
      {ticks.map((v) => <g key={v}><line x1={X(v)} y1={base} x2={X(v)} y2={base + 5} stroke={C.ink} /><text x={X(v)} y={base + 18} fontSize={11} textAnchor="middle" fill={C.muted}>{v}</text></g>)}
      {[...counts].flatMap(([v, k]) => Array.from({ length: k }, (_, i) => <circle key={`${v}-${i}`} cx={X(v)} cy={base - 8 - i * 15} r={6.5} fill={C.blueSoft} stroke={color} strokeWidth={1.4} />))}
      {marks.map((m, i) => <g key={i}><line x1={X(m.x)} y1={16 + (i % 3) * 12} x2={X(m.x)} y2={base} stroke={m.color} strokeWidth={2} strokeDasharray="5 4" /><text x={X(m.x)} y={12 + (i % 3) * 12} fontSize={11} fontWeight={700} textAnchor="middle" fill={m.color} stroke="#fff" strokeWidth={3} paintOrder="stroke">{m.label}</text></g>)}
    </svg>
  );
}

/* ---------------------------------------------------------------- 5.1 types of data and studies */

type VarKind = "nominal" | "ordinal" | "discrete" | "continuous";
const VARS: [string, VarKind, string][] = [
  ["favourite music streaming service", "nominal", "Categories with no natural order."],
  ["T-shirt size (S, M, L, XL)", "ordinal", "Categories with a natural order, but the gaps are not measured."],
  ["number of siblings", "discrete", "Counted: only whole-number values."],
  ["time to run 100 m", "continuous", "Measured: any value in an interval is possible."],
  ["postal code", "nominal", "Digits and letters used as labels, not quantities."],
  ["satisfaction rating: poor / fair / good / excellent", "ordinal", "Ordered categories."],
  ["number of texts sent today", "discrete", "Counted."],
  ["mass of a backpack", "continuous", "Measured."],
  ["blood type", "nominal", "Unordered categories."],
  ["shoe size (7, 7½, 8, …)", "discrete", "Only certain listed values occur, so it is treated as discrete."],
  ["daily high temperature", "continuous", "Measured on a continuous scale."],
  ["finishing place in a race (1st, 2nd, …)", "ordinal", "Ranks: order matters, but gaps differ."],
];
type StudyKind = "experimental" | "observational";
const STUDIES: [string, StudyKind, string][] = [
  ["Researchers randomly assign 80 volunteers to a new sleep app or no app and compare sleep after 6 weeks.", "experimental", "The researchers impose a treatment and use random assignment."],
  ["A survey records how many hours students in a school spend on homework each week.", "observational", "Nothing is imposed: existing behaviour is recorded."],
  ["A health agency follows 5000 adults for 20 years, recording diet and heart disease.", "observational", "Observational and longitudinal (the same people over time)."],
  ["A farmer treats half the plots (chosen at random) with a new fertilizer and compares yields.", "experimental", "A treatment is applied to randomly chosen plots."],
  ["Census data on household income by province in one year are compared.", "observational", "Observational and cross-sectional (one point in time), using secondary data."],
  ["A teacher tries two seating plans in two randomly chosen classes and compares test scores.", "experimental", "A treatment (seating plan) is assigned."],
];

export function DataTypes({ init = "variable" }: { init?: "variable" | "study" }) {
  const [mode, setMode] = useState<"variable" | "study">(init), [i, setI] = useState(0), [pick, setPick] = useState<string | null>(null), [score, setScore] = useState([0, 0]);
  const list = mode === "variable" ? VARS : STUDIES, item = list[i % list.length];
  const opts = mode === "variable" ? (["nominal", "ordinal", "discrete", "continuous"] as const) : (["experimental", "observational"] as const);
  const choose = (o: string) => { if (pick) return; setPick(o); setScore([score[0] + (o === item[1] ? 1 : 0), score[1] + 1]); };
  return (
    <WidgetCard title="Classify the data" subtitle="categorical (nominal, ordinal) or numerical (discrete, continuous); experiment or observational study">
      <Segmented value={mode} onChange={(m) => { setMode(m); setI(0); setPick(null); setScore([0, 0]); }} options={[{ value: "variable", label: "type of variable" }, { value: "study", label: "type of study" }]} />
      <div style={{ margin: "12px 0", padding: "12px 14px", background: C.panel, borderRadius: 10, fontSize: 16, fontWeight: 600, color: C.ink }}>{item[0]}</div>
      <Row gap={8}>
        {opts.map((o) => <button key={o} type="button" onClick={() => choose(o)} style={{ ...btn(pick === o), background: pick ? (o === item[1] ? C.greenSoft : o === pick ? C.redSoft : "#fff") : undefined, color: C.ink }}>{o}</button>)}
        <button type="button" style={btn(true)} onClick={() => { setI(i + 1); setPick(null); }}>next →</button>
      </Row>
      <Readout tone={pick ? (pick === item[1] ? "green" : "red") : "blue"}>
        <MathText html={pick ? `${pick === item[1] ? "Correct" : `Not quite — it is <strong>${item[1]}</strong>`}. ${item[2]} &nbsp; Score: ${score[0]} / ${score[1]}.` : mode === "variable" ? "Categorical data are labels (nominal: no order; ordinal: ordered). Numerical data are counted (discrete) or measured (continuous)." : "In an experiment the researcher imposes a treatment; in an observational study the researcher only records what already happens."} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.2 sampling techniques */

// 200 students: rows 0–2 grade 9, 3–5 grade 10, 6–7 grade 11, 8–9 grade 12; 5 homeroom clusters of 4 columns
const NR = 10, NC = 20, GR = (r: number) => (r < 3 ? 0 : r < 6 ? 1 : r < 8 ? 2 : 3), GCOL = [C.blue, C.red, C.green, C.amber], GNAME = ["Gr 9", "Gr 10", "Gr 11", "Gr 12"];
const POP = (() => { const R = rng(7), sup = [0.8, 0.65, 0.45, 0.3]; return Array.from({ length: NR * NC }, (_, i) => R() < sup[GR(Math.floor(i / NC))]); })();
type Method = "srs" | "systematic" | "stratified" | "cluster" | "convenience" | "voluntary";
const shuffle = (a: number[], R: () => number) => { for (let k = a.length - 1; k > 0; k--) { const j = Math.floor(R() * (k + 1)); [a[k], a[j]] = [a[j], a[k]]; } return a; };
function drawSample(m: Method, n: number, R: () => number): number[] {
  const all = Array.from({ length: NR * NC }, (_, i) => i);
  if (m === "srs") return shuffle(all, R).slice(0, n);
  if (m === "systematic") { const k = Math.floor((NR * NC) / n), s = Math.floor(R() * k); return Array.from({ length: n }, (_, j) => s + j * k); }
  if (m === "stratified") return [0, 1, 2, 3].flatMap((g) => { const grp = all.filter((i) => GR(Math.floor(i / NC)) === g); return shuffle(grp, R).slice(0, Math.round((n * grp.length) / (NR * NC))); });
  if (m === "cluster") { const per = NR * 4, k = Math.max(1, Math.round(n / per)); const cl = shuffle([0, 1, 2, 3, 4], R).slice(0, k); return all.filter((i) => cl.includes(Math.floor((i % NC) / 4))); }
  if (m === "convenience") return all.slice(0, n); // the first students through the door: all grade 9
  // voluntary response: supporters are far more likely to answer
  return shuffle(all.filter((i) => R() < (POP[i] ? 0.5 : 0.12)), R).slice(0, n);
}
const METHOD_NOTE: Record<Method, string> = {
  srs: "Every group of n students is equally likely. Unbiased.",
  systematic: "Every k-th student from a random start, k = N/n. Unbiased unless the list has a repeating pattern.",
  stratified: "A random sample from each grade in proportion to its size: grade shares match the population exactly.",
  cluster: "Whole homerooms (clusters) chosen at random; everyone in them is surveyed. Cheap, but clusters can differ.",
  convenience: "The easiest students to reach (the first rows — all grade 9). Biased.",
  voluntary: "Only students who choose to respond. People with strong opinions answer more often. Biased.",
};

export function SchoolSampling({ init = "srs" }: { init?: Method }) {
  const [m, setM] = useState<Method>(init), [n, setN] = useState(40), [seed, setSeed] = useState(1);
  const sample = useMemo(() => drawSample(m, n, rng(seed * 97 + 3)), [m, n, seed]);
  const sel = new Set(sample), truth = mean(POP.map(Number)), est = mean(sample.map((i) => Number(POP[i])));
  const many = useMemo(() => { const R = rng(seed * 31 + 11); return Array.from({ length: 300 }, () => { const s = drawSample(m, n, R); return mean(s.map((i) => Number(POP[i]))); }); }, [m, n, seed]);
  const u = 25, W = NC * u + 20, H = NR * u + 20;
  const share = [0, 1, 2, 3].map((g) => sample.filter((i) => GR(Math.floor(i / NC)) === g).length / sample.length);
  return (
    <WidgetCard title="Sampling a school of 200 students" subtitle="question: do you support a later start time? filled dots = supporters">
      <Pills value={m} onChange={setM} label="method:" options={[{ value: "srs", label: "simple random" }, { value: "systematic", label: "systematic" }, { value: "stratified", label: "stratified" }, { value: "cluster", label: "cluster" }, { value: "convenience", label: "convenience" }, { value: "voluntary", label: "voluntary" }]} />
      <Row>
        <Slider label="sample size n" value={n} min={20} max={80} step={20} onChange={setN} color={C.blue} />
        <button type="button" style={btn(true)} onClick={() => setSeed(seed + 1)}>new sample</button>
      </Row>
      <svg viewBox={`0 0 ${W} ${H}`} style={svgBox} role="img" aria-label="Population grid with the sample highlighted">
        {[0, 1, 2, 3, 4].map((c) => <rect key={c} x={10 + c * 4 * u + 1} y={9} width={4 * u - 2} height={NR * u + 2} rx={6} fill="none" stroke={C.faint} strokeDasharray="4 3" />)}
        {POP.map((yes, i) => { const r = Math.floor(i / NC), c = i % NC, g = GR(r), on = sel.has(i); return <circle key={i} cx={10 + c * u + u / 2} cy={10 + r * u + u / 2} r={on ? 8 : 5.5} fill={yes ? GCOL[g] : "#fff"} stroke={GCOL[g]} strokeWidth={on ? 3 : 1.2} opacity={on ? 1 : 0.35} />; })}
      </svg>
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", fontSize: 13, color: C.muted, justifyContent: "center" }}>
        {GNAME.map((g, k) => <span key={g} style={{ color: GCOL[k], fontWeight: 700 }}>{g}: population {k < 2 ? 30 : 20}%, sample {Math.round(share[k] * 100)}%</span>)}
      </div>
      <Readout tone={Math.abs(mean(many) - truth) > 0.05 ? "red" : "green"}>
        <MathText html={`${METHOD_NOTE[m]} This sample: ${pct(est)} support (true population value ${pct(truth)}). Over 300 repeated samples the estimates average ${pct(mean(many))} and typically vary by about ±${pct(sdP(many))}${Math.abs(mean(many) - truth) > 0.05 ? " — a systematic error: the method is <strong>biased</strong>." : "."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.3 bias in repeated samples */

type Bias = "none" | "sampling" | "nonresponse" | "response" | "measurement";
const BIAS_NOTE: Record<Bias, string> = {
  none: "A simple random sample with a neutral question: estimates scatter around the truth.",
  sampling: "Sampling bias: the survey is given at a gym entrance, so regular exercisers are over-represented.",
  nonresponse: "Non-response bias: people who rarely exercise are less likely to return the survey.",
  response: "Response bias: a leading question (“Like most healthy people, do you exercise regularly?”) pushes people to say yes.",
  measurement: "Measurement bias: the fitness tracker used to decide “regular” counts any 10-minute walk, so it over-counts.",
};

export function BiasLab({ init = "none" }: { init?: Bias }) {
  const [b, setB] = useState<Bias>(init), [n, setN] = useState(100), [k, setK] = useState(5), [seed, setSeed] = useState(1);
  const p = 0.4, strength = k / 10;
  const ests = useMemo(() => {
    const R = rng(seed * 53 + 7);
    return Array.from({ length: 400 }, () => {
      let yes = 0, got = 0;
      while (got < n) {
        let ex = R() < p;
        if (b === "sampling" && !ex && R() < strength * 0.6) ex = true; // replaced by someone at the gym
        if (b === "nonresponse" && !ex && R() < strength * 0.8) continue; // did not respond
        let says = ex;
        if ((b === "response" || b === "measurement") && !ex && R() < strength * (b === "response" ? 0.5 : 0.35)) says = true;
        got++; if (says) yes++;
      }
      return yes / n;
    });
  }, [b, n, k, seed]); // eslint-disable-line react-hooks/exhaustive-deps
  const bins = 25, lo = 0.1, hi = 0.85, cnt = Array(bins).fill(0); for (const e of ests) { const j = Math.floor(((e - lo) / (hi - lo)) * bins); if (j >= 0 && j < bins) cnt[j]++; }
  const W = 540, H = 200, L = 20, w = W - 40, T = 14, h = H - 44, top = Math.max(...cnt) * 1.1, X = (v: number) => L + ((v - lo) / (hi - lo)) * w;
  const m = mean(ests), sd = sdP(ests);
  return (
    <WidgetCard title="Bias versus sampling variability" subtitle="400 surveys of the same population; true proportion who exercise regularly = 40%">
      <Pills value={b} onChange={setB} label="bias:" options={[{ value: "none", label: "no bias" }, { value: "sampling", label: "sampling" }, { value: "nonresponse", label: "non-response" }, { value: "response", label: "response" }, { value: "measurement", label: "measurement" }]} />
      <Row>
        <Slider label="sample size n" value={n} min={20} max={400} step={20} onChange={setN} color={C.blue} />
        <Slider label="bias strength" value={k} min={0} max={10} onChange={setK} color={C.red} />
        <button type="button" style={btn()} onClick={() => setSeed(seed + 1)}>rerun</button>
      </Row>
      <svg viewBox={`0 0 ${W} ${H}`} style={svgBox} role="img" aria-label="Histogram of sample proportions">
        {cnt.map((c, j) => <rect key={j} x={X(lo + (j * (hi - lo)) / bins)} y={T + h - (c / top) * h} width={w / bins - 1} height={(c / top) * h} fill={C.blueSoft} stroke={C.blue} />)}
        <line x1={L} y1={T + h} x2={L + w} y2={T + h} stroke={C.ink} />
        {[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8].map((v) => <text key={v} x={X(v)} y={H - 12} fontSize={11} textAnchor="middle" fill={C.muted}>{v}</text>)}
        <line x1={X(p)} y1={T} x2={X(p)} y2={T + h} stroke={C.green} strokeWidth={2.5} /><text x={X(p) - 4} y={T + 10} fontSize={11} fontWeight={700} textAnchor="end" fill={C.green}>truth 0.40</text>
        <line x1={X(m)} y1={T} x2={X(m)} y2={T + h} stroke={C.red} strokeWidth={2} strokeDasharray="5 4" /><text x={X(m) + 4} y={T + 24} fontSize={11} fontWeight={700} fill={C.red}>average {d2(m)}</text>
      </svg>
      <Readout tone={Math.abs(m - p) > 0.02 ? "red" : "green"}>
        <MathText html={`${BIAS_NOTE[b]} Average estimate ${d2(m)} (bias ${m - p >= 0 ? "+" : "−"}${d2(Math.abs(m - p))}); spread about ±${d2(sd)}. A larger sample shrinks the spread but <strong>does not remove bias</strong>.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.4 mean, median, mode */

const CT_SETS: Record<string, { vals: number[]; lo: number; hi: number; step: number; unit: string; name: string }> = {
  wages: { vals: [15, 16, 16, 17, 17, 17, 18, 19, 20, 21], lo: 10, hi: 60, step: 5, unit: "$/h", name: "hourly wages at a café" },
  quiz: { vals: [4, 6, 6, 7, 7, 8, 8, 8, 9, 10], lo: 0, hi: 20, step: 2, unit: "marks", name: "quiz scores out of 10" },
  commute: { vals: [8, 10, 12, 12, 15, 15, 15, 18, 20, 25], lo: 0, hi: 90, step: 10, unit: "min", name: "commute times" },
};

export function CentralTendency({ init = "wages" }: { init?: string }) {
  const [set, setSet] = useState(init), cfg = CT_SETS[set] ?? CT_SETS.wages, [last, setLast] = useState(cfg.vals[cfg.vals.length - 1]);
  const vals = [...cfg.vals.slice(0, -1), last], mn = mean(vals), md = median(vals), mo = modes(vals);
  return (
    <WidgetCard title="Mean, median and mode" subtitle={`${cfg.name}: drag the largest value and watch the measures`}>
      <Segmented value={set} onChange={(s) => { setSet(s); setLast(CT_SETS[s].vals[CT_SETS[s].vals.length - 1]); }} options={[{ value: "wages", label: "wages" }, { value: "quiz", label: "quiz" }, { value: "commute", label: "commute" }]} />
      <Slider label={`largest value (${cfg.unit})`} value={last} min={cfg.vals[cfg.vals.length - 2]} max={cfg.hi} onChange={setLast} color={C.red} />
      <DotPlot vals={vals} lo={cfg.lo} hi={cfg.hi} step={cfg.step} marks={[{ x: mn, label: `mean ${d2(mn)}`, color: C.red }, { x: md, label: `median ${d2(md)}`, color: C.green }, ...(mo.length === 1 ? [{ x: mo[0], label: `mode ${mo[0]}`, color: C.violet }] : [])]} />
      <Readout tone={mn - md > 2 ? "amber" : "green"}>
        <MathText html={`\\(\\bar x=\\frac{\\Sigma x}{n}=\\frac{${sum(vals)}}{${vals.length}}=${d2(mn)}\\); median = ${d2(md)} (average of the 5th and 6th values); mode = ${mo.length ? mo.join(", ") : "none"}. ${mn - md > 2 ? "The outlier pulls the mean far above the median: the median better describes a typical value." : "With no extreme value the mean and median are close."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.5 measures of spread */

export function SpreadLab({ init = 1 }: { init?: number }) {
  const base = [-9, -6, -4, -2, -1, 0, 1, 2, 4, 6, 9];
  const [f, setF] = useState(init), [kind, setKind] = useState<"pop" | "sample">("sample");
  const vals = base.map((d) => Math.round(50 + d * f)), m = mean(vals), sd = kind === "pop" ? sdP(vals) : sdS(vals), ss = sum(vals.map((x) => (x - m) ** 2));
  const W = 540, L = 20, w = W - 40, lo = 0, hi = 100, X = (v: number) => L + ((v - lo) / (hi - lo)) * w, rh = 14, H = 30 + vals.length * rh + 30;
  const sorted = [...vals].sort((a, b) => a - b);
  return (
    <WidgetCard title="Measures of spread" subtitle="11 test marks with mean 50 — stretch the data and watch the deviations">
      <Row>
        <Slider label="spread factor" value={f} min={0.2} max={5} step={0.1} onChange={setF} color={C.red} format={d1} />
        <Segmented value={kind} onChange={setKind} options={[{ value: "pop", label: "population σ" }, { value: "sample", label: "sample s" }]} />
      </Row>
      <svg viewBox={`0 0 ${W} ${H}`} style={svgBox} role="img" aria-label="Deviations from the mean">
        <line x1={X(m)} y1={10} x2={X(m)} y2={H - 26} stroke={C.green} strokeWidth={2} />
        <rect x={X(m - sd)} y={10} width={X(m + sd) - X(m - sd)} height={H - 36} fill={C.greenSoft} opacity={0.6} />
        {sorted.map((v, i) => <g key={i}><line x1={X(m)} y1={20 + i * rh} x2={X(v)} y2={20 + i * rh} stroke={v < m ? C.red : C.blue} strokeWidth={3} /><circle cx={X(v)} cy={20 + i * rh} r={4.5} fill={v < m ? C.red : C.blue} /></g>)}
        <line x1={L} y1={H - 26} x2={L + w} y2={H - 26} stroke={C.ink} />
        {[0, 20, 40, 60, 80, 100].map((v) => <text key={v} x={X(v)} y={H - 10} fontSize={11} textAnchor="middle" fill={C.muted}>{v}</text>)}
      </svg>
      <Readout tone="green">
        <MathText html={`Range = ${sorted[sorted.length - 1]} − ${sorted[0]} = ${sorted[sorted.length - 1] - sorted[0]}. Sum of squared deviations \\(\\Sigma(x-\\bar x)^2=${d2(ss)}\\). ${kind === "pop" ? `Population: \\(\\sigma^2=\\frac{${d2(ss)}}{11}=${d2(ss / 11)}\\), \\(\\sigma=${d2(sd)}\\).` : `Sample: \\(s^2=\\frac{${d2(ss)}}{10}=${d2(ss / 10)}\\), \\(s=${d2(sd)}\\).`} The green band is \\(\\bar x\\pm1\\) standard deviation. Stretching the data by a factor stretches the standard deviation by the same factor; the mean stays 50.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.6 quartiles, percentiles, box plots */

export function BoxPlotLab({ init = 58 }: { init?: number }) {
  const base = [22, 25, 27, 28, 30, 31, 31, 33, 34, 36, 38, 41];
  const [last, setLast] = useState(init), [pick, setPick] = useState(33);
  const vals = [...base, last].sort((a, b) => a - b), [q1, q2, q3] = quartiles(vals), iqr = q3 - q1, lf = q1 - 1.5 * iqr, uf = q3 + 1.5 * iqr;
  const out = vals.filter((v) => v < lf || v > uf), inn = vals.filter((v) => v >= lf && v <= uf);
  const W = 540, L = 20, w = W - 40, lo = 10, hi = 80, X = (v: number) => L + ((v - lo) / (hi - lo)) * w, y = 70;
  const below = vals.filter((v) => v < pick).length, eq = vals.filter((v) => v === pick).length;
  return (
    <WidgetCard title="Quartiles, outliers and the box plot" subtitle="13 commute distances (km); move the largest value">
      <Row>
        <Slider label="largest value" value={last} min={41} max={78} onChange={setLast} color={C.red} />
        <Slider label="value for percentile rank" value={pick} min={22} max={41} onChange={setPick} color={C.violet} />
      </Row>
      <svg viewBox={`0 0 ${W} 150`} style={svgBox} role="img" aria-label="Box plot with fences">
        {vals.map((v, i) => <circle key={i} cx={X(v)} cy={22 - (vals.slice(0, i).filter((u) => u === v).length) * 10} r={4} fill={out.includes(v) ? C.red : C.blue} />)}
        {[lf, uf].map((f, i) => <g key={i}><line x1={X(f)} y1={40} x2={X(f)} y2={102} stroke={C.amber} strokeDasharray="4 3" strokeWidth={1.8} /><text x={X(f)} y={114} fontSize={10.5} textAnchor="middle" fill={C.amber} fontWeight={700}>{i ? "upper" : "lower"} fence {d1(f)}</text></g>)}
        <line x1={X(inn[0])} y1={y} x2={X(q1)} y2={y} stroke={C.blue} strokeWidth={2} /><line x1={X(q3)} y1={y} x2={X(inn[inn.length - 1])} y2={y} stroke={C.blue} strokeWidth={2} />
        <rect x={X(q1)} y={y - 16} width={X(q3) - X(q1)} height={32} fill={C.blueSoft} stroke={C.blue} strokeWidth={2} />
        <line x1={X(q2)} y1={y - 16} x2={X(q2)} y2={y + 16} stroke={C.blue} strokeWidth={3} />
        {[inn[0], inn[inn.length - 1]].map((v, i) => <line key={i} x1={X(v)} y1={y - 8} x2={X(v)} y2={y + 8} stroke={C.blue} strokeWidth={2} />)}
        {out.map((v, i) => <circle key={i} cx={X(v)} cy={y} r={5} fill="#fff" stroke={C.red} strokeWidth={2} />)}
        <line x1={L} y1={128} x2={L + w} y2={128} stroke={C.ink} />
        {[10, 20, 30, 40, 50, 60, 70, 80].map((v) => <text key={v} x={X(v)} y={144} fontSize={11} textAnchor="middle" fill={C.muted}>{v}</text>)}
      </svg>
      <Readout tone={out.length ? "amber" : "green"}>
        <MathText html={`Five-number summary: ${vals[0]}, \\(Q_1=${d1(q1)}\\), median ${d1(q2)}, \\(Q_3=${d1(q3)}\\), ${vals[vals.length - 1]}. IQR = ${d1(iqr)}; fences \\(Q_1-1.5\\,IQR=${d1(lf)}\\) and \\(Q_3+1.5\\,IQR=${d1(uf)}\\). ${out.length ? `Outlier: ${out.join(", ")} (open circle); the whisker stops at ${inn[inn.length - 1]}.` : "No outliers: the whiskers reach the minimum and maximum."} Percentile rank of ${pick}: \\(\\frac{${below}+0.5(${eq})}{13}\\times100\\approx${Math.round(((below + 0.5 * eq) / 13) * 100)}\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.7 displays and shapes */

type Shape = "symmetric" | "right" | "left" | "bimodal" | "uniform";
const SHAPE: Record<Shape, number[]> = {
  symmetric: [1, 3, 7, 12, 16, 12, 7, 3, 1],
  right: [6, 15, 16, 11, 7, 4, 2, 1, 1],
  left: [1, 1, 2, 4, 7, 11, 16, 15, 6],
  bimodal: [3, 9, 13, 7, 3, 7, 13, 9, 3],
  uniform: [7, 7, 7, 7, 7, 7, 7, 7, 7],
};

export function DisplayLab({ init = "symmetric" }: { init?: Shape }) {
  const [shape, setShape] = useState<Shape>(init), [view, setView] = useState<"histogram" | "box" | "bar">("histogram"), [trunc, setTrunc] = useState(false);
  const f = SHAPE[shape], mids = f.map((_, k) => 15 + 10 * k), n = sum(f);
  const vals = f.flatMap((c, k) => Array(c).fill(mids[k]) as number[]), mn = mean(vals), md = median(vals), [q1, , q3] = quartiles(vals);
  const W = 540, H = 210, L = 40, T = 14, w = W - 60, h = H - 46;
  const cats: [string, number][] = [["bus", 412], ["car", 388], ["walk", 251], ["bike", 96]], cmin = trunc ? 80 : 0, cmax = 430;
  return (
    <WidgetCard title="Displaying a distribution" subtitle="choose a shape and a display; the bar view shows how an axis can mislead">
      <Pills value={view} onChange={setView} label="display:" options={[{ value: "histogram", label: "histogram" }, { value: "box", label: "box plot" }, { value: "bar", label: "bar graph (categorical)" }]} />
      {view !== "bar" ? <Pills value={shape} onChange={setShape} label="shape:" options={[{ value: "symmetric", label: "symmetric" }, { value: "right", label: "skewed right" }, { value: "left", label: "skewed left" }, { value: "bimodal", label: "bimodal" }, { value: "uniform", label: "uniform" }]} />
        : <label style={{ fontSize: 14, fontWeight: 650, color: C.muted, display: "inline-flex", gap: 6, alignItems: "center", marginTop: 6 }}><input type="checkbox" checked={trunc} onChange={(e) => setTrunc(e.target.checked)} /> start the vertical axis at 80</label>}
      <svg viewBox={`0 0 ${W} ${H}`} style={svgBox} role="img" aria-label="Data display">
        {view === "histogram" && <>
          {f.map((c, k) => <rect key={k} x={L + (k * w) / 9} y={T + h - (c / 17) * h} width={w / 9} height={(c / 17) * h} fill={C.blueSoft} stroke={C.blue} />)}
          {mids.map((m, k) => <text key={m} x={L + (k * w) / 9} y={H - 16} fontSize={11} textAnchor="middle" fill={C.muted}>{m - 5}</text>)}
          <line x1={L + ((mn - 10) / 90) * w} y1={T} x2={L + ((mn - 10) / 90) * w} y2={T + h} stroke={C.red} strokeWidth={2} strokeDasharray="5 4" />
          <line x1={L + ((md - 10) / 90) * w} y1={T} x2={L + ((md - 10) / 90) * w} y2={T + h} stroke={C.green} strokeWidth={2} />
        </>}
        {view === "box" && <>
          <line x1={L + ((vals[0] - 10) / 90) * w} y1={90} x2={L + ((q1 - 10) / 90) * w} y2={90} stroke={C.blue} strokeWidth={2} />
          <line x1={L + ((q3 - 10) / 90) * w} y1={90} x2={L + ((vals[n - 1] - 10) / 90) * w} y2={90} stroke={C.blue} strokeWidth={2} />
          <rect x={L + ((q1 - 10) / 90) * w} y={66} width={((q3 - q1) / 90) * w} height={48} fill={C.blueSoft} stroke={C.blue} strokeWidth={2} />
          <line x1={L + ((md - 10) / 90) * w} y1={66} x2={L + ((md - 10) / 90) * w} y2={114} stroke={C.blue} strokeWidth={3} />
          {[10, 30, 50, 70, 90, 100].map((v) => <text key={v} x={L + ((v - 10) / 90) * w} y={H - 16} fontSize={11} textAnchor="middle" fill={C.muted}>{v}</text>)}
        </>}
        {view === "bar" && <>
          {cats.map(([c, v], k) => { const y = T + h - ((v - cmin) / (cmax - cmin)) * h; return <g key={c}><rect x={L + 20 + k * 120} y={y} width={80} height={T + h - y} fill={C.violetSoft} stroke={C.violet} /><text x={L + 60 + k * 120} y={H - 16} fontSize={12} textAnchor="middle" fill={C.ink} fontWeight={700}>{c}</text><text x={L + 60 + k * 120} y={y - 5} fontSize={11} textAnchor="middle" fill={C.violet}>{v}</text></g>; })}
          {[0, 1, 2, 3, 4].map((k) => { const v = cmin + ((cmax - cmin) * k) / 4; return <text key={k} x={L - 6} y={T + h - (k / 4) * h + 4} fontSize={10.5} textAnchor="end" fill={C.muted}>{Math.round(v)}</text>; })}
        </>}
        <line x1={L} y1={T + h} x2={L + w} y2={T + h} stroke={C.ink} />
      </svg>
      <Readout tone={view === "bar" && trunc ? "red" : "green"}>
        <MathText html={view === "bar" ? (trunc ? "The axis starts at 80, so “bus” looks almost 1.2 times taller than “car” here but nearly 4 times taller than “walk” — the true ratio bus : walk is only 1.6. A truncated axis exaggerates differences." : "Counts of how 1147 students get to school. Bars for categories are separated; a circle graph would show the same data as percents of the whole.") : `n = ${n}; mean ≈ ${d1(mn)} (red dashed), median ${d1(md)} (green). ${shape === "right" ? "Skewed right: the long tail pulls the mean above the median." : shape === "left" ? "Skewed left: the mean is below the median." : shape === "bimodal" ? "Bimodal: two peaks — perhaps two different groups mixed together; the mean describes neither." : shape === "uniform" ? "Uniform: all intervals about equally frequent." : "Symmetric and mound-shaped: mean ≈ median."} ${view === "box" ? "A box plot hides peaks (a bimodal set can look symmetric), but shows the median and quartiles clearly." : ""}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.8 z-scores */

export function ZCompare({ init = [78, 85] }: { init?: [number, number] }) {
  const [a, setA] = useState(init[0]), [b, setB] = useState(init[1]);
  const [ma, sa, mb, sb] = [70, 5, 80, 8], za = (a - ma) / sa, zb = (b - mb) / sb;
  const W = 540, L = 30, w = W - 60, X = (z: number) => L + ((z + 3.2) / 6.4) * w;
  const line = (y: number, mu: number, s: number, x: number, z: number, col: string, name: string) => (
    <g>
      <text x={L} y={y - 26} fontSize={12} fontWeight={700} fill={col}>{name}: μ = {mu}, σ = {s}</text>
      <line x1={L} y1={y} x2={L + w} y2={y} stroke={C.ink} />
      {[-3, -2, -1, 0, 1, 2, 3].map((k) => <g key={k}><line x1={X(k)} y1={y - 4} x2={X(k)} y2={y + 4} stroke={C.ink} /><text x={X(k)} y={y + 17} fontSize={10.5} textAnchor="middle" fill={C.muted}>{mu + k * s}</text></g>)}
      <circle cx={X(Math.max(-3.2, Math.min(3.2, z)))} cy={y} r={7} fill={col} />
      <text x={X(Math.max(-3.2, Math.min(3.2, z)))} y={y - 10} fontSize={11} fontWeight={700} textAnchor="middle" fill={col}>{x}</text>
    </g>
  );
  return (
    <WidgetCard title="Comparing with z-scores" subtitle="z = (x − μ)/σ counts standard deviations from the mean">
      <Row>
        <Slider label="mark on test A" value={a} min={55} max={90} onChange={setA} color={C.blue} />
        <Slider label="mark on test B" value={b} min={55} max={100} onChange={setB} color={C.red} />
      </Row>
      <svg viewBox={`0 0 ${W} 170`} style={svgBox} role="img" aria-label="Two marks on standardized scales">
        {line(60, ma, sa, a, za, C.blue, "Test A")}
        {line(140, mb, sb, b, zb, C.red, "Test B")}
      </svg>
      <Readout tone="green">
        <MathText html={`\\(z_A=\\frac{${a}-${ma}}{${sa}}=${d2(za)}\\), \\(z_B=\\frac{${b}-${mb}}{${sb}}=${d2(zb)}\\). ${Math.abs(za - zb) < 0.005 ? "The two marks are equally good relative to their classes." : `The mark on test ${za > zb ? "A" : "B"} is relatively better (larger z), even though ${za > zb ? (a < b ? "it is the lower raw mark" : "it is also the higher raw mark") : b < a ? "it is the lower raw mark" : "it is also the higher raw mark"}.`} If the marks are roughly normal, about ${Math.round(phi(za) * 100)}% of class A and ${Math.round(phi(zb) * 100)}% of class B scored lower.`} />
      </Readout>
    </WidgetCard>
  );
}
