"use client";

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard, btn, texFrac } from "./kit";
import { useT } from "@/lib/lang";

type F = [number, number];
const g = (a: number, b: number): number => (b ? g(b, a % b) : Math.abs(a));
const red = ([n, d]: F): F => { const k = g(n, d) || 1; return [n / k, d / k]; };
const mid = (a: F, b: F): F => red([a[0] * b[1] + b[0] * a[1], 2 * a[1] * b[1]]);

/** Zoom into the gap between two rationals: there is always another one in the middle. */
export function DensityZoom() {
  const [pts, setPts] = useState<F[]>([[1, 2], [3, 4]]);
  const [level, setLevel] = useState(0);
  const t = useT();
  const lo = pts[0], hi = pts[pts.length - 1];
  const val = (f: F) => f[0] / f[1];
  const W = 620, X = (v: number) => 30 + ((v - val(lo)) / (val(hi) - val(lo))) * (W - 60);

  const zoom = () => {
    // keep the left half each time: [lo, mid]
    const m = mid(lo, pts[1] ?? hi);
    setPts([lo, m]);
    setLevel((l) => l + 1);
  };
  const split = () => {
    const out: F[] = [];
    for (let i = 0; i < pts.length - 1; i++) out.push(pts[i], mid(pts[i], pts[i + 1]));
    out.push(pts[pts.length - 1]);
    if (out.length <= 17) setPts(out);
  };

  return (
    <WidgetCard title={t("Density — no next number", "Densité — pas de nombre suivant")} subtitle={t("Between any two rational numbers there is always another", "Entre deux nombres rationnels, il y en a toujours un autre")}>
      <Row>
        <button type="button" style={btn(true)} onClick={split}>{t("Insert midpoints", "Insérer les points milieux")}</button>
        <button type="button" style={btn(false)} onClick={zoom}>{t("Zoom into the first gap", "Zoomer sur le premier intervalle")}</button>
        <button type="button" style={btn(false)} onClick={() => { setPts([[1, 2], [3, 4]]); setLevel(0); }}>{t("Reset", "Réinitialiser")}</button>
        <span style={{ fontSize: 13.5, color: C.muted }}>{t("zoom level ×", "niveau de zoom ×")}{2 ** level}</span>
      </Row>
      <svg viewBox={`0 0 ${W} 110`} style={{ width: "100%", display: "block", marginTop: 12 }} role="img" aria-label={t("Number line with rational midpoints", "Droite numérique avec des points milieux rationnels")}>
        <line x1={14} y1={55} x2={W - 14} y2={55} stroke="#334155" strokeWidth={2} />
        {pts.map((p, i) => {
          const x = X(val(p)), up = i % 2 === 0;
          return (
            <g key={i}>
              <circle cx={x} cy={55} r={i === 0 || i === pts.length - 1 ? 6.5 : 5} fill={i === 0 || i === pts.length - 1 ? C.blue : C.violet} />
              <text x={x} y={up ? 36 : 84} fontSize={pts.length > 9 ? 9.5 : 12.5} textAnchor="middle" fill={C.ink} fontWeight={700}>{`${p[0]}/${p[1]}`}</text>
            </g>
          );
        })}
      </svg>
      <Readout tone="blue">
        <MathText html={t(`The midpoint of \\(a\\) and \\(b\\) is \\(\\dfrac{a+b}{2}\\), and it is always rational when \\(a\\) and \\(b\\) are. So you can never name the "next" rational after \\(${texFrac(lo[0], lo[1])}\\) — every gap holds infinitely many more. This property is called <strong>density</strong>. Integers are <em>not</em> dense: there is nothing between \\(3\\) and \\(4\\).`, `Le point milieu de \\(a\\) et \\(b\\) est \\(\\dfrac{a+b}{2}\\), et il est toujours rationnel quand \\(a\\) et \\(b\\) le sont. Tu ne peux donc jamais nommer le rationnel « suivant » après \\(${texFrac(lo[0], lo[1])}\\) — chaque intervalle en contient une infinité d'autres. Cette propriété s'appelle la <strong>densité</strong>. Les entiers ne sont <em>pas</em> denses : il n'y a rien entre \\(3\\) et \\(4\\).`)} />
      </Readout>
    </WidgetCard>
  );
}

