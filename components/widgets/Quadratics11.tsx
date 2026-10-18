"use client";

// MCR3U chapter 3 (quadratic functions) explorers: one parabola in three forms, revenue/price optimisation,
// the discriminant as a function of a parameter, families of parabolas with the same zeros, and the tangent
// line of a linear–quadratic system.

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { r2, type View } from "./Systems";
import { Curves, dot, stdForm, vertexForm, sgn } from "./Quadratics";

const n = (v: number, d = 2) => r2(v, d);
const roots = (a: number, b: number, c: number) => {
  if (a === 0) return b === 0 ? [] : [-c / b];
  const D = b * b - 4 * a * c;
  if (D < -1e-12) return [];
  if (Math.abs(D) < 1e-12) return [-b / (2 * a)];
  return [(-b - Math.sqrt(D)) / (2 * a), (-b + Math.sqrt(D)) / (2 * a)].sort((p, q) => p - q);
};
const cell: React.CSSProperties = { padding: "4px 10px", textAlign: "center", borderBottom: `1px solid ${C.line}` };
const fac = (a: number, r: number, s: number) => `${a === 1 ? "" : a === -1 ? "-" : n(a)}(x${sgn(-r)})(x${sgn(-s)})`.replace("(x+0)", "x").replace("(x-0)", "x");

/* ---------------------------------------------------------------- 3.1 three forms */

