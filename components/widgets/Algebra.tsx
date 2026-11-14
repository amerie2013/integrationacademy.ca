"use client";

// Chapter 2 (algebra) explorers: pattern rules, algebra tiles, the distributive area model,
// a balance-scale equation solver, solving an equation on a graph, and rearranging formulas.

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard, btn, fmtInt } from "./kit";
import { useT } from "@/lib/lang";

/** LaTeX for a polynomial given coefficients by power (descending), e.g. {2:3,1:-1,0:4} -> 3x^{2}-x+4. */
export function polyTex(coef: Record<number, number>, v = "x"): string {
  const pows = Object.keys(coef).map(Number).filter((p) => coef[p] !== 0).sort((a, b) => b - a);
  if (!pows.length) return "0";
  return pows.map((p, i) => {
    const c = coef[p];
    const sign = c < 0 ? "-" : i ? "+" : "";
    const a = Math.abs(c);
    const num = p === 0 ? String(a) : a === 1 ? "" : String(a);
    const x = p === 0 ? "" : p === 1 ? v : `${v}^{${p}}`;
    return sign + num + x;
  }).join("");
}

/* ------------------------------------------------------------------ 2.1 pattern rule */

/** A growing pattern of square tiles: figure n has a·n + b tiles. */
export function PatternRule({ initA = 3, initB = 1 }: { initA?: number; initB?: number }) {
  const [a, setA] = useState(initA);
  const [b, setB] = useState(initB);
  const [n, setN] = useState(6);
  const t = useT();
  const S = 13;
  const fig = (k: number) => {
    // b tiles stacked on the left (constant part), then k columns of a tiles (growing part)
    const cells: { x: number; y: number; grow: boolean }[] = [];
    for (let i = 0; i < b; i++) cells.push({ x: 0, y: i, grow: false });
    for (let col = 0; col < k; col++) for (let r = 0; r < a; r++) cells.push({ x: col + (b ? 1 : 0), y: r, grow: true });
    return cells;
  };
  const figs = [1, 2, 3];
  const H = Math.max(a, b) * S + 34;
  let x0 = 10;
  const placed = figs.map((k) => { const w = Math.max((k + (b ? 1 : 0)) * S, 92); const at = x0; x0 += w + 26; return { k, at, cells: fig(k) }; });
  const rule = `${a === 1 ? "" : a}n${b ? `+${b}` : ""}`;

  return (
    <WidgetCard title={t("From a pattern to an expression", "D'une régularité à une expression")} subtitle={t("Each figure adds the same number of tiles", "Chaque figure ajoute le même nombre de tuiles")}>
      <Row>
        <Slider label={t("added each time", "ajoutées chaque fois")} value={a} min={1} max={5} onChange={setA} color={C.blue} />
        <Slider label={t("fixed tiles", "tuiles fixes")} value={b} min={0} max={5} onChange={setB} color={C.amber} />
        <Slider label={t("figure n", "figure n")} value={n} min={1} max={50} onChange={setN} color={C.green} />
      </Row>
      <svg viewBox={`0 0 ${Math.max(x0, 360)} ${H}`} style={{ width: "100%", maxHeight: 190, display: "block", margin: "12px 0" }} role="img" aria-label={t("First three figures of the pattern", "Les trois premières figures de la régularité")}>
        {placed.map(({ k, at, cells }) => (
          <g key={k}>
            {cells.map((c, i) => <rect key={i} x={at + c.x * S} y={H - 24 - (c.y + 1) * S} width={S - 1.5} height={S - 1.5} rx={2} fill={c.grow ? C.blueSoft : C.amberSoft} stroke={c.grow ? C.blue : C.amber} strokeWidth={1.3} />)}
            <text x={at} y={H - 6} fontSize={12} fill={C.muted} fontWeight={700}>{t(`Figure ${k}: ${a * k + b}`, `Figure ${k} : ${a * k + b}`)}</text>
          </g>
        ))}
      </svg>
      <table style={{ borderCollapse: "collapse", fontSize: 14.5, margin: "0 0 12px", fontVariantNumeric: "tabular-nums" }}>
        <tbody>
          <tr><th style={{ textAlign: "left", padding: "4px 10px", background: C.panel }}>{t("figure n", "figure n")}</th>{[1, 2, 3, 4, 5].map((k) => <td key={k} style={{ padding: "4px 10px", border: `1px solid ${C.line}` }}>{k}</td>)}<td style={{ padding: "4px 10px", border: `1px solid ${C.line}`, fontWeight: 800, color: C.green }}>{n}</td></tr>
          <tr><th style={{ textAlign: "left", padding: "4px 10px", background: C.panel }}>{t("tiles", "tuiles")}</th>{[1, 2, 3, 4, 5].map((k) => <td key={k} style={{ padding: "4px 10px", border: `1px solid ${C.line}` }}>{a * k + b}</td>)}<td style={{ padding: "4px 10px", border: `1px solid ${C.line}`, fontWeight: 800, color: C.green }}>{a * n + b}</td></tr>
        </tbody>
      </table>
      <Readout tone="green">
        <div style={{ fontSize: 19, fontWeight: 800 }}><MathText html={t(`\\(T=${rule}\\) &nbsp; so figure \\(${n}\\) has \\(${a}(${n})${b ? `+${b}` : ""}=${a * n + b}\\) tiles`, `\\(T=${rule}\\) &nbsp; donc la figure \\(${n}\\) a \\(${a}(${n})${b ? `+${b}` : ""}=${a * n + b}\\) tuiles`)} /></div>
        <MathText html={t(`The <span style="color:${C.blue};font-weight:700">blue</span> tiles grow by \\(${a}\\) each figure — that is the coefficient of \\(n\\). The <span style="color:${C.amber};font-weight:700">orange</span> tiles never change — that is the constant term${b ? ` \\(${b}\\)` : ` (here \\(0\\))`}. In the table, the tiles go up by \\(${a}\\) each step.`, `Les tuiles <span style="color:${C.blue};font-weight:700">bleues</span> augmentent de \\(${a}\\) à chaque figure — c'est le coefficient de \\(n\\). Les tuiles <span style="color:${C.amber};font-weight:700">orange</span> ne changent jamais — c'est le terme constant${b ? ` \\(${b}\\)` : ` (ici \\(0\\))`}. Dans le tableau, le nombre de tuiles augmente de \\(${a}\\) à chaque étape.`)} />
      </Readout>
    </WidgetCard>
  );
}

