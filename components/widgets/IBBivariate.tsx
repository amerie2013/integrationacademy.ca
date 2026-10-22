"use client";

// IB AA SL chapter 7 (bivariate data) explorers: scatter diagrams with the mean point and quadrants, Pearson's r
// with a movable point and adjustable scatter, and least-squares regression (y on x and x on y) with predictions.

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { Plane, r2, type View } from "./Systems";
import { dot } from "./Quadratics";

const n2 = (v: number, d = 2) => r2(v, d);
const mean = (a: number[]) => a.reduce((s, v) => s + v, 0) / a.length;
/** Pearson's r and the y-on-x and x-on-y regression coefficients */
function stats(xs: number[], ys: number[]) {
  const mx = mean(xs), my = mean(ys);
  let sxy = 0, sxx = 0, syy = 0;
  xs.forEach((x, i) => { sxy += (x - mx) * (ys[i] - my); sxx += (x - mx) ** 2; syy += (ys[i] - my) ** 2; });
  const b = sxy / sxx, a = my - b * mx, d = sxy / syy, c = mx - d * my; // y = a + bx ; x = c + dy
  return { mx, my, r: sxy / Math.sqrt(sxx * syy), a, b, c, d };
}
const strength = (r: number) => { const s = Math.abs(r); return s >= 0.75 ? "strong" : s >= 0.5 ? "moderate" : s >= 0.25 ? "weak" : "very weak / no"; };

/* ---------------------------------------------------------------- 7.1 scatter diagrams */

const SCATTER: { label: string; x: number[]; y: number[]; note: string }[] = [
  { label: "revision vs score", x: [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 9], y: [32, 38, 45, 47, 50, 58, 57, 63, 70, 71, 78, 84], note: "strong positive linear correlation: more revision goes with higher scores" },
  { label: "car age vs value", x: [1, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10], y: [24, 22, 20, 18, 17, 15, 13, 11, 10, 8, 7, 5], note: "strong negative linear correlation: older cars are worth less" },
  { label: "height vs phone number", x: [150, 155, 158, 160, 163, 165, 168, 170, 174, 178, 182, 185], y: [6, 2, 9, 4, 7, 1, 8, 3, 5, 9, 2, 6], note: "no correlation: the last digit of a phone number is unrelated to height" },
  { label: "speed vs fuel use", x: [30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140], y: [8.6, 7.2, 6.3, 5.8, 5.6, 5.7, 6.0, 6.5, 7.2, 8.1, 9.2, 10.4], note: "a clear non-linear (curved) relationship — linear correlation describes it badly" },
];

