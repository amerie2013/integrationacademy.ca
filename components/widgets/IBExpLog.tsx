"use client";

// IB AA SL chapter 9 (exponentials and logarithms) explorers: exponent laws on a numeric example, transformed
// exponential graphs with their asymptote, compound interest approaching continuous growth and e, the logarithm as the
// reflection of b^x in y = x, the laws of logarithms checked numerically, solving a^x = c graphically, and the
// tangent to e^x or ln x with its gradient.

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
  for (let i = 0; i <= 600; i++) {
    const x = a + ((b - a) * i) / 600, y = f(x);
    if (!Number.isFinite(y) || y > v.ymax + band || y < v.ymin - band) { pen = false; continue; }
    d += `${pen ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)} `; pen = true;
  }
  return d;
}
const hline = (X: (x: number) => number, Y: (y: number) => number, v: View, y: number, color: string) =>
  <line x1={X(v.xmin)} y1={Y(y)} x2={X(v.xmax)} y2={Y(y)} stroke={color} strokeWidth={1.8} strokeDasharray="7 5" />;
const vline = (X: (x: number) => number, Y: (y: number) => number, v: View, x: number, color: string) =>
  <line x1={X(x)} y1={Y(v.ymin)} x2={X(x)} y2={Y(v.ymax)} stroke={color} strokeWidth={1.8} strokeDasharray="7 5" />;

/* ---------------------------------------------------------------- 9.1 exponent laws */

const LAWS: { label: string; tex: (a: number, m: number, n: number) => string; val: (a: number, m: number, n: number) => number; law: string }[] = [
  { label: "aᵐ × aⁿ", tex: (a, m, n) => `${a}^{${m}}\\times${a}^{${n}}`, val: (a, m, n) => a ** (m + n), law: "a^m\\times a^n=a^{m+n}" },
  { label: "aᵐ ÷ aⁿ", tex: (a, m, n) => `${a}^{${m}}\\div${a}^{${n}}`, val: (a, m, n) => a ** (m - n), law: "a^m\\div a^n=a^{m-n}" },
  { label: "(aᵐ)ⁿ", tex: (a, m, n) => `\\left(${a}^{${m}}\\right)^{${n}}`, val: (a, m, n) => a ** (m * n), law: "(a^m)^n=a^{mn}" },
  { label: "a^(m/n)", tex: (a, m, n) => `${a}^{${m}/${n}}`, val: (a, m, n) => a ** (m / n), law: "a^{m/n}=\\left(\\sqrt[n]{a}\\right)^m" },
];

