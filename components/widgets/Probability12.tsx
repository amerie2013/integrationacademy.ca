"use client";

// MDM4U chapter 2 (probability) explorers: the two-dice sample space, simulations where experimental probability
// settles toward theoretical probability, odds and complements, Venn diagrams with the additive rule, drawing with
// and without replacement, conditional probability from a two-way table, two-stage trees (screening tests), and
// probabilities found by counting (cards and committees).

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard, btn, gcd } from "./kit";

const svgBox: React.CSSProperties = { width: "100%", maxWidth: 560, display: "block", margin: "8px auto" };
const Cn = (n: number, r: number) => { if (r < 0 || r > n) return 0; let v = 1; for (let k = 1; k <= r; k++) v = (v * (n - r + k)) / k; return Math.round(v); };
const fr = (a: number, b: number) => { if (b === 0) return "0"; const g = gcd(a, b); return a === 0 ? "0" : b / g === 1 ? String(a / g) : `\\tfrac{${a / g}}{${b / g}}`; };
const d3 = (v: number) => (Math.round(v * 1000) / 1000).toString();
const tx = (n: number) => n.toLocaleString("en-US").replace(/,/g, "{,}");

/** a horizontal probability scale 0..1 with a marker */
function Scale({ p, color = C.violet, label }: { p: number; color?: string; label?: string }) {
  const W = 520, x = 20 + p * (W - 40);
  return (
    <svg viewBox={`0 0 ${W} 56`} style={svgBox} role="img" aria-label="Probability scale">
      <defs><linearGradient id="pg" x1="0" x2="1"><stop offset="0" stopColor="#fee2e2" /><stop offset="0.5" stopColor="#fef9c3" /><stop offset="1" stopColor="#dcfce7" /></linearGradient></defs>
      <rect x={20} y={14} width={W - 40} height={14} rx={7} fill="url(#pg)" stroke={C.line} />
      {[0, 0.25, 0.5, 0.75, 1].map((t) => <text key={t} x={20 + t * (W - 40)} y={44} fontSize={11} textAnchor="middle" fill={C.muted}>{t === 0 ? "impossible 0" : t === 1 ? "certain 1" : t}</text>)}
      <circle cx={x} cy={21} r={8} fill={color} stroke="#fff" strokeWidth={2} />
      {label && <text x={x} y={9} fontSize={11} fontWeight={700} textAnchor="middle" fill={color}>{label}</text>}
    </svg>
  );
}

/* ---------------------------------------------------------------- 2.1 sample space of two dice */