/* ------------------------------------------------------------------ 2.2 algebra tiles */

type Poly = [number, number, number]; // [x², x, 1]

function Tiles({ p, y, label, cancelled }: { p: Poly; y: number; label: string; cancelled?: Poly }) {
  // draws |p[0]| big squares, |p[1]| rectangles, |p[2]| unit squares; cancelled[i] of each kind are struck out
  const items: { kind: 0 | 1 | 2; neg: boolean; struck: boolean }[] = [];
  ([0, 1, 2] as const).forEach((k) => {
    for (let i = 0; i < Math.abs(p[k]); i++) items.push({ kind: k, neg: p[k] < 0, struck: !!cancelled && i < Math.abs(cancelled[k]) });
  });
  let x = 96;
  return (
    <g>
      <text x={8} y={y + 30} fontSize={13} fontWeight={800} fill={C.ink}>{label}</text>
      {items.map((t, i) => {
        const w = t.kind === 0 ? 40 : t.kind === 1 ? 14 : 14, h = t.kind === 2 ? 14 : 40;
        const at = x; x += w + 5;
        const fill = t.neg ? C.redSoft : t.kind === 0 ? C.blueSoft : t.kind === 1 ? C.greenSoft : C.amberSoft;
        const stroke = t.neg ? C.red : t.kind === 0 ? C.blue : t.kind === 1 ? C.green : C.amber;
        return (
          <g key={i} opacity={t.struck ? 0.35 : 1}>
            <rect x={at} y={y + 46 - h} width={w} height={h} rx={2} fill={fill} stroke={stroke} strokeWidth={1.5} />
            {t.kind === 0 && <text x={at + w / 2} y={y + 30} fontSize={11} textAnchor="middle" fill={stroke}>{t.neg ? "−x²" : "x²"}</text>}
            {t.struck && <line x1={at - 2} y1={y + 46 - h - 2} x2={at + w + 2} y2={y + 48} stroke={C.ink} strokeWidth={1.6} />}
          </g>
        );
      })}
    </g>
  );
}

