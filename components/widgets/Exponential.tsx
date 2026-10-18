"use client";

// MCR3U chapter 4 (exponential functions) explorers: the power ladder (zero and negative exponents), rational
// exponents as points on y = bˣ, comparing linear / quadratic / exponential growth, y = a·b^(k(x − d)) + c with
// key points and asymptote, and growth / decay / cooling models with a target value.

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { r2, type View } from "./Systems";
import { Curves, dot, sgn } from "./Quadratics";

const cell: React.CSSProperties = { padding: "4px 10px", textAlign: "center", borderBottom: `1px solid ${C.line}` };
const n = (v: number, d = 3) => r2(v, d);
const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : Math.abs(a));
/** a positive rational power p/q (q small) as LaTeX */
function fracTex(p: number, q: number) { const g = gcd(p, q) || 1; p /= g; q /= g; if (q < 0) { p = -p; q = -q; } return q === 1 ? `${p}` : `${p < 0 ? "-" : ""}\\tfrac{${Math.abs(p)}}{${q}}`; }

/* ---------------------------------------------------------------- 4.1 power ladder */

const BASES = [{ v: 2, t: "2" }, { v: 3, t: "3" }, { v: 5, t: "5" }, { v: 10, t: "10" }, { v: 0.5, t: "½" }, { v: -2, t: "−2" }];
export function PowerLadder({ start = 2 }: { start?: number }) {
  const [b, setB] = useState(start);
  const bt = BASES.find((x) => x.v === b)?.t ?? String(b);
  const bTex = b === 0.5 ? "\\left(\\tfrac12\\right)" : b < 0 ? `(${b})` : String(b);
  const ns = [4, 3, 2, 1, 0, -1, -2, -3];
  const val = (k: number) => {
    if (b === 0.5) return k >= 0 ? `\\tfrac{1}{${2 ** k}}` : `${2 ** -k}`;
    const s = b < 0 && Math.abs(k) % 2 === 1 ? "-" : "";
    const B = Math.abs(b);
    return k >= 0 ? `${s}${B ** k}` : `${s}\\tfrac{1}{${B ** -k}}`;
  };
  return (
    <WidgetCard title="Walking down the power ladder" subtitle="each step down divides by the base — so b⁰ = 1 and b⁻ⁿ = 1/bⁿ">
      <Row><Segmented value={b} onChange={setB} options={BASES.map((x) => ({ value: x.v, label: `base ${x.t}` }))} /></Row>
      <table style={{ borderCollapse: "collapse", margin: "8px auto", fontSize: 15 }}>
        <tbody>
          {ns.map((k, i) => (
            <tr key={k} style={{ background: k === 0 ? C.amberSoft : k < 0 ? C.blueSoft : "#fff" }}>
              <td style={cell}><MathText html={`\\(${bTex}^{${k}}\\)`} /></td>
              <td style={{ ...cell, fontWeight: 700 }}><MathText html={`\\(=${val(k)}\\)`} /></td>
              <td style={{ ...cell, color: C.muted, fontSize: 13 }}>{i < ns.length - 1 ? `÷ ${bt} ↓` : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Readout tone="green">
        <MathText html={`Dividing \\(${bTex}^{1}\\) by the base gives \\(${bTex}^{0}=1\\). One more step gives \\(${bTex}^{-1}=${val(-1)}\\): a negative exponent means a reciprocal, \\(b^{-n}=\\frac{1}{b^{n}}\\) — not a negative number.${b < 0 ? " With a negative base the sign alternates: even exponents are positive, odd are negative." : ""}${b === 0.5 ? " For a fraction, the reciprocal flips it: \\((\\tfrac12)^{-3}=2^3=8\\)." : ""}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 4.2 rational exponents */

const RB = [4, 8, 9, 16, 25, 27, 32, 64, 81];
export function RationalPower({ init = [8, 2, 3] }: { init?: [number, number, number] }) {
  const [b, setB] = useState(init[0]), [m, setM] = useState(init[1]), [q, setQ] = useState(init[2]);
  const root = b ** (1 / q), val = b ** (m / q);
  const exact = Math.abs(root - Math.round(root)) < 1e-9;
  const view: View = { xmin: -2, xmax: 2, ymin: -1, ymax: Math.min(Math.max(val * 1.3, b ** 1.2, 4), 200) };
  return (
    <WidgetCard title="Rational exponents" subtitle="b^(m/n) = (ⁿ√b)^m — and it sits on the curve y = bˣ">
      <Row>
        <Slider label="base b" value={RB.indexOf(b)} min={0} max={RB.length - 1} onChange={(i) => setB(RB[i])} format={(i) => String(RB[i])} />
        <Slider label="m" value={m} min={-3} max={4} onChange={setM} color={C.red} />
        <Slider label="n" value={q} min={2} max={5} onChange={setQ} color={C.green} />
      </Row>
      <Curves view={view} label="y = b^x" step={0.5} stepY={Math.max(1, Math.round(view.ymax / 8))} fs={[{ f: (x) => b ** x, color: C.violet }]}>
        {(X, Y) => <>{val <= view.ymax && dot(X, Y, m / q, val, C.blue, `(${fracTex(m, q).replace(/\\tfrac\{(\d+)\}\{(\d+)\}/, "$1/$2")}, ${n(val, 2)})`, "p")}{dot(X, Y, 1, b, C.faint, undefined, "b")}</>}
      </Curves>
      <Readout tone={exact ? "green" : "amber"}>
        <MathText html={`\\(${b}^{${fracTex(m, q)}}=\\left(\\sqrt[${q}]{${b}}\\right)^{${m}}\\)${exact ? `\\(=${Math.round(root)}^{${m}}=${m < 0 ? `\\frac{1}{${Math.round(root) ** -m}}` : Math.round(root) ** m}\\)` : `\\(\\approx${n(root)}^{${m}}\\approx${n(val)}\\)`}. The denominator ${q} is the root; the numerator ${m} is the power${m < 0 ? "; the negative sign means take the reciprocal" : ""}. ${exact ? "" : `(${b} is not a perfect ${q === 2 ? "square" : q === 3 ? "cube" : `${q}th power`}, so the value is irrational.)`}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 4.4 comparing growth */

export function GrowthCompare({ init = [2, 2] }: { init?: [number, number] }) {
  const [a, setA] = useState(init[0]), [b, setB] = useState(init[1]);
  const [show, setShow] = useState<"exp" | "all">("all");
  const f = (x: number) => a * b ** x;
  const xs = [0, 1, 2, 3, 4, 5], ys = xs.map(f);
  const d1 = ys.slice(1).map((y, i) => y - ys[i]), rat = ys.slice(1).map((y, i) => y / ys[i]);
  const view: View = { xmin: -3, xmax: 6, ymin: -2, ymax: 40 };
  return (
    <WidgetCard title="Exponential vs linear vs quadratic" subtitle="constant ratio · constant first difference · constant second difference">
      <Row>
        <Slider label="a (start)" value={a} min={0.5} max={5} step={0.5} onChange={setA} format={(v) => n(v)} color={C.blue} />
        <Slider label="b (ratio)" value={b} min={0.25} max={3} step={0.25} onChange={(v) => setB(v === 1 ? 1.25 : v)} format={(v) => n(v)} color={C.red} />
        <Segmented value={show} onChange={setShow} options={[{ value: "all", label: "compare" }, { value: "exp", label: "exponential only" }]} />
      </Row>
      <Curves view={view} label="Growth comparison" step={1} stepY={5} fs={[{ f, color: C.violet, width: 3.5 }, ...(show === "all" ? [{ f: (x: number) => 4 * x + a, color: C.green, width: 2 }, { f: (x: number) => x * x + a, color: C.amber, width: 2 }] : [])]}>
        {(X, Y) => <>{dot(X, Y, 0, a, C.blue, `(0, ${n(a)})`, "y")}<line x1={X(view.xmin)} y1={Y(0)} x2={X(view.xmax)} y2={Y(0)} stroke={C.red} strokeDasharray="6 5" /></>}
      </Curves>
      <table style={{ borderCollapse: "collapse", margin: "4px auto", fontSize: 14 }}>
        <tbody>
          <tr><th style={cell}>x</th>{xs.map((x) => <td key={x} style={cell}>{x}</td>)}</tr>
          <tr><th style={cell}>{`y = ${n(a)}·${n(b)}ˣ`}</th>{ys.map((y, i) => <td key={i} style={cell}>{n(y, 2)}</td>)}</tr>
          <tr><th style={cell}>1st diff.</th>{d1.map((d, i) => <td key={i} style={cell}>{n(d, 2)}</td>)}</tr>
          <tr><th style={cell}>ratio</th>{rat.map((r, i) => <td key={i} style={{ ...cell, color: C.red, fontWeight: 700 }}>{n(r, 2)}</td>)}</tr>
        </tbody>
      </table>
      <Readout tone="blue">
        <MathText html={`\\(f(x)=${n(a)}(${n(b)})^x\\): each output is \\(${n(b)}\\) times the one before (constant ratio), so the differences are not constant. ${b > 1 ? "Growth" : "Decay"}: ${b > 1 ? "increasing" : "decreasing"} for all x. Domain \\(\\mathbb R\\); range \\(y>0\\); y-intercept \\(${n(a)}\\); horizontal asymptote \\(y=0\\) (dashed).${show === "all" ? " Green \\(y=4x+" + n(a) + "\\) (linear) and amber \\(y=x^2+" + n(a) + "\\) (quadratic) start at the same point — for large x the exponential always wins when b > 1." : ""}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 4.5 transformations */

const AS = [-3, -2, -1, -0.5, 0.5, 1, 2, 3];
const KS = [-2, -1, -0.5, 0.5, 1, 2];
export function ExpTransform({ base = 2, show = ["a", "k", "d", "c"], init = { a: 1, k: 1, d: 0, c: 0 } }: { base?: number; show?: ("a" | "k" | "d" | "c")[]; init?: { a: number; k: number; d: number; c: number } }) {
  const [bb, setBB] = useState(base);
  const [ai, setAi] = useState(Math.max(0, AS.indexOf(init.a))), [ki, setKi] = useState(Math.max(0, KS.indexOf(init.k)));
  const [d, setD] = useState(init.d), [c, setC] = useState(init.c);
  const a = show.includes("a") ? AS[ai] : init.a, k = show.includes("k") ? KS[ki] : init.k;
  const f = (x: number) => a * bb ** (k * (x - d)) + c;
  const pts: [number, number][] = [[-1, 1 / bb], [0, 1], [1, bb], [2, bb * bb]];
  const img = pts.map(([x, y]) => [x / k + d, a * y + c] as [number, number]);
  const view: View = { xmin: -8, xmax: 8, ymin: -10, ymax: 10 };
  const bTex = bb === 0.5 ? "\\left(\\tfrac12\\right)" : String(bb);
  const inner = `${k === 1 ? "" : k === -1 ? "-" : n(k)}${k === 1 || k === -1 ? (d === 0 ? "x" : `(x${sgn(-d)})`) : d === 0 ? "x" : `(x${sgn(-d)})`}`;
  const eq = `y=${a === 1 ? "" : a === -1 ? "-" : n(a)}${bTex}^{${inner}}${c === 0 ? "" : sgn(c)}`;
  return (
    <WidgetCard title="Transforming y = bˣ" subtitle="y = a·b^(k(x − d)) + c: key points (x, y) → (x/k + d, ay + c); asymptote y = c">
      <Row><Segmented value={bb} onChange={setBB} options={[{ value: 2, label: "b = 2" }, { value: 3, label: "b = 3" }, { value: 0.5, label: "b = ½" }]} /></Row>
      <Row>
        {show.includes("a") && <Slider label="a" value={ai} min={0} max={AS.length - 1} onChange={setAi} format={(i) => n(AS[i])} color={C.blue} />}
        {show.includes("k") && <Slider label="k" value={ki} min={0} max={KS.length - 1} onChange={setKi} format={(i) => n(KS[i])} color={C.violet} />}
      </Row>
      <Row>
        {show.includes("d") && <Slider label="d" value={d} min={-5} max={5} onChange={setD} color={C.red} />}
        {show.includes("c") && <Slider label="c" value={c} min={-6} max={6} onChange={setC} color={C.green} />}
      </Row>
      <Curves view={view} label="Exponential transformation" step={1} stepY={2} fs={[{ f: (x) => bb ** x, color: C.faint, width: 2, dash: "7 5" }, { f, color: C.violet, width: 3.5 }]}>
        {(X, Y) => <>
          <line x1={X(view.xmin)} y1={Y(c)} x2={X(view.xmax)} y2={Y(c)} stroke={C.green} strokeWidth={1.8} strokeDasharray="6 5" />
          {img.map(([x, y], i) => Math.abs(x) <= 8 && Math.abs(y) <= 10 ? dot(X, Y, x, y, C.blue, undefined, i) : null)}
        </>}
      </Curves>
      <table style={{ borderCollapse: "collapse", margin: "4px auto", fontSize: 14 }}>
        <tbody>
          <tr><th style={cell}>{`y = ${bb === 0.5 ? "(½)" : bb}ˣ`}</th>{pts.map(([x, y], i) => <td key={i} style={cell}>({x}, {n(y)})</td>)}</tr>
          <tr><th style={{ ...cell, color: C.blue }}>image</th>{img.map(([x, y], i) => <td key={i} style={{ ...cell, color: C.blue, fontWeight: 700 }}>({n(x)}, {n(y)})</td>)}</tr>
        </tbody>
      </table>
      <Readout tone="blue">
        <MathText html={`\\(${eq}\\). Horizontal asymptote \\(y=${n(c)}\\) (green); domain \\(\\mathbb R\\); range \\(y${a > 0 ? ">" : "<"}${n(c)}\\). The y-intercept is \\(${n(f(0))}\\). Only \\(c\\) moves the asymptote; \\(a<0\\) flips the graph below it.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 4.6 models */

export function ExpModel({ start = "growth" }: { start?: "growth" | "half" | "cool" }) {
  const [mode, setMode] = useState(start);
  const [A0, setA0] = useState(mode === "half" ? 80 : 500), [r, setR] = useState(6), [h, setH] = useState(5), [target, setTarget] = useState(1000);
  const [T0, setT0] = useState(90), [Ta, setTa] = useState(20);
  const f = (t: number) => mode === "growth" ? A0 * (1 + r / 100) ** t : mode === "half" ? A0 * 0.5 ** (t / h) : (T0 - Ta) * 0.5 ** (t / h) + Ta;
  const tMax = mode === "growth" ? 30 : 6 * h;
  const yMax = mode === "growth" ? Math.max(f(tMax), target) * 1.1 : mode === "half" ? A0 * 1.1 : T0 * 1.1;
  const view: View = { xmin: 0, xmax: tMax, ymin: 0, ymax: yMax };
  // time to reach the target (solve by bisection on the monotone model)
  let tHit = NaN;
  const g = (t: number) => f(t) - target, lo0 = 0, hi0 = 200;
  if (g(lo0) * g(hi0) < 0) { let lo = lo0, hi = hi0; for (let i = 0; i < 80; i++) { const mid = (lo + hi) / 2; if (g(lo) * g(mid) <= 0) hi = mid; else lo = mid; } tHit = (lo + hi) / 2; }
  const eq = mode === "growth" ? `A(t)=${A0}(${n(1 + r / 100, 4)})^{t}` : mode === "half" ? `A(t)=${A0}\\left(\\tfrac12\\right)^{t/${h}}` : `T(t)=${T0 - Ta}\\left(\\tfrac12\\right)^{t/${h}}+${Ta}`;
  return (
    <WidgetCard title="Exponential models" subtitle="growth by a percent · half-life decay · cooling toward room temperature">
      <Row><Segmented value={mode} onChange={(m) => { setMode(m); if (m === "half") { setA0(80); setTarget(10); } else if (m === "growth") { setA0(500); setTarget(1000); } else setTarget(40); }} options={[{ value: "growth", label: "growth r%" }, { value: "half", label: "half-life" }, { value: "cool", label: "cooling" }]} /></Row>
      {mode === "growth" && <Row>
        <Slider label="start" value={A0} min={100} max={2000} step={100} onChange={setA0} color={C.blue} />
        <Slider label="rate %" value={r} min={1} max={20} onChange={setR} color={C.red} />
      </Row>}
      {mode === "half" && <Row>
        <Slider label="start" value={A0} min={10} max={200} step={10} onChange={setA0} color={C.blue} />
        <Slider label="half-life" value={h} min={1} max={30} onChange={setH} color={C.red} />
      </Row>}
      {mode === "cool" && <Row>
        <Slider label="start °C" value={T0} min={40} max={100} step={5} onChange={setT0} color={C.red} />
        <Slider label="room °C" value={Ta} min={0} max={30} onChange={setTa} color={C.green} />
        <Slider label="half-time" value={h} min={2} max={20} onChange={setH} color={C.blue} />
      </Row>}
      <Row><Slider label="target" value={target} min={mode === "growth" ? 100 : 1} max={mode === "growth" ? 10000 : mode === "half" ? 200 : 100} step={mode === "growth" ? 100 : 1} onChange={setTarget} color={C.amber} /></Row>
      <Curves view={view} label="Exponential model" step={Math.max(1, Math.round(tMax / 10))} stepY={Math.max(1, Math.round(yMax / 8 / 5) * 5)} fs={[{ f, color: C.violet }]}>
        {(X, Y) => <>
          <line x1={X(0)} y1={Y(target)} x2={X(tMax)} y2={Y(target)} stroke={C.amber} strokeWidth={2} strokeDasharray="6 5" />
          {mode === "cool" && <line x1={X(0)} y1={Y(Ta)} x2={X(tMax)} y2={Y(Ta)} stroke={C.green} strokeWidth={1.5} strokeDasharray="3 4" />}
          {Number.isFinite(tHit) && tHit <= tMax && dot(X, Y, tHit, target, C.red, `t ≈ ${n(tHit, 2)}`, "hit")}
        </>}
      </Curves>
      <Readout tone={Number.isFinite(tHit) ? "green" : "amber"}>
        <MathText html={`\\(${eq}\\). ${Number.isFinite(tHit) ? `It reaches ${target} after about \\(t\\approx${n(tHit, 2)}\\).` : `It never reaches ${target}${mode === "cool" ? ` — it can only approach room temperature, ${Ta} °C` : mode === "half" ? " — a decaying amount only gets smaller" : ""}.`} ${mode === "growth" ? `Doubling time ≈ ${n(Math.log(2) / Math.log(1 + r / 100), 2)}.` : mode === "half" ? `Every ${h} units the amount halves; it never reaches 0 (asymptote \\(A=0\\)).` : `The room temperature is a horizontal asymptote: range \\(${Ta}<T\\le${T0}\\).`}`} />
      </Readout>
    </WidgetCard>
  );
}
