"use client";

// MPM2D chapter 3 (polynomials and factoring) explorers: the area model for multiplying binomials, common
// factoring and grouping step by step, the sum-and-product search for x² + bx + c, decomposition for
// ax² + bx + c, and area diagrams for the special products.

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard, btn, gcd } from "./kit";
import { Plane, r2, type View } from "./Systems";

/** a x² + b x + c as LaTeX (terms with 0 dropped) */
export function quadTex(a: number, b: number, c: number, v = "x") {
  const parts: string[] = [];
  const term = (k: number, s: string) => {
    if (k === 0) return;
    const sign = k < 0 ? "-" : parts.length ? "+" : "";
    const mag = Math.abs(k) === 1 && s ? "" : String(Math.abs(k));
    parts.push(`${sign}${mag}${s}`);
  };
  term(a, `${v}^2`); term(b, v); term(c, "");
  return parts.join("") || "0";
}
/** (m x + n) as LaTeX */
const bin = (m: number, n: number) => `(${m === 1 ? "" : m === -1 ? "-" : m}x${n === 0 ? "" : n > 0 ? `+${n}` : n})`;
const signed = (n: number) => (n < 0 ? `(${n})` : String(n));

function Parabola({ a, b, c, zeros, label }: { a: number; b: number; c: number; zeros: number[]; label: string }) {
  const f = (x: number) => a * x * x + b * x + c;
  const xs = [...zeros, -b / (2 * a)];
  const cx = xs.reduce((s, x) => s + x, 0) / xs.length;
  const xmin = Math.floor(Math.min(...xs, cx - 4) - 2), xmax = Math.ceil(Math.max(...xs, cx + 4) + 2);
  const vy = f(-b / (2 * a));
  const ymin = Math.floor(Math.min(vy, 0, f(xmin) < vy ? f(xmin) : vy) - 2), ymax = Math.ceil(Math.max(vy, 0) + Math.max(4, Math.abs(vy) * 0.6) + 2);
  const view: View = { xmin, xmax, ymin: Math.max(ymin, -40), ymax: Math.min(ymax, 40) };
  const span = Math.max(view.xmax - view.xmin, view.ymax - view.ymin);
  const step = span > 40 ? 10 : span > 20 ? 5 : span > 12 ? 2 : 1;
  return (
    <Plane view={view} label={label} step={step}>
      {(X, Y) => {
        let d = "";
        for (let i = 0; i <= 200; i++) { const x = view.xmin + ((view.xmax - view.xmin) * i) / 200; d += `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(f(x)).toFixed(1)} `; }
        return (
          <>
            <path d={d} fill="none" stroke={C.violet} strokeWidth={3} />
            {zeros.map((z, i) => <circle key={i} cx={X(z)} cy={Y(0)} r={6} fill={C.red} stroke="#fff" strokeWidth={2} />)}
          </>
        );
      }}
    </Plane>
  );
}

/* ---------------------------------------------------------------- 3.1 area model */

