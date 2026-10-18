"use client";

// MCR3U chapter 6 (sinusoidal functions) explorers: reading periodic graphs, building sine and cosine from the unit
// circle, a Ferris-wheel model, the parameters a, k, d, c, key-point mapping, fitting an equation to a graph, and a
// data model with a threshold line for "when is it above …" questions. Angles are in degrees throughout.

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { r2 } from "./Systems";

const rad = (d: number) => (d * Math.PI) / 180;
const n = (v: number, d = 2) => { const s = r2(v, d); return s === "-0" ? "0" : s; };
const svgBox: React.CSSProperties = { width: "100%", maxWidth: 560, display: "block", margin: "8px auto" };
const cell: React.CSSProperties = { padding: "4px 10px", textAlign: "center", borderBottom: `1px solid ${C.line}` };
const txt = (x: number, y: number, t: string, color: string = C.ink, size = 13, anchor: "start" | "middle" | "end" = "middle") => (
  <text x={x} y={y} fontSize={size} fontWeight={700} fill={color} textAnchor={anchor} stroke="#fff" strokeWidth={3} paintOrder="stroke">{t}</text>
);
const trig = (fn: "sin" | "cos", x: number) => (fn === "sin" ? Math.sin(rad(x)) : Math.cos(rad(x)));
/** tex for a signed term: " + 3" / " - 3" / "" */
const sgn = (v: number) => (v === 0 ? "" : v > 0 ? ` + ${n(v)}` : ` - ${n(-v)}`);
const eqTex = (fn: "sin" | "cos", a: number, k: number, d: number, c: number) => {
  const A = a === 1 ? "" : a === -1 ? "-" : n(a);
  const inner = d === 0 ? (k === 1 ? "x" : `${n(k)}x`) : k === 1 ? `x ${d > 0 ? "-" : "+"} ${n(Math.abs(d))}^\\circ` : `${n(k)}(x ${d > 0 ? "-" : "+"} ${n(Math.abs(d))}^\\circ)`;
  return `y=${A}\\${fn}(${inner})${sgn(c)}`;
};

