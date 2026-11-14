"use client";

// MCV4U chapter 1 (rates of change and limits) explorers: average vs instantaneous rate from a real-world graph,
// the difference quotient as h → 0, limits (one-sided, removable, jump, infinite, sequence), continuity of a
// piecewise function, and building the graph of f′ from tangent slopes.

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { useT } from "@/lib/lang";
import { Plane, r2, type View } from "./Systems";
import { dot } from "./Quadratics";

type Fn = (x: number) => number;
const cell: React.CSSProperties = { padding: "4px 10px", textAlign: "center", borderBottom: `1px solid ${C.line}` };
/** path of f over the view, broken at the given x-values and where f leaves a generous band */
function pathOf(f: Fn, v: View, X: (x: number) => number, Y: (y: number) => number, breaks: number[] = [], a = v.xmin, b = v.xmax) {
  const cuts = [a, ...breaks.filter((p) => p > a && p < b).sort((p, q) => p - q), b];
  const band = (v.ymax - v.ymin) * 3;
  let d = "";
  for (let s = 0; s < cuts.length - 1; s++) {
    const lo = cuts[s] + (s === 0 ? 0 : 1e-6), hi = cuts[s + 1] - (s === cuts.length - 2 ? 0 : 1e-6);
    let pen = false;
    for (let i = 0; i <= 300; i++) {
      const x = lo + ((hi - lo) * i) / 300, y = f(x);
      if (!Number.isFinite(y) || y > v.ymax + band || y < v.ymin - band) { pen = false; continue; }
      d += `${pen ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)} `; pen = true;
    }
  }
  return d;
}
const openDot = (X: (x: number) => number, Y: (y: number) => number, x: number, y: number, color: string, key: string | number) =>
  <circle key={key} cx={X(x)} cy={Y(y)} r={6} fill="#fff" stroke={color} strokeWidth={2.5} />;
const deriv = (f: Fn, x: number, h = 1e-4) => (f(x + h) - f(x - h)) / (2 * h);
const rnd = (x: number) => Math.round(x * 100) / 100;

/* ---------------------------------------------------------------- 1.1 rates of change from a real-world graph */

const MODELS = {
  ball: { name: "ball height h(t) (m)", nameFr: "hauteur de la balle h(t) (m)", f: (t: number) => -4.9 * t * t + 19.6 * t + 1.5, v: { xmin: 0, xmax: 4.2, ymin: 0, ymax: 24 } as View, unit: "m/s", unitFr: "m/s", step: 0.5, stepY: 4, x: "t (s)" },
  pop: { name: "bacteria P(t) (thousands)", nameFr: "bactéries P(t) (milliers)", f: (t: number) => 2 * Math.pow(1.5, t), v: { xmin: 0, xmax: 8, ymin: 0, ymax: 55 } as View, unit: "thousand per hour", unitFr: "milliers par heure", step: 1, stepY: 10, x: "t (h)" },
  cool: { name: "coffee temperature T(t) (°C)", nameFr: "température du café T(t) (°C)", f: (t: number) => 21 + 70 * Math.exp(-0.08 * t), v: { xmin: 0, xmax: 40, ymin: 0, ymax: 100 } as View, unit: "°C per min", unitFr: "°C par min", step: 5, stepY: 10, x: "t (min)" },
};
type MK = keyof typeof MODELS;

