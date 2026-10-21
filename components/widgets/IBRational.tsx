"use client";

// IB AA SL chapter 4 (rational functions) explorers: the reciprocal function y = k/x (with the constant-area
// rectangle and the lines of symmetry), the transformed reciprocal y = a/(x − h) + k with its asymptotes, and the
// rational function y = (ax + b)/(cx + d) with intercepts, asymptotes and its a/(x − h) + k form.

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { Plane, r2, type View } from "./Systems";
import { dot } from "./Quadratics";

type Fn = (x: number) => number;
const n2 = (v: number, d = 2) => r2(v, d);
const sg = (v: number) => (v < 0 ? `-${n2(-v)}` : `+${n2(v)}`);
/** (x − h) with the sign written out */
const xm = (h: number) => (h === 0 ? "x" : h > 0 ? `x-${n2(h)}` : `x+${n2(-h)}`);
const V10: View = { xmin: -10, xmax: 10, ymin: -10, ymax: 10 };
/** curve path that lifts the pen at a vertical asymptote x = va */
function pathOf(f: Fn, v: View, X: (x: number) => number, Y: (y: number) => number, va = NaN) {
  const band = (v.ymax - v.ymin) * 3;
  let d = "", pen = false, prevX = NaN;
  for (let i = 0; i <= 800; i++) {
    const x = v.xmin + ((v.xmax - v.xmin) * i) / 800, y = f(x);
    const crossed = Number.isFinite(va) && Number.isFinite(prevX) && (prevX - va) * (x - va) <= 0;
    prevX = x;
    if (!Number.isFinite(y) || y > v.ymax + band || y < v.ymin - band || crossed) { pen = false; continue; }
    d += `${pen ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)} `; pen = true;
  }
  return d;
}
const asymptotes = (X: (x: number) => number, Y: (y: number) => number, v: View, h: number, k: number) => <>
  {Number.isFinite(h) && <line x1={X(h)} y1={Y(v.ymin)} x2={X(h)} y2={Y(v.ymax)} stroke={C.red} strokeWidth={2} strokeDasharray="7 5" />}
  {Number.isFinite(k) && <line x1={X(v.xmin)} y1={Y(k)} x2={X(v.xmax)} y2={Y(k)} stroke={C.red} strokeWidth={2} strokeDasharray="7 5" />}
</>;

/* ---------------------------------------------------------------- 4.1 the reciprocal function */

