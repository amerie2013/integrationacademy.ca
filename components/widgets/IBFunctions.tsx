"use client";

// IB AA SL chapter 2 (functions) explorers: the vertical line test, function notation and solving f(x) = k, key
// features of a graph, domain and range on a restricted interval, composite functions, and inverse functions as
// reflections in y = x.

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { Plane, r2, type View } from "./Systems";
import { dot } from "./Quadratics";

type Fn = (x: number) => number;
const n2 = (v: number, d = 2) => r2(v, d);
function pathOf(f: Fn, v: View, X: (x: number) => number, Y: (y: number) => number, a = v.xmin, b = v.xmax) {
  const band = (v.ymax - v.ymin) * 3;
  let d = "", pen = false, prev = NaN;
  for (let i = 0; i <= 500; i++) {
    const x = a + ((b - a) * i) / 500, y = f(x);
    const jump = Number.isFinite(prev) && Math.abs(y - prev) > (v.ymax - v.ymin) * 1.5;
    if (!Number.isFinite(y) || y > v.ymax + band || y < v.ymin - band || jump) { pen = false; prev = y; continue; }
    d += `${pen ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)} `; pen = true; prev = y;
  }
  return d;
}
/** roots of f on [a, b] by sign changes + bisection */
function rootsOf(f: Fn, a: number, b: number, steps = 800) {
  const out: number[] = [];
  let x0 = a, y0 = f(a);
  for (let i = 1; i <= steps; i++) {
    const x1 = a + ((b - a) * i) / steps, y1 = f(x1);
    if (Number.isFinite(y0) && Number.isFinite(y1)) {
      if (y0 === 0) out.push(x0);
      else if (y0 * y1 < 0 && Math.abs(y1 - y0) < 50) { let lo = x0, hi = x1; for (let k = 0; k < 50; k++) { const m = (lo + hi) / 2; if (f(lo) * f(m) <= 0) hi = m; else lo = m; } out.push((lo + hi) / 2); }
    }
    x0 = x1; y0 = y1;
  }
  return out.filter((r, i) => i === 0 || Math.abs(r - out[i - 1]) > 1e-4);
}
const V8: View = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };

/* ---------------------------------------------------------------- 2.1 vertical line test */

