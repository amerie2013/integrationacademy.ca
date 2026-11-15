"use client";

// MCR3U chapter 5 (trigonometric ratios) explorers: special triangles and exact values, the terminal arm from 0° to
// 360° (related angle, CAST, the second angle with the same ratio), numeric checks of identities, the ambiguous case of
// the sine law, the cosine law, and a three-dimensional height problem drawn in oblique projection.

import { useState } from "react";
import { useT } from "@/lib/lang";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { r2 } from "./Systems";

const rad = (d: number) => (d * Math.PI) / 180, deg = (r: number) => (r * 180) / Math.PI;
const n = (v: number, d = 3) => { const s = r2(v, d); return s === "-0" ? "0" : s; };
const svgBox: React.CSSProperties = { width: "100%", maxWidth: 520, display: "block", margin: "8px auto" };
const cell: React.CSSProperties = { padding: "4px 10px", textAlign: "center", borderBottom: `1px solid ${C.line}` };
const lbl = (x: number, y: number, t: string, color: string = C.ink, size = 15, anchor: "start" | "middle" | "end" = "middle") => (
  <text x={x} y={y} fontSize={size} fontWeight={700} fill={color} textAnchor={anchor} stroke="#fff" strokeWidth={3} paintOrder="stroke">{t}</text>
);

/* ---------------------------------------------------------------- 5.1 special triangles */

