"use client";

// MPM2D chapter 5 (quadratic equations) explorers: solving by factoring, completing the square to solve,
// the quadratic formula, the discriminant (real and non-real roots), height-interval and maximum-area
// problems, and linear–quadratic systems.

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard, gcd } from "./kit";
import { fr, r2, type View } from "./Systems";
import { Curves, dot, stdForm } from "./Quadratics";

/** √n simplified: [outside, inside] so that √n = outside·√inside */
function surd(n: number): [number, number] {
  let out = 1, ins = n;
  for (let k = Math.floor(Math.sqrt(n)); k > 1; k--) if (ins % (k * k) === 0) { out *= k; ins /= k * k; break; }
  return [out, ins];
}
/** exact roots of ax² + bx + c = 0 (integers a, b, c) as LaTeX, or null when D < 0 */
export function rootsTex(a: number, b: number, c: number): string | null {
  const D = b * b - 4 * a * c;
  if (D < 0) return null;
  const [o, m] = surd(D), den = 2 * a;
  if (m === 1 || D === 0) {
    const r1 = fr(-b - o * (D === 0 ? 0 : 1), den), r2_ = fr(-b + o * (D === 0 ? 0 : 1), den);
    return D === 0 ? `x=${r1}` : `x=${r1}\\ \\text{or}\\ x=${r2_}`;
  }
  let g = gcd(gcd(Math.abs(b), o), Math.abs(den));
  if (den < 0) g = -g;
  const B = -b / g, O = Math.abs(o / g), Den = den / g;
  const rad = `${O === 1 ? "" : O}\\sqrt{${m}}`;
  const top = B === 0 ? `\\pm${rad}` : `${B}\\pm${rad}`;
  return Den === 1 ? `x=${top}` : `x=\\dfrac{${top}}{${Den}}`;
}
const realRoots = (a: number, b: number, c: number) => {
  const D = b * b - 4 * a * c;
  if (D < 0) return [];
  if (D === 0) return [-b / (2 * a)];
  return [(-b - Math.sqrt(D)) / (2 * a), (-b + Math.sqrt(D)) / (2 * a)].sort((p, q) => p - q);
};
const par = (v: number) => (v < 0 ? `(${v})` : String(v));
const bk = (v: number) => `(${v})`;
/** a view that shows the vertex, the roots and the y-intercept */
function viewFor(a: number, b: number, c: number, extra: number[] = []): View {
  const h = -b / (2 * a), k = a * h * h + b * h + c, rs = realRoots(a, b, c);
  const xs = [h - 4, h + 4, ...rs.map((r) => r - 1.5), ...rs.map((r) => r + 1.5), 0];
  const xmin = Math.floor(Math.min(...xs)), xmax = Math.ceil(Math.max(...xs));
  const ys = [k, c, 0, ...extra];
  const lo = Math.min(...ys), hi = Math.max(...ys), pad = Math.max(2, (hi - lo) * 0.15);
  return { xmin, xmax, ymin: Math.max(-60, Math.floor(lo - pad)), ymax: Math.min(60, Math.ceil(hi + pad)) };
}
const stepFor = (v: View) => (v.ymax - v.ymin > 40 ? 5 : v.ymax - v.ymin > 20 ? 2 : 1);

/* ---------------------------------------------------------------- 5.1 solving by factoring */

