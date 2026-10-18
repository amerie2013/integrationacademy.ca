"use client";

// MCR3U chapter 1 (introduction to functions) explorers: the vertical-line test and mapping diagrams,
// function notation (evaluate f(a) and solve f(x) = v), the five parent functions, domain and range as
// shadows on the axes, inverses as reflections in y = x, and y = af(k(x − d)) + c with a key-point table.

import { useState, type ReactNode } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { Plane, r2, type View } from "./Systems";
import { sgn } from "./Quadratics";

type XY = (v: number) => number;
const V8: View = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };
const cell: React.CSSProperties = { padding: "4px 10px", textAlign: "center", borderBottom: `1px solid ${C.line}` };
const n = (v: number) => (Object.is(v, -0) ? "0" : r2(v));
const neg = (v: number) => n(v).replace(/^-/, "−");

/** smooth path of y = f(x) across a view; breaks at gaps / asymptotes */
function fnPath(f: (x: number) => number, v: View, X: XY, Y: XY, lo = v.xmin, hi = v.xmax) {
  let d = "", pen = false, prev = NaN;
  const span = v.ymax - v.ymin;
  for (let j = 0; j <= 400; j++) {
    const x = lo + ((hi - lo) * j) / 400, y = f(x);
    if (!Number.isFinite(y) || y > v.ymax + span || y < v.ymin - span || (pen && Math.abs(y - prev) > span)) { pen = false; prev = y; continue; }
    d += `${pen ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)} `; pen = true; prev = y;
  }
  return d;
}
/** path through parametric points (x(t), y(t)) */
function paramPath(pts: [number, number][], X: XY, Y: XY, v: View) {
  let d = "", pen = false;
  for (const [x, y] of pts) {
    if (!Number.isFinite(x) || !Number.isFinite(y) || Math.abs(x) > 4 * (v.xmax - v.xmin) || Math.abs(y) > 4 * (v.ymax - v.ymin)) { pen = false; continue; }
    d += `${pen ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)} `; pen = true;
  }
  return d;
}
const Dot = ({ X, Y, x, y, color, label, open }: { X: XY; Y: XY; x: number; y: number; color: string; label?: string; open?: boolean }) => (
  <g><circle cx={X(x)} cy={Y(y)} r={6} fill={open ? "#fff" : color} stroke={open ? color : "#fff"} strokeWidth={open ? 2.5 : 2} />
    {label && <text x={X(x) + 8} y={Y(y) - 8} fontSize={13} fontWeight={700} fill={color} stroke="#fff" strokeWidth={3} paintOrder="stroke">{label}</text>}</g>
);

/* ---------------------------------------------------------------- 1.1 relations and functions */

type Rel = { key: string; label: string; tex: string; ys?: (t: number) => number[]; draw?: (X: XY, Y: XY) => ReactNode; pts?: [number, number][] };
const RELS: Rel[] = [
  { key: "par", label: "parabola", tex: "y=x^2-3", ys: (t) => [t * t - 3] },
  { key: "side", label: "sideways", tex: "x=y^2-2", ys: (t) => (t < -2 ? [] : t === -2 ? [0] : [Math.sqrt(t + 2), -Math.sqrt(t + 2)]) },
  { key: "circ", label: "circle", tex: "x^2+y^2=25", ys: (t) => (Math.abs(t) > 5 ? [] : Math.abs(t) === 5 ? [0] : [Math.sqrt(25 - t * t), -Math.sqrt(25 - t * t)]) },
  { key: "abs", label: "V-shape", tex: "y=|x|-4", ys: (t) => [Math.abs(t) - 4] },
  { key: "setA", label: "points A", tex: "\\{(-4,2),(-1,5),(1,5),(3,-2),(6,0)\\}", pts: [[-4, 2], [-1, 5], [1, 5], [3, -2], [6, 0]] },
  { key: "setB", label: "points B", tex: "\\{(-3,1),(0,4),(2,-1),(2,3),(5,1)\\}", pts: [[-3, 1], [0, 4], [2, -1], [2, 3], [5, 1]] },
];

