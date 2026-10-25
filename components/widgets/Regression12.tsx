"use client";

// MDM4U chapter 6 (two-variable statistics) explorers: correlation strength on a scatter plot, fitting a line by
// least squares, prediction with r² (interpolation vs extrapolation), choosing linear/quadratic/exponential models,
// classifying causal relationships, how one outlier moves the line (with a residual plot), and how a hidden grouping
// variable can change a trend.

import { useId, useMemo, useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard, btn } from "./kit";

const svgBox: React.CSSProperties = { width: "100%", maxWidth: 560, display: "block", margin: "8px auto" };
const d2 = (v: number) => String(Math.round(v * 100) / 100);
const d3 = (v: number) => String(Math.round(v * 1000) / 1000);
const sgn = (v: number, k = 2) => (v < 0 ? `-${Math.abs(Math.round(v * 10 ** k) / 10 ** k)}` : `+${Math.round(v * 10 ** k) / 10 ** k}`);
const rng = (seed: number) => () => { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296; };
const gauss = (R: () => number) => { let u = 0; while (!u) u = R(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * R()); };
const sum = (xs: number[]) => xs.reduce((a, b) => a + b, 0);
type Pt = [number, number];
function linreg(p: Pt[]) { const n = p.length, sx = sum(p.map((q) => q[0])), sy = sum(p.map((q) => q[1])), sxy = sum(p.map((q) => q[0] * q[1])), sxx = sum(p.map((q) => q[0] ** 2)); const a = (n * sxy - sx * sy) / (n * sxx - sx * sx); return { a, b: (sy - a * sx) / n }; }
function corr(p: Pt[]) { const n = p.length, sx = sum(p.map((q) => q[0])), sy = sum(p.map((q) => q[1])), sxy = sum(p.map((q) => q[0] * q[1])), sxx = sum(p.map((q) => q[0] ** 2)), syy = sum(p.map((q) => q[1] ** 2)); return (n * sxy - sx * sy) / Math.sqrt((n * sxx - sx * sx) * (n * syy - sy * sy)); }
const rsq = (p: Pt[], f: (x: number) => number) => { const m = sum(p.map((q) => q[1])) / p.length; return 1 - sum(p.map(([x, y]) => (y - f(x)) ** 2)) / sum(p.map(([, y]) => (y - m) ** 2)); };
const describe = (r: number) => `${Math.abs(r) >= 0.9 ? "strong" : Math.abs(r) >= 0.67 ? "moderate" : Math.abs(r) >= 0.33 ? "weak" : "very weak or no"} ${Math.abs(r) < 0.33 ? "linear" : r > 0 ? "positive linear" : "negative linear"}`;

