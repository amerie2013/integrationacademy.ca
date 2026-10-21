"use client";

// IB AA SL chapter 1 (sequences and series) explorers: terms and partial sums in sigma notation, arithmetic vs
// geometric sequences, partial sums and the sum to infinity, compound interest and depreciation, Pascal's triangle
// and the binomial expansion, and testing a conjecture before proving it.

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { Plane, r2, type View } from "./Systems";
import { dot } from "./Quadratics";

const n2 = (v: number, d = 2) => r2(v, d);
/** a 1-2-5 grid step giving about `lines` grid lines over `span` */
const nice = (span: number, lines = 8) => { const raw = Math.max(span / lines, 1e-9), p = 10 ** Math.floor(Math.log10(raw)), m = raw / p; return (m <= 1 ? 1 : m <= 2 ? 2 : m <= 5 ? 5 : 10) * p; };
/** a view that fits xs ∈ [x0, x1] and the given y-values (always showing y = 0) */
const fit = (x0: number, x1: number, ys: number[]): View => {
  const lo = Math.min(0, ...ys), hi = Math.max(0, ...ys), pad = (hi - lo || 1) * 0.12;
  return { xmin: x0, xmax: x1, ymin: lo - pad, ymax: hi + pad };
};
const sgnTex = (v: number) => (v < 0 ? `-${n2(-v)}` : `+${n2(v)}`);
const cell: React.CSSProperties = { padding: "3px 8px", textAlign: "center", borderBottom: `1px solid ${C.line}`, fontSize: 13.5 };

/* ---------------------------------------------------------------- 1.1 sigma notation */

