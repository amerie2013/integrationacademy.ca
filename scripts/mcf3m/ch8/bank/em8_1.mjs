// 8.1 Simple and Compound Interest — 20 easy + 20 medium
import { S, mc, ms, num, tf, fill, n2, r2, A, fDoc, P } from "./fk.mjs";
const lin = fDoc([{ f: (t) => 1200 + 60 * t, color: "green" }], { view: { xmin: 0, xmax: 8, ymin: 1000, ymax: 1800 }, step: { x: 1, y: 100 }, points: [P(0, 1200, "(0, 1200)"), P(5, 1500, "(5, 1500)")] });
const two = fDoc([{ f: (t) => 1000 + 80 * t, color: "green" }, { f: (t) => 1000 * 1.08 ** t, color: "violet" }], { view: { xmin: 0, xmax: 15, ymin: 800, ymax: 3500 }, step: { x: 1, y: 250 } });

const si = [[600, 0.05, 2], [1800, 0.03, 5], [4500, 0.02, 3], [2200, 0.045, 4], [950, 0.06, 7], [3000, 0.035, 2]];
const ca = [[1500, 0.04, 2], [2000, 0.03, 3], [800, 0.1, 2], [5000, 0.05, 2]];

export const E = [
  ...si.map(([p, r, t]) => num(S`Find the simple interest on ${p} dollars at $${+(r * 100).toFixed(2)}\%$ per year for ${t} years.`, r2(p * r * t), "I = Prt.", null, 0.011)),
  ...ca.map(([p, r, t]) => n2(S`Find the amount: ${p} dollars at $${+(r * 100).toFixed(2)}\%$ compounded annually for ${t} years.`, A(p, r, t), "P(1 + i)ⁿ.")),
  num(S`Write $3.75\%$ as a decimal.`, 0.0375, "Divide by 100.", null, 0.00001),
  num(S`Write $9$ months as a fraction of a year (decimal).`, 0.75, "9/12.", null, 0.001),
  mc("Simple interest is calculated on …", "the principal only", ["the balance including interest", "the interest only", "the final amount"], "Principal only."),
  mc("Compound interest grows …", "exponentially", ["linearly", "not at all", "quadratically"], "Multiply by 1 + i."),
  tf("With simple interest the amount grows by the same number of dollars each year.", true, "Pr each year."),
  tf("Compound interest at 5% earns 5% of the original principal every year.", false, "5% of the current balance."),
  fill("The money first invested or borrowed is called the ____.", ["principal"], "Principal."),
  mc("The graph shows a simple-interest investment. What is the yearly interest?", "60 dollars", ["300 dollars", "1200 dollars", "5 dollars"], "Slope 60.", lin),
  num("For the graph shown, enter the annual rate in percent.", 5, "60/1200.", lin),
  num(S`Find the amount: 1200 dollars at $4\%$ simple interest for $3$ years.`, 1344, "1200(1.12)."),
];

export const M = [
  num(S`A loan of 2500 dollars costs 300 dollars in simple interest over $4$ years. Enter the rate in percent.`, 3, "300/(2500·4)."),
  num(S`How many years for 4000 dollars to earn 600 dollars at $2.5\%$ simple interest?`, 6, "600/100."),
  num(S`What principal earns 180 dollars of simple interest at $3\%$ in $2$ years?`, 3000, "180/0.06."),
  n2(S`Find the simple interest on 2600 dollars at $5\%$ for $18$ months.`, 2600 * 0.05 * 1.5, "t = 1.5."),
  n2(S`Find the compound interest on 3500 dollars at $6\%$ compounded annually for $5$ years.`, A(3500, 0.06, 5) - 3500, "A − P."),
  n2(S`Find the amount: 12000 dollars at $2.75\%$ compounded annually for $8$ years.`, A(12000, 0.0275, 8), "Calculator."),
  n2(S`How much more does 6000 dollars earn at $5\%$ compounded annually than at $5\%$ simple interest over $10$ years?`, A(6000, 0.05, 10) - 9000, "Compound − simple."),
  n2(S`For 1000 dollars at $9\%$ compounded annually, find the interest earned in year $5$ alone.`, A(1000, 0.09, 5) - A(1000, 0.09, 4), "A(5) − A(4)."),
  num(S`Year-by-year: 2000 dollars at $10\%$ compounded annually. Enter the balance after year $3$.`, 2662, "2000 × 1.331."),
  mc("The graph shows simple (green) and compound (violet) interest at 8% on 1000 dollars. Which is true?", "the compound curve pulls away over time", ["the line is always higher", "they never differ", "both are straight"], "Exponential vs linear.", two),
  n2("Using the graph's models, enter the compound amount minus the simple amount at t = 10.", A(1000, 0.08, 10) - 1800, "1000(1.08)¹⁰ − 1800.", two),
  ms("Select every TRUE statement.", ["I = Prt gives simple interest", "A = P(1 + i)ⁿ gives compound amounts", "simple interest graphs are curved", "compound interest earns interest on interest"], [0, 1, 3], "Simple is a line."),
  tf(S`At the same rate, compound interest always beats simple interest after one full year.`, false, "After exactly one year with annual compounding they are equal."),
  fill(S`In $I=Prt$, $t$ must be measured in ____ when $r$ is an annual rate.`, ["years"], "Years."),
  num(S`How many whole years until 1000 dollars first doubles at $12\%$ compounded annually?`, 7, "1.12⁶ ≈ 1.97; 1.12⁷ ≈ 2.21."),
  num(S`How many years until money doubles at $12\%$ simple interest? (decimal)`, 8.33, "1/0.12.", null, 0.011),
  n2(S`What simple rate (percent) gives the same amount as $6\%$ compounded annually after $2$ years?`, (1.06 ** 2 - 1) / 2 * 100, "(1.1236 − 1)/2."),
  num(S`Which earns more over $1$ year on 1000 dollars: $5\%$ simple or $5\%$ compounded annually? Enter the difference.`, 0, "Equal after one year."),
  n2(S`Find the amount: 750 dollars at $4.5\%$ compounded annually for $6$ years.`, A(750, 0.045, 6), "Calculator."),
  n2(S`A 3000 dollar loan charges $7\%$ compounded annually. How much is owed after $3$ years?`, A(3000, 0.07, 3), "3000(1.07)³."),
];
