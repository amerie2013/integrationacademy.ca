"use client";

// MCV4U chapter 2 (derivative rules) explorers: power/sum rule with f and f′ side by side, the product rule as an
// area model, motion on a line (position, velocity, acceleration), the chain rule as a product of rates, the
// quotient rule with a numeric check, and marginal cost vs the cost of one more item.

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { useT } from "@/lib/lang";
import { Plane, r2, type View } from "./Systems";
import { dot } from "./Quadratics";

type Fn = (x: number) => number;
const rnd = (x: number) => Math.round(x * 100) / 100;
const num = (f: Fn, x: number, h = 1e-4) => (f(x + h) - f(x - h)) / (2 * h);
function pathOf(f: Fn, v: View, X: (x: number) => number, Y: (y: number) => number, a = v.xmin, b = v.xmax, breaks: number[] = []) {
  const cuts = [a, ...breaks.filter((p) => p > a && p < b).sort((p, q) => p - q), b];
  const band = (v.ymax - v.ymin) * 3;
  let d = "";
  for (let s = 0; s < cuts.length - 1; s++) {
    const lo = cuts[s] + (s ? 1e-4 : 0), hi = cuts[s + 1] - (s < cuts.length - 2 ? 1e-4 : 0);
    let pen = false;
    for (let i = 0; i <= 300; i++) {
      const x = lo + ((hi - lo) * i) / 300, y = f(x);
      if (!Number.isFinite(y) || y > v.ymax + band || y < v.ymin - band) { pen = false; continue; }
      d += `${pen ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)} `; pen = true;
    }
  }
  return d;
}
const sup = (n: number) => (n === 1 ? "" : `^{${n}}`);
function polyTex(cs: number[]) {
  const n = cs.length - 1;
  const t = cs.map((a, i) => ({ a, p: n - i })).filter((o) => o.a !== 0);
  if (!t.length) return "0";
  return t.map((o, i) => { const sign = o.a < 0 ? "-" : i === 0 ? "" : "+"; const mag = Math.abs(o.a) === 1 && o.p ? "" : r2(Math.abs(o.a)); return `${sign}${mag}${o.p ? `x${sup(o.p)}` : ""}`; }).join("");
}
const ev = (cs: number[], x: number) => cs.reduce((s, a) => s * x + a, 0);
const dcs = (cs: number[]) => cs.slice(0, -1).map((a, i) => a * (cs.length - 1 - i));

/* ---------------------------------------------------------------- 2.1 power and sum rules */

