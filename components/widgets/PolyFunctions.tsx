"use client";

// MHF4U chapter 1 (polynomial functions) explorers: power functions and end behaviour, polynomial features and
// finite differences, factored form and multiplicity, transformations of power functions, secants (average rate
// of change) and tangents (instantaneous rate of change).

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { r2, type View } from "./Systems";
import { Curves, dot } from "./Quadratics";

const cell: React.CSSProperties = { padding: "4px 9px", textAlign: "center", borderBottom: `1px solid ${C.line}` };
const sup = (n: number) => (n === 1 ? "" : `^{${n}}`);
const coefTex = (a: number, first: boolean, s: string) => {
  if (a === 0) return "";
  const sign = a < 0 ? "-" : first ? "" : "+";
  const mag = Math.abs(a) === 1 && s ? "" : r2(Math.abs(a));
  return `${sign}${mag}${s}`;
};
/** polynomial from coefficients [a_n, …, a_0] as LaTeX */
function polyTex(cs: number[]) {
  const n = cs.length - 1;
  const t = cs.map((a, i) => ({ a, p: n - i })).filter((o) => o.a !== 0);
  if (!t.length) return "0";
  return t.map((o, i) => coefTex(o.a, i === 0, o.p === 0 ? "" : `x${sup(o.p)}`)).join("");
}
const ev = (cs: number[], x: number) => cs.reduce((s, a) => s * x + a, 0);
const endWord = (sgnLeft: number, sgnRight: number) =>
  `as \\(x\\to-\\infty\\), \\(y\\to${sgnLeft > 0 ? "+" : "-"}\\infty\\); as \\(x\\to+\\infty\\), \\(y\\to${sgnRight > 0 ? "+" : "-"}\\infty\\)`;

/* ---------------------------------------------------------------- 1.1 power functions */

