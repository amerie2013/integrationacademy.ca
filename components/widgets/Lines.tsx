"use client";

// Chapter 4 (linear and non-linear relations) explorers, all drawn on one shared coordinate grid:
// slope & intercept, types of relations with difference tables, two lines (intersection, parallel,
// perpendicular), the line through two points (three forms), inequality regions, and a motion story.

import { useState, type ReactNode } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard, gcd } from "./kit";

type View = { xmin: number; xmax: number; ymin: number; ymax: number };
const W = 520, H = 400;

/** Exact fraction p/q as LaTeX (reduced, sign in front). */
function fr(p: number, q = 1): string {
  if (q < 0) { p = -p; q = -q; }
  const g = gcd(Math.round(p), Math.round(q)) || 1;
  p = Math.round(p) / g; q = Math.round(q) / g;
  if (q === 1) return String(p);
  return `${p < 0 ? "-" : ""}\\tfrac{${Math.abs(p)}}{${q}}`;
}
/** y = mx + b in LaTeX with m = p/q. */
function lineTex(p: number, q: number, b: number, v = "x") {
  if (p === 0) return `y=${b}`;
  const m = fr(p, q);
  const mPart = m === "1" ? v : m === "-1" ? `-${v}` : `${m}${v}`;
  return `y=${mPart}${b === 0 ? "" : b > 0 ? `+${b}` : `${b}`}`;
}
const fmt = (v: number) => { const r = Math.round(v * 100) / 100; return r < 0 ? `−${-r}` : String(r); };

/** Shared grid. children get coordinate mappers. */
function Plane({ view, children, label = "Coordinate grid" }: { view: View; children: (X: (x: number) => number, Y: (y: number) => number) => ReactNode; label?: string }) {
  const { xmin, xmax, ymin, ymax } = view;
  const X = (x: number) => ((x - xmin) / (xmax - xmin)) * W, Y = (y: number) => H - ((y - ymin) / (ymax - ymin)) * H;
  const xs: number[] = [], ys: number[] = [];
  const sx = Math.max(1, Math.round((xmax - xmin) / 12)), sy = Math.max(1, Math.round((ymax - ymin) / 12));
  for (let x = Math.ceil(xmin / sx) * sx; x <= xmax; x += sx) xs.push(x);
  for (let y = Math.ceil(ymin / sy) * sy; y <= ymax; y += sy) ys.push(y);
  return (
    <svg viewBox={`-28 -8 ${W + 40} ${H + 34}`} style={{ width: "100%", maxWidth: 560, display: "block", margin: "8px auto" }} role="img" aria-label={label}>
      <defs><clipPath id="plane-clip"><rect x={0} y={0} width={W} height={H} /></clipPath></defs>
      <rect x={0} y={0} width={W} height={H} fill="#fff" stroke={C.line} />
      {xs.map((x) => <line key={"gx" + x} x1={X(x)} y1={0} x2={X(x)} y2={H} stroke="#eef2f7" />)}
      {ys.map((y) => <line key={"gy" + y} x1={0} y1={Y(y)} x2={W} y2={Y(y)} stroke="#eef2f7" />)}
      {xmin <= 0 && xmax >= 0 && <line x1={X(0)} y1={0} x2={X(0)} y2={H} stroke={C.ink} strokeWidth={1.5} />}
      {ymin <= 0 && ymax >= 0 && <line x1={0} y1={Y(0)} x2={W} y2={Y(0)} stroke={C.ink} strokeWidth={1.5} />}
      {xs.filter((x) => x !== 0).map((x) => <text key={"tx" + x} x={X(x)} y={Math.min(H + 14, Math.max(12, Y(0) + 14))} fontSize={11} textAnchor="middle" fill={C.muted}>{fmt(x)}</text>)}
      {ys.filter((y) => y !== 0).map((y) => <text key={"ty" + y} x={Math.max(-4, Math.min(W - 4, X(0) - 5))} y={Y(y) + 4} fontSize={11} textAnchor="end" fill={C.muted}>{fmt(y)}</text>)}
      <g clipPath="url(#plane-clip)">{children(X, Y)}</g>
    </svg>
  );
}
const seg = (X: (x: number) => number, Y: (y: number) => number, m: number, b: number, v: View) => ({ x1: X(v.xmin), y1: Y(m * v.xmin + b), x2: X(v.xmax), y2: Y(m * v.xmax + b) });
const curvePath = (X: (x: number) => number, Y: (y: number) => number, f: (x: number) => number, a: number, b: number, n = 200) => {
  let d = "", pen = false;
  for (let i = 0; i <= n; i++) {
    const x = a + ((b - a) * i) / n, y = f(x);
    if (!Number.isFinite(y) || Math.abs(y) > 1e4) { pen = false; continue; }
    d += `${pen ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)} `; pen = true;
  }
  return d;
};

