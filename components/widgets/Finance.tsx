"use client";

// Chapter 7 (financial literacy) explorers: comparing two cost plans, inflation and purchasing power,
// appreciation and depreciation over time, simple vs compound interest, paying off a credit card, and a budget.

import { useState, type ReactNode } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";

const money = (v: number) => (v < 0 ? "−" : "") + "$" + Math.abs(v).toLocaleString("en-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const texMoney = (v: number) => `\\$${Math.abs(v).toLocaleString("en-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/,/g, "{,}")}`;
const r2 = (v: number, d = 2) => { const k = 10 ** d; return String(Math.round(v * k) / k); };

/** chart with separate x/y scales; children get mappers */
function Chart({ x0, x1, y0, y1, label, xTicks, yTicks, xLabel, yLabel, yFmt = (v: number) => String(v), children, h = 290 }: { x0: number; x1: number; y0: number; y1: number; label: string; xTicks: number[]; yTicks: number[]; xLabel?: string; yLabel?: string; yFmt?: (v: number) => string; children: (X: (x: number) => number, Y: (y: number) => number) => ReactNode; h?: number }) {
  const w = 540, PL = 62, PR = 14, PT = 12, PB = 36, W = w - PL - PR, H = h - PT - PB;
  const X = (x: number) => PL + ((x - x0) / (x1 - x0)) * W, Y = (y: number) => PT + H - ((y - y0) / (y1 - y0)) * H;
  const id = `fc-${label.replace(/\W/g, "")}`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", maxWidth: w + 40, display: "block", margin: "8px auto" }} role="img" aria-label={label}>
      <rect width={w} height={h} fill="#fff" />
      {yTicks.map((t) => <g key={"y" + t}><line x1={PL} y1={Y(t)} x2={PL + W} y2={Y(t)} stroke="#eef2f7" /><text x={PL - 6} y={Y(t) + 4} fontSize={11} textAnchor="end" fill={C.muted}>{yFmt(t)}</text></g>)}
      {xTicks.map((t) => <text key={"x" + t} x={X(t)} y={PT + H + 15} fontSize={11} textAnchor="middle" fill={C.muted}>{t}</text>)}
      <line x1={PL} y1={PT + H} x2={PL + W} y2={PT + H} stroke={C.ink} /><line x1={PL} y1={PT} x2={PL} y2={PT + H} stroke={C.ink} />
      {xLabel && <text x={PL + W} y={h - 4} fontSize={12} fontWeight={700} textAnchor="end" fill={C.ink}>{xLabel}</text>}
      {yLabel && <text x={PL + 4} y={PT + 11} fontSize={12} fontWeight={700} fill={C.ink}>{yLabel}</text>}
      <defs><clipPath id={id}><rect x={PL} y={PT} width={W} height={H} /></clipPath></defs>
      <g clipPath={`url(#${id})`}>{children(X, Y)}</g>
    </svg>
  );
}
const ticks = (a: number, b: number, n = 5) => { const raw = (b - a) / n, p = 10 ** Math.floor(Math.log10(raw)), s = [1, 2, 2.5, 5, 10].map((m) => m * p).find((m) => m >= raw) ?? raw; const t: number[] = []; for (let v = Math.ceil(a / s) * s; v <= b + 1e-9; v += s) t.push(+v.toFixed(6)); return t; };
const kfmt = (v: number) => (Math.abs(v) >= 1000 ? `$${r2(v / 1000, 1)}k` : `$${r2(v, 0)}`);

/* ---------------------------------------------------------------- 7.1 comparing two plans */

