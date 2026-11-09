// 8.5 Annuities: Future Value — 20 hard questions
import { S, mc, ms, num, tf, n2, FVa, SINK, A, firstN, timelineSvg, fDoc, P, pays } from "./fk.mjs";

export const TOPIC = "8.5 Annuities: Future Value";
export const Q = [
  n2(S`Lina deposits 200 dollars a month for $5$ years at $4.8\%$ compounded monthly, then leaves the money for $5$ more years. Find the final value.`, FVa(200, 0.004, 60) * 1.004 ** 60, "FV, then grow.", timelineSvg({ n: 10, unit: "years", flows: [{ at: 5, label: "FV₁", up: false }, { at: 10, label: "?" }] })),
  n2(S`Jon deposits 200 dollars a month only during years $6$–$10$ at the same rate. Find his value at year $10$.`, FVa(200, 0.004, 60), "One FV."),
  n2(S`How much more does Lina have than Jon at year $10$?`, FVa(200, 0.004, 60) * (1.004 ** 60 - 1), "Difference."),
  n2(S`Ravi has 5000 dollars and wants 30000 dollars in $8$ years at $5.4\%$ compounded monthly. What monthly deposit does he need?`, SINK(30000 - A(5000, 0.0045, 96), 0.0045, 96), "Grow the lump sum first.", fDoc([{ f: (t) => A(5000, 0.0045, 12 * t), color: "green" }], { view: { xmin: 0, xmax: 8.5, ymin: 0, ymax: 32000 }, step: { x: 1, y: 4000 }, lines: [{ m: 0, b: 30000, color: "red", dash: true }] })),
  num(S`How many monthly deposits of 250 dollars at $6\%$ compounded monthly first reach 20000 dollars?`, firstN((n) => n > 0 && FVa(250, 0.005, n) >= 20000), "Trial."),
  n2(S`Find the FV of 1200 dollars a year for $40$ years at $7\%$ compounded annually.`, FVa(1200, 0.07, 40), "Calculator."),
  n2(S`For that annuity, what fraction (percent) of the FV is interest?`, (1 - 48000 / FVa(1200, 0.07, 40)) * 100, "1 − deposits/FV."),
  mc("The graph shows 100 dollars a month at 4% (green) and 8% (violet) compounded monthly. After 30 years, the 8% balance is about …", "about 2.1 times the 4% balance", ["about 3 times", "the same", "half"], "Compute both.", fDoc([{ f: (t) => FVa(100, 0.04 / 12, 12 * t), color: "green" }, { f: (t) => FVa(100, 0.08 / 12, 12 * t), color: "violet" }], { view: { xmin: 0, xmax: 30, ymin: 0, ymax: 160000 }, step: { x: 5, y: 20000 } })),
  n2("Enter the ratio of the 8% balance to the 4% balance at 30 years (two decimals).", FVa(100, 0.08 / 12, 360) / FVa(100, 0.04 / 12, 360), "Divide."),
  ms("Select every TRUE statement.", ["FV of an annuity grows faster than linearly in time", "the first deposit earns interest for n − 1 periods", "doubling the rate doubles the FV", "the payment needed for a goal falls if the term grows"], [0, 1, 3], "Rate effect is not proportional."),
  tf(S`A sinking-fund payment is found by rearranging the FV-of-an-annuity formula.`, true, "R = FV·i/[(1 + i)ⁿ − 1]."),
  n2(S`Two plans for 15 years at $5\%$ compounded annually: 1000 dollars a year, or 15000 dollars once at the start. Enter (lump-sum value) − (annuity value).`, A(15000, 0.05, 15) - FVa(1000, 0.05, 15), "Compare FVs."),
  n2(S`What quarterly deposit at $4.4\%$ compounded quarterly grows to 60000 dollars in $12$ years?`, SINK(60000, 0.011, 48), "Sinking fund."),
  n2(S`Mei saves 80 dollars a week for $3$ years at $2.6\%$ compounded weekly (52 per year). Find the FV.`, FVa(80, 0.0005, 156), "i = 0.0005."),
  num("The timeline shows 5 deposits of 1000 at 10%. Enter the FV.", 6105.1, "1000(1.1⁵ − 1)/0.1.", timelineSvg({ n: 5, unit: "years", flows: [...pays(5, "1000"), { at: 5, label: "FV" }] }), 0.011),
  n2(S`Deposits of 300 dollars a month at $6\%$ compounded monthly. How much interest is earned in the $10$th year alone?`, (FVa(300, 0.005, 120) - FVa(300, 0.005, 108)) - 3600, "Growth in year 10 minus that year's deposits."),
  n2(S`What annual deposit for $25$ years at $6\%$ compounded annually reaches one million dollars?`, SINK(1e6, 0.06, 25), "Sinking fund."),
  num(S`What is the smallest whole number of years of 5000 dollar annual deposits at $5\%$ to reach 100000 dollars?`, firstN((n) => n > 0 && FVa(5000, 0.05, n) >= 100000), "Trial."),
  n2(S`Find the FV of 500 dollars a quarter for $6$ years at $7.2\%$ compounded quarterly.`, FVa(500, 0.018, 24), "i = 0.018, n = 24."),
  n2(S`A plan: 2000 dollars now plus 100 dollars a month for $10$ years at $3.6\%$ compounded monthly. Find the FV.`, A(2000, 0.003, 120) + FVa(100, 0.003, 120), "Lump sum + annuity."),
];