export function RateReader({ init = { model: "ball" as MK, a: 0.5, b: 2.5 } }: { init?: { model: MK; a: number; b: number } }) {
  const tr = useT();
  const [mk, setMk] = useState<MK>(init.model);
  const M = MODELS[mk];
  const unit = tr(M.unit, M.unitFr);
  const span = M.v.xmax - M.v.xmin;
  const [a, setA] = useState(init.a), [b, setB] = useState(init.b);
  const A = Math.min(Math.max(a, M.v.xmin), M.v.xmax), B = Math.min(Math.max(b, M.v.xmin), M.v.xmax);
  const [tan, setTan] = useState(true);
  const avg = B !== A ? (M.f(B) - M.f(A)) / (B - A) : NaN, inst = deriv(M.f, A);
  const pick = (k: MK) => { setMk(k); const m = MODELS[k]; setA(m.v.xmin + (m.v.xmax - m.v.xmin) * 0.15); setB(m.v.xmin + (m.v.xmax - m.v.xmin) * 0.6); };
  return (
    <WidgetCard title={tr("Average and instantaneous rates of change", "Taux de variation moyen et instantané")} subtitle={tr("secant slope over an interval vs tangent slope at a point", "pente de la sécante sur un intervalle vs pente de la tangente en un point")}>
      <Segmented options={(Object.keys(MODELS) as MK[]).map((k) => ({ value: k, label: tr(MODELS[k].name, MODELS[k].nameFr) }))} value={mk} onChange={pick} />
      <Row gap={10}>
        <Slider label={tr("start a", "début a")} value={rnd(A)} min={M.v.xmin} max={M.v.xmax} step={span / 80} onChange={setA} color={C.red} />
        <Slider label={tr("end b", "fin b")} value={rnd(B)} min={M.v.xmin} max={M.v.xmax} step={span / 80} onChange={setB} color={C.amber} />
      </Row>
      <Segmented options={[{ value: "on", label: tr("show tangent at a", "afficher la tangente en a") }, { value: "off", label: tr("secant only", "sécante seulement") }]} value={tan ? "on" : "off"} onChange={(v) => setTan(v === "on")} />
      <Plane view={M.v} label={tr("Rate reader", "Lecteur de taux")} step={M.step} stepY={M.stepY}>
        {(X, Y) => <>
          <path d={pathOf(M.f, M.v, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
          {Number.isFinite(avg) && <line x1={X(M.v.xmin)} y1={Y(M.f(A) + avg * (M.v.xmin - A))} x2={X(M.v.xmax)} y2={Y(M.f(A) + avg * (M.v.xmax - A))} stroke={C.amber} strokeWidth={2.2} />}
          {tan && <line x1={X(M.v.xmin)} y1={Y(M.f(A) + inst * (M.v.xmin - A))} x2={X(M.v.xmax)} y2={Y(M.f(A) + inst * (M.v.xmax - A))} stroke={C.green} strokeWidth={2.2} strokeDasharray="6 4" />}
          {dot(X, Y, A, M.f(A), C.red, `a = ${r2(A)}`, "a")}{dot(X, Y, B, M.f(B), C.amber, `b = ${r2(B)}`, "b")}
        </>}
      </Plane>
      <Readout tone="green">
        <MathText block html={tr(`Average rate on \\([${r2(Math.min(A, B))},\\,${r2(Math.max(A, B))}]\\): \\(\\dfrac{f(b)-f(a)}{b-a}=${Number.isFinite(avg) ? r2(avg) : "\\text{—}"}\\) ${M.unit} (amber secant).`, `Taux moyen sur \\([${r2(Math.min(A, B))},\\,${r2(Math.max(A, B))}]\\) : \\(\\dfrac{f(b)-f(a)}{b-a}=${Number.isFinite(avg) ? r2(avg) : "\\text{—}"}\\) ${unit} (sécante orange).`)} />
        <MathText block html={tr(`Instantaneous rate at \\(t=${r2(A)}\\): about \\(${r2(inst)}\\) ${M.unit} (green tangent). Move \\(b\\) toward \\(a\\): the secant turns into the tangent.`, `Taux instantané en \\(t=${r2(A)}\\) : environ \\(${r2(inst)}\\) ${unit} (tangente verte). Rapproche \\(b\\) de \\(a\\) : la sécante devient la tangente.`)} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.2 the difference quotient */

const DQF: Record<string, { tex: string; f: Fn; v: View }> = {
  sq: { tex: "x^2", f: (x) => x * x, v: { xmin: -1, xmax: 4, ymin: -2, ymax: 12 } },
  cube: { tex: "x^3-2x", f: (x) => x ** 3 - 2 * x, v: { xmin: -2.5, xmax: 2.5, ymin: -6, ymax: 6 } },
  recip: { tex: "\\tfrac{4}{x}", f: (x) => 4 / x, v: { xmin: 0, xmax: 6, ymin: 0, ymax: 10 } },
  root: { tex: "\\sqrt{x}", f: (x) => Math.sqrt(x), v: { xmin: 0, xmax: 9, ymin: 0, ymax: 4 } },
};

export function DifferenceQuotient({ init = { fn: "sq", a: 1, h: 1 } }: { init?: { fn: string; a: number; h: number } }) {
  const tr = useT();
  const [fn, setFn] = useState(init.fn);
  const F = DQF[fn] ?? DQF.sq;
  const [a, setA] = useState(init.a), [h, setH] = useState(init.h);
  const A = Math.min(Math.max(a, fn === "recip" || fn === "root" ? 0.5 : F.v.xmin + 0.2), F.v.xmax - 1);
  const q = (hh: number) => (F.f(A + hh) - F.f(A)) / hh;
  const hs = [1, 0.1, 0.01, 0.001, -0.001, -0.01, -0.1, -1];
  const m = deriv(F.f, A);
  return (
    <WidgetCard title={tr("The difference quotient", "Le quotient de différence")} subtitle={tr("(f(a + h) − f(a))/h is a secant slope; its limit as h → 0 is the tangent slope", "(f(a + h) − f(a))/h est la pente d'une sécante; sa limite quand h → 0 est la pente de la tangente")}>
      <Segmented options={Object.keys(DQF).map((k) => ({ value: k, label: `f(x) = ${DQF[k].tex.replace("\\tfrac{4}{x}", "4/x").replace("\\sqrt{x}", "√x").replace("^2", "²").replace("^3", "³")}` }))} value={fn} onChange={setFn} />
      <Row gap={10}>
        <Slider label="a" value={rnd(A)} min={F.v.xmin} max={F.v.xmax - 1} step={0.1} onChange={setA} color={C.red} />
        <Slider label="h" value={h} min={-1.5} max={1.5} step={0.05} onChange={(v) => setH(Math.abs(v) < 0.025 ? 0.05 : v)} color={C.amber} />
      </Row>
      <Plane view={F.v} label={tr("Difference quotient", "Quotient de différence")} step={1} stepY={F.v.ymax > 8 ? 2 : 1}>
        {(X, Y) => <>
          <path d={pathOf(F.f, F.v, X, Y, fn === "recip" ? [0] : [], fn === "root" || fn === "recip" ? 0.02 : F.v.xmin)} fill="none" stroke={C.violet} strokeWidth={3} />
          <line x1={X(F.v.xmin)} y1={Y(F.f(A) + q(h) * (F.v.xmin - A))} x2={X(F.v.xmax)} y2={Y(F.f(A) + q(h) * (F.v.xmax - A))} stroke={C.amber} strokeWidth={2.2} />
          <line x1={X(F.v.xmin)} y1={Y(F.f(A) + m * (F.v.xmin - A))} x2={X(F.v.xmax)} y2={Y(F.f(A) + m * (F.v.xmax - A))} stroke={C.green} strokeWidth={2} strokeDasharray="6 4" />
          {dot(X, Y, A, F.f(A), C.red, "(a, f(a))", "a")}{dot(X, Y, A + h, F.f(A + h), C.amber, "(a + h, f(a + h))", "b")}
        </>}
      </Plane>
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", margin: "0 auto", fontSize: 14 }}>
          <tbody>
            <tr><th style={cell}>h</th>{hs.map((x) => <td key={x} style={cell}>{x}</td>)}</tr>
            <tr><th style={cell}>quotient</th>{hs.map((x) => <td key={x} style={{ ...cell, color: Math.abs(x) <= 0.01 ? C.green : C.ink, fontWeight: Math.abs(x) <= 0.01 ? 700 : 400 }}>{(Math.round(q(x) * 10000) / 10000).toString()}</td>)}</tr>
          </tbody>
        </table>
      </div>
      <Readout tone="green">
        <MathText block html={tr(`With \\(h=${r2(h)}\\): secant slope \\(\\dfrac{f(${r2(A)}+${r2(h)})-f(${r2(A)})}{${r2(h)}}=${r2(q(h))}\\).`, `Avec \\(h=${r2(h)}\\) : pente de la sécante \\(\\dfrac{f(${r2(A)}+${r2(h)})-f(${r2(A)})}{${r2(h)}}=${r2(q(h))}\\).`)} />
        <MathText block html={tr(`From both sides the quotients approach \\(${r2(m)}\\): \\(\\displaystyle\\lim_{h\\to0}\\frac{f(a+h)-f(a)}{h}\\approx${r2(m)}\\), the slope of the tangent at \\(x=${r2(A)}\\).`, `Des deux côtés, les quotients s'approchent de \\(${r2(m)}\\) : \\(\\displaystyle\\lim_{h\\to0}\\frac{f(a+h)-f(a)}{h}\\approx${r2(m)}\\), la pente de la tangente en \\(x=${r2(A)}\\).`)} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.3 limits */

type LCase = { label: string; labelFr: string; tex: string; a: number; f: Fn; v: View; breaks: number[]; hole?: [number, number]; filled?: [number, number]; left: string; right: string; lim: string; limFr: string };
const LCASES: Record<string, LCase> = {
  hole: { label: "removable (hole)", labelFr: "pouvant être éliminée (trou)", tex: "\\dfrac{x^2-4}{x-2}", a: 2, f: (x) => (x * x - 4) / (x - 2), v: { xmin: -1, xmax: 5, ymin: -1, ymax: 8 }, breaks: [], hole: [2, 4], left: "4", right: "4", lim: "4 (even though f(2) is undefined)", limFr: "4 (même si f(2) n'est pas définie)" },
  jump: { label: "jump", labelFr: "saut", tex: "\\begin{cases}x+1,&x<1\\\\ 4-x,&x\\ge1\\end{cases}", a: 1, f: (x) => (x < 1 ? x + 1 : 4 - x), v: { xmin: -2, xmax: 4, ymin: -1, ymax: 5 }, breaks: [1], hole: [1, 2], filled: [1, 3], left: "2", right: "3", lim: "does not exist (left ≠ right)", limFr: "n'existe pas (gauche ≠ droite)" },
  asym: { label: "infinite", labelFr: "infinie", tex: "\\dfrac{1}{(x-1)^2}", a: 1, f: (x) => 1 / (x - 1) ** 2, v: { xmin: -2, xmax: 4, ymin: -1, ymax: 10 }, breaks: [1], left: "+∞", right: "+∞", lim: "does not exist (grows without bound): vertical asymptote x = 1", limFr: "n'existe pas (croît sans borne) : asymptote verticale x = 1" },
  sign: { label: "one-sided ±∞", labelFr: "±∞ selon le côté", tex: "\\dfrac{1}{x-1}", a: 1, f: (x) => 1 / (x - 1), v: { xmin: -2, xmax: 4, ymin: -8, ymax: 8 }, breaks: [1], left: "−∞", right: "+∞", lim: "does not exist (−∞ from the left, +∞ from the right)", limFr: "n'existe pas (−∞ à gauche, +∞ à droite)" },
  smooth: { label: "polynomial", labelFr: "polynôme", tex: "x^3-x", a: 1.5, f: (x) => x ** 3 - x, v: { xmin: -2, xmax: 2.5, ymin: -4, ymax: 6 }, breaks: [], left: "1.875", right: "1.875", lim: "1.875 = f(1.5): just substitute", limFr: "1.875 = f(1.5) : il suffit de substituer" },
};

export function LimitExplorer({ init = { kase: "hole" } }: { init?: { kase: string } }) {
  const tr = useT();
  const [k, setK] = useState(init.kase);
  const L = LCASES[k] ?? LCASES.hole;
  const [d, setD] = useState(1);
  const xs = [L.a - d, L.a - d / 10, L.a - d / 100, L.a + d / 100, L.a + d / 10, L.a + d];
  const fmt = (y: number) => (Number.isFinite(y) ? (Math.abs(y) > 1e5 ? (y > 0 ? tr("huge +", "énorme +") : tr("huge −", "énorme −")) : (Math.round(y * 10000) / 10000).toString()) : tr("undef.", "non déf."));
  return (
    <WidgetCard title={tr("Limits", "Limites")} subtitle={tr("what value does f(x) approach as x approaches a — from the left and from the right?", "de quelle valeur f(x) s'approche-t-elle quand x tend vers a — par la gauche et par la droite?")}>
      <Segmented options={Object.keys(LCASES).map((key) => ({ value: key, label: tr(LCASES[key].label, LCASES[key].labelFr) }))} value={k} onChange={setK} />
      <Slider label={tr("distance from a (table)", "distance de a (tableau)")} value={d} min={0.2} max={1} step={0.1} onChange={setD} color={C.blue} />
      <div style={{ textAlign: "center", fontSize: 18, margin: "6px 0" }}><MathText html={`\\(f(x)=${L.tex}\\qquad x\\to${L.a}\\)`} /></div>
      <Plane view={L.v} label={tr("Limit", "Limite")} step={1} stepY={L.v.ymax - L.v.ymin > 12 ? 2 : 1}>
        {(X, Y) => <>
          <line x1={X(L.a)} y1={Y(L.v.ymax)} x2={X(L.a)} y2={Y(L.v.ymin)} stroke={C.muted} strokeWidth={1.2} strokeDasharray="4 4" />
          <path d={pathOf(L.f, L.v, X, Y, [...L.breaks, ...(L.hole ? [L.hole[0]] : [])])} fill="none" stroke={C.violet} strokeWidth={3} />
          {L.hole && openDot(X, Y, L.hole[0], L.hole[1], C.violet, "h")}
          {L.filled && dot(X, Y, L.filled[0], L.filled[1], C.violet, undefined, "f")}
          {xs.map((x, i) => (Number.isFinite(L.f(x)) && L.f(x) < L.v.ymax && L.f(x) > L.v.ymin ? dot(X, Y, x, L.f(x), i < 3 ? C.red : C.blue, undefined, i) : null))}
        </>}
      </Plane>
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", margin: "0 auto", fontSize: 14 }}>
          <tbody>
            <tr><th style={cell}>x</th>{xs.map((x, i) => <td key={i} style={{ ...cell, color: i < 3 ? C.red : C.blue }}>{r2(Math.round(x * 1000) / 1000)}</td>)}</tr>
            <tr><th style={cell}>f(x)</th>{xs.map((x, i) => <td key={i} style={cell}>{fmt(L.f(x))}</td>)}</tr>
          </tbody>
        </table>
      </div>
      <Readout tone="green">
        <MathText block html={tr(`Left-hand limit \\(\\displaystyle\\lim_{x\\to${L.a}^-}f(x)=${L.left}\\); right-hand limit \\(\\displaystyle\\lim_{x\\to${L.a}^+}f(x)=${L.right}\\).`, `Limite à gauche \\(\\displaystyle\\lim_{x\\to${L.a}^-}f(x)=${L.left}\\); limite à droite \\(\\displaystyle\\lim_{x\\to${L.a}^+}f(x)=${L.right}\\).`)} />
        <MathText block html={tr(`\\(\\displaystyle\\lim_{x\\to${L.a}}f(x)\\): ${L.lim}.`, `\\(\\displaystyle\\lim_{x\\to${L.a}}f(x)\\) : ${L.limFr}.`)} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.4 continuity of a piecewise function */

export function ContinuityLab({ init = { k: 0, m: 3 } }: { init?: { k: number; m: number } }) {
  const tr = useT();
  const [k, setK] = useState(init.k), [m, setM] = useState(init.m);
  // f(x) = x² + k for x < 1 ; m·x − 1 for x ≥ 1
  const left = 1 + k, right = m - 1;
  const f: Fn = (x) => (x < 1 ? x * x + k : m * x - 1);
  const cont = Math.abs(left - right) < 1e-9;
  const v: View = { xmin: -2, xmax: 3, ymin: -4, ymax: 8 };
  return (
    <WidgetCard title={tr("Continuity of a piecewise function", "Continuité d'une fonction définie par parties")} subtitle={tr("continuous at x = 1 when the left limit, the right limit and f(1) all agree", "continue en x = 1 quand la limite à gauche, la limite à droite et f(1) sont égales")}>
      <Row gap={10}>
        <Slider label={tr("k (left piece x² + k)", "k (partie gauche x² + k)")} value={k} min={-3} max={4} step={0.5} onChange={setK} color={C.blue} />
        <Slider label={tr("m (right piece mx − 1)", "m (partie droite mx − 1)")} value={m} min={-2} max={5} step={0.5} onChange={setM} color={C.green} />
      </Row>
      <div style={{ textAlign: "center", fontSize: 18, margin: "6px 0" }}><MathText html={`\\(f(x)=\\begin{cases}x^2${k === 0 ? "" : k > 0 ? `+${r2(k)}` : `-${r2(-k)}`}, & x<1\\\\ ${m === 1 ? "" : r2(m)}x-1, & x\\ge1\\end{cases}\\)`} /></div>
      <Plane view={v} label={tr("Continuity", "Continuité")} step={1} stepY={1}>
        {(X, Y) => <>
          <path d={pathOf(f, v, X, Y, [1])} fill="none" stroke={cont ? C.green : C.violet} strokeWidth={3} />
          {!cont && openDot(X, Y, 1, left, C.violet, "o")}
          {dot(X, Y, 1, right, cont ? C.green : C.red, `f(1) = ${r2(right)}`, "f")}
        </>}
      </Plane>
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", margin: "0 auto", fontSize: 14 }}>
          <tbody>
            <tr><th style={cell}>{tr("left limit", "limite à gauche")}</th><th style={cell}>{tr("right limit", "limite à droite")}</th><th style={cell}>f(1)</th><th style={cell}>{tr("continuous at 1?", "continue en 1?")}</th></tr>
            <tr><td style={cell}>{r2(left)}</td><td style={cell}>{r2(right)}</td><td style={cell}>{r2(right)}</td><td style={{ ...cell, fontWeight: 700, color: cont ? "#166534" : C.red }}>{cont ? tr("yes", "oui") : tr("no (jump)", "non (saut)")}</td></tr>
          </tbody>
        </table>
      </div>
      <Readout tone={cont ? "green" : "amber"}>
        <MathText block html={`\\(\\displaystyle\\lim_{x\\to1^-}f(x)=1+k=${r2(left)}\\) ${tr("and", "et")} \\(\\displaystyle\\lim_{x\\to1^+}f(x)=m-1=${r2(right)}\\).`} />
        <MathText block html={cont ? tr("The pieces meet: the limit exists and equals f(1), so f is continuous at x = 1.", "Les parties se rejoignent : la limite existe et est égale à f(1), donc f est continue en x = 1.") : tr(`The pieces miss by \\(${r2(Math.abs(left - right))}\\): a jump discontinuity. Make them meet with \\(m-1=1+k\\), i.e. \\(m=k+2\\).`, `Les parties sont décalées de \\(${r2(Math.abs(left - right))}\\) : une discontinuité de saut. Pour qu'elles se rejoignent, il faut \\(m-1=1+k\\), c.-à-d. \\(m=k+2\\).`)} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.5 building the derivative graph */

const DBF: Record<string, { tex: string; f: Fn; fp: Fn; fpTex: string; v: View; vp: View }> = {
  quad: { tex: "x^2-2x", f: (x) => x * x - 2 * x, fp: (x) => 2 * x - 2, fpTex: "2x-2", v: { xmin: -2, xmax: 4, ymin: -3, ymax: 8 }, vp: { xmin: -2, xmax: 4, ymin: -7, ymax: 7 } },
  cubic: { tex: "x^3-3x", f: (x) => x ** 3 - 3 * x, fp: (x) => 3 * x * x - 3, fpTex: "3x^2-3", v: { xmin: -2.5, xmax: 2.5, ymin: -6, ymax: 6 }, vp: { xmin: -2.5, xmax: 2.5, ymin: -5, ymax: 15 } },
  quart: { tex: "\\tfrac14x^4-x^2", f: (x) => x ** 4 / 4 - x * x, fp: (x) => x ** 3 - 2 * x, fpTex: "x^3-2x", v: { xmin: -2.5, xmax: 2.5, ymin: -2, ymax: 4 }, vp: { xmin: -2.5, xmax: 2.5, ymin: -6, ymax: 6 } },
};

export function DerivativeBuilder({ init = { fn: "cubic", x: -2 } }: { init?: { fn: string; x: number } }) {
  const tr = useT();
  const [fn, setFn] = useState(init.fn);
  const D = DBF[fn] ?? DBF.cubic;
  const [x0, setX0] = useState(init.x);
  const [reveal, setReveal] = useState(false);
  const X0 = Math.min(Math.max(x0, D.v.xmin), D.v.xmax);
  const s = deriv(D.f, X0);
  const traced = Array.from({ length: 41 }, (_, i) => D.v.xmin + ((X0 - D.v.xmin) * i) / 40);
  return (
    <WidgetCard title={tr("Building the derivative", "Construire la dérivée")} subtitle={tr("slide the point: each tangent slope on y = f(x) becomes a height on y = f′(x)", "fais glisser le point : chaque pente de tangente sur y = f(x) devient une hauteur sur y = f′(x)")}>
      <Segmented options={Object.keys(DBF).map((k) => ({ value: k, label: `f(x) = ${DBF[k].tex.replace("\\tfrac14", "¼").replace(/\^2/g, "²").replace(/\^3/g, "³").replace(/\^4/g, "⁴")}` }))} value={fn} onChange={(v) => { setFn(v); setX0(DBF[v].v.xmin); }} />
      <Slider label="x" value={rnd(X0)} min={D.v.xmin} max={D.v.xmax} step={(D.v.xmax - D.v.xmin) / 100} onChange={setX0} color={C.red} />
      <Plane view={D.v} label={tr("Function with tangent", "Fonction avec tangente")} step={1} stepY={1}>
        {(X, Y) => <>
          <path d={pathOf(D.f, D.v, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
          <line x1={X(X0 - 1.2)} y1={Y(D.f(X0) - 1.2 * s)} x2={X(X0 + 1.2)} y2={Y(D.f(X0) + 1.2 * s)} stroke={C.green} strokeWidth={2.4} />
          {dot(X, Y, X0, D.f(X0), C.red, `${tr("slope", "pente")} ${r2(s)}`, "p")}
        </>}
      </Plane>
      <Plane view={D.vp} label={tr("Derivative graph", "Graphique de la dérivée")} step={1} stepY={D.vp.ymax > 10 ? 3 : 1}>
        {(X, Y) => <>
          {reveal && <path d={pathOf(D.fp, D.vp, X, Y)} fill="none" stroke={C.blue} strokeWidth={2} strokeDasharray="6 4" />}
          {traced.map((x, i) => <circle key={i} cx={X(x)} cy={Y(deriv(D.f, x))} r={2.6} fill={C.green} />)}
          {dot(X, Y, X0, s, C.red, `(${r2(X0)}, ${r2(s)})`, "q")}
        </>}
      </Plane>
      <Segmented options={[{ value: "off", label: tr("hide formula curve", "masquer la courbe de la formule") }, { value: "on", label: `${tr("show", "afficher")} f′(x) = ${D.fpTex.replace(/\^2/g, "²").replace(/\^3/g, "³")}` }]} value={reveal ? "on" : "off"} onChange={(v) => setReveal(v === "on")} />
      <Readout tone="green">
        <MathText block html={`${tr(`At \\(x=${r2(X0)}\\) the tangent slope is \\(${r2(s)}\\), so \\(f'(${r2(X0)})=${r2(s)}\\).`, `En \\(x=${r2(X0)}\\), la pente de la tangente est \\(${r2(s)}\\), donc \\(f'(${r2(X0)})=${r2(s)}\\).`)} ${Math.abs(s) < 0.05 ? tr("The tangent is horizontal: f′ crosses zero here (a turning point of f).", "La tangente est horizontale : f′ s'annule ici (un point tournant de f).") : s > 0 ? tr("f is increasing here, so f′ is positive.", "f est croissante ici, donc f′ est positive.") : tr("f is decreasing here, so f′ is negative.", "f est décroissante ici, donc f′ est négative.")}`} />
        <MathText block html={tr(`From the definition: \\(f'(x)=\\displaystyle\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}=${D.fpTex}\\) — the green dots lie on it.`, `Par la définition : \\(f'(x)=\\displaystyle\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}=${D.fpTex}\\) — les points verts sont sur cette courbe.`)} />
      </Readout>
    </WidgetCard>
  );
}
