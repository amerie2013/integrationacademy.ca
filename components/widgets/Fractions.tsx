"use client";

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard, gcd, lcm, texFrac } from "./kit";
import { useT } from "@/lib/lang";

/** A fraction bar of `whole` width cut into d parts with n shaded (n may exceed d: extra bars). */
function Bar({ n, d, color, soft, label, unit = 520 }: { n: number; d: number; color: string; soft: string; label: string; unit?: number }) {
  const bars = Math.max(1, Math.ceil(Math.abs(n) / d));
  const cell = unit / d, H = 34;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "4px 0", flexWrap: "wrap" }}>
      <span style={{ minWidth: 92, fontWeight: 700, color, fontSize: 19 }}><MathText html={label} /></span>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", flex: 1 }}>
        {Array.from({ length: bars }, (_, k) => (
          <svg key={k} viewBox={`0 0 ${unit + 4} ${H + 4}`} style={{ width: bars > 1 ? "calc(50% - 4px)" : "100%", maxWidth: unit, minWidth: 180 }} aria-hidden>
            {Array.from({ length: d }, (_, i) => {
              const idx = k * d + i;
              return <rect key={i} x={2 + i * cell} y={2} width={cell} height={H} fill={idx < Math.abs(n) ? soft : "#fff"} stroke={color} strokeWidth={1.4} style={{ transition: "fill 0.3s" }} />;
            })}
          </svg>
        ))}
      </div>
    </div>
  );
}

