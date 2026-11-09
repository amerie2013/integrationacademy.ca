// 8.1 Simple and Compound Interest — 20 hard questions
import { S, mc, ms, num, tf, n2, A, fDoc, P, firstN } from "./fk.mjs";
const g = (fns, view, step, points = []) => fDoc(fns, { view, step, points });

export const TOPIC = "8.1 Simple and Compound Interest";
export const Q = [
  num(S`Offer A pays $6\%$ simple interest; offer B pays $5\%$ compounded annually. For which first whole year is B's amount larger?`, firstN((n) => n > 0 && A(1, 0.05, n) > 1 + 0.06 * n), "Compare year by year.", g([{ f: (t) => 1 + 0.06 * t, color: "green" }, { f: (t) => 1.05 ** t, color: "violet" }], { xmin: 0, xmax: 14, ymin: 0.9, ymax: 2.1 }, { x: 1, y: 0.1 })),
  n2(S`2000 dollars at $4\%$ compounded annually for $3$ years, then the total at $6\%$ simple interest for $2$ years. Find the final amount.`, A(2000, 0.04, 3) * 1.12, "Compound, then simple."),
  num(S`How many whole years to triple at $10\%$ compounded annually?`, firstN((n) => 1.1 ** n >= 3), "1.1ⁿ ≥ 3."),
  num(S`How many years to triple at $10\%$ simple interest?`, 20, "1 + 0.1t = 3."),
  n2(S`A balance grows from 5000 dollars to 5832 dollars in $2$ years compounded annually. Find the rate (percent).`, (Math.sqrt(5832 / 5000) - 1) * 100, "√1.1664 − 1."),
  n2(S`The interest in year $1$ of a compound investment is 120 dollars and in year $2$ is 126 dollars. Find the rate (percent).`, 5, "126/120 = 1.05."),
  num(S`For that investment, find the principal.`, 2400, "120/0.05.", g([], { xmin: 0, xmax: 3, ymin: 0, ymax: 150 }, { x: 1, y: 20 }, [P(1, 120, "year 1: 120"), P(2, 126, "year 2: 126")])),
  mc("The graph shows two investments of 1000 dollars. Which describes the violet curve?", "compound interest at 7%", ["simple interest at 7%", "simple interest at 10%", "no interest"], "Curves upward through (10, 1967).", g([{ f: (t) => 1000 * 1.07 ** t, color: "violet" }, { f: (t) => 1000 + 70 * t, color: "green" }], { xmin: 0, xmax: 12, ymin: 900, ymax: 2400 }, { x: 1, y: 100 }, [P(10, 1967.15, "(10, 1967.15)")])),
  n2(S`What simple rate (percent) matches $8\%$ compounded annually over $5$ years?`, (1.08 ** 5 - 1) / 5 * 100, "(1.08⁵ − 1)/5."),
  ms("Select every TRUE statement about 1000 dollars at 5%.", ["simple: 1500 after 10 years", "compound annually: about 1628.89 after 10 years", "both give 1050 after 1 year", "simple earns more after 20 years"], [0, 1, 2], "Compound ≈ 2653.30 at 20 years."),
  tf(S`Doubling the time doubles the simple interest but more than doubles the compound interest.`, true, "Linear vs exponential."),
  n2(S`Find the interest earned in years $6$ through $10$ (inclusive) on 4000 dollars at $5\%$ compounded annually.`, A(4000, 0.05, 10) - A(4000, 0.05, 5), "A(10) − A(5)."),
  num(S`A friend lends 1000 dollars and wants 1150 dollars back in $3$ years. What simple rate (percent) is that?`, 5, "150/3000."),
  n2(S`For the same loan, what annually compounded rate gives 1150 in $3$ years (percent)?`, (1.15 ** (1 / 3) - 1) * 100, "1.15^(1/3) − 1."),
  n2(S`A deposit at $3\%$ compounded annually is worth 5000 dollars after $4$ years. What was deposited?`, 5000 / 1.03 ** 4, "5000 ÷ 1.03⁴."),
  num(S`Compound annual growth makes 800 dollars into 968 dollars in $2$ years. How much will it be in year $4$?`, 1171.28, "Ratio 1.21 per 2 years.", g([{ f: (t) => 800 * 1.1 ** t, color: "violet" }], { xmin: 0, xmax: 5, ymin: 700, ymax: 1300 }, { x: 1, y: 100 }, [P(0, 800, "(0, 800)"), P(2, 968, "(2, 968)")]), 0.011),
  n2(S`Find the amount after $25$ years for 1000 dollars at $6\%$ compounded annually.`, A(1000, 0.06, 25), "Calculator."),
  num(S`At $4\%$ simple interest, how many years until the interest equals the principal?`, 25, "0.04t = 1."),
  n2(S`Compound interest on 10000 dollars at $3\%$ compounded annually for $4$ years, minus simple interest for the same time.`, A(10000, 0.03, 4) - 10000 - 1200, "Difference."),
  num(S`What is the smallest whole rate (percent, compounded annually) that at least doubles money in $6$ years?`, firstN((r) => r > 0 && (1 + r / 100) ** 6 >= 2), "Try rates."),
];