/** Add or subtract two polynomials with algebra tiles; zero pairs are struck out. */
export function AlgebraTiles({ initP = [2, -3, 4], initQ = [-1, 5, -6] }: { initP?: Poly; initQ?: Poly }) {
  const [p, setP] = useState<Poly>(initP);
  const [q, setQ] = useState<Poly>(initQ);
  const [op, setOp] = useState<"+" | "-">("+");
  const t = useT();
  const q2: Poly = op === "+" ? q : [-q[0], -q[1], -q[2]];
  const sum: Poly = [p[0] + q2[0], p[1] + q2[1], p[2] + q2[2]];
  const pairs: Poly = [0, 1, 2].map((k) => (Math.sign(p[k]) * Math.sign(q2[k]) < 0 ? Math.min(Math.abs(p[k]), Math.abs(q2[k])) : 0)) as Poly;
  const tex = (v: Poly) => polyTex({ 2: v[0], 1: v[1], 0: v[2] });
  const setK = (which: "p" | "q", k: number, val: number) => (which === "p" ? setP : setQ)((old) => old.map((x, i) => (i === k ? val : x)) as Poly);
  const names = ["x²", "x", "1"];
  const nPairs = pairs[0] + pairs[1] + pairs[2];

  return (
    <WidgetCard title={t("Algebra tiles: adding and subtracting polynomials", "Tuiles algébriques : additionner et soustraire des polynômes")} subtitle={t("Only like tiles combine; a tile and its opposite make a zero pair", "Seules les tuiles semblables se combinent; une tuile et son opposée forment une paire nulle")}>
      <Row gap={10}>
        {[0, 1, 2].map((k) => <Slider key={"p" + k} label={t(`first: ${names[k]}`, `premier : ${names[k]}`)} value={p[k]} min={-5} max={5} onChange={(v) => setK("p", k, v)} color={C.blue} />)}
      </Row>
      <Row gap={10} style={{ marginTop: 6 }}>
        {[0, 1, 2].map((k) => <Slider key={"q" + k} label={t(`second: ${names[k]}`, `deuxième : ${names[k]}`)} value={q[k]} min={-5} max={5} onChange={(v) => setK("q", k, v)} color={C.violet} />)}
      </Row>
      <div style={{ margin: "12px 0" }}><Segmented options={[{ value: "+", label: t("Add", "Additionner") }, { value: "-", label: t("Subtract", "Soustraire") }]} value={op} onChange={setOp} /></div>
      <div style={{ overflowX: "auto" }}>
        <svg viewBox="0 0 640 180" style={{ width: "100%", minWidth: 520, display: "block" }} role="img" aria-label={t("Algebra tiles", "Tuiles algébriques")}>
          <Tiles p={p} y={0} label={t("first", "premier")} cancelled={pairs} />
          <Tiles p={q2} y={60} label={op === "+" ? t("second", "deuxième") : t("opposite", "opposé")} cancelled={pairs} />
          <line x1={8} y1={118} x2={632} y2={118} stroke={C.line} strokeWidth={2} />
          <Tiles p={sum} y={124} label={t("result", "résultat")} />
        </svg>
      </div>
      <Readout tone="green">
        <div style={{ fontSize: 18, fontWeight: 800 }}><MathText html={`\\((${tex(p)})${op}(${tex(q)})=${tex(sum)}\\)`} /></div>
        <MathText html={t(`${op === "-" ? `Subtracting a polynomial means adding its <strong>opposite</strong>: every sign of \\(${tex(q)}\\) flips to give \\(${tex(q2)}\\). ` : ""}Group like terms: \\(x^2\\): \\(${fmtInt(p[0])}${q2[0] < 0 ? "" : "+"}${fmtInt(q2[0])}=${fmtInt(sum[0])}\\); \\(x\\): \\(${fmtInt(p[1])}${q2[1] < 0 ? "" : "+"}${fmtInt(q2[1])}=${fmtInt(sum[1])}\\); constants: \\(${fmtInt(p[2])}${q2[2] < 0 ? "" : "+"}${fmtInt(q2[2])}=${fmtInt(sum[2])}\\). ${nPairs ? `The ${nPairs} struck-out pair${nPairs > 1 ? "s are" : " is"} zero pairs.` : "There are no zero pairs this time."}`, `${op === "-" ? `Soustraire un polynôme revient à additionner son <strong>opposé</strong> : chaque signe de \\(${tex(q)}\\) change pour donner \\(${tex(q2)}\\). ` : ""}Regroupe les termes semblables : \\(x^2\\) : \\(${fmtInt(p[0])}${q2[0] < 0 ? "" : "+"}${fmtInt(q2[0])}=${fmtInt(sum[0])}\\); \\(x\\) : \\(${fmtInt(p[1])}${q2[1] < 0 ? "" : "+"}${fmtInt(q2[1])}=${fmtInt(sum[1])}\\); constantes : \\(${fmtInt(p[2])}${q2[2] < 0 ? "" : "+"}${fmtInt(q2[2])}=${fmtInt(sum[2])}\\). ${nPairs ? (nPairs > 1 ? `Les ${nPairs} paires barrées sont des paires nulles.` : `La paire barrée est une paire nulle.`) : "Il n'y a aucune paire nulle cette fois-ci."}`)} />
      </Readout>
    </WidgetCard>
  );
}

/* ------------------------------------------------------------------ 2.3 distributive area model */