type Ev = "sum" | "atleast" | "doubles" | "six" | "diff";
export function DiceSpace({ init = 7 }: { init?: number }) {
  const [ev, setEv] = useState<Ev>("sum"), [k, setK] = useState(init);
  const test = (a: number, b: number) => (ev === "sum" ? a + b === k : ev === "atleast" ? a + b >= k : ev === "doubles" ? a === b : ev === "six" ? a === 6 || b === 6 : Math.abs(a - b) === Math.min(k, 5));
  let n = 0; for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) if (test(a, b)) n++;
  const desc = ev === "sum" ? `the sum is ${k}` : ev === "atleast" ? `the sum is at least ${k}` : ev === "doubles" ? "doubles" : ev === "six" ? "at least one 6" : `the difference is ${Math.min(k, 5)}`;
  const u = 40, L = 50, T = 30;
  return (
    <WidgetCard title="The sample space of two dice" subtitle="36 equally likely outcomes: count the ones in the event">
      <Segmented value={ev} onChange={setEv} options={[{ value: "sum", label: "sum = k" }, { value: "atleast", label: "sum ≥ k" }, { value: "doubles", label: "doubles" }, { value: "six", label: "at least one 6" }, { value: "diff", label: "difference = k" }]} />
      {(ev === "sum" || ev === "atleast" || ev === "diff") && <div style={{ marginTop: 8 }}><Slider label="k" value={k} min={ev === "diff" ? 0 : 2} max={ev === "diff" ? 5 : 12} onChange={setK} color={C.violet} /></div>}
      <svg viewBox={`0 0 ${L + 6 * u + 20} ${T + 6 * u + 14}`} style={{ ...svgBox, maxWidth: 340 }} role="img" aria-label="Grid of 36 outcomes">
        <text x={L + 3 * u} y={14} fontSize={12} fontWeight={700} textAnchor="middle" fill={C.red}>second die</text>
        <text x={14} y={T + 3 * u} fontSize={12} fontWeight={700} textAnchor="middle" fill={C.blue} transform={`rotate(-90 14 ${T + 3 * u})`}>first die</text>
        {[1, 2, 3, 4, 5, 6].map((b) => <text key={`c${b}`} x={L + (b - 0.5) * u} y={T - 4} fontSize={12} textAnchor="middle" fill={C.red}>{b}</text>)}
        {[1, 2, 3, 4, 5, 6].map((a) => <text key={`r${a}`} x={L - 8} y={T + (a - 0.5) * u + 4} fontSize={12} textAnchor="end" fill={C.blue}>{a}</text>)}
        {[1, 2, 3, 4, 5, 6].flatMap((a) => [1, 2, 3, 4, 5, 6].map((b) => {
          const on = test(a, b);
          return <g key={`${a}${b}`}><rect x={L + (b - 1) * u + 2} y={T + (a - 1) * u + 2} width={u - 4} height={u - 4} rx={5} fill={on ? C.greenSoft : "#fff"} stroke={on ? C.green : C.line} strokeWidth={on ? 2 : 1} /><text x={L + (b - 0.5) * u} y={T + (a - 0.5) * u + 4} fontSize={11} textAnchor="middle" fill={on ? C.green : C.faint}>{a},{b}</text></g>;
        }))}
      </svg>
      <Scale p={n / 36} color={C.green} label={`P = ${d3(n / 36)}`} />
      <Readout tone="green">
        <MathText html={`Event: ${desc}. Favourable outcomes \\(n(A)=${n}\\) out of \\(n(S)=36\\), so \\(P(A)=\\dfrac{n(A)}{n(S)}=\\dfrac{${n}}{36}=${fr(n, 36)}\\approx${d3(n / 36)}\\). The complement has \\(${36 - n}\\) outcomes: \\(P(A')=${fr(36 - n, 36)}\\), and \\(P(A)+P(A')=1\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 2.2 experimental vs theoretical (simulation) */

type Exp = "coin" | "die" | "twoTails" | "sum7";
const EXPS: Record<Exp, { label: string; p: number; tex: string; trial: () => boolean }> = {
  coin: { label: "coin: heads", p: 0.5, tex: "\\tfrac12", trial: () => Math.random() < 0.5 },
  die: { label: "die: roll a 2", p: 1 / 6, tex: "\\tfrac16", trial: () => Math.floor(Math.random() * 6) === 1 },
  twoTails: { label: "two coins: TT", p: 0.25, tex: "\\tfrac14", trial: () => Math.random() < 0.5 && Math.random() < 0.5 },
  sum7: { label: "two dice: sum 7", p: 1 / 6, tex: "\\tfrac16", trial: () => Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2 === 7 },
};
export function SimLab({ init = "die" as Exp }: { init?: Exp }) {
  const [e, setE] = useState<Exp>(init);
  const [hist, setHist] = useState<number[]>([]); // running successes after each trial
  const run = (k: number) => { const h = [...hist]; let s = h.length ? h[h.length - 1] : 0; for (let i = 0; i < k && h.length < 5000; i++) { if (EXPS[e].trial()) s++; h.push(s); } setHist(h); };
  const N = hist.length, succ = N ? hist[N - 1] : 0, p = EXPS[e].p;
  const W = 540, H = 220, L = 44, T = 12, R = 12, B = 28, w = W - L - R, h = H - T - B;
  const X = (i: number) => L + (Math.log10(i + 1) / Math.log10(Math.max(N, 10) + 1)) * w, Y = (v: number) => T + h - v * h;
  const step = Math.max(1, Math.floor(N / 400));
  const pts = hist.map((s, i) => (i % step === 0 || i === N - 1 ? `${X(i + 1).toFixed(1)},${Y(s / (i + 1)).toFixed(1)}` : "")).filter(Boolean).join(" ");
  return (
    <WidgetCard title="Experimental vs theoretical probability" subtitle="run more trials and watch the relative frequency settle down">
      <Segmented value={e} onChange={(v) => { setE(v); setHist([]); }} options={(Object.keys(EXPS) as Exp[]).map((k) => ({ value: k, label: EXPS[k].label }))} />
      <Row style={{ marginTop: 10 }}>
        {[1, 10, 100, 1000].map((k) => <button key={k} type="button" style={btn(k === 100)} onClick={() => run(k)}>+{k} trial{k > 1 ? "s" : ""}</button>)}
        <button type="button" style={btn()} onClick={() => setHist([])}>reset</button>
      </Row>
      <svg viewBox={`0 0 ${W} ${H}`} style={svgBox} role="img" aria-label="Running experimental probability">
        <rect x={L} y={T} width={w} height={h} fill="#fff" stroke={C.line} />
        {[0, 0.25, 0.5, 0.75, 1].map((v) => <g key={v}><line x1={L} y1={Y(v)} x2={L + w} y2={Y(v)} stroke="#eef2f7" /><text x={L - 6} y={Y(v) + 4} fontSize={11} textAnchor="end" fill={C.muted}>{v}</text></g>)}
        <line x1={L} y1={Y(p)} x2={L + w} y2={Y(p)} stroke={C.red} strokeWidth={2} strokeDasharray="7 5" />
        <text x={L + w - 4} y={Y(p) - 6} fontSize={11.5} fontWeight={700} textAnchor="end" fill={C.red}>theoretical {d3(p)}</text>
        {N > 0 && <polyline points={pts} fill="none" stroke={C.violet} strokeWidth={2} />}
        <text x={L + w / 2} y={H - 6} fontSize={11.5} textAnchor="middle" fill={C.muted}>number of trials (log scale){N ? ` — ${N} so far` : ""}</text>
      </svg>
      <Readout tone="green">
        <MathText html={N ? `${succ} successes in ${N} trials: experimental probability \\(\\dfrac{${succ}}{${N}}\\approx${d3(succ / N)}\\); theoretical probability \\(${EXPS[e].tex}\\approx${d3(p)}\\); difference \\(${d3(Math.abs(succ / N - p))}\\). With few trials the relative frequency jumps around; as the number of trials grows it tends to get closer to the theoretical value (the law of large numbers).` : "Press a button to run trials. The red dashed line is the theoretical probability."} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 2.3 odds and the complement */

export function OddsLab({ init = [3, 5] }: { init?: [number, number] }) {
  const [a, setA] = useState(init[0]), [b, setB] = useState(init[1]);
  const n = a + b;
  return (
    <WidgetCard title="Probability, odds and the complement" subtitle="favourable vs unfavourable outcomes">
      <Row>
        <Slider label="favourable" value={a} min={0} max={20} onChange={setA} color={C.green} />
        <Slider label="unfavourable" value={b} min={0} max={20} onChange={setB} color={C.red} />
      </Row>
      <svg viewBox="0 0 540 60" style={svgBox} role="img" aria-label="Outcomes split into favourable and unfavourable">
        {Array.from({ length: n }, (_, i) => { const w = Math.min(26, 520 / Math.max(n, 1)); return <rect key={i} x={10 + i * w} y={14} width={w - 3} height={30} rx={4} fill={i < a ? C.greenSoft : C.redSoft} stroke={i < a ? C.green : C.red} />; })}
      </svg>
      {n > 0 && <Scale p={a / n} color={C.green} label={`P(A) = ${d3(a / n)}`} />}
      <Readout tone="green">
        <MathText html={n === 0 ? "Add some outcomes." : `\\(P(A)=\\dfrac{${a}}{${n}}=${fr(a, n)}\\), \\(P(A')=1-P(A)=${fr(b, n)}\\). <strong>Odds in favour</strong> of A \\(=${a}:${b}\\)${a && b ? ` \\(=${a / gcd(a, b)}:${b / gcd(a, b)}\\)` : ""}; <strong>odds against</strong> \\(=${b}:${a}\\). Going back: odds in favour \\(m:n\\) means \\(P(A)=\\dfrac{m}{m+n}\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 2.4 Venn diagram and the additive rule */

export function VennProb({ init = [40, 18, 15, 6] }: { init?: [number, number, number, number] }) {
  const [U, setU] = useState(init[0]), [nA, setNA] = useState(init[1]), [nB, setNB] = useState(init[2]), [nAB0, setNAB] = useState(init[3]);
  const nAB = Math.min(nAB0, nA, nB), union = nA + nB - nAB, uu = Math.max(U, union);
  return (
    <WidgetCard title="Venn diagrams and the additive rule" subtitle="P(A or B) = P(A) + P(B) − P(A and B)">
      <Row>
        <Slider label="n(S)" value={U} min={10} max={60} onChange={setU} color={C.muted} />
        <Slider label="n(A)" value={nA} min={0} max={40} onChange={setNA} color={C.blue} />
      </Row>
      <Row>
        <Slider label="n(B)" value={nB} min={0} max={40} onChange={setNB} color={C.red} />
        <Slider label="n(A and B)" value={nAB} min={0} max={Math.min(nA, nB)} onChange={setNAB} color={C.violet} />
      </Row>
      <svg viewBox="0 0 360 200" style={{ ...svgBox, maxWidth: 400 }} role="img" aria-label="Venn diagram">
        <rect x={6} y={6} width={348} height={188} rx={8} fill="#fff" stroke={C.muted} />
        <text x={20} y={24} fontSize={13} fontWeight={700} fill={C.muted}>S ({uu})</text>
        <circle cx={nAB ? 140 : 110} cy={104} r={70} fill={C.blueSoft} fillOpacity={0.6} stroke={C.blue} strokeWidth={2} />
        <circle cx={nAB ? 220 : 250} cy={104} r={70} fill={C.redSoft} fillOpacity={0.6} stroke={C.red} strokeWidth={2} />
        <text x={nAB ? 105 : 110} y={108} fontSize={16} fontWeight={800} textAnchor="middle" fill={C.blue}>{nA - nAB}</text>
        {nAB > 0 && <text x={180} y={108} fontSize={16} fontWeight={800} textAnchor="middle" fill={C.violet}>{nAB}</text>}
        <text x={nAB ? 255 : 250} y={108} fontSize={16} fontWeight={800} textAnchor="middle" fill={C.red}>{nB - nAB}</text>
        <text x={330} y={182} fontSize={15} fontWeight={800} textAnchor="end" fill={C.muted}>{uu - union}</text>
        <text x={nAB ? 100 : 80} y={30} fontSize={13} fontWeight={700} fill={C.blue}>A</text>
        <text x={nAB ? 250 : 270} y={30} fontSize={13} fontWeight={700} fill={C.red}>B</text>
      </svg>
      <Readout tone={nAB ? "green" : "amber"}>
        <MathText html={`\\(P(A\\cup B)=P(A)+P(B)-P(A\\cap B)=\\dfrac{${nA}}{${uu}}+\\dfrac{${nB}}{${uu}}-\\dfrac{${nAB}}{${uu}}=\\dfrac{${union}}{${uu}}\\approx${d3(union / uu)}\\). ${nAB ? "The overlap was counted twice, so it is subtracted once." : "<strong>A and B are mutually exclusive</strong> (no overlap), so simply \\(P(A\\cup B)=P(A)+P(B)\\)."} Neither: \\(${fr(uu - union, uu)}\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 2.5 with and without replacement */

export function DrawLab({ init = [5, 3] }: { init?: [number, number] }) {
  const [r, setR] = useState(init[0]), [b, setB] = useState(init[1]), [rep, setRep] = useState<"with" | "without">("without");
  const n = r + b, w = rep === "with";
  const p1 = [r / n, b / n];
  const p2 = w ? [[r / n, b / n], [r / n, b / n]] : [[(r - 1) / (n - 1), b / (n - 1)], [r / (n - 1), (b - 1) / (n - 1)]];
  const t2 = w ? [[`${r}/${n}`, `${b}/${n}`], [`${r}/${n}`, `${b}/${n}`]] : [[`${r - 1}/${n - 1}`, `${b}/${n - 1}`], [`${r}/${n - 1}`, `${b - 1}/${n - 1}`]];
  const leaves = [["RR", p1[0] * p2[0][0]], ["RB", p1[0] * p2[0][1]], ["BR", p1[1] * p2[1][0]], ["BB", p1[1] * p2[1][1]]] as const;
  const ys = [40, 90, 150, 200], ym = [65, 175];
  return (
    <WidgetCard title="Independent or dependent draws" subtitle="draw two marbles, with or without putting the first one back">
      <Row>
        <Slider label="red" value={r} min={1} max={12} onChange={setR} color={C.red} />
        <Slider label="blue" value={b} min={1} max={12} onChange={setB} color={C.blue} />
      </Row>
      <Segmented value={rep} onChange={setRep} options={[{ value: "with", label: "with replacement (independent)" }, { value: "without", label: "without replacement (dependent)" }]} />
      <svg viewBox="0 0 540 230" style={svgBox} role="img" aria-label="Tree diagram of two draws">
        <circle cx={30} cy={120} r={6} fill={C.ink} />
        {[0, 1].map((i) => <g key={i}><line x1={36} y1={120} x2={170} y2={ym[i]} stroke={C.faint} strokeWidth={1.6} /><text x={100} y={(120 + ym[i]) / 2 - 6} fontSize={12} fontWeight={700} textAnchor="middle" fill={C.violet}>{i ? `${b}/${n}` : `${r}/${n}`}</text><circle cx={182} cy={ym[i]} r={12} fill={i ? C.blueSoft : C.redSoft} stroke={i ? C.blue : C.red} /><text x={182} y={ym[i] + 4} fontSize={12} fontWeight={800} textAnchor="middle" fill={i ? C.blue : C.red}>{i ? "B" : "R"}</text>
          {[0, 1].map((j) => { const y = ys[i * 2 + j]; return <g key={j}><line x1={194} y1={ym[i]} x2={330} y2={y} stroke={C.faint} strokeWidth={1.6} /><text x={262} y={(ym[i] + y) / 2 - 5} fontSize={12} fontWeight={700} textAnchor="middle" fill={C.violet}>{t2[i][j]}</text><circle cx={342} cy={y} r={12} fill={j ? C.blueSoft : C.redSoft} stroke={j ? C.blue : C.red} /><text x={342} y={y + 4} fontSize={12} fontWeight={800} textAnchor="middle" fill={j ? C.blue : C.red}>{j ? "B" : "R"}</text><text x={364} y={y + 4} fontSize={12.5} fill={C.ink}>{leaves[i * 2 + j][0]}: {d3(leaves[i * 2 + j][1])}</text></g>; })}</g>)}
        <text x={100} y={16} fontSize={11.5} fontWeight={700} textAnchor="middle" fill={C.muted}>1st draw</text>
        <text x={262} y={16} fontSize={11.5} fontWeight={700} textAnchor="middle" fill={C.muted}>2nd draw</text>
      </svg>
      <Readout tone={w ? "blue" : "green"}>
        <MathText html={`\\(P(\\text{both red})=P(R_1)\\times P(R_2\\mid R_1)=\\dfrac{${r}}{${n}}\\times\\dfrac{${w ? r : r - 1}}{${w ? n : n - 1}}\\approx${d3(leaves[0][1])}\\). ${w ? "The bag is the same for the second draw, so the draws are <strong>independent</strong>: \\(P(A\\cap B)=P(A)\\,P(B)\\)." : "The first marble changes the bag, so the second draw <strong>depends</strong> on the first: use \\(P(B\\mid A)\\)."} The four end probabilities add to 1.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 2.6 conditional probability from a two-way table */

export function TwoWayTable({ init = [30, 20, 15, 35] }: { init?: [number, number, number, number] }) {
  const [a, setA] = useState(init[0]), [b, setB] = useState(init[1]), [c, setC] = useState(init[2]), [d, setD] = useState(init[3]);
  const [given, setGiven] = useState<"row" | "col">("row");
  const tot = a + b + c + d, r1 = a + b, c1 = a + c;
  const cell = (v: number, on: boolean, hot = false): React.CSSProperties => ({ padding: "8px 12px", textAlign: "center", border: `1px solid ${C.line}`, fontWeight: hot ? 800 : 600, background: hot ? C.greenSoft : on ? C.amberSoft : "#fff", color: hot ? C.green : C.ink, fontVariantNumeric: "tabular-nums" });
  const rowOn = given === "row", colOn = given === "col";
  return (
    <WidgetCard title="Conditional probability from a two-way table" subtitle="“given” shrinks the sample space to one row or column">
      <Row>
        <Slider label="plays & passes" value={a} min={0} max={60} onChange={setA} color={C.green} />
        <Slider label="plays & fails" value={b} min={0} max={60} onChange={setB} color={C.red} />
      </Row>
      <Row>
        <Slider label="no sport & passes" value={c} min={0} max={60} onChange={setC} color={C.green} />
        <Slider label="no sport & fails" value={d} min={0} max={60} onChange={setD} color={C.red} />
      </Row>
      <Segmented value={given} onChange={setGiven} options={[{ value: "row", label: "P(pass | plays a sport)" }, { value: "col", label: "P(plays a sport | pass)" }]} />
      <table style={{ borderCollapse: "collapse", margin: "12px auto", fontSize: 14.5 }}>
        <thead><tr><th style={cell(0, false)}></th><th style={cell(0, colOn)}>passes</th><th style={cell(0, false)}>fails</th><th style={cell(0, false)}>total</th></tr></thead>
        <tbody>
          <tr><th style={cell(0, rowOn)}>plays a sport</th><td style={cell(a, rowOn || colOn, true)}>{a}</td><td style={cell(b, rowOn)}>{b}</td><td style={cell(r1, rowOn)}>{r1}</td></tr>
          <tr><th style={cell(0, false)}>no sport</th><td style={cell(c, colOn)}>{c}</td><td style={cell(d, false)}>{d}</td><td style={cell(c + d, false)}>{c + d}</td></tr>
          <tr><th style={cell(0, false)}>total</th><td style={cell(c1, colOn)}>{c1}</td><td style={cell(b + d, false)}>{b + d}</td><td style={cell(tot, false)}>{tot}</td></tr>
        </tbody>
      </table>
      <Readout tone="green">
        <MathText html={tot === 0 ? "Enter some data." : rowOn
          ? `Given the student plays a sport, only the ${r1} students in that row count: \\(P(\\text{pass}\\mid\\text{sport})=\\dfrac{${a}}{${r1}}\\approx${d3(r1 ? a / r1 : 0)}\\). Formula: \\(P(B\\mid A)=\\dfrac{P(A\\cap B)}{P(A)}=\\dfrac{${a}/${tot}}{${r1}/${tot}}\\). Compare \\(P(\\text{pass})=\\dfrac{${c1}}{${tot}}\\approx${d3(c1 / tot)}\\): ${Math.abs((r1 ? a / r1 : 0) - c1 / tot) < 0.005 ? "equal, so the events are (about) independent." : "different, so playing a sport and passing are <strong>not independent</strong> in this data."}`
          : `Given the student passes, only the ${c1} students in that column count: \\(P(\\text{sport}\\mid\\text{pass})=\\dfrac{${a}}{${c1}}\\approx${d3(c1 ? a / c1 : 0)}\\). Notice this is not the same as \\(P(\\text{pass}\\mid\\text{sport})\\approx${d3(r1 ? a / r1 : 0)}\\) — the order of “given” matters.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 2.7 two-stage tree: a screening test */

export function ScreeningTree({ init = [2, 95, 6] }: { init?: [number, number, number] }) {
  const [prev, setPrev] = useState(init[0]), [sens, setSens] = useState(init[1]), [fp, setFp] = useState(init[2]);
  const p = prev / 100, s = sens / 100, f = fp / 100;
  const tp = p * s, fn = p * (1 - s), fpos = (1 - p) * f, tn = (1 - p) * (1 - f), pos = tp + fpos;
  const rows: [string, number, string][] = [["has it, tests +", tp, C.green], ["has it, tests −", fn, C.amber], ["does not, tests +", fpos, C.red], ["does not, tests −", tn, C.blue]];
  return (
    <WidgetCard title="Two-stage tree: a screening test" subtitle="multiply along branches, add the branches you want">
      <Row>
        <Slider label="have it %" value={prev} min={1} max={30} onChange={setPrev} color={C.violet} format={(v) => `${v}%`} />
        <Slider label="test + if have it %" value={sens} min={50} max={100} onChange={setSens} color={C.green} format={(v) => `${v}%`} />
      </Row>
      <Slider label="test + if not %" value={fp} min={0} max={30} onChange={setFp} color={C.red} format={(v) => `${v}%`} />
      <svg viewBox="0 0 540 210" style={svgBox} role="img" aria-label="Tree diagram">
        <circle cx={24} cy={105} r={6} fill={C.ink} />
        {[[55, `has it ${d3(p)}`], [155, `does not ${d3(1 - p)}`]].map(([y, t], i) => <g key={i}><line x1={30} y1={105} x2={160} y2={y as number} stroke={C.faint} strokeWidth={1.6} /><text x={170} y={(y as number) + 4} fontSize={12} fontWeight={700} fill={C.violet}>{t}</text></g>)}
        {rows.map(([t, v, col], i) => { const y0 = i < 2 ? 55 : 155, y = [25, 80, 130, 185][i]; const br = [s, 1 - s, f, 1 - f][i]; return <g key={t}><line x1={258} y1={y0} x2={330} y2={y} stroke={C.faint} strokeWidth={1.6} /><text x={300} y={(y0 + y) / 2 - 3} fontSize={11} fill={C.muted}>{d3(br)}</text><text x={338} y={y + 4} fontSize={12.5} fontWeight={700} fill={col}>{t}: {d3(v)}</text></g>; })}
      </svg>
      <Readout tone="green">
        <MathText html={`\\(P(+)=${d3(p)}(${d3(s)})+${d3(1 - p)}(${d3(f)})=${d3(pos)}\\). Given a positive test, the chance of really having the condition is \\(P(\\text{has}\\mid +)=\\dfrac{${d3(tp)}}{${d3(pos)}}\\approx${d3(pos ? tp / pos : 0)}\\). ${pos && tp / pos < 0.5 ? "Even with an accurate test, most positives are false when the condition is rare." : "Here a positive result is fairly reliable."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 2.8 probability by counting */

export function CountProb({ init = [5, 2] }: { init?: [number, number] }) {
  const [k, setK] = useState(init[0]), [j0, setJ] = useState(init[1]);
  const j = Math.min(j0, k);
  const vals = Array.from({ length: k + 1 }, (_, i) => (Cn(13, i) * Cn(39, k - i)) / Cn(52, k));
  const max = Math.max(...vals);
  const W = 540, H = 200, L = 40, B = 28, T = 12, w = W - L - 12, h = H - T - B, bw = w / (k + 1);
  return (
    <WidgetCard title="Probability by counting" subtitle="P = (number of favourable hands) ÷ (number of possible hands)">
      <Row>
        <Slider label="cards in hand" value={k} min={1} max={10} onChange={setK} color={C.blue} />
        <Slider label="exactly … hearts" value={j} min={0} max={k} onChange={setJ} color={C.red} />
      </Row>
      <svg viewBox={`0 0 ${W} ${H}`} style={svgBox} role="img" aria-label="Probability of each number of hearts">
        {vals.map((v, i) => <g key={i}><rect x={L + i * bw + 4} y={T + h - (v / max) * h} width={bw - 8} height={(v / max) * h} fill={i === j ? C.redSoft : C.blueSoft} stroke={i === j ? C.red : C.blue} /><text x={L + (i + 0.5) * bw} y={H - 10} fontSize={11.5} textAnchor="middle" fill={C.ink}>{i}</text><text x={L + (i + 0.5) * bw} y={T + h - (v / max) * h - 4} fontSize={10} textAnchor="middle" fill={i === j ? C.red : C.muted}>{d3(v)}</text></g>)}
        <line x1={L} y1={T + h} x2={L + w} y2={T + h} stroke={C.ink} />
      </svg>
      <Readout tone="green">
        <MathText html={`\\(P(\\text{exactly } ${j}\\text{ hearts})=\\dfrac{\\binom{13}{${j}}\\binom{39}{${k - j}}}{\\binom{52}{${k}}}=\\dfrac{${tx(Cn(13, j) * Cn(39, k - j))}}{${tx(Cn(52, k))}}\\approx${d3(vals[j])}\\). Choose the hearts from the 13 hearts AND the other cards from the 39 non-hearts; every hand is equally likely. The bars (one for each possible number of hearts) add to 1.`} />
      </Readout>
    </WidgetCard>
  );
}