type Curve = { f: (x: number) => number; color: string; dash?: boolean; width?: number; from?: number; to?: number };
type Pt = { x: number; y: number; color?: string; label?: string };
/** a degree-axis graph: x from xmin to xmax, gridlines every xs / ys */
function Plot({ xmin, xmax, ymin, ymax, xs, ys, curves = [], pts = [], hl = [], vl = [], shade, xlab = "x", W = 540, H = 270 }: {
  xmin: number; xmax: number; ymin: number; ymax: number; xs: number; ys: number; curves?: Curve[]; pts?: Pt[];
  hl?: { y: number; color: string; label?: string }[]; vl?: { x: number; color: string }[]; shade?: [number, number]; xlab?: string; W?: number; H?: number;
}) {
  const L = 40, B = 24, T = 10, R = 12, w = W - L - R, h = H - T - B;
  const X = (x: number) => L + ((x - xmin) / (xmax - xmin)) * w, Y = (y: number) => T + h - ((y - ymin) / (ymax - ymin)) * h;
  const gx: number[] = [], gy: number[] = [];
  for (let x = Math.ceil(xmin / xs) * xs; x <= xmax + 1e-9; x += xs) gx.push(x);
  for (let y = Math.ceil(ymin / ys) * ys; y <= ymax + 1e-9; y += ys) gy.push(y);
  const path = (c: Curve) => {
    const a = c.from ?? xmin, b = c.to ?? xmax; let d = "";
    for (let i = 0; i <= 360; i++) { const x = a + ((b - a) * i) / 360, y = c.f(x); if (!Number.isFinite(y)) continue; d += `${d ? "L" : "M"}${X(x).toFixed(1)},${Y(Math.max(ymin - 5, Math.min(ymax + 5, y))).toFixed(1)} `; }
    return d;
  };
  const ay = Y(Math.max(ymin, Math.min(ymax, 0)));
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={svgBox} role="img" aria-label="Graph">
      <defs><clipPath id={`pc${xmin}${xmax}${ymin}${ymax}`}><rect x={L} y={T} width={w} height={h} /></clipPath></defs>
      <rect x={L} y={T} width={w} height={h} fill="#fff" stroke={C.line} />
      {shade && <rect x={X(shade[0])} y={T} width={X(shade[1]) - X(shade[0])} height={h} fill={C.amberSoft} opacity={0.7} />}
      {gx.map((x) => <g key={`x${x}`}><line x1={X(x)} y1={T} x2={X(x)} y2={T + h} stroke="#eef2f7" /><text x={X(x)} y={T + h + 16} fontSize={11} textAnchor="middle" fill={C.muted}>{n(x)}</text></g>)}
      {gy.map((y) => <g key={`y${y}`}><line x1={L} y1={Y(y)} x2={L + w} y2={Y(y)} stroke="#eef2f7" /><text x={L - 5} y={Y(y) + 4} fontSize={11} textAnchor="end" fill={C.muted}>{n(y)}</text></g>)}
      <line x1={L} y1={ay} x2={L + w} y2={ay} stroke={C.ink} strokeWidth={1.3} />
      {xmin <= 0 && xmax >= 0 && <line x1={X(0)} y1={T} x2={X(0)} y2={T + h} stroke={C.ink} strokeWidth={1.3} />}
      <text x={L + w - 2} y={ay - 5} fontSize={11} fontWeight={700} textAnchor="end" fill={C.ink}>{xlab}</text>
      <g clipPath={`url(#pc${xmin}${xmax}${ymin}${ymax})`}>
        {hl.map((l, i) => <line key={`h${i}`} x1={L} y1={Y(l.y)} x2={L + w} y2={Y(l.y)} stroke={l.color} strokeWidth={2} strokeDasharray="7 5" />)}
        {vl.map((l, i) => <line key={`v${i}`} x1={X(l.x)} y1={T} x2={X(l.x)} y2={T + h} stroke={l.color} strokeWidth={1.6} strokeDasharray="4 4" />)}
        {curves.map((c, i) => <path key={i} d={path(c)} fill="none" stroke={c.color} strokeWidth={c.width ?? 2.8} strokeDasharray={c.dash ? "7 5" : undefined} />)}
      </g>
      {hl.map((l, i) => l.label ? <g key={`hl${i}`}>{txt(L + w - 4, Y(l.y) - 6, l.label, l.color, 12, "end")}</g> : null)}
      {pts.map((p, i) => <g key={`p${i}`}><circle cx={X(p.x)} cy={Y(p.y)} r={5} fill={p.color ?? C.red} stroke="#fff" strokeWidth={1.5} />{p.label && txt(X(p.x) + 6, Y(p.y) - 9, p.label, p.color ?? C.red, 12, "start")}</g>)}
    </svg>
  );
}

/* ---------------------------------------------------------------- 6.1 reading a periodic graph */

const SHAPES = {
  tide: { name: "tide height (m) vs time (h)", f: (t: number) => 3 * Math.sin(rad(30 * t)) + 5, xmax: 36, ymin: 0, ymax: 10, xs: 3, ys: 1, period: 12, periodic: true },
  pulse: { name: "blood pressure (mm Hg) vs time (s)", f: (t: number) => { const u = ((t % 0.8) + 0.8) % 0.8; return u < 0.15 ? 80 + 40 * (u / 0.15) : u < 0.35 ? 120 - 30 * ((u - 0.15) / 0.2) : u < 0.42 ? 90 + 5 * Math.sin(Math.PI * (u - 0.35) / 0.07) : 90 - 10 * ((u - 0.42) / 0.38); }, xmax: 3.2, ymin: 60, ymax: 130, xs: 0.4, ys: 10, period: 0.8, periodic: true },
  saw: { name: "water in a tank that refills (L) vs time (min)", f: (t: number) => 20 - 4 * (((t % 5) + 5) % 5), xmax: 20, ymin: -2, ymax: 22, xs: 1, ys: 2, period: 5, periodic: true },
  damped: { name: "a bouncing spring (cm) vs time (s)", f: (t: number) => 8 * Math.exp(-0.15 * t) * Math.cos(rad(90 * t)), xmax: 20, ymin: -9, ymax: 9, xs: 2, ys: 3, period: 4, periodic: false },
} as const;
type ShapeKey = keyof typeof SHAPES;