/** Monomial × polynomial as an area model: a·x^m (b·x^p + c·x^q + d). */
export function DistributiveArea({ init = { a: 3, m: 1, b: 2, p: 2, c: -5, q: 1, d: 4 } }: { init?: { a: number; m: number; b: number; p: number; c: number; q: number; d: number } }) {
  const [s, setS] = useState(init);
  const set = (k: keyof typeof s) => (v: number) => setS((o) => ({ ...o, [k]: v }));
  const t = useT();
  const terms = [{ c: s.b, e: s.p }, { c: s.c, e: s.q }, { c: s.d, e: 0 }].filter((tm) => tm.c !== 0);
  const mono = (c: number, e: number) => polyTex({ [e]: c });
  const prods = terms.map((tm) => ({ c: s.a * tm.c, e: s.m + tm.e }));
  const combined: Record<number, number> = {};
  prods.forEach((tm) => (combined[tm.e] = (combined[tm.e] ?? 0) + tm.c));
  const W = 600, left = 110, cellW = (W - left - 10) / Math.max(terms.length, 1);

  return (
    <WidgetCard title={t("The distributive property as area", "La distributivité comme une aire")} subtitle={t("Multiply the outside term by every term inside the brackets", "Multiplie le terme à l'extérieur par chaque terme entre parenthèses")}>
      <Row gap={10}>
        <Slider label={t("outside coef.", "coef. extérieur")} value={s.a} min={-5} max={5} onChange={set("a")} color={C.violet} />
        <Slider label={t("outside power", "exposant extérieur")} value={s.m} min={0} max={3} onChange={set("m")} color={C.violet} />
      </Row>
      <Row gap={10} style={{ marginTop: 6 }}>
        <Slider label={t("1st coef.", "1er coef.")} value={s.b} min={-6} max={6} onChange={set("b")} color={C.blue} />
        <Slider label={t("1st power", "1er exposant")} value={s.p} min={1} max={4} onChange={set("p")} color={C.blue} />
      </Row>
      <Row gap={10} style={{ marginTop: 6 }}>
        <Slider label={t("2nd coef.", "2e coef.")} value={s.c} min={-6} max={6} onChange={set("c")} color={C.green} />
        <Slider label={t("2nd power", "2e exposant")} value={s.q} min={1} max={4} onChange={set("q")} color={C.green} />
        <Slider label={t("constant", "constante")} value={s.d} min={-9} max={9} onChange={set("d")} color={C.amber} />
      </Row>
      <svg viewBox={`0 0 ${W} 150`} style={{ width: "100%", display: "block", margin: "12px 0" }} role="img" aria-label={t("Area model", "Modèle d'aire")}>
        <text x={left / 2} y={98} fontSize={18} textAnchor="middle" fontWeight={800} fill={C.violet}>{mono(s.a, s.m).replace(/\^\{(\d+)\}/g, (_, d: string) => [...d].map((c) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[Number(c)]).join("")).replace(/-/g, "−")}</text>
        {terms.map((tm, i) => (
          <g key={i}>
            <text x={left + cellW * i + cellW / 2} y={24} fontSize={16} textAnchor="middle" fontWeight={800} fill={[C.blue, C.green, C.amber][i]}>{mono(tm.c, tm.e).replace(/\^\{(\d+)\}/g, (_, d: string) => [...d].map((c) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[Number(c)]).join("")).replace(/-/g, "−")}</text>
            <rect x={left + cellW * i} y={36} width={cellW} height={104} fill={prods[i].c < 0 ? C.redSoft : C.greenSoft} stroke={C.ink} strokeWidth={1.4} />
            <text x={left + cellW * i + cellW / 2} y={96} fontSize={18} textAnchor="middle" fontWeight={800} fill={C.ink}>{mono(prods[i].c, prods[i].e).replace(/\^\{(\d+)\}/g, (_, d: string) => [...d].map((c) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[Number(c)]).join("")).replace(/-/g, "−")}</text>
          </g>
        ))}
      </svg>
      <Readout tone="green">
        <div style={{ fontSize: 18, fontWeight: 800 }}><MathText html={`\\(${mono(s.a, s.m)}\\left(${polyTex({ [s.p]: s.b, ...(s.q === s.p ? {} : { [s.q]: s.c }), 0: s.d })}${s.q === s.p && s.c ? `${s.c < 0 ? "" : "+"}${mono(s.c, s.q)}` : ""}\\right)=${prods.map((tm, i) => (i && tm.c >= 0 ? "+" : "") + mono(tm.c, tm.e)).join("")}${Object.keys(combined).length < prods.length ? `=${polyTex(combined)}` : ""}\\)`} /></div>
        <MathText html={t(`Each cell is a product. Multiply the coefficients and <strong>add</strong> the exponents (product law): for example \\(${mono(s.a, s.m)}\\times${mono(terms[0]?.c ?? 1, terms[0]?.e ?? 0)}=${mono(prods[0]?.c ?? 0, prods[0]?.e ?? 0)}\\). A negative coefficient outside changes the sign of <strong>every</strong> term.`, `Chaque case est un produit. Multiplie les coefficients et <strong>additionne</strong> les exposants (loi du produit) : par exemple \\(${mono(s.a, s.m)}\\times${mono(terms[0]?.c ?? 1, terms[0]?.e ?? 0)}=${mono(prods[0]?.c ?? 0, prods[0]?.e ?? 0)}\\). Un coefficient négatif à l'extérieur change le signe de <strong>chaque</strong> terme.`)} />
      </Readout>
    </WidgetCard>
  );
}

/* ------------------------------------------------------------------ 2.4 / 2.5 balance solver */

type Side = { x: number; k: number };
const sideTex = (s: Side) => (s.x === 0 && s.k === 0 ? "0" : polyTex({ 1: s.x, 0: s.k }));
/** The side with x replaced by a bracketed value, e.g. 4(-5)+7; a side with no x-term is just its number. */
const subTex = (s: Side, v: number) => {
  const xs = s.x === 0 ? "" : `${s.x === 1 ? "" : s.x === -1 ? "-" : s.x}(${v})`;
  const ks = s.k === 0 ? "" : xs ? `${s.k < 0 ? "" : "+"}${s.k}` : String(s.k);
  return xs || ks ? xs + ks : "0";
};