export function FractionAddSub({ init = [2, 3, 1, 4] as [number, number, number, number] }: { init?: [number, number, number, number] }) {
  const [[a, b, c, d], set] = useState(init);
  const [op, setOp] = useState<"+" | "-" | "cmp">("+");
  const t = useT();
  const L = lcm(b, d), ka = L / b, kc = L / d;
  const A = a * ka, Cn = c * kc;
  const R = op === "+" ? A + Cn : A - Cn;
  const upd = (i: number, v: number) => set((s) => s.map((x, j) => (j === i ? v : x)) as [number, number, number, number]);
  const g = gcd(R, L);

  return (
    <WidgetCard title={t("Fraction bars", "Barres de fractions")} subtitle={t("Re-cut both bars into the same number of equal parts", "Redécoupe les deux barres en un même nombre de parts égales")}>
      <Row>
        <Slider label={t("1st top", "1er numérateur")} value={a} min={0} max={11} onChange={(v) => upd(0, v)} color={C.blue} />
        <Slider label={t("1st bottom", "1er dénominateur")} value={b} min={2} max={12} onChange={(v) => upd(1, v)} color={C.blue} />
        <Slider label={t("2nd top", "2e numérateur")} value={c} min={0} max={11} onChange={(v) => upd(2, v)} color={C.amber} />
        <Slider label={t("2nd bottom", "2e dénominateur")} value={d} min={2} max={12} onChange={(v) => upd(3, v)} color={C.amber} />
      </Row>
      <div style={{ margin: "12px 0" }}>
        <Segmented options={[{ value: "+", label: t("Add", "Additionner") }, { value: "-", label: t("Subtract", "Soustraire") }, { value: "cmp", label: t("Compare", "Comparer") }]} value={op} onChange={setOp} />
      </div>
      <p style={{ margin: "4px 0", fontSize: 13.5, color: C.muted }}>{t("Step 1 — the original bars (different-sized parts, so they cannot be combined yet):", "Étape 1 — les barres de départ (parts de tailles différentes, donc on ne peut pas encore les combiner) :")}</p>
      <Bar n={a} d={b} color={C.blue} soft={C.blueSoft} label={`\\(\\tfrac{${a}}{${b}}\\)`} />
      <Bar n={c} d={d} color={C.amber} soft={C.amberSoft} label={`\\(\\tfrac{${c}}{${d}}\\)`} />
      <p style={{ margin: "10px 0 4px", fontSize: 13.5, color: C.muted }}>
        {t("Step 2 — cut every bar into ", "Étape 2 — découpe chaque barre en ")}<strong>{L}</strong>{t(` parts (the lowest common denominator, LCD = LCM of ${b} and ${d}):`, ` parts (le plus petit dénominateur commun, PPDC = PPCM de ${b} et ${d}) :`)}
      </p>
      <Bar n={A} d={L} color={C.blue} soft={C.blueSoft} label={`\\(\\tfrac{${A}}{${L}}\\)`} />
      <Bar n={Cn} d={L} color={C.amber} soft={C.amberSoft} label={`\\(\\tfrac{${Cn}}{${L}}\\)`} />
      {op !== "cmp" && (
        <>
          <p style={{ margin: "10px 0 4px", fontSize: 13.5, color: C.muted }}>{t(`Step 3 — now the parts match, so ${op === "+" ? "add" : "subtract"} the numerators:`, `Étape 3 — les parts sont maintenant pareilles, alors ${op === "+" ? "additionne" : "soustrais"} les numérateurs :`)}</p>
          <Bar n={R} d={L} color={R < 0 ? C.red : C.green} soft={R < 0 ? C.redSoft : C.greenSoft} label={`\\(${texFrac(R, L)}\\)`} />
        </>
      )}
      <Readout tone={op === "cmp" ? "blue" : "green"}>
        {op === "cmp" ? (
          <MathText html={t(`\\(\\tfrac{${a}}{${b}}=\\tfrac{${A}}{${L}}\\) and \\(\\tfrac{${c}}{${d}}=\\tfrac{${Cn}}{${L}}\\). With equal denominators, compare numerators: \\(${A}${A > Cn ? ">" : A < Cn ? "<" : "="}${Cn}\\), so \\(\\tfrac{${a}}{${b}}${A > Cn ? ">" : A < Cn ? "<" : "="}\\tfrac{${c}}{${d}}\\).`, `\\(\\tfrac{${a}}{${b}}=\\tfrac{${A}}{${L}}\\) et \\(\\tfrac{${c}}{${d}}=\\tfrac{${Cn}}{${L}}\\). Avec des dénominateurs égaux, compare les numérateurs : \\(${A}${A > Cn ? ">" : A < Cn ? "<" : "="}${Cn}\\), donc \\(\\tfrac{${a}}{${b}}${A > Cn ? ">" : A < Cn ? "<" : "="}\\tfrac{${c}}{${d}}\\).`)} />
        ) : (
          <>
            <div style={{ fontSize: 19, fontWeight: 800 }}>
              <MathText html={`\\(\\tfrac{${a}}{${b}}${op}\\tfrac{${c}}{${d}}=\\tfrac{${A}}{${L}}${op}\\tfrac{${Cn}}{${L}}=\\tfrac{${R}}{${L}}${g > 1 && R !== 0 ? `=${texFrac(R, L)}` : ""}\\)`} />
            </div>
            <MathText html={t(`Multiply top and bottom of \\(\\tfrac{${a}}{${b}}\\) by \\(${ka}\\) and of \\(\\tfrac{${c}}{${d}}\\) by \\(${kc}\\) — this changes the look, not the value. ${g > 1 && R !== 0 ? `Then simplify by dividing top and bottom by \\(${g}\\).` : ""}${Math.abs(R) > L && R % L !== 0 ? ` As a mixed number: \\(${R < 0 ? "-" : ""}${Math.floor(Math.abs(R) / L)}${texFrac(Math.abs(R) % L, L)}\\).` : ""}`, `Multiplie le numérateur et le dénominateur de \\(\\tfrac{${a}}{${b}}\\) par \\(${ka}\\) et ceux de \\(\\tfrac{${c}}{${d}}\\) par \\(${kc}\\) — cela change l'apparence, pas la valeur. ${g > 1 && R !== 0 ? `Ensuite, simplifie en divisant le numérateur et le dénominateur par \\(${g}\\).` : ""}${Math.abs(R) > L && R % L !== 0 ? ` En nombre fractionnaire : \\(${R < 0 ? "-" : ""}${Math.floor(Math.abs(R) / L)}${texFrac(Math.abs(R) % L, L)}\\).` : ""}`)} />
          </>
        )}
      </Readout>
    </WidgetCard>
  );
}