export function PowerLab({ init = [3, 1] }: { init?: [number, number] }) {
  const [n, setN] = useState(init[0]), [a, setA] = useState(init[1]);
  const [compare, setCompare] = useState(false);
  const A = a === 0 ? 1 : a;
  const right = Math.sign(A), left = n % 2 === 0 ? Math.sign(A) : -Math.sign(A);
  const view: View = { xmin: -2.5, xmax: 2.5, ymin: -8, ymax: 8 };
  const others = [1, 2, 3, 4, 5].filter((m) => m !== n).map((m, i) => ({ f: (x: number) => x ** m, color: ["#cbd5e1", "#e2e8f0", "#d1d5db", "#e5e7eb"][i % 4], width: 1.6 }));
  const quad = n === 0 ? "a horizontal line" : n % 2 === 0 ? (A > 0 ? "quadrant 2 to quadrant 1" : "quadrant 3 to quadrant 4") : A > 0 ? "quadrant 3 to quadrant 1" : "quadrant 2 to quadrant 4";
  return (
    <WidgetCard title="Power functions y = axⁿ" subtitle="the degree's parity and the sign of a decide the end behaviour">
      <Row gap={10}>
        <Slider label="degree n" value={n} min={0} max={6} onChange={setN} color={C.blue} />
        <Slider label="leading coefficient a" value={a} min={-3} max={3} step={0.5} onChange={(v) => setA(v === 0 ? 0.5 : v)} color={C.red} />
      </Row>
      <Segmented options={[{ value: "off", label: "this function only" }, { value: "on", label: "compare y = x … x⁵" }]} value={compare ? "on" : "off"} onChange={(v) => setCompare(v === "on")} />
      <div style={{ textAlign: "center", fontSize: 18, margin: "6px 0" }}><MathText html={`\\(y=${coefTex(A, true, n === 0 ? "" : `x${sup(n)}`) || r2(A)}\\)`} /></div>
      <Curves view={view} label="Power function" step={1} stepY={2} fs={[...(compare ? others : []), { f: (x) => A * x ** n, color: C.violet }]}>
        {(X, Y) => <>{dot(X, Y, 0, n === 0 ? A : 0, C.blue, undefined, "o")}{n > 0 && dot(X, Y, 1, A, C.red, `(1, ${r2(A)})`, "p")}</>}
      </Curves>
      <Readout tone="green">
        {n === 0 ? <MathText html={`Degree 0: a constant function, \\(y=${r2(A)}\\). No end behaviour change.`} /> : (
          <>
            <MathText block html={`Degree ${n} is ${n % 2 === 0 ? "<strong>even</strong>" : "<strong>odd</strong>"} and \\(a${A > 0 ? ">" : "<"}0\\): the graph goes from ${quad}; ${endWord(left, right)}.`} />
            <MathText block html={`${n % 2 === 0 ? `Even degree: symmetric about the y-axis (\\(f(-x)=f(x)\\)); range \\(y${A > 0 ? "\\ge" : "\\le"}0\\).` : `Odd degree: symmetric about the origin (\\(f(-x)=-f(x)\\)); range all real numbers.`} Domain: all real numbers.`} />
          </>
        )}
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.2 features and finite differences */

export function PolyFeatures({ init = [1, 0, -4, 0, 0] }: { init?: number[] }) {
  const [deg, setDeg] = useState<3 | 4>(init.length === 5 ? 4 : 3);
  const [cs, setCs] = useState<number[]>(init.length === 5 ? init : [0, ...init]);
  const coeffs = deg === 4 ? cs : cs.slice(1);
  const f = (x: number) => ev(coeffs, x);
  // turning points and zeros by sampling
  const xs: number[] = []; for (let i = 0; i <= 1200; i++) xs.push(-6 + (12 * i) / 1200);
  let turns = 0, zeros = 0;
  for (let i = 1; i < xs.length - 1; i++) { const d1 = f(xs[i]) - f(xs[i - 1]), d2 = f(xs[i + 1]) - f(xs[i]); if (d1 * d2 < 0) turns++; }
  for (let i = 1; i < xs.length; i++) { const p = f(xs[i - 1]), q = f(xs[i]); if (q === 0 || p * q < 0) zeros++; }
  const tx = [-2, -1, 0, 1, 2, 3, 4], ty = tx.map(f);
  const diffs: number[][] = [ty];
  for (let k = 1; k <= deg; k++) { const prev = diffs[k - 1]; diffs.push(prev.slice(1).map((v, i) => v - prev[i])); }
  const lead = coeffs[0] === 0 ? 1 : coeffs[0], fact = deg === 4 ? 24 : 6;
  const set = (i: number, v: number) => setCs((c) => c.map((x, j) => (j === i ? v : x)));
  const names = ["a (x⁴)", "b (x³)", "c (x²)", "d (x)", "e (constant)"];
  return (
    <WidgetCard title="Features of polynomial functions" subtitle="degree n: at most n zeros, at most n − 1 turning points, constant nth differences">
      <Segmented options={[{ value: 3, label: "cubic" }, { value: 4, label: "quartic" }]} value={deg} onChange={(v) => setDeg(v)} />
      <Row gap={8}>
        {names.map((nm, i) => (deg === 3 && i === 0 ? null : <Slider key={nm} label={deg === 3 ? ["", "a (x³)", "b (x²)", "c (x)", "d (constant)"][i] : nm} value={cs[i]} min={-6} max={6} step={i === (deg === 4 ? 0 : 1) ? 1 : 1} onChange={(v) => set(i, i === (deg === 4 ? 0 : 1) && v === 0 ? 1 : v)} color={i === (deg === 4 ? 0 : 1) ? C.red : C.blue} />))}
      </Row>
      <div style={{ textAlign: "center", fontSize: 18, margin: "6px 0" }}><MathText html={`\\(f(x)=${polyTex(coeffs)}\\)`} /></div>
      <Curves view={{ xmin: -5, xmax: 5, ymin: -20, ymax: 20 }} label="Polynomial" step={1} stepY={5} fs={[{ f, color: C.violet }]} />
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", margin: "0 auto", fontSize: 14 }}>
          <tbody>
            <tr><th style={cell}>x</th>{tx.map((x) => <td key={x} style={cell}>{x}</td>)}</tr>
            {diffs.map((row, k) => (
              <tr key={k}><th style={{ ...cell, color: k === deg ? C.red : C.ink }}>{k === 0 ? "f(x)" : `Δ${k}`}</th>{Array.from({ length: k }, (_, j) => <td key={"e" + j} style={cell} />)}{row.map((v, i) => <td key={i} style={{ ...cell, color: k === deg ? C.red : C.ink, fontWeight: k === deg ? 700 : 400 }}>{r2(v)}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
      <Readout tone="green">
        <MathText block html={`Degree ${deg}: the ${deg === 4 ? "fourth" : "third"} differences are constant: \\(${r2(diffs[deg][0])}=a\\cdot${deg}!=${r2(lead)}\\times${fact}\\).`} />
        <MathText block html={`This graph has <strong>${zeros}</strong> zero${zeros === 1 ? "" : "s"} (at most ${deg}) and <strong>${turns}</strong> turning point${turns === 1 ? "" : "s"} (at most ${deg - 1}). End behaviour: ${endWord(deg % 2 === 0 ? Math.sign(lead) : -Math.sign(lead), Math.sign(lead))}.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.3 factored form and multiplicity */

export function FactoredPoly({ init = { a: 1, zeros: [[-3, 1], [1, 2], [4, 1]] } }: { init?: { a: number; zeros: [number, number][] } }) {
  const [a, setA] = useState(init.a);
  const [zs, setZs] = useState<[number, number][]>(init.zeros);
  const deg = zs.reduce((s, [, m]) => s + m, 0);
  const f = (x: number) => zs.reduce((p, [r, m]) => p * (x - r) ** m, a);
  const fac = (r: number, m: number) => `${r === 0 ? "x" : `(x${r > 0 ? "-" : "+"}${Math.abs(r)})`}${m > 1 ? `^{${m}}` : ""}`;
  const tex = `${a === 1 ? "" : a === -1 ? "-" : r2(a)}${zs.map(([r, m]) => fac(r, m)).join("")}`;
  const ys = Array.from({ length: 200 }, (_, i) => f(-6 + (12 * i) / 199)).filter((v) => Number.isFinite(v));
  const hi = Math.min(60, Math.max(8, ...ys.map(Math.abs)));
  const sortedZ = [...new Set(zs.map(([r]) => r))].sort((p, q) => p - q);
  const tests = [sortedZ[0] - 1, ...sortedZ.slice(0, -1).map((r, i) => (r + sortedZ[i + 1]) / 2), sortedZ[sortedZ.length - 1] + 1];
  const setZ = (i: number, j: 0 | 1, v: number) => setZs((z) => z.map((p, k) => (k === i ? (j === 0 ? [v, p[1]] : [p[0], v]) : p)) as [number, number][]);
  const behave = (m: number) => (m === 1 ? "crosses (straight through)" : m % 2 === 0 ? "touches and turns back (bounces)" : "crosses with a flattened S-shape");
  return (
    <WidgetCard title="Factored form, zeros and multiplicity" subtitle="each factor gives a zero; its multiplicity decides how the graph meets the x-axis">
      <Row gap={8}>
        <Slider label="a" value={a} min={-2} max={2} step={0.5} onChange={(v) => setA(v === 0 ? 0.5 : v)} color={C.red} />
        {zs.map(([r, m], i) => (
          <div key={i} style={{ display: "flex", gap: 6 }}>
            <Slider label={`zero ${i + 1}`} value={r} min={-5} max={5} onChange={(v) => setZ(i, 0, v)} color={C.blue} />
            <Slider label="order" value={m} min={1} max={3} onChange={(v) => setZ(i, 1, v)} color={C.violet} />
          </div>
        ))}
      </Row>
      <div style={{ textAlign: "center", fontSize: 18, margin: "6px 0" }}><MathText html={`\\(f(x)=${tex}\\)\\quad (degree ${deg})`} /></div>
      <Curves view={{ xmin: -6, xmax: 6, ymin: -hi, ymax: hi }} label="Factored polynomial" step={1} stepY={hi > 30 ? 10 : hi > 12 ? 4 : 2} fs={[{ f, color: C.violet }]}>
        {(X, Y) => <>{zs.map(([r, m], i) => dot(X, Y, r, 0, m === 1 ? C.red : m === 2 ? C.amber : C.green, `${r}`, i))}{dot(X, Y, 0, f(0), C.blue, `(0, ${r2(f(0))})`, "y")}</>}
      </Curves>
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", margin: "0 auto", fontSize: 14 }}>
          <tbody>
            <tr><th style={cell}>test x</th>{tests.map((x, i) => <td key={i} style={cell}>{r2(x)}</td>)}</tr>
            <tr><th style={cell}>sign of f</th>{tests.map((x, i) => <td key={i} style={{ ...cell, fontWeight: 700, color: f(x) > 0 ? C.green : C.red }}>{f(x) > 0 ? "+" : "−"}</td>)}</tr>
          </tbody>
        </table>
      </div>
      <Readout tone="green">
        {zs.map(([r, m], i) => <MathText key={i} block html={`\\(x=${r}\\) (order ${m}): the graph ${behave(m)}.`} />)}
        <MathText block html={`y-intercept \\(${r2(f(0))}\\); end behaviour: ${endWord(deg % 2 === 0 ? Math.sign(a) : -Math.sign(a), Math.sign(a))}.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.4 transformations of power functions */

export function PowerTransform({ init = { n: 3, a: 2, k: 1, d: 1, c: -3 } }: { init?: { n: number; a: number; k: number; d: number; c: number } }) {
  const [n, setN] = useState<3 | 4>(init.n === 4 ? 4 : 3);
  const [a, setA] = useState(init.a), [k, setK] = useState(init.k), [d, setD] = useState(init.d), [c, setC] = useState(init.c);
  const A = a === 0 ? 0.5 : a, K = k === 0 ? 0.5 : k;
  const base = [-2, -1, 0, 1, 2].map((x) => [x, x ** n] as [number, number]);
  const img = base.map(([x, y]) => [x / K + d, A * y + c] as [number, number]);
  const kTex = K === 1 ? "x" : `${r2(K)}x`;
  const inner = d === 0 ? (K === 1 ? "x" : `${r2(K)}x`) : `${K === 1 ? "" : r2(K)}(x${d > 0 ? "-" : "+"}${Math.abs(d)})`;
  const tex = `y=${A === 1 ? "" : A === -1 ? "-" : r2(A)}${d === 0 && K === 1 ? "x" : `\\left(${inner}\\right)`}^{${n}}${c === 0 ? "" : c > 0 ? `+${c}` : c}`;
  const allY = img.map((p) => p[1]);
  const lo = Math.max(-40, Math.min(-6, ...allY) - 2), hi = Math.min(40, Math.max(6, ...allY) + 2);
  return (
    <WidgetCard title="Transforming power functions" subtitle="y = a(k(x − d))ⁿ + c maps (x, y) to (x/k + d, ay + c)">
      <Segmented options={[{ value: 3, label: "y = x³" }, { value: 4, label: "y = x⁴" }]} value={n} onChange={setN} />
      <Row gap={8}>
        <Slider label="a" value={a} min={-3} max={3} step={0.5} onChange={setA} color={C.red} />
        <Slider label="k" value={k} min={-2} max={2} step={0.5} onChange={setK} color={C.blue} />
        <Slider label="d" value={d} min={-4} max={4} onChange={setD} color={C.green} />
        <Slider label="c" value={c} min={-6} max={6} onChange={setC} color={C.amber} />
      </Row>
      <div style={{ textAlign: "center", fontSize: 18, margin: "6px 0" }}><MathText html={`\\(${tex}\\)`} /></div>
      <Curves view={{ xmin: -6, xmax: 6, ymin: lo, ymax: hi }} label="Transformed power function" step={1} stepY={hi - lo > 30 ? 5 : 2} fs={[{ f: (x) => x ** n, color: "#cbd5e1", width: 2 }, { f: (x) => A * (K * (x - d)) ** n + c, color: C.violet }]}>
        {(X, Y) => <>{img.map(([x, y], i) => dot(X, Y, x, y, C.red, undefined, i))}</>}
      </Curves>
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", margin: "0 auto", fontSize: 14 }}>
          <tbody>
            <tr><th style={cell}>{`y = x${n === 3 ? "³" : "⁴"}`}</th>{base.map(([x, y], i) => <td key={i} style={cell}>({x}, {y})</td>)}</tr>
            <tr><th style={{ ...cell, color: C.red }}>image</th>{img.map(([x, y], i) => <td key={i} style={{ ...cell, color: C.red }}>({r2(x)}, {r2(y)})</td>)}</tr>
          </tbody>
        </table>
      </div>
      <Readout tone="green">
        <MathText block html={`${Math.abs(A) !== 1 ? `Vertical ${Math.abs(A) > 1 ? "stretch" : "compression"} by ${r2(Math.abs(A))}; ` : ""}${A < 0 ? "reflection in the x-axis; " : ""}${Math.abs(K) !== 1 ? `horizontal ${Math.abs(K) > 1 ? "compression" : "stretch"} by \\(\\tfrac{1}{${r2(Math.abs(K))}}\\); ` : ""}${K < 0 ? "reflection in the y-axis; " : ""}then ${d === 0 ? "no horizontal shift" : `${Math.abs(d)} ${d > 0 ? "right" : "left"}`} and ${c === 0 ? "no vertical shift" : `${Math.abs(c)} ${c > 0 ? "up" : "down"}`}.`} />
        <MathText block html={`The ${n === 3 ? "point of symmetry" : "vertex"} \\((0,0)\\) moves to \\((${d},${c})\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.5 and 1.6 secants and tangents */

type FKey = "quad" | "cubic" | "exp" | "sin";
const FUNCS: Record<FKey, { label: string; tex: string; f: (x: number) => number; view: View; stepY: number }> = {
  quad: { label: "h = −5t² + 20t", tex: "h(t)=-5t^2+20t", f: (t) => -5 * t * t + 20 * t, view: { xmin: -0.5, xmax: 4.5, ymin: -5, ymax: 25 }, stepY: 5 },
  cubic: { label: "y = x³ − 3x", tex: "f(x)=x^3-3x", f: (x) => x ** 3 - 3 * x, view: { xmin: -3, xmax: 3, ymin: -8, ymax: 8 }, stepY: 2 },
  exp: { label: "P = 100(2)^t", tex: "P(t)=100(2)^{t}", f: (t) => 100 * 2 ** t, view: { xmin: -0.5, xmax: 4.5, ymin: -50, ymax: 1700 }, stepY: 200 },
  sin: { label: "y = 3 sin x", tex: "y=3\\sin x", f: (x) => 3 * Math.sin(x), view: { xmin: -0.5, xmax: 6.8, ymin: -4, ymax: 4 }, stepY: 1 },
};

export function SecantLab({ init = { fn: "quad" as FKey, a: 1, b: 3 } }: { init?: { fn: FKey; a: number; b: number } }) {
  const [fn, setFn] = useState<FKey>(init.fn);
  const [a, setA] = useState(init.a), [b, setB] = useState(init.b);
  const F = FUNCS[fn], fa = F.f(a), fb = F.f(b), m = b === a ? NaN : (fb - fa) / (b - a);
  const span = F.view.xmax - F.view.xmin;
  return (
    <WidgetCard title="Secants and average rate of change" subtitle="the slope of the secant through two points is the average rate of change over that interval">
      <Segmented options={(Object.keys(FUNCS) as FKey[]).map((k) => ({ value: k, label: FUNCS[k].label }))} value={fn} onChange={(k) => { setFn(k); setA(FUNCS[k].view.xmin + 0.25 * (FUNCS[k].view.xmax - FUNCS[k].view.xmin)); setB(FUNCS[k].view.xmin + 0.7 * (FUNCS[k].view.xmax - FUNCS[k].view.xmin)); }} />
      <Row gap={10}>
        <Slider label="first point x₁" value={a} min={F.view.xmin + 0.5} max={F.view.xmax - 0.5} step={span > 6 ? 0.1 : 0.25} onChange={setA} color={C.blue} />
        <Slider label="second point x₂" value={b} min={F.view.xmin + 0.5} max={F.view.xmax - 0.5} step={span > 6 ? 0.1 : 0.25} onChange={setB} color={C.red} />
      </Row>
      <Curves view={F.view} label="Secant" step={1} stepY={F.stepY} fs={[{ f: F.f, color: C.violet }, ...(Number.isFinite(m) ? [{ f: (x: number) => fa + m * (x - a), color: C.amber, width: 2.2 }] : [])]}>
        {(X, Y) => <>{dot(X, Y, a, fa, C.blue, `(${r2(a)}, ${r2(fa)})`, "a")}{dot(X, Y, b, fb, C.red, `(${r2(b)}, ${r2(fb)})`, "b")}</>}
      </Curves>
      <Readout tone={Number.isFinite(m) ? "green" : "amber"}>
        {Number.isFinite(m) ? (
          <>
            <MathText block html={`\\(${F.tex}\\): average rate of change \\(=\\dfrac{\\Delta y}{\\Delta x}=\\dfrac{${r2(fb)}-(${r2(fa)})}{${r2(b)}-(${r2(a)})}\\approx${r2(m, 3)}\\).`} />
            <MathText block html={`${m > 0 ? "Positive: the function increased overall on this interval." : m < 0 ? "Negative: the function decreased overall on this interval." : "Zero: the function has the same value at both ends (it may still have changed in between)."}`} />
          </>
        ) : <MathText html="Choose two different points." />}
      </Readout>
    </WidgetCard>
  );
}

export function TangentSlope({ init = { fn: "quad" as FKey, a: 1 } }: { init?: { fn: FKey; a: number } }) {
  const [fn, setFn] = useState<FKey>(init.fn);
  const [a, setA] = useState(init.a), [hExp, setHExp] = useState(0);
  const F = FUNCS[fn], fa = F.f(a), h = [1, 0.5, 0.1, 0.01, 0.001][hExp];
  const sec = (F.f(a + h) - fa) / h;
  const tan = (F.f(a + 1e-6) - F.f(a - 1e-6)) / 2e-6;
  const span = F.view.xmax - F.view.xmin;
  return (
    <WidgetCard title="Tangents and instantaneous rate of change" subtitle="shrink the interval: the secant slopes approach the slope of the tangent">
      <Segmented options={(Object.keys(FUNCS) as FKey[]).map((k) => ({ value: k, label: FUNCS[k].label }))} value={fn} onChange={(k) => { setFn(k); setA(FUNCS[k].view.xmin + 0.35 * (FUNCS[k].view.xmax - FUNCS[k].view.xmin)); }} />
      <Row gap={10}>
        <Slider label="point x" value={a} min={F.view.xmin + 0.5} max={F.view.xmax - 1.5} step={span > 6 ? 0.1 : 0.25} onChange={setA} color={C.blue} />
        <Slider label="interval h" value={hExp} min={0} max={4} onChange={setHExp} color={C.red} format={(v) => String([1, 0.5, 0.1, 0.01, 0.001][v])} />
      </Row>
      <Curves view={F.view} label="Tangent" step={1} stepY={F.stepY} fs={[{ f: F.f, color: C.violet }, { f: (x) => fa + sec * (x - a), color: C.amber, width: 1.8, dash: "6 4" }, { f: (x) => fa + tan * (x - a), color: C.green, width: 2.4 }]}>
        {(X, Y) => <>{dot(X, Y, a, fa, C.blue, `(${r2(a)}, ${r2(fa)})`, "a")}{dot(X, Y, a + h, F.f(a + h), C.red, undefined, "b")}</>}
      </Curves>
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", margin: "0 auto", fontSize: 14 }}>
          <tbody>
            <tr><th style={cell}>h</th>{[1, 0.5, 0.1, 0.01, 0.001].map((x) => <td key={x} style={{ ...cell, fontWeight: x === h ? 700 : 400 }}>{x}</td>)}</tr>
            <tr><th style={cell}>secant slope</th>{[1, 0.5, 0.1, 0.01, 0.001].map((x) => <td key={x} style={{ ...cell, fontWeight: x === h ? 700 : 400, color: x === h ? C.red : C.ink }}>{r2((F.f(a + x) - fa) / x, 3)}</td>)}</tr>
          </tbody>
        </table>
      </div>
      <Readout tone="green">
        <MathText block html={`Secant from \\(x=${r2(a)}\\) to \\(x=${r2(a + h)}\\): slope \\(\\dfrac{f(${r2(a)}+h)-f(${r2(a)})}{h}\\approx${r2(sec, 3)}\\) (dashed).`} />
        <MathText block html={`As \\(h\\to0\\) the slopes approach about <strong>\\(${r2(tan, 2)}\\)</strong>: the slope of the tangent (solid green), the instantaneous rate of change at \\(x=${r2(a)}\\). ${Math.abs(tan) < 0.05 ? "Zero: a local maximum or minimum." : tan > 0 ? "Positive: increasing here." : "Negative: decreasing here."}`} />
      </Readout>
    </WidgetCard>
  );
}