export function IBExpLaws({ init = [0, 2, 3, 2] }: { init?: [number, number, number, number] }) {
  const [k, setK] = useState(init[0]), [a, setA] = useState(init[1]), [m, setM] = useState(init[2]), [n, setN] = useState(init[3]);
  const L = LAWS[k], nn = k === 3 && n === 0 ? 1 : n;
  const exp = k === 0 ? `${m}+${n < 0 ? `(${n})` : n}=${m + n}` : k === 1 ? `${m}-${n < 0 ? `(${n})` : n}=${m - n}` : k === 2 ? `${m}\\times${n < 0 ? `(${n})` : n}=${m * n}` : `\\tfrac{${m}}{${nn}}`;
  const direct = k === 0 ? a ** m * a ** n : k === 1 ? a ** m / a ** n : k === 2 ? (a ** m) ** n : Math.pow(a, 1 / nn) ** m;
  return (
    <WidgetCard title="Laws of exponents" subtitle="the laws follow from counting factors; check each law numerically, including zero, negative and fractional powers">
      <Row><Segmented label="law:" value={k} onChange={setK} options={LAWS.map((x, i) => ({ value: i, label: x.label }))} /></Row>
      <Row>
        <Slider label="a" value={a} min={2} max={9} step={1} onChange={setA} color={C.violet} />
        <Slider label="m" value={m} min={-3} max={4} step={1} onChange={setM} color={C.blue} />
        <Slider label="n" value={nn} min={k === 3 ? 1 : -3} max={4} step={1} onChange={setN} color={C.green} />
      </Row>
      <Readout tone="blue">
        <MathText html={`\\(${L.law}\\). Here \\(${L.tex(a, m, nn)}=${a}^{${exp}}\\approx${n2(L.val(a, m, nn), 5)}\\). Working out each part directly gives \\(${n2(direct, 5)}\\) — the same. ${m === 0 ? "Note \\(a^0=1\\). " : ""}${m < 0 ? `Note \\(${a}^{${m}}=\\dfrac{1}{${a}^{${-m}}}\\). ` : ""}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 9.2 exponential graphs and e */

export function IBExpGraph({ init = [1, 2, 0, 0] }: { init?: [number, number, number, number] }) {
  const [a, setA] = useState(init[0]), [b, setB] = useState(init[1]), [h, setH] = useState(init[2]), [k, setK] = useState(init[3]);
  const f = (x: number) => a * b ** (x - h) + k, v: View = { xmin: -6, xmax: 6, ymin: -8, ymax: 12 };
  const y0 = f(0), grow = (a > 0) === (b > 1);
  return (
    <WidgetCard title="Exponential graphs" subtitle="y = a·bˣ⁻ʰ + k: b > 1 grows, 0 < b < 1 decays; the horizontal asymptote is y = k">
      <Row>
        <Slider label="a" value={a} min={-3} max={3} step={0.5} onChange={(x) => setA(x === 0 ? 0.5 : x)} color={C.violet} />
        <Slider label="b" value={b} min={0.25} max={4} step={0.25} onChange={(x) => setB(x === 1 ? 1.25 : x)} color={C.blue} />
      </Row>
      <Row>
        <Slider label="h" value={h} min={-4} max={4} step={0.5} onChange={setH} color={C.green} />
        <Slider label="k" value={k} min={-5} max={5} step={0.5} onChange={setK} color={C.amber} />
      </Row>
      <Plane view={v} label="Exponential graph" step={1} stepY={2}>
        {(X, Y) => <>
          <path d={pathOf((x) => 2 ** x, v, X, Y)} fill="none" stroke="#cbd5e1" strokeWidth={2} />
          {hline(X, Y, v, k, C.red)}
          <path d={pathOf(f, v, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
          {Math.abs(y0) < 12 && dot(X, Y, 0, y0, C.blue, `(0, ${n2(y0)})`, "y")}
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`\\(y=${n2(a)}\\cdot${n2(b)}^{x${sg(-h)}}${sg(k)}\\) (grey: \\(y=2^x\\)). Asymptote \\(y=${n2(k)}\\); y-intercept \\(${n2(y0, 3)}\\); range \\(y${a > 0 ? ">" : "<"}${n2(k)}\\). The graph ${grow ? "increases" : "decreases"} from left to right. ${b < 1 ? `Since \\(${n2(b)}^{x}=\\left(${n2(1 / b, 3)}\\right)^{-x}\\), a base below 1 reflects growth in the y-axis.` : ""}`} />
      </Readout>
    </WidgetCard>
  );
}

export function IBCompound({ init = [1, 100] }: { init?: [number, number] }) {
  const [r, setR] = useState(init[0]), [n, setN] = useState(init[1]);
  const A = (1 + r / n) ** n, E = Math.exp(r);
  const ns = [1, 2, 4, 12, 52, 365, 10000];
  return (
    <WidgetCard title="Compounding more often → e" subtitle="1 dollar at rate r for one year, compounded n times: (1 + r/n)ⁿ → eʳ as n → ∞">
      <Row>
        <Slider label="rate r" value={r} min={0.1} max={2} step={0.1} onChange={setR} color={C.violet} />
        <Slider label="n" value={n} min={1} max={1000} step={1} onChange={setN} color={C.blue} />
      </Row>
      <svg viewBox="0 0 520 210" style={{ width: "100%", maxWidth: 560, display: "block", margin: "0 auto" }}>
        {ns.map((m, i) => {
          const val = (1 + r / m) ** m, top = Math.exp(r) * 1.08, H = (val / top) * 160;
          return <g key={m}>
            <rect x={20 + i * 70} y={180 - H} width={50} height={H} fill={m === n ? C.amber : "#c4b5fd"} />
            <text x={45 + i * 70} y={198} fontSize={12} textAnchor="middle" fill="#334155">n = {m}</text>
            <text x={45 + i * 70} y={198 - H} fontSize={11} fontWeight={700} textAnchor="middle" fill={m === n ? "#fff" : "#1e1b4b"}>{val.toFixed(4)}</text>
          </g>;
        })}
        <line x1={10} x2={510} y1={180 - (E / (E * 1.08)) * 160} y2={180 - (E / (E * 1.08)) * 160} stroke={C.red} strokeDasharray="7 5" strokeWidth={2} />
      </svg>
      <Readout tone="blue">
        <MathText html={`\\(\\left(1+\\tfrac{${n2(r)}}{${n}}\\right)^{${n}}=${n2(A, 6)}\\), while \\(e^{${n2(r)}}=${n2(E, 6)}\\) (red line). With \\(r=1\\) the limit is \\(e\\approx2.71828\\). Continuous growth: \\(A=Pe^{rt}\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 9.3 logarithms as inverses */

export function IBLogGraph({ init = [2, 0, 0] }: { init?: [number, number, number] }) {
  const [b, setB] = useState(init[0]), [h, setH] = useState(init[1]), [k, setK] = useState(init[2]);
  const [x0, setX0] = useState(4);
  const lg = (x: number) => Math.log(x) / Math.log(b), f = (x: number) => lg(x - h) + k, v: View = { xmin: -5, xmax: 9, ymin: -5, ymax: 9 };
  const y0 = f(x0);
  return (
    <WidgetCard title="Logarithmic graphs" subtitle="y = log_b x is the reflection of y = bˣ in y = x; y = log_b(x − h) + k has the vertical asymptote x = h">
      <Row>
        <Slider label="base b" value={b} min={1.5} max={10} step={0.5} onChange={setB} color={C.blue} />
        <Slider label="h" value={h} min={-3} max={3} step={0.5} onChange={setH} color={C.green} />
        <Slider label="k" value={k} min={-3} max={3} step={0.5} onChange={setK} color={C.amber} />
      </Row>
      <Row><Slider label="x" value={x0} min={h + 0.25} max={9} step={0.25} onChange={setX0} color={C.violet} /></Row>
      <Plane view={v} label="Logarithm graph" step={1} stepY={1}>
        {(X, Y) => <>
          <line x1={X(-5)} y1={Y(-5)} x2={X(9)} y2={Y(9)} stroke="#cbd5e1" strokeWidth={1.6} strokeDasharray="4 4" />
          <path d={pathOf((x) => b ** x, v, X, Y)} fill="none" stroke={C.green} strokeWidth={2} strokeDasharray="7 4" />
          {vline(X, Y, v, h, C.red)}
          <path d={pathOf(f, v, X, Y, h + 1e-4, v.xmax)} fill="none" stroke={C.violet} strokeWidth={3} />
          {Number.isFinite(y0) && Math.abs(y0) < 9 && dot(X, Y, x0, y0, C.blue, `(${n2(x0)}, ${n2(y0)})`, "p")}
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`\\(y=\\log_{${n2(b)}}(x${sg(-h)})${sg(k)}\\) (violet); green dashed: \\(y=${n2(b)}^x\\). Domain \\(x>${n2(h)}\\), asymptote \\(x=${n2(h)}\\), x-intercept \\(x=${n2(h + b ** -k, 3)}\\). At \\(x=${n2(x0)}\\): \\(${n2(b)}^{${n2(y0 - k, 4)}}=${n2(x0 - h, 4)}\\), so \\(y=${n2(y0, 4)}\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 9.4 laws of logarithms */

export function IBLogLaws({ init = [0, 8, 4] }: { init?: [number, number, number] }) {
  const [law, setLaw] = useState(init[0]), [m, setM] = useState(init[1]), [n, setN] = useState(init[2]);
  const [base, setBase] = useState(0);
  const B = [2, 10, Math.E][base], bt = ["2", "10", "e"][base], lg = (x: number) => Math.log(x) / Math.log(B);
  const L = law === 0 ? [`\\log_{${bt}}(${m}\\times${n})`, lg(m * n), `\\log_{${bt}}${m}+\\log_{${bt}}${n}`, lg(m) + lg(n)]
    : law === 1 ? [`\\log_{${bt}}\\left(\\tfrac{${m}}{${n}}\\right)`, lg(m / n), `\\log_{${bt}}${m}-\\log_{${bt}}${n}`, lg(m) - lg(n)]
    : law === 2 ? [`\\log_{${bt}}(${m}^{${n}})`, lg(m ** n), `${n}\\log_{${bt}}${m}`, n * lg(m)]
    : [`\\log_{${bt}}${m}`, lg(m), `\\dfrac{\\ln ${m}}{\\ln ${bt}}`, Math.log(m) / Math.log(B)];
  return (
    <WidgetCard title="Laws of logarithms" subtitle="logs turn products into sums, quotients into differences and powers into multiples; change of base lets a calculator evaluate any log">
      <Row><Segmented label="law:" value={law} onChange={setLaw} options={["product", "quotient", "power", "change of base"].map((t, i) => ({ value: i, label: t }))} /></Row>
      <Row><Segmented label="base:" value={base} onChange={setBase} options={["2", "10", "e"].map((t, i) => ({ value: i, label: t }))} /></Row>
      <Row>
        <Slider label="m" value={m} min={1} max={64} step={1} onChange={setM} color={C.blue} />
        <Slider label="n" value={n} min={1} max={law === 2 ? 6 : 32} step={1} onChange={setN} color={C.green} />
      </Row>
      <svg viewBox="0 0 520 90" style={{ width: "100%", maxWidth: 560, display: "block", margin: "0 auto" }}>
        <rect x={20} y={20} width={Math.max(2, Math.min(480, Math.abs(L[1] as number) * 40))} height={22} fill={C.violet} />
        <rect x={20} y={52} width={Math.max(2, Math.min(480, Math.abs(L[3] as number) * 40))} height={22} fill={C.amber} />
      </svg>
      <Readout tone="blue">
        <MathText html={`Left (violet): \\(${L[0]}=${n2(L[1] as number, 5)}\\). Right (amber): \\(${L[2]}=${n2(L[3] as number, 5)}\\). The bars match for every choice — that is the law.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 9.5 solving a^x = c */

export function IBExpSolve({ init = [3, 20] }: { init?: [number, number] }) {
  const [a, setA] = useState(init[0]), [c, setC] = useState(init[1]);
  const x = Math.log(c) / Math.log(a), v: View = { xmin: -2, xmax: 6, ymin: -5, ymax: 60 };
  return (
    <WidgetCard title="Solving aˣ = c" subtitle="the solution is where y = aˣ meets y = c; taking logs gives x = log c ÷ log a">
      <Row>
        <Slider label="a" value={a} min={1.5} max={6} step={0.5} onChange={setA} color={C.violet} />
        <Slider label="c" value={c} min={2} max={55} step={1} onChange={setC} color={C.amber} />
      </Row>
      <Plane view={v} label="Intersection" step={1} stepY={10}>
        {(X, Y) => <>
          <path d={pathOf((t) => a ** t, v, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
          {hline(X, Y, v, c, C.amber)}
          {x <= v.xmax && <line x1={X(x)} y1={Y(c)} x2={X(x)} y2={Y(0)} stroke={C.red} strokeWidth={1.6} strokeDasharray="5 4" />}
          {x <= v.xmax && dot(X, Y, x, c, C.red, `(${n2(x, 3)}, ${c})`, "s")}
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`\\(${n2(a)}^x=${c}\\Rightarrow x\\log ${n2(a)}=\\log ${c}\\Rightarrow x=\\dfrac{\\log ${c}}{\\log ${n2(a)}}=\\dfrac{\\ln ${c}}{\\ln ${n2(a)}}\\approx${n2(x, 4)}\\). Check: \\(${n2(a)}^{${n2(x, 4)}}\\approx${n2(a ** x, 3)}\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 9.6 derivatives of e^x and ln x */

export function IBExpDeriv({ init = [0, 1] }: { init?: [number, number] }) {
  const [k, setK] = useState(init[0]), [x0, setX0] = useState(init[1]);
  const isLn = k === 1, f = isLn ? Math.log : Math.exp, fp = isLn ? (x: number) => 1 / x : Math.exp;
  const xx = isLn && x0 <= 0 ? 0.25 : x0, y0 = f(xx), m = fp(xx);
  const v: View = isLn ? { xmin: -1, xmax: 7, ymin: -4, ymax: 4 } : { xmin: -4, xmax: 3, ymin: -2, ymax: 12 };
  return (
    <WidgetCard title="Gradients of eˣ and ln x" subtitle="d/dx eˣ = eˣ (the gradient equals the height); d/dx ln x = 1/x">
      <Row><Segmented label="f(x) =" value={k} onChange={setK} options={[{ value: 0, label: "eˣ" }, { value: 1, label: "ln x" }]} /></Row>
      <Row><Slider label="x" value={xx} min={isLn ? 0.25 : -3} max={isLn ? 6 : 2.5} step={0.25} onChange={setX0} color={C.blue} /></Row>
      <Plane view={v} label="Tangent" step={1} stepY={isLn ? 1 : 2}>
        {(X, Y) => <>
          <path d={pathOf(f, v, X, Y, isLn ? 0.001 : v.xmin, v.xmax)} fill="none" stroke={C.violet} strokeWidth={3} />
          <path d={pathOf(fp, v, X, Y, isLn ? 0.05 : v.xmin, v.xmax)} fill="none" stroke={C.amber} strokeWidth={2} strokeDasharray="7 4" />
          <line x1={X(v.xmin)} y1={Y(y0 + m * (v.xmin - xx))} x2={X(v.xmax)} y2={Y(y0 + m * (v.xmax - xx))} stroke={C.red} strokeWidth={2.2} />
          {dot(X, Y, xx, y0, C.blue, `(${n2(xx)}, ${n2(y0)})`, "t")}
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`\\(f(x)=${isLn ? "\\ln x" : "e^x"}\\) (violet), \\(f'(x)=${isLn ? "\\tfrac1x" : "e^x"}\\) (amber dashed${isLn ? "" : " — the same curve"}). At \\(x=${n2(xx)}\\): gradient \\(${n2(m, 4)}\\); tangent \\(y=${n2(m, 3)}x${sg(y0 - m * xx)}\\). ${isLn ? "The gradient shrinks as x grows but never reaches 0." : "Every tangent's gradient equals the y-value of its point."}`} />
      </Readout>
    </WidgetCard>
  );
}
