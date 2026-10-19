"use client";

// MCV4U chapter 3 (curve sketching) explorers: increasing/decreasing from the sign of f′, absolute and local extrema
// on an interval, concavity and inflection with a moving tangent, simple rational functions with asymptotes, a
// step-by-step polynomial curve sketch, and two optimization models (open box, fenced pen).

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { Plane, r2, type View } from "./Systems";
import { dot } from "./Quadratics";

type Fn = (x: number) => number;
const rnd = (x: number) => Math.round(x * 100) / 100;
const num = (f: Fn, x: number, h = 1e-4) => (f(x + h) - f(x - h)) / (2 * h);
const num2 = (f: Fn, x: number, h = 1e-3) => (f(x + h) - 2 * f(x) + f(x - h)) / (h * h);
function pathOf(f: Fn, v: View, X: (x: number) => number, Y: (y: number) => number, a = v.xmin, b = v.xmax, breaks: number[] = []) {
  const cuts = [a, ...breaks.filter((p) => p > a && p < b).sort((p, q) => p - q), b];
  const band = (v.ymax - v.ymin) * 3;
  let d = "";
  for (let s = 0; s < cuts.length - 1; s++) {
    const lo = cuts[s] + (s ? 1e-3 : 0), hi = cuts[s + 1] - (s < cuts.length - 2 ? 1e-3 : 0);
    let pen = false;
    for (let i = 0; i <= 300; i++) {
      const x = lo + ((hi - lo) * i) / 300, y = f(x);
      if (!Number.isFinite(y) || y > v.ymax + band || y < v.ymin - band) { pen = false; continue; }
      d += `${pen ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)} `; pen = true;
    }
  }
  return d;
}
/** zeros of g on [lo, hi] (sign changes, refined by bisection), skipping the given poles */
function zeros(g: Fn, lo: number, hi: number, poles: number[] = [], n = 800) {
  const out: number[] = [];
  let px = lo, py = g(lo);
  for (let i = 1; i <= n; i++) {
    const x = lo + ((hi - lo) * i) / n, y = g(x);
    const nearPole = poles.some((p) => (px - p) * (x - p) <= 0);
    if (Number.isFinite(py) && Number.isFinite(y) && !nearPole) {
      if (py === 0) out.push(px);
      else if (py * y < 0) {
        let a = px, b = x;
        for (let k = 0; k < 50; k++) { const m = (a + b) / 2; if (g(a) * g(m) <= 0) b = m; else a = m; }
        out.push((a + b) / 2);
      }
    }
    px = x; py = y;
  }
  return out.filter((z, i) => i === 0 || Math.abs(z - out[i - 1]) > 1e-6);
}
const sup = (n: number) => (n === 1 ? "" : `^{${n}}`);
function polyTex(cs: number[]) {
  const n = cs.length - 1;
  const t = cs.map((a, i) => ({ a, p: n - i })).filter((o) => o.a !== 0);
  if (!t.length) return "0";
  return t.map((o, i) => { const sign = o.a < 0 ? "-" : i === 0 ? "" : "+"; const mag = Math.abs(o.a) === 1 && o.p ? "" : r2(Math.abs(o.a)); return `${sign}${mag}${o.p ? `x${sup(o.p)}` : ""}`; }).join("");
}
const ev = (cs: number[], x: number) => cs.reduce((s, a) => s * x + a, 0);
const dcs = (cs: number[]) => cs.slice(0, -1).map((a, i) => a * (cs.length - 1 - i));
/** interval text such as (−∞, −1) */
const iv = (a: number, b: number) => `(${a === -Infinity ? "-\\infty" : r2(a)},\\,${b === Infinity ? "\\infty" : r2(b)})`;

/* ---------------------------------------------------------------- 3.1 increasing and decreasing */