/** a scatter plot with optional line, curve, residual segments, highlighted points and group colours */
function Plot({ pts, x0, x1, y0, y1, line, curve, residuals, hl = [], colors, H = 260, xlab, ylab, extra }: { pts: Pt[]; x0: number; x1: number; y0: number; y1: number; line?: { a: number; b: number; color?: string }[]; curve?: (x: number) => number; residuals?: { a: number; b: number }; hl?: number[]; colors?: string[]; H?: number; xlab?: string; ylab?: string; extra?: React.ReactNode }) {
  const W = 540, L = 44, R = 12, T = 10, B = 34, w = W - L - R, h = H - T - B, clip = `clip${useId().replace(/:/g, "")}`;
  const X = (x: number) => L + ((x - x0) / (x1 - x0)) * w, Y = (y: number) => T + h - ((y - y0) / (y1 - y0)) * h;
  const tick = (span: number) => [0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 25, 50, 100, 200, 500, 1000].find((s) => span / s <= 8) ?? 1000;
  const sx = tick(x1 - x0), sy = tick(y1 - y0), xt: number[] = [], yt: number[] = [];
  for (let v = Math.ceil(x0 / sx) * sx; v <= x1 + 1e-9; v += sx) xt.push(Math.round(v * 100) / 100);
  for (let v = Math.ceil(y0 / sy) * sy; v <= y1 + 1e-9; v += sy) yt.push(Math.round(v * 100) / 100);
  const path = curve ? Array.from({ length: 121 }, (_, i) => { const x = x0 + ((x1 - x0) * i) / 120; return `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(curve(x)).toFixed(1)}`; }).join(" ") : "";
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={svgBox} role="img" aria-label="Scatter plot">
      <defs><clipPath id={clip}><rect x={L} y={T} width={w} height={h} /></clipPath></defs>
      <rect x={L} y={T} width={w} height={h} fill="#fff" stroke="#cbd5e1" />
      {xt.map((v) => <g key={`x${v}`}><line x1={X(v)} y1={T} x2={X(v)} y2={T + h} stroke="#eef2f7" /><text x={X(v)} y={T + h + 14} fontSize={10.5} textAnchor="middle" fill={C.muted}>{v}</text></g>)}
      {yt.map((v) => <g key={`y${v}`}><line x1={L} y1={Y(v)} x2={L + w} y2={Y(v)} stroke="#eef2f7" /><text x={L - 5} y={Y(v) + 4} fontSize={10.5} textAnchor="end" fill={C.muted}>{v}</text></g>)}
      {y0 < 0 && y1 > 0 && <line x1={L} y1={Y(0)} x2={L + w} y2={Y(0)} stroke={C.ink} strokeWidth={1.3} />}
      <g clipPath={`url(#${clip})`}>
        {residuals && pts.map(([x, y], i) => <line key={`r${i}`} x1={X(x)} y1={Y(y)} x2={X(x)} y2={Y(residuals.a * x + residuals.b)} stroke={C.amber} strokeWidth={1.6} strokeDasharray="3 2" />)}
        {line?.map((l, i) => <line key={`l${i}`} x1={X(x0)} y1={Y(l.a * x0 + l.b)} x2={X(x1)} y2={Y(l.a * x1 + l.b)} stroke={l.color ?? C.red} strokeWidth={2.3} />)}
        {curve && <path d={path} fill="none" stroke={C.violet} strokeWidth={2.3} />}
        {extra}
      </g>
      {pts.map(([x, y], i) => <circle key={i} cx={X(x)} cy={Y(y)} r={hl.includes(i) ? 6.5 : 4.6} fill={hl.includes(i) ? C.redSoft : colors?.[i] ? "#fff" : C.blueSoft} stroke={hl.includes(i) ? C.red : colors?.[i] ?? C.blue} strokeWidth={1.8} />)}
      {xlab && <text x={L + w / 2} y={H - 4} fontSize={11.5} fontWeight={700} textAnchor="middle" fill={C.ink}>{xlab}</text>}
      {ylab && <text x={12} y={T + h / 2} fontSize={11.5} fontWeight={700} textAnchor="middle" fill={C.ink} transform={`rotate(-90 12 ${T + h / 2})`}>{ylab}</text>}
    </svg>
  );
}

/* ---------------------------------------------------------------- 6.1 scatter plots and r */