function Pan({ s, cx, y }: { s: Side; cx: number; y: number }) {
  const t = useT();
  const items: { t: "x" | "1"; neg: boolean }[] = [];
  for (let i = 0; i < Math.min(Math.abs(s.x), 8); i++) items.push({ t: "x", neg: s.x < 0 });
  for (let i = 0; i < Math.min(Math.abs(s.k), 14); i++) items.push({ t: "1", neg: s.k < 0 });
  const many = Math.abs(s.x) > 8 || Math.abs(s.k) > 14;
  let x = cx - 78, row = 0;
  return (
    <g>
      <path d={`M ${cx - 90} ${y} L ${cx + 90} ${y} L ${cx + 70} ${y + 14} L ${cx - 70} ${y + 14} Z`} fill="#e2e8f0" stroke={C.muted} />
      {items.map((it, i) => {
        const w = it.t === "x" ? 20 : 12, h = it.t === "x" ? 26 : 12;
        if (x + w > cx + 80) { x = cx - 78; row++; }
        const at = x; x += w + 3;
        const col = it.neg ? C.red : it.t === "x" ? C.blue : C.amber;
        return (
          <g key={i}>
            <rect x={at} y={y - h - 2 - row * 30} width={w} height={h} rx={it.t === "x" ? 3 : 6} fill={it.neg ? C.redSoft : it.t === "x" ? C.blueSoft : C.amberSoft} stroke={col} strokeWidth={1.4} />
            {it.t === "x" && <text x={at + w / 2} y={y - 10 - row * 30} fontSize={11} textAnchor="middle" fill={col} fontWeight={700}>{it.neg ? "−x" : "x"}</text>}
          </g>
        );
      })}
      {many && <text x={cx} y={y + 30} fontSize={11} textAnchor="middle" fill={C.muted}>{t("(too many to draw)", "(trop nombreux pour être dessinés)")}</text>}
    </g>
  );
}

