"use client";

// IB AA SL chapter 5 (differentiation) explorers: limits from both sides, secant → tangent and the derivative graph,
// the power rule with tangent and normal lines, f, f′ and f″ with stationary and inflection points, an open-box
// optimisation, and kinematics (displacement, velocity and acceleration of a particle on a line).

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { Plane, r2, type View } from "./Systems";
import { dot } from "./Quadratics";

type Fn = (x: number) => number;
const n2 = (v: number, d = 2) => r2(v, d);
const sg = (v: number) => (v < 0 ? `-${n2(-v)}` : `+${n2(v)}`);
function pathOf(f: Fn, v: View, X: (x: number) => number, Y: (y: number) => number, a = v.xmin, b = v.xmax) {
  const band = (v.ymax - v.ymin) * 3;
  let d = "", pen = false;
  for (let i = 0; i <= 500; i++) {
    const x = a + ((b - a) * i) / 500, y = f(x);
    if (!Number.isFinite(y) || y > v.ymax + band || y < v.ymin - band) { pen = false; continue; }
    d += `${pen ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)} `; pen = true;
  }
  return d;
}
/** polynomial a3 x³ + a2 x² + a1 x + a0 as LaTeX */
const polyTex = (cs: number[]) => {
  const t: string[] = [], deg = cs.length - 1;
  cs.forEach((k, i) => {
    const p = deg - i; if (Math.abs(k) < 1e-12) return;
    const s = p === 0 ? "" : p === 1 ? "x" : `x^${p}`, mag = Math.abs(k) === 1 && s ? "" : n2(Math.abs(k));
    t.push(`${k < 0 ? "-" : t.length ? "+" : ""}${mag}${s}`);
  });
  return t.join("") || "0";
};
const line = (X: (x: number) => number, Y: (y: number) => number, v: View, m: number, x0: number, y0: number, color: string, dash = false) =>
  <line x1={X(v.xmin)} y1={Y(y0 + m * (v.xmin - x0))} x2={X(v.xmax)} y2={Y(y0 + m * (v.xmax - x0))} stroke={color} strokeWidth={2.4} strokeDasharray={dash ? "8 5" : undefined} />;

/* ---------------------------------------------------------------- 5.1 limits */

const LIMITS: { label: string; tex: string; f: Fn; a: number; L: number | null; note: string }[] = [
  { label: "(x² − 4)/(x − 2)", tex: "\\dfrac{x^2-4}{x-2}", f: (x) => (x * x - 4) / (x - 2), a: 2, L: 4, note: "Not defined at x = 2, but (x − 2)(x + 2)/(x − 2) = x + 2 for x ≠ 2, so the limit is 4: a hole in the line." },
  { label: "(√(x + 9) − 3)/x", tex: "\\dfrac{\\sqrt{x+9}-3}{x}", f: (x) => (Math.sqrt(x + 9) - 3) / x, a: 0, L: 1 / 6, note: "Both sides approach 0.1667 = 1/6, although 0/0 has no value." },
  { label: "1/x²", tex: "\\dfrac{1}{x^2}", f: (x) => 1 / (x * x), a: 0, L: null, note: "The values grow without bound on both sides: there is no (finite) limit — the y-axis is an asymptote." },
  { label: "|x|/x", tex: "\\dfrac{|x|}{x}", f: (x) => Math.abs(x) / x, a: 0, L: null, note: "−1 from the left and +1 from the right: the one-sided values disagree, so the limit does not exist." },
];