/** Sequences that approach a limit: halving steps toward 1, and 1/n toward 0. */
export function LimitSteps() {
  const [n, setN] = useState(4);
  const [kind, setKind] = useState<"half" | "recip">("half");
  const t = useT();
  const terms = Array.from({ length: n }, (_, i) => (kind === "half" ? 1 - 1 / 2 ** (i + 1) : 1 / (i + 1)));
  const target = kind === "half" ? 1 : 0;
  const last = terms[terms.length - 1];
  const W = 620, X = (v: number) => 30 + v * (W - 60);

  return (
    <WidgetCard title={t("Getting closer — a limit", "De plus en plus près — une limite")} subtitle={t("Add more terms and watch the gap shrink", "Ajoute des termes et observe l'écart rétrécir")}>
      <Row>
        <Segmented options={[{ value: "half", label: "½ + ¼ + ⅛ + …" }, { value: "recip", label: "1, ½, ⅓, ¼, …" }]} value={kind} onChange={setKind} />
        <Slider label={t("terms", "termes")} value={n} min={1} max={12} onChange={setN} color={C.violet} />
      </Row>
      {kind === "half" && (
        <svg viewBox={`0 0 ${W} 60`} style={{ width: "100%", display: "block", marginTop: 12 }} aria-hidden>
          <rect x={30} y={10} width={W - 60} height={30} fill="#fff" stroke="#334155" />
          {terms.map((tv, i) => {
            const start = i === 0 ? 0 : terms[i - 1];
            return <rect key={i} x={X(start)} y={10} width={X(tv) - X(start)} height={30} fill={i % 2 ? "#c4b5fd" : "#a5b4fc"} stroke="#fff" strokeWidth={0.6} />;
          })}
        </svg>
      )}
      <svg viewBox={`0 0 ${W} 70`} style={{ width: "100%", display: "block" }} role="img" aria-label={t("Terms approaching the limit", "Termes qui s'approchent de la limite")}>
        <line x1={20} y1={30} x2={W - 20} y2={30} stroke="#334155" strokeWidth={2} />
        {[0, 0.25, 0.5, 0.75, 1].map((v) => <g key={v}><line x1={X(v)} y1={24} x2={X(v)} y2={36} stroke="#334155" /><text x={X(v)} y={54} fontSize={12} textAnchor="middle" fill={C.ink}>{v}</text></g>)}
        {terms.map((tv, i) => <circle key={i} cx={X(tv)} cy={30} r={i === n - 1 ? 7 : 4.5} fill={i === n - 1 ? C.violet : "#a78bfa"} opacity={0.5 + (0.5 * (i + 1)) / n} />)}
        <circle cx={X(target)} cy={30} r={9} fill="none" stroke={C.red} strokeWidth={2} strokeDasharray="3 2" />
      </svg>
      <Readout tone="green">
        <MathText html={kind === "half"
          ? t(`After ${n} term${n === 1 ? "" : "s"} the total is \\(${texFrac(2 ** n - 1, 2 ** n)}\\approx${last.toFixed(6)}\\). The gap to \\(1\\) is \\(${texFrac(1, 2 ** n)}\\), which halves every time. The sum never passes \\(1\\) but gets as close as you like: its <strong>limit</strong> is \\(1\\).`, `Après ${n} terme${n === 1 ? "" : "s"}, le total est \\(${texFrac(2 ** n - 1, 2 ** n)}\\approx${last.toFixed(6)}\\). L'écart avec \\(1\\) est \\(${texFrac(1, 2 ** n)}\\), qui est divisé par deux chaque fois. La somme ne dépasse jamais \\(1\\), mais s'en approche autant que tu veux : sa <strong>limite</strong> est \\(1\\).`)
          : t(`The ${n}th term is \\(${texFrac(1, n)}\\approx${last.toFixed(4)}\\). The terms keep shrinking and get as close to \\(0\\) as you like, but never reach it: the <strong>limit</strong> is \\(0\\). There are infinitely many terms — the list never ends.`, `Le ${n === 1 ? "1er" : `${n}e`} terme est \\(${texFrac(1, n)}\\approx${last.toFixed(4)}\\). Les termes continuent de rétrécir et s'approchent de \\(0\\) autant que tu veux, sans jamais l'atteindre : la <strong>limite</strong> est \\(0\\). Il y a une infinité de termes — la liste ne finit jamais.`)} />
      </Readout>
    </WidgetCard>
  );
}
