"use client";

// MCR3U chapter 8 (financial applications) explorers: simple vs compound growth, compounding frequency, present value
// and doubling time, the future value of an annuity as a sum of growing payments, the present value of an annuity,
// and a loan amortization schedule with adjustable conditions.

import { useState } from "react";
import { useT } from "@/lib/lang";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";

const money = (v: number) => v.toLocaleString("en-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
/** money inside TeX: {,} keeps KaTeX from spacing the thousands separator like punctuation */
const mtx = (v: number) => money(v).replace(/,/g, "{,}");
const svgBox: React.CSSProperties = { width: "100%", maxWidth: 560, display: "block", margin: "8px auto" };
const cell: React.CSSProperties = { padding: "3px 8px", textAlign: "right", borderBottom: `1px solid ${C.line}`, fontVariantNumeric: "tabular-nums" };
const FREQ = [{ value: 1, label: "annually" }, { value: 2, label: "semi-annually" }, { value: 4, label: "quarterly" }, { value: 12, label: "monthly" }];
const FREQ_FR: Record<number, string> = { 1: "annuellement", 2: "semestriellement", 4: "trimestriellement", 12: "mensuellement" };
/** FREQ with labels in the lesson language */
const freqOpts = (t: (en: string, fr: string) => string) => FREQ.map((o) => ({ value: o.value, label: t(o.label, FREQ_FR[o.value]) }));

/** simple chart: series of {vals, color} over x = 0..N, optional bars */
function Chart({ series, N, xlab, bars }: { series: { vals: number[]; color: string; label: string }[]; N: number; xlab: string; bars?: { vals: number[]; color: string }[] }) {
  const W = 540, H = 260, L = 60, B = 26, T = 12, R = 12, w = W - L - R, h = H - T - B;
  const hi = Math.max(1, ...series.flatMap((s) => s.vals), ...(bars ?? []).flatMap((b) => b.vals)) * 1.08;
  const X = (i: number) => L + (i / Math.max(1, N)) * w, Y = (v: number) => T + h - (v / hi) * h;
  const ticks = [0, hi / 4, hi / 2, (3 * hi) / 4];
  const step = Math.max(1, Math.ceil(N / 10));
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={svgBox} role="img" aria-label="Growth chart">
      <rect x={L} y={T} width={w} height={h} fill="#fff" stroke={C.line} />
      {ticks.map((t, i) => <g key={i}><line x1={L} y1={Y(t)} x2={L + w} y2={Y(t)} stroke="#eef2f7" /><text x={L - 5} y={Y(t) + 4} fontSize={10.5} textAnchor="end" fill={C.muted}>{Math.round(t).toLocaleString("en-CA")}</text></g>)}
      {Array.from({ length: Math.floor(N / step) + 1 }, (_, k) => k * step).map((i) => <text key={i} x={X(i)} y={T + h + 16} fontSize={10.5} textAnchor="middle" fill={C.muted}>{i}</text>)}
      <text x={L + w} y={T + h + 16} fontSize={11} fontWeight={700} textAnchor="end" fill={C.ink}>{xlab}</text>
      {(bars ?? []).map((b, j) => b.vals.map((v, i) => <rect key={`${j}-${i}`} x={X(i + 0.5) - (w / N) * 0.35} y={Y(v)} width={(w / N) * 0.7} height={T + h - Y(v)} fill={b.color} opacity={0.75} />))}
      {series.map((s, j) => <g key={j}><polyline points={s.vals.map((v, i) => `${X(i)},${Y(v)}`).join(" ")} fill="none" stroke={s.color} strokeWidth={2.6} />
        <text x={L + 8} y={T + 16 + 16 * j} fontSize={12} fontWeight={700} fill={s.color}>{s.label}</text></g>)}
    </svg>
  );
}

/* ---------------------------------------------------------------- 8.1 simple vs compound */