export function IBLimit({ init = 0 }: { init?: number }) {
  const [k, setK] = useState(init), [e, setE] = useState(1);
  const F = LIMITS[k], h = [1, 0.1, 0.01, 0.001][e];
  const left = F.f(F.a - h), right = F.f(F.a + h);
  const v: View = k === 2 ? { xmin: -3, xmax: 3, ymin: -1, ymax: 20 } : k === 3 ? { xmin: -3, xmax: 3, ymin: -2, ymax: 2 } : k === 1 ? { xmin: -6, xmax: 6, ymin: -0.1, ymax: 0.4 } : { xmin: -2, xmax: 6, ymin: -1, ymax: 8 };
  return (
    <WidgetCard title="Limits from both sides" subtitle="lim f(x) as x → a is the value f(x) approaches when x gets close to a from either side — f(a) itself need not exist">
      <Row><Segmented label="f(x) =" value={k} onChange={setK} options={LIMITS.map((L, i) => ({ value: i, label: L.label }))} /></Row>
      <Row><Segmented label="distance h from a:" value={e} onChange={setE} options={[1, 0.1, 0.01, 0.001].map((d, i) => ({ value: i, label: String(d) }))} /></Row>
      <Plane view={v} label="Limits" step={1} stepY={k === 1 ? 0.1 : k === 2 ? 2 : 1}>
        {(X, Y) => <>
          <path d={pathOf(F.f, v, X, Y, v.xmin, F.a - 1e-6)} fill="none" stroke={C.violet} strokeWidth={3} />
          <path d={pathOf(F.f, v, X, Y, F.a + 1e-6, v.xmax)} fill="none" stroke={C.violet} strokeWidth={3} />
          <line x1={X(F.a)} y1={Y(v.ymin)} x2={X(F.a)} y2={Y(v.ymax)} stroke={C.red} strokeWidth={1.6} strokeDasharray="6 5" />
          {F.L !== null && <circle cx={X(F.a)} cy={Y(F.L)} r={6} fill="#fff" stroke={C.violet} strokeWidth={2.5} />}
          {Number.isFinite(left) && left <= v.ymax && dot(X, Y, F.a - h, left, C.blue, undefined, "l")}
          {Number.isFinite(right) && right <= v.ymax && dot(X, Y, F.a + h, right, C.green, undefined, "r")}
        </>}
      </Plane>
      <Readout tone={F.L === null ? "amber" : "blue"}>
        <MathText html={`\\(f(x)=${F.tex}\\), \\(a=${F.a}\\). Left: \\(f(${n2(F.a - h, 4)})=${n2(left, 5)}\\); right: \\(f(${n2(F.a + h, 4)})=${n2(right, 5)}\\). ${F.L !== null ? `\\(\\lim_{x\\to${F.a}}f(x)=${n2(F.L, 4)}\\). ` : ""}${F.note}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.2 the derivative function */

const DFNS: { label: string; tex: string; d: string; f: Fn; fp: Fn; view: View; dview: View }[] = [
  { label: "x²", tex: "x^2", d: "2x", f: (x) => x * x, fp: (x) => 2 * x, view: { xmin: -4, xmax: 4, ymin: -2, ymax: 12 }, dview: { xmin: -4, xmax: 4, ymin: -8, ymax: 8 } },
  { label: "x³ − 3x", tex: "x^3-3x", d: "3x^2-3", f: (x) => x ** 3 - 3 * x, fp: (x) => 3 * x * x - 3, view: { xmin: -3, xmax: 3, ymin: -6, ymax: 6 }, dview: { xmin: -3, xmax: 3, ymin: -4, ymax: 12 } },
  { label: "4 − x²/2", tex: "4-\\tfrac12x^2", d: "-x", f: (x) => 4 - x * x / 2, fp: (x) => -x, view: { xmin: -4, xmax: 4, ymin: -4, ymax: 6 }, dview: { xmin: -4, xmax: 4, ymin: -5, ymax: 5 } },
];

export function IBDerivative({ init = [0, 1, 1] }: { init?: [number, number, number] }) {
  const [k, setK] = useState(init[0]), [a, setA] = useState(init[1]), [h, setH] = useState(init[2]);
  const F = DFNS[k], fa = F.f(a), hh = h === 0 ? 0.01 : h, ms = (F.f(a + hh) - fa) / hh, mt = F.fp(a);
  return (
    <WidgetCard title="From secant to tangent to the derivative" subtitle="gradient of the secant = (f(a + h) − f(a))/h → f′(a) as h → 0; plotting f′(a) for every a gives the derivative function">
      <Row><Segmented label="f(x) =" value={k} onChange={setK} options={DFNS.map((D, i) => ({ value: i, label: D.label }))} /></Row>
      <Row>
        <Slider label="a" value={a} min={-3} max={3} step={0.5} onChange={setA} color={C.blue} />
        <Slider label="h" value={hh} min={-2} max={2} step={0.01} onChange={setH} color={C.green} />
      </Row>
      <Plane view={F.view} label="Secant and tangent" step={1} stepY={2}>
        {(X, Y) => <>
          <path d={pathOf(F.f, F.view, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
          {line(X, Y, F.view, ms, a, fa, C.green)}
          {line(X, Y, F.view, mt, a, fa, C.red, true)}
          {dot(X, Y, a, fa, C.blue, `(${n2(a)}, ${n2(fa)})`, "a")}
          {dot(X, Y, a + hh, F.f(a + hh), C.green, undefined, "b")}
        </>}
      </Plane>
      <Plane view={F.dview} label="Derivative graph" step={1} stepY={2}>
        {(X, Y) => <>
          <path d={pathOf(F.fp, F.dview, X, Y)} fill="none" stroke={C.amber} strokeWidth={2.5} strokeDasharray="7 4" />
          {dot(X, Y, a, mt, C.red, `(${n2(a)}, ${n2(mt)})`, "d")}
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`Top: \\(f(x)=${F.tex}\\), secant (green) and tangent (red dashed) at \\(x=${n2(a)}\\). Secant gradient \\(\\dfrac{f(${n2(a + hh)})-f(${n2(a)})}{${n2(hh)}}=${n2(ms, 3)}\\); tangent gradient \\(f'(${n2(a)})=${n2(mt, 3)}\\). Make \\(h\\) small and the two agree. Bottom: \\(f'(x)=${F.d}\\) — the red point is the tangent gradient at \\(a\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.3 power rule, tangent and normal */

export function IBPowerRule({ init = [1, -3, 0, 2, 1] }: { init?: [number, number, number, number, number] }) {
  const [a3, setA3] = useState(init[0]), [a2, setA2] = useState(init[1]), [a1, setA1] = useState(init[2]), [a0, setA0] = useState(init[3]), [x0, setX0] = useState(init[4]);
  const f = (x: number) => a3 * x ** 3 + a2 * x * x + a1 * x + a0, fp = (x: number) => 3 * a3 * x * x + 2 * a2 * x + a1;
  const y0 = f(x0), m = fp(x0), v: View = { xmin: -5, xmax: 5, ymin: -10, ymax: 10 };
  const c = y0 - m * x0;
  return (
    <WidgetCard title="The power rule, tangents and normals" subtitle="d/dx(xⁿ) = nxⁿ⁻¹ term by term; tangent y − y₀ = f′(x₀)(x − x₀); normal gradient −1/f′(x₀)">
      <Row>
        <Slider label="x³ coeff." value={a3} min={-2} max={2} step={0.5} onChange={setA3} color={C.violet} />
        <Slider label="x² coeff." value={a2} min={-4} max={4} onChange={setA2} color={C.violet} />
      </Row>
      <Row>
        <Slider label="x coeff." value={a1} min={-6} max={6} onChange={setA1} color={C.violet} />
        <Slider label="constant" value={a0} min={-6} max={6} onChange={setA0} color={C.violet} />
      </Row>
      <Row><Slider label="x₀" value={x0} min={-3} max={3} step={0.5} onChange={setX0} color={C.blue} /></Row>
      <Plane view={v} label="Tangent and normal" step={1} stepY={2}>
        {(X, Y) => <>
          <path d={pathOf(f, v, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
          {line(X, Y, v, m, x0, y0, C.red)}
          {m !== 0 ? line(X, Y, v, -1 / m, x0, y0, C.green, true) : <line x1={X(x0)} y1={Y(v.ymin)} x2={X(x0)} y2={Y(v.ymax)} stroke={C.green} strokeWidth={2.4} strokeDasharray="8 5" />}
          {Math.abs(y0) <= 10 && dot(X, Y, x0, y0, C.blue, `(${n2(x0)}, ${n2(y0)})`, "p")}
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`\\(f(x)=${polyTex([a3, a2, a1, a0])}\\Rightarrow f'(x)=${polyTex([3 * a3, 2 * a2, a1])}\\). At \\(x_0=${n2(x0)}\\): \\(f=${n2(y0, 3)}\\), \\(f'=${n2(m, 3)}\\). Tangent (red): \\(y=${n2(m, 3)}x${sg(+n2(c, 3))}\\). ${m === 0 ? "Normal (green): the vertical line \\(x=" + n2(x0) + "\\) — the tangent is horizontal." : `Normal (green): gradient \\(-\\frac{1}{${n2(m, 3)}}=${n2(-1 / m, 3)}\\).`}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.4 f, f′ and f″ */

export function IBShape({ init = [1, -3, -9, 5] }: { init?: [number, number, number, number] }) {
  const [a, setA] = useState(init[0]), [b, setB] = useState(init[1]), [c, setC] = useState(init[2]), [d, setD] = useState(init[3]);
  const [show, setShow] = useState<"f" | "fp" | "all">("all");
  const aa = a === 0 ? 1 : a;
  const f = (x: number) => aa * x ** 3 + b * x * x + c * x + d, fp = (x: number) => 3 * aa * x * x + 2 * b * x + c, fpp = (x: number) => 6 * aa * x + 2 * b;
  const D = 4 * b * b - 12 * aa * c;
  const st = D < 0 ? [] : D === 0 ? [-b / (3 * aa)] : [(-2 * b - Math.sqrt(D)) / (6 * aa), (-2 * b + Math.sqrt(D)) / (6 * aa)].sort((p, q) => p - q);
  const xi = -b / (3 * aa), ys = st.map(f).concat(f(xi));
  const lo = Math.min(...ys, -5), hi = Math.max(...ys, 5), pad = (hi - lo) * 0.25;
  const v: View = { xmin: Math.min(-5, xi - 5), xmax: Math.max(5, xi + 5), ymin: Math.floor(lo - pad), ymax: Math.ceil(hi + pad) };
  const stepY = Math.max(1, Math.round((v.ymax - v.ymin) / 10));
  const kind = (x: number) => (fpp(x) > 1e-9 ? "minimum" : fpp(x) < -1e-9 ? "maximum" : "point of inflection");
  return (
    <WidgetCard title="f, f′ and f″" subtitle="f′ = 0 at stationary points; f″ > 0 there means a minimum, f″ < 0 a maximum; f″ changes sign at a point of inflection">
      <Row>
        <Slider label="a (x³)" value={aa} min={-2} max={2} onChange={(v) => setA(v === 0 ? 1 : v)} color={C.violet} />
        <Slider label="b (x²)" value={b} min={-6} max={6} onChange={setB} color={C.violet} />
      </Row>
      <Row>
        <Slider label="c (x)" value={c} min={-12} max={12} onChange={setC} color={C.violet} />
        <Slider label="d" value={d} min={-10} max={10} onChange={setD} color={C.violet} />
      </Row>
      <Row><Segmented label="show:" value={show} onChange={setShow} options={[{ value: "f", label: "f only" }, { value: "fp", label: "f and f′" }, { value: "all", label: "f, f′ and f″" }]} /></Row>
      <Plane view={v} label="Shape of a cubic" step={1} stepY={stepY}>
        {(X, Y) => <>
          {show !== "f" && <path d={pathOf(fp, v, X, Y)} fill="none" stroke={C.amber} strokeWidth={2.2} strokeDasharray="7 4" />}
          {show === "all" && <path d={pathOf(fpp, v, X, Y)} fill="none" stroke={C.green} strokeWidth={2} strokeDasharray="3 4" />}
          <path d={pathOf(f, v, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
          {st.map((x, i) => dot(X, Y, x, f(x), D === 0 ? C.green : fpp(x) > 0 ? C.blue : C.red, `(${n2(x)}, ${n2(f(x))})`, "s" + i))}
          {D !== 0 && dot(X, Y, xi, f(xi), C.green, `(${n2(xi)}, ${n2(f(xi))})`, "i")}
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`\\(f(x)=${polyTex([aa, b, c, d])}\\), \\(f'(x)=${polyTex([3 * aa, 2 * b, c])}\\) (amber), \\(f''(x)=${polyTex([6 * aa, 2 * b])}\\) (green). ${st.length === 0 ? "f′ is never 0: no stationary points, so f is always " + (aa > 0 ? "increasing" : "decreasing") + ". " : st.length === 1 ? `One stationary point at \\(x=${n2(st[0])}\\), where f″ is also 0: a stationary point of inflection. ` : st.map((x) => `\\(x=${n2(x)}\\): \\(f''=${n2(fpp(x))}\\), ${kind(x)}`).join("; ") + ". "}Point of inflection at \\(x=${n2(xi)}\\) where f″ changes sign; f is concave ${aa > 0 ? "down to the left of it and up to the right" : "up to the left of it and down to the right"}.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.5 optimisation: the open box */

export function IBBox({ init = [24, 3] }: { init?: [number, number] }) {
  const [L, setL] = useState(init[0]), [x0, setX0] = useState(init[1]);
  const V = (x: number) => x * (L - 2 * x) ** 2, xm = L / 6, x = Math.min(x0, L / 2 - 0.5);
  const v: View = { xmin: 0, xmax: L / 2, ymin: 0, ymax: Math.ceil(V(xm) * 1.15) };
  const s = 120 / L, pad = 10;
  return (
    <WidgetCard title="Optimisation: the largest open box" subtitle="cut squares of side x from the corners of an L × L sheet: V = x(L − 2x)²; V′(x) = 0 gives the maximum">
      <Row>
        <Slider label="sheet L" value={L} min={6} max={36} step={6} onChange={setL} color={C.violet} />
        <Slider label="cut x" value={x} min={0.5} max={L / 2 - 0.5} step={0.5} onChange={setX0} color={C.blue} />
      </Row>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", justifyContent: "center" }}>
        <svg viewBox={`0 0 ${120 + 2 * pad} ${120 + 2 * pad}`} style={{ width: 170 }} role="img" aria-label="Net of the box">
          <rect x={pad} y={pad} width={120} height={120} fill={C.violetSoft} stroke={C.violet} strokeWidth={1.5} />
          {[[0, 0], [1, 0], [0, 1], [1, 1]].map(([i, j]) => <rect key={`${i}${j}`} x={pad + i * (120 - x * s)} y={pad + j * (120 - x * s)} width={x * s} height={x * s} fill="#fff" stroke={C.red} strokeDasharray="4 3" />)}
          <rect x={pad + x * s} y={pad + x * s} width={120 - 2 * x * s} height={120 - 2 * x * s} fill="none" stroke={C.violet} strokeDasharray="5 3" />
        </svg>
        <div style={{ flex: "1 1 300px", minWidth: 0 }}>
          <Plane view={v} label="Box volume" step={Math.max(1, L / 12)} stepY={Math.max(1, Math.round(v.ymax / 8))}>
            {(X, Y) => <>
              <path d={pathOf(V, v, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
              {dot(X, Y, xm, V(xm), C.amber, `max (${n2(xm)}, ${n2(V(xm))})`, "m")}
              {dot(X, Y, x, V(x), C.blue, undefined, "x")}
            </>}
          </Plane>
        </div>
      </div>
      <Readout tone="blue">
        <MathText html={`\\(V=x(${L}-2x)^2\\), \\(0<x<${L / 2}\\). At \\(x=${n2(x)}\\): \\(V=${n2(V(x))}\\). \\(V'(x)=(${L}-2x)^2-4x(${L}-2x)=(${L}-2x)(${L}-6x)=0\\Rightarrow x=${n2(xm)}\\) (the root \\(x=${L / 2}\\) gives no box). Maximum volume \\(${n2(V(xm))}\\) — the cut is always one sixth of the side.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.6 kinematics */

const MOTIONS: { label: string; s: Fn; v: Fn; a: Fn; sTex: string; vTex: string; aTex: string; T: number }[] = [
  { label: "t³ − 6t² + 9t", s: (t) => t ** 3 - 6 * t * t + 9 * t, v: (t) => 3 * t * t - 12 * t + 9, a: (t) => 6 * t - 12, sTex: "t^3-6t^2+9t", vTex: "3t^2-12t+9", aTex: "6t-12", T: 5 },
  { label: "20t − 5t²", s: (t) => 20 * t - 5 * t * t, v: (t) => 20 - 10 * t, a: () => -10, sTex: "20t-5t^2", vTex: "20-10t", aTex: "-10", T: 4 },
  { label: "t² − 4t + 3", s: (t) => t * t - 4 * t + 3, v: (t) => 2 * t - 4, a: () => 2, sTex: "t^2-4t+3", vTex: "2t-4", aTex: "2", T: 5 },
];

export function IBMotion({ init = [0, 1.5] }: { init?: [number, number] }) {
  const [k, setK] = useState(init[0]), [t0, setT] = useState(init[1]);
  const M = MOTIONS[k], t = Math.min(t0, M.T), s = M.s(t), vel = M.v(t), acc = M.a(t);
  const samples = Array.from({ length: 101 }, (_, i) => (M.T * i) / 100);
  const all = samples.flatMap((u) => [M.s(u), M.v(u), M.a(u)]);
  const v: View = { xmin: 0, xmax: M.T, ymin: Math.floor(Math.min(...all, 0) - 1), ymax: Math.ceil(Math.max(...all) + 1) };
  const sv = samples.map(M.s), lo = Math.min(...sv) - 1, hi = Math.max(...sv) + 1, P = (u: number) => 20 + ((u - lo) / (hi - lo)) * 440;
  const state = Math.abs(vel) < 1e-9 ? "at rest" : vel * acc > 0 ? "speeding up" : vel * acc < 0 ? "slowing down" : "moving at constant speed";
  return (
    <WidgetCard title="Kinematics: s, v and a" subtitle="v = ds/dt, a = dv/dt; at rest when v = 0; speeding up when v and a have the same sign">
      <Row><Segmented label="s(t) =" value={k} onChange={setK} options={MOTIONS.map((m, i) => ({ value: i, label: m.label }))} /></Row>
      <Row><Slider label="time t" value={t} min={0} max={M.T} step={0.1} onChange={setT} color={C.blue} /></Row>
      <svg viewBox="0 0 480 50" style={{ width: "100%", maxWidth: 560, display: "block", margin: "4px auto" }} role="img" aria-label="Particle on a line">
        <line x1={10} y1={28} x2={470} y2={28} stroke={C.muted} strokeWidth={2} />
        <line x1={P(0)} y1={20} x2={P(0)} y2={36} stroke={C.ink} strokeWidth={2} /><text x={P(0)} y={14} fontSize={12} textAnchor="middle" fill={C.ink}>O</text>
        <circle cx={P(s)} cy={28} r={8} fill={C.blue} />
        {Math.abs(vel) > 1e-9 && <path d={`M${P(s)},44 l${vel > 0 ? 22 : -22},0`} stroke={C.green} strokeWidth={3} markerEnd="" />}
      </svg>
      <Plane view={v} label="Motion graphs" step={1} stepY={Math.max(1, Math.round((v.ymax - v.ymin) / 10))}>
        {(X, Y) => <>
          <path d={pathOf(M.a, v, X, Y)} fill="none" stroke={C.red} strokeWidth={2} strokeDasharray="3 4" />
          <path d={pathOf(M.v, v, X, Y)} fill="none" stroke={C.green} strokeWidth={2.4} strokeDasharray="7 4" />
          <path d={pathOf(M.s, v, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
          <line x1={X(t)} y1={Y(v.ymin)} x2={X(t)} y2={Y(v.ymax)} stroke={C.blue} strokeWidth={1.5} />
          {dot(X, Y, t, s, C.violet, undefined, "s")}{dot(X, Y, t, vel, C.green, undefined, "v")}
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`\\(s=${M.sTex}\\) (violet), \\(v=${M.vTex}\\) (green), \\(a=${M.aTex}\\) (red). At \\(t=${n2(t)}\\): \\(s=${n2(s)}\\), \\(v=${n2(vel)}\\), \\(a=${n2(acc)}\\) — the particle is ${state}${Math.abs(vel) > 1e-9 ? `, moving ${vel > 0 ? "right" : "left"}` : ""}.`} />
      </Readout>
    </WidgetCard>
  );
}
