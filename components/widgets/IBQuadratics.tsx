"use client";

// IB AA SL chapter 3 (linear and quadratic functions) explorers: gradient from two points (with parallel and
// perpendicular lines), linear models and break-even, transformations y = a·f(b(x − h)) + k, the three forms of a
// quadratic, completing the square, the discriminant and the quadratic formula, and a quadratic optimisation model.

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { Plane, r2, type View } from "./Systems";
import { dot } from "./Quadratics";

type Fn = (x: number) => number;
const n2 = (v: number, d = 2) => r2(v, d);
const exact2 = (v: number) => Math.abs(v * 100 - Math.round(v * 100)) < 1e-9;
const sg = (v: number) => (v < 0 ? `-${n2(-v)}` : `+${n2(v)}`);
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
/** y = mx + c as LaTeX */
const lineTex = (m: number, c: number) => `y=${m === 0 ? "" : m === 1 ? "x" : m === -1 ? "-x" : `${n2(m)}x`}${c === 0 ? (m === 0 ? "0" : "") : m === 0 ? n2(c) : sg(c)}`;
/** ax² + bx + c as LaTeX */
const quadTex = (a: number, b: number, c: number) => {
  const t: string[] = [];
  const add = (k: number, s: string) => { if (Math.abs(k) < 1e-12) return; const mag = Math.abs(k) === 1 && s ? "" : n2(Math.abs(k)); t.push(`${k < 0 ? "-" : t.length ? "+" : ""}${mag}${s}`); };
  add(a, "x^2"); add(b, "x"); add(c, "");
  return t.join("") || "0";
};
const V10: View = { xmin: -10, xmax: 10, ymin: -10, ymax: 10 };

/* ---------------------------------------------------------------- 3.1 gradient */

