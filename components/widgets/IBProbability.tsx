"use client";

// IB AA SL chapter 8 (probability) explorers: relative frequency settling towards a theoretical probability, a Venn
// diagram with selectable events and the addition rule, conditional probability and independence from a two-way
// table, and a two-stage tree diagram with and without replacement.

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { r2 } from "./Systems";

const n2 = (v: number, d = 3) => r2(v, d);
const rng = (seed: number) => () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);
const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);
const frac = (p: number, q: number) => { if (q === 0) return "—"; const g = gcd(p, q) || 1; return q / g === 1 ? `${p / g}` : `\\frac{${p / g}}{${q / g}}`; };

/* ---------------------------------------------------------------- 8.1 relative frequency */

const EXP: { label: string; p: number; tex: string }[] = [
  { label: "coin: heads", p: 1 / 2, tex: "\\frac12" },
  { label: "die: a six", p: 1 / 6, tex: "\\frac16" },
  { label: "die: an even number", p: 1 / 2, tex: "\\frac12" },
  { label: "two coins: two heads", p: 1 / 4, tex: "\\frac14" },
];

export function IBRelFreq({ init = 0 }: { init?: number }) {
  const [k, setK] = useState(init), [n, setN] = useState(20), [seed, setSeed] = useState(3);
  const E = EXP[k], r = rng(seed * 31 + k), hits: number[] = [];
  let c = 0;
  for (let i = 1; i <= n; i++) { if (r() < E.p) c++; hits.push(c / i); }
  const W = 420, H = 200, L = 40, B = 170, T = 14, R = 410, X = (i: number) => L + (i / Math.max(1, n - 1)) * (R - L), Y = (p: number) => B - p * (B - T);
  return (
    <WidgetCard title="Relative frequency and probability" subtitle="relative frequency = successes ÷ trials; as the number of trials grows it settles near the theoretical probability">
      <Row><Segmented label="experiment:" value={k} onChange={setK} options={EXP.map((e, i) => ({ value: i, label: e.label }))} /></Row>
      <Row>
        <Slider label="trials" value={n} min={10} max={1000} step={10} onChange={setN} color={C.violet} />
        <button onClick={() => setSeed(seed + 1)} style={{ padding: "6px 12px", borderRadius: 8, border: `1px solid ${C.line}`, background: "#fff", cursor: "pointer", fontWeight: 650 }}>run again</button>
      </Row>
      <svg viewBox={`0 0 ${W} ${H + 20}`} style={{ width: "100%", maxWidth: 560, display: "block", margin: "8px auto" }} role="img" aria-label="Relative frequency">
        <line x1={L} y1={B} x2={R} y2={B} stroke={C.ink} /><line x1={L} y1={T} x2={L} y2={B} stroke={C.ink} />
        {[0, 0.25, 0.5, 0.75, 1].map((p) => <g key={p}><line x1={L} y1={Y(p)} x2={R} y2={Y(p)} stroke="#eef2f7" /><text x={L - 6} y={Y(p) + 4} fontSize={11} textAnchor="end" fill={C.muted}>{p}</text></g>)}
        <line x1={L} y1={Y(E.p)} x2={R} y2={Y(E.p)} stroke={C.red} strokeWidth={2} strokeDasharray="7 5" />
        <polyline points={hits.map((h, i) => `${X(i)},${Y(h)}`).join(" ")} fill="none" stroke={C.violet} strokeWidth={2} />
        <text x={(L + R) / 2} y={H + 12} fontSize={12} textAnchor="middle" fill={C.ink}>number of trials (1 to {n})</text>
      </svg>
      <Readout tone="blue">
        <MathText html={`After ${n} trials: ${c} successes, relative frequency \\(\\frac{${c}}{${n}}=${n2(c / n)}\\). Theoretical probability \\(${E.tex}\\approx${n2(E.p)}\\) (red). Expected number of successes \\(=np=${n2(n * E.p, 1)}\\). ${n >= 300 ? "With many trials the relative frequency is close to the probability." : "With few trials the relative frequency can be far from the probability — add more trials."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 8.2 Venn diagrams */

type Ev = "A" | "B" | "AuB" | "AnB" | "A'" | "AnB'" | "neither";
const EVTEX: Record<Ev, string> = { A: "A", B: "B", AuB: "A\\cup B", AnB: "A\\cap B", "A'": "A'", "AnB'": "A\\cap B'", neither: "(A\\cup B)'" };

export function IBVenn({ init = [12, 5, 8, 5] }: { init?: [number, number, number, number] }) {
  const [a, setA] = useState(init[0]), [both, setBoth] = useState(init[1]), [b, setB] = useState(init[2]), [out, setOut] = useState(init[3]);
  const [ev, setEv] = useState<Ev>("AuB");
  const N = a + both + b + out || 1;
  const inEv: Record<Ev, [boolean, boolean, boolean, boolean]> = { A: [true, true, false, false], B: [false, true, true, false], AuB: [true, true, true, false], AnB: [false, true, false, false], "A'": [false, false, true, true], "AnB'": [true, false, false, false], neither: [false, false, false, true] };
  const sel = inEv[ev], cnt = [a, both, b, out].reduce((s, v, i) => s + (sel[i] ? v : 0), 0);
  const fill = (on: boolean) => (on ? "#fde68a" : "#fff");
  return (
    <WidgetCard title="Venn diagrams" subtitle="P(event) = (number in its region) ÷ total; P(A ∪ B) = P(A) + P(B) − P(A ∩ B)">
      <Row>
        <Slider label="A only" value={a} min={0} max={20} onChange={setA} color={C.blue} />
        <Slider label="A and B" value={both} min={0} max={20} onChange={setBoth} color={C.violet} />
      </Row>
      <Row>
        <Slider label="B only" value={b} min={0} max={20} onChange={setB} color={C.red} />
        <Slider label="neither" value={out} min={0} max={20} onChange={setOut} color={C.muted} />
      </Row>
      <Row><Segmented label="event:" value={ev} onChange={setEv} options={(Object.keys(EVTEX) as Ev[]).map((e) => ({ value: e, label: e === "AuB" ? "A ∪ B" : e === "AnB" ? "A ∩ B" : e === "AnB'" ? "A ∩ B′" : e === "neither" ? "neither" : e.replace("'", "′") }))} /></Row>
      <svg viewBox="0 0 360 230" style={{ width: "100%", maxWidth: 440, display: "block", margin: "8px auto" }} role="img" aria-label="Venn diagram">
        <defs><clipPath id="ibvA"><circle cx={140} cy={120} r={78} /></clipPath></defs>
        <rect x={8} y={8} width={344} height={214} fill={fill(sel[3])} stroke={C.ink} strokeWidth={1.6} />
        <circle cx={140} cy={120} r={78} fill={fill(sel[0])} /><circle cx={220} cy={120} r={78} fill={fill(sel[2])} />
        <g clipPath="url(#ibvA)"><circle cx={220} cy={120} r={78} fill={fill(sel[1])} /></g>
        <circle cx={140} cy={120} r={78} fill="none" stroke={C.blue} strokeWidth={2.4} /><circle cx={220} cy={120} r={78} fill="none" stroke={C.red} strokeWidth={2.4} />
        <text x={22} y={30} fontSize={15} fontWeight={700}>U</text><text x={78} y={58} fontSize={16} fontWeight={700} fill={C.blue}>A</text><text x={270} y={58} fontSize={16} fontWeight={700} fill={C.red}>B</text>
        {[[102, a], [180, both], [258, b]].map(([x, v], i) => <text key={i} x={x} y={126} fontSize={18} fontWeight={700} textAnchor="middle">{v}</text>)}
        <text x={320} y={208} fontSize={18} fontWeight={700} textAnchor="middle">{out}</text>
      </svg>
      <Readout tone="blue">
        <MathText html={`Total \\(${N}\\). \\(P(${EVTEX[ev]})=\\dfrac{${cnt}}{${N}}=${frac(cnt, N)}\\approx${n2(cnt / N)}\\). Check the addition rule: \\(P(A)+P(B)-P(A\\cap B)=\\frac{${a + both}+${b + both}-${both}}{${N}}=\\frac{${a + both + b}}{${N}}=P(A\\cup B)\\).${both === 0 ? " Here A and B do not overlap: they are mutually exclusive, so P(A ∪ B) = P(A) + P(B)." : ""}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 8.3 conditional probability */

export function IBConditional({ init = [18, 12, 22, 28] }: { init?: [number, number, number, number] }) {
  // rows: A, A'; columns: B, B'
  const [ab, setAb] = useState(init[0]), [ab_, setAb_] = useState(init[1]), [a_b, setA_b] = useState(init[2]), [a_b_, setA_b_] = useState(init[3]);
  const [given, setGiven] = useState<"B" | "A">("B");
  const nA = ab + ab_, nB = ab + a_b, N = ab + ab_ + a_b + a_b_ || 1;
  const pA = nA / N, pB = nB / N, pAB = ab / N, cond = given === "B" ? (nB ? ab / nB : 0) : (nA ? ab / nA : 0);
  const indep = Math.abs(pAB - pA * pB) < 1e-9;
  const cell = (v: number, hl: boolean, set: (n: number) => void) => (
    <td style={{ padding: 6, border: `1px solid ${C.line}`, background: hl ? "#fde68a" : "#fff", textAlign: "center" }}>
      <input type="number" min={0} max={99} value={v} onChange={(e) => set(Math.max(0, Math.min(99, Number(e.target.value) || 0)))} style={{ width: 52, textAlign: "center", border: "none", background: "transparent", fontWeight: 700, fontSize: 15 }} />
    </td>
  );
  const th = { padding: "6px 10px", border: `1px solid ${C.line}`, background: C.panel, fontWeight: 700 } as const;
  return (
    <WidgetCard title="Conditional probability and independence" subtitle="P(A | B) = P(A ∩ B) ÷ P(B): restrict to the B column; A and B are independent when P(A ∩ B) = P(A)P(B)">
      <Row><Segmented label="condition:" value={given} onChange={setGiven} options={[{ value: "B", label: "given B: P(A | B)" }, { value: "A", label: "given A: P(B | A)" }]} /></Row>
      <table style={{ borderCollapse: "collapse", margin: "10px auto", fontSize: 15 }}>
        <thead><tr><th style={th}></th><th style={th}>B</th><th style={th}>B′</th><th style={th}>total</th></tr></thead>
        <tbody>
          <tr><th style={th}>A</th>{cell(ab, true, setAb)}{cell(ab_, given === "A", setAb_)}<td style={{ ...th, background: given === "A" ? "#fef3c7" : C.panel, textAlign: "center" }}>{nA}</td></tr>
          <tr><th style={th}>A′</th>{cell(a_b, given === "B", setA_b)}{cell(a_b_, false, setA_b_)}<td style={{ ...th, textAlign: "center" }}>{N - nA}</td></tr>
          <tr><th style={th}>total</th><td style={{ ...th, background: given === "B" ? "#fef3c7" : C.panel, textAlign: "center" }}>{nB}</td><td style={{ ...th, textAlign: "center" }}>{N - nB}</td><td style={{ ...th, textAlign: "center" }}>{N}</td></tr>
        </tbody>
      </table>
      <Readout tone={indep ? "green" : "blue"}>
        <MathText html={`${given === "B" ? `\\(P(A\\mid B)=\\dfrac{n(A\\cap B)}{n(B)}=\\dfrac{${ab}}{${nB}}\\approx${n2(cond)}\\), compared with \\(P(A)=\\frac{${nA}}{${N}}\\approx${n2(pA)}\\).` : `\\(P(B\\mid A)=\\dfrac{n(A\\cap B)}{n(A)}=\\dfrac{${ab}}{${nA}}\\approx${n2(cond)}\\), compared with \\(P(B)=\\frac{${nB}}{${N}}\\approx${n2(pB)}\\).`} \\(P(A\\cap B)=${n2(pAB)}\\) and \\(P(A)P(B)=${n2(pA * pB)}\\): ${indep ? "equal, so A and B are independent — knowing one does not change the probability of the other." : "not equal, so A and B are not independent."} Type in the table to try other counts (e.g. 15, 10, 15, 10 is independent).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 8.4 tree diagrams */

export function IBTree({ init = [5, 3] }: { init?: [number, number] }) {
  const [r, setR] = useState(init[0]), [b, setB] = useState(init[1]), [rep, setRep] = useState<"with" | "without">("without");
  const n = r + b, n2nd = rep === "with" ? n : n - 1;
  const p = { R: [r, n], B: [b, n] } as Record<string, [number, number]>;
  const second = (first: "R" | "B"): Record<string, [number, number]> => rep === "with" ? { R: [r, n], B: [b, n] } : { R: [first === "R" ? r - 1 : r, n2nd], B: [first === "B" ? b - 1 : b, n2nd] };
  const out = (["R", "B"] as const).flatMap((f) => (["R", "B"] as const).map((s) => { const [p1, q1] = p[f], [p2, q2] = second(f)[s]; return { f, s, num: p1 * p2, den: q1 * q2 }; }));
  const pSame = (out[0].num + out[3].num) / out[0].den, pOneR = 1 - out[3].num / out[3].den;
  const W = 460, H = 210, x0 = 20, x1 = 150, x2 = 300, ys1 = [60, 150], ys2 = [30, 90, 120, 180];
  return (
    <WidgetCard title="Tree diagrams" subtitle="multiply along the branches; add the end results you need; without replacement the second-stage probabilities change">
      <Row>
        <Slider label="red counters" value={r} min={1} max={8} onChange={setR} color={C.red} />
        <Slider label="blue counters" value={b} min={1} max={8} onChange={setB} color={C.blue} />
      </Row>
      <Row><Segmented label="second draw:" value={rep} onChange={setRep} options={[{ value: "without", label: "without replacement" }, { value: "with", label: "with replacement" }]} /></Row>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", maxWidth: 560, display: "block", margin: "8px auto" }} role="img" aria-label="Tree diagram">
        {(["R", "B"] as const).map((f, i) => <g key={f}>
          <line x1={x0} y1={105} x2={x1} y2={ys1[i]} stroke={C.violet} strokeWidth={2.2} />
          <text x={80} y={(105 + ys1[i]) / 2 + (i ? 18 : -6)} fontSize={13} fontWeight={700} fill={C.blue} textAnchor="middle">{p[f][0]}/{p[f][1]}</text>
          <text x={x1 + 6} y={ys1[i] + 5} fontSize={15} fontWeight={700} fill={f === "R" ? C.red : C.blue}>{f}</text>
          {(["R", "B"] as const).map((s, j) => { const y2 = ys2[i * 2 + j], [a2, b2] = second(f)[s], o = out[i * 2 + j]; return <g key={s}>
            <line x1={x1 + 24} y1={ys1[i]} x2={x2} y2={y2} stroke={C.violet} strokeWidth={2.2} />
            <text x={(x1 + 24 + x2) / 2} y={(ys1[i] + y2) / 2 + (j ? 16 : -6)} fontSize={13} fontWeight={700} fill={C.blue} textAnchor="middle">{a2}/{b2}</text>
            <text x={x2 + 6} y={y2 + 5} fontSize={15} fontWeight={700} fill={s === "R" ? C.red : C.blue}>{s}</text>
            <text x={x2 + 40} y={y2 + 5} fontSize={13} fill={C.muted}>{f}{s}: {o.num}/{o.den}</text>
          </g>; })}
        </g>)}
      </svg>
      <Readout tone="blue">
        <MathText html={`\\(P(RR)=${frac(out[0].num, out[0].den)}\\), \\(P(RB)=${frac(out[1].num, out[1].den)}\\), \\(P(BR)=${frac(out[2].num, out[2].den)}\\), \\(P(BB)=${frac(out[3].num, out[3].den)}\\) (they add to 1). Same colour: \\(P(RR)+P(BB)\\approx${n2(pSame)}\\). At least one red: \\(1-P(BB)\\approx${n2(pOneR)}\\). ${rep === "without" ? "Without replacement the second draw depends on the first (dependent events)." : "With replacement the draws are independent."}`} />
      </Readout>
    </WidgetCard>
  );
}
