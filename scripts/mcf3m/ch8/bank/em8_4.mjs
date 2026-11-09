// 8.4 Finding the Interest Rate and the Time — 20 easy + 20 medium
import { S, mc, ms, num, tf, fill, n2, FREQ, firstN, timelineSvg, fDoc, P } from "./fk.mjs";
const rate = (ratio, n, m) => (ratio ** (1 / n) - 1) * m * 100;
const tl = timelineSvg({ n: 4, unit: "years", flows: [{ at: 0, label: "5000", up: false }, { at: 4, label: "6077.53" }] });

const easyR = [[1000, 1102.5, 2], [2000, 2662, 3], [500, 583.2, 2], [4000, 4840, 2]];
const easyT = [[0.1, 1.6], [0.05, 1.2], [0.08, 1.5], [0.06, 1.4]];
const medR = [[3000, 3900, 12, 5], [7000, 9100, 4, 6], [1500, 2000, 2, 7], [12000, 15000, 12, 4]];
const medT = [[0.004, 1.25, "months"], [0.0125, 1.5, "quarters"], [0.03, 1.8, "half-years"], [0.0035, 1.1, "months"]];

export const E = [
  ...easyR.map(([p, a, n]) => n2(S`${p} dollars grew to ${a} dollars in ${n} years, compounded annually. Find the rate (percent).`, rate(a / p, n, 1), "(A/P)^(1/n) − 1.")),
  ...easyT.map(([i, k]) => num(S`At $${+(i * 100).toFixed(2)}\%$ compounded annually, how many whole years until money first grows to at least ${k} times its value?`, firstN((n) => (1 + i) ** n >= k), "Try whole years.")),
  num(S`Use the rule of 72 to estimate the doubling time at $9\%$.`, 8, "72/9."),
  num(S`Use the rule of 72 to estimate the doubling time at $4\%$.`, 18, "72/4."),
  num(S`A rate per month is $0.5\%$. What is the annual rate (percent)?`, 6, "12 × 0.5."),
  num(S`A rate per quarter is $1.2\%$. What is the annual rate (percent)?`, 4.8, "4 × 1.2.", null, 0.001),
  mc("To find the rate, after computing (A/P)^(1/n) you …", "subtract 1", ["add 1", "multiply by n", "divide by A"], "1 + i."),
  mc("The number of periods n is found by …", "systematic trial or a graph", ["taking a root", "dividing r by m", "subtracting P"], "n is in the exponent."),
  tf("Time should be rounded up to the next whole compounding period.", true, "Interest arrives at period end."),
  tf("The rule of 72 gives exact doubling times.", false, "An estimate."),
  fill("To convert quarters to years, divide by ____.", ["4"], "4 quarters per year."),
  mc("The timeline shows 5000 growing to 6077.53 in 4 years, compounded annually. Which is the rate?", "5%", ["4%", "6%", "21.6%"], "1.2155^(1/4) − 1.", tl),
  n2("For the timeline, enter the growth ratio A/P.", 6077.53 / 5000, "6077.53/5000.", tl),
  num(S`Use the rule of 72 to estimate the doubling time at $12\%$.`, 6, "72/12."),
];

export const M = [
  ...medR.map(([p, a, m, t]) => n2(S`${p} dollars grew to ${a} dollars in ${t} years, compounded ${FREQ[m]}. Find the annual rate (percent).`, rate(a / p, m * t, m), `n = ${m * t}; r = ${m}i.`)),
  ...medT.map(([i, k, u]) => num(S`At a rate of $${+(i * 100).toFixed(3)}\%$ per ${u.slice(0, -1)}, how many whole ${u} until money first grows by a factor of ${k}?`, firstN((n) => (1 + i) ** n >= k), "Trial.")),
  n2(S`What annual rate compounded annually doubles money in exactly $9$ years (percent)?`, rate(2, 9, 1), "2^(1/9) − 1."),
  n2(S`What annual rate compounded monthly doubles money in exactly $10$ years (percent)?`, rate(2, 120, 12), "12(2^(1/120) − 1)."),
  num(S`How many whole quarters until 2000 dollars reaches 3000 dollars at $6\%$ compounded quarterly?`, firstN((n) => 1.015 ** n >= 1.5), "1.015ⁿ ≥ 1.5."),
  num(S`Convert $${firstN((n) => 1.015 ** n >= 1.5)}$ quarters to years (decimal).`, firstN((n) => 1.015 ** n >= 1.5) / 4, "÷ 4.", null, 0.001),
  mc("The graph shows 1000 dollars at 7% compounded annually and the line A = 2000. In which year is the line first passed?", "year 11", ["year 7", "year 10", "year 14"], "1.07¹⁰ ≈ 1.967.", fDoc([{ f: (t) => 1000 * 1.07 ** t, color: "violet" }], { view: { xmin: 0, xmax: 14, ymin: 900, ymax: 2700 }, step: { x: 1, y: 200 }, lines: [{ m: 0, b: 2000, color: "green", dash: true }] })),
  num("For that graph, enter the rule-of-72 estimate of the doubling time (two decimals).", 10.29, "72/7.", fDoc([{ f: (t) => 1000 * 1.07 ** t, color: "violet" }], { view: { xmin: 0, xmax: 14, ymin: 900, ymax: 2700 }, step: { x: 1, y: 200 } }), 0.011),
  ms("Select every correct step to find an annual rate compounded monthly.", ["divide A by P", "take the root with index n = 12t", "subtract 1", "multiply by 12", "divide by t"], [0, 1, 2, 3], "No division by t."),
  tf(S`If $(1+i)^{20}=1.5$, then $i=1.5^{0.05}-1$.`, true, "1/20 = 0.05."),
  fill(S`If $1+i=1.004$ per month, the annual rate is ____ percent.`, ["4.8"], "12 × 0.4."),
  n2(S`An investment triples in $12$ years compounded annually. Find the rate (percent).`, rate(3, 12, 1), "3^(1/12) − 1."),
  n2(S`900 dollars grew to 1000 dollars in $2$ years compounded quarterly. Find the annual rate (percent).`, rate(1000 / 900, 8, 4), "n = 8."),
  num(S`How many whole years for 2500 dollars to reach 4000 dollars at $5.5\%$ compounded annually?`, firstN((n) => 1.055 ** n >= 1.6), "1.055ⁿ ≥ 1.6."),
];