/** Solve ax + b = cx + d by doing the same thing to both sides; or test a value and watch the scale tip. */
export function BalanceSolver({ left = { x: 5, k: -3 }, right = { x: 2, k: 9 } }: { left?: Side; right?: Side }) {
  const [L, setL] = useState<Side>(left);
  const [R, setR] = useState<Side>(right);
  const [hist, setHist] = useState<string[]>([]);
  const [amt, setAmt] = useState(1);
  const [term, setTerm] = useState<"x" | "1">("1");
  const [mode, setMode] = useState<"solve" | "test">("solve");
  const [tx, setTx] = useState(0);
  const [msg, setMsg] = useState("");
  const t = useT();
  const sol = L.x - R.x !== 0 ? (R.k - L.k) / (L.x - R.x) : NaN;

  const apply = (op: "add" | "sub" | "div") => {
    setMsg("");
    if (op === "div") {
      if (amt === 0) return setMsg(t("You can never divide by 0.", "On ne peut jamais diviser par 0."));
      if ([L.x, L.k, R.x, R.k].some((v) => v % amt !== 0)) return setMsg(t(`Dividing every term by ${amt} would give fractions here — first get the x-terms on one side and the numbers on the other.`, `Diviser chaque terme par ${amt} donnerait des fractions ici — place d'abord les termes en x d'un côté et les nombres de l'autre.`));
      setL({ x: L.x / amt, k: L.k / amt }); setR({ x: R.x / amt, k: R.k / amt });
      setHist((h) => [...h, `\\div ${amt < 0 ? `(${amt})` : amt}${t("\\text{ both sides}", "\\text{ des deux côtés}")}`]);
      return;
    }
    const d = (op === "add" ? 1 : -1) * amt;
    if (term === "x") { setL({ ...L, x: L.x + d }); setR({ ...R, x: R.x + d }); }
    else { setL({ ...L, k: L.k + d }); setR({ ...R, k: R.k + d }); }
    const tt = term === "x" ? `${amt === 1 ? "" : amt}x` : String(amt);
    setHist((h) => [...h, `${op === "add" ? "+" : "-"}${tt}${t("\\text{ both sides}", "\\text{ des deux côtés}")}`]);
  };
  const reset = () => { setL(left); setR(right); setHist([]); setMsg(""); };
  const solved = (L.x === 1 && L.k === 0 && R.x === 0) || (R.x === 1 && R.k === 0 && L.x === 0);
  const lv = L.x * tx + L.k, rv = R.x * tx + R.k;
  const tilt = mode === "test" ? Math.max(-12, Math.min(12, (rv - lv) * 1.5)) : 0;

  return (
    <WidgetCard title={t("The balance: solving an equation", "La balance : résoudre une équation")} subtitle={t("Whatever you do to one side, do to the other", "Ce que tu fais d'un côté, fais-le de l'autre")}>
      <div style={{ marginBottom: 10 }}><Segmented options={[{ value: "solve", label: t("Solve step by step", "Résoudre étape par étape") }, { value: "test", label: t("Test a value of x", "Tester une valeur de x") }]} value={mode} onChange={setMode} /></div>
      <svg viewBox="0 0 600 200" style={{ width: "100%", display: "block" }} role="img" aria-label={t("Balance scale", "Balance")}>
        <polygon points="300,190 284,160 316,160" fill={C.faint} />
        <line x1={300} y1={160} x2={300} y2={70} stroke={C.muted} strokeWidth={4} />
        <g transform={`rotate(${tilt} 300 70)`} style={{ transition: "transform 0.4s" }}>
          <line x1={120} y1={70} x2={480} y2={70} stroke={C.muted} strokeWidth={4} />
          <line x1={150} y1={70} x2={150} y2={120} stroke={C.faint} /><line x1={450} y1={70} x2={450} y2={120} stroke={C.faint} />
          <Pan s={L} cx={150} y={150} />
          <Pan s={R} cx={450} y={150} />
        </g>
      </svg>
      <div style={{ textAlign: "center", fontSize: 21, fontWeight: 800, margin: "4px 0 10px" }}><MathText html={`\\(${sideTex(L)}=${sideTex(R)}\\)`} /></div>
      {mode === "solve" ? (
        <>
          <Row gap={8}>
            <label style={{ fontSize: 14, fontWeight: 650, color: C.muted }}>{t("amount", "quantité")} <input type="number" value={amt} onChange={(e) => setAmt(Math.trunc(Number(e.target.value)) || 0)} style={{ width: 64, padding: "6px 8px", border: "1px solid #cbd5e1", borderRadius: 8, fontSize: 15 }} /></label>
            <Segmented options={[{ value: "1", label: t("number", "nombre") }, { value: "x", label: t("x-term", "terme en x") }]} value={term} onChange={setTerm} />
            <button type="button" style={btn(true)} onClick={() => apply("add")}>{t("Add to both sides", "Additionner des deux côtés")}</button>
            <button type="button" style={btn(true)} onClick={() => apply("sub")}>{t("Subtract from both sides", "Soustraire des deux côtés")}</button>
            <button type="button" style={btn(true)} onClick={() => apply("div")}>{t("Divide both sides", "Diviser les deux côtés")}</button>
            <button type="button" style={btn(false)} onClick={reset}>{t("Reset", "Réinitialiser")}</button>
          </Row>
          {msg && <p style={{ color: C.red, fontWeight: 700, margin: "8px 0 0", fontSize: 14 }}>{msg}</p>}
          <div style={{ marginTop: 12 }}>
            <Readout tone={solved ? "green" : "blue"}>
              <MathText block html={hist.length ? t(`Steps so far: ${hist.map((h) => `\\(${h}\\)`).join(" → ")}`, `Étapes jusqu'ici : ${hist.map((h) => `\\(${h}\\)`).join(" → ")}`) : t(`Goal: get \\(x\\) alone. Tip: first remove the smaller \\(x\\)-term from both sides, then the constant, then divide.`, `But : isoler \\(x\\). Conseil : enlève d'abord le plus petit terme en \\(x\\) des deux côtés, puis la constante, puis divise.`)} />
              {solved && Number.isFinite(sol) && <MathText block html={t(`<strong>Solved: \\(x=${sol}\\).</strong> Check in the original: left \\(=${subTex(left, sol)}=${left.x * sol + left.k}\\), right \\(=${subTex(right, sol)}=${right.x * sol + right.k}\\) ✓`, `<strong>Résolu : \\(x=${sol}\\).</strong> Vérifie dans l'équation de départ : membre de gauche \\(=${subTex(left, sol)}=${left.x * sol + left.k}\\), membre de droite \\(=${subTex(right, sol)}=${right.x * sol + right.k}\\) ✓`)} />}
              {L.x === R.x && <MathText block html={L.k === R.k ? t("Both sides are identical: <strong>every</strong> value of \\(x\\) works (infinitely many solutions).", "Les deux membres sont identiques : <strong>toutes</strong> les valeurs de \\(x\\) conviennent (une infinité de solutions).") : t(`The \\(x\\)-terms cancel and leave \\(${L.k}=${R.k}\\), which is false: <strong>no solution</strong>.`, `Les termes en \\(x\\) s'annulent et il reste \\(${L.k}=${R.k}\\), ce qui est faux : <strong>aucune solution</strong>.`)} />}
            </Readout>
          </div>
        </>
      ) : (
        <>
          <Row><Slider label={t("try x =", "essaie x =")} value={tx} min={-10} max={10} onChange={setTx} color={C.violet} /></Row>
          <div style={{ marginTop: 10 }}>
            <Readout tone={lv === rv ? "green" : "amber"}>
              <MathText html={t(`Left: \\(${subTex(L, tx)}=${lv}\\). Right: \\(${subTex(R, tx)}=${rv}\\). ${lv === rv ? `<strong>Balanced — \\(x=${tx}\\) is the solution.</strong>` : `Not balanced: the ${lv > rv ? "left" : "right"} side is heavier by \\(${Math.abs(lv - rv)}\\).`}`, `Gauche : \\(${subTex(L, tx)}=${lv}\\). Droite : \\(${subTex(R, tx)}=${rv}\\). ${lv === rv ? `<strong>En équilibre — \\(x=${tx}\\) est la solution.</strong>` : `Pas en équilibre : le côté ${lv > rv ? "gauche" : "droit"} est plus lourd de \\(${Math.abs(lv - rv)}\\).`}`)} />
            </Readout>
          </div>
        </>
      )}
    </WidgetCard>
  );
}

