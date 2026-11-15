"use client";

// MCR3U chapter 7 (discrete functions) explorers: arithmetic and geometric sequences as discrete graphs, recursive rules
// t(n) = p·t(n−1) + q, two-term recursions and the ratio of consecutive terms, arithmetic series by pairing, geometric
// partial sums, and Pascal's triangle with binomial expansions.

import { useState } from "react";
import { useT } from "@/lib/lang";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { r2 } from "./Systems";

const n2 = (v: number, d = 3) => { const s = r2(v, d); return s === "-0" ? "0" : s; };
const svgBox: React.CSSProperties = { width: "100%", maxWidth: 560, display: "block", margin: "8px auto" };
const cell: React.CSSProperties = { padding: "3px 8px", textAlign: "center", borderBottom: `1px solid ${C.line}`, fontVariantNumeric: "tabular-nums" };
const sgn = (v: number) => (v < 0 ? `- ${n2(-v)}` : `+ ${n2(v)}`);

/** discrete plot of points (n, t_n) with optional connecting guide line */
function Dots({ vals, color = C.violet, guide, start = 1, H = 250 }: { vals: number[]; color?: string; guide?: boolean; start?: number; H?: number }) {
  const W = 540, L = 46, B = 24, T = 10, R = 12, w = W - L - R, h = H - T - B;
  const lo = Math.min(0, ...vals), hi = Math.max(0, ...vals), span = hi - lo || 1;
  const X = (i: number) => L + ((i + 0.5) / vals.length) * w, Y = (v: number) => T + h - ((v - lo) / span) * h;
  const ticks = [lo, lo + span / 2, hi];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={svgBox} role="img" aria-label="Terms of the sequence">
      <rect x={L} y={T} width={w} height={h} fill="#fff" stroke={C.line} />
      {ticks.map((t, i) => <g key={i}><line x1={L} y1={Y(t)} x2={L + w} y2={Y(t)} stroke="#eef2f7" /><text x={L - 5} y={Y(t) + 4} fontSize={11} textAnchor="end" fill={C.muted}>{n2(t, 1)}</text></g>)}
      <line x1={L} y1={Y(0)} x2={L + w} y2={Y(0)} stroke={C.ink} strokeWidth={1.2} />
      {guide && <polyline points={vals.map((v, i) => `${X(i)},${Y(v)}`).join(" ")} fill="none" stroke={C.line} strokeDasharray="5 4" />}
      {vals.map((v, i) => <g key={i}><circle cx={X(i)} cy={Y(v)} r={5} fill={color} /><text x={X(i)} y={T + h + 16} fontSize={11} textAnchor="middle" fill={C.muted}>{i + start}</text></g>)}
      <text x={L + w - 2} y={T + h + 16} fontSize={11} fontWeight={700} textAnchor="end" fill={C.ink}>n</text>
    </svg>
  );
}

/* ---------------------------------------------------------------- 7.1 arithmetic */