export function IBGradient({ init = [-2, -1, 4, 3] }: { init?: [number, number, number, number] }) {
  const [x1, setX1] = useState(init[0]), [y1, setY1] = useState(init[1]), [x2, setX2] = useState(init[2]), [y2, setY2] = useState(init[3]);
  const [show, setShow] = useState<"none" | "par" | "perp">("none");
  const run = x2 - x1, rise = y2 - y1, vertical = run === 0;
  const m = vertical ? NaN : rise / run, c = vertical ? NaN : y1 - m * x1;
  const f = (x: number) => m * x + c;
  const mp = show === "par" ? m : m === 0 ? NaN : -1 / m;
  return (
    <WidgetCard title="Gradient of a line" subtitle="m = rise ÷ run = (y₂ − y₁)/(x₂ − x₁); parallel lines share m, perpendicular gradients multiply to −1">
      <Row>
        <Slider label="x₁" value={x1} min={-8} max={8} onChange={setX1} color={C.blue} />
        <Slider label="y₁" value={y1} min={-8} max={8} onChange={setY1} color={C.blue} />
      </Row>
      <Row>
        <Slider label="x₂" value={x2} min={-8} max={8} onChange={setX2} color={C.red} />
        <Slider label="y₂" value={y2} min={-8} max={8} onChange={setY2} color={C.red} />
      </Row>
      <Row><Segmented label="through the origin:" value={show} onChange={setShow} options={[{ value: "none", label: "none" }, { value: "par", label: "parallel line" }, { value: "perp", label: "perpendicular line" }]} /></Row>
      <Plane view={V10} label="Gradient" step={1}>
        {(X, Y) => <>
          {vertical ? <line x1={X(x1)} y1={Y(-10)} x2={X(x1)} y2={Y(10)} stroke={C.violet} strokeWidth={3} /> : <path d={pathOf(f, V10, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />}
          {!vertical && <>
            <line x1={X(x1)} y1={Y(y1)} x2={X(x2)} y2={Y(y1)} stroke={C.blue} strokeWidth={2} strokeDasharray="6 4" />
            <line x1={X(x2)} y1={Y(y1)} x2={X(x2)} y2={Y(y2)} stroke={C.red} strokeWidth={2} strokeDasharray="6 4" />
            <text x={(X(x1) + X(x2)) / 2} y={Y(y1) + (rise >= 0 ? 16 : -8)} fontSize={13} fontWeight={700} textAnchor="middle" fill={C.blue}>run {n2(run)}</text>
            <text x={X(x2) + 6} y={(Y(y1) + Y(y2)) / 2} fontSize={13} fontWeight={700} fill={C.red}>rise {n2(rise)}</text>
          </>}
          {show !== "none" && Number.isFinite(mp) && <path d={pathOf((x) => mp * x, V10, X, Y)} fill="none" stroke={C.green} strokeWidth={2.5} strokeDasharray="8 5" />}
          {dot(X, Y, x1, y1, C.blue, `(${x1}, ${y1})`, "a")}{dot(X, Y, x2, y2, C.red, `(${x2}, ${y2})`, "b")}
        </>}
      </Plane>
      <Readout tone={vertical ? "amber" : "blue"}>
        <MathText html={vertical ? `The run is 0, so the gradient is undefined: the line is vertical, \\(x=${x1}\\).` : `\\(m=\\dfrac{${y2}-${y1 < 0 ? `(${y1})` : y1}}{${x2}-${x1 < 0 ? `(${x1})` : x1}}=\\dfrac{${rise}}{${run}}=${n2(m, 3)}\\), so \\(${lineTex(+n2(m, 4), +n2(c, 4))}\\).${show === "par" ? ` Parallel line: gradient \\(${n2(m, 3)}\\).` : show === "perp" ? (m === 0 ? " The perpendicular line is vertical." : ` Perpendicular line: gradient \\(-\\frac{1}{m}=${n2(mp, 3)}\\), and \\(${n2(m, 3)}\\times${n2(mp, 3)}=-1\\).`) : ""}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 3.2 linear models */

export function IBLinearModel({ init = [200, 15, 25] }: { init?: [number, number, number] }) {
  const [fixed, setFixed] = useState(init[0]), [unit, setUnit] = useState(init[1]), [price, setPrice] = useState(init[2]);
  const C1 = (q: number) => fixed + unit * q, R = (q: number) => price * q;
  const be = price > unit ? fixed / (price - unit) : NaN;
  const qmax = Math.max(10, Math.ceil((Number.isFinite(be) ? be : 30) * 1.8 / 5) * 5);
  const ymax = Math.max(R(qmax), C1(qmax)) * 1.1;
  const view: View = { xmin: -qmax * 0.05, xmax: qmax, ymin: -ymax * 0.05, ymax };
  const step = qmax <= 20 ? 2 : qmax <= 60 ? 5 : 10;
  const stepY = Math.max(1, Math.round(ymax / 8 / 50) * 50) || 50;
  return (
    <WidgetCard title="Linear models: cost, revenue and break-even" subtitle="C(q) = fixed + cost per item · q; R(q) = price · q; break-even where they meet">
      <Row>
        <Slider label="fixed cost" value={fixed} min={0} max={600} step={20} onChange={setFixed} color={C.red} />
        <Slider label="cost/item" value={unit} min={0} max={40} onChange={setUnit} color={C.red} />
        <Slider label="price/item" value={price} min={1} max={60} onChange={setPrice} color={C.green} />
      </Row>
      <Plane view={view} label="Cost and revenue" step={step} stepY={stepY}>
        {(X, Y) => <>
          <path d={pathOf(C1, view, X, Y, 0, qmax)} fill="none" stroke={C.red} strokeWidth={3} />
          <path d={pathOf(R, view, X, Y, 0, qmax)} fill="none" stroke={C.green} strokeWidth={3} />
          {Number.isFinite(be) && be <= qmax && dot(X, Y, be, R(be), C.violet, `(${n2(be, 1)}, ${n2(R(be), 0)})`, "be")}
        </>}
      </Plane>
      <Readout tone={Number.isFinite(be) ? "green" : "amber"}>
        <MathText html={`\\(C(q)=${fixed}+${unit}q\\) (red), \\(R(q)=${price}q\\) (green). ${Number.isFinite(be) ? `Break-even: \\(${price}q=${fixed}+${unit}q\\Rightarrow q=\\dfrac{${fixed}}{${price - unit}}\\approx${n2(be, 2)}\\). The gradient ${price - unit} is the profit on each extra item; the fixed cost is the y-intercept of C.` : "The price does not exceed the cost per item, so the company never breaks even."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 3.3 transformations */

type Par = "sq" | "abs" | "root" | "recip" | "cube";
const PARS: Record<Par, { tex: string; f: Fn; label: string }> = {
  sq: { tex: "x^2", f: (x) => x * x, label: "x²" },
  abs: { tex: "|x|", f: (x) => Math.abs(x), label: "|x|" },
  root: { tex: "\\sqrt{x}", f: (x) => (x >= 0 ? Math.sqrt(x) : NaN), label: "√x" },
  recip: { tex: "\\tfrac1x", f: (x) => (x === 0 ? NaN : 1 / x), label: "1/x" },
  cube: { tex: "x^3", f: (x) => x ** 3, label: "x³" },
};
export function IBTransform({ init = "sq" }: { init?: Par }) {
  const [p, setP] = useState<Par>(init);
  const [a, setA] = useState(1), [b, setB] = useState(1), [h, setH] = useState(0), [k, setK] = useState(0);
  const P = PARS[p];
  const g = (x: number) => a * P.f(b * (x - h)) + k;
  const parts: string[] = [];
  if (h !== 0) parts.push(`translate ${h > 0 ? "right" : "left"} ${Math.abs(h)}`);
  if (k !== 0) parts.push(`translate ${k > 0 ? "up" : "down"} ${Math.abs(k)}`);
  if (Math.abs(a) !== 1) parts.push(`vertical stretch, factor ${n2(Math.abs(a))}`);
  if (a < 0) parts.push("reflect in the x-axis");
  if (Math.abs(b) !== 1) parts.push(`horizontal stretch, factor ${n2(1 / Math.abs(b))}`);
  if (b < 0) parts.push("reflect in the y-axis");
  const inner = `${b === 1 ? "" : b === -1 ? "-" : n2(b)}${h === 0 ? "x" : `(x${sg(-h)})`}`;
  const gTex = `${a === 1 ? "" : a === -1 ? "-" : n2(a)}${P.tex.replace("x", `\\left(${inner}\\right)`)}${k === 0 ? "" : sg(k)}`;
  return (
    <WidgetCard title="Transformations of graphs" subtitle="y = a·f(b(x − h)) + k: a and k act on outputs (vertical); b and h act on inputs (horizontal)">
      <Row><Segmented label="parent f(x) =" value={p} onChange={setP} options={(Object.keys(PARS) as Par[]).map((key) => ({ value: key, label: PARS[key].label }))} /></Row>
      <Row>
        <Slider label="a" value={a} min={-3} max={3} step={0.5} onChange={(v) => setA(v === 0 ? 0.5 : v)} format={(v) => n2(v)} color={C.red} />
        <Slider label="b" value={b} min={-3} max={3} step={0.5} onChange={(v) => setB(v === 0 ? 0.5 : v)} format={(v) => n2(v)} color={C.amber} />
      </Row>
      <Row>
        <Slider label="h" value={h} min={-6} max={6} onChange={setH} color={C.blue} />
        <Slider label="k" value={k} min={-6} max={6} onChange={setK} color={C.green} />
      </Row>
      <Plane view={V10} label="Transformations" step={1}>
        {(X, Y) => <>
          <path d={pathOf(P.f, V10, X, Y)} fill="none" stroke="#cbd5e1" strokeWidth={2.5} />
          <path d={pathOf(g, V10, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`Grey: \\(y=${P.tex}\\). Violet: \\(y=${gTex}\\). ${parts.length ? `From the parent: ${parts.join("; ")}.` : "No transformation yet — move a slider."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 3.4 the three forms of a quadratic */

export function IBQuadratic({ init = [1, 1, -4] }: { init?: [number, number, number] }) {
  const [a, setA] = useState(init[0]), [h, setH] = useState(init[1]), [k, setK] = useState(init[2]);
  const b = -2 * a * h, c = a * h * h + k, D = b * b - 4 * a * c;
  const f = (x: number) => a * (x - h) ** 2 + k;
  const roots = D < -1e-9 ? [] : D < 1e-9 ? [h] : [h - Math.sqrt(D) / (2 * Math.abs(a)), h + Math.sqrt(D) / (2 * Math.abs(a))];
  const vTex = `${a === 1 ? "" : a === -1 ? "-" : n2(a)}(x${sg(-h).replace("+0", "")})^2${k === 0 ? "" : sg(k)}`.replace("(x)", "x");
  const fTex = roots.length === 2 ? `${a === 1 ? "" : a === -1 ? "-" : n2(a)}(x${sg(-roots[0])})(x${sg(-roots[1])})` : roots.length === 1 ? vTex : "";
  return (
    <WidgetCard title="Graphing quadratics" subtitle="vertex form shows the turning point; factored form the zeros; standard form the y-intercept">
      <Row>
        <Slider label="a" value={a} min={-3} max={3} step={0.5} onChange={(v) => setA(v === 0 ? 0.5 : v)} format={(v) => n2(v)} color={C.red} />
        <Slider label="h" value={h} min={-6} max={6} onChange={setH} color={C.blue} />
        <Slider label="k" value={k} min={-8} max={8} onChange={setK} color={C.green} />
      </Row>
      <Plane view={V10} label="Quadratic" step={1}>
        {(X, Y) => <>
          <line x1={X(h)} y1={Y(-10)} x2={X(h)} y2={Y(10)} stroke={C.faint} strokeDasharray="6 5" />
          <path d={pathOf(f, V10, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
          {dot(X, Y, h, k, C.amber, `(${h}, ${k})`, "v")}
          {Math.abs(c) <= 10 && dot(X, Y, 0, c, C.green, `(0, ${n2(c)})`, "c")}
          {roots.map((r, i) => dot(X, Y, r, 0, C.blue, `(${n2(r)}, 0)`, "r" + i))}
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`Vertex form \\(y=${vTex}\\): vertex \\((${h},${k})\\), axis \\(x=${h}\\), ${a > 0 ? "minimum" : "maximum"} \\(${k}\\).<br/>Standard form \\(y=${quadTex(a, b, c)}\\): y-intercept \\(${n2(c)}\\).<br/>${roots.length === 2 ? `Factored form \\(y=${fTex}\\): zeros \\(${n2(roots[0])}\\) and \\(${n2(roots[1])}\\).` : roots.length === 1 ? "One repeated zero: the vertex is on the x-axis." : "No real zeros (the parabola misses the x-axis), so no real factored form."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 3.5 completing the square */

export function IBSquare({ init = [6, 5] }: { init?: [number, number] }) {
  const [b, setB] = useState(init[0]), [c, setC] = useState(init[1]);
  const half = b / 2, k = c - half * half;
  const f = (x: number) => x * x + b * x + c;
  const S = 260, u = S / (Math.abs(b) / 2 + 6);
  const side = 4; // a sample square x for the area picture
  const roots = k > 1e-9 ? [] : [-half - Math.sqrt(-k), -half + Math.sqrt(-k)];
  return (
    <WidgetCard title="Completing the square" subtitle="x² + bx + c = (x + b/2)² − (b/2)² + c">
      <Row>
        <Slider label="b" value={b} min={-10} max={10} onChange={setB} color={C.blue} />
        <Slider label="c" value={c} min={-12} max={12} onChange={setC} color={C.green} />
      </Row>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", alignItems: "center" }}>
        <svg viewBox={`0 0 ${S + 20} ${S + 20}`} style={{ width: 230, height: 230 }} role="img" aria-label="Area model">
          <rect x={10} y={10} width={side * u} height={side * u} fill={C.blueSoft} stroke={C.blue} />
          <text x={10 + (side * u) / 2} y={10 + (side * u) / 2} fontSize={16} textAnchor="middle" fill={C.blue}>x²</text>
          {half !== 0 && <>
            <rect x={10 + side * u} y={10} width={Math.abs(half) * u} height={side * u} fill={C.greenSoft} stroke={C.green} />
            <rect x={10} y={10 + side * u} width={side * u} height={Math.abs(half) * u} fill={C.greenSoft} stroke={C.green} />
            <rect x={10 + side * u} y={10 + side * u} width={Math.abs(half) * u} height={Math.abs(half) * u} fill={C.amberSoft} stroke={C.amber} strokeDasharray="4 3" />
            <text x={10 + side * u + (Math.abs(half) * u) / 2} y={10 + (side * u) / 2} fontSize={13} textAnchor="middle" fill={C.green}>{n2(half)}x</text>
            <text x={10 + (side * u) / 2} y={10 + side * u + (Math.abs(half) * u) / 2 + 4} fontSize={13} textAnchor="middle" fill={C.green}>{n2(half)}x</text>
            <text x={10 + side * u + (Math.abs(half) * u) / 2} y={10 + side * u + (Math.abs(half) * u) / 2 + 4} fontSize={12} textAnchor="middle" fill={C.amber}>{n2(half * half)}</text>
          </>}
        </svg>
        <div style={{ flex: "1 1 260px", minWidth: 0 }}>
          <Plane view={V10} label="Completed square" step={1}>
            {(X, Y) => <>
              <path d={pathOf(f, V10, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
              {dot(X, Y, -half, k, C.amber, `(${n2(-half)}, ${n2(k)})`, "v")}
              {roots.map((r, i) => dot(X, Y, r, 0, C.blue, undefined, i))}
            </>}
          </Plane>
        </div>
      </div>
      <Readout tone="blue">
        <MathText html={`\\(${quadTex(1, b, c)}=\\left(x${sg(half)}\\right)^2-${n2(half * half)}${sg(c)}=\\left(x${sg(half)}\\right)^2${k === 0 ? "" : sg(k)}\\). The amber corner \\(\\left(\\frac b2\\right)^2=${n2(half * half)}\\) is what completes the square. Vertex \\((${n2(-half)},${n2(k)})\\). ${roots.length ? `Solving \\(=0\\): \\(x=${n2(-half)}\\pm${Number.isInteger(Math.sqrt(-k)) ? Math.sqrt(-k) : `\\sqrt{${n2(-k)}}`}${roots.every(exact2) ? "=" : "\\approx"}${n2(roots[0])},\\ ${n2(roots[1])}\\).` : "The squared term is never negative and k > 0, so there are no real solutions."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 3.6 the discriminant */

export function IBDiscriminant({ init = [1, -2, -3] }: { init?: [number, number, number] }) {
  const [a, setA] = useState(init[0]), [b, setB] = useState(init[1]), [c, setC] = useState(init[2]);
  const D = b * b - 4 * a * c, f = (x: number) => a * x * x + b * x + c;
  const roots = D < 0 ? [] : D === 0 ? [-b / (2 * a)] : [(-b - Math.sqrt(D)) / (2 * a), (-b + Math.sqrt(D)) / (2 * a)].sort((p, q) => p - q);
  const tone = D > 0 ? "green" : D === 0 ? "amber" : "red";
  const isSq = D >= 0 && Number.isInteger(Math.sqrt(D));
  return (
    <WidgetCard title="The quadratic formula and the discriminant" subtitle="x = (−b ± √Δ)/(2a) with Δ = b² − 4ac: Δ > 0 two roots, Δ = 0 one, Δ < 0 none">
      <Row>
        <Slider label="a" value={a} min={-4} max={4} onChange={(v) => setA(v === 0 ? 1 : v)} color={C.red} />
        <Slider label="b" value={b} min={-8} max={8} onChange={setB} color={C.blue} />
        <Slider label="c" value={c} min={-8} max={8} onChange={setC} color={C.green} />
      </Row>
      <Plane view={V10} label="Discriminant" step={1}>
        {(X, Y) => <>
          <path d={pathOf(f, V10, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
          {roots.map((r, i) => dot(X, Y, r, 0, D === 0 ? C.amber : C.green, `${n2(r)}`, i))}
        </>}
      </Plane>
      <Readout tone={tone}>
        <MathText html={`\\(${quadTex(a, b, c)}=0\\): \\(\\Delta=${b < 0 ? `(${b})` : b}^2-4(${a})(${c})=${D}\\). ${D > 0 ? `Two real roots${isSq ? " (Δ is a perfect square, so they are rational)" : ""}: \\(x=\\dfrac{${-b}\\pm${isSq ? Math.sqrt(D) : `\\sqrt{${D}}`}}{${2 * a}}${roots.every(exact2) ? "=" : "\\approx"}${roots.map((r) => n2(r)).join(",\\ ")}\\).` : D === 0 ? `One repeated root \\(x=${n2(roots[0])}\\): the vertex touches the x-axis.` : "No real roots: the parabola does not meet the x-axis."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 3.7 applications: maximising an area */

export function IBQuadApps({ init = [60] }: { init?: [number] }) {
  const [L, setL] = useState(init[0]);
  const [x, setX] = useState(10);
  const xm = L / 2, A = (t: number) => t * (L - 2 * t); // fence on three sides, wall on the fourth
  const best = L / 4, Amax = A(best);
  const xx = Math.min(x, xm);
  const view: View = { xmin: -xm * 0.05, xmax: xm * 1.05, ymin: -Amax * 0.08, ymax: Amax * 1.2 };
  const sc = 150 / Math.max(L - 2 * xx, xx, 1);
  return (
    <WidgetCard title="A quadratic model: the largest enclosure" subtitle="fence on three sides of a rectangle against a wall: A(x) = x(L − 2x)">
      <Row>
        <Slider label="fence L (m)" value={L} min={20} max={100} step={4} onChange={(v) => { setL(v); if (x > v / 2) setX(v / 4); }} color={C.blue} />
        <Slider label="width x (m)" value={xx} min={0.5} max={xm - 0.5} step={0.5} onChange={setX} format={(v) => n2(v)} color={C.red} />
      </Row>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center", justifyContent: "center" }}>
        <svg viewBox="0 0 200 190" style={{ width: 200, height: 190 }} role="img" aria-label="Enclosure">
          <line x1={10} y1={20} x2={190} y2={20} stroke={C.ink} strokeWidth={5} />
          <text x={100} y={14} fontSize={11} textAnchor="middle" fill={C.muted}>wall</text>
          <rect x={100 - ((L - 2 * xx) * sc) / 2} y={20} width={(L - 2 * xx) * sc} height={xx * sc} fill={C.greenSoft} stroke={C.green} strokeWidth={2.5} />
          <text x={100} y={20 + xx * sc + 14} fontSize={12} textAnchor="middle" fill={C.green}>{n2(L - 2 * xx)} m</text>
          <text x={100 - ((L - 2 * xx) * sc) / 2 - 4} y={20 + (xx * sc) / 2} fontSize={12} textAnchor="end" fill={C.red}>{n2(xx)}</text>
        </svg>
        <div style={{ flex: "1 1 260px", minWidth: 0 }}>
          <Plane view={view} label="Area function" step={Math.max(1, Math.round(xm / 10))} stepY={Math.max(10, Math.round(Amax / 6 / 10) * 10)}>
            {(X, Y) => <>
              <path d={pathOf(A, view, X, Y, 0, xm)} fill="none" stroke={C.violet} strokeWidth={3} />
              {dot(X, Y, best, Amax, C.amber, `max (${n2(best)}, ${n2(Amax)})`, "m")}
              {dot(X, Y, xx, A(xx), C.red, undefined, "p")}
            </>}
          </Plane>
        </div>
      </div>
      <Readout tone="green">
        <MathText html={`\\(A(x)=x(${L}-2x)=-2x^2+${L}x\\). At \\(x=${n2(xx)}\\): \\(A=${n2(A(xx))}\\) m². The vertex is halfway between the zeros \\(0\\) and \\(${n2(xm)}\\): \\(x=${n2(best)}\\) gives the maximum area \\(${n2(Amax)}\\) m².`} />
      </Readout>
    </WidgetCard>
  );
}