/* ------------------------------------------------------------------ 2.4 equation on a graph */

/** Solve m·x + b = c by reading where the line y = m·x + b meets the horizontal line y = c. */
export function EquationGraph({ m = 35 / 2, b = 700, cInit = 1000, xMax = 40, yMax = 1500, xLabel: xLabelIn, yLabel: yLabelIn, xStep = 5, yStep = 250 }:
  { m?: number; b?: number; cInit?: number; xMax?: number; yMax?: number; xLabel?: string; yLabel?: string; xStep?: number; yStep?: number }) {
  const t = useT();
  const xLabel = xLabelIn ?? t("time (s)", "temps (s)");
  const yLabel = yLabelIn ?? t("height (m)", "hauteur (m)");
  const [c, setC] = useState(cInit);
  const W = 600, H = 300, L = 56, B = 40, T = 14, Rr = 16;
  const X = (x: number) => L + (x / xMax) * (W - L - Rr), Y = (y: number) => H - B - (y / yMax) * (H - B - T);
  const xs = (c - b) / m;
  const inRange = xs >= 0 && xs <= xMax;
  const r2 = (v: number) => Math.round(v * 100) / 100;
  const mTex = Number.isInteger(m) ? String(m) : String(r2(m));
  const yEnd = m * xMax + b;
  const clipX = yEnd > yMax ? (yMax - b) / m : yEnd < 0 ? -b / m : xMax;

  return (
    <WidgetCard title={t("Solving an equation with a graph", "Résoudre une équation à l'aide d'un graphique")} subtitle={t("The solution is where the line reaches the target value", "La solution est l'endroit où la droite atteint la valeur cible")}>
      <Row><Slider label={t(`target ${yLabel.split(" ")[0]}`, `${yLabel.split(" ")[0]} cible`)} value={c} min={0} max={yMax} step={yStep / 5} onChange={setC} color={C.red} /></Row>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", display: "block", margin: "10px 0" }} role="img" aria-label={t("Graph of the linear relation", "Graphique de la relation linéaire")}>
        {Array.from({ length: Math.floor(xMax / xStep) + 1 }, (_, i) => <g key={"x" + i}><line x1={X(i * xStep)} y1={Y(0)} x2={X(i * xStep)} y2={Y(yMax)} stroke={C.line} /><text x={X(i * xStep)} y={H - B + 16} fontSize={11} textAnchor="middle" fill={C.muted}>{i * xStep}</text></g>)}
        {Array.from({ length: Math.floor(yMax / yStep) + 1 }, (_, i) => <g key={"y" + i}><line x1={X(0)} y1={Y(i * yStep)} x2={X(xMax)} y2={Y(i * yStep)} stroke={C.line} /><text x={L - 6} y={Y(i * yStep) + 4} fontSize={11} textAnchor="end" fill={C.muted}>{i * yStep}</text></g>)}
        <line x1={X(0)} y1={Y(0)} x2={X(xMax)} y2={Y(0)} stroke={C.ink} strokeWidth={1.5} /><line x1={X(0)} y1={Y(0)} x2={X(0)} y2={Y(yMax)} stroke={C.ink} strokeWidth={1.5} />
        <text x={(L + W) / 2} y={H - 4} fontSize={12} textAnchor="middle" fill={C.ink} fontWeight={700}>{xLabel}</text>
        <text x={14} y={(H - B) / 2} fontSize={12} textAnchor="middle" fill={C.ink} fontWeight={700} transform={`rotate(-90 14 ${(H - B) / 2})`}>{yLabel}</text>
        <line x1={X(0)} y1={Y(b)} x2={X(clipX)} y2={Y(m * clipX + b)} stroke={C.blue} strokeWidth={3} />
        <line x1={X(0)} y1={Y(c)} x2={X(xMax)} y2={Y(c)} stroke={C.red} strokeWidth={2} strokeDasharray="6 4" />
        {inRange && <><line x1={X(xs)} y1={Y(c)} x2={X(xs)} y2={Y(0)} stroke={C.green} strokeWidth={2} strokeDasharray="3 3" /><circle cx={X(xs)} cy={Y(c)} r={6} fill={C.green} /></>}
      </svg>
      <Readout tone={inRange ? "green" : "amber"}>
        <div style={{ fontSize: 18, fontWeight: 800 }}><MathText html={`\\(${mTex}x+${b}=${c}\\ \\Rightarrow\\ ${mTex}x=${r2(c - b)}\\ \\Rightarrow\\ x=${r2(xs)}\\)`} /></div>
        <MathText html={inRange ? t(`On the graph, go across from \\(${c}\\) on the vertical axis to the line, then down: \\(x\\approx${r2(xs)}\\). The algebra gives the exact value; the graph gives an estimate and a check.`, `Sur le graphique, pars de \\(${c}\\) sur l'axe vertical, va horizontalement jusqu'à la droite, puis descends : \\(x\\approx${r2(xs)}\\). L'algèbre donne la valeur exacte; le graphique donne une estimation et une vérification.`) : t(`The target is outside the part of the graph shown; the algebra still works: \\(x=${r2(xs)}\\).`, `La cible est en dehors de la partie du graphique affichée; l'algèbre fonctionne quand même : \\(x=${r2(xs)}\\).`)} />
      </Readout>
    </WidgetCard>
  );
}