export function QuadForms({ init = [1, -1, 3] }: { init?: [number, number, number] }) {
  const [a, setA] = useState(init[0]), [r, setR] = useState(init[1]), [s, setS] = useState(init[2]);
  const b = -a * (r + s), c = a * r * s, h = (r + s) / 2, k = a * (h - r) * (h - s);
  const f = (x: number) => a * (x - r) * (x - s);
  const view: View = { xmin: -8, xmax: 8, ymin: -12, ymax: 12 };
  const xs = [-2, -1, 0, 1, 2, 3], ys = xs.map(f), d1 = ys.slice(1).map((y, i) => y - ys[i]), d2 = d1.slice(1).map((d, i) => d - d1[i]);
  return (
    <WidgetCard title="One parabola, three forms" subtitle="factored · vertex · standard — each shows a different feature">
      <Row>
        <Slider label="a" value={a} min={-2} max={2} step={0.5} onChange={(v) => setA(v === 0 ? 0.5 : v)} format={(v) => n(v)} color={C.blue} />
        <Slider label="zero r" value={r} min={-6} max={6} onChange={setR} color={C.red} />
        <Slider label="zero s" value={s} min={-6} max={6} onChange={setS} color={C.red} />
      </Row>
      <Curves view={view} label="Three forms" step={1} stepY={2} fs={[{ f, color: C.violet }]}>
        {(X, Y) => <>
          <line x1={X(h)} y1={Y(view.ymin)} x2={X(h)} y2={Y(view.ymax)} stroke={C.faint} strokeDasharray="6 5" />
          {dot(X, Y, r, 0, C.red, `(${n(r)}, 0)`, "r")}{s !== r && dot(X, Y, s, 0, C.red, `(${n(s)}, 0)`, "s")}
          {Math.abs(k) <= 12 && dot(X, Y, h, k, C.blue, `V(${n(h)}, ${n(k)})`, "v")}
          {Math.abs(c) <= 12 && dot(X, Y, 0, c, C.green, `(0, ${n(c)})`, "c")}
        </>}
      </Curves>
      <table style={{ borderCollapse: "collapse", margin: "4px auto", fontSize: 14 }}>
        <tbody>
          <tr><th style={cell}>x</th>{xs.map((x) => <td key={x} style={cell}>{x}</td>)}</tr>
          <tr><th style={cell}>y</th>{ys.map((y, i) => <td key={i} style={cell}>{n(y)}</td>)}</tr>
          <tr><th style={cell}>1st diff.</th>{d1.map((d, i) => <td key={i} style={cell}>{n(d)}</td>)}</tr>
          <tr><th style={cell}>2nd diff.</th>{d2.map((d, i) => <td key={i} style={{ ...cell, color: C.blue, fontWeight: 700 }}>{n(d)}</td>)}</tr>
        </tbody>
      </table>
      <Readout tone="blue">
        <MathText html={`<strong>Factored</strong> \\(y=${fac(a, r, s)}\\): zeros ${n(r)} and ${n(s)}.<br/><strong>Vertex</strong> \\(y=${vertexForm(a, h, k)}\\): axis \\(x=${n(h)}\\) (halfway between the zeros), ${a > 0 ? "minimum" : "maximum"} value ${n(k)}.<br/><strong>Standard</strong> \\(y=${stdForm(a, b, c)}\\): y-intercept ${n(c)}. The second differences are constant, \\(2a=${n(2 * a)}\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 3.2 revenue */

export function RevenueLab({ init = [12, 300, 0.5, 10] }: { init?: [number, number, number, number] }) {
  const [p0, setP0] = useState(init[0]), [q0, setQ0] = useState(init[1]), [dp, setDp] = useState(init[2]), [dq, setDq] = useState(init[3]);
  const [k, setK] = useState(4);
  const R = (x: number) => (p0 + dp * x) * (q0 - dq * x);
  const z1 = -p0 / dp, z2 = q0 / dq, best = (z1 + z2) / 2, Rmax = R(best);
  const hi = Math.max(z2, best + 2);
  const view: View = { xmin: Math.min(-2, z1 < -40 ? -2 : z1 - 2), xmax: hi + 2, ymin: -Rmax * 0.15, ymax: Rmax * 1.2 };
  const sx = Math.max(1, Math.round((view.xmax - view.xmin) / 10)), sy = Math.max(1, Math.round(Rmax / 6 / 50) * 50);
  return (
    <WidgetCard title="Maximum revenue" subtitle="price goes up in steps, sales go down: R(x) = (price)(quantity)">
      <Row>
        <Slider label="price" value={p0} min={2} max={30} onChange={setP0} format={(v) => `$${v}`} color={C.blue} />
        <Slider label="sales" value={q0} min={100} max={600} step={20} onChange={setQ0} color={C.green} />
      </Row>
      <Row>
        <Slider label="+ per step" value={dp} min={0.25} max={2} step={0.25} onChange={setDp} format={(v) => `$${v}`} color={C.blue} />
        <Slider label="− sales/step" value={dq} min={2} max={30} onChange={setDq} color={C.green} />
        <Slider label="steps x" value={k} min={0} max={Math.floor(z2)} onChange={setK} color={C.violet} />
      </Row>
      <Curves view={view} label="Revenue" step={sx} stepY={sy} fs={[{ f: R, color: C.violet }]}>
        {(X, Y) => <>
          {dot(X, Y, z2, 0, C.red, `(${n(z2)}, 0)`, "z2")}{z1 >= view.xmin && dot(X, Y, z1, 0, C.red, `(${n(z1)}, 0)`, "z1")}
          {dot(X, Y, best, Rmax, C.blue, "max", "m")}{dot(X, Y, k, R(k), C.green, undefined, "k")}
        </>}
      </Curves>
      <Readout tone="green">
        <MathText html={`\\(R(x)=(${n(p0)}+${dp === 1 ? "" : n(dp)}x)(${n(q0)}-${dq === 1 ? "" : n(dq)}x)\\). With ${k} step${k === 1 ? "" : "s"}: price ${n(p0 + dp * k)}, sales ${n(q0 - dq * k)}, revenue ${n(R(k))}.<br/>Zeros \\(x=${n(z1)}\\) and \\(x=${n(z2)}\\); the maximum is halfway: \\(x=${n(best)}\\), price ${n(p0 + dp * best)}, revenue <strong>${n(Rmax)}</strong>${Number.isInteger(best) ? "" : " (if only whole steps are allowed, check the nearest whole numbers)"}.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 3.4 discriminant with a parameter */

export function DiscriminantK({ init = [1, 9] }: { init?: [number, number] }) {
  const [a] = useState(init[0]), [c] = useState(init[1]);
  const [k, setK] = useState(4);
  const D = k * k - 4 * a * c, crit = 2 * Math.sqrt(a * c);
  const f = (x: number) => a * x * x + k * x + c;
  const view: View = { xmin: -10, xmax: 10, ymin: -10, ymax: 16 };
  const rs = roots(a, k, c);
  return (
    <WidgetCard title="How many zeros?" subtitle={`y = ${a === 1 ? "" : a}x² + kx + ${c}: the discriminant k² − ${4 * a * c} decides`}>
      <Row><Slider label="k" value={k} min={-12} max={12} step={0.5} onChange={setK} format={(v) => n(v)} color={C.violet} /></Row>
      <Curves view={view} label="Parameter k" step={2} fs={[{ f, color: C.violet }]}>
        {(X, Y) => <>{rs.map((x, i) => dot(X, Y, x, 0, D === 0 ? C.amber : C.green, undefined, i))}</>}
      </Curves>
      <Readout tone={D > 0 ? "green" : D === 0 ? "amber" : "red"}>
        <MathText html={`\\(D=k^2-4(${a})(${c})=${n(k)}^2-${4 * a * c}=${n(D)}\\): ${D > 0 ? "two zeros" : D === 0 ? "one zero (the vertex touches the axis)" : "no zeros"}. The boundary is \\(k^2=${4 * a * c}\\), i.e. \\(k=\\pm${n(crit)}\\): two zeros when \\(k<-${n(crit)}\\) or \\(k>${n(crit)}\\), none when \\(-${n(crit)}<k<${n(crit)}\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 3.5 families */

export function FamilyLab({ init = [-2, 4] }: { init?: [number, number] }) {
  const [mode, setMode] = useState<"rat" | "irr">("rat");
  const [r, setR] = useState(init[0]), [s, setS] = useState(init[1]);
  const [h, setH] = useState(1), [m, setM] = useState(3);
  const [px, setPx] = useState(0), [py, setPy] = useState(-6);
  const z = mode === "rat" ? [r, s] : [h - Math.sqrt(m), h + Math.sqrt(m)];
  const base = (x: number) => (x - z[0]) * (x - z[1]);
  const denom = base(px), a = Math.abs(denom) < 1e-9 ? NaN : py / denom;
  const view: View = { xmin: -8, xmax: 8, ymin: -12, ymax: 12 };
  const fam = [-2, -1, -0.5, 0.5, 1, 2];
  const zTex = mode === "rat" ? `(x${sgn(-r)})(x${sgn(-s)})`.replace("(x+0)", "x").replace("(x-0)", "x") : `(${stdForm(1, -2 * h, h * h - m)})`;
  return (
    <WidgetCard title="A family of parabolas" subtitle="same zeros, different a — one point picks the member">
      <Row><Segmented value={mode} onChange={setMode} options={[{ value: "rat", label: "zeros r, s" }, { value: "irr", label: "zeros h ± √m" }]} /></Row>
      {mode === "rat" ? <Row>
        <Slider label="r" value={r} min={-6} max={6} onChange={setR} color={C.red} />
        <Slider label="s" value={s} min={-6} max={6} onChange={setS} color={C.red} />
      </Row> : <Row>
        <Slider label="h" value={h} min={-4} max={4} onChange={setH} color={C.red} />
        <Slider label="m" value={m} min={1} max={12} onChange={setM} color={C.red} />
      </Row>}
      <Row>
        <Slider label="point x" value={px} min={-7} max={7} onChange={setPx} color={C.blue} />
        <Slider label="point y" value={py} min={-11} max={11} onChange={setPy} color={C.blue} />
      </Row>
      <Curves view={view} label="Family of parabolas" step={1} stepY={2} fs={[...fam.map((t) => ({ f: (x: number) => t * base(x), color: "#cbd5e1", width: 1.5 })), ...(Number.isFinite(a) ? [{ f: (x: number) => a * base(x), color: C.violet, width: 3.5 }] : [])]}>
        {(X, Y) => <>{z.map((x, i) => dot(X, Y, x, 0, C.red, undefined, i))}{dot(X, Y, px, py, C.blue, `(${px}, ${py})`, "p")}</>}
      </Curves>
      <Readout tone={Number.isFinite(a) ? "green" : "amber"}>
        <MathText html={`Family: \\(y=a${zTex}\\) (grey: \\(a=\\pm\\tfrac12,\\pm1,\\pm2\\)). ${Number.isFinite(a) ? `Through \\((${px},${py})\\): \\(${py}=a\\cdot${denom < 0 ? `(${n(denom)})` : n(denom)}\\Rightarrow a=${n(a, 3)}\\), so \\(y=${n(a, 3)}${zTex}\\).` : "This point is a zero of every member — choose a point off the x-axis zeros."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 3.6 tangent lines */

export function TangentLab({ init = [-1, 6, 0, 2] }: { init?: [number, number, number, number] }) {
  const [a] = useState(init[0]), [b] = useState(init[1]), [c] = useState(init[2]);
  const [m, setM] = useState(init[3]), [k, setK] = useState(-2);
  const A = a, B = b - m, Cc = c - k, D = B * B - 4 * A * Cc;
  const kT = c - (B * B) / (4 * A); // k that makes D = 0
  const xs = roots(A, B, Cc);
  const view: View = { xmin: -4, xmax: 10, ymin: -8, ymax: 14 };
  return (
    <WidgetCard title="Secant, tangent or no contact" subtitle="set the line equal to the parabola; the discriminant counts the meeting points">
      <Row>
        <Slider label="slope m" value={m} min={-6} max={8} step={0.5} onChange={setM} format={(v) => n(v)} color={C.blue} />
        <Slider label="intercept" value={k} min={-12} max={14} step={0.5} onChange={setK} format={(v) => n(v)} color={C.blue} />
      </Row>
      <Curves view={view} label="Line and parabola" step={1} stepY={2} fs={[{ f: (x) => a * x * x + b * x + c, color: C.violet }, { f: (x) => m * x + k, color: C.blue }, { f: (x) => m * x + kT, color: C.amber, width: 1.8, dash: "6 5" }]}>
        {(X, Y) => <>{xs.map((x, i) => dot(X, Y, x, m * x + k, C.red, `(${n(x, 1)}, ${n(m * x + k, 1)})`, i))}</>}
      </Curves>
      <Readout tone={D > 0 ? "green" : Math.abs(D) < 1e-9 ? "amber" : "red"}>
        <MathText html={`\\(${stdForm(a, b, c)}=${n(m)}x${sgn(k)}\\Rightarrow ${stdForm(A, B, Cc)}=0\\), \\(D=${n(D)}\\): ${D > 1e-9 ? "two points (secant)" : Math.abs(D) < 1e-9 ? "one point (tangent)" : "no points"}. For slope ${n(m)} the tangent (dashed) has intercept \\(${n(kT)}\\): lines with a ${A < 0 ? "larger" : "smaller"} intercept miss the parabola, lines with a ${A < 0 ? "smaller" : "larger"} one cross it twice.`} />
      </Readout>
    </WidgetCard>
  );
}