export function PlanCompare() {
  const [fa, setFa] = useState(40), [ra, setRa] = useState(0);
  const [fb, setFb] = useState(15), [rb, setRb] = useState(0.5);
  const [x, setX] = useState(30);
  const xmax = 100, ca = (u: number) => fa + ra * u, cb = (u: number) => fb + rb * u;
  const be = ra !== rb ? (fb - fa) / (ra - rb) : NaN;
  const top = Math.max(ca(xmax), cb(xmax), ca(0), cb(0)) * 1.1;
  const cheaper = ca(x) < cb(x) ? "A" : ca(x) > cb(x) ? "B" : "either";
  const eq = (f: number, r: number) => (r === 0 ? `C=${f}` : f === 0 ? `C=${r2(r)}x` : `C=${r2(r)}x+${f}`);
  return (
    <WidgetCard title="Compare two plans" subtitle="cost = fixed fee + rate × usage; where the lines cross, the plans cost the same">
      <Row><Slider label="A: fixed fee" value={fa} min={0} max={80} onChange={setFa} color={C.blue} format={(v) => `$${v}`} /><Slider label="A: per GB" value={ra} min={0} max={2} step={0.05} onChange={setRa} color={C.blue} format={(v) => `$${r2(v)}`} /></Row>
      <Row><Slider label="B: fixed fee" value={fb} min={0} max={80} onChange={setFb} color={C.red} format={(v) => `$${v}`} /><Slider label="B: per GB" value={rb} min={0} max={2} step={0.05} onChange={setRb} color={C.red} format={(v) => `$${r2(v)}`} /></Row>
      <Row><Slider label="usage (GB)" value={x} min={0} max={xmax} onChange={setX} color={C.amber} /></Row>
      <Chart x0={0} x1={xmax} y0={0} y1={top} label="Cost of two plans" xTicks={ticks(0, xmax)} yTicks={ticks(0, top)} xLabel="usage (GB)" yLabel="monthly cost" yFmt={(v) => `$${v}`}>
        {(X, Y) => (
          <>
            <line x1={X(0)} y1={Y(ca(0))} x2={X(xmax)} y2={Y(ca(xmax))} stroke={C.blue} strokeWidth={3} />
            <line x1={X(0)} y1={Y(cb(0))} x2={X(xmax)} y2={Y(cb(xmax))} stroke={C.red} strokeWidth={3} />
            {be > 0 && be < xmax && <circle cx={X(be)} cy={Y(ca(be))} r={6} fill={C.green} />}
            <line x1={X(x)} y1={Y(0)} x2={X(x)} y2={Y(top)} stroke={C.amber} strokeDasharray="4 3" />
          </>
        )}
      </Chart>
      <Readout tone="green">
        <MathText html={`A: \\(${eq(fa, ra)}\\) costs \\(${texMoney(ca(x))}\\); B: \\(${eq(fb, rb)}\\) costs \\(${texMoney(cb(x))}\\) at ${x} GB — <strong>${cheaper === "either" ? "the same" : `plan ${cheaper} is cheaper`}</strong>. ${Number.isFinite(be) && be > 0 ? `Break-even: \\(${fa}+${r2(ra)}x=${fb}+${r2(rb)}x\\Rightarrow x\\approx${r2(be, 1)}\\) GB (both \\(${texMoney(ca(be))}\\)).` : "The lines do not cross for positive usage, so one plan is always cheaper."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 7.1 inflation */

export function InflationCalc() {
  const [price, setPrice] = useState(100);
  const [rate, setRate] = useState(3);
  const [years, setYears] = useState(20);
  const f = 1 + rate / 100;
  const later = price * f ** years, power = price / f ** years;
  const pts = Array.from({ length: years + 1 }, (_, t) => price * f ** t);
  const top = Math.max(...pts) * 1.1;
  return (
    <WidgetCard title="Inflation" subtitle="prices rise by a percentage each year, so the same money buys less">
      <Row><Slider label="price today" value={price} min={10} max={500} step={10} onChange={setPrice} format={(v) => `$${v}`} /><Slider label="inflation" value={rate} min={0.5} max={10} step={0.5} onChange={setRate} color={C.red} format={(v) => `${v}%`} /><Slider label="years" value={years} min={1} max={40} onChange={setYears} color={C.violet} /></Row>
      <Chart x0={0} x1={years} y0={0} y1={top} label="Price over time" xTicks={ticks(0, years)} yTicks={ticks(0, top)} xLabel="years" yLabel="price" yFmt={kfmt}>
        {(X, Y) => <>{pts.map((p, t) => <rect key={t} x={X(t) - 4} y={Y(p)} width={8} height={Y(0) - Y(p)} fill={t === years ? C.red : C.redSoft} stroke={C.red} strokeWidth={0.5} />)}</>}
      </Chart>
      <Readout tone="amber">
        <MathText html={`An item costing \\(${texMoney(price)}\\) today costs about \\(${texMoney(price)}(${r2(f, 3)})^{${years}}\\approx${texMoney(later)}\\) in ${years} years. Put the other way, \\(${texMoney(price)}\\) then will buy only what \\(${texMoney(power)}\\) buys today. Savings must earn at least the inflation rate just to keep their value.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 7.2 appreciation and depreciation */

export function ValueTimeline() {
  const [mode, setMode] = useState<"dep" | "app">("dep");
  const [v0, setV0] = useState(30000);
  const [rate, setRate] = useState(15);
  const [years, setYears] = useState(8);
  const r = rate / 100, sign = mode === "app" ? 1 : -1;
  const expo = (t: number) => v0 * (1 + sign * r) ** t;
  const lin = (t: number) => Math.max(0, v0 + sign * r * v0 * t);
  const top = Math.max(expo(years), lin(years), v0) * 1.1;
  return (
    <WidgetCard title="Value over time" subtitle="a percentage change each year compounds; a fixed dollar change does not">
      <Segmented options={[{ value: "dep", label: "depreciation (loses value)" }, { value: "app", label: "appreciation (gains value)" }]} value={mode} onChange={(m) => { setMode(m); setV0(m === "dep" ? 30000 : 400000); setRate(m === "dep" ? 15 : 5); }} />
      <Row style={{ marginTop: 8 }}>
        <Slider label="start value" value={v0} min={mode === "dep" ? 1000 : 50000} max={mode === "dep" ? 60000 : 900000} step={mode === "dep" ? 1000 : 10000} onChange={setV0} format={kfmt} />
        <Slider label="rate per year" value={rate} min={1} max={mode === "dep" ? 40 : 15} onChange={setRate} color={mode === "dep" ? C.red : C.green} format={(v) => `${v}%`} />
        <Slider label="years" value={years} min={1} max={20} onChange={setYears} color={C.violet} />
      </Row>
      <Chart x0={0} x1={years} y0={0} y1={top} label="Value over time" xTicks={ticks(0, years)} yTicks={ticks(0, top)} xLabel="years" yLabel="value" yFmt={kfmt}>
        {(X, Y) => (
          <>
            <polyline points={Array.from({ length: 81 }, (_, i) => { const t = (years * i) / 80; return `${X(t)},${Y(lin(t))}`; }).join(" ")} fill="none" stroke={C.faint} strokeWidth={2.5} strokeDasharray="6 4" />
            <polyline points={Array.from({ length: 81 }, (_, i) => { const t = (years * i) / 80; return `${X(t)},${Y(expo(t))}`; }).join(" ")} fill="none" stroke={mode === "dep" ? C.red : C.green} strokeWidth={3} />
            {Array.from({ length: years + 1 }, (_, t) => <circle key={t} cx={X(t)} cy={Y(expo(t))} r={4} fill={mode === "dep" ? C.red : C.green} />)}
          </>
        )}
      </Chart>
      <Readout tone={mode === "dep" ? "amber" : "green"}>
        <MathText html={`\\(V=${texMoney(v0)}(1${mode === "dep" ? "-" : "+"}${r2(r)})^{t}\\): after ${years} years \\(V\\approx${texMoney(expo(years))}\\). The dashed line shows a fixed change of \\(${texMoney(r * v0)}\\) per year instead (straight-line): \\(${texMoney(lin(years))}\\). ${mode === "dep" ? "A percentage loss takes less each year because it is a percent of a smaller value, so the value never quite reaches zero." : "A percentage gain adds more each year because it is a percent of a larger value."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 7.3 simple vs compound interest */

export function InterestGrowth() {
  const [P, setP] = useState(1000);
  const [rate, setRate] = useState(6);
  const [years, setYears] = useState(20);
  const [n, setN] = useState(1);
  const r = rate / 100;
  const simple = (t: number) => P * (1 + r * t), comp = (t: number) => P * (1 + r / n) ** (n * t);
  const top = comp(years) * 1.1;
  return (
    <WidgetCard title="Simple vs compound interest" subtitle="simple: interest on the principal only; compound: interest on interest too">
      <Row><Slider label="principal" value={P} min={100} max={10000} step={100} onChange={setP} format={(v) => `$${v}`} /><Slider label="rate per year" value={rate} min={1} max={20} step={0.5} onChange={setRate} color={C.red} format={(v) => `${v}%`} /></Row>
      <Row><Slider label="years" value={years} min={1} max={40} onChange={setYears} color={C.violet} />
        <Segmented label="compounded" options={[{ value: 1, label: "yearly" }, { value: 2, label: "semi-annually" }, { value: 4, label: "quarterly" }, { value: 12, label: "monthly" }]} value={n} onChange={setN} /></Row>
      <Chart x0={0} x1={years} y0={0} y1={top} label="Simple and compound growth" xTicks={ticks(0, years)} yTicks={ticks(0, top)} xLabel="years" yLabel="amount" yFmt={kfmt}>
        {(X, Y) => (
          <>
            <line x1={X(0)} y1={Y(simple(0))} x2={X(years)} y2={Y(simple(years))} stroke={C.blue} strokeWidth={3} />
            <polyline points={Array.from({ length: 121 }, (_, i) => { const t = (years * i) / 120; return `${X(t)},${Y(comp(t))}`; }).join(" ")} fill="none" stroke={C.green} strokeWidth={3} />
          </>
        )}
      </Chart>
      <Readout tone="green">
        <MathText html={`Simple: \\(A=P(1+rt)=${P}(1+${r2(r)}\\times${years})=${texMoney(simple(years))}\\). Compound: \\(A=P\\left(1+\\frac{r}{n}\\right)^{nt}=${P}\\left(1+\\frac{${r2(r)}}{${n}}\\right)^{${n * years}}\\approx${texMoney(comp(years))}\\). Compounding earns \\(${texMoney(comp(years) - simple(years))}\\) more. More frequent compounding adds a little more each time.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 7.3 paying off a credit card */

export function CreditPayoff() {
  const [bal, setBal] = useState(2000);
  const [apr, setApr] = useState(19.99);
  const [pay, setPay] = useState(80);
  const i = apr / 100 / 12;
  let b = bal, months = 0, interest = 0;
  const path: number[] = [b];
  while (b > 0.005 && months < 600) { const int = b * i; if (pay <= int) { months = Infinity; break; } interest += int; b = b + int - pay; months++; if (b < 0) b = 0; path.push(b); }
  const minPay = bal * i;
  return (
    <WidgetCard title="Paying off a credit card" subtitle="interest is charged monthly on the balance you still owe">
      <Row><Slider label="balance" value={bal} min={200} max={10000} step={100} onChange={setBal} format={(v) => `$${v}`} /><Slider label="interest (APR)" value={apr} min={5} max={30} step={0.5} onChange={setApr} color={C.red} format={(v) => `${v}%`} /></Row>
      <Row><Slider label="monthly payment" value={pay} min={20} max={1000} step={10} onChange={setPay} color={C.green} format={(v) => `$${v}`} /></Row>
      {Number.isFinite(months) ? (
        <Chart x0={0} x1={Math.max(12, months)} y0={0} y1={bal * 1.05} label="Balance owed over time" xTicks={ticks(0, Math.max(12, months))} yTicks={ticks(0, bal * 1.05)} xLabel="months" yLabel="balance" yFmt={kfmt}>
          {(X, Y) => <polyline points={path.map((v, t) => `${X(t)},${Y(v)}`).join(" ")} fill="none" stroke={C.red} strokeWidth={3} />}
        </Chart>
      ) : <div style={{ padding: 16, textAlign: "center", color: C.red, fontWeight: 700 }}>The payment does not even cover the monthly interest — the balance will never go down.</div>}
      <Readout tone={Number.isFinite(months) && interest < bal * 0.3 ? "green" : "red"}>
        <MathText html={Number.isFinite(months) ? `Monthly rate \\(=${r2(apr)}\\%\\div12\\approx${r2(apr / 12, 3)}\\%\\). First month's interest \\(\\approx${texMoney(minPay)}\\). Paying \\(${texMoney(pay)}\\) a month takes <strong>${months} months</strong> (${r2(months / 12, 1)} years) and costs \\(${texMoney(interest)}\\) in interest — you repay \\(${texMoney(bal + interest)}\\) in total. Raise the payment to see how much interest you save.` : `The interest in the first month is about \\(${texMoney(minPay)}\\), more than the payment.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 7.4 budget */

const ITEMS: { key: string; label: string; kind: "need" | "want" | "save"; init: number }[] = [
  { key: "rent", label: "housing", kind: "need", init: 650 }, { key: "food", label: "groceries", kind: "need", init: 320 }, { key: "transit", label: "transportation", kind: "need", init: 130 }, { key: "phone", label: "phone & internet", kind: "need", init: 90 },
  { key: "fun", label: "entertainment", kind: "want", init: 180 }, { key: "eat", label: "eating out", kind: "want", init: 140 }, { key: "save", label: "savings", kind: "save", init: 200 },
];
export function BudgetBuilder() {
  const [income, setIncome] = useState(1900);
  const [v, setV] = useState<Record<string, number>>(Object.fromEntries(ITEMS.map((i) => [i.key, i.init])));
  const total = ITEMS.reduce((s, i) => s + v[i.key], 0);
  const by = (k: string) => ITEMS.filter((i) => i.kind === k).reduce((s, i) => s + v[i.key], 0);
  const left = income - total;
  const parts = [["needs", by("need"), C.blue, 50], ["wants", by("want"), C.amber, 30], ["savings", by("save"), C.green, 20]] as const;
  return (
    <WidgetCard title="Build a monthly budget" subtitle="needs, wants and savings compared with the 50/30/20 guideline">
      <Row><Slider label="net income" value={income} min={800} max={4000} step={50} onChange={setIncome} color={C.green} format={(x) => `$${x}`} /></Row>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "4px 16px", marginTop: 8 }}>
        {ITEMS.map((it) => <Slider key={it.key} label={it.label} value={v[it.key]} min={0} max={1200} step={10} onChange={(x) => setV({ ...v, [it.key]: x })} color={it.kind === "need" ? C.blue : it.kind === "want" ? C.amber : C.green} format={(x) => `$${x}`} />)}
      </div>
      <div style={{ display: "flex", height: 34, borderRadius: 8, overflow: "hidden", border: `1px solid ${C.line}`, margin: "14px 0 6px" }}>
        {parts.map(([name, amt, col]) => <div key={name} style={{ width: `${(amt / Math.max(income, total)) * 100}%`, background: col, color: "#fff", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", whiteSpace: "nowrap", overflow: "hidden" }}>{amt > 0 ? name : ""}</div>)}
        {left > 0 && <div style={{ width: `${(left / income) * 100}%`, background: C.panel, color: C.muted, fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>left</div>}
      </div>
      <table style={{ borderCollapse: "collapse", margin: "8px auto", fontSize: 14 }}>
        <tbody>
          <tr>{["", "amount", "% of income", "guideline"].map((t) => <th key={t} style={{ padding: "3px 10px", background: C.panel, border: `1px solid ${C.line}` }}>{t}</th>)}</tr>
          {parts.map(([name, amt, col, g]) => <tr key={name}><td style={{ padding: "3px 10px", border: `1px solid ${C.line}`, color: col, fontWeight: 700 }}>{name}</td><td style={{ padding: "3px 10px", border: `1px solid ${C.line}` }}>{money(amt)}</td><td style={{ padding: "3px 10px", border: `1px solid ${C.line}` }}>{r2((amt / income) * 100, 1)}%</td><td style={{ padding: "3px 10px", border: `1px solid ${C.line}` }}>{g}% = {money((income * g) / 100)}</td></tr>)}
        </tbody>
      </table>
      <Readout tone={left >= 0 ? "green" : "red"}>
        <MathText html={`Expenses \\(=${texMoney(total)}\\). ${left >= 0 ? `Surplus \\(=${texMoney(income)}-${texMoney(total)}=${texMoney(left)}\\) — the budget balances.` : `<strong>Deficit</strong> of \\(${texMoney(-left)}\\): cut wants first, or find more income.`} Try a change in circumstances: rent goes up $150, or income drops to part-time.`} />
      </Readout>
    </WidgetCard>
  );
}