function Mapping({ pts }: { pts: [number, number][] }) {
  const xs = [...new Set(pts.map((p) => p[0]))].sort((a, b) => a - b), ys = [...new Set(pts.map((p) => p[1]))].sort((a, b) => a - b);
  const H = Math.max(xs.length, ys.length) * 34 + 30, yX = (i: number, k: number) => 24 + (i + 0.5) * ((H - 30) / k);
  return (
    <svg viewBox={`0 0 340 ${H}`} style={{ width: "100%", maxWidth: 340, display: "block", margin: "6px auto" }} role="img" aria-label="Mapping diagram">
      <defs><marker id="mapArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0L10,5L0,10z" fill={C.violet} /></marker></defs>
      <text x={60} y={14} fontSize={13} fontWeight={700} textAnchor="middle" fill={C.blue}>x (domain)</text>
      <text x={280} y={14} fontSize={13} fontWeight={700} textAnchor="middle" fill={C.red}>y (range)</text>
      <ellipse cx={60} cy={H / 2 + 10} rx={42} ry={(H - 30) / 2} fill={C.blueSoft} /><ellipse cx={280} cy={H / 2 + 10} rx={42} ry={(H - 30) / 2} fill={C.redSoft} />
      {pts.map(([x, y], i) => <line key={i} x1={78} y1={yX(xs.indexOf(x), xs.length)} x2={258} y2={yX(ys.indexOf(y), ys.length)} stroke={C.violet} strokeWidth={2} markerEnd="url(#mapArrow)" />)}
      {xs.map((x, i) => <text key={"x" + x} x={60} y={yX(i, xs.length) + 5} fontSize={15} fontWeight={700} textAnchor="middle" fill={C.blue}>{neg(x)}</text>)}
      {ys.map((y, i) => <text key={"y" + y} x={280} y={yX(i, ys.length) + 5} fontSize={15} fontWeight={700} textAnchor="middle" fill={C.red}>{neg(y)}</text>)}
    </svg>
  );
}

