"use client";

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard, fmtInt } from "./kit";
import { useT } from "@/lib/lang";

type Base = { label: string; tex: string; num: number; den: number }; // base = num/den
const BASES: Base[] = [
  { label: "2", tex: "2", num: 2, den: 1 },
  { label: "3", tex: "3", num: 3, den: 1 },
  { label: "10", tex: "10", num: 10, den: 1 },
  { label: "−2", tex: "(-2)", num: -2, den: 1 },
  { label: "1/2", tex: "\\left(\\tfrac{1}{2}\\right)", num: 1, den: 2 },
];

/** LaTeX value of (num/den)^n as an exact fraction. */
function powTex(b: Base, n: number) {
  const top = n >= 0 ? b.num ** n : b.den ** -n;
  const bot = n >= 0 ? b.den ** n : b.num ** -n;
  const sign = (top < 0) !== (bot < 0) ? "-" : "";
  const t = Math.abs(top), d = Math.abs(bot);
  return d === 1 ? `${sign}${t}` : `${sign}\\tfrac{${t}}{${d}}`;
}
const powVal = (b: Base, n: number) => (b.num / b.den) ** n;

export function PowerPattern() {
  const [bi, setBi] = useState(0);
  const [n, setN] = useState(-2);
  const t = useT();
  const b = BASES[bi];
  const rows = [4, 3, 2, 1, 0, -1, -2, -3];

  // graph: points (k, b^k) for k = -3..4, y clipped
  const ks = [-3, -2, -1, 0, 1, 2, 3, 4];
  const ys = ks.map((k) => powVal(b, k));
  // fit the vertical scale to the values (clip very large ones); the x-axis sits at y = 0
  const yHi = Math.min(Math.max(...ys, 0.5), 20) * 1.08, yLo = Math.max(Math.min(...ys, 0), -20) * 1.08;
  const W = 300, H = 230, X = (k: number) => 30 + ((k + 3) / 7) * (W - 50);
  const Y = (y: number) => H - 22 - ((Math.max(yLo, Math.min(yHi, y)) - yLo) / (yHi - yLo)) * (H - 40);

  const expl = n > 0
    ? t(`\\(${b.tex}^{${n}}\\) means ${n} factors of \\(${b.tex}\\) multiplied together.`, `\\(${b.tex}^{${n}}\\) signifie ${n} facteurs de \\(${b.tex}\\) multipliés ensemble.`)
    : n === 0
      ? t(`Any non-zero base to the exponent \\(0\\) is \\(1\\): it is the step between \\(${b.tex}^{1}\\) and \\(${b.tex}^{-1}\\) in the pattern, where you divide \\(${b.tex}^{1}\\) by \\(${b.tex}\\).`, `Toute base non nulle à l'exposant \\(0\\) vaut \\(1\\) : c'est l'étape entre \\(${b.tex}^{1}\\) et \\(${b.tex}^{-1}\\) dans la régularité, où tu divises \\(${b.tex}^{1}\\) par \\(${b.tex}\\).`)
      : t(`A negative exponent means <strong>reciprocal</strong>, not a negative number: \\(${b.tex}^{${n}}=\\dfrac{1}{${b.tex}^{${-n}}}=${powTex(b, n)}\\).`, `Un exposant négatif signifie <strong>inverse</strong>, pas un nombre négatif : \\(${b.tex}^{${n}}=\\dfrac{1}{${b.tex}^{${-n}}}=${powTex(b, n)}\\).`);

  return (
    <WidgetCard title={t("Powers pattern", "Régularité des puissances")} subtitle={t("Each row down divides by the base — follow it past zero", "Chaque rangée vers le bas divise par la base — poursuis au-delà de zéro")}>
      <Row>
        <Segmented label={t("Base", "Base")} options={BASES.map((x, i) => ({ value: i, label: x.label }))} value={bi} onChange={setBi} />
        <Slider label={t("exponent", "exposant")} value={n} min={-3} max={4} onChange={setN} color={C.violet} />
      </Row>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 18, marginTop: 14, alignItems: "flex-start" }}>
        <table style={{ borderCollapse: "collapse", fontSize: 15, flex: "0 0 auto" }}>
          <tbody>
            {rows.map((k, i) => (
              <tr key={k} style={{ background: k === n ? C.violetSoft : k < 0 ? "#fff7ed" : k === 0 ? "#f0fdf4" : "#fff" }}>
                <td style={{ padding: "4px 12px", border: `1px solid ${C.line}` }}><MathText html={`\\(${b.tex}^{${k}}\\)`} /></td>
                <td style={{ padding: "4px 12px", border: `1px solid ${C.line}`, fontWeight: 800, textAlign: "right", minWidth: 70 }}><MathText html={`\\(${powTex(b, k)}\\)`} /></td>
                <td style={{ padding: "4px 10px", border: `1px solid ${C.line}`, color: C.muted, fontSize: 12.5 }}>{i === 0 ? "" : <MathText html={`\\(\\div ${b.tex}\\)`} />}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <svg viewBox={`0 0 ${W} ${H}`} style={{ flex: "1 1 260px", maxWidth: 380 }} role="img" aria-label={t(`Graph of ${b.label} to the power k`, `Graphique de ${b.label} à la puissance k`)}>
          <line x1={20} y1={Y(0)} x2={W - 10} y2={Y(0)} stroke="#94a3b8" />
          <line x1={X(0)} y1={8} x2={X(0)} y2={H - 8} stroke="#94a3b8" />
          {ks.map((k) => <text key={k} x={X(k)} y={Y(0) + 15} fontSize={11} textAnchor="middle" fill={C.muted}>{fmtInt(k)}</text>)}
          <polyline points={ks.map((k, i) => `${X(k)},${Y(ys[i])}`).join(" ")} fill="none" stroke="#c4b5fd" strokeWidth={1.5} strokeDasharray="4 3" />
          {ks.map((k, i) => <circle key={k} cx={X(k)} cy={Y(ys[i])} r={k === n ? 7 : 4} fill={k === n ? C.violet : "#a78bfa"} stroke="#fff" strokeWidth={1.5} />)}
          <text x={W - 12} y={Y(0) - 6} fontSize={11} textAnchor="end" fill={C.muted}>{t("exponent", "exposant")}</text>
        </svg>
      </div>
      <Readout tone="blue">
        <div style={{ fontSize: 19, fontWeight: 800 }}><MathText html={`\\(${b.tex}^{${n}}=${powTex(b, n)}\\)`} /></div>
        <MathText html={expl} />
        {b.num < 0 && <div style={{ marginTop: 4 }}><MathText html={t(`With a negative base, the sign alternates: even exponents give positive values, odd exponents give negative values. Note \\(-2^{${Math.abs(n) || 2}}\\neq(-2)^{${Math.abs(n) || 2}}\\) — the brackets decide what is being powered.`, `Avec une base négative, le signe alterne : les exposants pairs donnent des valeurs positives, les exposants impairs donnent des valeurs négatives. Remarque que \\(-2^{${Math.abs(n) || 2}}\\neq(-2)^{${Math.abs(n) || 2}}\\) — les parenthèses déterminent ce qui est élevé à la puissance.`)} /></div>}
      </Readout>
    </WidgetCard>
  );
}

export function ExponentLaws() {
  const [law, setLaw] = useState<"product" | "quotient" | "power">("product");
  const [m, setM] = useState(4);
  const [k, setK] = useState(2);
  const t = useT();
  const tile = (key: string, color: string, soft: string, crossed = false) => (
    <span key={key} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 38, height: 38, borderRadius: 8, border: `1.8px solid ${color}`, background: crossed ? "#fff" : soft, color, fontWeight: 800, fontStyle: "italic", fontSize: 19, fontFamily: "Georgia, serif", position: "relative", opacity: crossed ? 0.6 : 1, backgroundImage: crossed ? "linear-gradient(135deg, transparent 45%, #be123c 46%, #be123c 54%, transparent 55%)" : undefined }}>x</span>
  );
  const group = (n: number, color: string, soft: string, crossFrom = n, keyp = "") => (
    <span style={{ display: "inline-flex", gap: 4, padding: "4px 6px", border: `1px dashed ${color}`, borderRadius: 9 }}>
      {Array.from({ length: n }, (_, i) => tile(keyp + i, color, soft, i >= crossFrom))}
    </span>
  );
  const kk = law === "quotient" ? Math.min(k, m) : k;

  return (
    <WidgetCard title={t("Exponent laws from the factors", "Les lois des exposants à partir des facteurs")} subtitle={t("Expand the powers and count the x's — the laws are just counting", "Développe les puissances et compte les x — les lois, c'est simplement compter")}>
      <Row>
        <Segmented options={[{ value: "product", label: t("Product", "Produit") }, { value: "quotient", label: t("Quotient", "Quotient") }, { value: "power", label: t("Power of a power", "Puissance d'une puissance") }]} value={law} onChange={setLaw} />
        <Slider label="m" value={m} min={1} max={6} onChange={setM} color={C.blue} />
        <Slider label="n" value={k} min={1} max={law === "power" ? 3 : 6} onChange={setK} color={C.amber} />
      </Row>
      <div style={{ margin: "16px 0", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10, fontSize: 18 }}>
        {law === "product" && (<>{group(m, C.blue, C.blueSoft, m, "a")}<span>×</span>{group(k, C.amber, C.amberSoft, k, "b")}</>)}
        {law === "quotient" && (
          <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <span style={{ display: "inline-flex", gap: 4 }}>{Array.from({ length: m }, (_, i) => tile("t" + i, C.blue, C.blueSoft, i < kk))}</span>
            <span style={{ width: "100%", borderTop: "2px solid #334155" }} />
            <span style={{ display: "inline-flex", gap: 4 }}>{Array.from({ length: kk }, (_, i) => tile("d" + i, C.amber, C.amberSoft, true))}</span>
          </div>
        )}
        {law === "power" && (<>{Array.from({ length: k }, (_, j) => <span key={j}>{group(m, j % 2 ? C.violet : C.blue, j % 2 ? C.violetSoft : C.blueSoft, m, "g" + j)}</span>)}</>)}
      </div>
      <Readout tone="green">
        {law === "product" && <><div style={{ fontSize: 19, fontWeight: 800 }}><MathText html={`\\(x^{${m}}\\times x^{${k}}=x^{${m}+${k}}=x^{${m + k}}\\)`} /></div><MathText html={t(`${m} factors and ${k} more factors make ${m + k} factors. <strong>Same base, multiply → add the exponents.</strong>`, `${m} facteurs et ${k} facteurs de plus font ${m + k} facteurs. <strong>Même base, multiplication → additionne les exposants.</strong>`)} /></>}
        {law === "quotient" && <><div style={{ fontSize: 19, fontWeight: 800 }}><MathText html={`\\(\\dfrac{x^{${m}}}{x^{${kk}}}=x^{${m}-${kk}}=x^{${m - kk}}${m - kk === 0 ? "=1" : ""}\\)`} /></div><MathText html={t(`Each \\(x\\) on the bottom cancels one on top (\\(\\tfrac{x}{x}=1\\)); ${m - kk} ${m - kk === 1 ? "is" : "are"} left. <strong>Same base, divide → subtract the exponents.</strong>${m === kk ? " Everything cancels, which is why \\(x^0=1\\)." : ""}`, `Chaque \\(x\\) du bas annule un \\(x\\) du haut (\\(\\tfrac{x}{x}=1\\)); il en reste ${m - kk}. <strong>Même base, division → soustrais les exposants.</strong>${m === kk ? " Tout s'annule, c'est pourquoi \\(x^0=1\\)." : ""}`)} /></>}
        {law === "power" && <><div style={{ fontSize: 19, fontWeight: 800 }}><MathText html={`\\(\\left(x^{${m}}\\right)^{${k}}=x^{${m}\\times${k}}=x^{${m * k}}\\)`} /></div><MathText html={t(`${k} groups of ${m} factors make ${m * k} factors. <strong>Power of a power → multiply the exponents.</strong>`, `${k} groupes de ${m} facteurs font ${m * k} facteurs. <strong>Puissance d'une puissance → multiplie les exposants.</strong>`)} /></>}
      </Readout>
    </WidgetCard>
  );
}