export function SimpleCompound({ init = [1000, 6, 20] }: { init?: [number, number, number] }) {
  const [P, setP] = useState(init[0]), [r, setR] = useState(init[1]), [t, setT] = useState(init[2]);
  const tr = useT();
  const simple = Array.from({ length: t + 1 }, (_, k) => P * (1 + (r / 100) * k));
  const comp = Array.from({ length: t + 1 }, (_, k) => P * (1 + r / 100) ** k);
  return (
    <WidgetCard title={tr("Simple vs compound interest", "Intérêt simple et intérêt composé")} subtitle={tr("simple interest grows linearly; compound interest grows exponentially", "l'intérêt simple croît de façon linéaire; l'intérêt composé croît de façon exponentielle")}>
      <Row>
        <Slider label={tr("principal P", "capital P")} value={P} min={100} max={10000} step={100} onChange={setP} format={(v) => `$${v}`} color={C.blue} />
        <Slider label={tr("rate (%/a)", "taux (%/an)")} value={r} min={1} max={15} step={0.5} onChange={setR} color={C.red} />
        <Slider label={tr("years", "années")} value={t} min={1} max={40} onChange={setT} color={C.violet} />
      </Row>
      <Chart N={t} xlab={tr("years", "années")} series={[{ vals: simple, color: C.green, label: tr("simple: A = P(1 + rt)", "simple : A = P(1 + rt)") }, { vals: comp, color: C.violet, label: tr("compound (annual): A = P(1 + i)ⁿ", "composé (annuel) : A = P(1 + i)ⁿ") }]} />
      <Readout tone="green">
        <MathText html={tr(`After ${t} years: simple \\(A=${mtx(simple[t])}\\) (interest \\(${mtx(simple[t] - P)}\\), the same \\(${mtx((P * r) / 100)}\\) every year — an arithmetic sequence); compound \\(A=${mtx(comp[t])}\\) (interest \\(${mtx(comp[t] - P)}\\), growing each year — a geometric sequence with ratio \\(${(1 + r / 100).toFixed(3)}\\)). Difference: \\(${mtx(comp[t] - simple[t])}\\).`,
          `Après ${t} an${t > 1 ? "s" : ""} : intérêt simple \\(A=${mtx(simple[t])}\\) (intérêts \\(${mtx(simple[t] - P)}\\), les mêmes \\(${mtx((P * r) / 100)}\\) chaque année — une suite arithmétique); intérêt composé \\(A=${mtx(comp[t])}\\) (intérêts \\(${mtx(comp[t] - P)}\\), qui augmentent chaque année — une suite géométrique de raison \\(${(1 + r / 100).toFixed(3)}\\)). Différence : \\(${mtx(comp[t] - simple[t])}\\).`)} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 8.2 compounding frequency */

export function CompoundLab({ init = [5000, 4.8, 10] }: { init?: [number, number, number] }) {
  const [P, setP] = useState(init[0]), [r, setR] = useState(init[1]), [y, setY] = useState(init[2]), [m, setM] = useState(12);
  const t = useT();
  const i = r / 100 / m, n = y * m, A = P * (1 + i) ** n;
  const vals = Array.from({ length: y + 1 }, (_, k) => P * (1 + i) ** (k * m));
  return (
    <WidgetCard title={t("Compound interest", "Intérêt composé")} subtitle={t("A = P(1 + i)ⁿ with i = rate per period and n = number of periods", "A = P(1 + i)ⁿ où i = taux par période et n = nombre de périodes")}>
      <Row>
        <Slider label={t("principal P", "capital P")} value={P} min={500} max={20000} step={500} onChange={setP} format={(v) => `$${v}`} color={C.blue} />
        <Slider label={t("annual rate (%)", "taux annuel (%)")} value={r} min={0.5} max={12} step={0.1} onChange={setR} color={C.red} />
        <Slider label={t("years", "années")} value={y} min={1} max={30} onChange={setY} color={C.violet} />
      </Row>
      <Row><Segmented value={m} onChange={setM} options={freqOpts(t)} /></Row>
      <Chart N={y} xlab={t("years", "années")} series={[{ vals, color: C.violet, label: t("amount A", "montant A") }]} />
      <Readout tone="green">
        <MathText html={t(`\\(i=\\frac{${r}\\%}{${m}}=${(i * 100).toFixed(4)}\\%\\), \\(n=${y}\\times${m}=${n}\\). \\(A=${P}(1+${i.toFixed(6)})^{${n}}=${mtx(A)}\\); interest earned \\(${mtx(A - P)}\\). Compounding more often gives slightly more: annually would give \\(${mtx(P * (1 + r / 100) ** y)}\\).`,
          `\\(i=\\frac{${r}\\%}{${m}}=${(i * 100).toFixed(4)}\\%\\), \\(n=${y}\\times${m}=${n}\\). \\(A=${P}(1+${i.toFixed(6)})^{${n}}=${mtx(A)}\\); intérêts gagnés \\(${mtx(A - P)}\\). Une capitalisation plus fréquente rapporte un peu plus : annuellement, on obtiendrait \\(${mtx(P * (1 + r / 100) ** y)}\\).`)} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 8.3 present value and doubling */

export function PresentValueLab({ init = [10000, 5, 8] }: { init?: [number, number, number] }) {
  const [FV, setFV] = useState(init[0]), [r, setR] = useState(init[1]), [y, setY] = useState(init[2]), [m, setM] = useState(4);
  const t = useT();
  const i = r / 100 / m, n = y * m, PV = FV / (1 + i) ** n;
  let dbl = 0; while ((1 + i) ** dbl < 2) dbl++;
  return (
    <WidgetCard title={t("Present value", "Valeur actuelle")} subtitle={t("how much to invest now to reach a future amount: PV = FV(1 + i)⁻ⁿ", "combien investir maintenant pour atteindre un montant futur : VA = VF(1 + i)⁻ⁿ")}>
      <Row>
        <Slider label={t("future value", "valeur future")} value={FV} min={1000} max={50000} step={500} onChange={setFV} format={(v) => `$${v}`} color={C.blue} />
        <Slider label={t("annual rate (%)", "taux annuel (%)")} value={r} min={0.5} max={12} step={0.1} onChange={setR} color={C.red} />
        <Slider label={t("years", "années")} value={y} min={1} max={30} onChange={setY} color={C.violet} />
      </Row>
      <Row><Segmented value={m} onChange={setM} options={freqOpts(t)} /></Row>
      <Chart N={y} xlab={t("years", "années")} series={[{ vals: Array.from({ length: y + 1 }, (_, k) => PV * (1 + i) ** (k * m)), color: C.violet, label: t("PV growing to FV", "VA qui croît jusqu'à VF") }]} />
      <Readout tone="green">
        <MathText html={t(`\\(PV=\\frac{${FV}}{(1+${i.toFixed(6)})^{${n}}}=${mtx(PV)}\\). Invest \\(${mtx(PV)}\\) now and it grows to \\(${mtx(FV)}\\) in ${y} years. At this rate money doubles after about \\(${dbl}\\) compounding periods (\\(${(dbl / m).toFixed(2)}\\) years), found by guess and check on \\((1+i)^n\\ge2\\).`,
          `\\(VA=\\frac{${FV}}{(1+${i.toFixed(6)})^{${n}}}=${mtx(PV)}\\). Investis \\(${mtx(PV)}\\) maintenant et ce montant atteindra \\(${mtx(FV)}\\) dans ${y} an${y > 1 ? "s" : ""}. À ce taux, l'argent double après environ \\(${dbl}\\) périodes de capitalisation (\\(${(dbl / m).toFixed(2)}\\) ans), ce qu'on trouve par essais et erreurs avec \\((1+i)^n\\ge2\\).`)} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 8.4 future value of an annuity */

export function AnnuityFV({ init = [1000, 5, 10] }: { init?: [number, number, number] }) {
  const [R, setR] = useState(init[0]), [r, setRate] = useState(init[1]), [n, setN] = useState(init[2]);
  const t = useT();
  const i = r / 100;
  const parts = Array.from({ length: n }, (_, k) => R * (1 + i) ** (n - 1 - k)); // payment k + 1 grows for n − 1 − k periods
  const FV = (R * ((1 + i) ** n - 1)) / i;
  return (
    <WidgetCard title={t("Future value of an annuity", "Valeur future d'une annuité")} subtitle={t("equal payments at the end of each period; each one earns interest until the end", "des versements égaux à la fin de chaque période; chacun rapporte des intérêts jusqu'à la fin")}>
      <Row>
        <Slider label={t("payment R", "versement R")} value={R} min={100} max={5000} step={100} onChange={setR} format={(v) => `$${v}`} color={C.blue} />
        <Slider label={t("rate per period (%)", "taux par période (%)")} value={r} min={0.5} max={12} step={0.5} onChange={setRate} color={C.red} />
        <Slider label={t("payments n", "versements n")} value={n} min={2} max={30} onChange={setN} color={C.violet} />
      </Row>
      <Chart N={n} xlab={t("payment number", "numéro du versement")} series={[]} bars={[{ vals: parts, color: C.violet }]} />
      <table style={{ borderCollapse: "collapse", margin: "4px auto", fontSize: 13 }}>
        <tbody>
          <tr><th style={cell}>{t("payment 1 grows to", "le versement 1 atteint")}</th><td style={cell}>{money(parts[0])}</td><th style={cell}>{t("last payment", "dernier versement")}</th><td style={cell}>{money(parts[n - 1])}</td></tr>
        </tbody>
      </table>
      <Readout tone="green">
        <MathText html={t(`The amounts form a geometric series \\(R+R(1+i)+\\cdots+R(1+i)^{n-1}\\), so \\(FV=\\frac{R\\left[(1+i)^n-1\\right]}{i}=${mtx(FV)}\\). You deposit \\(${mtx(R * n)}\\); interest earned \\(${mtx(FV - R * n)}\\).`,
          `Les montants forment une série géométrique \\(R+R(1+i)+\\cdots+R(1+i)^{n-1}\\), donc \\(VF=\\frac{R\\left[(1+i)^n-1\\right]}{i}=${mtx(FV)}\\). Tu déposes \\(${mtx(R * n)}\\); intérêts gagnés \\(${mtx(FV - R * n)}\\).`)} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 8.5 present value of an annuity */

export function AnnuityPV({ init = [500, 6, 12] }: { init?: [number, number, number] }) {
  const [R, setR] = useState(init[0]), [r, setRate] = useState(init[1]), [y, setY] = useState(init[2]), [m, setM] = useState(12);
  const t = useT();
  const i = r / 100 / m, n = y * m;
  const PV = (R * (1 - (1 + i) ** -n)) / i;
  const bal: number[] = [PV]; for (let k = 1; k <= n; k++) bal.push(bal[k - 1] * (1 + i) - R);
  const yearly = Array.from({ length: y + 1 }, (_, k) => Math.max(0, bal[k * m]));
  return (
    <WidgetCard title={t("Present value of an annuity", "Valeur actuelle d'une annuité")} subtitle={t("the lump sum needed now to fund equal withdrawals (or the loan that equal payments repay)", "la somme forfaitaire nécessaire maintenant pour financer des retraits égaux (ou le prêt que des versements égaux remboursent)")}>
      <Row>
        <Slider label={t("payment R", "versement R")} value={R} min={50} max={3000} step={50} onChange={setR} format={(v) => `$${v}`} color={C.blue} />
        <Slider label={t("annual rate (%)", "taux annuel (%)")} value={r} min={0.5} max={12} step={0.1} onChange={setRate} color={C.red} />
        <Slider label={t("years", "années")} value={y} min={1} max={30} onChange={setY} color={C.violet} />
      </Row>
      <Row><Segmented value={m} onChange={setM} options={freqOpts(t)} /></Row>
      <Chart N={y} xlab={t("years", "années")} series={[{ vals: yearly, color: C.violet, label: t("balance remaining", "solde restant") }]} />
      <Readout tone="green">
        <MathText html={t(`\\(PV=\\frac{R\\left[1-(1+i)^{-n}\\right]}{i}\\) with \\(i=${(i * 100).toFixed(4)}\\%\\), \\(n=${n}\\): \\(PV=${mtx(PV)}\\). It pays out \\(${mtx(R * n)}\\) in total, so \\(${mtx(R * n - PV)}\\) of that comes from interest. The balance falls to 0 after the last payment.`,
          `\\(VA=\\frac{R\\left[1-(1+i)^{-n}\\right]}{i}\\) avec \\(i=${(i * 100).toFixed(4)}\\%\\), \\(n=${n}\\) : \\(VA=${mtx(PV)}\\). Au total, \\(${mtx(R * n)}\\) est versé, donc \\(${mtx(R * n - PV)}\\) de ce montant provient des intérêts. Le solde tombe à 0 après le dernier versement.`)} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 8.6 amortization */

export function AmortLab({ init = [25000, 6, 5] }: { init?: [number, number, number] }) {
  const [L, setL] = useState(init[0]), [r, setR] = useState(init[1]), [y, setY] = useState(init[2]), [m, setM] = useState(12), [extra, setExtra] = useState(0);
  const tr = useT();
  const i = r / 100 / m, n = y * m;
  const pay = (L * i) / (1 - (1 + i) ** -n);
  const rows: { k: number; int: number; prin: number; bal: number }[] = [];
  let bal = L, k = 0, totInt = 0;
  while (bal > 0.005 && k < 2000) {
    k++; const int = bal * i; let p = pay + extra; if (p > bal + int) p = bal + int;
    bal = bal + int - p; totInt += int; rows.push({ k, int, prin: p - int, bal: Math.max(0, bal) });
  }
  const yearly = Array.from({ length: Math.ceil(rows.length / m) + 1 }, (_, t) => (t === 0 ? L : rows[Math.min(rows.length, t * m) - 1].bal));
  return (
    <WidgetCard title={tr("Paying off a loan", "Rembourser un prêt")} subtitle={tr("each payment covers the interest first; the rest reduces the balance", "chaque versement paie d'abord les intérêts; le reste réduit le solde")}>
      <Row>
        <Slider label={tr("loan", "prêt")} value={L} min={1000} max={60000} step={1000} onChange={setL} format={(v) => `$${v}`} color={C.blue} />
        <Slider label={tr("annual rate (%)", "taux annuel (%)")} value={r} min={0.5} max={15} step={0.1} onChange={setR} color={C.red} />
        <Slider label={tr("term (years)", "durée (années)")} value={y} min={1} max={25} onChange={setY} color={C.violet} />
      </Row>
      <Row>
        <Segmented value={m} onChange={setM} options={freqOpts(tr)} />
        <Slider label={tr("extra per payment", "supplément par versement")} value={extra} min={0} max={1000} step={25} onChange={setExtra} format={(v) => `$${v}`} color={C.green} />
      </Row>
      <table style={{ borderCollapse: "collapse", margin: "6px auto", fontSize: 13 }}>
        <thead><tr><th style={cell}>#</th><th style={cell}>{tr("interest", "intérêts")}</th><th style={cell}>{tr("principal", "capital")}</th><th style={cell}>{tr("balance", "solde")}</th></tr></thead>
        <tbody>{rows.slice(0, 4).map((w) => <tr key={w.k}><td style={cell}>{w.k}</td><td style={cell}>{money(w.int)}</td><td style={cell}>{money(w.prin)}</td><td style={cell}>{money(w.bal)}</td></tr>)}
          <tr><td style={cell}>…</td><td style={cell} /><td style={cell} /><td style={cell} /></tr>
          {rows.slice(-1).map((w) => <tr key={w.k}><td style={cell}>{w.k}</td><td style={cell}>{money(w.int)}</td><td style={cell}>{money(w.prin)}</td><td style={cell}>{money(w.bal)}</td></tr>)}</tbody>
      </table>
      <Chart N={yearly.length - 1} xlab={tr("years", "années")} series={[{ vals: yearly, color: C.violet, label: tr("balance owing", "solde dû") }]} />
      <Readout tone="green">
        <MathText html={tr(`Regular payment \\(R=\\frac{PV\\cdot i}{1-(1+i)^{-n}}=${mtx(pay)}\\) for \\(n=${n}\\) payments. ${extra > 0 ? `With \\(${mtx(extra)}\\) extra each time the loan is paid off in ${rows.length} payments instead of ${n}. ` : ""}Total interest: \\(${mtx(totInt)}\\).`,
          `Versement périodique \\(R=\\frac{VA\\cdot i}{1-(1+i)^{-n}}=${mtx(pay)}\\) pour \\(n=${n}\\) versements. ${extra > 0 ? `Avec \\(${mtx(extra)}\\) de plus à chaque fois, le prêt est remboursé en ${rows.length} versements au lieu de ${n}. ` : ""}Intérêts totaux : \\(${mtx(totInt)}\\).`)} />
      </Readout>
    </WidgetCard>
  );
}