export function PowerRuleLab({ init = [1, -3, 0, 2] }: { init?: number[] }) {
  const tr = useT();
  const [cs, setCs] = useState<number[]>(init);
  const [x0, setX0] = useState(2);
  const d = dcs(cs);
  const f: Fn = (x) => ev(cs, x), fp: Fn = (x) => ev(d, x);
  const v: View = { xmin: -3, xmax: 3, ymin: -10, ymax: 10 };
  const set = (i: number, val: number) => setCs((c) => c.map((x, j) => (j === i ? val : x)));
  const terms = cs.map((a, i) => ({ a, p: cs.length - 1 - i })).filter((t) => t.a !== 0 && t.p > 0);
  return (
    <WidgetCard title={tr("The power rule and the sum rule", "La règle de la puissance et la règle de la somme")} subtitle={tr("d/dx xⁿ = n xⁿ⁻¹, term by term; constants vanish", "d/dx xⁿ = n xⁿ⁻¹, terme par terme; les constantes disparaissent")}>
      <Row gap={8}>{["a (x³)", "b (x²)", "c (x)", tr("d (constant)", "d (constante)")].map((nm, i) => <Slider key={nm} label={nm} value={cs[i]} min={-4} max={4} step={0.5} onChange={(val) => set(i, val)} color={i === 3 ? C.muted : C.blue} />)}</Row>
      <Slider label={tr("x for the tangent", "x pour la tangente")} value={rnd(x0)} min={-2.5} max={2.5} step={0.05} onChange={setX0} color={C.red} />
      <div style={{ textAlign: "center", fontSize: 18, margin: "6px 0" }}><MathText html={`\\(f(x)=${polyTex(cs)}\\qquad f'(x)=${polyTex(d)}\\)`} /></div>
      <Plane view={v} label={tr("f and f′", "f et f′")} step={1} stepY={2}>
        {(X, Y) => <>
          <path d={pathOf(f, v, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
          <path d={pathOf(fp, v, X, Y)} fill="none" stroke={C.blue} strokeWidth={2} strokeDasharray="6 4" />
          <line x1={X(x0 - 1.2)} y1={Y(f(x0) - 1.2 * fp(x0))} x2={X(x0 + 1.2)} y2={Y(f(x0) + 1.2 * fp(x0))} stroke={C.green} strokeWidth={2.4} />
          {dot(X, Y, x0, f(x0), C.red, `${tr("slope", "pente")} ${r2(fp(x0))}`, "p")}{dot(X, Y, x0, fp(x0), C.blue, `f′ = ${r2(fp(x0))}`, "q")}
        </>}
      </Plane>
      <Readout tone="green">
        <MathText block html={`${tr("Term by term:", "Terme par terme :")} ${terms.length ? terms.map((t) => `\\(\\tfrac{d}{dx}\\,${polyTex([t.a, ...Array(t.p).fill(0)])}=${polyTex([t.a * t.p, ...Array(t.p - 1).fill(0)])}\\)`).join(", ") : tr("only a constant", "seulement une constante")}${cs[3] !== 0 ? tr(`, and the constant \\(${r2(cs[3])}\\) has derivative 0`, `, et la constante \\(${r2(cs[3])}\\) a une dérivée nulle`) : ""}.`} />
        <MathText block html={tr(`At \\(x=${r2(x0)}\\): \\(f'(${r2(x0)})=${r2(fp(x0))}\\) — the slope of the green tangent and the height of the dashed blue \\(f'\\) graph.`, `En \\(x=${r2(x0)}\\) : \\(f'(${r2(x0)})=${r2(fp(x0))}\\) — la pente de la tangente verte et la hauteur du graphique bleu pointillé de \\(f'\\).`)} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 2.2 product rule as an area model */

export function ProductRuleLab({ init = { x: 2, dx: 0.6 } }: { init?: { x: number; dx: number } }) {
  const tr = useT();
  const [x, setX] = useState(init.x), [dx, setDx] = useState(init.dx);
  // u = x + 1 (width), v = x² (height)
  const u = (t: number) => t + 1, v = (t: number) => t * t;
  const U = u(x), V = v(x), dU = u(x + dx) - U, dV = v(x + dx) - V;
  const S = 40, W = (U + dU) * S, H = (V + dV) * S / 2;
  const sx = (k: number) => 20 + k * S, sy = (k: number) => 20 + H - (k * S) / 2;
  return (
    <WidgetCard title={tr("The product rule as an area", "La règle du produit vue comme une aire")} subtitle={tr("(uv)′ = u′v + uv′: a growing rectangle with sides u = x + 1 and v = x²", "(uv)′ = u′v + uv′ : un rectangle qui grandit, de côtés u = x + 1 et v = x²")}>
      <Row gap={10}>
        <Slider label="x" value={x} min={0.5} max={2.5} step={0.1} onChange={setX} color={C.red} />
        <Slider label="Δx" value={dx} min={0.05} max={1} step={0.05} onChange={setDx} color={C.amber} />
      </Row>
      <svg viewBox={`0 0 ${W + 60} ${H + 50}`} style={{ width: "100%", maxWidth: 520, display: "block", margin: "8px auto" }} role="img" aria-label={tr("Area model", "Modèle d'aire")}>
        <rect x={sx(0)} y={sy(V)} width={U * S} height={(V * S) / 2} fill="#ede9fe" stroke={C.violet} />
        <rect x={sx(U)} y={sy(V)} width={dU * S} height={(V * S) / 2} fill="#dbeafe" stroke={C.blue} />
        <rect x={sx(0)} y={sy(V + dV)} width={U * S} height={(dV * S) / 2} fill="#dcfce7" stroke={C.green} />
        <rect x={sx(U)} y={sy(V + dV)} width={dU * S} height={(dV * S) / 2} fill="#fef3c7" stroke={C.amber} />
        <text x={sx(U / 2)} y={sy(V / 2)} fontSize={14} textAnchor="middle" fill={C.violet} fontWeight={700}>u·v</text>
        <text x={sx(U + dU / 2)} y={sy(V / 2)} fontSize={12} textAnchor="middle" fill={C.blue} fontWeight={700}>v·Δu</text>
        <text x={sx(U / 2)} y={sy(V + dV / 2) + 4} fontSize={12} textAnchor="middle" fill="#166534" fontWeight={700}>u·Δv</text>
      </svg>
      <Readout tone="green">
        <MathText block html={`${tr("New area − old area", "Nouvelle aire − ancienne aire")} \\(=v\\,\\Delta u+u\\,\\Delta v+\\Delta u\\,\\Delta v=${r2(V * dU)}+${r2(U * dV)}+${r2(dU * dV)}\\).`} />
        <MathText block html={tr(`Divide by \\(\\Delta x\\) and let \\(\\Delta x\\to0\\): the tiny corner disappears, leaving \\((uv)'=u'v+uv'=(1)(x^2)+(x+1)(2x)\\). At \\(x=${r2(x)}\\): \\(${r2(V + U * 2 * x)}\\) (the rate of change of the area).`, `Divise par \\(\\Delta x\\) et fais tendre \\(\\Delta x\\to0\\) : le petit coin disparaît, il reste \\((uv)'=u'v+uv'=(1)(x^2)+(x+1)(2x)\\). En \\(x=${r2(x)}\\) : \\(${r2(V + U * 2 * x)}\\) (le taux de variation de l'aire).`)} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 2.3 motion: position, velocity, acceleration */

export function MotionLab({ init = { cs: [1, -6, 9, 1], t: 0.5 } }: { init?: { cs: number[]; t: number } }) {
  const tr = useT();
  const [cs, setCs] = useState<number[]>(init.cs);
  const [t, setT] = useState(init.t);
  const vcs = dcs(cs), acs = dcs(vcs);
  const s: Fn = (x) => ev(cs, x), vel: Fn = (x) => ev(vcs, x), acc: Fn = (x) => ev(acs, x);
  const view: View = { xmin: 0, xmax: 5, ymin: -12, ymax: 12 };
  const st = s(t), vt = vel(t), at = acc(t);
  const mode = Math.abs(vt) < 0.05 ? tr("momentarily at rest", "momentanément au repos") : vt * at > 0 ? tr("speeding up", "en train d'accélérer") : vt * at < 0 ? tr("slowing down", "en train de ralentir") : tr("moving at constant speed", "en mouvement à vitesse constante");
  const lo = Math.min(...Array.from({ length: 51 }, (_, i) => s((5 * i) / 50))), hi = Math.max(...Array.from({ length: 51 }, (_, i) => s((5 * i) / 50)));
  const LX = (p: number) => 20 + ((p - lo) / (hi - lo || 1)) * 440;
  return (
    <WidgetCard title={tr("Motion on a line", "Mouvement sur une droite")} subtitle={tr("v(t) = s′(t), a(t) = v′(t) = s″(t); speeding up when v and a have the same sign", "v(t) = s′(t), a(t) = v′(t) = s″(t); la particule accélère quand v et a ont le même signe")}>
      <Segmented options={[{ value: "a", label: "s = t³ − 6t² + 9t + 1" }, { value: "b", label: "s = −t³ + 4.5t² + 2" }, { value: "c", label: "s = t² − 4t + 3" }]} value={cs[0] === 1 && cs.length === 4 ? "a" : cs[0] === -1 ? "b" : "c"} onChange={(k) => setCs(k === "a" ? [1, -6, 9, 1] : k === "b" ? [-1, 4.5, 0, 2] : [1, -4, 3])} />
      <Slider label={tr("time t (s)", "temps t (s)")} value={t} min={0} max={5} step={0.05} onChange={setT} color={C.red} />
      <svg viewBox="0 0 480 60" style={{ width: "100%", maxWidth: 520, display: "block", margin: "6px auto" }} role="img" aria-label={tr("Particle on a line", "Particule sur une droite")}>
        <line x1={20} y1={30} x2={460} y2={30} stroke={C.ink} strokeWidth={1.5} />
        <circle cx={LX(st)} cy={30} r={9} fill={C.red} />
        {Math.abs(vt) > 0.05 && <line x1={LX(st)} y1={30} x2={LX(st) + Math.sign(vt) * Math.min(60, 10 + Math.abs(vt) * 6)} y2={30} stroke={C.blue} strokeWidth={3} markerEnd="url(#mv)" />}
        <defs><marker id="mv" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill={C.blue} /></marker></defs>
        <text x={20} y={55} fontSize={11} fill={C.muted}>{r2(lo)}</text><text x={440} y={55} fontSize={11} fill={C.muted}>{r2(hi)}</text>
      </svg>
      <Plane view={view} label={tr("s, v and a", "s, v et a")} step={0.5} stepY={2}>
        {(X, Y) => <>
          <path d={pathOf(s, view, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
          <path d={pathOf(vel, view, X, Y)} fill="none" stroke={C.blue} strokeWidth={2.2} />
          <path d={pathOf(acc, view, X, Y)} fill="none" stroke={C.amber} strokeWidth={2} strokeDasharray="6 4" />
          <line x1={X(t)} y1={Y(view.ymax)} x2={X(t)} y2={Y(view.ymin)} stroke={C.red} strokeWidth={1} />
          {dot(X, Y, t, st, C.violet, "s", "s")}{dot(X, Y, t, vt, C.blue, "v", "v")}{dot(X, Y, t, at, C.amber, "a", "a")}
        </>}
      </Plane>
      <Readout tone="green">
        <MathText block html={`\\(s(${r2(t)})=${r2(st)}\\) m, \\(v=${r2(vt)}\\) m/s, \\(a=${r2(at)}\\) m/s² — ${tr("the particle is", "la particule est")} <strong>${mode}</strong>${Math.abs(vt) >= 0.05 ? (vt > 0 ? tr(", moving right", ", vers la droite") : tr(", moving left", ", vers la gauche")) : ""}.`} />
        <MathText block html={tr(`Violet: position. Blue: velocity \\(s'\\). Amber dashed: acceleration \\(s''\\). The particle turns around where \\(v=0\\) changes sign.`, `Violet : position. Bleu : vitesse \\(s'\\). Orange pointillé : accélération \\(s''\\). La particule change de direction là où \\(v=0\\) change de signe.`)} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 2.4 chain rule */

const INNER: Record<string, { tex: string; g: Fn; gp: Fn; gpTex: string }> = {
  lin: { tex: "3x-1", g: (x) => 3 * x - 1, gp: () => 3, gpTex: "3" },
  quad: { tex: "x^2+1", g: (x) => x * x + 1, gp: (x) => 2 * x, gpTex: "2x" },
  cub: { tex: "x^3-2x", g: (x) => x ** 3 - 2 * x, gp: (x) => 3 * x * x - 2, gpTex: "3x^2-2" },
};

export function ChainRuleLab({ init = { inner: "quad", n: 3, x: 1 } }: { init?: { inner: string; n: number; x: number } }) {
  const tr = useT();
  const [ik, setIk] = useState(init.inner), [n, setN] = useState(init.n), [x0, setX0] = useState(init.x);
  const I = INNER[ik] ?? INNER.quad;
  const N = n === 0 ? 1 : n;
  const F: Fn = (x) => Math.pow(I.g(x), N);
  const u = I.g(x0), outer = N * Math.pow(u, N - 1), inner = I.gp(x0);
  const view: View = { xmin: -2, xmax: 2, ymin: -10, ymax: 30 };
  return (
    <WidgetCard title={tr("The chain rule", "La règle de dérivation en chaîne")} subtitle={tr("d/dx f(g(x)) = f′(g(x)) · g′(x): multiply the outer rate by the inner rate", "d/dx f(g(x)) = f′(g(x)) · g′(x) : multiplie le taux extérieur par le taux intérieur")}>
      <Segmented options={Object.keys(INNER).map((k) => ({ value: k, label: `g(x) = ${INNER[k].tex.replace("^2", "²").replace("^3", "³")}` }))} value={ik} onChange={setIk} />
      <Row gap={10}>
        <Slider label={tr("outer power n", "puissance extérieure n")} value={n} min={-2} max={4} onChange={(v) => setN(v === 0 ? 1 : v)} color={C.violet} />
        <Slider label="x" value={rnd(x0)} min={-1.5} max={1.5} step={0.05} onChange={setX0} color={C.red} />
      </Row>
      <div style={{ textAlign: "center", fontSize: 18, margin: "6px 0" }}><MathText html={`\\(y=(${I.tex})^{${N}}\\qquad \\dfrac{dy}{dx}=${N}(${I.tex})^{${N - 1}}\\cdot(${I.gpTex})\\)`} /></div>
      <Plane view={view} label={tr("Composite function", "Fonction composée")} step={0.5} stepY={5}>
        {(X, Y) => <>
          <path d={pathOf(F, view, X, Y, view.xmin, view.xmax, [])} fill="none" stroke={C.violet} strokeWidth={3} />
          {Number.isFinite(F(x0)) && <line x1={X(x0 - 0.6)} y1={Y(F(x0) - 0.6 * outer * inner)} x2={X(x0 + 0.6)} y2={Y(F(x0) + 0.6 * outer * inner)} stroke={C.green} strokeWidth={2.4} />}
          {Number.isFinite(F(x0)) && dot(X, Y, x0, F(x0), C.red, undefined, "p")}
        </>}
      </Plane>
      <Readout tone="green">
        <MathText block html={tr(`At \\(x=${r2(x0)}\\): inner value \\(u=g(${r2(x0)})=${r2(u)}\\). Outer rate \\(\\frac{dy}{du}=${N}u^{${N - 1}}=${r2(outer)}\\); inner rate \\(\\frac{du}{dx}=${r2(inner)}\\).`, `En \\(x=${r2(x0)}\\) : valeur intérieure \\(u=g(${r2(x0)})=${r2(u)}\\). Taux extérieur \\(\\frac{dy}{du}=${N}u^{${N - 1}}=${r2(outer)}\\); taux intérieur \\(\\frac{du}{dx}=${r2(inner)}\\).`)} />
        <MathText block html={`\\(\\dfrac{dy}{dx}=\\dfrac{dy}{du}\\cdot\\dfrac{du}{dx}=${r2(outer)}\\times${r2(inner)}=${r2(outer * inner)}\\) ${tr("(numerical check:", "(vérification numérique :")} \\(${r2(num(F, x0))}\\)).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 2.5 quotient rule */

export function QuotientLab({ init = { a: 2, b: 1, x: 1 } }: { init?: { a: number; b: number; x: number } }) {
  const tr = useT();
  const [a, setA] = useState(init.a), [b, setB] = useState(init.b), [x0, setX0] = useState(init.x);
  // y = (a x + b) / (x² + 1)
  const u: Fn = (x) => a * x + b, v: Fn = (x) => x * x + 1;
  const f: Fn = (x) => u(x) / v(x);
  const fp = (x: number) => (a * v(x) - u(x) * 2 * x) / (v(x) ** 2);
  const view: View = { xmin: -5, xmax: 5, ymin: -4, ymax: 4 };
  const s = fp(x0);
  return (
    <WidgetCard title={tr("The quotient rule", "La règle du quotient")} subtitle={tr("(u/v)′ = (u′v − uv′)/v² — here u = ax + b, v = x² + 1", "(u/v)′ = (u′v − uv′)/v² — ici u = ax + b, v = x² + 1")}>
      <Row gap={10}>
        <Slider label="a" value={a} min={-4} max={4} onChange={setA} color={C.blue} />
        <Slider label="b" value={b} min={-4} max={4} onChange={setB} color={C.blue} />
        <Slider label="x" value={rnd(x0)} min={-4} max={4} step={0.05} onChange={setX0} color={C.red} />
      </Row>
      <div style={{ textAlign: "center", fontSize: 18, margin: "6px 0" }}><MathText html={`\\(y=\\dfrac{${a}x${b >= 0 ? "+" : ""}${b}}{x^2+1}\\qquad y'=\\dfrac{${a}(x^2+1)-(${a}x${b >= 0 ? "+" : ""}${b})(2x)}{(x^2+1)^2}\\)`} /></div>
      <Plane view={view} label={tr("Quotient", "Quotient")} step={1} stepY={1}>
        {(X, Y) => <>
          <path d={pathOf(f, view, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
          <path d={pathOf(fp, view, X, Y)} fill="none" stroke={C.blue} strokeWidth={2} strokeDasharray="6 4" />
          <line x1={X(x0 - 1.5)} y1={Y(f(x0) - 1.5 * s)} x2={X(x0 + 1.5)} y2={Y(f(x0) + 1.5 * s)} stroke={C.green} strokeWidth={2.4} />
          {dot(X, Y, x0, f(x0), C.red, undefined, "p")}
        </>}
      </Plane>
      <Readout tone="green">
        <MathText block html={`${tr("At", "En")} \\(x=${r2(x0)}\\)${tr(":", " :")} \\(u=${r2(u(x0))}\\), \\(u'=${a}\\), \\(v=${r2(v(x0))}\\), \\(v'=${r2(2 * x0)}\\). ${tr("So", "Donc")} \\(y'=\\dfrac{(${a})(${r2(v(x0))})-(${r2(u(x0))})(${r2(2 * x0)})}{${r2(v(x0))}^2}=${r2(s)}\\) ${tr("(numerical:", "(valeur numérique :")} \\(${r2(num(f, x0))}\\)).`} />
        <MathText block html={tr(`The dashed blue curve is \\(y'\\); its zeros mark the maximum and minimum of \\(y\\).`, `La courbe bleue pointillée est \\(y'\\); ses zéros indiquent le maximum et le minimum de \\(y\\).`)} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 2.6 marginal cost */

export function MarginalCost({ init = { F: 500, a: 20, b: 0.05, x: 100 } }: { init?: { F: number; a: number; b: number; x: number } }) {
  const tr = useT();
  const [F, setF] = useState(init.F), [a, setA] = useState(init.a), [b, setB] = useState(init.b), [x0, setX0] = useState(init.x);
  const Cf: Fn = (x) => F + a * x + b * x * x, Cp: Fn = (x) => a + 2 * b * x;
  const view: View = { xmin: 0, xmax: 300, ymin: 0, ymax: Math.max(1000, Cf(300) * 1.05) };
  const actual = Cf(x0 + 1) - Cf(x0);
  return (
    <WidgetCard title={tr("Marginal cost", "Coût marginal")} subtitle={tr("C′(x) ≈ the cost of producing one more item, C(x + 1) − C(x)", "C′(x) ≈ le coût de production d'un article de plus, C(x + 1) − C(x)")}>
      <Row gap={8}>
        <Slider label={tr("fixed cost F", "coût fixe F")} value={F} min={0} max={2000} step={50} onChange={setF} color={C.muted} />
        <Slider label={tr("a ($ per item)", "a ($ par article)")} value={a} min={0} max={50} onChange={setA} color={C.blue} />
        <Slider label="b" value={b} min={-0.05} max={0.2} step={0.01} onChange={setB} color={C.blue} />
        <Slider label={tr("items x", "articles x")} value={x0} min={0} max={280} step={5} onChange={setX0} color={C.red} />
      </Row>
      <div style={{ textAlign: "center", fontSize: 18, margin: "6px 0" }}><MathText html={`\\(C(x)=${F}+${a}x${b >= 0 ? "+" : ""}${r2(b)}x^2\\qquad C'(x)=${a}${b >= 0 ? "+" : ""}${r2(2 * b)}x\\)`} /></div>
      <Plane view={view} label={tr("Cost", "Coût")} step={50} stepY={Math.round(view.ymax / 8 / 100) * 100 || 100}>
        {(X, Y) => <>
          <path d={pathOf(Cf, view, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
          <line x1={X(Math.max(0, x0 - 80))} y1={Y(Cf(x0) - Cp(x0) * Math.min(80, x0))} x2={X(Math.min(300, x0 + 80))} y2={Y(Cf(x0) + Cp(x0) * Math.min(80, 300 - x0))} stroke={C.green} strokeWidth={2.2} />
          {dot(X, Y, x0, Cf(x0), C.red, `(${x0}, ${r2(Cf(x0))})`, "p")}
        </>}
      </Plane>
      <Readout tone="green">
        <MathText block html={tr(`Marginal cost \\(C'(${x0})=${r2(Cp(x0))}\\) dollars per item; actual cost of item number ${x0 + 1}: \\(C(${x0 + 1})-C(${x0})=${r2(actual)}\\) dollars.`, `Coût marginal \\(C'(${x0})=${r2(Cp(x0))}\\) dollars par article; coût réel de l'article numéro ${x0 + 1} : \\(C(${x0 + 1})-C(${x0})=${r2(actual)}\\) dollars.`)} />
        <MathText block html={`${tr("The tangent slope (marginal cost) is a quick, accurate estimate of the extra cost of one more item.", "La pente de la tangente (coût marginal) est une estimation rapide et précise du coût supplémentaire d'un article de plus.")} ${b > 0 ? tr("It rises as production grows.", "Il augmente à mesure que la production augmente.") : b < 0 ? tr("It falls as production grows (economies of scale).", "Il diminue à mesure que la production augmente (économies d'échelle).") : tr("It is constant.", "Il est constant.")}`} />
      </Readout>
    </WidgetCard>
  );
}