export function FractionMulDiv({ init = [2, 3, 3, 4] as [number, number, number, number] }: { init?: [number, number, number, number] }) {
  const [[a, b, c, d], set] = useState(init);
  const [mode, setMode] = useState<"mul" | "div">("mul");
  const t = useT();
  const upd = (i: number, v: number) => set((s) => s.map((x, j) => (j === i ? v : x)) as [number, number, number, number]);
  const cw = Math.min(56, 420 / b), ch = Math.min(40, 260 / d);
  const W = b * cw + 20, H = d * ch + 20;

  // division: how many (c/d) fit in (a/b)? measured on a common denominator bar
  const L = lcm(b, d), A = a * (L / b), Cn = c * (L / d);

  return (
    <WidgetCard title={mode === "mul" ? t("Area model for multiplying", "Modèle d'aire pour multiplier") : t("How many fit? — dividing fractions", "Combien de fois ça entre? — diviser des fractions")} subtitle={mode === "mul" ? t("Overlap of the two shadings is the product", "Le chevauchement des deux zones ombrées est le produit") : t("Dividing asks how many groups of the divisor fit", "Diviser, c'est chercher combien de groupes du diviseur entrent")}>
      <Row>
        <Slider label={t("1st top", "1er numérateur")} value={a} min={1} max={b} onChange={(v) => upd(0, v)} color={C.blue} />
        <Slider label={t("1st bottom", "1er dénominateur")} value={b} min={2} max={8} onChange={(v) => set(([, , x, y]) => [Math.min(a, v), v, x, y])} color={C.blue} />
        <Slider label={t("2nd top", "2e numérateur")} value={c} min={1} max={d} onChange={(v) => upd(2, v)} color={C.amber} />
        <Slider label={t("2nd bottom", "2e dénominateur")} value={d} min={2} max={8} onChange={(v) => set(([x, y]) => [x, y, Math.min(c, v), v])} color={C.amber} />
      </Row>
      <div style={{ margin: "12px 0" }}>
        <Segmented options={[{ value: "mul", label: t("Multiply ×", "Multiplier ×") }, { value: "div", label: t("Divide ÷", "Diviser ÷") }]} value={mode} onChange={setMode} />
      </div>
      {mode === "mul" ? (
        <>
          <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", maxWidth: W * 1.2, display: "block", margin: "0 auto" }} role="img" aria-label={t(`Area model: ${a}/${b} times ${c}/${d}`, `Modèle d'aire : ${a}/${b} fois ${c}/${d}`)}>
            {Array.from({ length: b }, (_, i) => Array.from({ length: d }, (_, j) => {
              const inA = i < a, inC = j < c;
              return <rect key={`${i}-${j}`} x={10 + i * cw} y={10 + j * ch} width={cw} height={ch} fill={inA && inC ? "#86efac" : inA ? C.blueSoft : inC ? C.amberSoft : "#fff"} stroke="#475569" strokeWidth={1.2} style={{ transition: "fill 0.3s" }} />;
            }))}
          </svg>
          <p style={{ textAlign: "center", fontSize: 13.5, color: C.muted, margin: "6px 0 10px" }}>
            {t("Blue columns: ", "Colonnes bleues : ")}<MathText html={`\\(\\tfrac{${a}}{${b}}\\)`} />{t(" of the square. Yellow rows: ", " du carré. Rangées jaunes : ")}<MathText html={`\\(\\tfrac{${c}}{${d}}\\)`} />{t(`. Green overlap: ${a * c} of the ${b * d} small rectangles.`, `. Chevauchement vert : ${a * c} des ${b * d} petits rectangles.`)}
          </p>
          <Readout tone="green">
            <div style={{ fontSize: 19, fontWeight: 800 }}><MathText html={`\\(\\tfrac{${a}}{${b}}\\times\\tfrac{${c}}{${d}}=\\tfrac{${a}\\times${c}}{${b}\\times${d}}=\\tfrac{${a * c}}{${b * d}}${gcd(a * c, b * d) > 1 ? `=${texFrac(a * c, b * d)}` : ""}\\)`} /></div>
            <MathText html={t("Multiply the tops, multiply the bottoms. No common denominator is needed — the grid makes the new denominator for you.", "Multiplie les numérateurs, multiplie les dénominateurs. Pas besoin de dénominateur commun — la grille crée le nouveau dénominateur pour toi.")} />
          </Readout>
        </>
      ) : (
        <>
          <svg viewBox="0 0 560 120" style={{ width: "100%", display: "block" }} role="img" aria-label={t(`${a}/${b} divided by ${c}/${d}`, `${a}/${b} divisé par ${c}/${d}`)}>
            {Array.from({ length: L }, (_, i) => <rect key={i} x={20 + (i * 520) / L} y={10} width={520 / L} height={34} fill={i < A ? C.blueSoft : "#fff"} stroke={C.blue} strokeWidth={1.2} />)}
            <text x={20} y={62} fontSize={12.5} fill={C.blue} fontWeight={700}>{t(`${a}/${b} = ${A}/${L} of the whole`, `${a}/${b} = ${A}/${L} du tout`)}</text>
            {Array.from({ length: Math.ceil(A / Cn) }, (_, k) => {
              const x0 = 20 + ((k * Cn) * 520) / L, w = (Math.min(Cn, A - k * Cn) * 520) / L, full = (k + 1) * Cn <= A;
              return <g key={k}><rect x={x0} y={72} width={w} height={24} rx={4} fill={full ? C.amberSoft : "#fff7ed"} stroke={C.amber} strokeDasharray={full ? undefined : "4 3"} strokeWidth={1.6} /><text x={x0 + w / 2} y={89} fontSize={12} textAnchor="middle" fill={C.amber} fontWeight={800}>{full ? t(`group ${k + 1}`, `groupe ${k + 1}`) : t(`${A - k * Cn}/${Cn} of a group`, `${A - k * Cn}/${Cn} d'un groupe`)}</text></g>;
            })}
          </svg>
          <Readout tone="green">
            <div style={{ fontSize: 19, fontWeight: 800 }}><MathText html={`\\(\\tfrac{${a}}{${b}}\\div\\tfrac{${c}}{${d}}=\\tfrac{${a}}{${b}}\\times\\tfrac{${d}}{${c}}=${texFrac(a * d, b * c)}\\)`} /></div>
            <MathText html={t(`Groups of \\(\\tfrac{${c}}{${d}}=\\tfrac{${Cn}}{${L}}\\) fit into \\(\\tfrac{${A}}{${L}}\\) exactly \\(${A}\\div${Cn}=${texFrac(A, Cn)}\\) times. The shortcut gives the same answer: multiply by the <strong>reciprocal</strong> \\(\\tfrac{${d}}{${c}}\\) (flip the divisor).`, `Des groupes de \\(\\tfrac{${c}}{${d}}=\\tfrac{${Cn}}{${L}}\\) entrent dans \\(\\tfrac{${A}}{${L}}\\) exactement \\(${A}\\div${Cn}=${texFrac(A, Cn)}\\) fois. Le raccourci donne la même réponse : multiplie par l'<strong>inverse</strong> \\(\\tfrac{${d}}{${c}}\\) (renverse le diviseur).`)} />
          </Readout>
        </>
      )}
    </WidgetCard>
  );
}