export function PeriodicReader({ shape = "tide" }: { shape?: ShapeKey }) {
  const [k, setK] = useState<ShapeKey>(shape);
  const S = SHAPES[k];
  const [s, setS] = useState(0);
  const start = Math.min(s, S.xmax - S.period);
  let mx = -Infinity, mn = Infinity;
  for (let i = 0; i <= 600; i++) { const v = S.f((S.xmax * i) / 600); mx = Math.max(mx, v); mn = Math.min(mn, v); }
  const later = S.f(start + S.period), now = S.f(start);
  return (
    <WidgetCard title="Is it periodic?" subtitle="slide the shaded window: one period later, does the graph repeat?">
      <Row><Segmented value={k} onChange={(v) => { setK(v); setS(0); }} options={[{ value: "tide", label: "tide" }, { value: "pulse", label: "pulse" }, { value: "saw", label: "refilling tank" }, { value: "damped", label: "spring" }]} /></Row>
      <Slider label="window start" value={start} min={0} max={S.xmax - S.period} step={S.period / 20} onChange={setS} format={(v) => n(v)} color={C.amber} />
      <Plot xmin={0} xmax={S.xmax} ymin={S.ymin} ymax={S.ymax} xs={S.xs} ys={S.ys} xlab="t" shade={[start, start + S.period]} curves={[{ f: S.f, color: C.violet }]} pts={[{ x: start, y: now, color: C.blue }, { x: start + S.period, y: later, color: C.red }]} />
      <Readout tone={S.periodic ? "green" : "amber"}>
        <MathText html={S.periodic
          ? `${S.name}. Value at the start of the window \\(${n(now)}\\), one period later \\(${n(later)}\\): the pattern repeats, so the function is <strong>periodic</strong> with period \\(${S.period}\\). Max \\(${n(mx)}\\), min \\(${n(mn)}\\), so the axis is \\(y=${n((mx + mn) / 2)}\\) and the amplitude is \\(${n((mx - mn) / 2)}\\).`
          : `${S.name}. Value now \\(${n(now)}\\), ${S.period} s later \\(${n(later)}\\): the swings keep shrinking, so the cycles never repeat exactly — this is <strong>not periodic</strong>, even though it oscillates.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 6.2 sine and cosine from the unit circle */

export function UnitWave({ fn = "sin" }: { fn?: "sin" | "cos" }) {
  const [f, setF] = useState<"sin" | "cos">(fn);
  const [t, setT] = useState(120);
  const cx = 80, cy = 120, R = 62, px = cx + R * Math.cos(rad(t)), py = cy - R * Math.sin(rad(t));
  const v = trig(f, t);
  return (
    <WidgetCard title="From the unit circle to a wave" subtitle={f === "sin" ? "the height (y) of the point becomes the graph" : "the horizontal position (x) of the point becomes the graph"}>
      <Row>
        <Segmented value={f} onChange={setF} options={[{ value: "sin", label: "y = sin x" }, { value: "cos", label: "y = cos x" }]} />
      </Row>
      <Slider label="angle x" value={t} min={0} max={720} step={5} onChange={setT} format={(v) => `${v}°`} color={C.violet} />
      <svg viewBox="0 0 170 240" style={{ ...svgBox, maxWidth: 170, display: "inline-block", verticalAlign: "middle" }} role="img" aria-label="Unit circle">
        <circle cx={cx} cy={cy} r={R} fill="none" stroke={C.muted} strokeWidth={1.5} />
        <line x1={cx - R - 8} y1={cy} x2={cx + R + 8} y2={cy} stroke={C.ink} /><line x1={cx} y1={cy - R - 8} x2={cx} y2={cy + R + 8} stroke={C.ink} />
        <line x1={cx} y1={cy} x2={px} y2={py} stroke={C.violet} strokeWidth={2.5} />
        {f === "sin" ? <line x1={px} y1={cy} x2={px} y2={py} stroke={C.red} strokeWidth={3} /> : <line x1={cx} y1={py} x2={px} y2={py} stroke={C.red} strokeWidth={3} />}
        <circle cx={px} cy={py} r={5} fill={C.red} />
        {txt(cx, 225, `(${n(Math.cos(rad(t)))}, ${n(Math.sin(rad(t)))})`, C.ink, 12)}
      </svg>
      <div style={{ display: "inline-block", width: "calc(100% - 180px)", minWidth: 260, verticalAlign: "middle" }}>
        <Plot xmin={0} xmax={720} ymin={-1.5} ymax={1.5} xs={90} ys={0.5} W={420} H={230} curves={[{ f: (x) => trig(f, x), color: C.line, width: 1.5 }, { f: (x) => trig(f, x), color: C.violet, to: t }]} pts={[{ x: t, y: v, label: `(${t}°, ${n(v)})` }]} />
      </div>
      <Readout tone="green">
        <MathText html={`\\(\\${f}${t}^\\circ=${n(v, 3)}\\). Period \\(360^\\circ\\) (one full turn), amplitude \\(1\\), axis \\(y=0\\), range \\(-1\\le y\\le1\\). ${f === "sin" ? "Zeros at 0°, 180°, 360°, …; maximum at 90°." : "Maximum at 0° and 360°; zeros at 90°, 270°, …"} ${t > 360 ? `Notice \\(\\${f}${t}^\\circ=\\${f}${t - 360}^\\circ\\): the graph repeats.` : ""}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 6.3 Ferris wheel */

export function WheelLab({ init = [10, 12, 60] }: { init?: [number, number, number] }) {
  const [r, setR] = useState(init[0]), [hub, setHub] = useState(init[1]), [T, setT] = useState(init[2]), [t, setTime] = useState(Math.round(init[2] / 3));
  const H = (s: number) => hub - r * Math.cos(rad((360 * s) / T)); // rider boards at the bottom
  const ang = (360 * t) / T, cx = 80, cy = 110, S = 70 / Math.max(r, 1);
  const rx = cx + r * S * Math.sin(rad(ang)), ry = cy + r * S * Math.cos(rad(ang));
  return (
    <WidgetCard title="Riding a Ferris wheel" subtitle="height of a rider who boards at the bottom, against time">
      <Row>
        <Slider label="radius (m)" value={r} min={4} max={20} onChange={(v) => { setR(v); if (hub < v + 1) setHub(v + 1); }} color={C.blue} />
        <Slider label="hub height (m)" value={hub} min={r + 1} max={30} onChange={setHub} color={C.green} />
      </Row>
      <Row>
        <Slider label="one turn (s)" value={T} min={20} max={120} step={5} onChange={setT} color={C.violet} />
        <Slider label="time t (s)" value={t} min={0} max={2 * T} onChange={setTime} color={C.red} />
      </Row>
      <svg viewBox="0 0 170 220" style={{ ...svgBox, maxWidth: 160, display: "inline-block", verticalAlign: "middle" }} role="img" aria-label="Ferris wheel">
        <circle cx={cx} cy={cy} r={r * S} fill="none" stroke={C.blue} strokeWidth={2} />
        <line x1={cx} y1={cy} x2={rx} y2={ry} stroke={C.muted} />
        <line x1={10} y1={cy + hub * S} x2={160} y2={cy + hub * S} stroke={C.green} strokeWidth={2} />
        <circle cx={rx} cy={ry} r={6} fill={C.red} />
      </svg>
      <div style={{ display: "inline-block", width: "calc(100% - 170px)", minWidth: 260, verticalAlign: "middle" }}>
        <Plot xmin={0} xmax={2 * T} ymin={0} ymax={Math.max(10, Math.ceil((hub + r + 2) / 5) * 5)} xs={T / 4} ys={5} W={430} H={230} xlab="t" hl={[{ y: hub, color: C.green, label: "axis" }]} curves={[{ f: H, color: C.violet }]} pts={[{ x: t, y: H(t), label: `${n(H(t), 1)} m` }]} />
      </div>
      <Readout tone="green">
        <MathText html={`Max \\(${hub + r}\\) m, min \\(${hub - r}\\) m, axis \\(h=${hub}\\) m (the hub), amplitude \\(${r}\\) m (the radius), period \\(${T}\\) s. At \\(t=${t}\\) s the rider is \\(${n(H(t), 1)}\\) m high. First maximum at \\(t=${n(T / 2)}\\) s (half a turn).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 6.4 parameters a, k, d, c */

export function SinTransform({ fn = "sin", init = { a: 2, k: 1, d: 0, c: 0 } }: { fn?: "sin" | "cos"; init?: { a: number; k: number; d: number; c: number } }) {
  const [f, setF] = useState<"sin" | "cos">(fn);
  const [a, setA] = useState(init.a), [k, setK] = useState(init.k), [d, setD] = useState(init.d), [c, setC] = useState(init.c);
  const g = (x: number) => a * trig(f, k * (x - d)) + c;
  const P = 360 / Math.abs(k), lo = c - Math.abs(a), hi = c + Math.abs(a);
  return (
    <WidgetCard title="The four parameters" subtitle="y = a·sin(k(x − d)) + c compared with its parent (grey)">
      <Row><Segmented value={f} onChange={setF} options={[{ value: "sin", label: "sine" }, { value: "cos", label: "cosine" }]} /></Row>
      <Row>
        <Slider label="a" value={a} min={-4} max={4} step={0.5} onChange={setA} color={C.red} />
        <Slider label="k" value={k} min={0.5} max={4} step={0.5} onChange={setK} color={C.blue} />
      </Row>
      <Row>
        <Slider label="d" value={d} min={-180} max={180} step={15} onChange={setD} format={(v) => `${v}°`} color={C.green} />
        <Slider label="c" value={c} min={-4} max={4} step={0.5} onChange={setC} color={C.violet} />
      </Row>
      <Plot xmin={-180} xmax={720} ymin={-8} ymax={8} xs={90} ys={2} curves={[{ f: (x) => trig(f, x), color: C.muted, width: 1.5, dash: true }, { f: g, color: C.violet }]} hl={[{ y: c, color: C.green, label: `y = ${n(c)}` }]} vl={[{ x: d, color: C.amber }]} />
      <Readout tone="green">
        <MathText html={`\\(${eqTex(f, a, k, d, c)}\\). Amplitude \\(|a|=${n(Math.abs(a))}\\)${a < 0 ? " (reflected in the axis)" : ""}; period \\(\\frac{360^\\circ}{${n(k)}}=${n(P)}^\\circ\\); phase shift \\(${n(Math.abs(d))}^\\circ\\) ${d > 0 ? "right" : d < 0 ? "left" : "(none)"}; axis \\(y=${n(c)}\\); range \\(${n(lo)}\\le y\\le${n(hi)}\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 6.5 key-point mapping */

export function KeyPointMapper({ fn = "sin", init = { a: 3, k: 2, d: 30, c: 1 } }: { fn?: "sin" | "cos"; init?: { a: number; k: number; d: number; c: number } }) {
  const [f, setF] = useState<"sin" | "cos">(fn);
  const [a, setA] = useState(init.a), [k, setK] = useState(init.k), [d, setD] = useState(init.d), [c, setC] = useState(init.c);
  const base = [0, 90, 180, 270, 360].map((x) => [x, Math.round(trig(f, x))] as const);
  const img = base.map(([x, y]) => [x / k + d, a * y + c] as const);
  const xmax = Math.max(400, ...img.map((p) => p[0]) ) + 30, xmin = Math.min(-30, ...img.map((p) => p[0])) - 30;
  return (
    <WidgetCard title="Mapping the five key points" subtitle="(x, y) → (x/k + d, a·y + c)">
      <Row><Segmented value={f} onChange={setF} options={[{ value: "sin", label: "sine" }, { value: "cos", label: "cosine" }]} /></Row>
      <Row>
        <Slider label="a" value={a} min={-4} max={4} step={0.5} onChange={setA} color={C.red} />
        <Slider label="k" value={k} min={0.5} max={4} step={0.5} onChange={setK} color={C.blue} />
      </Row>
      <Row>
        <Slider label="d" value={d} min={-90} max={90} step={15} onChange={setD} format={(v) => `${v}°`} color={C.green} />
        <Slider label="c" value={c} min={-3} max={3} step={0.5} onChange={setC} color={C.violet} />
      </Row>
      <table style={{ borderCollapse: "collapse", margin: "6px auto", fontSize: 14 }}>
        <thead><tr><th style={cell}>parent (x, y)</th><th style={cell}>image (x/k + d, ay + c)</th></tr></thead>
        <tbody>{base.map(([x, y], i) => <tr key={x}><td style={cell}>({x}°, {y})</td><td style={{ ...cell, color: C.red, fontWeight: 700 }}>({n(img[i][0])}°, {n(img[i][1])})</td></tr>)}</tbody>
      </table>
      <Plot xmin={xmin} xmax={xmax} ymin={-8} ymax={8} xs={xmax - xmin > 600 ? 90 : 45} ys={2} curves={[{ f: (x) => a * trig(f, k * (x - d)) + c, color: C.violet }]} pts={img.map(([x, y]) => ({ x, y }))} hl={[{ y: c, color: C.green }]} />
      <Readout tone="green">
        <MathText html={`\\(${eqTex(f, a, k, d, c)}\\): one cycle runs from \\(${n(d)}^\\circ\\) to \\(${n(d + 360 / k)}^\\circ\\). Horizontal changes (k, then d) act on x; vertical changes (a, then c) act on y.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 6.6 fit an equation to a graph */

export function FitSinusoid({ target = { fn: "sin", a: 3, k: 2, d: 45, c: 1 } }: { target?: { fn: "sin" | "cos"; a: number; k: number; d: number; c: number } }) {
  const [f, setF] = useState<"sin" | "cos">(target.fn);
  const [a, setA] = useState(1), [k, setK] = useState(1), [d, setD] = useState(0), [c, setC] = useState(0);
  const tg = (x: number) => target.a * trig(target.fn, target.k * (x - target.d)) + target.c;
  const me = (x: number) => a * trig(f, k * (x - d)) + c;
  let err = 0; for (let i = 0; i <= 120; i++) { const x = -180 + 6 * i; err = Math.max(err, Math.abs(tg(x) - me(x))); }
  const ok = err < 0.05;
  return (
    <WidgetCard title="Match the graph" subtitle="find an equation whose graph lies exactly on the dashed curve">
      <Row><Segmented value={f} onChange={setF} options={[{ value: "sin", label: "use sine" }, { value: "cos", label: "use cosine" }]} /></Row>
      <Row>
        <Slider label="a" value={a} min={-5} max={5} step={0.5} onChange={setA} color={C.red} />
        <Slider label="k" value={k} min={0.5} max={4} step={0.5} onChange={setK} color={C.blue} />
      </Row>
      <Row>
        <Slider label="d" value={d} min={-180} max={180} step={15} onChange={setD} format={(v) => `${v}°`} color={C.green} />
        <Slider label="c" value={c} min={-5} max={5} step={0.5} onChange={setC} color={C.violet} />
      </Row>
      <Plot xmin={-180} xmax={540} ymin={-9} ymax={9} xs={45} ys={1} curves={[{ f: tg, color: C.amber, dash: true, width: 4 }, { f: me, color: C.violet }]} />
      <Readout tone={ok ? "green" : "amber"}>
        <MathText html={ok ? `Match! \\(${eqTex(f, a, k, d, c)}\\). There are many correct equations — try switching between sine and cosine and find another.` : `Your graph: \\(${eqTex(f, a, k, d, c)}\\). Read the max and min first: amplitude = (max − min)/2, axis = (max + min)/2. Then measure one period and use k = 360°/period. Last, find a starting point for d.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 6.7 data model and threshold */

const DATA = {
  daylight: { name: "hours of daylight (day of year)", xlab: "day", pts: [[0, 8.8], [30, 9.8], [60, 11.2], [90, 12.6], [120, 14.0], [150, 15.1], [172, 15.4], [200, 15.0], [230, 13.9], [260, 12.5], [290, 11.0], [320, 9.6], [355, 8.7]] as [number, number][], xmax: 365, ymin: 6, ymax: 18, xs: 30, ys: 2, init: { A: 3.4, P: 365, d: 81, c: 12.1 } },
  tide: { name: "water depth in a harbour (m) vs hours after midnight", xlab: "h", pts: [[0, 6.1], [2, 7.9], [4, 8.6], [6, 7.6], [8, 5.4], [10, 3.3], [12, 2.5], [14, 3.6], [16, 5.8], [18, 7.9], [20, 8.7], [22, 7.6], [24, 5.6]] as [number, number][], xmax: 24, ymin: 0, ymax: 10, xs: 2, ys: 1, init: { A: 3, P: 16, d: 0, c: 5.5 } },
} as const;

export function ModelLab({ dataset = "daylight" }: { dataset?: keyof typeof DATA }) {
  const [ds, setDs] = useState<keyof typeof DATA>(dataset);
  const D = DATA[ds];
  const [A, setA] = useState<number>(D.init.A), [P, setP] = useState<number>(D.init.P), [d, setD] = useState<number>(D.init.d), [c, setC] = useState<number>(D.init.c), [lvl, setLvl] = useState<number>(Math.round(D.init.c + D.init.A / 2));
  const m = (x: number) => A * Math.sin(rad((360 / P) * (x - d))) + c;
  const rms = Math.sqrt(D.pts.reduce((s, [x, y]) => s + (m(x) - y) ** 2, 0) / D.pts.length);
  // intervals where the model is above the threshold
  const iv: [number, number][] = []; let st: number | null = null;
  for (let i = 0; i <= 2000; i++) { const x = (D.xmax * i) / 2000, above = m(x) >= lvl; if (above && st === null) st = x; if (!above && st !== null) { iv.push([st, x]); st = null; } }
  if (st !== null) iv.push([st, D.xmax]);
  const change = (k: keyof typeof DATA) => { setDs(k); const I = DATA[k].init; setA(I.A); setP(I.P); setD(I.d); setC(I.c); setLvl(Math.round(I.c + I.A / 2)); };
  return (
    <WidgetCard title="Model real data" subtitle="fit y = A·sin((360/P)(x − d)) + c, then ask when it is above a level">
      <Row><Segmented value={ds} onChange={change} options={[{ value: "daylight", label: "daylight" }, { value: "tide", label: "tide" }]} /></Row>
      <Row>
        <Slider label="A" value={A} min={0.5} max={6} step={0.1} onChange={setA} format={(v) => n(v, 1)} color={C.red} />
        <Slider label="period P" value={P} min={ds === "daylight" ? 300 : 8} max={ds === "daylight" ? 420 : 24} step={ds === "daylight" ? 5 : 0.5} onChange={setP} color={C.blue} />
      </Row>
      <Row>
        <Slider label="d" value={d} min={ds === "daylight" ? 0 : -8} max={ds === "daylight" ? 180 : 8} step={ds === "daylight" ? 1 : 0.5} onChange={setD} color={C.green} />
        <Slider label="c" value={c} min={D.ymin} max={D.ymax} step={0.1} onChange={setC} format={(v) => n(v, 1)} color={C.violet} />
      </Row>
      <Slider label="level" value={lvl} min={D.ymin} max={D.ymax} step={0.5} onChange={setLvl} color={C.amber} />
      <Plot xmin={0} xmax={D.xmax} ymin={D.ymin} ymax={D.ymax} xs={D.xs} ys={D.ys} xlab={D.xlab} curves={[{ f: m, color: C.violet }]} pts={D.pts.map(([x, y]) => ({ x, y, color: C.blue }))} hl={[{ y: lvl, color: C.amber, label: `level ${n(lvl)}` }]} />
      <Readout tone={rms < 0.4 ? "green" : "amber"}>
        <MathText html={`${D.name}. Model \\(y=${n(A, 1)}\\sin\\left(\\frac{360}{${n(P, 1)}}(x-${n(d, 1)})\\right)+${n(c, 1)}\\); typical error \\(${n(rms)}\\)${rms < 0.4 ? " — a good fit" : " — keep adjusting"}. Above the level \\(${n(lvl)}\\): ${iv.length ? iv.map(([s, e]) => `\\(${n(s, 1)}\\)–\\(${n(e, 1)}\\)`).join(", ") : "never"}.`} />
      </Readout>
    </WidgetCard>
  );
}