type Gen = "lin" | "sq" | "geo";
export function SigmaLab({ init = ["lin", 1, 6] }: { init?: [Gen, number, number] }) {
  const [g, setG] = useState<Gen>(init[0]);
  const [lo, setLo] = useState(init[1]), [hi, setHi] = useState(init[2]);
  const [p, setP] = useState(3), [q, setQ] = useState(-1);
  const term = (k: number) => (g === "lin" ? p * k + q : g === "sq" ? k * k + q : p * 2 ** (k - 1));
  const texTerm = g === "lin" ? `${p === 1 ? "" : p === -1 ? "-" : p}k${q === 0 ? "" : sgnTex(q)}` : g === "sq" ? `k^2${q === 0 ? "" : sgnTex(q)}` : `${p === 1 ? "" : p}\\cdot 2^{k-1}`;
  const ks: number[] = []; for (let k = lo; k <= hi; k++) ks.push(k);
  const ts = ks.map(term), S = ts.reduce((s, t) => s + t, 0);
  let run = 0; const runs = ts.map((t) => (run += t));
  const view = fit(lo - 1, hi + 1, [...ts, ...runs]);
  return (
    <WidgetCard title="Sigma notation" subtitle="Σ adds the term for every whole-number k from the bottom limit to the top limit">
      <Row>
        <Segmented value={g} onChange={setG} options={[{ value: "lin", label: "pk + q" }, { value: "sq", label: "k² + q" }, { value: "geo", label: "p·2ᵏ⁻¹" }]} />
      </Row>
      <Row>
        <Slider label="lower k" value={lo} min={0} max={5} onChange={(v) => { setLo(v); if (hi < v) setHi(v); }} color={C.violet} />
        <Slider label="upper k" value={hi} min={lo} max={10} onChange={setHi} color={C.violet} />
      </Row>
      <Row>
        {g !== "sq" && <Slider label="p" value={p} min={-4} max={5} onChange={(v) => setP(v === 0 ? 1 : v)} color={C.blue} />}
        {g !== "geo" && <Slider label="q" value={q} min={-6} max={6} onChange={setQ} color={C.blue} />}
      </Row>
      <Plane view={view} label="Terms and running total" step={1} stepY={nice(view.ymax - view.ymin)}>
        {(X, Y) => <>
          {ks.map((k, i) => <rect key={"b" + k} x={X(k) - 9} width={18} y={Math.min(Y(ts[i]), Y(0))} height={Math.abs(Y(ts[i]) - Y(0))} fill={C.blue} opacity={0.75} />)}
          <polyline points={ks.map((k, i) => `${X(k)},${Y(runs[i])}`).join(" ")} fill="none" stroke={C.green} strokeWidth={2.5} />
          {ks.map((k, i) => dot(X, Y, k, runs[i], C.green, undefined, "r" + k))}
        </>}
      </Plane>
      <table style={{ borderCollapse: "collapse", margin: "2px auto" }}><tbody>
        <tr><th style={cell}>k</th>{ks.map((k) => <td key={k} style={cell}>{k}</td>)}</tr>
        <tr><th style={cell}>term</th>{ts.map((t, i) => <td key={i} style={{ ...cell, color: C.blue, fontWeight: 700 }}>{n2(t)}</td>)}</tr>
        <tr><th style={cell}>running total</th>{runs.map((t, i) => <td key={i} style={{ ...cell, color: C.green }}>{n2(t)}</td>)}</tr>
      </tbody></table>
      <Readout tone="blue"><MathText html={`\\(\\displaystyle\\sum_{k=${lo}}^{${hi}}\\left(${texTerm}\\right)=${ts.map((t) => (t < 0 ? `(${n2(t)})` : n2(t))).join("+")}=${n2(S)}\\). There are \\(${hi}-${lo}+1=${hi - lo + 1}\\) terms (blue bars); the green line is the running total.`} /></Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.2 arithmetic vs geometric sequences */

export function SequenceLab({ init = ["ari", 3, 2] }: { init?: ["ari" | "geo", number, number] }) {
  const [t, setT] = useState<"ari" | "geo">(init[0]);
  const [u1, setU1] = useState(init[1]), [d, setD] = useState(init[2]), [r, setR] = useState(1.5);
  const [n, setN] = useState(8);
  const u = (k: number) => (t === "ari" ? u1 + (k - 1) * d : u1 * r ** (k - 1));
  const ks = Array.from({ length: n }, (_, i) => i + 1), us = ks.map(u);
  const view = fit(0, n + 1, us);
  const formula = t === "ari" ? `u_n=${n2(u1)}+(n-1)(${n2(d)})` : `u_n=${n2(u1)}\\cdot(${n2(r)})^{n-1}`;
  const kind = t === "ari" ? (d > 0 ? "increasing by the same amount each step: the points lie on a straight line" : d < 0 ? "decreasing by the same amount each step: the points lie on a straight line" : "constant")
    : r > 1 ? "growing by the same factor each step: the gaps get wider (exponential growth)" : r > 0 && r < 1 ? "shrinking by the same factor each step: the terms approach 0 (exponential decay)" : r < 0 ? "alternating in sign because r < 0" : "constant";
  return (
    <WidgetCard title="Arithmetic or geometric?" subtitle="arithmetic: add d each time · geometric: multiply by r each time">
      <Row><Segmented value={t} onChange={setT} options={[{ value: "ari", label: "arithmetic" }, { value: "geo", label: "geometric" }]} /></Row>
      <Row>
        <Slider label="u₁" value={u1} min={-10} max={10} onChange={(v) => setU1(t === "geo" && v === 0 ? 1 : v)} color={C.violet} />
        {t === "ari" ? <Slider label="d" value={d} min={-5} max={5} step={0.5} onChange={setD} format={(v) => n2(v)} color={C.blue} />
          : <Slider label="r" value={r} min={-2} max={2} step={0.1} onChange={(v) => setR(Math.abs(v) < 0.05 ? 0.1 : Math.round(v * 10) / 10)} format={(v) => n2(v)} color={C.blue} />}
        <Slider label="terms" value={n} min={3} max={12} onChange={setN} color={C.green} />
      </Row>
      <Plane view={view} label="Sequence terms" step={1} stepY={nice(view.ymax - view.ymin)}>
        {(X, Y) => <>
          {ks.slice(1).map((k, i) => <line key={"s" + k} x1={X(k - 1)} y1={Y(us[i])} x2={X(k)} y2={Y(us[i + 1])} stroke={C.faint} strokeDasharray="4 4" />)}
          {ks.map((k, i) => dot(X, Y, k, us[i], t === "ari" ? C.blue : C.violet, i < 3 || i === n - 1 ? `u${k} = ${n2(us[i])}` : undefined, k))}
        </>}
      </Plane>
      <Readout tone={t === "ari" ? "blue" : "green"}><MathText html={`\\(${formula}\\), so \\(u_{${n}}=${n2(us[n - 1])}\\). The sequence is ${kind}.`} /></Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.3 series and the sum to infinity */

export function SeriesLab({ init = ["geo", 8, 0.5] }: { init?: ["ari" | "geo", number, number] }) {
  const [t, setT] = useState<"ari" | "geo">(init[0]);
  // the third init value is r for a geometric series and d for an arithmetic one
  const [u1, setU1] = useState(init[1]), [r, setR] = useState(init[0] === "geo" ? init[2] : 0.5), [d, setD] = useState(init[0] === "ari" ? init[2] : 2);
  const [n, setN] = useState(10);
  const u = (k: number) => (t === "ari" ? u1 + (k - 1) * d : u1 * r ** (k - 1));
  const ks = Array.from({ length: n }, (_, i) => i + 1);
  let s = 0; const Ss = ks.map((k) => (s += u(k)));
  const conv = t === "geo" && Math.abs(r) < 1, Sinf = conv ? u1 / (1 - r) : NaN;
  const view = fit(0, n + 1, [...Ss, ...(conv ? [Sinf] : [])]);
  const formula = t === "ari" ? `S_n=\\tfrac n2\\big(2u_1+(n-1)d\\big)=\\tfrac{${n}}{2}\\big(2(${n2(u1)})+${n - 1}(${n2(d)})\\big)=${n2(Ss[n - 1])}`
    : `S_n=\\dfrac{u_1(1-r^n)}{1-r}=\\dfrac{${n2(u1)}(1-${r < 0 ? `(${n2(r)})` : n2(r)}^{${n}})}{1-${r < 0 ? `(${n2(r)})` : n2(r)}}=${n2(Ss[n - 1], 4)}`;
  return (
    <WidgetCard title="Partial sums" subtitle="Sₙ adds the first n terms; a geometric series with |r| < 1 settles on S∞">
      <Row><Segmented value={t} onChange={setT} options={[{ value: "ari", label: "arithmetic" }, { value: "geo", label: "geometric" }]} /></Row>
      <Row>
        <Slider label="u₁" value={u1} min={-10} max={12} onChange={(v) => setU1(v === 0 ? 1 : v)} color={C.violet} />
        {t === "ari" ? <Slider label="d" value={d} min={-4} max={4} step={0.5} onChange={setD} format={(v) => n2(v)} color={C.blue} />
          : <Slider label="r" value={r} min={-1.5} max={1.5} step={0.05} onChange={(v) => setR(Math.abs(v - 1) < 0.01 ? 0.95 : Math.round(v * 100) / 100)} format={(v) => n2(v)} color={C.blue} />}
        <Slider label="n" value={n} min={2} max={20} onChange={setN} color={C.green} />
      </Row>
      <Plane view={view} label="Partial sums" step={nice(n + 2, 10)} stepY={nice(view.ymax - view.ymin)}>
        {(X, Y) => <>
          {conv && <line x1={X(view.xmin)} y1={Y(Sinf)} x2={X(view.xmax)} y2={Y(Sinf)} stroke={C.red} strokeDasharray="7 5" strokeWidth={2} />}
          {ks.map((k, i) => <rect key={"b" + k} x={X(k) - 7} width={14} y={Math.min(Y(Ss[i]), Y(0))} height={Math.abs(Y(Ss[i]) - Y(0))} fill={C.green} opacity={0.7} />)}
        </>}
      </Plane>
      <Readout tone={conv ? "green" : t === "geo" ? "amber" : "blue"}>
        <MathText html={`\\(${formula}\\). ${t === "ari" ? "An arithmetic series (d ≠ 0) keeps growing in size: it has no sum to infinity." : conv ? `Because \\(|r|<1\\), the partial sums approach \\(S_\\infty=\\dfrac{u_1}{1-r}=\\dfrac{${n2(u1)}}{1-${r < 0 ? `(${n2(r)})` : n2(r)}}=${n2(Sinf, 4)}\\) (red line).` : "Because |r| ≥ 1, the partial sums do not settle: there is no sum to infinity."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.4 compound interest and depreciation */

export function InterestLab({ init = [1000, 6, 12, 10] }: { init?: [number, number, number, number] }) {
  const [mode, setMode] = useState<"grow" | "dep">("grow");
  const [P, setP] = useState(init[0]), [rate, setRate] = useState(init[1]), [k, setK] = useState(init[2]), [years, setYears] = useState(init[3]);
  const g = mode === "grow" ? (t: number) => P * (1 + rate / 100 / k) ** (k * t) : (t: number) => P * (1 - rate / 100) ** t;
  const simple = (t: number) => P * (1 + (rate / 100) * t);
  const ys = Array.from({ length: years + 1 }, (_, t) => g(t));
  const view = fit(-0.5, years + 0.5, [...ys, ...(mode === "grow" ? [simple(years)] : [])]);
  const final = g(years);
  const tex = mode === "grow"
    ? `FV=PV\\left(1+\\dfrac{r}{100k}\\right)^{kn}=${P}\\left(1+\\dfrac{${rate}}{100(${k})}\\right)^{${k}(${years})}=${n2(final)}`
    : `V=V_0\\left(1-\\dfrac{r}{100}\\right)^{n}=${P}(${n2(1 - rate / 100, 4)})^{${years}}=${n2(final)}`;
  return (
    <WidgetCard title="Compound growth and depreciation" subtitle="each period multiplies the value by the same factor: a geometric sequence">
      <Row><Segmented value={mode} onChange={setMode} options={[{ value: "grow", label: "compound interest" }, { value: "dep", label: "depreciation" }]} /></Row>
      <Row>
        <Slider label={mode === "grow" ? "PV" : "V₀"} value={P} min={500} max={10000} step={500} onChange={setP} color={C.violet} />
        <Slider label="rate %" value={rate} min={1} max={mode === "grow" ? 12 : 30} step={0.5} onChange={setRate} format={(v) => n2(v)} color={C.blue} />
      </Row>
      <Row>
        {mode === "grow" && <Segmented label="per year" value={k} onChange={setK} options={[{ value: 1, label: "1" }, { value: 4, label: "4" }, { value: 12, label: "12" }]} />}
        <Slider label="years" value={years} min={1} max={25} onChange={setYears} color={C.green} />
      </Row>
      <Plane view={view} label="Value over time" step={nice(years + 1, 10)} stepY={nice(view.ymax - view.ymin)}>
        {(X, Y) => <>
          {mode === "grow" && <line x1={X(0)} y1={Y(simple(0))} x2={X(years)} y2={Y(simple(years))} stroke={C.amber} strokeWidth={2} strokeDasharray="7 5" />}
          {ys.map((v, t) => dot(X, Y, t, v, mode === "grow" ? C.green : C.red, t === years ? n2(v, 0) : undefined, t))}
        </>}
      </Plane>
      <Readout tone={mode === "grow" ? "green" : "red"}>
        <MathText html={`\\(${tex}\\). ${mode === "grow" ? `Simple interest at the same rate would give only \\(${n2(simple(years))}\\) (dashed line): compounding earns interest on the interest.` : `The value falls by ${rate}% of the <em>current</em> value each year, so it never reaches 0.`}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.5 Pascal's triangle and the binomial theorem */

const nCr = (n: number, r: number) => { let c = 1; for (let i = 1; i <= r; i++) c = (c * (n - r + i)) / i; return Math.round(c); };
export function BinomialLab({ init = [5, 2, 2, -1] }: { init?: [number, number, number, number] }) {
  const [n, setN] = useState(init[0]), [r, setR] = useState(init[1]);
  const [a, setA] = useState(init[2]), [b, setB] = useState(init[3]);
  const rr = Math.min(r, n);
  const rows = Array.from({ length: n + 1 }, (_, i) => Array.from({ length: i + 1 }, (_, j) => nCr(i, j)));
  const coeff = (j: number) => nCr(n, j) * a ** (n - j) * b ** j;
  const term = (j: number) => { const c = coeff(j), p = n - j; return `${c}${p === 0 ? "" : p === 1 ? "x" : `x^{${p}}`}`; };
  const expansion = Array.from({ length: n + 1 }, (_, j) => term(j)).join("+").replace(/\+-/g, "-");
  const W = 520, rowH = 30;
  return (
    <WidgetCard title="Pascal's triangle and (ax + b)ⁿ" subtitle="row n gives the binomial coefficients ⁿCᵣ; the general term is ⁿCᵣ (ax)ⁿ⁻ʳ bʳ">
      <Row>
        <Slider label="n" value={n} min={1} max={9} onChange={(v) => { setN(v); if (r > v) setR(v); }} color={C.violet} />
        <Slider label="r" value={rr} min={0} max={n} onChange={setR} color={C.red} />
      </Row>
      <Row>
        <Slider label="a" value={a} min={-3} max={3} onChange={(v) => setA(v === 0 ? 1 : v)} color={C.blue} />
        <Slider label="b" value={b} min={-4} max={4} onChange={(v) => setB(v === 0 ? 1 : v)} color={C.blue} />
      </Row>
      <svg viewBox={`0 0 ${W} ${(n + 1) * rowH + 10}`} style={{ width: "100%", maxWidth: 560, display: "block", margin: "6px auto" }} role="img" aria-label="Pascal's triangle">
        {rows.map((row, i) => row.map((v, j) => {
          const x = W / 2 + (j - i / 2) * 50, y = 18 + i * rowH, hit = i === n && j === rr, last = i === n;
          return <g key={`${i}-${j}`}>
            <circle cx={x} cy={y - 5} r={13} fill={hit ? C.red : last ? C.blueSoft : "#f8fafc"} stroke={hit ? C.red : C.line} />
            <text x={x} y={y} fontSize={v > 99 ? 10 : 12.5} textAnchor="middle" fontWeight={last ? 700 : 400} fill={hit ? "#fff" : C.ink}>{v}</text>
          </g>;
        }))}
      </svg>
      <Readout tone="blue">
        <MathText html={`\\((${a === 1 ? "" : a === -1 ? "-" : a}x${b < 0 ? b : `+${b}`})^{${n}}=${expansion}\\)<br/>Term with \\(r=${rr}\\): \\(\\binom{${n}}{${rr}}(${a}x)^{${n - rr}}(${b})^{${rr}}=${nCr(n, rr)}\\cdot${a ** (n - rr)}\\cdot${b ** rr < 0 ? `(${b ** rr})` : b ** rr}\\,x^{${n - rr}}=${term(rr)}\\) (red entry).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.6 testing a conjecture */

type Conj = "odd" | "euler" | "cube" | "pow2";
const CONJ: Record<Conj, { label: string; tex: string; lhs: (n: number) => number; rhs: (n: number) => number | boolean; claim: string }> = {
  odd: { label: "odd numbers", tex: "1+3+5+\\dots+(2n-1)=n^2", lhs: (n) => { let s = 0; for (let k = 1; k <= n; k++) s += 2 * k - 1; return s; }, rhs: (n) => n * n, claim: "true for every n (proof: the L-shapes build a square)" },
  euler: { label: "n² + n + 41", tex: "n^2+n+41 \\text{ is prime}", lhs: (n) => n * n + n + 41, rhs: (n) => { const v = n * n + n + 41; for (let i = 2; i * i <= v; i++) if (v % i === 0) return false; return true; }, claim: "false: it works up to n = 39 but n = 40 gives 1681 = 41²" },
  cube: { label: "sum of cubes", tex: "1^3+2^3+\\dots+n^3=\\left(\\tfrac{n(n+1)}{2}\\right)^2", lhs: (n) => { let s = 0; for (let k = 1; k <= n; k++) s += k ** 3; return s; }, rhs: (n) => (n * (n + 1) / 2) ** 2, claim: "true for every n" },
  pow2: { label: "2ⁿ > n²", tex: "2^n>n^2", lhs: (n) => 2 ** n, rhs: (n) => n * n, claim: "false for n = 2, 3, 4, true from n = 5 on: test cases alone can mislead" },
};
export function ConjectureLab({ init = "odd" }: { init?: Conj }) {
  const [c, setC] = useState<Conj>(init);
  const [n, setN] = useState(5);
  const C0 = CONJ[c];
  const ns = Array.from({ length: c === "euler" ? 42 : 10 }, (_, i) => i + (c === "euler" ? 0 : 1));
  const ok = (k: number) => (c === "euler" ? C0.rhs(k) === true : c === "pow2" ? C0.lhs(k) > (C0.rhs(k) as number) : C0.lhs(k) === C0.rhs(k));
  const firstFail = ns.find((k) => !ok(k));
  const sq = 16;
  return (
    <WidgetCard title="Test it, then prove it" subtitle="examples suggest a pattern; only a proof shows it holds for every n">
      <Row><Segmented value={c} onChange={(v) => { setC(v); setN(v === "euler" ? 40 : 5); }} options={(Object.keys(CONJ) as Conj[]).map((k) => ({ value: k, label: CONJ[k].label }))} /></Row>
      <Row><Slider label="n" value={n} min={c === "euler" ? 0 : 1} max={c === "euler" ? 41 : 10} onChange={setN} color={C.violet} /></Row>
      {c === "odd" && <svg viewBox={`0 0 ${n * sq + 20} ${n * sq + 20}`} style={{ width: "100%", maxWidth: 220, display: "block", margin: "6px auto" }} role="img" aria-label="Odd numbers as L-shapes">
        {Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => {
          const layer = Math.max(i, j);
          return <rect key={`${i}-${j}`} x={10 + j * sq} y={10 + (n - 1 - i) * sq} width={sq - 2} height={sq - 2} rx={3} fill={[C.blue, C.green, C.violet, C.amber, C.red][layer % 5]} opacity={0.8} />;
        }))}
      </svg>}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center", margin: "6px 0" }}>
        {ns.map((k) => <span key={k} style={{ padding: "3px 8px", borderRadius: 6, fontSize: 13, fontWeight: k === n ? 800 : 500, background: ok(k) ? C.greenSoft : C.redSoft, color: ok(k) ? C.green : C.red, outline: k === n ? `2px solid ${C.ink}` : "none" }}>{k} {ok(k) ? "✓" : "✗"}</span>)}
      </div>
      <Readout tone={firstFail === undefined ? "green" : "amber"}>
        <MathText html={`Conjecture: \\(${C0.tex}\\). At \\(n=${n}\\): ${c === "euler" ? `\\(${n}^2+${n}+41=${C0.lhs(n)}\\), ${ok(n) ? "prime" : "not prime"}` : c === "pow2" ? `\\(2^{${n}}=${C0.lhs(n)}\\), \\(${n}^2=${C0.rhs(n)}\\): ${ok(n) ? "true" : "false"}` : `left side \\(${C0.lhs(n)}\\), right side \\(${C0.rhs(n)}\\): ${ok(n) ? "equal" : "not equal"}`}. Overall: ${C0.claim}.${firstFail !== undefined ? ` First counterexample shown: n = ${firstFail}.` : ""}`} />
      </Readout>
    </WidgetCard>
  );
}
