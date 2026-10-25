"use client";

// MDM4U chapter 3 (discrete probability distributions) explorers: a random variable's distribution table and
// probability histogram next to a simulated frequency histogram, expected value of a game (including adding a
// constant or scaling every payout), the uniform distribution, binomial and geometric distributions with their means,
// the hypergeometric distribution against the binomial, and a side-by-side comparison of distributions.

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard, btn } from "./kit";

const svgBox: React.CSSProperties = { width: "100%", maxWidth: 560, display: "block", margin: "8px auto" };
const Cn = (n: number, r: number) => { if (r < 0 || r > n) return 0; let v = 1; for (let k = 1; k <= r; k++) v = (v * (n - r + k)) / k; return v; };
const d3 = (v: number) => String(Math.round(v * 1000) / 1000);
const d4 = (v: number) => String(Math.round(v * 10000) / 10000);

type Bar = { x: number; p: number };
/** probability histogram: bars of width 1 centred on x; optional second series (outline) and highlighted bars */
function Hist({ bars, other, hl = [], color = C.blue, otherColor = C.red, H = 220, otherLabel }: { bars: Bar[]; other?: Bar[]; hl?: number[]; color?: string; otherColor?: string; H?: number; otherLabel?: string }) {
  const W = 540, L = 44, B = 26, T = 12, R = 10, w = W - L - R, h = H - T - B;
  const xs = [...bars, ...(other ?? [])].map((b) => b.x), lo = Math.min(...xs) - 0.5, hi = Math.max(...xs) + 0.5;
  const pmax = Math.max(...[...bars, ...(other ?? [])].map((b) => b.p), 0.01) * 1.12;
  const X = (x: number) => L + ((x - lo) / (hi - lo)) * w, Y = (p: number) => T + h - (p / pmax) * h, bw = w / (hi - lo);
  const step = pmax > 0.5 ? 0.2 : pmax > 0.25 ? 0.1 : pmax > 0.1 ? 0.05 : 0.02;
  const ticks = Array.from({ length: Math.floor(pmax / step) + 1 }, (_, i) => i * step);
  const lab = Math.max(1, Math.ceil(bars.length / 16));
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={svgBox} role="img" aria-label="Probability histogram">
      {ticks.map((t) => <g key={t}><line x1={L} y1={Y(t)} x2={L + w} y2={Y(t)} stroke="#eef2f7" /><text x={L - 5} y={Y(t) + 4} fontSize={10.5} textAnchor="end" fill={C.muted}>{d3(t)}</text></g>)}
      {bars.map((b) => { const on = hl.includes(b.x); return <rect key={b.x} x={X(b.x - 0.5)} y={Y(b.p)} width={bw} height={Y(0) - Y(b.p)} fill={on ? C.redSoft : color === C.blue ? C.blueSoft : C.greenSoft} stroke={on ? C.red : color} strokeWidth={1.3} />; })}
      {other && <polyline points={other.flatMap((b) => [`${X(b.x - 0.5)},${Y(b.p)}`, `${X(b.x + 0.5)},${Y(b.p)}`]).join(" ")} fill="none" stroke={otherColor} strokeWidth={2.4} />}
      <line x1={L} y1={Y(0)} x2={L + w} y2={Y(0)} stroke={C.ink} strokeWidth={1.3} />
      {bars.filter((_, i) => i % lab === 0).map((b) => <text key={`t${b.x}`} x={X(b.x)} y={H - 8} fontSize={11} textAnchor="middle" fill={C.ink}>{b.x}</text>)}
      {otherLabel && <text x={L + w - 4} y={T + 12} fontSize={11.5} fontWeight={700} textAnchor="end" fill={otherColor}>{otherLabel}</text>}
    </svg>
  );
}
const mean = (bars: Bar[]) => bars.reduce((s, b) => s + b.x * b.p, 0);

/* ---------------------------------------------------------------- 3.1 random variable and probability histogram */