export function SpecialTriangles({ start = "30" }: { start?: "30" | "45" }) {
  const t = useT();
  const [kind, setKind] = useState<"30" | "45">(start);
  const [ang, setAng] = useState(kind === "45" ? 45 : 30);
  const angle = kind === "45" ? 45 : ang;
  const W = 460, H = 280, ox = 70, oy = 240;
  const unit = kind === "45" ? 170 : 110, base = kind === "45" ? unit : unit * Math.sqrt(3), ht = unit;
  const P = { A: [ox, oy], B: [ox + base, oy], C: [ox + base, oy - ht] };
  const opp = kind === "45" ? "1" : angle === 30 ? "1" : "√3", adj = kind === "45" ? "1" : angle === 30 ? "√3" : "1", hyp = kind === "45" ? "√2" : "2";
  const ex: Record<number, [string, string, string]> = { 30: ["\\frac12", "\\frac{\\sqrt3}2", "\\frac1{\\sqrt3}"], 45: ["\\frac1{\\sqrt2}", "\\frac1{\\sqrt2}", "1"], 60: ["\\frac{\\sqrt3}2", "\\frac12", "\\sqrt3"] };
  const v = ex[angle];
  return (
    <WidgetCard title={t("Special triangles", "Triangles remarquables")} subtitle={t("exact values come from two triangles you can draw yourself", "les valeurs exactes proviennent de deux triangles que tu peux tracer toi-même")}>
      <Row>
        <Segmented value={kind} onChange={(k) => { setKind(k); setAng(k === "45" ? 45 : 30); }} options={[{ value: "30", label: "30°–60°–90°" }, { value: "45", label: "45°–45°–90°" }]} />
        {kind === "30" && <Segmented value={ang} onChange={setAng} options={[{ value: 30, label: t("angle 30°", "angle de 30°") }, { value: 60, label: t("angle 60°", "angle de 60°") }]} />}
      </Row>
      <svg viewBox={`0 0 ${W} ${H}`} style={svgBox} role="img" aria-label="Special triangle">
        <polygon points={`${P.A} ${P.B} ${P.C}`} fill={C.blueSoft} stroke={C.blue} strokeWidth={3} />
        <rect x={P.B[0] - 16} y={P.B[1] - 16} width={16} height={16} fill="none" stroke={C.ink} />
        {lbl((P.A[0] + P.B[0]) / 2, oy + 24, kind === "45" ? "1" : "√3", C.ink)}
        {lbl(P.B[0] + 20, (P.B[1] + P.C[1]) / 2, "1", C.ink, 15, "start")}
        {lbl((P.A[0] + P.C[0]) / 2 - 14, (P.A[1] + P.C[1]) / 2 - 8, kind === "45" ? "√2" : "2", C.ink)}
        {lbl(P.A[0] + 44, oy - 10, kind === "45" ? "45°" : "30°", angle === (kind === "45" ? 45 : 30) ? C.red : C.muted)}
        {lbl(P.C[0] - 18, P.C[1] + 40, kind === "45" ? "45°" : "60°", kind === "30" && angle === 60 ? C.red : C.muted)}
      </svg>
      <Readout tone="green">
        <MathText html={t(`For \\(${angle}^\\circ\\): opposite \\(${opp}\\), adjacent \\(${adj}\\), hypotenuse \\(${hyp}\\). So \\(\\sin${angle}^\\circ=${v[0]}\\), \\(\\cos${angle}^\\circ=${v[1]}\\), \\(\\tan${angle}^\\circ=${v[2]}\\). ${kind === "30" ? "The 30°–60°–90° triangle is half of an equilateral triangle with side 2." : "The 45°–45°–90° triangle is half of a unit square, cut along a diagonal."}`,
          `Pour \\(${angle}^\\circ\\) : côté opposé \\(${opp}\\), côté adjacent \\(${adj}\\), hypoténuse \\(${hyp}\\). Donc \\(\\sin${angle}^\\circ=${v[0]}\\), \\(\\cos${angle}^\\circ=${v[1]}\\), \\(\\tan${angle}^\\circ=${v[2]}\\). ${kind === "30" ? "Le triangle 30°–60°–90° est la moitié d'un triangle équilatéral de côté 2." : "Le triangle 45°–45°–90° est la moitié d'un carré unitaire, coupé le long d'une diagonale."}`)} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.2 terminal arm */

export function TerminalArm({ init = 150 }: { init?: number }) {
  const tr = useT();
  const [t, setT] = useState(init);
  const [r, setR] = useState(5);
  const x = r * Math.cos(rad(t)), y = r * Math.sin(rad(t));
  const q = t === 0 || t === 90 || t === 180 || t === 270 || t === 360 ? 0 : t < 90 ? 1 : t < 180 ? 2 : t < 270 ? 3 : 4;
  const rel = q === 1 ? t : q === 2 ? 180 - t : q === 3 ? t - 180 : q === 4 ? 360 - t : NaN;
  const W = 420, c = W / 2, s = 30;
  const X = (v: number) => c + v * s, Y = (v: number) => c - v * s;
  const pos = q === 1 ? tr("all", "toutes") : q === 2 ? tr("sine", "sinus") : q === 3 ? tr("tangent", "tangente") : q === 4 ? tr("cosine", "cosinus") : "";
  const sameSin = t <= 180 ? 180 - t : 540 - t, sameCos = 360 - t;
  const fix = (a: number) => ((a % 360) + 360) % 360;
  return (
    <WidgetCard title={tr("Angles from 0° to 360°", "Angles de 0° à 360°")} subtitle={tr("the terminal arm, the related acute angle, and the CAST rule", "le côté terminal, l'angle de référence et la règle CAST")}>
      <Row>
        <Slider label={tr("angle θ", "angle θ")} value={t} min={0} max={360} step={5} onChange={setT} format={(v) => `${v}°`} color={C.red} />
        <Slider label={tr("radius r", "rayon r")} value={r} min={2} max={6} onChange={setR} color={C.blue} />
      </Row>
      <svg viewBox={`0 0 ${W} ${W}`} style={{ ...svgBox, maxWidth: 420 }} role="img" aria-label="Terminal arm">
        {[["S", -1, 1], ["A", 1, 1], ["T", -1, -1], ["C", 1, -1]].map(([L, sx, sy]) => <text key={L as string} x={X(5.6 * (sx as number))} y={Y(5.6 * (sy as number)) + 6} fontSize={22} fontWeight={800} fill={(L === "A" && q === 1) || (L === "S" && q === 2) || (L === "T" && q === 3) || (L === "C" && q === 4) ? C.green : "#cbd5e1"} textAnchor="middle">{L}</text>)}
        <line x1={0} y1={c} x2={W} y2={c} stroke={C.ink} /><line x1={c} y1={0} x2={c} y2={W} stroke={C.ink} />
        <circle cx={c} cy={c} r={r * s} fill="none" stroke={C.line} strokeWidth={2} />
        <path d={`M ${X(1.2)} ${c} A ${1.2 * s} ${1.2 * s} 0 ${t > 180 ? 1 : 0} 0 ${X(1.2 * Math.cos(rad(t)))} ${Y(1.2 * Math.sin(rad(t)))}`} fill="none" stroke={C.red} strokeWidth={2.5} />
        <line x1={c} y1={c} x2={X(x)} y2={Y(y)} stroke={C.violet} strokeWidth={3.5} />
        <line x1={X(x)} y1={Y(y)} x2={X(x)} y2={c} stroke={C.amber} strokeWidth={2} strokeDasharray="6 4" />
        <circle cx={X(x)} cy={Y(y)} r={6} fill={C.violet} />
        {lbl(X(x) + (x >= 0 ? 10 : -10), Y(y) - 10, `(${n(x, 2)}, ${n(y, 2)})`, C.violet, 13, x >= 0 ? "start" : "end")}
      </svg>
      <Readout tone="blue">
        <MathText html={tr(`\\(\\theta=${t}^\\circ\\), point \\((x,y)=(${n(x, 2)},\\ ${n(y, 2)})\\), \\(r=${r}\\): \\(\\sin\\theta=\\frac yr=${n(y / r)}\\), \\(\\cos\\theta=\\frac xr=${n(x / r)}\\), \\(\\tan\\theta=\\frac yx=${Math.abs(x) < 1e-9 ? "\\text{undefined}" : n(y / x)}\\).${q ? ` Quadrant ${q}: related acute angle \\(${rel}^\\circ\\); positive ratio(s): <strong>${pos}</strong>.` : " The terminal arm lies on an axis."} The other angle in \\([0^\\circ,360^\\circ]\\) with the same sine is \\(${fix(sameSin)}^\\circ\\); with the same cosine, \\(${fix(sameCos)}^\\circ\\).`,
          `\\(\\theta=${t}^\\circ\\), point \\((x,y)=(${n(x, 2)},\\ ${n(y, 2)})\\), \\(r=${r}\\) : \\(\\sin\\theta=\\frac yr=${n(y / r)}\\), \\(\\cos\\theta=\\frac xr=${n(x / r)}\\), \\(\\tan\\theta=\\frac yx=${Math.abs(x) < 1e-9 ? "\\text{non définie}" : n(y / x)}\\).${q ? ` Quadrant ${q} : angle de référence \\(${rel}^\\circ\\); rapport(s) positif(s) : <strong>${pos}</strong>.` : " Le côté terminal est sur un axe."} L'autre angle dans \\([0^\\circ,360^\\circ]\\) qui a le même sinus est \\(${fix(sameSin)}^\\circ\\); celui qui a le même cosinus, \\(${fix(sameCos)}^\\circ\\).`)} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.3 identities */

const IDS: { key: string; tex: string; L: (t: number) => number; R: (t: number) => number; lt: string; rt: string }[] = [
  { key: "py", tex: "\\sin^2\\theta+\\cos^2\\theta=1", L: (t) => Math.sin(t) ** 2 + Math.cos(t) ** 2, R: () => 1, lt: "sin²θ + cos²θ", rt: "1" },
  { key: "q", tex: "\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}", L: (t) => Math.tan(t), R: (t) => Math.sin(t) / Math.cos(t), lt: "tan θ", rt: "sin θ / cos θ" },
  { key: "a", tex: "\\tan\\theta\\cos\\theta=\\sin\\theta", L: (t) => Math.tan(t) * Math.cos(t), R: (t) => Math.sin(t), lt: "tan θ cos θ", rt: "sin θ" },
  { key: "b", tex: "1-\\cos^2\\theta=\\sin\\theta\\cos\\theta\\tan\\theta", L: (t) => 1 - Math.cos(t) ** 2, R: (t) => Math.sin(t) * Math.cos(t) * Math.tan(t), lt: "1 − cos²θ", rt: "sin θ cos θ tan θ" },
  { key: "c", tex: "\\sec^2\\theta=1+\\tan^2\\theta", L: (t) => 1 / Math.cos(t) ** 2, R: (t) => 1 + Math.tan(t) ** 2, lt: "sec²θ", rt: "1 + tan²θ" },
  { key: "x", tex: "\\sin\\theta+\\cos\\theta=1\\ \\ (\\text{false!})", L: (t) => Math.sin(t) + Math.cos(t), R: () => 1, lt: "sin θ + cos θ", rt: "1" },
];
export function IdentityCheck({ start = "py" }: { start?: string }) {
  const tr = useT();
  const [k, setK] = useState(start), [t, setT] = useState(40);
  const I = IDS.find((i) => i.key === k) ?? IDS[0];
  const L = I.L(rad(t)), R = I.R(rad(t)), ok = Math.abs(L - R) < 1e-9 && Number.isFinite(L);
  const s = Math.sin(rad(t)), c = Math.cos(rad(t));
  return (
    <WidgetCard title={tr("Testing an identity", "Vérifier une identité")} subtitle={tr("an identity is true for every angle where both sides are defined", "une identité est vraie pour tout angle où les deux membres sont définis")}>
      <Row><Segmented value={k} onChange={setK} options={IDS.map((i) => ({ value: i.key, label: i.key === "x" ? tr("a non-identity", "une non-identité") : i.lt }))} /></Row>
      <Row><Slider label="θ" value={t} min={0} max={360} onChange={setT} format={(v) => `${v}°`} color={C.red} /></Row>
      <table style={{ borderCollapse: "collapse", margin: "6px auto", fontSize: 15 }}>
        <tbody>
          <tr><th style={cell}>sin θ</th><td style={cell}>{n(s, 4)}</td><th style={cell}>cos θ</th><td style={cell}>{n(c, 4)}</td><th style={cell}>tan θ</th><td style={cell}>{Math.abs(c) < 1e-9 ? tr("undefined", "non définie") : n(s / c, 4)}</td></tr>
          <tr><th style={cell}>csc θ</th><td style={cell}>{Math.abs(s) < 1e-9 ? tr("undefined", "non définie") : n(1 / s, 4)}</td><th style={cell}>sec θ</th><td style={cell}>{Math.abs(c) < 1e-9 ? tr("undefined", "non définie") : n(1 / c, 4)}</td><th style={cell}>cot θ</th><td style={cell}>{Math.abs(s) < 1e-9 ? tr("undefined", "non définie") : n(c / s, 4)}</td></tr>
          <tr><th style={{ ...cell, color: C.blue }}>{tr("LS: ", "MG : ")}{I.lt}</th><td style={{ ...cell, fontWeight: 700 }} colSpan={2}>{Number.isFinite(L) && Math.abs(L) < 1e6 ? n(L, 6) : tr("undefined", "non défini")}</td><th style={{ ...cell, color: C.green }}>{tr("RS: ", "MD : ")}{I.rt}</th><td style={{ ...cell, fontWeight: 700 }} colSpan={2}>{Number.isFinite(R) && Math.abs(R) < 1e6 ? n(R, 6) : tr("undefined", "non défini")}</td></tr>
        </tbody>
      </table>
      <Readout tone={ok ? "green" : "amber"}>
        <MathText html={tr(`\\(${I.tex}\\) at \\(\\theta=${t}^\\circ\\): ${ok ? "both sides agree." : Number.isFinite(L) && Math.abs(L) < 1e6 ? "the sides DISAGREE — one counter-example is enough to show this is not an identity." : "a side is undefined here (cos θ = 0 or sin θ = 0); identities only need to hold where both sides are defined."} Checking angles is evidence, not proof — a proof transforms one side into the other.`,
          `\\(${I.tex.replace("\\text{false!}", "\\text{faux!}")}\\) à \\(\\theta=${t}^\\circ\\) : ${ok ? "les deux membres sont égaux." : Number.isFinite(L) && Math.abs(L) < 1e6 ? "les membres NE SONT PAS ÉGAUX — un seul contre-exemple suffit pour montrer que ce n'est pas une identité." : "un membre n'est pas défini ici (cos θ = 0 ou sin θ = 0); une identité doit être vraie seulement là où les deux membres sont définis."} Vérifier des angles fournit un indice, pas une preuve — une preuve transforme un membre pour obtenir l'autre.`)} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.4 ambiguous case */

export function AmbiguousCase({ init = [35, 10, 7] }: { init?: [number, number, number] }) {
  const [A, setA] = useState(init[0]), [b, setB] = useState(init[1]), [a, setAa] = useState(init[2]);
  const t = useT();
  const h = b * Math.sin(rad(A));
  // solutions for angle B
  const sB = (b * Math.sin(rad(A))) / a;
  const sols: { B: number; C: number; c: number }[] = [];
  if (sB <= 1 + 1e-12) {
    const B1 = deg(Math.asin(Math.min(1, sB)));
    for (const Bv of Math.abs(sB - 1) < 1e-9 ? [90] : [B1, 180 - B1]) { const Cv = 180 - A - Bv; if (Cv > 1e-6) sols.push({ B: Bv, C: Cv, c: (a * Math.sin(rad(Cv))) / Math.sin(rad(A)) }); }
  }
  const W = 520, H = 300, ox = 40, oy = 260, sc = 22;
  const Cx = ox + b * Math.cos(rad(A)) * sc, Cy = oy - b * Math.sin(rad(A)) * sc;
  const tone = sols.length === 2 ? "amber" : sols.length === 1 ? "green" : "red";
  return (
    <WidgetCard title={t("The ambiguous case (SSA)", "Le cas ambigu (CCA)")} subtitle={t("given ∠A, side b and the side a opposite ∠A: zero, one or two triangles", "étant donné ∠A, le côté b et le côté a opposé à ∠A : zéro, un ou deux triangles")}>
      <Row>
        <Slider label="∠A" value={A} min={10} max={150} onChange={setA} format={(v) => `${v}°`} color={C.red} />
        <Slider label="b" value={b} min={4} max={14} onChange={setB} color={C.blue} />
        <Slider label="a" value={a} min={1} max={18} step={0.5} onChange={setAa} format={(v) => n(v, 1)} color={C.violet} />
      </Row>
      <svg viewBox={`0 0 ${W} ${H}`} style={svgBox} role="img" aria-label="Ambiguous case">
        <line x1={ox - 20} y1={oy} x2={W - 10} y2={oy} stroke={C.ink} strokeWidth={1.5} />
        <line x1={ox} y1={oy} x2={Cx} y2={Cy} stroke={C.blue} strokeWidth={3} />
        <circle cx={Cx} cy={Cy} r={a * sc} fill="none" stroke={C.violet} strokeDasharray="6 5" strokeWidth={1.8} />
        <line x1={Cx} y1={Cy} x2={Cx} y2={oy} stroke={C.faint} strokeDasharray="3 4" />
        {sols.map((s, i) => { const Bx = ox + s.c * sc; return <g key={i}><line x1={Cx} y1={Cy} x2={Bx} y2={oy} stroke={i === 0 ? C.violet : C.amber} strokeWidth={3} /><circle cx={Bx} cy={oy} r={6} fill={i === 0 ? C.violet : C.amber} />{lbl(Bx, oy + 22, `B${sols.length > 1 ? i + 1 : ""}`, i === 0 ? C.violet : C.amber, 14)}</g>; })}
        {lbl(ox - 10, oy + 22, "A", C.red, 15)}{lbl(Cx, Cy - 12, "C", C.blue, 15)}
        {lbl((ox + Cx) / 2 - 12, (oy + Cy) / 2 - 6, `b = ${b}`, C.blue, 13, "end")}
        {lbl(Cx + 6, (Cy + oy) / 2, `h = ${n(h, 2)}`, C.muted, 12, "start")}
      </svg>
      <Readout tone={tone}>
        <MathText html={t(`Height \\(h=b\\sin A=${n(h, 2)}\\). ${A >= 90 ? `∠A is not acute: one triangle if \\(a>b\\), none otherwise.` : `For acute ∠A: \\(a<h\\) → none; \\(a=h\\) → one right triangle; \\(h<a<b\\) → two; \\(a\\ge b\\) → one.`} Here \\(a=${n(a, 1)}\\): <strong>${sols.length} triangle${sols.length === 1 ? "" : "s"}</strong>.${sols.map((s, i) => ` Triangle ${i + 1}: ∠B ≈ ${n(s.B, 1)}°, ∠C ≈ ${n(s.C, 1)}°, c ≈ ${n(s.c, 2)}.`).join("")}`,
          `Hauteur \\(h=b\\sin A=${n(h, 2)}\\). ${A >= 90 ? `∠A n'est pas aigu : un triangle si \\(a>b\\), aucun sinon.` : `Pour ∠A aigu : \\(a<h\\) → aucun; \\(a=h\\) → un triangle rectangle; \\(h<a<b\\) → deux; \\(a\\ge b\\) → un.`} Ici \\(a=${n(a, 1)}\\) : <strong>${sols.length} triangle${sols.length > 1 ? "s" : ""}</strong>.${sols.map((s, i) => ` Triangle ${i + 1} : ∠B ≈ ${n(s.B, 1)}°, ∠C ≈ ${n(s.C, 1)}°, c ≈ ${n(s.c, 2)}.`).join("")}`)} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.5 cosine law */

export function CosineLaw({ init = [7, 9, 60] }: { init?: [number, number, number] }) {
  const [b, setB] = useState(init[0]), [c, setC] = useState(init[1]), [A, setA] = useState(init[2]);
  const t = useT();
  const a = Math.sqrt(b * b + c * c - 2 * b * c * Math.cos(rad(A)));
  const B = deg(Math.acos((a * a + c * c - b * b) / (2 * a * c))), Cc = 180 - A - B;
  const W = 520, H = 300, sc = 300 / Math.max(b, c, a) / 1.15, ox = 60 + Math.max(0, -b * Math.cos(rad(A)) * sc), oy = 260;
  const Bp = [ox + c * sc, oy], Cp = [ox + b * Math.cos(rad(A)) * sc, oy - b * Math.sin(rad(A)) * sc];
  return (
    <WidgetCard title={t("The cosine law", "La loi des cosinus")} subtitle={t("a² = b² + c² − 2bc cos A — Pythagoras with a correction term", "a² = b² + c² − 2bc cos A — Pythagore avec un terme de correction")}>
      <Row>
        <Slider label="b" value={b} min={2} max={14} onChange={setB} color={C.blue} />
        <Slider label="c" value={c} min={2} max={14} onChange={setC} color={C.green} />
        <Slider label="∠A" value={A} min={10} max={170} onChange={setA} format={(v) => `${v}°`} color={C.red} />
      </Row>
      <svg viewBox={`0 0 ${W} ${H}`} style={svgBox} role="img" aria-label="Cosine law triangle">
        <polygon points={`${ox},${oy} ${Bp} ${Cp}`} fill={C.blueSoft} stroke={C.ink} strokeWidth={2} />
        <line x1={Bp[0]} y1={Bp[1]} x2={Cp[0]} y2={Cp[1]} stroke={C.violet} strokeWidth={4} />
        {lbl(ox - 12, oy + 20, "A", C.red)}{lbl(Bp[0] + 12, Bp[1] + 20, "B")}{lbl(Cp[0], Cp[1] - 12, "C")}
        {lbl((ox + Bp[0]) / 2, oy + 22, `c = ${c}`, C.green, 14)}
        {lbl((ox + Cp[0]) / 2 - 10, (oy + Cp[1]) / 2, `b = ${b}`, C.blue, 14, "end")}
        {lbl((Bp[0] + Cp[0]) / 2 + 10, (Bp[1] + Cp[1]) / 2, `a ≈ ${n(a, 2)}`, C.violet, 14, "start")}
      </svg>
      <Readout tone="green">
        <MathText html={t(`\\(a^2=${b}^2+${c}^2-2(${b})(${c})\\cos${A}^\\circ=${n(b * b + c * c, 2)}-${n(2 * b * c * Math.cos(rad(A)), 2)}\\Rightarrow a\\approx${n(a, 2)}\\). ${A === 90 ? "At 90°, cos A = 0 and this is exactly the Pythagorean theorem." : A > 90 ? "∠A is obtuse, so cos A < 0 and the correction term ADDS: a is longer than the hypotenuse of a right triangle with legs b and c." : "∠A is acute, so cos A > 0 and a is shorter than √(b² + c²)."} Remaining angles: ∠B ≈ ${n(B, 1)}°, ∠C ≈ ${n(Cc, 1)}°.`,
          `\\(a^2=${b}^2+${c}^2-2(${b})(${c})\\cos${A}^\\circ=${n(b * b + c * c, 2)}-${n(2 * b * c * Math.cos(rad(A)), 2)}\\Rightarrow a\\approx${n(a, 2)}\\). ${A === 90 ? "À 90°, cos A = 0 et c'est exactement le théorème de Pythagore." : A > 90 ? "∠A est obtus, donc cos A < 0 et le terme de correction S'AJOUTE : a est plus long que l'hypoténuse d'un triangle rectangle de cathètes b et c." : "∠A est aigu, donc cos A > 0 et a est plus court que √(b² + c²)."} Angles restants : ∠B ≈ ${n(B, 1)}°, ∠C ≈ ${n(Cc, 1)}°.`)} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.6 three dimensions */

export function TowerLab({ init = [120, 50, 70, 28] }: { init?: [number, number, number, number] }) {
  const [d, setD] = useState(init[0]), [al, setAl] = useState(init[1]), [be, setBe] = useState(init[2]), [th, setTh] = useState(init[3]);
  const t = useT();
  const Cang = 180 - al - be;
  const AC = (d * Math.sin(rad(be))) / Math.sin(rad(Cang)); // sine law in the ground triangle
  const h = AC * Math.tan(rad(th));
  // oblique projection: ground plane (x right, y into page drawn up-right), height up
  const W = 520, H = 330, s = 300 / Math.max(d, AC + 1) * 0.9, ox = 50, oy = 290, k = 0.5;
  const pr = (x: number, y: number, z: number) => [ox + (x + k * y) * s, oy - (k * y + z) * s * 1] as const;
  const Ag = [0, 0], Bg = [d, 0], Cg = [AC * Math.cos(rad(al)), AC * Math.sin(rad(al))];
  const A2 = pr(Ag[0], Ag[1], 0), B2 = pr(Bg[0], Bg[1], 0), C2 = pr(Cg[0], Cg[1], 0), T2 = pr(Cg[0], Cg[1], Math.min(h, 400 / s));
  return (
    <WidgetCard title={t("A height across a river", "Une hauteur de l'autre côté d'une rivière")} subtitle={t("two angles on the ground (sine law), then an angle of elevation (tangent)", "deux angles au sol (loi des sinus), puis un angle d'élévation (tangente)")}>
      <Row>
        <Slider label="AB (m)" value={d} min={40} max={200} step={10} onChange={setD} color={C.blue} />
        <Slider label="∠CAB" value={al} min={20} max={80} onChange={setAl} format={(v) => `${v}°`} color={C.red} />
      </Row>
      <Row>
        <Slider label="∠CBA" value={be} min={20} max={80} onChange={setBe} format={(v) => `${v}°`} color={C.green} />
        <Slider label={t("elevation", "élévation")} value={th} min={5} max={60} onChange={setTh} format={(v) => `${v}°`} color={C.violet} />
      </Row>
      <svg viewBox={`0 0 ${W} ${H}`} style={svgBox} role="img" aria-label="Three-dimensional tower problem">
        <polygon points={`${A2} ${B2} ${C2}`} fill={C.greenSoft} stroke={C.green} strokeWidth={2} />
        <line x1={C2[0]} y1={C2[1]} x2={T2[0]} y2={T2[1]} stroke={C.ink} strokeWidth={5} />
        <line x1={A2[0]} y1={A2[1]} x2={T2[0]} y2={T2[1]} stroke={C.violet} strokeWidth={2} strokeDasharray="7 5" />
        {lbl(A2[0] - 10, A2[1] + 18, "A", C.red)}{lbl(B2[0] + 10, B2[1] + 18, "B", C.green)}{lbl(C2[0] + 14, C2[1] + 6, "C", C.ink, 15, "start")}{lbl(T2[0], T2[1] - 10, "T", C.ink)}
        {lbl((A2[0] + B2[0]) / 2, A2[1] + 20, `${d} m`, C.blue, 13)}
      </svg>
      <Readout tone={Cang > 0 ? "green" : "red"}>
        <MathText html={Cang <= 0 ? t("The two ground angles must add to less than 180°.", "La somme des deux angles au sol doit être inférieure à 180°.") : t(`Ground triangle: \\(\\angle C=180^\\circ-${al}^\\circ-${be}^\\circ=${Cang}^\\circ\\). Sine law: \\(AC=\\frac{${d}\\sin${be}^\\circ}{\\sin${Cang}^\\circ}\\approx${n(AC, 1)}\\) m. Vertical triangle ACT: \\(h=AC\\tan${th}^\\circ\\approx${n(h, 1)}\\) m. Two planes, two triangles: one horizontal (sine law), one vertical (right triangle).`,
          `Triangle au sol : \\(\\angle C=180^\\circ-${al}^\\circ-${be}^\\circ=${Cang}^\\circ\\). Loi des sinus : \\(AC=\\frac{${d}\\sin${be}^\\circ}{\\sin${Cang}^\\circ}\\approx${n(AC, 1)}\\) m. Triangle vertical ACT : \\(h=AC\\tan${th}^\\circ\\approx${n(h, 1)}\\) m. Deux plans, deux triangles : un horizontal (loi des sinus), un vertical (triangle rectangle).`)} />
      </Readout>
    </WidgetCard>
  );
}