type Rel = "line" | "para" | "circle" | "side" | "abs" | "cubic";
const RELS: Record<Rel, { label: string; tex: string; ys: (x: number) => number[]; fn: boolean }> = {
  line: { label: "line", tex: "y=2x-1", ys: (x) => [2 * x - 1], fn: true },
  para: { label: "parabola", tex: "y=x^2-4", ys: (x) => [x * x - 4], fn: true },
  circle: { label: "circle", tex: "x^2+y^2=25", ys: (x) => (Math.abs(x) <= 5 ? [Math.sqrt(25 - x * x), -Math.sqrt(25 - x * x)] : []), fn: false },
  side: { label: "sideways parabola", tex: "x=y^2-3", ys: (x) => (x >= -3 ? [Math.sqrt(x + 3), -Math.sqrt(x + 3)] : []), fn: false },
  abs: { label: "|x|", tex: "y=|x|-2", ys: (x) => [Math.abs(x) - 2], fn: true },
  cubic: { label: "cubic", tex: "y=\\tfrac14x^3-2x", ys: (x) => [0.25 * x ** 3 - 2 * x], fn: true },
};
export function FunctionTest({ init = "circle" }: { init?: Rel }) {
  const [rel, setRel] = useState<Rel>(init);
  const [x, setX] = useState(1);
  const R = RELS[rel];
  const hits = R.ys(x).filter((y, i, a) => a.findIndex((z) => Math.abs(z - y) < 1e-9) === i);
  const branches = rel === "circle" ? [(t: number) => Math.sqrt(25 - t * t), (t: number) => -Math.sqrt(25 - t * t)] : rel === "side" ? [(t: number) => Math.sqrt(t + 3), (t: number) => -Math.sqrt(t + 3)] : [(t: number) => R.ys(t)[0]];
  return (
    <WidgetCard title="The vertical line test" subtitle="a relation is a function when every x gives exactly one y">
      <Row><Segmented value={rel} onChange={setRel} options={(Object.keys(RELS) as Rel[]).map((k) => ({ value: k, label: RELS[k].label }))} /></Row>
      <Row><Slider label="line x =" value={x} min={-7} max={7} step={0.5} onChange={setX} format={(v) => n2(v)} color={C.red} /></Row>
      <Plane view={V8} label="Vertical line test" step={1}>
        {(X, Y) => <>
          {branches.map((f, i) => <path key={i} d={pathOf(f, V8, X, Y, rel === "circle" ? -5 : rel === "side" ? -3 : V8.xmin, rel === "circle" ? 5 : V8.xmax)} fill="none" stroke={C.violet} strokeWidth={3} />)}
          <line x1={X(x)} y1={Y(V8.ymin)} x2={X(x)} y2={Y(V8.ymax)} stroke={C.red} strokeWidth={2} strokeDasharray="7 5" />
          {hits.map((y, i) => dot(X, Y, x, y, C.red, `(${n2(x)}, ${n2(y)})`, i))}
        </>}
      </Plane>
      <Readout tone={R.fn ? "green" : "amber"}>
        <MathText html={`\\(${R.tex}\\): the line \\(x=${n2(x)}\\) meets the graph ${hits.length === 1 ? "once" : hits.length === 0 ? "nowhere (this x is not in the domain)" : `${hits.length} times`}. ${R.fn ? "Every vertical line meets it at most once, so it <strong>is a function</strong>." : "Some vertical lines meet it twice, so it is <strong>not a function</strong> of x."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 2.2 function notation */

type FKey = "quad" | "lin" | "root" | "recip";
const FS: Record<FKey, { tex: string; f: Fn; sub: (a: string) => string; view: View }> = {
  quad: { tex: "x^2-3x", f: (x) => x * x - 3 * x, sub: (a) => `${a}^2-3\\cdot${a}`, view: { xmin: -4, xmax: 7, ymin: -4, ymax: 14 } },
  lin: { tex: "2x+5", f: (x) => 2 * x + 5, sub: (a) => `2\\cdot${a}+5`, view: { xmin: -7, xmax: 5, ymin: -8, ymax: 14 } },
  root: { tex: "\\sqrt{x+4}", f: (x) => (x >= -4 ? Math.sqrt(x + 4) : NaN), sub: (a) => `\\sqrt{${a}+4}`, view: { xmin: -5, xmax: 12, ymin: -1, ymax: 5 } },
  recip: { tex: "\\dfrac{6}{x}", f: (x) => (x === 0 ? NaN : 6 / x), sub: (a) => `\\dfrac{6}{${a}}`, view: { xmin: -8, xmax: 8, ymin: -8, ymax: 8 } },
};
export function FnNotationLab({ init = "quad" }: { init?: FKey }) {
  const [k, setK] = useState<FKey>(init);
  const [a, setA] = useState(2), [c, setC] = useState(4);
  const F = FS[k], fa = F.f(a), v = F.view;
  const sols = rootsOf((x) => F.f(x) - c, v.xmin, v.xmax);
  const at = a < 0 ? `(${n2(a)})` : n2(a);
  return (
    <WidgetCard title="Function notation" subtitle="f(a) is the output when the input is a; solving f(x) = k reads the graph the other way">
      <Row><Segmented value={k} onChange={(v2) => { setK(v2); setA(2); setC(v2 === "root" ? 2 : 4); }} options={(Object.keys(FS) as FKey[]).map((key) => ({ value: key, label: key === "quad" ? "x² − 3x" : key === "lin" ? "2x + 5" : key === "root" ? "√(x + 4)" : "6/x" }))} /></Row>
      <Row>
        <Slider label="input a" value={a} min={v.xmin} max={v.xmax} step={0.5} onChange={setA} format={(t) => n2(t)} color={C.blue} />
        <Slider label="output k" value={c} min={v.ymin} max={v.ymax} step={0.5} onChange={setC} format={(t) => n2(t)} color={C.green} />
      </Row>
      <Plane view={v} label="Function notation" step={1} stepY={v.ymax - v.ymin > 12 ? 2 : 1}>
        {(X, Y) => <>
          <path d={pathOf(F.f, v, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
          <line x1={X(v.xmin)} y1={Y(c)} x2={X(v.xmax)} y2={Y(c)} stroke={C.green} strokeWidth={2} strokeDasharray="7 5" />
          {sols.map((x, i) => dot(X, Y, x, c, C.green, undefined, "s" + i))}
          {Number.isFinite(fa) && <>
            <line x1={X(a)} y1={Y(0)} x2={X(a)} y2={Y(fa)} stroke={C.blue} strokeDasharray="4 4" />
            {dot(X, Y, a, fa, C.blue, `(${n2(a)}, ${n2(fa)})`, "a")}
          </>}
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`\\(f(x)=${F.tex}\\). ${Number.isFinite(fa) ? `\\(f(${n2(a)})=${F.sub(at)}=${n2(fa, 3)}\\)` : `\\(f(${n2(a)})\\) is undefined: \\(${n2(a)}\\) is not in the domain`}. Solving \\(f(x)=${n2(c)}\\): ${sols.length ? `\\(x\\approx${sols.map((s) => n2(s)).join(",\\ ")}\\) (green points)` : "no solution in this window"}.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 2.3 key features of a graph */

type GKey = "cubic" | "quartic" | "rational" | "exp";
const GS: Record<GKey, { tex: string; f: Fn; view: View; asym: { v?: number; h?: number } }> = {
  cubic: { tex: "\\tfrac12(x+2)(x-1)(x-3)", f: (x) => 0.5 * (x + 2) * (x - 1) * (x - 3), view: { xmin: -4, xmax: 5, ymin: -8, ymax: 8 }, asym: {} },
  quartic: { tex: "\\tfrac14x^4-2x^2+1", f: (x) => 0.25 * x ** 4 - 2 * x * x + 1, view: { xmin: -4, xmax: 4, ymin: -5, ymax: 6 }, asym: {} },
  rational: { tex: "\\dfrac{2x+1}{x-1}", f: (x) => (Math.abs(x - 1) < 1e-9 ? NaN : (2 * x + 1) / (x - 1)), view: { xmin: -6, xmax: 8, ymin: -8, ymax: 10 }, asym: { v: 1, h: 2 } },
  exp: { tex: "2^x-3", f: (x) => 2 ** x - 3, view: { xmin: -5, xmax: 4, ymin: -5, ymax: 8 }, asym: { h: -3 } },
};
export function GraphFeatures({ init = "cubic" }: { init?: GKey }) {
  const [k, setK] = useState<GKey>(init);
  const G = GS[k], v = G.view;
  const zs = rootsOf(G.f, v.xmin, v.xmax);
  const d = (x: number) => (G.f(x + 1e-5) - G.f(x - 1e-5)) / 2e-5;
  const tps = rootsOf(d, v.xmin + 0.01, v.xmax - 0.01).filter((x) => Number.isFinite(G.f(x)) && (G.asym.v === undefined || Math.abs(x - G.asym.v) > 0.05));
  const y0 = G.f(0);
  return (
    <WidgetCard title="Key features of a graph" subtitle="intercepts, turning points and asymptotes — what a GDC sketch should show">
      <Row><Segmented value={k} onChange={setK} options={[{ value: "cubic", label: "cubic" }, { value: "quartic", label: "quartic" }, { value: "rational", label: "rational" }, { value: "exp", label: "exponential" }]} /></Row>
      <Plane view={v} label="Key features" step={1}>
        {(X, Y) => <>
          {G.asym.v !== undefined && <line x1={X(G.asym.v)} y1={Y(v.ymin)} x2={X(G.asym.v)} y2={Y(v.ymax)} stroke={C.red} strokeDasharray="7 5" strokeWidth={2} />}
          {G.asym.h !== undefined && <line x1={X(v.xmin)} y1={Y(G.asym.h)} x2={X(v.xmax)} y2={Y(G.asym.h)} stroke={C.red} strokeDasharray="7 5" strokeWidth={2} />}
          <path d={pathOf(G.f, v, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
          {zs.map((x, i) => dot(X, Y, x, 0, C.blue, `(${n2(x)}, 0)`, "z" + i))}
          {Number.isFinite(y0) && dot(X, Y, 0, y0, C.green, `(0, ${n2(y0)})`, "y")}
          {tps.map((x, i) => dot(X, Y, x, G.f(x), C.amber, `(${n2(x)}, ${n2(G.f(x))})`, "t" + i))}
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`\\(y=${G.tex}\\). x-intercepts: ${zs.length ? zs.map((x) => `\\(${n2(x)}\\)`).join(", ") : "none"}; y-intercept: \\(${Number.isFinite(y0) ? n2(y0) : "none"}\\); turning points: ${tps.length ? tps.map((x) => `\\((${n2(x)},\\ ${n2(G.f(x))})\\)`).join(", ") : "none"}${G.asym.v !== undefined ? `; vertical asymptote \\(x=${G.asym.v}\\)` : ""}${G.asym.h !== undefined ? `; horizontal asymptote \\(y=${G.asym.h}\\)` : ""}.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 2.4 domain and range */

type DKey = "sq" | "shift" | "root" | "recip" | "lin";
const DS: Record<DKey, { tex: string; f: Fn; lo: number }> = {
  sq: { tex: "x^2", f: (x) => x * x, lo: -6 },
  shift: { tex: "(x-1)^2-4", f: (x) => (x - 1) ** 2 - 4, lo: -6 },
  root: { tex: "\\sqrt{x}", f: (x) => (x >= 0 ? Math.sqrt(x) : NaN), lo: 0 },
  recip: { tex: "\\dfrac1x", f: (x) => (x === 0 ? NaN : 1 / x), lo: 0.5 },
  lin: { tex: "2x+1", f: (x) => 2 * x + 1, lo: -6 },
};
export function DomainRange({ init = "shift" }: { init?: DKey }) {
  const [k, setK] = useState<DKey>(init);
  const [a, setA] = useState(-2), [b, setB] = useState(4);
  const D = DS[k];
  const lo = Math.max(a, D.lo), hi = Math.max(b, lo);
  const ys: number[] = []; for (let i = 0; i <= 600; i++) { const y = D.f(lo + ((hi - lo) * i) / 600); if (Number.isFinite(y)) ys.push(y); }
  const ymin = Math.min(...ys), ymax = Math.max(...ys);
  const view: View = { xmin: -7, xmax: 8, ymin: Math.min(-2, Math.floor(ymin) - 1), ymax: Math.max(4, Math.min(30, Math.ceil(ymax) + 1)) };
  const stepY = view.ymax - view.ymin > 16 ? 2 : 1;
  return (
    <WidgetCard title="Domain and range" subtitle="restrict the inputs (green) and read off every output (blue)">
      <Row><Segmented value={k} onChange={(v) => { setK(v); setA(v === "root" || v === "recip" ? 1 : -2); setB(4); }} options={[{ value: "sq", label: "x²" }, { value: "shift", label: "(x − 1)² − 4" }, { value: "root", label: "√x" }, { value: "recip", label: "1/x (x > 0)" }, { value: "lin", label: "2x + 1" }]} /></Row>
      <Row>
        <Slider label="from x =" value={a} min={D.lo} max={6} step={0.5} onChange={(v) => { setA(v); if (b < v) setB(v); }} format={(t) => n2(t)} color={C.green} />
        <Slider label="to x =" value={b} min={a} max={7} step={0.5} onChange={setB} format={(t) => n2(t)} color={C.green} />
      </Row>
      <Plane view={view} label="Domain and range" step={1} stepY={stepY}>
        {(X, Y) => <>
          <path d={pathOf(D.f, view, X, Y)} fill="none" stroke="#cbd5e1" strokeWidth={2} />
          <path d={pathOf(D.f, view, X, Y, lo, hi)} fill="none" stroke={C.violet} strokeWidth={3.5} />
          <line x1={X(lo)} y1={Y(0)} x2={X(hi)} y2={Y(0)} stroke={C.green} strokeWidth={7} opacity={0.7} />
          <line x1={X(0)} y1={Y(ymin)} x2={X(0)} y2={Y(ymax)} stroke={C.blue} strokeWidth={7} opacity={0.6} />
          {dot(X, Y, lo, D.f(lo), C.violet, undefined, "l")}{dot(X, Y, hi, D.f(hi), C.violet, undefined, "h")}
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`\\(f(x)=${D.tex}\\) with domain \\(${n2(lo)}\\le x\\le${n2(hi)}\\) (green) has range \\(${n2(ymin)}\\le y\\le${n2(ymax)}\\) (blue). ${k === "shift" && lo < 1 && hi > 1 ? "The vertex (1, −4) is inside the domain, so the minimum is −4 — not the value at an end point." : "The extreme outputs come from the end points of the domain here."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 2.5 composite functions */

type CKey = "dbl" | "sq" | "sub" | "half";
const CF: Record<CKey, { tex: string; f: Fn; of: (inner: string) => string; label: string }> = {
  dbl: { tex: "2x+1", f: (x) => 2 * x + 1, of: (u) => `2(${u})+1`, label: "2x + 1" },
  sq: { tex: "x^2", f: (x) => x * x, of: (u) => `(${u})^2`, label: "x²" },
  sub: { tex: "x-3", f: (x) => x - 3, of: (u) => `(${u})-3`, label: "x − 3" },
  half: { tex: "\\tfrac12x", f: (x) => x / 2, of: (u) => `\\tfrac12(${u})`, label: "½x" },
};
export function CompositeLab({ init = ["dbl", "sq"] }: { init?: [CKey, CKey] }) {
  const [fk, setF] = useState<CKey>(init[0]), [gk, setG] = useState<CKey>(init[1]);
  const [x, setX] = useState(2);
  const f = CF[fk], g = CF[gk];
  const fg = (t: number) => f.f(g.f(t)), gf = (t: number) => g.f(f.f(t));
  const view: View = { xmin: -6, xmax: 6, ymin: -8, ymax: 16 };
  const box = (lab: string, val: number, col: string) => <span style={{ display: "inline-block", padding: "4px 10px", borderRadius: 8, background: col, color: "#fff", fontWeight: 700, fontSize: 14 }}>{lab} = {n2(val)}</span>;
  return (
    <WidgetCard title="Composite functions" subtitle="(f ∘ g)(x) = f(g(x)): apply g first, then f">
      <Row>
        <Segmented label="f(x) =" value={fk} onChange={setF} options={(Object.keys(CF) as CKey[]).map((k) => ({ value: k, label: CF[k].label }))} />
        <Segmented label="g(x) =" value={gk} onChange={setG} options={(Object.keys(CF) as CKey[]).map((k) => ({ value: k, label: CF[k].label }))} />
      </Row>
      <Row><Slider label="x" value={x} min={-5} max={5} step={0.5} onChange={setX} format={(t) => n2(t)} color={C.blue} /></Row>
      <div style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "center", flexWrap: "wrap", margin: "6px 0" }}>
        {box("x", x, C.blue)}<span>→ g →</span>{box("g(x)", g.f(x), C.amber)}<span>→ f →</span>{box("f(g(x))", fg(x), C.violet)}
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "center", flexWrap: "wrap", margin: "6px 0" }}>
        {box("x", x, C.blue)}<span>→ f →</span>{box("f(x)", f.f(x), C.amber)}<span>→ g →</span>{box("g(f(x))", gf(x), C.green)}
      </div>
      <Plane view={view} label="Composite functions" step={1} stepY={2}>
        {(X, Y) => <>
          <path d={pathOf(fg, view, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
          <path d={pathOf(gf, view, X, Y)} fill="none" stroke={C.green} strokeWidth={3} strokeDasharray="8 5" />
          {dot(X, Y, x, fg(x), C.violet, undefined, "a")}{dot(X, Y, x, gf(x), C.green, undefined, "b")}
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`\\((f\\circ g)(x)=${f.of(g.tex)}\\) (violet) and \\((g\\circ f)(x)=${g.of(f.tex)}\\) (green, dashed). ${Math.abs(fg(x) - gf(x)) < 1e-9 ? "At this x they agree" : "They usually differ"}: the order of composition matters.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 2.6 inverse functions */

type IKey = "lin" | "sqr" | "root" | "cube" | "rat";
const IF: Record<IKey, { tex: string; inv: string; f: Fn; a: number; b: number; note: string }> = {
  lin: { tex: "2x-3", inv: "\\dfrac{x+3}{2}", f: (x) => 2 * x - 3, a: -8, b: 8, note: "a linear function is one-to-one, so its inverse exists everywhere." },
  sqr: { tex: "(x-1)^2,\\ x\\ge1", inv: "1+\\sqrt{x}", f: (x) => (x >= 1 ? (x - 1) ** 2 : NaN), a: 1, b: 8, note: "the domain is restricted to x ≥ 1 so that the function is one-to-one." },
  root: { tex: "\\sqrt{x+2}", inv: "x^2-2,\\ x\\ge0", f: (x) => (x >= -2 ? Math.sqrt(x + 2) : NaN), a: -2, b: 8, note: "the range of f (y ≥ 0) becomes the domain of the inverse." },
  cube: { tex: "\\tfrac18x^3", inv: "2\\sqrt[3]{x}", f: (x) => x ** 3 / 8, a: -8, b: 8, note: "a cubic like this is one-to-one, so no restriction is needed." },
  rat: { tex: "\\dfrac{x+3}{x-1}", inv: "\\dfrac{x+3}{x-1}", f: (x) => (Math.abs(x - 1) < 1e-9 ? NaN : (x + 3) / (x - 1)), a: -8, b: 8, note: "this function is its own inverse: its graph is symmetric in y = x." },
};
export function FnInverseLab({ init = "lin" }: { init?: IKey }) {
  const [k, setK] = useState<IKey>(init);
  const [p, setP] = useState(2);
  const F = IF[k];
  const view = V8;
  const px = Math.max(F.a, Math.min(F.b, p)), py = F.f(px);
  const invPath = (X: (x: number) => number, Y: (y: number) => number) => {
    let d = "", pen = false, prev = NaN;
    for (let i = 0; i <= 600; i++) {
      const t = F.a + ((F.b - F.a) * i) / 600, y = F.f(t);
      if (!Number.isFinite(y) || Math.abs(y) > 30 || (Number.isFinite(prev) && Math.abs(y - prev) > 10)) { pen = false; prev = y; continue; }
      d += `${pen ? "L" : "M"}${X(y).toFixed(1)},${Y(t).toFixed(1)} `; pen = true; prev = y;
    }
    return d;
  };
  return (
    <WidgetCard title="Inverse functions" subtitle="the graph of f⁻¹ is the reflection of the graph of f in the line y = x">
      <Row><Segmented value={k} onChange={(v) => { setK(v); setP(2); }} options={[{ value: "lin", label: "2x − 3" }, { value: "sqr", label: "(x − 1)², x ≥ 1" }, { value: "root", label: "√(x + 2)" }, { value: "cube", label: "x³/8" }, { value: "rat", label: "(x + 3)/(x − 1)" }]} /></Row>
      <Row><Slider label="point x" value={p} min={F.a} max={F.b} step={0.25} onChange={setP} format={(t) => n2(t)} color={C.blue} /></Row>
      <Plane view={view} label="Inverse functions" step={1}>
        {(X, Y) => <>
          <line x1={X(-8)} y1={Y(-8)} x2={X(8)} y2={Y(8)} stroke={C.faint} strokeDasharray="6 5" />
          <path d={pathOf(F.f, view, X, Y, F.a, F.b)} fill="none" stroke={C.violet} strokeWidth={3} />
          <path d={invPath(X, Y)} fill="none" stroke={C.green} strokeWidth={3} strokeDasharray="8 5" />
          {Number.isFinite(py) && Math.abs(py) < 8 && <>
            <line x1={X(px)} y1={Y(py)} x2={X(py)} y2={Y(px)} stroke={C.amber} strokeDasharray="3 4" />
            {dot(X, Y, px, py, C.violet, `(${n2(px)}, ${n2(py)})`, "p")}{dot(X, Y, py, px, C.green, `(${n2(py)}, ${n2(px)})`, "q")}
          </>}
        </>}
      </Plane>
      <Readout tone="green">
        <MathText html={`\\(f(x)=${F.tex}\\) (violet), \\(f^{-1}(x)=${F.inv}\\) (green, dashed). The point \\((${n2(px)},\\ ${n2(py)})\\) on \\(f\\) becomes \\((${n2(py)},\\ ${n2(px)})\\) on \\(f^{-1}\\): inputs and outputs swap. Here ${F.note}`} />
      </Readout>
    </WidgetCard>
  );
}