/* ------------------------------------------------------------------ 2.6 rearranging formulas */

type Formula = { name: string; tex: string; target: string; steps: { op: string; result: string }[]; fwd: string[]; inv: string[] };

/** Step through isolating a variable; shows the forward chain of operations and its reverse. */
export function FormulaRearrange({ formulas }: { formulas: Formula[] }) {
  const [fi, setFi] = useState(0);
  const [k, setK] = useState(0);
  const t = useT();
  const f = formulas[Math.min(fi, formulas.length - 1)];
  const pick = (i: number) => { setFi(i); setK(0); };
  const chip = (tex: string, col: string, bg: string, key: string | number) => <span key={key} style={{ background: bg, border: `1.5px solid ${col}`, color: col, borderRadius: 8, padding: "4px 9px", fontWeight: 700 }}><MathText html={`\\(${tex}\\)`} /></span>;
  const arrow = <span style={{ color: C.faint, fontWeight: 800 }}>→</span>;

  return (
    <WidgetCard title={t("Rearranging a formula", "Réarranger une formule")} subtitle={t("Undo the operations in reverse order", "Annule les opérations dans l'ordre inverse")}>
      <Row gap={8}>{formulas.map((g, i) => <button key={i} type="button" onClick={() => pick(i)} style={{ ...btn(i === fi), background: i === fi ? "#1e3a8a" : "#fff" }}>{g.name}</button>)}</Row>
      <div style={{ textAlign: "center", fontSize: 21, fontWeight: 800, margin: "14px 0 8px" }}><MathText html={`\\(${f.tex}\\)`} /> <span style={{ fontSize: 14, color: C.muted, fontWeight: 600 }}>{t("— solve for ", "— isole ")}<MathText html={`\\(${f.target}\\)`} /></span></div>
      <div style={{ display: "grid", gap: 8, margin: "8px 0 12px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center", fontSize: 14 }}><strong style={{ minWidth: 150 }}>{t(`Built from ${f.target}:`, `Construite à partir de ${f.target} :`)}</strong>{chip(f.target, C.violet, C.violetSoft, "s")}{f.fwd.map((o, i) => <span key={i} style={{ display: "contents" }}>{arrow}{chip(o, C.blue, C.blueSoft, i)}</span>)}</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center", fontSize: 14 }}><strong style={{ minWidth: 150 }}>{t("Undo, last first:", "Annule, la dernière d'abord :")}</strong>{f.inv.map((o, i) => <span key={i} style={{ display: "contents" }}>{i ? arrow : null}{chip(o, i < k ? C.green : C.muted, i < k ? C.greenSoft : C.panel, i)}</span>)}{arrow}{chip(f.target, C.violet, C.violetSoft, "e")}</div>
      </div>
      <ol style={{ margin: "0 0 10px", paddingLeft: 22, lineHeight: 1.9 }}>
        <li><MathText html={`\\(${f.tex}\\)`} /></li>
        {f.steps.slice(0, k).map((s, i) => <li key={i}><MathText html={`\\(${s.result}\\)`} /> <span style={{ color: C.green, fontSize: 13.5, fontWeight: 700 }}><MathText html={s.op} /></span></li>)}
      </ol>
      <Row gap={8}>
        <button type="button" style={btn(true)} disabled={k >= f.steps.length} onClick={() => setK(k + 1)}>{k >= f.steps.length ? t("Done", "Terminé") : t("Next step", "Étape suivante")}</button>
        <button type="button" style={btn(false)} onClick={() => setK(0)}>{t("Start again", "Recommencer")}</button>
      </Row>
      {k >= f.steps.length && <div style={{ marginTop: 10 }}><Readout tone="green"><MathText html={t(`Rearranged: \\(${f.steps[f.steps.length - 1].result}\\). Every step did the same thing to both sides, so the new formula is equivalent to the original.`, `Formule réarrangée : \\(${f.steps[f.steps.length - 1].result}\\). Chaque étape a fait la même chose aux deux membres, donc la nouvelle formule est équivalente à celle de départ.`)} /></Readout></div>}
    </WidgetCard>
  );
}