type RV = "sum" | "heads" | "max" | "sixes";
const RVS: Record<RV, { label: string; desc: string; dist: () => Bar[]; sim: () => number }> = {
  sum: { label: "sum of 2 dice", desc: "X = the sum of two dice", dist: () => Array.from({ length: 11 }, (_, i) => ({ x: i + 2, p: (6 - Math.abs(i - 5)) / 36 })), sim: () => Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6) },
  heads: { label: "heads in 4 tosses", desc: "X = the number of heads in 4 coin tosses", dist: () => [0, 1, 2, 3, 4].map((x) => ({ x, p: Cn(4, x) / 16 })), sim: () => [0, 1, 2, 3].filter(() => Math.random() < 0.5).length },
  max: { label: "larger of 2 dice", desc: "X = the larger number on two dice", dist: () => [1, 2, 3, 4, 5, 6].map((x) => ({ x, p: (2 * x - 1) / 36 })), sim: () => Math.max(Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6)) },
  sixes: { label: "sixes in 3 rolls", desc: "X = the number of 6s in 3 rolls of a die", dist: () => [0, 1, 2, 3].map((x) => ({ x, p: Cn(3, x) * (1 / 6) ** x * (5 / 6) ** (3 - x) })), sim: () => [0, 1, 2].filter(() => Math.random() < 1 / 6).length },
};
export function RVHistogram({ init = "sum" as RV }: { init?: RV }) {
  const [rv, setRv] = useState<RV>(init), [counts, setCounts] = useState<Record<number, number>>({});
  const bars = RVS[rv].dist(), N = Object.values(counts).reduce((s, v) => s + v, 0);
  const freq = bars.map((b) => ({ x: b.x, p: N ? (counts[b.x] ?? 0) / N : 0 }));
  const run = (k: number) => { const c = { ...counts }; for (let i = 0; i < k; i++) { const x = RVS[rv].sim(); c[x] = (c[x] ?? 0) + 1; } setCounts(c); };
  return (
    <WidgetCard title="Random variables and probability histograms" subtitle="each bar has width 1, so the total area is 1">
      <Segmented value={rv} onChange={(v) => { setRv(v); setCounts({}); }} options={(Object.keys(RVS) as RV[]).map((k) => ({ value: k, label: RVS[k].label }))} />
      <Row style={{ marginTop: 10 }}>
        {[10, 100, 1000].map((k) => <button key={k} type="button" style={btn(k === 100)} onClick={() => run(k)}>simulate +{k}</button>)}
        <button type="button" style={btn()} onClick={() => setCounts({})}>reset</button>
      </Row>
      <Hist bars={bars} other={N ? freq : undefined} otherLabel={N ? `relative frequencies (${N} trials)` : undefined} />
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", margin: "6px auto", fontSize: 13.5 }}>
          <tbody>
            <tr><th style={{ padding: "4px 8px", border: `1px solid ${C.line}`, whiteSpace: "nowrap" }}>x</th>{bars.map((b) => <td key={b.x} style={{ padding: "4px 8px", border: `1px solid ${C.line}`, textAlign: "center" }}>{b.x}</td>)}</tr>
            <tr><th style={{ padding: "4px 8px", border: `1px solid ${C.line}`, whiteSpace: "nowrap" }}>P(X = x)</th>{bars.map((b) => <td key={b.x} style={{ padding: "4px 8px", border: `1px solid ${C.line}`, textAlign: "center" }}>{d3(b.p)}</td>)}</tr>
          </tbody>
        </table>
      </div>
      <Readout tone="green">
        <MathText html={`${RVS[rv].desc}. The probabilities add to \\(${d3(bars.reduce((s, b) => s + b.p, 0))}\\), so the bars' total area is 1. ${N ? `The red outline is the simulated frequency histogram scaled to relative frequencies; with more trials its shape approaches the probability histogram.` : "Simulate trials to compare a frequency histogram with the probability histogram."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 3.2 expected value of a game */

export function ExpectedGame({ init = [100, 10, 0] }: { init?: [number, number, number] }) {
  const [v1, setV1] = useState(init[0]), [v2, setV2] = useState(init[1]), [v3, setV3] = useState(init[2]);
  const [p1, setP1] = useState(5), [p2, setP2] = useState(20), [cost, setCost] = useState(10), [mode, setMode] = useState<"none" | "add" | "mult">("none");
  const p3 = Math.max(0, 100 - p1 - p2);
  const tr = (v: number) => (mode === "add" ? v + 50 : mode === "mult" ? v * 2 : v);
  const vals = [v1, v2, v3].map(tr), ps = [p1, p2, p3].map((p) => p / 100);
  const E = vals.reduce((s, v, i) => s + v * ps[i], 0), net = E - cost;
  return (
    <WidgetCard title="Expected value of a game" subtitle="E(X) = Σ x·P(X = x), a probability-weighted mean">
      <Row>
        <Slider label="prize 1 ($)" value={v1} min={0} max={500} step={5} onChange={setV1} color={C.green} />
        <Slider label="P(prize 1) %" value={p1} min={0} max={50} onChange={(v) => setP1(Math.min(v, 100 - p2))} color={C.green} />
      </Row>
      <Row>
        <Slider label="prize 2 ($)" value={v2} min={0} max={100} onChange={setV2} color={C.blue} />
        <Slider label="P(prize 2) %" value={p2} min={0} max={80} onChange={(v) => setP2(Math.min(v, 100 - p1))} color={C.blue} />
      </Row>
      <Row>
        <Slider label="prize 3 ($)" value={v3} min={0} max={20} onChange={setV3} color={C.muted} />
        <Slider label="cost to play ($)" value={cost} min={0} max={50} onChange={setCost} color={C.red} />
      </Row>
      <Segmented value={mode} onChange={setMode} label="change every prize:" options={[{ value: "none", label: "as set" }, { value: "add", label: "add $50" }, { value: "mult", label: "double" }]} />
      <Hist bars={vals.map((v, i) => ({ x: i + 1, p: ps[i] }))} color={C.green} H={170} />
      <Readout tone={Math.abs(net) < 0.005 ? "green" : net > 0 ? "blue" : "amber"}>
        <MathText html={`Prizes \\(${vals.join(",\\ ")}\\) with probabilities \\(${ps.map(d3).join(",\\ ")}\\) (bars 1, 2, 3). \\(E(X)=${vals.map((v, i) => `${v}(${d3(ps[i])})`).join("+")}=${d3(E)}\\) dollars. Net expectation per play \\(=${d3(E)}-${cost}=${d3(net)}\\): ${Math.abs(net) < 0.005 ? "a <strong>fair game</strong>." : net > 0 ? "favours the player." : "favours the organizer."} ${mode === "add" ? "Adding 50 to every prize adds exactly 50 to E(X)." : mode === "mult" ? "Doubling every prize doubles E(X)." : ""}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 3.3 uniform distribution */

export function UniformLab({ init = 8 }: { init?: number }) {
  const [n, setN] = useState(init), [a, setA] = useState(1);
  const bars = Array.from({ length: n }, (_, i) => ({ x: a + i, p: 1 / n }));
  return (
    <WidgetCard title="The discrete uniform distribution" subtitle="n equally likely values">
      <Row>
        <Slider label="values n" value={n} min={2} max={20} onChange={setN} color={C.blue} />
        <Slider label="smallest value" value={a} min={0} max={10} onChange={setA} color={C.violet} />
      </Row>
      <Hist bars={bars} H={180} />
      <Readout tone="green">
        <MathText html={`\\(X\\) takes the values \\(${a},${a + 1},\\ldots,${a + n - 1}\\), each with \\(P(X=x)=\\frac1{${n}}\\approx${d3(1 / n)}\\). The histogram is flat. \\(E(X)=\\dfrac{${a}+${a + n - 1}}{2}=${d3(a + (n - 1) / 2)}\\) — the middle value. For a die (1 to 6) this gives 3.5.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 3.4 binomial distribution */

export function BinomialDist({ init = [10, 0.3] }: { init?: [number, number] }) {
  const [n, setN] = useState(init[0]), [p, setP] = useState(init[1]), [k0, setK] = useState(3), [mode, setMode] = useState<"eq" | "le" | "ge">("eq");
  const k = Math.min(k0, n);
  const bars = Array.from({ length: n + 1 }, (_, x) => ({ x, p: Cn(n, x) * p ** x * (1 - p) ** (n - x) }));
  const sel = bars.filter((b) => (mode === "eq" ? b.x === k : mode === "le" ? b.x <= k : b.x >= k));
  const prob = sel.reduce((s, b) => s + b.p, 0);
  return (
    <WidgetCard title="The binomial distribution" subtitle="n independent trials, each a success with probability p">
      <Row>
        <Slider label="trials n" value={n} min={1} max={30} onChange={setN} color={C.blue} />
        <Slider label="success p" value={p} min={0.05} max={0.95} step={0.05} onChange={setP} color={C.green} format={(v) => v.toFixed(2)} />
      </Row>
      <Row>
        <Slider label="k" value={k} min={0} max={n} onChange={setK} color={C.red} />
        <Segmented value={mode} onChange={setMode} options={[{ value: "eq", label: "P(X = k)" }, { value: "le", label: "P(X ≤ k)" }, { value: "ge", label: "P(X ≥ k)" }]} />
      </Row>
      <Hist bars={bars} hl={sel.map((b) => b.x)} />
      <Readout tone="green">
        <MathText html={`\\(P(X=x)=\\binom{${n}}{x}(${p.toFixed(2)})^x(${(1 - p).toFixed(2)})^{${n}-x}\\). ${mode === "eq" ? `\\(P(X=${k})=\\binom{${n}}{${k}}(${p.toFixed(2)})^{${k}}(${(1 - p).toFixed(2)})^{${n - k}}\\approx${d4(prob)}\\)` : `\\(P(X${mode === "le" ? "\\le" : "\\ge"}${k})\\approx${d4(prob)}\\) (add the red bars)`}. Expected value \\(E(X)=np=${d3(n * p)}\\); the histogram peaks near \\(np\\) and is symmetric when \\(p=0.5\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 3.5 geometric distribution */

export function GeometricDist({ init = 0.25 }: { init?: number }) {
  const [p, setP] = useState(init), [k, setK] = useState(2);
  const q = 1 - p, K = Math.min(25, Math.max(8, Math.ceil(Math.log(0.01) / Math.log(q))));
  const bars = Array.from({ length: K + 1 }, (_, x) => ({ x, p: q ** x * p }));
  return (
    <WidgetCard title="The geometric distribution (waiting time)" subtitle="X = number of failures before the first success">
      <Row>
        <Slider label="success p" value={p} min={0.05} max={0.9} step={0.05} onChange={setP} color={C.green} format={(v) => v.toFixed(2)} />
        <Slider label="failures k" value={k} min={0} max={K} onChange={setK} color={C.red} />
      </Row>
      <Hist bars={bars} hl={[k]} />
      <Readout tone="green">
        <MathText html={`\\(P(X=k)=q^kp=(${q.toFixed(2)})^{${k}}(${p.toFixed(2)})\\approx${d4(q ** k * p)}\\): ${k} failures, then a success on trial ${k + 1}. Each bar is \\(q\\) times the one before, so the histogram always decreases. Expected waiting time \\(E(X)=\\dfrac{q}{p}=${d3(q / p)}\\) failures (so the first success is expected on trial \\(\\frac1p=${d3(1 / p)}\\)). \\(P(X\\ge${k})=q^{${k}}\\approx${d4(q ** k)}\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 3.6 hypergeometric vs binomial */

export function HyperLab({ init = [20, 8, 5] }: { init?: [number, number, number] }) {
  const [N, setN] = useState(init[0]), [a0, setA] = useState(init[1]), [r0, setR] = useState(init[2]), [show, setShow] = useState(true);
  const a = Math.min(a0, N), r = Math.min(r0, N);
  const bars = Array.from({ length: r + 1 }, (_, x) => ({ x, p: (Cn(a, x) * Cn(N - a, r - x)) / Cn(N, r) }));
  const bin = Array.from({ length: r + 1 }, (_, x) => ({ x, p: Cn(r, x) * (a / N) ** x * (1 - a / N) ** (r - x) }));
  return (
    <WidgetCard title="The hypergeometric distribution" subtitle="successes in a sample drawn without replacement">
      <Row>
        <Slider label="population N" value={N} min={5} max={100} onChange={setN} color={C.blue} />
        <Slider label="successes a" value={a} min={1} max={N} onChange={setA} color={C.green} />
      </Row>
      <Row>
        <Slider label="sample r" value={r} min={1} max={Math.min(N, 15)} onChange={setR} color={C.violet} />
        <Segmented value={show ? 1 : 0} onChange={(v) => setShow(v === 1)} options={[{ value: 1, label: "compare binomial" }, { value: 0, label: "hide" }]} />
      </Row>
      <Hist bars={bars} color={C.green} other={show ? bin : undefined} otherLabel={show ? "binomial (with replacement)" : undefined} />
      <Readout tone="green">
        <MathText html={`\\(P(X=x)=\\dfrac{\\binom{${a}}{x}\\binom{${N - a}}{${r}-x}}{\\binom{${N}}{${r}}}\\). \\(E(X)=\\dfrac{ra}{N}=${d3((r * a) / N)}\\) — the same mean as the binomial with \\(p=\\frac aN\\). ${r / N > 0.1 ? "The sample is a large part of the population, so the distributions differ: drawing without replacement makes extreme values less likely." : "The sample is a small part of the population, so the two distributions are almost the same."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 3.7 comparing distributions */

type Kind = "uniform" | "binomial" | "geometric" | "hyper";
const build = (k: Kind, n: number, p: number): Bar[] => {
  if (k === "uniform") return Array.from({ length: n + 1 }, (_, x) => ({ x, p: 1 / (n + 1) }));
  if (k === "binomial") return Array.from({ length: n + 1 }, (_, x) => ({ x, p: Cn(n, x) * p ** x * (1 - p) ** (n - x) }));
  if (k === "geometric") return Array.from({ length: n + 1 }, (_, x) => ({ x, p: (1 - p) ** x * p }));
  const N = 2 * n, a = Math.round(p * N);
  return Array.from({ length: n + 1 }, (_, x) => ({ x, p: (Cn(a, x) * Cn(N - a, n - x)) / Cn(N, n) }));
};
const NAMES: Record<Kind, string> = { uniform: "uniform 0..n", binomial: "binomial(n, p)", geometric: "geometric(p)", hyper: "hypergeometric (N = 2n)" };
export function CompareDists({ init = ["binomial", "hyper"] as [Kind, Kind] }: { init?: [Kind, Kind] }) {
  const [k1, setK1] = useState<Kind>(init[0]), [k2, setK2] = useState<Kind>(init[1]), [n, setN] = useState(8), [p, setP] = useState(0.5);
  const A = build(k1, n, p), B = build(k2, n, p);
  const opts = (Object.keys(NAMES) as Kind[]).map((k) => ({ value: k, label: NAMES[k] }));
  return (
    <WidgetCard title="Comparing discrete distributions" subtitle="same n and p, different situations">
      <Segmented value={k1} onChange={setK1} label="bars:" options={opts} />
      <div style={{ height: 6 }} />
      <Segmented value={k2} onChange={setK2} label="outline:" options={opts} />
      <Row style={{ marginTop: 8 }}>
        <Slider label="n" value={n} min={2} max={16} onChange={setN} color={C.blue} />
        <Slider label="p" value={p} min={0.1} max={0.9} step={0.05} onChange={setP} color={C.green} format={(v) => v.toFixed(2)} />
      </Row>
      <Hist bars={A} other={B} otherLabel={NAMES[k2]} />
      <Readout tone="green">
        <MathText html={`Bars (${NAMES[k1]}): mean \\(\\approx${d3(mean(A))}\\). Outline (${NAMES[k2]}): mean \\(\\approx${d3(mean(B))}\\)${k2 === "geometric" || k1 === "geometric" ? " (geometric shown only up to n, so its mean here is slightly low)" : ""}. Choose the model from the situation: equally likely values → uniform; fixed number of independent trials → binomial; waiting for the first success → geometric; sampling without replacement from a small population → hypergeometric.`} />
      </Readout>
    </WidgetCard>
  );
}