export function ZeroProduct({ init = [1, -2, 5] }: { init?: [number, number, number] }) {
  const [a, setA] = useState(init[0]), [r, setR] = useState(init[1]), [s, setS] = useState(init[2]);
  const [shape, setShape] = useState<"std" | "moved">("moved");
  const b = -a * (r + s), c = a * r * s;
  const br = (z: number) => (z === 0 ? "x" : `(x${z > 0 ? "-" : "+"}${Math.abs(z)})`);
  const A = a === 1 ? "" : String(a);
  // the "not yet in standard form" version: ax² = −bx − c
  const rhs = stdForm(0, -b, -c);
  const v = viewFor(a, b, c);
  const steps = [
    ...(shape === "moved" ? [`Move every term to one side so the other side is 0: \\(${stdForm(a, b, c)}=0\\).`] : []),
    `Factor${a !== 1 ? ` (common factor ${a} first)` : ""}: \\(${A}${br(r)}${br(s)}=0\\).`,
    r === s ? `A product is 0 only when a factor is 0: \\(x${r > 0 ? "-" : "+"}${Math.abs(r)}=0\\).` : `A product is 0 only when a factor is 0: \\(${br(r).replace(/[()]/g, "")}=0\\) or \\(${br(s).replace(/[()]/g, "")}=0\\).`,
    r === s ? `One (double) root: \\(x=${r}\\).` : `Roots: \\(x=${Math.min(r, s)}\\) or \\(x=${Math.max(r, s)}\\).`,
  ];
  return (
    <WidgetCard title="Solving by factoring" subtitle="standard form = 0 → factor → set each factor to 0">
      <Row gap={10}>
        <Slider label="common factor" value={a} min={1} max={3} onChange={setA} color={C.blue} />
        <Slider label="root r" value={r} min={-7} max={7} onChange={setR} color={C.red} />
        <Slider label="root s" value={s} min={-7} max={7} onChange={setS} color={C.red} />
      </Row>
      <Segmented options={[{ value: "moved", label: "equation as given" }, { value: "std", label: "already = 0" }]} value={shape} onChange={setShape} />
      <div style={{ textAlign: "center", fontSize: 18, margin: "6px 0" }}>
        <MathText html={shape === "moved" ? `\\(${A}x^2=${rhs}\\)` : `\\(${stdForm(a, b, c)}=0\\)`} />
      </div>
      <ol style={{ margin: "6px 0 6px 20px", lineHeight: 1.9 }}>{steps.map((t, i) => <li key={i}><MathText html={t} /></li>)}</ol>
      <Curves view={v} label="Roots are x-intercepts" step={stepFor(v)} fs={[{ f: (x) => a * x * x + b * x + c, color: C.violet }]}>
        {(X, Y) => <>{dot(X, Y, r, 0, C.red, `x = ${r}`, "r")}{s !== r && dot(X, Y, s, 0, C.red, `x = ${s}`, "s")}</>}
      </Curves>
      <Readout tone="green"><MathText html={`The roots of \\(${stdForm(a, b, c)}=0\\) are the x-intercepts (zeros) of \\(y=${stdForm(a, b, c)}\\). ${shape === "moved" ? "Factoring before moving the terms would not work: the zero product property needs 0 on one side." : ""}`} /></Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.2 completing the square to solve */

export function SquareSolve({ init = [3, 2] }: { init?: [number, number] }) {
  const [p, setP] = useState(init[0]), [c, setC] = useState(init[1]);
  const b = 2 * p, rhs = p * p - c;
  const pTex = p === 0 ? "x" : `(x${p > 0 ? "+" : "-"}${Math.abs(p)})`;
  const [o, m] = rhs > 0 ? surd(rhs) : [0, 0];
  const radTex = rhs === 0 ? "0" : m === 1 ? String(o) : `${o === 1 ? "" : o}\\sqrt{${m}}`;
  const steps = [
    `Move the constant: \\(x^2${b === 0 ? "" : `${b > 0 ? "+" : ""}${b}x`}=${-c}\\).`,
    `Add \\(\\left(\\tfrac{${b}}{2}\\right)^2=${p * p}\\) to <em>both</em> sides: \\(x^2${b === 0 ? "" : `${b > 0 ? "+" : ""}${b}x`}+${p * p}=${-c}+${p * p}\\).`,
    `Write the left side as a square: \\(${pTex}^2=${rhs}\\).`,
    rhs < 0 ? `A square cannot equal \\(${rhs}\\) (a negative number), so there are <strong>no real roots</strong>.`
      : rhs === 0 ? `Square root: \\(x${p === 0 ? "" : p > 0 ? `+${p}` : `-${-p}`}=0\\), so \\(x=${-p}\\) (one double root).`
        : `Square root of both sides — remember \\(\\pm\\): \\(x${p === 0 ? "" : p > 0 ? `+${p}` : `-${-p}`}=\\pm${radTex}\\), so \\(x=${p === 0 ? "" : -p}\\pm${radTex}\\).`,
  ];
  const rs = realRoots(1, b, c);
  const v = viewFor(1, b, c);
  return (
    <WidgetCard title="Completing the square to solve" subtitle="make a perfect square, then take the square root of both sides">
      <Row gap={10}>
        <Slider label="half of b" value={p} min={-6} max={6} onChange={setP} color={C.blue} />
        <Slider label="c" value={c} min={-12} max={12} onChange={setC} color={C.green} />
      </Row>
      <div style={{ textAlign: "center", fontSize: 18, margin: "6px 0" }}><MathText html={`\\(${stdForm(1, b, c)}=0\\)`} /></div>
      <ol style={{ margin: "6px 0 6px 20px", lineHeight: 1.9 }}>{steps.map((t, i) => <li key={i}><MathText html={t} /></li>)}</ol>
      <Curves view={v} label="Completing the square" step={stepFor(v)} fs={[{ f: (x) => x * x + b * x + c, color: C.violet }]}>
        {(X, Y) => <>{rs.map((x, i) => dot(X, Y, x, 0, C.red, `${r2(x)}`, i))}{dot(X, Y, -p, -rhs, C.blue, `V(${-p}, ${-rhs})`, "v")}</>}
      </Curves>
      <Readout tone={rhs < 0 ? "amber" : "green"}>
        <MathText html={rhs < 0 ? `The vertex \\((${-p}, ${-rhs})\\) is above the x-axis and the parabola opens up, so it never reaches \\(y=0\\).`
          : `Roots ${rs.map((x) => `\\(${r2(x)}\\)`).join(" and ")} (to two decimals). The number after the \\(=\\) in step 3, \\(${rhs}\\), is how far the vertex is below the x-axis.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.3 the quadratic formula */

export function FormulaLab({ init = [2, -3, -5] }: { init?: [number, number, number] }) {
  const [a, setA] = useState(init[0]), [b, setB] = useState(init[1]), [c, setC] = useState(init[2]);
  const A = a === 0 ? 1 : a, D = b * b - 4 * A * c, exact = rootsTex(A, b, c), rs = realRoots(A, b, c);
  const v = viewFor(A, b, c);
  return (
    <WidgetCard title="The quadratic formula" subtitle="x = (−b ± √(b² − 4ac)) / 2a works for every ax² + bx + c = 0">
      <Row gap={10}>
        <Slider label="a" value={a} min={-4} max={4} onChange={(x) => setA(x === 0 ? 1 : x)} color={C.blue} />
        <Slider label="b" value={b} min={-10} max={10} onChange={setB} color={C.red} />
        <Slider label="c" value={c} min={-10} max={10} onChange={setC} color={C.green} />
      </Row>
      <div style={{ textAlign: "center", fontSize: 18, margin: "6px 0" }}><MathText html={`\\(${stdForm(A, b, c)}=0\\qquad a=${A},\\ b=${b},\\ c=${c}\\)`} /></div>
      <div style={{ textAlign: "center", fontSize: 17, overflowX: "auto" }}>
        <MathText block html={`\\[x=\\frac{-${par(b)}\\pm\\sqrt{${par(b)}^2-4${bk(A)}${bk(c)}}}{2${bk(A)}}=\\frac{${-b}\\pm\\sqrt{${D}}}{${2 * A}}\\]`} />
      </div>
      <Curves view={v} label="Quadratic formula" step={stepFor(v)} fs={[{ f: (x) => A * x * x + b * x + c, color: C.violet }]}>
        {(X, Y) => <>{rs.map((x, i) => dot(X, Y, x, 0, C.red, r2(x), i))}</>}
      </Curves>
      <Readout tone={D < 0 ? "amber" : "green"}>
        <MathText html={D < 0 ? `\\(b^2-4ac=${D}\\) is negative. No real number squares to a negative, so there are no real roots — the parabola does not cross the x-axis.`
          : `Exact: \\(${exact}\\). Decimal: ${rs.map((x) => `\\(x\\approx${r2(x)}\\)`).join(" and ")}. ${D > 0 && Number.isInteger(Math.sqrt(D)) ? "The discriminant is a perfect square, so the equation could also be solved by factoring." : ""}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.4 the discriminant */

export function DiscriminantLab({ init = [1, -4, 1] }: { init?: [number, number, number] }) {
  const [a, setA] = useState(init[0]), [b, setB] = useState(init[1]), [c, setC] = useState(init[2]);
  const A = a === 0 ? 1 : a, D = b * b - 4 * A * c, rs = realRoots(A, b, c);
  const v: View = { xmin: -10, xmax: 10, ymin: -12, ymax: 12 };
  const tone = D > 0 ? C.green : D === 0 ? C.amber : C.red;
  const W = 460, lim = 60, Xd = (d: number) => 20 + ((Math.max(-lim, Math.min(lim, d)) + lim) / (2 * lim)) * (W - 40);
  return (
    <WidgetCard title="The discriminant" subtitle="D = b² − 4ac: positive → 2 real roots, zero → 1, negative → none (non-real roots)">
      <Row gap={10}>
        <Slider label="a" value={a} min={-3} max={3} onChange={(x) => setA(x === 0 ? 1 : x)} color={C.blue} />
        <Slider label="b" value={b} min={-8} max={8} onChange={setB} color={C.red} />
        <Slider label="c" value={c} min={-8} max={8} onChange={setC} color={C.green} />
      </Row>
      <div style={{ textAlign: "center", fontSize: 18, margin: "6px 0" }}><MathText html={`\\(${stdForm(A, b, c)}=0\\qquad D=${par(b)}^2-4${bk(A)}${bk(c)}=${D}\\)`} /></div>
      <svg viewBox={`0 0 ${W} 54`} style={{ width: "100%", maxWidth: W, display: "block", margin: "0 auto" }} role="img" aria-label="Discriminant number line">
        <rect x={20} y={18} width={Xd(0) - 20} height={10} fill={C.redSoft} />
        <rect x={Xd(0)} y={18} width={W - 20 - Xd(0)} height={10} fill={C.greenSoft} />
        <line x1={Xd(0)} y1={12} x2={Xd(0)} y2={34} stroke={C.amber} strokeWidth={3} />
        <text x={Xd(-lim / 2)} y={48} fontSize={12} textAnchor="middle" fill={C.red}>D &lt; 0: no real roots</text>
        <text x={Xd(0)} y={10} fontSize={12} textAnchor="middle" fill={C.amber}>D = 0</text>
        <text x={Xd(lim / 2)} y={48} fontSize={12} textAnchor="middle" fill={C.green}>D &gt; 0: two real roots</text>
        <circle cx={Xd(D)} cy={23} r={8} fill={tone} stroke="#fff" strokeWidth={2} />
      </svg>
      <Curves view={v} label="Discriminant and graph" step={2} fs={[{ f: (x) => A * x * x + b * x + c, color: C.violet }]}>
        {(X, Y) => <>{rs.map((x, i) => dot(X, Y, x, 0, tone, undefined, i))}{dot(X, Y, -b / (2 * A), D === 0 ? 0 : -D / (4 * A), C.blue, "V", "v")}</>}
      </Curves>
      <Readout tone={D > 0 ? "green" : D === 0 ? "amber" : "red"}>
        <MathText html={D > 0 ? `\\(D=${D}>0\\): two real roots — the parabola crosses the x-axis twice. ${Number.isInteger(Math.sqrt(D)) ? "D is a perfect square, so the roots are rational (the equation factors)." : "D is not a perfect square, so the roots are irrational."}`
          : D === 0 ? `\\(D=0\\): one real root (a double root) — the vertex sits on the x-axis.`
            : `\\(D=${D}\\lt 0\\): \\(\\sqrt{${D}}\\) is not a real number, so the roots are non-real. The vertex is ${A > 0 ? "above" : "below"} the x-axis and the parabola opens ${A > 0 ? "up" : "down"}, so it never meets it.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.5 height intervals */

export function HeightInterval({ init = [20, 2, 15] }: { init?: [number, number, number] }) {
  const [v0, setV] = useState(init[0]), [h0, setH0] = useState(init[1]), [H, setH] = useState(init[2]);
  const f = (t: number) => -4.9 * t * t + v0 * t + h0;
  const tMax = v0 / 9.8, hMax = f(tMax), land = realRoots(-4.9, v0, h0).filter((t) => t >= 0).pop() ?? 0;
  const cross = realRoots(-4.9, v0, h0 - H).filter((t) => t >= -1e-9);
  const view: View = { xmin: -0.5, xmax: Math.ceil(land) + 0.5, ymin: -3, ymax: Math.ceil(hMax / 5) * 5 + 5 };
  const above = H < h0 ? [0, cross[cross.length - 1] ?? 0] : cross.length === 2 ? cross : null;
  return (
    <WidgetCard title="When is it above a height?" subtitle="h = −4.9t² + v₀t + h₀: solve h = H to find when the object is at height H">
      <Row gap={10}>
        <Slider label="launch speed v₀ (m/s)" value={v0} min={6} max={30} onChange={setV} color={C.blue} />
        <Slider label="launch height h₀ (m)" value={h0} min={0} max={20} onChange={setH0} color={C.green} />
        <Slider label="target height H (m)" value={H} min={0} max={50} onChange={setH} color={C.red} />
      </Row>
      <div style={{ textAlign: "center", fontSize: 18 }}><MathText html={`\\(h=-4.9t^2+${v0}t${h0 ? `+${h0}` : ""}\\)`} /></div>
      <Curves view={view} label="Height over time" step={0.5} stepY={view.ymax > 40 ? 5 : 2} fs={[{ f: (t) => (t >= 0 && t <= land ? f(t) : NaN), color: C.violet }, { f: () => H, color: C.red, width: 2, dash: "6 5" }]}>
        {(X, Y) => (
          <>
            {above && <rect x={X(above[0])} y={0} width={Math.max(0, X(above[1]) - X(above[0]))} height={Y(H)} fill={C.greenSoft} opacity={0.6} />}
            {dot(X, Y, tMax, hMax, C.blue, `max ${r2(hMax, 1)} m`, "m")}
            {dot(X, Y, land, 0, C.violet, `lands ${r2(land)} s`, "l")}
            {cross.map((t, i) => dot(X, Y, t, H, C.red, `${r2(t)} s`, i))}
          </>
        )}
      </Curves>
      <Readout tone={above ? "green" : "amber"}>
        <MathText block html={`Maximum height \\(${r2(hMax, 1)}\\) m at \\(t=${r2(tMax)}\\) s (the vertex). It lands when \\(h=0\\): \\(t\\approx${r2(land)}\\) s (reject the negative root).`} />
        <MathText block html={H > hMax ? `\\(-4.9t^2+${v0}t+${h0}=${H}\\) has no real roots: the object never reaches \\(${H}\\) m.`
          : H < h0 ? `It starts above \\(${H}\\) m, so it is above that height from \\(t=0\\) until \\(t\\approx${r2(above![1])}\\) s.`
            : cross.length === 2 ? `Solve \\(-4.9t^2+${v0}t+${h0}=${H}\\): \\(t\\approx${r2(cross[0])}\\) and \\(t\\approx${r2(cross[1])}\\). It is above \\(${H}\\) m between these times — for about \\(${r2(cross[1] - cross[0])}\\) s.`
              : `It touches \\(${H}\\) m only at the top.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.5 maximum area with fixed fencing */

export function FenceArea({ init = 60 }: { init?: number }) {
  const [L, setL] = useState(init), [sides, setSides] = useState<3 | 4>(4);
  const wMax = sides === 4 ? L / 2 : L / 2;
  const [w, setW] = useState(Math.round(L / 6));
  const W_ = Math.min(w, wMax - 1);
  const len = (x: number) => (sides === 4 ? L / 2 - x : L - 2 * x);
  const area = (x: number) => x * len(x);
  const best = sides === 4 ? L / 4 : L / 4;
  const S = 180, sc = S / Math.max(len(W_), W_, 1);
  const view: View = { xmin: -1, xmax: Math.ceil(wMax) + 1, ymin: -area(best) * 0.08, ymax: area(best) * 1.15 };
  return (
    <WidgetCard title="Maximum area with a fixed length of fencing" subtitle="area = width × length is a quadratic in the width — its vertex is the maximum">
      <Row gap={10}>
        <Slider label="fencing (m)" value={L} min={20} max={100} step={4} onChange={setL} color={C.blue} />
        <Slider label="width w (m)" value={W_} min={1} max={Math.floor(wMax) - 1} onChange={setW} color={C.red} />
      </Row>
      <Segmented options={[{ value: 4, label: "fence all 4 sides" }, { value: 3, label: "wall on one side" }]} value={sides} onChange={setSides} />
      <Row gap={14} style={{ alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
        <svg viewBox={`-30 -30 ${len(W_) * sc + 70} ${W_ * sc + 60}`} style={{ width: 230, maxHeight: 260 }} role="img" aria-label="Fenced rectangle">
          {sides === 3 && <line x1={-10} y1={0} x2={len(W_) * sc + 10} y2={0} stroke={C.ink} strokeWidth={7} />}
          <rect x={0} y={0} width={len(W_) * sc} height={W_ * sc} fill={C.greenSoft} stroke="none" />
          <polyline points={sides === 3 ? `0,0 0,${W_ * sc} ${len(W_) * sc},${W_ * sc} ${len(W_) * sc},0` : `0,0 0,${W_ * sc} ${len(W_) * sc},${W_ * sc} ${len(W_) * sc},0 0,0`} fill="none" stroke={C.amber} strokeWidth={3} strokeDasharray="7 4" />
          {sides === 3 && <text x={(len(W_) * sc) / 2} y={-12} fontSize={12} textAnchor="middle" fill={C.ink}>wall</text>}
          <text x={-8} y={(W_ * sc) / 2} fontSize={12} textAnchor="end" fill={C.red}>{W_}</text>
          <text x={(len(W_) * sc) / 2} y={W_ * sc + 18} fontSize={12} textAnchor="middle" fill={C.blue}>{r2(len(W_))}</text>
        </svg>
        <div style={{ flex: "1 1 260px", minWidth: 240 }}>
          <Curves view={view} label="Area against width" step={wMax > 30 ? 5 : 2} stepY={view.ymax > 400 ? Math.ceil(view.ymax / 80) * 5 : 20} fs={[{ f: (x) => (x >= 0 && x <= wMax ? area(x) : NaN), color: C.violet }]}>
            {(X, Y) => <>{dot(X, Y, best, area(best), C.green, "max", "b")}{dot(X, Y, W_, area(W_), C.red, undefined, "w")}</>}
          </Curves>
        </div>
      </Row>
      <Readout tone="green">
        <MathText block html={`Length \\(=${sides === 4 ? `\\tfrac{${L}}{2}-w` : `${L}-2w`}=${r2(len(W_))}\\) m, so \\(A=w(${sides === 4 ? `${L / 2}-w` : `${L}-2w`})=${r2(area(W_))}\\) m².`} />
        <MathText block html={`The zeros are \\(w=0\\) and \\(w=${r2(wMax)}\\); the vertex is halfway, at \\(w=${r2(best)}\\): maximum area \\(${r2(area(best))}\\) m² (${sides === 4 ? "a square" : "the length is twice the width"}).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.6 linear–quadratic systems */

export function LinQuad({ init = [0, -3, 1, 1] }: { init?: [number, number, number, number] }) {
  const [b, setB] = useState(init[0]), [c, setC] = useState(init[1]), [m, setM] = useState(init[2]), [k, setK] = useState(init[3]);
  const B = b - m, Cc = c - k, D = B * B - 4 * Cc, xs = realRoots(1, B, Cc);
  const v: View = { xmin: -8, xmax: 8, ymin: -10, ymax: 14 };
  const tone = D > 0 ? "green" : D === 0 ? "amber" : "red";
  const lineTex = `${m === 0 ? "" : m === 1 ? "x" : m === -1 ? "-x" : `${m}x`}${k === 0 ? (m === 0 ? "0" : "") : `${k > 0 && m !== 0 ? "+" : ""}${k}`}`;
  return (
    <WidgetCard title="Linear–quadratic systems" subtitle="set the expressions equal, rearrange to = 0, and count the roots with the discriminant" tag="Enrichment">
      <Row gap={10}>
        <Slider label="parabola b" value={b} min={-6} max={6} onChange={setB} color={C.violet} />
        <Slider label="parabola c" value={c} min={-8} max={8} onChange={setC} color={C.violet} />
        <Slider label="line slope m" value={m} min={-4} max={4} onChange={setM} color={C.blue} />
        <Slider label="line intercept" value={k} min={-8} max={8} onChange={setK} color={C.blue} />
      </Row>
      <div style={{ textAlign: "center", fontSize: 17 }}>
        <MathText html={`\\(y=${stdForm(1, b, c)}\\) and \\(y=${lineTex}\\) \\(\\;\\Rightarrow\\; ${stdForm(1, b, c)}=${lineTex}\\;\\Rightarrow\\; ${stdForm(1, B, Cc)}=0\\)`} />
      </div>
      <Curves view={v} label="Line and parabola" step={2} fs={[{ f: (x) => x * x + b * x + c, color: C.violet }, { f: (x) => m * x + k, color: C.blue }]}>
        {(X, Y) => <>{xs.map((x, i) => dot(X, Y, x, m * x + k, C.red, `(${r2(x, 1)}, ${r2(m * x + k, 1)})`, i))}</>}
      </Curves>
      <Readout tone={tone}>
        <MathText html={`\\(D=${par(B)}^2-4(1)${bk(Cc)}=${D}\\): ${D > 0 ? "two intersection points (the line is a secant)." : D === 0 ? "one intersection point — the line is tangent to the parabola." : "no intersection points."} ${xs.length ? `Substitute each \\(x\\) into the line to get \\(y\\).` : ""}`} />
      </Readout>
    </WidgetCard>
  );
}
