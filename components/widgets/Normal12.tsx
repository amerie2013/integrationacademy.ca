"use client";

// MDM4U chapter 4 (continuous distributions) explorers: frequency histograms and polygons of continuous data for
// different interval widths, the normal curve with the 68–95–99.7 rule and z-scores, areas under the normal curve
// (below, above, between, percentiles), the normal approximation to the binomial with a continuity correction, and
// confidence intervals from repeated samples.

import { useMemo, useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard, btn } from "./kit";

const svgBox: React.CSSProperties = { width: "100%", maxWidth: 560, display: "block", margin: "8px auto" };
const d2 = (v: number) => String(Math.round(v * 100) / 100);
const d4 = (v: number) => String(Math.round(v * 10000) / 10000);
const phi = (z: number) => { const t = 1 / (1 + 0.2316419 * Math.abs(z)), d = Math.exp((-z * z) / 2) / Math.sqrt(2 * Math.PI); const p = d * t * (0.31938153 + t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429)))); return z >= 0 ? 1 - p : p; };
const invPhi = (p: number) => { let lo = -8, hi = 8; for (let i = 0; i < 80; i++) { const m = (lo + hi) / 2; if (phi(m) < p) lo = m; else hi = m; } return (lo + hi) / 2; };
const pdf = (x: number, mu: number, s: number) => Math.exp(-(((x - mu) / s) ** 2) / 2) / (s * Math.sqrt(2 * Math.PI));
const Cn = (n: number, r: number) => { if (r < 0 || r > n) return 0; let v = 1; for (let k = 1; k <= r; k++) v = (v * (n - r + k)) / k; return v; };
/** normal random number (Box–Muller) */
const gauss = () => { let u = 0; while (!u) u = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * Math.random()); };

/** a normal curve on [lo, hi] with shaded [a, b] regions */
function Curve({ mu, s, shade = [], marks = [], lo = mu - 4 * s, hi = mu + 4 * s, H = 210 }: { mu: number; s: number; shade?: { a: number; b: number; color: string }[]; marks?: { x: number; label: string; color?: string }[]; lo?: number; hi?: number; H?: number }) {
  const W = 540, L = 16, R = 16, T = 14, B = 30, w = W - L - R, h = H - T - B, top = pdf(mu, mu, s) * 1.08;
  const X = (x: number) => L + ((x - lo) / (hi - lo)) * w, Y = (y: number) => T + h - (y / top) * h;
  const path = (a: number, b: number) => { const n = 120; let d = `M${X(a)},${Y(0)} `; for (let i = 0; i <= n; i++) { const x = a + ((b - a) * i) / n; d += `L${X(x).toFixed(1)},${Y(pdf(x, mu, s)).toFixed(1)} `; } return d + `L${X(b)},${Y(0)} Z`; };
  const ticks = [-3, -2, -1, 0, 1, 2, 3].map((k) => mu + k * s).filter((x) => x >= lo && x <= hi);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={svgBox} role="img" aria-label="Normal curve">
      {shade.map((r, i) => <path key={i} d={path(Math.max(lo, r.a), Math.min(hi, r.b))} fill={r.color} opacity={0.55} />)}
      <path d={path(lo, hi)} fill="none" stroke={C.violet} strokeWidth={2.4} />
      <line x1={L} y1={Y(0)} x2={L + w} y2={Y(0)} stroke={C.ink} strokeWidth={1.3} />
      {ticks.map((x) => <g key={x}><line x1={X(x)} y1={Y(0)} x2={X(x)} y2={Y(0) + 5} stroke={C.ink} /><text x={X(x)} y={H - 10} fontSize={11} textAnchor="middle" fill={C.muted}>{d2(x)}</text></g>)}
      {marks.map((m, i) => <g key={i}><line x1={X(m.x)} y1={T} x2={X(m.x)} y2={Y(0)} stroke={m.color ?? C.red} strokeWidth={2} strokeDasharray="5 4" /><text x={X(m.x)} y={T + 10} fontSize={11} fontWeight={700} textAnchor="middle" fill={m.color ?? C.red}>{m.label}</text></g>)}
    </svg>
  );
}

