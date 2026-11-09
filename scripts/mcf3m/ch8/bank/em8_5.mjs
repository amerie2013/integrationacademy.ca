// 8.5 Annuities: Future Value — 20 easy + 20 medium
import { S, mc, ms, num, tf, fill, n2, FVa, SINK, FREQ, timelineSvg, fDoc, P, pays } from "./fk.mjs";
const tl = timelineSvg({ n: 3, unit: "years", flows: [...pays(3, "500"), { at: 3, label: "FV = ?" }] });
const easy = [[600, 0.05, 1, 3], [1000, 0.04, 1, 4], [200, 0.06, 12, 1], [300, 0.04, 4, 2], [250, 0.08, 2, 3], [100, 0.024, 12, 2]];
const med = [[175, 0.045, 12, 6], [900, 0.052, 4, 8], [2500, 0.06, 1, 15], [60, 0.036, 12, 10], [1400, 0.07, 2, 9]];

export const E = [
  ...easy.map(([R, r, m, t]) => n2(S`Find the future value of ${R} dollars deposited at the end of each ${{ 1: "year", 2: "half-year", 4: "quarter", 12: "month" }[m]} for ${t} years at $${+(r * 100).toFixed(2)}\%$ compounded ${FREQ[m]}.`, FVa(R, r / m, m * t), "R[(1 + i)ⁿ − 1]/i.")),
  num(S`Total deposited: 50 dollars a month for $3$ years.`, 1800, "36 × 50."),
  num(S`Number of payments: quarterly for $11$ years.`, 44, "4 × 11."),
  mc("In an ordinary annuity, payments are made …", "at the end of each period", ["at the start", "only once", "every other period"], "Definition."),
  mc("Which payment of an ordinary annuity earns the most interest?", "the first", ["the last", "the middle", "all equal"], "Longest time."),
  tf("In an ordinary annuity the last payment earns no interest.", true, "Made at the end."),
  tf("The future value of an annuity equals the number of payments times the payment.", false, "Plus interest."),
  fill("A series of equal payments at equal intervals is an ____.", ["annuity"], "Annuity."),
  mc("The timeline shows 500 dollars at the end of each year for 3 years at 4%. Which sum is the FV?", "500(1.04)² + 500(1.04) + 500", ["500(1.04)³ × 3", "1500(1.04)³", "500 + 500 + 500"], "Each grows for its own time.", tl),
  n2("Evaluate the FV for the timeline.", FVa(500, 0.04, 3), "1560.80.", tl),
  num(S`Interest earned when deposits total 6000 and the FV is 6750 dollars.`, 750, "FV − nR."),
  num(S`Find $i$ and enter it: monthly payments at $5.4\%$ compounded monthly.`, 0.0045, "0.054/12.", null, 0.00001),
  n2(S`Evaluate $\frac{1.05^{2}-1}{0.05}$.`, 2.05, "(1.1025 − 1)/0.05."),
  n2(S`Find the future value of 75 dollars at the end of each month for $1$ year at $6\%$ compounded monthly.`, FVa(75, 0.005, 12), "n = 12."),
  num(S`Number of payments: semi-annual deposits for $8$ years.`, 16, "2 × 8."),
];

export const M = [
  ...med.map(([R, r, m, t]) => n2(S`Find the future value of ${R} dollars at the end of each ${{ 1: "year", 2: "half-year", 4: "quarter", 12: "month" }[m]} for ${t} years at $${+(r * 100).toFixed(2)}\%$ compounded ${FREQ[m]}.`, FVa(R, r / m, m * t), "FV formula.")),
  n2(S`Find the interest earned by 175 dollars a month for $6$ years at $4.5\%$ compounded monthly.`, FVa(175, 0.00375, 72) - 175 * 72, "FV − nR."),
  n2(S`What monthly deposit at $3\%$ compounded monthly gives 12000 dollars in $4$ years?`, SINK(12000, 0.0025, 48), "R = FV·i/[(1 + i)ⁿ − 1]."),
  n2(S`What quarterly deposit at $6\%$ compounded quarterly gives 30000 dollars in $7$ years?`, SINK(30000, 0.015, 28), "Sinking fund."),
  n2(S`What yearly deposit at $5\%$ compounded annually gives 50000 dollars in $10$ years?`, SINK(50000, 0.05, 10), "Sinking fund."),
  mc("The graph shows the balance of 100 dollars a month at 6% (violet) and the deposits alone (green). What is the gap?", "the interest earned", ["the deposits", "the rate", "the principal"], "FV − nR.", fDoc([{ f: (t) => FVa(100, 0.005, 12 * t), color: "violet" }, { f: (t) => 1200 * t, color: "green" }], { view: { xmin: 0, xmax: 20, ymin: 0, ymax: 48000 }, step: { x: 2, y: 4000 } })),
  n2("For that graph, enter the interest earned after 20 years.", FVa(100, 0.005, 240) - 24000, "FV − 24 000.", fDoc([{ f: (t) => FVa(100, 0.005, 12 * t) - 1200 * t, color: "violet" }], { view: { xmin: 0, xmax: 20, ymin: 0, ymax: 24000 }, step: { x: 2, y: 2000 }, xlabel: "t", ylabel: "interest" })),
  ms("Select every way to increase an annuity's future value.", ["make larger payments", "save for more years", "earn a higher rate", "make the last payment earlier"], [0, 1, 2], "Last payment timing is fixed in an ordinary annuity."),
  tf(S`Doubling the payment doubles the future value of an annuity.`, true, "FV is proportional to R."),
  tf(S`Doubling the term doubles the future value of an annuity.`, false, "More than doubles."),
  fill(S`The payment for a savings goal is $R=\frac{FV\cdot i}{(1+i)^n-\square}$. The missing number is ____.`, ["1"], "(1 + i)ⁿ − 1."),
  num(S`How many end-of-year deposits of 1000 dollars at $8\%$ compounded annually first reach 10000 dollars?`, (() => { let n = 0; while (FVa(1000, 0.08, n || 1e-9) < 10000 || n === 0) n++; return n; })(), "Trial."),
  n2(S`Find the FV of 40 dollars a week for $2$ years at $5.2\%$ compounded weekly (52 weeks per year).`, FVa(40, 0.001, 104), "i = 0.001, n = 104."),
  n2(S`Saving 400 dollars a month for $3$ years at $3.6\%$ compounded monthly: find the FV.`, FVa(400, 0.003, 36), "n = 36."),
  n2(S`A student deposits 150 dollars at the end of each month for $4$ years at $4.2\%$ compounded monthly. Find the FV.`, FVa(150, 0.0035, 48), "n = 48."),
  n2(S`What monthly deposit at $4.8\%$ compounded monthly gives 5000 dollars in $2$ years?`, SINK(5000, 0.004, 24), "Sinking fund."),
];