export function ScatterLab({ init = 0.8 }: { init?: number }) {
  const [target, setTarget] = useState(init), [n, setN] = useState(30), [seed, setSeed] = useState(1);
  const pts = useMemo<Pt[]>(() => { const R = rng(seed * 71 + 5), t = Math.max(-0.999, Math.min(0.999, target)); return Array.from({ length: n }, () => { const zx = gauss(R), zy = t * zx + Math.sqrt(1 - t * t) * gauss(R); return [50 + 12 * zx, 50 + 12 * zy]; }); }, [target, n, seed]);
  const r = corr(pts), fit = linreg(pts);
  return (
    <WidgetCard title="Correlation on a scatter plot" subtitle="set the strength of the relationship and watch the cloud of points and r">
      <Row>
        <Slider label="strength (target r)" value={target} min={-1} max={1} step={0.05} onChange={setTarget} color={C.red} format={d2} />
        <Slider label="number of points" value={n} min={8} max={100} onChange={setN} color={C.blue} />
        <button type="button" style={btn()} onClick={() => setSeed(seed + 1)}>new sample</button>
      </Row>
      <Plot pts={pts} x0={10} x1={90} y0={10} y1={90} line={[{ ...fit }]} xlab="x (explanatory)" ylab="y (response)" />
      <Readout tone="green">
        <MathText html={`\\(r=${d3(r)}\\): a ${describe(r)} correlation. ${Math.abs(r) > 0.9 ? "The points hug the line." : Math.abs(r) < 0.33 ? "The points form a shapeless cloud; the line explains little." : "The points follow the line with a lot of scatter."} \\(r\\) is always between −1 and 1, has no units, and measures only <em>linear</em> association. With few points, \\(r\\) varies a lot from sample to sample — press “new sample”.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 6.2 least squares */

const LS: Pt[] = [[1, 3.2], [2, 4.1], [3, 6.3], [4, 6.9], [5, 8.8], [6, 9.4], [7, 11.8], [8, 12.1]];

export function RegressionLab({ init = [1, 2] }: { init?: [number, number] }) {
  const [a, setA] = useState(init[0]), [b, setB] = useState(init[1]), [show, setShow] = useState(false);
  const best = linreg(LS), sse = sum(LS.map(([x, y]) => (y - (a * x + b)) ** 2)), sseBest = sum(LS.map(([x, y]) => (y - (best.a * x + best.b)) ** 2));
  const W = 540, L = 44, w = W - L - 12, h = 216, x0 = 0, x1 = 9, y0 = 0, y1 = 15, X = (x: number) => L + ((x - x0) / (x1 - x0)) * w, Y = (y: number) => 10 + h - ((y - y0) / (y1 - y0)) * h;
  const squares = LS.map(([x, y], i) => { const e = y - (a * x + b), side = Math.abs(Y(y) - Y(a * x + b)); return <rect key={i} x={X(x)} y={Math.min(Y(y), Y(a * x + b))} width={side} height={side} fill={C.amberSoft} stroke={C.amber} opacity={0.65} aria-label={`residual ${d2(e)}`} />; });
  return (
    <WidgetCard title="Fitting a line by least squares" subtitle="move your line; the shaded squares are the squared residuals — make their total as small as possible">
      <Row>
        <Slider label="slope a" value={a} min={0} max={3} step={0.05} onChange={setA} color={C.red} format={d2} />
        <Slider label="intercept b" value={b} min={-4} max={6} step={0.1} onChange={setB} color={C.blue} format={d2} />
        <button type="button" style={btn(true)} onClick={() => setShow(!show)}>{show ? "hide" : "show"} least-squares line</button>
      </Row>
      <Plot pts={LS} x0={x0} x1={x1} y0={y0} y1={y1} line={[{ a, b }, ...(show ? [{ ...best, color: C.green }] : [])]} residuals={{ a, b }} extra={<g>{squares}</g>} H={260} xlab="x" ylab="y" />
      <Readout tone={sse - sseBest < 0.5 ? "green" : "amber"}>
        <MathText html={`Your line \\(y=${d2(a)}x${sgn(b)}\\): sum of squared residuals \\(=${d2(sse)}\\). The least-squares line \\(\\hat y=${d3(best.a)}x${sgn(best.b, 3)}\\) gives the smallest possible sum, \\(${d2(sseBest)}\\). ${sse - sseBest < 0.5 ? "You are very close to it!" : "Keep adjusting."} The least-squares line always passes through \\((\\bar x,\\bar y)=(4.5,\\ ${d2(sum(LS.map((p) => p[1])) / 8)})\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 6.3 r² and prediction */

const PR: Pt[] = [[150, 41], [155, 44], [158, 43], [162, 47], [165, 49], [168, 48], [171, 52], [175, 54], [178, 53], [182, 57]];

export function PredictionLab({ init = 170 }: { init?: number }) {
  const [x, setX] = useState(init);
  const f = linreg(PR), r = corr(PR), yhat = f.a * x + f.b, inside = x >= 150 && x <= 182;
  return (
    <WidgetCard title="Predicting with the line of best fit" subtitle="height (cm) and mass (kg) of 10 students — choose a height and read the predicted mass">
      <Slider label="height x (cm)" value={x} min={120} max={210} onChange={setX} color={inside ? C.green : C.red} />
      <Plot pts={PR} x0={120} x1={210} y0={20} y1={75} line={[f]} extra={<g><circle cx={44 + ((x - 120) / 90) * 484} cy={10 + 216 - ((yhat - 20) / 55) * 216} r={7} fill={inside ? C.green : C.red} /></g>} H={260} xlab="height (cm)" ylab="mass (kg)" />
      <Readout tone={inside ? "green" : "red"}>
        <MathText html={`\\(\\hat y=${d3(f.a)}x${sgn(f.b, 2)}\\); at \\(x=${x}\\), \\(\\hat y\\approx${d2(yhat)}\\). ${inside ? "This is <strong>interpolation</strong> (inside the data range 150–182 cm): reasonably reliable." : "This is <strong>extrapolation</strong> (outside 150–182 cm): the trend may not continue, so the prediction is unreliable."} \\(r=${d3(r)}\\) and \\(r^2=${d3(r * r)}\\): about ${Math.round(r * r * 100)}% of the variation in y is explained by the linear relationship with x.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 6.4 non-linear models */

type Shape = "linear" | "quadratic" | "exponential";
const DATA: Record<Shape, { pts: Pt[]; name: string; xl: string; yl: string; y1: number }> = {
  linear: { pts: [[0, 12], [1, 15], [2, 17], [3, 21], [4, 22], [5, 26], [6, 28], [7, 31]], name: "savings (hundreds of dollars) by month", xl: "month", yl: "savings", y1: 40 },
  quadratic: { pts: [[0, 2], [1, 13], [2, 21], [3, 26], [4, 28], [5, 27], [6, 22], [7, 14]], name: "height (m) of a launched ball", xl: "time (s)", yl: "height", y1: 35 },
  exponential: { pts: [[0, 50], [1, 66], [2, 90], [3, 118], [4, 160], [5, 212], [6, 285], [7, 380]], name: "bacteria count (hundreds) by hour", xl: "hour", yl: "count", y1: 420 },
};
function quadreg(p: Pt[]) {
  const S = (k: number, q = 0) => sum(p.map(([x, y]) => x ** k * (q ? y : 1)));
  const M = [[S(4), S(3), S(2), S(2, 1)], [S(3), S(2), S(1), S(1, 1)], [S(2), S(1), p.length, S(0, 1)]];
  for (let i = 0; i < 3; i++) for (let k = i + 1; k < 3; k++) { const f = M[k][i] / M[i][i]; for (let j = i; j < 4; j++) M[k][j] -= f * M[i][j]; }
  const c = M[2][3] / M[2][2], b = (M[1][3] - M[1][2] * c) / M[1][1], a = (M[0][3] - M[0][1] * b - M[0][2] * c) / M[0][0];
  return { a, b, c };
}

export function ModelChoice({ init = "exponential" }: { init?: Shape }) {
  const [data, setData] = useState<Shape>(init), [model, setModel] = useState<Shape>("linear");
  const D = DATA[data];
  const fit = useMemo(() => {
    if (model === "linear") { const l = linreg(D.pts); return { f: (x: number) => l.a * x + l.b, eq: `\\hat y=${d3(l.a)}x${sgn(l.b, 3)}` }; }
    if (model === "quadratic") { const q = quadreg(D.pts); return { f: (x: number) => q.a * x * x + q.b * x + q.c, eq: `\\hat y=${d3(q.a)}x^2${sgn(q.b, 3)}x${sgn(q.c, 3)}` }; }
    const l = linreg(D.pts.map(([x, y]) => [x, Math.log(y)] as Pt)), A = Math.exp(l.b), B = Math.exp(l.a);
    return { f: (x: number) => A * B ** x, eq: `\\hat y=${d3(A)}(${d3(B)})^x` };
  }, [D, model]);
  const R2 = rsq(D.pts, fit.f);
  return (
    <WidgetCard title="Choosing a model" subtitle="fit linear, quadratic and exponential models and compare r²">
      <Segmented value={data} onChange={setData} label="data:" options={[{ value: "linear", label: "savings" }, { value: "quadratic", label: "ball" }, { value: "exponential", label: "bacteria" }]} />
      <Segmented value={model} onChange={setModel} label="model:" options={[{ value: "linear", label: "linear" }, { value: "quadratic", label: "quadratic" }, { value: "exponential", label: "exponential" }]} />
      <Plot pts={D.pts} x0={0} x1={8} y0={0} y1={D.y1} curve={fit.f} xlab={D.xl} ylab={D.yl} />
      <Readout tone={R2 > 0.98 ? "green" : "amber"}>
        <MathText html={`${D.name}: \\(${fit.eq}\\), \\(R^2=${d3(R2)}\\). ${R2 > 0.98 ? "An excellent fit." : "Look at the pattern of the points around the curve — try another model."} Choose a model from the <em>shape</em> of the data and the context (constant change → linear; rise then fall → quadratic; constant percent growth → exponential), not from \\(R^2\\) alone.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 6.5 types of relationship */

type Rel = "cause and effect" | "common cause" | "reverse cause and effect" | "accidental" | "presence of a confounding variable";
const RELS: Rel[] = ["cause and effect", "common cause", "reverse cause and effect", "accidental", "presence of a confounding variable"];
const CASES: [string, Rel, string][] = [
  ["The more hours a dryer runs, the more electricity the home uses.", "cause and effect", "Running the dryer directly uses electricity."],
  ["Towns with more churches have more crimes.", "common cause", "Population size drives both."],
  ["People who exercise more have more energy. (A researcher concludes exercise gives energy.)", "reverse cause and effect", "Energetic people may simply exercise more: the effect may run the other way."],
  ["The number of films an actor made in a year correlates with the number of people who fell into pools.", "accidental", "A coincidence with no logical link."],
  ["Students who use a tutoring app score higher, but the app users also have more study time at home.", "presence of a confounding variable", "Study time also affects scores, so the app's effect cannot be separated."],
  ["Sales of hot chocolate and of winter boots rise together.", "common cause", "Cold weather causes both."],
  ["Heavier cars use more fuel per kilometre.", "cause and effect", "More mass needs more energy to move."],
  ["Cities with more police officers have more crime. (Conclusion: police cause crime.)", "reverse cause and effect", "More crime leads cities to hire more police."],
];

export function CausationLab() {
  const [i, setI] = useState(0), [pick, setPick] = useState<Rel | null>(null), [score, setScore] = useState([0, 0]);
  const c = CASES[i % CASES.length];
  const choose = (r: Rel) => { if (pick) return; setPick(r); setScore([score[0] + (r === c[1] ? 1 : 0), score[1] + 1]); };
  return (
    <WidgetCard title="What kind of relationship?" subtitle="a strong correlation can arise in several ways — classify each">
      <div style={{ margin: "8px 0 12px", padding: "12px 14px", background: C.panel, borderRadius: 10, fontSize: 16, fontWeight: 600, color: C.ink }}>{c[0]}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {RELS.map((r) => <button key={r} type="button" onClick={() => choose(r)} style={{ ...btn(), background: pick ? (r === c[1] ? C.greenSoft : r === pick ? C.redSoft : "#fff") : "#fff", color: C.ink }}>{r}</button>)}
        <button type="button" style={btn(true)} onClick={() => { setI(i + 1); setPick(null); }}>next →</button>
      </div>
      <Readout tone={pick ? (pick === c[1] ? "green" : "red") : "blue"}>
        <MathText html={pick ? `${pick === c[1] ? "Correct" : `Not quite — it is <strong>${c[1]}</strong>`}. ${c[2]} &nbsp; Score: ${score[0]} / ${score[1]}.` : "Before concluding that x causes y, rule out a common cause, reverse causation, coincidence and confounding variables. Only a controlled experiment can establish cause and effect."} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 6.6 outliers, influence and residuals */

const BASE: Pt[] = [[2, 5.1], [3, 6.2], [4, 6.8], [5, 8.1], [6, 8.7], [7, 10.2], [8, 10.8], [9, 12.1], [10, 12.7]];

export function ResidualLab({ init = [16, 4] }: { init?: [number, number] }) {
  const [ox, setOx] = useState(init[0]), [oy, setOy] = useState(init[1]), [on, setOn] = useState(true);
  const all: Pt[] = on ? [...BASE, [ox, oy]] : BASE;
  const f0 = linreg(BASE), f = linreg(all), r0 = corr(BASE), r = corr(all);
  const res = all.map(([x, y]) => [x, y - (f.a * x + f.b)] as Pt), m = Math.max(1, ...res.map((p) => Math.abs(p[1]))) * 1.2;
  return (
    <WidgetCard title="Outliers, influential points and residuals" subtitle="move the red point; compare the line with and without it">
      <Row>
        <Slider label="outlier x" value={ox} min={0} max={18} step={0.5} onChange={setOx} color={C.red} format={d2} />
        <Slider label="outlier y" value={oy} min={0} max={24} step={0.5} onChange={setOy} color={C.red} format={d2} />
        <button type="button" style={btn()} onClick={() => setOn(!on)}>{on ? "remove" : "add"} the point</button>
      </Row>
      <Plot pts={all} x0={0} x1={18} y0={0} y1={24} hl={on ? [all.length - 1] : []} line={[{ ...f0, color: C.green }, ...(on ? [f] : [])]} H={240} xlab="x" ylab="y" />
      <Plot pts={res} x0={0} x1={18} y0={-m} y1={m} hl={on ? [all.length - 1] : []} H={150} xlab="residual plot" />
      <Readout tone={on && Math.abs(f.a - f0.a) > 0.15 ? "red" : "green"}>
        <MathText html={`Green: line without the point, \\(\\hat y=${d3(f0.a)}x${sgn(f0.b, 2)}\\), \\(r=${d3(r0)}\\). ${on ? `Red: with it, \\(\\hat y=${d3(f.a)}x${sgn(f.b, 2)}\\), \\(r=${d3(r)}\\). ${Math.abs(f.a - f0.a) > 0.15 ? "The point is <strong>influential</strong>: it pulls the slope noticeably — usually because it is far from the other x-values." : "The line hardly moves: this point is not influential."}` : ""} A good linear model leaves residuals scattered randomly around 0 with no pattern.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 6.7 a hidden grouping variable */

const GA: Pt[] = [[62, 58], [66, 61], [70, 63], [74, 68], [78, 70], [82, 74]];
const GB: Pt[] = [[70, 72], [74, 76], [78, 79], [82, 82], [86, 86], [90, 89]];

export function GroupLab({ init = false }: { init?: boolean }) {
  const [split, setSplit] = useState(init);
  const all = [...GA, ...GB], fAll = linreg(all), fA = linreg(GA), fB = linreg(GB);
  const colors = [...GA.map(() => C.blue), ...GB.map(() => C.red)];
  const meanY = (p: Pt[]) => sum(p.map((q) => q[1])) / p.length;
  return (
    <WidgetCard title="A hidden variable: two groups in one scatter plot" subtitle="grade 12 mark vs first-year university mark; red students took a summer preparation course">
      <Segmented value={split ? "groups" : "all"} onChange={(v) => setSplit(v === "groups")} options={[{ value: "all", label: "one line for everyone" }, { value: "groups", label: "separate the groups" }]} />
      <Plot pts={all} x0={55} x1={95} y0={50} y1={95} colors={split ? colors : undefined} line={split ? [{ ...fA, color: C.blue }, { ...fB, color: C.red }] : [fAll]} xlab="grade 12 mark" ylab="first-year mark" />
      <Readout tone={split ? "green" : "amber"}>
        <MathText html={split ? `Without the course: \\(\\hat y=${d3(fA.a)}x${sgn(fA.b, 2)}\\), mean ${d2(meanY(GA))}. With the course: \\(\\hat y=${d3(fB.a)}x${sgn(fB.b, 2)}\\), mean ${d2(meanY(GB))}. At the same grade 12 mark (say 78), the course group is about ${d2(fB.a * 78 + fB.b - (fA.a * 78 + fA.b))} marks higher. But the course was not randomly assigned, so other differences between the groups may explain part of the gap.` : `One line for all 12 students: \\(\\hat y=${d3(fAll.a)}x${sgn(fAll.b, 2)}\\), \\(r=${d3(corr(all))}\\). It mixes two groups that behave differently — separate them to see the hidden variable.`} />
      </Readout>
    </WidgetCard>
  );
}