export function IBScatter({ init = 0 }: { init?: number }) {
  const [k, setK] = useState(init), [show, setShow] = useState<"none" | "mean">("mean");
  const D = SCATTER[k], s = stats(D.x, D.y);
  const pad = (a: number[]) => { const lo = Math.min(...a), hi = Math.max(...a), p = (hi - lo) * 0.12; return [lo - p, hi + p]; };
  const [x0, x1] = pad(D.x), [y0, y1] = pad(D.y), v: View = { xmin: x0, xmax: x1, ymin: y0, ymax: y1 };
  const nice = (span: number) => [0.5, 1, 2, 5, 10, 20, 25, 50, 100].find((s) => span / s <= 10) ?? 100;
  const step = nice(x1 - x0), stepY = nice(y1 - y0);
  // count points in the quadrants around the mean point
  const q = D.x.reduce((c, x, i) => { const pos = (x - s.mx) * (D.y[i] - s.my); return pos > 0 ? [c[0] + 1, c[1]] : pos < 0 ? [c[0], c[1] + 1] : c; }, [0, 0]);
  return (
    <WidgetCard title="Scatter diagrams" subtitle="describe direction (positive/negative), strength (strong/weak) and form (linear/non-linear); the mean point (x̄, ȳ) splits the plane into quadrants">
      <Row><Segmented label="data:" value={k} onChange={setK} options={SCATTER.map((d, i) => ({ value: i, label: d.label }))} /></Row>
      <Row><Segmented label="show:" value={show} onChange={setShow} options={[{ value: "none", label: "points only" }, { value: "mean", label: "mean point and quadrants" }]} /></Row>
      <Plane view={v} label="Scatter diagram" step={step} stepY={stepY}>
        {(X, Y) => <>
          {show === "mean" && <>
            <line x1={X(s.mx)} y1={Y(y0)} x2={X(s.mx)} y2={Y(y1)} stroke={C.amber} strokeWidth={1.8} strokeDasharray="6 4" />
            <line x1={X(x0)} y1={Y(s.my)} x2={X(x1)} y2={Y(s.my)} stroke={C.amber} strokeWidth={1.8} strokeDasharray="6 4" />
          </>}
          {D.x.map((x, i) => dot(X, Y, x, D.y[i], show === "mean" ? ((x - s.mx) * (D.y[i] - s.my) >= 0 ? C.blue : C.red) : C.violet, undefined, i))}
          {show === "mean" && dot(X, Y, s.mx, s.my, C.amber, `(${n2(s.mx, 1)}, ${n2(s.my, 1)})`, "m")}
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText html={`${D.note}. Mean point \\((\\bar x,\\bar y)=(${n2(s.mx)},${n2(s.my)})\\).${show === "mean" ? ` Points in the 'positive' quadrants (blue): ${q[0]}; in the 'negative' quadrants (red): ${q[1]}.` : ""}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 7.2 Pearson's r */

const BASE_X = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const NOISE = [0.6, -1.1, 0.9, -0.4, 1.3, -1.4, 0.2, 1.0, -0.8, -0.3];

export function IBPearson({ init = [1, 1, 5] }: { init?: [number, number, number] }) {
  const [dir, setDir] = useState(init[0]), [spread, setSpread] = useState(init[1]), [oy, setOy] = useState(init[2]);
  const ys = BASE_X.map((x, i) => (dir === 0 ? 5 : 5 + dir * 0.8 * (x - 5.5)) + spread * 2 * NOISE[i]);
  const xs = [...BASE_X, 11], all = [...ys, oy], s = stats(xs, all), s0 = stats(BASE_X, ys);
  const v: View = { xmin: 0, xmax: 12, ymin: -6, ymax: 16 };
  return (
    <WidgetCard title="Pearson's correlation coefficient r" subtitle="−1 ≤ r ≤ 1: the sign gives the direction, the size the strength of the linear relationship; one point can change r a lot">
      <Row><Segmented label="trend:" value={dir} onChange={setDir} options={[{ value: 1, label: "positive" }, { value: 0, label: "none" }, { value: -1, label: "negative" }]} /></Row>
      <Row>
        <Slider label="scatter" value={spread} min={0} max={3} step={0.25} onChange={setSpread} color={C.violet} />
        <Slider label="y of the 11th point" value={oy} min={-5} max={15} step={0.5} onChange={setOy} color={C.red} />
      </Row>
      <Plane view={v} label="Pearson's r" step={1} stepY={2}>
        {(X, Y) => <>
          {BASE_X.map((x, i) => dot(X, Y, x, ys[i], C.violet, undefined, i))}
          {dot(X, Y, 11, oy, C.red, "movable point", "o")}
        </>}
      </Plane>
      <Readout tone={Math.abs(s.r) >= 0.75 ? "green" : "blue"}>
        <MathText html={`With all 11 points \\(r=${n2(s.r, 3)}\\): ${strength(s.r)} ${s.r > 0 ? "positive" : s.r < 0 ? "negative" : ""} linear correlation. Without the red point \\(r=${n2(s0.r, 3)}\\). ${Math.abs(s.r - s0.r) > 0.15 ? "The single red point changes r noticeably — check outliers before interpreting r." : "Correlation does not prove that one variable causes the other."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 7.3 regression lines */

const REG = { x: [2, 3, 5, 6, 8, 9, 11, 12, 14, 15], y: [18, 22, 25, 31, 33, 38, 41, 44, 50, 53], xl: "hours of sunshine", yl: "ice creams sold (tens)" };

export function IBRegression({ init = [10] }: { init?: [number] }) {
  const [xp, setXp] = useState(init[0]), [both, setBoth] = useState<"yx" | "both">("yx");
  const s = stats(REG.x, REG.y), yp = s.a + s.b * xp, v: View = { xmin: 0, xmax: 22, ymin: 0, ymax: 75 };
  const inside = xp >= Math.min(...REG.x) && xp <= Math.max(...REG.x);
  return (
    <WidgetCard title="Least-squares regression" subtitle="the regression line of y on x passes through (x̄, ȳ) and predicts y from x; use it only inside the data range (interpolation)">
      <Row>
        <Slider label="x for prediction" value={xp} min={0} max={22} step={0.5} onChange={setXp} color={C.blue} />
        <Segmented label="lines:" value={both} onChange={setBoth} options={[{ value: "yx", label: "y on x" }, { value: "both", label: "y on x and x on y" }]} />
      </Row>
      <Plane view={v} label="Regression" step={2} stepY={5}>
        {(X, Y) => <>
          <rect x={X(2)} y={Y(75)} width={X(15) - X(2)} height={Y(0) - Y(75)} fill={C.greenSoft} opacity={0.5} />
          <line x1={X(0)} y1={Y(s.a)} x2={X(22)} y2={Y(s.a + 22 * s.b)} stroke={C.red} strokeWidth={2.6} />
          {both === "both" && <line x1={X(s.c)} y1={Y(0)} x2={X(s.c + 75 * s.d)} y2={Y(75)} stroke={C.green} strokeWidth={2.2} strokeDasharray="7 4" />}
          {REG.x.map((x, i) => dot(X, Y, x, REG.y[i], C.violet, undefined, i))}
          {dot(X, Y, s.mx, s.my, C.amber, "(x̄, ȳ)", "m")}
          <line x1={X(xp)} y1={Y(0)} x2={X(xp)} y2={Y(yp)} stroke={C.blue} strokeDasharray="4 4" />
          {dot(X, Y, xp, yp, inside ? C.blue : C.red, `(${n2(xp)}, ${n2(yp, 1)})`, "p")}
        </>}
      </Plane>
      <Readout tone={inside ? "blue" : "amber"}>
        <MathText html={`y on x: \\(y=${n2(s.a, 3)}+${n2(s.b, 3)}x\\), through \\((\\bar x,\\bar y)=(${n2(s.mx)},${n2(s.my)})\\); \\(r=${n2(s.r, 3)}\\). Prediction at \\(x=${n2(xp)}\\): \\(y\\approx${n2(yp, 1)}\\) — ${inside ? "interpolation (inside the shaded data range): reliable." : "extrapolation (outside the data range): unreliable."}${both === "both" ? ` The green line is x on y: \\(x=${n2(s.c, 3)}+${n2(s.d, 3)}y\\), used to predict x from y. Both lines meet at the mean point.` : ""}`} />
      </Readout>
    </WidgetCard>
  );
}