export function AreaModel({ init = [1, 3, 1, 2] }: { init?: [number, number, number, number] }) {
  const [a, setA] = useState(init[0]), [b, setB] = useState(init[1]), [c, setC] = useState(init[2]), [d, setD] = useState(init[3]);
  const A = a * c, B = a * d + b * c, K = b * d;
  const cell = (k: number, s: string) => `${k < 0 ? "-" : ""}${Math.abs(k) === 1 && s ? "" : Math.abs(k)}${s}`;
  const cells = [[cell(a * c, "x^2"), cell(a * d, "x")], [cell(b * c, "x"), cell(b * d, "")]];
  const tone = (k: number) => (k < 0 ? C.redSoft : C.blueSoft);
  const vals = [[a * c, a * d], [b * c, b * d]];
  return (
    <WidgetCard title="Multiplying binomials with an area model" subtitle="every term of one bracket times every term of the other">
      <Row gap={10}>
        <Slider label="a" value={a} min={1} max={4} onChange={setA} color={C.blue} />
        <Slider label="b" value={b} min={-6} max={6} onChange={setB} color={C.blue} />
        <Slider label="c" value={c} min={1} max={4} onChange={setC} color={C.red} />
        <Slider label="d" value={d} min={-6} max={6} onChange={setD} color={C.red} />
      </Row>
      <div style={{ textAlign: "center", fontSize: 19, margin: "6px 0" }}><MathText html={`\\(${bin(a, b)}${bin(c, d)}\\)`} /></div>
      <div style={{ display: "grid", gridTemplateColumns: "70px 1fr 1fr", gap: 4, maxWidth: 420, margin: "0 auto" }}>
        <div />
        <div style={{ textAlign: "center", fontWeight: 800, color: C.red }}><MathText html={`\\(${cell(c, "x")}\\)`} /></div>
        <div style={{ textAlign: "center", fontWeight: 800, color: C.red }}><MathText html={`\\(${d < 0 ? d : `+${d}`}\\)`} /></div>
        {[0, 1].map((r) => (
          <div key={r} style={{ display: "contents" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: C.blue }}><MathText html={`\\(${r === 0 ? cell(a, "x") : b < 0 ? b : `+${b}`}\\)`} /></div>
            {[0, 1].map((k) => (
              <div key={k} style={{ background: vals[r][k] === 0 ? C.panel : tone(vals[r][k]), border: `1px solid ${C.line}`, borderRadius: 8, padding: "14px 6px", textAlign: "center", fontSize: 17 }}>
                <MathText html={`\\(${vals[r][k] === 0 ? "0" : cells[r][k]}\\)`} />
              </div>
            ))}
          </div>
        ))}
      </div>
      <Readout tone="green">
        <MathText block html={`Add the four areas: \\(${cells[0][0]}${a * d === 0 ? "" : (a * d > 0 ? "+" : "") + cells[0][1]}${b * c === 0 ? "" : (b * c > 0 ? "+" : "") + cells[1][0]}${b * d === 0 ? "" : (b * d > 0 ? "+" : "") + cells[1][1]}\\). Collect the two \\(x\\)-terms: \\(${quadTex(A, B, K)}\\).`} />
        <MathText block html={`The graph of \\(y=${quadTex(A, B, K)}\\) crosses the \\(x\\)-axis where a bracket is zero: \\(x=${r2(-b / a)}\\) and \\(x=${r2(-d / c)}\\).`} />
      </Readout>
      <Parabola a={A} b={B} c={K} zeros={[-b / a, -d / c]} label="Graph of the product" />
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 3.2 common factoring and grouping */

type Steps = { label: string; expr: string; steps: string[] };
const CF: Steps[] = [
  { label: "GCF", expr: "12x^2-18x", steps: ["Numbers: the GCF of 12 and 18 is 6.", "Variables: both terms contain \\(x\\); the lowest power is \\(x^1\\).", "GCF \\(=6x\\). Divide each term: \\(12x^2\\div6x=2x\\), \\(-18x\\div6x=-3\\).", "\\(12x^2-18x=6x(2x-3)\\).", "Check: \\(6x(2x)-6x(3)=12x^2-18x\\) ✓"] },
  { label: "three terms", expr: "8a^3b-20a^2b^2+4a^2b", steps: ["Numbers: GCF of 8, 20 and 4 is 4.", "\\(a\\): lowest power \\(a^2\\). \\(b\\): lowest power \\(b\\).", "GCF \\(=4a^2b\\).", "Divide: \\(2a\\), \\(-5b\\), \\(+1\\) (the last term leaves 1, not 0).", "\\(4a^2b(2a-5b+1)\\). Check by expanding ✓"] },
  { label: "binomial factor", expr: "3x(x-4)+5(x-4)", steps: ["Both terms share the whole bracket \\((x-4)\\).", "Treat \\((x-4)\\) as the common factor.", "What is left: \\(3x\\) from the first term and \\(5\\) from the second.", "\\((x-4)(3x+5)\\).", "Check: \\(3x^2-12x+5x-20=3x^2-7x-20\\), the same as expanding the original ✓"] },
  { label: "grouping", expr: "x^3+2x^2-5x-10", steps: ["Four terms, no common factor for all: group in pairs.", "\\((x^3+2x^2)+(-5x-10)\\).", "Factor each pair: \\(x^2(x+2)-5(x+2)\\). (Take out \\(-5\\) so the brackets match.)", "Common bracket \\((x+2)\\): \\((x+2)(x^2-5)\\).", "Check: \\(x^3-5x+2x^2-10\\) ✓"] },
];
export function CommonFactor() {
  const [k, setK] = useState(0), [n, setN] = useState(1);
  const s = CF[k];
  return (
    <WidgetCard title="Common factoring, one step at a time" subtitle="the greatest common factor first — always">
      <Segmented options={CF.map((x, i) => ({ value: i, label: x.label }))} value={k} onChange={(i) => { setK(i); setN(1); }} />
      <div style={{ margin: "10px 0", fontSize: 19, textAlign: "center" }}><MathText html={`Factor \\(${s.expr}\\)`} /></div>
      <ol style={{ margin: "6px 0 10px 20px", lineHeight: 1.9 }}>
        {s.steps.slice(0, n).map((t, i) => <li key={i} style={{ color: i === n - 1 ? C.ink : C.muted }}><MathText html={t} /></li>)}
      </ol>
      <Row>
        <button type="button" style={btn()} onClick={() => setN(Math.max(1, n - 1))} disabled={n === 1}>Back</button>
        <button type="button" style={btn(true)} onClick={() => setN(Math.min(s.steps.length, n + 1))} disabled={n === s.steps.length}>Next step</button>
        <span style={{ color: C.muted, fontSize: 14 }}>step {n} of {s.steps.length}</span>
      </Row>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 3.3 x² + bx + c */

export function TrinomialFinder({ init = [7, 12] }: { init?: [number, number] }) {
  const [b, setB] = useState(init[0]), [c, setC] = useState(init[1]);
  const pairs: [number, number][] = [];
  if (c === 0) pairs.push([0, b]);
  else for (let m = 1; m <= Math.abs(c); m++) if (c % m === 0) { const n = c / m; if (m <= Math.abs(n)) { pairs.push([m, n]); pairs.push([-m, -n]); } }
  const hit = pairs.find(([m, n]) => m + n === b);
  return (
    <WidgetCard title="Factoring x² + bx + c" subtitle="find two numbers that multiply to c and add to b">
      <Row gap={10}>
        <Slider label="b" value={b} min={-12} max={12} onChange={setB} color={C.blue} />
        <Slider label="c" value={c} min={-36} max={36} onChange={setC} color={C.red} />
      </Row>
      <div style={{ textAlign: "center", fontSize: 19, margin: "6px 0" }}><MathText html={`\\(${quadTex(1, b, c)}\\)`} /></div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", margin: "0 auto", fontSize: 15 }}>
          <thead><tr>{["pair (product " + c + ")", "sum"].map((h) => <th key={h} style={{ padding: "4px 14px", borderBottom: `2px solid ${C.line}` }}>{h}</th>)}</tr></thead>
          <tbody>{pairs.slice(0, 14).map(([m, n]) => {
            const ok = m + n === b;
            return <tr key={`${m},${n}`} style={{ background: ok ? C.greenSoft : undefined, fontWeight: ok ? 800 : 400 }}><td style={{ padding: "3px 14px", textAlign: "center" }}>{m}, {n}</td><td style={{ padding: "3px 14px", textAlign: "center" }}>{m + n}{ok ? " ✓" : ""}</td></tr>;
          })}</tbody>
        </table>
      </div>
      <Readout tone={hit ? "green" : "amber"}>
        <MathText html={hit
          ? `\\(${hit[0]}\\times${signed(hit[1])}=${c}\\) and \\(${hit[0]}+${signed(hit[1])}=${b}\\), so \\(${quadTex(1, b, c)}=${hit[0] === 0 ? `x${bin(1, hit[1])}` : `${bin(1, hit[0])}${bin(1, hit[1])}`}\\). The zeros of \\(y=${quadTex(1, b, c)}\\) are \\(x=${-hit[0]}\\) and \\(x=${-hit[1]}\\) — the numbers with opposite signs.`
          : `No pair of integers multiplies to ${c} and adds to ${b}, so \\(${quadTex(1, b, c)}\\) does not factor over the integers.`} />
      </Readout>
      {hit && <Parabola a={1} b={b} c={c} zeros={[-hit[0], -hit[1]]} label="Zeros of the trinomial" />}
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 3.4 ax² + bx + c by decomposition */

export function DecompositionLab({ init = [6, 7, -3] }: { init?: [number, number, number] }) {
  const [a, setA] = useState(init[0]), [b, setB] = useState(init[1]), [c, setC] = useState(init[2]);
  const g = gcd(gcd(a, b), c) || 1;
  const A = a / g, B = b / g, K = c / g, ac = A * K;
  const G = g === 1 ? "" : String(g);
  const steps: string[] = [];
  if (g !== 1) steps.push(`Common factor first: \\(${quadTex(a, b, c)}=${g}\\left(${quadTex(A, B, K)}\\right)\\).`);
  let ok = true;
  if (K === 0) {
    steps.push(`There is no constant term, so \\(x\\) is a common factor: \\(${G}x${bin(A, B)}\\).`);
  } else {
    let pair: [number, number] | null = null;
    for (let m = -Math.abs(ac); m <= Math.abs(ac) && !pair; m++) if (m !== 0 && ac % m === 0 && m + ac / m === B) pair = [m, ac / m];
    if (!pair) ok = false;
    else {
      const [m, n] = pair;
      const g1 = gcd(A, m), p = A / g1, q = m / g1, h = n / p;
      const lead = (k: number) => (k === 1 ? "" : k === -1 ? "-" : String(k));
      steps.push(`\\(a\\cdot c=${A}\\times${signed(K)}=${ac}\\). Two numbers with product \\(${ac}\\) and sum \\(${B}\\): \\(${m}\\) and \\(${signed(n)}\\).`);
      steps.push(`Split the middle term: \\(${quadTex(A, 0, 0)}${m > 0 ? "+" : ""}${quadTex(0, m, 0)}${n > 0 ? "+" : ""}${quadTex(0, n, 0)}${K > 0 ? "+" : ""}${K}\\).`);
      steps.push(`Group and factor each pair: \\(${lead(g1)}x${bin(p, q)}${h > 0 ? "+" : "-"}${Math.abs(h) === 1 ? "" : Math.abs(h)}${bin(p, q)}\\).`);
      steps.push(`Take out the common bracket: \\(${G}${bin(p, q)}${bin(g1, h)}\\). Check by expanding.`);
    }
  }
  return (
    <WidgetCard title="Factoring ax² + bx + c by decomposition" subtitle="product a·c, sum b — split the middle term, then group">
      <Row gap={10}>
        <Slider label="a" value={a} min={1} max={8} onChange={setA} color={C.blue} />
        <Slider label="b" value={b} min={-20} max={20} onChange={setB} color={C.violet} />
        <Slider label="c" value={c} min={-15} max={15} onChange={setC} color={C.red} />
      </Row>
      <div style={{ textAlign: "center", fontSize: 19, margin: "6px 0" }}><MathText html={`\\(${quadTex(a, b, c)}\\)`} /></div>
      {ok ? (
        <ol style={{ margin: "6px 0 10px 20px", lineHeight: 1.9 }}>{steps.map((t, i) => <li key={i}><MathText html={t} /></li>)}</ol>
      ) : (
        <Readout tone="amber"><MathText html={`${steps.length ? steps[0] + " " : ""}No two integers multiply to \\(a\\cdot c=${ac}\\) and add to \\(${B}\\), so \\(${quadTex(A, B, K)}\\) does not factor over the integers.`} /></Readout>
      )}
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 3.5 special products */

export function SpecialPatterns({ init = "diff" }: { init?: "diff" | "square" }) {
  const [mode, setMode] = useState<"diff" | "square">(init);
  const [p, setP] = useState(2), [q, setQ] = useState(3);
  const S = 260, unit = S / (p * 3 + q); // diagram scale
  const big = p * 3 * unit + (mode === "square" ? q * unit : 0), small = q * unit;
  const px = p === 1 ? "x" : `${p}x`;
  return (
    <WidgetCard title="Special products as areas" subtitle="difference of squares and perfect-square trinomials">
      <Segmented options={[{ value: "diff", label: "difference of squares" }, { value: "square", label: "perfect square" }]} value={mode} onChange={setMode} />
      <Row gap={10}>
        <Slider label="coefficient of x" value={p} min={1} max={5} onChange={setP} color={C.blue} />
        <Slider label="number" value={q} min={1} max={9} onChange={setQ} color={C.red} />
      </Row>
      <svg viewBox={`-10 -10 ${S + 120} ${S + 40}`} style={{ width: "100%", maxWidth: 420, display: "block", margin: "6px auto" }} role="img" aria-label="Area diagram">
        {mode === "diff" ? (
          <>
            <rect x={0} y={0} width={big} height={big} fill={C.blueSoft} stroke={C.blue} strokeWidth={2} />
            <rect x={big - small} y={big - small} width={small} height={small} fill="#fff" stroke={C.red} strokeWidth={2} strokeDasharray="6 4" />
            <text x={big / 2} y={-2} fontSize={14} textAnchor="middle" fill={C.blue}>{px}</text>
            <text x={big - small / 2} y={big - small / 2 + 5} fontSize={13} textAnchor="middle" fill={C.red}>{q}²</text>
            <text x={big + 8} y={big / 2} fontSize={13} fill={C.ink}>({px})² − {q}²</text>
          </>
        ) : (
          <>
            {[[0, 0, p * 3 * unit, p * 3 * unit, C.blueSoft, `(${px})²`], [p * 3 * unit, 0, small, p * 3 * unit, C.violetSoft, `${p * q}x`], [0, p * 3 * unit, p * 3 * unit, small, C.violetSoft, `${p * q}x`], [p * 3 * unit, p * 3 * unit, small, small, C.redSoft, `${q * q}`]].map(([x, y, w, h, fill, t], i) => (
              <g key={i}><rect x={x as number} y={y as number} width={w as number} height={h as number} fill={fill as string} stroke={C.ink} strokeWidth={1.5} /><text x={(x as number) + (w as number) / 2} y={(y as number) + (h as number) / 2 + 5} fontSize={13} textAnchor="middle" fill={C.ink}>{t as string}</text></g>
            ))}
            <text x={p * 1.5 * unit} y={-2} fontSize={14} textAnchor="middle" fill={C.blue}>{px}</text>
            <text x={p * 3 * unit + small / 2} y={-2} fontSize={14} textAnchor="middle" fill={C.red}>{q}</text>
          </>
        )}
      </svg>
      <Readout tone="green">
        <MathText html={mode === "diff"
          ? `The blue square minus the small square: \\((${px})^2-${q}^2=${quadTex(p * p, 0, -q * q)}\\). Cut the L-shape and slide one piece over: it becomes a rectangle \\(${bin(p, q)}\\) by \\(${bin(p, -q)}\\). So \\(${quadTex(p * p, 0, -q * q)}=${bin(p, q)}${bin(p, -q)}\\).`
          : `The four pieces add to \\(${quadTex(p * p, 2 * p * q, q * q)}\\): first and last terms are squares, and the middle term is \\(2\\times${px}\\times${q}\\). So \\(${quadTex(p * p, 2 * p * q, q * q)}=${bin(p, q)}^2\\), and with a minus sign \\(${quadTex(p * p, -2 * p * q, q * q)}=${bin(p, -q)}^2\\).`} />
      </Readout>
    </WidgetCard>
  );
}