const OBJECTS: { name: string; nameFr: string; m: number; e: number }[] = [
  { name: "hydrogen atom (m)", nameFr: "atome d'hydrogène", m: 1.06, e: -10 },
  { name: "red blood cell (m)", nameFr: "globule rouge", m: 8, e: -6 },
  { name: "grain of sand (m)", nameFr: "grain de sable", m: 5, e: -4 },
  { name: "Grade 9 student (m)", nameFr: "élève de 9e année", m: 1.65, e: 0 },
  { name: "CN Tower (m)", nameFr: "Tour CN", m: 5.53, e: 2 },
  { name: "Toronto to Ottawa (m)", nameFr: "Toronto à Ottawa", m: 3.5, e: 5 },
  { name: "Earth's diameter (m)", nameFr: "diamètre de la Terre", m: 1.27, e: 7 },
  { name: "Earth to Sun (m)", nameFr: "Terre au Soleil", m: 1.5, e: 11 },
];

export function SciNotation() {
  const [mant, setMant] = useState(3.5);
  const [e, setE] = useState(5);
  const t = useT();
  const v = mant * 10 ** e;
  // standard form with the decimal point moved |e| places
  const standard = (() => {
    const s = v.toLocaleString("en-CA", { maximumFractionDigits: 12, useGrouping: true }).replace(/,/g, " ");
    return s;
  })();
  const W = 640, X = (p: number) => 20 + ((p + 11) / 23) * (W - 40); // log10 from -11 to 12
  const lv = Math.log10(v);

  return (
    <WidgetCard title={t("Scientific notation and scale", "Notation scientifique et échelle")} subtitle={t("A number from 1 to 10, times a power of 10", "Un nombre de 1 à 10, multiplié par une puissance de 10")}>
      <Row>
        <Slider label={t("number a", "nombre a")} value={mant} min={1} max={9.9} step={0.1} onChange={setMant} color={C.blue} format={(x) => x.toFixed(1)} />
        <Slider label={t("power of 10", "puissance de 10")} value={e} min={-10} max={11} onChange={setE} color={C.violet} />
      </Row>
      <Readout tone="blue">
        <div style={{ fontSize: 20, fontWeight: 800 }}><MathText html={`\\(${mant.toFixed(1)}\\times10^{${e}}\\)`} /> = <span style={{ fontVariantNumeric: "tabular-nums" }}>{standard}</span></div>
        <MathText html={e >= 0 ? t(`Move the decimal point \\(${e}\\) place${e === 1 ? "" : "s"} <strong>right</strong> (a big number).`, `Déplace le séparateur décimal de \\(${e}\\) position${e === 1 ? "" : "s"} vers la <strong>droite</strong> (un grand nombre).`) : t(`Move the decimal point \\(${-e}\\) place${e === -1 ? "" : "s"} <strong>left</strong> (a number between 0 and 1). The negative exponent means "divide by \\(10^{${-e}}\\)", not "negative".`, `Déplace le séparateur décimal de \\(${-e}\\) position${e === -1 ? "" : "s"} vers la <strong>gauche</strong> (un nombre entre 0 et 1). L'exposant négatif signifie « divise par \\(10^{${-e}}\\) », et non « négatif ».`)} />
      </Readout>
      <svg viewBox={`0 0 ${W} 150`} style={{ width: "100%", display: "block", marginTop: 12 }} role="img" aria-label={t("Logarithmic scale of sizes", "Échelle logarithmique des tailles")}>
        <line x1={14} y1={95} x2={W - 14} y2={95} stroke="#334155" strokeWidth={2} />
        {Array.from({ length: 24 }, (_, i) => i - 11).map((p) => (
          <g key={p}><line x1={X(p)} y1={90} x2={X(p)} y2={100} stroke="#334155" strokeWidth={p === 0 ? 2.2 : 1} />{p % 3 === 0 && <text x={X(p)} y={118} fontSize={11.5} textAnchor="middle" fill={C.ink}>10<tspan dy={-5} fontSize={9}>{fmtInt(p)}</tspan></text>}</g>
        ))}
        {OBJECTS.map((o, i) => {
          const x = X(Math.log10(o.m) + o.e);
          return <g key={o.name}><line x1={x} y1={95} x2={x} y2={i % 2 ? 62 : 40} stroke="#94a3b8" /><circle cx={x} cy={95} r={3.5} fill="#64748b" /><text x={x} y={i % 2 ? 56 : 34} fontSize={10.5} textAnchor="middle" fill={C.muted}>{t(o.name.replace(" (m)", ""), o.nameFr)}</text></g>;
        })}
        <circle cx={X(lv)} cy={95} r={8} fill={C.violet} stroke="#fff" strokeWidth={2} style={{ transition: "cx 0.3s" }} />
        <text x={X(lv)} y={140} fontSize={12} fontWeight={800} textAnchor="middle" fill={C.violet}>{t("your number", "ton nombre")}</text>
      </svg>
      <p style={{ margin: "4px 0 0", fontSize: 13, color: C.muted }}>{t("Each tick is 10 times the one to its left. Lengths are in metres.", "Chaque graduation vaut 10 fois celle à sa gauche. Les longueurs sont en mètres.")}</p>
    </WidgetCard>
  );
}