/* ---------------------------------------------------------------- slope & intercept */

export function SlopeExplorer({ initRise = 2, initRun = 3, initB = -1 }: { initRise?: number; initRun?: number; initB?: number }) {
  const [rise, setRise] = useState(initRise);
  const [run, setRun] = useState(initRun);
  const [b, setB] = useState(initB);
  const view = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };
  const m = rise / run;
  const kind = rise === 0 ? "horizontal line (slope 0)" : b === 0 ? "direct variation (passes through the origin)" : "partial variation (starts at the y-intercept)";
  return (
    <WidgetCard title="Slope and y-intercept" subtitle="slope = rise ÷ run; b is where the line crosses the y-axis">
      <Row>
        <Slider label="rise" value={rise} min={-6} max={6} onChange={setRise} color={C.red} />
        <Slider label="run" value={run} min={1} max={6} onChange={setRun} color={C.blue} />
        <Slider label="b" value={b} min={-6} max={6} onChange={setB} color={C.green} />
      </Row>
      <Plane view={view} label="Line with slope triangle">
        {(X, Y) => (
          <>
            <line {...seg(X, Y, m, b, view)} stroke={C.violet} strokeWidth={3} />
            <line x1={X(0)} y1={Y(b)} x2={X(run)} y2={Y(b)} stroke={C.blue} strokeWidth={2.5} strokeDasharray="5 3" />
            <line x1={X(run)} y1={Y(b)} x2={X(run)} y2={Y(b + rise)} stroke={C.red} strokeWidth={2.5} strokeDasharray="5 3" />
            <text x={(X(0) + X(run)) / 2} y={Y(b) + (rise >= 0 ? 16 : -6)} fontSize={13} fontWeight={700} fill={C.blue} textAnchor="middle">run {run}</text>
            <text x={X(run) + 6} y={(Y(b) + Y(b + rise)) / 2 + 4} fontSize={13} fontWeight={700} fill={C.red}>rise {fmt(rise)}</text>
            <circle cx={X(0)} cy={Y(b)} r={6} fill={C.green} />
            <circle cx={X(run)} cy={Y(b + rise)} r={5} fill={C.violet} />
          </>
        )}
      </Plane>
      <table style={{ borderCollapse: "collapse", fontSize: 14, margin: "4px auto 12px", fontVariantNumeric: "tabular-nums" }}>
        <tbody>
          <tr><th style={{ padding: "3px 10px", background: C.panel }}>x</th>{[-2, -1, 0, 1, 2, 3].map((x) => <td key={x} style={{ padding: "3px 10px", border: `1px solid ${C.line}` }}>{x}</td>)}</tr>
          <tr><th style={{ padding: "3px 10px", background: C.panel }}>y</th>{[-2, -1, 0, 1, 2, 3].map((x) => <td key={x} style={{ padding: "3px 10px", border: `1px solid ${C.line}` }}><MathText html={`\\(${fr(rise * x + b * run, run)}\\)`} /></td>)}</tr>
        </tbody>
      </table>
      <Readout tone="green">
        <div style={{ fontSize: 19, fontWeight: 800 }}><MathText html={`\\(${lineTex(rise, run, b)}\\)`} /></div>
        <MathText html={`Slope \\(m=\\dfrac{\\text{rise}}{\\text{run}}=\\dfrac{${rise}}{${run}}=${fr(rise, run)}\\): each step of \\(1\\) to the right changes \\(y\\) by \\(${fr(rise, run)}\\) — that is the constant first difference in the table. The y-intercept is \\(b=${b}\\). This is a ${kind}. ${rise < 0 ? "A negative slope falls from left to right." : rise > 0 ? "A positive slope rises from left to right." : ""}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- relation types */

const RELS = {
  linear: { name: "linear", tex: "y=2x+1", f: (x: number) => 2 * x + 1, view: { xmin: -4, xmax: 6, ymin: -8, ymax: 14 } },
  quadratic: { name: "quadratic", tex: "y=x^2-2", f: (x: number) => x * x - 2, view: { xmin: -5, xmax: 5, ymin: -4, ymax: 16 } },
  exponential: { name: "exponential", tex: "y=2^x", f: (x: number) => 2 ** x, view: { xmin: -3, xmax: 6, ymin: -2, ymax: 40 } },
  inverse: { name: "inverse (xy = 12)", tex: "xy=12,\\ y=\\tfrac{12}{x}", f: (x: number) => 12 / x, view: { xmin: -12, xmax: 12, ymin: -12, ymax: 12 } },
} as const;

export function RelationTypes() {
  const [k, setK] = useState<keyof typeof RELS>("linear");
  const r = RELS[k];
  const xs = k === "inverse" ? [1, 2, 3, 4, 6, 12] : [0, 1, 2, 3, 4, 5];
  const ys = xs.map(r.f);
  const d1 = ys.slice(1).map((y, i) => y - ys[i]);
  const d2 = d1.slice(1).map((d, i) => d - d1[i]);
  const ratio = ys.slice(1).map((y, i) => (ys[i] !== 0 ? y / ys[i] : NaN));
  const even = xs.every((x, i) => i === 0 || x - xs[i - 1] === 1);
  const cell = { padding: "3px 9px", border: `1px solid ${C.line}`, textAlign: "center" as const };
  const note = {
    linear: "The first differences are all the same: a constant rate of change. The graph is a straight line.",
    quadratic: "The first differences change, but the second differences are constant: a quadratic relation. The graph is a parabola (U-shape).",
    exponential: "The differences keep changing, but each y is 2 times the one before: a constant ratio. The graph curves up faster and faster.",
    inverse: "As x doubles, y halves: the product xy is always 12. The graph is a hyperbola in two pieces; it never touches the axes.",
  }[k];
  return (
    <WidgetCard title="Linear or non-linear?" subtitle="Look at the table's differences, then at the graph">
      <Segmented options={(Object.keys(RELS) as (keyof typeof RELS)[]).map((key) => ({ value: key, label: RELS[key].name }))} value={k} onChange={setK} />
      <Plane view={r.view} label={`Graph of ${r.name}`}>
        {(X, Y) => (
          <>
            {k === "inverse"
              ? <><path d={curvePath(X, Y, r.f, r.view.xmin, -0.5)} fill="none" stroke={C.violet} strokeWidth={3} /><path d={curvePath(X, Y, r.f, 0.5, r.view.xmax)} fill="none" stroke={C.violet} strokeWidth={3} /></>
              : <path d={curvePath(X, Y, r.f, r.view.xmin, r.view.xmax)} fill="none" stroke={C.violet} strokeWidth={3} />}
            {xs.map((x, i) => <circle key={i} cx={X(x)} cy={Y(ys[i])} r={4.5} fill={C.amber} />)}
          </>
        )}
      </Plane>
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", fontSize: 14, margin: "4px auto 12px", fontVariantNumeric: "tabular-nums" }}>
          <tbody>
            <tr><th style={{ ...cell, background: C.panel }}>x</th>{xs.map((x) => <td key={x} style={cell}>{x}</td>)}</tr>
            <tr><th style={{ ...cell, background: C.panel }}>y</th>{ys.map((y, i) => <td key={i} style={cell}>{fmt(y)}</td>)}</tr>
            {even && <tr><th style={{ ...cell, background: C.panel }}>1st diff.</th><td style={cell} />{d1.map((d, i) => <td key={i} style={{ ...cell, color: C.blue, fontWeight: 700 }}>{fmt(d)}</td>)}</tr>}
            {even && k !== "linear" && <tr><th style={{ ...cell, background: C.panel }}>2nd diff.</th><td style={cell} /><td style={cell} />{d2.map((d, i) => <td key={i} style={{ ...cell, color: C.red, fontWeight: 700 }}>{fmt(d)}</td>)}</tr>}
            {k === "exponential" && <tr><th style={{ ...cell, background: C.panel }}>ratio</th><td style={cell} />{ratio.map((q, i) => <td key={i} style={{ ...cell, color: C.green, fontWeight: 700 }}>{fmt(q)}</td>)}</tr>}
            {k === "inverse" && <tr><th style={{ ...cell, background: C.panel }}>x·y</th>{xs.map((x, i) => <td key={i} style={{ ...cell, color: C.green, fontWeight: 700 }}>{fmt(x * ys[i])}</td>)}</tr>}
          </tbody>
        </table>
      </div>
      <Readout tone={k === "linear" ? "green" : "amber"}>
        <div style={{ fontSize: 18, fontWeight: 800 }}><MathText html={`\\(${r.tex}\\) — ${r.name}`} /></div>
        {note}
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- two lines */

export function LinePair({ init = [1, 2, -2, 8] }: { init?: [number, number, number, number] }) {
  const [m1, setM1] = useState(init[0]); const [b1, setB1] = useState(init[1]);
  const [m2, setM2] = useState(init[2]); const [b2, setB2] = useState(init[3]);
  const view = { xmin: -10, xmax: 10, ymin: -10, ymax: 10 };
  const parallel = m1 === m2, perp = Math.abs(m1 * m2 + 1) < 1e-9;
  const xi = parallel ? NaN : (b2 - b1) / (m1 - m2), yi = m1 * xi + b1;
  const r2 = (v: number) => Math.round(v * 100) / 100;
  return (
    <WidgetCard title="Two lines" subtitle="Where do they meet? Are they parallel or perpendicular?">
      <Row gap={10}>
        <Slider label="m₁" value={m1} min={-4} max={4} step={0.5} onChange={setM1} color={C.blue} format={fmt} />
        <Slider label="b₁" value={b1} min={-8} max={8} onChange={setB1} color={C.blue} />
      </Row>
      <Row gap={10} style={{ marginTop: 4 }}>
        <Slider label="m₂" value={m2} min={-4} max={4} step={0.5} onChange={setM2} color={C.red} format={fmt} />
        <Slider label="b₂" value={b2} min={-8} max={8} onChange={setB2} color={C.red} />
      </Row>
      <Plane view={view} label="Two lines">
        {(X, Y) => (
          <>
            <line {...seg(X, Y, m1, b1, view)} stroke={C.blue} strokeWidth={3} />
            <line {...seg(X, Y, m2, b2, view)} stroke={C.red} strokeWidth={3} />
            {!parallel && <circle cx={X(xi)} cy={Y(yi)} r={6.5} fill={C.green} stroke="#fff" strokeWidth={2} />}
          </>
        )}
      </Plane>
      <Readout tone={parallel ? "amber" : "green"}>
        <MathText block html={`<span style="color:${C.blue};font-weight:800">\\(y=${fmt(m1).replace("−", "-")}x${b1 < 0 ? "" : "+"}${b1}\\)</span> and <span style="color:${C.red};font-weight:800">\\(y=${fmt(m2).replace("−", "-")}x${b2 < 0 ? "" : "+"}${b2}\\)</span>`} />
        <MathText block html={parallel
          ? (b1 === b2 ? "Same slope and same intercept: the lines are identical (every point is shared)." : `Same slope \\(${fmt(m1).replace("−", "-")}\\), different intercepts: the lines are <strong>parallel</strong> and never meet — no solution.`)
          : `They meet where \\(${fmt(m1).replace("−", "-")}x${b1 < 0 ? "" : "+"}${b1}=${fmt(m2).replace("−", "-")}x${b2 < 0 ? "" : "+"}${b2}\\): \\(x=${r2(xi)}\\), \\(y=${r2(yi)}\\). Point of intersection \\((${r2(xi)},\\ ${r2(yi)})\\).${perp ? ` The slopes multiply to \\(-1\\): the lines are <strong>perpendicular</strong>.` : ""}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- line through two points */

export function TwoPointLine({ init = [-3, -1, 3, 3] }: { init?: [number, number, number, number] }) {
  const [x1, setX1] = useState(init[0]); const [y1, setY1] = useState(init[1]);
  const [x2, setX2] = useState(init[2]); const [y2, setY2] = useState(init[3]);
  const view = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };
  const dx = x2 - x1, dy = y2 - y1;
  let body: string;
  if (dx === 0 && dy === 0) body = "Choose two different points.";
  else if (dx === 0) body = `The run is \\(0\\), so the slope is undefined: the line is vertical, \\(x=${x1}\\).`;
  else {
    // y = (dy/dx) x + b, b = y1 - (dy/dx) x1 = (y1*dx - dy*x1)/dx
    const bn = y1 * dx - dy * x1;
    const g = gcd(gcd(dy, dx), bn) || 1;
    let A = dy / g, B = -dx / g, Cc = bn / g; // dy x - dx y + bn = 0
    if (A < 0 || (A === 0 && B < 0)) { A = -A; B = -B; Cc = -Cc; }
    const gen = `${A === 0 ? "" : `${A === 1 ? "" : A === -1 ? "-" : A}x`}${B === 0 ? "" : `${B > 0 && A !== 0 ? "+" : B < 0 ? "-" : ""}${Math.abs(B) === 1 ? "" : Math.abs(B)}y`}${Cc === 0 ? "" : Cc > 0 ? `+${Cc}` : `${Cc}`}=0`;
    body = `\\(m=\\dfrac{y_2-y_1}{x_2-x_1}=\\dfrac{${y2}-(${y1})}{${x2}-(${x1})}=\\dfrac{${dy}}{${dx}}=${fr(dy, dx)}\\).<br/>Substitute \\((${x1},${y1})\\) into \\(y=mx+b\\): \\(${y1}=${fr(dy, dx)}(${x1})+b\\), so \\(b=${fr(bn, dx)}\\).<br/>Slope–intercept form: \\(y=${fr(dy, dx) === "0" ? "" : `${fr(dy, dx)}x`}${bn === 0 ? (dy === 0 ? "0" : "") : (bn * dx > 0 && dy !== 0 ? "+" : "") + fr(bn, dx)}\\). &nbsp; General form: \\(${gen}\\).`;
  }
  return (
    <WidgetCard title="The line through two points" subtitle="slope from the two points, then b, then the equation">
      <Row gap={10}>
        <Slider label="x₁" value={x1} min={-7} max={7} onChange={setX1} color={C.blue} />
        <Slider label="y₁" value={y1} min={-7} max={7} onChange={setY1} color={C.blue} />
      </Row>
      <Row gap={10} style={{ marginTop: 4 }}>
        <Slider label="x₂" value={x2} min={-7} max={7} onChange={setX2} color={C.red} />
        <Slider label="y₂" value={y2} min={-7} max={7} onChange={setY2} color={C.red} />
      </Row>
      <Plane view={view} label="Line through two points">
        {(X, Y) => (
          <>
            {dx !== 0 ? <line {...seg(X, Y, dy / dx, y1 - (dy / dx) * x1, view)} stroke={C.violet} strokeWidth={3} /> : dy !== 0 ? <line x1={X(x1)} y1={0} x2={X(x1)} y2={H} stroke={C.violet} strokeWidth={3} /> : null}
            <line x1={X(x1)} y1={Y(y1)} x2={X(x2)} y2={Y(y1)} stroke={C.blue} strokeDasharray="5 3" strokeWidth={2} />
            <line x1={X(x2)} y1={Y(y1)} x2={X(x2)} y2={Y(y2)} stroke={C.red} strokeDasharray="5 3" strokeWidth={2} />
            <circle cx={X(x1)} cy={Y(y1)} r={6} fill={C.blue} /><circle cx={X(x2)} cy={Y(y2)} r={6} fill={C.red} />
          </>
        )}
      </Plane>
      <Readout tone="green"><MathText html={body} /></Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- inequality regions */

export function InequalityRegion({ initM = 0.5, initB = 1 }: { initM?: number; initB?: number }) {
  const [m, setM] = useState(initM); const [b, setB] = useState(initB);
  const [op, setOp] = useState<"<" | "<=" | ">" | ">=">(">");
  const [px, setPx] = useState(2); const [py, setPy] = useState(5);
  const view = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };
  const above = op === ">" || op === ">=", solid = op.includes("=");
  const lhs = py, rhs = m * px + b;
  const ok = op === "<" ? lhs < rhs : op === "<=" ? lhs <= rhs : op === ">" ? lhs > rhs : lhs >= rhs;
  const opTex = { "<": "<", "<=": "\\le", ">": ">", ">=": "\\ge" }[op];
  return (
    <WidgetCard title="Graphing a linear inequality" subtitle="The boundary line, then shade the side that works">
      <Row gap={10}>
        <Slider label="m" value={m} min={-3} max={3} step={0.5} onChange={setM} color={C.violet} format={fmt} />
        <Slider label="b" value={b} min={-6} max={6} onChange={setB} color={C.violet} />
      </Row>
      <div style={{ margin: "8px 0" }}><Segmented options={[{ value: "<", label: "y <" }, { value: "<=", label: "y ≤" }, { value: ">", label: "y >" }, { value: ">=", label: "y ≥" }]} value={op} onChange={setOp} /></div>
      <Row gap={10}>
        <Slider label="test x" value={px} min={-7} max={7} onChange={setPx} color={ok ? C.green : C.red} />
        <Slider label="test y" value={py} min={-7} max={7} onChange={setPy} color={ok ? C.green : C.red} />
      </Row>
      <Plane view={view} label="Inequality region">
        {(X, Y) => {
          const s = seg(X, Y, m, b, view);
          const edge = above ? 0 : H;
          return (
            <>
              <polygon points={`${s.x1},${s.y1} ${s.x2},${s.y2} ${W},${edge} 0,${edge}`} fill={C.greenSoft} opacity={0.8} />
              <line {...s} stroke={C.violet} strokeWidth={3} strokeDasharray={solid ? undefined : "8 6"} />
              <circle cx={X(px)} cy={Y(py)} r={7} fill={ok ? C.green : C.red} stroke="#fff" strokeWidth={2} />
            </>
          );
        }}
      </Plane>
      <Readout tone={ok ? "green" : "red"}>
        <div style={{ fontSize: 18, fontWeight: 800 }}><MathText html={`\\(y${opTex}${fmt(m).replace("−", "-")}x${b < 0 ? "" : "+"}${b}\\)`} /></div>
        <MathText html={`Boundary \\(y=${fmt(m).replace("−", "-")}x${b < 0 ? "" : "+"}${b}\\) is ${solid ? "<strong>solid</strong> (points on it are included)" : "<strong>dashed</strong> (points on it are not included)"}. Shade ${above ? "above" : "below"} the line. Test \\((${px}, ${py})\\): \\(${py}${opTex}${fmt(rhs).replace("−", "-")}\\) is ${ok ? "<strong>true</strong> — the point is in the region" : "<strong>false</strong> — the point is not in the region"}.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- motion story */

type Leg = { dur: number; to: number; text: string };
export function MotionStory({ legs = [{ dur: 4, to: 600, text: "walks to the store" }, { dur: 3, to: 600, text: "shops (stays still)" }, { dur: 2, to: 0, text: "runs home" }], unit = "m", tUnit = "min", title = "Distance from home" }: { legs?: Leg[]; unit?: string; tUnit?: string; title?: string }) {
  const total = legs.reduce((s, l) => s + l.dur, 0);
  const pts: [number, number][] = [[0, 0]];
  legs.forEach((l) => pts.push([pts[pts.length - 1][0] + l.dur, l.to]));
  const ymax = Math.max(...pts.map((p) => p[1])) * 1.2 || 10;
  const [t, setT] = useState(1);
  let i = pts.findIndex((p, j) => j > 0 && t <= p[0]); if (i < 1) i = pts.length - 1;
  const [ta, da] = pts[i - 1], [tb, db] = pts[i];
  const d = da + ((db - da) * (t - ta)) / (tb - ta || 1);
  const speed = (db - da) / (tb - ta || 1);
  const view = { xmin: 0, xmax: total, ymin: 0, ymax };
  return (
    <WidgetCard title={title} subtitle="A graph that tells a story: steepness = speed, flat = stopped">
      <Row><Slider label={`time (${tUnit})`} value={t} min={0} max={total} step={0.25} onChange={setT} color={C.violet} format={(v) => String(v)} /></Row>
      <Plane view={view} label="Distance-time graph">
        {(X, Y) => (
          <>
            <polyline points={pts.map(([a, b]) => `${X(a)},${Y(b)}`).join(" ")} fill="none" stroke={C.blue} strokeWidth={3} />
            <line x1={X(t)} y1={0} x2={X(t)} y2={H} stroke={C.violet} strokeDasharray="4 4" />
            <circle cx={X(t)} cy={Y(d)} r={7} fill={C.violet} />
          </>
        )}
      </Plane>
      <Readout tone="blue">
        <MathText html={`At \\(t=${t}\\) ${tUnit} the distance is \\(${fmt(d).replace("−", "-")}\\) ${unit}. During this part the person <strong>${legs[i - 1].text}</strong>: rate \\(${fmt(speed).replace("−", "-")}\\) ${unit}/${tUnit}${speed === 0 ? " (a flat segment means not moving)" : speed < 0 ? " (negative: coming back toward home)" : ""}.`} />
      </Readout>
    </WidgetCard>
  );
}