export function IBReciprocal({ init = [6, 2] }: { init?: [number, number] }) {
  const [k, setK] = useState(init[0]), [x0, setX0] = useState(init[1]);
  const [show, setShow] = useState<"rect" | "sym">("rect");
  const kk = k === 0 ? 1 : k, f = (x: number) => kk / x;
  const x = x0 === 0 ? 0.5 : x0, y = f(x);
  return (
    <WidgetCard title="The reciprocal function" subtitle="y = k/x: asymptotes x = 0 and y = 0; every point has xy = k; symmetric in y = x and y = −x">
      <Row>
        <Slider label="k" value={kk} min={-8} max={8} onChange={(v) => setK(v === 0 ? 1 : v)} color={C.violet} />
        <Slider label="x of the point" value={x} min={-8} max={8} step={0.5} onChange={(v) => setX0(v === 0 ? 0.5 : v)} color={C.blue} />
      </Row>
      <Row><Segmented label="show:" value={show} onChange={setShow} options={[{ value: "rect", label: "rectangle xy = k" }, { value: "sym", label: "lines of symmetry" }]} /></Row>
      <Plane view={V10} label="Reciprocal function" step={1}>
        {(X, Y) => <>
          {asymptotes(X, Y, V10, 0, 0)}
          {show === "rect" && Math.abs(y) <= 10 && <rect x={Math.min(X(0), X(x))} y={Math.min(Y(0), Y(y))} width={Math.abs(X(x) - X(0))} height={Math.abs(Y(y) - Y(0))} fill={C.amber} opacity={0.25} stroke={C.amber} strokeWidth={2} />}
          {show === "sym" && <>
            <line x1={X(-10)} y1={Y(-10)} x2={X(10)} y2={Y(10)} stroke={C.green} strokeWidth={2} strokeDasharray="8 5" />
            <line x1={X(-10)} y1={Y(10)} x2={X(10)} y2={Y(-10)} stroke={C.green} strokeWidth={2} strokeDasharray="8 5" />
            {Math.abs(y) <= 10 && dot(X, Y, y, x, C.green, `(${n2(y)}, ${n2(x)})`, "s")}
          </>}
          <path d={pathOf(f, V10, X, Y, 0)} fill="none" stroke={C.violet} strokeWidth={3} />
          {Math.abs(y) <= 10 && dot(X, Y, x, y, C.blue, `(${n2(x)}, ${n2(y)})`, "p")}
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`\\(y=\\dfrac{${kk}}{x}\\). At \\(x=${n2(x)}\\): \\(y=${n2(y, 3)}\\) and \\(xy=${kk}\\) — ${show === "rect" ? "the amber rectangle always has area " + Math.abs(kk) + "." : `the reflected point \\((${n2(y)},${n2(x)})\\) is also on the curve, so the function is its own inverse.`} ${kk > 0 ? "With k > 0 the branches are in quadrants 1 and 3." : "With k < 0 the branches are in quadrants 2 and 4."} Domain \\(x\\ne0\\), range \\(y\\ne0\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 4.2 transforming the reciprocal function */

export function IBRecipTransform({ init = [2, 1, -3] }: { init?: [number, number, number] }) {
  const [a, setA] = useState(init[0]), [h, setH] = useState(init[1]), [k, setK] = useState(init[2]);
  const aa = a === 0 ? 1 : a, f = (x: number) => aa / (x - h) + k;
  const yInt = h === 0 ? NaN : f(0), xInt = k === 0 ? NaN : h - aa / k;
  return (
    <WidgetCard title="Transforming y = 1/x" subtitle="y = a/(x − h) + k: vertical asymptote x = h, horizontal asymptote y = k; a stretches (and reflects if a < 0)">
      <Row>
        <Slider label="a" value={aa} min={-6} max={6} onChange={(v) => setA(v === 0 ? 1 : v)} color={C.violet} />
        <Slider label="h" value={h} min={-5} max={5} onChange={setH} color={C.red} />
        <Slider label="k" value={k} min={-5} max={5} onChange={setK} color={C.green} />
      </Row>
      <Plane view={V10} label="Transformed reciprocal" step={1}>
        {(X, Y) => <>
          <path d={pathOf((x) => 1 / x, V10, X, Y, 0)} fill="none" stroke={C.muted} strokeWidth={1.8} />
          {asymptotes(X, Y, V10, h, k)}
          <path d={pathOf(f, V10, X, Y, h)} fill="none" stroke={C.violet} strokeWidth={3} />
          {Number.isFinite(yInt) && Math.abs(yInt) <= 10 && dot(X, Y, 0, yInt, C.green, `(0, ${n2(yInt)})`, "y")}
          {Number.isFinite(xInt) && Math.abs(xInt) <= 10 && dot(X, Y, xInt, 0, C.blue, `(${n2(xInt)}, 0)`, "x")}
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`Grey: \\(y=\\frac1x\\). Violet: \\(y=\\dfrac{${aa}}{${xm(h)}}${k === 0 ? "" : sg(k)}\\). Asymptotes \\(x=${h}\\) and \\(y=${k}\\); domain \\(x\\ne${h}\\), range \\(y\\ne${k}\\). ${Number.isFinite(yInt) ? `y-intercept \\((0,${n2(yInt, 3)})\\). ` : "No y-intercept (the y-axis is the asymptote). "}${Number.isFinite(xInt) ? `x-intercept: \\(\\frac{${aa}}{${xm(h)}}=${-k}\\Rightarrow x=${n2(xInt, 3)}\\).` : "No x-intercept (the x-axis is the asymptote)."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 4.3 y = (ax + b)/(cx + d) */

export function IBRational({ init = [2, 1, 1, -3] }: { init?: [number, number, number, number] }) {
  const [a, setA] = useState(init[0]), [b, setB] = useState(init[1]), [c, setC] = useState(init[2]), [d, setD] = useState(init[3]);
  const cc = c === 0 ? 1 : c, f = (x: number) => (a * x + b) / (cc * x + d);
  const h = -d / cc, k = a / cc, A = (b * cc - a * d) / (cc * cc); // f = A/(x − h) + k
  const degenerate = Math.abs(b * cc - a * d) < 1e-12;
  const yInt = d === 0 ? NaN : b / d, xInt = a === 0 ? NaN : -b / a;
  const close = Number.isFinite(yInt) && Number.isFinite(xInt) && Math.hypot(xInt, yInt) < 2.5; // labels would overlap: the readout gives both
  const lin = (p: number, q: number) => `${p === 1 ? "" : p === -1 ? "-" : p}x${q === 0 ? "" : sg(q)}`;
  return (
    <WidgetCard title="Rational functions y = (ax + b)/(cx + d)" subtitle="vertical asymptote x = −d/c (where the denominator is 0), horizontal asymptote y = a/c (ratio of the x-coefficients)">
      <Row>
        <Slider label="a" value={a} min={-6} max={6} onChange={setA} color={C.blue} />
        <Slider label="b" value={b} min={-8} max={8} onChange={setB} color={C.blue} />
      </Row>
      <Row>
        <Slider label="c" value={cc} min={-4} max={4} onChange={(v) => setC(v === 0 ? 1 : v)} color={C.red} />
        <Slider label="d" value={d} min={-8} max={8} onChange={setD} color={C.red} />
      </Row>
      <Plane view={V10} label="Rational function" step={1}>
        {(X, Y) => <>
          {!degenerate && asymptotes(X, Y, V10, h, k)}
          <path d={pathOf(f, V10, X, Y, h)} fill="none" stroke={C.violet} strokeWidth={3} />
          {Number.isFinite(yInt) && !degenerate && Math.abs(yInt) <= 10 && dot(X, Y, 0, yInt, C.green, close ? "" : `(0, ${n2(yInt)})`, "y")}
          {Number.isFinite(xInt) && !degenerate && Math.abs(xInt) <= 10 && dot(X, Y, xInt, 0, C.blue, `(${n2(xInt)}, 0)`, "x")}
        </>}
      </Plane>
      <Readout tone={degenerate ? "amber" : "blue"}>
        <MathText html={degenerate ? `Here \\(bc-ad=0\\): the top is a multiple of the bottom, so the graph is the horizontal line \\(y=${n2(k)}\\) with a hole at \\(x=${n2(h)}\\).` : `\\(y=\\dfrac{${lin(a, b)}}{${lin(cc, d)}}\\). Vertical asymptote \\(${lin(cc, d)}=0\\Rightarrow x=${n2(h, 3)}\\); horizontal asymptote \\(y=\\frac{${a}}{${cc}}=${n2(k, 3)}\\). ${Number.isFinite(yInt) ? `y-intercept \\(\\frac{${b}}{${d}}=${n2(yInt, 3)}\\). ` : ""}${Number.isFinite(xInt) ? `x-intercept \\(x=-\\frac{${b}}{${a}}=${n2(xInt, 3)}\\). ` : "No x-intercept. "}Dividing: \\(y=\\dfrac{${n2(A, 3)}}{${xm(+n2(h, 4))}}${k === 0 ? "" : sg(+n2(k, 4))}\\).`} />
      </Readout>
    </WidgetCard>
  );
}