export function ArithLab({ init = [5, 3] }: { init?: [number, number] }) {
  const [a, setA] = useState(init[0]), [d, setD] = useState(init[1]), [k, setK] = useState(10);
  const t = useT();
  const vals = Array.from({ length: 10 }, (_, i) => a + i * d);
  return (
    <WidgetCard title={t("Arithmetic sequences", "Suites arithmétiques")} subtitle={t("add the same common difference d each time", "ajoute chaque fois la même raison d")}>
      <Row>
        <Slider label={t("first term a", "premier terme a")} value={a} min={-10} max={20} onChange={setA} color={C.blue} />
        <Slider label={t("difference d", "raison d")} value={d} min={-5} max={6} step={0.5} onChange={setD} color={C.red} />
      </Row>
      <Slider label={t("term number n", "rang du terme n")} value={k} min={1} max={60} onChange={setK} color={C.violet} />
      <Dots vals={vals} guide />
      <Readout tone="green">
        <MathText html={t(`\\(${vals.slice(0, 5).map((v) => n2(v)).join(",\\ ")},\\ \\ldots\\) &nbsp; General term \\(t_n=${n2(a)}+(n-1)(${n2(d)})=${n2(d)}n${sgn(a - d)}\\). So \\(t_{${k}}=${n2(a + (k - 1) * d)}\\). The points lie on a line with slope \\(d=${n2(d)}\\) — an arithmetic sequence is a linear function with domain \\(n=1,2,3,\\ldots\\)`,
          `\\(${vals.slice(0, 5).map((v) => n2(v)).join(",\\ ")},\\ \\ldots\\) &nbsp; Terme général \\(t_n=${n2(a)}+(n-1)(${n2(d)})=${n2(d)}n${sgn(a - d)}\\). Donc \\(t_{${k}}=${n2(a + (k - 1) * d)}\\). Les points sont sur une droite de pente \\(d=${n2(d)}\\) — une suite arithmétique est une fonction linéaire de domaine \\(n=1,2,3,\\ldots\\)`)} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 7.2 geometric */

export function GeoLab({ init = [3, 2] }: { init?: [number, number] }) {
  const [a, setA] = useState(init[0]), [r, setR] = useState(init[1]), [k, setK] = useState(8);
  const t = useT();
  const vals = Array.from({ length: 8 }, (_, i) => a * r ** i);
  return (
    <WidgetCard title={t("Geometric sequences", "Suites géométriques")} subtitle={t("multiply by the same common ratio r each time", "multiplie chaque fois par la même raison r")}>
      <Row>
        <Slider label={t("first term a", "premier terme a")} value={a} min={-8} max={20} onChange={setA} color={C.blue} />
        <Slider label={t("ratio r", "raison r")} value={r} min={-3} max={3} step={0.25} onChange={setR} color={C.red} />
      </Row>
      <Slider label={t("term number n", "rang du terme n")} value={k} min={1} max={20} onChange={setK} color={C.violet} />
      <Dots vals={vals} guide={r > 0} />
      <Readout tone="green">
        <MathText html={t(`\\(${vals.slice(0, 5).map((v) => n2(v)).join(",\\ ")},\\ \\ldots\\) &nbsp; General term \\(t_n=${n2(a)}(${n2(r)})^{n-1}\\), so \\(t_{${k}}=${n2(a * r ** (k - 1), 4)}\\). ${r < 0 ? "A negative ratio makes the signs alternate." : Math.abs(r) < 1 ? "With 0 < r < 1 the terms shrink toward 0." : r === 1 ? "With r = 1 every term is the same." : "With r > 1 the terms grow exponentially."}`,
          `\\(${vals.slice(0, 5).map((v) => n2(v)).join(",\\ ")},\\ \\ldots\\) &nbsp; Terme général \\(t_n=${n2(a)}(${n2(r)})^{n-1}\\), donc \\(t_{${k}}=${n2(a * r ** (k - 1), 4)}\\). ${r < 0 ? "Une raison négative fait alterner les signes." : Math.abs(r) < 1 ? "Avec 0 < r < 1, les termes diminuent vers 0." : r === 1 ? "Avec r = 1, tous les termes sont égaux." : "Avec r > 1, les termes croissent de façon exponentielle."}`)} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 7.3 recursive rules t(n) = p·t(n−1) + q */

export function RecursiveLab({ init = [1, 2, 1] }: { init?: [number, number, number] }) {
  const [t1, setT1] = useState(init[0]), [p, setP] = useState(init[1]), [q, setQ] = useState(init[2]);
  const t = useT();
  const vals: number[] = [t1];
  for (let i = 1; i < 8; i++) vals.push(p * vals[i - 1] + q);
  const d1 = vals.slice(1).map((v, i) => v - vals[i]);
  const kind = p === 1 ? t("arithmetic (d = q)", "arithmétique (d = q)") : q === 0 ? t("geometric (r = p)", "géométrique (r = p)") : t("neither arithmetic nor geometric", "ni arithmétique ni géométrique");
  return (
    <WidgetCard title={t("Recursive rules", "Formules de récurrence")} subtitle={t("each term is built from the one before: t₁ given, tₙ = p·tₙ₋₁ + q", "chaque terme est calculé à partir du précédent : t₁ donné, tₙ = p·tₙ₋₁ + q")}>
      <Row>
        <Slider label="t₁" value={t1} min={-5} max={10} onChange={setT1} color={C.blue} />
        <Slider label="p" value={p} min={-2} max={3} step={0.5} onChange={setP} color={C.red} />
        <Slider label="q" value={q} min={-5} max={5} onChange={setQ} color={C.green} />
      </Row>
      <table style={{ borderCollapse: "collapse", margin: "6px auto", fontSize: 14 }}>
        <tbody>
          <tr><th style={cell}>n</th>{vals.map((_, i) => <td key={i} style={cell}>{i + 1}</td>)}</tr>
          <tr><th style={cell}>tₙ</th>{vals.map((v, i) => <td key={i} style={{ ...cell, color: C.violet, fontWeight: 700 }}>{n2(v)}</td>)}</tr>
          <tr><th style={cell}>{t("difference", "différence")}</th><td style={cell} />{d1.map((v, i) => <td key={i} style={cell}>{n2(v)}</td>)}</tr>
        </tbody>
      </table>
      <Dots vals={vals} />
      <Readout tone="green">
        <MathText html={t(`\\(t_1=${n2(t1)},\\ t_n=${p === 1 ? "" : n2(p)}t_{n-1}${q === 0 ? "" : sgn(q)}\\): this sequence is ${kind}. ${p === 2 && q === 1 && t1 === 1 ? "This is the disc-moving puzzle: the minimum number of moves for n discs is \\(2^n-1\\)." : "Look at the differences: constant means arithmetic; a constant ratio between terms means geometric."}`,
          `\\(t_1=${n2(t1)},\\ t_n=${p === 1 ? "" : n2(p)}t_{n-1}${q === 0 ? "" : sgn(q)}\\) : cette suite est ${kind}. ${p === 2 && q === 1 && t1 === 1 ? "C'est le casse-tête des disques : le nombre minimal de déplacements pour n disques est \\(2^n-1\\)." : "Regarde les différences : constantes signifie arithmétique; un rapport constant entre les termes signifie géométrique."}`)} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 7.4 two-term recursion */

export function FibLab({ init = [1, 1] }: { init?: [number, number] }) {
  const [a, setA] = useState(init[0]), [b, setB] = useState(init[1]), [m, setM] = useState(1);
  const t = useT();
  const vals = [a, b];
  for (let i = 2; i < 14; i++) vals.push(vals[i - 1] + m * vals[i - 2]);
  const ratios = vals.slice(1).map((v, i) => (vals[i] !== 0 ? v / vals[i] : NaN));
  const limit = (1 + Math.sqrt(1 + 4 * m)) / 2;
  return (
    <WidgetCard title={t("Two previous terms", "Deux termes précédents")} subtitle={t("tₙ = tₙ₋₁ + m·tₙ₋₂ — and the ratio of consecutive terms", "tₙ = tₙ₋₁ + m·tₙ₋₂ — et le rapport de termes consécutifs")}>
      <Row>
        <Slider label="t₁" value={a} min={-3} max={10} onChange={setA} color={C.blue} />
        <Slider label="t₂" value={b} min={-3} max={10} onChange={setB} color={C.green} />
        <Slider label="m" value={m} min={1} max={3} onChange={setM} color={C.red} />
      </Row>
      <table style={{ borderCollapse: "collapse", margin: "6px auto", fontSize: 13 }}>
        <tbody>
          <tr><th style={cell}>tₙ</th>{vals.slice(0, 10).map((v, i) => <td key={i} style={{ ...cell, color: C.violet, fontWeight: 700 }}>{n2(v)}</td>)}</tr>
          <tr><th style={cell}>tₙ ÷ tₙ₋₁</th><td style={cell} />{ratios.slice(0, 9).map((v, i) => <td key={i} style={cell}>{Number.isFinite(v) ? n2(v) : "—"}</td>)}</tr>
        </tbody>
      </table>
      <Dots vals={ratios.slice(0, 12).map((v) => (Number.isFinite(v) ? v : 0))} start={2} color={C.amber} H={200} />
      <Readout tone="green">
        <MathText html={t(`The ratios settle toward \\(${n2(limit, 4)}\\)${m === 1 ? " — the golden ratio \\(\\frac{1+\\sqrt5}2\\)" : ""}, whatever positive starting terms you choose. Each new term needs the two before it, so you must be given two first terms.`,
          `Les rapports se stabilisent vers \\(${n2(limit, 4)}\\)${m === 1 ? " — le nombre d'or \\(\\frac{1+\\sqrt5}2\\)" : ""}, peu importe les termes de départ positifs choisis. Chaque nouveau terme utilise les deux précédents, donc il faut connaître les deux premiers termes.`)} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 7.5 arithmetic series by pairing */

export function SeriesPairs({ init = [2, 3, 8] }: { init?: [number, number, number] }) {
  const [a, setA] = useState(init[0]), [d, setD] = useState(init[1]), [n, setN] = useState(init[2]);
  const tr = useT();
  const terms = Array.from({ length: n }, (_, i) => a + i * d);
  const last = terms[n - 1], S = (n * (a + last)) / 2;
  // every row has the same total a + tₙ, so one scale fits all rows
  const W = 540, px = 380 / (a + last);
  const rowH = Math.min(22, 220 / n), H = n * rowH + 20;
  return (
    <WidgetCard title={tr("Adding an arithmetic sequence", "Additionner une suite arithmétique")} subtitle={tr("write the series forwards and backwards: every pair has the same sum", "écris la série à l'endroit et à l'envers : chaque paire a la même somme")}>
      <Row>
        <Slider label="a" value={a} min={1} max={10} onChange={setA} color={C.blue} />
        <Slider label="d" value={d} min={0} max={6} onChange={setD} color={C.red} />
        <Slider label="n" value={n} min={2} max={12} onChange={setN} color={C.violet} />
      </Row>
      <svg viewBox={`0 0 ${W} ${H}`} style={svgBox} role="img" aria-label="Pairing terms">
        {terms.map((t, i) => {
          const back = terms[n - 1 - i];
          return (
            <g key={i}>
              <rect x={20} y={10 + i * rowH} width={t * px} height={rowH - 3} fill={C.blueSoft} stroke={C.blue} />
              <rect x={20 + t * px} y={10 + i * rowH} width={back * px} height={rowH - 3} fill={C.amberSoft} stroke={C.amber} />
              <text x={24 + (t + back) * px} y={10 + i * rowH + rowH * 0.7} fontSize={11} fill={C.muted}>{t} + {back} = {t + back}</text>
            </g>
          );
        })}
      </svg>
      <Readout tone="green">
        <MathText html={tr(`Each of the \\(${n}\\) rows has length \\(a+t_n=${a}+${last}=${a + last}\\), so twice the sum is \\(${n}\\times${a + last}\\): \\(S_{${n}}=\\frac{${n}(${a}+${last})}{2}=${n2(S)}\\). In general \\(S_n=\\frac n2(t_1+t_n)=\\frac n2\\left[2a+(n-1)d\\right]\\).`,
          `Chacune des \\(${n}\\) rangées a une longueur de \\(a+t_n=${a}+${last}=${a + last}\\), donc le double de la somme est \\(${n}\\times${a + last}\\) : \\(S_{${n}}=\\frac{${n}(${a}+${last})}{2}=${n2(S)}\\). En général, \\(S_n=\\frac n2(t_1+t_n)=\\frac n2\\left[2a+(n-1)d\\right]\\).`)} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 7.6 geometric partial sums */

export function GeoSums({ init = [4, 0.5] }: { init?: [number, number] }) {
  const [a, setA] = useState(init[0]), [r, setR] = useState(init[1]), [n, setN] = useState(8);
  const t = useT();
  const sums: number[] = []; let s = 0;
  for (let i = 0; i < 12; i++) { s += a * r ** i; sums.push(s); }
  const Sn = r === 1 ? a * n : (a * (r ** n - 1)) / (r - 1);
  return (
    <WidgetCard title={t("Geometric series", "Séries géométriques")} subtitle={t("partial sums S₁, S₂, S₃, … of a, ar, ar², …", "sommes partielles S₁, S₂, S₃, … de a, ar, ar², …")}>
      <Row>
        <Slider label="a" value={a} min={1} max={10} onChange={setA} color={C.blue} />
        <Slider label="r" value={r} min={-2} max={3} step={0.25} onChange={setR} color={C.red} />
        <Slider label="n" value={n} min={1} max={12} onChange={setN} color={C.violet} />
      </Row>
      <Dots vals={sums} guide />
      <Readout tone="green">
        <MathText html={`\\(S_{${n}}=${r === 1 ? `${a}\\times${n}` : `\\frac{${a}\\left((${n2(r)})^{${n}}-1\\right)}{${n2(r)}-1}`}=${n2(Sn, 4)}\\). ${Math.abs(r) < 1 ? t(`Because \\(|r|<1\\), the partial sums level off near \\(\\frac{a}{1-r}=${n2(a / (1 - r), 4)}\\).`, `Puisque \\(|r|<1\\), les sommes partielles se stabilisent près de \\(\\frac{a}{1-r}=${n2(a / (1 - r), 4)}\\).`) : r === 1 ? t("With r = 1 the formula would divide by 0: just multiply.", "Avec r = 1, la formule diviserait par 0 : il suffit de multiplier.") : t("Because |r| > 1, the partial sums grow without bound.", "Puisque |r| > 1, les sommes partielles croissent sans limite.")}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 7.7 Pascal's triangle and binomial expansion */

const row = (n: number) => { const r = [1]; for (let k = 1; k <= n; k++) r.push((r[k - 1] * (n - k + 1)) / k); return r; };

export function PascalLab({ init = 4 }: { init?: number }) {
  const [n, setN] = useState(init), [mode, setMode] = useState<"expand" | "odd">("expand");
  const t = useT();
  const [p, setP] = useState(2), [q, setQ] = useState(1);
  const W = 540, rows = 11, dx = 42, dy = 24;
  const coeff = row(n).map((c, k) => c * p ** (n - k) * q ** k);
  const termTex = coeff.map((c, k) => {
    if (c === 0) return "";
    const xp = n - k; const xs = xp === 0 ? "" : xp === 1 ? "x" : `x^{${xp}}`;
    const val = c === 1 && xs ? "" : c === -1 && xs ? "-" : n2(c, 0);
    return `${val}${xs}`;
  }).filter(Boolean).join(" + ").replace(/\+ -/g, "- ");
  return (
    <WidgetCard title={t("Pascal's triangle", "Le triangle de Pascal")} subtitle={t("each entry is the sum of the two above it; row n gives the coefficients of (a + b)ⁿ", "chaque nombre est la somme des deux nombres au-dessus; la rangée n donne les coefficients de (a + b)ⁿ")}>
      <Row>
        <Slider label={t("row n", "rangée n")} value={n} min={0} max={10} onChange={setN} color={C.violet} />
        <Segmented value={mode} onChange={setMode} options={[{ value: "expand", label: t("expand", "développer") }, { value: "odd", label: t("shade odd numbers", "ombrer les nombres impairs") }]} />
      </Row>
      {mode === "expand" && <Row>
        <Slider label={t("p in (px + q)ⁿ", "p dans (px + q)ⁿ")} value={p} min={-3} max={3} onChange={setP} color={C.blue} />
        <Slider label="q" value={q} min={-3} max={3} onChange={setQ} color={C.green} />
      </Row>}
      <svg viewBox={`0 0 ${W} ${rows * dy + 14}`} style={svgBox} role="img" aria-label="Pascal's triangle">
        {Array.from({ length: rows }, (_, i) => row(i).map((v, k) => {
          const x = W / 2 + (k - i / 2) * dx, y = 18 + i * dy, on = i === n;
          const odd = mode === "odd" && v % 2 === 1;
          return <g key={`${i}-${k}`}>
            {(on || odd) && <rect x={x - 19} y={y - 13} width={38} height={18} rx={4} fill={on ? C.violetSoft : C.amberSoft} />}
            <text x={x} y={y} fontSize={12} textAnchor="middle" fontWeight={on ? 700 : 400} fill={on ? C.violet : C.ink}>{v}</text>
          </g>;
        }))}
      </svg>
      <Readout tone="green">
        <MathText html={mode === "expand"
          ? t(`Row ${n}: \\(${row(n).join(",\\ ")}\\) (sum \\(2^{${n}}=${2 ** n}\\)). \\((${p === 1 ? "" : p === -1 ? "-" : p}x${q < 0 ? "" : "+"}${q})^{${n}}=${p === 0 ? n2(q ** n, 0) : termTex}\\)`,
              `Rangée ${n} : \\(${row(n).join(",\\ ")}\\) (somme \\(2^{${n}}=${2 ** n}\\)). \\((${p === 1 ? "" : p === -1 ? "-" : p}x${q < 0 ? "" : "+"}${q})^{${n}}=${p === 0 ? n2(q ** n, 0) : termTex}\\)`)
          : t("The odd entries form a pattern of triangles inside triangles. Each row's sum doubles: 1, 2, 4, 8, …", "Les nombres impairs forment un motif de triangles dans des triangles. La somme de chaque rangée double : 1, 2, 4, 8, …")} />
      </Readout>
    </WidgetCard>
  );
}