export function RelationTest({ start = "par" }: { start?: string }) {
  const [key, setKey] = useState(start);
  const [t, setT] = useState(1);
  const R = RELS.find((r) => r.key === key) ?? RELS[0];
  const hits = R.pts ? R.pts.filter((p) => p[0] === t).map((p) => p[1]) : R.ys!(t);
  const isFn = R.pts ? new Set(R.pts.map((p) => p[0])).size === R.pts.length : key === "par" || key === "abs";
  const bad = R.pts ? R.pts.find((p, i) => R.pts!.findIndex((q) => q[0] === p[0]) !== i)?.[0] : key === "side" ? 2 : 3;
  return (
    <WidgetCard title="Is it a function?" subtitle="Slide a vertical line across the graph; read the mapping diagram">
      <Row><Segmented value={key} onChange={(k) => { setKey(k); setT(1); }} options={RELS.map((r) => ({ value: r.key, label: r.label }))} /></Row>
      <Row><Slider label="line x =" value={t} min={-7} max={7} step={R.pts ? 1 : 0.5} onChange={setT} format={neg} color={C.amber} /></Row>
      <Plane view={V8} label="Vertical line test">
        {(X, Y) => (
          <>
            {key === "par" && <path d={fnPath((x) => x * x - 3, V8, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />}
            {key === "abs" && <path d={fnPath((x) => Math.abs(x) - 4, V8, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />}
            {key === "side" && <path d={paramPath(Array.from({ length: 201 }, (_, i) => { const y = -4 + (8 * i) / 200; return [y * y - 2, y] as [number, number]; }), X, Y, V8)} fill="none" stroke={C.violet} strokeWidth={3} />}
            {key === "circ" && <circle cx={X(0)} cy={Y(0)} r={X(5) - X(0)} fill="none" stroke={C.violet} strokeWidth={3} />}
            {R.pts?.map(([x, y], i) => <Dot key={i} X={X} Y={Y} x={x} y={y} color={C.violet} />)}
            <line x1={X(t)} y1={Y(V8.ymin)} x2={X(t)} y2={Y(V8.ymax)} stroke={C.amber} strokeWidth={2.5} strokeDasharray="7 5" />
            {hits.map((y, i) => <Dot key={"h" + i} X={X} Y={Y} x={t} y={y} color={hits.length > 1 ? C.red : C.green} />)}
          </>
        )}
      </Plane>
      {R.pts && <Mapping pts={R.pts} />}
      <Readout tone={isFn ? "green" : "red"}>
        <MathText html={`\\(${R.tex}\\). The line \\(x=${n(t)}\\) meets the ${R.pts ? "set" : "graph"} at <strong>${hits.length}</strong> point${hits.length === 1 ? "" : "s"}${hits.length ? ` (y = ${hits.map(neg).join(", ")})` : ""}. ${isFn
          ? `Every vertical line meets it at most once, so each \\(x\\) has exactly one \\(y\\): <strong>a function</strong>${R.pts ? (new Set(R.pts.map((p) => p[1])).size < R.pts.length ? " (many-to-one: two x-values share a y-value, which is allowed)" : " (one-to-one)") : ""}.`
          : `Some vertical line (for example \\(x=${n(bad ?? 0)}\\)) meets it more than once, so some \\(x\\) has two \\(y\\)-values: <strong>not a function</strong>.`}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.2 function notation */

export function NotationLab({ init = [1, -2, -3] }: { init?: [number, number, number] }) {
  const [a, setA] = useState(init[0]), [b, setB] = useState(init[1]), [c, setC] = useState(init[2]);
  const [t, setT] = useState(3), [v, setV] = useState(5);
  const f = (x: number) => a * x * x + b * x + c;
  const ft = f(t);
  // solve ax² + bx + (c − v) = 0
  let sols: number[] = [];
  if (a === 0) sols = b === 0 ? [] : [(v - c) / b];
  else { const D = b * b - 4 * a * (c - v); sols = D < 0 ? [] : D === 0 ? [-b / (2 * a)] : [(-b - Math.sqrt(D)) / (2 * a), (-b + Math.sqrt(D)) / (2 * a)].sort((p, q) => p - q); }
  const view: View = { xmin: -8, xmax: 8, ymin: -10, ymax: 14 };
  const ftex = `${a === 0 ? "" : `${a === 1 ? "" : a === -1 ? "-" : r2(a)}x^2`}${b === 0 ? "" : `${b < 0 ? "-" : a === 0 ? "" : "+"}${Math.abs(b) === 1 ? "" : r2(Math.abs(b))}x`}${c === 0 ? (a === 0 && b === 0 ? "0" : "") : a === 0 && b === 0 ? r2(c) : sgn(c)}`;
  const sub = `${a === 0 ? "" : `${r2(a)}(${n(t)})^2`}${b === 0 ? "" : `${a === 0 ? r2(b) : sgn(b)}(${n(t)})`}${c === 0 ? "" : sgn(c)}`;
  return (
    <WidgetCard title="Function notation" subtitle="f(a) is the output at x = a; f(x) = v asks which inputs give v">
      <Row>
        <Slider label="a" value={a} min={-2} max={2} step={0.5} onChange={setA} format={neg} />
        <Slider label="b" value={b} min={-6} max={6} onChange={setB} format={neg} color={C.red} />
        <Slider label="c" value={c} min={-6} max={6} onChange={setC} format={neg} color={C.green} />
      </Row>
      <Row>
        <Slider label="input a" value={t} min={-6} max={6} step={0.5} onChange={setT} format={neg} color={C.blue} />
        <Slider label="target v" value={v} min={-9} max={13} onChange={setV} format={neg} color={C.amber} />
      </Row>
      <Plane view={view} label="Function notation" step={1} stepY={2}>
        {(X, Y) => (
          <>
            <path d={fnPath(f, view, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
            <line x1={X(view.xmin)} y1={Y(v)} x2={X(view.xmax)} y2={Y(v)} stroke={C.amber} strokeWidth={2} strokeDasharray="7 5" />
            <line x1={X(t)} y1={Y(0)} x2={X(t)} y2={Y(ft)} stroke={C.blue} strokeWidth={2} strokeDasharray="4 4" />
            {Number.isFinite(ft) && ft <= view.ymax && ft >= view.ymin && <Dot X={X} Y={Y} x={t} y={ft} color={C.blue} label={`f(${neg(t)}) = ${neg(ft)}`} />}
            {sols.map((s, i) => <Dot key={i} X={X} Y={Y} x={s} y={v} color={C.amber} />)}
          </>
        )}
      </Plane>
      <Readout tone="blue">
        <MathText html={`\\(f(x)=${ftex}\\). <strong>Evaluate:</strong> \\(f(${n(t)})=${sub || "0"}=${n(ft)}\\) — the point \\((${n(t)},\\ ${n(ft)})\\) is on the graph.<br/><strong>Solve</strong> \\(f(x)=${n(v)}\\): ${sols.length ? `\\(x=${sols.map(n).join("\\) or \\(x=")}\\) (where the dashed line meets the graph).` : "no real input gives this output (the dashed line misses the graph)."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- parents (shared by 1.3, 1.6–1.8) */

type ParentKey = "x" | "x2" | "sqrt" | "recip" | "abs";
type Parent = { key: ParentKey; label: string; f: (x: number) => number; pts: [number, number][]; tex: (inner: string) => string; name: string };
const PARENTS: Record<ParentKey, Parent> = {
  x: { key: "x", label: "x", name: "linear", f: (x) => x, pts: [[-2, -2], [-1, -1], [0, 0], [1, 1], [2, 2]], tex: (u) => u },
  x2: { key: "x2", label: "x²", name: "quadratic", f: (x) => x * x, pts: [[-2, 4], [-1, 1], [0, 0], [1, 1], [2, 4]], tex: (u) => (u === "x" ? "x^2" : `\\left(${u}\\right)^2`) },
  sqrt: { key: "sqrt", label: "√x", name: "square root", f: (x) => (x < 0 ? NaN : Math.sqrt(x)), pts: [[0, 0], [1, 1], [4, 2], [9, 3]], tex: (u) => `\\sqrt{${u}}` },
  recip: { key: "recip", label: "1/x", name: "reciprocal", f: (x) => (x === 0 ? NaN : 1 / x), pts: [[-2, -0.5], [-1, -1], [-0.5, -2], [0.5, 2], [1, 1], [2, 0.5]], tex: (u) => `\\frac{1}{${u}}` },
  abs: { key: "abs", label: "|x|", name: "absolute value", f: (x) => Math.abs(x), pts: [[-2, 2], [-1, 1], [0, 0], [1, 1], [2, 2]], tex: (u) => `\\left|${u}\\right|` },
};
const FACTS: Record<ParentKey, { dom: string; rng: string; more: string }> = {
  x: { dom: "\\{x\\in\\mathbb{R}\\}", rng: "\\{y\\in\\mathbb{R}\\}", more: "a straight line through the origin with slope 1; increasing everywhere; symmetric about the origin (odd)." },
  x2: { dom: "\\{x\\in\\mathbb{R}\\}", rng: "\\{y\\in\\mathbb{R}\\mid y\\ge 0\\}", more: "a parabola with vertex \\((0,0)\\); decreasing for \\(x<0\\), increasing for \\(x>0\\); symmetric about the y-axis (even)." },
  sqrt: { dom: "\\{x\\in\\mathbb{R}\\mid x\\ge 0\\}", rng: "\\{y\\in\\mathbb{R}\\mid y\\ge 0\\}", more: "half of a sideways parabola starting at \\((0,0)\\); always increasing, but more and more slowly; no symmetry." },
  recip: { dom: "\\{x\\in\\mathbb{R}\\mid x\\ne 0\\}", rng: "\\{y\\in\\mathbb{R}\\mid y\\ne 0\\}", more: "a hyperbola in quadrants 1 and 3; vertical asymptote \\(x=0\\) and horizontal asymptote \\(y=0\\); decreasing on each branch; symmetric about the origin (odd)." },
  abs: { dom: "\\{x\\in\\mathbb{R}\\}", rng: "\\{y\\in\\mathbb{R}\\mid y\\ge 0\\}", more: "a V with vertex \\((0,0)\\) and slopes \\(-1\\) and \\(1\\); decreasing for \\(x<0\\), increasing for \\(x>0\\); symmetric about the y-axis (even)." },
};

export function ParentGallery({ start = "x2" as ParentKey }: { start?: ParentKey }) {
  const [p, setP] = useState<ParentKey>(start);
  const P = PARENTS[p];
  const view: View = { xmin: -6, xmax: 10, ymin: -6, ymax: 10 };
  return (
    <WidgetCard title="The five parent functions" subtitle="Shape, key points, domain and range">
      <Row><Segmented value={p} onChange={setP} options={(Object.keys(PARENTS) as ParentKey[]).map((k) => ({ value: k, label: `f(x) = ${PARENTS[k].label}` }))} /></Row>
      <Plane view={view} label={`Parent function ${P.label}`}>
        {(X, Y) => (
          <>
            {(Object.keys(PARENTS) as ParentKey[]).filter((k) => k !== p).map((k) => <path key={k} d={fnPath(PARENTS[k].f, view, X, Y)} fill="none" stroke="#cbd5e1" strokeWidth={1.5} />)}
            {p === "recip" && <><line x1={X(0)} y1={0} x2={X(0)} y2={Y(view.ymin)} stroke={C.red} strokeDasharray="6 5" /><line x1={0} y1={Y(0)} x2={X(view.xmax)} y2={Y(0)} stroke={C.red} strokeDasharray="6 5" /></>}
            <path d={fnPath(P.f, view, X, Y)} fill="none" stroke={C.violet} strokeWidth={3.5} />
            {P.pts.map(([x, y], i) => <Dot key={i} X={X} Y={Y} x={x} y={y} color={C.blue} />)}
          </>
        )}
      </Plane>
      <table style={{ borderCollapse: "collapse", margin: "4px auto", fontSize: 14.5 }}>
        <tbody>
          <tr><th style={cell}>x</th>{P.pts.map(([x], i) => <td key={i} style={cell}>{neg(x)}</td>)}</tr>
          <tr><th style={cell}>f(x)</th>{P.pts.map(([, y], i) => <td key={i} style={cell}>{neg(y)}</td>)}</tr>
        </tbody>
      </table>
      <Readout tone="green">
        <MathText html={`<strong>\\(f(x)=${P.tex("x")}\\)</strong> (${P.name}): ${FACTS[p].more}<br/>Domain \\(${FACTS[p].dom}\\); range \\(${FACTS[p].rng}\\). The grey curves are the other four parents.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.4 domain and range */

export function DomainRangeLab({ start = "quad" }: { start?: "quad" | "root" | "recip" }) {
  const [type, setType] = useState(start);
  const [a, setA] = useState(start === "quad" ? -1 : 1), [h, setH] = useState(2), [k, setK] = useState(3);
  const [restrict, setRestrict] = useState(false), [lo, setLo] = useState(-1), [hi, setHi] = useState(5);
  const f = (x: number) => type === "quad" ? a * (x - h) ** 2 + k : type === "root" ? (x < h ? NaN : a * Math.sqrt(x - h) + k) : x === h ? NaN : a / (x - h) + k;
  const view = V8;
  // natural domain/range text
  let dom = "", rng = "";
  if (!restrict) {
    if (type === "quad") { dom = "\\{x\\in\\mathbb{R}\\}"; rng = `\\{y\\in\\mathbb{R}\\mid y${a > 0 ? "\\ge" : "\\le"}${n(k)}\\}`; }
    if (type === "root") { dom = `\\{x\\in\\mathbb{R}\\mid x\\ge ${n(h)}\\}`; rng = `\\{y\\in\\mathbb{R}\\mid y${a > 0 ? "\\ge" : "\\le"}${n(k)}\\}`; }
    if (type === "recip") { dom = `\\{x\\in\\mathbb{R}\\mid x\\ne ${n(h)}\\}`; rng = `\\{y\\in\\mathbb{R}\\mid y\\ne ${n(k)}\\}`; }
  }
  // restricted: sample the interval
  const L = type === "root" ? Math.max(lo, h) : lo, U = hi;
  const crossesAsym = type === "recip" && L < h && U > h;
  let ymin = Infinity, ymax = -Infinity;
  if (restrict && L <= U && !crossesAsym) {
    for (let j = 0; j <= 2000; j++) { const y = f(L + ((U - L) * j) / 2000); if (Number.isFinite(y)) { ymin = Math.min(ymin, y); ymax = Math.max(ymax, y); } }
    dom = `\\{x\\in\\mathbb{R}\\mid ${n(L)}\\le x\\le ${n(U)}\\}`;
    rng = `\\{y\\in\\mathbb{R}\\mid ${n(ymin)}\\le y\\le ${n(ymax)}\\}`;
  }
  const ftex = type === "quad" ? `${a === 1 ? "" : a === -1 ? "-" : n(a)}(x${sgn(-h)})^2${sgn(k)}` : type === "root" ? `${a === 1 ? "" : a === -1 ? "-" : n(a)}\\sqrt{x${sgn(-h)}}${sgn(k)}` : `\\frac{${n(a)}}{x${sgn(-h)}}${sgn(k)}`;
  const dLo = restrict ? L : type === "root" ? h : view.xmin, dHi = restrict ? U : view.xmax;
  const rLo = restrict ? ymin : type === "quad" || type === "root" ? (a > 0 ? k : view.ymin) : view.ymin, rHi = restrict ? ymax : type === "quad" || type === "root" ? (a > 0 ? view.ymax : k) : view.ymax;
  return (
    <WidgetCard title="Domain and range" subtitle="The domain is the graph's shadow on the x-axis; the range is its shadow on the y-axis">
      <Row>
        <Segmented value={type} onChange={(t) => { setType(t); setA(t === "quad" ? -1 : 1); }} options={[{ value: "quad", label: "a(x − h)² + k" }, { value: "root", label: "a√(x − h) + k" }, { value: "recip", label: "a/(x − h) + k" }]} />
        <Segmented value={restrict ? "r" : "n"} onChange={(v) => setRestrict(v === "r")} options={[{ value: "n", label: "all allowed x" }, { value: "r", label: "restrict x (context)" }]} />
      </Row>
      <Row>
        <Slider label="a" value={a} min={-2} max={2} step={1} onChange={(v) => setA(v === 0 ? 1 : v)} format={neg} />
        <Slider label="h" value={h} min={-4} max={4} onChange={setH} format={neg} color={C.red} />
        <Slider label="k" value={k} min={-4} max={4} onChange={setK} format={neg} color={C.green} />
      </Row>
      {restrict && <Row>
        <Slider label="from x =" value={lo} min={-7} max={7} onChange={setLo} format={neg} color={C.blue} />
        <Slider label="to x =" value={hi} min={-7} max={7} onChange={setHi} format={neg} color={C.blue} />
      </Row>}
      <Plane view={view} label="Domain and range">
        {(X, Y) => (
          <>
            {restrict && <path d={fnPath(f, view, X, Y)} fill="none" stroke="#cbd5e1" strokeWidth={2} />}
            <path d={restrict ? fnPath(f, view, X, Y, L, U) : fnPath(f, view, X, Y)} fill="none" stroke={C.violet} strokeWidth={3.5} />
            {type === "recip" && <><line x1={X(h)} y1={0} x2={X(h)} y2={Y(view.ymin)} stroke={C.red} strokeDasharray="6 5" /><line x1={0} y1={Y(k)} x2={X(view.xmax)} y2={Y(k)} stroke={C.red} strokeDasharray="6 5" /></>}
            {!(restrict && (L > U || crossesAsym)) && <>
              <line x1={X(dLo)} y1={Y(0)} x2={X(dHi)} y2={Y(0)} stroke={C.green} strokeWidth={9} opacity={0.45} />
              <line x1={X(0)} y1={Y(rLo)} x2={X(0)} y2={Y(rHi)} stroke={C.red} strokeWidth={9} opacity={0.35} />
              {type === "recip" && !restrict && <><circle cx={X(h)} cy={Y(0)} r={6} fill="#fff" stroke={C.green} strokeWidth={2.5} /><circle cx={X(0)} cy={Y(k)} r={6} fill="#fff" stroke={C.red} strokeWidth={2.5} /></>}
              {restrict && <><Dot X={X} Y={Y} x={L} y={f(L)} color={C.violet} /><Dot X={X} Y={Y} x={U} y={f(U)} color={C.violet} /></>}
            </>}
          </>
        )}
      </Plane>
      <Readout tone={restrict && (L > U || crossesAsym) ? "amber" : "green"}>
        <MathText html={restrict && L > U ? "Choose a starting x that is not greater than the ending x." : crossesAsym ? `The interval crosses the asymptote \\(x=${n(h)}\\), so the function is not defined on all of it. Keep the interval on one side.` :
          `\\(f(x)=${ftex}\\). <strong>Domain</strong> (green shadow): \\(${dom}\\). <strong>Range</strong> (red shadow): \\(${rng}\\).${restrict ? " In a context (time, length, number of items) only some x-values make sense, so the domain is an interval and the range is read from the lowest and highest points on that piece of the graph." : type === "recip" ? " The open circles mark the values the function never reaches." : type === "root" ? " A square root needs x − h ≥ 0." : ` The vertex \\((${n(h)},${n(k)})\\) is the ${a > 0 ? "lowest" : "highest"} point.`}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.5 inverse functions */

export function InverseLab({ start = "lin" }: { start?: "lin" | "quad" }) {
  const [mode, setMode] = useState(start);
  const [m, setM] = useState(2), [b, setB] = useState(-3);
  const [a, setA] = useState(1), [h, setH] = useState(1), [k, setK] = useState(-2), [half, setHalf] = useState<"all" | "right" | "left">("all");
  const view = V8;
  const f = (x: number) => (mode === "lin" ? m * x + b : (half === "right" && x < h) || (half === "left" && x > h) ? NaN : a * (x - h) ** 2 + k);
  const xsT = mode === "lin" ? [-2, -1, 0, 1, 2] : half === "left" ? [h - 3, h - 2, h - 1, h] : half === "right" ? [h, h + 1, h + 2, h + 3] : [h - 2, h - 1, h, h + 1, h + 2];
  const pts = Array.from({ length: 401 }, (_, i) => { const x = view.xmin + (16 * i) / 400; return [f(x), x] as [number, number]; });
  const invFn = mode === "lin" || half !== "all";
  let invTex = "";
  const xb = `x${b === 0 ? "" : sgn(-b)}`, xk = `x${k === 0 ? "" : sgn(-k)}`;
  if (mode === "lin") invTex = m === 0 ? "" : `f^{-1}(x)=${m === 1 ? xb : m === -1 ? `-(${xb})` : `\\frac{${xb}}{${n(m)}}`}`;
  else {
    const s = half === "left" ? "-" : "";
    const root = `\\sqrt{${a === 1 ? xk : a === -1 ? `-(${xk})` : `\\frac{${xk}}{${n(a)}}`}}`;
    invTex = `${half === "all" ? (h === 0 ? "y=\\pm" : "y=" + n(h) + "\\pm") : "f^{-1}(x)=" + (h === 0 ? s : n(h) + (s ? "-" : "+"))}${root}`;
  }
  const ftex = mode === "lin" ? `f(x)=${m === 0 ? "" : `${m === 1 ? "" : m === -1 ? "-" : n(m)}x`}${m === 0 ? n(b) : b === 0 ? "" : sgn(b)}` : `f(x)=${a === 1 ? "" : a === -1 ? "-" : n(a)}(x${sgn(-h)})^2${sgn(k)}${half === "right" ? `,\\ x\\ge ${n(h)}` : half === "left" ? `,\\ x\\le ${n(h)}` : ""}`;
  return (
    <WidgetCard title="A function and its inverse" subtitle="Swap x and y — the graph reflects in the line y = x">
      <Row><Segmented value={mode} onChange={setMode} options={[{ value: "lin", label: "linear" }, { value: "quad", label: "quadratic" }]} />
        {mode === "quad" && <Segmented value={half} onChange={setHalf} options={[{ value: "all", label: "all x" }, { value: "right", label: `x ≥ h` }, { value: "left", label: `x ≤ h` }]} />}</Row>
      {mode === "lin" ? <Row>
        <Slider label="m" value={m} min={-3} max={3} step={0.5} onChange={setM} format={neg} />
        <Slider label="b" value={b} min={-5} max={5} onChange={setB} format={neg} color={C.green} />
      </Row> : <Row>
        <Slider label="a" value={a} min={-2} max={2} step={1} onChange={(v) => setA(v === 0 ? 1 : v)} format={neg} />
        <Slider label="h" value={h} min={-3} max={3} onChange={setH} format={neg} color={C.red} />
        <Slider label="k" value={k} min={-4} max={4} onChange={setK} format={neg} color={C.green} />
      </Row>}
      <Plane view={view} label="Function and inverse">
        {(X, Y) => (
          <>
            <line x1={X(view.xmin)} y1={Y(view.xmin)} x2={X(view.xmax)} y2={Y(view.xmax)} stroke={C.faint} strokeWidth={2} strokeDasharray="6 5" />
            <path d={fnPath(f, view, X, Y)} fill="none" stroke={C.blue} strokeWidth={3.5} />
            <path d={paramPath(pts, X, Y, view)} fill="none" stroke={C.red} strokeWidth={3.5} />
            {xsT.map((x, i) => Number.isFinite(f(x)) && Math.abs(f(x)) <= 8 ? <g key={i}><line x1={X(x)} y1={Y(f(x))} x2={X(f(x))} y2={Y(x)} stroke={C.faint} strokeDasharray="3 4" /><Dot X={X} Y={Y} x={x} y={f(x)} color={C.blue} /><Dot X={X} Y={Y} x={f(x)} y={x} color={C.red} /></g> : null)}
          </>
        )}
      </Plane>
      <table style={{ borderCollapse: "collapse", margin: "4px auto", fontSize: 14.5 }}>
        <tbody>
          <tr><th style={{ ...cell, color: C.blue }}>f: x</th>{xsT.map((x, i) => <td key={i} style={cell}>{neg(x)}</td>)}<th style={{ ...cell, color: C.red }}>inverse: x</th>{xsT.map((x, i) => <td key={"i" + i} style={cell}>{neg(f(x))}</td>)}</tr>
          <tr><th style={{ ...cell, color: C.blue }}>y</th>{xsT.map((x, i) => <td key={i} style={cell}>{neg(f(x))}</td>)}<th style={{ ...cell, color: C.red }}>y</th>{xsT.map((x, i) => <td key={"i" + i} style={cell}>{neg(x)}</td>)}</tr>
        </tbody>
      </table>
      <Readout tone={invFn && !(mode === "lin" && m === 0) ? "green" : "amber"}>
        <MathText html={`Blue: \\(${ftex}\\). Red: the inverse (every point \\((x,y)\\) becomes \\((y,x)\\)). ${mode === "lin" && m === 0 ? "A horizontal line's inverse is a vertical line — not a function." : invFn
          ? `The inverse passes the vertical-line test, so it is a function: \\(${invTex}\\). Domain and range trade places.`
          : `The inverse \\(${invTex}\\) gives two y-values for most x, so it is <strong>not a function</strong>. Restrict the domain to \\(x\\ge ${n(h)}\\) or \\(x\\le ${n(h)}\\) to make it one.`}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.6–1.8 transformations */

const AS = [-3, -2, -1, -0.5, 0.5, 1, 2, 3];
const KS = [-3, -2, -1, -0.5, -1 / 3, 1 / 3, 0.5, 1, 2, 3];
const kTex = (k: number) => (Math.abs(Math.abs(k) - 1 / 3) < 1e-9 ? `${k < 0 ? "-" : ""}\\tfrac13` : Math.abs(Math.abs(k) - 0.5) < 1e-9 ? `${k < 0 ? "-" : ""}\\tfrac12` : n(k));
const fracWord = (v: number) => (Math.abs(v - 1 / 3) < 1e-9 ? "1/3" : Math.abs(v - 0.5) < 1e-9 ? "1/2" : n(v));

/** LaTeX for y = a f(k(x − d)) + c */
export function transTex(p: ParentKey, a: number, k: number, d: number, c: number) {
  const xd = d === 0 ? "x" : `x${sgn(-d)}`;
  const inner = k === 1 ? xd : k === -1 ? (d === 0 ? "-x" : `-(${xd})`) : d === 0 ? `${kTex(k)}x` : `${kTex(k)}(${xd})`;
  const A = a === 1 ? "" : a === -1 ? "-" : kTex(a);
  const body = p === "recip" ? (a === 1 ? `\\frac{1}{${inner}}` : a === -1 ? `-\\frac{1}{${inner}}` : `\\frac{${kTex(a)}}{${inner}}`) : `${A}${PARENTS[p].tex(inner)}`;
  return `y=${body}${c === 0 ? "" : sgn(c)}`;
}

export function FuncTransform({ parent = "x2" as ParentKey, parents = ["x", "x2", "sqrt", "recip", "abs"] as ParentKey[], show = ["a", "k", "d", "c"], init = { a: 1, k: 1, d: 0, c: 0 } }:
  { parent?: ParentKey; parents?: ParentKey[]; show?: ("a" | "k" | "d" | "c")[]; init?: { a: number; k: number; d: number; c: number } }) {
  const [p, setP] = useState<ParentKey>(parent);
  const [ai, setAi] = useState(Math.max(0, AS.indexOf(init.a))), [ki, setKi] = useState(Math.max(0, KS.findIndex((v) => Math.abs(v - init.k) < 1e-9)));
  const [d, setD] = useState(init.d), [c, setC] = useState(init.c);
  const a = show.includes("a") ? AS[ai] : init.a, k = show.includes("k") ? KS[ki] : init.k;
  const P = PARENTS[p];
  const g = (x: number) => a * P.f(k * (x - d)) + c;
  const view: View = { xmin: -10, xmax: 10, ymin: -10, ymax: 10 };
  const img = P.pts.map(([x, y]) => [x / k + d, a * y + c] as [number, number]);
  const words: string[] = [];
  if (Math.abs(a) !== 1) words.push(`vertical ${Math.abs(a) > 1 ? "stretch" : "compression"} by a factor of ${fracWord(Math.abs(a))}`);
  if (a < 0) words.push("reflection in the x-axis");
  if (Math.abs(k) !== 1) words.push(`horizontal ${Math.abs(k) < 1 ? "stretch" : "compression"} by a factor of ${fracWord(1 / Math.abs(k))}`);
  if (k < 0) words.push("reflection in the y-axis");
  if (d !== 0) words.push(`translation ${neg(Math.abs(d))} unit${Math.abs(d) === 1 ? "" : "s"} ${d > 0 ? "right" : "left"}`);
  if (c !== 0) words.push(`translation ${neg(Math.abs(c))} unit${Math.abs(c) === 1 ? "" : "s"} ${c > 0 ? "up" : "down"}`);
  // domain / range of the image
  const up = a > 0, right = k > 0;
  const dom = p === "sqrt" ? `\\{x\\in\\mathbb{R}\\mid x${right ? "\\ge" : "\\le"}${n(d)}\\}` : p === "recip" ? `\\{x\\in\\mathbb{R}\\mid x\\ne ${n(d)}\\}` : "\\{x\\in\\mathbb{R}\\}";
  const rng = p === "x" ? "\\{y\\in\\mathbb{R}\\}" : p === "recip" ? `\\{y\\in\\mathbb{R}\\mid y\\ne ${n(c)}\\}` : `\\{y\\in\\mathbb{R}\\mid y${up ? "\\ge" : "\\le"}${n(c)}\\}`;
  return (
    <WidgetCard title="Transforming a parent function" subtitle="y = a·f(k(x − d)) + c — each key point (x, y) moves to (x/k + d, ay + c)">
      {parents.length > 1 && <Row><Segmented value={p} onChange={setP} options={parents.map((q) => ({ value: q, label: `f(x) = ${PARENTS[q].label}` }))} /></Row>}
      <Row>
        {show.includes("a") && <Slider label="a" value={ai} min={0} max={AS.length - 1} onChange={setAi} format={(i) => fracWord(Math.abs(AS[i])).replace(/^/, AS[i] < 0 ? "−" : "")} color={C.blue} />}
        {show.includes("k") && <Slider label="k" value={ki} min={0} max={KS.length - 1} onChange={setKi} format={(i) => fracWord(Math.abs(KS[i])).replace(/^/, KS[i] < 0 ? "−" : "")} color={C.violet} />}
      </Row>
      <Row>
        {show.includes("d") && <Slider label="d" value={d} min={-6} max={6} onChange={setD} format={neg} color={C.red} />}
        {show.includes("c") && <Slider label="c" value={c} min={-6} max={6} onChange={setC} format={neg} color={C.green} />}
      </Row>
      <Plane view={view} label="Transformation" step={1}>
        {(X, Y) => (
          <>
            <path d={fnPath(P.f, view, X, Y)} fill="none" stroke={C.faint} strokeWidth={2.5} strokeDasharray="7 5" />
            {p === "recip" && <><line x1={X(d)} y1={0} x2={X(d)} y2={Y(view.ymin)} stroke={C.red} strokeWidth={1.5} strokeDasharray="6 5" /><line x1={0} y1={Y(c)} x2={X(view.xmax)} y2={Y(c)} stroke={C.red} strokeWidth={1.5} strokeDasharray="6 5" /></>}
            <path d={fnPath(g, view, X, Y)} fill="none" stroke={C.violet} strokeWidth={3.5} />
            {P.pts.map(([x, y], i) => <Dot key={"p" + i} X={X} Y={Y} x={x} y={y} color={C.faint} />)}
            {img.map(([x, y], i) => Math.abs(x) <= 10 && Math.abs(y) <= 10 ? <Dot key={"g" + i} X={X} Y={Y} x={x} y={y} color={C.blue} /> : null)}
          </>
        )}
      </Plane>
      <table style={{ borderCollapse: "collapse", margin: "4px auto", fontSize: 14 }}>
        <tbody>
          <tr><th style={cell}>parent (x, y)</th>{P.pts.map(([x, y], i) => <td key={i} style={cell}>({neg(x)}, {neg(y)})</td>)}</tr>
          <tr><th style={{ ...cell, color: C.blue }}>image (x/k + d, ay + c)</th>{img.map(([x, y], i) => <td key={i} style={{ ...cell, color: C.blue, fontWeight: 700 }}>({neg(x)}, {neg(y)})</td>)}</tr>
        </tbody>
      </table>
      <Readout tone="blue">
        <MathText html={`\\(${transTex(p, a, k, d, c)}\\). ${words.length ? `Apply, in order: ${words.join("; ")}.` : "No transformation: this is the parent."} Stretches and reflections first, translations last.<br/>Domain \\(${dom}\\); range \\(${rng}\\).`} />
      </Readout>
    </WidgetCard>
  );
}