export function MonotonicityLab({ init = [1, 0, -3, 0] }: { init?: number[] }) {
  const [cs, setCs] = useState<number[]>(init);
  const d = dcs(cs);
  const f: Fn = (x) => ev(cs, x), fp: Fn = (x) => ev(d, x);
  const v: View = { xmin: -3, xmax: 3, ymin: -8, ymax: 8 };
  const crit = zeros(fp, -6, 6);
  const cuts = [-Infinity, ...crit, Infinity];
  const pieces = cuts.slice(0, -1).map((a, i) => { const b = cuts[i + 1]; const m = a === -Infinity ? b - 1 : b === Infinity ? a + 1 : (a + b) / 2; return { a, b, up: fp(Number.isFinite(m) ? m : 0) > 0 }; });
  const set = (i: number, val: number) => setCs((c) => c.map((x, j) => (j === i ? val : x)));
  return (
    <WidgetCard title="Increasing and decreasing" subtitle="f rises where f′ > 0 and falls where f′ < 0; the sign can only change where f′ = 0">
      <Row gap={8}>{["a (x³)", "b (x²)", "c (x)", "d"].map((nm, i) => <Slider key={nm} label={nm} value={cs[i]} min={-4} max={4} step={0.5} onChange={(val) => set(i, val)} color={i === 3 ? C.muted : C.blue} />)}</Row>
      <div style={{ textAlign: "center", fontSize: 18, margin: "6px 0" }}><MathText html={`\\(f(x)=${polyTex(cs)}\\qquad f'(x)=${polyTex(d)}\\)`} /></div>
      <Plane view={v} label="f (green rising, red falling) and f′ (dashed)" step={1} stepY={2}>
        {(X, Y) => <>
          <path d={pathOf(fp, v, X, Y)} fill="none" stroke={C.blue} strokeWidth={2} strokeDasharray="6 4" />
          {pieces.map((p, i) => <path key={i} d={pathOf(f, v, X, Y, Math.max(p.a, v.xmin), Math.min(p.b, v.xmax))} fill="none" stroke={p.up ? C.green : C.red} strokeWidth={3.4} />)}
          {crit.filter((c) => c > v.xmin && c < v.xmax).map((c, i) => dot(X, Y, c, f(c), C.violet, `(${r2(c)}, ${r2(f(c))})`, i))}
        </>}
      </Plane>
      <Readout tone="green">
        <MathText block html={crit.length ? `\\(f'(x)=0\\) at \\(x=${crit.map((z) => r2(z)).join(",\\ ")}\\). Test one value in each interval:` : `\\(f'(x)\\) is never 0, so \\(f\\) never changes direction.`} />
        <MathText block html={pieces.map((p) => `on \\(${iv(p.a, p.b)}\\): \\(f'${p.up ? ">" : "<"}0\\), so \\(f\\) is <strong>${p.up ? "increasing" : "decreasing"}</strong>`).join("; ")} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 3.2 maxima and minima on an interval */

const EXT: Record<string, { tex: string; f: Fn; v: View }> = {
  cubic: { tex: "x^3-3x", f: (x) => x ** 3 - 3 * x, v: { xmin: -3, xmax: 3, ymin: -8, ymax: 8 } },
  quartic: { tex: "x^4-4x^2+1", f: (x) => x ** 4 - 4 * x * x + 1, v: { xmin: -3, xmax: 3, ymin: -5, ymax: 8 } },
  flat: { tex: "x^3", f: (x) => x ** 3, v: { xmin: -3, xmax: 3, ymin: -8, ymax: 8 } },
};

export function ExtremaLab({ init = { fn: "cubic", a: -2, b: 2.5 } }: { init?: { fn: string; a: number; b: number } }) {
  const [k, setK] = useState(init.fn), [a, setA] = useState(init.a), [b, setB] = useState(init.b);
  const E = EXT[k] ?? EXT.cubic;
  const lo = Math.min(a, b - 0.2), hi = Math.max(b, a + 0.2);
  const fp: Fn = (x) => num(E.f, x);
  const crit = zeros(fp, -3.5, 3.5).map((c) => (Math.abs(c) < 1e-3 ? 0 : c));
  // x³ has f′(0) = 0 without a sign change; the sampler misses touching zeros, so add it explicitly
  if (k === "flat") crit.push(0);
  const inside = crit.filter((c) => c > lo && c < hi);
  const cand = [{ x: lo, kind: "endpoint" }, ...inside.map((x) => ({ x, kind: "critical" })), { x: hi, kind: "endpoint" }].map((c) => ({ ...c, y: E.f(c.x) }));
  const ymax = Math.max(...cand.map((c) => c.y)), ymin = Math.min(...cand.map((c) => c.y));
  const local = (x: number) => { const l = fp(x - 0.05), r = fp(x + 0.05); return l > 0 && r < 0 ? "local max" : l < 0 && r > 0 ? "local min" : "neither (no sign change)"; };
  return (
    <WidgetCard title="Maxima and minima" subtitle="Absolute extrema on [a, b]: compare f at the critical points and the endpoints">
      <Segmented options={Object.keys(EXT).map((key) => ({ value: key, label: `f(x) = ${EXT[key].tex.replace("^3", "³").replace("^4", "⁴").replace("^2", "²")}` }))} value={k} onChange={setK} />
      <Row gap={10}>
        <Slider label="a (left end)" value={rnd(a)} min={-3} max={2.5} step={0.1} onChange={setA} color={C.amber} />
        <Slider label="b (right end)" value={rnd(b)} min={-2.5} max={3} step={0.1} onChange={setB} color={C.amber} />
      </Row>
      <Plane view={E.v} label={`f(x) on [${r2(lo)}, ${r2(hi)}]`} step={1} stepY={2}>
        {(X, Y) => <>
          <path d={pathOf(E.f, E.v, X, Y)} fill="none" stroke={C.faint} strokeWidth={2} />
          <path d={pathOf(E.f, E.v, X, Y, lo, hi)} fill="none" stroke={C.violet} strokeWidth={3.4} />
          {cand.map((c, i) => dot(X, Y, c.x, c.y, c.y === ymax ? C.green : c.y === ymin ? C.red : c.kind === "endpoint" ? C.amber : C.blue, c.y === ymax ? "abs max" : c.y === ymin ? "abs min" : undefined, i))}
        </>}
      </Plane>
      <Readout tone="green">
        <MathText block html={`Candidates: ${cand.map((c) => `\\(f(${r2(c.x)})=${r2(c.y)}\\)${c.kind === "critical" ? ` (critical, ${local(c.x)})` : " (endpoint)"}`).join("; ")}.`} />
        <MathText block html={`Absolute maximum <strong>${r2(ymax)}</strong>, absolute minimum <strong>${r2(ymin)}</strong> on \\([${r2(lo)},${r2(hi)}]\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 3.3 concavity and inflection */

const CON: Record<string, { tex: string; f: Fn; v: View }> = {
  cubic: { tex: "x^3-3x^2+1", f: (x) => x ** 3 - 3 * x * x + 1, v: { xmin: -1.5, xmax: 3.5, ymin: -5, ymax: 4 } },
  quartic: { tex: "x^4-6x^2", f: (x) => x ** 4 - 6 * x * x, v: { xmin: -3, xmax: 3, ymin: -11, ymax: 6 } },
  bell: { tex: "\\frac{4}{x^2+1}", f: (x) => 4 / (x * x + 1), v: { xmin: -4, xmax: 4, ymin: -1, ymax: 5 } },
};

export function ConcavityLab({ init = { fn: "cubic", x: 0.5 } }: { init?: { fn: string; x: number } }) {
  const [k, setK] = useState(init.fn), [x0, setX0] = useState(init.x);
  const E = CON[k] ?? CON.cubic;
  const f2: Fn = (x) => num2(E.f, x);
  const infl = zeros(f2, E.v.xmin, E.v.xmax);
  const cuts = [E.v.xmin, ...infl, E.v.xmax];
  const s = num(E.f, x0), c2 = f2(x0);
  return (
    <WidgetCard title="Concavity and the second derivative" subtitle="f″ > 0: concave up, the curve lies above its tangents; f″ < 0: concave down, below them">
      <Segmented options={Object.keys(CON).map((key) => ({ value: key, label: key === "bell" ? "f(x) = 4/(x² + 1)" : `f(x) = ${CON[key].tex.replace("^3", "³").replace("^4", "⁴").replace(/\^2/g, "²")}` }))} value={k} onChange={setK} />
      <Slider label="x for the tangent" value={rnd(x0)} min={E.v.xmin + 0.2} max={E.v.xmax - 0.2} step={0.05} onChange={setX0} color={C.red} />
      <Plane view={E.v} label="f (blue: concave up, amber: concave down)" step={1} stepY={1}>
        {(X, Y) => <>
          {cuts.slice(0, -1).map((a, i) => { const b = cuts[i + 1]; const up = f2((a + b) / 2) > 0; return <path key={i} d={pathOf(E.f, E.v, X, Y, a, b)} fill="none" stroke={up ? C.blue : C.amber} strokeWidth={3.4} />; })}
          <line x1={X(x0 - 1.5)} y1={Y(E.f(x0) - 1.5 * s)} x2={X(x0 + 1.5)} y2={Y(E.f(x0) + 1.5 * s)} stroke={C.green} strokeWidth={2.4} />
          {infl.map((z, i) => dot(X, Y, z, E.f(z), C.violet, `inflection (${r2(z)}, ${r2(E.f(z))})`, `i${i}`))}
          {dot(X, Y, x0, E.f(x0), C.red, undefined, "p")}
        </>}
      </Plane>
      <Readout tone={c2 > 0 ? "blue" : "amber"}>
        <MathText block html={`At \\(x=${r2(x0)}\\): \\(f'=${r2(s)}\\), \\(f''=${r2(c2)}\\). The curve is concave <strong>${c2 > 0 ? "up" : "down"}</strong> here, so near this point it lies <strong>${c2 > 0 ? "above" : "below"}</strong> the green tangent.`} />
        <MathText block html={infl.length ? `\\(f''\\) changes sign at \\(x=${infl.map((z) => r2(z)).join(",\\ ")}\\): ${infl.length > 1 ? "these are inflection points" : "an inflection point"}.` : "f″ never changes sign: no inflection points."} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 3.4 simple rational functions */

const RAT: Record<string, { tex: string; label: string; f: Fn; v: View; va: number[]; ha?: number; slant?: [number, number]; facts: string }> = {
  a: { tex: "\\frac{1}{x^2-4}", label: "1/(x² − 4)", f: (x) => 1 / (x * x - 4), v: { xmin: -6, xmax: 6, ymin: -3, ymax: 3 }, va: [-2, 2], ha: 0,
    facts: "Vertical asymptotes \\(x=\\pm2\\); horizontal asymptote \\(y=0\\). \\(f'(x)=\\frac{-2x}{(x^2-4)^2}\\): increasing for \\(x<0\\), decreasing for \\(x>0\\) (away from the asymptotes); local maximum \\(\\left(0,-\\tfrac14\\right)\\). Symmetric about the y-axis." },
  b: { tex: "\\frac{2x}{x^2+1}", label: "2x/(x² + 1)", f: (x) => (2 * x) / (x * x + 1), v: { xmin: -6, xmax: 6, ymin: -2, ymax: 2 }, va: [], ha: 0,
    facts: "No vertical asymptote (the denominator is never 0); horizontal asymptote \\(y=0\\). \\(f'(x)=\\frac{2(1-x^2)}{(x^2+1)^2}\\): maximum \\((1,1)\\), minimum \\((-1,-1)\\). Odd function." },
  c: { tex: "\\frac{x^2}{x-1}", label: "x²/(x − 1)", f: (x) => (x * x) / (x - 1), v: { xmin: -5, xmax: 7, ymin: -10, ymax: 14 }, va: [1], slant: [1, 1],
    facts: "Vertical asymptote \\(x=1\\); oblique asymptote \\(y=x+1\\) (long division: \\(x+1+\\frac1{x-1}\\)). \\(f'(x)=\\frac{x(x-2)}{(x-1)^2}\\): local maximum \\((0,0)\\), local minimum \\((2,4)\\)." },
  d: { tex: "\\frac{2x+1}{x-3}", label: "(2x + 1)/(x − 3)", f: (x) => (2 * x + 1) / (x - 3), v: { xmin: -6, xmax: 12, ymin: -8, ymax: 12 }, va: [3], ha: 2,
    facts: "Vertical asymptote \\(x=3\\); horizontal asymptote \\(y=2\\). \\(f'(x)=\\frac{-7}{(x-3)^2}<0\\): decreasing on each branch, no extrema. Intercepts \\(\\left(-\\tfrac12,0\\right)\\) and \\(\\left(0,-\\tfrac13\\right)\\)." },
};

export function RationalSketch({ init = { fn: "a", x: 0.8 } }: { init?: { fn: string; x: number } }) {
  const [k, setK] = useState(init.fn), [x0, setX0] = useState(init.x);
  const R = RAT[k] ?? RAT.a;
  const fp: Fn = (x) => num(R.f, x);
  const ext = zeros(fp, R.v.xmin, R.v.xmax, R.va);
  const ok = !R.va.some((p) => Math.abs(x0 - p) < 0.06);
  return (
    <WidgetCard title="Sketching simple rational functions" subtitle="Asymptotes from the denominator and the degrees; shape from the sign of f′">
      <Segmented options={Object.keys(RAT).map((key) => ({ value: key, label: `f(x) = ${RAT[key].label}` }))} value={k} onChange={setK} />
      <Slider label="move along the curve: x" value={rnd(x0)} min={R.v.xmin + 0.2} max={R.v.xmax - 0.2} step={0.05} onChange={setX0} color={C.red} />
      <Plane view={R.v} label={`f(x) = ${R.label}`} step={1} stepY={R.v.ymax > 6 ? 2 : 0.5}>
        {(X, Y) => <>
          {R.va.map((p) => <line key={p} x1={X(p)} y1={Y(R.v.ymin)} x2={X(p)} y2={Y(R.v.ymax)} stroke={C.red} strokeWidth={1.8} strokeDasharray="7 5" />)}
          {R.ha !== undefined && <line x1={X(R.v.xmin)} y1={Y(R.ha)} x2={X(R.v.xmax)} y2={Y(R.ha)} stroke={C.red} strokeWidth={1.8} strokeDasharray="7 5" />}
          {R.slant && <line x1={X(R.v.xmin)} y1={Y(R.slant[0] * R.v.xmin + R.slant[1])} x2={X(R.v.xmax)} y2={Y(R.slant[0] * R.v.xmax + R.slant[1])} stroke={C.red} strokeWidth={1.8} strokeDasharray="7 5" />}
          <path d={pathOf(R.f, R.v, X, Y, R.v.xmin, R.v.xmax, R.va)} fill="none" stroke={C.violet} strokeWidth={3.2} />
          {ext.map((z, i) => dot(X, Y, z, R.f(z), C.green, `(${r2(z)}, ${r2(R.f(z))})`, i))}
          {ok && dot(X, Y, x0, R.f(x0), C.red, undefined, "p")}
        </>}
      </Plane>
      <Readout tone="green">
        <MathText block html={R.facts} />
        <MathText block html={ok ? `At \\(x=${r2(x0)}\\): \\(f=${r2(R.f(x0))}\\), \\(f'=${r2(fp(x0))}\\), so the curve is ${fp(x0) > 0.001 ? "rising" : fp(x0) < -0.001 ? "falling" : "level"} here.` : "Too close to the vertical asymptote: f is not defined there."} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 3.5 step-by-step curve sketch */

const STEPS = ["intercepts", "critical points", "increasing / decreasing", "inflection points", "the finished sketch"];

export function CurveSketcher({ init = { cs: [1, 0, -4, 0, 2], step: 4 } }: { init?: { cs: number[]; step: number } }) {
  const [cs, setCs] = useState<number[]>(init.cs), [step, setStep] = useState(init.step);
  const d = dcs(cs), d2 = dcs(d);
  const f: Fn = (x) => ev(cs, x), fp: Fn = (x) => ev(d, x), f2: Fn = (x) => ev(d2, x);
  const v: View = { xmin: -3.5, xmax: 3.5, ymin: -8, ymax: 10 };
  const xi = zeros(f, -6, 6), crit = zeros(fp, -6, 6), infl = zeros(f2, -6, 6);
  const set = (i: number, val: number) => setCs((c) => c.map((x, j) => (j === i ? val : x)));
  const kind = (c: number) => (f2(c) > 0 ? "local min" : f2(c) < 0 ? "local max" : "test needed");
  return (
    <WidgetCard title="Putting it all together" subtitle="Build the sketch one layer at a time: intercepts, critical points, intervals, concavity">
      <Row gap={8}>{["a (x⁴)", "b (x³)", "c (x²)", "d (x)", "e"].map((nm, i) => <Slider key={nm} label={nm} value={cs[i]} min={i === 0 ? 0 : -6} max={i === 0 ? 2 : 6} step={0.5} onChange={(val) => set(i, val)} color={i === 4 ? C.muted : C.blue} />)}</Row>
      <Slider label={`step ${step + 1}: ${STEPS[step]}`} value={step} min={0} max={4} step={1} onChange={setStep} color={C.violet} />
      <div style={{ textAlign: "center", fontSize: 18, margin: "6px 0" }}><MathText html={`\\(f(x)=${polyTex(cs)}\\)`} /></div>
      <Plane view={v} label="the sketch so far" step={1} stepY={2}>
        {(X, Y) => <>
          {step >= 4 && <path d={pathOf(f, v, X, Y)} fill="none" stroke={C.violet} strokeWidth={3.2} />}
          {step >= 2 && step < 4 && [-Infinity, ...crit, Infinity].slice(0, -1).map((a, i, arr) => { const b = [...crit, Infinity][i]; const lo = Math.max(a, v.xmin), hi = Math.min(b, v.xmax); const up = fp((lo + hi) / 2) > 0; void arr; return <path key={i} d={pathOf(f, v, X, Y, lo, hi)} fill="none" stroke={up ? C.green : C.red} strokeWidth={2.4} strokeDasharray="3 5" />; })}
          {xi.map((z, i) => dot(X, Y, z, 0, C.amber, step === 0 ? `${r2(z)}` : undefined, `x${i}`))}
          {dot(X, Y, 0, f(0), C.amber, step === 0 ? `(0, ${r2(f(0))})` : undefined, "y")}
          {step >= 1 && crit.map((c, i) => dot(X, Y, c, f(c), C.blue, `${kind(c)} (${r2(c)}, ${r2(f(c))})`, `c${i}`))}
          {step >= 3 && infl.map((z, i) => dot(X, Y, z, f(z), C.violet, `inflection`, `p${i}`))}
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText block html={`x-intercepts: ${xi.length ? xi.map((z) => r2(z)).join(", ") : "none"}; y-intercept: \\(${r2(f(0))}\\).`} />
        {step >= 1 && <MathText block html={`\\(f'(x)=${polyTex(d)}=0\\) at ${crit.length ? crit.map((z) => r2(z)).join(", ") : "no real x"}; second derivative test: ${crit.map((c) => `\\(f''(${r2(c)})=${r2(f2(c))}\\) → ${kind(c)}`).join("; ") || "—"}.`} />}
        {step >= 3 && <MathText block html={`\\(f''(x)=${polyTex(d2)}=0\\) at ${infl.length ? infl.map((z) => r2(z)).join(", ") : "no real x"}${infl.length ? " (sign changes: inflection points)" : ""}.`} />}
        {step >= 4 && <MathText block html={`End behaviour: as \\(x\\to\\pm\\infty\\), \\(f(x)\\to${cs[0] > 0 ? "+\\infty" : cs[0] < 0 ? "-\\infty" : "\\text{(lower degree)}"}\\).`} />}
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 3.6 optimization */

export function OptimizationLab({ init = { kind: "box", x: 2 } }: { init?: { kind: "box" | "pen"; x: number } }) {
  const [kind, setKind] = useState<"box" | "pen">(init.kind), [x0, setX0] = useState(init.x);
  const box = kind === "box";
  const L = 30, Wd = 20, F = 120;
  const g: Fn = box ? (x) => x * (L - 2 * x) * (Wd - 2 * x) : (x) => x * (F - 2 * x);
  const lo = 0, hi = box ? Wd / 2 : F / 2;
  const xs = box ? (L + Wd - Math.sqrt(L * L - L * Wd + Wd * Wd)) / 6 : F / 4;
  const x = Math.min(Math.max(x0, lo + 0.01), hi - 0.01);
  const v: View = box ? { xmin: 0, xmax: 10, ymin: 0, ymax: 1300 } : { xmin: 0, xmax: 60, ymin: 0, ymax: 2000 };
  const sc = 7;
  return (
    <WidgetCard title="Optimization" subtitle="Write the quantity as a function of one variable, find where its derivative is 0, check the endpoints">
      <Segmented options={[{ value: "box", label: "open box from a 30 × 20 sheet" }, { value: "pen", label: "pen along a river, 120 m of fence" }]} value={kind} onChange={(k) => { setKind(k); setX0(k === "box" ? 2 : 20); }} />
      <Slider label={box ? "corner square side x (cm)" : "side perpendicular to the river x (m)"} value={rnd(x)} min={0.1} max={hi - 0.1} step={0.1} onChange={setX0} color={C.red} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "flex-start" }}>
        <svg viewBox="0 0 240 170" style={{ width: 240, maxWidth: "100%", background: C.panel, borderRadius: 8 }}>
          {box ? <>
            <rect x={15} y={15} width={L * sc} height={Wd * sc} fill="#fff" stroke={C.muted} strokeWidth={1.5} />
            {[[15, 15], [15 + (L - x) * sc, 15], [15, 15 + (Wd - x) * sc], [15 + (L - x) * sc, 15 + (Wd - x) * sc]].map(([px, py], i) => <rect key={i} x={px} y={py} width={x * sc} height={x * sc} fill={C.redSoft} stroke={C.red} strokeDasharray="4 3" />)}
            <rect x={15 + x * sc} y={15 + x * sc} width={(L - 2 * x) * sc} height={(Wd - 2 * x) * sc} fill={C.violetSoft} stroke={C.violet} />
            <text x={120} y={162} textAnchor="middle" fontSize={12} fill={C.ink}>base {r2(L - 2 * x)} × {r2(Wd - 2 * x)}, height {r2(x)}</text>
          </> : <>
            <rect x={0} y={0} width={240} height={22} fill={C.blueSoft} /><text x={120} y={15} textAnchor="middle" fontSize={11} fill={C.blue}>river (no fence)</text>
            <rect x={120 - ((F - 2 * x) * 3.4) / 2 / 1.4} y={22} width={((F - 2 * x) * 3.4) / 1.4} height={(x * 3.4) / 1.4} fill={C.greenSoft} stroke={C.green} strokeWidth={2} />
            <text x={120} y={160} textAnchor="middle" fontSize={12} fill={C.ink}>{r2(x)} m × {r2(F - 2 * x)} m</text>
          </>}
        </svg>
        <div style={{ flex: 1, minWidth: 260 }}>
          <Plane view={v} label={box ? "V(x) (cm³)" : "A(x) (m²)"} step={box ? 1 : 5} stepY={box ? 100 : 200}>
            {(X, Y) => <>
              <path d={pathOf(g, v, X, Y, lo, hi)} fill="none" stroke={C.violet} strokeWidth={3} />
              {dot(X, Y, xs, g(xs), C.green, `max (${r2(xs)}, ${r2(g(xs))})`, "m")}
              {dot(X, Y, x, g(x), C.red, undefined, "p")}
            </>}
          </Plane>
        </div>
      </div>
      <Readout tone="green">
        <MathText block html={box ? `\\(V(x)=x(30-2x)(20-2x)\\), domain \\(0\\le x\\le10\\). \\(V'(x)=12x^2-200x+600=0\\Rightarrow x=\\frac{50-\\sqrt{700}}{6}\\approx${r2(xs)}\\) (the other root is outside the domain).` : `\\(A(x)=x(120-2x)\\), domain \\(0\\le x\\le60\\). \\(A'(x)=120-4x=0\\Rightarrow x=30\\): a 30 m by 60 m pen.`} />
        <MathText block html={`Now: \\(x=${r2(x)}\\) gives ${box ? "V" : "A"} \\(=${r2(g(x))}\\); the maximum is \\(${r2(g(xs))}\\), and the endpoints give 0.`} />
      </Readout>
    </WidgetCard>
  );
}