/* ---------------------------------------------------------------- 4.1 frequency histogram and polygon */

export function FreqPolygon({ init = [200, 5] }: { init?: [number, number] }) {
  const [n, setN] = useState(init[0]), [width, setWidth] = useState(init[1]), [seed, setSeed] = useState(0);
  const data = useMemo(() => Array.from({ length: 2000 }, () => 170 + 8 * gauss()), [seed]);
  const sample = data.slice(0, n);
  const lo = 140, hi = 200, bins = Math.ceil((hi - lo) / width);
  const counts = Array(bins).fill(0); for (const x of sample) { const k = Math.floor((x - lo) / width); if (k >= 0 && k < bins) counts[k]++; }
  const mean = sample.reduce((a, b) => a + b, 0) / n, sd = Math.sqrt(sample.reduce((a, b) => a + (b - mean) ** 2, 0) / (n - 1));
  const W = 540, H = 220, L = 40, T = 12, B = 30, w = W - L - 14, h = H - T - B, cmax = Math.max(...counts, 1) * 1.12;
  const X = (x: number) => L + ((x - lo) / (hi - lo)) * w, Y = (c: number) => T + h - (c / cmax) * h;
  const poly = [[lo - width / 2, 0], ...counts.map((c, k) => [lo + (k + 0.5) * width, c]), [hi + width / 2, 0]].map(([x, c]) => `${X(Math.max(lo, Math.min(hi, x)))},${Y(c)}`).join(" ");
  return (
    <WidgetCard title="Continuous data: histograms and polygons" subtitle="heights (cm) of a random sample, grouped into intervals">
      <Row>
        <Slider label="sample size" value={n} min={20} max={2000} step={10} onChange={setN} color={C.blue} />
        <Slider label="interval width" value={width} min={1} max={10} onChange={setWidth} color={C.red} format={(v) => `${v} cm`} />
      </Row>
      <button type="button" style={btn()} onClick={() => setSeed(seed + 1)}>new sample</button>
      <svg viewBox={`0 0 ${W} ${H}`} style={svgBox} role="img" aria-label="Frequency histogram and polygon">
        {counts.map((c, k) => <rect key={k} x={X(lo + k * width)} y={Y(c)} width={X(lo + (k + 1) * width) - X(lo + k * width)} height={Y(0) - Y(c)} fill={C.blueSoft} stroke={C.blue} strokeWidth={1} />)}
        <polyline points={poly} fill="none" stroke={C.red} strokeWidth={2.2} />
        <line x1={L} y1={Y(0)} x2={L + w} y2={Y(0)} stroke={C.ink} />
        {[140, 150, 160, 170, 180, 190, 200].map((x) => <text key={x} x={X(x)} y={H - 10} fontSize={11} textAnchor="middle" fill={C.muted}>{x}</text>)}
      </svg>
      <Readout tone="green">
        <MathText html={`${n} values in intervals of ${width} cm. Sample mean \\(\\bar x\\approx${d2(mean)}\\) cm, standard deviation \\(s\\approx${d2(sd)}\\) cm. The red frequency polygon joins the midpoints of the bar tops. ${width >= 8 ? "Wide intervals hide the shape." : width <= 2 && n < 300 ? "Narrow intervals with a small sample look jagged." : "With a large sample and moderate intervals, the polygon approaches a smooth bell-shaped curve."} For a continuous variable, probabilities belong to intervals: \\(P(X=170)\\) exactly is 0.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 4.2 the normal curve, 68–95–99.7, z-scores */

export function NormalCurve({ init = [100, 15] }: { init?: [number, number] }) {
  const [mu, setMu] = useState(init[0]), [s, setS] = useState(init[1]), [k, setK] = useState(1), [x, setX] = useState(init[0] + init[1] * 1.4);
  const z = (x - mu) / s;
  const pct = [68.27, 95.45, 99.73][k - 1];
  return (
    <WidgetCard title="The normal distribution" subtitle="the mean sets the centre; the standard deviation sets the spread">
      <Row>
        <Slider label="mean μ" value={mu} min={0} max={200} onChange={(v) => { setMu(v); setX(v + 1.4 * s); }} color={C.blue} />
        <Slider label="sd σ" value={s} min={2} max={40} onChange={(v) => { setS(v); setX(mu + 1.4 * v); }} color={C.red} />
      </Row>
      <Row>
        <Segmented value={k} onChange={setK} label="shade within:" options={[{ value: 1, label: "1σ" }, { value: 2, label: "2σ" }, { value: 3, label: "3σ" }]} />
        <Slider label="value x" value={x} min={mu - 3.5 * s} max={mu + 3.5 * s} step={s / 20} onChange={setX} color={C.violet} format={d2} />
      </Row>
      <Curve mu={mu} s={s} shade={[{ a: mu - k * s, b: mu + k * s, color: C.greenSoft }]} marks={[{ x, label: `x = ${d2(x)}`, color: C.violet }]} />
      <Readout tone="green">
        <MathText html={`About \\(${pct}\\%\\) of values lie within \\(${k}\\) standard deviation${k > 1 ? "s" : ""} of the mean: from \\(${d2(mu - k * s)}\\) to \\(${d2(mu + k * s)}\\) (the 68–95–99.7 rule). For \\(x=${d2(x)}\\): \\(z=\\dfrac{x-\\mu}{\\sigma}=\\dfrac{${d2(x)}-${mu}}{${s}}=${d2(z)}\\) — ${Math.abs(z) < 0.05 ? "at the mean" : `${d2(Math.abs(z))} standard deviations ${z > 0 ? "above" : "below"} the mean`}. The curve is symmetric, bell-shaped, and the total area under it is 1.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 4.3 areas and percentiles */

type AreaMode = "below" | "above" | "between" | "percentile";
export function NormalArea({ init = [70, 8] }: { init?: [number, number] }) {
  const [mu, setMu] = useState(init[0]), [s, setS] = useState(init[1]), [mode, setMode] = useState<AreaMode>("between");
  const [a, setA] = useState(init[0] - init[1]), [b, setB] = useState(init[0] + 1.5 * init[1]), [p, setP] = useState(90);
  const za = (a - mu) / s, zb = (b - mu) / s;
  let prob = 0, shade: { a: number; b: number; color: string }[] = [], html = "";
  if (mode === "below") { prob = phi(zb); shade = [{ a: mu - 5 * s, b, color: C.blueSoft }]; html = `\\(P(X<${d2(b)})=P(Z<${d2(zb)})\\approx${d4(prob)}\\)`; }
  if (mode === "above") { prob = 1 - phi(za); shade = [{ a, b: mu + 5 * s, color: C.blueSoft }]; html = `\\(P(X>${d2(a)})=1-P(Z<${d2(za)})\\approx${d4(prob)}\\)`; }
  if (mode === "between") { const lo = Math.min(a, b), hi = Math.max(a, b); prob = phi((hi - mu) / s) - phi((lo - mu) / s); shade = [{ a: lo, b: hi, color: C.blueSoft }]; html = `\\(P(${d2(lo)}<X<${d2(hi)})=P(Z<${d2((hi - mu) / s)})-P(Z<${d2((lo - mu) / s)})\\approx${d4(prob)}\\)`; }
  const xp = mu + invPhi(p / 100) * s;
  if (mode === "percentile") { shade = [{ a: mu - 5 * s, b: xp, color: C.amberSoft }]; html = `The ${p}th percentile: find \\(z\\) with \\(P(Z<z)=${p / 100}\\): \\(z\\approx${d2(invPhi(p / 100))}\\), so \\(x=\\mu+z\\sigma=${mu}+${d2(invPhi(p / 100))}(${s})\\approx${d2(xp)}\\).`; }
  return (
    <WidgetCard title="Areas under the normal curve" subtitle="probability = area; standardize with z, then use the table or technology">
      <Row>
        <Slider label="mean μ" value={mu} min={0} max={200} onChange={setMu} color={C.blue} />
        <Slider label="sd σ" value={s} min={1} max={40} onChange={setS} color={C.red} />
      </Row>
      <Segmented value={mode} onChange={setMode} options={[{ value: "below", label: "P(X < b)" }, { value: "above", label: "P(X > a)" }, { value: "between", label: "P(a < X < b)" }, { value: "percentile", label: "percentile" }]} />
      <Row style={{ marginTop: 8 }}>
        {mode !== "below" && mode !== "percentile" && <Slider label="a" value={a} min={mu - 3.5 * s} max={mu + 3.5 * s} step={s / 20} onChange={setA} color={C.green} format={d2} />}
        {(mode === "below" || mode === "between") && <Slider label="b" value={b} min={mu - 3.5 * s} max={mu + 3.5 * s} step={s / 20} onChange={setB} color={C.green} format={d2} />}
        {mode === "percentile" && <Slider label="percentile" value={p} min={1} max={99} onChange={setP} color={C.amber} />}
      </Row>
      <Curve mu={mu} s={s} shade={shade} />
      <Readout tone="green"><MathText html={html} /></Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 4.4 normal approximation to the binomial */

export function NormalApprox({ init = [30, 0.4] }: { init?: [number, number] }) {
  const [n, setN] = useState(init[0]), [p, setP] = useState(init[1]), [k0, setK] = useState(10);
  const k = Math.min(k0, n), mu = n * p, s = Math.sqrt(n * p * (1 - p));
  const exact = Array.from({ length: k + 1 }, (_, x) => Cn(n, x) * p ** x * (1 - p) ** (n - x)).reduce((a, b) => a + b, 0);
  const approx = phi((k + 0.5 - mu) / s), ok = n * p >= 5 && n * (1 - p) >= 5;
  const W = 540, H = 220, L = 30, T = 12, B = 28, w = W - L - 10, h = H - T - B;
  const lo = Math.max(-0.5, Math.floor(mu - 4 * s) - 0.5), hi = Math.min(n + 0.5, Math.ceil(mu + 4 * s) + 0.5);
  const top = Math.max(...Array.from({ length: n + 1 }, (_, x) => Cn(n, x) * p ** x * (1 - p) ** (n - x)), pdf(mu, mu, s)) * 1.1;
  const X = (x: number) => L + ((x - lo) / (hi - lo)) * w, Y = (y: number) => T + h - (y / top) * h;
  const bars = Array.from({ length: n + 1 }, (_, x) => x).filter((x) => x >= lo && x <= hi);
  let curve = ""; for (let i = 0; i <= 160; i++) { const x = lo + ((hi - lo) * i) / 160; curve += `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(pdf(x, mu, s)).toFixed(1)} `; }
  return (
    <WidgetCard title="Normal approximation to the binomial" subtitle="μ = np, σ = √(npq); use a continuity correction">
      <Row>
        <Slider label="trials n" value={n} min={5} max={100} onChange={setN} color={C.blue} />
        <Slider label="p" value={p} min={0.05} max={0.95} step={0.05} onChange={setP} color={C.green} format={(v) => v.toFixed(2)} />
      </Row>
      <Slider label="P(X ≤ k), k" value={k} min={0} max={n} onChange={setK} color={C.red} />
      <svg viewBox={`0 0 ${W} ${H}`} style={svgBox} role="img" aria-label="Binomial bars with normal curve">
        {bars.map((x) => { const pr = Cn(n, x) * p ** x * (1 - p) ** (n - x); return <rect key={x} x={X(x - 0.5)} y={Y(pr)} width={X(x + 0.5) - X(x - 0.5)} height={Y(0) - Y(pr)} fill={x <= k ? C.redSoft : C.blueSoft} stroke={x <= k ? C.red : C.blue} strokeWidth={0.8} />; })}
        <path d={curve} fill="none" stroke={C.violet} strokeWidth={2.4} />
        <line x1={X(k + 0.5)} y1={T} x2={X(k + 0.5)} y2={Y(0)} stroke={C.red} strokeDasharray="5 4" strokeWidth={1.6} />
        <line x1={L} y1={Y(0)} x2={L + w} y2={Y(0)} stroke={C.ink} />
        {bars.filter((_, i) => i % Math.max(1, Math.ceil(bars.length / 12)) === 0).map((x) => <text key={x} x={X(x)} y={H - 8} fontSize={11} textAnchor="middle" fill={C.muted}>{x}</text>)}
      </svg>
      <Readout tone={ok ? "green" : "amber"}>
        <MathText html={`\\(\\mu=np=${d2(mu)}\\), \\(\\sigma=\\sqrt{npq}\\approx${d2(s)}\\). Exact binomial \\(P(X\\le${k})\\approx${d4(exact)}\\); normal with continuity correction \\(P(X<${k}.5)=P\\left(Z<\\frac{${k}.5-${d2(mu)}}{${d2(s)}}\\right)\\approx${d4(approx)}\\). ${ok ? "Since np ≥ 5 and nq ≥ 5, the approximation is good." : "np or nq is below 5, so the bars are skewed and the approximation is poor."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 4.5 confidence intervals */

export function ConfidenceLab({ init = [0.4, 100] }: { init?: [number, number] }) {
  const [p, setP] = useState(init[0]), [n, setN] = useState(init[1]), [lvl, setLvl] = useState(95), [ivs, setIvs] = useState<[number, number][]>([]);
  const zc = invPhi(0.5 + lvl / 200);
  const draw = (k: number) => { const out = [...ivs]; for (let i = 0; i < k; i++) { let c = 0; for (let j = 0; j < n; j++) if (Math.random() < p) c++; const ph = c / n, e = zc * Math.sqrt((ph * (1 - ph)) / n); out.push([ph - e, ph + e]); } setIvs(out.slice(-100)); };
  const hits = ivs.filter(([a, b]) => a <= p && p <= b).length;
  const W = 540, H = 260, L = 20, w = W - 40, X = (v: number) => L + v * w;
  const shown = ivs.slice(-50), rh = (H - 30) / Math.max(shown.length, 1);
  return (
    <WidgetCard title="Confidence intervals" subtitle="each sample gives an interval; about C% of intervals capture the true value">
      <Row>
        <Slider label="true proportion p" value={p} min={0.05} max={0.95} step={0.05} onChange={(v) => { setP(v); setIvs([]); }} color={C.green} format={(v) => v.toFixed(2)} />
        <Slider label="sample size n" value={n} min={20} max={1000} step={10} onChange={(v) => { setN(v); setIvs([]); }} color={C.blue} />
      </Row>
      <Row>
        <Segmented value={lvl} onChange={(v) => { setLvl(v); setIvs([]); }} label="confidence:" options={[{ value: 90, label: "90%" }, { value: 95, label: "95%" }, { value: 99, label: "99%" }]} />
        {[1, 10, 50].map((k) => <button key={k} type="button" style={btn(k === 10)} onClick={() => draw(k)}>+{k} sample{k > 1 ? "s" : ""}</button>)}
      </Row>
      <svg viewBox={`0 0 ${W} ${H}`} style={svgBox} role="img" aria-label="Confidence intervals">
        <line x1={X(p)} y1={4} x2={X(p)} y2={H - 24} stroke={C.green} strokeWidth={2} />
        {shown.map(([a, b], i) => { const ok = a <= p && p <= b; return <line key={i} x1={X(Math.max(0, a))} y1={8 + i * rh} x2={X(Math.min(1, b))} y2={8 + i * rh} stroke={ok ? C.blue : C.red} strokeWidth={Math.min(4, Math.max(1.5, rh - 1))} />; })}
        {[0, 0.2, 0.4, 0.6, 0.8, 1].map((v) => <text key={v} x={X(v)} y={H - 6} fontSize={11} textAnchor="middle" fill={C.muted}>{v}</text>)}
      </svg>
      <Readout tone="green">
        <MathText html={`Each interval is \\(\\hat p\\pm z^*\\sqrt{\\frac{\\hat p(1-\\hat p)}{n}}\\) with \\(z^*=${d2(zc)}\\) for ${lvl}% confidence; margin of error about \\(${d2(zc * Math.sqrt((p * (1 - p)) / n))}\\) here. ${ivs.length ? `${hits} of the last ${ivs.length} intervals (${Math.round((100 * hits) / ivs.length)}%) captured the true \\(p=${p}\\) (blue); red ones missed.` : "Draw samples to build intervals."} Larger n gives narrower intervals; higher confidence gives wider ones.`} />
      </Readout>
    </WidgetCard>
  );
}
